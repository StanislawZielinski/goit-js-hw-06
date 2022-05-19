const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value !== "") {
        textOutput.textContent = event.currentTarget.value;       
    };
    if (event.currentTarget.value == "") {
        textOutput.textContent = "Anonymous";       
    }
});

