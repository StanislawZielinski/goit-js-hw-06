let counterValue = 0;
const value = document.body.querySelector("#value");
const decrement = document.querySelector('#counter button[data-action="decrement"]');
const increment = document.querySelector('#counter button[data-action="increment"]');

const decrementFunction = () => {
    counterValue--;
    value.textContent = counterValue;
    };
const incrementFunction = () => {
    counterValue++;
    value.textContent = counterValue;
};
decrement.addEventListener("click", decrementFunction);
increment.addEventListener("click", incrementFunction);