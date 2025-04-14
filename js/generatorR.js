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

// Функция для создания слайдера
function createSlider(tasksHTML) {
    
    let sliderContainer = document.querySelector('.task-generator');
    const slider = document.createElement('div');
    slider.className = 'slider';

    // Добавляем слайды
    tasksHTML.forEach((taskHTML, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = taskHTML;
        slider.appendChild(slide);
    });
    
    // Добавляем навигацию с кнопками номеров заданий
    const navigation = document.createElement('div');
    navigation.className = 'slider-navigation';
    
    // Создаем кнопки для каждого задания
    tasksHTML.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = `slider-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = index + 1;
        btn.addEventListener('click', () => goToSlide(index));
        navigation.appendChild(btn);
    });
    
    sliderContainer.appendChild(navigation);
    sliderContainer.appendChild(slider);
   
    
    // Функция для переключения слайдов
    let currentSlide = 0;
    const slides = slider.querySelectorAll('.slide');
    const buttons = navigation.querySelectorAll('.slider-btn');
    
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        buttons[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        buttons[currentSlide].classList.add('active');
    }
    
    return sliderContainer;
}

// Функция для отображения задач в слайдере
async function displayTasks() {
    const generatorDiv = document.querySelector('.task-gen__block');
    if (!generatorDiv) {
        console.error('Элемент .task-gen__block не найден!');
        return;
    }

    const randomTasks = await generateRandomTasks();

    if (!randomTasks.one) {
        generatorDiv.innerHTML = '<p>Ошибка загрузки задач. Пожалуйста, попробуйте снова.</p>';
        return;
    }

    // Генерируем HTML для всех задач
    const tasksHTML = [
        generateTaskHTML('one', randomTasks.one),
        generateTaskHTML('two', randomTasks.two),
        generateTaskHTML('three', randomTasks.three),
        generateTaskHTML('four', randomTasks.four),
        generateTaskHTML('five', randomTasks.five),
        generateTaskHTML('six', randomTasks.six),
        generateTaskHTML('seven', randomTasks.seven),
        generateTaskHTML('eight', randomTasks.eight),
        generateTaskHTML('nine', randomTasks.nine),
        generateTaskHTML('ten', randomTasks.ten)
    ].filter(html => html); // Фильтруем пустые задачи

    // Создаем слайдер и добавляем его на страницу
    const slider = createSlider(tasksHTML);
    generatorDiv.innerHTML = ''; // Очищаем контейнер
    generatorDiv.appendChild(slider);
}

// Добавляем CSS для слайдера
function addSliderStyles() {
    const style = document.createElement('style');
    style.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .task-gen__block {
             padding: 10px 0;
        }
        .slider {
            display: flex;
            transition: transform 0.5s ease;  
            
            padding: 5px 0;
            font-size: 25px; 
            line-height: 2.5rem;
        }
        .slide {
            min-width: 100%;
            
            box-sizing: border-box;
            display: none;
        }
        .slide.active {
            display: block;
            padding: 5px 0;
            
        }
        .slider-navigation {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 20px;
            padding: 0 10px 10px 10px;
            border-bottom: 3px solid  rgb(233, 199, 105);
  
        }
        .slider-btn {
            display: block;
            width: 50px;
            height: 50px;
            background: #f0f0f0;
            border: 1px solid #ddd;
            border-radius: 10px;
            cursor: pointer;
            font-size: 20px;
            text-align: center;
            transition: all 0.3s ease;
            
           
        }
        .slider-btn:hover {
            background: #e0e0e0;
        }
        .slider-btn.active {
            background: rgb(233, 199, 105);;
            color: black;
            border-color: rgb(233, 199, 105);;
        }
    `;
    document.head.appendChild(style);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    addSliderStyles();
    displayTasks();
});



