# DESIGN.md (PROPOSED - awaiting approval) - Earthbound Editorial Collage

Direction one-liner: Stone to Sky is an artist's exhibition that happens to be a website - nature photography sets the atmosphere, Brooke's artwork carries identity, editorial typography holds it all upright, and gentle scroll-linked movement makes the layers feel like one world.

Role of each reference (do not average them - each governs one layer):
- Danu Anima - artistic identity: one cohesive world where nature, art, self and story belong together.
- Midsummer - restraint: spacious editorial composition, expressive type, delicate ornament.
- Ava Coach - image composition: photography and artwork composed *together*, overlapping layers, tactile edges.
- Aurora Healer - atmosphere: soft earthy colour, analogue grain, gentle photographic treatment.
- Laura Dawn - movement: scroll-linked layering that tells the story.

The five are complementary because they govern different layers. Averaging them is what produces the wellness template; we assign them jobs instead.

## Deliberate refusals (what we are NOT doing)
1. No uniform specimen-mount cards site-wide. The mount grid made every offering the same rectangle - it reads as a features table, and Assessment A measured it as the source of the 11 cramped-padding findings too. Cards survive only where they are genuinely a list (services tiers, contact intents).
2. No all-caps tracked eyebrows as section signalling (detector: hero-eyebrow-chip x5; our own brief already banned uppercase labels). Exhibition numbering ("No. 01") replaces them as the editorial device.
3. No mechanical die-cut-everything. Sticker treatment is a technique chosen per piece (see Artwork treatment), not a coat of paint.
4. No decorative-only artwork. The hero and exhibition scenes use FINISHED work (the never-deployed poster series), not watermark-faint cut-outs. Measured today: deployed sticker inks are 1.1-5.3% coverage, mean luminance ~149-183 on 238 paper - literally ghosting.
5. No new pages, no frameworks, no forms, no stock imagery, no invented scans. History contains zero genuine print scans (the "paper pencil study" is a digital fake - it stays archived).
6. No motion for motion's sake: no idle loops, no parallax on sections the eye isn't moving between, full prefers-reduced-motion respect (already structural).
7. Nothing deploys from this document. It is the contract the implementation stage must satisfy.

## Typography
Keep Brooke's stack - Young Serif (display) + Karla (body). The type family is not the problem; the *scale discipline* is.
- Display sizes become editorially shameless: hero 6.5-9vw (was ~3.4rem max), pull statements 3-3.6vw/1.25, section titles 2.5-3vw. One oversized serif moment per scroll act.
- Display leading tight (0.98-1.05); body leading relaxed (1.6-1.7). Detector's tight-leading flags came from mid-size serif at 1.12-1.27 - that size class stops existing: type is either display or body.
- Structure is carried by rules and numbering, not weight tricks: Karla 11-12px, letterspaced .14em, sentence case, madder for numbers only.
- The lowercase madder italic accent word (currently *living*) stays - it is the hand-set quirk - but appears at most once per page.

## Colour
Foundation unchanged (paper #f4eee2 / mount #fcf9f2 / ink #33281d / ink-soft #6a5947 / rule #d9c9ae / madder #a4442e action-only / sage #55613f labels, AA-safe).
New: tonal bands come from PHOTOGRAPHY, not flat fills. The page alternates paper -> photographic atmosphere (treated, banded) -> paper. One deep band: bark #1d1a14 for the Voice act (with the gold Matariki artwork, which is already gold-on-black). No third brand hue, no gradients as brand chrome. Photography-derived accents only ever appear inside photographs.

## Composition (the actual layout grammar)
- 12-col editorial grid, asymmetric splits only: 5/7, 4/8, 7/5. No centered 3-up card rows outside the pricing ledger.
- Images anchor and bleed: every hero/exhibition image touches two viewport edges (bleed right or full-width strip), never floats symmetrically in a padded container.
- Gallery-label pattern (from exhibition grammar): number, title, one-line medium/meta, one action. Used in place of card footers wherever artwork is shown as work.
- Whitespace is choreographed into acts: RICH (full-bleed atmosphere) -> OPEN (one pull statement, generous air) -> RICH (exhibition wall) -> TABLE (collage density) -> BAND (voice, dark) -> OPEN (invitation). Dense moments are earned by the open ones around them (Midsummer restraint does the editing).
- Overlap rule (Ava Coach): artwork layers may cross photography edges by 6-14% of the frame; the artwork carries its shadow, the photo never overlays art.

## Texture
- Grain veil: up from the invisible 0.055 to 0.075-0.09 with a 240px tile (two-layer turbulence). If a visitor can't notice it on an OLED phone, it isn't done.
- Photographic grade (Aurora Healer): hero-class photos get lifted blacks + warmth, implemented as `filter: contrast(.96) brightness(1.02) sepia(.05)` + the grain veil above them. Analogue feel, no preset crush.
- Paper edge: sections that sit on paper get a 1px `--rule-soft` hairline where they meet banded scenes, so pages feel like stacked prints, not one infinite background.

## Artwork treatment - three modes, chosen per piece
| Mode | What it looks like | Used for |
|---|---|---|
| Die-cut | thin white edge (6-9px), tight contact shadow (2-3px @38% + soft fall), rotated 3-6deg, transparent webp | the three cut-outs that already work (flower, deer, plant) in About/404/scene accents ONLY |
| Full-bleed plate | the piece IS the atmosphere or wall; crop to viewport, no frame, label card over treated dark/soft zone | the seven never-deployed posters (NAKED EARTH, ANCIENT MOTHER, SILENT HUM, BEAUTY WAY, creative_6...), art-matariki for the Voice band |
| Mounted work | finished brand artifacts shown whole at real-world scale on paper/mount, small gallery label, no cut-out | brand case tiles (Bee & Ocean labels spread, Mumma set at proper 2551px sources, Homegrown, River Moon, Red Thread), cacao submark linework (7972px master - it deserves size) |
No mode mixes with another on the same piece. Fix upstream first: logo-stone-to-sky.png is pure-black strokes (needs a stroke-faithful re-export incl. a light variant), work-cacao-dark.jpg carries Canva "YOUR BRAND" text (replace from the clean master or drop).

## Movement (Laura Dawn layer)
- Parallax PAIRS, not wallpaper drift: inside one frame, photographic layer moves at depth 0.04-0.08, artwork layer at 0.12-0.18 - art appears to hover above the atmosphere. Scene 1: photo 0.06 / plate 0.14. Exhibition wall: image 0.08 / label card static (the still anchor).
- Sticky-label against panning image wall for the exhibition act (CSS position: sticky; no JS).
- Reveals become a 12-14px rise-and-settle (already fail-safed visible-by-default). Entry once; never on scroll-back.
- The scroll handler stays one passive listener + rAF, gate on prefers-reduced-motion, no global scroll-behavior:smooth (Stage 2 branch proved why).
- Budget: at most 3 moving systems on the homepage. If a motion doesn't connect two layers, it dies.

## Homepage storyboard (7 scenes - mocks captured at :8124, desktop + mobile)
S1 Opening: full-bleed bush-light PHOTOGRAPH (GAP - see list; mock uses leaf-shadow plate stand-in, clearly labelled) washed under paper; oversized serif left ("A studio made of earth, ink and *voice*."); NAKED EARTH plate die-mate lower right (full plate, mounted - not stickered), drifts 0.14 against photo 0.06. Mobile: photo becomes top 52vh band, type below, plate overlaps the seam at -4.5deg.
S2 Statement: paper, 5/7 split, one pull quote, sticker-flower crosses the column edge (die-cut here IS right - it's a marginal mark, not the work itself). Sticky while text passes.
S3 Exhibition wall: half-viewport photographic wall (framed pieces, dapple; real asset: a commissioned studio-wall shot - mock uses art-cycle), gallery label card static left, wall parallax 0.08. First finished-work moment within ~1.5 scrolls.
S4 The table: five finished pieces scattered at true scales (labels spread landscape, Mumma rust poster, Red Thread white, Homegrown green, cacao gold), depths .05/.12/.18; tap enlarges in place (docs/portfolio-tile-ux.md), mailto lives inside the overlay. Mobile keeps 4 pieces, tighter scatter, caption drops to a heading.
S5 Voice band: bark-dark, gold art-matariki bled right, text left; the site's only dark act.
S6 Process: open paper, four seasons as numbered horizontal timeline, one small mounted botanical per season - text earns air, no cards.
S7 Invitation: centered, serif, mailto, sticker-plant corner die-cut (accent use).
Clarity guardrail (priority 6): above the fold = finished artwork + plain-English offering line + one CTA. Everything else is atmosphere serving that.

## Asset decisions (selective - 131 recovered, 121 unique, ~40 chosen)
Reuse from live site: brand artifacts at masters (Mumma set 5x upgrade), sticker trio (accents), og-image, art-matariki (S5), beeocean labels spread, homegrown poster, redthread.
Recovered and newly deployed: stone_to_sky_creative_1 (NAKED EARTH - S1 plate), Stone_to_Sky_2 (ANCIENT MOTHER - S3 wall member), creative_2 (BEAUTY WAY - S6 partner), creative_design (SILENT HUM - contact band background option), creative_6 (S3 alternates), background_wood (texture anchor for footer/S6), cacao_logo_brand_submark (S4 gold piece at real scale), flower_grainy_background (photographic parent of art-flower - uncropped), the nine named palette boards (S3/S6 marginalia and the services page rework later).
Rejected on quality/relevance (not just archive-only): psychedelic_vision (off-direction), tile_grey, sandybeach (superseded), spiral_of_life (fake-scan), all YOUR-BRAND cacao exports, all 50+ logo-lockup variants except the two marks, both broken logo PNGs pending re-export, the stock body-tiles inside forest palette (retouch or drop the tile).

## Photography gap - what Brooke must provide (or veto)
1. Brooke working, hands + materials, overhead and side (pencil/ink/paper) - the studio-table truth.
2. One portrait in natural light - or an explicit "no face" direction choice (a real artist site can run hands-only; the audit's "the person is never seen" line still lands either way).
3. Studio-table flatlay: tools, works-in-progress, a cup - atmosphere anchor for S2 or S6.
4. 2-3 Aotearoa nature plates she has shot or licensed (fern understory, manuka light, mist/water) - hero + band atmosphere. Nothing stock-photographic; her eye or nothing.
5. Logo re-export from vector (strokes, dark+light variants).
6. Optional: real packaging photos for one flagship client (Bee & Ocean or Homegrown) to give S3 a true case object.

## Approval
Sign-off items: (a) direction + refusals as written; (b) storyboard scenes/order; (c) the photography gap list - especially item 2 (face or no face is Brooke's identity call); (d) confirmation that Stage 3 may implement scene by scene against this contract, homepage first.
