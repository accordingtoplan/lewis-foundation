const io = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const nav = document.getElementById('nav');
const isInk = nav.classList.contains('ink'); // subpages start dark-on-paper
const onScroll = () => {
  if (isInk) { nav.classList.toggle('solid', window.scrollY > 40); }
  else { nav.classList.toggle('solid', window.scrollY > window.innerHeight * 0.82); }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const btn = document.getElementById('menu-btn');
if (btn) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    document.body.classList.toggle('menu-locked', open);
    btn.textContent = open ? 'Close' : 'Menu';
    btn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('ul a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-locked');
    btn.textContent = 'Menu';
    btn.setAttribute('aria-expanded', 'false');
  }));
}
