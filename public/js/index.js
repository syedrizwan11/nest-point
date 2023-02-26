// change navebar
window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle('nav-scroll', window.scrollY > 0);
})


const menu = document.querySelector(".nav__menu");
const openbtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

openbtn.addEventListener('click', ()=>{
    menu.style.display = "flex";
    closebtn.style.display = 'inline-block';
    openbtn.style.display = 'none';
    
})

closebtn.addEventListener('click', ()=>{
    menu.style.display = "none";
    closebtn.style.display = 'none';
    openbtn.style.display = 'inline-block';

})