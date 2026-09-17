// Dashboard grid: triggers looping counter animations when section enters viewport
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('dashboard-grid');
  if (!container) return;
  const counters = document.querySelectorAll('[data-counter-target]');
  const LOOP_DURATION = 6000; // matches CSS animation duration
  let counterInterval;

  const runCounterAnimation = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-counter-target');
      const prefix = counter.getAttribute('data-counter-prefix') || '';
      const suffix = counter.getAttribute('data-counter-suffix') || '';

      let count = 0;
      const duration = 1500;
      const increment = target / (duration / 20);

      counter.innerText = prefix + '0' + suffix;

      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(timer);
        }
        counter.innerText = prefix + Math.ceil(count) + suffix;
      }, 20);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        container.classList.add('in-view');
        runCounterAnimation();
        if (!counterInterval) {
          counterInterval = setInterval(() => {
            if (container.classList.contains('in-view')) {
              runCounterAnimation();
            }
          }, LOOP_DURATION);
        }
      } else {
        container.classList.remove('in-view');
      }
    });
  }, { threshold: 0.2 });

  observer.observe(container);
});
