
const taskTen = '/src/oge_inf/taskTen.json'; // Проверьте путь!
//const taskTen = 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTen.json'; // Проверьте путь!

fetch(taskTen)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} (${response.statusText})`);
    }
    return response.text();
  })

  .then((data) => {
    try {
      const taskTenData = JSON.parse(data);
      
       let dt = taskTenData.length
       console.log(dt-1)
       
      //let taskTenOutput = '';
      //const taskNumber = taskTenData[0].taskNumber;
    
      document.getElementById("taskType").addEventListener("change", filterTasks);
      document.getElementById("taskSort").addEventListener("change", filterTasks);
            
     function filterTasks() {
        const selectedType = parseInt(document.getElementById('taskType').value);
        const sortedTasks = parseInt(document.getElementById('taskSort').value);
        let filteredTasks;
        taskTenData.sort((a, b) => {
          const taskCounterA = a.taskCounter;
          const taskCounterB = b.taskCounter;
          const typeTaskA = a.typeTask || 0;
          const typeTaskB = b.typeTask || 0;

          if (sortedTasks === 0) {
            return taskCounterA - taskCounterB || typeTaskA - typeTaskB;
          } else if(sortedTasks === 1){
            return taskCounterB - taskCounterA || typeTaskB - typeTaskA;
          } else if (sortedTasks === 2){
            return Math.random() - 0.5;
          }
        });

        if (selectedType === 0) {         
            filteredTasks = taskTenData;
        } else {
            filteredTasks = taskTenData.filter(task => task.typeTask === selectedType);
        }
        displayTasks(filteredTasks); 
        
     }

      function displayTasks(filteredTasks) {
        const output = document.querySelector('.task-numbers__block');
        let taskTenOutput = '';
        
        filteredTasks.forEach( item => {
                switch (item.typeTask) {
                  
                  case 1:
                      taskTenOutput +=`
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
                      `
                      break;
                  case 2:
                      taskTenOutput +=`
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
                    `
                    break;
                  case 3:
                      let summaAns = 0;
                      const num1 = parseInt(item.taskAnswer[0], 2);  // Двоичное число
                      const num2 = parseInt(item.taskAnswer[1], 8);  // Восьмеричное число
                      const num3 = parseInt(item.taskAnswer[2], 16); // Шестнадцатеричное число

                      const operator1 = item.taskAnswer[3]; // Первый оператор
                      const operator2 = item.taskAnswer[4]; // Второй оператор

                      summaAns = num1 + (operator1 === "+" ? num2 : -num2) + (operator2 === "+" ? num3 : -num3);
                      taskTenOutput +=`
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
                    `
                    break;
                  }
                  //console.log(item.taskCounter)
              }); 
              output.innerHTML = taskTenOutput; 
              
                     
      }  
       
    } catch (e) { console.error('Ошибка при парсинге JSON:', e); }
    filterTasks()
  });
  


