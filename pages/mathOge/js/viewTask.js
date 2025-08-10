const tasks = {

  six: '../../src/oge_math/taskSix.json',
  seven: '../../src/oge_math/taskSeven.json',
  eight: '../../src/oge_math/taskEight.json',
  nine: '../../src/oge_math/taskNine.json',
  ten: '../../src/oge_math/taskTen.json',
  eleven: '../../src/oge_math/taskEleven.json'
};
 
export {tasks};

  // one: '../../../src/oge_inf/taskOne.json',
  // two: '../../../src/oge_inf/taskTwo.json',
  // three: '../../../src/oge_inf/taskThree.json',
  // four:  '../../../src/oge_inf/taskFour.json',
  // five: '../../../src/oge_inf/taskFive.json',
  //   seven: '../../../src/oge_inf/taskSeven.json',
  // ,
  // 
  // ,
  // ,
  // twelve: '../../../src/oge_math/taskTwelve.json',
  // thirteen: '../../../src/oge_math/taskThirteen.json',
  // thirteentwo: '../../../src/oge_math/taskThirteenTwo.json',
  // fourteen: '../../../src/oge_math/taskFourteen.json',
  // fifteen: '../../../src/oge_math/taskFifteen.json',
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
 //   answerBlock += beginTask(); <sup>2</sup>   — • &thinsp; √   &nbsp;
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
    // <span style="font-size: 140%">√</span><span  style="border-top: 0.14em solid ">${task1[0]}</span>     <span style="font-size: 140%;">√</span><span  style="border-top: 0.13em solid ">25</span>
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
                <mrow>
                 <mn>(&thinsp;</mn>
                  <msup>
                    <mn style="padding-bottom: 5px;">a</mn>
                    <mn style="padding-bottom: 5px;">${task1[0]}</mn>
                  </msup>
                  <mn>)</mn>
                </mrow>
                <mn >${task1[1]}</mn>
              </msup>
              <msup>
                <mn style="padding-bottom: 5px;">a</mn>
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
         if(task === 31){
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
            return `${task4[0]}` 

           }
         }
         
      }
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          
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
            На рисунках изображены графики функций вида <i>y&nbsp;=&nbsp;ax<sup>2</sup>&nbsp;+&nbsp;bx&nbsp;+&nbsp;c</i>. Установите соответствие между знаками коэффициентов a и c и графиками функций.<hr class="hr-pd_10">
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
            </table>
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
          <b><u>ФУНКЦИИ</u></b><hr class="hr-pd_20">
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
   
}
