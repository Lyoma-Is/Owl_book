import generateTaskHTML from "./viewTask.js";
import { tasks } from "./viewTask.js";

// ------------------ Глобальные переменные ------------------
let variants = [];
const tasksCache = new Map();
let allTasks = [];

// ------------------ Слайдер ------------------
function createSlider(tasksHTML, correctAnswers) {
    const sliderContainer = document.querySelector('.task-generator');
    if (!sliderContainer) {
        console.error('Контейнер слайдера не найден');
        return null;
    }

    sliderContainer.innerHTML = '';

    const slider = document.createElement('div');
    slider.className = 'slider';

    const slides = [];
    const buttons = [];
    let currentSlide = 0;
    let resultsSlideIndex = -1;

    tasksHTML.forEach((taskHTML, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.setAttribute('data-task-id', Object.keys(correctAnswers)[index]);
        slide.innerHTML = taskHTML;
        slider.appendChild(slide);
        slides.push(slide);
    });

    const navigation = document.createElement('div');
    navigation.className = 'slider-navigation';

    tasksHTML.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = `slider-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = index + 1;
        if (index+1 === 13){
            btn.textContent = "13.1"
        }
        if (index+1 === 14){
            btn.textContent = "13.2"
        }
        if (index+1 > 14){
            btn.textContent = index
        }
        btn.addEventListener('click', () => goToSlide(index));
        buttons.push(btn);
        navigation.appendChild(btn);
    });

    function goToSlide(index) {
        if (currentSlide === index) return;
        slides[currentSlide]?.classList.remove('active');
        buttons[currentSlide]?.classList.remove('active');
        currentSlide = index;
        slides[currentSlide]?.classList.add('active');
        buttons[currentSlide]?.classList.add('active');
    }

    sliderContainer.appendChild(navigation);
    sliderContainer.appendChild(slider);

    return {
        goToSlide,
        updateResultsSlide: (html) => {
            if (resultsSlideIndex !== -1) {
                slides[resultsSlideIndex].innerHTML = html;
                return resultsSlideIndex;
            }
            resultsSlideIndex = slides.length;
            const slide = document.createElement('div');
            slide.className = 'slide results-slide';
            slide.innerHTML = html;
            slider.appendChild(slide);
            slides.push(slide);

            const btn = document.createElement('button');
            btn.className = 'slider-btn';
            btn.textContent = 'Итог';
            btn.addEventListener('click', () => goToSlide(resultsSlideIndex));
            buttons.push(btn);
            navigation.appendChild(btn);

            return resultsSlideIndex;
        },
        getCurrentSlide: () => currentSlide
    };
    
}

// ------------------ Проверка ответов ------------------
function setupCheckButton(slider, correctAnswers) {
    const button = document.querySelector('#button-finish');

    if (!button) return;
    
    document.querySelectorAll('.resh').forEach(el => {el.classList.add('reshenie');});

    button.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.slide:not(.results-slide) #input_answer');
        const userAnswers = [];
        const correctList = [];
        let score = 0;

        inputs.forEach((input) => {

            const taskId = input.closest('.slide')?.getAttribute('data-task-id');
            const correct = Array.isArray(correctAnswers[taskId])
                ? correctAnswers[taskId][0]?.toString().toUpperCase()
                : correctAnswers[taskId]?.toString().toUpperCase();

            const user = input.value.toUpperCase().replace(/\s+/g, '');
            input.classList.remove('input_answer-green', 'input_answer-red');

            const isCorrect = correct.split(' | ').includes(user);

            userAnswers.push(user || '—');
            correctList.push(correct);

            input.classList.add(isCorrect ? 'input_answer-green' : 'input_answer-red');
            if (isCorrect) score++;
            let reshOtv = document.querySelector('.reshenie');
            if (reshOtv){  
                reshOtv.classList.remove('reshenie');
            }

        });

        const resultHTML = `
            <div id="answer_results">
                <p class="centerResult">${getResultText(score, inputs.length)}</p>
                ${createResultsTable(userAnswers, correctList)}
            </div>
        `;
        const resultsIndex = slider.updateResultsSlide(resultHTML);
        slider.goToSlide(resultsIndex);
    });
}

function getResultText(score, total) {
    if (score < 5) return `Ваша оценка: 2 | Количество баллов: ${score} из ${total}`;
    if (score < 8) return `Ваша оценка: 3 | Количество баллов: ${score} из ${total}`;
    if (score < 10) return `Ваша оценка: 4 | Количество баллов: ${score} из ${total}`;
    return `Ваша оценка: 5 | Количество баллов: ${score} из ${total}`;
}

function createResultsTable(userAnswers, correctAnswers) {
    return `
        <table style="width:100%; border-collapse:collapse; margin-top:15px;"><tbody>
            ${userAnswers.map((answer, i) => {
                const isCorrect = correctAnswers[i].includes(' | ')
                    ? correctAnswers[i].split(' | ').includes(answer)
                    : answer === correctAnswers[i];
                const color = answer === '—' ? '' : isCorrect ? '#c0ffc0' : '#ffc0c0';
                return `
                     <tr class="answer-td">
                         <td style="padding:8px; width:10%; border:1px solid #000; border-right: 0;" >${i + 1}</td>
                         <td style="padding:8px; width:30%; border:1px solid #000; border-left: 0; border-right: 0; background-color:${color};">${answer}</td>
                         <td style="padding:8px; width:30%; border:1px solid #000; border-left: 0;">${correctAnswers[i]}</td>
                     </tr>
                `;
            }).join('')}
        </tbody></table>
    `;
}

// ------------------ Загрузка задач ------------------
async function fetchTasks(taskKey) {
    if (tasksCache.has(taskKey)) return tasksCache.get(taskKey);
    try {
        const response = await fetch(tasks[taskKey]);
        const data = await response.json();
        data.forEach(task => task.source = taskKey);
        tasksCache.set(taskKey, data);
        allTasks.push(...data);
        return data;
    } catch (e) {
        console.error(`Ошибка загрузки ${taskKey}:`, e);
        return [];
    }
}

async function loadAllTasks(taskKeys) {
    await Promise.all(taskKeys.map(fetchTasks));
}

// ------------------ Отображение задач ------------------
function displayTasksByVariantWithSlider(tasksToDisplay) {
    const correctAnswers = {};
    tasksToDisplay.forEach(task => {
        correctAnswers[task.source] = task.taskAnswer;
    });

    const tasksHTML = tasksToDisplay.map(task => generateTaskHTML(task.source, task, false));
    const slider = createSlider(tasksHTML, correctAnswers);
    setupCheckButton(slider, correctAnswers);
}

// ------------------ Варианты ------------------

function createVariants() {
    const block = document.querySelector('.vars-block');
    if (!block) return;

    block.innerHTML = variants.map((variant, i) =>
        `<a id="variant${i+1}" class="vars-block__inner" href="../../pages/variants/tasksOgeInf/showTasks.html" data-variant-index="${i}">${variant.name}</a>`
    ).join('');

    document.querySelectorAll('.vars-block__inner').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const variantIndex = parseInt(link.dataset.variantIndex);
            localStorage.setItem('selectedVariant', JSON.stringify(variants[variantIndex]));
            window.location.href = link.href;
        });
    });
}
// ------------------ Загрузка вариантов ------------------
async function loadVariants() {
    try {
        //const response = await fetch('../../src/oge_inf/showVarsMonth.json');
        const response = await fetch('https://raw.githubusercontent.com/Lyoma-Is/Owl_book/refs/heads/main/src/oge_inf/showVarsMonth.json');
        if (!response.ok) throw new Error('Не удалось загрузить варианты');
        variants = await response.json();
        createVariants();
    } catch (e) {
        console.error('Ошибка загрузки вариантов:', e);
    }
}
function updateBreadcrumbWithVariant() {
    const selectedVariant = JSON.parse(localStorage.getItem('selectedVariant'));
    if (!selectedVariant) return;

    const breadcrumbLastLink = document.querySelector('.breadcrumb .bread-last a');
    if (!breadcrumbLastLink) return;

    // Use the variant's name property instead of calculating index
    breadcrumbLastLink.textContent = selectedVariant.name || 'Выбранный вариант';
}

// ------------------ Инициализация ------------------
async function init() {
    await loadVariants();
    
    // Обновляем хлебные крошки только если мы на странице варианта
    if (window.location.pathname.includes('showTasks.html')) {
        updateBreadcrumbWithVariant();
        
        const selectedVariant = JSON.parse(localStorage.getItem('selectedVariant'));
        if (!selectedVariant) return;

        await loadAllTasks(Object.keys(tasks));
        const tasksToDisplay = selectedVariant.tasksVars
            .map(counter => allTasks.find(task => task.taskCounter === counter))
            .filter(Boolean);

        displayTasksByVariantWithSlider(tasksToDisplay);
    }
}

// Единый обработчик загрузки страницы
document.addEventListener('DOMContentLoaded', init);