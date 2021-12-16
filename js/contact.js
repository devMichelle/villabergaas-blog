const form = document.querySelector("#contactForm");
const formSucsess = document.querySelector(".successfull");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm() {
    event.preventDefault();

    if (checkLength(name.value, 5) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    };

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    };

    if (checkLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    };

    if (checkLength(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    };

    if ((checkLength(name.value, 5) === true) &&
        (validateEmail(email.value) === true) &&
        (checkLength(subject.value, 15) === true) &&
        (checkLength(message.value, 25) === true)) {
            formSucsess.style.display = "block";
        } else {
            formSucsess.style.display = "none";
        };
}

form.addEventListener("submit", validateForm);



function checkLength(value, requiredLength) {
    if (value.trim().length > requiredLength) {
        return true;
    } else {
        return false;
    };
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}