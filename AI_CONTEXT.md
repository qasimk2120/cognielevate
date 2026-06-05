# CogniElevate Website — AI Agent Context

> Canonical brain for this repo.
> All AI tool config files reference this file.
> Note: This repo will be renamed to `cogni-elevate-website` — update references when that happens.

---

## What This Repo Is

The main company/brand website for **CogniElevate** — the parent brand behind CogniFocus and future products.
Live at: `https://cognielevate.co`
Output: fully static (Astro `output: "static"`)

**CogniElevate ≠ CogniFocus.**
- CogniElevate is the company / brand umbrella
- CogniFocus is the focus app product (separate repo at `../cognifocus-landingpage` + `../cognifocus-app`)
- This site represents CogniElevate as a company — who we are, what we build, our story, blog, etc.

---

## Current State

Minimal. Astro 4 + sitemap only. Static output, no content yet.

This is early-stage and will grow into a full company website.

---

## Planned Direction

- Full company website with about, products, blog, contact
- Blog (likely similar CMS setup to CogniFocus landing page)
- CogniFocus product showcase + links
- Company story / founder narrative
- Future products page

---

## Tech Stack

- **Framework:** Astro 4
- **Output:** Static — `output: "static"`, `trailingSlash: "always"`
- **Site:** `https://cognielevate.co`
- **SEO:** astro-sitemap

**Commands:**
```
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview built output
```

**When blog/CMS is added**, model it after `../cognifocus-landingpage/`:
- Add `astro-robots-txt`, `astro-llms-md`
- Use Firebase + Cloud Functions for CMS content (same pattern as CogniFocus backend)
- Add `sync:cms-content` script

---

## Brand Context

CogniElevate is the company. The tone and positioning for this site:
- Founder-led, authentic, not corporate
- Builds tools that fight distraction and improve focus
- Products are character-driven, emotionally aware, behavioral — not generic SaaS
- The story matters: why we build this, who it's for

**Do not** describe CogniElevate as a generic tech company or productivity SaaS.
**Do** lean into the mission: building focus tools that actually react to human behavior.

---

## Relationship to Other Repos

| Repo | Relationship |
|---|---|
| `../cognifocus-app/` | The CogniFocus Android app |
| `../cognifocus-landingpage/` | CogniFocus marketing site (`cognifocus.app`) — model for blog/CMS patterns |
| `../cognifocus-backend/` | Cloud Functions for CogniFocus landing page — reuse patterns for CogniElevate backend |
| `../cognifocus-docs/` | **CogniFocus-specific** docs — do NOT import these as CogniElevate brand docs |

---

## Non-Negotiables

- Static output only — no SSR adapters unless explicitly decided
- All new pages need `<title>`, canonical, meta description, OG tags from day one
- `trailingSlash: "always"` — preserve this in all routes
- Never commit `.env` files or tokens
- CogniElevate tone: founder-authentic, mission-driven — never generic tech company copy
- When blog is added: do not hardcode content, use CMS pattern

---

## Note on Rename

When this repo is renamed to `cogni-elevate-website`:
1. Update the `name` in `package.json`
2. Update any references in `AI_CONTEXT.md`, wrapper files, and CI configs
3. Update the path note at the top of this file
