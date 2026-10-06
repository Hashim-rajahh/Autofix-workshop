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


## Roadmap
1. Repo and home page (this task)
2. Lighthouse baseline audit
3. Image optimisation and lazy loading
4. WCAG AA fixes and live form validation
5. Netlify deployment, before and after report, hand-over docs
