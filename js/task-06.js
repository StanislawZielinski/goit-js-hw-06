const textInput = document.querySelector("#validation-input");
const checktextInput = () => {
    if (textInput.value.length >= textInput.dataset.length) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    }
    if (textInput.value.length < textInput.dataset.length) {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
    // textInput.value.length >= textInput.dataset.length ? textInput.classList.add("valid") :
    //     textInput.classList.add("invalid");
};
textInput.addEventListener("blur", checktextInput);
