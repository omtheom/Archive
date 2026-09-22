(function () {
  // ─── Nav background on scroll ──────────────────────────
  var nav = document.getElementById('siteNav');
  function onScroll() {
    if (!nav) return;
    nav.style.background = window.scrollY > 50
      ? 'rgba(251,250,246,0.96)'
      : 'rgba(251,250,246,0.88)';
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ─── Mobile menu toggle ────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  var menu   = document.getElementById('mobileMenu');
  var body   = document.body;

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    body.classList.remove('menu-open');
  }

  function openMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    body.classList.add('menu-open');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) closeMenu();
    });
  }
})();
