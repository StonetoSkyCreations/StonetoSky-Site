/* Stone to Sky - behaviour. Content is visible without any of this. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var header = document.querySelector('.site-header');

  // Header shadow
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile nav: open, close on link, Escape, or outside tap
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  function closeMenu() {
    if (!links) return;
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMenu();
    });
    document.addEventListener('click', function (e) {
      if (!links.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('revealed'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('revealed');
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.15 });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  // Sticker drift: depth-based parallax on the hero table
  var drift = Array.prototype.slice.call(document.querySelectorAll('[data-depth]'));
  if (drift.length && !reduceMotion) {
    var ticking = false;
    var apply = function () {
      var y = window.scrollY;
      drift.forEach(function (el) {
        var d = parseFloat(el.getAttribute('data-depth')) || 0.1;
        el.style.transform = 'translate3d(0,' + (y * d * -1).toFixed(1) + 'px,0)';
      });
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(apply); }
    }, { passive: true });
    apply();
  }

  // Copy email
  var copyBtn = document.querySelector('.copy-btn');
  var note = document.querySelector('.copy-note');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var mail = copyBtn.getAttribute('data-email') || 'brooke@stonetosky.nz';
      var done = function () {
        if (note) { note.textContent = 'Email copied - see you in the inbox.'; }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(mail).then(done, done);
      } else { done(); }
    });
  }

  // Enquiry chips shape the mailto
  var chips = document.querySelectorAll('.chip');
  var mailLink = document.querySelector('.contact-mail');
  if (chips.length && mailLink) {
    var subject = 'Project enquiry';
    var body = 'Kia ora Brooke,';
    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener('click', function () {
        Array.prototype.forEach.call(chips, function (c) { c.setAttribute('aria-pressed', 'false'); });
        chip.setAttribute('aria-pressed', 'true');
        subject = 'Enquiry: ' + chip.textContent.trim();
        mailLink.href = 'mailto:brooke@stonetosky.nz' +
          '?subject=' + encodeURIComponent(subject) +
          '&body=' + encodeURIComponent('Kia ora Brooke,\n\nI would like to chat about ' + chip.textContent.trim().toLowerCase() + '.\n\nA little about the project:\n');
      });
    });
  }

  // Year
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }
})();
