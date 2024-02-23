// inputs
const form = document.getElementById("contact-form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
// error spans
const fullnameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const messageError = document.getElementById("message-error");

// regex
const regexOnlyLetters = /[^a-zA-Z]/;

fullname.addEventListener("blur", function () {
    validateFullname();
});

email.addEventListener("blur", function () {
    validateEmail();
});

phone.addEventListener("blur", function () {
    validatePhone();
});

message.addEventListener("blur", function () {
    validateMessage();
});

form.addEventListener('submit', (e) => {

    if (checkAllFields() == true) {
        form.submit();
    } else {
        e.preventDefault();
    }

    validateFullname();
    validateEmail();
    validatePhone();
    validateMessage();
});


function emptyField(input) {
    if (input.value.length === 0) {
        return true
    } else {
        return false;
    }
};

function onlyLetters(input) {
    if (regexOnlyLetters.test(input.value)) {
        return true;
    } else {
        return false;
    }
}

function checkLength(input, max) {
    if (input.value.length > max) {
        return true;
    } else {
        return false;
    }
}


function validateFullname() {

    if (emptyField(fullname)) {

        fullnameError.innerText = 'This field can\'t be empty'
        fullnameError.classList.add("show");
        return false;

    } else if (fullname.value == 'Ironhack') {
        fullnameError.innerText = 'You cannot be Ironhack, because I am Ironhack.'
        fullnameError.classList.add("show");
        return false;
    }
    else if (onlyLetters(fullname)) {

        fullnameError.innerText = 'This field can only contain letters'
        fullnameError.classList.add("show");
        return false;

    } else if (checkLength(fullname, 40)) {

        fullnameError.innerText = 'The field is too long. Max. 40 characters.'
        fullnameError.classList.add("show");
        return false;

    } else {
        fullnameError.classList.remove("show");
        return true;
    }
};

function validateEmail() {

    if (emptyField(email)) {

        emailError.innerText = 'This field can\'t be empty'
        emailError.classList.add("show");
        return false;

    } else if (checkLength(email, 320)) {

        emailError.innerText = 'The field is too long. Max. 320 characters.'
        emailError.classList.add("show");
        return false;

    } else {
        emailError.classList.remove("show");
        return true;
    }
};


function validatePhone() {

    if (emptyField(phone)) {

        phoneError.innerText = 'This field can\'t be empty'
        phoneError.classList.add("show");
        return false;

    } else if (checkLength(phone, 15)) {

        phoneError.innerText = 'The field is too long. Max. 15 characters.'
        phoneError.classList.add("show");
        return false;

    } else {
        phoneError.classList.remove("show");
        return true;
    }
};

function validateMessage() {

    if (emptyField(message)) {

        messageError.innerText = 'This field can\'t be empty'
        messageError.classList.add("show");
        return false;

    } else if (checkLength(message, 1000)) {

        messageError.innerText = 'The field is too long. Max. 1000 characters.'
        messageError.classList.add("show");
        return false;

    } else {
        messageError.classList.remove("show");
        return true;
    }
};


function checkAllFields() {
    if (validateFullname() && validateEmail() && validatePhone() && validateMessage()) {
        console.log('puede enviar');
        return true;
    } else {
        console.log("aun no se puede enviar");
        return false;
    }
}