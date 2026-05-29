# RE_DS — ReBank Design System

A token-based design system for a mobile banking product, built to bridge design and code through a structured token pipeline, automated build, and Storybook documentation.

> The original product is under NDA. This repository reflects the real architecture and process, with product details adapted for public sharing.

---

## Stack

| Layer | Tool |
|---|---|
| Design | Figma + Figma Tokens |
| Token pipeline | Style Dictionary v5 |
| Documentation | Storybook 10 + MDX |
| Language | JavaScript / CSS |
| Build | Vite |

---

## Token architecture

Tokens are structured in three layers, following the global → semantic → component pattern:

```
Primitives/       → raw values: colors, spacing, radius, type scale
Semantic/         → role-based aliases: background, text, border, interactive
Typography/       → font families, sizes, weights, line heights
global.json       → shared base
$themes.json      → light / dark theme configuration
```

Style Dictionary compiles these JSON sources into CSS custom properties and JS variables, ready to consume in any frontend project.

```
npm run build     → compiles tokens → build/
npm run watch     → rebuilds on file change
```

---

## Storybook

Components are documented in `stories/` using MDX and React. Storybook is configured with `@storybook/addon-docs` for rich documentation pages.

```bash
npm run storybook        # dev server at localhost:6006
npm run build-storybook  # static build
```

---

## Repository structure

```
.storybook/                 Storybook config
Primitives/                 Primitive tokens (color, spacing, radius)
Semantic/                   Semantic tokens (roles and states)
Typography/                 Typography tokens
build/                      Compiled CSS/JS output
stories/                    Component stories and docs (MDX)
$themes.json                Theme definitions
$metadata.json              Token metadata
style-dictionary.config.js  Build config
package.json
```

---

## Product screens

Built on top of this system, the following screen flows were designed and implemented:

- **Auth** — sign in and registration
- **Onboarding** — guided product walkthrough
- **KYC flow** — multi-step registration: face scan, passport and ID card verification
- **Home** — main banking dashboard

---

## Design decisions

**Why three token layers?** Primitives hold raw values with no semantic meaning. Semantic tokens map those values to intent — `color.background.primary`, `color.text.danger` — so components stay decoupled from specific colors. This makes theming and future rebrand straightforward.

**Why Style Dictionary?** It treats tokens as a build artifact, not a manual handoff. Any change in JSON propagates automatically to CSS and JS output, keeping design and code in sync without copying values by hand.

---

## Author

Designed and built by [@risenve](https://github.com/risenve)
