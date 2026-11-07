# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no build step, hosted on GitHub Pages (CNAME stonetosky.nz). This is binding: no frameworks, no server-side code (GitHub Pages cannot run any). Deploy = push to main.

## Users

Small business owners, community organisers, and earth-based or soul-led project leads (mostly Aotearoa NZ and Australia, plus international) who need brand design first, and illustration or facilitated voice/ceremony work alongside it. They arrive evaluating a person, not a firm: they need to feel Brooke's sensibility and judge whether her handmade, nature-rooted aesthetic fits their project.

## Product Purpose

Brooke Hayley's studio site for Stone to Sky: present her services (Brand Design leading; Illustration and Voice & Facilitation alongside), show her work, and convert qualified enquiries to email contact. Success = an enquiring visitor reaches her by email easily, with a felt sense of the studio before writing.

## Positioning

A one-person studio rooted in the living world: brand design that starts from story and place, offered by the same hands that draw botanical illustration and hold singing/facilitation circles. Competitors sell brand packages; Stone to Sky is the artist herself taking the project. Working remotely, based in Otautahi/Christchurch.

## Operating Context

Visitors browse portfolio imagery, read package/pricing tiers (transparent NZD prices), then email brooke@stonetosky.nz. Enquiries are qualified by service interest and budget range. Instagram (@stone.to.sky) and Facebook are the social proof channels. Brooke's artwork (illustrations, logos, packaging, brand systems) exists as source files; case studies are shared on request by email, not published.

## Capabilities and Constraints

- GitHub Pages static hosting only: no form backend without a third-party endpoint; the previous `mailto:` POST form was verified broken in Chrome/Edge (audit P0-2). Enquiry capture is an open decision (Formspree/Getform-style endpoint vs a designed direct-email path).
- Audit-mandated constraints carried into the rebuild: per-page images must be re-exported web-sized (old pages transferred 10-30 MB); images carry width/height; content must not depend on JS to become visible; prefers-reduced-motion honoured; axe-clean and AA contrast preserved.
- Terminology: Brand Design (leading service), Illustration, Voice & Facilitation. Packages are transparent: Logo Design from $450, Essential Brand Design from $950, Social Media Suite from $1,800, timelines 2-8 weeks, payment plans available.
- Open decision (unresolved, do not invent): final page set. Josh's confirmed direction (2026-11-07): reduce page count, condense and streamline; Journal was a "coming soon" dead end and is removed unless revived with real content.

## Brand Commitments

- Logo mark and STONE TO SKY wordmark are Brooke's own: keep as-is (confirmed 2026-11-07).
- Voice: calm, warm, plain-spoken; copy on the current site is judged a strength and carries over, tightened where the audit flagged it; plain NZ English, no em or en dashes.
- Client-pinned visual references (binding brief, softening not required): soft earthy vibe, visible grain in photos/ground, sticker-style treatment using Brooke's own artwork as stickers, minimal-but-soft, nature imagery balanced with artwork, scroll-linked motion (parallax/interactive pieces). References: aurora-healer.squarespace.com/services, lauradawn.co/work-with-me, danu-anima.com, tambourine-indigo squarespace, ava-coach.squarespace.com.
- Confirmed scope decisions (2026-11-07): reduced/streamlined page set; code-first build path; keep logo.

## Evidence on Hand

- Real artwork and project imagery in `assets/images/` (Bee & Ocean branding, Cacao branding, Mumma Marama, Homegrown templates, River Moon, cycle-of-seasons and deer/floral illustrations, lunar maps). Must be re-exported web-sized before use.
- Real package definitions and prices on branding.html; real FAQ content (11 items); real bio copy and location (Otautahi/Christchurch).
- Absences that must not be fabricated: no testimonials, no published case studies ("shared on request" only), no client logos, no awards, no follower counts.

## Product Principles

1. The artist is the product: every surface should feel touched by Brooke's hand, not templated.
2. Nature imagery and artwork carry the page; words point at them.
3. Honest and calm over salesy: transparent prices, real scope, no invented proof.
4. Light on the device: a handmade site should load like one.
5. One clear route in, one clear route out: artwork in, email enquiry out.

## Accessibility & Inclusion

WCAG 2.1 AA: contrast (measured passing on the old site, keep it), keyboard operability, reduced-motion support, semantic landmarks, real heading order (the old contact page skipped h2).
