// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu); // When user presses menu button

function toggleMenu(){
    // If it's not open, open it
    if(!showMenu){ 
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuBranding.classList.add('show')
        menuNav.classList.add('show')
        navItems.forEach(item => item.classList.add("show"))
        showMenu = true; // Set menu state (now it's open)
    // else, close it
    } else {
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuBranding.classList.remove('show')
        menuNav.classList.remove('show')
        navItems.forEach(item => item.classList.remove("show"))
        showMenu = false; // Set menu state (now it's closed)
    }
}