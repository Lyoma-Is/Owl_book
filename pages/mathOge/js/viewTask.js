const tasks = {

  six: '../../src/oge_math/taskSix.json',
  seven: '../../src/oge_math/taskSeven.json',
  eight: '../../src/oge_math/taskEight.json',
  nine: '../../src/oge_math/taskNine.json',
  ten: '../../src/oge_math/taskTen.json',
  eleven: '../../src/oge_math/taskEleven.json',
  twelve: '../../src/oge_math/taskTwelve.json',
  thirteen: '../../src/oge_math/taskThirteen.json',
  fourteen: '../../src/oge_math/taskFourteen.json',
  fifteen: '../../src/oge_math/taskFifteen.json'
};
 
export {tasks};

  // one: '../../../src/oge_inf/taskOne.json',
  // two: '../../../src/oge_inf/taskTwo.json',
  // three: '../../../src/oge_inf/taskThree.json',
  // four:  '../../../src/oge_inf/taskFour.json',
  // five: '../../../src/oge_inf/taskFive.json',

  // ,
  // sixteen: '../../../src/oge_math/taskSixteen.json'

export default function generateTaskHTML(taskKey, item, tumbler = true) {
    const { date, taskNum, taskAn, task, task1, task2, task3, task4, task5, task6, taskAuthor, taskTable, taskAnswer, typeTask, taskCounter, taskHard, taskTableV, taskTableS, taskKec} = item;
    const generateHard = () => `${taskHard === 0 ? "" : taskHard === 1 ? "<em>(Базовый)</em>": taskHard === 2 ? "<em>(Средний)</em>": taskHard === 3 ? "<em>(Сложный)</em>":""}` 
    const generateHeader = () => `<details><summary class="p-num resh print">Показать решение и ответ</summary><hr class="hr-pd_10">`;
    const generateFooter = () => `</details><hr class="hr-pd_20"><hr class="hr-between"><hr class="hr-pd_20">`;

    // const generateDate = () => `${ tumbler ? !taskNum ? `<hr class="hr-pd_20">`: `<hr class="hr-pd_10"><p class="p-num" style="text-align: right;">Номер: ${taskNum}</p><hr class="hr-pd_10">` : `<hr class="hr-pd_20">`} `;
    //const generateDate = () => `${ !taskNum ? `<hr class="hr-pd_20">`: `<hr class="hr-pd_10"><p class="p-num print" style="text-align: right;">Номер: ${taskNum}</p><hr class="hr-pd_10">`} `;
    
    
    const generateDate = () => `${ !taskNum ? `<hr class="hr-pd_20">`: `<hr class="hr-pd_10">
      <div class="text-inform" data-task-counter="${taskCounter}"><div class="inform-block"></div>
        ${ !taskKec ? ``:
          taskKec[2] === 1 ? 
          `<img id="text-inform-button" src="../../img/inform2.svg">`:
          taskKec[2] === 2 ? 
          `<img id="text-inform-button" src="../../img/inform6.svg">`:
          `<img id="text-inform-button" src="../../img/inform5.svg">` }
        <p class="p-num print" style="text-align: right;"> Номер: ${taskNum}</p>
        
      </div>
      <hr class="hr-pd_10">`} `;
   
    const generateAuthor = () => `${!taskAuthor ? "": `<em>${taskAuthor}</em>`}`
    const generateInput = () => ` <section class="answer-block"><p></p><input id="input_answer" class="input_answer" placeholder="Введите ответ"/></section>`;
  
    const beginTask = () => `<div class="tasks-blocks">`;
    const endTask = () => `</div>`;
    let answerBlock = "";
 //   answerBlock += beginTask(); 
 //   answerBlock += endTask();

    if (taskKey === 'six'){
      let Nomer = 6
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          ${task2 ? 
            ` Найдите значение выражения: 
             <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task2[0]}</mn>
                <mn style="padding-top: 5px;">${task2[1]}</mn>
              </mfrac>
            </math>

            ` 
            : `Найдите значение выражения: ${task1}`}
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
          Найдите значение выражения: 
          <math style="font-size: 140%">
            <mfrac >
              <mn style="padding-bottom: 5px;">${task1[0]}</mn>
              <mn style="padding-top: 5px;">${task1[1]}</mn>
            </mfrac>
          </math>
          &thinsp;${task1[4]}&thinsp;
          <math style="font-size: 140%">
            <mfrac >
              <mn style="padding-bottom: 5px;">${task1[2]}</mn>
              <mn style="padding-top: 5px;">${task1[3]}</mn>
            </mfrac>
          </math>
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
          <div style="display: flex; justify-content: space-around;"><p>${task3[0]}</p><p>${task3[1]}</p><p>${task3[2]}</p><p> ${task3[3]}</p></div>
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
            Какое из следующих чисел заключено между числами &thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                <mn style="padding-top: 5px;">${task1[1]}</mn>
              </mfrac>
            </math>&thinsp; и&thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[2]}</mn>
                <mn style="padding-top: 5px;">${task1[3]}</mn>
              </mfrac>
            </math>&thinsp;
            ?&thinsp;
            ` : 
            task1[1] ? 
            `
            Между какими целыми числами заключено число &thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                <mn style="padding-top: 5px;">${task1[1]}</mn>
              </mfrac>
            </math>&thinsp; ?&thinsp;
            ` : 
            `
            Между какими числами заключено число <span style="font-size: 140%; margin-right: -2px;">√</span><span  style="border-top: 0.14em solid ">${task1[0]}</span> ?
        
            
            `}<hr class="hr-pd_40"> 
           <div style="display: flex; justify-content: space-around;"><p>${task2[0]}</p><p>${task2[1]}</p><p>${task2[2]}</p><p> ${task2[3]}</p></div>
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
          ${task1.length === 7 ? 
            `
            Какое из чисел&thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                <mn style="padding-top: 5px;">${task1[4]}</mn>
              </mfrac>
            </math>&thinsp;;&thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[1]}</mn>
                <mn style="padding-top: 5px;">${task1[4]}</mn>
              </mfrac>
            </math>&thinsp;;&thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[2]}</mn>
                <mn style="padding-top: 5px;">${task1[4]}</mn>
              </mfrac>
            </math>&thinsp;;&thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[3]}</mn>
                <mn style="padding-top: 5px;">${task1[4]}</mn>
              </mfrac>
            </math>&thinsp; принадлежит отрезку [${task1[5]}; ${task1[6]}] ?
            <hr class="hr-pd_40">
            ` :
            task1.length === 6 ? 
            `Одно из чисел&thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                <mn style="padding-top: 5px;">${task1[4]}</mn>
              </mfrac>
            </math>&thinsp;;&thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[1]}</mn>
                <mn style="padding-top: 5px;">${task1[4]}</mn>
              </mfrac>
            </math>&thinsp;;&thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[2]}</mn>
                <mn style="padding-top: 5px;">${task1[4]}</mn>
              </mfrac>
            </math>&thinsp;;&thinsp;
            <math style="font-size: 140%">
              <mfrac >
                <mn style="padding-bottom: 5px;">${task1[3]}</mn>
                <mn style="padding-top: 5px;">${task1[4]}</mn>
              </mfrac>
            </math>&thinsp;
            отмечено на числовой прямой точкой ${task1[5]}.<hr class="hr-pd_10">
            <img style="display: block; margin: 0 auto; width: 70%;" src=../../pages/mathOge/img/task7/7_${taskCounter}.png><hr class="hr-pd_10">
            Какое это число?<hr class="hr-pd_20">
            ` :  task1.length == 2 ? 
            `Какому из данных промежутков принадлежит число&thinsp;
              <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                  <mn style="padding-top: 5px;">${task1[1]}</mn>
                </mfrac>
              </math>&thinsp; ?
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
          
         
          ${task1.length === 6 || task1.length === 7 ? 
          `<div style="display: flex; justify-content: space-around;">
            <p> 1)
              <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                  <mn style="padding-top: 5px;">${task1[4]}</mn>
                </mfrac>
              </math>
            </p>
            <p> 2)
              <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task1[1]}</mn>
                  <mn style="padding-top: 5px;">${task1[4]}</mn>
                </mfrac>
              </math>
            </p>
            <p> 3)
              <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task1[2]}</mn>
                  <mn style="padding-top: 5px;">${task1[4]}</mn>
                </mfrac>
              </math>
            </p>
            <p> 4)
              <math style="font-size: 140%">
                <mfrac >
                  <mn style="padding-bottom: 5px;">${task1[3]}</mn>
                  <mn style="padding-top: 5px;">${task1[4]}</mn>
                </mfrac>
              </math>
            </p>
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
          при a = ${task1[4]} и b = <span style="font-size: 170%; margin-right: -2px;">√</span><span style="border-top: 0.14em solid; padding-top: 4px;">${task1[4]}</span>

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
                  <span style="font-size: 170%; margin-right: -5px;">√</span>
                  <span style="border-top: 0.16em solid; padding-top: 0.2em;">${task1[0]}</span>
                  •
                  <span style="font-size: 170%; margin-right: -5px;">√</span>
                  <span style="border-top: 0.16em solid; padding-top: 0.2em;">${task1[1]}</span>
                </mrow>
              </mn>
              <mn style=" padding-top: 2px;">
                <mrow>
                    <span style="font-size: 170%; margin-right: -5px;">√</span>
                    <span style="border-top: 0.16em solid; padding-top: 0.2em;">${task1[2]}</span>
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
                        <mrow>(${task1[1]}
                        <span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
                        <span style="border-top: 0.12em solid; padding-top: 0.1em;">${task1[2]}</span> ) </mrow>
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
                        <mrow>(${task1[1]}
                        <span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
                        <span style="border-top: 0.12em solid; padding-top: 0.1em;">${task1[2]}</span> ) </mrow>
                      </mn>
                      <mn>${task1[3]}</mn>
                    </msup>
                </mfrac>
              </math>

          `} `
          : task === 33 ? 
           `
           <span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
           <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[0]} • ${task1[1]}</span> 
           &thinsp;•
           <span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
           <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[2]}</span>
           ` 
           : task === 34 ? 
            
           `${task1[3] === "+" ? 
            `(<span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[0]}</span> 
              &thinsp;+ ${task1[1]} )<sup>2</sup> — 
              ${task1[2]}<span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[0]}</span>` 
            :
            `(<span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[0]}</span> 
              &thinsp;— ${task1[1]} )<sup>2</sup> +
              ${task1[2]}<span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[0]}</span>
            `}` 
           : task === 35 ? 
           `
           ${task1[2] === "+" ? 
            `
            (<span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[0]}</span> 
              &thinsp;+ <span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[1]}</span> ) &thinsp;• 
              <span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[1]}</span>
            ` 
            : 
            `
            (<span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[0]}</span> 
              &thinsp;— <span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[1]}</span> ) &thinsp;• 
              <span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[1]}</span>
            `} `
           : task === 36 ? 
           `${task1[0]}<span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[1]}</span>
              &thinsp;• ${task1[2]}<span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[3]}</span>
              &thinsp;• <span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[4]}</span>
           ` 
           : task === 37 ? 
           `
           ${task1[2] === 1 ? 
            `
            (<span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[0]}</span> — ${task1[1]})
              (<span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[0]}</span> + ${task1[1]})
            ` 
            : 
            `(<span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[0]}</span> —
              <span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[1]}</span>)
              (<span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[0]}</span> +
              <span style="font-size: 120%; margin-right: -2px; font-family: sans-serif;">√</span>
              <span style="border-top: 0.1em solid; padding-top: 0.1em;">${task1[1]}</span>)
            `}
           
           `
           : task === 38 ? 
           `
           <span style="font-size: 130%; margin-right: -2px; font-family: sans-serif;">√</span>
            <span style="border-top: 0.1em solid; padding-top: 0.2em;">${task1[0]}<sup>${task1[1]}</sup></span>
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
                  <mtd style="padding-bottom: 5px;">&thinsp;${task1},</mtd>
                </mtr>
              
                <mtr>
                  <mtd style="padding-top: 5px;">&thinsp;${task2}.</mtd>
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
                  <mtd style="padding-bottom: 5px;">&thinsp;${task1},</mtd>
                </mtr>
              
                <mtr>
                  <mtd style="padding-top: 5px;">&thinsp;${task2}.</mtd>
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
    // <span style="font-size: 140%">√</span><span  style="border-top: 0.14em solid ">${task1[0]}</span>     <span style="font-size: 140%;">√</span><span  style="border-top: 0.13em solid ">25</span>
    // <sup>2</sup>   — • &thinsp; √   &nbsp;
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
              `Медиана равностороннего треугольника равна ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span>. 
              Найдите сторону этого треугольника.
              <hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1345.png"></div>
           
              `
            : 
            task1[1] === "v" ? 
              `Высота равностороннего треугольника равна ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span>. 
              Найдите сторону этого треугольника.
              <hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1350.png"></div>
           
              `
            :
            task1[1] === "b" ? 
              `Биссектриса равностороннего треугольника равна ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span>. 
              Найдите сторону этого треугольника.
              <hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1349.png"></div>
           
              `
            :
            task1[1] === "sb" ? 
              `Сторона равностороннего треугольника равна ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span>. 
              Найдите биссектрису этого треугольника.
              <hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1349.png"></div>
           
              `
            :  task1[1] === "sm" ? 
              `Сторона равностороннего треугольника равна ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span>. 
              Найдите медиану этого треугольника.
              <hr class="hr-pd_20">
              <div style="display: flex; justify-content: space-between; padding-right: 2em;"><p></p><img style="display: block;  width: 12em; " src="../../pages/mathOge/img/task15/15_1345.png"></div>
           
              `
            : task1[1] === "sv" ? 
              `Сторона равностороннего треугольника равна ${task1[0]}<span style="font-size: 110%; font-family: MathJax_Size3;">√</span><span  style="border-top: 0.099em solid ">3</span>. 
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
        }   
    }
   
}
