const tasks = {

  six: '../../../src/oge_math/taskSix.json',

};
 
export {tasks};

  // one: '../../../src/oge_inf/taskOne.json',
  // two: '../../../src/oge_inf/taskTwo.json',
  // three: '../../../src/oge_inf/taskThree.json',
  // four:  '../../../src/oge_inf/taskFour.json',
  // five: '../../../src/oge_inf/taskFive.json',
  //   seven: '../../../src/oge_inf/taskSeven.json',
  // eight: '../../../src/oge_inf/taskEight.json',
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
          `<img id="text-inform-button" src="../../../img/inform2.svg">`:
          taskKec[2] === 2 ? 
          `<img id="text-inform-button" src="../../../img/inform6.svg">`:
          `<img id="text-inform-button" src="../../../img/inform5.svg">` }
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
          <p class="p-num"><b>${Nomer}.</b><em> № ${taskCounter}</em> ${tumbler ? generateAuthor() : ""} ${generateHard()}</p> <hr class="hr-pd_10">`
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
