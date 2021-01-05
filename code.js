const numberInput = document.getElementById("number")
const nameInput = document.getElementById("name")
const lastNameInput = document.getElementById("last-name")
const dateInput = document.getElementById("date")
const Input = document.getElementById("number")

const checkBtn = document.getElementById("check")

function deleteRENAME(someInput) {
    someInput.onclick = function() {
        someInput.innerHTML = "ss"
    }
}
deleteRENAME(numberInput)