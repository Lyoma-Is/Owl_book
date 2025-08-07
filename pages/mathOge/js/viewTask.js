const tasks = {

  six: '../../src/oge_math/taskSix.json',
  seven: '../../src/oge_math/taskSeven.json',
  eight: '../../src/oge_math/taskEight.json'
};
 
export {tasks};

  // one: '../../../src/oge_inf/taskOne.json',
  // two: '../../../src/oge_inf/taskTwo.json',
  // three: '../../../src/oge_inf/taskThree.json',
  // four:  '../../../src/oge_inf/taskFour.json',
  // five: '../../../src/oge_inf/taskFive.json',
  //   seven: '../../../src/oge_inf/taskSeven.json',
  // ,
  // nine: '../../../src/oge_inf/taskNine.json',
  // ten: '../../../src/oge_inf/taskTen.json',
  // eleven: '../../../src/oge_inf/taskEleven.json',
  // twelve: '../../../src/oge_inf/taskTwelve.json',
  // thirteen: '../../../src/oge_inf/taskThirteen.json',
  // thirteentwo: '../../../src/oge_inf/taskThirteenTwo.json',
  // fourteen: '../../../src/oge_inf/taskFourteen.json',
  // fifteen: '../../../src/oge_inf/taskFifteen.json',
  // sixteen: '../../../src/oge_inf/taskSixteen.json'

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
 //   answerBlock += beginTask(); <sup>2</sup>   — • &thinsp; √
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
          <img style="display: block; margin: 0 auto; width: 70%;" src=../../pages/mathOge/img/task7/7_${taskCounter}.png><hr class="hr-pd_20">
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
   
}
