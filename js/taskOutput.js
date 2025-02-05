
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

      taskTenData.forEach( item => {
        switch (item.typeTask) {
          case 1:
            taskTenOutput += `   
              <tr>
                <td style="vertical-align: top;">
                  <div class="number-block">${taskNumber}</div>   
                </td>   
                <td style="vertical-align: top; padding-left: 20px;">
                  <p class="p-num">№ ${item.taskCounter}</p>
                  <p>${item.task}</p>
                  <hr class="hr-pd_20">
                  <details>
                    <summary class="p-num">Решение</summary>
                    <hr class="hr-pd_10">
                    ${item.taskAnswer}
                  </details>  
                  <hr class="hr-pd_40">
                </td> 
              </tr>  
            `;
            break;
          }
      });
        
      document.querySelector('.task-numbers__block').innerHTML = taskTenOutput;
    } catch (e) {
      console.error('Ошибка при парсинге JSON:', e);
    }
  })
  .catch((error) => {
    console.error('Ошибка при загрузке файла:', error);
  });
  

