
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
    const inputColv = document.querySelector('.input-colv');
    
    // Проверка существования элементов
    if (!checkboxesContainer || !selectAllBtn || !deselectAllBtn || !generateBtn || !taskOutput || !inputColv) {
        console.error('Не найдены необходимые DOM элементы');
        return;
    }
    
    // Настройки
    const TOTAL_TASKS = 25; // От 1 до 25
    const taskDataCache = new Map();
    let REPEAT_COUNT = parseInt(inputColv.value) || 5;

    inputColv.addEventListener('input', function() {
        REPEAT_COUNT = parseInt(this.value) || 5;
    });

    // Инициализация чекбоксов
    function initCheckboxes() {
        checkboxesContainer.innerHTML = '';
        
        // Создаем одну строку для всех чекбоксов
        const rowDiv = document.createElement('div');
        rowDiv.className = 'checkbox-row';
        
        // Первый чекбокс "1-5"
        const firstContainer = createCheckboxItem("1-5", "1-5");
        rowDiv.appendChild(firstContainer);
        
        // Чекбоксы от 6 до 25
        for (let taskNum = 6; taskNum <= TOTAL_TASKS; taskNum++) {
            const taskId = taskNum.toString();
            const container = createCheckboxItem(taskId, taskId);
            rowDiv.appendChild(container);
        }
        
        // Добавляем строку с всеми чекбоксами
        checkboxesContainer.appendChild(rowDiv);

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
        ).map(checkbox => checkbox.value);
        
        if (selectedTasks.length === 0) {
            taskOutput.innerHTML = '<div class="error-message">Пожалуйста, выберите хотя бы одно задание</div>';
            return;
        }

        // Сохраняем выбранные задания
        localStorage.setItem('selectedTasks', JSON.stringify(selectedTasks));

        try {
            // Загружаем данные для выбранных заданий
            const fetchPromises = Object.entries(taskSources)
                .filter(([key]) => selectedTasks.some(selectedTask => {
                    if (selectedTask === "1-5") {
                        return key === "onefive";
                    } else {
                        return parseInt(selectedTask) === getTaskNumber(key);
                    }
                }))
                .map(async ([key, url]) => [key, await fetchJSON(url)]);
            
            const fetchedData = await Promise.all(fetchPromises);
            const dataMap = Object.fromEntries(fetchedData);
            
            // Генерируем HTML для заданий
            let tasksHTML = '';
            
            for (let i = 0; i < REPEAT_COUNT; i++) {
                for (const taskNum of selectedTasks) {
                    let taskKey;
                    
                    if (taskNum === "1-5") {
                        taskKey = "onefive";
                    } else {
                        taskKey = getTaskKey(parseInt(taskNum));
                    }
                    
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
        MathJax.typesetPromise();
    }
    

    // Вспомогательные функции для преобразования номеров заданий
    function getTaskNumber(key) {
        const numberMap = {
            onefive: "1-5",
            six: 6, 
            seven: 7, 
            eight: 8, 
            nine: 9, 
            ten: 10,
            eleven: 11, 
            twelve: 12, 
            thirteen: 13, 
            fourteen: 14,
            fifteen: 15, 
            sixteen: 16,
            seventeen: 17,
            eighteen: 18,
            nineteen: 19,
            twenty: 20,
            twentyone: 21,
            twentytwo: 22,
            twentythree: 23,
            twentyfour: 24,
            twentyfive: 25
        };
        return numberMap[key] || 0;
    }
    
    function getTaskKey(num) {
        const keyMap = {
            6: 'six', 
            7: 'seven', 
            8: 'eight', 
            9: 'nine', 
            10: 'ten',
            11: 'eleven', 
            12: 'twelve', 
            13: 'thirteen', 
            14: 'fourteen',
            15: 'fifteen', 
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',
            21: 'twentyone',
            22: 'twentytwo',
            23: 'twentythree',
            24: 'twentyfour',
            25: 'twentyfive'
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
        selectedTasks.forEach(task => {
            const checkbox = document.querySelector(`.task-checkbox[value="${task}"]`);
            if (checkbox) checkbox.checked = true;
        });
        generateTasks();
        
    }

    // Код для кнопки "Наверх"
    const container = document.querySelector('main .container');
    if (container) {
        container.insertAdjacentHTML('beforeend', '<div class="btn-up btn-up_hide"></div>');
        
        const btnUp = {
            el: document.querySelector('.btn-up'),
            show() {
                if (this.el) this.el.classList.remove('btn-up_hide');
            },
            hide() {
                if (this.el) this.el.classList.add('btn-up_hide');
            },
            addEventListener() {
                window.addEventListener('scroll', () => {
                    const scrollY = window.scrollY || document.documentElement.scrollTop;
                    scrollY > 400 ? this.show() : this.hide();
                });
                
                if (this.el) {
                    this.el.onclick = () => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        });
                    };
                }
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
      padding: 0;
      margin: 0;  
      line-height: 1.3 !important;
      -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      head{
      <script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
      }
      body {
        background: #fff !important;
        color: #000 !important;
      }
      .task-numbers__block {
        width: 100% !important;
        max-width: none !important;
       
        display: block !important;
            
      }
      .task-numbers__block img {
        max-width: 80% !important;
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


    }
    
});
