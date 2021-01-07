const numberInput = document.getElementById("number")
const nameInput = document.getElementById("name")
const lastNameInput = document.getElementById("last-name")
const dateBirthInput = document.getElementById("date")
const emailInput = document.getElementById("email")

const numberRegularExpression = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

numberInput.onblur = function() {
    const valid = numberRegularExpression.test(numberInput.value)
    if(valid) {
        console.log("ye")
        numberInput.classList.add("success")
    } else {
        numberInput.classList.add("danger")
        console.log("ey")
    }
} //! Делает что-то после потери фокусировки



// function validationHandler() {
//     document.forms.dataUser.onsubmit = function () {
        
//         const numberVal = numberInput.value;
//         const nameVal = nameInput.value;
//         const lastNameVal = lastNameInput.value;
//         const dataBirthVal = dateBirthInput.value;
//         const emailVal = emailInput.value;

//         function checkNumber() {}
//         function checkName() {}
//         function checkLastName() {}
//         function checkDateBirth() {}
//         function checkEmail() {}
//     }
// }
//     validationHandler()