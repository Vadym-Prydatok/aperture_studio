const burgerMenuButton = document.querySelector("#burger-menu-button");
const navigationMenu = document.querySelector("#navigation-menu");
burgerMenuButton.addEventListener("click", ()=>{
    burgerMenuButton.classList.toggle("open");
    navigationMenu.classList.toggle("open");
});
const modalButtons = document.querySelectorAll("#modal-button");
const modalWindow = document.querySelector("#modal-window");
const closeButton = document.querySelector("#close-button");
const submitButton = document.querySelector("#submit-button");
const submitForms = document.querySelectorAll("#submit");
const subscribeButton = document.querySelector("#yes");
submitForms.forEach(function(form) {
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        form.reset();
    });
});
modalButtons.forEach(function(button) {
    button.addEventListener("click", ()=>{
        modalWindow.style.display = "block";
        modalWindow.firstElementChild.firstElementChild.textContent = "You can fill out the form below and one of our team members will getback to you as soon as possible.";
    });
});
closeButton.addEventListener("click", ()=>{
    modalWindow.style.display = "none";
});
submitButton.addEventListener("click", ()=>{
    modalWindow.style.display = "none";
});
subscribeButton.addEventListener("click", ()=>{
    modalWindow.style.display = "block";
    modalWindow.firstElementChild.firstElementChild.textContent = "Enter your email to receive news about us!";
});

//# sourceMappingURL=index.6a31943b.js.map
