// let menuIcon = document.getElementById('menu-icon');
// let navLinks = document.getElementById('navlinks');

// function showMenu() {
//     navLinks.style.top = "70px";
// }

// menuIcon.addEventListener("click", showMenu);



// let menuIcon = document.getElementById('menu-icon');
// let navLinks = document.getElementById('navlinks');
// let menuVisible = false; // Flag to keep track of menu visibility

// function toggleMenu() {
//     if (!menuVisible) {
//         navLinks.style.top = "50px"; // Show the menu
//         navLinks.style.background = "white";
//         navLinks.style.height = "400px";
//         navLinks.style.display = "flex";
//     } else {
//         navLinks.style.top = "-500px"; // Hide the menu
//     }
//     menuVisible = !menuVisible; // Toggle the flag
// }

// menuIcon.addEventListener("click", toggleMenu);

// function to toggle nav links
let navLinks = document.getElementById('navlinks')

function toggleNavLinks() {
    navLinks.classList.toggle("active");
  }
