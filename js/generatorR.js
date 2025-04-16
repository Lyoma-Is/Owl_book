import generateTaskHTML from "./viewTaskR.js";
import {tasks} from "./viewTaskR.js";

// Функция для загрузки JSON
async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Ошибка загрузки JSON:', error);
        return null;
    }
}

// Функция выбора случайного элемента из массива
function getRandomItem(arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

// Главная функция генератора задач
async function generateRandomTasks() {
    const result = {};
    for (const key in tasks) {
        const data = await fetchJSON(tasks[key]);
        if (data) {
            result[key] = getRandomItem(data);
        } else {
            result[key] = null;
        }
    }
    return result;
}

// Функция для создания слайдера
function createSlider(tasksHTML) {
    let sliderContainer = document.querySelector('.task-generator');
    if (!sliderContainer) {
        console.error('Контейнер слайдера не найден');
        return null;
    }
    
    sliderContainer.innerHTML = '';
    
    const slider = document.createElement('div');
    slider.className = 'slider';

    const slides = [];
    const buttons = [];
    let currentSlide = 0;
    let resultsSlideIndex = -1; // Индекс слайда с результатами

    // Добавляем слайды
    tasksHTML.forEach((taskHTML, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = taskHTML;
        slider.appendChild(slide);
        slides.push(slide);
    });
    // Добавляем навигацию с кнопками номеров заданий
    const navigation = document.createElement('div');
    navigation.className = 'slider-navigation';
    
    // Создаем кнопки для каждого задания
    tasksHTML.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = `slider-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = index + 1;
        btn.addEventListener('click', () => goToSlide(index));
        buttons.push(btn);
        navigation.appendChild(btn);
    });
    
    function goToSlide(index) {
        if (currentSlide === index) return;
        
        if (slides[currentSlide] && buttons[currentSlide]) {
            slides[currentSlide].classList.remove('active');
            buttons[currentSlide].classList.remove('active');
        }
        
        currentSlide = index;
        
        if (slides[currentSlide] && buttons[currentSlide]) {
            slides[currentSlide].classList.add('active');
            buttons[currentSlide].classList.add('active');
        }
    }
    
    sliderContainer.appendChild(navigation);
    sliderContainer.appendChild(slider);
    
    // Возвращаем объект с методами управления слайдером
    return {
        goToSlide,
        updateResultsSlide: (html) => {
            // Если слайд с результатами уже существует - обновляем его
            if (resultsSlideIndex !== -1) {
                slides[resultsSlideIndex].innerHTML = html;
                return resultsSlideIndex;
            }
            
            // Иначе создаем новый слайд
            resultsSlideIndex = slides.length;
            const slide = document.createElement('div');
            slide.className = 'slide results-slide';
            slide.innerHTML = html;
            slider.appendChild(slide);
            slides.push(slide);
            
            // Добавляем кнопку "Итог" в навигацию
            const btn = document.createElement('button');
            btn.className = 'slider-btn';
            btn.textContent = 'Итог';
            btn.addEventListener('click', () => goToSlide(resultsSlideIndex));
            buttons.push(btn);
            navigation.appendChild(btn);
            
            return resultsSlideIndex;
        },
        getCurrentSlide: () => currentSlide
    };
}

async function displayTasks() {
    const generatorDiv = document.querySelector('.task-gen__block');
    if (!generatorDiv) {
        console.error('Элемент .task-gen__block не найден!');
        return;
    }

    const randomTasks = await generateRandomTasks();

    if (!randomTasks.one) {
        generatorDiv.innerHTML = '<p>Ошибка загрузки задач. Пожалуйста, попробуйте снова.</p>';
        return;
    }

    // Сохраняем правильные ответы для проверки
    const correctAnswers = {
        one: randomTasks.one.taskAnswer[0],
        two: randomTasks.two.taskAnswer[0],
        three: randomTasks.three.taskAnswer,
        four: randomTasks.four.taskAnswer[0],
        five: randomTasks.five.taskAnswer,
        six: randomTasks.six.taskAnswer,
        seven: randomTasks.seven.taskAnswer,
        eight: randomTasks.eight.taskAnswer,
        nine: randomTasks.nine.taskAnswer,
        ten: randomTasks.ten.taskAnswer[0]
    };
    //console.log(correctAnswers);

    // Генерируем HTML для всех задач
    const tasksHTML = [
        generateTaskHTML('one', randomTasks.one),
        generateTaskHTML('two', randomTasks.two),
        generateTaskHTML('three', randomTasks.three),
        generateTaskHTML('four', randomTasks.four),
        generateTaskHTML('five', randomTasks.five),
        generateTaskHTML('six', randomTasks.six),
        generateTaskHTML('seven', randomTasks.seven),
        generateTaskHTML('eight', randomTasks.eight),
        generateTaskHTML('nine', randomTasks.nine),
        generateTaskHTML('ten', randomTasks.ten)
    ].filter(html => html);

    // Очищаем контейнер перед созданием нового слайдера
    generatorDiv.innerHTML = '';

    // Создаем слайдер
    const slider = createSlider(tasksHTML);
    if (!slider) return;

    let button = document.querySelector('#button-finish');

    if (button) {
        button.addEventListener('click', function() {
            // Собираем все ответы со всех слайдов
            let inputs = document.querySelectorAll('.slide:not(.results-slide) #input_answer');
            let arrayInput = [];
            let arrayAnswer = [];
            let countResult = 0;
    
            // Проверяем каждый ответ
            inputs.forEach((input, index) => {
                const taskId = input.closest('.slide').getAttribute('data-task-id') || 
                              Object.keys(correctAnswers)[index];
                
                const correctAnswer = correctAnswers[taskId]?.toString().toUpperCase() || '';
                const userInput = input.value.toUpperCase().replaceAll(' ', '');
    
                input.classList.remove('input_answer-green', 'input_answer-red', 'input_answer');
    
                // Проверка ответа с учетом альтернативных вариантов
                let isCorrect = false;
                if (correctAnswer.includes(' | ')) {
                    const alternatives = correctAnswer.split(' | ').map(str => str.trim());
                    isCorrect = alternatives.includes(userInput);
                } else {
                    isCorrect = userInput === correctAnswer;
                }
    
                if (isCorrect) {
                    input.classList.add('input_answer-green');
                    countResult++;
                } else {
                    input.classList.add('input_answer-red');
                }
    
                arrayInput.push(userInput || '—');
                arrayAnswer.push(correctAnswer);
            });
    
            // Создаем HTML для слайда с результатами
            let resultsHTML = `
                <div id="answer_results">
                    <p class="centerResult">${getResultText(countResult, inputs.length)}</p>
                    ${createResultsTable(arrayInput, arrayAnswer)}
                </div>
            `;
    
            // Обновляем или создаем слайд с результатами
            const resultsIndex = slider.updateResultsSlide(resultsHTML);
            slider.goToSlide(resultsIndex);
    
            // Показываем блок с разбором
            let razOtv = document.querySelector('.details-raz_otv');
            if (razOtv) {
                razOtv.classList.add('details-raz_otv_active');
                razOtv.classList.remove('details-raz_otv');
            }
        });
    }
}

// Вспомогательная функция для создания текста результата
function getResultText(countResult, total) {
    if (countResult < 5) {
        return `Ваша оценка: 2 | Количество баллов: ${countResult} из ${total}`;
    } else if (countResult < 11) {
        return `Ваша оценка: 3 | Количество баллов: ${countResult} из ${total}`;
    } else if (countResult < 16) {
        return `Ваша оценка: 4 | Количество баллов: ${countResult} из ${total}`;
    } else {
        return `Ваша оценка: 5 | Количество баллов: ${countResult} из ${total}`;
    }
}

// Вспомогательная функция для создания таблицы результатов
function createResultsTable(arrayInput, arrayAnswer) {
    let tableHTML = `
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;"><tbody>
    `;

    for (let i = 0; i < arrayInput.length; i++) {
        const isCorrect = arrayAnswer[i].includes(' | ') 
            ? arrayAnswer[i].split(' | ').map(str => str.trim()).includes(arrayInput[i])
            : arrayInput[i] === arrayAnswer[i];

        const textColor = arrayInput[i] === "—" ? "" : isCorrect ? " #c0ffc0" : "#ffc0c0";

        tableHTML += `
            <tr class="answer-td">
                <td style="padding: 8px; width: 10%; border: 1px solid #000; border-right: 0;">${i + 1}</td>
                <td style="padding: 8px; width: 30%; border: 1px solid #000; border-left: 0; border-right: 0; background-color: ${textColor};">${arrayInput[i]}</td>
                <td style="padding: 8px; width: 30%; border: 1px solid #000; border-left: 0; ">${arrayAnswer[i]}</td>
            </tr>
        `;
    }

    tableHTML += `</tbody></table>`;
    return tableHTML;
}

// Добавляем CSS для слайдера
function addSliderStyles() {
    const style = document.createElement('style');
    style.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .task-gen__block {
             padding: 10px 0;
        }
        .slider {
            display: flex;
            transition: transform 0.5s ease;        
            padding: 5px 0;
            font-size: 25px; 
            line-height: 2.5rem;
        }
        .slide {
            min-width: 100%;
            
            box-sizing: border-box;
            display: none;
        }
        .slide.active {
            display: block;
            padding: 5px 0;
            
        }
        .slider-navigation {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
            padding: 20px 10px;
            border-bottom: 3px solid  rgb(233, 199, 105);
  
        }
        .slider-btn {
            display: block;
            width: 65px;
            height: 65px;
            background: #f0f0f0;
            border: 1px solid #ddd;
            border-radius: 10px;
            cursor: pointer;
            font-size: 25px;
            text-align: center;
            transition: all 0.3s ease;
            
           
        }
        .slider-btn:hover {
            background: #e0e0e0;
        }
        .slider-btn.active {
            background: rgb(233, 199, 105);
            color: black;
            border-color: rgb(233, 199, 105);
        }
    `;
    document.head.appendChild(style);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    addSliderStyles();
    displayTasks();
});




// import generateTaskHTML from "./viewTaskR.js";
// import {tasks} from "./viewTaskR.js";

// // Функция для загрузки JSON
// async function fetchJSON(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}`);
//         return await response.json();
//     } catch (error) {
//         console.error('Ошибка загрузки JSON:', error);
//         return null;
//     }
// }

// // Функция выбора случайного элемента из массива
// function getRandomItem(arr) {
//     if (!arr || arr.length === 0) return null;
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// // Главная функция генератора задач
// async function generateRandomTasks() {
//     const result = {};
//     for (const key in tasks) {
//         const data = await fetchJSON(tasks[key]);
//         if (data) {
//             result[key] = getRandomItem(data);
//         } else {
//             result[key] = null;
//         }
//     }
//     return result;
// }

// // Функция для создания слайдера
// function createSlider(tasksHTML) {
    
//     let sliderContainer = document.querySelector('.task-generator');
//     const slider = document.createElement('div');
//     slider.className = 'slider';

//     // Добавляем слайды
//     tasksHTML.forEach((taskHTML, index) => {
//         const slide = document.createElement('div');
//         slide.className = `slide ${index === 0 ? 'active' : ''}`;
//         slide.innerHTML = taskHTML;
//         slider.appendChild(slide);
//     });
    
//     // Добавляем навигацию с кнопками номеров заданий
//     const navigation = document.createElement('div');
//     navigation.className = 'slider-navigation';
    
//     // Создаем кнопки для каждого задания
//     tasksHTML.forEach((_, index) => {
//         const btn = document.createElement('button');
//         btn.className = `slider-btn ${index === 0 ? 'active' : ''}`;
//         btn.textContent = index + 1;
//         btn.addEventListener('click', () => goToSlide(index));
//         navigation.appendChild(btn);
//     });
    
//     sliderContainer.appendChild(navigation);
//     sliderContainer.appendChild(slider);
   
    
//     // Функция для переключения слайдов
//     let currentSlide = 0;
//     const slides = slider.querySelectorAll('.slide');
//     const buttons = navigation.querySelectorAll('.slider-btn');
    
//     function goToSlide(index) {
//         slides[currentSlide].classList.remove('active');
//         buttons[currentSlide].classList.remove('active');
        
//         currentSlide = index;
        
//         slides[currentSlide].classList.add('active');
//         buttons[currentSlide].classList.add('active');
//     }
    
//     return sliderContainer;
// }

// // Функция для отображения задач в слайдере
// async function displayTasks() {
//     const generatorDiv = document.querySelector('.task-gen__block');
//     if (!generatorDiv) {
//         console.error('Элемент .task-gen__block не найден!');
//         return;
//     }

//     const randomTasks = await generateRandomTasks();

//     if (!randomTasks.one) {
//         generatorDiv.innerHTML = '<p>Ошибка загрузки задач. Пожалуйста, попробуйте снова.</p>';
//         return;
//     }
//         // Сохраняем правильные ответы для проверки
//         const correctAnswers = {
//             one: randomTasks.one.taskAnswer[0],
//             two: randomTasks.two.taskAnswer[0],
//             three: randomTasks.three.taskAnswer,
//             four: randomTasks.four.taskAnswer[0],
//             five: randomTasks.five.taskAnswer,
//             six: randomTasks.six.taskAnswer,
//             seven: randomTasks.seven.taskAnswer,
//             eight: randomTasks.eight.taskAnswer,
//             nine: randomTasks.nine.taskAnswer,
//             ten: randomTasks.ten.taskAnswer[0]
//     };
//     console.log(correctAnswers);
//     // Генерируем HTML для всех задач
//     const tasksHTML = [
//         generateTaskHTML('one', randomTasks.one),
//         generateTaskHTML('two', randomTasks.two),
//         generateTaskHTML('three', randomTasks.three),
//         generateTaskHTML('four', randomTasks.four),
//         generateTaskHTML('five', randomTasks.five),
//         generateTaskHTML('six', randomTasks.six),
//         generateTaskHTML('seven', randomTasks.seven),
//         generateTaskHTML('eight', randomTasks.eight),
//         generateTaskHTML('nine', randomTasks.nine),
//         generateTaskHTML('ten', randomTasks.ten)
//     ].filter(html => html); // Фильтруем пустые задачи

//     // Создаем слайдер и добавляем его на страницу
//     const slider = createSlider(tasksHTML);
//     generatorDiv.innerHTML = ''; // Очищаем контейнер
   
//    // В функции displayTasks(), после создания слайдера:

// let button = document.querySelector('#button');

// if (button) {
//     button.addEventListener('click', function() {
//         // Собираем все ответы со всех слайдов
//         let inputs = document.querySelectorAll('.slide #input_answer');
//         let arrayInput = [];
//         let arrayAnswer = [];
//         let countResult = 0;

//         // Создаем контейнер для результатов, если его нет
//         let ansRes = document.getElementById("answer_results");
//         if (!ansRes) {
//             ansRes = document.createElement("div");
//             ansRes.id = "answer_results";
//             document.querySelector('.task-generator').appendChild(ansRes);
//         }
        
//         // Очищаем предыдущие результаты
//         ansRes.innerHTML = '';

//         // Проверяем каждый ответ
//         inputs.forEach((input, index) => {
//             // Получаем ID задачи из data-атрибута или другим способом
//             const taskId = input.closest('.slide').getAttribute('data-task-id') || 
//                           Object.keys(correctAnswers)[index];
            
//             const correctAnswer = correctAnswers[taskId]?.toString().toUpperCase() || '';
//             const userInput = input.value.toUpperCase().replaceAll(' ', '');

//             input.classList.remove('input_answer-green', 'input_answer-red', 'input_answer');

//             // Проверка ответа с учетом альтернативных вариантов
//             let isCorrect = false;
//             if (correctAnswer.includes(' | ')) {
//                 const alternatives = correctAnswer.split(' | ').map(str => str.trim());
//                 isCorrect = alternatives.includes(userInput);
//             } else {
//                 isCorrect = userInput === correctAnswer;
//             }

//             if (isCorrect) {
//                 input.classList.add('input_answer-green');
//                 countResult++;
//             } else {
//                 input.classList.add('input_answer-red');
//             }

//             arrayInput.push(userInput || '—');
//             arrayAnswer.push(correctAnswer);
//         });

//         // Создание текста с оценкой
//         let pResult = document.createElement('p');
//         pResult.classList.add("centerResult");

//         if (countResult < 5) {
//             pResult.textContent = `Ваша оценка: 2 | Количество баллов: ${countResult} из ${inputs.length}`;
//         } else if (countResult < 11) {
//             pResult.textContent = `Ваша оценка: 3 | Количество баллов: ${countResult} из ${inputs.length}`;
//         } else if (countResult < 16) {
//             pResult.textContent = `Ваша оценка: 4 | Количество баллов: ${countResult} из ${inputs.length}`;
//         } else {
//             pResult.textContent = `Ваша оценка: 5 | Количество баллов: ${countResult} из ${inputs.length}`;
//         }

//         // Создание таблицы с ответами
//         let table = document.createElement("table");
//         table.style.width = '100%';
//         table.style.borderCollapse = 'collapse';
//         table.style.marginTop = '15px';

//         for (let i = 0; i < inputs.length; i++) {
//             let row = document.createElement("tr");

//             let cell1 = document.createElement("td");
//             cell1.textContent = i + 1;
//             cell1.style.padding = '8px';
//             cell1.style.borderBottom = '1px solid #ddd';
//             row.appendChild(cell1);

//             let cell2 = document.createElement("td");
//             cell2.textContent = arrayInput[i];
//             cell2.style.padding = '8px';
//             cell2.style.borderBottom = '1px solid #ddd';
            
//             if (arrayAnswer[i].includes(' | ')) {
//                 let [alt1, alt2] = arrayAnswer[i].split(' | ').map(str => str.trim());
//                 if (arrayInput[i] === alt1 || arrayInput[i] === alt2) {
//                     cell2.style.color = 'green';
//                     cell2.style.fontWeight = 'bold';
//                 } else if (arrayInput[i] !== "—") {
//                     cell2.style.color = 'red';
//                 }
//             } else {
//                 if (arrayInput[i] === arrayAnswer[i]) {
//                     cell2.style.color = 'green';
//                     cell2.style.fontWeight = 'bold';
//                 } else if (arrayInput[i] !== "—") {
//                     cell2.style.color = 'red';
//                 }
//             }
//             row.appendChild(cell2);

//             let cell3 = document.createElement("td");
//             cell3.textContent = arrayAnswer[i];
//             cell3.style.padding = '8px';
//             cell3.style.borderBottom = '1px solid #ddd';
//             row.appendChild(cell3);

//             table.appendChild(row);
//         }

//         ansRes.appendChild(pResult);
//         ansRes.appendChild(table);

//         // Показываем блок с разбором
//         let razOtv = document.querySelector('.details-raz_otv');
//         if (razOtv) {
//             razOtv.classList.add('details-raz_otv_active');
//             razOtv.classList.remove('details-raz_otv');
//         }
//     });
// }

// }

// // Добавляем CSS для слайдера
// function addSliderStyles() {
//     const style = document.createElement('style');
//     style.textContent = `
//         *{
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }
//         .task-gen__block {
//              padding: 10px 0;
//         }
//         .slider {
//             display: flex;
//             transition: transform 0.5s ease;  
            
//             padding: 5px 0;
//             font-size: 25px; 
//             line-height: 2.5rem;
//         }
//         .slide {
//             min-width: 100%;
            
//             box-sizing: border-box;
//             display: none;
//         }
//         .slide.active {
//             display: block;
//             padding: 5px 0;
            
//         }
//         .slider-navigation {
//             display: flex;
//             justify-content: center;
//             flex-wrap: wrap;
//             gap: 30px;
//             padding: 0 10px 20px 10px;
//             border-bottom: 3px solid  rgb(233, 199, 105);
  
//         }
//         .slider-btn {
//             display: block;
//             width: 50px;
//             height: 50px;
//             background: #f0f0f0;
//             border: 1px solid #ddd;
//             border-radius: 10px;
//             cursor: pointer;
//             font-size: 20px;
//             text-align: center;
//             transition: all 0.3s ease;
            
           
//         }
//         .slider-btn:hover {
//             background: #e0e0e0;
//         }
//         .slider-btn.active {
//             background: rgb(233, 199, 105);
//             color: black;
//             border-color: rgb(233, 199, 105);
//         }
//     `;
//     document.head.appendChild(style);
// }

// // Инициализация при загрузке страницы
// document.addEventListener('DOMContentLoaded', () => {
//     addSliderStyles();
//     displayTasks();
// });



