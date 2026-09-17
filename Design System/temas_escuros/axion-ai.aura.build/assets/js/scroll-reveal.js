document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("sys-active");

        if (entry.target.hasAttribute("data-sys-counter")) {
          const target = parseInt(entry.target.getAttribute("data-sys-counter"));
          const suffix = entry.target.getAttribute("data-sys-suffix") || "";
          const duration = 2800;
          const start = 0;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 5);

            entry.target.innerText = Math.floor(start + (target - start) * ease) + suffix;

            if (progress < 1) requestAnimationFrame(animate);
            else entry.target.innerText = target + suffix;
          };
          requestAnimationFrame(animate);
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -80px 0px" });

  document.querySelectorAll(".sys-reveal, .sys-flicker-anim, [data-sys-counter], .sys-bar-fill").forEach(el => observer.observe(el));
});
