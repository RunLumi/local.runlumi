/* Lumi Local interactions: industry switcher, desk tilt, spotlight borders,
   scroll reveals, pricing credit counter, smooth FAQ. All enhancements are
   progressive: the page is complete without JS. */

(function () {
  'use strict';

  var docEl = document.documentElement;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var finePointer = window.matchMedia('(pointer: fine)');

  /* ------------------------------------------------------------------
     Industry switcher (hero operating desk)
     ------------------------------------------------------------------ */
  var stage = document.querySelector('.product-stage');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.industry-tab'));
  if (stage && tabs.length) {
    var selectIndustry = function (key, moveFocus) {
      stage.setAttribute('data-industry', key);
      tabs.forEach(function (tab) {
        var active = tab.getAttribute('data-industry') === key;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
        tab.tabIndex = active ? 0 : -1;
        if (active && moveFocus) tab.focus();
      });
      var panel = stage.querySelector('.stage-canvas');
      if (panel) panel.setAttribute('aria-labelledby', 'tab-' + key);
    };
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        selectIndustry(tab.getAttribute('data-industry'), false);
      });
    });
    var switchBar = stage.querySelector('.industry-switch');
    if (switchBar) {
      switchBar.addEventListener('keydown', function (event) {
        var dir = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
        if (!dir) return;
        event.preventDefault();
        var current = tabs.findIndex(function (t) { return t.classList.contains('is-active'); });
        var next = tabs[(current + dir + tabs.length) % tabs.length];
        selectIndustry(next.getAttribute('data-industry'), true);
      });
    }
  }

  /* ------------------------------------------------------------------
     Micro-tilt on the acrylic artifacts (fine pointers, motion allowed)
     ------------------------------------------------------------------ */
  if (stage && finePointer.matches && !reducedMotion.matches) {
    var canvas = stage.querySelector('.stage-canvas');
    var MAX_TILT = 3.2;
    var raf = 0;
    var targetX = 0, targetY = 0;
    var apply = function () {
      raf = 0;
      if (canvas) {
        canvas.style.setProperty('--tilt-y', targetY.toFixed(2));
        canvas.style.setProperty('--tilt-x', targetX.toFixed(2));
      }
    };
    stage.addEventListener('pointermove', function (event) {
      var rect = stage.getBoundingClientRect();
      var px = (event.clientX - rect.left) / rect.width - 0.5;
      var py = (event.clientY - rect.top) / rect.height - 0.5;
      targetY = px * MAX_TILT * 2;
      targetX = -py * MAX_TILT * 2;
      if (!raf) raf = requestAnimationFrame(apply);
    });
    stage.addEventListener('pointerleave', function () {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      targetX = 0; targetY = 0;
      if (canvas) {
        canvas.style.setProperty('--tilt-x', '0');
        canvas.style.setProperty('--tilt-y', '0');
      }
    });
  }

  /* ------------------------------------------------------------------
     Spotlight border coordinates (fine pointers only)
     ------------------------------------------------------------------ */
  if (finePointer.matches) {
    Array.prototype.forEach.call(document.querySelectorAll('.spotlight'), function (card) {
      card.addEventListener('pointermove', function (event) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', (event.clientX - rect.left) + 'px');
        card.style.setProperty('--my', (event.clientY - rect.top) + 'px');
      });
    });
  }

  /* ------------------------------------------------------------------
     Staggered scroll reveals + navy rail draw
     ------------------------------------------------------------------ */
  Array.prototype.forEach.call(document.querySelectorAll('[data-reveal-group]'), function (group) {
    var children = group.querySelectorAll('[data-reveal]');
    Array.prototype.forEach.call(children, function (el, index) {
      el.style.setProperty('--reveal-delay', Math.min(index * 70, 350) + 'ms');
    });
  });

  var revealTargets = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  var drawTargets = Array.prototype.slice.call(document.querySelectorAll('[data-draw]'));

  if (!('IntersectionObserver' in window) || reducedMotion.matches) {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
    drawTargets.forEach(function (el) { el.classList.add('in-view'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    revealTargets.forEach(function (el) { revealObserver.observe(el); });

    var drawObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        drawObserver.unobserve(entry.target);
      });
    }, { threshold: 0.35 });
    drawTargets.forEach(function (el) { drawObserver.observe(el); });
  }

  /* ------------------------------------------------------------------
     Pricing receipt: hover/focus rolls the net amount after the
     399.000đ Trust Kit credit. Both figures stay visible statically.
     ------------------------------------------------------------------ */
  Array.prototype.forEach.call(document.querySelectorAll('.starter-receipt'), function (box) {
    var out = box.querySelector('.receipt-price[data-full][data-net]');
    if (!out) return;
    var full = Number(out.getAttribute('data-full'));
    var net = Number(out.getAttribute('data-net'));
    var isEn = docEl.lang === 'en';
    var format = function (value) {
      return isEn ? value.toLocaleString('en-US') + ' VND' : value.toLocaleString('vi-VN') + 'đ';
    };
    var current = net;
    var raf = 0;
    var from = net, to = net, start = 0;
    var DURATION = 700;
    var easeOut = function (t) { return 1 - Math.pow(2, -10 * t); };
    var step = function (ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / DURATION, 1);
      if (progress >= 1) {
        current = to;
        out.textContent = format(to);
        raf = 0;
        return;
      }
      current = Math.round(from + (to - from) * easeOut(progress));
      out.textContent = format(current);
      raf = requestAnimationFrame(step);
    };
    var play = function () {
      if (raf) cancelAnimationFrame(raf);
      if (reducedMotion.matches) {
        out.textContent = format(net);
        box.classList.add('is-credited');
        return;
      }
      current = full;
      out.textContent = format(full);
      from = full;
      to = net;
      start = 0;
      raf = requestAnimationFrame(step);
      box.classList.add('is-credited');
    };
    var reset = function () {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      current = net;
      out.textContent = format(net);
      box.classList.remove('is-credited');
    };
    box.addEventListener('mouseenter', play);
    box.addEventListener('mouseleave', reset);
    box.addEventListener('focusin', play);
    box.addEventListener('focusout', reset);
  });

  /* ------------------------------------------------------------------
     FAQ: smooth height on toggle (details/summary stays native)
     ------------------------------------------------------------------ */
  Array.prototype.forEach.call(document.querySelectorAll('details.faq-item'), function (item) {
    var summary = item.querySelector('summary');
    var answer = item.querySelector('.faq-answer');
    if (!summary || !answer) return;
    summary.addEventListener('click', function (event) {
      event.preventDefault();
      if (reducedMotion.matches || typeof answer.animate !== 'function') {
        item.open = !item.open;
        return;
      }
      if (item.open) {
        var height = answer.offsetHeight;
        var closing = answer.animate(
          [{ height: height + 'px' }, { height: '0px' }],
          { duration: 260, easing: 'cubic-bezier(.16,1,.3,1)' }
        );
        closing.addEventListener('finish', function () { item.open = false; });
      } else {
        item.open = true;
        var openHeight = answer.offsetHeight;
        answer.animate(
          [{ height: '0px' }, { height: openHeight + 'px' }],
          { duration: 340, easing: 'cubic-bezier(.16,1,.3,1)' }
        );
      }
    });
  });
})();
