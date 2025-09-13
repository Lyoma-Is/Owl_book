
const footerText = document.querySelector('.footer-text');
if (footerText) {
  footerText.innerHTML = `<b>© OwlExams.ru 2025</b>`;
}
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


document.addEventListener('DOMContentLoaded', function() {
    const checkboxesContainer = document.querySelector('.checkbox-container');
    const selectAllBtn = document.querySelector('.select-all');
    const deselectAllBtn = document.querySelector('.deselect-all');
    const generateBtn = document.querySelector('.generate-btn');
    
    const TOTAL_TASKS = 25; // От 1 до 25

    function initCheckboxes() {
        if(!checkboxesContainer){
           return 0
        }
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
        checkbox.checked = true;
        checkbox.className = 'task-checkbox';
        
        const label = document.createElement('label');
        label.htmlFor = `task-${value}`;
        label.textContent = labelText;
        
        container.appendChild(checkbox);
        container.appendChild(label);
        
        return container;
    }

    if(!selectAllBtn || !deselectAllBtn || !generateBtn){return 0 }
    
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
        
        const selectedTasks = Array.from(
            document.querySelectorAll('.task-checkbox:checked')
        ).map(checkbox => checkbox.value);

        if (selectedTasks.length === 0) {
            alert('Пожалуйста, выберите хотя бы одно задание');
            return;
        }
        
        try {
            localStorage.setItem('selectedTasks', JSON.stringify(selectedTasks));
            // Используем абсолютный путь (пример):
            window.location.href = '../../pages/mathOge/checkVars.html';

        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка перехода. Проверьте консоль для подробностей.');
        }
    });
    
    initCheckboxes();
    
    // Если есть сохраненные задания, устанавливаем их
    const selectedTasks = JSON.parse(localStorage.getItem('selectedTasks')) || [];
    if (selectedTasks.length > 0) {
        selectedTasks.forEach(task => {
            const checkbox = document.querySelector(`.task-checkbox[value="${task}"]`);
            if (checkbox) checkbox.checked = true;
        });
    }
});