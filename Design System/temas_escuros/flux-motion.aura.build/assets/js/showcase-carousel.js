// Student Showcase carousel — slides #showcase-carousel via prev/next buttons
(function () {
  const carousel = document.getElementById('showcase-carousel');
  const prevBtn = document.getElementById('showcase-prev');
  const nextBtn = document.getElementById('showcase-next');

  let currentIndex = 0;
  const totalCards = 6;
  let visibleCards = window.innerWidth >= 768 ? 3 : 1;
  let maxIndex = totalCards - visibleCards;

  function getCardWidth() {
    const card = carousel.children[0];
    if (card) {
      return card.offsetWidth + 32; // card width + gap
    }
    return 0;
  }

  function updateCarousel() {
    const cardWidth = getCardWidth();
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex;
    }
    updateCarousel();
  });

  nextBtn.addEventListener('click', function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  window.addEventListener('resize', function () {
    visibleCards = window.innerWidth >= 768 ? 3 : 1;
    maxIndex = totalCards - visibleCards;
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    updateCarousel();
  });
})();
