# Academic website — Ruyi Pan

A lightweight, responsive academic homepage inspired by the minimal academic layout of https://isgibbs.github.io/.

## Local preview

Open `index.html` in a browser, or from this directory run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Before publishing

1. The portrait is included at `assets/portrait.png`; replace it if you want to change your photograph.
2. Add your most recent CV as `assets/Ruyi_Pan_CV.pdf`.
3. Contact email is set to `ruyi.pan@mail.utoronto.ca` in both the navigation and profile links.
4. Verify the bibliographic details, especially the final copula entry (marked as needing verification), and replace Google Scholar search links with paper URLs or DOIs.
5. Edit your personal biography as desired.

## Deploy to GitHub Pages

1. Create a repository named `RuyiPan.github.io` in GitHub (or use another repository for a project subpath).
2. Upload `index.html`, `styles.css`, `main.js`, and the `assets/` directory at the repository root.
3. Open **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/(root)`, and save.
4. Your site will appear at `https://ruyipan.github.io/` if using the suggested repository name.

No build step, dependencies, or package manager required.


## Sections

The homepage includes About, Publications (published research), and Working Papers and Research in Progress (manuscripts under revision and ongoing projects).


Version 7: citations are transcribed from the supplied CV LaTeX: 7 published works and 4 working papers/research-in-progress entries. Publication titles link to DOI pages where available; unpublished preprints link to arXiv. Confirm publication details, CV link and email before deployment.
