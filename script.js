(function () {
  // ─── CONFIG ─────────────────────────────────────────────
  // If you wire this form to a real endpoint (a GoHighLevel form action,
  // a webhook, Zapier/Make, etc.) paste the URL below between the quotes.
  // Leave it empty ('') to use the built-in email fallback, which opens
  // a pre-filled email to info@mapelfirm.com with everything the visitor
  // entered — nothing is lost while you set up the real integration.
  var FORM_ENDPOINT = '';

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

  // ─── Choice pills (checkbox / radio) visual state ──────
  // CSS handles this natively via :has(), but this keeps older
  // browsers (and GHL's in-builder preview) in sync too.
  document.querySelectorAll('.choice-pill').forEach(function (pill) {
    var input = pill.querySelector('input');
    if (!input) return;

    function sync() {
      if (input.type === 'radio') {
        var name = input.name;
        document.querySelectorAll('input[name="' + name + '"]').forEach(function (sibling) {
          var siblingPill = sibling.closest('.choice-pill');
          if (siblingPill) siblingPill.classList.toggle('is-checked', sibling.checked);
        });
      } else {
        pill.classList.toggle('is-checked', input.checked);
      }
    }

    input.addEventListener('change', sync);
  });

  // ─── Form submission ────────────────────────────────────
  var form = document.getElementById('legacyArchiveForm');
  var status = document.getElementById('formStatus');

  function showStatus(msg) {
    if (!status) return;
    status.textContent = msg;
    status.classList.add('is-visible');
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var fd = new FormData(form);
      var fullName = (fd.get('full_name') || '').toString().trim();
      var phone = (fd.get('phone') || '').toString().trim();
      var email = (fd.get('email') || '').toString().trim();

      if (!fullName || !phone || !email) {
        showStatus('Please fill in your name, phone and email so we can reach you.');
        return;
      }

      var preserveTypes = fd.getAll('preserve_type').join(', ') || 'Not specified';
      var materialState = fd.get('material_state') || 'Not specified';
      var message = (fd.get('message') || '').toString().trim();

      if (FORM_ENDPOINT) {
        fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            full_name: fullName,
            phone: phone,
            email: email,
            preserve_type: preserveTypes,
            material_state: materialState,
            message: message
          })
        }).then(function () {
          form.reset();
          document.querySelectorAll('.choice-pill').forEach(function (p) { p.classList.remove('is-checked'); });
          showStatus('Thank you — we\'ve received your enquiry and will be in touch shortly.');
        }).catch(function () {
          showStatus('Something went wrong sending your enquiry. Please email us directly at info@mapelfirm.com.');
        });
      } else {
        var subject = 'Legacy Archive Enquiry — ' + fullName;
        var bodyLines = [
          'Full Name: ' + fullName,
          'Phone / WhatsApp: ' + phone,
          'Email: ' + email,
          'What they want to preserve: ' + preserveTypes,
          'Material is currently: ' + materialState,
          'Message: ' + (message || '—')
        ];
        var mailto = 'mailto:info@mapelfirm.com'
          + '?subject=' + encodeURIComponent(subject)
          + '&body=' + encodeURIComponent(bodyLines.join('\n'));
        window.location.href = mailto;
        showStatus('Opening your email to send this to info@mapelfirm.com…');
      }
    });
  }
})();
