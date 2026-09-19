# ldugaduga.github.io

Personal portfolio for **Louie Dugaduga** — WordPress and frontend developer, 18 years of experience. Live at [ldugaduga.github.io](https://ldugaduga.github.io/).

## Stack

Single-page static site, no build step:

- Plain HTML + CSS + vanilla JS (`index.html` for markup and scripts, `assets/style.css` for styles)
- [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- [Phosphor Icons](https://phosphoricons.com/) via CDN
- Google Analytics (gtag.js)

## Structure

```
index.html           # markup and scripts
assets/style.css     # site styles
assets/work/*.jpg    # real screenshots of live client projects, used in "Selected work"
```

## Local preview

No build tools needed. Either open `index.html` directly in a browser, or serve it so relative asset paths resolve correctly:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment

Served directly by GitHub Pages from the `master` branch — push to `master` and the live site updates automatically.

## Content sections

Hero, availability strip, services, process, selected work (linked to live client sites), experience timeline, testimonials (pulled from verified Upwork reviews), and a contact CTA.
