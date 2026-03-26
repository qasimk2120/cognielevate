const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1, // trigger earlier
  },
);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);

  // 🔥 FORCE fallback (important)
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    el.classList.add("visible");
  }
});
let lastScrollY = window.scrollY;
const socials = document.getElementById("floatingSocials");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // scrolling down → hide
    socials.style.opacity = "0";
    socials.style.transform = "translateY(-50%) translateX(-20px)";
  } else {
    // scrolling up → show
    socials.style.opacity = "1";
    socials.style.transform = "translateY(-50%) translateX(0)";
  }

  lastScrollY = window.scrollY;
});
