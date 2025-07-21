const tasks = {
  one: '../../../src/oge_inf/taskOne.json',
  two: '../../../src/oge_inf/taskTwo.json',
  three: '../../../src/oge_inf/taskThree.json',
  four:  '../../../src/oge_inf/taskFour.json',
  five: '../../../src/oge_inf/taskFive.json',
  six: '../../../src/oge_inf/taskSix.json',
  seven: '../../../src/oge_inf/taskSeven.json',
  eight: '../../../src/oge_inf/taskEight.json',
  nine: '../../../src/oge_inf/taskNine.json',
  ten: '../../../src/oge_inf/taskTen.json',
  eleven: '../../../src/oge_inf/taskEleven.json',
  twelve: '../../../src/oge_inf/taskTwelve.json',
  thirteen: '../../../src/oge_inf/taskThirteen.json',
  thirteentwo: '../../../src/oge_inf/taskThirteenTwo.json',
  fourteen: '../../../src/oge_inf/taskFourteen.json',
  fifteen: '../../../src/oge_inf/taskFifteen.json',
  sixteen: '../../../src/oge_inf/taskSixteen.json'
};
 
// const tasks = {
//   one: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskOne.json',
//   two: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTwo.json',
//   three: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskThree.json',
//   four: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskFour.json',
//   five: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskFive.json',
//   six: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskSix.json',
//   seven: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskSeven.json',
//   eight: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskEight.json',
//   nine: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskNine.json',
//   ten: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTen.json',
//   eleven: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskEleven.json',
//   twelve: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTwelve.json',
//   thirteen: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskThirteen.json',
//   thirteentwo: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskThirteenTwo.json',
//   fourteen: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskFourteen.json',
//   fifteen: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskFifteen.json',
//   sixteen: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskSixteen.json'
// };

export {tasks};

export default function generateTaskHTML(taskKey, item, tumbler = true) {
    const { date, taskNum, taskAn, task, task1, task2, task3, task4, task5, task6, taskAuthor, taskTable, taskAnswer, typeTask, taskCounter, taskHard, taskTableV, taskTableS, taskKec} = item;
    const generateHard = () => `${taskHard === 0 ? "" : taskHard === 1 ? "<em>(Базовый)</em>": taskHard === 2 ? "<em>(Средний)</em>": taskHard === 3 ? "<em>(Сложный)</em>":""}` 
    const generateHeader = () => `<details><summary class="p-num resh print">Решение</summary><hr class="hr-pd_10">`;
    const generateFooter = () => `</details><hr class="hr-pd_20"><hr class="hr-between"><hr class="hr-pd_20">`;

    // const generateDate = () => `${ tumbler ? !taskNum ? `<hr class="hr-pd_20">`: `<hr class="hr-pd_10"><p class="p-num" style="text-align: right;">Номер: ${taskNum}</p><hr class="hr-pd_10">` : `<hr class="hr-pd_20">`} `;
    //const generateDate = () => `${ !taskNum ? `<hr class="hr-pd_20">`: `<hr class="hr-pd_10"><p class="p-num print" style="text-align: right;">Номер: ${taskNum}</p><hr class="hr-pd_10">`} `;
    
    
    const generateDate = () => `${ !taskNum ? `<hr class="hr-pd_20">`: `<hr class="hr-pd_10">
      <div class="text-inform"><div class="inform-block"></div>
        ${ !taskKec ? ``:
          taskKec[2] === 1 ? 
          `<img id="text-inform-button" src="../../../img/inform2.svg">`:
          taskKec[2] === 2 ? 
          `<img id="text-inform-button" src="../../../img/inform6.svg">`:
          `<img id="text-inform-button" src="../../../img/inform5.svg">` }
        <p class="p-num print" style="text-align: right;"> Номер: ${taskNum}</p>
        
      </div>
      <hr class="hr-pd_10">`} `;
   
    const generateAuthor = () => `${!taskAuthor ? "": `<em>${taskAuthor}</em>`}`
    const generateInput = () => ` <section class="answer-block"><p></p><input id="input_answer" class="input_answer" placeholder="Введите ответ"/></section>`;
    const generateInputD = () => `<section class="answer-block"><div class="download"><a href="../../../src/inf_file/zadanie_11.rar"><img src="../../../img/download.svg" alt="download">Скачать файлы</a></div><input id="input_answer" class="input_answer" placeholder="Введите ответ"/></section>`;
    const generateInputD12 = () => `<section class="answer-block"><div class="download"><a href="../../../src/inf_file/zadanie_12.rar"><img src="../../../img/download.svg" alt="download">Скачать файлы</a></div><input id="input_answer" class="input_answer" placeholder="Введите ответ"/></section>`;

    let answerBlock = "";

    if (taskKey === 'one'){
      let Nomer = 1
      switch(typeTask){
         case 1:         
            answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""}  ${generateHard()}</p><hr class="hr-pd_10">
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
                ${taskAn[3] === "м" ? `
                1) Один символ кодируется ${taskAn[1]} бит = ${taskAn[1]/8 < 2 ?  `${taskAn[1]/8} байт. ` : `${taskAn[1]/8} байта.`}<hr class="hr-pd_10">

                2) Вычеркнутое (Удалённое) слово занимает ${taskAn[2]} байта.<hr class="hr-pd_10">

                3) Количество символов в слове ${taskAn[2]}/${taskAn[1]/8} = ${taskAn[2]/(taskAn[1]/8)} символов.<hr class="hr-pd_10">
                
                4) C учетом пробела и запятой: ${(taskAn[2]/(taskAn[1]/8))} – 2 = ${(taskAn[2]/(taskAn[1]/8))-2} символа.

                <hr class="hr-pd_20">
                ${taskAn[4] === "к" ?  
                `<p>Слово из ${(taskAn[2]/(taskAn[1]/8))-4} букв (без кавычек) – ${taskAn[0]}.</p>`: 
                taskAn[4] === "и"  ? `<p>Слово из ${(taskAn[2]/(taskAn[1]/8))-2} букв (без имени) – ${taskAn[0]}.</p>`:
                taskAn[4] === "д"  ? `<p>Слово из ${(taskAn[2]/(taskAn[1]/8))-3} букв (без дефиса) – ${taskAn[0]}.</p>`:
                taskAn[4] === "п"  ? `<p>Слово из ${(taskAn[2]/(taskAn[1]/8))-2} букв (приставка) – ${taskAn[0]}.</p>`:
                
                `<p>Слово из ${(taskAn[2]/(taskAn[1]/8))-2} букв – ${taskAnswer}.</p>`}
                <hr class="hr-pd_20">
                Ответ: <b>${taskAnswer}</b>
                ` :

                taskAn[3] === "мм" ? `
                1) Один символ кодируется ${taskAn[1]} байтами. <hr class="hr-pd_10">

                2) Вычеркнутое (Удалённое) слово занимает ${taskAn[2]} бит = ${taskAn[2]/8} байт.<hr class="hr-pd_10">

                3) Количество символов в слове ${taskAn[2]/8}/${taskAn[1]} = ${taskAn[2]/8/taskAn[1]} символов. <hr class="hr-pd_10">

                4) C учетом пробела и запятой: ${taskAn[2]/8/taskAn[1]} – 2 = ${(taskAn[2]/8/taskAn[1])-2} символа.

                <hr class="hr-pd_20">
                ${taskAn[4] === "к" ? 
                `<p>Слово из ${(taskAn[2]/8/taskAn[1])-4} букв (без кавычек)– ${taskAn[0]}.</p>`: 
                
                `<p>Слово из ${(taskAn[2]/8/taskAn[1])-2} букв – ${taskAnswer}.</p>`}
                
                <hr class="hr-pd_20">
                Ответ: <b>${taskAnswer}</b>
                
                `: `
                1) Один символ кодируется ${taskAn[1]} бит = ${taskAn[1]/8 < 2 ?  `${taskAn[1]/8} байт. ` : `${taskAn[1]/8} байта.`}<hr class="hr-pd_10">

                2) Добавленное слово занимает ${taskAn[2]} байта.<hr class="hr-pd_10">

                3) Количество символов в слове ${taskAn[2]}/${taskAn[1]/8} = ${taskAn[2]/(taskAn[1]/8)} символов.<hr class="hr-pd_10">
                
                4) C учетом пробела и запятой: ${(taskAn[2]/(taskAn[1]/8))} – 2 = ${(taskAn[2]/(taskAn[1]/8))-2} символа.

                <hr class="hr-pd_20">
                ${taskAn[4] === "к" ? 
                `<p>Слово из ${(taskAn[2]/(taskAn[1]/8))-4} букв (без кавычек) – ${taskAn[0]}.</p>`: 
                `<p>Слово из ${(taskAn[2]/(taskAn[1]/8))-2} букв – ${taskAnswer}.</p>`}
                <hr class="hr-pd_20">
                Ответ: <b>${taskAnswer}</b>
                
                `} `;
            answerBlock += generateFooter(); 
            if(tumbler === false){
              answerBlock += generateInput();
            }
            return answerBlock
         case 2:
            answerBlock += `
                <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p><hr class="hr-pd_10">

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
                  <p>1) Один символ кодируется ${taskAn[1]} бит = ${taskAn[1]/8 < 2 ?  `${taskAn[1]/8} байт ` : `${taskAn[1]/8} байта`}</p> 
                  <hr class="hr-pd_10">
                  <p>2) ${taskAn[3] == "м" ? 
                  `Вычеркнутое слово занимает ${taskAn[2]} байта</p> 
                  <hr class="hr-pd_10"><p>3) Количество символов в слове ${taskAn[2]}/${taskAn[1]/8} = ${taskAn[2]/(taskAn[1]/8)} символов` : 
                  `Добавленное слово занимает ${taskAn[2]} байта</p>
                  <hr class="hr-pd_10"><p>3) Количество символов в слове ${taskAn[2]}/${taskAn[1]/8} = ${taskAn[2]/(taskAn[1]/8)} символов`} 
                  </p> 
                  <hr class="hr-pd_10">
                  <p>4) C учетом пробела: ${(taskAn[2]/(taskAn[1]/8))} – 1 = ${(taskAn[2]/(taskAn[1]/8))-1} символа</p>
                  <hr class="hr-pd_20">
                  <p>Слово из ${(taskAn[2]/(taskAn[1]/8))-1} букв – ${taskAnswer}.</p>
                  <hr class="hr-pd_20">
                  Ответ: <b>${taskAnswer}</b>`; 
            answerBlock += generateFooter(); 
            if(tumbler === false){
              answerBlock += generateInput();
            }
            return answerBlock
      }
    }
    if (taskKey === 'two'){
      let Nomer = 2
      switch(typeTask){
        case 1:
          answerBlock =`
            <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p><hr class="hr-pd_10">
            <p>${task1}</p>
            
            ${taskAn[2] === 1 ? `
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
           <p>${taskAn[1]}&emsp;---&emsp; ${taskAn[3]}</p> 
           <hr class="hr-pd_20">
           <p><b>Ответ:</b> ${taskAnswer}</p>
           <hr class="hr-pd_10">`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 2:
          answerBlock =`
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p><hr class="hr-pd_10">
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
            <p>${taskAn[1]} – <b>${taskAnswer}</b></p>
            <hr class="hr-pd_20">
            <p><b>Ответ:</b> ${taskAnswer}</p>
            <hr class="hr-pd_10">`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 3:
          answerBlock =`
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p><hr class="hr-pd_10">
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
            <p>${taskAn[1]} – <b>${taskAnswer}</b></p>
            ${task5 === "" ? 
              `
              <hr class="hr-pd_20">` : 
              `
              <hr class="hr-pd_20">
              <p>${task5}</p> 
              <hr class="hr-pd_20">
              `
            }        
            <p><b>Ответ:</b> ${taskAnswer}</p>
            <hr class="hr-pd_10">`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
  
      }
    }
    if (taskKey === 'three'){
      let Nomer = 3
      switch(typeTask){
        case 1:
          answerBlock =`
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
      let Nomer = 4
      switch (typeTask) {

        case 1:
          answerBlock =`
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
              Кратчайший путь: ${taskAn[1]} = ${taskAn[0]} км
              <hr class="hr-pd_20">
              Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 2:
          answerBlock =`
            <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
                Кратчайший путь: ${taskAn[1]} = ${taskAn[0]} км
                <hr class="hr-pd_20">
                Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock                              
        case 3:
          answerBlock =`
            <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
                Кратчайший путь: ${taskAn[1]} = ${taskAn[0]} км
                <hr class="hr-pd_20">
                Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock  
        }    
    }
    if (taskKey === 'five'){
      let Nomer = 5
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
         
        //  else if (task5[2] === 4 && resCount === 4){
               
        //   }

         // delenie
         if(taskAn[4] === "/" && taskAn[5] !== "p" && taskAn[5] !== "**"){
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
              else if (task5[2] === 4 && resCount === 4){
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
              else if (task5[2] === 4 && resCount === 4){
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
              else if (task5[2] === 4 && resCount === 4){
                res1 += `2. <b>вычти ${vch}</b> из числа ${item_el} = <span style="background-color:rgb(252, 210, 94);">${item_el-vch}</span><br>`
                item_el -= vch               
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
           let uch = taskAn[2]
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
              else if(x === '1' && z === "/"){
                if (resCount === 5){
                  res1 += `1. <b>раздели</b> число ${item_el} <b>на ${uch}</b> = <span style="background-color: rgb(252, 210, 94);">${item_el/uch}</span><br>`
                  item_el /= uch
                }
                else if (task5[2] === 4 && resCount === 4){
                  res1 += `1. <b>раздели</b> число ${item_el} <b>на ${uch}</b> = <span style="background-color: rgb(252, 210, 94);">${item_el/uch}</span><br>`
                  item_el /= uch
                }
                else{
                  res1 += `1. <b>раздели</b> число ${item_el} <b>на ${uch}</b> = ${item_el/uch}<br>`
                  item_el /= uch
                }
              }
              else{                      
                if (resCount === 5){
                  res1 += `2. <b>возведи в квадрат</b> число ${item_el} = <span style="background-color: rgb(252, 210, 94);">${item_el*item_el}</span><br>`
                  item_el = item_el * item_el;
                }
                else if (task5[2] === 4 && resCount === 4){
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
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          <p>${task1}</p>
          <hr class="hr-pd_10">
          <p><b style="font-weight: 500;">${task2[0]}<br>${task2[1]}</b></p>
          <hr class="hr-pd_10">
          <p>${task3}</p>
          <p>Составьте алгоритм получения <b style="font-weight: 500;">${task4}</b>, ${task5[2] === 4 ? `<b style="font-weight: 500;">содержащий не более 4 команд</b>`: `<b style="font-weight: 500;">содержащий не более 5 команд</b>`}. В ответе запишите только номера команд.</p>
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
            <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
            <p>${task1}</p>
            <hr class="hr-pd_10">
            <p><b style="font-weight: 500;">${task2[0]}<br>${task2[1]}</b></p>
            <hr class="hr-pd_10">
            <p>${task3}</p>
            <p>Составьте алгоритм получения <b style="font-weight: 500;">${task4}</b>, ${task5[2] === 4 ? `<b style="font-weight: 500;">содержащий не более 4 команд</b>`: `<b style="font-weight: 500;">содержащий не более 5 команд</b>`}. В ответе запишите только номера команд.</p>
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
              <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
              <p>${task1}</p>
              <hr class="hr-pd_10">
              <p><b style="font-weight: 500;">${task2[0]}<br>${task2[1]}</b></p>
              <hr class="hr-pd_10">
              <p>${task3}</p>
              <p>Составьте алгоритм получения <b style="font-weight: 500;">${task4}</b>, ${task5[2] === 4 ? `<b style="font-weight: 500;">содержащий не более 4 команд</b>`: `<b style="font-weight: 500;">содержащий не более 5 команд</b>`}. В ответе запишите только номера команд.</p>
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
      let Nomer = 6
      switch(typeTask){
        
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
      let Nomer = 7
      switch(typeTask){    
        case 1:
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
      let Nomer = 8
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
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()} </p> <hr class="hr-pd_10">
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
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()} </p> <hr class="hr-pd_10">
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
      let Nomer = 9
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          <p>На рисунке  — схема дорог,
          ${task2[3] === 'п' ? "связывающих пункты": 
            task2[3] === 'н' ? "связывающих населённые пункты" : "связывающих города"} ${task2[0]}. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. 
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
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
      let Nomer = 10
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
            <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p><hr class="hr-pd_10">
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
            <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p><hr class="hr-pd_10">
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
            <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p><hr class="hr-pd_10">
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
        case 4:
          answerBlock =`
            <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p><hr class="hr-pd_10">
            <p>Определите <b>${task}</b> среди чисел, записанных в двоичной, восьмеричной и шестнадцатеричной системах счисления:</p>
            <hr class="hr-pd_10">
            <span class="span-centr">${taskAn[0]}<sub>2</sub> , ${taskAn[1]}<sub>8</sub> , ${taskAn[2]}<sub>16</sub></span>
            <hr class="hr-pd_10">
            <p>В ответе запишите число десятичной системе счисления. Основание  системы счисления указывать не нужно.</p>
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
              
              Ответ: ${taskAnswer}`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        } 
    }  
    if (taskKey === 'eleven'){
      let Nomer = 11
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
      let Nomer = 12
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          <p>${task1}</p>
          <p>В ответе укажите только число.</p> 
          <hr class="hr-pd_20">     
          
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
      let Nomer = 13.1
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Используя информацию и иллюстративный материал, содержащийся в каталоге <b>${task1[0]}</b>, создайте презентацию из трёх слайдов на тему <b>«${task1[1]}»</b>.<br>
          
           ${task3}<br><hr class="hr-pd_10">
          <details class="open-del"><summary >Развернуть описание</summary><hr class="hr-pd_10">
          Все слайды должны быть выполнены в едином стиле, каждый слайд должен быть озаглавлен.<br>
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
          Выравнивание объектов, ориентация изображений выполняются произвольно в соответствии с замыслом автора работы и служат наилучшему раскрытию темы.</details><hr class="hr-pd_20">
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
            <a href="../../../src/inf_file/task13/task13_${taskCounter}.rar"><img src="../../../img/download.svg" alt="download" >Скачать файл</a>
          </div>
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
  
          return answerBlock
         }
    }
    if (taskKey === 'thirteentwo'){
      let Nomer = 13.2
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
          Файл ответа необходимо сохранить в одном из следующих форматов: *.odt, или *.doc, или <a style="text-decoration: none; color: black;" href="../../../src/inf_file/task13/13.2.docx">*.docx</a>.
          <br><em>${task4}</em><hr class="hr-pd_10">
          <hr>
          
          <img class="img-13_2" src="../../../img/task13.2/task13.2_${taskCounter}.png"<hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
          return answerBlock
         }
    }
    if (taskKey === 'fourteen'){
      let Nomer = 14
        function Tab14(taskTable){
          
          if (taskTable === 1){
            return `
            В электронную таблицу занесли данные о тестировании людей разного возраста.
            <hr class="hr-pd_10"> 
            <table class="table_14">
              <tbody style="text-align: center; align-items: center;">
                <tr>
                  <td width="25"><p><strong>&nbsp;</strong></p></td>
                  <td width="250"><p><strong>A</strong></p></td>
                  <td ><p><strong>B</strong></p></td>
                  <td ><p><strong>C</strong></p></td>
                  <td ><p><strong>D</strong></p></td>
                  <td ><p><strong>E</strong></p></td>
                </tr>
                <tr>
                  <td><p>1</p></td>
                  <td><p><strong>номер участника</strong></p></td>
                  <td><p><strong>пол</strong></p></td>
                  <td><p><strong>возраст</strong></p></td>
                  <td><p><strong>тест 1</strong></p></td>
                  <td><p><strong>тест 2</strong></p></td>
                </tr>
                <tr>
                  <td width="24"><p>2</p></td>
                  <td width="109"><p>участник 1</p></td>
                  <td width="97"><p>жен</p></td>
                  <td width="71"><p>16</p></td>
                  <td width="107"><p>31</p></td>
                  <td width="107"><p>48</p></td>
                </tr>
                <tr>
                  <td width="24"><p>3</p></td>
                  <td width="109"><p>участник 2</p></td>
                  <td width="97"><p>муж</p></td>
                  <td width="71"><p>25</p></td>
                  <td width="107"><p>14</p></td>
                  <td width="107"><p>40</p></td>
                </tr>
                <tr>
                  <td width="24"><p>4</p></td>
                  <td width="109"><p>участник 3</p></td>
                  <td width="97"><p>муж</p></td>
                  <td width="71"><p>16</p></td>
                  <td width="107"><p>35</p></td>
                  <td width="107"><p>18</p></td>
                </tr>
                <tr>
                  <td width="24"><p>5</p></td>
                  <td width="109"><p>участник 4</p></td>
                  <td width="97"><p>муж</p></td>
                  <td width="71"><p>73</p></td>
                  <td width="107"><p>9</p></td>
                  <td width="107"><p>24</p></td>
                </tr>
              </tbody>
            </table>
            <hr class="hr-pd_10"> 
            В столбце A записан номер участника; в столбце B – пол; в столбце C – возраст; в столбце D – балл за тест 1; в столбце E – балл за тест 2.<br>
            Всего в электронную таблицу были занесены данные по 1000 участников.

            
            `
          } // тест 1
          
          else if (taskTable === 2){
            return `
            В электронную таблицу занесли результаты анонимного тестирования. 
            Все участники набирали баллы, делая задания для левой и правой руки. 
            Ниже приведены первые строки получившейся таблицы.
            <hr class="hr-pd_10">
            <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
<td>
<p><strong>&nbsp;</strong></p>
</td>
<td width="250">
<p><strong>A</strong></p>
</td>
<td width="56">
<p><strong>B</strong></p>
</td>
<td>
<p><strong>C</strong></p>
</td>
<td width="140">
<p><strong>D</strong></p>
</td>
<td width="150">
<p><strong>E</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>1</strong></p>
</td>
<td width="161">
<p><em>номер участника</em></p>
</td>
<td width="56">
<p><em>пол</em></p>
</td>
<td>
<p><em>статус</em></p>
</td>
<td width="93">
<p><em>левая рука</em></p>
</td>
<td width="122">
<p><em>правая рука</em></p>
</td>
</tr>
<tr>
<td>
<p><strong>2</strong></p>
</td>
<td width="161">
<p>участник 1</p>
</td>
<td width="56">
<p>жен</p>
</td>
<td>
<p>пенсионер</p>
</td>
<td width="93">
<p>35</p>
</td>
<td width="122">
<p>34</p>
</td>
</tr>
<tr>
<td>
<p><strong>3</strong></p>
</td>
<td width="161">
<p>участник 2</p>
</td>
<td width="56">
<p>муж</p>
</td>
<td>
<p>студент</p>
</td>
<td width="93">
<p>57</p>
</td>
<td width="122">
<p>53</p>
</td>
</tr>
<tr>
<td>
<p><strong>4</strong></p>
</td>
<td width="161">
<p>участник 3</p>
</td>
<td width="56">
<p>муж</p>
</td>
<td>
<p>пенсионер</p>
</td>
<td width="93">
<p>47</p>
</td>
<td width="122">
<p>64</p>
</td>
</tr>
<tr>
<td>
<p><strong>5</strong></p>
</td>
<td width="161">
<p>участник 4</p>
</td>
<td width="56">
<p>муж</p>
</td>
<td>
<p>служащий</p>
</td>
<td width="93">
<p>34</p>
</td>
<td width="122">
<p>58</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">
В столбце A указан номер участника, в столбце B – пол, в столбце C – один из трёх статусов: пенсионер, служащий, студент, в столбцах D, E – показатели тестирования для левой и правой руки.
<hr class="hr-pd_10">
Всего в электронную таблицу были занесены данные по 1000 участникам. Порядок записей в таблице произвольный.
`

          } // левая рука
          
          else if(taskTable === 3){
            return `
            В электронную таблицу занесли результаты мониторинга стоимости бензина трёх марок (92, 95, 98) на бензозаправках города. 
            На рисунке приведены первые строки получившейся таблицы.
            <hr class="hr-pd_10">
            <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
  <td width="47"><p>&nbsp;</p></td>
  <td width="198"><p><strong>A</strong></p></td>
  <td width="94"><p><strong>B</strong></p></td>
  <td width="85"><p><strong>C</strong></p></td>
</tr>
<tr>
<td width="47">
<p><strong>1</strong></p>
</td>
<td width="198">
<p><strong>Улица</strong></p>
</td>
<td width="94">
<p><strong>Марка</strong></p>
</td>
<td width="85">
<p><strong>Цена</strong></p>
</td>
</tr>
<tr>
<td width="47">
<p><strong>2</strong></p>
</td>
<td width="198">
<p>Абельмановская</p>
</td>
<td width="94">
<p>92</p>
</td>
<td width="85">
<p>45,80</p>
</td>
</tr>
<tr>
<td width="47">
<p><strong>3</strong></p>
</td>
<td width="198">
<p>Абрамцевская</p>
</td>
<td width="94">
<p>98</p>
</td>
<td width="85">
<p>49,40</p>
</td>
</tr>
<tr>
<td width="47">
<p><strong>4</strong></p>
</td>
<td width="198">
<p>Авиамоторная</p>
</td>
<td width="94">
<p>95</p>
</td>
<td width="85">
<p>49,10</p>
</td>
</tr>
<tr>
<td width="47">
<p><strong>5</strong></p>
</td>
<td width="198">
<p>Авиаторов</p>
</td>
<td width="94">
<p>95</p>
</td>
<td width="85">
<p>47,70</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">
В столбце A записано название улицы, на которой расположена бензозаправка, в столбце B – марка бензина, который продаётся на этой заправке (одно из чисел 92, 95, 98), 
в столбце C – стоимость бензина на данной бензозаправке (в рублях, с указанием двух знаков дробной части). 
<hr class="hr-pd_10">
На каждой улице может быть расположена только одна заправка, для каждой заправки указана только одна марка бензина. 
Всего в электронную таблицу были занесены данные по 1000 бензозаправкам. Порядок записей в таблице произвольный.

            `
          } // Авиаторов
          
          else if(taskTable === 4){
            return `
            В электронную таблицу занесли данные о тестировании учеников. Ниже приведены первые пять строк таблицы.
            <hr class="hr-pd_10">
            <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
<td width="29">&nbsp;</td>
<td width="80">
<p><strong>A</strong></p>
</td>
<td width="200">
<p><strong>B</strong></p>
</td>
<td width="230">
<p><strong>C</strong></p>
</td>
<td width="100">
<p><strong>D</strong></p>
</td>
</tr>
<tr>
<td width="29">
<p><strong>1</strong></p>
</td>
<td width="60">
<p><strong>округ</strong></p>
</td>
<td width="115">
<p><strong>код ученика</strong></p>
</td>
<td width="232">
<p><strong>любимый предмет</strong></p>
</td>
<td width="160">
<p><strong>балл</strong></p>
</td>
</tr>
<tr>
<td width="29">
<p><strong>2</strong></p>
</td>
<td width="60">
<p>С</p>
</td>
<td width="115">
<p>Ученик 1</p>
</td>
<td width="232">
<p>обществознание</p>
</td>
<td width="160">
<p>246</p>
</td>
</tr>
<tr>
<td width="29">
<p><strong>3</strong></p>
</td>
<td width="60">
<p>В</p>
</td>
<td width="115">
<p>Ученик 2</p>
</td>
<td width="232">
<p>немецкий язык</p>
</td>
<td width="160">
<p>530</p>
</td>
</tr>
<tr>
<td width="29">
<p><strong>4</strong></p>
</td>
<td width="60">
<p>Ю</p>
</td>
<td width="115">
<p>Ученик 3</p>
</td>
<td width="232">
<p>русский язык</p>
</td>
<td width="160">
<p>576</p>
</td>
</tr>
<tr>
<td width="29">
<p><strong>5</strong></p>
</td>
<td width="60">
<p>СВ</p>
</td>
<td width="115">
<p>Ученик 4</p>
</td>
<td width="232">
<p>обществознание</p>
</td>
<td width="160">
<p>304</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">
В столбце A записан округ, в котором учится ученик; в столбце B – код ученика; в столбце C – любимый предмет; в столбце D – тестовый балл.
<hr class="hr-pd_10">
Всего в электронную таблицу были занесены данные по 1000 учеников.
            `
          } // балл 246
          
          else if(taskTable === 5){
            return `
            В электронную таблицу занесли результаты анонимного тестирования студентов. Ниже приведены первые строки получившейся таблицы.
            <hr class="hr-pd_10">
            <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
<td>
<p>&nbsp;</p>
</td>
<td width="200">
<p><strong>A</strong></p>
</td>
<td width="53">
<p><strong>B</strong></p>
</td>
<td width="159">
<p><strong>C</strong></p>
</td>
<td width="85">
<p><strong>D</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>1</strong></p>
</td>
<td width="147">
<p><em>номер участника</em></p>
</td>
<td width="53">
<p><em>пол</em></p>
</td>
<td width="159">
<p><em>факультет</em></p>
</td>
<td width="85">
<p><em>баллы</em></p>
</td>
</tr>
<tr>
<td>
<p><strong>2</strong></p>
</td>
<td width="147">
<p>участник 1</p>
</td>
<td width="53">
<p>жен.</p>
</td>
<td width="159">
<p>химический</p>
</td>
<td width="85">
<p>21</p>
</td>
</tr>
<tr>
<td>
<p><strong>3</strong></p>
</td>
<td width="147">
<p>участник 2</p>
</td>
<td width="53">
<p>муж.</p>
</td>
<td width="159">
<p>математический</p>
</td>
<td width="85">
<p>5</p>
</td>
</tr>
<tr>
<td>
<p><strong>4</strong></p>
</td>
<td width="147">
<p>участник 3</p>
</td>
<td width="53">
<p>жен.</p>
</td>
<td width="159">
<p>медицинский</p>
</td>
<td width="85">
<p>15</p>
</td>
</tr>
<tr>
<td>
<p><strong>5</strong></p>
</td>
<td width="147">
<p>участник 4</p>
</td>
<td width="53">
<p>муж.</p>
</td>
<td width="159">
<p>математический</p>
</td>
<td width="85">
<p>15</p>
</td>
</tr>
<tr>
<td>
<p><strong>6</strong></p>
</td>
<td width="147">
<p>участник 5</p>
</td>
<td width="53">
<p>муж.</p>
</td>
<td width="159">
<p>экономический</p>
</td>
<td width="85">
<p>24</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">    
В столбце A указан номер участника; в столбце B – пол; в столбце C – один из четырёх факультетов: математический, медицинский, химический, экономический; в столбце D – количество набранных баллов (от 5 до 25).
<hr class="hr-pd_10"> 
Всего в электронную таблицу были занесены данные по 1000 участников. Порядок записей в таблице произвольный.   
            `
          } // балл 21
          
          else if(taskTable === 6){
            return `
            В электронную таблицу занесли данные о результатах тестирования. Ниже приведены первые пять строк таблицы.
            <hr class="hr-pd_10">
            <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
<td width="24">
<p><strong>&nbsp;</strong></p>
</td>
<td width="200">
<p><strong>A</strong></p>
</td>
<td width="180">
<p><strong>B</strong></p>
</td>
<td width="180">
<p><strong>C</strong></p>
</td>
<td width="150">
<p><strong>D</strong></p>
</td>
<td width="180">
<p><strong>E</strong></p>
</td>
</tr>
<tr>
<td width="24">
<p>1</p>
</td>
<td width="109">
<p><strong>номер участника</strong></p>
</td>
<td width="97">
<p><strong>баллы русский язык</strong></p>
</td>
<td width="116">
<p><strong>баллы математика</strong></p>
</td>
<td width="107">
<p><strong>баллы физика</strong></p>
</td>
<td width="131">
<p><strong>баллы информатика</strong></p>
</td>
</tr>
<tr>
<td width="24">
<p>2</p>
</td>
<td width="109">
<p>участник 1</p>
</td>
<td width="97">
<p>79</p>
</td>
<td width="116">
<p>81</p>
</td>
<td width="107">
<p>44</p>
</td>
<td width="131">
<p>85</p>
</td>
</tr>
<tr>
<td width="24">
<p>3</p>
</td>
<td width="109">
<p>участник 2</p>
</td>
<td width="97">
<p>98</p>
</td>
<td width="116">
<p>23</p>
</td>
<td width="107">
<p>82</p>
</td>
<td width="131">
<p>89</p>
</td>
</tr>
<tr>
<td width="24">
<p>4</p>
</td>
<td width="109">
<p>участник 3</p>
</td>
<td width="97">
<p>48</p>
</td>
<td width="116">
<p>79</p>
</td>
<td width="107">
<p>88</p>
</td>
<td width="131">
<p>90</p>
</td>
</tr>
<tr>
<td width="24">
<p>5</p>
</td>
<td width="109">
<p>участник 4</p>
</td>
<td width="97">
<p>94</p>
</td>
<td width="116">
<p>35</p>
</td>
<td width="107">
<p>90</p>
</td>
<td width="131">
<p>40</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">
В столбце A записан номер участника; в столбце B – балл по русскому языку; в столбце C – балл по математике; в столбце D – балл по физике; в столбце E – балл по информатике.
<hr class="hr-pd_10">
Всего в электронную таблицу были занесены данные по 1000 участников.
            `
          } // балл 85

          else if(taskTable === 7){
            return `
            В электронную таблицу занесли данные наблюдения за погодой в течение одного года. Ниже приведены первые пять строк таблицы.
            <hr class="hr-pd_10">
            <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
<td width="29">&nbsp;</td>
<td width="120">
<p>A</p>
</td>
<td width="140">
<p>B</p>
</td>
<td width="71">
<p>C</p>
</td>
<td width="94">
<p>D</p>
</td>
<td width="58">
<p>E</p>
</td>
<td width="190">
<p>F</p>
</td>
</tr>
<tr>
<td width="29">
<p>1</p>
</td>
<td width="87">
<p><strong>Дата</strong></p>
</td>
<td width="124">
<p><strong>Температура</strong></p>
</td>
<td width="71">
<p><strong>Осадки</strong></p>
</td>
<td width="94">
<p><strong>Давление</strong></p>
</td>
<td width="58">
<p><strong>Ветер</strong></p>
</td>
<td width="156">
<p><strong>Скорость ветра</strong></p>
</td>
</tr>
<tr>
<td width="29">
<p>2</p>
</td>
<td width="87">
<p>1 января</p>
</td>
<td width="124">
<p>0,7</p>
</td>
<td width="71">
<p>15,2</p>
</td>
<td width="94">
<p>748</p>
</td>
<td width="58">
<p>ЮВ</p>
</td>
<td width="156">
<p>4,2</p>
</td>
</tr>
<tr>
<td width="29">
<p>3</p>
</td>
<td width="87">
<p>2 января</p>
</td>
<td width="124">
<p>0,4</p>
</td>
<td width="71">
<p>4,6</p>
</td>
<td width="94">
<p>751</p>
</td>
<td width="58">
<p>В</p>
</td>
<td width="156">
<p>4,7</p>
</td>
</tr>
<tr>
<td width="29">
<p>4</p>
</td>
<td width="87">
<p>3 января</p>
</td>
<td width="124">
<p>–1,9</p>
</td>
<td width="71">
<p>1,4</p>
</td>
<td width="94">
<p>747</p>
</td>
<td width="58">
<p>С</p>
</td>
<td width="156">
<p>2,4</p>
</td>
</tr>
<tr>
<td width="29">
<p>5</p>
</td>
<td width="87">
<p>4 января</p>
</td>
<td width="124">
<p>–7,7</p>
</td>
<td width="71">
<p>0,2</p>
</td>
<td width="94">
<p>752</p>
</td>
<td width="58">
<p>З</p>
</td>
<td width="156">
<p>4,7</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">
В столбце A записана дата наблюдения; в столбце B – среднесуточная температура воздуха для указанной даты; в столбце C – количество выпавших осадков (в миллиметрах) для указанной даты; в столбце D – среднесуточное атмосферное давление (в миллиметрах ртутного столба). В столбце E записано направление ветра для указанной даты – одно из восьми возможных значений: «СЗ», «С», «СВ», «В», «ЮВ», «Ю», «ЮЗ», «З». В столбце F записана среднесуточная скорость ветра (в метрах в секунду).
<hr class="hr-pd_10">
Всего в электронную таблицу были занесены данные по всем 365 дням года в хронологическом порядке.
            `
          } // ветер

          else if(taskTable === 8){
            return `
            В электронную таблицу занесли данные о численности населения городов разных стран. Ниже приведены первые пять строк таблицы.
            <hr class="hr-pd_10">
            <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
<td width="30">&nbsp;</td>
<td width="250">
<p><strong>A</strong></p>
</td>
<td width="115">
<p><strong>B</strong></p>
</td>
<td width="112">
<p><strong>C</strong></p>
</td>
</tr>
<tr>
<td width="30">
<p><strong>1</strong></p>
</td>
<td width="160">
<p><strong>Город</strong></p>
</td>
<td width="115">
<p><strong>Численность населения</strong></p>
</td>
<td width="112">
<p><strong>Страна</strong></p>
</td>
</tr>
<tr>
<td width="30">
<p><strong>2</strong></p>
</td>
<td width="160">
<p>Асмун</p>
</td>
<td width="115">
<p>91,40</p>
</td>
<td width="112">
<p>Египет</p>
</td>
</tr>
<tr>
<td width="30">
<p><strong>3</strong></p>
</td>
<td width="160">
<p>Винер-Нойштадт</p>
</td>
<td width="115">
<p>39,94</p>
</td>
<td width="112">
<p>Австрия</p>
</td>
</tr>
<tr>
<td width="30">
<p><strong>4</strong></p>
</td>
<td width="160">
<p>Люлебургаз</p>
</td>
<td width="115">
<p>100,79</p>
</td>
<td width="112">
<p>Турция</p>
</td>
</tr>
<tr>
<td width="30">
<p><strong>5</strong></p>
</td>
<td width="160">
<p>Фёклабрук</p>
</td>
<td width="115">
<p>11,95</p>
</td>
<td width="112">
<p>Австрия</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">
В столбце A указано название города; в столбце B – численность населения (тыс. человек); в столбце C – название страны.
<hr class="hr-pd_10">
Всего в электронную таблицу были занесены данные по 1000 городов Порядок записей в таблице произвольный.

            `
          } // Египет

          else if(taskTable === 9){
            return `
            В электронную таблицу занесли данные о результатах тестирования. Ниже приведены первые пять строк таблицы.
            <hr class="hr-pd_10">
            <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
<td width="20">
<p><strong>&nbsp;</strong></p>
</td>
<td width="260">
<p><strong>A</strong></p>
</td>
<td width="120">
<p><strong>B</strong></p>
</td>
<td width="117">
<p><strong>C</strong></p>
</td>
<td width="80">
<p><strong>D</strong></p>
</td>
</tr>
<tr>
<td width="20">
<p><strong>1</strong></p>
</td>
<td width="201">
<p><em>Ученик</em></p>
</td>
<td width="120">
<p><em>Район</em></p>
</td>
<td width="117">
<p><em>Математика</em></p>
</td>
<td width="80">
<p><em>Физика</em></p>
</td>
</tr>
<tr>
<td width="20">
<p><strong>2</strong></p>
</td>
<td width="201">
<p>Шамшин Владислав</p>
</td>
<td width="120">
<p>Майский</p>
</td>
<td width="117">
<p>65</p>
</td>
<td width="80">
<p>79</p>
</td>
</tr>
<tr>
<td width="20">
<p><strong>3</strong></p>
</td>
<td width="201">
<p>Гришин Борис</p>
</td>
<td width="120">
<p>Заречный</p>
</td>
<td width="117">
<p>52</p>
</td>
<td width="80">
<p>30</p>
</td>
</tr>
<tr>
<td width="20">
<p><strong>4</strong></p>
</td>
<td width="201">
<p>Огородников Николай</p>
</td>
<td width="120">
<p>Подгорный</p>
</td>
<td width="117">
<p>60</p>
</td>
<td width="80">
<p>27</p>
</td>
</tr>
<tr>
<td width="20">
<p><strong>5</strong></p>
</td>
<td width="201">
<p>Богданов Виктор</p>
</td>
<td width="120">
<p>Центральный</p>
</td>
<td width="117">
<p>98</p>
</td>
<td width="80">
<p>86</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">
В столбце A записан номер участника; в столбце B – балл по русскому языку; в столбце C – балл по математике; в столбце D – балл по физике; в столбце E – балл по информатике.
<hr class="hr-pd_10">
Всего в электронную таблицу были занесены данные по 1000 участников.
            
            `
          } // балл 79

          // class="table_14" style="text-align: center; align-items: center;"

          else if(taskTable === 10){
            return `
            В электронную таблицу занесли информацию о грузоперевозках, совершённых некоторым автопредприятием с 1 по 9 октября. Ниже приведены первые пять строк таблицы.
            <hr class="hr-pd_10">
            <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
<td width="25">&nbsp;</td>
<td width="120">
<p>A</p>
</td>
<td width="129">
<p>B</p>
</td>
<td width="115">
<p>C</p>
</td>
<td width="116">
<p>D</p>
</td>
<td width="82">
<p>E</p>
</td>
<td width="76">
<p>F</p>
</td>
</tr>
<tr>
<td width="25">
<p>1</p>
</td>
<td width="97">
<p><strong>Дата</strong></p>
</td>
<td width="129">
<p><strong>Пункт отправления</strong></p>
</td>
<td width="115">
<p><strong>Пункт назначения</strong></p>
</td>
<td width="116">
<p><strong>Расстояние</strong></p>
</td>
<td width="82">
<p><strong>Расход бензина</strong></p>
</td>
<td width="76">
<p><strong>Масса груза</strong></p>
</td>
</tr>
<tr>
<td width="25">
<p>2</p>
</td>
<td width="97">
<p>1 октября</p>
</td>
<td width="129">
<p>Липки</p>
</td>
<td width="115">
<p>Березки</p>
</td>
<td width="116">
<p>432</p>
</td>
<td width="82">
<p>63</p>
</td>
<td width="76">
<p>770</p>
</td>
</tr>
<tr>
<td width="25">
<p>3</p>
</td>
<td width="97">
<p>1 октября</p>
</td>
<td width="129">
<p>Орехово</p>
</td>
<td width="115">
<p>Дубки</p>
</td>
<td width="116">
<p>121</p>
</td>
<td width="82">
<p>17</p>
</td>
<td width="76">
<p>670</p>
</td>
</tr>
<tr>
<td width="25">
<p>4</p>
</td>
<td width="97">
<p>1 октября</p>
</td>
<td width="129">
<p>Осинки</p>
</td>
<td width="115">
<p>Вязово</p>
</td>
<td width="116">
<p>333</p>
</td>
<td width="82">
<p>47</p>
</td>
<td width="76">
<p>830</p>
</td>
</tr>
<tr>
<td width="25">
<p>5</p>
</td>
<td width="97">
<p>1 октября</p>
</td>
<td width="129">
<p>Липки</p>
</td>
<td width="115">
<p>Вязово</p>
</td>
<td width="116">
<p>384</p>
</td>
<td width="82">
<p>54</p>
</td>
<td width="76">
<p>730</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">
Каждая строка таблицы содержит запись об одной перевозке.<hr class="hr-pd_10">

В столбце A записана дата перевозки (от «1 октября» до «9 октября»); в столбце B – название населённого пункта отправления перевозки; в столбце C – название населённого пункта назначения перевозки; в столбце D – расстояние, на которое была осуществлена перевозка (в километрах); в столбце E – расход бензина на всю перевозку (в литрах); в столбце F – масса перевезённого груза (в килограммах).
<hr class="hr-pd_10">
Всего в электронную таблицу были занесены данные по 370 перевозкам в хронологическом порядке.
            `
          } // липки

          else if(taskTable === 11){
            return `
            В электронную таблицу занесли данные о калорийности продуктов. Ниже приведены первые пять строк таблицы.
            <hr class="hr-pd_10">
            <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
<td width="28">&nbsp;</td>
<td width="250">
<p><strong>А</strong></p>
</td>
<td width="110">
<p><strong>В</strong></p>
</td>
<td width="110">
<p><strong>С</strong></p>
</td>
<td width="150">
<p><strong>D</strong></p>
</td>
<td width="139">
<p><strong>Е</strong></p>
</td>
</tr>
<tr>
<td width="28">
<p><strong>1</strong></p>
</td>
<td width="161">
<p>Продукт</p>
</td>
<td width="84">
<p>Жиры, г</p>
</td>
<td width="86">
<p>Белки, г</p>
</td>
<td width="113">
<p>Углеводы, г</p>
</td>
<td width="139">
<p>Калорийность, Ккал</p>
</td>
</tr>
<tr>
<td width="28">
<p><strong>2</strong></p>
</td>
<td width="161">
<p>Арахис</p>
</td>
<td width="84">
<p>45,2</p>
</td>
<td width="86">
<p>26,3</p>
</td>
<td width="113">
<p>9,9</p>
</td>
<td width="139">
<p>552</p>
</td>
</tr>
<tr>
<td width="28">
<p><strong>3</strong></p>
</td>
<td width="161">
<p>Арахис жареный</p>
</td>
<td width="84">
<p>52,0</p>
</td>
<td width="86">
<p>26,0</p>
</td>
<td width="113">
<p>13,4</p>
</td>
<td width="139">
<p>626</p>
</td>
</tr>
<tr>
<td width="28">
<p><strong>4</strong></p>
</td>
<td width="161">
<p>Горох отварной</p>
</td>
<td width="84">
<p>0,8</p>
</td>
<td width="86">
<p>10,5</p>
</td>
<td width="113">
<p>20,4</p>
</td>
<td width="139">
<p>130</p>
</td>
</tr>
<tr>
<td width="28">
<p><strong>5</strong></p>
</td>
<td width="161">
<p>Горошек зелёный</p>
</td>
<td width="84">
<p>0,2</p>
</td>
<td width="86">
<p>5,0</p>
</td>
<td width="113">
<p>8,3</p>
</td>
<td width="139">
<p>55</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">
В столбце A записан продукт; в столбце B – содержание в нём жиров; в столбце C – содержание белков; в столбце D – содержание углеводов; в столбце Е – калорийность этого продукта.
<hr class="hr-pd_10">
Всего в электронную таблицу были занесены данные по 1000 продуктов.
            `
          } // арахис

          else if(taskTable === 12){
            return `
            В электронную таблицу занесли данные о тестировании учеников по трём предметам. Ниже приведены первые пять строк таблицы.
            <hr class="hr-pd_10">
            <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
<td width="24">
<p>&nbsp;</p>
</td>
<td width="114">
<p><strong>A</strong></p>
</td>
<td width="114">
<p><strong>B</strong></p>
</td>
<td width="124">
<p><strong>C</strong></p>
</td>
<td width="113">
<p><strong>D</strong></p>
</td>
<td width="128">
<p><strong>E</strong></p>
</td>
</tr>
<tr>
<td width="24">
<p><strong>1</strong></p>
</td>
<td width="114">
<p><strong>Код ученика</strong></p>
</td>
<td width="114">
<p><strong>Район</strong></p>
</td>
<td width="124">
<p><strong>Русский язык</strong></p>
</td>
<td width="113">
<p><strong>Математика</strong></p>
</td>
<td width="128">
<p><strong>Информатика</strong></p>
</td>
</tr>
<tr>
<td width="24">
<p><strong>2</strong></p>
</td>
<td width="114">
<p>Ученик 1</p>
</td>
<td width="114">
<p>Майский</p>
</td>
<td width="124">
<p>27</p>
</td>
<td width="113">
<p>36</p>
</td>
<td width="128">
<p>48</p>
</td>
</tr>
<tr>
<td width="24">
<p><strong>3</strong></p>
</td>
<td width="114">
<p>Ученик 2</p>
</td>
<td width="114">
<p>Заречный</p>
</td>
<td width="124">
<p>30</p>
</td>
<td width="113">
<p>51</p>
</td>
<td width="128">
<p>15</p>
</td>
</tr>
<tr>
<td width="24">
<p><strong>4</strong></p>
</td>
<td width="114">
<p>Ученик 3</p>
</td>
<td width="114">
<p>Подгорный</p>
</td>
<td width="124">
<p>54</p>
</td>
<td width="113">
<p>97</p>
</td>
<td width="128">
<p>98</p>
</td>
</tr>
<tr>
<td width="24">
<p><strong>5</strong></p>
</td>
<td width="114">
<p>Ученик 4</p>
</td>
<td width="114">
<p>Центральный</p>
</td>
<td width="124">
<p>66</p>
</td>
<td width="113">
<p>96</p>
</td>
<td width="128">
<p>32</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">
В столбце A записаны коды учеников; в столбце B – район проживания; в столбцах C, D и E – тестовые баллы по русскому языку, математике и информатике соответственно. 
<hr class="hr-pd_10">
Всего в электронную таблицу были занесены данные по 1000 учеников.
            
            `
          } // майский 48

          else if(taskTable === 13){
            return `
            В электронную таблицу занесли данные олимпиады по математике. Ниже приведены первые пять строк таблицы.
               <hr class="hr-pd_10">
               <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
<td width="24">
<p><strong>&nbsp;</strong></p>
</td>
<td width="150">
<p>A</p>
</td>
<td width="75">
<p>B</p>
</td>
<td width="91">
<p>C</p>
</td>
<td width="83">
<p>D</p>
</td>
</tr>
<tr>
<td width="24">
<p>1</p>
</td>
<td width="103">
<p><strong>номер участника</strong></p>
</td>
<td width="75">
<p><strong>номер школы</strong></p>
</td>
<td width="91">
<p><strong>класс</strong></p>
</td>
<td width="83">
<p><strong>баллы</strong></p>
</td>
</tr>
<tr>
<td width="24">
<p>2</p>
</td>
<td width="103">
<p>участник 1</p>
</td>
<td width="75">
<p>38</p>
</td>
<td width="91">
<p>8</p>
</td>
<td width="83">
<p>55</p>
</td>
</tr>
<tr>
<td width="24">
<p>3</p>
</td>
<td width="103">
<p>участник 2</p>
</td>
<td width="75">
<p>32</p>
</td>
<td width="91">
<p>9</p>
</td>
<td width="83">
<p>329</p>
</td>
</tr>
<tr>
<td width="24">
<p>4</p>
</td>
<td width="103">
<p>участник 3</p>
</td>
<td width="75">
<p>30</p>
</td>
<td width="91">
<p>8</p>
</td>
<td width="83">
<p>252</p>
</td>
</tr>
<tr>
<td width="24">
<p>5</p>
</td>
<td width="103">
<p>участник 4</p>
</td>
<td width="75">
<p>50</p>
</td>
<td width="91">
<p>8</p>
</td>
<td width="83">
<p>202</p>
</td>
</tr>
</tbody>
</table>
 <hr class="hr-pd_10">
 В столбце A записан номер участника; в столбце B – номер школы; в столбце C – класс; в столбце D – набранные баллы.
 <hr class="hr-pd_10">
Всего в электронную таблицу были занесены данные по 1000 участников.
            `
          } // 38 балл 55

          else if(taskTable === 14){
            return `
            В электронную таблицу занесли данные о товарах, хранящихся на складах в разных округах. Ниже приведены первые пять строк таблицы.
             <hr class="hr-pd_10">
            <table class="table_14">
<tbody style="text-align: center; align-items: center;">
<tr>
<td width="24">&nbsp;</td>
<td width="100">
<p><strong>A</strong></p>
</td>
<td width="120">
<p><strong>B</strong></p>
</td>
<td width="152">
<p><strong>C</strong></p>
</td>
<td width="171">
<p><strong>D</strong></p>
</td>
</tr>
<tr>
<td width="24">
<p><strong>1</strong></p>
</td>
<td width="60">
<p><strong>Округ</strong></p>
</td>
<td width="70">
<p><strong>Товары</strong></p>
</td>
<td width="152">
<p><strong>Номер склада</strong></p>
</td>
<td width="171">
<p><strong>Стоимость&nbsp;</strong>(<strong>руб.</strong>)</p>
</td>
</tr>
<tr>
<td width="24">
<p><strong>2</strong></p>
</td>
<td width="60">
<p>С</p>
</td>
<td width="70">
<p>Товар 1</p>
</td>
<td width="152">
<p>8</p>
</td>
<td width="171">
<p>5634</p>
</td>
</tr>
<tr>
<td width="24">
<p><strong>3</strong></p>
</td>
<td width="60">
<p>В</p>
</td>
<td width="70">
<p>Товар 2</p>
</td>
<td width="152">
<p>1</p>
</td>
<td width="171">
<p>27223</p>
</td>
</tr>
<tr>
<td width="24">
<p><strong>4</strong></p>
</td>
<td width="60">
<p>Ю</p>
</td>
<td width="70">
<p>Товар 3</p>
</td>
<td width="152">
<p>3</p>
</td>
<td width="171">
<p>3004</p>
</td>
</tr>
<tr>
<td width="24">
<p><strong>5</strong></p>
</td>
<td width="60">
<p>СВ</p>
</td>
<td width="70">
<p>Товар 4</p>
</td>
<td width="152">
<p>3</p>
</td>
<td width="171">
<p>28971</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">
В столбце A записан код округа, в котором находится склад с товарами; в столбце B – товары; в столбце C – номер склада; в столбце D – стоимость товара в рублях.
<hr class="hr-pd_10">
Всего в электронную таблицу были занесены данные по 1000 товаров.
            
            `
          } // 5634

          else if(taskTable === 15){
            return `
            В электронную таблицу занесли результаты тестирования учащихся по математике и физике. На рисунке приведены первые строки получившейся таблицы.
            <hr class="hr-pd_10">
            <table class="table_14">
<tbody >
<tr>
<td width="20">
<p><strong>&nbsp;</strong></p>
</td>
<td width="260">
<p><strong>A</strong></p>
</td>
<td width="120">
<p><strong>B</strong></p>
</td>
<td width="117">
<p><strong>C</strong></p>
</td>
<td width="80">
<p><strong>D</strong></p>
</td>
</tr>
<tr>
<td width="20">
<p><strong>1</strong></p>
</td>
<td width="201">
<p><em>Ученик</em></p>
</td>
<td width="120">
<p><em>Район</em></p>
</td>
<td width="117">
<p><em>Математика</em></p>
</td>
<td width="80">
<p><em>Физика</em></p>
</td>
</tr>
<tr>
<td width="20">
<p><strong>2</strong></p>
</td>
<td width="201">
<p>Шамшин Владислав</p>
</td>
<td width="120">
<p>Майский</p>
</td>
<td width="117">
<p>65</p>
</td>
<td width="80">
<p>79</p>
</td>
</tr>
<tr>
<td width="20">
<p><strong>3</strong></p>
</td>
<td width="201">
<p>Гришин Борис</p>
</td>
<td width="120">
<p>Заречный</p>
</td>
<td width="117">
<p>52</p>
</td>
<td width="80">
<p>30</p>
</td>
</tr>
<tr>
<td width="20">
<p><strong>4</strong></p>
</td>
<td width="201">
<p>Огородников Николай</p>
</td>
<td width="120">
<p>Подгорный</p>
</td>
<td width="117">
<p>60</p>
</td>
<td width="80">
<p>27</p>
</td>
</tr>
<tr>
<td width="20">
<p><strong>5</strong></p>
</td>
<td width="201">
<p>Богданов Виктор</p>
</td>
<td width="120">
<p>Центральный</p>
</td>
<td width="117">
<p>98</p>
</td>
<td width="80">
<p>86</p>
</td>
</tr>
</tbody>
</table>
<hr class="hr-pd_10">
В столбце A указаны фамилия и имя учащегося; в столбце B – район города, в котором расположена школа учащегося; в столбцах C, D – баллы, полученные соответственно по математике и физике. По каждому предмету можно было набрать от 0 до 100 баллов.
<hr class="hr-pd_10">
Всего в электронную таблицу были занесены данные по 1000 учащихся. Порядок записей в таблице произвольный.         
            `
          } // физика 79




          // else if(taskTable === 3){
          //   return ``
          // }

        }
      switch(typeTask){

        case 1:
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> 
          
          <hr class="hr-pd_10">

          ${Tab14(taskTable)}

          <hr class="hr-pd_10">
                  
          Откройте файл с данной электронной таблицей (расположение файла Вам сообщат организаторы экзамена). 
          На основании данных, содержащихся в этой таблице, выполните задания. <hr class="hr-pd_10">  
   
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
      let Nomer = 15
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Дайте развернутый ответ.
          <hr class="hr-pd_10"> 
          <details><summary >Развернуть описание</summary>
          <hr class="hr-pd_10">
            Исполнитель Робот умеет перемещаться по лабиринту, начерченному на плоскости, разбитой на клетки. 
            Между соседними (по сторонам) клетками может стоять стена, через которую Робот пройти не может.<br>
            У Робота есть девять команд. Четыре команды – это команды-приказы:<br>
            &emsp;<b>вверх   вниз   влево   вправо</b><br>
            При выполнении любой из этих команд Робот перемещается на одну клетку соответственно:<br> <b>вверх ↑, вниз ↓, влево ←, вправо →</b>. 
            Если Робот получит команду передвижения сквозь стену, то он разрушится.<br>
            Также у Робота есть команда <b>закрасить</b>. При её выполнении закрашивается клетка, в которой Робот находится в настоящий момент.
            Ещё четыре команды – это команды проверки условий. Эти команды проверяют, свободен ли путь для Робота в каждом из четырёх возможных направлений:<br>
            &emsp;<b>сверху свободно   снизу свободно   слева свободно   справа свободно</b><br>

            Эти команды можно использовать вместе с условием «<b>eсли</b>», имеющим следующий вид:<br>
            <b>если</b> условие <b>то</b><br>
            &emsp;последовательность команд<br>
            <b>все</b><br>
            Здесь условие – одна из команд проверки условия.<br>
            Последовательность команд – это одна или несколько любых команд-приказов.<br>
            Например, для передвижения на одну клетку <b>вправо</b>, если справа нет стенки, и закрашивания клетки можно использовать такой алгоритм:<br>
            <b>если</b> справа свободно <b>то</b><br>
            <b>&emsp;вправо</b><br>
            <b>&emsp;закрасить</b><br>
            <b>все</b><br>
            В одном условии можно использовать несколько команд проверки условий, применяя логические связки и, или, не, например:<br>
            <b>если</b> (справа свободно) <b>и</b> (не снизу свободно) <b>то</b><br>
            <b>&emsp;вправо</b><br>
            <b>все</b><br>
            Для повторения последовательности команд можно использовать цикл «<b>пока</b>», имеющий следующий вид:<br>
            <b>нц пока</b> условие<br>
            &emsp;последовательность команд<br>
            <b>кц</b><br>
            Например, для движения вправо, пока это возможно, можно использовать следующий алгоритм:<br>
            <b>нц пока</b> справа свободно<br>
            &emsp;вправо<br>
            <b>кц</b><br>
          </details>
          <hr class="hr-pd_20">
          `
          answerBlock += `<b><em>Выполните задание.</em></b><hr class="hr-pd_10">
          ${task1}<br>

          На рисунке указан один из возможных способов расположения стен и Робота (Робот обозначен буквой «Р»).
          <hr class="hr-pd_10">

          ${taskCounter === 950 || taskCounter === 1457 || taskCounter === 1499 || taskCounter === 1515 ? 
            `
          <img class="img-14" style="width: 15%;" src="../../../img/task15/task15_${taskCounter}_1.png"><hr class="hr-pd_10">

          ${task2}<hr class="hr-pd_10">

          <img class="img-14" style="width: 15%;" src="../../../img/task15/task15_${taskCounter}_2.png"><hr class="hr-pd_10">

          ${task3}<hr class="hr-pd_10">
            ` 
            :
            `
          <img class="img-14" src="../../../img/task15/task15_${taskCounter}_1.png"><hr class="hr-pd_10">

          ${task2}<hr class="hr-pd_10">

          <img class="img-14" src="../../../img/task15/task15_${taskCounter}_2.png"><hr class="hr-pd_10">

          ${task3}<hr class="hr-pd_10">
            
            `
          }

          Алгоритм может быть выполнен в среде формального исполнителя или записан в текстовом редакторе. 
          Сохраните алгоритм в формате программы Кумир или в текстовом файле. Название файла и каталог для сохранения Вам сообщат организаторы экзамена.
          `
          answerBlock += generateDate();
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
  
          return answerBlock
         }
    }
    if (taskKey === 'sixteen'){
      let Nomer = 16
      switch(typeTask){
        case 1:
          answerBlock += `<p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
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
            ${task4.length === 2 ? 
              `
              <tr>
              <td>${task4[0]}</td>
              <td>${task5[0]}</td>
            </tr>
            <tr>
              <td>${task4[1]}</td>
              <td>${task5[1]}</td>
            </tr>
              `
              : 
              `
              <tr>
                <td>${task4}</td>
                <td>${task5}</td>
              </tr>
              `

            }
            
          </table>
          `
          answerBlock += generateDate();
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
  
          return answerBlock
      
      }
    }
   
}
