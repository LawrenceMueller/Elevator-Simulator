const button = document.querySelector(".btn");
const title = document.querySelector(".title");
const header = document.querySelector("header");
const instructions = document.getElementById("instructions");
const mainContent = document.querySelector(".main-content");

button.addEventListener("click", function(){
    button.classList.toggle("active-btn");
    if (button.innerHTML === "+"){
        button.innerHTML = "-";
    }else {
        button.innerHTML = "+";
    }
    title.classList.toggle("active-title");
    header.classList.toggle("active-header");
    instructions.classList.toggle("instructions-active");
    mainContent.classList.toggle("main-content-active");
});