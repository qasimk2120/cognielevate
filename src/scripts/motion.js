/* CogniElevate motion engine — vanilla, no dependencies.
   Activates only when the user allows motion. Without it the
   site is fully readable and static (CSS gated on html.jsm). */

(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const html = document.documentElement;
  html.classList.add('jsm');

  /* ---------- Scroll reveals ---------- */
  const revealEls = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ---------- Stat counters ----------
     <span data-count>2.1</span> — animates the numeric text once. */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const cio = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          cio.unobserve(e.target);
          const el = e.target;
          const raw = el.textContent.trim();
          const m = raw.match(/^([\d.,]+)(.*)$/);
          if (!m) continue;
          const target = parseFloat(m[1].replace(/,/g, ''));
          const suffix = m[2] || '';
          const decimals = (m[1].split('.')[1] || '').length;
          const dur = 1200;
          const t0 = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (target * eased).toFixed(decimals) + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = raw;
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  /* ---------- Scroll-scrubbed scenes ----------
     <section data-scene data-scene-len="1.3"> gets a CSS var --p (0..1)
     driven by its position in the viewport. Used by hero fragments
     and the friction-to-flow path. */
  const scenes = Array.from(document.querySelectorAll('[data-scene]'));
  if (scenes.length) {
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      for (const s of scenes) {
        const r = s.getBoundingClientRect();
        const len = parseFloat(s.dataset.sceneLen || '1') * vh;
        // progress: 0 when section top hits 85% viewport, 1 after `len` of scroll
        const raw = (vh * 0.85 - r.top) / len;
        const p = Math.max(0, Math.min(1, raw));
        s.style.setProperty('--p', p.toFixed(4));
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  /* ---------- Magnetic primary buttons ---------- */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.btn-primary').forEach((btn) => {
      let raf = 0;
      btn.addEventListener('mousemove', (ev) => {
        const r = btn.getBoundingClientRect();
        const x = ((ev.clientX - r.left) / r.width - 0.5) * 6;
        const y = ((ev.clientY - r.top) / r.height - 0.5) * 4;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          btn.style.transform = `translate(${x.toFixed(1)}px, ${(y - 1).toFixed(1)}px)`;
        });
      });
      btn.addEventListener('mouseleave', () => {
        cancelAnimationFrame(raf);
        btn.style.transform = '';
      });
    });
  }

  /* ---------- Reading progress bar (blog posts) ---------- */
  const prog = document.querySelector('.read-progress span');
  if (prog) {
    const onScrollProg = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScrollProg, { passive: true });
    onScrollProg();
  }
})();
