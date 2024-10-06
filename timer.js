let seconds = 0;
const timerDisplay = document.getElementById('timer');

setInterval(function() {
    seconds++;
    timerDisplay.textContent = seconds;
}, 1000);
