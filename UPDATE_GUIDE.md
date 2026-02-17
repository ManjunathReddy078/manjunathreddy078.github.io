# Portfolio Update Guide

This website is a static GitHub Pages project using HTML, CSS, and JavaScript.

## Files You Will Edit Most Often
- `index.html` -> Home page, summary, education, skills, contact links
- `projects.html` -> Project details and statuses
- `certificates.html` -> Top 6 and full certificates list
- `style.css` -> Theme, layout, colors, responsiveness
- `script.js` -> Certificates "View All" button behavior

## Adding a New Certificate
1. Open `certificates.html`
2. Add it to one category inside `#allCertificates`
3. If it should be in top 6, add/update one card in "Top 6 Highlights"

## Updating Resume
1. Replace file: `assets/docs/resume_latest.pdf`
2. Keep the same filename so existing link continues to work

## Updating Projects
1. Open `projects.html`
2. Update project title, description, tech, status, and links

## Local Preview
Run in project folder:

```powershell
python -m http.server 5500
```
Open:
- `http://localhost:5500/index.html`

## Push to GitHub
```powershell
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Pages will publish updates automatically from your configured branch.
