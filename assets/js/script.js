const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Dark Mode
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



// Disable browser scroll restoration
history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

// ─── BLUR REVEAL LOGIC ──────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  // Collect all newly intersecting entries
  const intersecting = entries.filter(e => e.isIntersecting);

  intersecting.forEach((entry, i) => {
    // Stagger each element by 120ms per index
    setTimeout(() => {
      entry.target.classList.add('visible');
    }, i * 120);

    // Stop observing once animated in
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.1,       // trigger when 10% is visible
  rootMargin: '0px 0px -40px 0px'  // slightly before bottom of viewport
});

reveals.forEach(el => observer.observe(el));
