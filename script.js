window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    splash.style.opacity = '0';
    splash.style.visibility = 'hidden';
    splash.style.pointerEvents = 'none';
    splash.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.classList.add('loaded');
  }, 5000);
});

const lenis = new Lenis({
  wrapper: document.querySelector('#smooth-wrapper'),
  content: document.querySelector('main'),
  smooth: true
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
