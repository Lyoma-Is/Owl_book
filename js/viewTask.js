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
//   ten: '../../../src/oge_inf/taskTen.json',
//   eleven: '../../../src/oge_inf/taskEleven.json',
//   twelve: '../../../src/oge_inf/taskTwelve.json' 
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
  ten: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTen.json',
  eleven: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskEleven.json',
  twelve: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTwelve.json'
};

export {tasks};

export default function generateTaskHTML(taskKey, item) {
   const { date, taskNum, taskAn, task, task1, task2, task3, task4, task5, taskAnswer, typeTask, taskCounter, taskHard} = item;
   // const generateCounter = (taskCounter) => `<p class="p-num">№ ${taskCounter}</p>`;
    const generateHard = () => `${taskHard === 0 ? "" : taskHard === 1 ? "<em>(Базовый)</em>": taskHard === 2 ? "<em>(Средний)</em>": taskHard === 3 ? "<em>(Сложный)</em>":""}` 
    const generateHeader = () => `<details><summary class="p-num">Решение</summary><hr class="hr-pd_10">`;
    const generateFooter = () => `</details><hr class="hr-pd_20"><hr class="hr-between"><hr class="hr-pd_20">`;
    const generateDate = () => ` ${ taskNum === "" ? `<hr class="hr-pd_20">` :  
        ` <hr class="hr-pd_10">
        <p class="p-num" style="text-align: right;">Номер: ${taskNum}</p>
        <hr class="hr-pd_10">
        `}`;

    let answerBlock = "";
  
    if (taskKey === 'one'){
      switch(item.typeTask){
         case 1:         
            answerBlock += `
              <p class="p-num"><b>1.</b> № ${item.taskCounter}</p>
              <p>${item.task1}</p><hr class="hr-pd_20">
              <p><em>${item.task2}</em></p><hr class="hr-pd_20">
              <p>${item.task3}</p>
              <p>${item.task4}</p><hr class="hr-pd_20">`
            answerBlock += generateDate();
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
                <p>4) C учетом пробела и запятой: ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))} – 2 = ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))-2} символа</p>
                <hr class="hr-pd_20">
                <p>Слово из ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))-2} букв – ${item.taskAnswer[0]}.</p>
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
            answerBlock += generateDate();
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
                  <p>4) C учетом пробела: ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))} – 1 = ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))-1} символа</p>
                  <hr class="hr-pd_20">
                  <p>Слово из ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))-1} букв – ${item.taskAnswer[0]}.</p>
                  <hr class="hr-pd_20">
                  Ответ: <b>${item.taskAnswer[0]}</b>`; 
              answerBlock += generateFooter(); 
              return answerBlock
          }
    }
    if (taskKey === 'ten'){ 
      function AnsTenRed(item_an){
        let res = ''
        let x_el = taskAn[2]
        item_an = item_an.toString()
        if(x_el === 0){
          for(let i in item_an){
            let x = item_an[i]
            if( x === '0'){
              res += `<span style="color: red;">${x}</span>`
            }
            else{
               res += '1'
            }
          }
        }
        else if(x_el === 1){
          for(let i in item_an){
            let x = item_an[i]
            if( x === '1'){
              res += `<span style="color: red;">${x}</span>`
            }
            else{
               res += '0'
            }
          }
        }
        else{
          res = item_an
        }
        return res
        
      } 
      switch(typeTask){     
        case 1:
          answerBlock =`
            <p class="p-num"><b>10.</b> № ${taskCounter}</p>
            Переведите число <b>${taskAn[0]}</b> из десятичной системы счисления в двоичную систему счисления.
            ${taskAn[2] === 0 ? `Сколько нулей содержит полученное число? В ответе укажите одно число – количество нулей.` :
              taskAn[2] === 1 ? `Сколько единиц содержит полученное число? В ответе укажите одно число – количество единиц.` :
              `В ответе укажите двоичное число. Основание системы счисления указывать не нужно.`}
            <hr class="hr-pd_20">`
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
              <b>${taskAn[0]}</b><sub>10</sub> = <b>${AnsTenRed(taskAn[1])}</b><sub>2</sub>
              <hr class="hr-pd_10">
              Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter(); 
          return answerBlock
        case 2:
          answerBlock =`
            <p class="p-num"><b>10.</b> № ${taskCounter}</p>
            ${taskAn[2] === 1 ? `Переведите число <b>${taskAn[0]}</b> из двоичной системы счисления в десятичную систему счисления. В ответе запишите полученное число.`: 
              taskAn[2] === 2 ? `Некоторое число в двоичной системе счисления записывается как <b>${taskAn[0]}</b>. Запишите это число в десятичной системе.`: 
              `Переведите двоичное число <b>${taskAn[0]}</b> в десятичную систему счисления.`
            }
            <hr class="hr-pd_20">`
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
              <b>${taskAn[0]}</b><sub>2</sub> = <b>${taskAn[1]}</b><sub>10</sub>
              <hr class="hr-pd_10">
              Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter(); 
          return answerBlock
        case 3:
          let summaAns = 0;
          const num1 = parseInt(taskAn[0], 2);  // Двоичное число
          const num2 = parseInt(taskAn[1], 8);  // Восьмеричное число
          const num3 = parseInt(taskAn[2], 16); // Шестнадцатеричное число
  
          const operator1 = taskAn[3]; // Первый оператор
          const operator2 = taskAn[4]; // Второй оператор
  
          summaAns = num1 + (operator1 === "+" ? num2 : -num2) + (operator2 === "+" ? num3 : -num3);
          answerBlock =`
            <p class="p-num"><b>10.</b> № ${taskCounter}</p>
            <p>Вычислите значение арифметического выражения:</p>
            <hr class="hr-pd_10">
            <span class="span-centr">${taskAn[0]}<sub>2</sub> ${taskAn[3]} ${taskAn[1]}<sub>8</sub> ${taskAn[4]} ${taskAn[2]}<sub>16</sub></span>
            <hr class="hr-pd_10">
            <p>В ответе запишите десятичное число, основание системы счисления указывать не нужно.</p>
            <hr class="hr-pd_20">`
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
              ${taskAn[0]}<sub>2</sub> = ${parseInt(taskAn[0], 2)}<sub>10</sub>
              <hr class="hr-pd_10">
              ${taskAn[1]}<sub>8</sub> = ${parseInt(taskAn[1], 8)}<sub>10</sub>
              <hr class="hr-pd_10">
              ${taskAn[2]}<sub>16</sub> = ${parseInt(taskAn[2], 16)}<sub>10</sub>
              <hr class="hr-pd_20">
              ${num1} ${operator1} ${num2} ${operator2} ${num3} = ${summaAns}
              <hr class="hr-pd_20">
              Ответ: ${taskAnswer}`;
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
              answerBlock += generateDate();
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
             answerBlock += generateDate();
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
            answerBlock += generateDate();
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
          <p class="p-num"><b>3.</b> № ${item.taskCounter} ${generateHard()}</p> 
          <p>${item.task1}</p>
           <hr class="hr-pd_20">
            <span class="span-centr">${item.task2}</span>
          <hr class="hr-pd_20">`
          answerBlock += generateDate();
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
          <p class="p-num"><b>3.</b> № ${item.taskCounter} ${generateHard()}</p> 
          <p>${item.task1}</p>
           <hr class="hr-pd_20">
            <span class="span-centr">${item.task2}</span>
          <hr class="hr-pd_20">`
          answerBlock += generateDate();
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
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
              <hr class="hr-pd_10">
              <img class="img-task_9" src="../../../img/task4/task4/task4_${taskCounter}_a.png">
              <hr class="hr-pd_20">
              Кратчайший путь: ${item.taskAnswer[1]} = ${item.taskAnswer[0]} км
              <hr class="hr-pd_20">
              Ответ: <b>${item.taskAnswer[0]}</b>`;
          answerBlock += generateFooter(); 
          return answerBlock
        case 2:
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
            answerBlock += generateDate();
            answerBlock += generateHeader();
            answerBlock += `
                <hr class="hr-pd_10">
                <img class="img-task_9" src="../../../img/task4/task4/task4_${taskCounter}_a.png">
                <hr class="hr-pd_20">
                Кратчайший путь: ${item.taskAnswer[1]} = ${item.taskAnswer[0]} км
                <hr class="hr-pd_20">
                Ответ: <b>${item.taskAnswer[0]}</b>`;
            answerBlock += generateFooter(); 
            return answerBlock                              
        }
      
      
    }
    if (taskKey === 'five'){
      function examp(item){      
        let ex = '';
        for(let i in item){
          if (item[i] === '1'){
            ex += `${task2[0].slice(3)}<br>`
          }
          if (item[i] === '2'){
            ex += `${task2[1].slice(3)}<br>`
          }
        } return ex;
      }

      function fiveGetAn(item_an){  
         let resCount = 0;
         let res1 = ''
         item_an = item_an.toString()    
         if (item_an.length > 5){
            item_an = item_an.slice(8)
         }
         
         // delenie
         if(taskAn[4] === "/" && taskAn[5] !== "p"){
           let item_el = taskAn[0]
           let z = taskAn[5] 
           let vch = taskAn[3]
           let uch = taskAn[2]
           for (let i in item_an){
             let x = item_an[i]
             resCount++;
             if (x === '2' && z === "-"){
               if (resCount === 5){
                res1 += `2. <b>вычти ${vch}</b> из числа ${item_el} = <span style="background-color:rgb(252, 210, 94);">${item_el-vch}</span><br>`
                item_el -= vch
              }
              else{
                res1 += `2. <b>вычти ${vch}</b> из числа ${item_el} = ${item_el-vch}<br>`
                item_el -= vch
              }
             }
             else if(x === '2' && z === "+"){
              if (resCount === 5){
                res1 += `2. <b>прибавь ${vch}</b> к числу ${item_el} = <span style="background-color:rgb(252, 210, 94);">${item_el+vch}</span><br>`
                item_el += vch
              }
              else{
                res1 += `2. <b>прибавь ${vch}</b> к числу ${item_el} = ${item_el+vch}<br>`
                item_el += vch
              }
             }
             else{
              if (resCount === 5){
                res1 += `1. <b>раздели</b> число ${item_el} <b>на ${uch}</b> = <span style="background-color: rgb(252, 210, 94);">${item_el/uch}</span><br>`
                item_el /= uch
              }
              else{
                res1 += `1. <b>раздели</b> число ${item_el} <b>на ${uch}</b> = ${item_el/uch}<br>`
                item_el /= uch
              }   
             }
           }
         } 
         if(taskAn[5] === "/" && taskAn[4] !== "p"){
           let item_el = taskAn[0]
           let z = taskAn[4] 
           let vch = taskAn[2]
           let uch = taskAn[3]
           for (let i in item_an){
             let x = item_an[i]
             resCount++;
             if (x === '1' && z === "-"){
               if (resCount === 5){
                res1 += `1. <b>вычти ${vch}</b> из числа ${item_el} = <span style="background-color:rgb(252, 210, 94);">${item_el-vch}</span><br>`
                item_el -= vch
              }
              else{
                res1 += `1. <b>вычти ${vch}</b> из числа ${item_el} = ${item_el-vch}<br>`
                item_el -= vch
              }
             }
             else if(x === '1' && z === "+"){
              if (resCount === 5){
                res1 += `1. <b>прибавь ${vch}</b> к числу ${item_el} = <span style="background-color:rgb(252, 210, 94);">${item_el+vch}</span><br>`
                item_el += vch
              }
              else{
                res1 += `1. <b>прибавь ${vch}</b> к числу ${item_el} = ${item_el+vch}<br>`
                item_el += vch
              }
             }
             else{
              if (resCount === 5){
                res1 += `2. <b>раздели</b> число ${item_el} <b>на ${uch}</b> = <span style="background-color: rgb(252, 210, 94);">${item_el/uch}</span><br>`
                item_el /= uch
              }
              else{
                res1 += `2. <b>раздели</b> число ${item_el} <b>на ${uch}</b> = ${item_el/uch}<br>`
                item_el /= uch
              }   
             }
           }
         } 

         // umnozhenie
         if(taskAn[4] === "*"){
           let item_el = taskAn[0]
           let z = taskAn[5] 
           let vch = taskAn[3]
           let uch = taskAn[2]
           for (let i in item_an){
             let x = item_an[i]
             resCount++;
             if (x === '2' && z === "-"){
               if (resCount === 5){
                res1 += `2. <b>вычти ${vch}</b> из числа ${item_el} = <span style="background-color:rgb(252, 210, 94);">${item_el-vch}</span><br>`
                item_el -= vch
              }
              else{
                res1 += `2. <b>вычти ${vch}</b> из числа ${item_el} = ${item_el-vch}<br>`
                item_el -= vch
              }
             }
             else if(x === '2' && z === "+"){
              if (resCount === 5){
                res1 += `2. <b>прибавь ${vch}</b> к числу ${item_el} = <span style="background-color:rgb(252, 210, 94);">${item_el+vch}</span><br>`
                item_el += vch
              }
              else{
                res1 += `2. <b>прибавь ${vch}</b> к числу ${item_el} = ${item_el+vch}<br>`
                item_el += vch
              }
             }
             else{
              if (resCount === 5){
                res1 += `1. <b>умножить</b> число ${item_el} <b>на ${uch}</b> = <span style="background-color: rgb(252, 210, 94);">${item_el*uch}</span><br>`
                item_el *= uch;
              }
              else{
                res1 += `1. <b>умножить</b> число ${item_el} <b>на ${uch}</b> = ${item_el*uch}<br>`
                item_el *=uch;
              }   
             }
           }
         } 
         if(taskAn[5] === "*"){
           let item_el = taskAn[0]
           let z = taskAn[4] 
           let vch = taskAn[2]
           let uch = taskAn[3]
           for (let i in item_an){
             let x = item_an[i]
             resCount++;
             if (x === '1' && z === "-"){
               if (resCount === 5){
                res1 += `1. <b>вычти ${vch}</b> из числа ${item_el} = <span style="background-color:rgb(252, 210, 94);">${item_el-vch}</span><br>`
                item_el -= vch
              }
              else{
                res1 += `1. <b>вычти ${vch}</b> из числа ${item_el} = ${item_el-vch}<br>`
                item_el -= vch
              }
             }
             else if(x === '1' && z === "+"){
              if (resCount === 5){
                res1 += `1. <b>прибавь ${vch}</b> к числу ${item_el} = <span style="background-color:rgb(252, 210, 94);">${item_el+vch}</span><br>`
                item_el += vch
              }
              else{
                res1 += `1. <b>прибавь ${vch}</b> к числу ${item_el} = ${item_el+vch}<br>`
                item_el += vch
              }
             }
             else{
              if (resCount === 5){
                res1 += `2. <b>умножить</b> число ${item_el} <b>на ${uch}</b> = <span style="background-color: rgb(252, 210, 94);">${item_el*uch}</span><br>`
                item_el *= uch;
              }
              else{
                res1 += `2. <b>умножить</b> число ${item_el} <b>на ${uch}</b> = ${item_el*uch}<br>`
                item_el *=uch;
              }     
             }
           }
           
         } 

        // vozvedenie
        if (taskAn[4] === "**" && taskAn[5] !== "z"){
           let item_el = taskAn[0]
           let z = taskAn[5] 
           let vch = taskAn[3]
          // let uch = taskAn[2]
          for (let i in item_an){ 
            let x = item_an[i]
            resCount ++;
            if(x === '2' && z === "-" ){
              if (resCount === 5){
                res1 += `2. <b>вычти ${vch}</b> из числа ${item_el} = <span style="background-color: rgb(252, 210, 94);">${item_el - vch}</span><br>`
                item_el -= vch
              }
              else{
                res1 += `2. <b>вычти ${vch}</b> из числа ${item_el} = ${item_el - vch}<br>`
                item_el -= vch
              }        
            }
            else if(x === '2' && z === "+" ){
              if (resCount === 5){
                res1 += `2. <b>прибавь ${vch}</b> к числу ${item_el} = <span style="background-color: rgb(252, 210, 94);">${item_el + vch}</span><br>`
                item_el += vch
              }
              else{
                res1 += `2. <b>прибавь ${vch}</b> к числу ${item_el} = ${item_el + vch}<br>`
                item_el += vch
              }      
            }
            else{                      
              if (resCount === 5){
                res1 += `1. <b>возведи в квадрат</b> число ${item_el} = <span style="background-color: rgb(252, 210, 94);">${item_el*item_el}</span><br>`
                item_el = item_el * item_el;
              }
              else{
                res1 += `1. <b>возведи в квадрат</b> число ${item_el} = ${item_el*item_el}<br>`
                item_el = item_el * item_el;
              }  
            }
          }
        }
        if (taskAn[5] === "**" && taskAn[4] !== "z"){
           let item_el = taskAn[0]
           let z = taskAn[4] 
           let vch = taskAn[2]
           //let uch = taskAn[3]
           for (let i in item_an){
             let x = item_an[i]
             resCount++;
             if (x === '1' && z === "-"){
               if (resCount === 5){
                res1 += `1. <b>вычти ${vch}</b> из числа ${item_el} = <span style="background-color:rgb(252, 210, 94);">${item_el-vch}</span><br>`
                item_el -= vch
                }
                else{
                  res1 += `1. <b>вычти ${vch}</b> из числа ${item_el} = ${item_el-vch}<br>`
                  item_el -= vch
                }
              }
              else if(x === '1' && z === "+"){
                if (resCount === 5){
                  res1 += `1. <b>прибавь ${vch}</b> к числу ${item_el} = <span style="background-color:rgb(252, 210, 94);">${item_el+vch}</span><br>`
                  item_el += vch
                }
                else{
                  res1 += `1. <b>прибавь ${vch}</b> к числу ${item_el} = ${item_el+vch}<br>`
                  item_el += vch
                }
              }
              else{                      
                if (resCount === 5){
                  res1 += `2. <b>возведи в квадрат</b> число ${item_el} = <span style="background-color: rgb(252, 210, 94);">${item_el*item_el}</span><br>`
                  item_el = item_el * item_el;
                }
                else{
                  res1 += `2. <b>возведи в квадрат</b> число ${item_el} = ${item_el*item_el}<br>`
                  item_el = item_el*item_el;
                }  
              }
            }
        }
       
        // pripisat
        if (taskAn[4] === 'p'){
          let item_el = taskAn[0]
          let z = taskAn[5] 
          let vch = taskAn[3]
          let uch = taskAn[2]
          for (let i in item_an){ 
            let x = item_an[i]
            
            resCount ++;
            if(x === '2' && z === "/" ){
              if (resCount === 5){
                res1 += `2. <b>разделить на ${vch}</b> число ${item_el} = <span style="background-color: rgb(252, 210, 94);">${item_el / vch}</span><br>`
                item_el /= vch
              }
              else{
                res1 += `2. <b>разделить на ${vch}</b> число ${item_el} = ${item_el / vch}<br>`
                item_el /= vch
              }        
            }
            else{
              if (resCount === 5){
                res1 += `1. <b>приписать ${uch}</b> к числу ${item_el} = <span style="background-color: rgb(252, 210, 94);">${(item_el*10)+uch}</span><br>`
                item_el = (item_el*10)+uch;
              }
              else{
                res1 += `1. <b>приписать ${uch}</b> к числу ${item_el} = ${(item_el*10)+uch}<br>`
                item_el = (item_el*10)+uch;
              } 
            }
          }
        }
        if (taskAn[5] === 'p'){
         let item_el = taskAn[0]
         let z = taskAn[4] 
         let vch = taskAn[2]
         let uch = taskAn[3]
         for (let i in item_an){
            let x = item_an[i]
            resCount++;
            if(x === '1' && z === "/" ){
              if (resCount === 5){
                res1 += `1. <b>разделить на ${vch}</b> число ${item_el} = <span style="background-color: rgb(252, 210, 94);">${item_el / vch}</span><br>`
                item_el /= vch
              }
              else{
                res1 += `1. <b>разделить на ${vch}</b> число ${item_el} = ${item_el / vch}<br>`
                item_el /= vch
              }        
            }
            else if (x === '1' && z === "-"){
               if (resCount === 5){
                res1 += `1. <b>вычти ${vch}</b> из числа ${item_el} = <span style="background-color:rgb(252, 210, 94);">${item_el-vch}</span><br>`
                item_el -= vch
              }
              else{
                res1 += `1. <b>вычти ${vch}</b> из числа ${item_el} = ${item_el-vch}<br>`
                item_el -= vch
              }
             }
              else{
                if (resCount === 5){
                  res1 += `2. <b>приписать ${uch}</b> к числу ${item_el} = <span style="background-color: rgb(252, 210, 94);">${(item_el*10)+uch}</span><br>`
                  item_el = (item_el*10)+uch;
                }
                else{
                  res1 += `2. <b>приписать ${uch}</b> к числу ${item_el} = ${(item_el*10)+uch}<br>`
                  item_el = (item_el*10)+uch;
                } 
              }
          }
        }
      
        // zacherkni
        if (taskAn[4] === 'z'){
         let item_el = taskAn[0]
         let z = taskAn[5] 
         let t2 = taskAn[2]
         //let vch = taskAn[2]
         //let uch = taskAn[3]
         for (let i in item_an){
            let x = item_an[i]
            resCount++;
            if(x === '2' && z === "**"){                      
              if (resCount === 5){
                res1 += `2. <b>возведи в квадрат</b> число ${item_el} = <span style="background-color: rgb(252, 210, 94);">${item_el*item_el}</span><br>`
                item_el = item_el * item_el;
              }
              else{
                res1 += `2. <b>возведи в квадрат</b> число ${item_el} = ${item_el*item_el}<br>`
                item_el = item_el * item_el;
              }  
            }
            else if(t2 === 1){
              let d = item_el.toString().length
              let p = Math.pow(10, d-1)
              if (resCount === 5){
                res1 += `1. <b> зачеркни слева</b> число ${item_el} = <span style="background-color: rgb(252, 210, 94);">${Math.floor(item_el%p)}</span><br>`
                item_el = Math.floor(item_el%p)
              }
              else{
                res1 += `1. <b>зачеркни слева</b> число ${item_el} = ${Math.floor(item_el%p)}<br>`
                item_el = Math.floor(item_el%p)
              }        

            }
            else {
              if (resCount === 5){
                res1 += `1. <b> зачеркни справа</b> число ${item_el} = <span style="background-color: rgb(252, 210, 94);">${Math.floor(item_el/10)}</span><br>`
                item_el = Math.floor(item_el/10)
              }
              else{
                res1 += `1. <b>зачеркни справа</b> число ${item_el} = ${Math.floor(item_el/10)}<br>`
                item_el = Math.floor(item_el/10)
              }        
            }
          }
        }

        if (taskAn[5] === 'z'){
         let item_el = taskAn[0]
         let z = taskAn[4] 
         //let vch = taskAn[2]
         //let uch = taskAn[3]
         for (let i in item_an){
            let x = item_an[i]
            resCount++;
            if(x === '1' && z === "**"){                      
              if (resCount === 5){
                res1 += `1. <b>возведи в квадрат</b> число ${item_el} = <span style="background-color: rgb(252, 210, 94);">${item_el*item_el}</span><br>`
                item_el = item_el * item_el;
              }
              else{
                res1 += `1. <b>возведи в квадрат</b> число ${item_el} = ${item_el*item_el}<br>`
                item_el = item_el * item_el;
              }  
            }
            else {
              if (resCount === 5){
                res1 += `2. <b> зачеркни справа</b> число ${item_el} = <span style="background-color: rgb(252, 210, 94);">${Math.floor(item_el/10)}</span><br>`
                item_el = Math.floor(item_el/10)
              }
              else{
                res1 += `2. <b>зачеркни справа</b> число ${item_el} = ${Math.floor(item_el/10)}<br>`
                item_el = Math.floor(item_el/10)
              }        
            }
          }
        }
      
        return res1
      }
      
      switch(item.typeTask){
        case 1:
          answerBlock =`
          <p class="p-num"><b>5.</b> № ${item.taskCounter} ${generateHard()}</p> 
          <p>${task1}</p>
          <hr class="hr-pd_10">
          <p><b style="font-weight: 500;">${task2[0]}<br>${task2[1]}</b></p>
          <hr class="hr-pd_10">
          <p>${task3}</p>
          <p>Составьте алгоритм получения <b style="font-weight: 500;">${task4}</b>, содержащий не более 5 команд. В ответе запишите только номера команд.</p>
          <hr class="hr-pd_10">
          <p><em>(Например, ${task5[0]} –<br>это алгоритм:<br> ${examp(task5[0])} который преобразует ${task5[1]}.)</em></p>
          <hr class="hr-pd_10">
          Если таких алгоритмов более одного, то запишите любой из них.
          <hr class="hr-pd_10">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
              <span style="background-color: rgb(252, 210, 94);">${taskAn[0]}</span><br>
              ${fiveGetAn(taskAnswer)}
              <hr class="hr-pd_20">
              Ответ: <b>${item.taskAnswer}</b>`;
          answerBlock += generateFooter(); 
          return answerBlock
        case 2:
            answerBlock =`
            <p class="p-num"><b>5.</b> № ${item.taskCounter} ${generateHard()}</p> 
            <p>${item.task1}</p>
            <hr class="hr-pd_10">
            <p><b style="font-weight: 500;">${task2[0]}<br>${task2[1]}</b></p>
            <hr class="hr-pd_10">
            <p>${item.task3}</p>
            <p>Составьте алгоритм получения <b style="font-weight: 500;">${item.task4}</b>, содержащий не более 5 команд. В ответе запишите только номера команд.</p>
            <hr class="hr-pd_10">
            <p><em>(Например, ${task5[0]} –<br>это алгоритм:<br> ${examp(task5[0])} который преобразует ${task5[1]}.)</em></p>
            <hr class="hr-pd_10">
            Если таких алгоритмов более одного, то запишите любой из них.
            <hr class="hr-pd_10">
            `
            answerBlock += generateDate();
            answerBlock += generateHeader();
            answerBlock += `
                <span style="background-color: rgb(252, 210, 94);">${taskAn[0]}</span><br>
                ${fiveGetAn(taskAnswer)}
                <hr class="hr-pd_20">
                Ответ: <b>${item.taskAnswer}</b>`;
            answerBlock += generateFooter(); 
            return answerBlock
        case 3:
              answerBlock =`
              <p class="p-num"><b>5.</b> № ${item.taskCounter} ${generateHard()}</p> 
              <p>${item.task1}</p>
              <hr class="hr-pd_10">
              <p><b style="font-weight: 500;">${task2[0]}<br>${task2[1]}</b></p>
              <hr class="hr-pd_10">
              <p>${item.task3}</p>
              <p>Составьте алгоритм получения <b style="font-weight: 500;">${item.task4}</b>, содержащий не более 5 команд. В ответе запишите только номера команд.</p>
              <hr class="hr-pd_10">
              <p><em>(Например, ${task5[0]} –<br>это алгоритм:<br> ${examp(task5[0])} который преобразует ${task5[1]}.)</em></p>
              <hr class="hr-pd_10">
              Если таких алгоритмов более одного, то запишите любой из них.
              <hr class="hr-pd_10">
              `
              answerBlock += generateDate();
              answerBlock += generateHeader();
              answerBlock += `
                  <span style="background-color: rgb(252, 210, 94);">${taskAn[0]}</span><br>
                  ${fiveGetAn(taskAnswer)}
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
      let k = item.task1[3].split(' ')
      let r = ''
      function EightAn(t, v){
          if(t === 3){
             if (taskCounter === 196){
              r +=  `
              -------------------------------------------------------------------<br>
              ${task1[4]} = B = ${task2[4]}<hr class="hr-pd_10">
              ${task1[6]} = E = ${task2[6]}<hr class="hr-pd_10">
              ${task1[5]} = A + B + D + E + F = ${task2[5]}<br>
              -------------------------------------------------------------------<br>
              ${task1[3]} = ?<br>
              -------------------------------------------------------------------<br>
              ${task1[3]} = B + D + E + F = 100 + 500 = ${taskAnswer}
              `
             }
             if(taskCounter === 197){
              r +=  `
              -------------------------------------------------------------------<br>
              ${task1[5]} = B = ${task2[5]}<hr class="hr-pd_10">
              ${task1[6]} = E = ${task2[6]}<hr class="hr-pd_10">
              ${task1[4]} = A + B + D + E + F = ${task2[4]}<br>
              -------------------------------------------------------------------<br>
              ${task1[3]} = ?<br>
              -------------------------------------------------------------------<br>
              ${task1[3]} = B + E = 40 + 70 = ${taskAnswer}
              `
             }
             if(taskCounter === 198){
              r +=  `
              -------------------------------------------------------------------<br>
              ${task1[5]} = E = ${task2[5]}<hr class="hr-pd_10">
              ${task1[6]} = D = ${task2[6]}<hr class="hr-pd_10">
              ${task1[7]} = B = ${task2[7]}<hr class="hr-pd_10">
              ${task1[4]} = ${task2[4]}<br>
              -------------------------------------------------------------------<br>
              ${task1[3]} = ?<br>
              -------------------------------------------------------------------<br>
              ${task1[2]} = D + E + F = ${task2[2]}<hr class="hr-pd_10">
              Из ${task1[0]} = A + B + D = ${task2[0]} -> A = 250 - B - D = 250 - 20 - 30 = 200<hr class="hr-pd_10">
              A = 200<hr class="hr-pd_10">
              Из ${task1[1]} = B + C + E = ${task2[1]} -> C = 200 - B - E = 200 - 20 - 60 = 120<hr class="hr-pd_10">
              C = 120<hr class="hr-pd_10">
              Отсюда A + B + C + D + E + F = 200 + 20 + 120 + 500 = 840<hr class="hr-pd_10">
              -------------------------------------------------------------------<br>
              ${task1[3]} = A + B + C + D + E + F = 200 + 20 + 120 + 500 = ${taskAnswer}
              `
             }
             if (taskCounter === 199){
              r +=  `
              -------------------------------------------------------------------<br>
              ${task1[6]} = B = ${task2[6]}<hr class="hr-pd_10">
              ${task1[5]} = E = ${task2[5]}<hr class="hr-pd_10">
              ${task1[4]} = A + B + D + E + F = ${task2[4]}<br>
              -------------------------------------------------------------------<br>
              ${task1[3]} = ?<br>
              -------------------------------------------------------------------<br>
              ${task1[3]} = B + E = 50 + 40 = ${taskAnswer}
              `
             }
             if(taskCounter === 200){
              r +=  `
              -------------------------------------------------------------------<br>
              ${task1[5]} = E = ${task2[5]}<hr class="hr-pd_10">
              ${task1[6]} = B = ${task2[6]}<hr class="hr-pd_10">
              ${task1[4]} = A + B + D + E + F = ${task2[4]}<br>
              -------------------------------------------------------------------<br>
              ${task1[3]} = ?<br>
              -------------------------------------------------------------------<br>
              ${task1[1]} = D + E + F = ${task2[1]}<hr class="hr-pd_10">
              
              Из ${task1[2]} = B + C + E = ${task2[2]} -> C = 450 - B - E = 450 - 50 - 40 = 360<hr class="hr-pd_10">
              C = 360<hr class="hr-pd_10">
              Из ${task1[4]} = A + B + D + E + F = ${task2[4]} -> A + B = 450 - (D + E + F) = 450 - 250 = 200<hr class="hr-pd_10">
              A + B = 200<hr class="hr-pd_10">
              Отсюда A + B + C + D + E + F = 200 + 360 + 250 = 810<hr class="hr-pd_10">
              -------------------------------------------------------------------<br>
              ${task1[3]} = A + B + C + D + E + F = 200 + 360 + 250 = ${taskAnswer}
              `
             }
             if(taskCounter === 201){
              r +=  `
              -------------------------------------------------------------------<br>
              ${task1[4]} = D = ${task2[4]}<hr class="hr-pd_10">
              ${task1[5]} = B = ${task2[5]}<hr class="hr-pd_10">
              ${task1[6]} = E = ${task2[6]}<br>
              -------------------------------------------------------------------<br>
              ${task1[3]} = ?<br>
              -------------------------------------------------------------------<br>
              ${task1[2]} = D + E + F = ${task2[2]}<hr class="hr-pd_10">
              Из ${task1[0]} = A + B + D = ${task2[0]} -> A + B = 250 - D = 250 - 0 = 250<hr class="hr-pd_10">
              A + B = 250<hr class="hr-pd_10">
              Из ${task1[1]} = B + C + E = ${task2[1]} -> C = 200 - B - E = 200 - 20 - 10 = 170<hr class="hr-pd_10">
              C = 170<hr class="hr-pd_10">
              Отсюда A + B + C + D + E + F = 250 + 170 + 500 = 920<hr class="hr-pd_10">
              -------------------------------------------------------------------<br>
              ${task1[3]} = A + B + C + D + E + F = 250 + 170 + 500 = ${taskAnswer}
              `
             }
             if(taskCounter === 202){
              r +=  `
              -------------------------------------------------------------------<br>
              ${task1[4]} = B + G = ${task2[4]}<hr class="hr-pd_10">
              ${task1[5]} = E + G = ${task2[5]}<br> 
              -------------------------------------------------------------------<br>
              ${task1[3]} = G = ?<br>
              -------------------------------------------------------------------<br>
              Из ${task1[1]} = B + C + E + G = ${task2[1]} -> C + E = 200 - (B + G) = 200 - 200 = 0<hr class="hr-pd_10">
              C + E = 0 -> C = 0, E = 0<hr class="hr-pd_10">
              Из ${task1[5]} = E + G = ${task2[5]} -> G = 60 - 0 <hr class="hr-pd_10">
              G = 60<hr class="hr-pd_10">
              -------------------------------------------------------------------<br>
              ${task1[3]} = G = ${taskAnswer}
              `
             }

          }
          if (t === 2){
            if (v === 1){
              r += `<b>${task1[6]}</b> = ${task1[0]} + ${task1[1]} + ${task1[2]} - ${task1[3]} - ${task1[4]} - ${task1[5]}<hr class="hr-pd_10">
              <b>${task1[6]}</b> = ${task2[0]} + ${task2[1]} + ${task2[2]} - ${task2[3]} - ${task2[4]} - ${task2[5]}<hr class="hr-pd_10">
              <b>${task1[6]}</b> = ${task2[0] + task2[1] + task2[2] - task2[3] - task2[4] - task2[5]} `  
            }
            if (v === 2){
              r += `<b>${task1[6]}</b> = ${task1[2]} + ${task1[3]} + ${task1[4]} + ${task1[5]} - ${task1[0]} - ${task1[1]}<hr class="hr-pd_10">
              <b>${task1[6]}</b> = ${task2[2]} + ${task2[3]} + ${task2[4]} + ${task2[5]} - ${task2[0]} - ${task2[1]}<hr class="hr-pd_10">
              <b>${task1[6]}</b> = ${task2[2] + task2[3] + task2[4] + task2[5] - task2[0] - task2[1]} ` 
            }
            if (v === 3){
              r += `<b>${task1[6]}</b> = ${task1[0]} + ${task1[1]} + ${task1[2]} - ${task1[3]} - ${task1[4]} - ${task1[5]}<hr class="hr-pd_10">
              <b>${task1[6]}</b> = ${task2[0]} + ${task2[1]} + ${task2[2]} - ${task2[3]} - ${task2[4]} - ${task2[5]}<hr class="hr-pd_10">
              <b>${task1[6]}</b> = ${task2[0] + task2[1] + task2[2] - task2[3] - task2[4] - task2[5]} ` 
            }
            
          }return r
      } 
      switch(item.typeTask){ 
        
        case 1: 
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
          answerBlock += generateDate();
          answerBlock += generateHeader();
                    answerBlock += `
                      N<sub>A&B</sub> + N<sub>A|B</sub> = N<sub>A</sub> + N<sub>B</sub> 
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
                      ` : 
                      item.task2[3] === 2 ? `
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
                      ` : 
                      item.task2[3] === 3 ? `
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
        case 2:
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
                  <tr>
                <td>${item.task1[3]}</td>
                <td>${item.task2[3]}</td>
              </tr>
                  <tr>
                <td>${item.task1[4]}</td>
                <td>${item.task2[4]}</td>
              </tr>
                  <tr>
                <td>${item.task1[5]}</td>
                <td>${item.task2[5]}</td>
              </tr>
            </tbody>
          </table>
          <hr class="hr-pd_20">
          <p>Какое количество страниц (в тысячах) будет найдено по запросу <b><em>${item.task1[6]}</em></b>?</p>
          <hr class="hr-pd_10">
          <p>Считается, что все запросы выполнялись практически одновременно, так что хранящаяся на поисковом сервере информация о наборе страниц, содержащих все искомые слова, не изменялась за время выполнения запросов.</p>
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
                    answerBlock += `
                      <p>N<sub>A|B|C</sub> - N<sub>A&amp;B&amp;C</sub>&nbsp;= 
                      N<sub>A</sub>&nbsp;+ N<sub>B</sub>&nbsp;+ N<span><sub>C</sub></span>&nbsp;
                      – N<sub>A&amp;B</sub>&nbsp;– N<sub>A&amp;C</sub>&nbsp;– N<sub>B&amp;C</sub>&nbsp;</p>
                      <hr class="hr-pd_10">
                      N<sub>A&amp;B&amp;C</sub>&nbsp;= 0, так как пересечение трёх множеств нет. 
                      <hr class="hr-pd_10">
                      ${EightAn(typeTask, task2[6])}
                      <hr class="hr-pd_20">
                      Ответ: <b>${taskAnswer}</b>`;
                    answerBlock += generateFooter(); 
                    return answerBlock
        case 3:
          answerBlock += `<p class="p-num"><b>8.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>Некоторый сегмент сети Интернет состоит из 1000 сайтов. Поисковый сервер в автоматическом режиме составил таблицу ключевых слов для сайтов этого сегмента. Вот её фрагмент.</p>
          <hr class="hr-pd_20">
          <table class="table_6">
            <tbody>
              <tr>
                <td style="text-align: center;  vertical-align: middle; background-color: #ffbf80;">Ключевое слово</td>
                <td style="text-align: center; background-color: #ffbf80;">Количество сайтов, для которых <br>данное слово является ключевым</td>
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
          <p>Сколько сайтов будет найдено по запросу <b><em>${item.task1[3]}</em></b>?  
          ${task1.length === 7 
            ?
             `если по запросу <b>${task1[4]}</b> было найдено <b>${task2[4]}</b> сайтов; 
              по запросу <b>${task1[5]}</b> было найдено <b>${task2[5]}</b> сайтов; 
              по запросу <b>${task1[6]}</b> было найдено <b>${task2[6]}</b> сайтов`
              : 
              `${task1.length === 6 
              ? 
              `если по запросу <b>${task1[4]}</b> было найдено <b>${task2[4]}</b> сайтов; 
               по запросу <b>${task1[5]}</b> было найдено <b>${task2[5]}</b> сайтов` 
              :
              `если по запросу <b>${task1[4]}</b> было найдено <b>${task2[4]}</b> сайтов; 
              по запросу <b>${task1[5]}</b> было найдено <b>${task2[5]}</b> сайтов; 
              по запросу <b>${task1[6]}</b> было найдено <b>${task2[6]}</b> сайтов;
              по запросу <b>${task1[7]}</b> было найдено <b>${task2[7]}</b> сайтов`}` 
              }.</p>
          <hr class="hr-pd_10">
          <p>Для обозначения логической операции «ИЛИ» в запросах используется символ «|», а для обозначения логической операции «И» – символ «&».</p>
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
                    answerBlock += `
                      <hr class="hr-pd_20">
                      ${ task2[3] === 4 
                        ? 
                        `<img class="img-task_9" src="../../../img/task8/somG.png">
                        <hr class="hr-pd_10">
                        ${task1[0]} = A + B + D + G = ${task2[0]}<hr class="hr-pd_10">
                        ${task1[1]} = B + C + E + G = ${task2[1]}<hr class="hr-pd_10">
                        ${task1[2]} = D + E + F + G = ${task2[2]}<br>`
                        :
                        task1[0] === "Сомики" 
                        ? 
                        `<img class="img-task_9" src="../../../img/task8/som.png">
                        <hr class="hr-pd_10">
                        ${task1[0]} = A + B + D = ${task2[0]}<hr class="hr-pd_10">
                        ${task1[1]} = B + C + E = ${task2[1]}<hr class="hr-pd_10">
                        ${task1[2]} = D + E + F = ${task2[2]}<br>
                        `
                        : 
                        `<img class="img-task_9" src="../../../img/task8/ska.png">
                        <hr class="hr-pd_10">
                        ${task1[0]} = A + B + D = ${task2[0]}<hr class="hr-pd_10">
                        ${task1[2]} = B + C + E = ${task2[2]}<hr class="hr-pd_10">
                        ${task1[1]} = D + E + F = ${task2[1]}<hr class="hr-pd_10">
                        `}
                        ${EightAn(typeTask, taskCounter)}
                      <hr class="hr-pd_20">
                      Ответ: <b>${taskAnswer}</b>`;
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
          <img class="img-task_9" src="../../../img/task9/task9/task9_${taskCounter}.png">
          <hr class="hr-pd_10">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
                    answerBlock += `
                      <hr class="hr-pd_10">
                      <img class="img-task_9" src="../../../img/task9/task9/task9_${taskCounter}_a.png">
                      <hr class="hr-pd_10">
                      Ответ: <b>${item.taskAnswer}</b>`;
                    answerBlock += generateFooter(); 
                    return answerBlock
        case 2:
          answerBlock += `<p class="p-num"><b>9.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>На рисунке  — схема дорог, связывающих города ${item.task2[0]}. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. 
          Сколько существует различных путей ${item.task2[1]}<b>${item.task2[2]}</b>?</p>
          <hr class="hr-pd_20">
          <img class="img-task_9" src="../../../img/task9/task9/task9_${taskCounter}.png">
           <hr class="hr-pd_10">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
                    answerBlock += `
                      <hr class="hr-pd_10">
                      <img class="img-task_9" src="../../../img/task9/task9/task9_${taskCounter}_a.png">
                      <hr class="hr-pd_10">
                      Ответ: <b>${item.taskAnswer}</b>`;
                    answerBlock += generateFooter(); 
                    return answerBlock
        case 3:
          answerBlock += `<p class="p-num"><b>9.</b> № ${item.taskCounter} ${item.taskHard === 0 ? "" : item.taskHard === 1 ? "<em>(Легкий)</em>": item.taskHard === 2 ? "<em>(Средний)</em>": item.taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>На рисунке  — схема дорог, связывающих города ${item.task2[0]}. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. 
          Сколько существует различных путей ${item.task2[1]}<b>${item.task2[2]}</b>?</p>
          <hr class="hr-pd_20">
          <img class="img-task_9" src="../../../img/task9/task9/task9_${taskCounter}.png">
          <hr class="hr-pd_10">  
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
                    answerBlock += `
                      <hr class="hr-pd_10">
                      <img class="img-task_9" src="../../../img/task9/task9/task9_${taskCounter}_a.png">
                      <hr class="hr-pd_10">
                      Ответ: <b>${item.taskAnswer}</b>`;
                    answerBlock += generateFooter(); 
                    return answerBlock
      }
    }  
    if (taskKey === 'eleven'){
      switch(item.typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>11.</b> № ${taskCounter} ${taskHard === 0 ? "" : taskHard === 1 ? "<em>(Легкий)</em>": taskHard === 2 ? "<em>(Средний)</em>": taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>${task1}</p>
          <p>${task2}</p>      
          <hr class="hr-pd_10">
          
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
                    answerBlock += `
                      <hr class="hr-pd_10">
                      <p>${task3}</p>
                      <hr class="hr-pd_10">
                      <p>${task4}</p>   
                      <hr class="hr-pd_20">
                      Ответ: <b>${taskAnswer}</b>`;
                    answerBlock += generateFooter(); 
                    return answerBlock
         }
    }
    if (taskKey === 'twelve'){
      switch(item.typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>12.</b> № ${taskCounter} ${taskHard === 0 ? "" : taskHard === 1 ? "<em>(Легкий)</em>": taskHard === 2 ? "<em>(Средний)</em>": taskHard === 3 ? "<em>(Сложный)</em>":""}</p> 
          <p>${task1}</p>
          <p>В ответе укажите только число.</p>      
          <hr class="hr-pd_10">
          
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
                    answerBlock += `
                      <hr class="hr-pd_10">
                      <p>${task3}</p>
                      <hr class="hr-pd_10">
                      <p>${task4}</p>   
                      <hr class="hr-pd_20">
                      Ответ: <b>${taskAnswer}</b>`;
                    answerBlock += generateFooter(); 
                    return answerBlock
         }
    }
}
