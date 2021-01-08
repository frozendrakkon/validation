const numberInput = document.getElementById("number");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("last-name");
const dateBirthInput = document.getElementById("date");
const emailInput = document.getElementById("email");


const numberRegularExpression = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
// регулярное выражение для проверки валидности телефона

const checkNumber = numberInput.onblur = function () {
    let numberValue = numberInput.value // work
    return numberRegularExpression.test(numberValue)
    
}

const removeStateBtnSuccessDanger = numberInput.onfocus = function () {
    numberInput.classList.remove("success")
    numberInput.classList.remove("danger")
}

const addStateBtnSuccessDanger = numberInput.onblur = function() {
    if (checkNumber()) {
        numberInput.classList.add("success")
    } else {
        numberInput.classList.add("danger")
    }
}