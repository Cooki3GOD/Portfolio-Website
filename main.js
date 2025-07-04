// SCRIPT FOR NAV

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");

hamburger.addEventListener("click", () => {
    if(!navLinks.classList.contains("show")) {
        navLinks.classList.add("show");
    } else {
        navLinks.classList.remove("show");
    }
}) 