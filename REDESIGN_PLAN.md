# CogniElevate Site Redesign Plan — v3 (final scope for approval)
Date: 2026-06-10. Status: awaiting go-ahead. No code yet.

**One-line scope: copy frozen, visual system fully redesignable.** The written text, claims, CTA wording and destinations, routes, SEO/schema, FAQ substance and blog content stay exactly as they are. Everything visual around that text — layout, scenes, depth, motion, composition, hierarchy — gets rebuilt as a premium 2D/3D scrollytelling experience in the 8-color brand palette.

Decisions locked from your review:
1. Strict palette. Orange warn and green success removed: lost-time figures in #FFFFFF, cost indicators in #A5D2F5→#0F4C82, recovery/action accents in #64FEDA, base #0A1930, dark neutral #1A1A1A only where needed.
2. Homepage order swapped: Problem → Principle → CogniFocus (first live proof) → Markets (bigger ecosystem).
3. Second product placeholder: Products page only, subtle, exact wording you provided (section 5). Not on homepage.
4. CTA copy and destinations protected. CTA visuals and motion fully redesignable.

---

## 1. Protected (frozen)

- All written copy sitewide: headlines, paragraphs, FAQ Q&A, stats, pills, badges, button labels.
- CTA wording, links and meaning. (Their design, layout and motion are not frozen.)
- Routes and URLs, nav and footer link sets.
- SEO: titles, descriptions, keywords, canonicals, OG/Twitter, the full schema graph, robots, sitemap, verification files.
- Blog article text, press card, founder content, privacy content, contact details and topics, social links.
- Product truth: CogniFocus is the only live product. Fashion fit intelligence, healthcare and robotics stay future/exploratory with their current wording.
- Fonts (Inter), Astro version, no new npm dependencies without separate approval, no contact form, no fake urgency, testimonials, metrics or clients.
- All meaningful text stays crawlable HTML. Graphics are decorative (`aria-hidden`) or carry alt text; nothing important moves into canvas or images.

---

## 2. Color system

| Token | Value | Role |
|---|---|---|
| `--bg` | #0A1930 | Dark base everywhere |
| `--accent` | #64FEDA | Glow, highlights, icons, links, primary buttons, flow lines, recovery accents |
| `--primary` | #0F4C82 | Depth: panel gradients, orbit cores, scene backgrounds, button shadows, cost indicators (deep end) |
| `--accent-soft` | #A5D2F5 | Future badges, soft glows, secondary strokes, cost indicators (light end) |
| `--text` | #FFFFFF | Primary text (72% / 48% alpha for secondary/muted) |
| `--ink` | #1A1A1A | Dark text on light or accent surfaces |
| `--paper` / `--paper-2` | #EFF3F6 / #E9F6FF | Light surfaces inside graphics and select panels for contrast moments |
| Surfaces / borders | derived | #0A1930 + 4–14% white mixes, #0F4C82 low-alpha tints, white-alpha borders |

No colors outside these 8 plus alpha/mix derivations of them. (PDF also contains #0446F1; excluded per your list.)

Semantic recolor: "loss/cost" reads cool and dim (#A5D2F5→#0F4C82, white numerals), "recovery/flow/live" reads bright (#64FEDA). That contrast becomes a storytelling device across the whole site.

---

## 3. The visual language (sitewide system)

Built entirely with CSS and SVG. "3D" means perspective, layered parallax, gradients, glows and geometry, not WebGL.

- **Time fragments** — small glowing shards and icon chips (#64FEDA / #A5D2F5 at low alpha) that drift, scatter and organize. Represent lost moments.
- **The flow line** — a glowing path that begins tangled and resolves straight. Friction → flow. Appears as hero spine, principle scene, about's vertical rail.
- **Orbit system** — concentric rings around a core. Live node lit #64FEDA, future nodes dim #A5D2F5 on dashed orbits. Ecosystem motif on home and Products.
- **Depth stack** — every scene has 3 layers: far (radial #0F4C82 glow fields, faint grid), mid (geometry: rings, paths, fragments, parallax at different scroll speeds), near (content panels with `perspective` and slight `rotateX/Y` resting tilt that eases to flat as the panel enters; light #E9F6FF edge highlights to fake dimensionality).
- **Containment ring** — rotating SVG ring that opens to reveal a product. CogniFocus's signature moment.
- **CTA treatment** — buttons get glow bloom, hover lift, magnetic-feel translate (few px, rAF), animated arrow nudges; CTA panels sit on animated ring/fragment backgrounds. Wording and links untouched.

Motion grammar: scroll-scrubbed scenes (max 2 per page), one-shot reveals (IntersectionObserver), ambient drift (slow CSS loops), micro-interactions (hover/focus). Everything inside `prefers-reduced-motion: no-preference`; reduced-motion users get the complete, static, fully readable site with final-state visuals.

---

## 4. Homepage — six cinematic scenes (existing text, new order)

Order: Hero → Friction field (stats + problem) → Friction-to-flow (principle) → CogniFocus reveal → Ecosystem (markets) → FAQ / press / CTA finale.

**Scene 1 — Opening: the hero.** Full-viewport scene. Far layer: deep #0F4C82 glow horizon over #0A1930. Mid: 14–16 time fragments drifting in slow chaos with parallax depth (size/blur varies to fake distance). Near: existing h1, lead and CTAs, left-composed; the existing time-cost card re-skinned as a floating glass panel (white numerals, #A5D2F5→#0F4C82 cost bar, #64FEDA recovery CTA) tilted slightly in perspective, easing flat on entry. Scroll scrub over ~130vh: fragments converge from chaos into a single ordered line that flows down into scene 2, becoming the page's spine.

**Scene 2 — The friction field.** The spine line frays into four branches. Existing stats render as large white numerals on the spine with one-shot count-ups. The four existing problem cards become four "friction nodes" along the frayed branches: staggered panels alternating left/right of the spine on desktop (stacked on mobile), each with an icon (lucide bell-off, timer, rotate-ccw, activity) and a dim #A5D2F5 pulse. Background tightens: narrow #0F4C82 glow, faint grid. Same text, completely new composition.

**Scene 3 — Friction to flow.** Sticky scene, ~160vh scrub. The frayed tangle from scene 2 occupies center stage as a large SVG. As the user scrolls, tangle fades while a clean #64FEDA path draws itself through it. The three existing principle steps are pinned beside it and light up at 0/50/100% progress, each connected to the path by a short glowing tick. Exit: the clean line runs down toward scene 4.

**Scene 4 — First proof: CogniFocus reveal.** The flow line terminates in a containment ring. On entry the ring rotates, splits and blooms open while the CogniFocus panel scales 0.94→1 inside a #64FEDA glow. Panel redesigned: logo, existing description and pills arranged as orbiting chips that settle into a row, existing CTA with full treatment. Existing section heading and copy intact. One-shot, theatrical, then static.

**Scene 5 — The ecosystem.** Camera pulls back: the CogniFocus node shrinks into an orbit map. Core (#0F4C82 ring, #64FEDA pulse) + 4 nodes: CogniFocus lit "Live", three future nodes dim on dashed orbits with slow counter-rotation. The existing four market cards re-set as detail panels beneath the map (existing copy and badges, Future badges in #A5D2F5). Orbit is decorative; all info stays in the text.

**Scene 6 — Finale.** FAQ as clean accordion-styled list (visually; content always in DOM and readable, no JS dependency for text), press card restyled as a lit artifact panel, final CTA panel on a slow-rotating ring background with fragment drift, both existing buttons with full CTA treatment.

---

## 5. Other pages — lighter storytelling chapters

**About — the philosophy journey.** Vertical flow line as the page spine. Hero: sparse fragments, existing copy. The three principle steps (observe/build/measure) become three stations on the spine, line drawing downward between them as each reveals. Outcomes as three lit nodes at the spine's end. FAQ + CTA in finale styling. Calmer: no sticky scrub, reveals only.

**Products — ecosystem map and timeline.** Hero with orbit backdrop. Full-size orbit map: core, CogniFocus lit, fashion/healthcare/robotics dim dashed orbits. Below, a horizon timeline (Now → Exploring → Long-term) built from the existing market copy verbatim. CogniFocus panel gets the ring-reveal treatment.
**Second product placeholder (new content you approved, exact wording):** a subtle card/timeline node after CogniFocus: label "Second product — In development", badge "In development", text "Another CogniElevate product is being shaped under the same principle: finding friction and building systems that remove it." No CTA; neutral "Details coming later." state. Not added to homepage.

**Resources — the knowledge layer.** Hero framed as the ecosystem's knowledge layer (existing copy). Cards become "knowledge nodes" connected by faint lines, hover glow, staggered entry. Existing links untouched.

**Blog — editorial system.** Index: magazine-style cards with date/read-time/tags re-set in the palette, hover lift. Posts: improved reading measure, CSS reading-progress bar, article text untouched.

**Contact — the collaboration portal.** Hero: a port-like ring graphic (open ring with #64FEDA pulse) beside existing copy. Email panel as primary lit node, six topic cards as connected ports with icons. Socials re-set (icons self-hosted). No form.

**Founder — the human chapter.** Photo in a soft ring, story sections on a gentle vertical line, reveals only. Content untouched.

**Privacy — readable only.** Palette inherit, typographic polish, zero motion.

---

## 6. Components and files

New components (presentation only, frozen copy passed in):
`Scene.astro` (depth-stack wrapper: far/mid/near slots), `Reveal.astro`, `SectionHead.astro`, `FlowLine.astro` (tangle→flow SVG, scrub + static variants), `OrbitMap.astro` (full/compact), `ContainmentReveal.astro`, `FrictionField.astro`, `StatCounter.astro`, `CtaPanel.astro`, `FaqList.astro`, `GlowButton.astro` (CTA treatment wrapper), `Fragments.astro` (hero particles).

| File | Change |
|---|---|
| `src/styles/global.css` | Rebuilt: brand tokens, depth/scene utilities, new component styles. Typography scale kept (Inter). |
| `src/styles/motion.css` | New: motion tokens + utilities, reduced-motion gating |
| `src/layouts/BaseLayout.astro` | motion.css link, one inline motion script (~4KB vanilla), theme-color #0A1930 |
| `src/components/` | 12 new components above; Header/Footer restyled, same links |
| All `src/pages/*.astro` | Recomposed into scenes using existing text; copy parity verified by rendered-text diff |
| `public/assets/icons/` | ~14 self-hosted SVGs from the asset library (lucide/heroicons/phosphor, no attribution needed) + 6 social icons (drop jsDelivr hotlink) |

Untouched: `src/data/seo.js`, `astro.config.mjs`, `package.json`, blog article text, robots/CNAME/verification files.

Script budget: one vanilla module, IntersectionObserver + scroll-progress helper + magnetic-button micro-interaction. Exits under reduced motion. No GSAP, no Three.js, no canvas.

---

## 7. Build order (each step shippable)

1. Color system + global.css rebuild + Header/Footer + privacy (palette baseline live sitewide).
2. Motion system + base components (Scene, Reveal, GlowButton, CtaPanel, SectionHead, FaqList).
3. Homepage scenes 1–6.
4. Products (orbit, timeline, placeholder card).
5. About, Resources, Contact.
6. Blog index + post polish, Founder.
7. QA: rendered-text diff vs current site (copy parity proof), schema validation, Lighthouse mobile/desktop vs baseline, keyboard nav, reduced-motion pass, 360/768/1280 breakpoints, link check.

---

## 8. Approval

Say go and I start with step 1, or flag anything above first.
