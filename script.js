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
const navbar = document.querySelector(".app-navbar");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

/* Sticky + shadow */
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  updateActiveLink();
});

/* Active link tracking */
function updateActiveLink() {
  let scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}
