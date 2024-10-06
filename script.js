let count = 0;
const button = document.getElementById('click-button');
const counterDisplay = document.getElementById('counter');

button.addEventListener('click', function() {
    count++;
    counterDisplay.textContent = count;
});
