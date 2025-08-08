/* Contenido de js/script.js */
document.addEventListener('DOMContentLoaded', function () {
  // Toggle dark mode
  const toggleBtn = document.getElementById('toggle-mode');
  const darkModeStylesheet = document.getElementById('dark-mode');

  // Verificar preferencia del sistema
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const localStorageMode = localStorage.getItem('darkMode');

  // Dropdown de idioma (click)
  const langToggle = document.getElementById('lang-toggle');
  const langMenu = document.getElementById('lang-menu');
  const langDropdown = document.querySelector('.language-dropdown');

  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
    langMenu.classList.toggle('show');
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', () => {
    langDropdown.classList.remove('active');
    langMenu.classList.remove('show');
  });

  // Aplicar modo inicial
  if (localStorageMode === 'enabled' || (localStorageMode === null && prefersDark)) {
    enableDarkMode();
  }

  toggleBtn.addEventListener('click', function () {
    if (darkModeStylesheet.disabled) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });

  function enableDarkMode() {
    darkModeStylesheet.href = '../style/dark-mode.css';
    darkModeStylesheet.disabled = false;
    document.getElementById('toggle-mode').checked = true;
    document.querySelector('.toggle-label').textContent = 'Light';
    localStorage.setItem('darkMode', 'enabled');
  }

  function disableDarkMode() {
    darkModeStylesheet.href = '';
    darkModeStylesheet.disabled = true;
    document.getElementById('toggle-mode').checked = false;
    document.querySelector('.toggle-label').textContent = 'Dark';
    localStorage.setItem('darkMode', 'disabled');
  }

  // Animaciones al desplazarse
  const animateOnScroll = function () {
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
  animateOnScroll();
});
