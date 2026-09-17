// Testimonials carousel: cycles through quotes/images via prev/next buttons
(function() {
  const testimonials = [
    {
      quote: "Acabei de fechar mais um projeto para um cliente! E ainda peguei a oferta vitalicia. Um agradecimento gigante para os criadores - este app e incrivel!",
      name: "Denial Gorg",
      role: "Engenheiro de Software, Startech Foundation",
      img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1000&auto=format&fit=crop"
    },
    {
      quote: "A integracao foi perfeita. Reduzimos o tempo de deploy em 40% ja na primeira semana. O time de suporte tambem e excelente.",
      name: "Sarah Chen",
      role: "Gerente de Produto, FinTech Global",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
    },
    {
      quote: "Ja usei muitos painess financeiros, mas o Finex se destaca pela velocidade e pelo design. E feito para profissionais que levam isso a serio.",
      name: "Alex Rivera",
      role: "CTO, NextGen Systems",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  let currentIndex = 0;
  const imgEl = document.getElementById('testimonial-img');
  const quoteEl = document.getElementById('testimonial-quote');
  const nameEl = document.getElementById('testimonial-name');
  const roleEl = document.getElementById('testimonial-role');

  function update(index) {
    const t = testimonials[index];
    if (imgEl && quoteEl && nameEl && roleEl) {
      imgEl.style.opacity = '0';
      quoteEl.style.opacity = '0';
      setTimeout(() => {
        imgEl.src = t.img;
        quoteEl.innerText = '"' + t.quote + '"';
        nameEl.innerText = t.name;
        roleEl.innerText = t.role;
        imgEl.style.opacity = '1';
        quoteEl.style.opacity = '1';
      }, 300);
    }
  }

  window.nextTestimonial = function() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    update(currentIndex);
  };

  window.prevTestimonial = function() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    update(currentIndex);
  };
})();
