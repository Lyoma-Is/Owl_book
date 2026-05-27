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
       
        <table style="border:1px solid #ccc; border-collapse:collapse;margin:2px;font-size:14px;">
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
        .table_2_1, .table_2_3, .table_4, .table_6, .table_14, .table_16, table{
            border-collapse: collapse;
            
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
        table td{
            border: 1px solid;
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
