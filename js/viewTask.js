// const tasks = {
//   one: '/src/oge_inf/taskOne.json',
//   two: '/src/oge_inf/taskTwo.json',
//   three: '/src/oge_inf/taskThree.json',
//   four:  '/src/oge_inf/taskFour.json',
//   five: '/src/oge_inf/taskFive.json',
//   six: '/src/oge_inf/taskSix.json',
//   ten: '/src/oge_inf/taskTen.json'
// };

const tasks = {
  one: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskOne.json',
  two: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTwo.json',
  three: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskThree.json',
  four: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskFour.json',
  five: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskFive.json',
  six: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskSix.json',
  ten: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTen.json'
};


// 
// seven: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskSeven.json'
// eight: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskEight.json'
// nine: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskNine.json'


// 
// seven: '/src/oge_inf/taskSeven.json'
// eight: '/src/oge_inf/taskEight.json'
// nine: '/src/oge_inf/taskNine.json'

export {tasks};

export default function generateTaskHTML(taskKey, item) {
   // const generateCounter = (taskCounter) => `<p class="p-num">№ ${taskCounter}</p>`;
    const generateHeader = () => `<details><summary class="p-num">Решение</summary><hr class="hr-pd_10">`;
    const generateFooter = () => `</details><hr class="hr-pd_20"><hr class="hr-between"><hr class="hr-pd_20">`;
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
      const { taskAn } = item; 
      function fiveAn(item){    
        let resCount = 0
        let res = ''
        let res1 = ''
          if (taskAn[4] === "/"){
           item = taskAn[0] 
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
            else{
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
          }
        } return res1
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
          <p>Составьте алгоритм получения <b style="font-weight: 500;">${item.task4}</b>. В ответе запишите только номера команд.</p>
          <hr class="hr-pd_10">
          <p><em>${item.task5}</em></p>
          <hr class="hr-pd_10">
          Если таких алгоритмов более одного, то запишите любой из них.
          <hr class="hr-pd_10">
          `
          answerBlock += generateHeader();
          answerBlock += `
              <span style="background-color: rgb(252, 210, 94);">${taskAn[0]}</span><br>
              ${fiveAn(taskAn[0])}
              <hr class="hr-pd_20">
              Ответ: <b>${item.taskAnswer}</b>`;
          answerBlock += generateFooter(); 
          console.log()
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
                <td style="text-align: center;">Алгоритмический язык</td>
                <td style="text-align: center;">Python</td>
                <td style="text-align: center;">С++</td>
              </tr>
                  <tr>
                <td>
                 <pre>
алг
нач
цел s, t
ввод s
ввод t
если ${item.task1[0]}
    то вывод "YES"
    иначе вывод "NO"
все
кон
                 </pre>
                </td>
                <td>
                <pre>
s = int(input())
t = int(input())
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
    int s, t;
    cin >> s;
    cin >> t;
    if ${item.task1[2]}
        cout << "YES";
    else
        cout << "NO";
return 0;
} </pre>
                </td>
              </tr>
            </tbody>
          </table>
          <hr class="hr-pd_20">
          Было проведено 9 запусков программы, при которых в качестве значений переменных s и t вводились следующие пары чисел:
          <hr class="hr-pd_20">
          <span class="span-centr">${item.task2}</span>
          <hr class="hr-pd_20">
          Сколько было запусков, при которых программа напечатала «${item.task1[3]}»?
          <hr class="hr-pd_20">
          `    
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
                <td style="text-align: center;">Алгоритмический язык</td>
                <td style="text-align: center;">Python</td>
                <td style="text-align: center;">С++</td>
              </tr>
                  <tr>
                <td>
                 <pre>
алг
нач
цел s, t, A
ввод s
ввод t
ввод A
если ${item.task1[0]}
 то вывод "YES"
 иначе вывод "NO"
все
кон
                 </pre>
                </td>
                <td>
                <pre>
s = int(input())
t = int(input())
A = int(input())
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
   int s, t, A;
   cin >> s;
   cin >> t;
   cin >> A;
   if ${item.task1[2]}
     cout << "YES" << endl;
   else
     cout << "NO" << endl;
   return 0;
 } </pre>
                </td>
              </tr>
            </tbody>
          </table>
          <hr class="hr-pd_20">
          Было проведено 9 запусков программы, при которых в качестве значений переменных s и t вводились следующие пары чисел:
          <hr class="hr-pd_20">
          <span class="span-centr">${item.task2}</span>
          <hr class="hr-pd_20">
          ${item.task3}
          <hr class="hr-pd_20">
          `    
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${item.taskAnswer}</b>`;
          answerBlock += generateFooter(); 
          return answerBlock
          }
        
    }   
}
