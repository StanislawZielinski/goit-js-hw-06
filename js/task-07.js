const fontSizeControl = document.getElementById("font-size-control");
const text = document.body.querySelector("#text");
const fontChange = () => {
    text.style.fontSize = `${fontSizeControl.value}px`;
};
fontSizeControl.addEventListener("input",fontChange)