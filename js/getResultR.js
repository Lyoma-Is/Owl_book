let resh = document.querySelector('.reshenie');
let input = document.querySelector('#input_answer');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    let inputs = document.querySelectorAll('#input_answer');
    let arrayInput = [];
    let arrayAnswer = [];
    let countResult = 0;

    let ansRes = document.getElementById("answer_results");
    while (ansRes.firstChild) {
        ansRes.removeChild(ansRes.firstChild);
    }

    for (let input of inputs) {
        input.classList.remove('input_answer-green', 'input_answer-red', 'input_answer');

        let correct = input.dataset.right.toUpperCase();
        let userInput = input.value.toUpperCase().replaceAll(' ', '');

        if (correct.includes(' | ')) {
            let [alt1, alt2] = correct.split(' | ').map(str => str.trim());
            if (userInput === alt1 || userInput === alt2) {
                input.classList.add('input_answer-green');
                countResult++;
            } else {
                input.classList.add('input_answer-red');
            }
        } else {
            if (userInput === correct) {
                input.classList.add('input_answer-green');
                countResult++;
            } else {
                input.classList.add('input_answer-red');
            }
        }

        arrayInput.push(userInput);
        arrayAnswer.push(correct);
    }

    // Создание текста с оценкой
    let pResult = document.createElement('p');
    pResult.classList.add("centerResult");

    if (countResult < 5) {
        pResult.textContent = `Ваша оценка: 2 |  Количество баллов: ${countResult} из ${inputs.length}`;
    } else if (countResult < 11) {
        pResult.textContent = `Ваша оценка: 3 |  Количество баллов: ${countResult} из ${inputs.length}`;
    } else if (countResult < 16) {
        pResult.textContent = `Ваша оценка: 4 |  Количество баллов: ${countResult} из ${inputs.length}`;
    } else {
        pResult.textContent = `Ваша оценка: 5 |  Количество баллов: ${countResult} из ${inputs.length}`;
    }

    // Создание таблицы с ответами
    let table = document.createElement("table");

    for (let i = 0; i < inputs.length; i++) {
        let row = document.createElement("tr");

        let cell1 = document.createElement("td");
        cell1.textContent = i + 1;
        cell1.classList.add('answer_table-border');
        row.appendChild(cell1);

        let cell2 = document.createElement("td");
        cell2.textContent = arrayInput[i];
        cell2.classList.add('answer_td', 'answer_table-border');

        if (arrayAnswer[i].includes(' | ')) {
            let [alt1, alt2] = arrayAnswer[i].split(' | ').map(str => str.trim());
            if (arrayInput[i] === alt1 || arrayInput[i] === alt2) {
                cell2.classList.add('answer_bg-green');
            } else if (arrayInput[i] !== "") {
                cell2.classList.add('answer_bg-red');
            }
        } else {
            if (arrayInput[i] === arrayAnswer[i]) {
                cell2.classList.add('answer_bg-green');
            } else if (arrayInput[i] !== "") {
                cell2.classList.add('answer_bg-red');
            }
        }

        row.appendChild(cell2);

        let cell3 = document.createElement("td");
        cell3.textContent = arrayAnswer[i];
        cell3.classList.add('answer_table-border');
        row.appendChild(cell3);

        table.appendChild(row);
    }

    ansRes.appendChild(pResult);
    ansRes.appendChild(table);

    // Показываем блок с разбором
    let razOtv = document.querySelector('.details-raz_otv');
    if (razOtv) {
        razOtv.classList.add('details-raz_otv_active');
        razOtv.classList.remove('details-raz_otv');
    }
});

