/* unicorn-init.js — inicializa a cena WebGL do Unicorn Studio no herói usando o JSON de cena local (substitui o wrapper unicornstudio-react de src/components/hero/LandingHero.jsx) */
(function () {
  if (!window.UnicornStudio || typeof UnicornStudio.addScene !== 'function') return;
  var el = document.getElementById('hero-unicorn-scene');
  if (!el) return;
  UnicornStudio.addScene({
    elementId: 'hero-unicorn-scene',
    filePath: 'assets/6d061648bbf85b06_Gp9cUMaCN53bOLjWagWZ.js',
    fps: 60,
    scale: 1,
    dpi: 1.5,
    lazyLoad: false,
    interactivity: { mouse: { disableMobile: true } }
  }).catch(function () {
    /* WebGL indisponível — o herói continua funcional sem a cena animada */
  });
})();
