window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    splash.style.opacity = '0';
    splash.style.visibility = 'hidden';
    splash.style.pointerEvents = 'none';
    splash.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.classList.add('loaded');
  }, 3000);
});
const lenis = new Lenis({
  smooth: true,
  lerp: 0.5, // ⬅️ Higher = faster/snappier scroll (default is 0.1)
  smoothTouch: false // ⬅️ Optional: disable extra smoothing on mobile
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.fade-up').forEach((el) => {
  gsap.from(el, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});
