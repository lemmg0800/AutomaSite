// Feature Detail carousel (Curriculum modules) — controls #crs-img-v2, #crs-num-v2 and sibling text/dots/buttons
(function () {
  const newData = [
    {
      id: "01",
      sub: "Módulo 01",
      title: "Fundamentos de<br>Topologia",
      desc: "Domine o básico da geometria 3D. Aprenda fluxo de arestas, gerenciamento de polígonos e como construir modelos limpos prontos para animação e deformações complexas.",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e135f35b-eaeb-4b52-b2df-a9690249ff63_1600w.jpg"
    },
    {
      id: "02",
      sub: "Módulo 02",
      title: "Técnicas Avançadas<br>de Sombreamento",
      desc: "Mergulhe na criação de materiais. Entenda fluxos PBR, texturas procedurais e a construção de shaders baseados em nós para criar superfícies realistas.",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16d38370-5873-45cf-bab1-60a7b923dc6e_1600w.jpg"
    },
    {
      id: "03",
      sub: "Módulo 03",
      title: "Física e Dinâmicas<br>Cinéticas",
      desc: "Dê vida às suas cenas com simulações de corpos rígidos, dinâmica de corpos macios e sistemas de partículas que obedecem às leis da física para movimentos orgânicos.",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f30f4f2-b81c-4bf1-88c7-86b1dc41acd1_1600w.jpg"
    },
    {
      id: "04",
      sub: "Aprofundamento",
      title: "Iluminação<br>Cinematográfica Essencial",
      desc: "Compreenda as propriedades físicas da luz. Aprenda a montar cenários de estúdio, ambientes volumétricos e atmosferas dramáticas que elevam suas renderizações de planas a fotorrealistas.",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81a14d03-8b28-415a-b8d8-bf76b3206731_1600w.webp"
    }
  ];

  const initCarousel = () => {
    let current = 0;
    const img = document.getElementById('crs-img-v2');
    const num = document.getElementById('crs-num-v2');
    const sub = document.getElementById('crs-sub');
    const title = document.getElementById('crs-title');
    const desc = document.getElementById('crs-desc');
    const dots = document.getElementById('crs-dots');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    if (!img || !num || !sub || !btnPrev) return;

    function renderDots() {
      dots.innerHTML = '';
      newData.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.innerText = '0' + (i + 1);
        btn.className = i === current
          ? 'text-white transition-colors duration-300'
          : 'text-slate-600 hover:text-slate-400 transition-colors duration-300';
        btn.onclick = () => go(i);
        dots.appendChild(btn);
      });
    }

    function go(index) {
      if (index === current) return;
      current = index;

      img.classList.remove('opacity-80');
      img.classList.add('opacity-0', 'scale-105');
      [sub, title, desc, num].forEach(el => el.classList.add('opacity-0', 'translate-y-4'));

      setTimeout(() => {
        const d = newData[current];
        img.src = d.img;
        num.innerText = d.id;
        sub.innerText = d.sub;
        title.innerHTML = d.title;
        desc.innerText = d.desc;

        renderDots();

        requestAnimationFrame(() => {
          img.classList.remove('opacity-0', 'scale-105');
          img.classList.add('opacity-80');
          [sub, title, desc, num].forEach(el => el.classList.remove('opacity-0', 'translate-y-4'));
        });
      }, 300);
    }

    const newBtnPrev = btnPrev.cloneNode(true);
    const newBtnNext = btnNext.cloneNode(true);
    if (btnPrev.parentNode) btnPrev.parentNode.replaceChild(newBtnPrev, btnPrev);
    if (btnNext.parentNode) btnNext.parentNode.replaceChild(newBtnNext, btnNext);

    newBtnPrev.addEventListener('click', () => {
      const next = (current - 1 + newData.length) % newData.length;
      go(next);
    });

    newBtnNext.addEventListener('click', () => {
      const next = (current + 1) % newData.length;
      go(next);
    });

    renderDots();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();
