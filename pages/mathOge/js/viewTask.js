const tasks = {
  onefive: '../../src/oge_math/taskOneFive.json',
  six: '../../src/oge_math/taskSix.json',
  seven: '../../src/oge_math/taskSeven.json',
  eight: '../../src/oge_math/taskEight.json',
  nine: '../../src/oge_math/taskNine.json',
  ten: '../../src/oge_math/taskTen.json',
  eleven: '../../src/oge_math/taskEleven.json',
  twelve: '../../src/oge_math/taskTwelve.json',
  thirteen: '../../src/oge_math/taskThirteen.json',
  fourteen: '../../src/oge_math/taskFourteen.json',
  fifteen: '../../src/oge_math/taskFifteen.json',
  sixteen: '../../src/oge_math/taskSixteen.json',
  seventeen: '../../src/oge_math/taskSeventeen.json',
  eighteen: '../../src/oge_math/taskEighteen.json',
  nineteen: '../../src/oge_math/taskNineteen.json',
  twenty: '../../src/oge_math/taskTwenty.json',
  twentyone: '../../src/oge_math/taskTwentyOne.json',
  twentytwo: '../../src/oge_math/taskTwentyTwo.json',
  twentythree: '../../src/oge_math/taskTwentyThree.json',
  twentyfour: '../../src/oge_math/taskTwentyFour.json',
  twentyfive: '../../src/oge_math/taskTwentyFive.json'
};
 
export {tasks};

  // one: '../../../src/oge_inf/taskOne.json',
  // two: '../../../src/oge_inf/taskTwo.json',
  // three: '../../../src/oge_inf/taskThree.json',
  // four:  '../../../src/oge_inf/taskFour.json',
  // five: '../../../src/oge_inf/taskFive.json',

export default function generateTaskHTML(taskKey, item, tumbler = true) {
    const { date, taskNum, taskAn, task, task1, task2, task3, task4, task5, task6, task7, task8, task9, taskAuthor, taskTable, taskAnswer, typeTask, taskCounter, taskHard, taskTableV, taskTableS, taskKec} = item;
    const generateHard = () => `${taskHard === 0 ? "" : taskHard === 1 ? "<em>(Базовый)</em>": taskHard === 2 ? "<em>(Средний)</em>": taskHard === 3 ? "<em>(Сложный)</em>":""}` 
    const generateHeader = () => `<details><summary class="p-num resh print">Показать решение и ответ</summary><hr class="hr-pd_10">`;
    const generateFooter = () => `</details><hr class="hr-pd_20"><hr class="hr-between"><hr class="hr-pd_20">`;
    const generateFooter15 = () => `</details><hr class="hr-pd_20">`;

    // const generateDate = () => `${ tumbler ? !taskNum ? `<hr class="hr-pd_20">`: `<hr class="hr-pd_10"><p class="p-num" style="text-align: right;">Номер: ${taskNum}</p><hr class="hr-pd_10">` : `<hr class="hr-pd_20">`} `;
    //const generateDate = () => `${ !taskNum ? `<hr class="hr-pd_20">`: `<hr class="hr-pd_10"><p class="p-num print" style="text-align: right;">Номер: ${taskNum}</p><hr class="hr-pd_10">`} `;
    
    // <details><summary class="p-num resh print">Показать решение и ответ</summary><hr class="hr-pd_10"> </details><hr class="hr-pd_20"><hr class="hr-between"><hr class="hr-pd_20">
    const generateDate = () => `${ !taskNum ? `<hr class="hr-pd_20">`: `<hr class="hr-pd_10">
      <div class="text-inform" data-task-counter="${taskCounter}"><div class="inform-block"></div>
        ${ !taskKec ? ``:
          taskKec[2] === 1 ? 
          `<img id="text-inform-button" src="../../img/inform7.svg">`:
          taskKec[2] === 2 ? 
          `<img id="text-inform-button" src="../../img/inform8.svg">`:
          `<img id="text-inform-button" src="../../img/inform9.svg">` }
        <p class="p-num print" style="text-align: right;"> Номер: ${taskNum}</p>
        
      </div>
      <hr class="hr-pd_10">`} `;
   
    const generateAuthor = () => `${!taskAuthor ? "": `<em>${taskAuthor}</em>`}`
    const generateInput = () => ` <section class="answer-block"><p></p><input id="input_answer" class="input_answer" placeholder="Введите ответ"/></section>`;
    const generateInputP = () => `<input id="input_answer" class="input_answer" style="display: none;"></input>`
    const beginTask = () => `<div class="tasks-blocks">`;
    const endTask = () => `</div>`;
    let answerBlock = "";
 //   answerBlock += beginTask(); 
 //   answerBlock += endTask();
    function sqrtNum(item){
      return `<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">&thinsp;${item}&thinsp;</span>`
    }
    function drobNum(item1, item2){
       return `
          <math style="font-size: 140%">
            <mfrac >
              <mn style="padding-bottom: 5px;">${item1}</mn>
              <mn style="padding-top: 5px;">${item2}</mn>
            </mfrac>
          </math>   
       `
    }
    function supNum(item1, item2){
      return `
      <math>
        <msup>
          <mn>${item1}</mn>
          <mn>${item2}</mn>
        </msup>
      </math>  
      `
    }
    function sistemNum(item1, item2){
      return `
      <math style="font-size: 110%;">
            <mrow style="display: flex; align-items: center;">
            <mn  style="font-size: 250%; font-family: MathJax_Size3;">{</mn>
              <mtable style="vertical-align: middle; ">
                <mtr >
                  <mtd style="padding-bottom: 5px; text-align: left;">&thinsp;${item1},</mtd>
                </mtr>
                <mtr>
                  <mtd style="padding-top: 5px; text-align: left;">&thinsp;${item2}.</mtd>
                </mtr>
              </mtable>
            </mrow>
          </math>
      `
    }
    function rowNum(item1, item2){
      return `
      <math style="font-size: 140%;">
        <mfrac>
          <mrow >
            <mn>${item1}</mn> 
            <mn>${item2}</mn>
          </mrow>  
        </mfrac>
      </math>
      `
    }
    if (taskKey === 'onefive'){
      let Nomer = 1
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Прочитайте внимательно текст и выполните задания 1–5.
          <hr class="hr-pd_10">
          
            <table>
             <tr>
              <td><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task1/shina1.png"></td>
              <td> &thinsp; </td>
              <td><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task1/shina2.png"></td>
             </tr>
             <tr>
              <td>Рис. 1</td>
              <td> &thinsp; </td>
              <td>Рис. 2</td>
             </tr>
            </table>
            <hr class="hr-pd_10">
            Автомобильное колесо представляет из себя металлический диск с установленной на него резиновой шиной. 
            Диаметр диска совпадает с диаметром внутреннего отверстия в шине.
            <br>
            Для маркировки автомобильных шин применяется единая система обозначений. Например, 195/65 R15 (рис. 1).
            <br>
            Первое число (число 195 в приведённом примере) означает ширину шины в миллиметрах (размер B на рис. 2). 
            <br>
            Второе число (число 65 в приведённом примере) — высота боковины шины H в процентах от ширины шины (100 • H/B).<br>
            Например, шина с маркировкой 195/65 R15 имеет ширину B = 195 мм и высоту боковины  H = 195 • 0,65 = 126,75 (мм).
            <br>
            Буква R означает, что шина имеет радиальную конструкцию, то есть нити каркаса в боковине шины расположены вдоль радиусов колеса. 
            Такие шины применяются на всех легковых автомобилях.
            За буквой R следует диаметр диска d в дюймах (в одном дюйме 25,4 мм). 
            Таким образом, общий диаметр колеса D можно найти, зная диаметр диска и высоту боковины.
            <br>        
            ${task8}
            <hr class="hr-pd_20">
          ${task === 11 ? 
            `
            
            <b>Задание ${Nomer}</b>. Впишите правильный ответ. <br>
            Завод допускает установку шин с другими маркировками. В таблице показаны разрешённые размеры шин.
            <hr class="hr-pd_10">
            <table class="iksweb">
                <tr>
                  <td colspan="2" rowspan="2">Ширина шины (мм)</td>
                  <td colspan="3">Диаметр диска (дюймы)</td>
                </tr>
                <tr>
                  <td>${task1[0]}</td>
                  <td>${task1[1]}</td>
                  <td>${task1[2]}</td>
                </tr>
                <tr>
                  <td colspan="2">${task1[3]}</td>
                  <td>${task1[6]}</td>
                  <td>${task1[7]}</td>
                  <td>${task1[8]}</td>
                  
                </tr>
                <tr>
                  <td colspan="2">${task1[4]}</td>
                  <td>${task1[9]}</td>
                  <td>${task1[10]}</td>
                  <td>${task1[11]}</td>
             
                </tr>
                <tr>
                  <td colspan="2">${task1[5]}</td>
                  <td>${task1[12]}</td>
                  <td>${task1[13]}</td>
                  <td>${task1[14]}</td>
                  
                </tr>
            </table>
            <hr class="hr-pd_10">
            ${task9}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[0]}</b></p></div>             
          ` 
          : task === 12 ? 
            `

            <b>Задание ${Nomer}</b>. Впишите правильный ответ. <br>
            Завод допускает установку шин с другими маркировками. В таблице показаны разрешённые размеры шин.
            <hr class="hr-pd_10">
            <table class="iksweb">
                <tr>
                  <td colspan="3" rowspan="2">Ширина шины (мм)</td>
                  <td colspan="4">Диаметр диска (дюймы)</td>
                </tr>
                <tr>
                  <td>${task1[0]}</td>
                  <td>${task1[1]}</td>
                  <td>${task1[2]}</td>
                  <td>${task1[3]}</td>
                </tr>
                <tr>
                  <td colspan="3">${task1[4]}</td>
                  <td>${task1[7]}</td>
                  <td>${task1[8]}</td>
                  <td>${task1[9]}</td>
                  <td>${task1[10]}</td>
                  
                </tr>
                <tr>
                  <td colspan="3">${task1[5]}</td>
                  <td>${task1[11]}</td>
                  <td>${task1[12]}</td>
                  <td>${task1[13]}</td>
                  <td>${task1[14]}</td>
             
                </tr>
                <tr>
                  <td colspan="3">${task1[6]}</td>
                  <td>${task1[15]}</td>
                  <td>${task1[16]}</td>
                  <td>${task1[17]}</td>
                  <td>${task1[18]}</td>      
                </tr>
                
            </table>
            <hr class="hr-pd_10">
            ${task9}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[0]}</b></p></div>             
          ` 
          : task === 13 ? 
            `   
            <b>Задание ${Nomer}</b>. Впишите правильный ответ. <br>
            Завод допускает установку шин с другими маркировками. В таблице показаны разрешённые размеры шин.
            <hr class="hr-pd_10">
            <table class="iksweb">
                <tr>
                  <td colspan="2" rowspan="2">Ширина шины (мм)</td>
                  <td colspan="3">Диаметр диска (дюймы)</td>
                </tr>
                <tr>
                  <td>${task1[0]}</td>
                  <td>${task1[1]}</td>
                  <td>${task1[2]}</td>
                </tr>
                <tr>
                  <td colspan="2">${task1[3]}</td>
                  <td>${task1[7]}</td>
                  <td>${task1[8]}</td>
                  <td>${task1[9]}</td>
                  
                </tr>
                <tr>
                  <td colspan="2">${task1[4]}</td>
                  <td>${task1[10]}</td>
                  <td>${task1[11]}</td>
                  <td>${task1[12]}</td>
             
                </tr>
                <tr>
                  <td colspan="2">${task1[5]}</td>
                  <td>${task1[13]}</td>
                  <td>${task1[14]}</td>
                  <td>${task1[15]}</td>
                  
                </tr>
                <tr>
                  <td colspan="2">${task1[6]}</td>
                  <td>${task1[16]}</td>
                  <td>${task1[17]}</td>
                  <td>${task1[18]}</td>
                  
                </tr>
            </table>
            <hr class="hr-pd_10">
            ${task9}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[0]}</b></p></div>             
          ` 
          : task === 14 ? 
            `   
            <b>Задание ${Nomer}</b>. Впишите правильный ответ. <br>
            Завод допускает установку шин с другими маркировками. В таблице показаны разрешённые размеры шин.
            <hr class="hr-pd_10">
            <table class="iksweb">
                <tr>
                  <td colspan="2" rowspan="2">Ширина шины (мм)</td>
                  <td colspan="3">Диаметр диска (дюймы)</td>
                </tr>
                <tr>
                  <td>${task1[0]}</td>
                  <td>${task1[1]}</td>
                  <td>${task1[2]}</td>
                </tr>
                <tr>
                  <td colspan="2">${task1[3]}</td>
                  <td>${task1[8]}</td>
                  <td>${task1[9]}</td>
                  <td>${task1[10]}</td>      
                </tr>
                <tr>
                  <td colspan="2">${task1[4]}</td>
                  <td>${task1[11]}</td>
                  <td>${task1[12]}</td>
                  <td>${task1[13]}</td>
                </tr>
                <tr>
                  <td colspan="2">${task1[5]}</td>
                  <td>${task1[14]}</td>
                  <td>${task1[15]}</td>
                  <td>${task1[16]}</td>  
                </tr>
                <tr>
                  <td colspan="2">${task1[6]}</td>
                  <td>${task1[17]}</td>
                  <td>${task1[18]}</td>
                  <td>${task1[19]}</td>       
                </tr>
                <tr>
                  <td colspan="2">${task1[7]}</td>
                  <td>${task1[20]}</td>
                  <td>${task1[21]}</td>
                  <td>${task1[22]}</td>          
                </tr>
            </table>
            <hr class="hr-pd_10">
            ${task9}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[0]}</b></p></div>             
          ` 
          : task === 15 ? 
            `   
            <b>Задание ${Nomer}</b>. Впишите правильный ответ. <br>
            Завод допускает установку шин с другими маркировками. В таблице показаны разрешённые размеры шин.
            <hr class="hr-pd_10">
            <table class="iksweb">
                <tr>
                  <td colspan="3" rowspan="2">Ширина шины (мм)</td>
                  <td colspan="4">Диаметр диска (дюймы)</td>
                </tr>
                <tr>
                  <td>${task1[0]}</td>
                  <td>${task1[1]}</td>
                  <td>${task1[2]}</td>
                  <td>${task1[3]}</td>
                </tr>
                <tr>
                  <td colspan="3">${task1[4]}</td>
                  <td>${task1[9]}</td>
                  <td>${task1[10]}</td>
                  <td>${task1[11]}</td>  
                  <td>${task1[12]}</td>    
                </tr>
                <tr>
                  <td colspan="3">${task1[5]}</td>
                  <td>${task1[13]}</td>
                  <td>${task1[14]}</td>
                  <td>${task1[15]}</td>
                  <td>${task1[16]}</td>
                </tr>
                <tr>
                  <td colspan="3">${task1[6]}</td>
                  <td>${task1[17]}</td>
                  <td>${task1[18]}</td>
                  <td>${task1[19]}</td>  
                  <td>${task1[20]}</td>
                </tr>
                <tr>
                  <td colspan="3">${task1[7]}</td>
                  <td>${task1[21]}</td>
                  <td>${task1[22]}</td>
                  <td>${task1[23]}</td>  
                  <td>${task1[24]}</td>     
                </tr>
                
            </table>
            <hr class="hr-pd_10">
            ${task9}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[0]}</b></p></div>             
          ` 
          : task === 16 ? 
            `   
            <b>Задание ${Nomer}</b>. Впишите правильный ответ. <br>
            Завод допускает установку шин с другими маркировками. В таблице показаны разрешённые размеры шин.
            <hr class="hr-pd_10">
            <table class="iksweb">
                <tr>
                  <td colspan="3" rowspan="2">Ширина шины (мм)</td>
                  <td colspan="4">Диаметр диска (дюймы)</td>
                </tr>
                <tr>
                  <td>${task1[0]}</td>
                  <td>${task1[1]}</td>
                  <td>${task1[2]}</td>
                  <td>${task1[3]}</td>
                </tr>
                <tr>
                  <td colspan="3">${task1[4]}</td>
                  <td>${task1[9]}</td>
                  <td>${task1[10]}</td>
                  <td>${task1[11]}</td>  
                  <td>${task1[12]}</td>    
                </tr>
                <tr>
                  <td colspan="3">${task1[5]}</td>
                  <td>${task1[13]}</td>
                  <td>${task1[14]}</td>
                  <td>${task1[15]}</td>
                  <td>${task1[16]}</td>
                </tr>
                <tr>
                  <td colspan="3">${task1[6]}</td>
                  <td>${task1[17]}</td>
                  <td>${task1[18]}</td>
                  <td>${task1[19]}</td>  
                  <td>${task1[20]}</td>
                </tr>
                <tr>
                  <td colspan="3">${task1[7]}</td>
                  <td>${task1[21]}</td>
                  <td>${task1[22]}</td>
                  <td>${task1[23]}</td>  
                  <td>${task1[24]}</td>     
                </tr>
                <tr>
                  <td colspan="3">${task1[8]}</td>
                  <td>${task1[25]}</td>
                  <td>${task1[26]}</td>
                  <td>${task1[27]}</td>  
                  <td>${task1[28]}</td>     
                </tr>
                
            </table>
            <hr class="hr-pd_10">
            ${task9}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[0]}</b></p></div>             
          ` 
          :
          ``}

          
          `
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[0]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`


          // 2
          answerBlock +=`
          <b>Задание ${Nomer+1}</b>. Впишите правильный ответ. 
          <hr class="hr-pd_10">          
           ${task2}
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[1]}</b></p></div>         
          ` 
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[1]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`


          // 3
          answerBlock +=`   
            <b>Задание ${Nomer+2}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task3}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[2]}</b></p></div>         
            ` 
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[2]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`


          // 4
          answerBlock +=`
            <b>Задание ${Nomer+3}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task4}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[3]}</b></p></div>            
          `
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[3]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`


          // 5
          answerBlock +=`
            <b>Задание ${Nomer+4}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task5}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[4]}</b></p></div> 
      
          `
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[4]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          
          answerBlock += generateDate();
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
          return answerBlock
        case 2:
          answerBlock += `
          <p class="p-num">№ ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Прочитайте внимательно текст и выполните задания 1–5.
          <hr class="hr-pd_10">
          Хозяин дачного участка строит баню с парным отделением. Парное отделение имеет размеры: длина 3,5 м, ширина 2,2 м, высота 2 м. 
          Окон в парном отделении нет, для доступа внутрь планируется дверь шириной 60 см, высота дверного проёма 1,8 м. 
          Для прогрева парного отделения можно использовать электрическую или дровяную печь. В таблице представлены характеристики трёх печей.
          <hr class="hr-pd_10">
          <table class="iksweb">
                <tr>
                  <td>${task1[0]}</td>
                  <td>${task1[1]}</td>
                  <td>${task1[2]}</td>
                  <td>${task1[3]}</td>
                  <td>${task1[4]}</td>
                </tr>
                <tr>
                  <td>${task1[5]}</td>
                  <td>${task1[6]}</td>
                  <td>${task1[7]}</td>
                  <td>${task1[8]}</td>
                  <td>${task1[9]}</td>
                  
                </tr>
                <tr>
                  <td>${task1[10]}</td>
                  <td>${task1[11]}</td>
                  <td>${task1[12]}</td>
                  <td>${task1[13]}</td>
                  <td>${task1[14]}</td>
             
                </tr>
                <tr>
                  <td>${task1[15]}</td>
                  <td>${task1[16]}</td>
                  <td>${task1[17]}</td>
                  <td>${task1[18]}</td>   
                  <td>${task1[19]}</td>  
                </tr>
                
            </table>
            <hr class="hr-pd_10">
            Для установки дровяной печи дополнительных затрат не потребуется. 
            Установка электрической печи потребует подведения специального кабеля, что обойдётся в 6500 руб.
            <hr class="hr-pd_20">
          `
          // 1
          answerBlock +=` 
            <b>Задание ${Nomer}</b>. Впишите правильный ответ. 
            <hr class="hr-pd_10"> 
            ${task9}
            <hr class="hr-pd_10">
            Заполните таблицу, в бланк ответов перенесите последовательность трёх цифр без пробелов, запятых и других дополнительных символов.
            <hr class="hr-pd_10">
            <table class="iksweb">
                <tr>
                  <td>${task8[0]}</td>
                  <td>${task8[1]}</td>
                  <td>${task8[2]}</td>
                  <td>${task8[3]}</td>            
                </tr>
                <tr>
                  <td>${task8[4]}</td>
                  <td>${task8[5]}</td>
                  <td>${task8[6]}</td>
                  <td>${task8[7]}</td>
                </tr>            
            </table>
            
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[0]}</b></p></div> `
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[0]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`

          // 2
          answerBlock +=`
          <b>Задание ${Nomer+1}</b>. Впишите правильный ответ. 
          <hr class="hr-pd_10">          
           ${task2}
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[1]}</b></p></div>         
          ` 
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[1]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`

          // 3
          answerBlock +=`   
            <b>Задание ${Nomer+2}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task3}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[2]}</b></p></div>         
            ` 
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[2]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`


          // 4
          answerBlock +=`
            <b>Задание ${Nomer+3}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task4}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[3]}</b></p></div>            
          `
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[3]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`


          // 5
          answerBlock +=`
            <b>Задание ${Nomer+4}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            Хозяин выбрал дровяную печь (рис. 1). Чертёж передней панели печи показан на рисунке 2.
            <hr class="hr-pd_20">
            <table>
             <tr>
              <td><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task1/pech1.png"></td>
              <td> &thinsp; </td>
              <td> &thinsp; </td>
              <td> &thinsp; </td>
              <td><img style="display: block;  width: 22em; " src="../../pages/mathOge/img/task1/pech2_${taskCounter}.png"></td>
             </tr>
             <tr>
              <td>Рис. 1</td>
              <td> &thinsp; </td>
              <td> &thinsp; </td>
              <td> &thinsp; </td>
              <td>Рис. 2</td>
             </tr>
            </table>
            <hr class="hr-pd_20">
            Печь снабжена кожухом вокруг дверцы топки. 
            Верхняя часть кожуха выполнена в виде арки, приваренной к передней стенке печки по дуге окружности с центром
            в середине нижней части кожуха (рис. 2).<br>
            Для установки печки хозяину понадобилось узнать радиус закругления арки R. 
            Размеры кожуха в сантиметрах показаны на рисунке. Найдите радиус закругления арки в сантиметрах.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[4]}</b></p></div> 
            
          `
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[4]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          }
          answerBlock += generateDate();
        
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
          return answerBlock
        case 3:
          answerBlock += `
          <p class="p-num">№ ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Прочитайте внимательно текст и выполните задания 1–5.
          <hr class="hr-pd_10">
          Общепринятые форматы листов бумаги обозначают буквой А и цифрой: А0, А1, А2 и так далее. 
          Лист формата А0 имеет форму прямоугольника площадью 1 кв. м. Если лист формата А0 разрезать пополам параллельно меньшей стороне, получатся два одинаковых листа формата А1. 
          Если лист А1 разрезать пополам таким же образом, получатся два листа формата А2 и т.д.
          <hr class="hr-pd_10">
          <img style="display: block;  width: 22em; " src="../../pages/mathOge/img/task1/list.png">
          <hr class="hr-pd_10">
          Отношение большей стороны к меньшей стороне листа каждого формата одно и то же, поэтому листы всех форматов подобны. 
          Это нужно, чтобы пропорции текста и его расположение на листе сохранялись при изменении формата листа.
          <hr class="hr-pd_20">
          `
          // 1
          answerBlock +=` 
            <b>Задание ${Nomer}</b>. Впишите правильный ответ. 
            <hr class="hr-pd_10"> 
            ${task9}
            <hr class="hr-pd_10">
            <table class="iksweb">
                <tr>
                  <td>${task1[0]}</td>
                  <td>${task1[1]}</td>
                  <td>${task1[2]}</td>            
                </tr>
                <tr>
                  <td>${task1[3]}</td>
                  <td>${task1[4]}</td>
                  <td>${task1[5]}</td>
                </tr>
                <tr>
                  <td>${task1[6]}</td>
                  <td>${task1[7]}</td>
                  <td>${task1[8]}</td>
                </tr>
                <tr>
                  <td>${task1[9]}</td>
                  <td>${task1[10]}</td>
                  <td>${task1[11]}</td>
                </tr>
                <tr>
                  <td>${task1[12]}</td>
                  <td>${task1[13]}</td>
                  <td>${task1[14]}</td>
                </tr>            
            </table>
            <hr class="hr-pd_20">
            Установите соответствие между форматами и номерами листов. Заполните таблицу, в бланк ответов перенесите последовательность 
            четырёх цифр, соответствующих номерам листов, без пробелов, запятых и дополнительных символов.
            <hr class="hr-pd_20">
            <table class="iksweb" style="width: 60%; text-align: center;">
                <tr>
                  <td style="width: 5%;">${task8[0]}</td>
                  <td style="width: 5%;">${task8[1]}</td>
                  <td style="width: 5%;">${task8[2]}</td>  
                  <td style="width: 5%;">${task8[3]}</td>           
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td> 
                </tr>         
            </table>
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[0]}</b></p></div> `
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[0]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`

          // 2
          answerBlock +=`
          <b>Задание ${Nomer+1}</b>. Впишите правильный ответ. 
          <hr class="hr-pd_10">          
           ${task2}
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[1]}</b></p></div>         
          ` 
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[1]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`

          // 3
          answerBlock +=`   
            <b>Задание ${Nomer+2}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task3}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[2]}</b></p></div>         
            ` 
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[2]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`


          // 4
          answerBlock +=`
            <b>Задание ${Nomer+3}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task4}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[3]}</b></p></div>            
          `
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[3]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`


          // 5
          answerBlock +=`
            <b>Задание ${Nomer+4}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task5}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[4]}</b></p></div> 
            
          `
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[4]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          }
          answerBlock += generateDate();
        
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
          return answerBlock
        case 4:
          answerBlock += `
          <p class="p-num">№ ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Прочитайте внимательно текст и выполните задания 1–5.
          <hr class="hr-pd_10">
          <img style="display: block;  width: 100%; " src="../../pages/mathOge/img/task1/float1.png">
          <hr class="hr-pd_10">
          На рисунке изображён план двухкомнатной квартиры в многоэтажном жилом доме. 
          Сторона одной клетки на плане соответствует 0,4 м, а условные обозначения двери и окна приведены в правой части рисунка.
          Вход в квартиру находится в коридоре. Слева от входа в квартиру находится санузел, а в противоположном конце коридора — дверь в кладовую. 
          Рядом с кладовой находится спальня, из которой можно пройти на одну из застеклённых лоджий. 
          Самое большое по площади помещение — гостиная, откуда можно попасть в коридор и на кухню. 
          Из кухни также можно попасть на застеклённую лоджию.
          <hr class="hr-pd_20">
          `
          // 1
          answerBlock +=` 
            <b>Задание ${Nomer}</b>. Впишите правильный ответ. 
            <hr class="hr-pd_10"> 
            Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. 
            Заполните таблицу, в бланк перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.
            <hr class="hr-pd_10">
            <table class="iksweb">
                <tr>
                  <td>${task1[0]}</td>
                  <td>${task1[1]}</td>
                  <td>${task1[2]}</td> 
                  <td>${task1[3]}</td>
                  <td>${task1[4]}</td>           
                </tr>
                <tr>     
                  <td>${task1[5]}</td>
                  <td>${task1[6]}</td>
                  <td>${task1[7]}</td>
                  <td>${task1[8]}</td>
                  <td>${task1[9]}</td>
                </tr>             
            </table>
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[0]}</b></p></div> 
            `
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[0]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`

          // 2
          answerBlock +=`
          <b>Задание ${Nomer+1}</b>. Впишите правильный ответ. 
          <hr class="hr-pd_10">          
           ${task2}
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[1]}</b></p></div>         
          ` 
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[1]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`

          // 3
          answerBlock +=`   
            <b>Задание ${Nomer+2}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task3}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[2]}</b></p></div>         
            ` 
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[2]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`


          // 4
          answerBlock +=`
            <b>Задание ${Nomer+3}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task4}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[3]}</b></p></div>            
          `
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[3]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`


          // 5
          answerBlock +=`
            <b>Задание ${Nomer+4}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task === 41 ? 
              `
               ${task8}
            <hr class="hr-pd_10">
            <table class="iksweb" style="width: 95%; font-size: 1em;">
                <tr>
                    <td >Модель</td>
                    <td >Вместимость барабана (кг)</td>
                    <td > Тип загрузки</td>
                    <td >Стоимость (руб.)</td>
                    <td >Стоимость подключения (руб.)</td>
                    <td >Стоимость доставки (%) от стоимости машины</td>
                    <td >Габариты (высота × ширина × глубина, см)</td>
                </tr>
                <tr >
                    <td >A</td>
                    <td>7</td>
                    <td>верт.</td>
                    <td>28 000</td>
                    <td>1 700</td>
                    <td>бесплатно</td>
                    <td>85×60×45</td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>5</td>
                    <td>фронт.</td>
                    <td>24 000</td>
                    <td>4 500</td>
                    <td>10</td>
                    <td>85×60×40</td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>5</td>
                    <td>фронт.</td>
                    <td>25 000</td>
                    <td>5 000</td>
                    <td>10</td>
                    <td>85×60×40</td>
                </tr>
                <tr>
                    <td>Г</td>
                    <td>6,5</td>
                    <td>фронт.</td>
                    <td>24 000</td>
                    <td>4 500</td>
                    <td>10</td>
                    <td>85×60×44</td>
                </tr>
                <tr>
                    <td>Д</td>
                    <td>6</td>
                    <td>фронт.</td>
                    <td>28 000</td>
                    <td>1 700</td>
                    <td>бесплатно</td>
                    <td>85×60×45</td>
                </tr>
                <tr>
                    <td>Е</td>
                    <td>6</td>
                    <td>верт.</td>
                    <td>27 600</td>
                    <td>2 300</td>
                    <td>бесплатно</td>
                    <td>89×60×40</td>
                </tr>
                <tr>
                    <td>Ж</td>
                    <td>6</td>
                    <td>верт.</td>
                    <td>27 585</td>
                    <td>1 900</td>
                    <td>10</td>
                    <td>89×60×40</td>
                </tr>
                <tr>
                    <td>З</td>
                    <td>6</td>
                    <td>фронт.</td>
                    <td>20 000</td>
                    <td>6 300</td>
                    <td>15</td>
                    <td>85×60×42</td>
                </tr>
                <tr>
                    <td>И</td>
                    <td>5</td>
                    <td>фронт.</td>
                    <td>27 000</td>
                    <td>1 800</td>
                    <td>бесплатно</td>
                    <td>85×60×40</td>
                </tr>
                <tr>
                    <td>К</td>
                    <td>5</td>
                    <td>верт.</td>
                    <td>27 000</td>
                    <td>1 800</td>
                    <td>бесплатно</td>
                    <td>85×60×40</td>
                </tr>
        </table>
        <hr class="hr-pd_20">
             ${task5}
              ` 
              : task === 42 ? 
              `
               ${task8}
            <hr class="hr-pd_10">
            <table class="iksweb" style="width: 95%; font-size: 1em;">
                <tr>
                    <td >Модель</td>
                    <td >Вместимость барабана (кг)</td>
                    <td > Тип загрузки</td>
                    <td >Стоимость (руб.)</td>
                    <td >Стоимость подключения (руб.)</td>
                    <td >Стоимость доставки (%) от стоимости машины</td>
                    <td >Габариты (высота × ширина × глубина, см)</td>
                </tr>
                <tr >
                    <td >A</td>
                    <td>7</td>
                    <td>верт.</td>
                    <td>28 000</td>
                    <td>1 700</td>
                    <td>бесплатно</td>
                    <td>85×60×45</td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>5</td>
                    <td>фронт.</td>
                    <td>24 000</td>
                    <td>4 500</td>
                    <td>10</td>
                    <td>85×60×40</td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>5</td>
                    <td>фронт.</td>
                    <td>25 000</td>
                    <td>5 000</td>
                    <td>10</td>
                    <td>85×60×40</td>
                </tr>
                <tr>
                    <td>Г</td>
                    <td>6,5</td>
                    <td>фронт.</td>
                    <td>24 000</td>
                    <td>4 500</td>
                    <td>10</td>
                    <td>85×60×44</td>
                </tr>
                <tr>
                    <td>Д</td>
                    <td>6</td>
                    <td>фронт.</td>
                    <td>28 000</td>
                    <td>1 700</td>
                    <td>бесплатно</td>
                    <td>85×60×45</td>
                </tr>
                <tr>
                    <td>Е</td>
                    <td>6</td>
                    <td>верт.</td>
                    <td>27 600</td>
                    <td>2 300</td>
                    <td>бесплатно</td>
                    <td>89×60×40</td>
                </tr>
                <tr>
                    <td>Ж</td>
                    <td>6</td>
                    <td>верт.</td>
                    <td>27 585</td>
                    <td>1 900</td>
                    <td>10</td>
                    <td>89×60×40</td>
                </tr>
                <tr>
                    <td>З</td>
                    <td>6</td>
                    <td>фронт.</td>
                    <td>20 000</td>
                    <td>6 300</td>
                    <td>15</td>
                    <td>85×60×42</td>
                </tr>
                <tr>
                    <td>И</td>
                    <td>5</td>
                    <td>фронт.</td>
                    <td>27 000</td>
                    <td>1 800</td>
                    <td>бесплатно</td>
                    <td>85×60×40</td>
                </tr>
                <tr>
                    <td>К</td>
                    <td>5</td>
                    <td>верт.</td>
                    <td>27 000</td>
                    <td>1 800</td>
                    <td>10</td>
                    <td>85×60×40</td>
                </tr>
        </table>
        <hr class="hr-pd_20">
             ${task5}
              ` 
              : task === 43 ? 
              `
               ${task8}
            <hr class="hr-pd_10">
            <table class="iksweb" style="width: 95%; font-size: 1em;">
                <tr>
                    <td>Тарифный план</td>
                    <td>Абонентская плата</td>
                    <td>Плата за трафик</td>
                </tr>
                <tr>
                    <td>${task9[0]}</td>
                    <td>${task9[1]}</td>
                    <td>${task9[2]}</td>
                </tr>
                <tr >
                    <td>${task9[3]}</td>
                    <td>${task9[4]}</td>
                    <td>${task9[5]}</td>
                </tr>
                <tr>
                    <td>${task9[6]}</td>
                    <td>${task9[7]}</td>
                    <td>${task9[8]}</td>
                </tr>
         
        </table>
        <hr class="hr-pd_20">
             ${task5}
              ` 
              :
              ``}
           
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[4]}</b></p></div> 
            
          `
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[4]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          }
          answerBlock += generateDate();
        
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
          return answerBlock
        case 5:
          answerBlock += `
          <p class="p-num">№ ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Прочитайте внимательно текст и выполните задания 1–5.
          <hr class="hr-pd_10">
          ${task === 51 ? 
            `
            <img style="display: block;  width: 95%; " src="../../pages/mathOge/img/task1/dacha1.png">
           <hr class="hr-pd_20">
            На плане изображён дачный участок по адресу: п. Сосновка, ул. Зелёная, д. 19 (сторона каждой клетки на плане равна 2 м). 
            Участок имеет прямоугольную форму. Выезд и въезд осуществляются через единственные ворота.
            При входе на участок слева от ворот находится гараж. Справа от ворот находится сарай площадью 24 кв. м, а чуть подальше — жилой дом. 
            Напротив жилого дома расположены яблоневые посадки. Также на участке есть баня, к которой ведёт дорожка, выложенная плиткой, и огород с теплицей внутри (огород отмечен на плане цифрой 6).
            Все дорожки внутри участка имеют ширину 1 м и вымощены тротуарной плиткой размером 1 м × 1 м. Между гаражом и сараем находится площадка, вымощенная такой же плиткой.
            К участку подведено электричество. Имеется магистральное газоснабжение.

            ` 
            : 
            ``}   
          <hr class="hr-pd_20">
          `
          // 1
          answerBlock +=` 
            <b>Задание ${Nomer}</b>. Впишите правильный ответ. 
            <hr class="hr-pd_10"> 
            Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. 
            Заполните таблицу, в бланк перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.
            <hr class="hr-pd_10">
            <table class="iksweb">
                <tr>
                  <td>${task1[0]}</td>
                  <td>${task1[1]}</td>
                  <td>${task1[2]}</td> 
                  <td>${task1[3]}</td>
                  <td>${task1[4]}</td>           
                </tr>
                <tr>     
                  <td>${task1[5]}</td>
                  <td>${task1[6]}</td>
                  <td>${task1[7]}</td>
                  <td>${task1[8]}</td>
                  <td>${task1[9]}</td>
                </tr>             
            </table>
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[0]}</b></p></div> 
            `
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[0]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`

          // 2
          answerBlock +=`
          <b>Задание ${Nomer+1}</b>. Впишите правильный ответ. 
          <hr class="hr-pd_10">          
           ${task2}
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[1]}</b></p></div>         
          ` 
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[1]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`

          // 3
          answerBlock +=`   
            <b>Задание ${Nomer+2}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task3}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[2]}</b></p></div>         
            ` 
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[2]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`


          // 4
          answerBlock +=`
            <b>Задание ${Nomer+3}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task4}
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[3]}</b></p></div>            
          `
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[3]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`


          // 5
          answerBlock +=`
            <b>Задание ${Nomer+4}</b>. Впишите правильный ответ.
            <hr class="hr-pd_10">
            ${task === 51 ? 
              `
               ${task8}
            <hr class="hr-pd_10">
            <table class="iksweb" style="width: 95%; font-size: 1em; text-align: left;">
                <tr>
                    <td></td>
                    <td>Нагреватель (котёл)</td>
                    <td>Прочее оборудование и монтаж</td>
                    <td>Средн. расход газа / средн. потребл. мощность</td>
                    <td>Стоимость газа / электроэнергии</td>
                </tr>
                <tr>
                    <td>Газовое отопление</td>
                    <td>${task9[0]}</td>
                    <td>${task9[1]}</td>
                    <td>${task9[2]}</td>
                    <td>${task9[3]}</td>
                </tr>
                <tr>
                    <td>Электр. отопление</td>
                    <td>${task9[4]}</td>
                    <td>${task9[5]}</td>
                    <td>${task9[6]}</td>
                    <td>${task9[7]}</td>
                </tr>
        </table>
        <hr class="hr-pd_20">
             ${task5}
              ` 
              : task === 42 ? 
              `
               ${task8}
            <hr class="hr-pd_10">
            <table class="iksweb" style="width: 95%; font-size: 1em;">
                <tr>
                    <td >Модель</td>
                    <td >Вместимость барабана (кг)</td>
                    <td > Тип загрузки</td>
                    <td >Стоимость (руб.)</td>
                    <td >Стоимость подключения (руб.)</td>
                    <td >Стоимость доставки (%) от стоимости машины</td>
                    <td >Габариты (высота × ширина × глубина, см)</td>
                </tr>
                <tr >
                    <td >A</td>
                    <td>7</td>
                    <td>верт.</td>
                    <td>28 000</td>
                    <td>1 700</td>
                    <td>бесплатно</td>
                    <td>85×60×45</td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>5</td>
                    <td>фронт.</td>
                    <td>24 000</td>
                    <td>4 500</td>
                    <td>10</td>
                    <td>85×60×40</td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>5</td>
                    <td>фронт.</td>
                    <td>25 000</td>
                    <td>5 000</td>
                    <td>10</td>
                    <td>85×60×40</td>
                </tr>
                <tr>
                    <td>Г</td>
                    <td>6,5</td>
                    <td>фронт.</td>
                    <td>24 000</td>
                    <td>4 500</td>
                    <td>10</td>
                    <td>85×60×44</td>
                </tr>
                <tr>
                    <td>Д</td>
                    <td>6</td>
                    <td>фронт.</td>
                    <td>28 000</td>
                    <td>1 700</td>
                    <td>бесплатно</td>
                    <td>85×60×45</td>
                </tr>
                <tr>
                    <td>Е</td>
                    <td>6</td>
                    <td>верт.</td>
                    <td>27 600</td>
                    <td>2 300</td>
                    <td>бесплатно</td>
                    <td>89×60×40</td>
                </tr>
                <tr>
                    <td>Ж</td>
                    <td>6</td>
                    <td>верт.</td>
                    <td>27 585</td>
                    <td>1 900</td>
                    <td>10</td>
                    <td>89×60×40</td>
                </tr>
                <tr>
                    <td>З</td>
                    <td>6</td>
                    <td>фронт.</td>
                    <td>20 000</td>
                    <td>6 300</td>
                    <td>15</td>
                    <td>85×60×42</td>
                </tr>
                <tr>
                    <td>И</td>
                    <td>5</td>
                    <td>фронт.</td>
                    <td>27 000</td>
                    <td>1 800</td>
                    <td>бесплатно</td>
                    <td>85×60×40</td>
                </tr>
                <tr>
                    <td>К</td>
                    <td>5</td>
                    <td>верт.</td>
                    <td>27 000</td>
                    <td>1 800</td>
                    <td>10</td>
                    <td>85×60×40</td>
                </tr>
        </table>
        <hr class="hr-pd_20">
             ${task5}
              ` 
              : task === 43 ? 
              `
               ${task8}
            <hr class="hr-pd_10">
            <table class="iksweb" style="width: 95%; font-size: 1em;">
                <tr>
                    <td>Тарифный план</td>
                    <td>Абонентская плата</td>
                    <td>Плата за трафик</td>
                </tr>
                <tr>
                    <td>${task9[0]}</td>
                    <td>${task9[1]}</td>
                    <td>${task9[2]}</td>
                </tr>
                <tr >
                    <td>${task9[3]}</td>
                    <td>${task9[4]}</td>
                    <td>${task9[5]}</td>
                </tr>
                <tr>
                    <td>${task9[6]}</td>
                    <td>${task9[7]}</td>
                    <td>${task9[8]}</td>
                </tr>
         
        </table>
        <hr class="hr-pd_20">
             ${task5}
              ` 
              :
              ``}
           
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; font-size: 0.7em;"><p></p><p><b>${task6[4]}</b></p></div> 
            
          `
         answerBlock += generateHeader();
         answerBlock += `
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer[4]}</b>`;
          answerBlock += generateFooter15();
          if(tumbler === false){
            answerBlock += generateInput();
          }
          answerBlock += generateDate();
        
          answerBlock += `<hr class="hr-between"><hr class="hr-pd_20">`
          return answerBlock
        }
          
    } 
    if (taskKey === 'six'){
      let Nomer = 6
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task2 ? 
            `Найдите значение выражения:&thinsp; ${drobNum(task2[0], task2[1])}` 
            : 
            `Найдите значение выражения:&thinsp; ${task1}`}`
          
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
          ${task === 22 ? 
            `
          Найдите значение выражения:&thinsp; 
          ${drobNum(task1[0], task1[1])}
          &thinsp;${task1[4]}&thinsp;
          ${drobNum(task1[2], task1[3])}<hr class="hr-pd_20">

          Представьте полученный результат в виде несократимой обыкновенной дроби. В ответ запишите числитель этой дроби.
            `
            : task === 23 ? 
            `
          Представьте выражение:&thinsp; 
          ${drobNum(task1[0], task1[1])}
          ${task1[4]}
          ${drobNum(task1[2], task1[3])}
          в виде дроби со знаменателем ${task1[5]}. В ответ запишите числитель полученной дроби.
          <hr class="hr-pd_20">
          `
            : 
          `
          Найдите значение выражения:&thinsp; 
          ${drobNum(task1[0], task1[1])}
          &thinsp;${task1[4]}&thinsp;
          ${drobNum(task1[2], task1[3])}`}


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
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task1}<hr class="hr-pd_10">
          <img style="display: block; margin: 0 auto; width: 70%;" src="../../pages/mathOge/img/task7/7_${taskCounter}.png"><hr class="hr-pd_20">
          ${task2}<hr class="hr-pd_30">
          <div style="display: flex; justify-content: space-around;">
            <p>${task3[0]}</p>
            <p>${task3[1]}</p>
            <p>${task3[2]}</p>
            <p>${task3[3]}</p>
          </div>
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
          ${task1[3] ? 
            `
            Какое из следующих чисел заключено между числами: &thinsp;
            ${drobNum(task1[0], task1[1])}&thinsp; и &thinsp;
            ${drobNum(task1[2], task1[3])}&thinsp; ?` 
            : 
            task1[1] ? 
            `
            Между какими целыми числами заключено число:&thinsp; ${drobNum(task1[0], task1[1])}&thinsp; ?
            ` : 
            `
            Между какими числами заключено число ${sqrtNum(task1[0])} ?
            `}
            <hr class="hr-pd_40"> 
           <div style="display: flex; justify-content: space-around;">
            <p>${task2[0]}</p>
            <p>${task2[1]}</p>
            <p>${task2[2]}</p>
            <p>${task2[3]}</p>
           </div>
          <hr class="hr-pd_40"> 
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
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 31 ? 
            `
            Какое из чисел ${sqrtNum(task1[0])},&thinsp; ${sqrtNum(task1[1])},&thinsp; ${sqrtNum(task1[2])},&thinsp; ${sqrtNum(task1[3])}&thinsp; принадлежит промежутку [${task1[4]} ; ${task1[5]}]
            <hr class="hr-pd_30">
            ` : 
        
            
            task1.length === 7 ? 
            `
            Какое из чисел&thinsp;
            ${drobNum(task1[0], task1[4])};&thinsp;
            ${drobNum(task1[1], task1[4])};&thinsp;
            ${drobNum(task1[2], task1[4])};&thinsp;
            ${drobNum(task1[3], task1[4])}&thinsp;
            принадлежит отрезку [${task1[5]}; ${task1[6]}] ?
            <hr class="hr-pd_40">
            ` :
            task1.length === 6 ? 
            `Одно из чисел&thinsp;
            ${drobNum(task1[0], task1[4])};&thinsp;
            ${drobNum(task1[1], task1[4])};&thinsp;
            ${drobNum(task1[2], task1[4])};&thinsp;
            ${drobNum(task1[3], task1[4])}&thinsp;
            
            отмечено на числовой прямой точкой ${task1[5] ? task1[5] : ""}.
            <hr class="hr-pd_10">
            <img style="display: block; margin: 0 auto; width: 70%;" src=../../pages/mathOge/img/task7/7_${taskCounter}.png>
            <hr class="hr-pd_10">
            Какое это число?<hr class="hr-pd_20">
            ` :  task1.length == 2 ? 
            `Какому из данных промежутков принадлежит число&thinsp;
              ${drobNum(task1[0], task1[1])} ?
            ` : 
            task1.length === 9 ? `
            На координатной прямой точки ${task1[0]}, ${task1[1]}, ${task1[2]}, ${task1[3]} соответствуют числам
            ${task1[4]}; ${task1[5]}; ${task1[6]}; ${task1[7]}.<hr class="hr-pd_20">
            <img style="display: block; margin: 0 auto; width: 70%;" src=../../pages/mathOge/img/task7/7_${taskCounter}.png>
            
            Какой точке соответствует число:&thinsp; ${task1[8]} ? <hr class="hr-pd_30">
            ` : task1[0] === 0 ? 
            `
            ${task2}<hr class="hr-pd_10">
            <img style="display: block; margin: 0 auto; width: 70%;" src=../../pages/mathOge/img/task7/7_${taskCounter}.png>
           <hr class="hr-pd_20">
           Какая из разностей ${task1[1]}, ${task1[2]}, ${task1[3]} ${task3}?<hr class="hr-pd_20">
            ` 
            : task1[0] === 1  && task1.length === 10? 
            `
            На координатной прямой отмечены точки ${task1[1]}, ${task1[2]}, ${task1[3]}, ${task1[4]}. 
            <hr class="hr-pd_20">
            <img style="display: block; margin: 0 auto; width: 70%;" src=../../pages/mathOge/img/task7/7_${taskCounter}.png>
            <hr class="hr-pd_20">
            Одна из них соответствует числу&thinsp; 
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[5]}</mn>
                <mn style="padding-top: 5px;">${task1[6]}</mn>
              </mfrac>
            </math>.&thinsp; Какая это точка?
            <hr class="hr-pd_30"> 
            ` 
            :
            `
            На координатной прямой отмечены точки ${task1[0]}, ${task1[1]}, ${task1[2]}, ${task1[3]}. Одна из них соответствует числу <span style="font-size: 140%; margin-right: -2px;">√</span><span  style="border-top: 0.14em solid ">${task1[4]}</span>. Какая это точка?
            <hr class="hr-pd_20">
            <img style="display: block; margin: 0 auto; width: 70%;" src=../../pages/mathOge/img/task7/7_${taskCounter}.png>
            <hr class="hr-pd_30">      
            `}
          
         
          ${
            task === 31 ? 
            ` 
            <div style="display: flex; justify-content: space-around;">
              <p>1) ${sqrtNum(task1[0])}</p>
              <p>2) ${sqrtNum(task1[1])}</p>
              <p>3) ${sqrtNum(task1[2])}</p>
              <p>4) ${sqrtNum(task1[3])}</p>
            </div>

            `
            :
            task1.length === 6 || task1.length === 7 ? 
          `<div style="display: flex; justify-content: space-around;">
            <p> 1) ${drobNum(task1[0], task1[4])}</p>
            <p> 2) ${drobNum(task1[1], task1[4])}</p>
            <p> 3) ${drobNum(task1[2], task1[4])}</p>
            <p> 4) ${drobNum(task1[3], task1[4])}</p>
          </div>`
          : task1.length === 2 ? 
          `
          <hr class="hr-pd_30">
          <div style="display: flex; justify-content: space-around;">
            <p>1) ${task2[0]}</p>
            <p>2) ${task2[1]}</p>
            <p>3) ${task2[2]}</p>
            <p>4) ${task2[3]}</p>
          </div>
          ` 
          : ((task1.length === 5 || task1.length === 9) && task1[0] !== 0)? 
          `
          
          <div style="display: flex; justify-content: space-around;">
            <p>1) точка ${task1[0]}</p>
            <p>2) точка ${task1[1]}</p>
            <p>3) точка ${task1[2]}</p>
            <p>4) точка ${task1[3]}</p>
          </div>
          ` 
          : task1[0] === 0 ? 
          `
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-around;">
            <p>1) ${task1[1]}</p>
            <p>2) ${task1[2]}</p>
            <p>3) ${task1[3]}</p>
            <p>4) ${task1[4]}</p>
          </div>
          ` 
          : task1.length === 10 ? 
          
          `<div style="display: flex; justify-content: space-around;">
            <p>1) точка ${task1[1]}</p>
            <p>2) точка ${task1[2]}</p>
            <p>3) точка ${task1[3]}</p>
            <p>4) точка ${task1[4]}</p>
          </div>` :
          
          ``}
          
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
    if (taskKey === 'eight'){
      let Nomer = 8
      function eightAnswer(task){
        if (task === 1) 
          return `<p>a<sup style="font-size: 75%;">${task1[0]} + ${task1[1]} — ${task1[2]}</sup> = a<sup style="font-size: 75%;">${task1[0] + task1[1] - task1[2]}</sup> = ${task1[3]}<sup style="font-size: 75%;">${task1[0] + task1[1] - task1[2]}</sup> = ${Math.pow(task1[3], task1[0] + task1[1] - task1[2])}</p>`
        else if(task === 2) 
          return `${task1[4] === "u" ? 
        `<p>a<sup style="font-size: 75%;">${task1[0]} + (${task1[1]} • ${task1[2]})</sup> = a<sup style="font-size: 75%;">${task1[0] + task1[1] * task1[2]}</sup> = ${task1[3]}<sup style="font-size: 75%;">${task1[0] + task1[1] * task1[2]}</sup> = ${Math.pow(task1[3], task1[0] + task1[1] * task1[2])}</p>` :
        `<p>a<sup style="font-size: 75%;">(${task1[0]} • ${task1[1]}) — ${task1[2]}</sup> = a<sup style="font-size: 75%;">${task1[0] * task1[1] - task1[2]}</sup> = ${task1[3]}<sup style="font-size: 75%;">${(task1[0] * task1[1]) - task1[2]}</sup> = ${Math.pow(task1[3], (task1[0] * task1[1]) - task1[2])}</p>`}`
        else if(task === 3)
          return `${task1[4] === "a3" ? 
          `<p>a<sup style="font-size: 75%;">${task1[0]} + ${task1[1]} — ${task1[2]}</sup> = a<sup style="font-size: 75%;">${task1[0] + task1[1] - task1[2]}</sup> = ${task1[3]}<sup style="font-size: 75%;">${task1[0] + task1[1] - task1[2]}</sup> = ${Math.pow(task1[3], task1[0] + task1[1] - task1[2])}</p>` 
          : task1[4] === "a2" ? 
          `<p>a<sup style="font-size: 75%;">${task1[0]} • ${task1[1]} — ${task1[2]}</sup> = a<sup style="font-size: 75%;">${task1[0] * task1[1] - task1[2]}</sup> = ${task1[3]}<sup style="font-size: 75%;">${(task1[0] * task1[1]) - task1[2]}</sup> = ${Math.pow(task1[3], (task1[0] * task1[1]) - task1[2])}</p>`
          :
          `<p>a<sup style="font-size: 75%;">(${task1[0]} • ${task1[1]} + ${task1[2]}) — ${task1[3]}</sup> = a<sup style="font-size: 75%;">${(task1[0] * task1[1] + task1[2]) - task1[3]}</sup> = ${task1[4]}<sup style="font-size: 75%;">${(task1[0] * task1[1] + task1[2]) - task1[3]}</sup> = ${Math.pow(task1[4], (task1[0] * task1[1] + task1[2]) - task1[3])}</p>`}`
        else if(task === 4)
          return `<p>${task1[0]}<sup style="font-size: 75%;">${task1[1]} + ${task1[2]} — ${task1[3]}</sup> = ${task1[0]}<sup style="font-size: 75%;">${task1[1] + task1[2] - task1[3]}</sup> = ${Math.pow(task1[0], task1[1] + task1[2] - task1[3])}</p>`
        else if (task === 5){
           let countStepen = 0;
           let ch = task1[2];
           while(ch > 0 ){
              if (ch % task1[0] === 0){
                 countStepen += 1
                 ch /= task1[0]
              }
              else {break;}        
           }
           
           return `
           <p>${task1[2]} = ${task1[0]}<sup style="font-size: 75%;">${countStepen}</sup></p><hr class="hr-pd_10">
           <p>${task1[0]}<sup style="font-size: 75%;">${task1[1]}</sup> : ${task1[0]}<sup style="font-size: 75%;">${countStepen}</sup> = ${task1[0]}<sup style="font-size: 75%;">${task1[1]} — ${countStepen}</sup> = ${task1[0]}<sup style="font-size: 75%;">${task1[1]  - countStepen}</sup> = ${Math.pow(task1[0], task1[1] - countStepen)}</p>`
        }
        else if (task === 21){
          return `${task1[8] === "+" ? 
            `<p>a<sup>2</sup> + 2ab + b<sup>2</sup> = (a + b)<sup>2</sup></p>` 
            : 
            `<p>a<sup>2</sup> — 2ab + b<sup>2</sup> = (a — b)<sup>2</sup></p>`}`
        }
        else 
          return `...`
        
      }

      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Найдите значение выражения: 
          ${ task === 1 ? 
            `a<sup style="font-size: 75%;">${task1[0]}</sup>&thinsp; •&thinsp; a<sup style="font-size: 75%;">${task1[1]}</sup>&thinsp; :&thinsp; a<sup style="font-size: 75%;">${task1[2]}</sup>&thinsp; при a = ${task1[3]} <hr class="hr-pd_20">`
            : task === 2 ? 
            `${task1[4] === "u" ? 
              `a<sup style="font-size: 75%;">${task1[0]}</sup>&thinsp;&thinsp;•&thinsp; (a<sup style="font-size: 75%;">${task1[1]}</sup>)<sup style="font-size: 75%;">${task1[2]}</sup>&thinsp; при a = ${task1[3]}<hr class="hr-pd_20">` : 
              `(a<sup style="font-size: 75%;">${task1[0]}</sup>)&thinsp;<sup style="font-size: 75%;">${task1[1]}</sup>&thinsp; :&thinsp; a<sup style="font-size: 75%;">${task1[2]}</sup>&thinsp; при a = ${task1[3]}<hr class="hr-pd_20">`}`
            : task === 3 ? `
              ${task1[4] === "a2" ? 
                `
                <math style="font-size: 140%">
              <mfrac>
              <msup>
                <mrow style="padding-bottom: 5px;">
                 <mn>(&thinsp;</mn>
                  <msup>
                    <mn >a</mn>
                    <mn >${task1[0]}</mn>
                  </msup>
                  <mn>)</mn>
                </mrow>
                <mn >${task1[1]}</mn>
              </msup>
              <msup>
                <mn >a</mn>
                <mn style="padding-top: 5px;">${task1[2]}</mn> 
              </msup>
              </mfrac>
            </math>&thinsp;
            при a = ${task1[3]}
                ` 
                : task1[4] === "a3" ?
              `<math style="font-size: 140%">
              <mfrac>
                <mrow>
                  <msup>
                    <mn style="padding-bottom: 5px;">a</mn>
                    <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                  </msup>
                  <mo>•</mo>
                  <msup>
                    <mn style="padding-bottom: 5px;">&thinsp;a</mn>
                    <mn style="padding-top: 5px;">${task1[1]}</mn> 
                  </msup>  
                </mrow>
                <msup>
                  <mn style="padding-bottom: 5px;">a</mn>
                  <mn style="padding-top: 5px;">${task1[2]}</mn> 
                </msup>
              </mfrac>
            </math>&thinsp;
            при a = ${task1[3]}` 
            : 
            `
            <math style="font-size: 140%">
              <mfrac>
              <mrow>
                <msup>
                  <mrow>
                  <mn>(&thinsp;</mn>
                    <msup>
                      <mn style="padding-bottom: 5px;">a</mn>
                      <mn style="padding-top: 5px;">${task1[0]}</mn>
                    </msup>
                    <mn>)</mn>
                  </mrow>
                  <mn>${task1[1]}</mn>
                  </msup>
                  <mo>•&thinsp;</mo>
                  <msup>
                      <mn style="padding-bottom: 5px;">a</mn>
                      <mn style="padding-top: 5px;">${task1[2]}</mn>
                  </msup>
               </mrow>
                <msup>
                  <mn style="padding-bottom: 5px;">a</mn>
                  <mn style="padding-top: 5px;">${task1[3]}</mn> 
                </msup>
              </mfrac>
            </math>&thinsp;
            при a = ${task1[4]}
            `}
            
            <hr class="hr-pd_20">
            ` :

            ` `}
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_10">
            ${eightAnswer(task)}
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
          Найдите значение выражения: 
          ${task === 21 ? 
            `
            <span style="font-size: 170%; margin-right: -2px;">√</span><span style="border-top: 0.14em solid; padding-top: 4px;">${task1[0]}a<sup>2</sup> ${task1[8]} ${task1[1]}ab ${task1[9]} ${task1[2]}b<sup>2</sup></span>

          &thinsp; при a = ${task1[3]}
          <math style="font-size: 140%">
            <mfrac>
              <mn style="padding-bottom: 5px;">${task1[5]}</mn>
              <mn style="padding-top: 5px;">${task1[7]}</mn>      
            </mfrac>
          </math>&thinsp;
          и
          &thinsp;b = ${task1[4]}
          <math style="font-size: 140%">
            <mfrac>
              <mn style="padding-bottom: 5px;">${task1[6]}</mn>
              <mn style="padding-top: 5px;">${task1[7]}</mn>      
            </mfrac>
          </math>&thinsp;
            ` 
            : task === 22 ? 
            `
            ${task1[3] === "—" ? 
              `<span style="font-size: 170%; margin-right: -2px;">√</span><span style="border-top: 0.14em solid; padding-top: 4px;">a<sup>${task1[0]}</sup> • (— a)<sup>${task1[1]}</sup></span> &thinsp; при a = ${task1[2]}`
              : 
              `<span style="font-size: 170%; margin-right: -2px;">√</span><span style="border-top: 0.14em solid; padding-top: 4px;">(— a)<sup>${task1[0]}</sup> • a<sup>${task1[1]}</sup></span> &thinsp; при a = ${task1[2]}`}
            ` 
            : task === 23 ? 
            `
            
            <span style="font-size: 250%; font-family: sans-serif;  margin-right: -2px;">√</span><span style="border-top: 0.12em solid; padding-top: 1.2em;">&thinsp;
            <math style="font-size: 140%">
            <mfrac>
              <mrow>
                <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                <msup>
                  <mn style="padding-bottom: 5px;">a</mn> 
                  <mn style="padding-top: 5px;">${task1[1]}</mn> 
                </msup> 
              </mrow> 
              <mrow>
                <msup>
                  <mn style="padding-bottom: 5px;">a</mn> 
                  <mn style="padding-top: 5px;">${task1[2]}</mn> 
                </msup> 
              </mrow>   
            </mfrac>
          </math>
          </span>&thinsp;
          при a = ${task1[3]} 
            `
            : task === 24 ? 
            `
            <math style="font-size: 140%">
            <mfrac>
            <msup>
              <mrow>
                <msup>
                  <mn style="padding-bottom: 5px;">a</mn> 
                  <mn style="padding-bottom: 5px;">${task1[0]}</mn> 
                </msup> 
                <mn> • &thinsp;</mn>
                <mn>(</mn>
                <msup>
                  <mn style="padding-bottom: 5px;">b</mn> 
                  <mn style="padding-bottom: 5px;">${task1[1]}</mn> 
                </msup>
                <mn>)</mn>
               
              </mrow> 
               <mn style="padding-bottom: 5px;">${task1[2]}</mn> 
              </msup>
              <mrow>
                <msup>
                  <mn style="padding-bottom: 5px;">(a • b)</mn> 
                  <mn style="padding-top: 5px;">${task1[3]}</mn> 
                </msup> 
              </mrow>   
            </mfrac>
          </math>&thinsp; 
          при a = ${task1[4]} и b = ${sqrtNum(task1[4])}

            `
            : task === 25 ? 
            `
            <span style="font-size: 250%; font-family: sans-serif;  margin-right: -2px;">√</span><span style="border-top: 0.12em solid; padding-top: 1.2em;">&thinsp;
            <math style="font-size: 140%; padding-top: 1px;">
            <mfrac>
                  <mn style="padding-bottom: 5px;">1</mn> 
                  <mn style="padding-top: 5px;">${task1[0]}</mn> 
            </mfrac>
          </math>
         &thinsp; • &thinsp;x<sup>${task1[1]}</sup> y<sup>${task1[2]}</sup>
          </span>&thinsp;
          при x = ${task1[3]} и y = ${task1[4]}
            ` 
            : task === 26 ? 
            `
            <span style="font-size: 250%; font-family: sans-serif;  margin-right: -2px;">√</span><span style="border-top: 0.12em solid; padding-top: 1.2em;">&thinsp;
              <math style="font-size: 140%; padding-top: 1px;">
                <mfrac>
                  <mrow>
                    <msup>
                      <mn style="padding-bottom: 5px;">${task1[0]}x</mn> 
                      <mn style="padding-top: 5px;">${task1[1]}</mn> 
                    </msup>
                  </mrow>
                  <mrow>
                    <msup>
                      <mn style="padding-bottom: 5px;">y</mn> 
                      <mn style="padding-top: 5px;">${task1[2]}</mn> 
                    </msup>
                  </mrow>
                </mfrac>
              </math>
            </span>&thinsp;
          при x = ${task1[3]} и y = ${task1[4]}

            `
            :
            ``}
          
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_10">
            ${eightAnswer(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Найдите значение выражения: &thinsp;
          ${task === 4 ? 
            `
            <math style="font-size: 140%">
              <mfrac>
                <mrow>
                  <msup>
                    <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                    <mn style="padding-top: 5px;">${task1[1]}</mn>
                  </msup>
                  <mo>•</mo>
                  <msup>
                    <mn style="padding-bottom: 5px;">&thinsp;${task1[0]}</mn>
                    <mn style="padding-top: 5px;">${task1[2]}</mn> 
                  </msup>  
                </mrow>
                <msup>
                  <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                  <mn style="padding-top: 5px;">${task1[3]}</mn> 
                </msup>
              </mfrac>
            </math>&thinsp;
            ` 
            : task === 5 ? 
            `
            <math style="font-size: 140%">
              <mfrac>
                <mrow>
                  <msup>
                    <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                    <mn style="padding-top: 5px;">${task1[1]}</mn>
                  </msup> 
                </mrow>   
                  <mn style="padding-top: 5px;">${task1[2]}</mn>         
              </mfrac>
            </math>&thinsp;
            `
            : task === 6 ? 
            `
            <math style="font-size: 140%">
              <mfrac>
                <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                <mrow>
                  <msup>
                    <mn style="padding-bottom: 5px;">${task1[1]}</mn>
                    <mn style="padding-top: 5px;">${task1[2]}</mn>  
                  </msup> 
                </mrow>           
              </mfrac>
              <mn>&thinsp; • &thinsp;</mn> 
              <mfrac>
                <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                <mrow>
                  <msup>
                    <mn style="padding-bottom: 5px;">${task1[1]}</mn>
                    <mn style="padding-top: 5px;">${task1[3]}</mn>  
                  </msup> 
                </mrow>           
              </mfrac>
            </math>&thinsp;
            ` 
            : task === 7 ? 
            `
            <math style="font-size: 140%">
              <mfrac>
                <msup>
                    <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                    <mn style="padding-top: 5px;">${task1[1]}</mn>  
                  </msup> 
                <mrow>
                  <msup>
                    <mn style="padding-bottom: 5px;">${task1[2]}</mn>
                    <mn style="padding-top: 5px;">${task1[3]}</mn>  
                  </msup> 
                  <mn>&thinsp; • &thinsp;</mn> 
                  <msup>
                    <mn style="padding-bottom: 5px;">${task1[4]}</mn>
                    <mn style="padding-top: 5px;">${task1[5]}</mn>  
                  </msup> 
                </mrow>           
              </mfrac>            
            </math>&thinsp;

            ` 
            : task === 8 ? 
            `
            <math style="font-size: 140%">
              <mfrac>  
                <mrow>
                  <msup>
                    <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                    <mn style="padding-top: 5px;">${task1[1]}</mn>  
                  </msup> 
                  <mn>&thinsp; • &thinsp;</mn> 
                  <msup>
                    <mn style="padding-bottom: 5px;">${task1[2]}</mn>
                    <mn style="padding-top: 5px;">${task1[3]}</mn>  
                  </msup> 
                </mrow>  
                <msup>
                  <mn style="padding-bottom: 5px;">${task1[4]}</mn>
                  <mn style="padding-top: 5px;">${task1[5]}</mn>  
                </msup>          
              </mfrac>            
            </math>&thinsp;

            ` 
            : task === 9 ? 
            `
            <math style="font-size: 140%">
              <mfrac> 
               
              <msup>
                <mrow>
                  <mn style="padding-bottom: 5px;">(${task1[0]}</mn> 
                  <mn>&thinsp; • &thinsp;</mn> 
                  <mn style="padding-bottom: 5px;">${task1[1]})</mn> 
                </mrow>  
                 <mn style="padding-bottom: 5px;">${task1[2]}</mn>
                </msup>
                <mrow>
                <msup>
                  <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                  <mn style="padding-top: 5px;">${task1[3]}</mn>     
                </msup> 
                <mn>&thinsp; • &thinsp;</mn>
                <msup>
                  <mn style="padding-bottom: 5px;">${task1[1]}</mn>
                  <mn style="padding-top: 5px;">${task1[4]}</mn>     
                </msup> 
                </mrow>         
              </mfrac>            
            </math>&thinsp;
            
            ` 
            : task === 10 ? 
            `
            <math style="font-size: 140%">
              <mfrac> 
                <msup>
                  <mrow>
                    <mn>(&thinsp;</mn>
                    <msup>
                      <mn style="padding-bottom: 5px;">${task1[0]}</mn> 
                      <mn style="padding-bottom: 5px;">${task1[1]}</mn> 
                    </msup>
                    <mn>)</mn>
                  </mrow>  
                  <mn style="padding-bottom: 5px;">${task1[2]}</mn>
                </msup>

                <mrow>
                  <msup>
                    <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                    <mn style="padding-top: 5px;">${task1[3]}</mn>     
                  </msup> 
                </mrow>         
              </mfrac>            
            </math>&thinsp;

            ` 
            : task === 11 ? 
            `${task1[0]} <sup style="font-size: 75%;">${task1[1]}</sup>&thinsp; •&thinsp; ( ${task1[0]}<sup style="font-size: 75%;">${task1[2]}</sup> ) <sup style="font-size: 75%;">${task1[3]}</sup>`
            : task === 12 ? 
            `
            `
            :
            ``}
          
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_10">
            ${eightAnswer(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 4:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Найдите значение выражения: &thinsp;
          ${task === 31 ? 
          `
          <math style="font-size: 140%; padding-top: 1px;">
            <mfrac>
              <mn style=" padding-bottom: 2px;">
                <mrow>
                  ${sqrtNum(task1[0])}
                  •
                  ${sqrtNum(task1[1])}
                </mrow>
              </mn>
              <mn style=" padding-top: 5px;">
                <mrow>
                    ${sqrtNum(task1[2])}
                </mrow>
               </mn>
            </mfrac>
          </math>

          ` 
          : task === 32 ? 
          `
          ${task1[0] === 1 ? 
            `<math style="font-size: 140%; padding-top: 1px;">
                <mfrac>   
                  <msup style="padding-bottom: 4px;">  
                    <mn>
                      <mrow>(${task1[1]}${sqrtNum(task1[2])})</mrow>
                    </mn>
                    <mn>${task1[3]}</mn>
                  </msup>
                  <mn style="padding-top: 5px;">${task1[4]}</mn>
                </mfrac>
              </math>` 
          : 
          `
          <math style="font-size: 140%; padding-top: 1px;">
            <mfrac>   
              <mn style="padding-bottom: 5px;">${task1[4]}</mn>
                <msup style="padding-top: 5px;">  
                  <mn>
                    <mrow>(${task1[1]}${sqrtNum(task1[2])})</mrow>
                  </mn>
                  <mn>${task1[3]}</mn>
                </msup>
            </mfrac>
          </math>

          `} `
          : task === 33 ? 
           `
           ${sqrtNum(`${task1[0]} • ${task1[1]}`)}&thinsp;• ${sqrtNum(task1[2])}
           ` 
           : task === 34 ?     
           `${task1[3] === "+" ? 
            `(${sqrtNum(task1[0])}&thinsp;+ ${task1[1]})<sup>2</sup> — ${task1[2]}${sqrtNum(task1[0])}` 
            :
            `(${sqrtNum(task1[0])}&thinsp;— ${task1[1]})<sup>2</sup> + ${task1[2]}${sqrtNum(task1[0])}`
            }` 

           : task === 35 ? 
           `
           ${task1[2] === "+" ? 
            `(${sqrtNum(task1[0])}&thinsp;+ ${sqrtNum(task1[1])}) &thinsp;• ${sqrtNum(task1[0])}` 
            : 
            `(${sqrtNum(task1[0])}&thinsp;— ${sqrtNum(task1[1])}) &thinsp;• ${sqrtNum(task1[0])}`
           }`

           : task === 36 ? 
           `${task1[0]}${sqrtNum(task1[1])}&thinsp;• ${task1[2]}${sqrtNum(task1[3])}&thinsp;• ${sqrtNum(task1[4])}` 
           
           : task === 37 ? 
           `
           ${task1[2] === 1 ? 
            `(${sqrtNum(task1[0])}— ${task1[1]})(${sqrtNum(task1[0])} + ${task1[1]})` 
            : 
            `(${sqrtNum(task1[0])}— ${sqrtNum(task1[1])})(${sqrtNum(task1[0])} + ${sqrtNum(task1[1])})`
            }`
           : task === 38 ? 
           `
           <span style="font-size: 130%; font-family: MathJax_Size3;">√</span>
           <span style="border-top: 0.099em solid; padding-top: 5px; margin-left: -5px;">&thinsp;${task1[0]}<sup>${task1[1]}</sup>&thinsp;</span>        
           `
           :
           ``

          }
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_10">
            ${eightAnswer(task)}
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
      function minusNum(item){
        if( item < 0 && (item.toString().length === 2 || item.toString().length === 3)){
          return `− ${item.toString().slice(1)}`
        }
        else{
          return item
        }
        
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 1 ? 
            `
            Решите уравнение: ${task1[0]}x<sup>2</sup> = ${task1[1]}x.<hr class="hr-pd_10">
            Если уравнение имеет более одного корня, в ответ запишите меньший из корней.
            <hr class="hr-pd_20">
            `
            : task === 2 ? 
            `
            Решите уравнение: x<sup>2</sup> — ${task1[0]} = 0.<hr class="hr-pd_10">
            Если уравнение имеет более одного корня, в ответ запишите ${task1[1] === "" ? `меньший` : `больший `} из корней.
            <hr class="hr-pd_20">
            `
            : task === 3 ? 
            `
            Решите уравнение: ${task1[0]}x<sup>2</sup> — ${task1[1]}x + ${task1[2]} = 0.<hr class="hr-pd_10">
            Если уравнение имеет более одного корня, в ответ запишите ${task1[3] === "" ? `меньший` : `больший `} из корней.
            <hr class="hr-pd_20">
            `
            : ``}
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
          ${task === 4 ? 
            `
            Найдите корень уравнения:&thinsp; ${task1[0]} ( x ${task1[3]==="" ? `−` : `+`} ${task1[3]==="" ? task1[1].toString().slice(1) : task1[1]} ) = ${task1[2].toString().length === 2 ? `— ${task1[2].toString().slice(1)}` : task1[2]}
            `
            : task === 5 ? 
            `
            Найдите корень уравнения:&thinsp; ${minusNum(task1[0])}x ${task1[3] === "" ? `${minusNum(task1[1])}` : `+ ${task1[1]}`} = ${minusNum(task1[2])}x
            `
            : task === 6 ? 
            `
            Найдите корень уравнения:&thinsp; ${minusNum(task1[0])} ${task1[4] === "" ? `${minusNum(task1[1])}` : `+ ${task1[1]}`}x = ${minusNum(task1[2])}x ${task1[5] === "" ? `${minusNum(task1[3])}` : `+ ${task1[3]}`}
            ` 
            : 
            ``}`
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
    if (taskKey === 'ten'){
      let Nomer = 10
      function reshTen(item){
        if (item === 1){
          return `
           ${task1[0]} — ${task1[1]} = ${task1[0] - task1[1]} с синими цветами.<br>
           ${task1[0] - task1[1]} / ${task1[0]} = ${(task1[0] - task1[1]) / task1[0]}
          `

        }
        else if(item === 2){
          return `
           ${task1[0]} — ${task1[1]} = ${task1[0] - task1[1]} выученные билеты.<br>
           ${task1[0] - task1[1]} / ${task1[0]} = ${(task1[0] - task1[1]) / task1[0]}
          `
        }
        else if(item === 3){
          return `
           ${task1[1]} / ${task1[0]} = ${(task1[1]) / task1[0]}
          `
        }
        else if(item === 4){
          return `
           ${task1[0]} — ${task1[1]} = ${task1[0] - task1[1]} исправных.<br>
           ${task1[0] - task1[1]} / ${task1[0]} = ${(task1[0] - task1[1]) / task1[0]}
          `
        }
        else if(item === 5){
          return `
           ${task1[4] === 3 ? 
            `
            Всего спортсменов: ${task1[0]} + ${task1[1]} + ${task1[2]} = ${task1[0] + task1[1] + task1[2]}.<br>
            ${task1[3]}: ${task1[1]}<br>
            ${task1[1]} / ${task1[0] + task1[1] + task1[2]} = ${task1[1] / (task1[0] + task1[1] + task1[2])}

            ` : task1[4] === 2 ? 
            `
            Всего спортсменов: ${task1[0]} + ${task1[1]} + ${task1[2]} = ${task1[0] + task1[1] + task1[2]}.<br>
            ${task1[3]}: ${task1[2]}<br>
            ${task1[2]} / ${task1[0] + task1[1] + task1[2]} = ${task1[2] / (task1[0] + task1[1] + task1[2])}

            ` : task1[4] === 4 ? 
            `
            Всего спортсменов: ${task1[0]} + ${task1[1]} + ${task1[2]} = ${task1[0] + task1[1] + task1[2]}.<br>
            ${task1[3]}: ${ task1[1] + task1[2]}<br>
            ${ task1[1] + task1[2]} / ${task1[0] + task1[1] + task1[2]} = ${(task1[1] + task1[2]) / (task1[0] + task1[1] + task1[2])}

            ` : task1[4] === 1 ? 
            `
            Всего спортсменов: ${task1[0]} + ${task1[1]} + ${task1[2]} = ${task1[0] + task1[1] + task1[2]}.<br>
            ${task1[3]}: ${task1[0]}<br>
            ${task1[0]} / ${task1[0] + task1[1] + task1[2]} = ${task1[0] / (task1[0] + task1[1] + task1[2])}

            ` :
            ``}
           
          `
        }
        //   <sup>2</sup>   — • &thinsp; √   &nbsp;
        else if(item === 6){
          
          return `
          ${task1[1] === 1 ? 
            `
            Вероятность достоверного события равен единице то есть: P(A) = 1<br>
            
            1 — ${task1[0]} = ${
              task1[0].length === 4 ? 
              (1-(task1[0].replace(",", "."))).toFixed(2).toString().replace(".", ",")
              :
              (1-(task1[0].replace(",", "."))).toString().replace(".", ",")
            }
            ` 
            : task1[1] === 2 ? 
            `
            ${task1[0]} — ${task1[2]} — ${task1[3]} — ${task1[4]} = ${task1[0]-task1[2]-task1[3]-task1[4]}.<br>
            Чёрных и синих ручек: ${task1[0]-task1[2]-task1[3]-task1[4]} / 2 = ${(task1[0]-task1[2]-task1[3]-task1[4]) / 2} поровну.<br>
            Всего красных и синих ручек: ${task1[2]} + ${(task1[0]-task1[2]-task1[3]-task1[4]) / 2} = ${task1[2] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)}<br>
            ${task1[2] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)} / ${task1[0]} = ${(task1[2] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)) / task1[0]}
            `
            : task1[1] === 3 ? 
            `
            ${task1[0]} — ${task1[2]} — ${task1[3]} — ${task1[4]} = ${task1[0]-task1[2]-task1[3]-task1[4]}.<br>
            Чёрных и синих ручек: ${task1[0]-task1[2]-task1[3]-task1[4]} / 2 = ${(task1[0]-task1[2]-task1[3]-task1[4]) / 2} поровну.<br>
            Всего красных и чёрных ручек: ${task1[2]} + ${(task1[0]-task1[2]-task1[3]-task1[4]) / 2} = ${task1[2] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)}<br>
            ${task1[2] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)} / ${task1[0]} = ${(task1[2] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)) / task1[0]}
            `
            : task1[1] === 4 ? 
            `
            ${task1[0]} — ${task1[2]} — ${task1[3]} — ${task1[4]} = ${task1[0]-task1[2]-task1[3]-task1[4]}.<br>
            Чёрных и синих ручек: ${task1[0]-task1[2]-task1[3]-task1[4]} / 2 = ${(task1[0]-task1[2]-task1[3]-task1[4]) / 2} поровну.<br>
            Всего синих и чёрных ручек: ${(task1[0]-task1[2]-task1[3]-task1[4])}<br>
            ${((task1[0]-task1[2]-task1[3]-task1[4]))} / ${task1[0]} = ${(((task1[0]-task1[2]-task1[3]-task1[4]))) / task1[0]}
            `
            : task1[1] === 5 ? 
            `
            ${task1[0]} — ${task1[2]} — ${task1[3]} — ${task1[4]} = ${task1[0]-task1[2]-task1[3]-task1[4]}.<br>
            Чёрных и синих ручек: ${task1[0]-task1[2]-task1[3]-task1[4]} / 2 = ${(task1[0]-task1[2]-task1[3]-task1[4]) / 2} поровну.<br>
            Всего зелёных и чёрных ручек: ${task1[3]} + ${(task1[0]-task1[2]-task1[3]-task1[4]) / 2} = ${task1[3] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)}<br>
            ${task1[3] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)} / ${task1[0]} = ${(task1[3] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)) / task1[0]}
            `
            : task1[1] === 6 ? 
            `
            ${task1[0]} — ${task1[2]} — ${task1[3]} — ${task1[4]} = ${task1[0]-task1[2]-task1[3]-task1[4]}.<br>
            Чёрных и синих ручек: ${task1[0]-task1[2]-task1[3]-task1[4]} / 2 = ${(task1[0]-task1[2]-task1[3]-task1[4]) / 2} поровну.<br>
            Всего красных и фиолетовых ручек: ${task1[2]} + ${task1[4]} = ${task1[2]+task1[4]}<br>
            ${task1[2]+task1[4]} / ${task1[0]} = ${(task1[2]+task1[4]) / task1[0]}
            `
            : task1[1] === 7 ? 
            `
            ${task1[0]} — ${task1[2]} — ${task1[3]} — ${task1[4]} = ${task1[0]-task1[2]-task1[3]-task1[4]}.<br>
            Чёрных и синих ручек: ${task1[0]-task1[2]-task1[3]-task1[4]} / 2 = ${(task1[0]-task1[2]-task1[3]-task1[4]) / 2} поровну.<br>
            Всего зелёных и синих ручек: ${task1[3]} + ${(task1[0]-task1[2]-task1[3]-task1[4]) / 2} = ${task1[3] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)}<br>
            ${task1[3] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)} / ${task1[0]} = ${(task1[3] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)) / task1[0]}
            `
            : task1[1] === 8 ? 
            `
            ${task1[0]} — ${task1[2]} — ${task1[3]} — ${task1[4]} = ${task1[0]-task1[2]-task1[3]-task1[4]}.<br>
            Чёрных и синих ручек: ${task1[0]-task1[2]-task1[3]-task1[4]} / 2 = ${(task1[0]-task1[2]-task1[3]-task1[4]) / 2} поровну.<br>
            Всего фиолетовых и синих ручек: ${task1[4]} + ${(task1[0]-task1[2]-task1[3]-task1[4]) / 2} = ${task1[4] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)}<br>
            ${task1[4] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)} / ${task1[0]} = ${(task1[4] + ((task1[0]-task1[2]-task1[3]-task1[4]) / 2)) / task1[0]}
            `
            :
            ``}
          `
        }
        else if(item === 7){
          return `
          ${task1[2]} / ${task1[0]} = ${task1[2]/task1[0]}
          `
        }
        else{
          return `...`
        }
      }
      function numberToWordsRu(num) {
        const words = {
            0: 'ноль',
            1: 'один',
            2: 'два',
            3: 'три',
            4: 'четыре',
            5: 'пять',
            6: 'шесть',
            7: 'семь',
            8: 'восемь',
            9: 'девять',
            10: 'десять',
            11: 'одиннадцать',
            12: 'двенадцать',
            13: 'тринадцать',
            14: 'четырнадцать',
            15: 'пятнадцать',
            16: 'шестнадцать',
            17: 'семнадцать',
            18: 'восемнадцать',
            19: 'девятнадцать',
            20: 'двадцать'
        };
        return  words[num]
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          У бабушки ${task1[0]} чашек:  ${task1[1]} с красными цветами, остальные с синими. Бабушка наливает чай в случайно выбранную чашку. 
          Найдите вероятность того,что это будет чашка с <b>синими</b> цветами.
          <hr class="hr-pd_20">
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTen(task)}
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
          На экзамене ${task1[0]} билетов, ${task1[2]} <b>не выучил</b> ${task1[1]} из них. Найдите вероятность того, что ему попадётся выученный билет.
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Родительский комитет закупил ${task1[0]} пазлов для подарков детям в связи с окончанием учебного года, 
          из них ${task1[1]} с машинами и ${task1[2]} с видами городов. Подарки распределяются случайным образом между ${task1[0]} детьми, 
          среди которых есть ${task1[3]}. Найдите вероятность того, что ${task1[3].slice(0, -1)}е достанется пазл с машиной.
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 4:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          В среднем из ${task1[0]} карманных фонариков, поступивших в продажу, <b>${numberToWordsRu(task1[1])}</b> неисправных. 
          Найдите вероятность того, что выбранный наудачу в магазине фонарик окажется <b>исправен</b>.
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 5:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          В лыжных гонках участвуют ${task1[0]} спортсменов из России, ${task1[1]} спортсмен из Швеции и ${task1[2]} спортсмена из Норвегии. 
          Порядок, в котором спортсмены стартуют, определяется жребием. 
          Найдите вероятность того, что первым будет стартовать спортсмен <b>${task1[3]}</b>.
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 6:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task1[1] === 1 ? 
            `Вероятность того, что новая шариковая ручка пишет плохо (или не пишет), равна ${task1[0]}. 
             Покупатель в магазине выбирает одну шариковую ручку. Найдите вероятность того, что эта ручка пишет хорошо.` 
            : 
            `
            В магазине канцтоваров продаётся ${task1[0]} ручек: ${task1[2]}&nbsp;красных, ${task1[3]}&nbsp;зелёных, ${task1[4]}&nbsp;фиолетовых, 
            остальные синие и чёрные, их поровну. 
            Найдите вероятность того, что случайно выбранная в этом магазине ручка будет <b>${task1[5]}</b>.`}
          
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 7:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          В фирме такси в данный момент свободно ${task1[0]} машин: ${task1[1]}&nbsp;чёрных, ${task1[2]}&nbsp;жёлтая и ${task1[3]}&nbsp;зелёных. 
          По вызову выехала одна из машин, случайно оказавшаяся ближе всего к заказчику. 
          Найдите вероятность того, что к нему приедет <b>жёлтое такси</b>.
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        }   
    }
    if (taskKey === 'eleven'){
      let Nomer = 11
      function delEleven(item){
         if(task === 31 || task === 32){
           if (item === 1){
             return `
              ${task3[0]}
              <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task3[1]}</mn>
                  <mn style="padding-top: 5px;">${task3[2]}</mn>
                </mfrac>
              </math>${task3[3]}
              `
           }
           else if (item === 2){
            return `
              ${task2[0]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[1]}</mn>
                  <mn style="padding-top: 5px;">${task2[2]}</mn>
                </mfrac>
              </math>&thinsp;
              `
           }
           else if (item === 3){
            return `
            ${task4[3]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task4[1]}</mn>
                  <mn style="padding-top: 5px;">${task4[2]}</mn>
                </mfrac>
              </math>
            ${task4[0]}` 

           }
         }
         
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 11 ? 
            `
            На рисунках изображены графики функций вида <i>y&nbsp;=&nbsp;kx&nbsp;+&nbsp;b</i>. 
            Установите соответствие между знаками коэффициентов k и b и графиками функций.<hr class="hr-pd_10">
            ${task1[3]=== 2 ? 
              `<b><u>ГРАФИКИ</u></b><hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-around; align-items: flex-start;">
                  <p>А) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_1.png"></p> 
                  <p>Б) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_2.png"></p> 
                  <p>В) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_3.png"></p>
              </div><hr class="hr-pd_20">
              <b><u>КОЭФФИЦИЕНТЫ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around;">
            <p>1) 
            ${task2[0]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[1]}</mn>
                  <mn style="padding-top: 5px;">${task2[2]}</mn>
                </mfrac>
              </math>
            ${task1[0]}</p> 

            <p>2) 
            ${task2[3]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[4]}</mn>
                  <mn style="padding-top: 5px;">${task2[5]}</mn>
                </mfrac>
              </math>
            ${task1[1]}</p> 

            <p>3) 
            ${task2[6]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[7]}</mn>
                  <mn style="padding-top: 5px;">${task2[8]}</mn>
                </mfrac>
              </math>
            ${task1[2]}</p>
            </div>
            <hr class="hr-pd_20">
            `
              :
              `<b><u>КОЭФФИЦИЕНТЫ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around;">
            <p>А) 
            ${task2[0]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[1]}</mn>
                  <mn style="padding-top: 5px;">${task2[2]}</mn>
                </mfrac>
              </math>
            ${task1[0]}</p> 
            <p>Б) 
            ${task2[3]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[4]}</mn>
                  <mn style="padding-top: 5px;">${task2[5]}</mn>
                </mfrac>
              </math>
            ${task1[1]}</p> 
            <p>В) 
            ${task2[6]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[7]}</mn>
                  <mn style="padding-top: 5px;">${task2[8]}</mn>
                </mfrac>
              </math>
            ${task1[2]}</p>
            </div>

            <hr class="hr-pd_20"><b><u>ГРАФИКИ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around; align-items: flex-start;">
                <p>1) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_1.png"></p> 
                <p>2) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_2.png"></p> 
                <p>3) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_3.png"></p>
            </div><hr class="hr-pd_20">`}
            
            В таблице под каждой буквой укажите соответствующий номер.<hr class="hr-pd_10">
            <table class="table_16">
              <tr>
                <td style="padding: 5px 10px;">A</td>
                <td style="padding: 5px 10px;">Б</td>
                <td style="padding: 5px 10px;">В</td>
              </tr>
              <tr>
                <td style="padding: 5px;">&thinsp;</td>
                <td style="padding: 5px;">&thinsp;</td>
                <td style="padding: 5px;">&thinsp;</td>
              </tr>
            </table>
            `
            : task === 12 ? 
            
            `${task1[3] === 2 ? 
              `Установите соответствие между графиками функций и формулами, которые их задают.
               <hr class="hr-pd_10">
             <b><u>ГРАФИКИ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around; align-items: flex-start;">
                <p>А) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_1.png"></p> 
                <p>Б) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_2.png"></p> 
                <p>В) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_3.png"></p>
            </div>
            <hr class="hr-pd_20"><b><u>${task6 === 1 ? `ФУНКЦИИ` : task6 === 2 ? `ФОРМУЛЫ`: `КОЭФФИЦИЕНТЫ`}</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around;">
            <p>1) 
            ${task2[0]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[1]}</mn>
                  <mn style="padding-top: 5px;">${task2[2]}</mn>
                </mfrac>
              </math>
            ${task1[0]}</p> 

            <p>2) 
            ${task2[3]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[4]}</mn>
                  <mn style="padding-top: 5px;">${task2[5]}</mn>
                </mfrac>
              </math>
            ${task1[1]}</p> 

            <p>3) 
            ${task2[6]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[7]}</mn>
                  <mn style="padding-top: 5px;">${task2[8]}</mn>
                </mfrac>
              </math>
            ${task1[2]}</p>
            </div><hr class="hr-pd_20">
           ` 
              : 
              `Установите соответствие между функциями и их графиками.
            <hr class="hr-pd_10">
            <b><u>${task6 === 1 ? `ФУНКЦИИ` : `КОЭФФИЦИЕНТЫ`}</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around;">
            <p>А) 
            ${task2[0]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[1]}</mn>
                  <mn style="padding-top: 5px;">${task2[2]}</mn>
                </mfrac>
              </math>
            ${task1[0]}</p> 
            <p>Б) 
            ${task2[3]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[4]}</mn>
                  <mn style="padding-top: 5px;">${task2[5]}</mn>
                </mfrac>
              </math>
            ${task1[1]}</p> 
            <p>В) 
            ${task2[6]}<math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task2[7]}</mn>
                  <mn style="padding-top: 5px;">${task2[8]}</mn>
                </mfrac>
              </math>
            ${task1[2]}</p>
            </div>

            <hr class="hr-pd_20"><b><u>ГРАФИКИ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around; align-items: flex-start;">
                <p>1) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_1.png"></p> 
                <p>2) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_2.png"></p> 
                <p>3) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_3.png"></p>
            </div><hr class="hr-pd_20">`}
              
            В таблице под каждой буквой укажите соответствующий номер.<hr class="hr-pd_10">
            <table class="table_16">
              <tr>
                <td style="padding: 5px 10px;">A</td>
                <td style="padding: 5px 10px;">Б</td>
                <td style="padding: 5px 10px;">В</td>
              </tr>
              <tr>
                <td style="padding: 5px;">&thinsp;</td>
                <td style="padding: 5px;">&thinsp;</td>
                <td style="padding: 5px;">&thinsp;</td>
              </tr>
            </table>
            `
            :
             ``

          }
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
          ${task === 21 ? 
            `
            ${task1[3] === 2 ? 
              `
              На рисунках изображены графики функций вида <i>y&nbsp;=&nbsp;ax<sup>2</sup>&nbsp;+&nbsp;bx&nbsp;+&nbsp;c</i>. Установите соответствие между знаками коэффициентов a и c и графиками функций.<hr class="hr-pd_10">
            <b><u>ГРАФИКИ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around; align-items: flex-start;">
                <p>А) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_1.png"></p> 
                <p>Б) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_2.png"></p> 
                <p>В) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_3.png"></p>
            </div><hr class="hr-pd_20">
            <b><u>КОЭФФИЦИЕНТЫ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around;">
            <p>1) ${task1[0]}</p> 
            <p>2) ${task1[1]}</p> 
            <p>3) ${task1[2]}</p>
            </div>
            
            <hr class="hr-pd_20">
            В таблице под каждой буквой укажите соответствующий номер.<hr class="hr-pd_10">
            <table class="table_16">
              <tr>
                <td style="padding: 5px 10px;">A</td>
                <td style="padding: 5px 10px;">Б</td>
                <td style="padding: 5px 10px;">В</td>
              </tr>
              <tr>
                <td style="padding: 5px;">&thinsp;</td>
                <td style="padding: 5px;">&thinsp;</td>
                <td style="padding: 5px;">&thinsp;</td>
              </tr>
            </table>
              
              `
              : 
              `На рисунках изображены графики функций вида <i>y&nbsp;=&nbsp;ax<sup>2</sup>&nbsp;+&nbsp;bx&nbsp;+&nbsp;c</i>. Установите соответствие между знаками коэффициентов a и c и графиками функций.<hr class="hr-pd_10">
            <b><u>КОЭФФИЦИЕНТЫ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around;">
            <p>А) ${task1[0]}</p> 
            <p>Б) ${task1[1]}</p> 
            <p>В) ${task1[2]}</p>
            </div>

            <hr class="hr-pd_20"><b><u>ГРАФИКИ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around; align-items: flex-start;">
                <p>1) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_1.png"></p> 
                <p>2) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_2.png"></p> 
                <p>3) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_3.png"></p>
            </div><hr class="hr-pd_20">
            В таблице под каждой буквой укажите соответствующий номер.<hr class="hr-pd_10">
            <table class="table_16">
              <tr>
                <td style="padding: 5px 10px;">A</td>
                <td style="padding: 5px 10px;">Б</td>
                <td style="padding: 5px 10px;">В</td>
              </tr>
              <tr>
                <td style="padding: 5px;">&thinsp;</td>
                <td style="padding: 5px;">&thinsp;</td>
                <td style="padding: 5px;">&thinsp;</td>
              </tr>
            </table>`

            }
            
            `
            : ``

          }
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
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Установите соответствие между функциями и их графиками.<hr class="hr-pd_10">
          ${ task === 31 ? 
            `<b><u>ФУНКЦИИ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around;">
            <p>А) y = ${delEleven(task1[0])}</p> 
            <p>Б) y = ${delEleven(task1[1])}</p> 
            <p>В) y = ${delEleven(task1[2])}</p>
            </div>

            <hr class="hr-pd_20"><b><u>ГРАФИКИ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around; align-items: flex-start;">
                <p>1) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_1.png"></p> 
                <p>2) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_2.png"></p> 
                <p>3) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_3.png"></p>
            </div><hr class="hr-pd_20">` 
            : task === 32 ?
            `<hr class="hr-pd_20"><b><u>ГРАФИКИ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around; align-items: flex-start;">
                <p>A) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_1.png"></p> 
                <p>Б) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_2.png"></p> 
                <p>В) <img style="width: 11em; vertical-align: top;" src="../../pages/mathOge/img/task11/11_${taskCounter}_3.png"></p>
            </div><hr class="hr-pd_20">
            <b><u>ФУНКЦИИ</u></b><hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-around;">
            <p>1) y = ${delEleven(task1[0])}</p> 
            <p>2) y = ${delEleven(task1[1])}</p> 
            <p>3) y = ${delEleven(task1[2])}</p>
            </div><hr class="hr-pd_20">
            ` : ``}
          
            В таблице под каждой буквой укажите соответствующий номер.<hr class="hr-pd_10">
            <table class="table_16">
              <tr>
                <td style="padding: 5px 10px;">A</td>
                <td style="padding: 5px 10px;">Б</td>
                <td style="padding: 5px 10px;">В</td>
              </tr>
              <tr>
                <td style="padding: 5px;">&thinsp;</td>
                <td style="padding: 5px;">&thinsp;</td>
                <td style="padding: 5px;">&thinsp;</td>
              </tr>
            </table>
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
    if (taskKey === 'twelve'){
      let Nomer = 12
      function reshTwelve(item){
        if(item === 11){
          return `
          ${task1[0] === 1 ? 
            `
            d<sub>1</sub> =
            <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">2 • S</mn>
                  <mrow style="padding-top: 5px;" >
                  <msub>
                    <mn>d</mn>
                    <mn>2</mn>
                  </msub>
                  &nbsp;
                  <mi>sin&nbsp;α</mi>
                </mrow>
                </mfrac>
              </math>
              = ( 2 • ${task1[4]} ) / ( ${task1[1]} •&thinsp; <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task1[2]} </mn>  
                  <mn style="padding-top: 5px;">${task1[3]}</mn>
                </mfrac>
               
              </math> ) = ${(2*task1[4]*task1[3])/(task1[1]*task1[2])} 
            `
            :
            `d<sub>2</sub> =
            <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">2 • S</mn>
                  <mrow style="padding-top: 5px;" >
                  <msub>
                    <mn>d</mn>
                    <mn>1</mn>
                  </msub>
                  &nbsp;
                  <mi>sin&nbsp;α</mi>
                </mrow>
                </mfrac>
              </math>
              = ( 2 • ${task1[4]} ) / ( ${task1[1]} •&thinsp; <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task1[2]} </mn>  
                  <mn style="padding-top: 5px;">${task1[3]}</mn>
                </mfrac>
               
              </math> ) = ${(2*task1[4]*task1[3])/(task1[1]*task1[2])}`} 
          `
        }
        else if(item === 21){
          return `
          R &thinsp;=&thinsp; <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">a</mn>  
                  <msup style="padding-top: 5px;">
                    <mn >ω</mn>  
                    <mn >2</mn>
                  </msup>
                </mfrac>
              </math> &thinsp;=&thinsp;
              <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task1[1]} </mn>  
                  <msup >
                    <mn style="padding-bottom: 5px;">${task1[0]} </mn>  
                    <mn style="padding-top: 5px;">2</mn>
                 </msup> 
                </mfrac>   
              </math> &thinsp;=&thinsp;
              <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task1[1]} </mn>  
                  <mn style="padding-top: 5px;">${task1[0]*task1[0]} </mn>   
                </mfrac>   
              </math> &thinsp;=&thinsp;
              ${task1[1]/(task1[0]*task1[0])} 

          `
        }
        else if(item === 31){
          return `
          R &thinsp;=&thinsp; <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">P</mn>  
                  <msup style="padding-top: 5px;">
                    <mn >I</mn>  
                    <mn >2</mn>
                  </msup>
                </mfrac>
              </math> &thinsp;=&thinsp;
              <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task1[0]} </mn>  
                  <msup >
                    <mn style="padding-bottom: 5px;">${task1[1]} </mn>  
                    <mn style="padding-top: 5px;">2</mn>
                 </msup> 
                </mfrac>   
              </math> &thinsp;=&thinsp;
              <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task1[0]} </mn>  
                  <mn style="padding-top: 5px;">${task1[1]*task1[1]} </mn>   
                </mfrac>   
              </math> &thinsp;=&thinsp;
              ${task1[0]/(task1[1]*task1[1])} 

          `
        }
        else if(item === 41){
          return `
          ${task1[1] === 1 ? 
            `C = 6000 + 4100 • n = 6000 + 4100 • ${task1[0]} = ${6000 + 4100*task1[0]}` 
            : 
            `C = 6500 + 4000 • n = 6500 + 4000 • ${task1[0]} = ${6500 + 4000*task1[0]}`}
          `
        }
        else if(item === 51){
          return `
          ${task1[1] === 1 ? 
            `t<sub>C</sub> = <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">5</mn>  
                  <mn style="padding-top: 5px;">9</mn>   
                </mfrac>   
              </math> (t<sub>F</sub> − 32) =
              <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">5</mn>  
                  <mn style="padding-top: 5px;">9</mn>   
                </mfrac>   
              </math> (${task1[0]} − 32) =
              ${(5*(task1[0] - 32))/9} 
              ` 
            : 
            `t<sub>F</sub> = 1,8 • t<sub>C</sub> + 32 = 1,8 • ${task1[0]} + 32 = ${(1.8*task1[0]) + 32}`}
          `
        }
        else if(item === 61){
          return `
          ${task1[0] === 1 ?
            `
            𝑣<sup>2</sup> = 2 • E / 𝑚 = 2 • ${task1[2]} • 1000 / ${task1[1]} = ${(2*task1[2]*1000) / task1[1]}
            <hr class="hr-pd_10">
            𝑣 = <span style="font-size: 150%">√</span><span  style="border-top: 0.16em solid ">${(2*task1[2]*1000) / task1[1]}</span> = ${Math.sqrt((2*task1[2]*1000) / task1[1])}

            `
            : 
            `
            𝑚 = 𝑃 / 𝑔 • ℎ = ${task1[2]} / 9,8 • ${task1[1]} = ${Math.round(task1[2] / (9.8 * task1[1]))}
            `}
          `
        }
        else if(item === 71){
          return `
          ${task1[1] === 1 ?
            `
            𝐹 = 𝜌 • 𝑔 • 𝑉 = 1000 • 9.8 • ${task1[0]} = ${Math.round(1000*9.8*task1[0])}
             `
            : 
            `
            10<sup>−4</sup> = 0,0001
            <hr class="hr-pd_10">
            W&nbsp;=&nbsp;<math style="font-size: 140%">
                <mfrac>
                  <mrow>
                    <mn>C</mn>
                    <msup>
                      <mn style="padding-bottom: 5px;">U</mn>  
                      <mn >2</mn>  
                    </msup> 
                  </mrow>
                  <mn style="padding-top: 5px;">2</mn>
                </mfrac>   
              </math> = 
              <math style="font-size: 140%">
                <mfrac>
                  <mrow>
                    <mn>0,0001 •&thinsp;</mn>

                    <msup>
                      <mn style="padding-bottom: 5px;"> ${task1[0]}</mn>  
                      <mn >2</mn>  
                    </msup> 
                  </mrow>
                  <mn style="padding-top: 5px;">2</mn>
                </mfrac>   
              </math> = ${((0.0001*task1[0]*task1[0])/2).toFixed(4)}     
            `}
          `
        }
        else{
          return `...`
        }
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Площадь четырёхугольника можно вычислить по формуле 
          S&nbsp;=&nbsp;<math style="font-size: 140%">
              <mfrac>
                <mrow style="padding-bottom: 5px;" >
                  <msub>
                    <mn>d</mn>
                    <mn>1</mn>
                  </msub>
                  &nbsp;
                  <msub>
                    <mn>d</mn>
                    <mn>2</mn>
                  </msub>
                  &nbsp;
                  <mi>sin&nbsp;α</mi>
                </mrow>     
                <mn style="padding-top: 5px;">2</mn>
              </mfrac>
          </math>&thinsp; , 
          где d<sub>1</sub> и d<sub>2</sub> — длины диагоналей четырёхугольника, α — угол между диагоналями.
          Пользуясь этой формулой, найдите длину диагонали d<sub>${task1[0] === 2 ? `2` : `1`}</sub>,<br>
          если d<sub>1</sub>&nbsp;=&nbsp;${task1[1]}, 
          sin&nbsp;α&nbsp;=&nbsp;
          <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 4px;">${task1[2]}</mn>
                  <mn style="padding-top: 5px;">${task1[3]}</mn>
                </mfrac>
              </math> , 
          a S&nbsp;=&nbsp;${task1[4]} .
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwelve(task)}
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
          Центростремительное ускорение при движении по окружности (в м/c<sup>2</sup>) вычисляется по формуле α&nbsp;=&nbsp;ω<sup>2</sup>&nbsp;R, 
          где ω — угловая скорость (в c<sup>−1</sup>), R — радиус окружности (в метрах). 
          Пользуясь этой формулой, <b>найдите радиус R</b>, если угловая скорость равна <b>${task1[0]} c<sup>−1</sup></b>, 
          а центростремительное ускорение равно <b>${task1[1]}&nbsp;м&nbsp;/&nbsp;с&nbsp;<sup>2</sup></b>. Ответ дайте в метрах.
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwelve(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Мощность постоянного тока (в ваттах) вычисляется по формуле P = I<sup>2</sup> R, где I&nbsp;—&nbsp;сила тока (в амперах), R&nbsp;—&nbsp;сопротивление (в омах). 
          Пользуясь этой формулой, <b>найдите сопротивление R</b>, если мощность составляет <b>${task1[0]} Вт</b>, а сила тока равна <b>${task1[1]} А</b>. Ответ дайте в омах.
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwelve(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 4:
          answerBlock += `          
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task1[1] === 1 ? 
            `
          В фирме «Родник» стоимость (в рублях) колодца из железобетонных колец рассчитывается по формуле C&nbsp;=&nbsp;6000&nbsp;+&nbsp;4100n, 
          где n — число колец, установленных в колодце. Пользуясь этой формулой, рассчитайте стоимость колодца из ${task1[0]} колец. Ответ дайте в рублях.
            ` 
            :
          `        
          В фирме «Чистая вода» стоимость (в рублях) колодца из железобетонных колец рассчитывается по формуле C&nbsp;=&nbsp;6500&nbsp;+&nbsp;4000n, 
          где n — число колец, установленных в колодце. Пользуясь этой формулой, рассчитайте стоимость колодца из ${task1[0]} колец. Ответ дайте в рублях.
          `}
          
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwelve(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 5:
          answerBlock += `          
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task1[1] === 1 ? 
            `
            Чтобы перевести значение температуры по шкале Фаренгейта в шкалу Цельсия позволяет формула t<sub>C</sub>&nbsp;=&nbsp;<math style="font-size: 140%">
                <mfrac>
                  <mn style="padding-bottom: 5px;">5</mn>  
                  <mn style="padding-top: 5px;">9</mn>   
                </mfrac>   
              </math>&nbsp;(t<sub>F</sub>&nbsp;−&nbsp;32), 

            где t<sub>C</sub> — температура в градусах Цельсия, t<sub>F</sub> — температура в градусах Фаренгейта. Скольким градусам
            по шкале Цельсия соответствует <b>${task1[0]} градусов</b> по шкале Фаренгейта?<hr class="hr-pd_20">
            ` 
            :
          `        
          Чтобы перевести значение температуры по шкале Цельсия в шкалу Фаренгейта, пользуются формулой 
          t<sub>F</sub>&nbsp;=&nbsp;1,8&nbsp;•&nbsp;t<sub>C</sub>&nbsp;+&nbsp;32, где t<sub>C</sub> — температура в градусах Цельсия, t<sub>F</sub> — температура в градусах Фаренгейта. 
          Скольким градусам по шкале Фаренгейта соответствует <b>${task1[0]} градусов</b> по шкале Цельсия?<hr class="hr-pd_20">
          `}
          
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwelve(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 6:
          answerBlock += `          
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task1[0] === 1 ? 
            `
            Кинетическая энергия тела массой 𝑚 кг, двигающегося со скоростью 𝑣 м/с, вычисляется по формуле 
            E&nbsp;=&nbsp;<math style="font-size: 140%">
                <mfrac>
                  <mrow>
                    <mn>𝑚</mn>
                    <msup>
                      <mn style="padding-bottom: 5px;">𝑣</mn>  
                      <mn >2</mn>  
                    </msup> 
                  </mrow>
                  <mn style="padding-top: 5px;">2</mn>
                </mfrac>   
              </math> и измеряется в джоулях (Дж). 
              Известно, что автомобиль массой <b>${task1[1]} кг</b> обладает кинетической энергией <b>${task1[2]} тысяч джоулей</b>. 
              Найдите скорость этого автомобиля в метрах в секунду.<hr class="hr-pd_20">
            ` 
            :
          `        
           Если тело массой 𝑚 кг подвешено на высоте ℎ м над горизонтальной поверхностью земли, то его потенциальная энергия в джоулях вычисляется по формуле 𝑃 = 𝑚𝑔ℎ
           , где 𝑔 = 9,8 м/с<sup>2</sup> − ускорение свободного падения. 
           Найдите массу тела, подвешенного на высоте <b>${task1[1]} м</b> над поверхностью земли, если его потенциальная энергия равна <b>${task1[2]} джоулям</b>. 
           Ответ дайте в килограммах.<hr class="hr-pd_20">
          `}
          
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwelve(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 7:
          answerBlock += `          
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task1[1] === 1 ? 
            `
            Сила Архимеда, выталкивающая на поверхность погружённое в воду тело, вычисляется по формуле 𝐹&nbsp;=&nbsp;𝜌𝑔𝑉 , 
            где 𝜌 = 1000 кг/м<sup>3</sup> − плотность воды, 𝑔 = 9,8 м/с<sup>2</sup> − ускорение свободного падения, 
            а 𝑉 — объём тела в кубических метрах. Сила 𝐹 измеряется в ньютонах. 
            Найдите силу Архимеда, действующую на погружённое в воду тело объёмом <b>${task1[0]} куб. м</b>. 
            Ответ дайте в ньютонах.
            <hr class="hr-pd_20">
            ` 
            :
          `  
          Энергия заряженного конденсатора W (в джоулях) вычисляется по формуле
          W&nbsp;=&nbsp;<math style="font-size: 140%">
                <mfrac>
                  <mrow>
                    <mn>C</mn>
                    <msup>
                      <mn style="padding-bottom: 5px;">U</mn>  
                      <mn >2</mn>  
                    </msup> 
                  </mrow>
                  <mn style="padding-top: 5px;">2</mn>
                </mfrac>   
              </math>      
          , где C — ёмкость конденсатора (в фарадах), а U — разность потенциалов на обкладках конденсатора (в вольтах). 
          Найдите энергию конденсатора ёмкостью 10<sup>−4</sup> фарад, если разность потенциалов на обкладках конденсатора равна ${task1[0]} вольт. Ответ дайте в джоулях.
          
           <hr class="hr-pd_20">
          `}
          
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwelve(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        }   
    } 
    if (taskKey === 'thirteen'){
      let Nomer = 13
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Укажите решение неравенства: ${task1}.
          <hr class="hr-pd_20">
          <div >
            <p>1) ${task2[0]}</p><hr class="hr-pd_20">
            <p>2) ${task2[1]}</p><hr class="hr-pd_20">
            <p>3) ${task2[2]}</p><hr class="hr-pd_20">
            <p>4) ${task2[3]}</p>
          </div>
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
          
          ${task === 21 ? 
            `
          Укажите решение неравенства: ${task1}.
          <hr class="hr-pd_20">
          <div >
            <p>1) ${task2[0]}</p><hr class="hr-pd_20">
            <p>2) ${task2[1]}</p><hr class="hr-pd_20">
            <p>3) ${task2[2]}</p><hr class="hr-pd_20">
            <p>4) ${task2[3]}</p>
          </div>`
            : task === 22 ? 
            `
          Укажите решение неравенства: ${task1}.
          <hr class="hr-pd_20">
          <div style="display: flex; flex-direction: column; align-items: flex-start; vertical-align: middle;">
            <p>1) ${task2[0] === 1 ? `<img style="width: 14em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_1.png">`: `нет решений`}</p><hr class="hr-pd_10">
            <p>2) ${task2[1] === 1 ? `<img style="width: 14em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_2.png">`: `нет решений`}</p><hr class="hr-pd_10">
            <p>3) ${task2[2] === 1 ? `<img style="width: 14em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_3.png">`: `нет решений`}</p><hr class="hr-pd_10">
            <p>4) ${task2[3] === 1 ? `<img style="width: 14em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_4.png">`: `нет решений`}</p>
          </div>
            `
            : task === 23 ? 
            `
          Укажите неравенство, решение которого изображено на рисунке:
          <hr class="hr-pd_10">
          <img style="width: 18em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_0.png">
          <hr class="hr-pd_20">
          <div >
            <p>1) ${task2[0]}</p><hr class="hr-pd_20">
            <p>2) ${task2[1]}</p><hr class="hr-pd_20">
            <p>3) ${task2[2]}</p><hr class="hr-pd_20">
            <p>4) ${task2[3]}</p>
          </div>
            `
            :
            ``}
          
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
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          
          ${task === 31 ? 
            `
          Укажите решение неравенства: ${task1}.
          <hr class="hr-pd_20">
          <div >
            <p>1) ${task2[0]}</p><hr class="hr-pd_20">
            <p>2) ${task2[1]}</p><hr class="hr-pd_20">
            <p>3) ${task2[2]}</p><hr class="hr-pd_20">
            <p>4) ${task2[3]}</p>
          </div>`
            : task === 32 ? 
            `
          Укажите решение неравенства: ${task1}.
          <hr class="hr-pd_20">
          <div style="display: flex; flex-direction: column; align-items: flex-start; vertical-align: middle;">
            <p>1) ${task2[0] === 1 ? `<img style="width: 14em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_1.png">`: `нет решений`}</p><hr class="hr-pd_10">
            <p>2) ${task2[1] === 1 ? `<img style="width: 14em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_2.png">`: `нет решений`}</p><hr class="hr-pd_10">
            <p>3) ${task2[2] === 1 ? `<img style="width: 14em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_3.png">`: `нет решений`}</p><hr class="hr-pd_10">
            <p>4) ${task2[3] === 1 ? `<img style="width: 14em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_4.png">`: `нет решений`}</p>
          </div>
            `
            : task === 33 ? 
            `
          Укажите неравенство, решение которого изображено на рисунке:
          <hr class="hr-pd_10">
          <img style="width: 18em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_0.png">
          <hr class="hr-pd_20">
          <div >
            <p>1) ${task2[0]}</p><hr class="hr-pd_20">
            <p>2) ${task2[1]}</p><hr class="hr-pd_20">
            <p>3) ${task2[2]}</p><hr class="hr-pd_20">
            <p>4) ${task2[3]}</p>
          </div>
            `
            :
            ``}
          
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
        case 4:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          
          ${task === 41 ? 
            `
          Укажите решение системы неравенств:<hr class="hr-pd_10">
          
          <math style="font-size: 130%;">
            <mrow style="display: flex; align-items: center;">
            <mn  style="font-size: 270%; font-family: MathJax_Size3; ">{</mn>
              <mtable style="vertical-align: middle;">
                <mtr >
                  <mtd style="padding-bottom: 5px; text-align: left;">&thinsp;${task1},</mtd>
                </mtr>
              
                <mtr>
                  <mtd style="padding-top: 5px; text-align: left;">&thinsp;${task2}.</mtd>
                </mtr>
              </mtable>
            </mrow>
          </math>
          <hr class="hr-pd_20">
          <div >
            <p>1) ${task3[0]}</p><hr class="hr-pd_20">
            <p>2) ${task3[1]}</p><hr class="hr-pd_20">
            <p>3) ${task3[2]}</p><hr class="hr-pd_20">
            <p>4) ${task3[3]}</p>
          </div>`
            : task === 42 ? 
            `
          Укажите решение системы неравенств:<hr class="hr-pd_10">
          
          <math style="font-size: 130%;">
            <mrow style="display: flex; align-items: center;">
            <mn  style="font-size: 270%; font-family: MathJax_Size3; ">{</mn>
              <mtable style="vertical-align: middle;">
                <mtr >
                  <mtd style="padding-bottom: 5px; text-align: left;">&thinsp;${task1},</mtd>
                </mtr>
              
                <mtr>
                  <mtd style="padding-top: 5px; text-align: left;">&thinsp;${task2}.</mtd>
                </mtr>
              </mtable>
            </mrow>
          </math>
          <hr class="hr-pd_20">
          <div style="display: flex; flex-direction: column; align-items: flex-start; vertical-align: middle;">
            <p>1) ${task3[0] === 1 ? `<img style="width: 14em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_1.png">`: `нет решений`}</p><hr class="hr-pd_10">
            <p>2) ${task3[1] === 1 ? `<img style="width: 14em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_2.png">`: `нет решений`}</p><hr class="hr-pd_10">
            <p>3) ${task3[2] === 1 ? `<img style="width: 14em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_3.png">`: `нет решений`}</p><hr class="hr-pd_10">
            <p>4) ${task3[3] === 1 ? `<img style="width: 14em; vertical-align: middle;" src="../../pages/mathOge/img/task13/13_${taskCounter}_4.png">`: `нет решений`}</p>
          </div>
            `
            : ``}
          
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
    if (taskKey === 'fourteen'){
      let Nomer = 14
      function numberToWordsRu(num) {
        const words = {
            1: 'первом',
            2: 'втором',
            3: 'третьем',
            4: 'четвёртом',
            5: 'пятом',
            6: 'шестом',
            7: 'седьмом',
            8: 'восьмом',
            9: 'девятом',
            10: 'десятом',
            11: 'одиннадцатом',
            12: 'двенадцатом',
            13: 'тринадцатом',
            14: 'четырнадцатом',
            15: 'пятнадцатом',
            16: 'шестнадцатом',
            17: 'семнадцатом',
            18: 'восемнадцатом',
            19: 'девятнадцатом',
            20: 'двадцатом'
        };
        return  words[num]
      }
      function numberToWords(num) {
        const words = {
            0: 'ноль',
            1: 'один',
            2: 'два',
            3: 'три',
            4: 'четыре',
            5: 'пять',
            6: 'шесть',
            7: 'семь',
            8: 'восемь',
            9: 'девять',
            10: 'десять',
            11: 'одиннадцать',
            12: 'двенадцать',
            13: 'тринадцать',
            14: 'четырнадцать',
            15: 'пятнадцать',
            16: 'шестнадцать',
            17: 'семнадцать',
            18: 'восемнадцать',
            19: 'девятнадцать',
            20: 'двадцать'
        };
        return  words[num]
      }
      function numberToWord(num) {
        const words = {
            1: 'первый',
            2: 'второй',
            3: 'третий',
            4: 'четвёртый',
            5: 'пятый',
            6: 'шестой',
            7: 'седьмой',
            8: 'восьмой',
            9: 'девятый',
            10: 'десятый',
        };
        return  words[num]
      }
      function jumpBoll(e){
          let t = task1[0]*100;
          let k = 1;
          let l = ""
          while(t > e){
            t = t / task1[2]
           
            k += 1
            l += `${numberToWord(k)} прыжок: ${t.toString().length > 6 ? t.toFixed(2): t}<br>`
          }
          return l
      }
      function reshFourteen(item){
        if (item === 11){
          return `
          a<sub>n</sub> = a<sub>1</sub> + d • (n — 1)
          <hr class="hr-pd_10">
          a<sub>${task1[3]}</sub> = ${task1[1]} + ${task1[2]} • (${task1[3]} — 1) = ${task1[1] + task1[2]*(task1[3] - 1)}
          `
        }
        else if(item === 12){
          return `
          a<sub>n</sub> = a<sub>1</sub> + d • (n — 1)
          <hr class="hr-pd_10">
          a<sub>${task1[3]}</sub> = ${task1[1]} + ${task1[2]} • (${task1[3]} — 1) = ${task1[1] + task1[2]*(task1[3] - 1)}
          <hr class="hr-pd_10">
          S<sub>n</sub> = 
          &thinsp;<math style="font-size: 140%">
              <mfrac >
                <mrow>
                  <msub>
                    <mn>a</mn>
                    <mn>1</mn>
                  </msub>
                  <mn>&thinsp;+&thinsp;</mn>
                  <msub>
                    <mn>a</mn>
                    <mn>n</mn>
                  </msub>
                </mrow>
                <mn style="padding-top: 5px;">2</mn>
              </mfrac>
            </math> n
            <hr class="hr-pd_10">
            S<sub>${task1[0]}</sub> = &thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mrow style="padding-bottom: 5px;">   
                  <mn>${task1[1]}</mn>
                  <mn>&thinsp;+&thinsp;</mn>
                  <mn>${task1[1] + task1[2]*(task1[3] - 1)}</mn>               
                </mrow>
                <mn style="padding-top: 5px;">2</mn>
              </mfrac>  
            </math> &thinsp;• ${task1[0]} = ${ ((task1[1] + (task1[1] + task1[2]*(task1[3] - 1)))/2)*task1[0]}

          `
        }
        else if(item === 13){
          return `
          a<sub>n</sub> = a<sub>1</sub> + d • (n — 1)
          <hr class="hr-pd_10">
          d = &thinsp;<math style="font-size: 140%">
              <mfrac >
                <mrow style="padding-bottom: 5px;">
                  <msub>
                    <mn>a</mn>
                    <mn>n</mn>
                  </msub>
                  <mn>&thinsp;—&thinsp;</mn>
                  <msub>
                    <mn>a</mn>
                    <mn>1</mn>
                  </msub>
                </mrow>
                <mn style="padding-top: 5px;">n — 1</mn>
              </mfrac>
            </math>
            <hr class="hr-pd_20">
            a<sub>n</sub> = ${task1[2]}, &thinsp;a<sub>1</sub> = ${task1[1]}
            <hr class="hr-pd_20">
            d = &thinsp;<math style="font-size: 140%">
              <mfrac >
                <mrow style="padding-bottom: 5px;">               
                  <mn>${task1[2]}</mn>
                  <mn>&thinsp;—&thinsp;</mn>
                  <mn>${task1[1]}</mn>
                </mrow>
                <mn style="padding-top: 5px;">${task1[4]} — ${task1[3]}</mn>
              </mfrac>
            </math> = <math style="font-size: 140%">
              <mfrac >
                <mrow style="padding-bottom: 5px;">               
                  <mn>${task1[2]-task1[1]}</mn>
                  
                </mrow>
                <mn style="padding-top: 5px;">${task1[4]-task1[3]}</mn>
              </mfrac>
            </math> = ${(task1[2]-task1[1])/(task1[4]-task1[3])}
            <hr class="hr-pd_20">
            a<sub>1</sub> = a<sub>n</sub> — d • (n — 1) = ${task1[2]} — ${(task1[2]-task1[1])/(task1[4]-task1[3])} • (${task1[4]} — 1) = ${task1[2] -((task1[2]-task1[1])/(task1[4]-task1[3]))*(task1[4]-1)}
            <hr class="hr-pd_20">
            a<sub>n</sub> = a<sub>1</sub> + d • (n — 1) = ${task1[2] -((task1[2]-task1[1])/(task1[4]-task1[3]))*(task1[4]-1)} + ${(task1[2]-task1[1])/(task1[4]-task1[3])} • (${task1[0]} — 1) = ${task1[2] -((task1[2]-task1[1])/(task1[4]-task1[3]))*(task1[4]-1) + (task1[2]-task1[1])/(task1[4]-task1[3])*(task1[0]-1)}
            <hr class="hr-pd_20">
          `
        }
        else if(item === 21){
          return `
          ${task1[2]} / ${task1[0]} = ${task1[2]/task1[0]}
          <hr class="hr-pd_10">
          2<sup>${task1[2]/task1[0]}</sup> = ${Math.pow(2,(task1[2]/task1[0]))}
          <hr class="hr-pd_10">
          ${task1[1]} / ${Math.pow(2,(task1[2]/task1[0]))} = ${task1[1] / Math.pow(2,(task1[2]/task1[0]))}
          `
        }
        else if(item === 31){
          return `
          ${task1[0]} • ${task1[1]} = ${task1[0]*task1[1]}<hr class="hr-pd_10">
          ${task1[2]} - ${task1[0]*task1[1]} = ${task1[2] - task1[0]*task1[1]}
          `
        }
        else if(item === 41){
          return `
          ${task1[2]} / ${task1[1]} = <b>${task1[2]/task1[1]}</b> 
          <hr class="hr-pd_10">
          ${task1[3]}<b><sup>${task1[2]/task1[1]}</sup></b> = ${Math.pow(task1[3],task1[2]/task1[1])}
          <hr class="hr-pd_10">
          ${task1[0]} • ${Math.pow(task1[3],task1[2]/task1[1])} = ${task1[0]*Math.pow(task1[3],task1[2]/task1[1])}

          `
        }
        else if(item === 51){  
          return `
          первый прыжок: ${task1[0]*100}<br>
          ${jumpBoll(task1[1])}

          `
        }
        else if(item === 61){  
          return `
          a<sub>n</sub> = a<sub>1</sub> + d • (n — 1)
          <hr class="hr-pd_10">
          d = —${task1[1]}
          <hr class="hr-pd_10">
          a<sub>${task1[2]}</sub> = ${task1[0]} — ${task1[1]} • (${task1[2]} — 1) = ${task1[0] - task1[1]*(task1[2] - 1)}
          <hr class="hr-pd_10">
          S<sub>n</sub> = 
          &thinsp;<math style="font-size: 140%">
              <mfrac >
                <mrow>
                  <msub>
                    <mn>a</mn>
                    <mn>1</mn>
                  </msub>
                  <mn>&thinsp;+&thinsp;</mn>
                  <msub>
                    <mn>a</mn>
                    <mn>n</mn>
                  </msub>
                </mrow>
                <mn style="padding-top: 5px;">2</mn>
              </mfrac>
            </math> n
            <hr class="hr-pd_10">
            S<sub>${task1[2]}</sub> = &thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mrow style="padding-bottom: 5px;">   
                  <mn>${task1[0]}</mn>
                  <mn>&thinsp;+&thinsp;</mn>
                  <mn>${task1[0] - task1[1]*(task1[2] - 1)}</mn>               
                </mrow>
                <mn style="padding-top: 5px;">2</mn>
              </mfrac>  
            </math> &thinsp;• ${task1[2]} = ${((task1[0] + (task1[0] - task1[1]*(task1[2] - 1)))/2)*task1[2]}

          `
        }
        else if(item === 62){  
          return `
          a<sub>n</sub> = a<sub>1</sub> + d • (n — 1)
          <hr class="hr-pd_10">
          d = —${task1[1]}
          <hr class="hr-pd_10">
          n = ${task1[0]} / ${task1[1]} = ${task1[0]/task1[1]}
          <hr class="hr-pd_10">
          a<sub>${task1[2]}</sub> = ${task1[0]} — ${task1[1]} • (${task1[2]} — 1) = ${task1[0] - task1[1]*(task1[2] - 1)}
          <hr class="hr-pd_10">
          S<sub>n</sub> = 
          &thinsp;<math style="font-size: 140%">
              <mfrac >
                <mrow>
                  <msub>
                    <mn>a</mn>
                    <mn>1</mn>
                  </msub>
                  <mn>&thinsp;+&thinsp;</mn>
                  <msub>
                    <mn>a</mn>
                    <mn>n</mn>
                  </msub>
                </mrow>
                <mn style="padding-top: 5px;">2</mn>
              </mfrac>
            </math> n
            <hr class="hr-pd_10">
            S<sub>${task1[2]}</sub> = &thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mrow style="padding-bottom: 5px;">   
                  <mn>${task1[0]}</mn>
                  <mn>&thinsp;+&thinsp;</mn>
                  <mn>${task1[0] - task1[1]*(task1[2] - 1)}</mn>               
                </mrow>
                <mn style="padding-top: 5px;">2</mn>
              </mfrac>  
            </math> &thinsp;• ${task1[2]} = ${((task1[0] + (task1[0] - task1[1]*(task1[2] - 1)))/2)*task1[2]}

          `
        }
        else if(item === 71){
          return `
          ${task1[2]} • (${task1[2]} — 1) / 2 = ${task1[2]*(task1[2]-1) / 2} 
          <hr class="hr-pd_10">
          ${task1[2]} • ${task1[0]} + ${task1[2]*(task1[2]-1) / 2} • ${task1[1]} =
          ${(task1[2]*task1[0]).toFixed(1)} + ${((task1[2]*(task1[2]-1) / 2) * task1[1]).toFixed(1)} =
          ${(task1[2]*task1[0] + (task1[2]*(task1[2]-1) / 2) * task1[1]).toFixed(1)}
          `

        }
        else if(item === 81){
          return `
          a<sub>n</sub> = a<sub>1</sub> + d • (n — 1)
          <hr class="hr-pd_10">
          a<sub>${task1[2]}</sub> = ${task1[0]} + ${task1[1]} • (${task1[2]} — 1) = ${task1[0] + task1[1]*(task1[2] - 1)}
          <hr class="hr-pd_10">
          S<sub>n</sub> = 
          &thinsp;<math style="font-size: 140%">
              <mfrac >
                <mrow>
                  <msub>
                    <mn>a</mn>
                    <mn>1</mn>
                  </msub>
                  <mn>&thinsp;+&thinsp;</mn>
                  <msub>
                    <mn>a</mn>
                    <mn>n</mn>
                  </msub>
                </mrow>
                <mn style="padding-top: 5px;">2</mn>
              </mfrac>
            </math> n
            <hr class="hr-pd_10">
            S<sub>${task1[2]}</sub> = &thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mrow style="padding-bottom: 5px;">   
                  <mn>${task1[0]}</mn>
                  <mn>&thinsp;+&thinsp;</mn>
                  <mn>${task1[0] + task1[1]*(task1[2] - 1)}</mn>               
                </mrow>
                <mn style="padding-top: 5px;">2</mn>
              </mfrac>  
            </math> &thinsp;• ${task1[2]} = ${ ((task1[0] + (task1[0] + task1[1]*(task1[2] - 1)))/2)*task1[2]}

          `
        }
        else{return `...`}

      }
      
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 11 ? 
            `
            В амфитеатре ${task1[0]} рядов. В первом ряду ${task1[1]} мест, а в каждом следующем на ${task1[2]} места больше, чем в предыдущем. 
            Сколько мест в ${numberToWordsRu(task1[3])} ряду амфитеатра?
            `
            : 
            task === 12 ? 
            `
            В амфитеатре ${task1[0]} рядов. В первом ряду ${task1[1]} мест, а в каждом следующем на ${task1[2]} места больше, чем в предыдущем. Сколько всего мест в амфитеатре?
            `
            : task === 13 ? 
            `
            В амфитеатре ${task1[0]} рядов, причём в каждом следующем ряду на одно и то же число мест больше, чем в предыдущем. 
            В ${numberToWordsRu(task1[3])} ряду ${task1[1]} мест, а в ${numberToWordsRu(task1[4])} ряду ${task1[2]} мест. Сколько мест в последнем ряду амфитеатра?
            `
            :
             ``}
          

          <hr class="hr-pd_20">
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshFourteen(task)}
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
          В ходе распада радиоактивного изотопа его масса уменьшается вдвое каждые ${task1[0]} минут. 
          В начальный момент масса изотопа составляла ${task1[1]} мг. Найдите массу изотопа через ${task1[2]} минуты. 
          Ответ дайте в миллиграммах.

          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshFourteen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">    
          При проведении опыта вещество равномерно охлаждали в течение 10 минут. 
          При этом каждую минуту его температура уменьшалась на ${task1[0]} °C. 
          Найдите температуру вещества в градусах Цельсия через ${task1[1]} минуты после начала опыта, 
          если начальная температура вещества составляла ${task1[2]} °C.
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshFourteen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 4:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">    
          В ходе биологического эксперимента в чашку Петри с питательной средой поместили колонию микроорганизмов массой ${task1[0]} мг. 
          За каждые 30 минут масса колонии увеличивается в ${task1[1]} раза. 
          Найдите массу колонии микроорганизмов через ${task1[2]} минут после начала эксперимента.
          Ответ дайте в миллиграммах.
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshFourteen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 5:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">    
          Каучуковый мячик с силой бросили на асфальт. Отскочив, мячик подпрыгнул на ${task1[0]} м, 
          а при каждом следующем прыжке он поднимался на высоту в ${numberToWords(task1[2])} раза меньше предыдущей. 
          При каком по счёту прыжке мячик в первый раз не достигнет высоты ${task1[1]} см?
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshFourteen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 6:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">    
          ${task === 61 ? 
            `Водитель автомобиля начал торможение. 
          За секунду после начала торможения автомобиль проехал ${task1[0]}&nbsp;м, а за каждую следующую секунду он проезжал на ${task1[1]}&nbsp;м меньше, чем за предыдущую. 
          Сколько метров автомобиль прошёл за первые ${task1[2]}&nbsp;секунд торможения?
            `
            : task === 62 ?
            `
            Водитель автомобиля начал торможение. 
            За секунду после начала торможения автомобиль проехал ${task1[0]}&nbsp;м, а за каждую следующую секунду он проезжал на ${task1[1]}&nbsp;м меньше, чем за предыдущую. 
            Сколько метров автомобиль прошёл до полной остановки?
            `
            : ``}
          
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshFourteen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 7:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">    
          Поезд начал движение от станции. За первую секунду состав сдвинулся на ${task1[0]}&nbsp;м, 
          а за каждую следующую секунду он проходил на ${task1[1]}&nbsp;м больше, чем за предыдущую. 
          Сколько метров состав прошёл за первые ${task1[2]}&nbsp;секунд движения?
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshFourteen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 8:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">    
          Камень бросают в глубокое ущелье. За первую секунду он пролетает ${task1[0]}&nbsp;м, а за каждую следующую секунду на ${task1[1]}&nbsp;м больше, 
          чем за предыдущую, до тех пор, пока не достигнет дна ущелья. Сколько метров пролетит камень за первые ${task1[2]}&nbsp;секунд?
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshFourteen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        }   
    }     
    if (taskKey === 'fifteen'){
      let Nomer = 15
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 11 ? 
            `
          В треугольнике ABC угол C равен ${task1[0]}°. Найдите внешний угол при вершине C. Ответ дайте в градусах.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1277.png"></div>
            `
            : task === 12 ? 
            `
          В треугольнике ABC известно, что AB=BC, ∠ABC = ${task1[0]}°. Найдите угол BCA. Ответ дайте в градусах.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 14em; " src="../../pages/mathOge/img/task15/15_1278.png"></div>
           
            ` 
            : task === 13 ? 
            `
            В треугольнике ABC известно, что ∠BAC = ${task1[0]}°, AD — биссектриса. Найдите угол BAD. Ответ дайте в градусах.
            <hr class="hr-pd_20">
           <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1279.png"></div>
            `
            : task === 14 ? 
            `
            Один из острых углов прямоугольного треугольника равен ${task1[0]}°. Найдите его другой острый угол. Ответ дайте в градусах.
           <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 16em; " src="../../pages/mathOge/img/task15/15_1281.png"></div>
           
            `
            : task === 15 ? 
             `В остроугольном треугольнике ABC проведена высота BH, ∠BAC = ${task1[0]}°. Найдите угол ABH. Ответ дайте в градусах.
             <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 13em; " src="../../pages/mathOge/img/task15/15_1284.png"></div>
           
             `
             : task === 16 ? 
             `В треугольнике два угла равны ${task1[0]}° и ${task1[1]}°. Найдите его третий угол. Ответ дайте в градусах.
             <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1285.png"></div>
           
             `
             : 
             ``}
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
          ${task === 21 ? 
            `${
            task1[1] === "m" ? 
              `Медиана равностороннего треугольника равна ${task1[0]}${sqrtNum(3)}. 
              Найдите сторону этого треугольника.
              <hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1345.png"></div>
           
              `
            : 
            task1[1] === "v" ? 
              `Высота равностороннего треугольника равна ${task1[0]}${sqrtNum(3)}. 
              Найдите сторону этого треугольника.
              <hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1350.png"></div>
           
              `
            :
            task1[1] === "b" ? 
              `Биссектриса равностороннего треугольника равна ${task1[0]}${sqrtNum(3)}. 
              Найдите сторону этого треугольника.
              <hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1349.png"></div>
           
              `
            :
            task1[1] === "sb" ? 
              `Сторона равностороннего треугольника равна ${task1[0]}${sqrtNum(3)}. 
              Найдите биссектрису этого треугольника.
              <hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1349.png"></div>
           
              `
            :  task1[1] === "sm" ? 
              `Сторона равностороннего треугольника равна ${task1[0]}${sqrtNum(3)}. 
              Найдите медиану этого треугольника.
              <hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1345.png"></div>
           
              `
            : task1[1] === "sv" ? 
              `Сторона равностороннего треугольника равна ${task1[0]}${sqrtNum(3)}. 
              Найдите высоту этого треугольника.
              <hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1350.png"></div>
           
              `
            :

            ``}` 
            : task === 22 ? 
            `${
            task1[2] === "g" ? 
              `Катеты прямоугольного треугольника равны ${task1[0]} и ${task1[1]}. Найдите гипотенузу этого треугольника.
              <hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 14em; " src="../../pages/mathOge/img/task15/15_1346.png"></div>
           
              `
            : 
            `
            В прямоугольном треугольнике катет и гипотенуза равны ${task1[0]} и ${task1[1]} соответственно. Найдите другой катет этого треугольника.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 14em; " src="../../pages/mathOge/img/task15/15_1346.png"></div>
           
            `}` 
            : task === 23 ? 
            `
            В треугольнике ABC известно, что AC = ${task1[0]}, BM — медиана, BM = ${task1[1]}. Найдите AM.
             <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 14em; " src="../../pages/mathOge/img/task15/15_1356.png"></div>
           
            `
            : task === 24 ? 
            `
            Точки M и N являются серединами сторон AB и BC треугольника ABC, сторона AB равна ${task1[0]}, сторона BC равна ${task1[1]}, сторона AC равна ${task1[2]}. 
            Найдите MN.
             <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 14em; " src="../../pages/mathOge/img/task15/15_1365.png"></div>
           
            `
            : task === 25 ? 
            `
            В равнобедренном треугольнике ABC с основанием AC  внешний угол при вершине C  равен ${task1[0]}° . Найдите величину угла ABC. Ответ дайте в градусах.
             <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 11em; " src="../../pages/mathOge/img/task15/15_1417.png"></div>
           
            `
            :
            
            ``}
          
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
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 31 ? 
            `
            Два катета прямоугольного треугольника равны ${task1[0]} и ${task1[1]}. Найдите площадь этого треугольника.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 14em; " src="../../pages/mathOge/img/task15/15_1346.png"></div>
           
            `
            : task === 32 ? 
            `
            В треугольнике ABC известно, что AB = ${task1[0]}, BC = ${task1[1]}, sin∠ABC = 
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[2]}</mn>
                <mn style="padding-top: 5px;">${task1[3]}</mn>
              </mfrac>
            </math>.
            Найдите площадь треугольника ABC.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1419.png"></div>
           
            `
            : task === 33 ? 
            `
            Сторона треугольника равна ${task1[0]}, а высота, проведённая к этой стороне, равна ${task1[1]}. Найдите площадь этого треугольника.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 14em; " src="../../pages/mathOge/img/task15/15_1428.png"></div>
           
            `
            :

            ``}
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
        case 4:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 41 ? 
            `
            ${task1[2] === "s" ? 
            `
          В треугольнике ABC угол C равен 90°, AC = ${task1[0]}, AB = ${task1[1]}. Найдите sinB.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 8em; " src="../../pages/mathOge/img/task15/15_1450.png"></div>
            `
            : task1[2] === "c" ? 
            `
          В треугольнике ABC угол C равен 90°, BC = ${task1[0]}, AB = ${task1[1]}. Найдите cosB.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1456.png"></div>
            `
            : task1[2] === "t" ? 
            `
          В треугольнике ABC угол C равен 90°, BC = ${task1[0]}, AC = ${task1[1]}. Найдите tgB.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 8em; " src="../../pages/mathOge/img/task15/15_1450.png"></div>
            `
            :
             ``}
            `
            : task === 42 ? 
            `
            ${task1[3] === "ss" ? 
              `
            В треугольнике ABC угол C равен 90°, 
            sinB =
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                <mn style="padding-top: 5px;">${task1[1]}</mn>
              </mfrac>
            </math> , 
            AB = ${task1[2]}. Найдите AC.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 8em; " src="../../pages/mathOge/img/task15/15_1450.png"></div>
           
              `
              : task1[3] === "sc" ? 
              `
            В треугольнике ABC угол C равен 90°, 
            cosB =
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                <mn style="padding-top: 5px;">${task1[1]}</mn>
              </mfrac>
            </math> , 
            AB = ${task1[2]}. Найдите BC.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 8em; " src="../../pages/mathOge/img/task15/15_1450.png"></div>
           
              `
              : task1[3] === "st" ? 
              `
            В треугольнике ABC угол C равен 90°, 
            tgB =
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                <mn style="padding-top: 5px;">${task1[1]}</mn>
              </mfrac>
            </math> , 
            BC = ${task1[2]}. Найдите AC.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 8em; " src="../../pages/mathOge/img/task15/15_1450.png"></div>
           
              `
              : 
              ``}
            

            `
            :
            ``}
          
          
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
    if (taskKey === 'sixteen'){
      let Nomer = 16
      function reshSixteen(item){
        if(item === 11 || item === 15){
          return `
          ${task1[2] === 1 ? 
            `
          ∠CAD = ∠CBD = ${task1[1]}°<hr class="hr-pd_10">
          ∠ABC = ${task1[0]}°<hr class="hr-pd_10">
          ∠ABC = ∠ABD + ∠CBD<hr class="hr-pd_10">
          ∠ABD = ∠ABC — ∠CBD = ${task1[0]}° — ${task1[1]}° = ${task1[0]-task1[1]}°<hr class="hr-pd_10">
          ∠ABD = ${task1[0]-task1[1]}°`
            :
             `
          ∠CAD = ∠CBD = ${task1[1]}°<hr class="hr-pd_10">
          ∠ABD = ${task1[0]}°<hr class="hr-pd_10">
          ∠ABC = ∠ABD + ∠CBD = ${task1[0]}° + ${task1[1]}° = ${task1[0]+task1[1]}°<hr class="hr-pd_10">
        
          ∠ABC = ${task1[0]+task1[1]}°

             `}`
        }
        else if(item === 12){
          return `
          ${task1[1] === 1 ? 
            `
            180° — ${task1[0]}°  / 2 = ${(180-task1[0])/2}°
            `
            : 
            `
            180° — ${task1[0]}° • 2 = ${180-task1[0]*2}°

            `}
          `

        }
        else if(item === 13){
          return `
          90° — ${task1[0]}° = ${(90-task1[0])}°
          
          `

        }
        else if(item === 14){
          return `
          ${task1[1] === 1 ? 
            `
            ${task1[0]}° / 2 = ${(task1[0])/2}°
            `
            : ``}
          `

        }
        else if(item === 21){
          return `
          a = ${task1[0]} • 6 = ${task1[0]*6}
          `
        }
        else if(item === 22){
          return `
          r = ${task1[0]} • 3 / 6 = ${task1[0]*3/6}
          `
        }
        else if(item === 23 || item === 24 || item === 25){
          return `
          h = r • 2 = ${task1[0]} • 2 = ${task1[0]*2}<hr class="hr-pd_10">
          
          `
        }
        else if(item === 26){
          return `
          a = r • 2 = ${task1[0]} • 2 = ${task1[0]*2}<hr class="hr-pd_10">
          a<sup>2</sup> = ${task1[0]*2}<sup>2</sup> = ${(task1[0]*2)*(task1[0]*2)}
          `
        }
        else if(item === 27){
          return `
          Площадь треугольника равна произведению его полупериметра на радиус вписанной окружности:<hr class="hr-pd_10">
          S = p • r = ${task1[0]} / 2 • ${task1[2]} = ${task1[0]/ 2 * task1[2]}.<hr class="hr-pd_10">
          Длина одной из сторон - лишние данные, игнорируем их.
          `
        }
        else if(item === 28){
          return `
          r = a / 2 = ${task1[0]} / 2 = ${task1[0]/ 2}
          `
        }
        else if(item === 29 || item === 291){
          return `
          AB + CD = BC + AD<hr class="hr-pd_10">
          AD = AB + CD — BC = ${task1[0] + task1[2]-task1[1]}
          `
        }
        else if(item === 30){
          return `
          (${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span style="border-top: 0.099em solid ">2</span>)<sup>2</sup> +
          (${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span style="border-top: 0.099em solid ">2</span>)<sup>2</sup> =
          ${task1[0]*task1[0]*2} + ${task1[0]*task1[0]*2} = ${task1[0]*task1[0]*2 + task1[0]*task1[0]*2}<hr class="hr-pd_10">
          d = 2 • <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span style="border-top: 0.099em solid ">${task1[0]*task1[0]*2 + task1[0]*task1[0]*2}</span> = 
          2 • ${Math.sqrt(task1[0]*task1[0]*2 + task1[0]*task1[0]*2)} = ${2 * Math.sqrt(task1[0]*task1[0]*2 + task1[0]*task1[0]*2)}
          `
        }
        else if(item === 31){
          return `
          90° — ${task1[0]}° = ${90-task1[0]}°
          `
        }
        else if(item === 311){
          return `
          AB = 2 • ${task1[0]} = ${2*task1[0]} 
          <hr class="hr-pd_10">
          AC<sup>2</sup> = AB<sup>2</sup> — BC<sup>2</sup>
          <hr class="hr-pd_10">
          AC<sup>2</sup> = ${2*task1[0]}<sup>2</sup> — ${task1[1]}<sup>2</sup>
          <hr class="hr-pd_10">
          AC<sup>2</sup> = ${2*task1[0]*2*task1[0]} — ${task1[1]*task1[1]}
          <hr class="hr-pd_10">
          AC<sup>2</sup> = ${2*task1[0]*2*task1[0] - task1[1]*task1[1]}
          <hr class="hr-pd_10">
          AC = <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${2*task1[0]*2*task1[0] - task1[1]*task1[1]}</span> = ${Math.sqrt(2*task1[0]*2*task1[0] - task1[1]*task1[1])}
          `
        }
        else if(item === 312){
          return `
          AB = 2 • ${task1[0]} = ${2*task1[0]} 
          <hr class="hr-pd_10">
          BC<sup>2</sup> = AB<sup>2</sup> — AC<sup>2</sup>
          <hr class="hr-pd_10">
          BC<sup>2</sup> = ${2*task1[0]}<sup>2</sup> — ${task1[1]}<sup>2</sup>
          <hr class="hr-pd_10">
          BC<sup>2</sup> = ${2*task1[0]*2*task1[0]} — ${task1[1]*task1[1]}
          <hr class="hr-pd_10">
          BC<sup>2</sup> = ${2*task1[0]*2*task1[0] - task1[1]*task1[1]}
          <hr class="hr-pd_10">
          BC = <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${2*task1[0]*2*task1[0] - task1[1]*task1[1]}</span> = ${Math.sqrt(2*task1[0]*2*task1[0] - task1[1]*task1[1])}


          `
        }
        else if(item === 32){
          return `
          r = a • <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span> / 3 = 
          ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span> • <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span> / 3 =
          ${task1[0]}
          
          `
        }
        else if(item === 321){
          return `
          R = 
          <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">a √3</mn>
                <mn style="padding-top: 5px;">3</mn>
              </mfrac>
            </math> 
          <hr class="hr-pd_10">
          
          `
        }
        else if(item === 33 || item === 331){
          return `
          180° — ${task1[0]}° = ${180-task1[0]}°
          `
        }
        else if(item === 34){
          return `
          (${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span style="border-top: 0.099em solid ">2</span>)<sup>2</sup> +
          (${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span style="border-top: 0.099em solid ">2</span>)<sup>2</sup> =
          ${task1[0]*task1[0]*2} + ${task1[0]*task1[0]*2} = ${task1[0]*task1[0]*2 + task1[0]*task1[0]*2}<hr class="hr-pd_10">
          d = <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span style="border-top: 0.099em solid ">${task1[0]*task1[0]*2 + task1[0]*task1[0]*2}</span> = 
          ${Math.sqrt(task1[0]*task1[0]*2 + task1[0]*task1[0]*2)} <hr class="hr-pd_10">
          r = d / 2 = = ${Math.sqrt(task1[0]*task1[0]*2 + task1[0]*task1[0]*2)} / 2 = ${Math.sqrt(task1[0]*task1[0]*2 + task1[0]*task1[0]*2) / 2} 
          
          `
        }
        else if(item === 35){
          return `
          <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">AB</mn>
                <mn style="padding-top: 5px;">sinC</mn>
              </mfrac>
            </math> = 2R
          <hr class="hr-pd_10">
          `
        }
        else if(item === 36){
          return `
          2 • ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">2</span> = 
          ${2*task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">2</span>
          <hr class="hr-pd_10">
          2a<sup>2</sup> = (${2*task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">2</span>)<sup>2</sup>
          <hr class="hr-pd_10">
          2a<sup>2</sup> = ${2*task1[0]*2*task1[0]} • 2
          <hr class="hr-pd_10">
          a<sup>2</sup> = ${2*task1[0]*2*task1[0]}
          <hr class="hr-pd_10">
          a = <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${2*task1[0]*2*task1[0]}</span> = ${Math.sqrt(2*task1[0]*2*task1[0])}
          `
        }
        else if(item === 37){
          return `
          AB = AC<sup>2</sup> + BC<sup>2</sup>
          <hr class="hr-pd_10">
          AB<sup>2</sup> = ${task1[0]*task1[0]} + ${task1[1]*task1[1]}
          <hr class="hr-pd_10">
          AB<sup>2</sup> = ${task1[0]*task1[0] + task1[1]*task1[1]}
          <hr class="hr-pd_10">
          AB = <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]*task1[0] + task1[1]*task1[1]}</span> = ${Math.sqrt(task1[0]*task1[0] + task1[1]*task1[1])}
          <hr class="hr-pd_10">
          r = AB / 2 = ${Math.sqrt(task1[0]*task1[0] + task1[1]*task1[1]) / 2}

          `
        }
        else if(item === 38){
          return `
          <img style="display: block;  width: 11em; " src="../../pages/mathOge/img/task16/16_1783_a.png">
          <hr class="hr-pd_10">
          ${task1.length === 1 ? 
          `
          DO = x,&thinsp; AD = 2x,&thinsp; AO = ${task1[0]}
          <hr class="hr-pd_10">
          AO<sup>2</sup> = DO<sup>2</sup> + AD<sup>2</sup>
          <hr class="hr-pd_10">
          ${task1[0]}<sup>2</sup> = x<sup>2</sup> + (2x)<sup>2</sup>
          <hr class="hr-pd_10">
          ${task1[0]*task1[0]} = x<sup>2</sup> + 4x<sup>2</sup>
          <hr class="hr-pd_10">
          5x<sup>2</sup> = ${task1[0]*task1[0]}
          <hr class="hr-pd_10">
          x<sup>2</sup> = ${task1[0]*task1[0]} / 5
          <hr class="hr-pd_10">
          x = <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]*task1[0] / 5}</span>
          <hr class="hr-pd_10">
          S = 2x • 2x =  
          2<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]*task1[0] / 5}</span>
          •
          2<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]*task1[0] / 5}</span>
          <hr class="hr-pd_10">
          S = 4 • ${task1[0]*task1[0]/5} = ${4*task1[0]*task1[0]/5}
          `
          : task1.length === 2 ?
          `
          DO = x,&thinsp; AD = 2x,&thinsp; AO = ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[1]}</span>
          <hr class="hr-pd_10">
          AO<sup>2</sup> = DO<sup>2</sup> + AD<sup>2</sup>
          <hr class="hr-pd_10">
          (${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[1]}</span>)<sup>2</sup> = x<sup>2</sup> + (2x)<sup>2</sup>
          <hr class="hr-pd_10">
          ${task1[0]*task1[0]*task1[1]} = x<sup>2</sup> + 4x<sup>2</sup>
          <hr class="hr-pd_10">
          5x<sup>2</sup> = ${task1[0]*task1[0]*task1[1]}
          <hr class="hr-pd_10">
          x<sup>2</sup> = ${task1[0]*task1[0]*task1[1]} / 5
          <hr class="hr-pd_10">
          x = <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]*task1[0]*task1[1] / 5}</span>
          <hr class="hr-pd_10">
          S = 2x • 2x =  
          2<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]*task1[0]*task1[1] / 5}</span>
          •
          2<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]*task1[0]*task1[1] / 5}</span>
          <hr class="hr-pd_10">
          S = 4 • ${task1[0]*task1[0]*task1[1]/5} = ${4*task1[0]*task1[0]*task1[1]/5}
          ` 
          : task1.length === 4 ?
          `
          DO = x,&thinsp; AD = 2x,&thinsp; AO = <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]}</span>
          <hr class="hr-pd_10">
          AO<sup>2</sup> = DO<sup>2</sup> + AD<sup>2</sup>
          <hr class="hr-pd_10">
          (<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]}</span>)<sup>2</sup> = x<sup>2</sup> + (2x)<sup>2</sup>
          <hr class="hr-pd_10">
          ${task1[0]} = x<sup>2</sup> + 4x<sup>2</sup>
          <hr class="hr-pd_10">
          5x<sup>2</sup> = ${task1[0]}
          <hr class="hr-pd_10">
          x<sup>2</sup> = ${task1[0]} / 5
          <hr class="hr-pd_10">
          x = <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0] / 5}</span>
          <hr class="hr-pd_10">
          S = 2x • 2x =  
          2<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0] / 5}</span>
          •
          2<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0] / 5}</span>
          <hr class="hr-pd_10">
          S = 4 • ${task1[0]/5} = ${4*task1[0]/5}
          ` 
          : 
          `
          DO = x,&thinsp; AD = 2x,&thinsp; 
          AO = <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">√${task1[0]}</mn>
                <mn style="padding-top: 5px;">${task1[1]}</mn>
              </mfrac>
            </math> 
            <hr class="hr-pd_10">
            AO<sup>2</sup> = DO<sup>2</sup> + AD<sup>2</sup>
          <hr class="hr-pd_10">

          (<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]}</span> / ${task1[1]})<sup>2</sup> = x<sup>2</sup> + (2x)<sup>2</sup>
          <hr class="hr-pd_10">
          ${task1[0]/(task1[1]*task1[1])} = x<sup>2</sup> + 4x<sup>2</sup>
          <hr class="hr-pd_10">
          5x<sup>2</sup> = ${task1[0]/(task1[1]*task1[1])}
          <hr class="hr-pd_10">
          x<sup>2</sup> = ${task1[0]/(task1[1]*task1[1])} / 5
          <hr class="hr-pd_10">
          x = <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]/(task1[1]*task1[1]) / 5}</span>
          <hr class="hr-pd_10">
          S = 2x • 2x =  
          2<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]/(task1[1]*task1[1]) / 5}</span>
          •
          2<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]/(task1[1]*task1[1]) / 5}</span>
          <hr class="hr-pd_10">
          S = 4 • ${task1[0]/(task1[1]*task1[1]) / 5} = ${4*(task1[0]/(task1[1]*task1[1]) / 5)}

          `} `
        }
        else{
          return`...`
        }
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 11 ? 
            `
            ${task1[2] === 1 ? 
              `
              Четырёхугольник ABCD вписан в окружность. Угол ABC равен ${task1[0]}°, угол CAD равен ${task1[1]}°. Найдите угол ABD. Ответ дайте в градусах.
              `
              : 
              `
              Четырёхугольник ABCD вписан в окружность. Угол ABD равен ${task1[0]}°, угол CAD равен ${task1[1]}°. Найдите угол ABC. Ответ дайте в градусах.
              `}
          
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1509.png"></div>
          
            `
            : task === 12 ?
            `
            ${task1[1] === 1 ?
              `
            В окружности с центром в точке O отрезки AC и BD — диаметры. Угол AOD равен ${task1[0]}°. Найдите угол ACB. Ответ дайте в градусах.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1512.png"></div>
          

              `
              :
              `
              Отрезки AC и BD — диаметры окружности с центром в точке O. Угол ACB равен ${task1[0]}°. Найдите угол AOD. Ответ дайте в градусах.
              <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1512.png"></div>
          
              `}
            `
            : task === 13 ? 
            `
            На окружности по разные стороны от диаметра AB взяты точки M и N. Известно, что ∠NBA = ${task1[0]}°. 
            Найдите угол NMB. Ответ дайте в градусах.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1513.png"></div>
          
            `
            : task === 14 ? 
            `
            ${task1[1] === 1 ? 
              `
            Треугольник ABC вписан в окружность с центромв точке O. Точки O и C лежат в одной полуплоскости относительно прямой AB. 
            Найдите угол ACB, если угол AOB равен ${task1[0]}°. Ответ дайте в градусах.
             <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1515.png"></div>
          
            ` 
              : 
              ``}
            
           
            `
            : task === 15 ? 
            `
            ${task1[2] === 1 ? 
              `
              Четырёхугольник ABCD вписан в окружность. Угол ABC равен ${task1[0]}°, угол CAD равен ${task1[1]}°. Найдите угол ABD. Ответ дайте в градусах.
              `
              : 
              `
              Четырёхугольник ABCD вписан в окружность. Угол ABD равен ${task1[0]}°, угол CAD равен ${task1[1]}°. Найдите угол ABC. Ответ дайте в градусах.
              `}
          
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_2071.png"></div>
          
            `
            :
             ``}

          <hr class="hr-pd_20">
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshSixteen(task)}
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
          ${task === 21 ? 
            `Радиус окружности, вписанной в равносторонний треугольник, равен ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span>. Найдите длину стороны этого треугольника.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1563.png"></div>
          
            `
            : task === 22 ? 
            `Сторона равностороннего треугольника равна ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span>. 
            Найдите радиус окружности, вписанной в этот треугольник.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1563.png"></div>
          
            `
            : task === 23 ? 
            `Радиус окружности, вписанной в равнобедренную трапецию, равен ${task1[0]}. Найдите высоту этой трапеции.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1565.png"></div>
          
            `
            : task === 24 ? 
            `Радиус окружности, вписанной в прямоугольную трапецию, равен ${task1[0]}. Найдите высоту этой трапеции.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1567.png"></div>
          
            `
            : task === 25 ? 
            `Радиус окружности, вписанной в трапецию, равен ${task1[0]}. Найдите высоту этой трапеции.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1570.png"></div>
          
            `
            : task === 26 ? 
            `Найдите площадь квадрата, описанного около окружности радиуса ${task1[0]}.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 10em; " src="../../pages/mathOge/img/task16/16_1566.png"></div>
          
            `
            : task === 27 ? 
            `Периметр треугольника равен ${task1[0]}, одна из сторон равна ${task1[1]}, а радиус вписанной в него окружности равен ${task1[2]}. Найдите площадь этого треугольника.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1568.png"></div>
          
            `
            : task === 28 ? 
            `Сторона квадрата равна ${task1[0]}. Найдите радиус окружности, вписанной в этот квадрат.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 10em; " src="../../pages/mathOge/img/task16/16_1566.png"></div>
          
            `
            : task === 29 ? 
            `Четырёхугольник ABCD описан около окружности, AB = ${task1[0]}, BC = ${task1[1]}, CD = ${task1[2]}. Найдите AD.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1571.png"></div>
          
            `
            : task === 291 ? 
            `Трапеция ABCD с основаниями AD и BC описана около окружности, AB = ${task1[0]}, BC = ${task1[1]}, CD = ${task1[2]}. Найдите AD.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task16/16_1575.png"></div>
          
            `
            : task === 30 ? 
            `Сторона равностороннего треугольника равна ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span style="border-top: 0.099em solid ">2</span>. 
            Найдите радиус окружности, вписанной в этот треугольник.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 9em; " src="../../pages/mathOge/img/task16/16_1574.png"></div>
          
            `
            :
             ``}
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshSixteen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 31 ? 
            `
            Центр окружности, описанной около треугольника ABC, лежит на стороне AB. Найдите угол ABC, если угол BAC равен ${task1[0]}°. Ответ дайте в градусах.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 11em; " src="../../pages/mathOge/img/task16/16_1673.png"></div>
          
            ` 
            : task === 311 ? 
            `
            Центр окружности, описанной около треугольника ABC, лежит на стороне AB. Радиус окружности равен ${task1[0]}. Найдите AC, если BC = ${task1[1]}.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 11em; " src="../../pages/mathOge/img/task16/16_1689.png"></div>
          
            ` 
            : task === 312 ? 
            `
            Центр окружности, описанной около треугольника ABC, лежит на стороне AB. Радиус окружности равен ${task1[0]}. Найдите BC, если AC = ${task1[1]}.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 11em; " src="../../pages/mathOge/img/task16/16_1689.png"></div>
          
            ` 
            : task === 32 ? 

            `
            Сторона равностороннего треугольника равна ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span>. Найдите радиус окружности, описанной около этого треугольника.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 10em; " src="../../pages/mathOge/img/task16/16_1674.png"></div>   
            ` 
            : task === 321 ? 
            `
            Радиус окружности, описанной около равностороннего треугольника, равен ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span>. Найдите длину стороны этого треугольника.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 10em; " src="../../pages/mathOge/img/task16/16_1674.png"></div>   
            ` 
            : task === 33 ? 
            `
            Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен ${task1[0]}°. Найдите угол B этой трапеции. Ответ дайте в градусах.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 10em; " src="../../pages/mathOge/img/task16/16_1675.png"></div>   
            ` 
            : task === 331 ? 
            `
            Угол A четырёхугольника ABCD, вписанного в окружность, равен ${task1[0]}°. Найдите угол C этого четырёхугольника. Ответ дайте в градусах.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 10em; " src="../../pages/mathOge/img/task16/16_1684.png"></div>   
            ` 
            : task === 34 ? 
            `
            Сторона квадрата равна ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">2</span>. Найдите радиус окружности, описанной около этого квадрата.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 10em; " src="../../pages/mathOge/img/task16/16_1677.png"></div>   
            ` 
            : task === 35 ? 
            `
            В треугольнике ABC угол C равен ${task1[0]}°, ${task1.length === 2 ? `AB = ${task1[1]}` : `AB = ${task1[1]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[2]}</span>`}. Найдите радиус окружности, описанной около этого треугольника.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 10em; " src="../../pages/mathOge/img/task16/16_${taskCounter}.png"></div>   
            ` 
            : task === 36 ? 
            `
            Радиус окружности, описанной около квадрата, равен  ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">2</span>. Найдите длину стороны этого квадрата.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 10em; " src="../../pages/mathOge/img/task16/16_1677.png"></div>   
            ` 
            : task === 37 ? 
            `
            В треугольнике ABC известно, что AC = ${task1[0]}, BC = ${task1[1]}, угол C равен 90°. Найдите радиус описанной около этого треугольника окружности.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 10em; " src="../../pages/mathOge/img/task16/16_1694.png"></div>   
            ` 
            : task === 38 ? 
            `
            Точка O является серединой стороны CD квадрата ABCD. Радиус окружности с центром в точке O, проходящей через вершину A, равен 
            ${task1.length === 1 ? task1[0] : task1.length === 3 ? `<math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">√${task1[0]}</mn>
                <mn style="padding-top: 5px;">${task1[1]}</mn>
              </mfrac>
            </math>` : task1.length === 4 ? `<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[0]}</span>`:`${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[1]}</span>`}. 
            Найдите площадь квадрата ABCD.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 10em; " src="../../pages/mathOge/img/task16/16_1783.png"></div>   
            ` 
            :
            ` `}
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshSixteen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        }   
    }
    // <span style="font-size: 140%">√</span><span  style="border-top: 0.14em solid ">${task1[0]}</span>     <span style="font-size: 140%;">√</span><span  style="border-top: 0.13em solid ">25</span>
    // <sup>2</sup>   — • &thinsp; √   &nbsp; 
    // <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span>

    // <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">2</span>
    if (taskKey === 'seventeen'){
      let Nomer = 17
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 11 ? 
            `
          Сторона квадрата равна ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">2</span>. Найдите диагональ этого квадрата.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 9em; " src="../../pages/mathOge/img/task17/17_1795.png"></div>
          `
          : task === 12 ? 
            `
          Сторона ромба равна ${task1[0]}, а один из углов этого ромба равен ${task1[1]}°. Найдите высоту этого ромба.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task17/17_1796.png"></div>
          `
          : task === 13 ? 
            `
          Периметр ромба равен ${task1[0]}, а один из углов равен ${task1[1]}°. Найдите площадь этого ромба.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task17/17_1798.png"></div>
          `
          : task === 131 ? 
            `
          Один из углов параллелограмма (ромба) равен ${task1[0]}°. Найдите ${task1[1]} угол этого параллелограмма (ромба). Ответ дайте в градусах.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task17/17_1798.png"></div>
          `
          : task === 14 ? 
            `
          В ромбе ABCD угол ABC равен ${task1[0]}°. Найдите угол ACD. Ответ дайте в градусах.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task17/17_1799.png"></div>
          `
          : task === 15 ? 
            `
          Диагональ прямоугольника образует угол ${task1[0]}° с одной из его сторон. Найдите острый угол между диагоналями этого прямоугольника. Ответ дайте в градусах.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task17/17_1801.png"></div>
          `
          : task === 16 ? 
            `
          Диагонали AC и BD прямоугольника ABCD пересекаются в точке O, BO = ${task1[0]}, AB = ${task1[1]}. Найдите AC.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task17/17_1820.png"></div>
          `
          :
             ``}
          
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
          ${task === 21 ? 
            `
          Один из углов прямоугольной трапеции равен ${task1[0]}°. Найдите ${task1[1]} угол этой трапеции. Ответ дайте в градусах.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 11em; " src="../../pages/mathOge/img/task17/17_1871.png"></div>
         
            `
            : task === 22 ? 
            `
          Основания трапеции равны ${task1[0]} и ${task1[1]}. Найдите больший из отрезков, на которые делит среднюю линию этой трапеции одна из её диагоналей.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task17/17_1872.png"></div>
         
            `
            : task === 23 ? 
            `
          Основания трапеции равны ${task1[0]} и ${task1[1]}, а высота равна ${task1[2]}. Найдите среднюю линию этой трапеции.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task17/17_1873.png"></div>
         
            `
            : task === 24 ? 
            `
          Один из углов равнобедренной трапеции равен ${task1[0]}°. Найдите ${task1[1]} угол этой трапеции. Ответ дайте в градусах.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task17/17_1875.png"></div>
         
            `
            : task === 241 ? 
            `
          Сумма двух углов равнобедренной трапеции равна ${task1[0]}°. Найдите ${task1[1]} угол этой трапеции. Ответ дайте в градусах.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task17/17_1875.png"></div>
         
            `
            :task === 25 ? 
            `
          Основания трапеции равны ${task1[0]} и ${task1[1]}, а высота равна ${task1[2]}. Найдите площадь этой трапеции.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task17/17_1879.png"></div>
         
            `
            : task === 26 ? 
            `
          Высота равнобедренной трапеции, проведённая из вершины C, делит основание AD на отрезки длиной ${task1[0]} и ${task1[1]}. Найдите длину основания BC.

          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task17/17_1881.png"></div>
         
            `
            : task === 27 ? 
            `
          В равнобедренной трапеции известны высота, ${task1[0] === 1 ? `большее`: `меньшее`} основание и угол при основании (см. рисунок). Найдите ${task1[0] === 1 ? `меньшее`: `большее`} основание.

          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 19em; " src="../../pages/mathOge/img/task17/17_${taskCounter}.png"></div>
         
            `
            : task === 28 ? 
            `
          В равнобедренной трапеции основания равны ${task1[0]} и ${task1[1]}, а один из углов между боковой стороной и основанием равен 45°. Найдите площадь этой трапеции.

          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 19em; " src="../../pages/mathOge/img/task17/17_${taskCounter}.png"></div>
         
            `
            :
            ``}
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
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 31 ? 
            `
          Диагонали AC и BD параллелограмма ABCD пересекаются в точке O, AC = ${task1[0]}, BD = ${task1[1]}, AB = ${task1[2]}. Найдите DO.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 15em; " src="../../pages/mathOge/img/task17/17_1951.png"></div>
         
            `
            : task === 32 ? 
            `
          Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный ${task1[0]}°. Ответ дайте в градусах.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 13em; " src="../../pages/mathOge/img/task17/17_1952.png"></div>
         
            `
            : task === 33 ? 
            `
          Диагональ AC параллелограмма ABCD образует с его сторонами углы, равные ${task1[0]}° и ${task1[1]}°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 13em; " src="../../pages/mathOge/img/task17/17_${taskCounter}.png"></div>
         
            `
            : task === 34 ? 
            `
          Диагональ BD параллелограмма ABCD образует с его сторонами углы, равные ${task1[0]}° и ${task1[1]}°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 14em; " src="../../pages/mathOge/img/task17/17_${taskCounter}.png"></div>
         
            `
            : task === 35 ? 
            `
          Площадь параллелограмма равна ${task1[0]}, а две его стороны равны ${task1[1]} и ${task1[2]}. Найдите его высоты. В ответе укажите ${task1[3] === 1 ? `большую`: `меньшую`} высоту.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 14em; " src="../../pages/mathOge/img/task17/17_1958.png"></div>
         
            `
            : task === 36 ? 
            `
          Найдите площадь параллелограмма, изображённого на рисунке.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  ${task1[0] === 2 ? `width: 20em;` : `width: 13em;`} " src="../../pages/mathOge/img/task17/17_${taskCounter}.png"></div>
         
            `
            : task === 37 ? 
            `
          В ромбе ABCD угол ABC равен ${task1[0]}°. Найдите угол ACD. Ответ дайте в градусах.
          <hr class="hr-pd_20">
          <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 13em;" src="../../pages/mathOge/img/task17/17_1972.png"></div>
         
            `
            :
            ``}
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
    if (taskKey === 'eighteen'){
      let Nomer = 18
      function reshEghteen(item){
        if(item === 14){
          return `
          (${task1[0]} / ${task1[1]}) • ${task1[2]} = ${task1[0]/task1[1]*task1[2]} 
          `
        }
        else if(item === 15){
          return `
          ${task1[0]} / ${task1[1]}  = ${task1[0]/task1[1]} 
          `
        }
        else if(item === 31){
          return `
          c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>
          <hr class="hr-pd_10">
          c<sup>2</sup> = ${task1[1]}<sup>2</sup> + ${task1[2]}<sup>2</sup>
          <hr class="hr-pd_10">
          c<sup>2</sup> = ${task1[1]*task1[1]} + ${task1[2]*task1[2]}
          <hr class="hr-pd_10">
          c<sup>2</sup> = ${task1[1]*task1[1] + task1[2]*task1[2]}
          <hr class="hr-pd_10">    
          c = <span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">${task1[1]*task1[1] + task1[2]*task1[2]}</span>   
          <hr class="hr-pd_10">
          c = ${Math.sqrt(task1[1]*task1[1] + task1[2]*task1[2])}
          `

        }
        else{return `...`}
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 11 ? 
            `
            На клетчатой бумаге с размером клетки 1×1 изображён треугольник. Найдите его площадь.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 15em; " src="../../pages/mathOge/img/task18/18_${taskCounter}.png"></div>
          
            ` 
            : task === 12 ? 
            `
            На клетчатой бумаге с размером клетки 1×1 изображён прямоугольный треугольник. Найдите длину его большего катета.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 15em; " src="../../pages/mathOge/img/task18/18_${taskCounter}.png"></div>
          
            ` 
            : task === 13 ? 
            `
            На клетчатой бумаге с размером клетки 1×1 изображён треугольник ABC. Найдите длину его средней линии, параллельной стороне AC.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 15em; " src="../../pages/mathOge/img/task18/18_${taskCounter}.png"></div>
          
            ` 
            : task === 14 ? 
            `
            На клетчатой бумаге с размером клетки 1×1 изображена фигура. Найдите длину отрезка AB  по данным чертежа.
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 15em; " src="../../pages/mathOge/img/task18/18_${taskCounter}.png"></div>
          
            ` 
            : task === 15 ? 
            `
            На клетчатой бумаге изображён треугольник ABC. Во сколько раз отрезок ${task1[2]} отрезка ${task1[3] ? task1[3]: `CM`}?
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 15em; " src="../../pages/mathOge/img/task18/18_${taskCounter}.png"></div>
          
            ` 
            : 
            `
            ` 
            }
          <hr class="hr-pd_20">
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshEghteen(task)}
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
          ${task === 21 ? 
            `
            На клетчатой бумаге с размером клетки 1×1 изображён ромб. Найдите длину его большей диагонали.
         
            ` 
            : task === 22 ? 
            `
            На клетчатой бумаге с размером клетки 1×1 изображена трапеция. Найдите длину её средней линии.
            ` 
            : task === 23 ? 
            `
            На клетчатой бумаге с размером клетки 1×1 изображён параллелограмм. Найдите его площадь.
           
            ` 
            : task === 24 ? 
            `
            На клетчатой бумаге с размером клетки 1×1 изображена трапеция. Найдите её площадь.
          
            ` 
            : task === 25 ? 
            `
            На клетчатой бумаге с размером клетки 1×1 изображена ромб. Найдите площадь этого ромба..
        
            ` 
            :
            `` 
            }
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  ${task1[0] === 2 ? `width: 10em;`: task1[0] === 3 ? `width: 20em;`: `width: 15em;`} " src="../../pages/mathOge/img/task18/18_${taskCounter}.png"></div>
          
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
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 31 ? 
            `
            На клетчатой бумаге с размером клетки 1×1 изображены две точки. Найдите расстояние между ними.
            ` 
            : task === 32 ? 
            `
            На клетчатой бумаге изображены два круга. Во сколько раз площадь большего круга больше площади меньшего?
            ` 
            : 
            `` 
            }
            <hr class="hr-pd_20">
            <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  ${task1[0] === 2 ? `width: 10em;`: task1[0] === 3 ? `width: 20em;`: `width: 15em;`} " src="../../pages/mathOge/img/task18/18_${taskCounter}.png"></div>
          
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshEghteen(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        }   
    }
    if (taskKey === 'nineteen'){
      let Nomer = 19
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 11 ? 
            `
            Какое из следующих утверждений является <b>истинным высказыванием</b>?<hr class="hr-pd_20">
            <b>1)</b> ${task2}<hr class="hr-pd_20">
            <b>2)</b> ${task3}<hr class="hr-pd_20">
            <b>3)</b> ${task4}<hr class="hr-pd_30">


            В ответ запишите номер истинного высказывания.
            `
            : task === 12 ? 
            `
            Какие из следующих утверждений являются <b>истинными высказываниями</b>?<hr class="hr-pd_20">
            <b>1)</b> ${task2}<hr class="hr-pd_20">
            <b>2)</b> ${task3}<hr class="hr-pd_20">
            <b>3)</b> ${task4}<hr class="hr-pd_30">

            В ответе запишите номера выбранных утверждений без пробелов, запятых и других дополнительных символов.
            `
            :
            ``
          }
          <hr class="hr-pd_20">
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            ${task1[0] === 1 ? `<b style="color: green; ">ВЕРНО</b>`: `<b style="color: red; ">НЕВЕРНО</b>`} <b>1)</b> ${task2}<hr class="hr-pd_20">
            ${task1[1] === 1 ? `<b style="color: green; ">ВЕРНО</b>`: `<b style="color: red; ">НЕВЕРНО</b>`} <b>2)</b> ${task3}<hr class="hr-pd_20">
            ${task1[2] === 1 ? `<b style="color: green; ">ВЕРНО</b>`: `<b style="color: red; ">НЕВЕРНО</b>`} <b>3)</b> ${task4}<hr class="hr-pd_30">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInput();
          } 
          return answerBlock
        }   
    } 
    if (taskKey === 'twenty'){
      let Nomer = 20
      function reshTwenty(item){
        if (item === 11){
          return `
          ${task2} = ${task4[0]} • (${task3})
          <hr class="hr-pd_10">
          ${task2} = ${task4[0]*task4[1]}a − ${task4[0]*task4[2]}b + ${task4[0]*task4[3]}
          <hr class="hr-pd_10">
          ${task4[0]*task4[1]}a − ${task4[0]*task4[2]}b + ${task4[0]*task4[3]} − (${task2}) = 0
          <hr class="hr-pd_10">
          ${task4[0]*task4[1]}a − ${task4[0]*task4[2]}b + ${task4[0]*task4[3]} − ${task4[4]}a + ${task4[5]}b − ${task4[6]} = 0
          <hr class="hr-pd_10">
          ${task4[0]*task4[1]-task4[4]}a − ${task4[0]*task4[2]-task4[5]}b + ${task4[0]*task4[3]-task4[6]} = 0
          <hr class="hr-pd_10">
          ${task4[0]*task4[1]-task4[4]}a − ${task4[0]*task4[2]-task4[5]}b =  −${task4[0]*task4[3]-task4[6]}
          <hr class="hr-pd_20">
          ${task1} = (${task4[0]*task4[1]-task4[4]}a − ${task4[0]*task4[2]-task4[5]}b) + ${(task4[0]*task4[3]-task4[6]) + (task4[7]-(task4[0]*task4[3]-task4[6]))}
          <hr class="hr-pd_10">
          (−${task4[0]*task4[3]-task4[6]}) + ${(task4[0]*task4[3]-task4[6]) + (task4[7]-(task4[0]*task4[3]-task4[6]))} = ${task4[7]-(task4[0]*task4[3]-task4[6])}
          
          `
        }
        else {return `...`}
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Найдите значение выражения:&thinsp; ${task1}, если&thinsp; ${drobNum(task2, task3)} = ${task4[0]}
          <hr class="hr-pd_20">
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwenty(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 2:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Решите уравнение:&thinsp;  
          ${task === 21 ? `x<sup>3</sup> + ${task1[0]}x<sup>2</sup> = ${task1[1]}x + ${task1[2]}
           `
          : task === 22 ? `x<sup>3</sup> + ${task1[0]}x<sup>2</sup> — ${task1[1] === 1 ? `x` : `${task1[1]}x`} — ${task1[2]} = 0
           `
          : task === 23 ? `x<sup>4</sup> = (${task1[0] === 1 ? `x` : `${task1[0]}x`} — ${task1[1]})<sup>2</sup>
           `
          : task === 24 ? `(x<sup>2</sup> — ${task1[0]})<sup>2</sup> + (x<sup>2</sup> ${task1[3]} ${task1[1] === 1 ? `x` : `${task1[1]}x`} — ${task1[2]})<sup>2</sup> = 0
           `
          : task === 25 ? `${task1[0] === 0? `x ` : `(x — ${task1[0]})`}(x<sup>2</sup> + ${task1[1]}x + ${task1[2]}) = ${task1[3]} (x + ${task1[4]})
           `
          : task === 26 ? `(x ${task1[4]} ${task1[0]})<sup>4</sup> ${task1[5]} ${task1[1] === 1 ? `` : task1[1]} (x ${task1[6]} ${task1[0]})<sup>2</sup> — ${task1[3]} = 0
           `
          : task === 27 ? `x<sup>2</sup> — ${task1[0]}x + ${sqrtNum(`${task1[1]} — x`)} = ${sqrtNum(`${task1[1]} — x`)} + ${task1[2]}
           `
          : task === 28 ? `${drobNum(task1[0], supNum(`${task1[3] === 0 ? `x` : `(x — ${task1[3]})`}`, 2))} ${task1[4]} ${drobNum(task1[1],`${task1[3] === 0 ? `x` : `(x — ${task1[3]})`}`)} — ${task1[2]} = 0
            `
            : 

            ``}
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwenty(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Решите систему уравнений:&thinsp; 
          ${task === 31 ? 
            `
            ${sistemNum(`${task1[0]}${supNum("x", 2)}+ y = ${task1[2]}`, `${task1[1]}${supNum("x", 2)}− y = ${task1[3]}`)}
            `
          : task === 32 ? 
            `
            ${sistemNum(`${task1[0]}${supNum("x",2)}− ${task1[2]}x = y`, `${task1[1]} x − ${task1[3]} = y`)}
            `
          : task === 33 ? 
            `
            ${sistemNum(`${task1[0]}${supNum("x",2)} + ${task1[4]}${supNum("y",2)} = ${task1[3]}`, `${task1[1]}${supNum("x",2)} + ${task1[2]}${supNum("y",2)} = ${task1[3]}x`)}
            `
            : 
            ``}
          
          <hr class="hr-pd_20"> 
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwenty(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 4:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Решите неравенство:&thinsp;  
          ${task === 41 ? 
            `
             ${supNum(`(x — ${task1[0]})`, 2)} < ${sqrtNum(task1[1])} (x — ${task1[0]})
            `
          : task === 42 ? 
            `
            ${drobNum(`—${task1[0]}`, rowNum(`${supNum(`(x ${task1[3]} ${task1[1]})`, 2)}`, ` — ${task1[2]}`))} ≥ 0
             
            `
          : task === 43 ? 
            `
            —${drobNum(`${task1[0]}`, rowNum(`${supNum(`x`, 2)}`, `— ${task1[1]}x — ${task1[2]}`))} ≤ 0
             
            `
            :
            ``}
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwenty(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        }   
    } 
    if (taskKey === 'twentyone'){
      let Nomer = 21
      function reshTwentyOne(item){
        if (item === 1){
          return `
          
          `
        }
        else {return `...`}
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 11 ? 
            `
          Два автомобиля одновременно отправляются в ${task1[0]}-километровый пробег. 
          Первый едет со скоростью на ${task1[1]} км/ч большей, чем второй, и прибывает к финишу на ${task1[2]} ч раньше второго. 
          Найдите скорость первого автомобиля.
            ` 
          : task === 12 ? 
            `
          Из А в В одновременно выехали два автомобиля. Первый проехал весь путь с постоянной скоростью. 
          Второй проехал первую половину пути со скоростью ${task1[0]} км/ч, а вторую половину пути проехал со скоростью больше скорости первого на ${task1[1]} км/ч, 
          в результате чего прибыл в В одновременно с первым автомобилем. Найдите скорость первого автомобиля.
            ` 
          : task === 13 ? 
            `
          Из А в В одновременно выехали два автомобиля. Первый проехал весь путь с постоянной скоростью. 
          Второй проехал первую половину пути со скоростью ${task1[0]} км/ч, а вторую половину пути проехал со скоростью больше скорости первого на ${task1[1]} км/ч, 
          в результате чего прибыл в В одновременно с первым автомобилем. 
          Найдите скорость первого автомобиля, если известно, что она больше ${task1[2]} км/ч.
            ` 
          :
          ``}
          
          <hr class="hr-pd_20">
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 2:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 21 ? 
            `
          Два велосипедиста одновременно отправляются в ${task1[0]}-километровый пробег. 
          Первый едет со скоростью на ${task1[1]} км/ч большей, чем второй, и прибывает к финишу на ${task1[2]} часа раньше второго. 
          Найдите скорость велосипедиста, пришедшего к финишу вторым.
            ` 
          : task === 22 ? 
            `
          Велосипедист выехал с постоянной скоростью из города А в город В, расстояние между которыми равно ${task1[0]} км. 
          На следующий день он отправился обратно в А, увеличив скорость на ${task1[1]} км/ч. 
          По пути он сделал остановку на ${task1[2]} часов, в результате чего затратил на обратный путь столько же времени, 
          сколько на путь из А в В. Найдите скорость велосипедиста на пути <b>из ${task1[3] === 1 ? `А в В` : `В в А`}</b>.
            ` 
          : task === 23 ? 
            `
          Из двух городов одновременно навстречу друг другу отправились два велосипедиста. 
          Проехав некоторую часть пути, первый велосипедист сделал остановку на ${task1[0]} минут, 
          а затем продолжил движение до встречи со вторым велосипедистом. 
          Расстояние между городами составляет ${task1[1]} км, скорость первого велосипедиста равна ${task1[2]} км/ч, 
          скорость второго — ${task1[3]} км/ч. 
          Определите расстояние от города, из которого выехал второй велосипедист, до места встречи.
            ` 
            :
            ``}
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 31 ? 
            `
          Поезд, двигаясь равномерно со скоростью ${task1[0]} км/ч, проезжает мимо пешехода, 
          идущего в том же направлении параллельно путям по платформе со скоростью ${task1[1]} км/ч, за ${task1[2]} секунды. 
          Найдите длину поезда в метрах.
            `
          : task === 32 ? 
            `
          Поезд, двигаясь равномерно со скоростью ${task1[0]} км/ч, проезжает мимо пешехода, 
          идущего по платформе параллельно путям со скоростью ${task1[1]} км/ч навстречу поезду, за ${task1[2]} секунд. 
          Найдите длину поезда в метрах.
            `
            : 
            ``}
          
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 4:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 41 ? 
            `
            Первые ${task1[0]} км автомобиль ехал со скоростью ${task1[1]} км/ч, следующие ${task1[2]} км — со скоростью ${task1[3]} км/ч, 
            а последние ${task1[4]} км — со скоростью ${task1[5]} км/ч. Найдите среднюю скорость автомобиля на протяжении всего пути.

            `
            : task === 42 ? 
            `
            Первую половину пути автомобиль проехал со скоростью ${task1[0]} км/ч, а вторую — со скоростью ${task1[1]} км/ч. 
            Найдите среднюю скорость автомобиля на протяжении всего пути.
            `
            : 
            ``}
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 5:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 51 ? 
            `
            Два бегуна одновременно стартовали в одном направлении из одного и того же места круговой трассы в беге на несколько кругов. 
            Спустя один час, когда одному из них оставалось ${task1[0]} км до окончания первого круга, 
            ему сообщили, что второй бегун пробежал первый круг ${task1[1]} минут назад. 
            Найдите скорость первого бегуна, если известно, что она на ${task1[2]} км/ч меньше скорости второго.
            `
            : 
            ``}
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 6:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 61 ? 
            `
            Моторная лодка прошла против течения реки ${task1[0]} км и вернулась в пункт отправления, затратив на обратный путь на ${task1[1]} часа меньше, 
            чем на путь против течения. Найдите скорость лодки в неподвижной воде, если скорость течения реки равна ${task1[2]} км/ч.
            
            `
          : task === 62 ? 
            `
            Расстояние между пристанями А и В равно ${task1[0]} км. Из А в В по течению реки отправился плот, 
            а через час вслед за ним отправилась моторная лодка, которая, прибыв в пункт В, тотчас повернула обратно и возвратилась в А.
            К этому времени плот проплыл ${task1[1]} км. Найдите скорость лодки в неподвижной воде, если скорость течения реки равна ${task1[2]} км/ч.
            
            `
            : 
            ``}
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 7:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 71 ? 
            `
           Баржа прошла по течению реки ${task1[0]} км и, повернув обратно, прошла ещё ${task1[1]} км, затратив на весь путь ${task1[2]} часа. 
           Найдите собственную скорость баржи, если скорость течения реки равна ${task1[3]} км/ч.
            `
          : 
            ``}
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 8:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 81 ? 
           `
           Теплоход проходит по течению реки до пункта назначения ${task1[0]} км и после стоянки возвращается в пункт отправления. 
           Найдите <b>скорость течения</b>, если скорость теплохода в неподвижной воде равна ${task1[1]} км/ч, стоянка длится ${task1[2]} часов, 
           а в пункт отправления теплоход возвращается через ${task1[3]} часов после отплытия из него.
           `
          : task === 82 ? 
           `
           Теплоход проходит по течению реки до пункта назначения ${task1[0]} км и после стоянки возвращается в пункт отправления. 
           Найдите <b>скорость теплохода</b> в неподвижной воде, если скорость течения равна ${task1[1]} км/ч, стоянка длится ${task1[2]} часов, 
           а в пункт отправления теплоход возвращается через ${task1[3]} часа после отплытия из него.
           `
          : 
            ``}
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 9:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 91 ? 
           `
           Первый рабочий за час делает на ${task1[0]} деталей больше, чем второй, и выполняет заказ, состоящий из ${task1[1]} деталей, 
           на ${task1[2]} часа быстрее,
           чем второй рабочий, выполняющий такой же заказ. Сколько деталей в час делает первый рабочий?

           `
          : task === 92 ? 
           `
           Первый рабочий за час делает на ${task1[0]} деталей больше, чем второй, и выполняет заказ, состоящий из ${task1[1]} деталей, 
           на ${task1[2]} часа быстрее, 
           чем второй рабочий, выполняющий такой же заказ. Сколько деталей в час делает второй рабочий?
           `
          : 
            ``}
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 10:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 101 ? 
           `
           Первая труба пропускает на ${task1[0]} литров воды в минуту меньше, чем вторая труба. 
           Сколько литров воды в минуту пропускает вторая труба, если резервуар объёмом ${task1[1]} литров 
           она заполняет на ${task1[2]} минут быстрее, чем первая труба?
           `
          : task === 102 ? 
           `
           Первая труба пропускает на ${task1[0]} литра воды в минуту меньше, чем вторая труба. 
           Сколько литров воды в минуту пропускает первая труба, если резервуар объёмом ${task1[1]} литров 
           она заполняет на ${task1[2]} минут дольше, чем вторая труба?
           `
          : 
            ``}
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 11:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 111 ? 
           `
           Имеются два сосуда, содержащие ${task1[0]} кг и ${task1[1]} кг раствора кислоты различной концентрации. 
           Если их слить вместе, то получится раствор, содержащий ${task1[2]}% кислоты. 
           Если же слить равные массы этих растворов, то полученный раствор будет содержать ${task1[3]}% кислоты. 
           Сколько процентов кислоты содержится в первом растворе?
           
           `
          : task === 112 ? 
           `
           Имеются два сосуда, содержащие ${task1[0]} кг и ${task1[1]} кг раствора кислоты различной концентрации. 
           Если их слить вместе, то получим раствор, содержащий ${task1[2]}% кислоты. 
           Если же слить равные массы этих растворов, то полученный раствор будет содержать ${task1[3]}% кислоты. 
           Сколько килограммов кислоты содержится во втором растворе?
          
           `
          : 
            ``}
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 12:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 121 ? 
           `
           Свежие фрукты содержат ${task1[0]}% воды, а высушенные — ${task1[1]}%. 
           Сколько сухих фруктов получится из ${task1[2]} кг свежих фруктов?
           
           `
          : task === 122 ? 
           `
           Свежие фрукты содержат ${task1[0]}% воды, а высушенные — ${task1[1]}%. 
           Сколько требуется свежих фруктов для приготовления ${task1[2]} кг высушенных фруктов?
           `
          : 
            ``}
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        }   
    }
    if (taskKey === 'twentytwo'){
      let Nomer = 22
      function reshTwentyOne(item){
        if (item === 1){
          return `
          
          `
        }
        else {return `...`}
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 11 ? 
            `
            Постройте график функции: 
            <hr class="hr-pd_20">
            &thinsp;&thinsp; y = <math style="font-size: 140%;">
                  <mfrac>
                    <mrow style="padding-bottom: 5px;">
                      <mn>(</mn>
                      <mn>${supNum("x", 2)}</mn> 
                      <mn>${task1}</mn>
                      <mn>)</mn>
                      <mn>(${task2})</mn>
                    </mrow> 
                    <mn style="padding-top: 5px;">${task3}</mn> 
                  </mfrac>
                </math>
                            
            <hr class="hr-pd_20">
            Определите, при каких значениях k прямая y = kx имеет с графиком ровно одну общую точку.
            ` 
          : ``}
          
          <hr class="hr-pd_20">
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 2:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 21 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp;y = <math style="font-size: 140%;">
                  <mfrac>
                    <mn style="padding-bottom: 5px;">${task1[0]}x ${task1[2]}&thinsp;${task1[1]}</mn> 
                    <mrow style="padding-top: 5px;">
                      <mn>${task1[0]}</mn>
                      <mn>${supNum("x", 2)}</mn> 
                      <mn>${task1[2]}&thinsp; </mn>
                      <mn>${task1[1] === 1? `x`: `${task1[1]}x`}</mn>
                    </mrow> 
                    
                  </mfrac>
                </math>
            <hr class="hr-pd_20">
            Определите, при каких значениях k прямая y = kx имеет с графиком ровно одну общую точку.
            ` 
          :  task === 22 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp;y = ${task2}
                <math style="font-size: 140%;">
                  <mfrac>
                    <mn style="padding-bottom: 5px;">${task1[0]}x ${task1[2]}&thinsp;${task1[1]}</mn> 
                    <mrow style="padding-top: 5px;">
                      <mn>${task1[0]}</mn>
                      <mn>${supNum("x", 2)}</mn> 
                      <mn>${task1[2]}&thinsp; </mn>
                      <mn>${task1[1] === 1? `x`: `${task1[1]}x`}</mn>
                    </mrow> 
                    
                  </mfrac>
                </math>
            <hr class="hr-pd_20">
            Определите, при каких значениях m прямая y = m не имеет с графиком общих точек.
 
            ` 
          : task === 23 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp;y = 
                <math style="font-size: 140%;">
                  <mfrac>
                    
                    <mrow style="padding-bottom: 5px;">
                       <mn>${task1[0]}</mn>
                      <mn>${supNum("x", 4)}</mn> 
                      <mn>−&thinsp; </mn>
                       <mn>${task1[1]}</mn>
                      <mn>${supNum("x", 2)}</mn> 
                      <mn>+&thinsp; </mn>
                      <mn>${task1[2]}</mn>
                      
                    </mrow> 
                    <mn style="padding-top: 5px;">${task2}</mn> 
                  </mfrac>
                </math>
            <hr class="hr-pd_20">
            и определите, при каких значениях прямая имеет c прямая y = c имеет с графиком ровно одну общую точку. 
 
            ` 
          :
          ``}
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 31 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp; 
            <math style="font-size: 110%;">
              <mrow style="display: flex; align-items: center;">
              <mn>y = </mn>
              <mn  style="font-size: 380%; font-family: MathJax_Size3;">{</mn>
                <mtable style="vertical-align: middle; ">
                  <mtr >
                    <mtd style="padding-bottom: 5px; text-align: left;">&thinsp;${task1}</mtd>
                  </mtr>
                  <mtr>
                    <mtd style="padding-top: 5px; text-align: left;">&thinsp;${task2}</mtd>
                  </mtr>
                  <mtr>
                    <mtd style="padding-top: 5px; text-align: left;">&thinsp;${task3}</mtd>
                  </mtr>
                </mtable>
              </mrow>
            </math>
            <math style="font-size: 110%;">
              <mrow style="display: flex; align-items: center;">
                
                <mtable style="vertical-align: middle; ">
                  <mtr >
                    <mtd style="padding-bottom: 5px; text-align: left;">&thinsp;при&thinsp;&thinsp; ${task4},</mtd>
                  </mtr>
                  <mtr>
                    <mtd style="padding-top: 5px; text-align: left;">&thinsp;при&thinsp;&thinsp; ${task5},</mtd>
                  </mtr>
                  <mtr>
                    <mtd style="padding-top: 5px; text-align: left;">&thinsp;при&thinsp;&thinsp; ${task6}.</mtd>
                  </mtr>
                </mtable>
              </mrow>
            </math>
            <hr class="hr-pd_20">
            Определите, при каких значениях m прямая y = m имеет с графиком ровно две общие точки.
         
            `
          : task === 32 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp;
            <math style="font-size: 110%;">
              <mrow style="display: flex; align-items: center;">
              <mn>y = </mn>
              <mn  style="font-size: 270%; font-family: MathJax_Size3;">{</mn>
                <mtable style="vertical-align: middle; ">
                  <mtr >
                    <mtd style="padding-bottom: 5px; text-align: left;"> ${supNum(task5,2)}${task1}</mtd>
                  </mtr>
                  <mtr>
                    <mtd style="padding-top: 5px; text-align: left;"> ${task2}</mtd>
                  </mtr> 
                </mtable>
              </mrow>
            </math>
            <math style="font-size: 110%;">
              <mrow style="display: flex; align-items: center;">
                
                <mtable style="vertical-align: middle; ">
                  <mtr >
                    <mtd style="padding-bottom: 5px; text-align: left;">&thinsp;при&thinsp;&thinsp; ${task3},</mtd>
                  </mtr>
                  <mtr>
                    <mtd style="padding-top: 5px; text-align: left;">&thinsp;при&thinsp;&thinsp; ${task4}.</mtd>
                  </mtr>
                  
                </mtable>
              </mrow>
            </math>

            <hr class="hr-pd_20">
            Определите, при каких значениях m прямая y = m имеет с графиком ровно две общие точки.
 
            `
            : task === 33 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp;
            <math style="font-size: 110%;">
              <mrow style="display: flex; align-items: center;">
              <mn>y = </mn>
              <mn  style="font-size: 340%; font-family: MathJax_Size3;">{</mn>
                <mtable style="vertical-align: middle; ">
                  <mtr >
                    <mtd style="padding-bottom: 5px; text-align: left;">&thinsp;${supNum(task5,2)}${task1}</mtd>
                  </mtr>
                  <mtr>
                    <mtd style="padding-top: 5px; text-align: left;"> −${drobNum(task2, "x")}</mtd>
                  </mtr> 
                </mtable>
              </mrow>
            </math>
            <math style="font-size: 110%;">
              <mrow style="display: flex; align-items: center;">
                
                <mtable style="vertical-align: middle; ">
                  <mtr >
                    <mtd style="padding-bottom: 5px; text-align: left;">&thinsp;при&thinsp;&thinsp; ${task3},</mtd>
                  </mtr>
                  <mtr>
                    <mtd style="padding-top: 5px; text-align: left;">&thinsp;при&thinsp;&thinsp; ${task4}.</mtd>
                  </mtr>
                  
                </mtable>
              </mrow>
            </math>

            <hr class="hr-pd_20">
            Определите, при каких значениях m прямая y = m имеет с графиком ${task1.length > 4 ? `одну или две общие точки`: `ровно одну общую точку`}.
 
            `
            : 
            ``}
          
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 4:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 41 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp; y = |${supNum("x", 2)} ${task1} |
            <hr class="hr-pd_20">
            Какое наибольшее число общих точек может иметь график данной функции с прямой, параллельной оси абсцисс?
            `
          : task === 42 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp; y = | x | • ${task1}
            <hr class="hr-pd_20">
            Определите, при каких значениях m прямая y = m имеет с графиком ровно две общие точки.
            `
          : task === 43 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp; y = ${task1}
            <hr class="hr-pd_20">
            Определите, при каких значениях m прямая y = m имеет с графиком ровно две общие точки.
            `
          : task === 44 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp; y = ${supNum("x", 2)}${task1}
            <hr class="hr-pd_20">
            Определите, при каких значениях m прямая y = m имеет с графиком ровно три общие точки.
            `
          : task === 45 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp; y = ${task1}${supNum("x", 2)}${task2}
            <hr class="hr-pd_20">
            Определите, при каких значениях m прямая y = m имеет с графиком ровно три общие точки.
            `
          : task === 46 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp; y = <math style="font-size: 140%;">
                  <mfrac>
                    <mrow style="padding-bottom: 5px;">
                      <mn>(</mn>
                      <mn>${task1}</mn>
                      <mn>${supNum("x", 2)}</mn> 
                      <mn>${task2}</mn>
                      <mn>)</mn>
                      <mn> &thinsp;• | x |</mn>
                    </mrow> 
                    <mn style="padding-top: 5px;">${task3}</mn> 
                  </mfrac>
                </math> 
            <hr class="hr-pd_20">
            Определите, при каких значениях m прямая y = m не имеет с графиком ни одной общей точки.
            `
          : task === 47 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp; y = <math style="font-size: 140%;">
                  <mfrac>
                   <mn style="padding-bottom: 5px;">${task1}</mn> 
                    <mrow style="padding-top: 5px;">
                      
                      <mn>${task2}</mn>
                      <mn>${supNum("x", 2)}</mn> 
                     
                    </mrow> 
                    
                  </mfrac>
                </math> 
            <hr class="hr-pd_20">
            Определите, при каких значениях k прямая y = kx не имеет с графиком общих точек.
            `
          : task === 48 ? 
            `
            Постройте график функции:
            <hr class="hr-pd_20">
            &thinsp;&thinsp; y = 
            ${drobNum(1, 2)}
            <span style="display: inline-block;  font-size: 2.1em; font-family: san-serif;">(|</span> 
             ${drobNum("x", task1)} − ${drobNum(task1, "x")}
             <span style="display: inline-block;  font-size: 2.1em; font-family: san-serif;">|</span>
              + ${drobNum("x", task1)} + ${drobNum(task1, "x")} 
              <span style="display: inline-block;  font-size: 2.1em; font-family: san-serif;">)</span>
            <hr class="hr-pd_20">
            Определите, при каких значениях k прямая y = kx не имеет с графиком общих точек. 
            `
            :

            `
            
            `}
            <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        
        }   
    }
    if (taskKey === 'twentythree'){
      let Nomer = 23
      function reshTwentyOne(item){
        if (item === 1){
          return `
          
          `
        }
        else {return `...`}
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 11 ? 
            `
            Катет и гипотенуза прямоугольного треугольника равны ${task1[0]} и ${task1[1]}. Найдите высоту, проведённую к гипотенузе.
            
            ` 
          : task === 12 ? 
            `
            Катеты прямоугольного треугольника равны ${task1[0]} и ${task1[1]}. Найдите высоту, проведённую к гипотенузе.
            
            ` 
          : task === 13 ? 
            `
            Углы B и C треугольника ABC равны соответственно ${task1[0]}° и ${task1[1]}°. 
            Найдите BC, если радиус окружности, описанной около треугольника ABC, равен ${task1[2]}.
            
            ` 
          : task === 14 ? 
            `
            Точка H является основанием высоты, проведённой из вершины прямого угла B 
            треугольника ABC к гипотенузе AC. 
            Найдите AB, если AH = ${task1[0]}, AC = ${task1[1]}.
      
            ` 
          : task === 15 ? 
            `
            Отрезки AB и DC лежат на параллельных прямых, а отрезки AC и  BD пересекаются в точке M. 
            Найдите MC, если AB = ${task1[0]}, DC = ${task1[1]}, AC = ${task1[2]}.
      
            ` 
          : task === 16 ? 
            `
            Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно. 
            Найдите BN, если MN = ${task1[0]}, AC = ${task1[1]}, NC = ${task1[2]}.
      
            ` 
          :
          ``}
          
          <hr class="hr-pd_20">
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 2:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 21 ? 
            `
            Найдите боковую сторону AB трапеции ABCD, если углы ABC и BCD равны соответственно 
            ${task1[0]}° и ${task1[1]}°, а CD&nbsp;=&nbsp;${task1[2]}.
            ` 
          :  task === 22 ? 
            `
           Расстояние от точки пересечения диагоналей ромба до одной из его сторон 
           равно ${task1[0]}, а одна из диагоналей ромба равна ${task1[1]}. Найдите углы ромба.
            ` 
          : task === 23 ? 
            `
            Высота AH ромба ABCD делит сторону CD на отрезки DH = ${task1[0]} и CH = ${task1[1]}. Найдите высоту ромба.
 
            ` 
          : task === 24 ? 
            `
            Биссектрисы углов A и B при боковой стороне AB трапеции ABCD пересекаются в точке F. 
            Найдите AB, если AF = ${task1[0]}, BF = ${task1[1]}.
            ` 
          : task === 25 ? 
            `
            Биссектриса угла A параллелограмма ABCD пересекает сторону BC в точке K. 
            Найдите периметр параллелограмма, если BK = ${task1[0]}, CK = ${task1[1]}.
            ` 
          : task === 26 ? 
            `
            Прямая, параллельная основаниям трапеции ABCD, пересекает её боковые стороны AB и CD
            в точках E и F соответственно. Найдите длину отрезка EF, 
            если AD = ${task1[0]}, BC = ${task1[1]}, CF : DF = ${task1[2]} : ${task1[3]}.
            ` 
          :
          ``}
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 31 ? 
            `
            Отрезки AB и CD являются хордами окружности. Найдите расстояние от центра окружности до хорды CD, 
            если AB = ${task1[0]}, CD = ${task1[1]}, а расстояние от центра окружности до хорды AB равно ${task1[2]}.
            `
          : task === 32 ? 
            `
            Точка H является основанием высоты BH, проведённой из вершины прямого угла B прямоугольного треугольника ABC. 
            Окружность с диаметром BH пересекает стороны AB и CB в точках P и K соответственно. Найдите PK, если BH = ${task1[0]}.
 
            `
            : task === 33 ? 
            `
            Точка H является основанием высоты BH, проведённой из вершины прямого угла B прямоугольного треугольника ABC. 
            Окружность с диаметром BH пересекает стороны AB и CB в точках P и K соответственно. Найдите BH, если PK = ${task1[0]}.
           
            `
            : task === 34 ? 
            `
            Окружность с центром на стороне AC треугольника ABC проходит через вершину C и касается прямой AB в точке B. 
            Найдите диаметр окружности, если AB = ${task1[0]}, AC = ${task1[1]}.
           
            `
            : task === 35 ? 
            `
            Окружность с центром на стороне AC треугольника ABC проходит через вершину C и касается прямой AB в точке B. 
            Найдите AC, если диаметр окружности равен ${task1[0]}, а AB = ${task1[1]}.
           
            `
            : task === 36 ? 
            `
            Окружность пересекает стороны AB и AC треугольника ABC в точках K и P соответственно и проходит через вершины B и C. 
            Найдите длину отрезка KP, если AK = ${task1[0]}, а сторона AC в ${task1[1]} раза больше стороны BC.
           
            `
            : task === 37 ? 
            `
            Окружность пересекает стороны AB и AC треугольника ABC в точках K и P соответственно и проходит через вершины B и C. 
            Найдите длину отрезка KP, если AP = ${task1[0]}, а сторона BC в ${task1[1]} раза меньше стороны AB.
           
            `
            : task === 38 ? 
            `
            Отрезки AB и CD являются хордами окружности. Найдите длину хорды CD, если AB&nbsp;=&nbsp;${task1[0]}, 
            а расстояния от центра окружности до хорд AB и CD равны соответственно ${task1[1]} и ${task1[2]}.           
            `
            : task === 39 ? 
            `
            В прямоугольном треугольнике ABC с прямым углом C известны катеты: AC&nbsp;=&nbsp;${task1[0]}, BC&nbsp;=&nbsp;${task1[1]}. 
            Найдите медиану CK этого треугольника.        
            `
            : 
            ``}
          
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        
        }   
    }
    // <sub>1</sub>  ${drobNum(`${task1[2]}√${task1[3]}`, task1[4])} 
    if (taskKey === 'twentyfour'){
      let Nomer = 24
      function reshTwentyOne(item){
        if (item === 1){
          return `
          
          `
        }
        else {return `...`}
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 11 ? 
            `
            В остроугольном треугольнике ABC проведены высоты AA<sub>1</sub> и CC<sub>1</sub>. Докажите, что углы CC<sub>1</sub>A<sub>1</sub> и CAA<sub>1</sub> равны.  
                   
            ` 
          : task === 12 ? 
            `
            В остроугольном треугольнике ABC проведены высоты AA<sub>1</sub> и BB<sub>1</sub>. Докажите, что углы BB<sub>1</sub>A<sub>1</sub> и BAA<sub>1</sub> равны.
            
            ` 
          : task === 13 ? 
            `
            В остроугольном треугольнике ABC проведены высоты AA<sub>1</sub> и CC<sub>1</sub>. Докажите, что углы AA<sub>1</sub>C<sub>1</sub> и ACC<sub>1</sub> равны.
            
            ` 
          : task === 14 ? 
            `
           В остроугольном треугольнике ABC проведены высоты AA<sub>1</sub> и BB<sub>1</sub>. Докажите, что углы AA<sub>1</sub>B<sub>1</sub> и ABB<sub>1</sub> равны.      
            ` 
          : task === 15 ? 
            `
           В остроугольном треугольнике ABC проведены высоты BB<sub>1</sub> и CC<sub>1</sub>. Докажите, что углы CC<sub>1</sub>B<sub>1</sub> и CBB<sub>1</sub> равны.      
            ` 
          : task === 16 ? 
            `
            В остроугольном треугольнике ABC проведены высоты BB<sub>1</sub> и CC<sub>1</sub>. Докажите, что углы BB<sub>1</sub>C<sub>1</sub> и BCC<sub>1</sub> равны.      
            ` 
          : task === 17 ? 
            `
            В треугольнике ABC с тупым углом ABC проведены высоты AA<sub>1</sub> и CC<sub>1</sub>. Докажите, что треугольники A<sub>1</sub>BC<sub>1</sub> и ABC подобны.      
            ` 
          : task === 18 ? 
            `
            В треугольнике ABC с тупым углом BAC проведены высоты BB<sub>1</sub> и CC<sub>1</sub>. Докажите, что треугольники AB<sub>1</sub>C<sub>1</sub> и ABC подобны.
      
            ` 
          : task === 19 ? 
            `
            В треугольнике ABC с тупым углом ACB проведены высоты AA<sub>1</sub> и BB<sub>1</sub>. Докажите, что треугольники A<sub>1</sub>CB<sub>1</sub> и ACB подобны.
      
            ` 
          :
          ``}
          
          <hr class="hr-pd_20">
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 2:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 21 ? 
            `
            Основания BC и AD трапеции ABCD равны соответственно ${task1[0]} и ${task1[1]}, BD = ${task1[2]}. Докажите, что треугольники CBD и BDA подобны.
            ` 
          : task === 22 ? 
            `
            ${task1}
            ` 
          : task === 23 ? 
            `
            ${task1}
            ` 
          : task === 24 ? 
            `
            ${task1}
            ` 
          : task === 25 ? 
            `
            ${task1}
            ` 
          : task === 26 ? 
            `
            ${task1}
            ` 
          :
          ``}
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 31 ? 
            `
            ${task1}
            `
          : task === 32 ? 
            `
           ${task1} 
            `
            : task === 33 ? 
            `
           ${task1}           
            `
            :
            ``}
          
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        
        }   
    }
    if (taskKey === 'twentyfive'){
      let Nomer = 25
      function reshTwentyOne(item){
        if (item === 1){
          return `
          
          `
        }
        else {return `...`}
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 11 ? 
            `
            В треугольнике ABC биссектриса BE и медиана AD перпендикулярны и имеют одинаковую длину, равную ${task1[0]}. Найдите стороны треугольника ABC.
            ` 
          : 
          ``}
          
          <hr class="hr-pd_20">
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 2:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 21 ? 
            `
            В равнобедренную трапецию, периметр которой равен ${task1[0]}, 
            а площадь равна ${task1[1]}, можно вписать окружность. 
            Найдите расстояние от точки пересечения диагоналей трапеции до её меньшего основания.
        
            ` 
          : task === 22 ? 
            `
            Боковые стороны AB и CD трапеции ABCD равны соответственно ${task1[0]} и ${task1[1]}, а основание BC равно ${task1[2]}. 
            Биссектриса угла ADC проходит через середину стороны AB. Найдите площадь трапеции.
        
            ` 
          : task === 23 ? 
            `
            Углы при одном из оснований трапеции равны ${task1[0]}° и ${task1[1]}°, а отрезки, 
            соединяющие середины противоположных сторон трапеции, равны ${task1[2]} и ${task1[3]}. Найдите основания трапеции.
        
            ` 
          : task === 24 ? 
            `
            Середина M стороны AD выпуклого четырёхугольника ABCD равноудалена от всех его вершин. Найдите AD, 
            если BC = ${task1[0]}, а углы B и C четырёхугольника равны соответственно ${task1[1]}° и ${task1[2]}°.
            
            ` 
          : task === 25 ? 
            `
            Биссектрисы углов A и B параллелограмма ABCD пересекаются в точке K. 
            Найдите площадь параллелограмма, если BC = ${task1[0]}, а расстояние от точки K
            до стороны AB равно ${task1[1]}.
            
            ` 
          : 
          ``}
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        case 3:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task === 31 ? 
            `
            Окружности радиусов ${task1[0]} и ${task1[1]} касаются внешним образом. 
            Точки A и B лежат на первой окружности, точки C и D — на второй.
            При этом AC и BD — общие касательные окружностей. 
            Найдите расстояние между прямыми AB и CD.
            
            `
          : task === 32 ? 
            `
            В трапеции ABCD боковая сторона AB перпендикулярна основанию BC. 
            Окружность проходит через точки C и D и касается прямой AB в точке E. 
            Найдите расстояние от точки E до прямой CD, если AD = ${task1[0]}, BC = ${task1[1]}.
            
            `
          : task === 33 ? 
            `
            На стороне BC остроугольного треугольника ABC как на диаметре построена полуокружность, пересекающая высоту AD в точке M, 
            AD = ${task1[0]}, MD = ${task1[1]}, H — точка пересечения высот треугольника ABC. Найдите AH.
            
            `
          : task === 34 ? 
            `
            Точки M и N лежат на стороне AC треугольника ABC на расстояниях соответственно ${task1[0]} и ${task1[1]} от вершины A. 
            Найдите радиус окружности, проходящей через точки M и N и касающейся луча AB, если 
            cos∠BAC = <table style = "display: inline-block; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid black;">
                <td>${sqrtNum(task1[3])}</td>
              </tr>
              <tr style="border-top: 1px solid black; ">
                <td style="text-align: center;">${task1[4]}</td>
              </tr>
            </table>      
            `
          : task === 35 ? 
            `
            В треугольнике ABC известны длины сторон AB = ${task1[0]}, AC = ${task1[1]}, точка O — центр окружности, описанной около треугольника ABC. 
            Прямая BD, перпендикулярная прямой AO, пересекает сторону AC в точке D. Найдите CD.
            `
          : task === 36 ? 
            `
            Четырёхугольник ABCD со сторонами AB = ${task1[0]} и CD = ${task1[1]} вписан в окружность. Диагонали AC и BD пересекаются в точке K, 
            причём ∠AKB = ${task1[2]}°. Найдите радиус окружности, описанной около этого четырёхугольника.
            `
          : task === 37 ? 
            `
            В параллелограмме ABCD проведена диагональ AC. Точка O является центром окружности, вписанной в треугольник ABC. 
            Расстояния от точки O до точки A и прямых AD и AC соответственно равны ${task1[0]}, ${task1[1]} и ${task1[2]}. Найдите площадь параллелограмма ABCD.
            `
          : task === 38 ? 
            `
            В треугольнике ABC биссектриса угла A делит высоту, проведённую из вершины B, в отношении ${task1[0]}&nbsp;:&nbsp;${task1[1]}, считая от точки B. 
            Найдите радиус окружности, описанной около треугольника ABC, если BC&nbsp;=&nbsp;${task1[2]}.
            `
          : task === 39 ? 
            `
            В трапеции ABCD основания AD и BC равны соответственно ${task1[0]} и ${task1[1]}, а сумма углов при основании AD равна 90°. 
            Найдите радиус окружности, проходящей через точки A и B и касающейся прямой CD, если AB&nbsp;=&nbsp;${task1[2]}.
        
            `
          : task === 391 ? 
            `
            Основание AC равнобедренного треугольника ABC равно ${task1[0]}. Окружность радиусом ${task1[1]} с центром вне этого треугольника 
            касается продолжений боковых сторон треугольника и касается основания AC. Найдите радиус окружности, вписанной в треугольник ABC.
        
            `
          :
            ``}
          
          <hr class="hr-pd_20">
          `
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_20">
            ${reshTwentyOne(task)}
            <hr class="hr-pd_20">
            Ответ: <b>${taskAnswer}</b>`;
          answerBlock += generateFooter();
          if(tumbler === false){
            answerBlock += generateInputP();
            answerBlock += generateInputP();
          } 
          return answerBlock
        
        }   
    }
   
}
