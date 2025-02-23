import generateTaskHTML from "./viewTask.js";

// Пути к JSON-файлам
// const tasks = {
//     one: '/src/oge_inf/taskOne.json',
//     ten: '/src/oge_inf/taskTen.json'
// };
const tasks = {
    one: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskOne.json',
    ten: 'https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/taskTen.json'
  };
  
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
    return arr[Math.floor(Math.random() * arr.length)+1];
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

    if (!randomTasks.one || !randomTasks.ten) {
        generatorDiv.innerHTML = '<p>Ошибка загрузки задач. Пожалуйста, попробуйте снова.</p>';
        return;
    }

    generatorDiv.innerHTML = `
            Задани 1.${generateTaskHTML('one', randomTasks.one)}
             Задани 10.${generateTaskHTML('ten', randomTasks.ten)}
       
    `;
}

// Вызов функции для отображения задач
displayTasks();

