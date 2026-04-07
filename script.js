// ── Mobile nav toggle ─────────────────────────────
function toggleNav() {
  document.getElementById('navMobile').classList.toggle('open');
}

// ── Auto-year in footer ───────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Scroll Reveal ─────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings in same grid/group
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      siblings.forEach((el, idx) => {
        if (el === entry.target) {
          el.style.transitionDelay = `${idx * 80}ms`;
        }
      });
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.why-card, .sport-card, .package-card, .event-card, .faq-item, .addon, .venues-group'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ── Nav: hide mobile menu on outside click ────────
document.addEventListener('click', (e) => {
  const nav = document.getElementById('navMobile');
  if (nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !e.target.closest('.nav-toggle')) {
    nav.classList.remove('open');
  }
});

// ── Stat counter animation ────────────────────────
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(el => statObserver.observe(el));

// ── Hero pill hover audio-like ripple (CSS only, no deps) ─
// pills already handle via CSS hover states

// ── Smooth close nav on anchor click ─────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navMobile').classList.remove('open');
  });
});
