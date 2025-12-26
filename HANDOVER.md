Stone to Sky Website Handover

Overview
- Static HTML site with shared styling in `assets/styles/main.css` and light JS in `assets/scripts/main.js`.
- Core pages: `index.html`, `branding.html`, `artwork.html`, `singing.html`, `work.html`, `about.html`, `contact.html`.
- All forms currently use `mailto:` and can be swapped to a form service when ready.

Adding new work items
1) Add images to `assets/images/`.
2) In `work.html`, add a new `article` with `class="work-item"` and `data-filter-item`.
   - Valid categories: `brand`, `illustration`, `voice`.
   - Use three context lines: Problem, Work, Outcome.
3) If the project should appear on the homepage, add a matching `article` in the Selected Work section of `index.html`.
4) Update the CreativeWork entries in the JSON-LD block in `work.html` if you want search engines to reflect the new project.

Filter behavior
- Filtering is powered by `assets/scripts/main.js`.
- Buttons use `data-filter` values that match `data-filter-item` values on each project.
- Default active filter is set with `aria-pressed="true"` on the button.

Brand Design packages
- Package cards live in `branding.html` under "What I offer".
- Keep the base rate visible and include a flexibility note.

FAQs
- Service pages use `details`/`summary` blocks for FAQs.
- Keep each FAQ as a real question with a direct, plain-language answer.

Remote-first phrasing
- Keep this exact line on all service pages and the footer:
  Working remotely across New Zealand, Australia, and internationally.

Analytics hooks
- Primary CTAs and forms include `data-analytics` attributes.
- Wire these to your analytics tooling as needed.

Sitemap updates
- Update `sitemap.xml` when adding or removing pages.
- Update the `<lastmod>` date when publishing changes.

Redirects
- If you change any URLs, add redirects at the hosting layer and update internal links.
