
import  generateTaskHTML  from "./viewTask.js";
import {tasks} from "./viewTask.js";

async function fetchTasks(taskKey) {
  try {
      const response = await fetch(tasks[taskKey]);
      const data = await response.json();
      setupFilters(taskKey, data);
      if (dtMap[taskKey] !== data.length) {
        dtMap[taskKey] = data.length; // Запоминаем новую длину
        dt.push(data.length); // Добавляем в массив
    }
  } catch (error) {
      console.error(`Ошибка загрузки ${taskKey}:`, error);
  }
} // fetchTasks 
let dtMap = {};
let dt = []

async function loadAllTasks(taskKeys) {
  await Promise.all(taskKeys.map(fetchTasks));
  
  let r = dt.reduce((sum, num) => sum + num, 0);
  console.log(`Общее количество загруженных задач: ${r}`);
}

loadAllTasks(Object.keys(tasks));

function setupFilters(taskKey, data) {
  const taskTypeEl = document.getElementById("taskType");
  const taskSortEl = document.getElementById("taskSort");
  const filterTasks = () => {
      const selectedType = parseInt(taskTypeEl.value);
      const sortedTasks = parseInt(taskSortEl.value);

      let filteredTasks = selectedType === 0 ? data : data.filter(task => task.typeTask === selectedType);
      filteredTasks.sort((a, b) => {
        if (sortedTasks === 0) return a.taskCounter - b.taskCounter;
        if (sortedTasks === 1) return b.taskCounter - a.taskCounter;
        if (sortedTasks === 2) return Math.random() - 0.5;
      });
      displayTasks(taskKey, filteredTasks);
  };

  taskTypeEl.addEventListener("change", filterTasks);
  taskSortEl.addEventListener("change", filterTasks);
  filterTasks();
} // setupFilters

function displayTasks(taskKey, tasks) {
  const output = document.querySelector(`.task-${taskKey}-numbers__block`);
  if (!output) return;
  
  output.innerHTML = tasks.map(item => generateTaskHTML(taskKey, item)).join('');
} //displayTasks


fetchTasks('one');
fetchTasks('two');
fetchTasks('three');
fetchTasks('four');
fetchTasks('five');
fetchTasks('six');
// fetchTasks('seven');
// fetchTasks('eight');
// fetchTasks('nine');
fetchTasks('ten');

