(function () {
  'use strict';

  const header = document.getElementById('siteHeader');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  const PHONE_DISPLAY = '07481 931931';
  const PHONE_TEL = '07481931931';

  // Header shadow on scroll
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('site-header--scrolled');
      } else {
        header.classList.remove('site-header--scrolled');
      }
    }, { passive: true });
  }

  // Mobile nav toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const open = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            entry.target.classList.add('is-visible');
          }, (index % 6) * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // Gallery lightbox
  if (lightbox && lightboxImg && lightboxClose) {
    document.querySelectorAll('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {
        lightboxImg.src = item.dataset.src || item.querySelector('img').src;
        lightboxImg.alt = item.dataset.alt || item.querySelector('img').alt;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        lightboxClose.focus();
      });
    });

    function closeLightbox() {
      lightbox.hidden = true;
      lightboxImg.src = '';
      document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
  }

  // Contact form
  if (form && formStatus) {
    const submitBtn = form.querySelector('button[type="submit"]');

    function showError(message) {
      formStatus.className = 'form-status error';
      formStatus.innerHTML = message +
        ' Please call us on <a href="tel:' + PHONE_TEL + '">' + PHONE_DISPLAY + '</a>.';
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot
      const honey = form.querySelector('input[name="website"]');
      if (honey && honey.value) return;

      // Map service dropdown into service_requested
      const serviceSelect = form.querySelector('select[name="service"]');
      const serviceField = form.querySelector('input[name="service_requested"]');
      if (serviceSelect && serviceField) {
        serviceField.value = serviceSelect.value;
      }
      // Don't send the extra select name
      if (serviceSelect) serviceSelect.removeAttribute('name');

      formStatus.textContent = 'Sending your enquiry...';
      formStatus.className = 'form-status';
      if (submitBtn) submitBtn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: new URLSearchParams(new FormData(form)),
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            form.hidden = true;
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Thanks — your enquiry has been sent. We'll be in touch shortly.';
          } else {
            showError('Sorry, something went wrong sending your enquiry.');
          }
        })
        .catch(function () {
          showError('Sorry, we couldn't send your enquiry.');
        })
        .then(function () {
          if (submitBtn) submitBtn.disabled = false;
          if (serviceSelect) serviceSelect.setAttribute('name', 'service');
        });
    });
  }
})();
