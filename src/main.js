import "./style.css";

// Header animation 
const stickyEffect = document.querySelector('.site-header');

stickyEffect.classList.add('sticky-effect');

const scrollEffect = () => {
    if (window.scrollY > 300) {
        stickyEffect.classList.add('sticky-effect');

      } 
      
      else {
        stickyEffect.classList.remove('sticky-effect');
      }
}
setInterval(scrollEffect);


// Mobile menu
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeSidebar");
const menuLinks = document.querySelectorAll(".menu-link");

// Open / Close toggle by menu icon
menuIcon.addEventListener("click", () => {
    const isOpen = !sidebar.classList.contains("-translate-x-full");

    if (isOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

// Open sidebar
function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    menuIcon.classList.add("active");
}

// Close sidebar
function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    menuIcon.classList.remove("active");
}

// Close sidebar by close button
closeBtn.addEventListener("click", closeSidebar);

// Close sidebar when menu link clicked
menuLinks.forEach(link => {
    link.addEventListener("click", closeSidebar);
});
