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
const generateVariantNumber = () => Math.floor(Math.random() * 1001) + 1000;
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
        'textarea',
        'details',
        'hr'
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
    return `${content}`;
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
                    <button onclick="printVertical()" class="btn-primary">Вертикальная печать</button>
                    <button onclick="printHorizontal()" class="btn-secondary">Горизонтальная печать</button>
                    <button onclick="window.close()" class="btn-cancel"><span>✕</span> Закрыть</button>
                </div>
            </div>
            <div class="variant-title">
                <p >${finalVariantName}</p>
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
            text-align: center;
            font-size: 24px;
            color: #333;   
            margin-bottom: 20px;   
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
            max-width: 90% !important;
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

        .table_2_1{         
            border-collapse: collapse;
            td{
                font-size: 15px;
                border: 1px solid;
                padding: 5px 15px; 
                text-align: center; 
            }
        } 
        .table_2_3{         
            border-collapse: collapse;
            td{
                font-size: 15px;
                border: 1px solid;
                text-align: center; 
                padding: 7px 10px 7px 5px;
            }
        }
        .table_4{           
            border-collapse: collapse;
            td{
                font-size: 15px;
                border: 1px solid;
                padding: 5px 15px; 
                text-align: center; 
            }
        }  
        .table_6{
            border-collapse: collapse;
            td{
                vertical-align:bottom;
                font-size: 15px;
                border: 1px solid;
                padding: 5px ; 
            }
        } 
        .table_14{
            border-collapse: collapse;
            margin: auto;
            td{
                text-align: center;
                align-items: center;
                font-size: 90%;
                border: 1px solid;
                padding: 5px; 
                
            }
        }
        .table_16{
            border-collapse: collapse;
            td{
                vertical-align: top;
                font-size: 90%;
                border: 1px solid;
                padding: 10px;  
            }
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
            .task-numbers__block .img-task_9, .task-numbers__block .img-13{                        
                    width: 50% !important;                     }
                   .task-numbers__block .img-13_2{
                       width: 80% !important; 
                    }
            /* Увеличиваем отступы при печати */
            @page {
                margin: 20mm;
            }
            .table_4{           
                border-collapse: collapse;
                td{
                    font-size: 17px;
                    border: 1px solid;
                    padding: 3px 10px; 
                    text-align: center; 
                }
            } 
            .table_6{
                border-collapse: collapse;
                td{
                    vertical-align:bottom;
                    font-size: 11px;
                    border: 1px solid;
                    padding: 3px; 
                }
            } 
            .table_14{
                border-collapse: collapse;
                td{
                    text-align: center;
                    align-items: center;
                    font-size: 40%;
                    border: 1px solid;
                    padding: 4px;           
                }
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