// Theme + nav + scroll animations + interactive features
(function(){
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme'); // 'dark' | 'light' | null

  const applyTheme = (mode) => {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon-text');
    
    if(mode === 'dark'){ 
      html.classList.add('theme-dark'); 
      if(themeIcon) themeIcon.textContent = '☀️';
    } else { 
      html.classList.remove('theme-dark'); 
      if(themeIcon) themeIcon.textContent = '🌙';
    }
    
    const meta = document.querySelector('meta[name="theme-color"]');
    if(meta){ meta.setAttribute('content', mode === 'dark' ? '#0b0f19' : '#ffffff'); }
  };

  const resolveTheme = () => {
    if(savedTheme){ return savedTheme; }
    return prefersDark.matches ? 'dark' : 'light';
  };

  // Init theme
  applyTheme(resolveTheme());

  // Toggle theme
  const themeBtn = $('#theme-toggle');
  if(themeBtn){
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.classList.contains('theme-dark') ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }

  // Mobile nav
  const navToggle = $('#nav-toggle');
  const navMenu = $('#nav-menu');
  if(navToggle && navMenu){
    navToggle.addEventListener('click', () => {
      const open = navMenu.getAttribute('data-open') === 'true';
      navMenu.setAttribute('data-open', open ? 'false' : 'true');
      navToggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
    navMenu.addEventListener('click', (e) => {
      if(e.target.tagName === 'A' && navMenu.getAttribute('data-open') === 'true'){
        navMenu.setAttribute('data-open', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Year in footer
  const yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards, sections, and animated elements
  const animatedElements = $$('.card, .xp, .skill-card, .achievement-card, .education-card, .link-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  // Smooth scroll for anchor links
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#top') return;
      
      e.preventDefault();
      const target = $(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Typing animation for tagline (optional enhancement)
  const tagline = $('.tagline');
  if (tagline && tagline.textContent) {
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
      if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
  }

  // Add stagger delay to cards
  const cards = $$('.card, .skill-card, .achievement-card');
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  // Parallax effect for hero section (subtle)
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const hero = $('.hero');
        if (hero && scrolled < window.innerHeight) {
          hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    // Disable animations
    animatedElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
    });
  }
})();
