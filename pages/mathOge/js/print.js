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

// Генерация и кэширование номера варианта
const generateVariantNumber = () => {
    let num = localStorage.getItem('printVariantNumber');
    if (!num) {
        num = Math.floor(Math.random() * 1001) + 1000;
        localStorage.setItem('printVariantNumber', num);
    }
    return parseInt(num);
};
const randomNumber = generateVariantNumber();

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

        // Заголовок для ключей
        correctAnswersContent = `<div class="correct-answers-section">
            <h3 style="text-align: left; margin-bottom: 20px;">
                ${isGeneratedVariant ? `Ключи к варианту № ${randomNumber}` : `${variantName} (ключи)`}
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 5px;">`;

        slides.forEach((slide, index) => {
            const slideClone = slide.cloneNode(true);
            
            // Очистка слайда для печати
            cleanSlideForPrint(slideClone);
            
            //Простая нумерация: 1, 2, 3
            const taskNumber = index + 1;
            
            // Добавление номера задания в контент
            const contentWithNumber = addTaskNumber(slideClone.innerHTML, taskNumber);
            
            //Добавляем задание в печатный контент (раскомментировано)
            printContent += `<div class="print-task" data-task="${taskNumber}">${contentWithNumber}</div>`;
            
            // Правильные ответы для первых 19 заданий
            if (index < 19) {
                const correctAnswerForTask = getCorrectAnswer(index);
                if (correctAnswerForTask) {
                    correctAnswersContent += createAnswerTableRow(taskNumber, correctAnswerForTask);
                }
            }
        });

        correctAnswersContent += '</div></div>';

        // Создание окна печати
        createPrintWindow(printContent, correctAnswersContent, variantName, isGeneratedVariant);
        
    } catch (error) {
        console.error('❌ Ошибка при подготовке к печати:', error);
        showError('Произошла ошибка при подготовке к печати');
    }
}

// Вспомогательная функция: очистка слайда
function cleanSlideForPrint(slide) {
    slide.removeAttribute('data-task-id');
    slide.classList.remove('slide', 'active');
    slide.classList.add('print-slide');
    
    const selectorsToRemove = [
        '.slider-btn', '.download-btn', '.answer-block', '.download', 
        '.print', '.text-inform', '.hr-between', '.no-print',
        'button', 'input', 'textarea', 'details', 'hr'
    ];
    
    selectorsToRemove.forEach(selector => {
        slide.querySelectorAll(selector).forEach(el => el.remove());
    });
    
    slide.querySelectorAll('img').forEach(img => {
        img.style.maxWidth = '95%';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.margin = '10px auto';
    });
}

// Вспомогательная функция: добавление номера в контент
function addTaskNumber(content, taskNumber) {
    return `${content}`;
}

// Вспомогательная функция: получение правильного ответа
function getCorrectAnswer(index) {
    const sources = [correctAnswer, correctAnswerVars, correctAnswerGen];
    
    for (const source of sources) {
        if (source && Array.isArray(source) && source[index] !== undefined) {
            const val = source[index];
            if (val !== null && val !== '' && val !== 'null') {
                return val.toString().trim();
            }
        }
    }
    console.warn(`Ответ для задания ${index + 1} не найден`);
    return '—';
}

// Вспомогательная функция: строка таблицы ответов
function createAnswerTableRow(taskNumber, answer) {
    return `
        <table style="border:1px solid #ccc;border-collapse:collapse;margin:2px;font-size:14px;">
            <tr>
                <td style="width:60px;border:1px solid #ccc;padding:8px 5px;text-align:center;font-weight:bold;">${taskNumber}</td>
                <td style="width:170px;border:1px solid #ccc;padding:8px 5px;text-align:center;">${answer}</td>
            </tr>
        </table>
    `;
}

// Создание окна печати
function createPrintWindow(printContent, correctAnswersContent, variantName, isGeneratedVariant) {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        showError('Разрешите всплывающие окна для печати');
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
            <style>${getPrintStyles()}</style>
        </head>
        <body>
            <div class="print-controls no-print">
                <div class="controls-group">
                    <button onclick="printVertical()" class="btn-primary">Вертикальная</button>
                    <button onclick="printHorizontal()" class="btn-secondary">Горизонтальная</button>
                    <button onclick="window.close()" class="btn-cancel">✕ Закрыть</button>
                </div>    
            </div>
            
            <div class="variant-title"><p>${finalVariantName}</p></div>
            
            <div class="print-content vertical task-numbers__block">
                ${printContent}
            </div>
            
            ${correctAnswersContent}
            
            <script>
                function printVertical() {
                    document.querySelector('.print-content').className = 'print-content vertical task-numbers__block';
                    setTimeout(() => window.print(), 300);
                }
                function printHorizontal() {
                    document.querySelector('.print-content').className = 'print-content horizontal task-numbers__block';
                    setTimeout(() => window.print(), 300);
                }
            <\/script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
}

// Стили для печати
function getPrintStyles() {
    return `
        ${getBaseStyles()}
        ${getPrintControlsStyles()}
        ${getPrintContentStyles()}
        ${getAnswerTableStyles()}
        ${getPrintMediaStyles()}
    `;
}

function getBaseStyles() {
    return `
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.5;
            color: #333;
            padding: 10px;
            background: #f5f5f5;
        }
        @page { size: auto; margin: 15mm; }
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
            z-index: 100;
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
        .btn-primary { background: #2196F3; color: white; }
        .btn-primary:hover { background: #1976D2; }
        .btn-secondary { background: #4CAF50; color: white; }
        .btn-secondary:hover { background: #388E3C; }
        .btn-cancel { background: #f5f5f5; color: #666; }
        .btn-cancel:hover { background: #e0e0e0; }
    `;
}

function getPrintContentStyles() {
    return `
        .variant-title {
            text-align: center;
            font-size: 24px;
            color: #333;
            margin: 20px 0;
        }
        .print-content {
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .print-content.vertical { column-count: 1; }
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
        .print-task:last-child { border-bottom: none; }
        .print-task img {
            max-width: 90% !important;
            height: auto !important;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .task-numbers__block .img-task_9,
        .task-numbers__block .img-13 { width: 50% !important; }
        .task-numbers__block .img-13_2 { width: 80% !important; }
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
        .table_2_1, .table_2_3, .table_4, .table_6, .table_14, .table_16 {
            border-collapse: collapse;
            width: 100%;
        }
        .table_2_1 td, .table_4 td {
            font-size: 15px;
            border: 1px solid;
            padding: 5px 15px;
            text-align: center;
        }
        .table_2_3 td {
            font-size: 15px;
            border: 1px solid;
            text-align: center;
            padding: 7px 10px 7px 5px;
        }
        .table_6 td {
            vertical-align: bottom;
            font-size: 15px;
            border: 1px solid;
            padding: 5px;
        }
        .table_14 td {
            text-align: center;
            font-size: 90%;
            border: 1px solid;
            padding: 5px;
        }
        .table_16 td {
            vertical-align: top;
            font-size: 90%;
            border: 1px solid;
            padding: 10px;
        }
    `;
}

function getPrintMediaStyles() {
    return `
        @media print {
            .no-print { display: none !important; }
            body {
                padding: 0 !important;
                background: white !important;
            }
            .print-controls, .variant-title { display: none !important; }
            .print-content {
                box-shadow: none !important;
                padding: 0 !important;
                background: none !important;
            }
            .print-task {
                border-bottom: 1px solid #ddd !important;
                margin-bottom: 15px !important;
            }
            .correct-answers-section {
                page-break-before: always;
                margin-top: 30px !important;
                padding: 20px 0 !important;
                background: none !important;
            }
            .table_4 td { font-size: 17px; padding: 3px 10px; }
            .table_6 td { font-size: 11px; padding: 3px; }
            .table_14 td { font-size: 40%; padding: 4px; }
        }
        @media (max-width: 768px) {
            .print-content.horizontal { column-count: 1; }
            .controls-group { flex-direction: column; }
            .print-controls button { width: 100%; justify-content: center; }
        }
    `;
}

// Обработка ошибок
function showError(message) {
    alert(message);
    console.error(message);
}

// Глобальный обработчик ошибок
window.addEventListener('error', function(e) {
    console.error('🌐 Global error in print script:', e.error);
});


// import { correctAnswer } from "./showTasks.js";
// import { correctAnswerVars } from "./showTasksVars.js";
// import { correctAnswerGen } from "./generatorR.js";

// document.addEventListener('DOMContentLoaded', function() {
//     const printButton = document.getElementById('button-print');
//     if (!printButton) {
//         console.warn(' Кнопка печати не найдена');
//         return;
//     }

//     printButton.addEventListener('click', function(e) {
//         e.preventDefault();
//         preparePrintView();
//     });
// });

// // Генерация и кэширование номера варианта
// const generateVariantNumber = () => {
//     let num = localStorage.getItem('printVariantNumber');
//     if (!num) {
//         num = Math.floor(Math.random() * 1001) + 1000;
//         localStorage.setItem('printVariantNumber', num);
//     }
//     return parseInt(num);
// };
// const randomNumber = generateVariantNumber();

// function preparePrintView() {
//     try {
//         const slides = Array.from(document.querySelectorAll('.slide:not(.results-slide)'));
//         if (slides.length === 0) {
//             showError('Не найдены слайды для печати');
//             return;
//         }

//         const breadLast = document.querySelector('.breadcrumb .bread-last a');
//         const variantName = breadLast?.textContent?.trim() || `Вариант ${randomNumber}`;
//         const isGeneratedVariant = !breadLast || !breadLast.textContent?.trim();
        
//         let printContent = '';
//         let correctAnswersContent = '';

//         // Заголовок для ключей
//         correctAnswersContent = `<div class="correct-answers-section">
//             <h3 style="text-align: left; margin-bottom: 20px;">
//                 ${isGeneratedVariant ? `Ключи к варианту № ${randomNumber}` : `${variantName} (ключи)`}
//             </h3>
//             <div style="display: flex; flex-wrap: wrap; gap: 5px;">`;

//         slides.forEach((slide, index) => {
//             const slideClone = slide.cloneNode(true);
            
//             //Очистка слайда для печати (расширенная)
//             cleanSlideForPrint(slideClone);
            
//             //Определение номера задания с учётом 13.1 / 13.2
//             const taskNumber = getTaskNumber(index, slides.length);
            
//             //Добавление номера задания в контент
//             const contentWithNumber = addTaskNumber(slideClone.innerHTML, taskNumber);
            
//             //printContent += `<div class="print-task" data-task="${taskNumber}">${contentWithNumber}</div>`;
            
//             //Правильные ответы только для первых 12 заданий (как в оригинале)
//             if (index < 19) {
//                 const correctAnswerForTask = getCorrectAnswer(index);
//                 if (correctAnswerForTask) {
//                     correctAnswersContent += createAnswerTableRow(taskNumber, correctAnswerForTask);
//                 }
//             }
//         });

//         correctAnswersContent += '</div></div>';

//         // Создание окна печати
//         createPrintWindow(printContent, correctAnswersContent, variantName, isGeneratedVariant);
        
//     } catch (error) {
//         console.error(' Ошибка при подготовке к печати:', error);
//         showError('Произошла ошибка при подготовке к печати');
//     }
// }

// //Вспомогательная функция: очистка слайда
// function cleanSlideForPrint(slide) {
//     slide.removeAttribute('data-task-id');
//     slide.classList.remove('slide', 'active');
//     slide.classList.add('print-slide');
    
//     // Удаляем интерактивные и служебные элементы
//     const selectorsToRemove = [
//         '.slider-btn', '.download-btn', '.answer-block', '.download', 
//         '.print', '.text-inform', '.hr-between', '.no-print',
//         'button', 'input', 'textarea', 'details', 'hr'
//     ];
    
//     selectorsToRemove.forEach(selector => {
//         slide.querySelectorAll(selector).forEach(el => el.remove());
//     });
    
//     // Оптимизация изображений
//     slide.querySelectorAll('img').forEach(img => {
//         img.style.maxWidth = '95%';
//         img.style.height = 'auto';
//         img.style.display = 'block';
//         img.style.margin = '10px auto';
//     });
// }

// //Вспомогательная функция: номер задания
// // function getTaskNumber(index, totalSlides) {
// //     if (totalSlides > 14) {
// //         if (index === 12) return '13.1';
// //         if (index === 13) return '13.2';
// //     }
// //     return (index + 1).toString();
// // }

// // Вспомогательная функция: добавление номера в контент
// function addTaskNumber(content, taskNumber) {
//     return `<div class="task-number-print" style="color:#2196F3;font-weight:500;margin-bottom:10px;padding-bottom:8px;border-bottom:2px solid #e3f2fd;">
//         Задание ${taskNumber}
//     </div>${content}`;
// }

// // Вспомогательная функция: получение правильного ответа с приоритетом источников
// function getCorrectAnswer(index) {
//     const sources = [correctAnswer, correctAnswerVars, correctAnswerGen];
    
//     for (const source of sources) {
//         if (source && Array.isArray(source) && source[index] !== undefined) {
//             const val = source[index];
//             if (val !== null && val !== '' && val !== 'null') {
//                 return val.toString().trim();
//             }
//         }
//     }
//     console.warn(`Ответ для задания ${index + 1} не найден`);
//     return '—';
// }

// // Вспомогательная функция: строка таблицы ответов
// function createAnswerTableRow(taskNumber, answer) {
//     return `
//         <table style="border:1px solid #ccc;border-collapse:collapse;margin:2px;font-size:14px;">
//             <tr>
//                 <td style="width:60px;border:1px solid #ccc;padding:8px 5px;text-align:center;font-weight:bold;">${taskNumber}</td>
//                 <td style="width:170px;border:1px solid #ccc;padding:8px 5px;text-align:center;">${answer}</td>
//             </tr>
//         </table>
//     `;
// }

// //Создание окна печати
// function createPrintWindow(printContent, correctAnswersContent, variantName, isGeneratedVariant) {
//     const printWindow = window.open('', '_blank');
//     if (!printWindow) {
//         showError('Разрешите всплывающие окна для печати');
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
//             <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap">
//             <style>${getPrintStyles()}</style>
//         </head>
//         <body>
//             <div class="print-controls no-print">
//                 <div class="controls-group">
//                     <button onclick="printVertical()" class="btn-primary">Вертикальная</button>
//                     <button onclick="printHorizontal()" class="btn-secondary">Горизонтальная</button>
//                     <button onclick="window.close()" class="btn-cancel">✕ Закрыть</button>
//                 </div>    
//             </div>
            
//             <div class="variant-title"><p>${finalVariantName}</p></div>
            
//             <div class="print-content vertical task-numbers__block">
//                 ${printContent}
//             </div>
            
//             ${correctAnswersContent}
            
//             <script>
//                 function printVertical() {
//                     document.querySelector('.print-content').className = 'print-content vertical task-numbers__block';
//                     setTimeout(() => window.print(), 300);
//                 }
//                 function printHorizontal() {
//                     document.querySelector('.print-content').className = 'print-content horizontal task-numbers__block';
//                     setTimeout(() => window.print(), 300);
//                 }
//             <\/script>
//         </body>
//         </html>
//     `);
    
//     printWindow.document.close();
//     printWindow.focus();
// }

// // Стили для печати (модульные функции)
// function getPrintStyles() {
//     return `
//         ${getBaseStyles()}
//         ${getPrintControlsStyles()}
//         ${getPrintContentStyles()}
//         ${getAnswerTableStyles()}
//         ${getPrintMediaStyles()}
//     `;
// }

// function getBaseStyles() {
//     return `
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         body {
//             font-family: 'Roboto', sans-serif;
//             line-height: 1.5;
//             color: #333;
//             padding: 10px;
//             background: #f5f5f5;
//         }
//         @page { size: auto; margin: 15mm; }
//     `;
// }

// function getPrintControlsStyles() {
//     return `
//         .print-controls {
//             background: white;
//             padding: 15px;
//             margin-bottom: 20px;
//             border-radius: 8px;
//             box-shadow: 0 2px 10px rgba(0,0,0,0.1);
//             position: sticky;
//             top: 0;
//             z-index: 100;
//         }
//         .controls-group {
//             display: flex;
//             gap: 10px;
//             margin-bottom: 10px;
//             flex-wrap: wrap;
//         }
//         .print-controls button {
//             padding: 10px 20px;
//             border: none;
//             border-radius: 4px;
//             cursor: pointer;
//             font-size: 14px;
//             font-weight: 500;
//             display: flex;
//             align-items: center;
//             gap: 8px;
//             transition: all 0.2s;
//         }
//         .btn-primary { background: #2196F3; color: white; }
//         .btn-primary:hover { background: #1976D2; }
//         .btn-secondary { background: #4CAF50; color: white; }
//         .btn-secondary:hover { background: #388E3C; }
//         .btn-cancel { background: #f5f5f5; color: #666; }
//         .btn-cancel:hover { background: #e0e0e0; }
//         .info {
//             display: flex;
//             justify-content: space-between;
//             color: #666;
//             font-size: 14px;
//             padding-top: 10px;
//             border-top: 1px solid #eee;
//         }
//         .page-info {
//             background: #e3f2fd;
//             padding: 2px 8px;
//             border-radius: 3px;
//         }
//     `;
// }

// function getPrintContentStyles() {
//     return `
//         .variant-title {
//             text-align: center;
//             font-size: 24px;
//             color: #333;
//             margin: 20px 0;
//         }
//         .print-content {
//             background: white;
//             padding: 15px;
//             border-radius: 8px;
//             box-shadow: 0 2px 10px rgba(0,0,0,0.05);
//         }
//         .print-content.vertical { column-count: 1; }
//         .print-content.horizontal {
//             column-count: 2;
//             column-gap: 30px;
//         }
//         .print-task {
//             break-inside: avoid;
//             page-break-inside: avoid;
//             margin-bottom: 25px;
//             padding-bottom: 20px;
//             border-bottom: 1px solid #eee;
//         }
//         .print-task:last-child { border-bottom: none; }
//         .print-task img {
//             max-width: 90% !important;
//             height: auto !important;
//             margin: 10px 0;
//             border: 1px solid #ddd;
//             border-radius: 4px;
//         }
//         .task-numbers__block .img-task_9,
//         .task-numbers__block .img-13 { width: 50% !important; }
//         .task-numbers__block .img-13_2 { width: 80% !important; }
//     `;
// }

// function getAnswerTableStyles() {
//     return `
//         .correct-answers-section {
//             margin-top: 40px;
//             padding: 25px;
//             background: white;
//             border-radius: 8px;
//             page-break-before: always;
//         }
//         .correct-answers-section h3 {
//             color: #333;
//             margin-bottom: 20px;
//             padding-bottom: 10px;
//             border-bottom: 2px solid #4CAF50;
//         }
//         /* Ваши таблицы */
//         .table_2_1, .table_2_3, .table_4, .table_6, .table_14, .table_16 {
//             border-collapse: collapse;
//             width: 100%;
//         }
//         .table_2_1 td, .table_4 td {
//             font-size: 15px;
//             border: 1px solid;
//             padding: 5px 15px;
//             text-align: center;
//         }
//         .table_2_3 td {
//             font-size: 15px;
//             border: 1px solid;
//             text-align: center;
//             padding: 7px 10px 7px 5px;
//         }
//         .table_6 td {
//             vertical-align: bottom;
//             font-size: 15px;
//             border: 1px solid;
//             padding: 5px;
//         }
//         .table_14 td {
//             text-align: center;
//             font-size: 90%;
//             border: 1px solid;
//             padding: 5px;
//         }
//         .table_16 td {
//             vertical-align: top;
//             font-size: 90%;
//             border: 1px solid;
//             padding: 10px;
//         }
//     `;
// }

// function getPrintMediaStyles() {
//     return `
//         @media print {
//             .no-print { display: none !important; }
//             body {
//                 padding: 0 !important;
//                 background: white !important;
//             }
//             .print-controls, .variant-title { display: none !important; }
//             .print-content {
//                 box-shadow: none !important;
//                 padding: 0 !important;
//                 background: none !important;
//             }
//             .print-task {
//                 border-bottom: 1px solid #ddd !important;
//                 margin-bottom: 15px !important;
//             }
//             .correct-answers-section {
//                 page-break-before: always;
//                 margin-top: 30px !important;
//                 padding: 20px 0 !important;
//                 background: none !important;
//             }
//             /* Адаптация таблиц при печати */
//             .table_4 td { font-size: 17px; padding: 3px 10px; }
//             .table_6 td { font-size: 11px; padding: 3px; }
//             .table_14 td { font-size: 40%; padding: 4px; }
//         }
//         @media (max-width: 768px) {
//             .print-content.horizontal { column-count: 1; }
//             .controls-group { flex-direction: column; }
//             .print-controls button { width: 100%; justify-content: center; }
//         }
//     `;
// }

// // Обработка ошибок
// function showError(message) {
//     alert(message);
//     console.error(message);
// }

// // Глобальный обработчик ошибок
// window.addEventListener('error', function(e) {
//     console.error('Global error in print script:', e.error);
// });



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
        
//         let taskNumber = index + 6;
        
    
//         const sliderBtn = slideClone.querySelector('.slider-btn');
//         if (sliderBtn) sliderBtn.remove();
        
//         printContent += `<div class="print-task">${slideClone.innerHTML}</div>`;
        
//         // Получение и вывод правильного ответа только для первых 12 заданий
//         if (index < 20) {
            
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
//                    //display: flex;
//                    //flex-wrap: wrap;
//                    gap: 20px;
                   
                   
//                 }
//                 .tasks-blocks{
//                     border: none !important;
//                     margin-bottom: 0 !important;
//                     padding: 0 !important;
//                     background-color: transparent !important;
                    
//                 }
//                 .print-content.horizontal .print-task {
//                     width: calc(50% - 10px);
//                     box-sizing: border-box;
//                 }
//                 .download-btn, .answer-block, .download, .print, .hr-between, .text-inform {
//                          display: none !important;
//                 }
//                 hr:nth-last-child(-n + 5) {
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
//                     hr:nth-last-child(-n + 5) {
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

// document.addEventListener("DOMContentLoaded", () => {
//     const btn = document.getElementById("button-print");
//     if (btn) btn.addEventListener("click", preparePrintView);
// });

// const randomNumber = Math.floor(Math.random() * 1001) + 1000;

// function getVariantName() {
//     const el = document.querySelector(".breadcrumb .bread-last a");
//     return el?.textContent || `Вариант ${randomNumber}`;
// }

// function getCorrectAnswer(index) {
//     if (correctAnswer?.length) return correctAnswer[index];
//     if (correctAnswerVars?.length > index) return correctAnswerVars[index];
//     if (correctAnswerGen?.length) return correctAnswerGen[index];
//     return "";
// }

// function preparePrintView() {

//     const slides = document.querySelectorAll(".slide:not(.results-slide)");
//     const variantName = getVariantName();

//     let tasksHTML = "";
//     let answersHTML = `
//         <div>
//             <h3 style="text-align:left">
//                 ${variantName} (ключи)
//             </h3>
//         </div>
//     `;

//     slides.forEach((slide, i) => {

//         const clone = slide.cloneNode(true);

//         clone.classList.remove("slide", "active");
//         clone.removeAttribute("data-task-id");

//         const sliderBtn = clone.querySelector(".slider-btn");
//         if (sliderBtn) sliderBtn.remove();

//         tasksHTML += `<div class="print-task">${clone.innerHTML}</div>`;

//         if (i < 20) {

//             const taskNumber = i + 6;
//             const answer = getCorrectAnswer(i);

//             answersHTML += `
//                 <table class="answers-table">
//                     <tr>
//                         <td>${taskNumber}</td>
//                         <td>${answer}</td>
//                     </tr>
//                 </table>
//             `;
//         }
//     });

//     const printWindow = window.open("", "_blank");

//     printWindow.document.write(createPrintTemplate(variantName, tasksHTML, answersHTML));
//     printWindow.document.close();

//     copyStyles(printWindow);
// }

// function createPrintTemplate(title, tasks, answers) {

// return `
// <!DOCTYPE html>
// <html lang="ru">
// <head>

// <meta charset="UTF-8">
// <title>${title}</title>

// <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

// <style>

// @page{
//     margin:10mm;
// }

// body{
//     font-family:Roboto, sans-serif;
//     padding:30px 120px;
//     background:white;
// }

// .print-options{
//     display:flex;
//     justify-content:center;
//     gap:20px;
//     margin-bottom:20px;
// }

// .print-options button{
//     padding:10px 18px;
//     border:none;
//     background:#4CAF50;
//     color:white;
//     border-radius:4px;
//     cursor:pointer;
// }

// .print-options button:hover{
//     background:#45a049;
// }

// .print-task{
//     page-break-inside:avoid;
//     margin-bottom:8px;
// }

// .answers-table{
//     border-collapse:collapse;
//     margin-bottom:6px;
// }

// .answers-table td{
//     border:1px solid;
//     padding:6px 14px;
//     text-align:center;
// }

// .correct-answers-section{
//     break-before:page;
// }

// .horizontal{
//     column-count:2;
//     column-gap:20px;
// }

// @media print{

//     body{
//         padding:0;
//         font-size:10px;
//     }

//     .print-options{
//         display:none;
//     }

// }

// </style>
// </head>

// <body>

// <div class="print-options">
// <button onclick="setVertical()">Вертикальная</button>
// <button onclick="setHorizontal()">Горизонтальная</button>
// </div>

// <h2 style="text-align:center">${title}</h2>

// <div id="content" class="vertical">
// ${tasks}
// </div>

// <div class="correct-answers-section">
// ${answers}
// </div>

// <script>

// function setVertical(){
//     document.getElementById('content').className='vertical';
//     setTimeout(()=>window.print(),100);
// }

// function setHorizontal(){
//     document.getElementById('content').className='horizontal';
//     setTimeout(()=>window.print(),100);
// }

// </script>

// </body>
// </html>
// `;
// }

// function copyStyles(win){

//     const styles = document.querySelectorAll('link[rel="stylesheet"], style');

//     styles.forEach(style => {

//         if (style.href) {

//             const link = win.document.createElement("link");
//             link.rel = "stylesheet";
//             link.href = style.href;
//             win.document.head.appendChild(link);

//         } else {

//             const styleTag = win.document.createElement("style");
//             styleTag.textContent = style.textContent;
//             win.document.head.appendChild(styleTag);
//         }
//     });
// }