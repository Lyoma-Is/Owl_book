// const tasks = {
//   one: '/src/oge_inf/taskOne.json',
//   two: '/src/oge_inf/taskTwo.json',
//   ten: '/src/oge_inf/taskTen.json'
// };

const tasks = {
  one: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskOne.json',
  two: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTwo.json',
  ten: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTen.json'
};

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
             <hr class="hr-pd_20">`
          answerBlock += generateHeader();
          answerBlock += `
           <p>${item.taskAnswer[1]}</p>
           <hr class="hr-pd_20">
           <p><b>Ответ:</b> ${item.taskAnswer[0]}</p>
           <hr class="hr-pd_10">`;
          answerBlock += generateFooter(); 
          return answerBlock
      }
    }
}
