# Portfolio tiles: mailto behaviour - recommendation (defers to design approval)

Status: documentation only. No code change in this pass, per Stage 2 instruction to defer portfolio restructuring until the art direction is approved.

## The finding (verified in source)
Every work tile on `work.html` (six brand cards, illustration shelf) is an `<a class="mount-link" href="mailto:...">`. The tiles render as portfolio images - the strongest "click to see" affordance on the web - but activate the visitor's mail client at the exact moment of highest interest. Assessment A's personas both broke here: a hesitant first-timer experiences it as an irreversible wrong turn; a stress-tester sees behaviour contradict the affordance. On mobile it is worse still: the mail sheet covers the page the visitor was reading. It is also the site's #1 conversion leak - unqualified visitors bounce rather than write, and the click itself feels like a trick.

`index.html` compounds it lightly: the homepage work strip tiles are also mailto anchors.

## Recommended UX (Option B)
**A: status quo** - rejected; affordance betrayal at peak interest.
**C: link to individual case-study pages** - rejected for now; contradicts the approved 4-page architecture and Brooke's "studies travel by email" stance.

**B: inline lightbox preview, mailto demoted to the overlay's single CTA.**
- Click (or Enter/Space on keyboard focus) opens a lightweight overlay - plain CSS `:target` or ~35 lines of vanilla JS, no framework, consistent with the no-framework constraint.
- The overlay enlarges the piece's existing 2-3 images (palette/label shots already in `assets/img/`), plus one line of context (client, year, what Brooke made).
- The overlay's only action: `Ask Brooke for the full walk-through` - a prefilled mailto that now arrives *qualified*: the visitor has seen the work and asked deliberately.
- `Esc`, backdrop tap and a visible close button exit; focus is trapped and returned (the existing menu code already proves the pattern); reduced-motion disables the fade.
- Tiles keep working without JS: `:target` makes it degrade to the same overlay via URL fragment.
- Honest benefit both ways: Brooke still gatekeeps full case studies by design (that is her editorial stance, not a shortfall), but the gate now sits *after* a look rather than *instead of* one.

Sketch of markup shape (for the build stage, not applied):

```html
<a class="mount-link" href="#case-mumma"> ... tile ... </a>
<div id="case-mumma" class="case-overlay" role="dialog" aria-label="Mumma Marama preview">
  <a class="case-close" href="#work-top" aria-label="Close">Close</a>
  <img src="/assets/img/work-mumma-brand.jpg" ... />
  <img src="/assets/img/work-mumma-flower.jpg" ... />  <!-- currently unused asset -->
  <p>Brand identity for a family wellness practice. Logo, palette, botanical mark.</p>
  <a class="btn" href="mailto:...Case%20study%3A%20Mumma%20Marama">Ask Brooke for the full walk-through</a>
</div>
```

Effort estimate: one HTML pattern + ~40 CSS lines + optional 35-line JS upgrade; applies identically to brand grid, illustration shelf, and (smaller) homepage strip.

## Why it fits the direction
An exhibition wall does not hand you the artist's phone number when you lean in - it shows the work at eye level, then invites the conversation. The overlay is that lean-in.
