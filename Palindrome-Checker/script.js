const checkButton = document.getElementById("check-btn");
const formInput = document.getElementById("form-input");
const result = document.getElementById("result");

checkButton.addEventListener("click", () =>{
    if (formInput.value === "") {
        alert("Please input a value");
    }
})
