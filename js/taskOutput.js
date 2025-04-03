import generateTaskHTML from "./viewTask.js";
import { tasks } from "./viewTask.js";

// Кэш для хранения загруженных задач
const tasksCache = new Map();
let totalTasksLoaded = 0;
let allTasks = []; // Массив для хранения всех задач

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
    
    console.log(`Загружено ${data.length} задач из ${taskKey}`);
    setupFilters(taskKey, data); // Настраиваем фильтры после загрузки

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

document.getElementById('select-task').addEventListener('change', function() {
  if(this.value) {
      window.location.href = this.value;
  }
});