/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let navbarList = document.getElementById("navbar__list");
let sections = document.querySelectorAll('section');
let fragmentElement = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//function to check the view port of a section
function isViewPort(element) {
    //get element dimentions by using getBoundingClientRect()
    rect = element.getBoundingClientRect();
    //assumming start and end and test them 
    const start = 0;
    const end = 300;
        if (rect.top > start && rect.top < end) {
            return true;
        } else {
            return false;
        }    
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavbar(sections) {
    //loop over sections
    for (const section of sections) {
        //create list item
        let newListItem = document.createElement('li');
        // get data nav to set it as the link title
        let dataNav = section.getAttribute('data-nav');
        //create anchor tage
        let newAnchor = document.createElement('a');
        //add class to the anchor tag for styling
        newAnchor.classList.add('menu__link');
        //set href attribute to anchor tag by using section id
        newAnchor.setAttribute('href', `#${section.id}`);
        //add text content to Anchor tag
        newAnchor.innerHTML = dataNav;
        //append the anchor tag to list item
        newListItem.appendChild(newAnchor);
        //append the list item to fragment element to improve performance
        fragmentElement.appendChild(newListItem);
    }
    //append all list items to the nav list 
    navbarList.appendChild(fragmentElement);
}
//call createNavbar function
createNavbar(sections);

// Add class 'active' to section when near top of viewport
// Set sections and links as active
function activateSection() {
    //loop over sections
    for (const section of sections) {
        //get the link of each section
        const link = document.querySelector(`a[href="#${section.id}"]`);
        // check if section in the view port
        if (isViewPort(section)) {
            // add class to activate section
            section.classList.add('your-active-class');
            // add class active to link
            link.classList.add('active');
        } else {
            //remove active class from a section
            section.classList.remove('your-active-class');
            // remove active class from a link
            link.classList.remove('active');
        }
    }
}  
//add event listener on scroll to make the section active    
document.addEventListener('scroll', activateSection,'smooth');
// call activateSction function 
activateSection();


// Scroll to anchor ID using scrollTO event
// Scroll to section on link click with smooth scroll
function smoothScroll() {
    //Adding event listener to navelist on click
    navbarList.addEventListener('click',(ev) =>{
        // prevent all default events
        ev.preventDefault()
        // get the event target
        const link = ev.target;
        //get id of section from the link by slice the hash(#)
        id = link.getAttribute('href').slice(1);
        // scroll smoothly by setting the behavior smooth
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    });
}
// call smoothScroll function
smoothScroll();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// make a navigation link active on click
function activateLink(){
    //Get all anckor links 
    const navList = document.querySelectorAll("a");
    // loop over links
    for (const item of navList) {
        //Add event listener to link on click
        item.addEventListener('click', () => {
            //Add class active to the link
            item.classList.add('active');
        })
    }
}
// call activateLink function
activateLink();

// responsive navigation
const navButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-list');
navButton.addEventListener('click', () => {
        navMenu.classList.toggle('responsive');
})

document.querySelectorAll('.menu__link').forEach(item => 
    item.addEventListener('click',() =>{
        navMenu.classList.remove('responsive');
}))

