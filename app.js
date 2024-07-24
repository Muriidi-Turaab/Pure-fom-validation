// select all elements

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const comfirmPassword = document.querySelector("#comfirmPassword");
const form = document.querySelector("#form");

const showError = (input,message) => {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0]
    const errorIcon = parentElement.querySelectorAll("i")[1]
    
    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = message;
}

const showSuccess = (input,message) => {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success';

    const successIcon = parentElement.querySelectorAll("i")[0]
    const errorIcon = parentElement.querySelectorAll("i")[1]
    
    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
}



const checkEmpty = (elements) => {

    elements.forEach((element) => {
        if(element.value === '') {
            showError(element, 'Input required');
        }else {
            showSuccess(element)
        }
    });
}


const checkEmail = (email) => {

    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(reg.test(email.value)) {
        showSuccess(email);
    }else {
        showError(email, 'Invalid Email')
    }
}


const checkPassword = (input,min,max) => {

    if(input.value.length < min) {
        showError(input, `Password atleast ${min} Character`);
    }else if(input.value.length > max) {
        showError(input, `Password maximum character is ${max}`)
    }else {
        showSuccess(input);
    }
}


form.addEventListener('submit', (e) => {

    e.preventDefault();

    checkEmpty([username, email, password, comfirmPassword]);
    checkEmail(email)
    checkPassword(password,6,10)
    checkPassword(comfirmPassword,6,10)
    
})