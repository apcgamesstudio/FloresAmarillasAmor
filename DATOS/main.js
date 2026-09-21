onload = () =>{
        document.body.classList.remove("container");
};

const texto = "Para ti, con todo mi amor ❤️. Feliz 21 de septiembre, amor. En este día quiero recordarte lo mucho que me importas y lo mucho que te quiero. Eres muy importante para mí y quiero seguir compartiendo muchos más momentos a tu lado. Te quiero ❤️";
const elemento = document.getElementById("texto-maquina");

let i = 0;

function escribir() {
    if (i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 100);
    }
}

setTimeout(escribir, 1000);

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("boton-musica");

// Intentar iniciar automáticamente
window.addEventListener("load", () => {
    musica.play().then(() => {
        botonMusica.textContent = "⏸";
    }).catch(() => {
        // El navegador bloqueó el autoplay
        botonMusica.textContent = "▶";
    });
});

// Botón reproducir / pausar
botonMusica.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        botonMusica.textContent = "⏸";
    } else {
        musica.pause();
        botonMusica.textContent = "▶";
    }
});

// Mantener el icono sincronizado
musica.addEventListener("play", () => {
    botonMusica.textContent = "⏸";
});

musica.addEventListener("pause", () => {
    botonMusica.textContent = "▶";
});