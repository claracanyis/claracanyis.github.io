// --- FIX BAR ON TOP WHEN/AFTER SCROLLING
// Add a sticky class to the navigation bar
let stickNavBar = function () {
    if (window.pageYOffset >= currBarPosition) {
        navigationBar.classList.add("bar--sticky");
    } else {
        navigationBar.classList.remove("bar--sticky");
    }
}

// Fix the navigation bar on top after scrolling
let navigationBar = document.getElementById('bar');
let currBarPosition = navigationBar.getBoundingClientRect().top + window.scrollY;
window.onscroll = stickNavBar;

// Fix the navigation bar when header button is clicked
let headerButton = document.getElementById("intro__button");
headerButton.onclick = function(e) {
    navigationBar.classList.add("bar--sticky");
    e.preventDefault();
    let destination =  document.querySelector(this.hash);
    destination.scrollIntoView({ 
        behavior: 'smooth' 
    });
}; 

// --- SCROLL ANIMATION FOR NAVBAR LINKS
// Scroll function
let scrollAnimation = function(e) {
    e.preventDefault();
    let destination = document.querySelector(this.hash);
    destination.scrollIntoView({behavior: 'smooth'});
}

// Add animation to the links
let navigationLinks = document.querySelectorAll('.navigation__link');
navigationLinks.forEach(elem => {
    elem.onclick = scrollAnimation;
})