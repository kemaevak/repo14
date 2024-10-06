const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const submitBtn = document.getElementById('submit-btn');

emailInput.addEventListener('input', function() {
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        errorMessage.style.display = 'inline';
        submitBtn.disabled = true;
    } else {
        errorMessage.style.display = 'none';
        submitBtn.disabled = false;
    }
});
