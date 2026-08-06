// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-reveal for sections (respects reduced motion via CSS opacity fallback only)
const revealTargets = document.querySelectorAll('.project, .schema-row, .tl-row, .stat');

if ('IntersectionObserver' in window) {
  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => observer.observe(el));
}
