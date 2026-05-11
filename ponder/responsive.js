
let navegation = document.querySelector("nav");
let menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    navegation.classList.toggle("hide");
    menuButton.classList.toggle("change");
}