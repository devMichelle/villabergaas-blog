
/* ----------------------------------
        Show / Hide Hamburgermenu
   ----------------------------------*/

const menu = document.querySelector(".menu");
const menuList = document.querySelectorAll(".menuList");
const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");
const closeMenu = document.querySelector(".closeMenu");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        menuIcon.style.display = "block";
        closeMenu.style.display = "none";
    } else {
        menu.classList.add("showMenu");
        menuIcon.style.display = "none";
        closeMenu.style.display = "block";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuList.forEach(
    function(menuList) {
        menuList.addEventListener("click", toggleMenu);
    }
)