# ldugaduga.github.io

Personal portfolio for **Louie Dugaduga** — WordPress and frontend developer, 18 years of experience. Live at [ldugaduga.github.io](https://ldugaduga.github.io/).

## Stack

Single-page static site, no build step:

- Plain HTML + CSS + vanilla JS
- [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- [Phosphor Icons](https://phosphoricons.com/) via CDN
- Google Analytics (gtag.js)

## Structure

```
index.html            # markup only
assets/css/style.css  # all page styles
assets/js/main.js     # mobile nav, scroll reveals, hero counter animation
assets/work/*.jpg     # real screenshots of live client projects, used in "Selected work"
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

## Legacy files

The root-level `style.css` and `img/` are leftovers from the previous version of the site (not the same as `assets/css/style.css`) and are no longer referenced by `index.html`. Safe to remove in a future cleanup pass.
