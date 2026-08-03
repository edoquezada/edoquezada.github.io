const toggleTema = document.querySelector(".CO");
const icono = toggleTema.querySelector("i");
const favicon = document.querySelector("#favicon");

function actualizarFavicon(esOscuro){
    favicon.href = esOscuro ? "img/favicon/favicon-dark.png" : "img/favicon/favicon-light.png";
}

// al cargar la página, aplica el tema guardado
if(localStorage.getItem("tema") === "dark"){
    document.documentElement.setAttribute("data-theme", "dark");
    icono.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
    actualizarFavicon(true);
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

    actualizarFavicon(!esOscuro);

    localStorage.setItem("tema", esOscuro ? "light" : "dark");
});