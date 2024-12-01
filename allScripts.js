const anime = require('animejs');

function openVideo(videoSrc) {
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('videoElement');
    const source = document.getElementById('videoSource');

    // Устанавливаем путь к новому видео
    source.src = videoSrc;
    video.load(); // Перезагружаем видео с новым источником
    videoContainer.classList.remove('hidden'); // Показываем контейнер
    video.play(); // Запускаем воспроизведение
}

function closeVideo() {
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('videoElement');

    video.pause(); // Останавливаем воспроизведение
    video.currentTime = 0; // Сбрасываем видео к началу
    videoContainer.classList.add('hidden'); // Скрываем контейнер
}

function stopPropagation(event) {
    event.stopPropagation();
}

function readFile(fileSrc) {
    const pdfFile = document.getElementById('pdfFile');
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('videoElement');
    const closePdfButton = document.getElementById('closePdfButton');

    // Скрываем видео, если оно отображается
    if (!videoContainer.classList.contains('hidden')) {
        video.pause();
        video.currentTime = 0;
        videoContainer.classList.add('hidden');
    }

    // Обновляем источник PDF
    pdfFile.src = fileSrc;

    // Отображаем PDF и кнопку закрытия
    pdfFile.classList.remove('hidden');
    closePdfButton.classList.remove('hidden');
}

function closePdf() {
    const pdfFile = document.getElementById('pdfFile');
    const closePdfButton = document.getElementById('closePdfButton');

    // Скрываем PDF и кнопку закрытия
    pdfFile.classList.add('hidden');
    closePdfButton.classList.add('hidden');

    // Очищаем источник PDF (опционально)
    pdfFile.src = '';
}