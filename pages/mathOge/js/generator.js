
// Импорт функций и данных
import generateTaskHTML from "./viewTask.js";
import { tasks } from "./viewTask.js";

async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка загрузки JSON:', error);
        return null;
    }
}

function getRandomItem(arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

async function generateRandomTasks() {
    const result = {};
    
    for (const key in tasks) {
        const data = await fetchJSON(tasks[key]);
        result[key] = data ? getRandomItem(data) : null;
    }
    
    return result;
}

function createPrintButton() {
    const printBtn = document.createElement('button');
    printBtn.id = 'print-btn';
    printBtn.textContent = 'Печать варианта';
    
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
    
    printBtn.addEventListener('click', () => {
        // Получаем все текущие стили из документа
        const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
            .map(el => el.outerHTML)
            .join('\n');
        
        // Генерируем задачи
        generateRandomTasks().then(randomTasks => {
            if (!randomTasks.one) return;
            
            const correctAnswers = {
                one: randomTasks.one.taskAnswer,
                two: randomTasks.two.taskAnswer,
                three: randomTasks.three.taskAnswer,
                four: randomTasks.four.taskAnswer,
                five: randomTasks.five.taskAnswer,
                six: randomTasks.six.taskAnswer,
                seven: randomTasks.seven.taskAnswer,
                eight: randomTasks.eight.taskAnswer,
                nine: randomTasks.nine.taskAnswer,
                ten: randomTasks.ten.taskAnswer,
                eleven: randomTasks.eleven.taskAnswer,
                twelve: randomTasks.twelve.taskAnswer
            };
            
            // Открываем страницу печати
            openPrintPage(randomTasks, correctAnswers, styles);
        });
    });
    
    const generatorDiv = document.querySelector('.task-numbers__block');
    if (generatorDiv?.parentNode) {
        generatorDiv.parentNode.insertBefore(printBtn, generatorDiv);
    }
}

function openPrintPage(randomTasks, correctAnswers, styles) {
    const printWindow = window.open('', '_blank');
    
    const tasksHTML = `
        ${generateTaskHTML('one', randomTasks.one)}
        ${generateTaskHTML('two', randomTasks.two)}
        ${generateTaskHTML('three', randomTasks.three)}
        ${generateTaskHTML('four', randomTasks.four)}
        ${generateTaskHTML('five', randomTasks.five)}
        ${generateTaskHTML('six', randomTasks.six)}
        ${generateTaskHTML('seven', randomTasks.seven)}
        ${generateTaskHTML('eight', randomTasks.eight)}
        ${generateTaskHTML('nine', randomTasks.nine)}
        ${generateTaskHTML('ten', randomTasks.ten)}
        ${generateTaskHTML('eleven', randomTasks.eleven)}
        ${generateTaskHTML('twelve', randomTasks.twelve)}
        ${generateTaskHTML('thirteen', randomTasks.thirteen)}
        ${generateTaskHTML('thirteentwo', randomTasks.thirteentwo)}
        ${generateTaskHTML('fourteen', randomTasks.fourteen)}
        ${generateTaskHTML('fifteen', randomTasks.fifteen)}
        ${generateTaskHTML('sixteen', randomTasks.sixteen)}
    `;
    
    const answersHTML = createAnswersSection(correctAnswers);
    
    const printHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Печать варианта ОГЭ</title>
            ${styles}
            <style>
                body{
                   padding: 0 150px;
                }
                /* Дополнительные стили только для страницы печати */
                .print-options {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 20px;
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                .print-btn {
                    padding: 12px 24px;
                    margin: 0 10px;
                    border: none;
                    border-radius: 4px;
                    color: white;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .vertical-btn {
                    background-color: #4CAF50;
                }
                .horizontal-btn {
                    background-color: #2196F3;
                }
                .print-btn:hover {
                    opacity: 0.9;
                }
                
                /* Стили для печати */
                @media print {
                body{
                   padding: 0;
                }
                    .print-options {
                        display: none;
                    }
                    *{
                      font-size: 10px !important;
                      background-color: #fff ;
                    }
                   
                    /* Стили для вертикальной печати */
                    body.vertical-print {
                        font-size: 10px !important;
                    }
                     @page { size: landscape; }
                    /* Стили для горизонтальной печати */
                    body.horizontal-print {
                        font-size: 8px !important;
                    }
                    body.horizontal-print .task-numbers__block {
                        column-count: 2;
                        column-gap: 20px;
                    }
                    body.horizontal-print .task-item {
                        break-inside: avoid;
                        page-break-inside: avoid;
                    }
                    .download-btn, .answer-block, .download, .p-num>em, .print, .hr-between {
                         display: none;
                    }
                    .answers-section{
                        page-break-before: always !important;
                    }
                    
                     
                }
            </style>
        </head>
        <body>
            <div class="print-options">
                <h2>Выберите режим печати</h2>
                <button class="print-btn vertical-btn" onclick="printVertical()">Вертикальная печать</button>
                <button class="print-btn horizontal-btn" onclick="printHorizontal()">Горизонтальная печать</button>
            </div>
            
            <div class="task-numbers__block">
                ${tasksHTML}
            </div>
            
            <div class="answers-section">
                <div class="answers-title">Ответы к заданиям</div>
                ${answersHTML}
            </div>
            
            <script>
                function printVertical() {
                    document.body.classList.add('vertical-print');
                    document.body.classList.remove('horizontal-print');
                    
                    
                    
                    setTimeout(() => {
                        window.print();
                        window.close();
                    }, 500);
                }
                
                function printHorizontal() {
                    document.body.classList.add('horizontal-print');
                    document.body.classList.remove('vertical-print');
                    
                    
                    
                    setTimeout(() => {
                        window.print();
                        window.close();
                    }, 500);
                }
            </script>
             <script>
                 document.querySelector('.open-del').open = true;
             </script>
        </body>
        </html>
    `;
    
    printWindow.document.write(printHTML);
    printWindow.document.close();
}

function formatAnswer(answer) {
    if (Array.isArray(answer)) {
        return answer.join(', ');
    }
    if (typeof answer === 'string' && answer.includes(' | ')) {
        return answer.split(' | ').join(' или ');
    }
    return answer;
}

function getTaskNumber(taskId) {
    const taskMap = {
        'one': '1', 'two': '2', 'three': '3', 'four': '4',
        'five': '5', 'six': '6', 'seven': '7', 'eight': '8',
        'nine': '9', 'ten': '10', 'eleven': '11', 'twelve': '12'
    };
    return taskMap[taskId] || taskId;
}

function createAnswersSection(correctAnswers) {
    return Object.entries(correctAnswers)
        .map(([taskId, answer]) => `
            <div class="answer-item">
                <table>
                    <tr>
                        <td><strong>${getTaskNumber(taskId)}</strong></td>
                        <td>${formatAnswer(answer)}</td>
                    </tr>
                </table>
            </div>
        `)
        .join('');
}

async function displayTasks() {
    const generatorDiv = document.querySelector('.task-numbers__block');
    if (!generatorDiv) {
        console.error('Элемент .task-numbers__block не найден!');
        return;
    }

    const randomTasks = await generateRandomTasks();

    if (!randomTasks.one) {
        generatorDiv.innerHTML = '<p>Ошибка загрузки задач. Пожалуйста, попробуйте снова.</p>';
        return;
    }

    generatorDiv.innerHTML = `
        ${generateTaskHTML('one', randomTasks.one)}
        ${generateTaskHTML('two', randomTasks.two)}
        ${generateTaskHTML('three', randomTasks.three)}
        ${generateTaskHTML('four', randomTasks.four)}
        ${generateTaskHTML('five', randomTasks.five)}
        ${generateTaskHTML('six', randomTasks.six)}
        ${generateTaskHTML('seven', randomTasks.seven)}
        ${generateTaskHTML('eight', randomTasks.eight)}
        ${generateTaskHTML('nine', randomTasks.nine)}
        ${generateTaskHTML('ten', randomTasks.ten)}
        ${generateTaskHTML('eleven', randomTasks.eleven)}
        ${generateTaskHTML('twelve', randomTasks.twelve)}
        ${generateTaskHTML('thirteen', randomTasks.thirteen)}
        ${generateTaskHTML('thirteentwo', randomTasks.thirteentwo)}
        ${generateTaskHTML('fourteen', randomTasks.fourteen)}
        ${generateTaskHTML('fifteen', randomTasks.fifteen)}
        ${generateTaskHTML('sixteen', randomTasks.sixteen)}
    `;

    createPrintButton();
}

document.addEventListener('DOMContentLoaded', displayTasks);
