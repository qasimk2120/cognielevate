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
