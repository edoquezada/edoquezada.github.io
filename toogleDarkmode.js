const toggleTema = document.querySelector(".CO");
const icono = toggleTema.querySelector("i");

// al cargar la página, aplica el tema guardado
if(localStorage.getItem("tema") === "dark"){
    document.documentElement.setAttribute("data-theme", "dark");
    icono.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
}

toggleTema.addEventListener("click", () => {
    const esOscuro = document.documentElement.getAttribute("data-theme") === "dark";

    if(esOscuro){
        document.documentElement.removeAttribute("data-theme");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }

    icono.classList.toggle("bi-moon-stars-fill", esOscuro);
    icono.classList.toggle("bi-sun-fill", !esOscuro);

    localStorage.setItem("tema", esOscuro ? "light" : "dark");
});