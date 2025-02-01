
const taskTen = '/src/oge_inf/taskTen.json'; // Проверьте путь!

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
      for (const item of taskTenData) {
        switch (item.typeTask) {
          case 1:
            taskTenOutput += `   
              <tr>
                <td style="vertical-align: top;">
                  <div class="number-block">${item.taskNumber}</div>   
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
          // Добавьте другие case, если есть другие типы задач
        }
      }
      // Вставьте сгенерированный HTML в нужный элемент
      document.querySelector('.task-numbers__block').innerHTML = taskTenOutput;
    } catch (e) {
      console.error('Ошибка при парсинге JSON:', e);
    }
  })
  .catch((error) => {
    console.error('Ошибка при загрузке файла:', error);
  });
  //Переведите число <b>1011101</b> из двоичной системы счисления в десятичную систему счисления. В ответе запишите полученное число.

