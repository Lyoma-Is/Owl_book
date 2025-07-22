import { correctAnswer} from "./showTasks.js";
import { correctAnswerVars} from "./showTasksVars.js";
import { correctAnswerGen} from "./generatorR.js";


document.addEventListener('DOMContentLoaded', function() {
    const printButton = document.getElementById('button-print');
    if (!printButton) return;

    printButton.addEventListener('click', function() {
        preparePrintView();
    });
});
const randomNumber = Math.floor(Math.random() * 1001) + 1000;

function preparePrintView() {
    const slides = Array.from(document.querySelectorAll('.slide:not(.results-slide)'));
    const variantName = document.querySelector('.breadcrumb .bread-last a')?.textContent || `Вариант ${randomNumber}`;
    const varName = document.querySelector('.breadcrumb .bread-last a')?.textContent;
    let printContent = '';
    let correctAnswersContent = `<div><h3 style="text-align: left;">${varName === variantName ? `${variantName} (ключи)`: `Ключи к варианту № ${randomNumber}`}</h3>`;
    
    slides.forEach((slide, index) => {
        const slideClone = slide.cloneNode(true);
        
        // Подготовка задания для печати
        slideClone.removeAttribute('data-task-id');
        slideClone.classList.remove('slide', 'active');
        
        let taskNumber = index + 1;
        if (slides.length > 14) {
            if (index === 12) taskNumber = '13.1';
            if (index === 13) taskNumber = '13.2';
            if (index > 13) taskNumber = index;
        }
    
        const sliderBtn = slideClone.querySelector('.slider-btn');
        if (sliderBtn) sliderBtn.remove();
        
        printContent += `<div class="print-task">${slideClone.innerHTML}</div>`;
        
        // Получение и вывод правильного ответа только для первых 12 заданий
        if (index < 12) {
            
            const correctAnswerForTask = 
                  correctAnswer && correctAnswer.length > 0 ? correctAnswer[index] 
                : (correctAnswerVars && correctAnswerVars.length > index ? correctAnswerVars[index] 
                : (correctAnswerGen && correctAnswerGen.length > 0) ? correctAnswerGen[index]:'');
            correctAnswersContent += `
            <table style="border: 1px solid; border-collapse: collapse; padding: 5px 15px; text-align: center;">
                <tr >
                    <td style="width: 60px;  border: 1px solid; ">${taskNumber}</td>
                    <td style="width: 170px; border: 1px solid; "">${correctAnswerForTask}</td>
                </tr>
            </table>
            
            `;
        }
    });
    
    correctAnswersContent += '</div>';
    
    const fullPrintContent = printContent;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Печать ${variantName}</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="../../../css/index.css">
            <link rel="stylesheet" href="../../../css/pageOge.css">
            <link rel="stylesheet" href="../../../css/variantTasksInf.css">
            
            <style>
                @page {
                    size: auto;
                    margin: 10mm;
                }
                body {
                    padding: 30px 150px;
                    font-family: 'Roboto', sans-serif;
                    background-color: #fff;
                    text-align: justify;
                }
                input {
                    display: none;
                }
                .print-options {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 20px;
                    justify-content: center;
                }
                .print-options button {
                    padding: 10px 20px;
                    background: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                }
                .print-options button:hover {
                    background: #45a049;
                }
                .print-content {
                    margin-top: 20px;
                }
                .print-task {
                    page-break-inside: avoid;
                    margin-bottom: 5px;
                    padding: 15px;
                    border: transparent;
                    border-radius: 5px;
                    background-color: #fff;
                }
                .task-number {
                    font-weight: bold;
                    margin-right: 10px;
                }
                .correct-answers-section {
                    display: block;
                    padding: 0;
                    background: #fff;
                    border: none;
                    break-before: page !important;
                }
                .correct-answers-section h3 {
                    margin-bottom: 15px;
                    text-align: center;
                }
                .task-numbers__block .img-task_9, .task-numbers__block .img-13{
                        width: 50% !important; 
                }
                .task-numbers__block .img-13_2{
                        width: 80% !important; 
                }
                /* Вертикальный режим */
                .print-content.vertical .print-task {
                    width: 100%;
                }
                
                /* Горизонтальный режим */
                .print-content.horizontal {
                   //display: flex;
                   //flex-wrap: wrap;
                   gap: 20px;
                   
                   
                }
                .print-content.horizontal .print-task {
                    width: calc(50% - 10px);
                    box-sizing: border-box;
                }
                .download-btn, .answer-block, .download, .print, .hr-between, .text-inform {
                         display: none !important;
                }
                hr:nth-last-child(-n + 5) {
                    display: none;
                }
                @media print {   
                    *{
                        font-size: 10px !important;
                    }
                    body {
                       padding: 20px 0 0 0;

                       background-color: #fff !important;    
                    }
                    .print-options, .no-print {
                        display: none !important;   
                    }   

                    .correct-answers-section {  
                        display: block;         
                        break-before: page ;
                    }
                    .print-content .vertical @page {
                        size: A4 portrait;
                    }
                    .print-content .horizontal @page {
                        size: A4 landscape;
                    }
                    .print-content.horizontal .print-task {
                        border: transparent;
                        width: 100%;   
                    }
                        
                    .print-content.horizontal {
                        column-count: 2;
                        column-gap: 20px;   
                        display: block;
                        column-fill: auto;
                    }

                    .download-btn, .answer-block, .download, .print, .text-inform {
                         display: none;
                    }

                    .task-numbers__block .img-task_9, .task-numbers__block .img-13{
                        width: 50% !important; 
                    }
                    .task-numbers__block .img-13_2{
                        width: 80% !important; 
                    }
                    hr:nth-last-child(-n + 5) {
                        display: none;
                    }
                }
            </style>
        </head>
        <body>
            <div class="print-options">
                <button onclick="printVertical()">Вертикальная печать</button>
                <button onclick="printHorizontal()">Горизонтальная печать</button>
            </div>
            <h2 style="text-align: center; padding-top: 20px;">${variantName}</h2>
            <div class="print-content vertical task-numbers__block">
                ${fullPrintContent}
            </div>
            <div class="correct-answers-section task-numbers__block" style="align-items: left !important;">
                ${correctAnswersContent}
            </div>
            <script>
                function printVertical() {
                    document.querySelector('.print-content').className = 'print-content vertical task-numbers__block';
                    setTimeout(() => {
                        window.print();
                    }, 100);
                }
                
                function printHorizontal() {
                    document.querySelector('.print-content').className = 'print-content horizontal task-numbers__block';
                    setTimeout(() => {
                        window.print();
                    }, 100);
                }
            </script>
            <script>
                 document.querySelector('.open-del').open = true;
             </script>
        </body>
        </html>
    `);
    printWindow.document.close();
    
    // Копирование стилей из основной страницы
    const styles = document.querySelectorAll('link[rel="stylesheet"], style');
    styles.forEach(style => {
        if (style.href) {
            const link = printWindow.document.createElement('link');
            link.rel = 'stylesheet';
            link.href = style.href;
            printWindow.document.head.appendChild(link);
        } else {
            const styleEl = printWindow.document.createElement('style');
            styleEl.textContent = style.textContent;
            printWindow.document.head.appendChild(styleEl);
        }
    });
}

