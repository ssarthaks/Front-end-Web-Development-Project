const menuIcon = document.getElementById("menu-icon");
const navElements = document.getElementById("navelements");
const dropdownMenu = document.getElementById("dropdown-menu");

let isDropdownOpen = false;

document.addEventListener("click", (event) => {
  if (event.target === menuIcon || menuIcon.contains(event.target)) {
    // Click on menu icon
    isDropdownOpen = !isDropdownOpen;
    if (isDropdownOpen) {
      navElements.classList.add("show-menu");
      dropdownMenu.classList.add("show-menu");
    } else {
      navElements.classList.remove("show-menu");
      dropdownMenu.classList.remove("show-menu");
    }
  } else if (isDropdownOpen) {
    // Click outside menu icon and navigation elements when dropdown is open
    event.stopPropagation(); // Prevent the click from propagating to the document
  }
});

// Add a click event to the body to close the dropdown only when it's open
document.body.addEventListener("click", (event) => {
  if (isDropdownOpen && !navElements.contains(event.target)) {
    navElements.classList.remove("show-menu");
    dropdownMenu.classList.remove("show-menu");
    isDropdownOpen = false;
  }
});





// Function to toggle the navigation links when the menu icon is clicked
function toggleNav() {
  var navLinks = document.getElementById("nav1");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}

// Function to close the navigation links when a link is clicked (for small devices)
function closeNav() {
  var navLinks = document.getElementById("nav1");
  navLinks.style.display = "none";
}

// Attach event listener to the menu icon
var menuIcons = document.getElementById("menu-icon");
menuIcons.addEventListener("click", toggleNav);

// Attach event listener to each link in the navigation for small devices
var navLinks = document.querySelectorAll("#nav1 a");
navLinks.forEach(function (link) {
  link.addEventListener("click", closeNav);
});


