const overlayContacto = document.querySelector('#contacto-overlay');
const openContacto = document.querySelector('#open-contacto');
const closeContacto = document.querySelector('#close-contacto');

openContacto.addEventListener('click', (e) => {
    e.preventDefault();
    overlayContacto.classList.add('show-contacto');

    // cierra el menú móvil si estaba abierto
    document.querySelector('#nav').classList.remove('show-menu');
});

closeContacto.addEventListener('click', () => {
    overlayContacto.classList.remove('show-contacto');
});

overlayContacto.addEventListener('click', (e) => {
    if(e.target === overlayContacto){
        overlayContacto.classList.remove('show-contacto');
    }
});

document.querySelector('#form-contacto').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const status = document.querySelector('#form-status');
    const datos = new FormData(form);

    status.textContent = "Enviando...";

    try{
        const respuesta = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: datos
        });

        const resultado = await respuesta.json();

        if(resultado.success){
            status.textContent = "¡Mensaje enviado correctamente!";
            form.reset();
        } else {
            status.textContent = "Hubo un error, inténtalo de nuevo.";
        }
    } catch(error){
        status.textContent = "Hubo un error, inténtalo de nuevo.";
    }
});