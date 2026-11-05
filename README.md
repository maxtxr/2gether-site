# 2Gether - HCI project site

A small React + Vite site for tracking our HCI project: **2Gether**, a mobile
app for finding, creating and joining local sports events with people at a
similar skill level, plus a lightweight social and gamification layer
(achievements, streaks, shared photos).

> The name is still under discussion. To rebrand, edit `src/data/site.js`  -
> every page, the header, the footer and the page title follow it. The logo is
> `src/assets/logo.png`, rendered by `src/components/Logo.jsx` and used as the
> favicon.

It has a page for each of the 6 project stages, a product brief (with the
competitive landscape) and a page for individual assignments.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Project structure

```bash
src/
  components/
    Header.jsx         green header, four text links
    Footer.jsx         green footer, lists the six stages
    Layout.jsx         page shell + skip link
    Logo.jsx           renders assets/logo.png (ring variant for the green blocks)
    Icons.jsx          inline icon set (no icon library)
    PhoneMockup.jsx    decorative app screen mock-up in the hero
    StageTimeline.jsx  the six stages as cards linking to their pages
  assets/
    logo.png        project logo (header, footer, phone mock-up, favicon)
  utils/
    scroll.js          scrolls to a section by id (the hash router owns the URL hash)
  pages/          Home, Project, Stages, Stage (dynamic), Assignments, NotFound
  data/
    site.js        project name, tagline, one-liner - rebrand here
    product.js     problem, target users and roles, goals, feature pillars
    landscape.js   competing apps + how we differ
    stages.js      content for the 6 stages - edit this to update stage pages
    members.js     one entry per group member (name, number, assignments + report link)
  index.css      all styling (paper background, tokens at the top)
```

To change the name, stage content, product brief, competitors or assignments,
you only need to edit the files in `src/data/`  -  the pages are generated
from that data.

## Routes

| Route             | Page                                                                     |
| ----------------- | ------------------------------------------------------------------------ |
| `/`               | Overview: hero, the six stage cards, product goals, assignment progress  |
| `/project`        | The product: problem, target users, goal, competitive analysis, features |
| `/stages`         | All six stages as cards, straight to each stage page                     |
| `/stages/:slug`   | One page per stage: objectives, deliverables, report                     |
| `/assignments`    | Individual assignments per group member, each with its own report        |

The competitive landscape used to be its own page. It is now a section on
`/project`, so everything about the product lives in one place.

## Deploying to GitHub Pages

**Option A  -  GitHub Actions (recommended, already set up):**

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings &rarr; Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main`. The included workflow
   (`.github/workflows/deploy.yml`) builds the site and deploys it
   automatically. Your site will be live at
   `https://<username>.github.io/<repo-name>/`.

**Option B  -  manual deploy with `gh-pages`:**

```bash
npm install
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch. Then in
**Settings &rarr; Pages**, set **Source** to the `gh-pages` branch.

> The site uses a hash-based router (`/#/project`, `/#/stages/...`) and a
> relative Vite `base`, so it works out of the box under any repo name with no
> extra configuration on GitHub Pages.

## Design notes

- **Paper, not white**: the page is a light neutral (`#F4F2EC`) with white cards,
  the header and footer are forest green (`#0E3B2A`), and orange (`#DC4E12`) is
  reserved for emphasis - orange used as text or as a button fill takes the
  darker step (`#B03C0B`). Sections are separated by hairline rules and
  whitespace, not by background colour. Every text pair clears WCAG AA: white on
  green 12.5:1, muted white on green 7.6:1, orange on paper 5.4:1, body grey on
  paper 5.6:1.
- **Typography** is a single family, `Inter`, with `JetBrains Mono` for the small
  labels and the stage numbers. Weight 600 and tight tracking instead of heavy
  uppercase display type.
- **The header is four links** (Home, The product, Stages, Assignments). It does
  not browse the individual stages, and there is no dropdown anywhere; the
  footer lists all six instead.
- **The six stages are cards** in a three-column grid on the home page and on
  `/stages`, each one a single link to its own page. No tabs, no carousel.
- **The project is individual**, so the assignments page lists each group
  member with the same assignment cards. Every card carries its own report
  link (a Google Drive URL, or "not published yet") - edit `src/data/members.js`.
- **Every stage page has its own report**, plus objectives and deliverables. The
  report is a single `report` field in `src/data/stages.js` holding the Google
  Drive URL of that stage's report - `null` renders a "not written yet" note, so
  the section is always there as the work lands.
- **The hero shows a phone mock-up** of the app screen, drawn in HTML/CSS (no
  image) and marked `aria-hidden`, since it is decorative.
- **Motion is minimal**: short colour transitions on hover and focus only, no
  keyframes, and everything collapses under `prefers-reduced-motion`.

## Tech

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [react-router-dom](https://reactrouter.com/) (`HashRouter`)
- Plain CSS, no UI framework
