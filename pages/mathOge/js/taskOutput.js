import generateTaskHTML from "./viewTask.js";
import { tasks } from "./viewTask.js";

const tasksCache = new Map();
let totalTasksLoaded = 0;
let allTasks = []; 
let allTaskKec = {};
let countData = {};

async function fetchTasks(taskKey) {
  try {
    if (tasksCache.has(taskKey)) {
      return tasksCache.get(taskKey);
    }
 
    const response = await fetch(tasks[taskKey]);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    tasksCache.set(taskKey, data); 
    
    totalTasksLoaded += data.length;
    countData[taskKey] = data.length;
    
    //console.log(`Загружено ${data.length} задач из ${taskKey}`);
    setupFilters(taskKey, data); 
    if(showTaskCount2){
      showTaskCount2.innerHTML = `<hr class="hr-pd_5">Общее количество задач: ${totalTasksLoaded}`
    }

   
    data.forEach(task => {
      task.source = taskKey; 
      allTasks.push(task);
      
      allTaskKec[task.taskCounter] = task.taskKec
    });
  
    return data;
  } catch (error) {
    //console.error(`Ошибка загрузки ${taskKey}:`, error);
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
  console.log(` задач: ${totalTasksLoaded}`);
  
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
  filterTasks(); 
}

function displayTasks(taskKey, tasksToDisplay) {
  const output = document.querySelector(`.task-${taskKey}-numbers__block`);
  if (!output) return;
  
  output.innerHTML = tasksToDisplay.map(item => generateTaskHTML(taskKey, item)).join('');
  countLabel.innerHTML = `<hr class="hr-pd_5">Количество загруженных задач: ${countData[taskKey]}`
  
}


document.addEventListener('DOMContentLoaded', () => {
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


const taskPage = document.getElementById('select-task');
taskPage.innerHTML = ` 
<option value="taskFoundPage.html">Выберите задание по типу</option>
<option value="taskSixPage.html">6. Числа и вычисления.</option>
<option value="taskSevenPage.html">7. Числовые неравенства. Координатная прямая.</option>
<option value="taskEightPage.html">8. Вычисления степенных и иррациональных выражений.</option>
<option value="taskNinePage.html">9. Уравнения, Квадратные уравнения.</option>
<option value="taskTenPage.html">10. Теория вероятностей.</option>
<option value="taskElevenPage.html">11. Графики функций.</option>
<option value="taskTwelvePage.html">12. Расчёты по формулам.</option>
<option value="taskThirteenPage.html">13. Не­ра­вен­ства, системы неравенств.</option>
<option value="taskFourteenPage.html">14. Задачи на прогрессии.</option>
<option value="taskFifteenPage.html">15. Треугольник.</option>
<option value="taskSixteenPage.html">16. Окружность, круг и их элементы.</option>
<option value="taskSeventeenPage.html">17. Четырёхугольники.</option>
<option value="taskEighteenPage.html">18. Фигуры на квадратной решётке.</option>
<option value="taskNineteenPage.html">19. Анализ геометрических высказываний.</option>
<option value="taskTwentyPage.html">20. Алгебраические выражения, уравнения, системы уравнений, неравенства.</option>
`

//<option value="taskOnePage.html">1. .</option>
//<option value="taskTwoPage.html">2. .</option>
//<option value="taskThreePage.html">3. .</option>
//<option value="taskFourPage.html">4. .</option>
//<option value="taskFivePage.html">5. .</option>

const taskSort = document.getElementById('taskSort');
if (taskSort) {
    taskSort.innerHTML = `
       <option value='1'>новые</option>
       <option value='0'>по возрастанию</option>
       <option value='1'>по убыванию</option>
       <option value='2'>случайный порядок</option>
`
}

document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'text-inform-button') {
    const textInform = e.target.closest('.text-inform');
    if (!textInform) {
      console.error('Не найден элемент .text-inform');
      return;
    }
    
    const informBlock = textInform.querySelector('.inform-block');
    if (!informBlock) {
      console.log('Не найден элемент .inform-block');
      return;
    }
    const currentPage = window.location.pathname.split('/').pop();

    const PAGE_TO_KEC = {
      // 'taskOnePage.html': 1,
      // 'taskTwoPage.html': 2,
      // 'taskThreePage.html': 3,
      // 'taskFourPage.html': 4,
      // 'taskFivePage.html': 5,
      'taskSixPage.html': 6,
      'taskSevenPage.html': 7,
      'taskEightPage.html': 8,
      'taskNinePage.html': 9,
      'taskTenPage.html': 10,
      'taskElevenPage.html': 11,
      'taskTwelvePage.html': 12,
      'taskThirteenPage.html': 13,
      'taskFourteenPage.html': 14,
      'taskFifteenPage.html': 15,
      'taskSixteenPage.html': 16,
      'taskSeventeenPage.html': 17,
      'taskEighteenPage.html': 18,
      'taskNineteenPage.html': 19,
      'taskTwentyPage.html': 20
    };

    const Kec = PAGE_TO_KEC[currentPage];
    if (!Kec) {
      console.error('Не определен КЭС для страницы:', currentPage);
      return;
    }
    const textInformElement = e.target.closest('.text-inform');
    const taskCounter = parseInt(textInformElement.getAttribute('data-task-counter'));  
    const foundTask = allTasks.find(task => task.taskCounter === taskCounter);
    let valuesSource;

    const taskEntries = Object.entries(allTaskKec);
    taskEntries.forEach(([key, value]) => {
      if ( +key === foundTask.taskCounter){
        valuesSource = value[2];
        
      }       
    });

    const KEC_DESCRIPTIONS = {
      // 1: "КЭС: ",
      // 2: "КЭС: ",
      // 3: "КЭС: ",
      // 4: "КЭС: ",
      // 5: "КЭС: ",
      6: "КЭС: 1.2 Обыкновенные и десятичные дроби, проценты, бесконечные периодические дроби.<br>КЭС: 1.3 Рациональные числа. Арифметические операции с рациональными числами.",
      7: "КЭС: 1.2 Обыкновенные и десятичные дроби, проценты, бесконечные периодические дроби.<br>КЭС: 1.3 Рациональные числа. Арифметические операции с рациональными числами.<br>КЭС: 1.4 Действительные числа. Арифметические операции с действительными числами.<br>КЭС: 2.5 Арифметический корень натуральной степени. Действия с арифметическими корнями натуральной степени.<br> КЭС: 6.1 Координатная прямая.",
      8: "КЭС: 2.2 Степень с целым показателем. Степень с рациональным показателем. Свойства степени.",
      9: "КЭС: 3.1 Целые и дробно-рациональные уравнения. Системы и совокупности уравнений.",
      10: "КЭС: 8.2 Вероятность.",
      11: "КЭС: 5.1 Функция, способы задания функции. График функции. Область определения и множество значений функции. Нули функции. Промежутки знакопостоянства. Промежутки монотонности функции. Максимумы и минимумы функции. Наибольшее и наименьшее значение функции на промежутке.<br>КЭС: 6.2 Декартовы координаты на плоскости.",
      12: "КЭС:	1.5 Приближённые вычисления, правила округления, прикидка и оценка результата вычислений.<br>КЭС: 2.1 Буквенные выражения (выражения с переменными).<br>КЭС: 2.2 Степень с целым показателем. Степень с рациональным показателем. Свойства степени.<br>КЭС: 2.5 Арифметический корень натуральной степени. Действия с арифметическими корнями натуральной степени.",
      13: "КЭС: 3.2 Целые и дробно-рациональные неравенства. Системы и совокупности неравенств.",
      14: "КЭС: 4.2 Арифметическая и геометрическая прогрессии. Формула сложных процентов.",
      15: "КЭС: 7.2 Треугольник.<br>КЭС: 7.5 Измерение геометрических величин.",
      16: "КЭС: 7.2 Треугольник.<br>КЭС: 7.3 Многоугольники.<br>КЭС: 7.4 Окружность и круг.<br>КЭС: 7.5 Измерение геометрических величин.",
      17: "КЭС: 7.2 Треугольник.<br>КЭС: 7.3 Многоугольники.<br>КЭС: 7.5 Измерение геометрических величин.",
      18: "КЭС: 7.2 Треугольник.<br>КЭС: 7.3 Многоугольники.<br>КЭС: 7.4 Окружность и круг.<br>КЭС: 7.5 Измерение геометрических величин.",
      19: "КЭС: 7 Геометрия.<br>КЭС: 7.1 Геометрические фигуры и их свойства.",
      20: "КЭС: 2.1 Буквенные выражения (выражения с переменными).<br>КЭС: 2.3 Многочлены.<br>КЭС: 3.1 Целые и дробно-рациональные уравнения. Системы и совокупности уравнений."
    };

    let content = `
      <div><p style="font-size: 130%;">Источник: ${ 
        valuesSource === 1 ? `Банк ФИПИ`: 
        valuesSource === 2 ? `Решу ОГЭ`: 
        `Другой источник`
      
      
      }</p><button class="close-inform-button">✕</button></div>
      <div class="inform-content">
        <p>${KEC_DESCRIPTIONS[Kec]}</p>
      </div>
      
    `;
    
    informBlock.innerHTML = content;
    informBlock.classList.add('show');
    
    const closeButton = informBlock.querySelector('.close-inform-button');
    closeButton.addEventListener('click', function() {
      informBlock.classList.remove('show');
    });
  }
  
  if (e.target && e.target.classList.contains('close-inform-button')) {
    const informBlock = e.target.closest('.inform-block');
    if (informBlock) {
      informBlock.classList.remove('show');
    }
  }
});

