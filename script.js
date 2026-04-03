const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);

  const rect = element.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    element.classList.add("visible");
  }
});

let lastScrollY = window.scrollY;
const socials = document.getElementById("floatingSocials");

if (socials) {
  window.addEventListener(
    "scroll",
    () => {
      const scrollingDown = window.scrollY > lastScrollY;
      const awayFromTop = window.scrollY > 120;

      socials.style.opacity = scrollingDown && awayFromTop ? "0.2" : "1";
      lastScrollY = window.scrollY;
    },
    { passive: true },
  );
}
