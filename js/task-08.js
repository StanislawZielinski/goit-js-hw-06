const form = document.body.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
let takeData;
function handleSubmit(event) {
    event.preventDefault();  
    const {
    elements: { email, password }
  } = event.currentTarget;
    if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    };
    takeData = {
        email: email.value, 
        password: password.value,
    };
    console.log(takeData);
    event.currentTarget.reset();
};
