const numberInput = document.getElementById("number");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("last-name");
const dateBirthInput = document.getElementById("date");
const emailInput = document.getElementById("email");
const submitInput = document.getElementById("submit")


const numberRegularExpression = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const nameRegularExpression = /^([а-я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/
const lastNameRegularExpression = /^([а-я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/
const dateBirthRegularExpression = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
const emailRegularExpression = /.+@.+\..+/i


const checkNumber = numberInput.onblur = function () {
    let numberValue = numberInput.value
    return numberRegularExpression.test(numberValue)
}

const checkName = nameInput.onblur = function () {
    let nameValue = nameInput.value
    return nameRegularExpression.test(nameValue)

}

const checkLastName = lastNameInput.onblur = function () {
    let lastNameValue = lastNameInput.value
    return lastNameRegularExpression.test(lastNameValue)

}

const checkDateBirth = dateBirthInput.onblur = function () {
    let dateBirthValue = dateBirthInput.value
    return dateBirthRegularExpression.test(dateBirthValue)

}

const checkEmail = emailInput.onblur = function () {
    let emailValue = emailInput.value
    return emailRegularExpression.test(emailValue)

}


function DeleteStateBtnSuccessDanger(InputForm) {
    InputForm.classList.remove("danger")
    InputForm.classList.remove("success")
}

numberInput.onfocus = (() => DeleteStateBtnSuccessDanger(numberInput));
nameInput.onfocus = (() => DeleteStateBtnSuccessDanger(nameInput));
lastNameInput.onfocus = (() => DeleteStateBtnSuccessDanger(lastNameInput));
dateBirthInput.onfocus = (() => DeleteStateBtnSuccessDanger(dateBirthInput));
emailInput.onfocus = (() => DeleteStateBtnSuccessDanger(emailInput));


function addStateBtnSuccessDangerNumber(inputForm, checkForm) {
    if (checkForm) {
        inputForm.classList.add("success")
    } else {
        inputForm.classList.add("danger")
    }
}

numberInput.onblur = (() => addStateBtnSuccessDangerNumber(numberInput, checkNumber()));
nameInput.onblur = (() => addStateBtnSuccessDangerNumber(nameInput, checkName()));
lastNameInput.onblur = (() => addStateBtnSuccessDangerNumber(lastNameInput, checkLastName()));
dateBirthInput.onblur = (() => addStateBtnSuccessDangerNumber(dateBirthInput, checkDateBirth()));
emailInput.onblur = (() => addStateBtnSuccessDangerNumber(emailInput, checkEmail()));

const getIvent = submitInput.onclick = function () {
    if (checkNumber() && checkName() && checkLastName() && checkDateBirth() && checkEmail()) {
        alert("Вы невероятны! Спасибо")
    } else {
        alert("Кажется вы где-то ошиблись:(")
    }
}