// const tasks = {
//   one: '../../../src/oge_inf/taskOne.json',
//   two: '../../../src/oge_inf/taskTwo.json',
//   three: '../../../src/oge_inf/taskThree.json',
//   four:  '../../../src/oge_inf/taskFour.json',
//   five: '../../../src/oge_inf/taskFive.json',
//   six: '../../../src/oge_inf/taskSix.json',
//   seven: '../../../src/oge_inf/taskSeven.json',
//   eight: '../../../src/oge_inf/taskEight.json',
//   nine: '../../../src/oge_inf/taskNine.json',
//   ten: '../../../src/oge_inf/taskTen.json'
// };

const tasks = {
  one: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskOne.json',
  two: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTwo.json',
  three: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskThree.json',
  four: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskFour.json',
  five: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskFive.json',
  six: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskSix.json',
  seven: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskSeven.json',
  eight: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskEight.json',
  nine: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskNine.json',
  ten: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTen.json'
};

// const currentDate = new Date();

// const options = { 
//   day: 'numeric',
//   month: 'numeric',
//   year: 'numeric'
// };
// const formattedDate = currentDate.toLocaleDateString('ru-RU', options);


export {tasks};

export default function generateTaskHTML(taskKey, item) {
   const { date, taskNum, taskAn, task, task1, task2, task3, task4, task5} = item
   // const generateCounter = (taskCounter) => `<p class="p-num">№ ${taskCounter}</p>`;
    const generateHeader = () => `<details><summary class="p-num">Решение</summary><hr class="hr-pd_10">`;
    const generateFooter = () => `</details><hr class="hr-pd_20"><hr class="hr-between"><hr class="hr-pd_20">`;
    const generateDate = () => ` ${ taskNum === "" && date === ""?
             `<hr class="hr-pd_20">`: 
             `${taskNum === ""? 
             `<hr class="hr-pd_10">
              <p class="p-num" style="text-align: right;">Добавлено: ${date} </p>
              <hr class="hr-pd_10">`: 
              `<hr class="hr-pd_10">
              <p class="p-num" style="text-align: right;">Номер: ${taskNum}</p>
              <p class="p-num" style="text-align: right;">Добавлено: ${date} </p>
              <hr class="hr-pd_10">`}`} `;
    let answerBlock = "";
  
    if (taskKey === 'one'){
      switch(item.typeTask){
         case 1:         
            answerBlock += `
              <p class="p-num"><b>1.</b> № ${item.taskCounter}</p>
              <p>${item.task1}</p><hr class="hr-pd_20">
              <p><em>${item.task2}</em></p><hr class="hr-pd_20">
              <p>${item.task3}</p><p>${item.task4}</p><hr class="hr-pd_20">`
            answerBlock += generateHeader();
            answerBlock += `
                <p>1) Один символ кодируется ${item.taskAnswer[1]} бит = ${item.taskAnswer[1]/8 < 2 ?  `${item.taskAnswer[1]/8} байт ` : `${item.taskAnswer[1]/8} байта`}</p> 
                <hr class="hr-pd_10">
                <p>2) ${item.taskAnswer[3] == "м" ? 
                `Вычеркнутое (Удалённое) слово занимает ${item.taskAnswer[2]} байта</p> 
                <hr class="hr-pd_10"><p>3) Количество символов в слове ${item.taskAnswer[2]}/${item.taskAnswer[1]/8} = ${item.taskAnswer[2]/(item.taskAnswer[1]/8)} символов` : 
                `Добавленное слово занимает ${item.taskAnswer[2]} байта</p>
                <hr class="hr-pd_10"><p>3) Количество символов в слове ${item.taskAnswer[2]}/${item.taskAnswer[1]/8} = ${item.taskAnswer[2]/(item.taskAnswer[1]/8)} символов`} 
                </p> 
                <hr class="hr-pd_10">
                <p>4) C учетом пробела и запятой: ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))} - 2 = ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))-2} символа</p>
                <hr class="hr-pd_20">
                <p>Слово из ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))-2} букв - ${item.taskAnswer[0]}.</p>
                <hr class="hr-pd_20">
                Ответ: <b>${item.taskAnswer[0]}</b>`;
              answerBlock += generateFooter(); 
              return answerBlock
         case 2:
            answerBlock += `
                <p class="p-num"><b>1.</b> № ${item.taskCounter}</p>
                <p>${item.task1}</p>
                <hr class="hr-pd_20">
                <p>${item.task2}</p>
                <hr class="hr-pd_20">
                <p>${item.task3}</p>
                <p>${item.task4}</p>
                <hr class="hr-pd_20">`
            answerBlock += generateHeader();
            answerBlock += `
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
                  Ответ: <b>${item.taskAnswer[0]}</b>`; 
              answerBlock += generateFooter(); 
              return answerBlock
          }
    }
    if (taskKey === 'ten'){  
      switch(item.typeTask){     
        case 1:
          answerBlock =`
            <p class="p-num"><b>10.</b> № ${item.taskCounter}</p>
            <p>${item.task}</p>
            <hr class="hr-pd_20">`
          answerBlock += generateHeader();
          answerBlock += `
              ${item.taskAnswer[0]}<sub>10</sub> = ${item.taskAnswer[1]}<sub>2</sub>
              <hr class="hr-pd_10">
              Ответ: ${item.taskAnswer[2]}`;
          answerBlock += generateFooter(); 
          return answerBlock
        case 2:
          answerBlock =`
            <p class="p-num"><b>10.</b> № ${item.taskCounter}</p>
            <p>${item.task}</p>
            <hr class="hr-pd_20">`
          answerBlock += generateHeader();
          answerBlock += `
              ${item.taskAnswer[0]}<sub>2</sub> = ${item.taskAnswer[1]}<sub>10</sub>
              <hr class="hr-pd_10">
              Ответ: ${item.taskAnswer[2]}`;
          answerBlock += generateFooter(); 
          return answerBlock
        case 3:
          let summaAns = 0;
          const num1 = parseInt(item.taskAnswer[0], 2);  // Двоичное число
          const num2 = parseInt(item.taskAnswer[1], 8);  // Восьмеричное число
          const num3 = parseInt(item.taskAnswer[2], 16); // Шестнадцатеричное число
  
          const operator1 = item.taskAnswer[3]; // Первый оператор
          const operator2 = item.taskAnswer[4]; // Второй оператор
  
          summaAns = num1 + (operator1 === "+" ? num2 : -num2) + (operator2 === "+" ? num3 : -num3);
          answerBlock =`
            <p class="p-num"><b>10.</b> № ${item.taskCounter}</p>
            <p>${item.task}</p>
            <hr class="hr-pd_10">
            <span class="span-centr">${item.taskAnswer[0]}<sub>2</sub> ${item.taskAnswer[3]} ${item.taskAnswer[1]}<sub>8</sub> ${item.taskAnswer[4]} ${item.taskAnswer[2]}<sub>16</sub></span>
            <hr class="hr-pd_10">
            <p>${item.task2}</p>
            <hr class="hr-pd_20">`
          answerBlock += generateHeader();
          answerBlock += `
              ${item.taskAnswer[0]}<sub>2</sub> = ${parseInt(item.taskAnswer[0], 2)}<sub>10</sub>
              <hr class="hr-pd_10">
              ${item.taskAnswer[1]}<sub>8</sub> = ${parseInt(item.taskAnswer[1], 8)}<sub>10</sub>
              <hr class="hr-pd_10">
              ${item.taskAnswer[2]}<sub>16</sub> = ${parseInt(item.taskAnswer[2], 16)}<sub>10</sub>
              <hr class="hr-pd_20">
              ${num1} ${operator1} ${num2} ${operator2} ${num3} = ${summaAns}
              <hr class="hr-pd_20">
              Ответ: ${summaAns}`;
          answerBlock += generateFooter(); 
          return answerBlock
      } 
    }
    if (taskKey === 'two'){
      switch(item.typeTask){
        case 1:
          answerBlock =`
            <p class="p-num"><b>2.</b> № ${item.taskCounter}</p>
            <p>${item.task1}</p>
            
             ${item.taskAnswer[2] === 1 ? `
              <hr class="hr-pd_10">
              <span class="span-centr span-centr__font">${item.task2}</span>
            <hr class="hr-pd_10">
            <p>${item.task3}</p>
            <hr class="hr-pd_20">
            ${item.taskTable.length === 10 ? `
              <table class="table_2_1">
                <tbody>
                  <tr>
                      <td>${item.taskTable[0]}</td> <td>${item.taskTable[2]}</td>
                      <td>${item.taskTable[4]}</td><td>${item.taskTable[6]}</td>
                      <td>${item.taskTable[8]}</td>
                  </tr>
                  <tr>
                    <td>${item.taskTable[1]}</td><td>${item.taskTable[3]}</td>
                    <td>${item.taskTable[5]}</td><td>${item.taskTable[7]}</td>
                    <td>${item.taskTable[9]}</td>
                </tr>
                </tbody>
              </table>
              `: item.taskTable.length === 12 ?`
                  <table class="table_2_1">
                  <tbody>
                    <tr>
                        <td>${item.taskTable[0]}</td><td>${item.taskTable[2]}</td>
                        <td>${item.taskTable[4]}</td><td>${item.taskTable[6]}</td>
                        <td>${item.taskTable[8]}</td><td>${item.taskTable[10]}</td>
                    </tr>
                    <tr>
                      <td>${item.taskTable[1]}</td><td>${item.taskTable[3]}</td>
                      <td>${item.taskTable[5]}</td><td>${item.taskTable[7]}</td>
                      <td>${item.taskTable[9]}</td><td>${item.taskTable[11]}</td>
                  </tr>
                  </tbody>
                </table>
              `:`
                <table class="table_2_1">
                  <tbody>
                    <tr>
                        <td>${item.taskTable[0]}</td><td>${item.taskTable[2]}</td>
                        <td>${item.taskTable[4]}</td><td>${item.taskTable[6]}</td>
                        <td>${item.taskTable[8]}</td><td>${item.taskTable[10]}</td>
                        <td>${item.taskTable[12]}</td>
                    </tr>
                    <tr>
                      <td>${item.taskTable[1]}</td><td>${item.taskTable[3]}</td>
                      <td>${item.taskTable[5]}</td><td>${item.taskTable[7]}</td>
                      <td>${item.taskTable[9]}</td><td>${item.taskTable[11]}</td>
                      <td>${item.taskTable[13]}</td>
                  </tr>
                  </tbody>
              </table>`}
             <hr class="hr-pd_20">
             <p>${item.task4}</p>
             <hr class="hr-pd_20">
              `:
            `<hr class="hr-pd_20">
            ${item.taskTable.length === 10 ? `
              <table class="table_2_1">
                <tbody>
                  <tr>
                      <td>${item.taskTable[0]}</td> <td>${item.taskTable[2]}</td>
                      <td>${item.taskTable[4]}</td><td>${item.taskTable[6]}</td>
                      <td>${item.taskTable[8]}</td>
                  </tr>
                  <tr>
                    <td>${item.taskTable[1]}</td><td>${item.taskTable[3]}</td>
                    <td>${item.taskTable[5]}</td><td>${item.taskTable[7]}</td>
                    <td>${item.taskTable[9]}</td>
                </tr>
                </tbody>
              </table>
              `: item.taskTable.length === 12 ?`
                  <table class="table_2_1">
                  <tbody>
                    <tr>
                        <td>${item.taskTable[0]}</td><td>${item.taskTable[2]}</td>
                        <td>${item.taskTable[4]}</td><td>${item.taskTable[6]}</td>
                        <td>${item.taskTable[8]}</td><td>${item.taskTable[10]}</td>
                    </tr>
                    <tr>
                      <td>${item.taskTable[1]}</td><td>${item.taskTable[3]}</td>
                      <td>${item.taskTable[5]}</td><td>${item.taskTable[7]}</td>
                      <td>${item.taskTable[9]}</td><td>${item.taskTable[11]}</td>
                  </tr>
                  </tbody>
                </table>
              `:`
                <table class="table_2_1">
                  <tbody>
                    <tr>
                        <td>${item.taskTable[0]}</td><td>${item.taskTable[2]}</td>
                        <td>${item.taskTable[4]}</td><td>${item.taskTable[6]}</td>
                        <td>${item.taskTable[8]}</td><td>${item.taskTable[10]}</td>
                        <td>${item.taskTable[12]}</td>
                    </tr>
                    <tr>
                      <td>${item.taskTable[1]}</td><td>${item.taskTable[3]}</td>
                      <td>${item.taskTable[5]}</td><td>${item.taskTable[7]}</td>
                      <td>${item.taskTable[9]}</td><td>${item.taskTable[11]}</td>
                      <td>${item.taskTable[13]}</td>
                  </tr>
                  </tbody>
              </table>`}
            <hr class="hr-pd_20">
            <p>${item.task3}</p>  
            <hr class="hr-pd_10">
            <span class="span-centr span-centr__font">${item.task2}</span>
            <hr class="hr-pd_10">
             <p>${item.task4}</p>
             <hr class="hr-pd_20">
              `}`
          answerBlock += generateHeader();
          answerBlock += `
           <p>${item.taskAnswer[1]}</p>
           <hr class="hr-pd_20">
           <p><b>Ответ:</b> ${item.taskAnswer[0]}</p>
           <hr class="hr-pd_10">`;
          answerBlock += generateFooter(); 
          return answerBlock
        case 2:
          answerBlock =`
          <p class="p-num"><b>2.</b> № ${item.taskCounter}</p>
          <p>${item.task1}</p>
           <hr class="hr-pd_20">
            ${item.taskTable.length === 10 ? `
              <table class="table_2_1">
                <tbody>
                  <tr>
                      <td>${item.taskTable[0]}</td> <td>${item.taskTable[2]}</td>
                      <td>${item.taskTable[4]}</td><td>${item.taskTable[6]}</td>
                      <td>${item.taskTable[8]}</td>
                  </tr>
                  <tr>
                    <td>${item.taskTable[1]}</td><td>${item.taskTable[3]}</td>
                    <td>${item.taskTable[5]}</td><td>${item.taskTable[7]}</td>
                    <td>${item.taskTable[9]}</td>
                </tr>
                </tbody>
              </table>
              `: item.taskTable.length === 12 ?`
                  <table class="table_2_1">
                  <tbody>
                    <tr>
                        <td>${item.taskTable[0]}</td><td>${item.taskTable[2]}</td>
                        <td>${item.taskTable[4]}</td><td>${item.taskTable[6]}</td>
                        <td>${item.taskTable[8]}</td><td>${item.taskTable[10]}</td>
                    </tr>
                    <tr>
                      <td>${item.taskTable[1]}</td><td>${item.taskTable[3]}</td>
                      <td>${item.taskTable[5]}</td><td>${item.taskTable[7]}</td>
                      <td>${item.taskTable[9]}</td><td>${item.taskTable[11]}</td>
                  </tr>
                  </tbody>
                </table>
              `:`
                <table class="table_2_1">
                  <tbody>
                    <tr>
                        <td>${item.taskTable[0]}</td><td>${item.taskTable[2]}</td>
                        <td>${item.taskTable[4]}</td><td>${item.taskTable[6]}</td>
                        <td>${item.taskTable[8]}</td><td>${item.taskTable[10]}</td>
                        <td>${item.taskTable[12]}</td>
                    </tr>
                    <tr>
                      <td>${item.taskTable[1]}</td><td>${item.taskTable[3]}</td>
                      <td>${item.taskTable[5]}</td><td>${item.taskTable[7]}</td>
                      <td>${item.taskTable[9]}</td><td>${item.taskTable[11]}</td>
                      <td>${item.taskTable[13]}</td>
                  </tr>
                  </tbody>
              </table>`}
            <hr class="hr-pd_20">
            <p>${item.task3}</p>  
            <hr class="hr-pd_10">
            <p>Даны три кодовые цепочки:</p>
            <hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${item.task2[0]}</p><hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${item.task2[1]}</p><hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${item.task2[2]}</p>
            <hr class="hr-pd_10">
             <p>${item.task4}</p>
             <hr class="hr-pd_20">`
            answerBlock += generateHeader();
            answerBlock += `
            <p>${item.taskAnswer[1]} – <b>${item.taskAnswer[0]}</b></p>
            <hr class="hr-pd_20">
            <p><b>Ответ:</b> ${item.taskAnswer[0]}</p>
            <hr class="hr-pd_10">`;
            answerBlock += generateFooter(); 
            return answerBlock
        case 3:
          answerBlock =`
          <p class="p-num"><b>2.</b> № ${item.taskCounter}</p>
          <p>${item.task1}</p>
            <hr class="hr-pd_20">
            <table class="table_2_3">
                <tbody >
                  <tr >
                    <td>А 1</td> <td>Й 11</td> <td>У 21</td> <td>Э 21</td>
                  </tr>
                  <tr>
                    <td>Б 2</td> <td>К 12</td> <td>Ф 22</td> <td>Ю 32</td> 
                  </tr>
                  <tr>
                    <td>В 3</td> <td>Л 13</td> <td>Х 23</td> <td>Я 33</td> 
                  </tr>
                  <tr>
                    <td>Г 4</td> <td>М 14</td> <td>Ц 24</td> <td></td> 
                  </tr>
                  <tr>
                    <td>Д 5</td> <td>Н 15</td> <td>Ч 25</td> <td></td> 
                  </tr>
                  <tr>
                    <td>Е 6</td> <td>О 16</td> <td>Ш 26</td> <td></td> 
                  </tr>
                  <tr>
                    <td>Ё 7</td> <td>П 17</td> <td>Щ 27</td> <td></td> 
                  </tr>
                  <tr>
                    <td>Ж 8</td> <td>Р 18</td> <td>Ъ 28</td> <td></td> 
                  </tr>
                  <tr>
                    <td>З 9</td> <td>С 19</td> <td>Ы 29</td> <td></td> 
                  </tr>
                  <tr>
                    <td>И 10</td> <td>Т 20</td> <td>Ь 30</td> <td></td> 
                  </tr>
                </tbody>
              </table>
            <hr class="hr-pd_20">
            <p>${item.task3}</p>  
            <hr class="hr-pd_10">
            <p>Даны четыре шифровки:</p>
            <hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${item.task2[0]}</p><hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${item.task2[1]}</p><hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${item.task2[2]}</p><hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${item.task2[3]}</p><hr class="hr-pd_10">
             <p>${item.task4}</p>
             <hr class="hr-pd_20">`
            answerBlock += generateHeader();
            answerBlock += `
            <p>${item.taskAnswer[1]} – <b>${item.taskAnswer[0]}</b></p>
            ${item.task5 === "" ? `<hr class="hr-pd_20">` : 
              `
              <hr class="hr-pd_20">
              <p>${item.task5}</p> 
              <hr class="hr-pd_20">
              `
            }        
            <p><b>Ответ:</b> ${item.taskAnswer[0]}</p>
            <hr class="hr-pd_10">`;
            answerBlock += generateFooter(); 
            return answerBlock

      }
    }
    if (taskKey === 'three'){
      switch(item.typeTask){
        case 1:
          answerBlock =`
          <p class="p-num"><b>3.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>${item.task1}</p>
           <hr class="hr-pd_20">
            <span class="span-centr">${item.task2}</span>
          <hr class="hr-pd_20">`
          answerBlock += generateHeader();
          answerBlock += `
              <p>Избавимся от НЕ, применяя закон де Моргана:</p>
              <hr class="hr-pd_10">
              ${item.task4 !== "" ? 
              `
              <p>Было: ${item.task2} – истинно</p>
              <hr class="hr-pd_10">
              <p>Стало: ${item.task3} – истинно</p>
              <hr class="hr-pd_10">
              ${item.task4}
              <hr class="hr-pd_10">
              `
              : `
              <p>Было: ${item.task2} – истинно</p>
              <hr class="hr-pd_10">
              <p>Стало: ${item.task3} – истинно</p>
              <hr class="hr-pd_10">
              `}
              Ответ: <b>${item.taskAnswer}</b>`;
          answerBlock += generateFooter(); 
          return answerBlock
        case 2:
          answerBlock =`
          <p class="p-num"><b>3.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>${item.task1}</p>
           <hr class="hr-pd_20">
            <span class="span-centr">${item.task2}</span>
          <hr class="hr-pd_20">`
          answerBlock += generateHeader();
          answerBlock += `
              <p>Переделаем ложное высказывание в истинное, применяя закон де Моргана:</p>
              <hr class="hr-pd_10">
              ${item.task4 !== "" ? 
              `
              <p>Было: ${item.task2} – ложно</p>
              <hr class="hr-pd_10">
              <p>Стало: ${item.task3} – истинно</p>
              <hr class="hr-pd_10">
              ${item.task4}
              <hr class="hr-pd_10">
              `
              : `
              <p>Было: ${item.task2} – ложно</p>
              <hr class="hr-pd_10">
              <p>Стало: ${item.task3} – истинно</p>
              <hr class="hr-pd_10">
              `}
              Ответ: <b>${item.taskAnswer}</b>`;
          answerBlock += generateFooter(); 
          return answerBlock
      }
    }
    if (taskKey === 'four'){
      switch (item.typeTask) {
        case 1:
          answerBlock =`
          <p class="p-num"><b>4.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>${item.task1}</p>
          
          <hr class="hr-pd_20">
          ${ item.taskTableV.length === 4 ? 
          `
          <table class="table_4">
            <tbody>
              <tr><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableV[0]}</td><td>${item.taskTableV[1]}</td><td>${item.taskTableV[2]}</td><td>${item.taskTableV[3]}</td></tr>
              <tr><td>${item.taskTableV[0]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableS[1]}</td><td>${item.taskTableS[2]}</td><td>${item.taskTableS[3]}</td></tr>
              <tr><td>${item.taskTableV[1]}</td><td>${item.taskTableS[1]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableS[4]}</td><td>${item.taskTableS[5]}</td></tr>
              <tr><td>${item.taskTableV[2]}</td><td>${item.taskTableS[2]}</td><td>${item.taskTableS[4]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableS[6]}</td></tr>
              <tr><td>${item.taskTableV[3]}</td><td>${item.taskTableS[3]}</td><td>${item.taskTableS[5]}</td><td>${item.taskTableS[6]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td></tr> 
            </tbody>
          </table>

          `: item.taskTableV.length === 5 ? 
          `
          <table class="table_4">
            <tbody>
              <tr><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableV[0]}</td><td>${item.taskTableV[1]}</td><td>${item.taskTableV[2]}</td><td>${item.taskTableV[3]}</td><td>${item.taskTableV[4]}</td></tr>
              <tr><td>${item.taskTableV[0]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableS[1]}</td><td>${item.taskTableS[2]}</td><td>${item.taskTableS[3]}</td><td>${item.taskTableS[4]}</td></tr>
              <tr><td>${item.taskTableV[1]}</td><td>${item.taskTableS[1]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableS[5]}</td><td>${item.taskTableS[6]}</td><td>${item.taskTableS[7]}</td></tr>
              <tr><td>${item.taskTableV[2]}</td><td>${item.taskTableS[2]}</td><td>${item.taskTableS[5]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableS[8]}</td><td>${item.taskTableS[9]}</td></tr>
              <tr><td>${item.taskTableV[3]}</td><td>${item.taskTableS[3]}</td><td>${item.taskTableS[6]}</td><td>${item.taskTableS[8]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableS[10]}</td></tr>
              <tr><td>${item.taskTableV[4]}</td><td>${item.taskTableS[4]}</td><td>${item.taskTableS[7]}</td><td>${item.taskTableS[9]}</td><td>${item.taskTableS[10]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td></tr> 
            </tbody>
          </table>

          `: item.taskTableV.length === 6 ? 
          `
          <table class="table_4">
            <tbody>
              <tr><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableV[0]}</td><td>${item.taskTableV[1]}</td><td>${item.taskTableV[2]}</td><td>${item.taskTableV[3]}</td><td>${item.taskTableV[4]}</td><td>${item.taskTableV[5]}</td></tr>
              <tr><td>${item.taskTableV[0]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableS[1]}</td><td>${item.taskTableS[2]}</td><td>${item.taskTableS[3]}</td><td>${item.taskTableS[4]}</td><td>${item.taskTableS[5]}</td></tr>
              <tr><td>${item.taskTableV[1]}</td><td>${item.taskTableS[1]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableS[6]}</td><td>${item.taskTableS[7]}</td><td>${item.taskTableS[8]}</td><td>${item.taskTableS[9]}</td></tr>
              <tr><td>${item.taskTableV[2]}</td><td>${item.taskTableS[2]}</td><td>${item.taskTableS[6]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableS[10]}</td><td>${item.taskTableS[11]}</td><td>${item.taskTableS[12]}</td></tr>
              <tr><td>${item.taskTableV[3]}</td><td>${item.taskTableS[3]}</td><td>${item.taskTableS[7]}</td><td>${item.taskTableS[10]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableS[13]}</td><td>${item.taskTableS[14]}</td></tr>
              <tr><td>${item.taskTableV[4]}</td><td>${item.taskTableS[4]}</td><td>${item.taskTableS[8]}</td><td>${item.taskTableS[11]}</td><td>${item.taskTableS[13]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td><td>${item.taskTableS[15]}</td></tr>
              <tr><td>${item.taskTableV[5]}</td><td>${item.taskTableS[5]}</td><td>${item.taskTableS[9]}</td><td>${item.taskTableS[12]}</td><td>${item.taskTableS[14]}</td><td>${item.taskTableS[15]}</td><td style="background-color: #ffbf80;">${item.taskTableS[0]}</td></tr>  
            </tbody>
          </table>

          `: ""}  
          <hr class="hr-pd_20">
          <p>${item.task2}</p>
          <hr class="hr-pd_20">`
          answerBlock += generateHeader();
          answerBlock += `
              <hr class="hr-pd_10">
              Кратчайший путь: ${item.taskAnswer[1]} = ${item.taskAnswer[0]} км
              <hr class="hr-pd_20">
              Ответ: <b>${item.taskAnswer[0]}</b>`;
          answerBlock += generateFooter(); 
          return answerBlock                  
        }
      
      
    }
    if (taskKey === 'five'){
      
      function fiveAn(item){    
        let resCount = 0
        let res = ''
        let res1 = ''
        let steps = 0;
        // delenie
        if (taskAn[4] === "/"){
           while(item !== taskAn[1]){
            if(item / taskAn[2] === Math.floor(item / taskAn[2])){
              item /=  taskAn[2];
              res += '1'
              resCount += 1
              if (resCount === 5){
                res1 += `1. раздели на ${taskAn[2]} = <span style="background-color: rgb(252, 210, 94);">${item}</span><br>`
              }
              else{
                res1 += `1. раздели на ${taskAn[2]} = ${item}<br>`
              }        
            } 
            else if(taskAn[5] === "+"){
              item +=  taskAn[3];
              res += '2'
              resCount += 1
              if (resCount === 5){
                res1 += `2. прибавь ${taskAn[3]} = <span style="background-color:rgb(252, 210, 94);">${item}</span><br>`
              }
              else{
                res1 += `2. прибавь ${taskAn[3]} = ${item}<br>`
              }
            }
            else if(taskAn[5] === "-"){
              item -=  taskAn[3];
              res += '2'
              resCount += 1
              if (resCount === 5){
                res1 += `2. вычти ${taskAn[3]} = <span style="background-color:rgb(252, 210, 94);">${item}</span><br>`
              }
              else{
                res1 += `2. вычти ${taskAn[3]} = ${item}<br>`
              }
            }
          }//while
        } //  4 /
        if (taskAn[5] === "/"){
          while(item !== taskAn[1]){
            if(Math.floor(item / taskAn[3]) >= taskAn[1] && item / taskAn[3] === Math.floor(item / taskAn[3])){
              item /=  taskAn[3];
              res += '2'
              resCount += 1
              if (resCount === 5){
                res1 += `2. разделить на ${taskAn[3]} = <span style="background-color: rgb(252, 210, 94);">${item}</span><br>`
              }
              else{
                res1 += `2. разделить на ${taskAn[3]} = ${item}<br>`
              }        
            } 
            else if(taskAn[4] === "-"){
              item -=  taskAn[2];
              res += '1'
              resCount += 1
              if (resCount === 5){
                res1 += `1. вычти ${taskAn[2]} = <span style="background-color:rgb(252, 210, 94);">${item}</span><br>`
              }
              else{
                res1 += `1. вычти ${taskAn[2]} = ${item}<br>`
              }
            }
            else {break;}
          } // while
        } // 5 /

        // umnozhenie
        if (taskAn[5] === "*"){
          item = taskAn[1]
          while(item !== taskAn[0]){
            if(item % taskAn[3] === 0 ){
              if ((res.length === 4 || res.length === 3) && item/taskAn[3] === taskAn[0]){
                item /= taskAn[3];
                res += '2';  
              }
              else if ((res.length === 4 || res.length === 3) && item/taskAn[3] !== taskAn[0]){
                item += taskAn[2];
                res += '1';
              }
              else{
                item /= taskAn[3];
                res += '2';  
              }  
            }
            else if(taskAn[4] === "-"){
              item += taskAn[2]
              res += '1'
            }
            else {break;}
          }
          res = res.split('').reverse().join('');
          let item2 = taskAn[0]
          let uch = taskAn[3]
          let vch = taskAn[2]
          for (let i in res){
            let x = res[i]
            if (x === '2' && taskAn[5] === '*'){
              resCount += 1
              if (resCount === 5){
                res1 += `2. <b>умножить на ${uch}</b> число ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2*uch}</span><br>`
                item2 *= uch;
              }
              else{
                res1 += `2. <b>умножить на ${uch}</b> число ${item2} = ${item2*uch}<br>`
                item2 *=uch;
              }        
            }
            else if(taskAn[4] === "-" && x === '1'){
              resCount += 1
              if (resCount === 5){
                res1 += `1. <b>вычти ${vch}</b> из числа ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2 - vch}</span><br>`
                item2 = item2 - vch
              }
              else{
                res1 += `1. <b>вычти ${vch}</b> из числа ${item2} = ${item2 - vch}<br>`
                item2 = item2 - vch
              }        
            }
          }
        }
        if (taskAn[4] === "*"){
          item = taskAn[1]
          let uch = taskAn[2]
          let vch = taskAn[3]
          while(item !== taskAn[0]){
            if(item % taskAn[2] === 0 ){
              if ((res.length === 4 || res.length === 3) && item/taskAn[2] === taskAn[0]){
                item /= taskAn[2];
                res += '1';  
              }
              else if ((res.length === 4 || res.length === 3) && item/taskAn[2] !== taskAn[0] && taskAn[5] === "-"){
                item += taskAn[3];
                res += '2';
              }
              else{
                item /= taskAn[2];
                res += '1';  
              }  
            }
            else if(taskAn[5] === "-"){
              item += taskAn[3]
              res += '2'
            }
            else if(taskAn[5] === "+"){
              item -= taskAn[3]
              res += '2'
            }
            else {break;}
          }
          res = res.split('').reverse().join('');
          let item2 = taskAn[0]
          for (let i in res){
            let x = res[i]
            if (x === '1' && taskAn[4] === '*'){
              resCount += 1
              if (resCount === 5){
                res1 += `1. <b>умножить на ${uch}</b> число ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2*uch}</span><br>`
                item2 *= uch;
              }
              else{
                res1 += `1. <b>умножить на ${uch}</b> число ${item2} = ${item2*uch}<br>`
                item2 *=uch;
              }        
            }
            else if(taskAn[5] === "-" && x === '2'){
              resCount += 1
              if (resCount === 5){
                res1 += `2. <b>вычти ${vch}</b> из числа ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2 - vch}</span><br>`
                item2 = item2 - vch
              }
              else{
                res1 += `2. <b>вычти ${vch}</b> из числа ${item2} = ${item2 - vch}<br>`
                item2 = item2 - vch
              }        
            }
            else if(taskAn[5] === "+" && x === '2'){
              resCount += 1
              if (resCount === 5){
                res1 += `2. <b>прибавь ${vch}</b> к числу ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2 + vch}</span><br>`
                item2 = item2 + vch
              }
              else{
                res1 += `2. <b>прибавь ${vch}</b> к числу ${item2} = ${item2 + vch}<br>`
                item2 = item2 + vch
              }        
            }
          }
        }

        // vozvedenie
        if (taskAn[4] === "**"){
          item = taskAn[1]
          while(item !== taskAn[0]){
            if(Math.sqrt(item) === Math.floor(Math.sqrt(item))){
              item = Math.sqrt(item);
              res += '1'
            }
            else if(taskAn[5] === "-"){
              if (res.length === 4 && (item + taskAn[3] !== taskAn[0])){
                item = Math.abs(item - taskAn[3])
                res += '2'
              }
              else{
                item += taskAn[3]
                res += '2'
              }
             
            }
            else {break;}
          }
        
          res = res.split('').reverse().join('');
          
          let item2 = taskAn[0]
          for (let i in res){
            let x = res[i]
            if (x === '1' && taskAn[4] === '**'){
              resCount += 1
              if (resCount === 5){
                res1 += `1. <b>возведи в квадрат</b> число ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2*item2}</span><br>`
                item2 = item2 *item2;
              }
              else{
                res1 += `1. <b>возведи в квадрат</b> число ${item2} = ${item2*item2}<br>`
                item2 = item2*item2;
              }        
            }
            else if(taskAn[5] === "-" && x === '2'){
              resCount += 1
              if (resCount === 5){
                res1 += `2. <b>вычти ${taskAn[3]}</b> из числа ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2 - taskAn[3]}</span><br>`
                item2 = item2 - taskAn[3]
              }
              else{
                res1 += `2. <b>вычти ${taskAn[3]}</b> из числа ${item2} = ${item2 - taskAn[3]}<br>`
                item2 = item2 - taskAn[3]
              }        
            }
          }
        }
        if (taskAn[5] === "**"){
          item = taskAn[1]
         
          while(item !== taskAn[0] && steps < 5){
            steps++
            if(Math.sqrt(item) === Math.floor(Math.sqrt(item))){
              if (res.length === 4){
                item += taskAn[2]
                res += '1'
              }
              else{
                item = Math.sqrt(item);
                res += '2'
              }     
            }
            else if(taskAn[4] === "-" ){ 
              if (res.length === 4 && (item + taskAn[2] !== taskAn[0])){
                item = Math.abs(item - taskAn[2])
                res += '1'
              }
              else  {
                item += taskAn[2]
                res += '1'
              }
            }
            else if(taskAn[4] === "+"){
              if (res.length === 4 && (item - taskAn[2] !== taskAn[0])){
                item = Math.abs(item + taskAn[2])
                res += '1'
              }
              else{
                item -= taskAn[2]
                res += '1'
              }
             
            } 
            else {break;} 
          }
        
          res = res.split('').reverse().join('');
          
          let item2 = taskAn[0]
          let vch = taskAn[2]
          for (let i in res){
            let x = res[i]
            if (x === '2' && taskAn[5] === '**'){
              resCount += 1
              if (resCount === 5){
                res1 += `2. <b>возведи в квадрат</b> число ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2*item2}</span><br>`
                item2 = item2 *item2;
              }
              else{
                res1 += `2. <b>возведи в квадрат</b> число ${item2} = ${item2*item2}<br>`
                item2 = item2*item2;
              }        
            }
            else if(taskAn[4] === "-" && x === '1'){
              resCount += 1
              if (resCount === 5){
                res1 += `1. <b>вычти ${vch}</b> из числа ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2 - vch}</span><br>`
                item2 = item2 - vch
              }
              else{
                res1 += `1. <b>вычти ${vch}</b> из числа ${item2} = ${item2 - vch}<br>`
                item2 = item2 - vch
              }        
            }
            else if(taskAn[4] === "+" && x === '1'){
              resCount += 1
              if (resCount === 5){
                res1 += `1. <b>прибавь ${vch}</b> к числу ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2 + vch}</span><br>`
                item2 = item2 + vch
              }
              else{
                res1 += `1. <b>прибавь ${vch}</b> к числу ${item2} = ${item2 + vch}<br>`
                item2 = item2 + vch
              }        
            }
          }
        }

        // pripisat
        if (taskAn[4] === 'p'){
          item = taskAn[1]
          while(item !== taskAn[0] && steps < 5){
            steps++
            let st = taskAn[2];
            st = st.toString();
            if(item.toString().at(-1) === st){
              item =  (item-taskAn[2])/10;
              res += '1'  
            }
            else if(taskAn[5] === "/"){
              item *= taskAn[3]
              res += '2'
            }
            else {break;}
          }
          res = res.split('').reverse().join('');
          //console.log(res)
          let item2 = taskAn[0]
          for (let i in res){
            let x = res[i]
            if (x === '1' && taskAn[4] === 'p'){
              resCount += 1
              if (resCount === 5){
                res1 += `1. <b>приписать ${taskAn[2]}</b> к числу ${item2} = <span style="background-color: rgb(252, 210, 94);">${(item2*10)+taskAn[2]}</span><br>`
                item2 = (item2*10)+taskAn[2];
              }
              else{
                res1 += `1. <b>приписать ${taskAn[2]}</b> к числу ${item2} = ${((item2*10)+taskAn[2])}<br>`
                item2 = (item2*10)+taskAn[2];
              }        
            }
            else if(taskAn[5] === "/" && x === '2'){
              resCount += 1
              if (resCount === 5){
                res1 += `2. <b>разделить на ${taskAn[3]}</b> число ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2 / taskAn[3]}</span><br>`
                item2 = item2 / taskAn[3]
              }
              else{
                res1 += `2. <b>разделить на ${taskAn[3]}</b> число ${item2} = ${item2 / taskAn[3]}<br>`
                item2 = item2 / taskAn[3]
              }        
            }
          }
        }
        if (taskAn[5] === 'p'){
          item = taskAn[1]
          while(item !== taskAn[0]){
            if(item.toString().at(-1) === taskAn[3].toString()){
              item =  (item-taskAn[3])/10;
              res += '2'  
            }
            else if(taskAn[4] === "/"){
              item *= taskAn[2]
              res += '1'
            }
            else if(taskAn[4] === "-"){
              item += taskAn[2]
              res += '1'
            }
            else {break;}
          }
          res = res.split('').reverse().join('');
          //console.log(res)
          let item2 = taskAn[0]
          for (let i in res){
            let x = res[i]
            let pch = taskAn[3]
            let vch = taskAn[2]
            if (x === '2' && taskAn[5] === 'p'){
              resCount += 1
              if (resCount === 5){
                res1 += `2. <b>приписать ${pch}</b> к числу ${item2} = <span style="background-color: rgb(252, 210, 94);">${(item2*10)+pch}</span><br>`
                item2 = (item2*10)+pch;
              }
              else{
                res1 += `2. <b>приписать ${pch}</b> к числу ${item2} = ${((item2*10)+pch)}<br>`
                item2 = (item2*10)+pch;
              }        
            }
            else if(taskAn[4] === "/" && x === '1'){
              resCount += 1
              if (resCount === 5){
                res1 += `1. <b>разделить на ${vch}</b> число ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2 / vch}</span><br>`
                item2 = item2 / vch
              }
              else{
                res1 += `1. <b>разделить на ${vch}</b> число ${item2} = ${item2 / vch}<br>`
                item2 = item2 / vch
              }        
            }
            else if(taskAn[4] === "-" && x === '1'){
              resCount += 1
              if (resCount === 5){
                res1 += `1. <b>вычти ${vch}</b> из числа ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2 - vch}</span><br>`
                item2 = item2 - vch
              }
              else{
                res1 += `1. <b>вычти ${vch}</b> из числа ${item2} = ${item2 - vch}<br>`
                item2 = item2 - vch
              }        
            }
          }
        }

        // zacherkni
        if (taskAn[5] === 'z'){
          item = taskAn[0]
          while(item !== taskAn[1]){
            if(item.toString().length === 2){
              
              item = Math.floor(item/10)
              res += '2'
            }
            else if(taskAn[4] == '**'){
              item = item*item
              res += "1"
            }
            else {break;}
          }
          //console.log(res)

          let item2 = taskAn[0]
          for (let i in res){
            let x = res[i]
            if (x === '1' && taskAn[4] === '**'){
              resCount += 1
              if (resCount === 5){
                res1 += `1. <b>возведи в квадрат</b> число ${item2} = <span style="background-color: rgb(252, 210, 94);">${item2*item2}</span><br>`
                item2 = item2 *item2;
              }
              else{
                res1 += `1. <b>возведи в квадрат</b> число ${item2} = ${item2*item2}<br>`
                item2 = item2*item2;
              }        
            }
            else if(taskAn[5] === "z" && x === '2'){
              resCount += 1
              if (resCount === 5){
                res1 += `2. <b> зачеркни справа</b> число ${item2} = <span style="background-color: rgb(252, 210, 94);">${Math.floor(item2/10)}</span><br>`
                item2 = Math.floor(item2/10)
              }
              else{
                res1 += `2. <b>зачеркни справа</b> число ${item2} = ${Math.floor(item2/10)}<br>`
                item2 = Math.floor(item2/10)
              }        
            }
          }
        }
        return res1
      }
      switch(item.typeTask){
        case 1:
          answerBlock =`
          <p class="p-num"><b>5.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>${item.task1}</p>
          <hr class="hr-pd_10">
          <p><b style="font-weight: 500;">${item.task2}</b></p>
          <hr class="hr-pd_10">
          <p>${item.task3}</p>
          <p>Составьте алгоритм получения <b style="font-weight: 500;">${item.task4}</b>, содержащий не более 5 команд. В ответе запишите только номера команд.</p>
          <hr class="hr-pd_10">
          <p><em>${item.task5}</em></p>
          <hr class="hr-pd_10">
          Если таких алгоритмов более одного, то запишите любой из них.
          <hr class="hr-pd_10">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
              <span style="background-color: rgb(252, 210, 94);">${taskAn[0]}</span><br>
              ${fiveAn(taskAn[0])}
              <hr class="hr-pd_20">
              Ответ: <b>${item.taskAnswer}</b>`;
          answerBlock += generateFooter(); 
          return answerBlock
        case 2:
            answerBlock =`
            <p class="p-num"><b>5.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
            <p>${item.task1}</p>
            <hr class="hr-pd_10">
            <p><b style="font-weight: 500;">${item.task2}</b></p>
            <hr class="hr-pd_10">
            <p>${item.task3}</p>
            <p>Составьте алгоритм получения <b style="font-weight: 500;">${item.task4}</b>, содержащий не более 5 команд. В ответе запишите только номера команд.</p>
            <hr class="hr-pd_10">
            <p><em>${item.task5}</em></p>
            <hr class="hr-pd_10">
            Если таких алгоритмов более одного, то запишите любой из них.
            <hr class="hr-pd_10">
            `
            answerBlock += generateDate();
            answerBlock += generateHeader();
            answerBlock += `
                <span style="background-color: rgb(252, 210, 94);">${taskAn[0]}</span><br>
                ${fiveAn(taskAn[0])}
                <hr class="hr-pd_20">
                Ответ: <b>${item.taskAnswer}</b>`;
            answerBlock += generateFooter(); 
            return answerBlock
        case 3:
              answerBlock =`
              <p class="p-num"><b>5.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
              <p>${item.task1}</p>
              <hr class="hr-pd_10">
              <p><b style="font-weight: 500;">${item.task2}</b></p>
              <hr class="hr-pd_10">
              <p>${item.task3}</p>
              <p>Составьте алгоритм получения <b style="font-weight: 500;">${item.task4}</b>, содержащий не более 5 команд. В ответе запишите только номера команд.</p>
              <hr class="hr-pd_10">
              <p><em>${item.task5}</em></p>
              <hr class="hr-pd_10">
              Если таких алгоритмов более одного, то запишите любой из них.
              <hr class="hr-pd_10">
              `
              answerBlock += generateDate();
              answerBlock += generateHeader();
              answerBlock += `
                  <span style="background-color: rgb(252, 210, 94);">${taskAn[0]}</span><br>
                  ${fiveAn(taskAn[0])}
                  <hr class="hr-pd_20">
                  Ответ: <b>${item.taskAnswer}</b>`;
              answerBlock += generateFooter(); 
              return answerBlock
      } 
    }
    if (taskKey === 'six'){
      switch(item.typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>6.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          Ниже приведена программа, записанная на трёх языках программирования.
          <hr class="hr-pd_20">
          <table class="table_6">
            <tbody>
              <tr>
                <td style="text-align: center; background-color: #ffbf80;">Алгоритмический язык</td>
                <td style="text-align: center; background-color: #ffbf80;">Python</td>
                <td style="text-align: center; background-color: #ffbf80;">С++</td>
              </tr>
                  <tr>
                <td>
                 <pre>
алг
нач
цел ${task4[0]}, ${task4[1]}
ввод ${task4[0]}
ввод ${task4[1]}
если ${item.task1[0]}
    то вывод "YES"
    иначе вывод "NO"
все
кон
                 </pre>
                </td>
                <td>
                <pre>
${task4[0]} = int(input())
${task4[1]} = int(input())
if ${item.task1[1]}:
    print("YES")
else:
    print("NO")
                </pre>
                </td>
                <td>
                <pre>
#include <iostream>
using namespace std;
int main() {
    int ${task4[0]}, ${task4[1]};
    cin >> ${task4[0]};
    cin >> ${task4[1]};
    if ${item.task1[2]}
        cout << "YES";
    else
        cout << "NO";
return 0; } </pre>
                </td>
              </tr>
            </tbody>
          </table>
          <hr class="hr-pd_20">
          Было проведено 9 запусков программы, при которых в качестве значений переменных ${task4[0]} и ${task4[1]} вводились следующие пары чисел:
          <hr class="hr-pd_20">
          <span class="span-centr">${item.task2}</span>
          <hr class="hr-pd_20">
          Сколько было запусков, при которых программа напечатала «${item.task1[3]}»?
          <hr class="hr-pd_20">
          `    
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${item.taskAnswer}</b>`;
          answerBlock += generateFooter(); 
          return answerBlock
        case 2:
          answerBlock += `
          <p class="p-num"><b>6.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          Ниже приведена программа, записанная на трёх языках программирования.
          <hr class="hr-pd_20">
          <table class="table_6">
            <tbody>
              <tr>
                <td style="text-align: center; background-color: #ffbf80;">Алгоритмический язык</td>
                <td style="text-align: center; background-color: #ffbf80;">Python</td>
                <td style="text-align: center; background-color: #ffbf80;">С++</td>
              </tr>
                  <tr>
                <td>
                 <pre>
алг
нач
цел ${task4[0]}, ${task4[1]}, ${task4[2]}
ввод ${task4[0]}
ввод ${task4[1]}
ввод ${task4[2]}
если ${item.task1[0]}
 то вывод "YES"
 иначе вывод "NO"
все
кон
                 </pre>
                </td>
                <td>
                <pre>
${task4[0]} = int(input())
${task4[1]} = int(input())
${task4[2]} = int(input())
if ${item.task1[1]}:
    print("YES")
else:
    print("NO")
                </pre>
                </td>
                <td>
                <pre>
#include <iostream>
using namespace std;
int main(){
   int ${task4[0]}, ${task4[1]}, ${task4[2]};
   cin >> ${task4[0]};
   cin >> ${task4[1]};
   cin >> ${task4[2]};
   if ${item.task1[2]}
     cout << "YES" << endl;
   else
     cout << "NO" << endl;
   return 0; } </pre>
                </td>
              </tr>
            </tbody>
          </table>
          <hr class="hr-pd_20">
          Было проведено 9 запусков программы, при которых в качестве значений переменных ${task4[0]} и ${task4[1]} вводились следующие пары чисел:
          <hr class="hr-pd_20">
          <span class="span-centr">${item.task2}</span>
          <hr class="hr-pd_20">
          ${item.task3}
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${item.taskAnswer}</b>`;
          answerBlock += generateFooter(); 
          return answerBlock
          }
        
    } 
    if (taskKey === 'seven'){
      switch(item.typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>7.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>Доступ к файлу <b style="font-weight: 500;">${item.task1[0]}</b>, находящемуся на сервере <b style="font-weight: 500;">${item.task1[1]}</b>, осуществляется по протоколу <b style="font-weight: 500;">${item.task1[2]}</b>.
           Фрагменты адреса файла закодированы цифрами от 1 до 7. 
           Запишите последовательность этих цифр, кодирующую адрес указанного файла в сети Интернет.</p>
          <hr class="hr-pd_10">
           ${item.task2}
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
                    answerBlock += `
                      <hr class="hr-pd_10">
                      ${item.task1[2]} :// ${item.task1[1]} / ${item.task1[0]}
                      <hr class="hr-pd_10">
                      Ответ: <b>${item.taskAnswer}</b>`;
                    answerBlock += generateFooter(); 
                    return answerBlock
      }
    }  
    if (taskKey === 'eight'){
      switch(item.typeTask){
        case 1:
          let k = item.task1[3].split(' ')
          answerBlock += `<p class="p-num"><b>8.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для обозначения логической операции «И» – символ «&».
         <hr class="hr-pd_10">
          В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет.</p>
          <hr class="hr-pd_20">
          <table class="table_6">
            <tbody>
              <tr>
                <td style="text-align: center; background-color: #ffbf80;">Запрос</td>
                <td style="text-align: center; background-color: #ffbf80;">Найдено страниц (в тысячах)</td>
              </tr>
              <tr>
                <td >${item.task1[0]}</td>
                <td>${item.task2[0]}</td>
              </tr>
              <tr>
                <td>${item.task1[1]}</td>
                <td>${item.task2[1]}</td>
              </tr>
              <tr>
                <td>${item.task1[2]}</td>
                <td>${item.task2[2]}</td>
              </tr>
            </tbody>
          </table>
          <hr class="hr-pd_20">
          <p>Какое количество страниц (в тысячах) будет найдено по запросу <b><em>${item.task1[3]}</em></b>?</p>
          <hr class="hr-pd_10">
          <p>Считается, что все запросы выполнялись практически одновременно, так что хранящаяся на поисковом сервере информация о наборе страниц, содержащих все искомые слова, не изменялась за время выполнения запросов.</p>
          <hr class="hr-pd_20">
          `
          answerBlock += generateHeader();
                    answerBlock += `
                      <hr class="hr-pd_10">
                      ${item.task2[3] === 1 ? `
                      ${k[1] === "&" ? 
                      `N<sub>A&B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A|B</sub><br>
                      N<sub>A&B</sub> = ${item.task2[1]} + ${item.task2[2]} - ${item.task2[0]}<br>
                      N<sub>A&B</sub> = ${item.task2[1] + item.task2[2] - item.task2[0]}`
                      : k[1] === "|" ? 
                      `N<sub>A|B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A&B</sub><br>
                      N<sub>A|B</sub> = ${item.task2[1]} + ${item.task2[2]} - ${item.task2[0]}<br>
                      N<sub>A|B</sub> = ${item.task2[1] + item.task2[2] - item.task2[0]}`
                      : 
                      `
                      N<sub>A</sub> = N<sub>A&B</sub> + N<sub>A|B</sub> - N<sub>B</sub><br>
                      N<sub>A</sub> = ${item.task2[1]} + ${item.task2[2]} - ${item.task2[0]}<br>
                      N<sub>A</sub> = ${item.task2[1] + item.task2[2] - item.task2[0]}
                      `}
                      ` : item.task2[3] === 2 ? `
                      ${k[1] === "&" ? 
                      `N<sub>A&B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A|B</sub><br>
                      N<sub>A&B</sub> = ${item.task2[0]} + ${item.task2[2]} - ${item.task2[1]}<br>
                      N<sub>A&B</sub> = ${item.task2[0] + item.task2[2] - item.task2[1]}`
                      : k[1] === "|" ? 
                      `N<sub>A|B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A&B</sub><br>
                      N<sub>A|B</sub> = ${item.task2[0]} + ${item.task2[2]} - ${item.task2[1]}<br>
                      N<sub>A|B</sub> = ${item.task2[0] + item.task2[2] - item.task2[1]}`
                      : 
                      `
                      N<sub>A</sub> = N<sub>A&B</sub> + N<sub>A|B</sub> - N<sub>B</sub><br>
                      N<sub>A</sub> = ${item.task2[0]} + ${item.task2[2]} - ${item.task2[1]}<br>
                      N<sub>A</sub> = ${item.task2[0] + item.task2[2] - item.task2[1]}
                      `}
                      ` : item.task2[3] === 3 ? `
                      ${k[1] === "&" ? 
                      `N<sub>A&B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A|B</sub><br>
                      N<sub>A&B</sub> = ${item.task2[0]} + ${item.task2[1]} - ${item.task2[2]}<br>
                      N<sub>A&B</sub> = ${item.task2[0] + item.task2[1] - item.task2[2]}`
                      : k[1] === "|" ? 
                      `N<sub>A|B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A&B</sub><br>
                      N<sub>A|B</sub> = ${item.task2[0]} + ${item.task2[1]} - ${item.task2[2]}<br>
                      N<sub>A|B</sub> = ${item.task2[0] + item.task2[1] - item.task2[2]}`
                      : 
                      `
                      N<sub>A</sub> = N<sub>A&B</sub> + N<sub>A|B</sub> - N<sub>B</sub><br>
                      N<sub>A</sub> = ${item.task2[0]} + ${item.task2[1]} - ${item.task2[2]}<br>
                      N<sub>A</sub> = ${item.task2[0] + item.task2[1] - item.task2[2]}
                      `}
                      ` : ``}
                      <hr class="hr-pd_10">
                      Ответ: <b>${item.taskAnswer}</b>`;
                    answerBlock += generateFooter(); 
                    return answerBlock
      }
    } 
    if (taskKey === 'nine'){
      switch(item.typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>9.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>На рисунке  — схема дорог, связывающих города ${item.task2[0]}. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. 
          Сколько существует различных путей ${item.task2[1]}<b>${item.task2[2]}</b>?</p>
          <hr class="hr-pd_20">
          <img class="img-task_9" src="../../../img/task9/task9/${item.task1}.png">
          <hr class="hr-pd_10">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
                    answerBlock += `
                      <hr class="hr-pd_10">
                      <img class="img-task_9" src="../../../img/task9/task9/${item.task1}_a.png">
                      <hr class="hr-pd_10">
                      Ответ: <b>${item.taskAnswer}</b>`;
                    answerBlock += generateFooter(); 
                    return answerBlock
        case 2:
          answerBlock += `<p class="p-num"><b>9.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>На рисунке  — схема дорог, связывающих города ${item.task2[0]}. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. 
          Сколько существует различных путей ${item.task2[1]}<b>${item.task2[2]}</b>?</p>
          <hr class="hr-pd_20">
          <img class="img-task_9" src="../../../img/task9/task9/${item.task1}.png">
           <hr class="hr-pd_10">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
                    answerBlock += `
                      <hr class="hr-pd_10">
                      <img class="img-task_9" src="../../../img/task9/task9/${item.task1}_a.png">
                      <hr class="hr-pd_10">
                      Ответ: <b>${item.taskAnswer}</b>`;
                    answerBlock += generateFooter(); 
                    return answerBlock
        case 3:
          answerBlock += `<p class="p-num"><b>9.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>На рисунке  — схема дорог, связывающих города ${item.task2[0]}. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. 
          Сколько существует различных путей ${item.task2[1]}<b>${item.task2[2]}</b>?</p>
          <hr class="hr-pd_20">
          <img class="img-task_9" src="../../../img/task9/task9/${item.task1}.png">
          <hr class="hr-pd_10">  
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
                    answerBlock += `
                      <hr class="hr-pd_10">
                      <img class="img-task_9" src="../../../img/task9/task9/${item.task1}_a.png">
                      <hr class="hr-pd_10">
                      Ответ: <b>${item.taskAnswer}</b>`;
                    answerBlock += generateFooter(); 
                    return answerBlock
      }
    }  
}
