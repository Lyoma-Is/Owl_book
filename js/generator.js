// import generateTaskHTML from "./viewTask.js";
// import {tasks} from "./viewTask.js";
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

// // Функция для отображения задач в HTML
// async function displayTasks() {
//     const generatorDiv = document.querySelector('.task-numbers__block');
//     if (!generatorDiv) {
//         console.error('Элемент .generator не найден!');
//         return;
//     }

//     const randomTasks = await generateRandomTasks();

//     if (!randomTasks.one ) {
//         generatorDiv.innerHTML = '<p>Ошибка загрузки задач. Пожалуйста, попробуйте снова.</p>';
//         return;
//     }

//     generatorDiv.innerHTML = `
//             ${generateTaskHTML('one', randomTasks.one)}
//             ${generateTaskHTML('two', randomTasks.two)}
//             ${generateTaskHTML('three', randomTasks.three)}
//             ${generateTaskHTML('four', randomTasks.four)}
//             ${generateTaskHTML('five', randomTasks.five)}
//             ${generateTaskHTML('six', randomTasks.six)}
//             ${generateTaskHTML('seven', randomTasks.seven)}
//             ${generateTaskHTML('eight', randomTasks.eight)}
//             ${generateTaskHTML('nine', randomTasks.nine)}
//             ${generateTaskHTML('ten', randomTasks.ten)}
//             ${generateTaskHTML('eleven', randomTasks.eleven)}
//             ${generateTaskHTML('twelve', randomTasks.twelve)}
//             ${generateTaskHTML('thirteen', randomTasks.thirteen)}
       
//     `;
    
// }


// // Вызов функции для отображения задач
// displayTasks();









// import generateTaskHTML from "./viewTask.js";
// import {tasks} from "./viewTask.js";

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

// // Функция для создания кнопки печати
// function createPrintButton() {
//     const printBtn = document.createElement('button');
//     printBtn.id = 'print-btn';
//     printBtn.textContent = 'Печать заданий';
//     printBtn.style.cssText = `
//         margin: 20px auto;
//         display: block;
//         padding: 10px 20px;
//         background-color: #4CAF50;
//         color: white;
//         border: none;
//         border-radius: 4px;
//         cursor: pointer;
//         font-size: 16px;
//     `;
    
//     printBtn.addEventListener('click', printTasks);
    
//     // Добавляем кнопку перед блоком с заданиями
//     const generatorDiv = document.querySelector('.task-numbers__block');
//     if (generatorDiv && generatorDiv.parentNode) {
//         generatorDiv.parentNode.insertBefore(printBtn, generatorDiv);
//     }
// }

// // Функция для печати заданий
// function printTasks() {
//     const tasksContainer = document.querySelector('.task-numbers__block');
//     if (!tasksContainer) return;
    
//     const printWindow = window.open('', '_blank');
    
//     // Клонируем содержимое контейнера с заданиями
//     const contentClone = tasksContainer.cloneNode(true);
    
//     // Удаляем ненужные элементы для печати
//     const inputs = contentClone.querySelectorAll('input');
//     inputs.forEach(input => {
//         const answerSpace = document.createElement('span');
//         answerSpace.style.cssText = `
//             border-bottom: 1px solid #000;
//             min-width: 200px;
//             display: inline-block;
//             margin-left: 10px;
//         `;
//         input.parentNode.replaceChild(answerSpace, input);
//     });
    
//     // Создаем HTML для печати
//     const printHTML = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>Задания для печати</title>
//             <style>
//                 body { font-family: Arial, sans-serif; padding: 20px; }
//                 .print-task { margin-bottom: 30px; page-break-after: always; }
//                 .print-task:last-child { page-break-after: auto; }
//                 .task-number { font-weight: bold; margin-bottom: 10px; }
//                 .task-text { margin-bottom: 15px; }
//                 .task-image { max-width: 100%; margin-bottom: 15px; }
//             </style>
//         </head>
//         <body>
//             <h1 style="text-align: center; margin-bottom: 30px;">Задания для печати</h1>
//             ${contentClone.innerHTML}
//         </body>
//         </html>
//     `;
    
//     printWindow.document.write(printHTML);
//     printWindow.document.close();
    
//     // Даем время на загрузку контента перед печатью
//     setTimeout(() => {
//         printWindow.print();
//     }, 500);
// }

// // Функция для отображения задач в HTML
// async function displayTasks() {
//     const generatorDiv = document.querySelector('.task-numbers__block');
//     if (!generatorDiv) {
//         console.error('Элемент .generator не найден!');
//         return;
//     }

//     const randomTasks = await generateRandomTasks();

//     if (!randomTasks.one) {
//         generatorDiv.innerHTML = '<p>Ошибка загрузки задач. Пожалуйста, попробуйте снова.</p>';
//         return;
//     }

//     generatorDiv.innerHTML = `
//             ${generateTaskHTML('one', randomTasks.one)}
//             ${generateTaskHTML('two', randomTasks.two)}
//             ${generateTaskHTML('three', randomTasks.three)}
//             ${generateTaskHTML('four', randomTasks.four)}
//             ${generateTaskHTML('five', randomTasks.five)}
//             ${generateTaskHTML('six', randomTasks.six)}
//             ${generateTaskHTML('seven', randomTasks.seven)}
//             ${generateTaskHTML('eight', randomTasks.eight)}
//             ${generateTaskHTML('nine', randomTasks.nine)}
//             ${generateTaskHTML('ten', randomTasks.ten)}
//             ${generateTaskHTML('eleven', randomTasks.eleven)}
//             ${generateTaskHTML('twelve', randomTasks.twelve)}
//             ${generateTaskHTML('thirteen', randomTasks.thirteen)}
//     `;
    
//     // Создаем кнопку печати после загрузки заданий
//     createPrintButton();
// }

// // Вызов функции для отображения задач
// document.addEventListener('DOMContentLoaded', displayTasks);







// import generateTaskHTML from "./viewTask.js";
// import {tasks} from "./viewTask.js";

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

// // Функция для создания кнопки печати
// function createPrintButton(correctAnswers) {
//     const printBtn = document.createElement('button');
//     printBtn.id = 'print-btn';
//     printBtn.textContent = 'Печать заданий';
//     printBtn.style.cssText = `
//         margin: 20px auto;
//         display: block;
//         padding: 10px 20px;
//         background-color: #4CAF50;
//         color: white;
//         border: none;
//         border-radius: 4px;
//         cursor: pointer;
//         font-size: 16px;
//     `;
    
//     printBtn.addEventListener('click', () => printTasks(correctAnswers));
    
//     const generatorDiv = document.querySelector('.task-numbers__block');
//     if (generatorDiv && generatorDiv.parentNode) {
//         generatorDiv.parentNode.insertBefore(printBtn, generatorDiv);
//     }
// }

// // Функция для печати заданий с сохранением стилей и ответами
// function printTasks(correctAnswers) {
//     const tasksContainer = document.querySelector('.task-numbers__block');
//     if (!tasksContainer) return;
    
//     const printWindow = window.open('', '_blank');
    
//     // Клонируем содержимое контейнера с заданиями
//     const contentClone = tasksContainer.cloneNode(true);
    
//     // Получаем все стили из текущего документа
//     const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
//         .map(style => style.outerHTML)
//         .join('\n');
    
//     // Удаляем ненужные элементы для печати
//     const inputs = contentClone.querySelectorAll('input');
//     inputs.forEach(input => {
//         const answerSpace = document.createElement('span');
//         answerSpace.style.cssText = `
//             border-bottom: 1px solid #000;
//             min-width: 200px;
//             display: inline-block;
//             margin-left: 10px;
//         `;
//         input.parentNode.replaceChild(answerSpace, input);
//     });
    
//     // Создаем раздел с ответами
//     const answersHTML = createAnswersSection(correctAnswers);
    
//     // Создаем HTML для печати
//     const printHTML = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>Задания для печати</title>
//             ${styles}
//             <style>
//                 @media print {
//                     body { font-family: Arial, sans-serif; padding: 20px; }
//                     .print-task { margin-bottom: 30px; page-break-after: avoid; }
//                     .task-number { font-weight: bold; margin-bottom: 10px; }
//                     .answers-section { 
//                         margin-top: 50px; 
//                         page-break-before: always;
//                     }
//                     .answers-title {
//                         font-size: 18px;
//                         font-weight: bold;
//                         margin-bottom: 20px;
//                         text-align: center;
//                     }
//                     .answer-item {
//                         margin-bottom: 15px;
//                     }
//                     .task-image { max-width: 100%; margin-bottom: 15px; }
//                 }
//             </style>
//         </head>
//         <body>
//             <h1 style="text-align: center; margin-bottom: 30px;">Задания для печати</h1>
//             ${contentClone.innerHTML}
//             <div class="answers-section">
//                 <div class="answers-title">Ответы к заданиям</div>
//                 ${answersHTML}
//             </div>
//         </body>
//         </html>
//     `;
    
//     printWindow.document.write(printHTML);
//     printWindow.document.close();
    
//     setTimeout(() => {
//         printWindow.print();
//     }, 500);
// }

// // Функция для создания раздела с ответами
// function createAnswersSection(correctAnswers) {
//     let answersHTML = '';
//     for (const [taskId, answer] of Object.entries(correctAnswers)) {
//         const taskNumber = getTaskNumber(taskId);
//         answersHTML += `
//             <div class="answer-item">
//                 <strong>Задание ${taskNumber}:</strong> ${Array.isArray(answer) ? answer.join(', ') : answer}
//             </div>
//         `;
//     }
//     return answersHTML;
// }

// // Функция для преобразования ID задания в номер
// function getTaskNumber(taskId) {
//     const taskMap = {
//         'one': '1',
//         'two': '2',
//         'three': '3',
//         'four': '4',
//         'five': '5',
//         'six': '6',
//         'seven': '7',
//         'eight': '8',
//         'nine': '9',
//         'ten': '10',
//         'eleven': '11',
//         'twelve': '12',
//         'thirteen': '13'
//     };
//     return taskMap[taskId] || taskId;
// }

// // Функция для отображения задач в HTML
// async function displayTasks() {
//     const generatorDiv = document.querySelector('.task-numbers__block');
//     if (!generatorDiv) {
//         console.error('Элемент .generator не найден!');
//         return;
//     }

//     const randomTasks = await generateRandomTasks();

//     if (!randomTasks.one) {
//         generatorDiv.innerHTML = '<p>Ошибка загрузки задач. Пожалуйста, попробуйте снова.</p>';
//         return;
//     }

//     // Сохраняем правильные ответы
//     const correctAnswers = {
//         one: randomTasks.one.taskAnswer,
//         two: randomTasks.two.taskAnswer,
//         three: randomTasks.three.taskAnswer,
//         four: randomTasks.four.taskAnswer,
//         five: randomTasks.five.taskAnswer,
//         six: randomTasks.six.taskAnswer,
//         seven: randomTasks.seven.taskAnswer,
//         eight: randomTasks.eight.taskAnswer,
//         nine: randomTasks.nine.taskAnswer,
//         ten: randomTasks.ten.taskAnswer,
//         eleven: randomTasks.eleven.taskAnswer,
//         twelve: randomTasks.twelve.taskAnswer,
//         thirteen: randomTasks.thirteen.taskAnswer
//     };

//     generatorDiv.innerHTML = `
//             ${generateTaskHTML('one', randomTasks.one, false)}
//             ${generateTaskHTML('two', randomTasks.two, false)}
//             ${generateTaskHTML('three', randomTasks.three, false)}
//             ${generateTaskHTML('four', randomTasks.four, false)}
//             ${generateTaskHTML('five', randomTasks.five, false)}
//             ${generateTaskHTML('six', randomTasks.six, false)}
//             ${generateTaskHTML('seven', randomTasks.seven, false)}
//             ${generateTaskHTML('eight', randomTasks.eight, false)}
//             ${generateTaskHTML('nine', randomTasks.nine, false)}
//             ${generateTaskHTML('ten', randomTasks.ten, false)}
//             ${generateTaskHTML('eleven', randomTasks.eleven, false)}
//             ${generateTaskHTML('twelve', randomTasks.twelve, false)}
//             ${generateTaskHTML('thirteen', randomTasks.thirteen, false)}
//     `;
    
//     // Создаем кнопку печати с передачей правильных ответов
//     createPrintButton(correctAnswers);
// }

// // Вызов функции для отображения задач
// document.addEventListener('DOMContentLoaded', displayTasks);










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

// Функция для создания кнопки печати
function createPrintButton(correctAnswers) {
    const printBtn = document.createElement('button');
    printBtn.id = 'print-btn';
    printBtn.textContent = 'Печать заданий';
    printBtn.style.cssText = `
        margin: 20px auto;
        display: block;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    `;
    
    printBtn.addEventListener('click', () => printTasks(correctAnswers));
    
    const generatorDiv = document.querySelector('.task-numbers__block');
    if (generatorDiv && generatorDiv.parentNode) {
        generatorDiv.parentNode.insertBefore(printBtn, generatorDiv);
    }
}

// Функция для печати заданий с полным сохранением стилей
function printTasks(correctAnswers) {
    const tasksContainer = document.querySelector('.task-numbers__block');
    if (!tasksContainer) return;
    
    const printWindow = window.open('', '_blank');
    
    // Клонируем содержимое контейнера с заданиями
    const contentClone = tasksContainer.cloneNode(true);
    
    // Получаем ВСЕ стили из документа
    const allStyles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
        .map(style => style.outerHTML)
        .join('\n');
    
    // Удаляем/скрываем ненужные элементы для печати
    const elementsToHide = contentClone.querySelectorAll(
        '.task-number, .solution, .resh, .details-raz_otv, .download-btn'
    );
    elementsToHide.forEach(el => el.remove());
    
    // Заменяем инпуты на подчеркнутые места для ответов
    const inputs = contentClone.querySelectorAll('input');
    inputs.forEach(input => {
        const answerSpace = document.createElement('span');
        answerSpace.style.cssText = `
            border-bottom: 1px solid #000;
            min-width: 200px;
            display: inline-block;
            margin-left: 10px;
            height: 1.2em;
        `;
        input.parentNode.replaceChild(answerSpace, input);
    });
    
    // Создаем раздел с ответами
    const answersHTML = createAnswersSection(correctAnswers);
    
    // Создаем HTML для печати
    const printHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            ${allStyles}
            <style>
                @media print {
                    body { 
                        font-family: Arial, sans-serif; 
                        padding: 20px; 
                        font-size: 14pt;
                        line-height: 1.4;
                    }
                    .task-container {
                        margin-bottom: 30px; 
                        page-break-inside: avoid;
                    }
                    .answers-section { 
                        margin-top: 50px; 
                        page-break-before: always;
                    }
                    .answers-title {
                        font-size: 18pt;
                        font-weight: bold;
                        margin-bottom: 20px;
                        text-align: center;
                    }
                    .answer-item {
                        margin-bottom: 15px;
                        font-size: 14pt;
                    }
                    table {
                        border-collapse: collapse;
                        width: 100%;
                        margin: 15px 0;
                    }
                    table, th, td {
                        border: 1px solid black;
                    }
                    th, td {
                        padding: 8px;
                        text-align: left;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                        margin: 10px 0;
                    }
                    .task-number, .download-btn {
                        display: none !important;
                    }
                }
                @page {
                    size: A4;
                    margin: 2cm;
                }
            </style>
        </head>
        <body>
            <h1 style="text-align: center; margin-bottom: 30px;">Задания для печати</h1>
            ${contentClone.innerHTML}
            <div class="answers-section">
                <div class="answers-title">Ответы к заданиям</div>
                ${answersHTML}
            </div>
        </body>
        </html>
    `;
    
    printWindow.document.write(printHTML);
    printWindow.document.close();
    
    setTimeout(() => {
        printWindow.print();
    }, 1000);
}

// Функция для создания раздела с ответами
function createAnswersSection(correctAnswers) {
    let answersHTML = '';
    for (const [taskId, answer] of Object.entries(correctAnswers)) {
        const taskNumber = getTaskNumber(taskId);
        answersHTML += `
            <div class="answer-item">
                <strong>${taskNumber}:</strong> ${formatAnswer(answer)}
            </div>
        `;
    }
    return answersHTML;
}

// Форматирование ответа (для массивов и альтернативных вариантов)
function formatAnswer(answer) {
    if (Array.isArray(answer)) {
        return answer.join(', ');
    }
    if (typeof answer === 'string' && answer.includes(' | ')) {
        return answer.split(' | ').join(' или ');
    }
    return answer;
}

// Функция для преобразования ID задания в номер
function getTaskNumber(taskId) {
    const taskMap = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9',
        'ten': '10',
        'eleven': '11',
        'twelve': '12',
        'thirteen': '13'
    };
    return taskMap[taskId] || taskId;
}

// Функция для отображения задач в HTML
async function displayTasks() {
    const generatorDiv = document.querySelector('.task-numbers__block');
    if (!generatorDiv) {
        console.error('Элемент .generator не найден!');
        return;
    }

    const randomTasks = await generateRandomTasks();

    if (!randomTasks.one) {
        generatorDiv.innerHTML = '<p>Ошибка загрузки задач. Пожалуйста, попробуйте снова.</p>';
        return;
    }

    // Сохраняем правильные ответы
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
        twelve: randomTasks.twelve.taskAnswer,
        thirteen: randomTasks.thirteen.taskAnswer
    };

    generatorDiv.innerHTML = `
            ${generateTaskHTML('one', randomTasks.one, false)}
            ${generateTaskHTML('two', randomTasks.two, false)}
            ${generateTaskHTML('three', randomTasks.three, false)}
            ${generateTaskHTML('four', randomTasks.four, false)}
            ${generateTaskHTML('five', randomTasks.five, false)}
            ${generateTaskHTML('six', randomTasks.six, false)}
            ${generateTaskHTML('seven', randomTasks.seven, false)}
            ${generateTaskHTML('eight', randomTasks.eight, false)}
            ${generateTaskHTML('nine', randomTasks.nine, false)}
            ${generateTaskHTML('ten', randomTasks.ten, false)}
            ${generateTaskHTML('eleven', randomTasks.eleven, false)}
            ${generateTaskHTML('twelve', randomTasks.twelve, false)}
            ${generateTaskHTML('thirteen', randomTasks.thirteen, false)}
    `;
    
    // Создаем кнопку печати с передачей правильных ответов
    createPrintButton(correctAnswers);
}

// Вызов функции для отображения задач
document.addEventListener('DOMContentLoaded', displayTasks);