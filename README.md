# SwimTrace App Store Review Website

This repository contains the static website used for SwimTrace's App Store review metadata.

SwimTrace is a swimming app for pool swimmers, built around two themes: **swim performance** (net pace, SWOLF, distance, per-stroke splits, personal bests, progress trends) and **recovery** (readiness, HRV, sleep, load). All data is processed on device.

## Structure

- `site/`: static files deployed by Cloudflare Pages
- `site/index.html`: marketing URL — landing page with FAQ (`#faq`) and a support anchor (`#support`)
- `site/support.html`: support URL
- `site/privacy.html`: privacy policy URL
- `site/styles.css`: design tokens (green primary + swimming-blue accent) and all layout styles
- `site/script.js`: language toggle (EN/中文) and scroll-reveal

## Deploy With Cloudflare Pages

Use Git integration with GitHub.

- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `site`

## Before Submitting To App Review

These are placeholders to replace before submitting to Apple:

- **App name**: `SwimTrace` (used consistently across all pages; the final name is undecided)
- **Support email**: `support@swimtrace.app`
- **Privacy "Last updated" date**: top of `site/privacy.html`
- **Screenshots**: real app screenshots are wired in (`site/swim-detail.png`, `site/swim-activity.png`, `site/swim-today.png`). Swap them for newer captures (PNG, ~1206×2622) any time

The privacy policy is a template — verify every statement against the app's actual behavior before submitting.

App Store Connect mapping:

- Marketing URL: `/`
- Support URL: `/support.html` (or the homepage `#support` anchor)
- Privacy Policy URL: `/privacy.html`
