const body = document.body;
const item = body.querySelectorAll(".item");
const numberOfCategories = () => {
    console.log(`Number of categories: ${item.length}`);
}; 
numberOfCategories();

for (let i = 0; i < item.length; i++) {
    const title = item[i].firstElementChild.textContent;
    const numberOfElementsInCategory = item[i].getElementsByTagName("li").length;
    console.log(`Category: ${title} Elements: ${numberOfElementsInCategory}`);
}
