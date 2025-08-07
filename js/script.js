/* Contenido de js/script.js */
document.addEventListener('DOMContentLoaded', function() {
  // Toggle dark mode
  const toggleBtn = document.getElementById('toggle-mode');
  const darkModeStylesheet = document.getElementById('dark-mode');
  
  // Verificar preferencia del sistema
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const localStorageMode = localStorage.getItem('darkMode');
  
  // Aplicar modo inicial
  if (localStorageMode === 'enabled' || (localStorageMode === null && prefersDark)) {
    enableDarkMode();
  }
  
  toggleBtn.addEventListener('click', function() {
    if (darkModeStylesheet.disabled) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
  
  function enableDarkMode() {
    darkModeStylesheet.href = '../style/dark-mode.css'; // Corregida la ruta
    darkModeStylesheet.disabled = false;
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    localStorage.setItem('darkMode', 'enabled');
  }
  
  function disableDarkMode() {
    darkModeStylesheet.href = '';
    darkModeStylesheet.disabled = true;
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
    localStorage.setItem('darkMode', 'disabled');
  }
  
  // Animaciones al desplazarse
  const animateOnScroll = function() {
    const items = document.querySelectorAll('.item, .skill');
    
    items.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (itemPosition < screenPosition) {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Configurar elementos para animación
  document.querySelectorAll('.item, .skill').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Ejecutar al cargar
});
