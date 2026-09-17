/* Testimonial switcher and Chart.js bar chart for the Hero section */
document.addEventListener('DOMContentLoaded', () => {
  // Testimonial switcher
  const testimonials = document.querySelectorAll('[data-testimonial-index]');
  const quoteEl = document.getElementById('testimonial-quote');
  const authorEl = document.getElementById('testimonial-author');

  testimonials.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
      testimonials.forEach(function (t) {
        const isActive = t.getAttribute('data-active') === 'true';
        t.removeAttribute('data-active');

        if (isActive) {
          t.classList.remove('h-14', 'w-14', 'sm:h-16', 'sm:w-16', 'ring-2', 'ring-white/20', 'shadow-lg');
          t.classList.add('h-12', 'w-12', 'sm:h-14', 'sm:w-14', 'ring-1', 'ring-white/10', 'opacity-40', 'grayscale');
        }
      });

      thumbnail.setAttribute('data-active', 'true');
      thumbnail.classList.remove('h-12', 'w-12', 'sm:h-14', 'sm:w-14', 'ring-1', 'ring-white/10', 'opacity-40', 'grayscale');
      thumbnail.classList.add('h-14', 'w-14', 'sm:h-16', 'sm:w-16', 'ring-2', 'ring-white/20', 'shadow-lg');

      quoteEl.style.opacity = '0';
      authorEl.style.opacity = '0';

      setTimeout(function () {
        var quote = thumbnail.getAttribute('data-testimonial-quote');
        var name = thumbnail.getAttribute('data-testimonial-name');
        var role = thumbnail.getAttribute('data-testimonial-role');

        quoteEl.querySelector('p').innerHTML = quote;
        authorEl.querySelector('p').innerHTML = name + ' <span class="text-slate-400 font-normal">' + role + '</span>';

        quoteEl.style.opacity = '1';
        authorEl.style.opacity = '1';
      }, 250);
    });
  });

  // Chart
  const ctx = document.getElementById('successChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
        datasets: [{
          label: 'Sucesso',
          data: [92, 96, 98, 97, 99, 98, 97],
          backgroundColor: ['#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6'],
          borderRadius: 6,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(17,17,17,0.9)',
            titleColor: '#fff',
            bodyColor: '#d1d5db',
            padding: 10,
            displayColors: false
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#9ca3af', font: { family: 'Inter', weight: '500' } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.08)' },
            ticks: { color: '#9ca3af', font: { family: 'Inter', weight: '500' }, stepSize: 20, callback: (v) => v + '%' },
            min: 60,
            max: 100
          }
        }
      }
    });
  }
});
</content>
</invoke>