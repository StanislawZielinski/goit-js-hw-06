const textInput = document.querySelector("#validation-input");
const checktextInput = () => {
    if (textInput.value.length.toString() === textInput.dataset.length) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    }
    else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }; 
};
textInput.addEventListener("blur", checktextInput);

