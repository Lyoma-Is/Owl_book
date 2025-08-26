
//document.querySelector('.footer-text').innerHTML = `<b>© OwlExams.ru</b>`;


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
    
    const TOTAL_TASKS = 21; 
    const TASKS_PER_ROW = 6;

    function initCheckboxes() {
        if(!checkboxesContainer){
           return 0
        }
        checkboxesContainer.innerHTML = '';
        const rowsNeeded = TASKS_PER_ROW;
        let taskCounter = 5;

        for (let row = 0; row < rowsNeeded; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'checkbox-row';
            
            for (let col = 1; col <= TASKS_PER_ROW; col++) {
                taskCounter++;
                if (taskCounter > TOTAL_TASKS) break;
                
                let taskId = taskCounter.toString();;
                
                
                const container = createCheckboxItem(taskId, taskId);
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
});