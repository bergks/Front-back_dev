const form = document.getElementById('ContactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', validationEmail);

function validationEmail() {
    const emailRegex = /^[A-Za-z0-9_.]{3,10}@[a-z0-9._]{1,10}\.[a-z]{2,3}$/;
    if(emailRegex.test(emailInput.value)){
        hideError(emailInput);
        return true;
    }
    else{
        showError(emailInput, 'Email должен состоять минимум из 3 символов и содержать домен')
        return false;
    }
}

function showError(input, message) {
    const formControl = input.parentElement;
    const errorControl = formControl.querySelector('.error') || document.createElement('div')
    errorControl.className = 'error';
    errorControl.textContent = message;
    formControl.appendChild(errorControl);
    input.style.borderColor = 'red';
}

function hideError(input) {
    const formControl = input.parentElement;
    const errorControl = formControl.querySelector('.error')
    if(errorControl){
        formControl.removeChild(errorControl);
    }
    input.style.borderColor = 'green';
}