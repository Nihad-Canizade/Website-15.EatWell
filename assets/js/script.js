// Menu icon
function myIcon(x) {
    x.classList.toggle("change");
}

// Menu icon click open
let menuIcon = document.querySelector('.menu-icon');
let resNav = document.querySelector('.res-nav');

menuIcon.addEventListener('click', () => {
    if (resNav.style.display === "none") {
        resNav.style.display = "block";
    } else {
        resNav.style.display = "none";
    }
});


// Scroll Navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        navbar.style.position = "fixed";
        navbar.style.backgroundColor = "black";
        navbar.style.transition = ".3s";
    } else {
        navbar.style.position = "";
        navbar.style.backgroundColor = "";
    }
}