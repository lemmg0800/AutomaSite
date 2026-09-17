(function(){
  var IS_CSR = true;
  var resolveLocal = window.__resolveLocal || function(){return null;};
  var rewriteSrcset = window.__rewriteSrcset || function(s){return s;};
  function fixImg(el){
    if (!el || el.tagName !== 'IMG') return;
    var src = el.getAttribute('src');
    var loc = resolveLocal(src);
    if (loc && src !== loc) el.setAttribute('src', loc);
    var ss = el.getAttribute('srcset');
    if (ss) {
      var nss = rewriteSrcset(ss);
      if (nss !== ss) el.setAttribute('srcset', nss);
    }
  }
  function fixAll(){ document.querySelectorAll('img').forEach(fixImg); }
  function hasSlideOffset(t){
    // True if a transform looks like a 'parked off-screen' slide-in:
    // translateX/Y in pixels with magnitude >= 30, or any matrix.
    // Returns false for crossfade companions like scale(0.9) or
    // pure-percentage centering (translateX(-50%)).
    if (!t || t === 'none') return false;
    if (/matrix/i.test(t)) return true;
    var m = t.match(/(-?\d+\.?\d*)px/g) || [];
    for (var i = 0; i < m.length; i++) {
      if (Math.abs(parseFloat(m[i])) >= 30) return true;
    }
    return false;
  }
  function reveal(){
    // Reveal elements parked at opacity:0 + slide-in transform.
    // These are scroll-triggered animations (GSAP ScrollTrigger,
    // fixed CTA bars) that won't fire offline because their JS is
    // stripped or scroll listeners aren't reached.
    // Don't touch plain opacity:0 with no slide — those are
    // intentional crossfade companions (header logo/CTA swap, etc.).
    var n = 0;
    document.querySelectorAll('[style]').forEach(function(el){
      var s = el.style;
      if (s.opacity !== '0') return;
      if (!hasSlideOffset(s.transform) && !hasSlideOffset(s.translate)) return;
      s.opacity = '1';
      if (s.transform) s.transform = 'none';
      if (s.translate) s.translate = 'none';
      if (s.rotate)    s.rotate = 'none';
      if (s.scale)     s.scale = 'none';
      if (s.pointerEvents === 'none') s.pointerEvents = '';
      n++;
    });
    if (window.console && n) console.log('[offline-fix] revealed', n);
  }
  function initUnicornStudio(){
    // If a UnicornStudio engine has been preloaded, the captured page
    // skips its own init() because of `if(!window.UnicornStudio)…`.
    // Force the call here so the WebGL scenes actually mount.
    if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function'
        && !window.UnicornStudio.isInitialized) {
      try { window.UnicornStudio.init(); window.UnicornStudio.isInitialized = true; }
      catch(e){ if(window.console) console.warn('[offline-fix] UnicornStudio init failed:', e); }
    }
  }
  // Initial img sweep + observer for hydration-time updates
  fixAll();
  var obs = new MutationObserver(function(muts){
    for (var i = 0; i < muts.length; i++) {
      var m = muts[i];
      if (m.type === 'attributes' && m.target.tagName === 'IMG') fixImg(m.target);
      for (var j = 0; j < m.addedNodes.length; j++) {
        var n = m.addedNodes[j];
        if (n && n.nodeType === 1) {
          if (n.tagName === 'IMG') fixImg(n);
          if (n.querySelectorAll) n.querySelectorAll('img').forEach(fixImg);
        }
      }
    }
  });
  obs.observe(document, {childList:true, subtree:true,
    attributes:true, attributeFilter:['src','srcset']});
  setTimeout(fixAll, 1000);
  setTimeout(fixAll, 3000);
  var go = function(){
    // CSR: scripts were stripped, so opacity:0 inline styles are
    // frozen forever. Reveal immediately. Otherwise, give GSAP/etc
    // a chance to play scroll animations before nuking opacity:0.
    if (IS_CSR) reveal();
    setTimeout(reveal, IS_CSR ? 200 : 5000);
    initUnicornStudio();
    setTimeout(initUnicornStudio, 500);
    setTimeout(initUnicornStudio, 2000);
  };
  if (document.readyState === 'complete') go();
  else window.addEventListener('load', go);
})();
