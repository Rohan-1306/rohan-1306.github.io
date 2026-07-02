// ============ Typing effect for hero title ============
(function typeHero(){
  const el = document.getElementById('typeTarget');
  if(!el) return;
  const text = 'Rohan Mate';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){ el.textContent = text; return; }

  let i = 0;
  function tick(){
    el.textContent = text.slice(0, i);
    i++;
    if(i <= text.length){ setTimeout(tick, 70); }
  }
  tick();
})();

// ============ Mobile nav toggle ============
(function mobileNav(){
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if(!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ============ Findings accordion ============
(function findingsAccordion(){
  const findings = document.querySelectorAll('.finding');
  findings.forEach(finding => {
    const head = finding.querySelector('.finding-head');
    head.addEventListener('click', () => {
      const isOpen = finding.getAttribute('data-open') === 'true';
      finding.setAttribute('data-open', isOpen ? 'false' : 'true');
      head.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  });
})();

// ============ Scroll reveal ============
(function scrollReveal(){
  const targets = document.querySelectorAll('.section-head, .profile-grid, .arsenal-grid, .timeline, .finding, .contact-grid');
  targets.forEach(t => t.classList.add('reveal'));

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){
    targets.forEach(t => t.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(t => observer.observe(t));
})();

// ============ Active nav link on scroll ============
(function activeNav(){
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if(!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--amber)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
})();
