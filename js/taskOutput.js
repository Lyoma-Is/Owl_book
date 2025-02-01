// Подключаем файл JSON

const taskTen = '/src/oge_inf/taskTen.json';

// Используем fetch для получения содержимого файла
fetch(taskTen)
  .then((response) => response.text())
  .then((data) => {
    // Преобразуем строку JSON в объект
    const taskTenData = JSON.parse(data);

    // Выводим данные в HTML
    let taskTenOutput = '';
    for (const item of taskTenData) {
      switch(item.typeTask){
        case 1: 
        taskTenOutput += `   
        <tr>
          <td style="vertical-align: top;">
            <div class="number-block">${item.taskNumber}</div>   
          </td>   

          <td style="vertical-align: top; padding-left: 20px;">
            <p class="p-num">№ ${item.taskCounter}</p>
            <p> ${item.task}</p>
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

      case 2:

      }
      
    }
    document.querySelector('.task-numbers__block').innerHTML = taskTenOutput;
   // document.querySelector('.task-numbers__block').classList.add("task-block")
  })
  .catch((error) => console.error('Ошибка:', error));

  //Переведите число <b>1011101</b> из двоичной системы счисления в десятичную систему счисления. В ответе запишите полученное число.