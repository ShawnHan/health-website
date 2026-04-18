# Recova App Store Review Website

This repository contains the static website used for Recova's App Store review metadata.

## Structure

- `site/`: static files deployed by Cloudflare Pages
- `site/index.html`: marketing URL
- `site/support.html`: support URL
- `site/privacy.html`: privacy policy URL

## Deploy With Cloudflare Pages

Use Git integration with GitHub.

- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `site`

## Before Submitting To App Review

Replace every `SUPPORT_EMAIL_PLACEHOLDER` value with your real support email before you submit to Apple.

App Store Connect mapping:

- Marketing URL: `/`
- Support URL: `/support.html`
- Privacy Policy URL: `/privacy.html`
