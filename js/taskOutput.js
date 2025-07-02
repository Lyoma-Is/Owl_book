import generateTaskHTML from "./viewTask.js";
import { tasks } from "./viewTask.js";

// Кэш для хранения загруженных задач
const tasksCache = new Map();
let totalTasksLoaded = 0;
let allTasks = []; // Массив для хранения всех задач
let countData = {};
async function fetchTasks(taskKey) {
  try {
    // Если задачи уже в кэше - используем их
    if (tasksCache.has(taskKey)) {
      return tasksCache.get(taskKey);
    }
 
    const response = await fetch(tasks[taskKey]);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    tasksCache.set(taskKey, data); // Сохраняем в кэш
    totalTasksLoaded += data.length;
    countData[taskKey] = data.length;
    console.log(`Загружено ${data.length} задач из ${taskKey}`);
    setupFilters(taskKey, data); // Настраиваем фильтры после загрузки
    if(showTaskCount2){
      showTaskCount2.innerHTML = `<hr class="hr-pd_5">Общее количество задач: ${totalTasksLoaded}`
    }
    

    // Добавляем задачи в общий массив
    data.forEach(task => {
      task.source = taskKey; // Сохраняем источник задачи
      allTasks.push(task);

    });

    return data;
  } catch (error) {
    console.error(`Ошибка загрузки ${taskKey}:`, error);
    return [];
  }
}

const showTaskCount = document.querySelector('.show-box');
const countLabel = document.createElement('label');
countLabel.className = 'label-text';
showTaskCount.appendChild(countLabel);

const showTaskCount2 = document.querySelector('.label-text_two');



async function loadAllTasks(taskKeys) {
  await Promise.all(taskKeys.map(fetchTasks));
  console.log(`Общее количество загруженных задач: ${totalTasksLoaded}`);
  
}

function setupFilters(taskKey, data) {
  const taskTypeEl = document.getElementById("taskType");
  const taskSortEl = document.getElementById("taskSort");

  if (!taskTypeEl || !taskSortEl) {
    
    return;
  }
  const filterTasks = () => {
    const selectedType = parseInt(taskTypeEl.value);
    const sortMethod = parseInt(taskSortEl.value);

    let filteredTasks = selectedType === 0 ? [...data] : data.filter(task => task.typeTask === selectedType);

    filteredTasks.sort((a, b) => {
      switch (sortMethod) {
        case 0: return a.taskCounter - b.taskCounter; // По возрастанию
        case 1: return b.taskCounter - a.taskCounter; // По убыванию
        case 2: return Math.random() - 0.5;           // Случайный порядок
        default: return 0;
      }
    });

    displayTasks(taskKey, filteredTasks);
    
  };

  taskTypeEl?.addEventListener("change", filterTasks);
  taskSortEl?.addEventListener("change", filterTasks);
  filterTasks(); // Инициализация
}

function displayTasks(taskKey, tasksToDisplay) {
  // Если переданы несколько задач (из фильтрации)
  const output = document.querySelector(`.task-${taskKey}-numbers__block`);
  if (!output) return;
  
  output.innerHTML = tasksToDisplay.map(item => generateTaskHTML(taskKey, item)).join('');
  countLabel.innerHTML = `<hr class="hr-pd_5">Количество загруженных задач: ${countData[taskKey]}`
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  // Загружаем все задачи при старте
  loadAllTasks(Object.keys(tasks));
  
});



document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('taskNumber');
  const searchBtn = document.getElementById('searchBtn');
  const resultContainer = document.getElementById('result');

  searchBtn.addEventListener('click', () => {
      const taskNumber = parseInt(searchInput.value, 10);
      if (isNaN(taskNumber) || taskNumber < 1) {
          resultContainer.innerHTML = '<p class="error">Введите корректный номер задачи!</p>';
          return;
      }

      const foundTask = allTasks.find(task => task.taskCounter === taskNumber);
      if (foundTask) {
          resultContainer.innerHTML = generateTaskHTML(foundTask.source, foundTask);
      } else {
          resultContainer.innerHTML = '<p class="error">Задача не найдена.</p>';
      }
  });

  searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          searchBtn.click();
      }
  });
});

// document.getElementById('select-task').addEventListener('change', function() {
//   if(this.value) {
//       window.location.href = this.value;
//   }
// });

document.getElementById('select-task').addEventListener('change', function() {
  if(this.value) {
    // Сохраняем выбранное значение в localStorage
    localStorage.setItem('selectedTaskPage', this.value);
    window.location.href = this.value;
  }
});

// При загрузке страницы восстанавливаем выбранное значение
document.addEventListener('DOMContentLoaded', () => {
  const savedSelection = localStorage.getItem('selectedTaskPage');
  if (savedSelection) {
    const select = document.getElementById('select-task');
    select.value = savedSelection;
  }
});

document.getElementById('select-task').innerHTML = ` 

<option value="taskFoundPage.html">Выберите задание по типу</option>
<option value="taskOnePage.html">1. Оценка объема памяти для хранения данных.</option>
<option value="taskTwoPage.html">2. Кодирование и декодирование информации.</option>
<option value="taskThreePage.html">3. Истинные и ложные высказывания.</option>
<option value="taskFourPage.html">4. Анализ таблицы. Поиск кратчайшего пути.</option>
<option value="taskFivePage.html">5. Анализ простых алгоритмов. Исполнители.</option>
<option value="taskSixPage.html">6. Программа с условным оператором.</option>
<option value="taskSevenPage.html">7. Принципы адресации в сети Интернет.</option>
<option value="taskEightPage.html">8. Анализ поисковых запросов сервера.</option>
<option value="taskNinePage.html">9. Анализ информации на схеме дорог.</option>
<option value="taskTenPage.html">10. Запись чисел в различных системах счисления.</option>
<option value="taskElevenPage.html">11. Поиск текста.</option>
<option value="taskTwelvePage.html">12. Подсчет количества файлов.</option>
<option value="taskThirteenPage.html">13.1 Создание презентации.</option>
<option value="taskThirteenTwoPage.html">13.2 Создание документа в текстовом редакторе.</option>
<option value="taskFourteenPage.html">14. Обработка большого массива данных.</option>
<option value="taskFifteenPage.html">15. Исполнитель Робот.</option>
<option value="taskSixteenPage.html">16. Напиши программу.</option>
`
const taskSort = document.getElementById('taskSort');
if (taskSort) {
    taskSort.innerHTML = `
       <option value='1'>новые</option>
       <option value='0'>по возрастанию</option>
       <option value='1'>по убыванию</option>
       <option value='2'>случайный порядок</option>
`
}



