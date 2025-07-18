// Lenis Smooth Scroll Init
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Animations
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
