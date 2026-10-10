# AutoFix Workshop: Speed & Accessibility Rescue

Responsive home page for AutoFix Workshop, a local car repair shop. This is Task 1 of a larger project to make the site fast and WCAG AA accessible.

## What is in this repo
- `index.html`, `style.css`, `script.js`: hero, three service cards and a contact footer
- `assets/`: placeholder SVG images
- `eslint.config.js` and `.github/workflows/ci.yml`: linting and CI that runs on every push

## Setup
1. Clone the repo: `git clone https://github.com/Hashim-rajahh/Autofix-workshop.git`
2. Install dev tools: `npm install`
3. Run the linter: `npm run lint`
4. Open `index.html` in your browser (or use the VS Code Live Server extension)

## Live preview
https://Hashim-rajahh.github.io/Autofix-workshop/

## Lighthouse audit (Task 2)

Lighthouse CI audits the live site and runs on every push through GitHub Actions (`.github/workflows/ci.yml`).

### Baseline scores
| Category | Score |
|---|---|
| Performance | 98 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Weakest metric: Speed Index at 3.8 s.

### Reports
- HTML report: `reports/baseline.html`
- JSON report: `reports/baseline.json`
- Test plan for re-running the audit after each change: `TEST_PLAN.md`

### Run the audit locally
1. `npm install`
2. `npx lhci autorun`
3. Open the newest report in `lighthouse-reports/`

The config is in `.lighthouserc.cjs`. After each CI run, the report can also be downloaded from the run's Artifacts section in the Actions tab.


## Image optimisation (Task 3)
- Compressed all images to under 100 KB each (JPG and WebP, in `assets/`)
- Used `<picture>` with a WebP source and a JPG fallback
- Added `loading="lazy"` to the service card images. The hero image loads immediately because it is the first thing visitors see.

| Version | Performance | Report |
|---|---|---|
| Original baseline (SVG icons) | 98 | `reports/baseline.html` |
| Heavy photos (before optimising) | 73 | `reports/before-images.html` |
| After optimisation | 100 | `reports/after-images.html` |

Largest Contentful Paint went from 20.6 s to 1.5 s. The page's image weight went from about 10.8 MB to 154 KB (WEBP versions).

# Accessibility Report (WCAG 2.1 AA)

## Audit method
Lighthouse, axe DevTools and a manual keyboard test.

## Issues found and fixes
| Issue | Fix |
|---|---|
| Yellow focus outline too faint on light backgrounds | Navy outline on light areas, yellow on dark areas |
| No way to skip the menu with a keyboard | Added a skip link |
| No contact form | Added a labelled form with live validation |

## Colour contrast (checked with the WebAIM contrast checker)
- White text on navy: 15.4:1
- White text on hero blue: 11.7:1
- Yellow on navy: 8.5:1
- Button text on yellow: 10.1:1
- Body text on page background: 14.3:1
- Error red on white: 7.3:1
- Form borders on white: 5.5:1 (3:1 needed)
- Focus outlines: navy on light areas 15.4:1, yellow on dark areas 8.5:1 (3:1 needed)

## Keyboard and screen reader
- All links, buttons and fields are reachable with Tab and show a visible outline.
- Form errors are linked with `aria-describedby`, marked with `aria-invalid`, and announced through `aria-live`.

## Scores
## Scores
Lighthouse Accessibility: 100 before, 100 after (`reports/after-accessibility.html`).

The score did not change because the page already passed Lighthouse's automatic checks. The fixes above target things automated tools cannot fully test: focus visibility on light backgrounds, keyboard navigation (skip link), and an accessible form with live validation and announced errors.

## Roadmap
1. Repo and home page (done)
2. Lighthouse baseline audit (done)
3. Image optimisation and lazy loading (done)
4. WCAG AA fixes and live form validation
5. Netlify deployment, before and after report, hand-over docs
