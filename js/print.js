// import { correctAnswer} from "./showTasks.js";
// import { correctAnswerVars} from "./showTasksVars.js";
// import { correctAnswerGen} from "./generatorR.js";


// document.addEventListener('DOMContentLoaded', function() {
//     const printButton = document.getElementById('button-print');
//     if (!printButton) return;

//     printButton.addEventListener('click', function() {
//         preparePrintView();
//     });
// });
// const randomNumber = Math.floor(Math.random() * 1001) + 1000;

// function preparePrintView() {
//     const slides = Array.from(document.querySelectorAll('.slide:not(.results-slide)'));
//     const variantName = document.querySelector('.breadcrumb .bread-last a')?.textContent || `Вариант ${randomNumber}`;
//     const varName = document.querySelector('.breadcrumb .bread-last a')?.textContent;
//     let printContent = '';
//     let correctAnswersContent = `<div><h3 style="text-align: left;">${varName === variantName ? `${variantName} (ключи)`: `Ключи к варианту № ${randomNumber}`}</h3>`;
    
//     slides.forEach((slide, index) => {
//         const slideClone = slide.cloneNode(true);
        
//         // Подготовка задания для печати
//         slideClone.removeAttribute('data-task-id');
//         slideClone.classList.remove('slide', 'active');
        
//         let taskNumber = index + 1;
//         if (slides.length > 14) {
//             if (index === 12) taskNumber = '13.1';
//             if (index === 13) taskNumber = '13.2';
//             if (index > 13) taskNumber = index;
//         }
    
//         const sliderBtn = slideClone.querySelector('.slider-btn');
//         if (sliderBtn) sliderBtn.remove();
        
//         printContent += `<div class="print-task">${slideClone.innerHTML}</div>`;
        
//         // Получение и вывод правильного ответа только для первых 12 заданий
//         if (index < 12) {
            
//             const correctAnswerForTask = 
//                   correctAnswer && correctAnswer.length > 0 ? correctAnswer[index] 
//                 : (correctAnswerVars && correctAnswerVars.length > index ? correctAnswerVars[index] 
//                 : (correctAnswerGen && correctAnswerGen.length > 0) ? correctAnswerGen[index]:'');
//             correctAnswersContent += `
//             <table style="border: 1px solid; border-collapse: collapse; padding: 5px 15px; text-align: center;">
//                 <tr >
//                     <td style="width: 60px;  border: 1px solid; ">${taskNumber}</td>
//                     <td style="width: 170px; border: 1px solid; "">${correctAnswerForTask}</td>
//                 </tr>
//             </table>
            
//             `;
//         }
//     });
    
//     correctAnswersContent += '</div>';
    
//     const fullPrintContent = printContent;
//     const printWindow = window.open('', '_blank');
//     printWindow.document.write(`
//         <!DOCTYPE html>
//         <html lang="ru">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Печать ${variantName}</title>
//             <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
//             <link rel="stylesheet" href="../../../css/index.css">
//             <link rel="stylesheet" href="../../../css/pageOge.css">
//             <link rel="stylesheet" href="../../../css/variantTasksInf.css">
            
//             <style>
//                 @page {
//                     size: auto;
//                     margin: 10mm;
//                 }
//                 body {
//                     padding: 30px 150px;
//                     font-family: 'Roboto', sans-serif;
//                     background-color: #fff;
//                     text-align: justify;
//                 }
//                 input {
//                     display: none;
//                 }
//                 .print-options {
//                     display: flex;
//                     gap: 20px;
//                     margin-bottom: 20px;
//                     justify-content: center;
//                 }
//                 .print-options button {
//                     padding: 10px 20px;
//                     background: #4CAF50;
//                     color: white;
//                     border: none;
//                     border-radius: 4px;
//                     cursor: pointer;
//                     font-size: 16px;
//                 }
//                 .print-options button:hover {
//                     background: #45a049;
//                 }
//                 .print-content {
//                     margin-top: 20px;
//                 }
//                 .print-task {
//                     page-break-inside: avoid;
//                     margin-bottom: 5px;
//                     padding: 15px;
//                     border: transparent;
//                     border-radius: 5px;
//                     background-color: #fff;
//                 }
//                 .task-number {
//                     font-weight: bold;
//                     margin-right: 10px;
//                 }
//                 .correct-answers-section {
//                     display: block;
//                     padding: 0;
//                     background: #fff;
//                     border: none;
//                     break-before: page !important;
//                 }
//                 .correct-answers-section h3 {
//                     margin-bottom: 15px;
//                     text-align: center;
//                 }
//                 .task-numbers__block .img-task_9, .task-numbers__block .img-13{
//                         width: 50% !important; 
//                 }
//                 .task-numbers__block .img-13_2{
//                         width: 80% !important; 
//                 }
//                 /* Вертикальный режим */
//                 .print-content.vertical .print-task {
//                     width: 100%;
//                 }
                
//                 /* Горизонтальный режим */
//                 .print-content.horizontal {
//                    gap: 20px;  
//                 }
//                 .tasks-blocks{
//                     border: none !important;
//                     margin-bottom: 0 !important;
//                     padding: 0 !important;
//                     background-color: transparent !important;
                    
//                 }
//                 .print-content.horizontal .print-task {
//                     width: 100%;
//                     box-sizing: border-box;
//                 }
//                 .download-btn, .answer-block, .download, .print, .hr-between, .text-inform {
//                          display: none !important;
//                 }
//                 hr:nth-last-child(-n + 6) {
//                     display: none;
//                 }
//                 @media print {   
//                     *{
//                         font-size: 10px !important;
//                     }
//                     body {
//                        padding: 20px 0 0 0;

//                        background-color: #fff !important;    
//                     }
//                     .print-options, .no-print {
//                         display: none !important;   
//                     }   

//                     .correct-answers-section {  
//                         display: block;         
//                         break-before: page ;
//                     }
//                     .print-content .vertical @page {
//                         size: A4 portrait;
//                     }
//                     .print-content .horizontal @page {
//                         size: A4 landscape;
//                     }
//                     .print-content.horizontal .print-task {
//                         border: transparent;
//                         width: 100%;   
//                     }
                        
//                     .print-content.horizontal {
//                         column-count: 2;
//                         column-gap: 20px;   
//                         display: block;
//                         column-fill: auto;
//                     }

//                     .download-btn, .answer-block, .download, .print, .text-inform {
//                          display: none;
//                     }

//                     .task-numbers__block .img-task_9, .task-numbers__block .img-13{
//                         width: 50% !important; 
//                     }
//                     .task-numbers__block .img-13_2{
//                         width: 80% !important; 
//                     }
//                     hr:nth-last-child(-n + 6) {
//                         display: none;
//                     }
//                 }
//             </style>
//         </head>
//         <body>
//             <div class="print-options">
//                 <button onclick="printVertical()">Вертикальная печать</button>
//                 <button onclick="printHorizontal()">Горизонтальная печать</button>
//             </div>
//             <h2 style="text-align: center; padding-top: 20px;">${variantName}</h2>
//             <div class="print-content vertical task-numbers__block">
//                 ${fullPrintContent}
//             </div>
//             <div class="correct-answers-section task-numbers__block" style="align-items: left !important;">
//                 ${correctAnswersContent}
//             </div>
//             <script>
//                 function printVertical() {
//                     document.querySelector('.print-content').className = 'print-content vertical task-numbers__block';
//                     setTimeout(() => {
//                         window.print();
//                     }, 100);
//                 }
                
//                 function printHorizontal() {
//                     document.querySelector('.print-content').className = 'print-content horizontal task-numbers__block';
//                     setTimeout(() => {
//                         window.print();
//                     }, 100);
//                 }
//             </script>
//             <script>
//                  document.querySelector('.open-del').open = true;
//              </script>
//         </body>
//         </html>
//     `);
//     printWindow.document.close();
    
//     // Копирование стилей из основной страницы
//     const styles = document.querySelectorAll('link[rel="stylesheet"], style');
//     styles.forEach(style => {
//         if (style.href) {
//             const link = printWindow.document.createElement('link');
//             link.rel = 'stylesheet';
//             link.href = style.href;
//             printWindow.document.head.appendChild(link);
//         } else {
//             const styleEl = printWindow.document.createElement('style');
//             styleEl.textContent = style.textContent;
//             printWindow.document.head.appendChild(styleEl);
//         }
//     });
// }


















// import { correctAnswer } from "./showTasks.js";
// import { correctAnswerVars } from "./showTasksVars.js";
// import { correctAnswerGen } from "./generatorR.js";

// document.addEventListener('DOMContentLoaded', function() {
//     const printButton = document.getElementById('button-print');
//     if (!printButton) return;

//     printButton.addEventListener('click', function() {
//         preparePrintView();
//     });
// });

// const randomNumber = Math.floor(Math.random() * 1001) + 1000;

// function preparePrintView() {
//     const slides = Array.from(document.querySelectorAll('.slide:not(.results-slide)'));
//     if (slides.length === 0) {
//         console.error('Не найдены слайды для печати');
//         return;
//     }

//     const breadLast = document.querySelector('.breadcrumb .bread-last a');
//     const variantName = breadLast?.textContent?.trim() || `Вариант ${randomNumber}`;
//     const isGeneratedVariant = !breadLast || !breadLast.textContent?.trim();
    
//     let printContent = '';
//     let correctAnswersContent = '';
//     let answerIndex = 0;

//     // Создаем таблицу для ответов
//     correctAnswersContent = `<div class="correct-answers-section">
//         <h3 style="text-align: left; margin-bottom: 20px;">
//             ${isGeneratedVariant ? `Ключи к варианту № ${randomNumber}` : `${variantName} (ключи)`}
//         </h3>
//         <div style="display: flex; flex-wrap: wrap; gap: 5px;">`;

//     slides.forEach((slide, index) => {
//         const slideClone = slide.cloneNode(true);
        
//         // Очистка клонированного элемента
//         slideClone.removeAttribute('data-task-id');
//         slideClone.classList.remove('slide', 'active');
        
//         // Удаляем ненужные элементы
//         const elementsToRemove = slideClone.querySelectorAll(
//             '.slider-btn, .download-btn, .answer-block, .download, .print, .text-inform, .hr-between'
//         );
//         elementsToRemove.forEach(el => el.remove());
        
//         // Определяем номер задания
//         let taskNumber = getTaskNumber(index, slides.length);
        
//         // Добавляем контент для печати
//         printContent += `
//             <div class="print-task">
//                 ${slideClone.innerHTML}
//             </div>
//         `;
        
//         // Добавляем правильные ответы только для первых 12 заданий
//         if (index < 12) {
//             const correctAnswerForTask = getCorrectAnswer(index);
//             if (correctAnswerForTask) {
//                 correctAnswersContent += `
//                     <table style="border: 1px solid; border-collapse: collapse; margin: 0;">
//                         <tr>
//                             <td style="width: 60px; border: 1px solid; padding: 5px; text-align: center;">
//                                 ${taskNumber}
//                             </td>
//                             <td style="width: 170px; border: 1px solid; padding: 5px; text-align: center;">
//                                 ${correctAnswerForTask}
//                             </td>
//                         </tr>
//                     </table>
//                 `;
//                 answerIndex++;
//             }
//         }
//     });

//     correctAnswersContent += '</div></div>';

//     // Создаем окно для печати
//     createPrintWindow(printContent, correctAnswersContent, variantName, isGeneratedVariant);
// }

// // Вспомогательные функции

// function getTaskNumber(index, totalSlides) {
//     if (totalSlides > 14) {
//         if (index === 12) return '13.1';
//         if (index === 13) return '13.2';
//         if (index > 13) return index + 1;
//     }
//     return index + 1;
// }

// function getCorrectAnswer(index) {
//     // Приоритет получения ответов: correctAnswer → correctAnswerVars → correctAnswerGen
//     if (correctAnswer && correctAnswer.length > index) {
//         return correctAnswer[index];
//     }
//     if (correctAnswerVars && correctAnswerVars.length > index) {
//         return correctAnswerVars[index];
//     }
//     if (correctAnswerGen && correctAnswerGen.length > index) {
//         return correctAnswerGen[index];
//     }
//     return '';
// }

// function createPrintWindow(printContent, correctAnswersContent, variantName, isGeneratedVariant) {
//     const printWindow = window.open('', '_blank');
//     if (!printWindow) {
//         alert('Пожалуйста, разрешите всплывающие окна для печати');
//         return;
//     }

//     const finalVariantName = isGeneratedVariant ? `Вариант ${randomNumber}` : variantName;
    
//     printWindow.document.write(`
//         <!DOCTYPE html>
//         <html lang="ru">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Печать: ${finalVariantName}</title>
//             ${getStyleLinks()}
//             ${getPrintStyles()}
//         </head>
//         <body>
//             <div class="print-options no-print">
//                 <button onclick="printVertical()">Вертикальная печать</button>
//                 <button onclick="printHorizontal()">Горизонтальная печать</button>
//             </div>
            
//             <h2 class="variant-title">${finalVariantName}</h2>
            
//             <div class="print-content vertical task-numbers__block">
//                 ${printContent}
//             </div>
            
//             ${correctAnswersContent}
            
//             <script>
//                 function printVertical() {
//                     const content = document.querySelector('.print-content');
//                     content.className = 'print-content vertical task-numbers__block';
//                     setTimeout(() => window.print(), 100);
//                 }
                
//                 function printHorizontal() {
//                     const content = document.querySelector('.print-content');
//                     content.className = 'print-content horizontal task-numbers__block';
//                     setTimeout(() => window.print(), 100);
//                 }
                
//             </script>
//         </body>
//         </html>
//     `);

//     printWindow.document.close();
    
//     // Копируем стили из основной страницы
//     copyStylesToWindow(printWindow);
// }

// function getStyleLinks() {
//     return `
//         <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
//         <link rel="stylesheet" href="../../../css/index.css">
//         <link rel="stylesheet" href="../../../css/pageOge.css">
//         <link rel="stylesheet" href="../../../css/variantTasksInf.css">
//     `;
// }

// function getPrintStyles() {
//     return `
//         <style>
//             ${getCommonPrintStyles()}
//             ${getVerticalPrintStyles()}
//             ${getHorizontalPrintStyles()}
//             ${getPrintMediaStyles()}
//         </style>
//     `;
// }

// function getCommonPrintStyles() {
//     return `
//         @page {
//             size: auto;
//             margin: 10mm;
//         }
        
//         body {
//             padding: 30px 150px;
//             font-family: 'Roboto', sans-serif;
//             background-color: #fff;
//             text-align: justify;
//         }
        
//         .variant-title {
//             text-align: center;
//             padding: 20px 0 30px 0;
//             margin: 0;
//         }
        
//         .print-options {
//             display: flex;
//             gap: 20px;
//             margin: 20px 0;
//             justify-content: center;
//         }
        
//         .print-options button {
//             padding: 10px 20px;
//             background: #4CAF50;
//             color: white;
//             border: none;
//             border-radius: 4px;
//             cursor: pointer;
//             font-size: 16px;
//             transition: background 0.3s;
//         }
        
//         .print-options button:hover {
//             background: #45a049;
//         }
        
//         .print-task {
//             page-break-inside: avoid;
//             margin-bottom: 15px;
//             padding: 15px;
//             border-radius: 5px;
//             background-color: #fff;
//         }
        
//         .task-number {
//             font-weight: bold;
//             margin-right: 5px;
//         }
        
//         .correct-answers-section {
//             margin-top: 40px;
//             page-break-before: always;
//         }
        
//         /* Скрываем ненужные элементы */
//         input, .download-btn, .answer-block, .download, 
//         .print, .hr-between, .text-inform, .p-num {
//             display: none !important;
//         }
        
//         /* Оптимизация изображений */
//         .task-numbers__block .img-task_9, 
//         .task-numbers__block .img-13 {
//             width: 50% !important;
//             max-width: 50%;
//         }
        
//         .task-numbers__block .img-13_2 {
//             width: 80% !important;
//             max-width: 80%;
//         }
//     `;
// }

// function getVerticalPrintStyles() {
//     return `
//         .print-content.vertical .print-task {
//             width: 100%;
//         }
//     `;
// }

// function getHorizontalPrintStyles() {
//     return `
//         .print-content.horizontal {
//             column-count: 2;
//             column-gap: 20px;
//         }
        
//         .print-content.horizontal .print-task {
//             break-inside: avoid-column;
//             width: 100%;
//         }
//     `;
// }

// function getPrintMediaStyles() {
//     return `
//         @media print {
//             .no-print {
//                 display: none !important;
//             }
            
//             body {
//                 padding: 20px 0 0 0 !important;
//                 background-color: #fff !important;
//             }
            
//             .print-content.horizontal {
//                 column-count: 2;
//             }
            
//             .print-content.vertical {
//                 column-count: 1;
//             }
            
//             .correct-answers-section {
//                 page-break-before: always;
//                 display: block !important;
//             }
            
//             * {
//                 font-size: 10px !important;
//             }
//         }
//     `;
// }

// function copyStylesToWindow(printWindow) {
//     const styles = document.querySelectorAll('link[rel="stylesheet"], style');
//     styles.forEach(style => {
//         if (style.href) {
//             const link = printWindow.document.createElement('link');
//             link.rel = 'stylesheet';
//             link.href = style.href;
//             printWindow.document.head.appendChild(link);
//         }
//     });
// }








import { correctAnswer } from "./showTasks.js";
import { correctAnswerVars } from "./showTasksVars.js";
import { correctAnswerGen } from "./generatorR.js";

document.addEventListener('DOMContentLoaded', function() {
    const printButton = document.getElementById('button-print');
    if (!printButton) {
        console.warn('Кнопка печати не найдена');
        return;
    }

    printButton.addEventListener('click', function(e) {
        e.preventDefault();
        preparePrintView();
    });
});

// Генерация случайного номера варианта с кэшированием
const randomNumber = (() => {
    const stored = sessionStorage.getItem('printVariantNumber');
    if (stored) return parseInt(stored);
    const newNumber = Math.floor(Math.random() * 1001) + 1000;
    sessionStorage.setItem('printVariantNumber', newNumber.toString());
    return newNumber;
})();

function preparePrintView() {
    try {
        const slides = Array.from(document.querySelectorAll('.slide:not(.results-slide)'));
        if (slides.length === 0) {
            showError('Не найдены слайды для печати');
            return;
        }

        const breadLast = document.querySelector('.breadcrumb .bread-last a');
        const variantName = breadLast?.textContent?.trim() || `Вариант ${randomNumber}`;
        const isGeneratedVariant = !breadLast || !breadLast.textContent?.trim();
        
        let printContent = '';
        let correctAnswersContent = '';
        let answerIndex = 0;

        // Создаем таблицу для ответов
        correctAnswersContent = `<div class="correct-answers-section">
            <h3 style="text-align: left; margin-bottom: 20px;">
                ${isGeneratedVariant ? `Ключи к варианту № ${randomNumber}` : `${variantName} (ключи)`}
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 5px;">`;

        slides.forEach((slide, index) => {
            const slideClone = slide.cloneNode(true);
            
            // Очистка клонированного элемента
            cleanSlideForPrint(slideClone);
            
            // Определяем номер задания
            const taskNumber = getTaskNumber(index, slides.length);
            
            // Добавляем номер задания в содержимое
            const contentWithNumber = addTaskNumber(slideClone.innerHTML, taskNumber);
            
            // Добавляем контент для печати
            printContent += `
                <div class="print-task" data-task="${taskNumber}">
                    ${contentWithNumber}
                </div>
            `;
            
            // Добавляем правильные ответы только для первых 12 заданий
            if (index < 12) {
                const correctAnswerForTask = getCorrectAnswer(index);
                if (correctAnswerForTask) {
                    correctAnswersContent += createAnswerTableRow(taskNumber, correctAnswerForTask);
                    answerIndex++;
                }
            }
        });

        correctAnswersContent += '</div></div>';

        // Создаем окно для печати
        createPrintWindow(printContent, correctAnswersContent, variantName, isGeneratedVariant);
    } catch (error) {
        console.error('Ошибка при подготовке к печати:', error);
        showError('Произошла ошибка при подготовке к печати');
    }
}

// Вспомогательные функции

function cleanSlideForPrint(slide) {
    slide.removeAttribute('data-task-id');
    slide.classList.remove('slide', 'active');
    slide.classList.add('print-slide');
    
    // Удаляем ненужные элементы
    const selectorsToRemove = [
        '.slider-btn',
        '.download-btn',
        '.answer-block',
        '.download',
        '.print',
        '.text-inform',
        '.hr-between',
        '.no-print',
        'button',
        'input',
        'textarea'
    ];
    
    selectorsToRemove.forEach(selector => {
        const elements = slide.querySelectorAll(selector);
        elements.forEach(el => el.remove());
    });
    
    // Оптимизируем изображения
    const images = slide.querySelectorAll('img');
    images.forEach(img => {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
    });
}

function getTaskNumber(index, totalSlides) {
    // Нумерация начинается с 1
    const baseNumber = index + 1;
    
    // Особый случай для заданий 13.1 и 13.2
    if (totalSlides > 14) {
        if (index === 12) return '13.1';
        if (index === 13) return '13.2';
    }
    
    return baseNumber.toString();
}

function addTaskNumber(content, taskNumber) {
    // Добавляем номер задания в начало контента
    return `<div class="task-number-print" style="font-weight: bold; margin-bottom: 10px;">
                Задание ${taskNumber}
            </div>
            ${content}`;
}

function getCorrectAnswer(index) {
    // Приоритет получения ответов
    const answerSources = [
        correctAnswer,
        correctAnswerVars,
        correctAnswerGen
    ];
    
    for (const source of answerSources) {
        if (source && Array.isArray(source) && source.length > index) {
            const answer = source[index];
            if (answer !== undefined && answer !== null && answer !== '') {
                return answer.toString().trim();
            }
        }
    }
    
    console.warn(`Правильный ответ для задания ${index + 1} не найден`);
    return '—';
}

function createAnswerTableRow(taskNumber, answer) {
    return `
        <table style="border: 1px solid #ccc; border-collapse: collapse; margin: 2px; font-size: 14px;">
            <tr>
                <td style="width: 60px; border: 1px solid #ccc; padding: 8px 5px; text-align: center; font-weight: bold;">
                    ${taskNumber}
                </td>
                <td style="width: 170px; border: 1px solid #ccc; padding: 8px 5px; text-align: center;">
                    ${answer}
                </td>
            </tr>
        </table>
    `;
}

function createPrintWindow(printContent, correctAnswersContent, variantName, isGeneratedVariant) {
    const printWindow = window.open('', '_blank', 'width=1000,height=700');
    if (!printWindow) {
        showError('Пожалуйста, разрешите всплывающие окна для печати');
        return;
    }

    const finalVariantName = isGeneratedVariant ? `Вариант ${randomNumber}` : variantName;
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Печать: ${finalVariantName}</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap">
            ${getPrintStyles()}
        </head>
        <body>
            <div class="print-controls no-print">
                <div class="controls-group">
                    <button onclick="printVertical()" class="btn-primary">
                        <span>📄</span> Вертикальная печать
                    </button>
                    <button onclick="printHorizontal()" class="btn-secondary">
                        <span>📋</span> Горизонтальная печать
                    </button>
                    <button onclick="window.close()" class="btn-cancel">
                        <span>✕</span> Закрыть
                    </button>
                </div>
                <div class="info">
                    <span>Вариант: <strong>${finalVariantName}</strong></span>
                    <span class="page-info">Заданий: ${document.querySelectorAll('.print-task').length || '?'}</span>
                </div>
            </div>
            
            <div class="print-header">
                <h1 class="variant-title">${finalVariantName}</h1>
                <div class="print-date">${new Date().toLocaleDateString('ru-RU')}</div>
            </div>
            
            <div class="print-content vertical">
                ${printContent}
            </div>
            
            ${correctAnswersContent}
            
            <script>
                function printVertical() {
                    document.querySelector('.print-content').className = 'print-content vertical';
                    setTimeout(() => {
                        window.print();
                    }, 300);
                }
                
                function printHorizontal() {
                    document.querySelector('.print-content').className = 'print-content horizontal';
                    setTimeout(() => {
                        window.print();
                    }, 300);
                }
                
                // Автоматически запускаем печать через 2 секунды (опционально)
                // setTimeout(printVertical, 2000);
            </script>
        </body>
        </html>
    `);

    printWindow.document.close();
    
    // Фокус на окно печати
    printWindow.focus();
}

function getPrintStyles() {
    return `
        <style>
            ${getBaseStyles()}
            ${getPrintControlsStyles()}
            ${getPrintContentStyles()}
            ${getAnswerTableStyles()}
            ${getPrintMediaStyles()}
        </style>
    `;
}

function getBaseStyles() {
    return `
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.5;
            color: #333;
            padding: 20px;
            background: #f5f5f5;
        }
        
        @page {
            size: auto;
            margin: 15mm;
        }
    `;
}

function getPrintControlsStyles() {
    return `
        .print-controls {
            background: white;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .controls-group {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
            flex-wrap: wrap;
        }
        
        .print-controls button {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s;
        }
        
        .btn-primary {
            background: #2196F3;
            color: white;
        }
        
        .btn-primary:hover {
            background: #1976D2;
        }
        
        .btn-secondary {
            background: #4CAF50;
            color: white;
        }
        
        .btn-secondary:hover {
            background: #388E3C;
        }
        
        .btn-cancel {
            background: #f5f5f5;
            color: #666;
        }
        
        .btn-cancel:hover {
            background: #e0e0e0;
        }
        
        .info {
            display: flex;
            justify-content: space-between;
            color: #666;
            font-size: 14px;
            padding-top: 10px;
            border-top: 1px solid #eee;
        }
        
        .page-info {
            background: #e3f2fd;
            padding: 2px 8px;
            border-radius: 3px;
        }
    `;
}

function getPrintContentStyles() {
    return `
        .print-header {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px;
            background: white;
            border-radius: 8px;
        }
        
        .variant-title {
            font-size: 24px;
            color: #333;
            margin-bottom: 10px;
        }
        
        .print-date {
            color: #666;
            font-size: 14px;
        }
        
        .print-content {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .print-content.vertical {
            column-count: 1;
        }
        
        .print-content.horizontal {
            column-count: 2;
            column-gap: 30px;
        }
        
        .print-task {
            break-inside: avoid;
            page-break-inside: avoid;
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
        
        .print-task:last-child {
            border-bottom: none;
        }
        
        .task-number-print {
            color: #2196F3;
            font-size: 16px;
            padding-bottom: 8px;
            margin-bottom: 15px;
            border-bottom: 2px solid #e3f2fd;
        }
        
        .print-task img {
            max-width: 100% !important;
            height: auto !important;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
    `;
}

function getAnswerTableStyles() {
    return `
        .correct-answers-section {
            margin-top: 40px;
            padding: 25px;
            background: white;
            border-radius: 8px;
            page-break-before: always;
        }
        
        .correct-answers-section h3 {
            color: #333;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #4CAF50;
        }
        
        .answers-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
        }
        
        .answer-item {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background: #f9f9f9;
        }
        
        .answer-task {
            font-weight: bold;
            color: #333;
        }
        
        .answer-value {
            color: #4CAF50;
            font-weight: bold;
        }
    `;
}

function getPrintMediaStyles() {
    return `
        @media print {
            .no-print {
                display: none !important;
            }
            
            body {
                padding: 0 !important;
                background: white !important;
            }
            
            .print-controls,
            .print-header {
                display: none !important;
            }
            
            .print-content {
                box-shadow: none !important;
                padding: 0 !important;
            }
            
            .print-task {
                border-bottom: 1px solid #ddd !important;
                margin-bottom: 15px !important;
            }
            
            .correct-answers-section {
                page-break-before: always;
                margin-top: 30px !important;
            }
            
            /* Увеличиваем отступы при печати */
            @page {
                margin: 20mm;
            }
        }
        
        @media (max-width: 768px) {
            .print-content.horizontal {
                column-count: 1;
            }
            
            .controls-group {
                flex-direction: column;
            }
            
            .print-controls button {
                width: 100%;
                justify-content: center;
            }
        }
    `;
}

function showError(message) {
    alert(message);
    console.error(message);
}

// Добавляем глобальный обработчик ошибок
window.addEventListener('error', function(e) {
    console.error('Global error in print script:', e.error);
});