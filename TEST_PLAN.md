# Test Plan: Lighthouse Re-audits

## Baseline (before any optimisation)
- Performance: 98
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- Largest Contentful Paint: 1.0 s | Total Blocking Time: 10 ms | Layout Shift: 0 | Speed Index: 3.8 s (the weakest metric)
- Report files: `reports/baseline.html` and `reports/baseline.json`

## How the audit is re-run after each optimisation
1. Push the change to GitHub and wait for the GitHub Pages deploy to finish.
2. GitHub Actions runs Lighthouse CI automatically on every push, and the report can be downloaded from the run's Artifacts section.
3. To check locally, run `npx lhci autorun` and open the newest report in `lighthouse-reports/`.
4. Compare the four scores and the Speed Index with the baseline above.
5. Save the report in `reports/` with a name such as `after-images.html`.
6. Write down what improved and what got worse.

## Checks after every change
- The page still looks correct on phone, tablet and desktop widths.
- The lint step in CI stays green.


"Re-ran the audit after image optimisation; report in reports/after-images.html."