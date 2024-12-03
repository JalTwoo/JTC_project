// index.js

const questions = [
    {
        question: "1. Национальная безопасность Республики Беларусь – это обеспечение территориальной целостности Республики Беларусь",
        answers: ["Да", "Нет"],
        correct: 0, // Индекс правильного ответа
    },
    {
        question: "2. Укажите, какой закон устанавливает состав и численность Вооруженных Сил Республики Беларусь «О Вооруженных Силах Республики Беларусь»",
        answers: ["Да", "Нет"],
        correct: 0,
    },
    {
        question: "3. Органы местного управления при введении военного положения осуществляют доставку мобилизованных на призывные пункты  военных комиссариатов ",
        answers: ["Да", "Нет"],
        correct: 1,
    },
    {
        question: "4. Воинская обязанность – это конституционный долг граждан по защите Республики Беларусь;",
        answers: ["Да", "Нет"],
        correct: 0,
    },
    {
        question: "5. Вооруженные Силы Республики Беларусь – это силовая структура государства обеспечивающая свободное развитие личности и прогрессивное экономическое развитие страны",
        answers: ["Да", "Нет"],
        correct: 1,
    },
];

let currentQuestion = 0;
let score = 0;

// Ссылки на элементы
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const corrAns = document.getElementById("corrAns");
const balls = document.getElementById("balls");

// Функция для показа вопроса
function showQuestion() {
    // Очистка старых ответов
    answersElement.innerHTML = "";

    // Установка текста вопроса
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;

    // Создание кнопок с ответами
    current.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.textContent = answer;
        li.addEventListener("click", () => selectAnswer(index));
        answersElement.appendChild(li);
    });

    nextButton.classList.add("hidden");
}

// Обработка выбора ответа
function selectAnswer(index) {
    const correct = questions[currentQuestion].correct;

    // Проверка правильности ответа
    if (index === correct) {
        score++;
        corrAns.innerHTML = "Правильно!";
    } else {
        corrAns.innerHTML = "Неправильно!";
    }

    // Показать кнопку "Следующий вопрос"
    nextButton.classList.remove("hidden");
}

// Переключение на следующий вопрос
nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion(); // Отображение следующего вопроса
        corrAns.innerHTML = ""; // Сбрасываем текст ответа
    } else {
        // Если это последний вопрос
        document.getElementById("result").innerHTML = `Тест завершён! Ваш результат: ${score}/${questions.length}`;
        questionElement.innerHTML = ""; // Очищаем текст вопроса
        answersElement.innerHTML = ""; // Очищаем варианты ответов
        corrAns.innerHTML = ""; // Сбрасываем текст ответа
        nextButton.classList.add("hidden"); // Скрываем кнопку
        balls.innerHTML = "Количество баллов: " + score + "/5";
    }
});

// Запуск первого вопроса
showQuestion();
