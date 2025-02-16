
//const taskTen = '/src/oge_inf/taskTen.json'; // Проверьте путь!
const taskTen = 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTen.json'; // Проверьте путь!

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
      let taskTenOutput = '';

      const taskNumber = taskTenData[0].taskNumber;
    
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
        console.log(selectedType, sortedTasks)
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
                  }
              }); 
              output.innerHTML = taskTenOutput;   
      }  
       
    } catch (e) { console.error('Ошибка при парсинге JSON:', e); }
    filterTasks()
    
  });
  


