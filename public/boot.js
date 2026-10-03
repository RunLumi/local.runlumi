/* Runs synchronously in <head> before paint so scroll-reveal CSS only
   engages when JS is confirmed available (CSP-safe: external file). */
document.documentElement.classList.add('js');
