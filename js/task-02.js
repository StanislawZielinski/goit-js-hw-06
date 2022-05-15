const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.body.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i++) {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = ingredients[i];
  ingredientsUl.append(ingredient);
}

