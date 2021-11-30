function navMenu() {
    // declare all variables
    var menu = document.getElementById("menu"); // use the DOM to access the navigation menu
    var hamburger = document.getElementById("menu-toggle"); // use the DOM to access the hamburger button
    if (menu.style.display !== 'block') { // if the menu is hidden, then display it
        menu.style.display = 'block';
        hamburger.classList.remove('fa-bars'); // remove the 'hamburger' icon
        hamburger.classList.add('fa-times'); // add the 'close' symbol
    } else {
        menu.style.display = 'none'; // if the menu is open, hide it again
        hamburger.classList.remove('fa-times'); // remove the 'close' symbol
        hamburger.classList.add('fa-bars'); // replace it with the hamburger icon again
    }
}