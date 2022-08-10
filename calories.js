"use strict"
let hamburgerMenu;
let nav;
let logo;

document.addEventListener("DOMContentLoaded", () => {
    hamburgerMenu = document.getElementById("hamburgerMenu");
    nav = document.querySelector("nav");
    logo = document.getElementById("logo");
    hamburgerMenu.addEventListener("click", () => {
        if(nav.className.length === 0) {
            nav.className += "responsive"
        } else {
            nav.className = "";
        }
    })

})


