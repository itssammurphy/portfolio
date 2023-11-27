const menuLinks = document.querySelector(".menu-links");
const hamburger = document.querySelector(".hamburger-icon");

const toggleMenu = () => {
    menuLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
}