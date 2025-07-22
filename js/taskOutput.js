import generateTaskHTML from "./viewTask.js";
import { tasks } from "./viewTask.js";

// Кэш для хранения загруженных задач
const tasksCache = new Map();
let totalTasksLoaded = 0;
let allTasks = []; // Массив для хранения всех задач
let allTaskKec = {};
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
    
    //console.log(`Загружено ${data.length} задач из ${taskKey}`);
    setupFilters(taskKey, data); // Настраиваем фильтры после загрузки
    if(showTaskCount2){
      showTaskCount2.innerHTML = `<hr class="hr-pd_5">Общее количество задач: ${totalTasksLoaded}`
    }

   

    // Добавляем задачи в общий массив
    data.forEach(task => {
      task.source = taskKey; // Сохраняем источник задачи
      allTasks.push(task);
      
      allTaskKec[task.taskCounter] = task.taskKec
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
  //console.log(`Общее количество загруженных задач: ${totalTasksLoaded}`);
  
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

document.getElementById('select-task').addEventListener('change', function() {
  if(this.value) {
      window.location.href = this.value;
  }
});

// document.getElementById('select-task').addEventListener('change', function() {
//   if(this.value) {
//     // Сохраняем выбранное значение в localStorage
//     localStorage.setItem('selectedTaskPage', this.value);
//     window.location.href = this.value;
//   }
// });

// // При загрузке страницы восстанавливаем выбранное значение
// document.addEventListener('DOMContentLoaded', () => {
//   const savedSelection = localStorage.getItem('selectedTaskPage');
//   if (savedSelection) {
//     const select = document.getElementById('select-task');
//     select.value = savedSelection;
//   }
// });

const taskPage = document.getElementById('select-task');
taskPage.innerHTML = ` 
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
      'taskOnePage.html': 1,
      'taskTwoPage.html': 2,
      'taskThreePage.html': 3,
      'taskFourPage.html': 4,
      'taskFivePage.html': 5,
      'taskSixPage.html': 6,
      'taskSevenPage.html': 7,
      'taskEightPage.html': 8,
      'taskNinePage.html': 9,
      'taskTenPage.html': 10,
      'taskElevenPage.html': 11,
      'taskTwelvePage.html': 12,
      'taskThirteenPage.html': '13.1',
      'taskThirteenTwoPage.html': '13.2',
      'taskFourteenPage.html': 14,
      'taskFifteenPage.html': 15,
      'taskSixteenPage.html': 16
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
      1: "КЭС: 2.2 Информационный объём данных. Бит – минимальная единица количества информации – двоичный разряд. Единицы измерения информационного объёма данных. Бит, байт, килобайт, мегабайт, гигабайт. Скорость передачи данных. Единицы скорости передачи данных.",
      2: "КЭС: 2.1 Дискретность данных. Возможность описания непрерывных объектов и процессов с помощью дискретных данных. Символ. Алфавит. Мощность алфавита. Двоичный алфавит. Количество всевозможных слов (кодовых комбинаций) фиксированной длины в двоичном алфавите. Преобразование любого алфавита к двоичному. Количество различных слов фиксированной длины в алфавите определённой мощности. Кодирование символов одного алфавита с помощью кодовых слов в другом алфавите, кодовая таблица, декодирование. Кодирование текстов. Равномерный код. Неравномерный код. Кодировка ASCII. Восьмибитные кодировки. Понятие о кодировках UNICODE. Декодирование сообщений с использованием равномерного и неравномерного кода. Информационный объём текста.",
      3: "КЭС: 2.8 Логические элементы. Знакомство с логическими основами компьютера.",
      4: "КЭС: 2.11 Граф. Вершина, ребро, путь. Ориентированные и неориентированные графы. Длина (вес) ребра. Весовая матрица графа. Длина пути между вершинами графа. Поиск оптимального пути в графе. Начальная вершина (источник) и конечная вершина (сток) в ориентированном графе. Вычисление количества путей в направленном ациклическом графе.",
      5: "КЭС: 3.4 Определение возможных результатов работы алгоритма при данном множестве входных данных, определение возможных входных данных, приводящих к данному результату.",
      6: "КЭС: 3.2 Язык программирования (Python, C++, Паскаль, Java, C#, Школьный Алгоритмический Язык). Система программирования: редактор текста программ, транслятор, отладчик. Переменная: тип, имя, значение. Целые, вещественные и символьные переменные. Оператор присваивания. Арифметические выражения и порядок их вычисления. Операции с целыми числами: целочисленное деление, остаток от деления. Ветвления. Составные условия (запись логических выражений на изучаемом языке программирования). Нахождение минимума и максимума из двух, трёх и четырёх чисел. Решение квадратного уравнения, имеющего вещественные корни. Цикл с условием. Алгоритм Евклида для нахождения наибольшего общего делителя двух натуральных чисел. Разбиение записи натурального числа в позиционной системе с основанием, меньшим или равным 10, на отдельные цифры. Цикл с переменной. Алгоритмы проверки делимости одного целого числа на другое, проверки натурального числа на простоту.",
      7: "КЭС: 1.2 Объединение компьютеров в сеть. Сеть Интернет. Веб-страница, веб-сайт. Структура адресов веб-ресурсов. Браузер. Поисковые системы. Поиск информации по ключевым словам и по изображению. Достоверность информации, полученной из Интернета. IP-адреса узлов. Сетевое хранение данных.",
      8: "КЭС: 1.2 Объединение компьютеров в сеть. Сеть Интернет. Веб-страница, веб-сайт. Структура адресов веб-ресурсов. Браузер. Поисковые системы. Поиск информации по ключевым словам и по изображению. Достоверность информации, полученной из Интернета. IP-адреса узлов. Сетевое хранение данных.",
      9: "КЭС: 2.11 Граф. Вершина, ребро, путь. Ориентированные и неориентированные графы. Длина (вес) ребра. Весовая матрица графа. Длина пути между вершинами графа. Поиск оптимального пути в графе. Начальная вершина (источник) и конечная вершина (сток) в ориентированном графе. Вычисление количества путей в направленном ациклическом графе.",
      10: "КЭС: 2.7 Логические высказывания. Логические значения высказываний. Элементарные и составные высказывания. Логические операции: «и» (конъюнкция, логическое умножение), «или» (дизъюнкция, логическое сложение), «не» (логическое отрицание). Приоритет логических операций. Определение истинности составного высказывания, если известны значения истинности входящих в него элементарных высказываний. Логические выражения. Правила записи логических выражений. Построение таблиц истинности логических выражений.",
      11: "КЭС: 1.1 Файлы и папки (каталоги). Принципы построения файловых систем. Полное имя файла (папки). Путь к файлу (папке). Работа с файлами и каталогами средствами операционной системы: создание, копирование, перемещение, переименование и удаление файлов и папок (каталогов). Типы файлов. Свойства файлов. Файловый менеджер. Поиск файлов средствами операционной системы.",
      12: "КЭС: 1.1 Файлы и папки (каталоги). Принципы построения файловых систем. Полное имя файла (папки). Путь к файлу (папке). Работа с файлами и каталогами средствами операционной системы: создание, копирование, перемещение, переименование и удаление файлов и папок (каталогов). Типы файлов. Свойства файлов. Файловый менеджер. Поиск файлов средствами операционной системы.",
      13.1: "КЭС: 4.3 Подготовка мультимедийных презентаций. Слайд. Добавление на слайд текста и изображений. Работа с несколькими слайдами. Добавление на слайд аудиовизуальных данных. Анимация. Гиперссылки.",
      13.2: "КЭС: 4.1 Текстовые документы и их структурные элементы (страница, абзац, строка, слово, символ). Текстовый процессор – инструмент создания, редактирования и форматирования текстов. Правила набора текста. Редактирование текста. Свойства символов. Шрифт. Типы шрифтов (рубленые, с засечками, моноширинные). Полужирное и курсивное начертание. Свойства абзацев: границы, абзацный отступ, интервал, выравнивание. Параметры страницы. Стилевое форматирование. Структурирование информации с помощью списков и таблиц. Многоуровневые списки. Добавление таблиц в текстовые документы. Вставка изображений в текстовые документы. Обтекание изображений текстом. Включение в текстовый документ диаграмм, формул, нумерации страниц, колонтитулов, ссылок и других элементов.",
      14: "КЭС: 4.5 Условные вычисления в электронных таблицах. Суммирование и подсчёт значений, отвечающих заданному условию. Обработка больших наборов данных. Численное моделирование в электронных таблицах.",
      15: "КЭС: 3.1 Свойства алгоритма. Способы записи алгоритма (словесный, в виде блок-схемы, программа). Составление алгоритмов и программ с использованием ветвлений, циклов и вспомогательных алгоритмов для управления исполнителем Робот или другими исполнителями, такими как Черепашка, Чертёжник и другими. Выполнение алгоритмов вручную и на компьютере.",
      16: "КЭС: 3.2 Язык программирования (Python, C++, Паскаль, Java, C#, Школьный Алгоритмический Язык). Система программирования: редактор текста программ, транслятор, отладчик. Переменная: тип, имя, значение. Целые, вещественные и символьные переменные. Оператор присваивания. Арифметические выражения и порядок их вычисления. Операции с целыми числами: целочисленное деление, остаток от деления. Ветвления. Составные условия (запись логических выражений на изучаемом языке программирования). Нахождение минимума и максимума из двух, трёх и четырёх чисел. Решение квадратного уравнения, имеющего вещественные корни. Цикл с условием. Алгоритм Евклида для нахождения наибольшего общего делителя двух натуральных чисел. Разбиение записи натурального числа в позиционной системе с основанием, меньшим или равным 10, на отдельные цифры. Цикл с переменной. Алгоритмы проверки делимости одного целого числа на другое, проверки натурального числа на простоту."
    };

    // Формируем содержимое с кнопкой закрытия
    let content = `
      <div><p style="font-size: 130%;">Источник: ${ valuesSource === 1 ? `Банк ФИПИ`: valuesSource === 2 ? `Решу ОГЭ`: `Другой источник`}</p><button class="close-inform-button">✕</button></div>
      <div class="inform-content">
        <p>${KEC_DESCRIPTIONS[Kec]}</p>
      </div>
      
    `;
    
    informBlock.innerHTML = content;
    informBlock.classList.add('show');
    
    // Добавляем обработчик для кнопки закрытия
    const closeButton = informBlock.querySelector('.close-inform-button');
    closeButton.addEventListener('click', function() {
      informBlock.classList.remove('show');
    });
  }
  
  // Обработка клика по кнопке закрытия, если она уже существует
  if (e.target && e.target.classList.contains('close-inform-button')) {
    const informBlock = e.target.closest('.inform-block');
    if (informBlock) {
      informBlock.classList.remove('show');
    }
  }
});

