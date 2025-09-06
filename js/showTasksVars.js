import generateTaskHTML from "./viewTask.js";
import { tasks } from "./viewTask.js";

// ------------------ Глобальные переменные ------------------
let variants = [];
const tasksCache = new Map();
let allTasks = [];
let correctAnswerVars = []; 

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
            const correct = correctAnswers[taskId]?.toString().toUpperCase();

            const user = input.value.toUpperCase().replace(/\s+/g, '');
            input.classList.remove('input_answer-green', 'input_answer-red');

            // const isCorrect = correct.split(' | ').includes(user);
            
            // input.classList.add(isCorrect ? 'input_answer-green' : 'input_answer-red');
            let isCorrect = false;
                if (correct.includes(' | ')) {
                    const alternatives = correct.split(' | ').map(str => str.trim());
                    isCorrect = alternatives.includes(user);
                }  else if(correct ==="") {
                    isCorrect;
                } else {
                    isCorrect = user === correct;
                }
    
                if (isCorrect) {
                    input.classList.add('input_answer-green');
                    score++;
                } else {
                    input.classList.add('input_answer-red');
                } 

            //if (isCorrect) score++;
            let reshOtv = document.querySelector('.reshenie');
            if (reshOtv){  
                reshOtv.classList.remove('reshenie');
            } 
            userAnswers.push(user || '—');
            correctList.push(correct);
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
    if (score < 5) return `Ваша оценка: 2 <span style="padding: 5px;" class="bg_red">Не зачёт</span> <br><br> Количество баллов: ${score} из ${total}`;
    if (score < 11) return `Ваша оценка: 3 <span style="padding: 5px;" class="bg_yellow">Зачёт</span> <br><br> Количество баллов: ${score} из ${total}`;
    if (score < 16) return `Ваша оценка: 4 <span style="padding: 5px;" class="bg_green">Зачёт</span> <br><br> Количество баллов: ${score} из ${total}`;
    return `Ваша оценка: 5 <span style="padding: 5px;" class="bg_green">Зачёт</span> <br><br> Количество баллов: ${score} из ${total}`;
}
// userAnswers.length
function createResultsTable(userAnswers, correctAnswers) {
    let tableHTML = `
    <table style="width:100%; border-collapse:collapse; margin-top:15px;">
        <tbody>`;

for (let i = 0; i < 12; i++) {
    const answer = userAnswers[i];
    const correctAnswer = correctAnswers[i];
    
    const isCorrect = correctAnswer.includes(' | ')
        ? correctAnswer.split(' | ').includes(answer)
        : answer === correctAnswer;

    const color = answer === '—' ? '' : isCorrect ? '#c0ffc0' : '#ffc0c0';
    
    tableHTML += `
            <tr class="answer-td">
                <td style="padding:8px; width:10%; border:1px solid #000; border-right: 0;">${i + 1}</td>
                <td style="padding:8px; width:30%; border:1px solid #000; border-left: 0; border-right: 0; background-color:${color};">${answer}</td>
                <td style="padding:8px; width:30%; border:1px solid #000; border-left: 0;">${correctAnswer}</td>
            </tr>`;
}

tableHTML += `
        </tbody>
    </table>`;

return tableHTML;
    // return `
    //     <table style="width:100%; border-collapse:collapse; margin-top:15px;"><tbody>
    //         ${userAnswers.map((answer, i) => {
    //             const isCorrect = correctAnswers[i].includes(' | ')
    //                 ? correctAnswers[i].split(' | ').includes(answer)
    //                 : answer === correctAnswers[i];


    //             const color = answer === '—' ? '' : isCorrect ? '#c0ffc0' : '#ffc0c0';
    //             return `
    //                  <tr class="answer-td">
    //                      <td style="padding:8px; width:10%; border:1px solid #000; border-right: 0;" >${i + 1}</td>
    //                      <td style="padding:8px; width:30%; border:1px solid #000; border-left: 0; border-right: 0; background-color:${color};">${answer}</td>
    //                      <td style="padding:8px; width:30%; border:1px solid #000; border-left: 0;">${correctAnswers[i]}</td>
    //                  </tr>
    //             `;
    //         }).join('')}
    //     </tbody></table>
    // `;
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
        correctAnswerVars.push(task.taskAnswer);
    });
    
    const tasksHTML = tasksToDisplay.map(task => generateTaskHTML(task.source, task, false));
    const slider = createSlider(tasksHTML, correctAnswers);
    if (slider) {
        setupCheckButton(slider, correctAnswers);
    }
}

// ------------------ Варианты ------------------
function createVariants() {
    const block2025 = document.querySelector('.vars-block_2025');
    const block2026 = document.querySelector('.vars-block_2026');
    const block_tr_2026 = document.querySelector('.vars-block_tr-2026');

    if (!block2025) return;

    const variantsByYear = variants.reduce((acc, variant) => {
        const year = variant.year || 2025; // Добавлено значение по умолчанию
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(variant);
        return acc;
    }, {});

    const createYearGroupHTML = (yearVariants) => {
        const reversedVariants = [...yearVariants].reverse();
        return reversedVariants.map((variant, i) => `
            <a id="variant${i+1}" 
               class="vars-block__inner" 
               href="../../pages/variants/tasksOgeInf/showTasksVars.html" 
               data-variant-index="${variants.indexOf(variant)}">
                ${variant.name}
            </a>
        `).join('');
    };

    if (block2025 && variantsByYear[2025]) {
        block2025.innerHTML = createYearGroupHTML(variantsByYear[2025]);
    }

    if (block2026 && variantsByYear[2026]) {
        block2026.innerHTML = createYearGroupHTML(variantsByYear[2026]);
    }

    if (block_tr_2026 && variantsByYear["tr-2026"]) {
        block_tr_2026.innerHTML = createYearGroupHTML(variantsByYear["tr-2026"]);
    }

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
        const response = await fetch('../../src/oge_inf/showVariants.json');
        if (!response.ok) throw new Error('Не удалось загрузить варианты');
        variants = await response.json();
        createVariants();
    } catch (e) {
        //console.error('Ошибка загрузки вариантов:', e);
    }
}

function updateBreadcrumbWithVariant() {
    const selectedVariant = JSON.parse(localStorage.getItem('selectedVariant'));
    if (!selectedVariant) return;

    const breadcrumbLastLink = document.querySelector('.breadcrumb .bread-last a');
    if (breadcrumbLastLink) {
        breadcrumbLastLink.innerHTML = `${selectedVariant.name}`;
    }
}

// ------------------ Инициализация ------------------
async function init() {
    await loadVariants();
    
    if (window.location.pathname.includes('showTasksVars.html')) {
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

// Экспорт
export { correctAnswerVars };

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);