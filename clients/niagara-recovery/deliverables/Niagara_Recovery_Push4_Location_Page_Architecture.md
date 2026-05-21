# Push 4 — Location Page Architecture: Build / Upgrade / Redirect

**Q2 2026 v2 · Niagara Recovery · 2026-05-19**
**Pillar:** Location Pages + Site Architecture · **Month:** M1 (LP-01/02) → M2 (LP-03/04/05/07/10) → M3 (LP-06/08/09) · **Owner:** Aleksa + Marija + Dev · **Priority:** P1

---

## The diagnosis

The current /locations/* architecture is mis-allocated. From the live-fetch audit 2026-05-19 (`exports/_v2_live_html_audit.json`) and sitemap inspection:

| URL | Status | Word count | Schema | LD zone coverage | Strategic state |
|---|---|---|---|---|---|
| `/locations/williamsville` | 200 | 986 | 0 | 60-80% rank 5-6 | **Real content but no schema/ratings — UPGRADE** |
| `/locations/cheektowaga` | 200 | 679 | 0 | 37-50% rank 8-10 | **Real content but no schema/ratings — UPGRADE** |
| `/locations/buffalo` | 200 | 961 | 0 | 0% rank N/A (black hole) | **Has Buffalo-NY-14215 fabrication — REWRITE (Push 1)** |
| `/locations/lockport` | 200 | 276 | 0 | 100% rank 1.4 | **Thin doorway — UPGRADE** |
| `/locations/niagara-falls` | 200 | 278 | 0 | 100% rank 10-16 | **Thin doorway — UPGRADE (M3)** |
| `/locations/amherst` | 200 | 276 | 0 | 33% rank 12-15 | **Thin doorway — UPGRADE (M3)** |
| `/locations/tonawanda` | **404** | — | — | 40-60% rank 11-13 | **MISSING — BUILD** |
| `/locations/north-tonawanda` | **404** | — | — | 50-100% rank 5-7 | **MISSING — BUILD** |
| `/locations/lewiston` | — | — | — | 100% rank 4-5 | **MISSING — BUILD** |
| `/locations/youngstown` | — | — | — | 100% rank 1.3 | **MISSING — BUILD** |
| `/locations/best-*-in-*-ny` etc. (~60 URLs) | 200 | varies | 0 | varies | **Doorway template — REDIRECT to anchor city** |

**The pattern:** Williamsville and Cheektowaga already have substantive content (986w / 679w) but lack schema, ratings, NAP markers — so they fail to rank in their own zones despite the content investment. Tonawanda and N. Tonawanda are 404 — matching the Buffalo-metro Maps black hole. Lockport, Niagara Falls, and Amherst exist but as 276-278w thin doorways. And ~60 `/locations/<adjective>-<modality>-in-<town>-ny` doorway URLs (the "Premium / Most-Trusted / Dependable / Holistic / Leading / Renowned / Famous" template, with 9 new ones added 2026-04-15 → 05-18 alone) dilute the topical signal without ranking.

**Why this matters now:** The LD apples-to-apples delta 2/22 → 4/30 shows Niagara is **already in 100% of cells** at most WNY-anchor towns at top-3 rank — but Google has no corresponding on-site landing to anchor that visibility into clicks. Visitors who search and click from rank #1 in Lockport's Maps pack land on a 276-word doorway page that doesn't speak to Lockport. The combined GSC pull for /locations/* shows **16 clicks / 365d** across 94 URLs — a 0.17 click/URL ratio.

## The single deliverable

10 substantive location pages (BUILD 4 + UPGRADE 6) + ~60 doorway URLs 301'd to their nearest substantive anchor — implementing HQDM's fill-not-kill policy at scale.

## Specific changes

### 1. UPGRADE: Williamsville + Cheektowaga (LP-01, LP-02, M1)

Both pages have content. They lack:
- MedicalBusiness schema (referencing Newfane HQ + areaServed = the location's city)
- Ratings widget (pulling 4.3★/47 from GBP via JSON-LD AggregateRating)
- NAP block (Newfane HQ address + phone + hours)
- Drive-directions from the location's city center
- Service-links block linking to all 5 /services/* canonical URLs (post-Push 3 consolidation)
- FAQ block (4-6 location-specific PAA questions)

Per-page template (Williamsville):
```
H1: Addiction Treatment Center Serving Williamsville, NY
[Intake CTA above-fold]
Intro: Niagara Recovery serves Williamsville-area residents from our 2600 William St facility in Newfane, NY — approximately 25 minutes north via I-990 and NY-78. Our inpatient detox and short-term residential programs are housed at the Newfane location.
[Drive-time block: from Williamsville to Newfane, 25 mi via I-990 + NY-104 + NY-78]
[Service-links block: 5 /services/* tiles]
[Ratings widget pulling 4.3★ × 47 reviews from GBP]
[NAP block: 2600 William St, Newfane, NY 14108 / (716) 203-8000 / 24/7]
[Williamsville-area-specific section: ~200w about treatment options for Williamsville-area residents — what makes inpatient detox at Niagara Recovery appropriate for Williamsville-area family-system contexts]
[FAQ: "How far is Niagara Recovery from Williamsville?" / "Does Niagara Recovery accept commercial insurance common in the Williamsville area?" / "Can family members visit during inpatient stay?" / "What's the typical length of stay?"]
[Intake CTA after-fold]
[Schema: MedicalBusiness + areaServed = Williamsville + sameAs = GBP URL]
```

Cheektowaga uses the same template with substitutions.

### 2. BUILD: Tonawanda + N. Tonawanda + Lewiston + Youngstown (LP-03, LP-04, LP-05, LP-06)

Net-new URLs. Each ~800-1000w using the same template as the Williamsville upgrade. Specific notes:

- **/locations/tonawanda** (LP-03, M2): Drive directions from Tonawanda 24 mi via NY-266 + NY-104 + NY-78. Service-area emphasis = Erie County north shore. Maps Tonawanda anchor: 1-5 cells, 40-60% cov, rank 11-13.
- **/locations/north-tonawanda** (LP-04, M2): Drive directions 22 mi. LD: 2-8 cells, 50-100%, rank 5-7. Stronger zone than Tonawanda. Build emphasizes the river-corridor families.
- **/locations/lewiston** (LP-05, M2): Drive directions 22 mi via NY-104 + NY-78. LD: 2-3 cells, 100%, rank 4-5. Niagara County, near Lewiston-Porter school district — frame for family-system contexts.
- **/locations/youngstown** (LP-06, M3): Drive directions 22 mi. LD: 2 cells, 100%, rank 1.3 — Niagara already dominant; the page just declares the entity.

### 3. UPGRADE thin → substantive: Lockport + Niagara Falls + Amherst (LP-07, LP-08, LP-09)

Each currently 276-278w. Expand to ~1000w using the same template as the Williamsville upgrade.

- **Lockport (LP-07, M2):** 13 cells in grid, 100% / rank 1.4. The entity is already dominant; the page expansion is to convert the Maps visibility into clicks. Emphasize the Lockport-area neighborhoods (Ridgewood / North Ridge / Highland Park / Cambria Center) since those were the 7 GBP service-area micros being swapped out — the location page becomes the on-site entity claim for those neighborhoods.
- **Niagara Falls (LP-08, M3):** 1-2 cells, rank 10-16. The lift comes from the entity claim, not the LD position. Frame for both the US-side (NY) and tourists / families crossing from Canada.
- **Amherst (LP-09, M3):** 3 cells, 33%, rank 12-15. Weakest anchor in the WNY break-out set. Build the entity claim to unlock Push 6 SEO Neo + AI Articles to land effectively.

### 4. REDIRECT: ~60 doorway URLs → anchor city pages (LP-10, M2)

The doorway URLs follow the template `/locations/<adjective>-<modality>-in-<town>-ny`:
- "best-addiction-rehab-in-..."
- "most-trusted-..."
- "dependable-..."
- "holistic-..."
- "highly-recommended-..."
- "comprehensive-..."
- "leading-..."
- "patient-focused-..."
- "premier-..."
- "effective-..."
- "licensed-..."
- "most-effective-..."
- "renowned-..."  (newer template — 9 added 2026-04-15 → 05-18)
- "famous-..."  (newer)
- "premium-..."  (newer)

Per HQDM fill-not-kill policy (`feedback_hqdm_location_pages_fill_not_kill.md`): NEVER bulk NOINDEX/410 these. Each doorway 301 redirects to the **nearest substantive anchor city page.**

Open `Niagara_Recovery_Cannibal_Cleanup_Plan.csv` filter `task_id=LP-10`. Each row maps a doorway URL to its canonical redirect target. Decision rules:

| Doorway town | Canonical target |
|---|---|
| Towns within Niagara County (Newfane / Olcott / Burt / etc.) | `/areas-served` (already covers Niagara County via Push 1 update) |
| Lockport-area towns (Ridgewood / Highland Park / Cambria Center etc.) | `/locations/lockport` |
| Buffalo-metro towns (Williamsville / Cheektowaga / Amherst / Tonawanda) | The respective /locations/<town> page |
| Buffalo proper (any "in-buffalo-ny" doorway) | `/locations/buffalo` (post-BC-04 rewrite) |
| Niagara Falls-area | `/locations/niagara-falls` (post-LP-08 upgrade) |
| Rural / out-of-region doorways without an anchor match | `/areas-served` |

Deploy small-level 301s in Webflow per `HQDM/A - HQDM SOPs/Dev/301-Redirect-SOP`. Sitemap update afterward to remove the doorway URLs (let the 301 do the heavy lifting; XML sitemap should only include canonical URLs).

### 5. Sequencing constraint

LP-10 (doorway redirects) MUST happen after LP-07 (Lockport upgrade) is live — otherwise the 7 Lockport-area doorway redirects point to a 276-word thin page that won't carry the consolidated weight. Order in M2: LP-07 first, then LP-10 the same week.

## Why this is Push 4

1. **Largest geographic visibility lift** — Push 2 declares the GBP entity claim for anchor towns; Push 4 builds the on-site landing surfaces those entity claims need to convert. The two pushes are designed to reinforce each other (e.g., Push 2 adds Lockport to GBP service area same month Push 4 LP-07 expands the Lockport page).
2. **Recovers the 16-click/year /locations/* underperformance.** 94 URLs earning 16 clicks/year is a 0.17 click/URL ratio — pathologically low. Consolidating to ~10 substantive + ~60 redirected URLs should lift the per-URL ratio significantly.
3. **Implements HQDM fill-not-kill at scale.** This is the canonical demonstration of the policy: build the real anchor city pages, route the doorway URL inventory into them via small-level 301s, never bulk-NOINDEX.

## Acceptance criteria

- LP-01 (Williamsville) + LP-02 (Cheektowaga) live with schema + ratings + NAP + service-links + FAQ. Schema validates RRT.
- LP-03 (Tonawanda) + LP-04 (N. Tonawanda) + LP-05 (Lewiston) + LP-06 (Youngstown) live — net-new URLs with full template.
- LP-07 (Lockport) + LP-08 (NF) + LP-09 (Amherst) upgraded from 276-278w to ≥1000w with full template.
- ~60 doorway URLs return 301 to the appropriate canonical anchor city page. Cannibal Cleanup sheet shows 0 LEAVE rows in this cohort.
- Internal links audit (per `Niagara_Recovery_Internal_Linking_Map.csv`) updated to point to canonical /locations/* URLs only.
- GSC sitemap submission post-redirect deployment.

## Estimated effort

- LP-01 + LP-02 upgrades: 3 hours × 2 = 6 hours (Aleksa)
- LP-03 + LP-04 + LP-05 builds: 6 hours × 3 = 18 hours (Aleksa + Marija)
- LP-06 build: 4 hours (Aleksa + Marija)
- LP-07 + LP-08 + LP-09 thin-to-substantive: 5 hours × 3 = 15 hours (Aleksa)
- LP-10 ~60 redirects: 8 hours (Aleksa + Marija + Dev — mostly mapping decisions, 1 hour deploy)

**Total Push 4 = ~51 hours over M1-M3.**

## Risk

- Content-team capacity is the gating constraint. Marija + the content team shipped 22 PAA blogs + 9 doorway pages in the last 5 weeks; redirecting that production capacity into LP-03 to LP-06 builds depends on the Push 5 firehose pause (owner sign-off CC-03).
- Internal-linking updates must be deployed BEFORE 301 redirects to avoid transitive-redirect issues. Sequencing matters.
- Williamsville + Cheektowaga upgrades depend on Push 1 BC-04 having already fixed the Buffalo-NY-14215 fabrication on `/locations/buffalo` — otherwise the service-links + NAP cross-links on the upgraded pages will inherit the false NAP claim.

## Files referenced

- `Niagara_Recovery_Pages_Action_List.csv` (rows PA-18 to PA-27)
- `Niagara_Recovery_Cannibal_Cleanup_Plan.csv` (LP-10 row + ~60 doorway URL mappings)
- `Niagara_Recovery_Internal_Linking_Map.csv` (rows IL-14 to IL-21)
- `Niagara_Recovery_Schema_Plan.csv` (10 location-page schemas)
- LD anchor analysis: `clients/niagararecovery/exports/localdominator/niagara_anchor_town_summary.csv`
- Live-fetch audit: `clients/niagararecovery/exports/_v2_live_html_audit.json`
