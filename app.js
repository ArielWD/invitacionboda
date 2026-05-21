// Configura la fecha de la boda
const weddingDate = new Date("Oct 10, 2026 12:00:00").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Cálculos de tiempo para días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Inyectar los valores en el HTML (Formatéalo con un cero a la izquierda si es < 10)
  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

  // Si la cuenta regresiva termina
  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".countdown-container").style.display = "none";
    document.getElementById("wedding-message").classList.remove("hidden");
  }
}, 1000);


document.addEventListener("DOMContentLoaded", function () {
  
  // Creamos el observador
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // ¿El elemento ya es visible en la pantalla?
      if (entry.isIntersecting) {
        entry.target.classList.add("active"); // Añadimos la clase para activar la animación
        observer.unobserve(entry.target); // Dejamos de observarlo para que la animación solo ocurra una vez
      }
    });
  }, {
    threshold: 0.15 // El texto aparecerá cuando el 15% del elemento ya sea visible
  });

  // Buscamos todos los elementos que tengan la clase 'reveal' y los ponemos a vigilar
  const hiddenElements = document.querySelectorAll(".reveal");
  hiddenElements.forEach((el) => observer.observe(el));
  
});

window.addEventListener("load", function() {
    const splash = document.getElementById("splash-screen");

    setTimeout(() => {
        splash.classList.add("hidden");
        
        // Opcional: elimina el elemento del DOM después de la transición
        setTimeout(() => {
            splash.style.display = "none";
        }, 800); // Este tiempo debe coincidir con la transición CSS (0.8s)
    }, 1500);
}); 


document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal-confirmacion");
  const btnAbrir = document.getElementById("btn-confirmar");
  const btnCerrar = document.querySelector(".close-modal");
  const formulario = document.getElementById("form-asistencia");

  // Abrir y cerrar modal
  if(btnAbrir) btnAbrir.addEventListener("click", () => modal.style.display = "block");
  if(btnCerrar) btnCerrar.addEventListener("click", () => modal.style.display = "none");
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal-confirmacion");
  const btnAbrir = document.getElementById("btn-confirmar");
  const btnCerrar = document.querySelector(".close-modal");
  const formulario = document.getElementById("form-asistencia");

  // Control del Modal (Abrir/Cerrar)
  if(btnAbrir) btnAbrir.addEventListener("click", () => {
    document.body.style.overflow = "hidden"; // Evita que el fondo se desplace cuando el modal está abierto
    modal.style.display = "block";
  });
  
  if(btnCerrar) btnCerrar.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => {
     document.body.style.overflow = "auto"; // Permite el desplazamiento nuevamente cuando el modal se cierra
    if (e.target === modal) modal.style.display = "none";
  });
});

let slideIndex = 1;
showSlides(slideIndex);

// Controles de Siguiente / Anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Control de los puntos inferiores
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("galeria");
  let dots = document.getElementsByClassName("dot");
  
  // Si supera el número de fotos, vuelve a la primera
  if (n > slides.length) { slideIndex = 1 }    
  
  // Si retrocede de la primera, va a la última
  if (n < 1) { slideIndex = slides.length }
  
  // Oculta todas las imágenes
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Quita la clase 'active' de todos los puntos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-galeria", "");
  }
  
  // Muestra la imagen actual y activa su punto correspondiente
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-galeria";
}