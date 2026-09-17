document.addEventListener('DOMContentLoaded', () => {
  // Flashlight Effect
  const cards = document.querySelectorAll('.card-flashlight');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Parallax Effect
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  let ticking = false;

  function updateParallax() {
    parallaxLayers.forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-parallax-speed')) || 0.1;
      const parent = layer.parentElement;
      const rect = parent.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + (rect.height / 2);

      // Render parallax only if the element is roughly visible in the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const distanceFromCenter = elementCenter - viewportCenter;
        const yPos = distanceFromCenter * speed;
        layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });

  // Initial render
  updateParallax();
});
