const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});






document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.toggle-switch input');
  const handle = document.querySelector('.toggle-switch-handle');
  const background = document.querySelector('.toggle-switch-background');

  const isDark = sessionStorage.getItem('darkMode') === 'true';

  toggle.checked = isDark;
  requestAnimationFrame(() => {
    document.documentElement.classList.remove('dark-mode-static');
  });

  toggle.addEventListener('change', () => {
    const enabled = toggle.checked;

    sessionStorage.setItem('darkMode', enabled);
    document.documentElement.classList.toggle('dark-mode', enabled);

    document.documentElement.classList.remove('dark-mode-static');
  });
});