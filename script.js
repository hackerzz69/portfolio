// Splash Screen Hide After Load
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    splash.style.opacity = '0';
    splash.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
    document.body.classList.add('loaded'); // fade in content
  }, 2000); // 2 second splash
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
