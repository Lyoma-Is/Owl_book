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
//   twelve: '../../../src/oge_inf/taskTwelve.json',
//   thirteen: '../../../src/oge_inf/taskThirteen.json',
//   thirteentwo: '../../../src/oge_inf/taskThirteenTwo.json',
//   fourteen: '../../../src/oge_inf/taskFourteen.json',
//   fifteen: '../../../src/oge_inf/taskFifteen.json',
//   sixteen: '../../../src/oge_inf/taskSixteen.json'
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
  twelve: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTwelve.json',
  thirteen: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskThirteen.json',
  thirteentwo: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskThirteenTwo.json',
  fourteen: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskFourteen.json',
  fifteen: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskFifteen.json',
  sixteen: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskSixteen.json'
};

export {tasks};

export default function generateTaskHTML(taskKey, item, tumbler = true) {
    const { date, taskNum, taskAn, task, task1, task2, task3, task4, task5, task6, taskAuthor, taskTable, taskAnswer, typeTask, taskCounter, taskHard, taskTableV, taskTableS} = item;
   // const generateCounter = (taskCounter) => `<p class="p-num">№ ${taskCounter}</p>`;
    const generateHard = () => `${taskHard === 0 ? "" : taskHard === 1 ? "<em>(Базовый)</em>": taskHard === 2 ? "<em>(Средний)</em>": taskHard === 3 ? "<em>(Сложный)</em>":""}` 
    const generateHeader = () => `<details><summary class="p-num resh">Решение</summary><hr class="hr-pd_10">`;
    const generateFooter = () => `</details><hr class="hr-pd_20"><hr class="hr-between"><hr class="hr-pd_20">`;
    const generateDate = () => ` ${ taskNum === "" ? `<hr class="hr-pd_20">` : ` <hr class="hr-pd_10"><p class="p-num" style="text-align: right;">Номер: ${taskNum}</p> <hr class="hr-pd_10">`}`;
    const generateAuthor = () => `${!taskAuthor? "": `<em>(${taskAuthor})</em>`}`
    const generateInput = () => ` <section class="answer-block"><p></p><input id="input_answer" class="input_answer" placeholder="Введите ответ"/></section>`;
    const generateInputD = () => `<section class="answer-block"><div class="download"><a href="../../../src/inf_file/zadanie_11.rar"><img src="../../../img/download.svg" alt="download">Скачать файлы</a></div><input id="input_answer" class="input_answer" placeholder="Введите ответ"/></section>`;
    const generateInputD12 = () => `<section class="answer-block"><div class="download"><a href="../../../src/inf_file/zadanie_12.rar"><img src="../../../img/download.svg" alt="download">Скачать файлы</a></div><input id="input_answer" class="input_answer" placeholder="Введите ответ"/></section>`;

    let answerBlock = "";

    if (taskKey === 'one'){
      switch(typeTask){
         case 1:         
            answerBlock += `<p class="p-num"><b>1.</b> № ${taskCounter} ${generateHard()} ${generateAuthor()}</p>
              <p>${task1}</p>
              <hr class="hr-pd_20">
              <p><em>${task2}</em>
              </p><hr class="hr-pd_20">
              <p>${task3}</p>
              <p>${task4}</p><hr class="hr-pd_20">
              `
            answerBlock += generateDate();
            answerBlock += generateHeader();
            answerBlock += `
                ${taskAnswer[3] === "м" ? `
                1) Один символ кодируется ${taskAnswer[1]} бит = ${taskAnswer[1]/8 < 2 ?  `${taskAnswer[1]/8} байт. ` : `${taskAnswer[1]/8} байта.`}<hr class="hr-pd_10">

                2) Вычеркнутое (Удалённое) слово занимает ${taskAnswer[2]} байта.<hr class="hr-pd_10">

                3) Количество символов в слове ${taskAnswer[2]}/${taskAnswer[1]/8} = ${taskAnswer[2]/(taskAnswer[1]/8)} символов.<hr class="hr-pd_10">
                
                4) C учетом пробела и запятой: ${(taskAnswer[2]/(taskAnswer[1]/8))} – 2 = ${(taskAnswer[2]/(taskAnswer[1]/8))-2} символа.

                <hr class="hr-pd_20">
                ${taskAnswer[4] === "к" ?  
                `<p>Слово из ${(taskAnswer[2]/(taskAnswer[1]/8))-4} букв (без кавычек) – ${taskAnswer[0]}.</p>`: 
                taskAnswer[4] === "и"  ? `<p>Слово из ${(taskAnswer[2]/(taskAnswer[1]/8))-2} букв (без имени) – ${taskAnswer[0]}.</p>`:
                taskAnswer[4] === "д"  ? `<p>Слово из ${(taskAnswer[2]/(taskAnswer[1]/8))-3} букв (без дефиса) – ${taskAnswer[0]}.</p>`:
                taskAnswer[4] === "п"  ? `<p>Слово из ${(taskAnswer[2]/(taskAnswer[1]/8))-2} букв (приставка) – ${taskAnswer[0]}.</p>`:
                
                `<p>Слово из ${(taskAnswer[2]/(taskAnswer[1]/8))-2} букв – ${taskAnswer[0]}.</p>`}
                <hr class="hr-pd_20">
                Ответ: <b>${taskAnswer[0]}</b>
                ` :

                taskAnswer[3] === "мм" ? `
                1) Один символ кодируется ${taskAnswer[1]} байтами. <hr class="hr-pd_10">

                2) Вычеркнутое (Удалённое) слово занимает ${taskAnswer[2]} бит = ${taskAnswer[2]/8} байт.<hr class="hr-pd_10">

                3) Количество символов в слове ${taskAnswer[2]/8}/${taskAnswer[1]} = ${taskAnswer[2]/8/taskAnswer[1]} символов. <hr class="hr-pd_10">

                4) C учетом пробела и запятой: ${taskAnswer[2]/8/taskAnswer[1]} – 2 = ${(taskAnswer[2]/8/taskAnswer[1])-2} символа.

                <hr class="hr-pd_20">
                ${taskAnswer[4] === "к" ? 
                `<p>Слово из ${(taskAnswer[2]/8/taskAnswer[1])-4} букв (без кавычек)– ${taskAnswer[0]}.</p>`: 
                
                `<p>Слово из ${(taskAnswer[2]/8/taskAnswer[1])-2} букв – ${taskAnswer[0]}.</p>`}
                
                <hr class="hr-pd_20">
                Ответ: <b>${taskAnswer[0]}</b>
                
                `: `
                1) Один символ кодируется ${taskAnswer[1]} бит = ${taskAnswer[1]/8 < 2 ?  `${taskAnswer[1]/8} байт. ` : `${taskAnswer[1]/8} байта.`}<hr class="hr-pd_10">

                2) Добавленное слово занимает ${taskAnswer[2]} байта.<hr class="hr-pd_10">

                3) Количество символов в слове ${taskAnswer[2]}/${taskAnswer[1]/8} = ${taskAnswer[2]/(taskAnswer[1]/8)} символов.<hr class="hr-pd_10">
                
                4) C учетом пробела и запятой: ${(taskAnswer[2]/(taskAnswer[1]/8))} – 2 = ${(taskAnswer[2]/(taskAnswer[1]/8))-2} символа.

                <hr class="hr-pd_20">
                ${taskAnswer[4] === "к" ? 
                `<p>Слово из ${(taskAnswer[2]/(taskAnswer[1]/8))-4} букв (без кавычек) – ${taskAnswer[0]}.</p>`: 
                `<p>Слово из ${(taskAnswer[2]/(taskAnswer[1]/8))-2} букв – ${taskAnswer[0]}.</p>`}
                <hr class="hr-pd_20">
                Ответ: <b>${taskAnswer[0]}</b>
                
                `} `;
            answerBlock += generateFooter(); 
            if(tumbler === false){
              answerBlock += generateInput();
            }
            return answerBlock
         case 2:
            answerBlock += `
                <p class="p-num"><b>1.</b> № ${taskCounter} ${generateHard()} ${generateAuthor()}</p>

                <p>${task1}</p>
                <hr class="hr-pd_20">
                <p>${task2}</p>
                <hr class="hr-pd_20">
                <p>${task3}</p>
                <p>${task4}</p>
                <hr class="hr-pd_20">
                `
            answerBlock += generateDate();
            answerBlock += generateHeader();
            answerBlock += `
                  <p>1) Один символ кодируется ${taskAnswer[1]} бит = ${taskAnswer[1]/8 < 2 ?  `${taskAnswer[1]/8} байт ` : `${taskAnswer[1]/8} байта`}</p> 
                  <hr class="hr-pd_10">
                  <p>2) ${taskAnswer[3] == "м" ? 
                  `Вычеркнутое слово занимает ${taskAnswer[2]} байта</p> 
                  <hr class="hr-pd_10"><p>3) Количество символов в слове ${taskAnswer[2]}/${taskAnswer[1]/8} = ${taskAnswer[2]/(taskAnswer[1]/8)} символов` : 
                  `Добавленное слово занимает ${taskAnswer[2]} байта</p>
                  <hr class="hr-pd_10"><p>3) Количество символов в слове ${taskAnswer[2]}/${taskAnswer[1]/8} = ${taskAnswer[2]/(taskAnswer[1]/8)} символов`} 
                  </p> 
                  <hr class="hr-pd_10">
                  <p>4) C учетом пробела: ${(taskAnswer[2]/(taskAnswer[1]/8))} – 1 = ${(taskAnswer[2]/(taskAnswer[1]/8))-1} символа</p>
                  <hr class="hr-pd_20">
                  <p>Слово из ${(taskAnswer[2]/(taskAnswer[1]/8))-1} букв – ${taskAnswer[0]}.</p>
                  <hr class="hr-pd_20">
                  Ответ: <b>${taskAnswer[0]}</b>`; 
            answerBlock += generateFooter(); 
            if(tumbler === false){
              answerBlock += generateInput();
            }
            return answerBlock
          }
    }
    if (taskKey === 'two'){
      switch(typeTask){
        case 1:
          answerBlock =`
            <p class="p-num"><b>2.</b> № ${taskCounter} ${generateHard()} ${generateAuthor()}</p>
            <p>${task1}</p>
            
            ${taskAnswer[2] === 1 ? `
            <hr class="hr-pd_20">
            <span class="span-centr span-centr__font">${task2}</span>
            <hr class="hr-pd_20">
            <p>${task3}</p>
            <hr class="hr-pd_20">
            ${taskTable.length === 10 ? `
              <table class="table_2_1">
                <tbody>
                  <tr>
                      <td>${taskTable[0]}</td> <td>${taskTable[2]}</td>
                      <td>${taskTable[4]}</td><td>${taskTable[6]}</td>
                      <td>${taskTable[8]}</td>
                  </tr>
                  <tr>
                    <td>${taskTable[1]}</td><td>${taskTable[3]}</td>
                    <td>${taskTable[5]}</td><td>${taskTable[7]}</td>
                    <td>${taskTable[9]}</td>
                </tr>
                </tbody>
              </table>
              `: taskTable.length === 12 ?`
                  <table class="table_2_1">
                  <tbody>
                    <tr>
                        <td>${taskTable[0]}</td><td>${taskTable[2]}</td>
                        <td>${taskTable[4]}</td><td>${taskTable[6]}</td>
                        <td>${taskTable[8]}</td><td>${taskTable[10]}</td>
                    </tr>
                    <tr>
                      <td>${taskTable[1]}</td><td>${taskTable[3]}</td>
                      <td>${taskTable[5]}</td><td>${taskTable[7]}</td>
                      <td>${taskTable[9]}</td><td>${taskTable[11]}</td>
                  </tr>
                  </tbody>
                </table>
              `:`
                <table class="table_2_1">
                  <tbody>
                    <tr>
                        <td>${taskTable[0]}</td><td>${taskTable[2]}</td>
                        <td>${taskTable[4]}</td><td>${taskTable[6]}</td>
                        <td>${taskTable[8]}</td><td>${taskTable[10]}</td>
                        <td>${taskTable[12]}</td>
                    </tr>
                    <tr>
                      <td>${taskTable[1]}</td><td>${taskTable[3]}</td>
                      <td>${taskTable[5]}</td><td>${taskTable[7]}</td>
                      <td>${taskTable[9]}</td><td>${taskTable[11]}</td>
                      <td>${taskTable[13]}</td>
                  </tr>
                  </tbody>
              </table>`}
             <hr class="hr-pd_20">
             <p>${task4}</p>
             <hr class="hr-pd_20">
              `:
            `<hr class="hr-pd_20">
            ${taskTable.length === 10 ? `
              <table class="table_2_1">
                <tbody>
                  <tr>
                      <td>${taskTable[0]}</td> <td>${taskTable[2]}</td>
                      <td>${taskTable[4]}</td><td>${taskTable[6]}</td>
                      <td>${taskTable[8]}</td>
                  </tr>
                  <tr>
                    <td>${taskTable[1]}</td><td>${taskTable[3]}</td>
                    <td>${taskTable[5]}</td><td>${taskTable[7]}</td>
                    <td>${taskTable[9]}</td>
                </tr>
                </tbody>
              </table>
              `: taskTable.length === 12 ?`
                  <table class="table_2_1">
                  <tbody>
                    <tr>
                        <td>${taskTable[0]}</td><td>${taskTable[2]}</td>
                        <td>${taskTable[4]}</td><td>${taskTable[6]}</td>
                        <td>${taskTable[8]}</td><td>${taskTable[10]}</td>
                    </tr>
                    <tr>
                      <td>${taskTable[1]}</td><td>${taskTable[3]}</td>
                      <td>${taskTable[5]}</td><td>${taskTable[7]}</td>
                      <td>${taskTable[9]}</td><td>${taskTable[11]}</td>
                  </tr>
                  </tbody>
                </table>
              `:`
                <table class="table_2_1">
                  <tbody>
                    <tr>
                        <td>${taskTable[0]}</td><td>${taskTable[2]}</td>
                        <td>${taskTable[4]}</td><td>${taskTable[6]}</td>
                        <td>${taskTable[8]}</td><td>${taskTable[10]}</td>
                        <td>${taskTable[12]}</td>
                    </tr>
                    <tr>
                      <td>${taskTable[1]}</td><td>${taskTable[3]}</td>
                      <td>${taskTable[5]}</td><td>${taskTable[7]}</td>
                      <td>${taskTable[9]}</td><td>${taskTable[11]}</td>
                      <td>${taskTable[13]}</td>
                  </tr>
                  </tbody>
              </table>`}
            <hr class="hr-pd_20">
            <p>${task3}</p>  
            <hr class="hr-pd_10">
            <span class="span-centr span-centr__font">${task2}</span>
            <hr class="hr-pd_10">
             <p>${task4}</p>
             <hr class="hr-pd_20">
              `}`
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
           <p>${taskAnswer[1]}</p>
           <hr class="hr-pd_20">
           <p><b>Ответ:</b> ${taskAnswer[0]}</p>
           <hr class="hr-pd_10">`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 2:
          answerBlock =`
          <p class="p-num"><b>2.</b> № ${taskCounter} ${generateHard()} ${generateAuthor()}</p>
          <p>${task1}</p>
           <hr class="hr-pd_20">
            ${taskTable.length === 10 ? `
              <table class="table_2_1">
                <tbody>
                  <tr>
                      <td>${taskTable[0]}</td> <td>${taskTable[2]}</td>
                      <td>${taskTable[4]}</td><td>${taskTable[6]}</td>
                      <td>${taskTable[8]}</td>
                  </tr>
                  <tr>
                    <td>${taskTable[1]}</td><td>${taskTable[3]}</td>
                    <td>${taskTable[5]}</td><td>${taskTable[7]}</td>
                    <td>${taskTable[9]}</td>
                </tr>
                </tbody>
              </table>
              `: taskTable.length === 12 ?`
                  <table class="table_2_1">
                  <tbody>
                    <tr>
                        <td>${taskTable[0]}</td><td>${taskTable[2]}</td>
                        <td>${taskTable[4]}</td><td>${taskTable[6]}</td>
                        <td>${taskTable[8]}</td><td>${taskTable[10]}</td>
                    </tr>
                    <tr>
                      <td>${taskTable[1]}</td><td>${taskTable[3]}</td>
                      <td>${taskTable[5]}</td><td>${taskTable[7]}</td>
                      <td>${taskTable[9]}</td><td>${taskTable[11]}</td>
                  </tr>
                  </tbody>
                </table>
              `:`
                <table class="table_2_1">
                  <tbody>
                    <tr>
                        <td>${taskTable[0]}</td><td>${taskTable[2]}</td>
                        <td>${taskTable[4]}</td><td>${taskTable[6]}</td>
                        <td>${taskTable[8]}</td><td>${taskTable[10]}</td>
                        <td>${taskTable[12]}</td>
                    </tr>
                    <tr>
                      <td>${taskTable[1]}</td><td>${taskTable[3]}</td>
                      <td>${taskTable[5]}</td><td>${taskTable[7]}</td>
                      <td>${taskTable[9]}</td><td>${taskTable[11]}</td>
                      <td>${taskTable[13]}</td>
                  </tr>
                  </tbody>
              </table>`}
            <hr class="hr-pd_20">
            <p>${task3}</p>  
            <hr class="hr-pd_10">
            <p>Даны три кодовые цепочки:</p>
            <hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${task2[0]}</p><hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${task2[1]}</p><hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${task2[2]}</p>
            <hr class="hr-pd_10">
             <p>${task4}</p>
             <hr class="hr-pd_20">`
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <p>${taskAnswer[1]} – <b>${taskAnswer[0]}</b></p>
            <hr class="hr-pd_20">
            <p><b>Ответ:</b> ${taskAnswer[0]}</p>
            <hr class="hr-pd_10">`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 3:
          answerBlock =`
          <p class="p-num"><b>2.</b> № ${taskCounter} ${generateHard()} ${generateAuthor()}</p>
          <p>${task1}</p>
            <hr class="hr-pd_20">
            <table class="table_2_3">
                <tbody >
                  <tr >
                    <td>А 1</td> <td>Й 11</td> <td>У 21</td> <td>Э 31</td>
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
            <p>${task3}</p>  
            <hr class="hr-pd_10">
            <p>Даны четыре шифровки:</p>
            <hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${task2[0]}</p><hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${task2[1]}</p><hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${task2[2]}</p><hr class="hr-pd_10">
            <p style="letter-spacing: 1px;">&emsp;&emsp;${task2[3]}</p><hr class="hr-pd_10">
             <p>${task4}</p>
             <hr class="hr-pd_20">`
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <p>${taskAnswer[1]} – <b>${taskAnswer[0]}</b></p>
            ${task5 === "" ? `<hr class="hr-pd_20">` : 
              `
              <hr class="hr-pd_20">
              <p>${task5}</p> 
              <hr class="hr-pd_20">
              `
            }        
            <p><b>Ответ:</b> ${taskAnswer[0]}</p>
            <hr class="hr-pd_10">`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
      }
    }
    if (taskKey === 'three'){
      switch(typeTask){
        case 1:
          answerBlock =`
          <p class="p-num"><b>3.</b> № ${taskCounter} ${generateHard()}</p> 
          <p>${task1}</p>
           <hr class="hr-pd_20">
            <span class="span-centr">${task2}</span>
          <hr class="hr-pd_20">`
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
              <p>Избавимся от НЕ, применяя закон де Моргана:</p>
              <hr class="hr-pd_10">
              ${task4 !== "" ? 
              `
              <p>Было: ${task2} – истинно</p>
              <hr class="hr-pd_10">
              <p>Стало: ${task3} – истинно</p>
              <hr class="hr-pd_10">
              ${task4}
              <hr class="hr-pd_10">
              `
              : `
              <p>Было: ${task2} – истинно</p>
              <hr class="hr-pd_10">
              <p>Стало: ${task3} – истинно</p>
              <hr class="hr-pd_10">
              `}
              Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 2:
          answerBlock =`
          <p class="p-num"><b>3.</b> № ${taskCounter} ${generateHard()}</p> 
          <p>${task1}</p>
           <hr class="hr-pd_20">
            <span class="span-centr">${task2}</span>
          <hr class="hr-pd_20">`
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
              <p>Переделаем ложное высказывание в истинное, применяя закон де Моргана:</p>
              <hr class="hr-pd_10">
              ${task4 !== "" ? 
              `
              <p>Было: ${task2} – ложно</p>
              <hr class="hr-pd_10">
              <p>Стало: ${task3} – истинно</p>
              <hr class="hr-pd_10">
              ${task4}
              <hr class="hr-pd_10">
              `
              : `
              <p>Было: ${task2} – ложно</p>
              <hr class="hr-pd_10">
              <p>Стало: ${task3} – истинно</p>
              <hr class="hr-pd_10">
              `}
              Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
      }
    }
    if (taskKey === 'four'){
      switch (typeTask) {
        case 1:
          answerBlock =`
          <p class="p-num"><b>4.</b> № ${taskCounter} ${generateHard()}</p> 
          <p>${task1}</p>
          
          <hr class="hr-pd_20">
          ${ taskTableV.length === 4 ? 
          `
          <table class="table_4">
            <tbody>
              <tr><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableV[0]}</td><td>${taskTableV[1]}</td><td>${taskTableV[2]}</td><td>${taskTableV[3]}</td></tr>
              <tr><td>${taskTableV[0]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[1]}</td><td>${taskTableS[2]}</td><td>${taskTableS[3]}</td></tr>
              <tr><td>${taskTableV[1]}</td><td>${taskTableS[1]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[4]}</td><td>${taskTableS[5]}</td></tr>
              <tr><td>${taskTableV[2]}</td><td>${taskTableS[2]}</td><td>${taskTableS[4]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[6]}</td></tr>
              <tr><td>${taskTableV[3]}</td><td>${taskTableS[3]}</td><td>${taskTableS[5]}</td><td>${taskTableS[6]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td></tr> 
            </tbody>
          </table>

          `: taskTableV.length === 5 ? 
          `
          <table class="table_4">
            <tbody>
              <tr><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableV[0]}</td><td>${taskTableV[1]}</td><td>${taskTableV[2]}</td><td>${taskTableV[3]}</td><td>${taskTableV[4]}</td></tr>
              <tr><td>${taskTableV[0]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[1]}</td><td>${taskTableS[2]}</td><td>${taskTableS[3]}</td><td>${taskTableS[4]}</td></tr>
              <tr><td>${taskTableV[1]}</td><td>${taskTableS[1]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[5]}</td><td>${taskTableS[6]}</td><td>${taskTableS[7]}</td></tr>
              <tr><td>${taskTableV[2]}</td><td>${taskTableS[2]}</td><td>${taskTableS[5]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[8]}</td><td>${taskTableS[9]}</td></tr>
              <tr><td>${taskTableV[3]}</td><td>${taskTableS[3]}</td><td>${taskTableS[6]}</td><td>${taskTableS[8]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[10]}</td></tr>
              <tr><td>${taskTableV[4]}</td><td>${taskTableS[4]}</td><td>${taskTableS[7]}</td><td>${taskTableS[9]}</td><td>${taskTableS[10]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td></tr> 
            </tbody>
          </table>

          `: taskTableV.length === 6 ? 
          `
          <table class="table_4">
            <tbody>
              <tr><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableV[0]}</td><td>${taskTableV[1]}</td><td>${taskTableV[2]}</td><td>${taskTableV[3]}</td><td>${taskTableV[4]}</td><td>${taskTableV[5]}</td></tr>
              <tr><td>${taskTableV[0]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[1]}</td><td>${taskTableS[2]}</td><td>${taskTableS[3]}</td><td>${taskTableS[4]}</td><td>${taskTableS[5]}</td></tr>
              <tr><td>${taskTableV[1]}</td><td>${taskTableS[1]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[6]}</td><td>${taskTableS[7]}</td><td>${taskTableS[8]}</td><td>${taskTableS[9]}</td></tr>
              <tr><td>${taskTableV[2]}</td><td>${taskTableS[2]}</td><td>${taskTableS[6]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[10]}</td><td>${taskTableS[11]}</td><td>${taskTableS[12]}</td></tr>
              <tr><td>${taskTableV[3]}</td><td>${taskTableS[3]}</td><td>${taskTableS[7]}</td><td>${taskTableS[10]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[13]}</td><td>${taskTableS[14]}</td></tr>
              <tr><td>${taskTableV[4]}</td><td>${taskTableS[4]}</td><td>${taskTableS[8]}</td><td>${taskTableS[11]}</td><td>${taskTableS[13]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[15]}</td></tr>
              <tr><td>${taskTableV[5]}</td><td>${taskTableS[5]}</td><td>${taskTableS[9]}</td><td>${taskTableS[12]}</td><td>${taskTableS[14]}</td><td>${taskTableS[15]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td></tr>  
            </tbody>
          </table>

          `: ""}  
          <hr class="hr-pd_20">
          <p>${task2}</p>
          <hr class="hr-pd_20">`
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
              <hr class="hr-pd_10">
              <img class="img-task_9" src="../../../img/task4/task4/task4_${taskCounter}_a.png">
              <hr class="hr-pd_20">
              Кратчайший путь: ${taskAnswer[1]} = ${taskAnswer[0]} км
              <hr class="hr-pd_20">
              Ответ: <b>${taskAnswer[0]}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 2:
          answerBlock =`
            <p class="p-num"><b>4.</b> № ${taskCounter} ${generateHard()}</p> 
            <p>${task1}</p>
            
            <hr class="hr-pd_20">
            ${ taskTableV.length === 4 ? 
            `
            <table class="table_4">
              <tbody>
                <tr><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableV[0]}</td><td>${taskTableV[1]}</td><td>${taskTableV[2]}</td><td>${taskTableV[3]}</td></tr>
                <tr><td>${taskTableV[0]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[1]}</td><td>${taskTableS[2]}</td><td>${taskTableS[3]}</td></tr>
                <tr><td>${taskTableV[1]}</td><td>${taskTableS[1]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[4]}</td><td>${taskTableS[5]}</td></tr>
                <tr><td>${taskTableV[2]}</td><td>${taskTableS[2]}</td><td>${taskTableS[4]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[6]}</td></tr>
                <tr><td>${taskTableV[3]}</td><td>${taskTableS[3]}</td><td>${taskTableS[5]}</td><td>${taskTableS[6]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td></tr> 
              </tbody>
            </table>
  
            `: taskTableV.length === 5 ? 
            `
            <table class="table_4">
              <tbody>
                <tr><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableV[0]}</td><td>${taskTableV[1]}</td><td>${taskTableV[2]}</td><td>${taskTableV[3]}</td><td>${taskTableV[4]}</td></tr>
                <tr><td>${taskTableV[0]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[1]}</td><td>${taskTableS[2]}</td><td>${taskTableS[3]}</td><td>${taskTableS[4]}</td></tr>
                <tr><td>${taskTableV[1]}</td><td>${taskTableS[1]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[5]}</td><td>${taskTableS[6]}</td><td>${taskTableS[7]}</td></tr>
                <tr><td>${taskTableV[2]}</td><td>${taskTableS[2]}</td><td>${taskTableS[5]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[8]}</td><td>${taskTableS[9]}</td></tr>
                <tr><td>${taskTableV[3]}</td><td>${taskTableS[3]}</td><td>${taskTableS[6]}</td><td>${taskTableS[8]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[10]}</td></tr>
                <tr><td>${taskTableV[4]}</td><td>${taskTableS[4]}</td><td>${taskTableS[7]}</td><td>${taskTableS[9]}</td><td>${taskTableS[10]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td></tr> 
              </tbody>
            </table>
  
            `: taskTableV.length === 6 ? 
            `
            <table class="table_4">
              <tbody>
                <tr><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableV[0]}</td><td>${taskTableV[1]}</td><td>${taskTableV[2]}</td><td>${taskTableV[3]}</td><td>${taskTableV[4]}</td><td>${taskTableV[5]}</td></tr>
                <tr><td>${taskTableV[0]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[1]}</td><td>${taskTableS[2]}</td><td>${taskTableS[3]}</td><td>${taskTableS[4]}</td><td>${taskTableS[5]}</td></tr>
                <tr><td>${taskTableV[1]}</td><td>${taskTableS[1]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[6]}</td><td>${taskTableS[7]}</td><td>${taskTableS[8]}</td><td>${taskTableS[9]}</td></tr>
                <tr><td>${taskTableV[2]}</td><td>${taskTableS[2]}</td><td>${taskTableS[6]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[10]}</td><td>${taskTableS[11]}</td><td>${taskTableS[12]}</td></tr>
                <tr><td>${taskTableV[3]}</td><td>${taskTableS[3]}</td><td>${taskTableS[7]}</td><td>${taskTableS[10]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[13]}</td><td>${taskTableS[14]}</td></tr>
                <tr><td>${taskTableV[4]}</td><td>${taskTableS[4]}</td><td>${taskTableS[8]}</td><td>${taskTableS[11]}</td><td>${taskTableS[13]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[15]}</td></tr>
                <tr><td>${taskTableV[5]}</td><td>${taskTableS[5]}</td><td>${taskTableS[9]}</td><td>${taskTableS[12]}</td><td>${taskTableS[14]}</td><td>${taskTableS[15]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td></tr>  
              </tbody>
            </table>
  
            `: ""}  
            <hr class="hr-pd_20">
            <p>${task2}</p>
            <hr class="hr-pd_20">`
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
                <hr class="hr-pd_10">
                <img class="img-task_9" src="../../../img/task4/task4/task4_${taskCounter}_a.png">
                <hr class="hr-pd_20">
                Кратчайший путь: ${taskAnswer[1]} = ${taskAnswer[0]} км
                <hr class="hr-pd_20">
                Ответ: <b>${taskAnswer[0]}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock                              
        case 3:
          answerBlock =`
            <p class="p-num"><b>4.</b> № ${taskCounter} ${generateHard()}</p> 
            <p>${task1}</p>
            
            <hr class="hr-pd_20">
            ${ taskTableV.length === 4 ? 
            `
            <table class="table_4">
              <tbody>
                <tr><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableV[0]}</td><td>${taskTableV[1]}</td><td>${taskTableV[2]}</td><td>${taskTableV[3]}</td></tr>
                <tr><td>${taskTableV[0]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[1]}</td><td>${taskTableS[2]}</td><td>${taskTableS[3]}</td></tr>
                <tr><td>${taskTableV[1]}</td><td>${taskTableS[1]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[4]}</td><td>${taskTableS[5]}</td></tr>
                <tr><td>${taskTableV[2]}</td><td>${taskTableS[2]}</td><td>${taskTableS[4]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[6]}</td></tr>
                <tr><td>${taskTableV[3]}</td><td>${taskTableS[3]}</td><td>${taskTableS[5]}</td><td>${taskTableS[6]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td></tr> 
              </tbody>
            </table>
  
            `: taskTableV.length === 5 ? 
            `
            <table class="table_4">
              <tbody>
                <tr><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableV[0]}</td><td>${taskTableV[1]}</td><td>${taskTableV[2]}</td><td>${taskTableV[3]}</td><td>${taskTableV[4]}</td></tr>
                <tr><td>${taskTableV[0]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[1]}</td><td>${taskTableS[2]}</td><td>${taskTableS[3]}</td><td>${taskTableS[4]}</td></tr>
                <tr><td>${taskTableV[1]}</td><td>${taskTableS[1]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[5]}</td><td>${taskTableS[6]}</td><td>${taskTableS[7]}</td></tr>
                <tr><td>${taskTableV[2]}</td><td>${taskTableS[2]}</td><td>${taskTableS[5]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[8]}</td><td>${taskTableS[9]}</td></tr>
                <tr><td>${taskTableV[3]}</td><td>${taskTableS[3]}</td><td>${taskTableS[6]}</td><td>${taskTableS[8]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[10]}</td></tr>
                <tr><td>${taskTableV[4]}</td><td>${taskTableS[4]}</td><td>${taskTableS[7]}</td><td>${taskTableS[9]}</td><td>${taskTableS[10]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td></tr> 
              </tbody>
            </table>
  
            `: taskTableV.length === 6 ? 
            `
            <table class="table_4">
              <tbody>
                <tr><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableV[0]}</td><td>${taskTableV[1]}</td><td>${taskTableV[2]}</td><td>${taskTableV[3]}</td><td>${taskTableV[4]}</td><td>${taskTableV[5]}</td></tr>
                <tr><td>${taskTableV[0]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[1]}</td><td>${taskTableS[2]}</td><td>${taskTableS[3]}</td><td>${taskTableS[4]}</td><td>${taskTableS[5]}</td></tr>
                <tr><td>${taskTableV[1]}</td><td>${taskTableS[1]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[6]}</td><td>${taskTableS[7]}</td><td>${taskTableS[8]}</td><td>${taskTableS[9]}</td></tr>
                <tr><td>${taskTableV[2]}</td><td>${taskTableS[2]}</td><td>${taskTableS[6]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[10]}</td><td>${taskTableS[11]}</td><td>${taskTableS[12]}</td></tr>
                <tr><td>${taskTableV[3]}</td><td>${taskTableS[3]}</td><td>${taskTableS[7]}</td><td>${taskTableS[10]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[13]}</td><td>${taskTableS[14]}</td></tr>
                <tr><td>${taskTableV[4]}</td><td>${taskTableS[4]}</td><td>${taskTableS[8]}</td><td>${taskTableS[11]}</td><td>${taskTableS[13]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td><td>${taskTableS[15]}</td></tr>
                <tr><td>${taskTableV[5]}</td><td>${taskTableS[5]}</td><td>${taskTableS[9]}</td><td>${taskTableS[12]}</td><td>${taskTableS[14]}</td><td>${taskTableS[15]}</td><td style="background-color: #ffbf80;">${taskTableS[0]}</td></tr>  
              </tbody>
            </table>
  
            `: ""}  
            <hr class="hr-pd_20">
            <p>${task2}</p>
            <hr class="hr-pd_20">`
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
                <hr class="hr-pd_10">
                <img class="img-task_9" src="../../../img/task4/task4/task4_${taskCounter}_a.png">
                <hr class="hr-pd_20">
                Кратчайший путь: ${taskAnswer[1]} = ${taskAnswer[0]} км
                <hr class="hr-pd_20">
                Ответ: <b>${taskAnswer[0]}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
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
      switch(typeTask){
        case 1:
          answerBlock =`
          <p class="p-num"><b>5.</b> № ${taskCounter} ${generateHard()}</p> 
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
              Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 2:
          answerBlock =`
            <p class="p-num"><b>5.</b> № ${taskCounter} ${generateHard()}</p> 
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
                Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter(); 
          if(tumbler === false){
            answerBlock += generateInput();
          }
          return answerBlock
        case 3:
          answerBlock =`
              <p class="p-num"><b>5.</b> № ${taskCounter} ${generateHard()}</p> 
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
                  Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
      } 
    }
    if (taskKey === 'six'){
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>6.</b> № ${taskCounter} ${generateHard()}</p> 
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
если ${task1[0]}
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
if ${task1[1]}:
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
    if ${task1[2]}
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
          <span class="span-centr">${task2}</span>
          <hr class="hr-pd_20">
          Сколько было запусков, при которых программа напечатала «${task1[3]}»?
          <hr class="hr-pd_20">
          `    
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 2:
          answerBlock += `
          <p class="p-num"><b>6.</b> № ${taskCounter} ${generateHard()}</p> 
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
если ${task1[0]}
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
if ${task1[1]}:
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
   if ${task1[2]}
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
          <span class="span-centr">${task2}</span>
          <hr class="hr-pd_20">
          ${task3}
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        }   
    } 
    if (taskKey === 'seven'){
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>7.</b> № ${taskCounter} ${generateHard()}</p> 
          <p>Доступ к файлу <b style="font-weight: 500;">${task1[0]}</b>, 
             находящемуся на сервере <b style="font-weight: 500;">${task1[1]}</b>, 
             осуществляется по протоколу <b style="font-weight: 500;">${task1[2]}</b>.
           Фрагменты адреса файла закодированы цифрами от 1 до 7. 
           Запишите последовательность этих цифр, кодирующую адрес указанного файла в сети Интернет.</p>
          <hr class="hr-pd_10">
           ${task2}
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
                      <hr class="hr-pd_10">
                      ${task1[2]} :// ${task1[1]} / ${task1[0]}
                      <hr class="hr-pd_10">
                      Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
      }
    }  
    if (taskKey === 'eight'){
      let k = task
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
      switch(typeTask){       
        case 1: 
          answerBlock += `<p class="p-num"><b>8.</b> № ${taskCounter} ${generateHard()} ${generateAuthor()}</p> 
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
                <td>${task1[0]}</td>
                <td>${task2[0]}</td>
              </tr>
              <tr>
                <td>${task1[1]}</td>
                <td>${task2[1]}</td>
              </tr>
              <tr>
                <td>${task1[2]}</td>
                <td>${task2[2]}</td>
              </tr>
            </tbody>
          </table>
          <hr class="hr-pd_20">
          <p>Какое количество страниц (в тысячах) будет найдено по запросу <b><em>${task1[3]}</em></b>?</p>
          <hr class="hr-pd_10">
          <p>Считается, что все запросы выполнялись практически одновременно, так что хранящаяся на поисковом сервере информация о наборе страниц, содержащих все искомые слова, не изменялась за время выполнения запросов.</p>
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();        
          answerBlock += `
            N<sub>A&B</sub> + N<sub>A|B</sub> = N<sub>A</sub> + N<sub>B</sub><hr class="hr-pd_10">
            ${task2[3] === 1 ? `
            ${
              k === "&" ? `
              N<sub>A&B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A|B</sub><br>
              N<sub>A&B</sub> = ${task2[1]} + ${task2[2]} - ${task2[0]}<br>
              N<sub>A&B</sub> = ${task2[1] + task2[2] - task2[0]}`
              : 
              k === "|" ? `
              N<sub>A|B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A&B</sub><br>
              N<sub>A|B</sub> = ${task2[1]} + ${task2[2]} - ${task2[0]}<br>
              N<sub>A|B</sub> = ${task2[1] + task2[2] - task2[0]}`
              : 
              k === "&&" ? `
              N<sub>A&B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A|B</sub><br>
              N<sub>A&B</sub> = ${task2[1]} + ${task2[2]} - ${task2[0]}<br>
              N<sub>A&B</sub> = ${task2[1] + task2[2] - task2[0]}`
              :
              k === "||" ? `
              N<sub>A|B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A&B</sub><br>
              N<sub>A|B</sub> = ${task2[1]} + ${task2[2]} - ${task2[0]}<br>
              N<sub>A|B</sub> = ${task2[1] + task2[2] - task2[0]}`
              : `
              N<sub>A</sub> = N<sub>A&B</sub> + N<sub>A|B</sub> - N<sub>B</sub><br>
              N<sub>A</sub> = ${task2[1]} + ${task2[2]} - ${task2[0]}<br>
              N<sub>A</sub> = ${task2[1] + task2[2] - task2[0]}`}` 
              : 
            task2[3] === 2 ? `
            ${
              k === "&" ? `
              N<sub>A&B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A|B</sub><br>
              N<sub>A&B</sub> = ${task2[0]} + ${task2[2]} - ${task2[1]}<br>
              N<sub>A&B</sub> = ${task2[0] + task2[2] - task2[1]}`
              : 
              k === "|" ? `
              N<sub>A|B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A&B</sub><br>
              N<sub>A|B</sub> = ${task2[0]} + ${task2[2]} - ${task2[1]}<br>
              N<sub>A|B</sub> = ${task2[0] + task2[2] - task2[1]}`
              : 
              k === "&&" ? `
              N<sub>A&B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A|B</sub><br>
              N<sub>A&B</sub> = ${task2[0]} + ${task2[2]} - ${task2[1]}<br>
              N<sub>A&B</sub> = ${task2[0] + task2[2] - task2[1]}`
              :
              k === "||" ? `
              N<sub>A|B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A&B</sub><br>
              N<sub>A|B</sub> = ${task2[0]} + ${task2[2]} - ${task2[1]}<br>
              N<sub>A|B</sub> = ${task2[0] + task2[2] - task2[1]}`
              : `
              N<sub>A</sub> = N<sub>A&B</sub> + N<sub>A|B</sub> - N<sub>B</sub><br>
              N<sub>A</sub> = ${task2[0]} + ${task2[2]} - ${task2[1]}<br>
              N<sub>A</sub> = ${task2[0] + task2[2] - task2[1]}`}` 
              : 
            task2[3] === 3 ? `
            ${
              k === "&" ? `
              N<sub>A&B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A|B</sub><br>
              N<sub>A&B</sub> = ${task2[0]} + ${task2[1]} - ${task2[2]}<br>
              N<sub>A&B</sub> = ${task2[0] + task2[1] - task2[2]}`
              : 
              k === "|" ? `
              N<sub>A|B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A&B</sub><br>
              N<sub>A|B</sub> = ${task2[0]} + ${task2[1]} - ${task2[2]}<br>
              N<sub>A|B</sub> = ${task2[0] + task2[1] - task2[2]}`
              :
              k === "&&" ? `
              N<sub>A&B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A|B</sub><br>
              N<sub>A&B</sub> = ${task2[0]} + ${task2[1]} - ${task2[2]}<br>
              N<sub>A&B</sub> = ${task2[0] + task2[1] - task2[2]}`
              :
              k === "||" ? `
              N<sub>A|B</sub> = N<sub>A</sub> + N<sub>B</sub> - N<sub>A&B</sub><br>
              N<sub>A|B</sub> = ${task2[0]} + ${task2[1]} - ${task2[2]}<br>
              N<sub>A|B</sub> = ${task2[0] + task2[1] - task2[2]}`
              :
               `
              N<sub>A</sub> = N<sub>A&B</sub> + N<sub>A|B</sub> - N<sub>B</sub><br>
              N<sub>A</sub> = ${task2[0]} + ${task2[1]} - ${task2[2]}<br>
              N<sub>A</sub> = ${task2[0] + task2[1] - task2[2]}
              `}` : ``}
              <hr class="hr-pd_10">
              Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 2:
          answerBlock += `<p class="p-num"><b>8.</b> № ${taskCounter} ${generateHard()} ${generateAuthor()}</p> 
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
                <td >${task1[0]}</td>
                <td>${task2[0]}</td>
              </tr>
              <tr>
                <td>${task1[1]}</td>
                <td>${task2[1]}</td>
              </tr>
              <tr>
                <td>${task1[2]}</td>
                <td>${task2[2]}</td>
              </tr>
                  <tr>
                <td>${task1[3]}</td>
                <td>${task2[3]}</td>
              </tr>
                  <tr>
                <td>${task1[4]}</td>
                <td>${task2[4]}</td>
              </tr>
                  <tr>
                <td>${task1[5]}</td>
                <td>${task2[5]}</td>
              </tr>
            </tbody>
          </table>
          <hr class="hr-pd_20">
          <p>Какое количество страниц (в тысячах) будет найдено по запросу <b><em>${task1[6]}</em></b>?</p>
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
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 3:
          answerBlock += `<p class="p-num"><b>8.</b> № ${taskCounter} ${generateHard()} ${generateAuthor()}</p> 
          <p>Некоторый сегмент сети Интернет состоит из 1000 сайтов. Поисковый сервер в автоматическом режиме составил таблицу ключевых слов для сайтов этого сегмента. Вот её фрагмент.</p>
          <hr class="hr-pd_20">
          <table class="table_6">
            <tbody>
              <tr>
                <td style="text-align: center;  vertical-align: middle; background-color: #ffbf80;">Ключевое слово</td>
                <td style="text-align: center; background-color: #ffbf80;">Количество сайтов, для которых <br>данное слово является ключевым</td>
              </tr>
              <tr>
                <td >${task1[0]}</td>
                <td>${task2[0]}</td>
              </tr>
              <tr>
                <td>${task1[1]}</td>
                <td>${task2[1]}</td>
              </tr>
              <tr>
                <td>${task1[2]}</td>
                <td>${task2[2]}</td>
              </tr>
 
            </tbody>
          </table>
          <hr class="hr-pd_20">
          <p>Сколько сайтов будет найдено по запросу <b><em>${task1[3]}</em></b>?  
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
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
      }
    } 
    if (taskKey === 'nine'){
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>9.</b> № ${taskCounter} ${generateHard()}</p> 
          <p>На рисунке  — схема дорог, связывающих города ${task2[0]}. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. 
          Сколько существует различных путей ${task2[1]}<b>${task2[2]}</b>?</p>
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
                      Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 2:
          answerBlock += `<p class="p-num"><b>9.</b> № ${taskCounter} ${generateHard()}</p> 
          <p>На рисунке  — схема дорог, связывающих города ${task2[0]}. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. 
          Сколько существует различных путей ${task2[1]}<b>${task2[2]}</b>?</p>
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
                      Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 3:
          answerBlock += `<p class="p-num"><b>9.</b> № ${taskCounter} ${generateHard()}</p> 
          <p>На рисунке  — схема дорог, связывающих города ${task2[0]}. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. 
          Сколько существует различных путей ${task2[1]}<b>${task2[2]}</b>?</p>
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
                      Ответ: <b>${taskAnswer}</b>`;
        answerBlock += generateFooter();
        if(tumbler === false){
          answerBlock += generateInput();
        } 
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
            <p class="p-num"><b>10.</b> № ${taskCounter} ${generateHard()}</p>
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
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 2:
          answerBlock =`
            <p class="p-num"><b>10.</b> № ${taskCounter} ${generateHard()}</p>
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
          if(tumbler === false){
            answerBlock += generateInput();
          } 
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
            <p class="p-num"><b>10.</b> № ${taskCounter} ${generateHard()}</p>
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
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
      } 
    }  
    if (taskKey === 'eleven'){
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>11.</b> № ${taskCounter} ${generateHard()}</p> 
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
          if(tumbler === false){
            answerBlock += generateInputD();
          } 
          return answerBlock
         }
    }
    if (taskKey === 'twelve'){
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>12.</b> № ${taskCounter} ${generateHard()}</p> 
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
          if(tumbler === false){
            answerBlock += generateInputD12();
          } 
          return answerBlock
         }
    }
    if (taskKey === 'thirteen'){
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>13.1</b> № ${taskCounter} ${generateHard()}</p> 
          Используя информацию и иллюстративный материал, содержащийся в каталоге <b>${task1[0]}</b>, создайте презентацию из трёх слайдов на тему <b>«${task1[1]}»</b>.<br>
          В презентации должны содержаться краткие иллюстрированные сведения
          о внешнем виде, ареале обитания, образе жизни и рационе тигров. Все слайды должны быть выполнены в едином стиле, каждый слайд должен быть озаглавлен.<br>
          Презентацию сохраните в файле, имя которого Вам сообщат организаторы экзамена. Файл ответа необходимо сохранить в одном из следующих форматов: *.odp, *.ppt, *.pptx.
          <hr class="hr-pd_20">
          <b>Требования к оформлению работы</b><hr class="hr-pd_10">
          1. Ровно три слайда без анимации. Параметры страницы (слайда): экран (16:9), ориентация альбомная.<hr class="hr-pd_10">
          2. Содержание, структура, форматирование шрифта и размещение изображений на слайдах:<hr class="hr-pd_10">
          ● первый слайд – титульный слайд с названием презентации, в подзаголовке титульного слайда в качестве информации об авторе презентации указывается идентификационный номер участника экзамена;<hr class="hr-pd_10">
          ● второй слайд – основная информация в соответствии с заданием, размещённая по образцу на рисунке макета слайда 2:<hr class="hr-pd_10">
          &emsp;• заголовок слайда;<hr class="hr-pd_10">
          &emsp;• два изображения;<hr class="hr-pd_10">
          &emsp;• два блока текста;<hr class="hr-pd_10">
          ● третий слайд – дополнительная информация по теме презентации, размещённая по образцу на рисунке макета слайда 3:<hr class="hr-pd_10">
          &emsp;• заголовок слайда;<hr class="hr-pd_10">
          &emsp;• три изображения;<hr class="hr-pd_10">
          &emsp;• три блока текста.<hr class="hr-pd_10">
          На макетах слайдов существенным является наличие всех объектов, включая заголовки, их взаимное расположение. 
          Выравнивание объектов, ориентация изображений выполняются произвольно в соответствии с замыслом автора работы и служат наилучшему раскрытию темы.<hr class="hr-pd_20">
          <table class="table_2_3">
            <tbody>
              <tr >
                <td><img class="img-13" src="../../../img/task13/task13_1.png"></td> 
                <td>Макет 1 слайда<br> Тема презентации</td>
              </tr>
              <tr>
                <td><img class="img-13" src="../../../img/task13/task13_2_${task2[0]}.png"></td> 
                <td>Макет 2 слайда<br> Основная информация<br> по теме презентации</td>
              </tr>
              <tr>
                <td><img class="img-13" src="../../../img/task13/task13_3_${task2[1]}.png"></td> 
                <td>Макет 3 слайда<br> Дополнительная информация<br> по теме презентации</td>
              </tr>
          </table>
          <hr class="hr-pd_20">
          В презентации должен использоваться единый тип шрифта (рубленый, с засечками или моноширинный).<hr class="hr-pd_10">
          Размер шрифта для названия презентации на титульном слайде –<hr class="hr-pd_10">
          40 пунктов, для подзаголовка на титульном слайде и заголовков слайдов –<hr class="hr-pd_10">
          24 пункта, для подзаголовков на втором и третьем слайдах и для основного текста – 20 пунктов.<hr class="hr-pd_10">
          Текст не должен перекрывать основные изображения и сливаться с фоном.
          <hr class="hr-pd_20">
          <div class="download">  
            <a href="../../../src/inf_file/task13/task_${taskCounter}.rar"><img src="../../../img/download.svg" alt="download" >Скачать файл</a>
          </div>
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
  
          return answerBlock
         }
    }
    if (taskKey === 'thirteentwo'){
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>13.2</b> № ${taskCounter} ${generateHard()}</p> 
          Создайте в текстовом редакторе документ и напишите в нём следующий текст, точно воспроизведя всё оформление текста, имеющееся в образце.<hr class="hr-pd_10">
          Данный текст должен быть набран шрифтом размером 14 пунктов обычного начертания. Отступ первой строки абзацев основного текста – 1 см.<hr class="hr-pd_10">
          Расстояние между строками текста не менее одинарного, но не более полуторного междустрочного интервала.<hr class="hr-pd_10">
          Основной текст выровнен по ширине;<br>
          ${task1}<br>
          ${task2}<br>
          ${task3}<hr class="hr-pd_10">
          В основном тексте и таблице есть слова, выделенные полужирным шрифтом, курсивом или подчёркиванием. 
          Таблица выровнена на странице по центру горизонтали. Ширина таблицы меньше ширины основного текста.<hr class="hr-pd_10">

          При этом допустимо, чтобы ширина Вашего текста отличалась от ширины текста в примере, поскольку ширина текста зависит от размеров страницы и полей. 
          В этом случае разбиение текста на строки должно соответствовать стандартной ширине абзаца.<br>
          Интервал между заголовком текста и текстом, между абзацами текста, между текстом и таблицей не менее 12 пунктов, но не более 24 пунктов.<hr class="hr-pd_10">
          Текст сохраните в файле, имя которого Вам сообщат организаторы.<br>
          Файл ответа необходимо сохранить в одном из следующих форматов: *.odt, или *.doc, или *.docx.<hr class="hr-pd_10">
          <hr>
          <img class="img-13_2" src="../../../img/task13.2/task13.2_${taskCounter}.png"
          `
          answerBlock += generateDate();
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
          return answerBlock
         }
    }
    if (taskKey === 'fourteen'){
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>14</b>. № ${taskCounter} ${generateHard()}</p> 
          ${task1} Ниже приведены первые пять строк таблицы.
          <img class="img-13_2" src="../../../img/task14/task14_${taskCounter}.png">
          ${task2}<br>
          ${task3}<br>          
          Откройте файл с данной электронной таблицей (расположение файла Вам сообщат организаторы экзамена). 
          На основании данных, содержащихся в этой таблице, выполните задания.<hr class="hr-pd_10">          
          ${task4}<hr class="hr-pd_10"> 
          ${task5}<hr class="hr-pd_10">          
          ${task6}<hr class="hr-pd_10"> 

          Полученную таблицу необходимо сохранить под именем, указанным организаторами экзамена.<hr class="hr-pd_10">
          <div class="download">  
            <a href="../../../src/inf_file/task14/task14_${taskCounter}.xlsx"><img src="../../../img/download.svg" alt="download" >Скачать файл</a>
          </div>
          `
          answerBlock += generateDate();
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
  
          return answerBlock
         }
    }
    if (taskKey === 'fifteen'){
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>15</b>. № ${taskCounter} ${generateHard()}</p> 
          Дайте развернутый ответ.
          <hr class="hr-pd_10"> 
          <details><summary >Развернуть описание</summary>
          <hr class="hr-pd_10">
            Исполнитель Робот умеет перемещаться по лабиринту, начерченному на плоскости, разбитой на клетки. 
            Между соседними (по сторонам) клетками может стоять стена, через которую Робот пройти не может.<br>
            У Робота есть девять команд. Четыре команды – это команды-приказы:<br>
            &emsp;<b>вверх   вниз   влево   вправо</b><br>
            При выполнении любой из этих команд Робот перемещается на одну клетку соответственно: вверх ↑, вниз ↓, влево ←, вправо →. 
            Если Робот получит команду передвижения сквозь стену, то он разрушится.<br>
            Также у Робота есть команда <b>закрасить</b>. При её выполнении закрашивается клетка, в которой Робот находится в настоящий момент.
            Ещё четыре команды – это команды проверки условий. Эти команды проверяют, свободен ли путь для Робота в каждом из четырёх возможных направлений:<br>
            &emsp;<b>сверху свободно   снизу свободно   слева свободно   справа свободно</b><br>

            Эти команды можно использовать вместе с условием «eсли», имеющим следующий вид:<br>
            если условие то<br>
            последовательность команд<br>
            все<br>
            Здесь условие – одна из команд проверки условия.<br>
            Последовательность команд – это одна или несколько любых команд-приказов.<br>
            Например, для передвижения на одну клетку вправо, если справа нет стенки, и закрашивания клетки можно использовать такой алгоритм:<br>
            если справа свободно то<br>
            вправо<br>
            закрасить<br>
            все<br>
            В одном условии можно использовать несколько команд проверки условий, применяя логические связки и, или, не, например:<br>
            если (справа свободно) и (не снизу свободно) то<br>
            вправо<br>
            все<br>
            Для повторения последовательности команд можно использовать цикл «пока», имеющий следующий вид:<br>
            нц пока условие<br>
            последовательность команд<br>
            кц<br>
            Например, для движения вправо, пока это возможно, можно использовать следующий алгоритм:<br>
            нц пока справа свободно<br>
            вправо<br>
            кц<br>
          </details>
          <hr class="hr-pd_20">
          `
          answerBlock += `<b><em>Выполните задание.</em></b><hr class="hr-pd_10">
          ${task1}</b><br>
          На рисунке указан один из возможных способов расположения стен и Робота (Робот обозначен буквой «Р»).<hr class="hr-pd_10">
          <img class="img-14" src="../../../img/task15/task15_${taskCounter}_1.png"></b><hr class="hr-pd_10">
          ${task2}</b><hr class="hr-pd_10">
          <img class="img-14" src="../../../img/task15/task15_${taskCounter}_2.png"></b><hr class="hr-pd_10">
          ${task3}</b><hr class="hr-pd_10">

          Алгоритм может быть выполнен в среде формального исполнителя или записан в текстовом редакторе. 
          Сохраните алгоритм в формате программы Кумир или в текстовом файле. Название файла и каталог для сохранения Вам сообщат организаторы экзамена.
          `
          answerBlock += generateDate();
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
  
          return answerBlock
         }
    }
    if (taskKey === 'sixteen'){
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>16</b>. № ${taskCounter} ${generateHard()}</p> 
          Дайте развернутый ответ.<hr class="hr-pd_10">
          ${task1}<hr class="hr-pd_10">
          ${task2}<hr class="hr-pd_10">
          ${task3}<hr class="hr-pd_10">
          <em>Пример работы программы</em><hr class="hr-pd_10">
          <table class="table_16">
            <tr>
              <td>Входные данные</td>
              <td>Выходные данные</td>
            </tr>
            <tr>
              <td>${task4}</td>
              <td>${task5}</td>
            </tr>
          </table>
          `
          answerBlock += generateDate();
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
  
          return answerBlock
         }
    }
   
}
