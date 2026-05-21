# Task 1 / Month 1 — Location Pages Cleanup (37 empty bodies + 62 keep)

| Field | Value |
|---|---|
| Task ID | LP-01 |
| Pillar | Site Architecture — Location Pages |
| Execution Month | M1 |
| Primary Owner | Aleksa + Content + Dev |
| Supporting Teams | On-page (audit confirm), Content (rewrites), Dev (301s + schema + sitemap) |
| Priority | P0 — must |
| Estimated Hours | ~80h total (9 upgrades x ~7h + 28 redirects batched + QA) |
| Document Reference | This brief + `Surfpoint_All99_Location_Pages_Decisions.csv` |

## Context

Crawled all 99 `/locations/*` URLs in the sitemap (2026-05-13) + GSC URL Inspection on every page. **37 pages have 33-37 words in `<main>`** — pure boilerplate, no city-specific content. **0/99 location pages have any schema** (homepage's LocalBusiness doesn't propagate). **47/99 are not in Google's index** even though all are in the submitted sitemap. The cliff between empty and real content is extreme: 33-37 words → 400+ words, no middle tier.

### Google indexation snapshot (URL Inspection API, 2026-05-13)

| Status | Count | What it means |
|---|---:|---|
| **INDEXED** (Submitted and indexed) | 52 | Live in Google's index |
| NOT INDEXED — Crawled, not selected | 21 | Google crawled but judged content not worth indexing |
| NOT INDEXED — Discovered, not crawled | 17 | Google knows the URL exists but hasn't even crawled it |
| NEUTRAL | 7 | Inspection inconclusive (alt canonical / Google-canonical mismatch) |
| **NOINDEX** — Excluded by meta robots tag | 2 | Page has `<meta name="robots" content="noindex">` |

### The 2 already-noindex'd pages (cleanup already partially in motion)

| URL | Decision | Note |
|---|---|---|
| /locations/coney-island | Redirect to `/locations/comprehensive-rehab-center-in-coney-island-ny` | Already noindex; complete the cleanup with the 301 |
| /locations/east-flatbush | Redirect to `/areas-served` | Already noindex; complete the cleanup with the 301 |

Someone (HQDM or previous agency) flagged these for cleanup with noindex but never finished by removing/redirecting. The 301 closes the loop and removes them from sitemap.

**Decisions (Aleksandar, 2026-05-13):**
- **9 upgrade** (build out with real content + schema)
- **28 redirect** (3 to parent location pages, 25 to `/areas-served`)
- **62 keep** (content-bearing, already 400-1,021 words — left as-is for M1; schema gap to be addressed sitewide separately)

---

## Action 1 — Upgrade 9 pages

Build out with real content + LocalBusiness schema. Borough-level anchors + 4 Manhattan neighborhoods that lack content-bearing alternatives.

| # | URL | Area | GSC imp 365d | GSC clk 365d | Google Index Status |
|---:|---|---|---:|---:|---|
| 1 | /locations/staten-island | Staten Island | 704 | 14 | INDEXED |
| 2 | /locations/queens | Queens | 659 | 3 | INDEXED |
| 3 | /locations/new-york-city | Manhattan | 388 | 0 | INDEXED |
| 4 | /locations/manhattan | Manhattan | 317 | 5 | INDEXED |
| 5 | /locations/harlem | Manhattan | 111 | 1 | **NOT INDEXED — crawled, not selected** |
| 6 | /locations/brooklyn | Brooklyn | 59 | 1 | INDEXED |
| 7 | /locations/brownsville | Brooklyn | 12 | 0 | **NOT INDEXED — discovered, not crawled** |
| 8 | /locations/inwood | Manhattan | 9 | 0 | **NOT INDEXED — crawled, not selected** |
| 9 | /locations/bronx | Bronx | 1 | 0 | **NOT INDEXED — crawled, not selected** |

**Indexation note for 4 not-indexed upgrades (harlem, brownsville, inwood, bronx):** Google has already crawled or discovered these and decided not to index. Content build-out alone may not be enough — must explicitly **Request Indexing in GSC URL Inspection** after deploy, and likely re-request after 2-4 weeks if not picked up.

**Each upgrade page must include:**
- Brooklyn-anchored treatment-page template (1,200-1,500 words)
- City/neighborhood-specific intro + local context (transit, distance to facility, any local outreach/partnerships)
- Insurance, treatments, what-to-expect, FAQ sections matching homepage CRD pattern
- LocalBusiness JSON-LD schema (mirror homepage structure)
- Internal links: 1 to `/treatments`, 1 to relevant `/treatments/*` sub-page, 1 to `/areas-served`
- Intake CTA + tel: link to (646) 347-1893
- Rich Results Test pass before publish

---

## Action 2 — Redirect 3 empty pages to parent location pages

301 redirect (consolidation to existing real-content pages). Then remove source from sitemap.

| URL (source) | Redirect target |
|---|---|
| /locations/north-shore-of-staten-island | /locations/staten-island (parent borough, being upgraded) |
| /locations/east-new-york | /locations/new-york-city (parent NYC, being upgraded) |
| /locations/coney-island | /locations/comprehensive-rehab-center-in-coney-island-ny (existing real-content version, 584 words) |

---

## Action 3 — Redirect 25 empty pages to `/areas-served`

301 redirect, batched single deploy, remove from sitemap.

| Area | Count | URLs |
|---|---:|---|
| New Jersey (out of service) | 5 | /jersey-city, /newark, /paterson, /trenton, /new-jersey |
| Manhattan | 2 | /hamilton-heights, /washington-heights |
| Queens | 13 | /astoria, /cambria-heights, /corona, /east-elmhurst, /elmhurst, /flushing, /jackson-heights, /laurelton, /queens-village, /springfield-gardens, /st-albans-rochdale, /sunnyside, /woodside |
| Brooklyn | 5 | /brighton-beach-ny, /carroll-gardens-red-hook, /cypress-hills, /east-flatbush, /gravesend-ny |

---

## Action 4 — 62 content-bearing pages: KEEP as-is for M1

No edits to the 62 pages with 400-1,021 words. They all still lack schema — covered by a separate sitewide schema task, not M1.

### Indexation breakdown for the 62 KEEP pages

| Index status | Count | Implication |
|---|---:|---|
| INDEXED | 32 | Live in search; no action needed for indexation |
| NOT INDEXED — Crawled, not selected | 15 | Google's quality bar judges them not worth indexing — content uplift candidate later |
| NOT INDEXED — Discovered, not crawled | 12 | In sitemap but Google hasn't even crawled — likely crawl-budget priority issue |
| NEUTRAL | 3 | Canonical mismatch worth one-off investigation |

**Implication:** 30 of the 62 KEEP pages aren't earning index slots from Google despite having 400-1,021 words. Confirms the meta-issue Aleksa raised: even when content is published, Google isn't accepting it. Out of scope for M1 (we're not editing the 62), but flag for the schema rollout + content-depth uplift task.

### Content quality analysis (informational — confirms KEEP is safe)

To verify these 62 aren't a duplicate-content liability, I ran two checks:

**1. Uniqueness — 3-gram Jaccard pairwise.** No duplicate clusters at the 65% similarity threshold. Range: **91.7% – 96.7% unique** per page (where 100% = nothing shared with any other page). The pages share a visible template structure (section headers like "Range of Services Offered", "Our Treatment Philosophy") but the paragraphs are AI-spun rather than copy-pasted. Google won't flag these as duplicate content.

**2. Local relevance — city-name mention count in `<main>`.** Proxy for "is this page actually about this place or just slot-filled template":

| Tier | Definition | Count | Action |
|---|---|---:|---|
| STRONG local | City named >=5 times in body | **41** | Keep, leave alone in M1 |
| OK local | City named 3-4 times | **20** | Keep; flag for later content-depth uplift |
| WEAK local | City named 1-2 times | **1** | Flag now (see below) |
| NO city mention | Never names its city | 0 | — |

**Single page flagged: `/locations/premier-rehab-center-in-boardwalk-residential-strip-brooklyn`** — names "boardwalk residential strip" only 2x in 539 words. The neighborhood label itself is non-standard (not a recognized place name); content reads as forced. Recommend content team review for either rewrite or redirect in a later wave.

### URL structure note (for a later wave, not M1)

40 of the 62 keep-pages use a verbose pattern like `/locations/{adjective}-{category}-in-{place}-ny` (e.g., `/locations/restorative-addiction-rehab-in-crown-heights-ny`). These would be better as clean slugs like `/locations/crown-heights-ny`. **Out of scope for M1** — flag for a separate URL-normalization task with proper redirect mapping so we don't lose the 400-1,021 words of indexed content.

### Reference data
- Full uniqueness CSV: [Surfpoint_Location_Pages_Uniqueness.csv](Surfpoint_Location_Pages_Uniqueness.csv)
- Local relevance + tier CSV: [Surfpoint_Location_Pages_LocalRelevance.csv](Surfpoint_Location_Pages_LocalRelevance.csv)

---

## Acceptance Criteria

- [ ] All 5 NJ pages return 301 -> `/areas-served`; removed from sitemap.xml
- [ ] All 20 other `/areas-served` redirects return 301; removed from sitemap.xml
- [ ] All 3 parent-location redirects (north-shore, east-new-york, coney-island) return 301 to designated parent
- [ ] All 9 upgrade pages: word count >= 1,200; LocalBusiness schema present; Rich Results Test pass
- [ ] No empty-body pages remain in `/locations/*` post-deploy (re-run probe: `c:/tmp/surfpoint_loc_full.py`)
- [ ] GSC URL inspection submitted for all 28 redirected URLs + 9 upgraded URLs
- [ ] Post-deploy 30-day check: track impression recovery on the 9 upgrades + index-coverage drop on the 28 redirects

---

## Notes

- **Coney Island consolidation note:** `/locations/coney-island` (empty, 404 imp, 6 clicks) is being redirected to `/locations/comprehensive-rehab-center-in-coney-island-ny` (existing real-content version). Verify the verbose-slug page is the one with the better content + check for any inbound links to the short slug that should be preserved by the 301.
- **Authorization check:** Milica to confirm client approval before deleting/redirecting the 28 pages — meeting flagged this as needing client sign-off on doorways.
- **Origin of the doorways:** still unconfirmed (possibly previous agency, possibly content-team SOP). Aleksa to check Drive history.
- **Schema gap is sitewide.** All 99 location pages have N schema. The 9 upgrades will get LocalBusiness; the 62 keep-pages remain without schema until the sitewide schema task lands (separate from M1).

## Reference Data

- Full 99-page merged decision sheet: [Surfpoint_All99_Location_Pages_Decisions.csv](Surfpoint_All99_Location_Pages_Decisions.csv)
- Raw audit data: [c:/tmp/surfpoint_loc_full.csv](c:/tmp/surfpoint_loc_full.csv)
- Probe script (re-runnable post-deploy): [c:/tmp/surfpoint_loc_full.py](c:/tmp/surfpoint_loc_full.py)
- Sitemap source: https://www.surfpointrecovery.com/sitemap.xml (99 `/locations/*` URLs)
