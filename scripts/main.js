// Mobile navigation toggle
(function () {
  const header = document.querySelector('.site-header');
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  if (btn && nav) {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.toggle('is-open');
      nav.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when clicking a link
    nav.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.matches('a')) {
        btn.classList.remove('is-open');
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Header shadow on scroll
  const onScroll = () => {
    if (!header) return;
    const scrolled = window.scrollY > 4;
    header.classList.toggle('scrolled', scrolled);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Image fallback for menu cards
  document.querySelectorAll('img.with-fallback').forEach((img) => {
    const fallback = img.getAttribute('data-fallback');
    if (!fallback) return;
    const onErr = () => {
      if (img.dataset.fallbackApplied) return;
      img.src = fallback;
      img.dataset.fallbackApplied = 'true';
    };
    img.addEventListener('error', onErr, { once: false });
  });
})();
