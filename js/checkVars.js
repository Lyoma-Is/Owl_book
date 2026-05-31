
const footerText = document.querySelector('.footer-text');
if (footerText) {
  footerText.innerHTML = `<b>© OwlExams.ru</b>`;
}

import generateTaskHTML from "./viewTask.js";
import { tasks as taskSources } from "./viewTask.js";


document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const checkboxesContainer = document.querySelector('.checkbox-container');
    const selectAllBtn = document.querySelector('.select-all');
    const deselectAllBtn = document.querySelector('.deselect-all');
    const generateBtn = document.querySelector('.generate-btn');
    const taskOutput = document.querySelector('.task-numbers__block');
    
    // Настройки
    const TOTAL_TASKS = 16;
    const TASKS_PER_ROW = 6;
    const taskDataCache = new Map();
    let REPEAT_COUNT = parseInt(document.querySelector('.input-colv')?.value) || 5;

    document.querySelector('.input-colv').addEventListener('input', function() {
        REPEAT_COUNT = parseInt(this.value) || 5;
    });

    // Инициализация чекбоксов
    function initCheckboxes() {
        checkboxesContainer.innerHTML = '';
        
        const rowsNeeded = Math.ceil(TOTAL_TASKS / TASKS_PER_ROW);
        
        for (let row = 0; row < rowsNeeded; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'checkbox-row';
            
            for (let col = 1; col <= TASKS_PER_ROW; col++) {
                const taskNum = row * TASKS_PER_ROW + col;
                if (taskNum > TOTAL_TASKS) break;
                
                if (taskNum === 13) {
                    // Специальная обработка для задания 13 (оно разделено на 13.1 и 13.2)
                    const container13_1 = createCheckboxItem('13.1', '13.1');
                    rowDiv.appendChild(container13_1);
                    
                    const container13_2 = createCheckboxItem('13.2', '13.2');
                    rowDiv.appendChild(container13_2);
                    continue;
                }
                
                const container = createCheckboxItem(taskNum.toString(), taskNum.toString());
                rowDiv.appendChild(container);
            }
            
            checkboxesContainer.appendChild(rowDiv);
        }

        // Восстанавливаем выбранные задания из localStorage
        const selectedTasks = JSON.parse(localStorage.getItem('selectedTasks')) || [];
        selectedTasks.forEach(task => {
            const checkbox = document.querySelector(`.task-checkbox[value="${task}"]`);
            if (checkbox) checkbox.checked = true;
        });
    }
    
    function createCheckboxItem(value, labelText) {
        const container = document.createElement('div');
        container.className = 'checkbox-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task-${value}`;
        checkbox.value = value;
        checkbox.className = 'task-checkbox';
        
        const label = document.createElement('label');
        label.htmlFor = `task-${value}`;
        label.textContent = labelText;
        
        container.appendChild(checkbox);
        container.appendChild(label);
        
        return container;
    }

    async function fetchJSON(url) {
        if (taskDataCache.has(url)) {
            return taskDataCache.get(url);
        }

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
            const data = await response.json();
            taskDataCache.set(url, data);
            return data;
        } catch (error) {
            console.error('Ошибка загрузки:', url, error);
            return null;
        }
    }

    async function generateTasks() {
        // Показываем сообщение о загрузке
        taskOutput.innerHTML = '<div class="loading-message">Идет генерация заданий...</div>';
        
        // Получаем выбранные задания
        const selectedTasks = Array.from(
            document.querySelectorAll('.task-checkbox:checked')
        ).map(checkbox => {
            const value = checkbox.value;
            return value.includes('.') ? value : parseInt(value);
        });
        
        if (selectedTasks.length === 0) {
            taskOutput.innerHTML = '<div class="error-message">Пожалуйста, выберите хотя бы одно задание</div>';
            return;
        }

        // Сохраняем выбранные задания
        localStorage.setItem('selectedTasks', JSON.stringify(selectedTasks));
        
        const collectedAnswers = [];

        try {
            // Загружаем данные для выбранных заданий
            const fetchPromises = Object.entries(taskSources)
                .filter(([key]) => selectedTasks.some(num => 
                    num.toString() === getTaskNumber(key).toString()
                ))
                .map(async ([key, url]) => [key, await fetchJSON(url)]);
            
            const fetchedData = await Promise.all(fetchPromises);
            const dataMap = Object.fromEntries(fetchedData);
            
            // Генерируем HTML для заданий
            let tasksHTML = '';
            
            for (let i = 0; i < REPEAT_COUNT; i++) {
                for (const taskNum of selectedTasks) {
                    const taskKey = getTaskKey(taskNum);
                    const data = dataMap[taskKey];
                    
                    if (data && data.length > 0) {
                        const randomTask = data[Math.floor(Math.random() * data.length)];
                        tasksHTML += generateTaskHTML(taskKey, randomTask);

                    }
                }
            }
            
            // Отображаем задания
            taskOutput.innerHTML = tasksHTML;
 

            
        } catch (error) {
            console.error('Ошибка генерации:', error);
            taskOutput.innerHTML = `
                <div class="error-message">
                    <p>Произошла ошибка при генерации заданий</p>
                </div>
            `;
        }
    }


    // Вспомогательные функции для преобразования номеров заданий
    function getTaskNumber(key) {
        const numberMap = {
            one: 1, two: 2, three: 3, four: 4, five: 5,
            six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
            eleven: 11, twelve: 12, thirteen: '13.1', 
            thirteentwo: '13.2', fourteen: 14,
            fifteen: 15, sixteen: 16
        };
        return numberMap[key] || 0;
    }
    
    function getTaskKey(num) {
        const keyMap = {
            1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
            6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
            11: 'eleven', 12: 'twelve', '13.1': 'thirteen', 
            '13.2': 'thirteentwo', 14: 'fourteen',
            15: 'fifteen', 16: 'sixteen'
        };
        return keyMap[num] || '';
    }

    // Назначаем обработчики событий
    selectAllBtn.addEventListener('click', function() {
        document.querySelectorAll('.task-checkbox').forEach(checkbox => {
            checkbox.checked = true;
        });
    });
    
    deselectAllBtn.addEventListener('click', function() {
        document.querySelectorAll('.task-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });
    });
    
    generateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        generateTasks();
    });

    // Инициализируем чекбоксы при загрузке страницы
    initCheckboxes();
    
    // Если есть сохраненные задания, генерируем их сразу
    const selectedTasks = JSON.parse(localStorage.getItem('selectedTasks')) || [];
    if (selectedTasks.length > 0) {
        generateTasks();
    }
});
const container = document.querySelector('main .container');
container.insertAdjacentHTML('beforeend', '<div class="btn-up btn-up_hide"></div>');
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        };
    }
};
btnUp.addEventListener();

/* ========================================
ФУНКЦИОНАЛ ПЕЧАТИ
======================================== */

// Внедряем стили для печати динамически
function injectPrintStyles() {
  if (document.getElementById('owl-print-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'owl-print-styles';
  style.media = 'print';
  style.textContent = `
    @media print {
      header, footer, nav, .controls, .checkbox-container,
      .generate-btn, .select-all, .deselect-all,
      .input-colv, .btn-up, #button-print, hr, .text-inform, .print, .download{
        display: none !important;
      }
     *{
      font-size: 9pt !important; 
      padding: 2px 0;
      margin: 2px 0;  
      line-height: 1.3 !important;
      -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      body {
        background: #fff !important;
        color: #000 !important;
      }
      .task-numbers__block {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
        display: block !important;
            
      }
      .task-numbers__block img {
        max-width: 50% !important;
        height: auto;
        page-break-inside: avoid;
      }
      a[href]:after {
        content: " (" attr(href) ")";
        font-size: 0.9em;
        color: #555;
      }
    }
  `;
  document.head.appendChild(style);
}

// Обработчик кнопки печати
function initPrintHandler() {
  const printBtn = document.querySelector('#button-print');
  if (!printBtn) return;
  
  // Основная кнопка
  printBtn.addEventListener('click', (e) => {
    e.preventDefault();
    doPrint();
  });
  
  // Клик по img внутри кнопки (если есть)
  const img = printBtn.querySelector('img');
  if (img) {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      doPrint();
    });
    // Убираем лишние события с картинки
    img.style.pointerEvents = 'none';
  }
}

// Логика печати
function doPrint() {
  const output = document.querySelector('.task-numbers__block');
  
  if (!output || !output.innerHTML.trim()) {
    alert('📄 Сначала сгенерируйте задания, затем печатайте');
    return;
  }
  
  // Внедряем стили (если ещё не внедрены)
  injectPrintStyles();
  
  // Добавляем класс для подготовки к печати
  document.body.classList.add('owl-printing');
  
  // Небольшая задержка для применения стилей
  setTimeout(() => {
    window.print();
    setTimeout(() => {
      document.body.classList.remove('owl-printing');
    }, 100);
  }, 50);
}

// Инициализируем после DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectPrintStyles();
    initPrintHandler();
  });
} else {
  injectPrintStyles();
  initPrintHandler();
}

