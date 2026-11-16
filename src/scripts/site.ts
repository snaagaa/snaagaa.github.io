/**
 * Small progressive enhancements. The page reads fine without any of this.
 */
const root = document.documentElement;

/* Theme toggle ──────────────────────────────────────────────────────── */

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const toggles = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');
const currentTheme = () => root.dataset.theme ?? (prefersDark.matches ? 'dark' : 'light');
const syncToggles = () => toggles.forEach((b) => b.setAttribute('aria-pressed', String(currentTheme() === 'dark')));

toggles.forEach((button) =>
  button.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage blocked (private mode): the choice lasts for this visit.
    }
    syncToggles();
  }),
);
prefersDark.addEventListener('change', syncToggles);
syncToggles();

/* Header gets a dividing line once the page scrolls ──────────────── */

const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Mobile menu ───────────────────────────────────────────────────────── */

const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const nav = document.getElementById('site-nav');
const setMenu = (open: boolean) => {
  menuButton?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('is-open', open);
};

menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
nav?.addEventListener('click', (event) => {
  if ((event.target as Element).closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});
document.addEventListener('click', (event) => {
  if (nav?.classList.contains('is-open') && !(event.target as Element).closest('[data-header]')) setMenu(false);
});
