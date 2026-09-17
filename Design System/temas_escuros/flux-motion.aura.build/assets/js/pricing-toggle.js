// Pricing plan toggle (Monthly / Yearly) — animates pill and updates prices in three cards
function switchPlan(plan) {
  const btnMonthly = document.getElementById('btn-monthly');
  const btnYearly = document.getElementById('btn-yearly');
  const activePill = document.getElementById('active-pill');
  const card1 = document.getElementById('price-card-1');
  const card2 = document.getElementById('price-card-2');
  const card3 = document.getElementById('price-card-3');

  const prices = {
    monthly: ['R$49', 'R$99', 'R$249'],
    yearly: ['R$499', 'R$999', 'R$2.499']
  };
  const periods = {
    monthly: '/mês',
    yearly: '/ano'
  };

  if (plan === 'monthly') {
    activePill.style.transform = 'translateX(0%)';

    btnMonthly.classList.add('text-white', 'font-semibold');
    btnMonthly.classList.remove('text-slate-400', 'font-medium');

    btnYearly.classList.add('text-slate-400', 'font-medium');
    btnYearly.classList.remove('text-white', 'font-semibold');
  } else {
    activePill.style.transform = 'translateX(100%)';

    btnYearly.classList.add('text-white', 'font-semibold');
    btnYearly.classList.remove('text-slate-400', 'font-medium');

    btnMonthly.classList.add('text-slate-400', 'font-medium');
    btnMonthly.classList.remove('text-white', 'font-semibold');
  }

  const updateText = () => {
    [card1, card2, card3].forEach((card, index) => {
      card.querySelector('.price-amount').textContent = prices[plan][index];
      card.querySelector('.price-period').textContent = periods[plan];
    });
  };

  [card1, card2, card3].forEach(card => card.classList.add('opacity-0'));
  setTimeout(() => {
    updateText();
    [card1, card2, card3].forEach(card => card.classList.remove('opacity-0'));
  }, 300);
}
