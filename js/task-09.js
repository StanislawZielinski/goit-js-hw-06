const button = document.body.querySelector("button");
const body = document.body;
button.addEventListener("click", handleClick);
function handleClick(event) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const color = getRandomHexColor()
  body.style.backgroundColor = color;
  document.body.querySelector("span").textContent = color;
}