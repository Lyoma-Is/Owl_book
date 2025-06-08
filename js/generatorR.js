import generateTaskHTML from "./viewTask.js";
import {tasks} from "./viewTask.js";

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
        if (index+1 === 13){
            btn.textContent = "13.1"
        }
        if (index+1 === 14){
            btn.textContent = "13.2"
        }
        if (index+1 > 14){
            btn.textContent = index
        }
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
       // console.error('Элемент .task-gen__block не найден!');
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
        ten: randomTasks.ten.taskAnswer,
        eleven: randomTasks.eleven.taskAnswer,
        twelve: randomTasks.twelve.taskAnswer
    };
    //console.log(correctAnswers);

    // Генерируем HTML для всех задач
    const tasksHTML = [
        generateTaskHTML('one', randomTasks.one, false),
        generateTaskHTML('two', randomTasks.two, false),
        generateTaskHTML('three', randomTasks.three, false),
        generateTaskHTML('four', randomTasks.four, false),
        generateTaskHTML('five', randomTasks.five, false),
        generateTaskHTML('six', randomTasks.six, false),
        generateTaskHTML('seven', randomTasks.seven, false),
        generateTaskHTML('eight', randomTasks.eight, false),
        generateTaskHTML('nine', randomTasks.nine, false),
        generateTaskHTML('ten', randomTasks.ten, false),
        generateTaskHTML('eleven', randomTasks.eleven, false),
        generateTaskHTML('twelve', randomTasks.twelve, false),
        generateTaskHTML('thirteen', randomTasks.thirteen),
        generateTaskHTML('thirteentwo', randomTasks.thirteentwo),
        generateTaskHTML('fourteen', randomTasks.fourteen)
    ].filter(html => html);

    // Очищаем контейнер перед созданием нового слайдера
    generatorDiv.innerHTML = '';

    // Создаем слайдер
    const slider = createSlider(tasksHTML);
    if (!slider) return;

    let button = document.querySelector('#button-finish');
    document.querySelectorAll('.resh').forEach(el => {el.classList.add('reshenie');});
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

                let reshOtv = document.querySelector('.reshenie');
                if (reshOtv){  
                    reshOtv.classList.remove('reshenie');
                }
                
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
            if (razOtv) {razOtv.classList.remove('details-raz_otv'); }
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








