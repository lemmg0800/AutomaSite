/* scroll-animations.js — animações de entrada do herói e revelações disparadas pelo scroll via GSAP + ScrollTrigger (extraído de src/pages/LandingPage.jsx) */
(function () {
  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);

  // estado inicial: herói e blocos com fade-in escondidos
  gsap.set('.hero-anim-item', { opacity: 0, y: 40, filter: 'blur(12px)' });
  gsap.set('.scroll-fade-in', { opacity: 0, y: 40, filter: 'blur(12px)' });

  // entrada do herói (sem trigger de scroll)
  gsap.to('.hero-anim-item', {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    duration: 1.2,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 0.1
  });

  // revelação de palavras mascarada por seção
  document.querySelectorAll('.reveal-section').forEach(function (section) {
    var words = section.querySelectorAll('.gsap-word-reveal');
    if (words.length) {
      gsap.fromTo(
        words,
        { y: '100%', opacity: 0, filter: 'blur(8px)' },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: '0%',
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.04,
          ease: 'power3.out'
        }
      );
    }
  });

  // fade-in dos blocos secundários em lote conforme entram/saem da viewport
  ScrollTrigger.batch('.scroll-fade-in', {
    start: 'top 85%',
    onEnter: function (batch) {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        overwrite: true
      });
    },
    onLeaveBack: function (batch) {
      gsap.to(batch, {
        opacity: 0,
        y: 40,
        filter: 'blur(12px)',
        duration: 0.5,
        ease: 'power2.in',
        overwrite: true
      });
    }
  });
})();
