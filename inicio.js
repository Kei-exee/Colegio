/* === INTERACTIVIDAD JS === */

/* MENÚ HAMBURGUESA PARA MÓVILES */
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

// Toggle para mostrar u ocultar el menú al hacer clic
toggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

/* FUNCIÓN PARA ANIMAR LOS CONTADORES */
function animateCounter(id, target, duration) {
  const el = document.getElementById(id);  // Elemento del contador
  let count = 0;
  const step = Math.ceil(target / (duration / 10)); // Cuánto aumentar cada 10ms

  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(interval); // Detiene el intervalo
    }
    // Si es el primer contador, se agrega un símbolo de porcentaje
    el.textContent = count + (id === 'counter1' ? '%' : '');
  }, 20); // Intervalo de 20ms
}

/* EVENTO QUE INICIA AL CARGAR LA PÁGINA */
window.addEventListener("load", () => {
    animateCounter('counter1', 100, 1000); //100% en 1 segundo
    animateCounter('counter2', 25, 1000); // 25 alumnos
    animateCounter('counter3', 7, 1000); // 7 años
    
    AOS.init({
        once: false,      // importante: permite que se repitan al hacer scroll
        duration: 1000,   // puedes ajustar la duración si lo deseas
        offset: 120       // opcional: ajusta a qué distancia se activa
      });
      
  });



// Mapa personalizado Leaflet

// Coordenadas del lugar personalizado (latitu, longitud)
const coordenadas = [14.60545753690472, -90.49259620516264]; 

// Inicializa el mapa dentro del contenedor HTML con id="mapid"
// y lo centra en las coordenadas especificadas con un de zoom 15
const map = L.map('mapid').setView(coordenadas, 16); 

// Carga y muestra el mapa base desde OpenStreetMap
// Esto muestra los tiles (cuadrículas de mapa) y da créditos a OSM
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors' // Créditos obligatorios
}).addTo(map); // Añade esta capa al mapa ya inicializado

// Crea un marcador en las mismas coordenadas
// y lo añade al mapa
L.marker(coordenadas).addTo(map) //poup es el texto que sale al hacer clic o ya automaticamente
  .bindPopup('Colegio del Futuro') 
  .openPopup(); // Hace que el popup aparezca de inmediato , de forma automatica pe

  AOS.init();



  


  
  