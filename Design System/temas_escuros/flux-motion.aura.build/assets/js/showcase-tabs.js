// Year tabs in Student Showcase — toggles active styling between year buttons
(function () {
  const yearBtns = document.querySelectorAll('.year-btn');

  yearBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      yearBtns.forEach(b => {
        b.classList.remove('text-orange-400', 'border-orange-400', 'border-b-2', '-mb-8.5', 'active-year');
        b.classList.add('text-slate-500');
      });

      this.classList.remove('text-slate-500');
      this.classList.add('text-orange-400', 'border-orange-400', 'border-b-2', '-mb-8.5', 'active-year');

      const year = this.dataset.year;
      console.log('Selected year:', year);
    });
  });
})();
