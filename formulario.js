document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('inscripcionForm');

  // Mostrar el mensaje de "procesando"
  const showProcessingMessage = () => {
    const processingDiv = document.createElement('div');
    processingDiv.id = 'procesando-msg';
    processingDiv.className = 'text-center text-blue-600 text-xl font-semibold mt-6';
    processingDiv.textContent = 'PROCESANDO, ESPERE POR FAVOR...';
    form.parentElement.appendChild(processingDiv);
  };

  // Formatear DPI
  const dpiInput = document.getElementById('dpi');
  if (dpiInput) {
    dpiInput.addEventListener('input', () => {
      let nums = dpiInput.value.replace(/\D/g, '').slice(0, 13);
      const p1 = nums.slice(0, 4);
      const p2 = nums.slice(4, 9);
      const p3 = nums.slice(9, 13);
      dpiInput.value = [p1, p2, p3].filter(Boolean).join(' ');
    });
  }

  // Formatear teléfono
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      let val = phoneInput.value.replace(/\D/g, '').slice(0, 8);
      phoneInput.value = val.replace(/(\d{4})(\d{0,4})/, '$1 $2').trim();
    });
  }

  // Enviar formulario
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    form.classList.add('was-validated');

    // Mostrar mensaje de procesamiento
    showProcessingMessage();

    // Simular proceso y luego redirigir
    setTimeout(() => {
      // Si quieres pasar los datos a tarjeta.html, guárdalos en localStorage
      const formData = new FormData(form);
      for (let [key, value] of formData.entries()) {
        localStorage.setItem(key, value);
      }

      window.location.href = 'tarjeta.html';
    }, 2000); // espera 2 segundos
  });
});
