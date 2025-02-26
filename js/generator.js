import generateTaskHTML from "./viewTask.js";
import {tasks} from "./viewTask.js";
// Функция для загрузки JSON
async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Ошибка загрузки JSON:', error);
        return null;
    }
}

// Функция выбора случайного элемента из массива
function getRandomItem(arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

// Главная функция генератора задач
async function generateRandomTasks() {
    const result = {};
    for (const key in tasks) {
        const data = await fetchJSON(tasks[key]);
        if (data) {
            result[key] = getRandomItem(data);
        } else {
            result[key] = null;
        }
    }
    return result;
}

// Функция для отображения задач в HTML
async function displayTasks() {
    const generatorDiv = document.querySelector('.task-numbers__block');
    if (!generatorDiv) {
        console.error('Элемент .generator не найден!');
        return;
    }

    const randomTasks = await generateRandomTasks();

    if (!randomTasks.one || !randomTasks.ten || !randomTasks.two) {
        generatorDiv.innerHTML = '<p>Ошибка загрузки задач. Пожалуйста, попробуйте снова.</p>';
        return;
    }

    generatorDiv.innerHTML = `
            ${generateTaskHTML('one', randomTasks.one)}
            ${generateTaskHTML('two', randomTasks.two)}
            ${generateTaskHTML('three', randomTasks.three)}
            ${generateTaskHTML('four', randomTasks.four)}
            ${generateTaskHTML('ten', randomTasks.ten)}
       
    `;
}

// Вызов функции для отображения задач
displayTasks();

