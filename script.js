const toggle = document.getElementById("menu-toggle")
const nav = document.getElementById("nav-menu")

toggle.addEventListener("click", () => {
nav.classList.toggle("active")
})

/* SCROLL ANIMATION */

function reveal(){

const reveals = document.querySelectorAll(".reveal")

for(let i=0;i<reveals.length;i++){

const windowHeight = window.innerHeight
const elementTop = reveals[i].getBoundingClientRect().top
const elementVisible = 100

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll", reveal)