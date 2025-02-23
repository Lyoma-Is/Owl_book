
export default function generateTaskHTML(taskKey, item) {
    let answerBlock = "";
    if (taskKey === 'one'){
      switch(item.typeTask){
         case 1:
            answerBlock += `
              <p class="p-num">№ ${item.taskCounter}</p>
              <p>${item.task1}</p>
              <hr class="hr-pd_20">
              <p><em>${item.task2}</em></p>
              <hr class="hr-pd_20">
              <p>${item.task3}</p>
              
              <p>${item.task4}</p>
              <hr class="hr-pd_20">
              <details>
                <summary class="p-num">Решение</summary>
                <hr class="hr-pd_10">
                <p>1) Один символ кодируется ${item.taskAnswer[1]} бит = ${item.taskAnswer[1]/8 < 2 ?  `${item.taskAnswer[1]/8} байт ` : `${item.taskAnswer[1]/8} байта`}</p> 
                <hr class="hr-pd_10">
                <p>2) ${item.taskAnswer[3] == "м" ? 
                `Вычеркнутое слово занимает ${item.taskAnswer[2]} байта</p> 
                <hr class="hr-pd_10"><p>3) Количество символов в слове ${item.taskAnswer[2]}/${item.taskAnswer[1]/8} = ${item.taskAnswer[2]/(item.taskAnswer[1]/8)} символов` : 
                `Добавленное слово занимает ${item.taskAnswer[2]} байта</p>
                <hr class="hr-pd_10"><p>3) Количество символов в слове ${item.taskAnswer[2]}/${item.taskAnswer[1]/8} = ${item.taskAnswer[2]/(item.taskAnswer[1]/8)} символов`} 
                </p> 
                <hr class="hr-pd_10">
                <p>4) C учетом пробела и запятой: ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))} - 2 = ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))-2} символа</p>
                <hr class="hr-pd_20">
                <p>Слово из ${(item.taskAnswer[2]/(item.taskAnswer[1]/8))-2} букв - ${item.taskAnswer[0]}.</p>
                <hr class="hr-pd_20">
                Ответ: <b>${item.taskAnswer[0]}</b>
              </details>  
              <hr class="hr-pd_20">
              <hr class="hr-between">
              <hr class="hr-pd_20">
            `; return answerBlock
         case 2:
            answerBlock += `
                <p class="p-num">№ ${item.taskCounter}</p>
                <p>${item.task1}</p>
                <hr class="hr-pd_20">
                <p>${item.task2}</p>
                <hr class="hr-pd_20">
                <p>${item.task3}</p>
                <p>${item.task4}</p>
                <hr class="hr-pd_20">
                <details>
                  <summary class="p-num">Решение</summary>
                  <hr class="hr-pd_10">
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
                  Ответ: <b>${item.taskAnswer[0]}</b>
                </details>  
                <hr class="hr-pd_20">
                <hr class="hr-between">
                <hr class="hr-pd_20">
              `; return answerBlock
          }
    }
    if (taskKey === 'ten'){  
      switch(item.typeTask){     
        case 1:
          answerBlock =`
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
          `; return answerBlock
        case 2:
          answerBlock =`
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
          `; return answerBlock
        case 3:
          let summaAns = 0;
          const num1 = parseInt(item.taskAnswer[0], 2);  // Двоичное число
          const num2 = parseInt(item.taskAnswer[1], 8);  // Восьмеричное число
          const num3 = parseInt(item.taskAnswer[2], 16); // Шестнадцатеричное число
  
          const operator1 = item.taskAnswer[3]; // Первый оператор
          const operator2 = item.taskAnswer[4]; // Второй оператор
  
          summaAns = num1 + (operator1 === "+" ? num2 : -num2) + (operator2 === "+" ? num3 : -num3);
          answerBlock =`
            <p class="p-num">№ ${item.taskCounter}</p>
            <p>${item.task}</p>
            <hr class="hr-pd_10">
            <span class="span-centr">${item.taskAnswer[0]}<sub>2</sub> ${item.taskAnswer[3]} ${item.taskAnswer[1]}<sub>8</sub> ${item.taskAnswer[4]} ${item.taskAnswer[2]}<sub>16</sub></span>
            <hr class="hr-pd_10">
            <p>${item.task2}</p>
            <hr class="hr-pd_20">
            <details>
              <summary class="p-num">Решение</summary>
              <hr class="hr-pd_10">
              ${item.taskAnswer[0]}<sub>2</sub> = ${parseInt(item.taskAnswer[0], 2)}<sub>10</sub>
              <hr class="hr-pd_10">
              ${item.taskAnswer[1]}<sub>8</sub> = ${parseInt(item.taskAnswer[1], 8)}<sub>10</sub>
              <hr class="hr-pd_10">
              ${item.taskAnswer[2]}<sub>16</sub> = ${parseInt(item.taskAnswer[2], 16)}<sub>10</sub>
              <hr class="hr-pd_20">
              ${num1} ${operator1} ${num2} ${operator2} ${num3} = ${summaAns}
              <hr class="hr-pd_20">
              Ответ: ${summaAns}
            </details>  
            <hr class="hr-pd_20">
            <hr class="hr-between">
            <hr class="hr-pd_20">
          `; return answerBlock
      } 
    }
}

// export default function generateTaskHTML(taskKey, item) {
//     if (!item || !taskKey) {
//         console.error("Некорректные данные: taskKey или item отсутствуют.");
//         return "<p>Ошибка: данные задачи отсутствуют.</p>";
//     }

//     // Общие функции для генерации HTML
//     const generateHeader = (taskCounter) => `<p class="p-num">№ ${taskCounter}</p>`;
//     const generateSolutionSummary = () => `
//         <details>
//             <summary class="p-num">Решение</summary>
//             <hr class="hr-pd_10">
//     `;
//     const generateFooter = () => `
//         </details>
//         <hr class="hr-pd_20">
//         <hr class="hr-between">
//         <hr class="hr-pd_20">
//     `;

//     let answerBlock = "";

//     if (taskKey === 'one') {
//         const { taskCounter, task1, task2, task3, task4, taskAnswer, typeTask } = item;

//         answerBlock += generateHeader(taskCounter);
//         answerBlock += `<p>${task1}</p><hr class="hr-pd_20">`;
//         answerBlock += `<p><em>${task2}</em></p><hr class="hr-pd_20">`;
//         answerBlock += `<p>${task3}</p><p>${task4}</p><hr class="hr-pd_20">`;

//         answerBlock += generateSolutionSummary();

//         const bitsToBytes = taskAnswer[1] / 8;
//         const bytesDescription = bitsToBytes < 2 ? `${bitsToBytes} байт` : `${bitsToBytes} байта`;

//         answerBlock += `
//             <p>1) Один символ кодируется ${taskAnswer[1]} бит = ${bytesDescription}</p>
//             <hr class="hr-pd_10">
//             <p>2) ${taskAnswer[3] === "м" ? 
//                 `Вычеркнутое слово занимает ${taskAnswer[2]} байта</p>` : 
//                 `Добавленное слово занимает ${taskAnswer[2]} байта</p>`}
//             <hr class="hr-pd_10">
//             <p>3) Количество символов в слове ${taskAnswer[2]} / ${bitsToBytes} = ${taskAnswer[2] / bitsToBytes} символов</p>
//             <hr class="hr-pd_10">
//             <p>4) C учетом ${typeTask === 1 ? "пробела и запятой" : "пробела"}: ${taskAnswer[2] / bitsToBytes} - ${typeTask === 1 ? 2 : 1} = ${(taskAnswer[2] / bitsToBytes) - (typeTask === 1 ? 2 : 1)} символа</p>
//             <hr class="hr-pd_20">
//             <p>Слово из ${(taskAnswer[2] / bitsToBytes) - (typeTask === 1 ? 2 : 1)} букв - ${taskAnswer[0]}.</p>
//             <hr class="hr-pd_20">
//             Ответ: <b>${taskAnswer[0]}</b>
//         `;

//         answerBlock += generateFooter();
//         return answerBlock;
//     }

//     if (taskKey === 'ten') {
//         const { taskCounter, task, task2, taskAnswer, typeTask } = item;

//         answerBlock += generateHeader(taskCounter);
//         answerBlock += `<p>${task}</p><hr class="hr-pd_20">`;

//         if (typeTask === 3) {
//             const num1 = parseInt(taskAnswer[0], 2);
//             const num2 = parseInt(taskAnswer[1], 8);
//             const num3 = parseInt(taskAnswer[2], 16);
//             const operator1 = taskAnswer[3];
//             const operator2 = taskAnswer[4];
//             const summaAns = num1 + (operator1 === "+" ? num2 : -num2) + (operator2 === "+" ? num3 : -num3);

//             answerBlock += `
//                 <span class="span-centr">${taskAnswer[0]}<sub>2</sub> ${operator1} ${taskAnswer[1]}<sub>8</sub> ${operator2} ${taskAnswer[2]}<sub>16</sub></span>
//                 <hr class="hr-pd_10">
//                 <p>${task2}</p>
//                 <hr class="hr-pd_20">
//             `;

//             answerBlock += generateSolutionSummary();
//             answerBlock += `
//                 ${taskAnswer[0]}<sub>2</sub> = ${num1}<sub>10</sub>
//                 <hr class="hr-pd_10">
//                 ${taskAnswer[1]}<sub>8</sub> = ${num2}<sub>10</sub>
//                 <hr class="hr-pd_10">
//                 ${taskAnswer[2]}<sub>16</sub> = ${num3}<sub>10</sub>
//                 <hr class="hr-pd_20">
//                 ${num1} ${operator1} ${num2} ${operator2} ${num3} = ${summaAns}
//                 <hr class="hr-pd_20">
//                 Ответ: ${summaAns}
//             `;
//         } else {
//             answerBlock += generateSolutionSummary();
//             answerBlock += `
//                 ${taskAnswer[0]}<sub>10</sub> = ${taskAnswer[1]}<sub>2</sub>
//                 <hr class="hr-pd_10">
//                 Ответ: ${taskAnswer[2]}
//             `;
//         }

//         answerBlock += generateFooter();
//         return answerBlock;
//     }

//     return "<p>Ошибка: неизвестный тип задачи.</p>";
// }