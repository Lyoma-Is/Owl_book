
const tasks = {
  one: '/src/oge_inf/taskOne.json',
  ten: '/src/oge_inf/taskTen.json'
};
// const tasks = {
//   one: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskOne.json',
//   ten: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTen.json'
// };


async function fetchTasks(taskKey) {
  try {
  
      const response = await fetch(tasks[taskKey]);
      const data = await response.json();
      setupFilters(taskKey, data);
      dt.push(data.length - 1)
  } catch (error) {
      console.error(`Ошибка загрузки ${taskKey}:`, error);
  }
} // fetchTasks

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

function generateTaskHTML(taskKey, item) {
  let answerBlock = "";
  if (taskKey === 'one'){
    switch(item.typeTask){
       case 1:
          answerBlock += `
            <p class="p-num">№ ${item.taskCounter}</p>
            <p>${item.task1}</p>
            <hr class="hr-pd_20">
            <p><em>${item.task2}</em></p>
            <hr class="hr-pd_20">
            <p>${item.task3}</p>
            
            <p>${item.task4}</p>
            <hr class="hr-pd_20">
            <details>
              <summary class="p-num">Решение</summary>
              <hr class="hr-pd_10">
              <p>1) Один символ кодируется ${item.taskAnswer[1]} бит = ${item.taskAnswer[1]/8 < 2 ?  `${item.taskAnswer[1]/8} байт ` : `${item.taskAnswer[1]/8} байта`}</p> 
              <hr class="hr-pd_10">
              <p>2) ${item.taskAnswer[3] == "м" ? 
              `Вычеркнутое слово занимает ${item.taskAnswer[2]} байта</p> 
              <hr class="hr-pd_10"><p>3) Количество символов в слове ${item.taskAnswer[2]}/${item.taskAnswer[1]/8} = ${item.taskAnswer[2]/(item.taskAnswer[1]/8)} символов` : 
              `Добавленное слово занимает ${item.taskAnswer[2]} байта</p>
              <hr class="hr-pd_10"><p>3) Количество символов в слове ${item.taskAnswer[2]}/${item.taskAnswer[1]/8} = ${item.taskAnswer[2]/(item.taskAnswer[1]/8)} символов`} 
              </p> 
              <hr class="hr-pd_10">
              <p>4) C учетом пробела и запятой: ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))} - 2 = ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))-2} символа</p>
              <hr class="hr-pd_20">
              <p>Слово из ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))-2} букв - ${item.taskAnswer[0]}.</p>
              <hr class="hr-pd_20">
              Ответ: <b>${item.taskAnswer[0]}</b>
            </details>  
            <hr class="hr-pd_20">
            <hr class="hr-between">
            <hr class="hr-pd_20">
          `; return answerBlock
       case 2:
          answerBlock += `
              <p class="p-num">№ ${item.taskCounter}</p>
              <p>${item.task1}</p>
              <hr class="hr-pd_20">
              <p>${item.task2}</p>
              <hr class="hr-pd_20">
              <p>${item.task3}</p>
              <p>${item.task4}</p>
              <hr class="hr-pd_20">
              <details>
                <summary class="p-num">Решение</summary>
                <hr class="hr-pd_10">
                <p>1) Один символ кодируется ${item.taskAnswer[1]} бит = ${item.taskAnswer[1]/8 < 2 ?  `${item.taskAnswer[1]/8} байт ` : `${item.taskAnswer[1]/8} байта`}</p> 
                <hr class="hr-pd_10">
                <p>2) ${item.taskAnswer[3] == "м" ? 
                `Вычеркнутое слово занимает ${item.taskAnswer[2]} байта</p> 
                <hr class="hr-pd_10"><p>3) Количество символов в слове ${item.taskAnswer[2]}/${item.taskAnswer[1]/8} = ${item.taskAnswer[2]/(item.taskAnswer[1]/8)} символов` : 
                `Добавленное слово занимает ${item.taskAnswer[2]} байта</p>
                <hr class="hr-pd_10"><p>3) Количество символов в слове ${item.taskAnswer[2]}/${item.taskAnswer[1]/8} = ${item.taskAnswer[2]/(item.taskAnswer[1]/8)} символов`} 
                </p> 
                <hr class="hr-pd_10">
                <p>4) C учетом пробела: ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))} - 1 = ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))-1} символа</p>
                <hr class="hr-pd_20">
                <p>Слово из ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))-1} букв - ${item.taskAnswer[0]}.</p>
                <hr class="hr-pd_20">
                Ответ: <b>${item.taskAnswer[0]}</b>
              </details>  
              <hr class="hr-pd_20">
              <hr class="hr-between">
              <hr class="hr-pd_20">
            `; return answerBlock
        }
  }
  if (taskKey === 'ten'){  
    switch(item.typeTask){     
      case 1:
        answerBlock =`
          <p class="p-num">№ ${item.taskCounter}</p>
          <p>${item.task}</p>
          <hr class="hr-pd_20">
          <details>
            <summary class="p-num">Решение</summary>
            <hr class="hr-pd_10">
            ${item.taskAnswer[0]}<sub>10</sub> = ${item.taskAnswer[1]}<sub>2</sub>
            <hr class="hr-pd_10">
            Ответ: ${item.taskAnswer[2]}
          </details>  
          <hr class="hr-pd_20">
          <hr class="hr-between">
          <hr class="hr-pd_20">
        `; return answerBlock
      case 2:
        answerBlock =`
          <p class="p-num">№ ${item.taskCounter}</p>
          <p>${item.task}</p>
          <hr class="hr-pd_20">
          <details>
            <summary class="p-num">Решение</summary>
            <hr class="hr-pd_10">
            ${item.taskAnswer[0]}<sub>2</sub> = ${item.taskAnswer[1]}<sub>10</sub>
            <hr class="hr-pd_10">
            Ответ: ${item.taskAnswer[2]}
          </details>  
          <hr class="hr-pd_20">
          <hr class="hr-between">
          <hr class="hr-pd_20">
        `; return answerBlock
      case 3:
        let summaAns = 0;
        const num1 = parseInt(item.taskAnswer[0], 2);  // Двоичное число
        const num2 = parseInt(item.taskAnswer[1], 8);  // Восьмеричное число
        const num3 = parseInt(item.taskAnswer[2], 16); // Шестнадцатеричное число

        const operator1 = item.taskAnswer[3]; // Первый оператор
        const operator2 = item.taskAnswer[4]; // Второй оператор

        summaAns = num1 + (operator1 === "+" ? num2 : -num2) + (operator2 === "+" ? num3 : -num3);
        answerBlock =`
          <p class="p-num">№ ${item.taskCounter}</p>
          <p>${item.task}</p>
          <hr class="hr-pd_10">
          <span class="span-centr">${item.taskAnswer[0]}<sub>2</sub> ${item.taskAnswer[3]} ${item.taskAnswer[1]}<sub>8</sub> ${item.taskAnswer[4]} ${item.taskAnswer[2]}<sub>16</sub></span>
          <hr class="hr-pd_10">
          <p>${item.task2}</p>
          <hr class="hr-pd_20">
          <details>
            <summary class="p-num">Решение</summary>
            <hr class="hr-pd_10">
            ${item.taskAnswer[0]}<sub>2</sub> = ${parseInt(item.taskAnswer[0], 2)}<sub>10</sub>
            <hr class="hr-pd_10">
            ${item.taskAnswer[1]}<sub>8</sub> = ${parseInt(item.taskAnswer[1], 8)}<sub>10</sub>
            <hr class="hr-pd_10">
            ${item.taskAnswer[2]}<sub>16</sub> = ${parseInt(item.taskAnswer[2], 16)}<sub>10</sub>
            <hr class="hr-pd_20">
            ${num1} ${operator1} ${num2} ${operator2} ${num3} = ${summaAns}
            <hr class="hr-pd_20">
            Ответ: ${summaAns}
          </details>  
          <hr class="hr-pd_20">
          <hr class="hr-between">
          <hr class="hr-pd_20">
        `; return answerBlock
    } 
  }
  
} //generateTaskHTML

fetchTasks('one');
fetchTasks('ten');

