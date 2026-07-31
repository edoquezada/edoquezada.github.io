const nav = document.querySelector ("#nav");
const close = document.querySelector ("#close-menu");
const open = document.querySelector ("#open-menu");

open.addEventListener("click", () => {
    nav.classList.add("show-menu");
})

close.addEventListener("click", () => {
    nav.classList.remove("show-menu");
})