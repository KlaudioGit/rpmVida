// Cambiar color de fondo al hacer clic en el botón
document.getElementById('miBoton').addEventListener('click', function() {
    document.body.style.backgroundColor = '#e0ffe0'; // Cambia el color de fondo
    alert('¡Bienvenido! Hemos cambiado el color de fondo.'); // Muestra una alerta
});

// Scroll suave para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Desplazamiento suave al destino
        });
    });
});

// Detectar cuando los elementos de servicio entran en la vista
const serviceItems = document.querySelectorAll('.service-item');

// Usamos IntersectionObserver para detectar la visibilidad
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Si el elemento es visible
            entry.target.classList.add('visible'); // Agrega la clase 'visible' para animar
        }
    });
}, { threshold: 0.1 }); // El umbral determina cuándo se activa el observador

serviceItems.forEach(item => {
    observer.observe(item); // Observa cada item de servicio
});

// Carrusel de imágenes
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');

// Función para mostrar la siguiente imagen
function showNextImage() {
    images[currentImageIndex].classList.remove('active'); // Oculta la imagen actual
    currentImageIndex = (currentImageIndex + 1) % images.length; // Cambia a la siguiente imagen
    images[currentImageIndex].classList.add('active'); // Muestra la nueva imagen
}

// Cambia la imagen cada 3 segundos
setInterval(showNextImage, 3000);
