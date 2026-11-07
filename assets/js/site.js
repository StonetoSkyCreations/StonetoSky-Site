// Stone to Sky - behaviour. Content is visible without any of this.
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal (set up first so nothing above can strand content).
  var reveals = document.querySelectorAll('[data-reveal]');
  var showAll = function () {
    for (var i = 0; i < reveals.length; i++) reveals[i].classList.add('revealed');
  };
  if (reveals.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      showAll();
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
      // Fail-safe: if the observer never delivers (stalled pipeline), show everything.
      setTimeout(showAll, 2000);
    }
  }

  var header = document.querySelector('.site-header');

  // Header shadow
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Anchor easing (replaces global scroll-behavior: smooth, which locked
  // scrolling on low-frame devices). Same-document hash links only.
  document.addEventListener('click', function (e) {
    if (reduceMotion) return;
    var a = e.target.closest ? e.target.closest('a[href*="#"]') : null;
    if (!a) return;
    var url;
    try { url = new URL(a.href); } catch (err) { return; }
    if (url.pathname !== location.pathname || !url.hash || url.hash === '#') return;
    // Let native fragment navigation open :target portfolio overlays reliably.
    if (url.hash.indexOf('#case-') === 0) return;
    var target = document.getElementById(url.hash.slice(1));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (history.pushState) history.pushState(null, '', url.hash);
  });

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

  // Copy email - only say it worked when it worked.
  var copyBtn = document.querySelector('.copy-btn');
  var note = document.querySelector('.copy-note');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var mail = copyBtn.getAttribute('data-email') || 'brooke@stonetosky.nz';
      var say = function (ok) {
        if (note) {
          note.textContent = ok
            ? 'Email copied - see you in the inbox.'
            : 'Copy did not work - the address is brooke@stonetosky.nz';
        }
      };
      var legacy = function () {
        var ta = document.createElement('textarea');
        ta.value = mail;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        var ok = false;
        try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
        document.body.removeChild(ta);
        say(ok);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(mail).then(function () { say(true); }, legacy);
      } else {
        legacy();
      }
    });
  }

  // Lightbox: Escape closes the open case overlay (the × link does it without JS).
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !location.hash || location.hash.indexOf('#case-') !== 0) return;
    var tile = document.querySelector('a[href=' + JSON.stringify('#' + location.hash.slice(1)) + ']');
    history.replaceState ? history.replaceState(null, '', location.pathname) : (location.hash = '');
    if (tile) tile.focus();
  });

  // Year
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }
})();
