/* === INTERACTIVIDAD JS === */

/* MENÚ HAMBURGUESA PARA MÓVILES */
const toggle = document.getElementById("menu-toggle"); // Referencia al botón del menú hamburguesa
const menu = document.getElementById("nav-menu"); // Referencia al menú de navegación

// Toggle para mostrar u ocultar el menú al hacer clic
toggle.addEventListener("click", () => {
  menu.classList.toggle("hidden"); // Alterna la clase 'hidden' para mostrar/ocultar
});

async function generarPDF(nivel) {
  const { jsPDF } = window.jspdf; // Extrae la clase jsPDF del objeto global
  const doc = new jsPDF(); // Crea una nueva instancia de documento PDF

  // Datos para cada nivel educativo o carrera técnica
  const planes = {
    primaria: [
      ["1.º Primaria", ["Idioma Materno", "Segundo Idioma", "Matemáticas", "Medio Social y Natural", "Expresión artística", "Educación física", "Formación ciudadana", "Ortografía y Lectura", "Computación"]],
      ["2.º Primaria", ["Idioma Materno", "Segundo Idioma", "Matemáticas", "Medio Social y Natural", "Expresión artística", "Educación física", "Formación ciudadana", "Caligrafía", "Computación"]],
      ["3.º Primaria", ["Idioma Materno", "Segundo Idioma", "Matemáticas", "Medio Social y Natural", "Expresión artística", "Educación física", "Formación ciudadana", "Ortografía y Lectura", "Computación"]],
      ["4.º Primaria", ["Idioma Materno", "Segundo Idioma", "Matemáticas", "Medio Social y Natural", "Expresión artística", "Educación física", "Formación ciudadana", "Caligrafía", "Computación"]],
      ["5.º Primaria", ["Idioma Materno", "Segundo Idioma", "Matemáticas", "Ciencias Social", "Ciencias Naturales", "Educación física", "Formación ciudadana", "Tecnología", "Computación"]],
      ["6.º Primaria", ["Idioma Materno", "Segundo Idioma", "Matemáticas", "Medio Social y Natural", "Expresión artística", "Educación física", "Formación ciudadana", "Tecnología", "Computación"]],
    ],
    basico: [
      ["1.º Básico", ["Idioma Materno", "Segundo Idioma", "Matemáticas", "Ciencias Sociales", "Ciencias Naturales", "Tecnología", "Educación física", "Arte", "Formación ciudadana"]],
      ["2.º Básico", ["Idioma Materno", "Segundo Idioma", "Matemáticas", "Ciencias Sociales", "Ciencias Naturales", "Tecnología", "Educación física", "Arte", "Formación ciudadana"]],
      ["3.º Básico", ["Idioma Materno", "Segundo Idioma", "Matemáticas", "Ciencias Sociales", "Ciencias Naturales", "Tecnología", "Educación física", "Arte", "Formación ciudadana"]],
    ],
    diseño: [
      ["1.º Año", ["Fundamentos del Diseño", "Dibujo Técnico y Artístico", "Teoría del Color", "Historia del Arte y el Diseño", "Tipografía I", "Fotografía Básica", "Taller de Creatividad", "Informática Aplicada al Diseño", "Diseño Editorial"]],
      ["2.º Año", ["Diseño de Identidad Corporativa", "Tipografía II", "Diseño Digital y Web I", "Semiótica Visual", "Diseño de Empaques", "Historia del Diseño", "Ilustración Digital", "Diseño Publicitario", "Diseño de Interfaz (UI)"]],
    ],
    contador: [
      ["1.º Año", ["Contabilidad I", "Matemática Financiera", "Comunicación y Lenguaje", "Inglés Técnico I", "Formación Ciudadana", "Tecnología I", "Estadística Básica", "Educación Física"]],
      ["2.º Año", ["Contabilidad II", "Administración General", "Legislación Laboral", "Redacción Comercial", "Práctica Contable I", "Estadística Aplicada", "Tecnología II", "Educación Física"]],
    ],
    electronica: [
      ["1.º Año", ["Fundamentos de Electrónica", "Matemática Aplicada I", "Física I", "Dibujo Técnico", "Computación I", "Tecnología Industrial", "Inglés Técnico I", "Seminario de Orientacion Vocacional"]],
      ["2.º Año", ["Electrónica Analógica", "Electrónica Digital", "Automatización Básica", "Sistemas de Control", "Taller de Electrónica", "Inglés Técnico II", "Computación II"]],
    ],
    desarrolloWeb: [
      ["1.º Año", ["HTML5 y CSS3", "Fundamentos de JavaScript", "Diseño Web Responsivo", "Control de Versiones (Git)", "UX/UI Básico", "Inglés Técnico I"]],
      ["2.º Año", ["React o Vue.js", "Backend con Node.js", "Bases de Datos", "APIs REST", "Proyecto Full Stack", "DevOps Básico", "Inglés Técnico II"]],
    ],
    adm: [
      ["1.º Año", ["Contabilidad I", "Administración I", "Matemática Comercial", "Comunicación y Lenguaje", "Legislación Mercantil", "Computación I",  "Formación Ciudadana", "Técnicas de Archivo", "Inglés Técnico I"]],
      ["2.º Año", ["Contabilidad II", "Administración II", "Estadística Aplicada", "Redacción Comercial", "Legislación Laboral",  "Mercadotecnia I", "Inglés Técnico II", "Computación II", "Técnicas de Oficina"]],
    ],
  };

  const ids = {
    primaria: "id1",
    basico: "id2",
    diseno: "id3",
    contador: "id4",
    electronica: "id5",
    desarrolloWeb: "id6",
    adm: "id7",
  };

  const grados = planes[nivel] || []; // Se obtienen los grados según el nivel
  const id = ids[nivel] || "idX"; // Se obtiene el ID del nivel
  const capitalizado = nivel.charAt(0).toUpperCase() + nivel.slice(1); // Capitaliza la primera letra

  if (grados.length === 0) {
    alert("Nivel no válido o sin datos."); // Muestra error si el nivel no es válido
    return;
  }

  const tableBody = grados.map(([grado, materias]) => [grado, materias.join(", ")]); // Prepara los datos para la tabla

  doc.text(`Malla Curricular de ${capitalizado}`, 14, 15); // Título del PDF
  doc.autoTable({
    startY: 20,
    head: [["Grado", "Materias"]],
    body: tableBody,
    styles: { cellPadding: 2, fontSize: 10 },
    headStyles: { fillColor: [0, 67, 241] },
  });

  doc.save(`malla_curricular_${nivel}_${id}.pdf`); // Guarda el PDF con un nombre dinámico
}

// Obtenemos las referencias a los contenedores internos de las filas 1 y 2
const r1 = document.getElementById('scrollRow1Inner'),
      r2 = document.getElementById('scrollRow2Inner');

// Variable acumuladora del desplazamiento horizontal
let x = 0;

// Guardamos la posición actual del scroll vertical para comparar más adelante
let y = window.scrollY;

// Variable para controlar el temporizador que detecta cuándo se deja de hacer scroll
let t;

// Escuchamos el evento 'scroll' (cuando el usuario hace scroll en la página)
addEventListener('scroll', () => {
  // Calculamos el cambio en el scroll vertical desde la última vez
  const dy = scrollY - y;

  // Actualizamos la última posición conocida del scroll
  y = scrollY;

  // Acumulamos el desplazamiento horizontal según el cambio vertical (con factor de velocidad)
  x += dy * 0.4;

  // Aplicamos el desplazamiento horizontal a la fila 1 (derecha)
  // El % permite que la animación se reinicie en bucle al llegar al final del contenido duplicado
  r1.style.transform = `translateX(${x % (r1.scrollWidth / 2)}px)`;

  // Aplicamos el desplazamiento inverso a la fila 2 (izquierda)
  r2.style.transform = `translateX(-${x % (r2.scrollWidth / 2)}px)`;

  // Reiniciamos el temporizador por si el usuario sigue haciendo scroll
  clearTimeout(t);

  // Esperamos 100ms sin scroll para considerar que se ha detenido (no se ejecuta nada dentro)
  t = setTimeout(() => {}, 100); // pausa al dejar de hacer scroll
}, { passive: true }); // Mejora de rendimiento para scroll táctil (móviles)
