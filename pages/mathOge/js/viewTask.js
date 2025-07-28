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
            Между какими числами заключено число <span style="font-size: 140%">√</span><span  style="border-top: 0.14em solid ">${task1[0]}</span> ?
        
            
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
            
            Какой точке соответствует число ${task1[8]} ? <hr class="hr-pd_30">
            ` :
            `
            На координатной прямой отмечены точки ${task1[0]}, ${task1[1]}, ${task1[2]}, ${task1[3]}. Одна из них соответствует числу <span style="font-size: 125%">√</span>${task1[4]}. Какая это точка?
            <hr class="hr-pd_20">
            <img style="display: block; margin: 0 auto; width: 70%;" src=../../pages/mathOge/img/task7/7_${taskCounter}.png>
            <hr class="hr-pd_30">      
            `}
          
         
          ${task1.length === 6 || task1.length === 7? 
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
          : task1.length === 5 || task1.length === 9 ? 
          `
          
          <div style="display: flex; justify-content: space-around;">
            <p>1) точка ${task1[0]}</p>
            <p>2) точка ${task1[1]}</p>
            <p>3) точка ${task1[2]}</p>
            <p>4) точка ${task1[3]}</p>
          </div>
          ` : ``}
          
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
      switch(typeTask){
        case 1:
          answerBlock += `
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">
          Найдите значение выражения: 
          ${ task === 1 ? 
            `
            a<sup style="font-size: 75%;">${task1[0]}</sup>&thinsp; •&thinsp; a<sup style="font-size: 75%;">${task1[1]}</sup>&thinsp; :&thinsp; a<sup style="font-size: 75%;">${task1[2]}</sup>&thinsp; при a = ${task1[3]}

            `
            :``}
          
          
          `
          
          answerBlock += generateDate();
          answerBlock += generateHeader();
          answerBlock += `
            <hr class="hr-pd_10">
            <p>a<sup style="font-size: 75%;">${task1[0]} + ${task1[1]} — ${task1[2]}</sup> = a<sup style="font-size: 75%;">${task1[0] + task1[1] - task1[2]}</sup> = ${task1[3]}<sup style="font-size: 75%;">${task1[0] + task1[1] - task1[2]}</sup> = ${Math.pow(task1[3], task1[0] + task1[1] - task1[2])}</p>
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
