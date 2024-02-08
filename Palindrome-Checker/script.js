const checkButton = document.getElementById("check-btn");
const formInput = document.getElementById("form-input");
const result = document.getElementById("result");

const checkForButton = formInput => {
    const currentInput = formInput.value;

    if (currentInput===""){
        alert("Please input a value");
    }
}
