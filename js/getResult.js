let resh = document.querySelector('.reshenie');
let input = document.querySelector('#input_answer');

let arrayInput = [];
let arrayAnswer = [];

let countReset = 0;
let button = document.querySelector('#button');
button.addEventListener('click', function (){
    let inputs = document.querySelectorAll('#input_answer'); 
    let countResult = 0;

    for (let input of inputs){
        
       // resh.classList.remove('reshenie');
        input.classList.remove('input_answer-green');
        input.classList.remove('input_answer');
        input.classList.remove('input_answer-red');
        
        
        if (input.dataset.right.includes(" | ")){
            strOne = input.dataset.right
            strTwo = strOne.slice(strOne[0], strOne.indexOf('|')-1)
            strThree = strOne.slice(strOne.indexOf('|')+2, strOne[-1])

            if (strTwo == input.value.toUpperCase().replaceAll(' ', '') | strThree == input.value.toUpperCase().replaceAll(' ', '')){
                input.classList.add('input_answer-green');      
                countResult += 1
            } else{
                input.classList.add('input_answer-red');
            }    
            
        } else if (input.value.toUpperCase().replaceAll(' ', '') == input.dataset.right.toUpperCase()){
            input.classList.add('input_answer-green');        
            countResult += 1
        } else{
            input.classList.add('input_answer-red');
        }
    }
    let pResult = document.createElement('p')
    pResult.classList.add("centerResult")
    
    if (countResult < 5){
        pResult.textContent = "Ваша оценка: 2 |  Количество баллов: " + countResult + " из " + inputs.length

    } else if (4 < countResult && countResult < 11){
        pResult.textContent = "Ваша оценка: 3 |  Количество баллов: " + countResult + " из " + inputs.length 

    } else if (10 < countResult && countResult < 16){
        pResult.textContent = "Ваша оценка: 4 |  Количество баллов: " + countResult + " из " + inputs.length 

    } else{
        pResult.textContent = "Ваша оценка: 5 |  Количество баллов: " + countResult + " из " + inputs.length 
    }

    
    for (let i = 0; i < inputs.length; i++){
        arrayInput.push(inputs[i].value.replaceAll(' ', ''));
        arrayAnswer.push(inputs[i].dataset.right)
    }

    let table = document.createElement("table");

    for (let i = 0; i < inputs.length; i++){
        let row = document.createElement("tr");

        let cell = document.createElement("td");
        cell.textContent = i+1;
        row.appendChild(cell);
        cell.classList.add('answer_table-border')

        cell = document.createElement("td");
        cell.textContent = arrayInput[i];
        row.appendChild(cell);
        cell.classList.add("answer_td")
        cell.classList.add('answer_table-border')

        if (arrayAnswer[i].includes(" | ")){
            strOne = arrayAnswer[i].toUpperCase()
            strTwo = strOne.slice(strOne[0], strOne.indexOf('|')-1)
            strThree = strOne.slice(strOne.indexOf('|')+2, strOne[-1])

            if (strTwo == arrayInput[i].toUpperCase() | strThree == arrayInput[i].toUpperCase()){
                cell.classList.add('answer_bg-green')   
            } else if(arrayInput[i] == ""){
            
            }
            else{
                cell.classList.add('answer_bg-red')
            }       
        } else if (arrayInput[i].toUpperCase() == arrayAnswer[i].toUpperCase()){
            cell.classList.add('answer_bg-green')
        } else if(arrayInput[i] == ""){
            
        } else{
            cell.classList.add('answer_bg-red')
        }

        cell = document.createElement("td");
        cell.textContent = arrayAnswer[i];
        row.appendChild(cell);
        cell.classList.add('answer_table-border')

        table.appendChild(row);
    }

    let ansRes = document.getElementById("answer_results");
    ansRes.appendChild(pResult)
    ansRes.appendChild(table);
    
    countReset += 1;
    
    if (countReset == 2){
        while (ansRes.firstChild) {
            ansRes.removeChild(ansRes.firstChild);
        }    
        countReset = 0
    }
    
    for (let i = 0; i < inputs.length; i++){
        arrayInput.pop(inputs[i].value);
        arrayAnswer.pop(inputs[i].dataset.right)
    }

});


