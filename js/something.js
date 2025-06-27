document.querySelector('.footer-text').innerHTML = `<b>© OwlExams.ru</b>`;

const container = document.querySelector('main .container');
container.insertAdjacentHTML('beforeend', '<div class="btn-up btn-up_hide"></div>');

const btnUp = {
      el: document.querySelector('.btn-up'),
      show() {
        // удалим у кнопки класс btn-up_hide
        this.el.classList.remove('btn-up_hide');
      },
      hide() {
        // добавим к кнопке класс btn-up_hide
        this.el.classList.add('btn-up_hide');
      },
      addEventListener() {
        // при прокрутке содержимого страницы
        window.addEventListener('scroll', () => {
          // определяем величину прокрутки
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
          scrollY > 400 ? this.show() : this.hide();
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
          // переместим в начало страницы
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }
    btnUp.addEventListener();


document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const checkboxesContainer = document.querySelector('.checkbox-container');
    const selectAllBtn = document.querySelector('.select-all');
    const deselectAllBtn = document.querySelector('.deselect-all');
    const generateBtn = document.querySelector('.generate-btn');
    
    // Настройки
    const TOTAL_TASKS = 16; // Общее количество заданий
    const TASKS_PER_ROW = 6; // Заданий в одной строке
    const taskDataCache = new Map(); // Кэш для загруженных данных
    const REPEAT_COUNT = 3; // Сколько раз повторять каждое задание

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
    }

    function createCheckboxItem(value, labelText) {
        const container = document.createElement('div');
        container.className = 'checkbox-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task-${value}`;
        checkbox.value = value;
        checkbox.checked = true;
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

    // Обработчики событий
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
    
    generateBtn.addEventListener('click', async function(e) {
        e.preventDefault();
        
        const selectedTasks = Array.from(
            document.querySelectorAll('.task-checkbox:checked')
        ).map(checkbox => {
            const value = checkbox.value;
            return value.includes('.') ? value : parseInt(value);
        });
        
        if (selectedTasks.length === 0) {
            alert('Пожалуйста, выберите хотя бы одно задание');
            return;
        }
        
        // Сохраняем выбранные задания в localStorage
        localStorage.setItem('selectedTasks', JSON.stringify(selectedTasks));
        
        // Переходим на страницу checkVars.html
        window.location.href = '../../pages/variants/tasksOgeInf/checkVars.html';
    });

    // Инициализация при загрузке страницы
    initCheckboxes();
});

