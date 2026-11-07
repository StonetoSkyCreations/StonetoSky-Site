# DESIGN.md (PROPOSED - awaiting approval) - Earthbound Editorial Collage

Direction one-liner: Stone to Sky is an artist's exhibition that happens to be a website - nature photography sets the atmosphere, Brooke's artwork carries identity, editorial typography holds it all upright, and gentle scroll-linked movement makes the layers feel like one world.

Role of each reference (do not average them - each governs one layer):
- Danu Anima - artistic identity: one cohesive world where nature, art, self and story belong together.
- Midsummer - restraint: spacious editorial composition, expressive type, delicate ornament.
- Ava Coach - image composition: photography and artwork composed *together*, overlapping layers, tactile edges.
- Aurora Healer - atmosphere: soft earthy colour, analogue grain, gentle photographic treatment.
- Laura Dawn - movement: scroll-linked layering that tells the story.

The five are complementary because they govern different layers. Averaging them is what produces the wellness template; we assign them jobs instead.
Reference status (live-probed today): danu-anima.com and lauradawn.co inspected hands-on; aurora-healer and ava-coach previews are 401-gated (only their gate cards render - their own design proves the point that the identity layer stays ungated here); the Tambourine/Midsummer preview URL is now DEAD (TLS error; the subdomain shows a "Coming Soon" placeholder) - Brooke should supply a fresh link or a screenshot, and until then Midsummer's restraint layer is honoured from her written intent. Full evidence: /opt/data/cache/scratch/sts-audit/REF-FINDINGS.md.

## Deliberate refusals (what we are NOT doing)
1. No uniform specimen-mount cards site-wide. The mount grid made every offering the same rectangle - it reads as a features table, and Assessment A measured it as the source of the 11 cramped-padding findings too. Cards survive only where they are genuinely a list (services tiers, contact intents).
2. No all-caps tracked eyebrows as section signalling (detector: hero-eyebrow-chip x5; our own brief already banned uppercase labels). Exhibition numbering ("No. 01") replaces them as the editorial device.
3. No collage, no scrapbook, no scattered rectangles (Brooke's v1 rejection: "looks like scattered photographs"). Organic artwork integrates as silhouettes in page layers (see Artwork treatment); finished pieces are held straight and whole. And no decorative-only artwork: the hero-class imagery is FINISHED work (the never-deployed poster series among the exhibition plates), not watermark-faint fragments - deployed sticker inks measured 2.8-14.6% coverage at mean luminance ~149-183 on 238 paper, which is why v1 read as ghosts; pressed water-layers are the one sanctioned low-opacity use, and they read as texture, not as broken images.
4. No new pages, no frameworks, no forms, no stock imagery, no invented scans. History contains zero genuine print scans (the "paper pencil study" is a digital fake - it stays archived).
5. No motion for motion's sake: no idle loops, no parallax on sections the eye isn't moving between, full prefers-reduced-motion respect (already structural).
6. Nothing deploys from this document. It is the contract the implementation stage must satisfy.

## Typography (corrected against REF-FINDINGS.md: references keep type quiet and let the artwork carry drama)
Keep Brooke's stack - Young Serif (display) + Karla (body). The problem was scale *undisciplined*, not scale itself: observed references run small, calm type with the imagery as the drama.
- Display: hero max ~5.5-6.5vw (down from a first-draft 9vw), section titles ~2.4-3vw. One confident oversized line per scroll act, never two. Drama is ceded to the full-bleed plates.
- Display leading tight (0.98-1.05); body leading relaxed (1.6-1.7). Detector's tight-leading flags came from mid-size serif at 1.12-1.27 - that size class stops existing: type is either display or body.
- Structure is carried by rules, numbering and space, not weight tricks: Karla 11-12px, letterspaced .14em, sentence case, madder for numbers only.
- Exactly ONE feeling-face moment per page (the Danu/Laura pattern: quiet workhorse + one expressive face - here, Young Serif IS the feeling face; Karla never performs).
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
- Section transitions use the observed reference grammar: ART-STRIP DIVIDERS (a thin band of Brooke's linework between acts), held theme bands (danu alternates white/black worlds - our bark band follows this), and an accent wash behind text (Laura Dawn's pink halo) instead of generic hairlines. One hairline style remains where a mount meets paper.
- Decoration is anchored to artwork, never CSS ornament (cross-reference pattern 4): no gradient rules, no generated flourishes - if it decorates, it came from Brooke's hand.

## Artwork treatment - "stickers" defined (Brooke's meaning, v2)
"Stickers" = organic, naturally-shaped elements isolated from Brooke's artwork - shells, botanicals, hand-drawn plants, the deer - WITHOUT rectangular framing, integrated into the page's visual layers. Artwork becomes part of the page, not rectangles floating on it. Four embedding techniques only:
| Technique | Mechanics | Where |
|---|---|---|
| Rising | transparent silhouette cropped by a viewport/page edge - art grows into frame as you scroll | S1 deer-forest at bottom edge; S7 plant under the invitation |
| Tucking | element sits UNDER the next layer (artwork or band slides over its edge) - pressed under glass | S3 botanical in the paper/artwork seam (z-order, not shadow, sells it) |
| Pressing | very low opacity (~.09-.12), behind text - in the paper, like a watermark in handmade stock | S4 pair scene bed; footer |
| Marginalia | small silhouette crossing a text-column edge, held while text passes | S2 flower |
Rules: shapes never rotate more than their own natural posture allows; no white outlines except where a true die-cut read is wanted (rare); contact shadow only when the element hovers above a layer it visibly sits on. Stage 3 produces the isolates from her artwork masters with the proven remove-background pipeline (candidates: fern frond, moon-phase ring from the deer totem, nautilus spiral, cacao submark linework, queen-anne's-lace head).
Finished portfolio pieces follow exhibition grammar, never collage: straight edges, radius 0, no rotation, no drop shadow (held, not floating), accurately attributed - every image/label pair verified against the source files (the v1 S3 error: a Cycle-of-Seasons image under a Mumma Marama label - never again; S3 v2 uses the real 2951x3950 mumma_marama_logo_red_flower master).

## Movement (Laura Dawn layer - corrected against REF-FINDINGS.md)
Observed truth about the references: they do NOT choreograph scroll. Danu ships `data-animation="none"` and Laura Dawn's parallax list is EMPTY - their depth comes from FIXED artwork grounds (6 fixed-attachment hand-drawn pattern layers), held bands, <=6 entrance fades, exactly one living loop, and a 5px hover lift. Motion = atmosphere, not choreography.
Therefore, revised motion contract:
- Held-ground scenes: the references get depth from fixed-attachment artwork grounds - but fixed backgrounds are the exact bug class we measured locking scroll (original audit + this session's P0), so we imitate the EFFECT, not the property: a `position: sticky` art layer inside a tall scene wrapper (art holds while text scrolls past), zero `background-attachment: fixed` anywhere. This is also safer for the reduced-motion swap (sticky degrades to static for free).
- Parallax PAIRS demoted from signature to exactly ONE moment: scene 1's photo 0.06 against the NAKED EARTH plate 0.14. Everywhere else, held ground + static content.
- One living loop site-wide, budget-capped (candidate: the slow leaf-shadow drift on S2's die-cut flower). Entrance fades <=6 across the homepage; 5px hover lift on works (already close).
- Sticky-label vs panning wall stays (danu's held-band grammar). Reveals stay 12-14px rise-and-settle, fail-safed visible-by-default; all motion gated on prefers-reduced-motion; single passive scroll listener + rAF.

## Copy rule (added after v1 feedback)
Headings and lines come from Brooke's shipped string bank ("Work, laid on the table.", "Brand design leads. The rest grows from it.", "No forms, just a hello.", "Ask for a case study.") or are written in her register and flagged for her sign-off. No constructed whimsy ("What came off the table lately" is dead - it read as generic AI copy, her words). When in doubt, reuse what she already wrote.

## Homepage storyboard v2 (mocks re-shot per Brooke's notes; organic embeds, straight exhibition)
S1 Opening: keep exactly what she loved - soft leaf-shadow atmosphere over paper; her line "Brand design rooted in the living world." set large; deer-forest silhouette RISING from the bottom edge (no frame, no tilt fight, gentle drift .10 over ground .04); small bloom marginalia top right. Mobile: silhouette 56% width rising under the type, bloom small top corner.
S2 Statement: her line "Brand design leads. The rest grows from it." as the one pull; flower as marginalia held while text passes (sticky).
S3 Exhibition: label left (No. 01 / Mumma Marama / medium line / ask), real red-flower artwork held full-bleed right, straight; botanical TUCKED under the artwork seam - half paper, half artwork, genuinely under the layer.
S4 Exhibition pair (replaces the retired table collage): "Work, laid on the table." + her lede; Bee & Ocean label spread and Homegrown poster shown whole, straight, 7/5 asymmetric, gallery captions on a hairline rule; pressed botanicals at ~10% IN the paper behind them, slowest drift.
S5 Voice band: unchanged - gold Matariki artwork bled right over bark, accurate to the Matariki calendar project.
S7 Invitation: "No forms. Just a hello." with the plant rising from the fold.
Clarity guardrail unchanged: above the fold = authentic atmosphere + her offering in plain words + one CTA.

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
