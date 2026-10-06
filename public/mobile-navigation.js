/* Native details keeps the menu usable without JavaScript. These enhancements
   close it after navigation, outside taps, Escape and a desktop resize. */
const menu = document.querySelector('.mobile-menu');
if (menu) {
  const toggle = menu.querySelector('summary');
  const navigation = menu.querySelector('nav');
  const mobile = window.matchMedia('(max-width: 860px)');
  const sync = () => {
    toggle.setAttribute('aria-expanded', String(menu.open));
    toggle.setAttribute('aria-label', menu.open ? toggle.dataset.closeLabel : toggle.dataset.openLabel);
  };
  const close = () => { menu.open = false; sync(); };
  sync();
  menu.addEventListener('toggle', sync);
  navigation.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    close();
    if (link.getAttribute('href').startsWith('#')) {
      const target = document.getElementById(link.hash.slice(1));
      if (target) { target.setAttribute('tabindex', '-1'); target.focus({preventScroll:true}); }
    }
  });
  document.addEventListener('pointerdown', event => {
    if (menu.open && !menu.contains(event.target)) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) { close(); toggle.focus(); }
  });
  mobile.addEventListener('change', event => { if (!event.matches) close(); });
}
