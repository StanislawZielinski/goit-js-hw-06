const mainBox = document.getElementById("boxes");

const create = document.querySelector("button[data-create]")
const destroy = document.querySelector("button[data-destroy]")
const numberInput = document.querySelector("input[type]");

create.addEventListener("click", handleSubmit);
function handleSubmit(event) {
  function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");

      box.style.width = `${i*10+30}px` ;
      box.style.height = `${i*10+30}px`;

      function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      };
      let color = getRandomHexColor();
      box.style.backgroundColor = color;

      mainBox.append(box);
    }

  };
  createBoxes(numberInput.value);
};

destroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  mainBox.innerHTML = "";
};