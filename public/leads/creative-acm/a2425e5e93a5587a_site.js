(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  toggle?.addEventListener('click', () => {
    const open = toggle.classList.toggle('is-open');
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle?.classList.remove('is-open'); menu.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
  }));
  const filters = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.project-card');
  const empty = document.querySelector('[data-empty-state]');
  const carousel = document.querySelector('[data-portfolio-carousel]');
  const carouselStage = document.querySelector('[data-carousel-stage]');
  const carouselCategory = document.querySelector('[data-carousel-category]');
  const carouselCounter = document.querySelector('[data-carousel-counter]');
  const carouselDots = document.querySelector('[data-carousel-dots]');
  const carouselPrevious = document.querySelector('[data-carousel-prev]');
  const carouselNext = document.querySelector('[data-carousel-next]');
  let carouselItems = [];
  let carouselIndex = 0;

  cards.forEach(card => carouselStage?.appendChild(card));
  const renderCarousel = () => {
    cards.forEach(card => card.classList.remove('is-current'));
    const current = carouselItems[carouselIndex];
    if (!current) { carousel.hidden = true; empty.hidden = false; return; }
    carousel.hidden = false; empty.hidden = true;
    current.classList.add('is-current');
    carouselCounter.textContent = `${carouselIndex + 1} de ${carouselItems.length}`;
    carouselDots.replaceChildren(...carouselItems.map((item, index) => {
      const thumbnail = document.createElement('button');
      const image = item.querySelector('img');
      thumbnail.type = 'button';
      thumbnail.className = 'carousel-thumbnail';
      thumbnail.setAttribute('aria-label', `Ver foto ${index + 1}: ${item.querySelector('h3')?.textContent || 'projeto'}`);
      thumbnail.setAttribute('aria-current', String(index === carouselIndex));
      thumbnail.classList.toggle('is-active', index === carouselIndex);
      const preview = document.createElement('img');
      preview.src = image.currentSrc || image.src;
      preview.alt = '';
      thumbnail.appendChild(preview);
      thumbnail.addEventListener('click', () => { carouselIndex = index; renderCarousel(); });
      return thumbnail;
    }));
  };
  const selectCategory = (filter, label) => {
    carouselItems = Array.from(cards).filter(card => filter === 'all' || card.dataset.category.split(' ').includes(filter));
    carouselIndex = 0; carouselCategory.textContent = filter === 'all' ? 'Todos os projetos' : label;
    renderCarousel();
  };
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => { item.classList.remove('is-active'); item.setAttribute('aria-selected', 'false'); });
    button.classList.add('is-active'); button.setAttribute('aria-selected', 'true');
    selectCategory(button.dataset.filter, button.textContent);
  }));
  carouselPrevious?.addEventListener('click', () => { carouselIndex = (carouselIndex - 1 + carouselItems.length) % carouselItems.length; renderCarousel(); });
  carouselNext?.addEventListener('click', () => { carouselIndex = (carouselIndex + 1) % carouselItems.length; renderCarousel(); });
  selectCategory('all', 'Todos os projetos');
  const form = document.querySelector('[data-contact-form]');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const message = [
      'Olá! Gostaria de solicitar um orçamento.',
      `Nome: ${data.get('nome')}`,
      `WhatsApp: ${data.get('telefone')}`,
      `Projeto: ${data.get('mensagem') || 'Não informado'}`
    ].join('\n');
    window.open(`https://wa.me/5548996528028?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
  const modal = document.querySelector('[data-gallery-modal]');
  const modalImage = document.querySelector('[data-gallery-image]');
  const modalCaption = document.querySelector('[data-gallery-caption]');
  const modalCounter = document.querySelector('[data-gallery-counter]');
  const closeButtons = document.querySelectorAll('[data-gallery-close]');
  const previous = document.querySelector('[data-gallery-prev]');
  const next = document.querySelector('[data-gallery-next]');
  let gallery = [];
  let galleryIndex = 0;
  let lastFocusedCard;

  const renderGallery = () => {
    const card = gallery[galleryIndex];
    const image = card.querySelector('img');
    const title = card.querySelector('h3')?.textContent || 'Projeto Creative ACM';
    modalImage.src = image.currentSrc || image.src;
    modalImage.alt = image.alt;
    modalCaption.textContent = title;
    modalCounter.textContent = `${galleryIndex + 1} / ${gallery.length}`;
  };
  const closeGallery = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
    lastFocusedCard?.focus();
  };
  const changeGallery = direction => {
    galleryIndex = (galleryIndex + direction + gallery.length) % gallery.length;
    renderGallery();
  };
  cards.forEach(card => {
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Abrir foto: ${card.querySelector('h3')?.textContent || 'projeto'}`);
    const openGallery = () => {
      const category = card.dataset.category.split(' ')[0];
      gallery = Array.from(cards).filter(item => item.dataset.category.split(' ').includes(category));
      galleryIndex = gallery.indexOf(card);
      lastFocusedCard = card;
      renderGallery();
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      modal.querySelector('[data-gallery-close]').focus();
    };
    card.addEventListener('click', openGallery);
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openGallery(); }
    });
  });
  closeButtons.forEach(button => button.addEventListener('click', closeGallery));
  previous.addEventListener('click', () => changeGallery(-1));
  next.addEventListener('click', () => changeGallery(1));
  document.addEventListener('keydown', event => {
    if (modal.hidden) return;
    if (event.key === 'Escape') closeGallery();
    if (event.key === 'ArrowLeft') changeGallery(-1);
    if (event.key === 'ArrowRight') changeGallery(1);
  });
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
})();
