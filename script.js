// Splash Screen Hide After Load
window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  splash.style.opacity = '0';
  splash.style.visibility = 'hidden';
  document.body.style.overflow = 'auto'; // re-enable scroll
});

// Lenis Smooth Scroll Init
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP + ScrollTrigger Setup
gsap.registerPlugin(ScrollTrigger); // ✅ Make sure ScrollTrigger is registered!

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
