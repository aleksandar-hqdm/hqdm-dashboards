# Urban Recovery — Q2 2026 Custom Strategy (3-page condensed)

**Owner:** Aleksandar · **Date:** 2026-05-15 (refresh) · **Phase:** Phase 1 Recovery
**Tier:** 1 Recovery · **Pin:** 411 Van Brunt St, Brooklyn NY 11231 (Red Hook) · **Domain:** urbanrecovery.com
**Source data:** GSC 365d (855 pages, 13.81M imp, 44.14K clicks) · DataForSEO Maps SERP (8 queries × 5 Brooklyn coords) · **Local Dominator 13×13 grid scans, 2026-01-27 vs 2026-04-22, 8 priority queries (1,344 cells observed)** · DataForSEO GBP info (UR + 6 competitors) · DataForSEO Backlinks (1,642 BL / 958 RDs / 642 unique RDs / spam-score 42 — 61% of RDs at spam-rating ≥30) · Live HTTP probe of 7 priority `/locations/*` URLs (2026-05-15)

> **Strategy posture:** GBP is the moat and the pin is dominant within its 3.25-mi catchment — UR appears in **1,247 of 1,344 (92.8%)** of LD grid cells across the 8 priority queries, with rank 2.0–2.2 on Brooklyn-tagged queries and improving avg rank on broad terms (`alcohol rehab` 5.71→4.48; `drug rehab` 6.49→5.64). The diffusion gap is *cross-borough*, not *within-radius* — the 5-coord Brooklyn matrix shows UR at **8 of 40 cells**. Two different signals: defend the 3.25-mi Red Hook moat at full GBP velocity (Posts + Photos + Reviews) AND extend cross-borough at Downtown Brooklyn + Sunset Park + Crown Heights via location-page builds + off-page micro-area work. Upgrade `/services/alcohol-detoxification-service` (M2) + `/services/opioid-detoxification-services` (M3) — these carry the main intent clusters where 9,269 local-intent queries currently rank pos 1–3 at near-zero CTR. ON-02 = page-refresh on top conversion pages (visible H1 + hero + body + intake CTA, including the explicit "Inpatient Drug & Alcohol Rehab Brooklyn" framing on `/services/short-term-residential-program` to counter the SNF category drift on `inpatient rehab`). Run the on-topic blog-refresh cadence (CON-05/06/07 — 3 bleeding on-topic posts per month). Disavow is warranted by the data (spam-rating 42 + 216 RDs in `anomaly-seo-*` cluster) — execute in M1, re-pull M3.
>
> **Competitor churn (Apr 2026 vs Jan 2026, top-10 cells pooled across 8 queries):** UR held the grid (**+21 top-10 cells**, 1,092 → 1,113) while the market churned hard. Addiction Treatment Brooklyn vanished (−138 cells), Upper East Side Rehab Nursing collapsed (−104), Samaritan Village exited (−52). Top gainers: Elevate Point NYC (+88), Teen Challenge (+53), stealth direct competitor *Detox & Drug/Alcohol Rehab Center In Brooklyn, NY* (+52), Brooklyn Center for Rehabilitation and Nursing (+39 — SNF entering `inpatient rehab`), Downtown Brooklyn Nursing (+45 — SNF entering `rehab new york`). We did not move.
>
> **From the LD delta:** `inpatient rehab` is the one weakening keyword (85 → 75 cells; −10) — category is being entered by **Brooklyn Center for Rehabilitation and Nursing** (0 → 102 cells in 3 months; a skilled-nursing facility, not addiction). UR is fighting *category ambiguity* on this term. Sharpening lever: rewrite `/services/short-term-residential-program` with explicit "Inpatient Drug & Alcohol Rehab" framing (ON-02). Direct-competitor watchlist: *"Detox & Drug/Alcohol Rehab Center In Brooklyn, NY"* — gaining rank on every single query.
>
> **From the URL probe + per-URL GSC join 2026-05-15:** all 96 /locations/* URLs categorized in the working sheet. **LP-02 = 8 UPGRADES** (every cross-borough target already has a verbose-slug page in the sitemap with substantial content — no new builds needed). Sequencing: M1 = 3 in-radius anchors (red-hook-ny / carroll-gardens-red-hook / gowanus); M2 = 3 adjacency + cross-borough (park-slope-ny / boerum-hill-ny / recovery-center-in-sunset-park-ny); M3 = 2 cross-borough conditional (leading-rehab-center-in-downtown-brooklyn-ny / rehab-center-in-crown-heights-ny). LP-01 = 6 on-topic bleeding URLs (refresh) + 13 zero-click URLs (301 to canonical or 410). 69 URLs LEAVE ALONE (content + traffic).

---

## 1. Where Urban Recovery is bleeding (the data, 5 levers)

| # | Diagnosis | Evidence | Severity |
|---|---|---|---|
| **1a. Cross-borough map-pack non-diffusion** | UR appears in **8/40** (keyword × coord) cells across 8 priority queries × 5 Brooklyn anchor coords. **All 8 appearances are at the Red Hook pin coord** — zero appearances at Coney Island / Downtown Brooklyn / Williamsburg / Crown Heights. Pin works at home, doesn't radiate cross-borough. | `maps_serp_grid.csv` + `ur_appearance_matrix.csv` | **Critical (Maps)** |
| **1b. Within-radius dominance is intact + improving on broad terms** | LD 13×13 grid at Red Hook pin coord, Jan 27 → Apr 22, 2026: UR covers **92.8%** of cells (1,247 / 1,344) across 8 queries. Brooklyn-tagged queries hold rank 2.0–2.2. Broad terms IMPROVED: `alcohol rehab` avg 5.71→4.48, `drug rehab` 6.49→5.64. Soft spot: `inpatient rehab` 85→**75 cells** (−10). Direct competitor *"Detox & Drug/Alcohol Rehab Center In Brooklyn, NY"* gaining rank on every query. | `urban_recovery_ld_delta_*.csv` (13×13 grid, 16 scans) | **Defend** |
| **2. GBP depth gap on the pin** | 3.8★ / 111 reviews / **23% 1-star** (26 of 111). **7 total photos** vs Ascendant 90 / Mountainside 30. **1 GBP Post** in scrape window. `place_topics: null`. | DataForSEO GBP info | **Critical (Maps)** |
| **3. Off-page PBN exposure — disavow warranted by data** | 1,642 BL / 958 RDs / 642 unique RDs. **395 of 642 RDs (61%) at spam-rating ≥30**. 216 RDs match the `anomaly-seo-*` / `seo-anomaly-*` PBN cluster (top reaches spam-rating 94). 323 RDs use PBN-pattern TLDs (.online .website .site .space .xyz). Domain-level spam-score = 42. | `referring_domains.csv` (642 RDs) | **High (Off-Page) — disavow file warranted** |
| **4. Service-page conversion surface is thin** | /services/* (5 URLs) sits on doorway templates without Service/LocalBusiness/FAQPage schema, without intake-form depth, without Areas We Serve enumeration. 9,269 local-intent queries rank pos 1–3 at near-zero CTR in GSC last_180d (`recovery center brooklyn` 13.77K imp / 0 clicks @ pos 3.55; `drug rehab new york city` 7.1K imp / 1 click). SP-01 (alcohol-detox M2) + SP-02 (opioid + MAT M3) upgrades carry these intent clusters. **Homepage JSON-LD telephone (646-960-6656) ≠ GBP canonical (646-347-1892)** — NAP mismatch in the only schema block sitewide (HP-01 one-line fix). | `queries_last_180d.csv`, live HTTP probe | **High (On-Page)** |
| **5. On-topic blog refresh opportunity** | 674 of 792 sitemap URLs are `/blog/*`. Bleeding on-topic posts (detox / withdrawal / MAT / dual-diagnosis cluster) are refresh candidates: title + intro + internal links + Request Indexing. Off-topic high-impression posts (claustrophobia 1.25M imp; drinking calculators) stay live but are deprioritized for refresh hours. | `pages_last_365d.csv`, sitemap inventory | **Medium (Content cadence)** |

**What's working (defend, don't touch):**
- Pin RANKS #1 at Red Hook coord across all 8 priority queries — the GBP-tagged homepage URL (`/?utm_source=gmb`) drove **3,275 clicks / 365d at 1.18% CTR** (highest non-blog converting URL on the site). GBP → site → intake is the live conversion path.
- Brand queries fire correctly: `urban recovery` 1,357 clicks, `urban recovery brooklyn` 290 clicks at pos 1.83.

---

## 2. Three-month posture (Maps-first + off-page-trust + on-page-unblock)

### Lever A — Defend & diffuse the Red Hook pin (Maps)
Three GBP channels run at full velocity (Q&A excluded — Google is migrating that surface to AI-generated answers):
1. **Posts** — ≥1/week cadence. Topics span service pages + Medicaid + LGBTQ+/women-owned differentiator + Red Hook neighborhood. One Post per month explicitly uses "Inpatient" phrasing to counter the SNF category drift on `inpatient rehab`.
2. **Photos blitz (M2)** — 7 → 30+. Exterior 411 Van Brunt + interior treatment rooms + intake desk + staff (signed releases) + Red Hook neighborhood + women-owned/LGBTQ+ environmental cues. Geotagged.
3. **Reviews push** — +20/month M1–M3 → 111 → 170+ by M3 close. Reduces 1-star % via positive-volume dilution. Owner-replies to all <4★ reviews in M3.

These three levers are the diffusion fuel: Google reads engagement density as a relevance signal that lets the pin show up further out from its physical coord.

### Lever B — Off-page (data-driven disavow + YMYL trust + PR + 6-strategy stack)
1. **Disavow** — UR's profile shows 395 of 642 RDs at spam-rating ≥30 (61% of profile), 216 in the `anomaly-seo-*` cluster (top reaches spam-94), 323 on PBN-pattern TLDs. Disavow is data-warranted here. Per-row decisions filed in [`Urban_Recovery_Disavow_Plan.xlsx`](Urban_Recovery_Disavow_Plan.xlsx) Decisions tab; disavow.txt uploaded to GSC in M1; re-pull in M3.
2. **YMYL trust citations** (Julce) — SAMHSA findtreatment.gov, CARF directory (or Joint Commission Behavioral Health substitute pending verification), LegitScript, Psychology Today (clinical-lead profile + facility), NAATP, insurance directories (Aetna + Cigna + BCBS, pending in-network confirmation), recovery-vertical tier (best-rehabs / alcoholism.org / sobasearch / helpguide.org).
3. **PR / contributed article (M2)** — LGBTQ+-affirming inpatient detox in Red Hook angle (UR's `is_owned_by_women` + `welcomes_lgbtq` + `is_transgender_safespace` GBP attributes are real differentiators). Pitch target: behavioralhealthnews.org + 1 NYC trade outlet.
4. **6-strategy stack** — one task per action per month, each with its own working sheet: DAS · GBP Blast · GBP Sniper · RD100 · AI Articles · Driving Directions · NAP Overlay · GMB Pin Support. Cross-borough micro-area targets: Downtown Brooklyn + Sunset Park + Crown Heights.

### Lever C — On-page (service-page upgrades + page refresh + location-page cleanup + builds)
1. **Service-page upgrades** — SP-01 (`/services/alcohol-detoxification-service`, M2) + SP-02 (`/services/opioid-detoxification-services` with MAT positioning, M3). 1,400–1,600 words with Service + LocalBusiness + FAQPage schema, intake form, Areas We Serve (Red Hook + 5 adjacent), women-owned + LGBTQ+-affirming differentiator. These two pages carry the alcohol-detox and opioid-detox/MAT intent clusters.
2. **Homepage NAP fix (HP-01)** — JSON-LD `telephone` (646) 960-6656 → GBP-canonical (646) 347-1892. One-line schema edit.
3. **Page refresh (ON-02)** — visible-on-page content edits on top conversion-intent pages: H1 rewrite + hero copy + body content + intake CTA placement. The `/services/short-term-residential-program` rewrite uses explicit "Inpatient Drug & Alcohol Rehab Brooklyn" framing to counter the SNF category drift on `inpatient rehab`. 12 URLs in M2 per working sheet.
4. **Location-page cleanup (LP-01, data-driven)** — M1 W1 pull GSC pages_last_365d on all 96 `/locations/*` URLs into the working sheet:
   - **REFRESH on-topic bleeding cohort** (trend < −50% + clicks > 5 + on-topic): 3 URLs per month
   - **REMOVE 0-click cohort** (clicks_365d = 0, any geography): 301 to canonical Brooklyn anchor OR 410
   - **LEAVE ALONE everything else** — pages with content + traffic stay live
5. **Location-page UPGRADES + schema (LP-02, merged)** — populated working sheet shows all 8 LP-02 URLs are EXISTING URLs needing content audit + schema deploy (every cross-borough target already has a verbose-slug page in the sitemap with content; no new builds needed). Sequencing per data: M1 = 3 in-radius anchors (red-hook-ny / carroll-gardens-red-hook / gowanus); M2 = 3 adjacency + cross-borough (park-slope-ny / boerum-hill-ny / recovery-center-in-sunset-park-ny — the strongest cross-borough URL at 1,722w / 3,152 imp); M3 = 2 cross-borough conditional (leading-rehab-center-in-downtown-brooklyn-ny / rehab-center-in-crown-heights-ny).
6. **On-topic blog refresh cadence (CON-05/06/07)** — 3 bleeding on-topic posts per month (detox / withdrawal / MAT / dual-diagnosis). Refresh action: title + intro + internal links + Request Indexing. Off-topic high-traffic posts stay live, deprioritized for refresh hours.

---

## 3. M3 close-out scorecard (what "it worked" looks like)

| Metric | Baseline (2026-05-14) | M3 target | Lever |
|---|---|---|---|
| Maps appearance — cross-borough (8 queries × 5 coords) | 8 / 40 (Red Hook pin only) | ≥ 14 / 40 (radiate to ≥ 2 adjacent coords) | A.1–A.4 (GBP velocity) + C.4 (Downtown Brooklyn + Crown Heights builds) |
| Maps appearance — 13×13 grid at pin (8 queries) | 1,247 / 1,344 (92.8%) | Hold ≥ 92% + close `inpatient rehab` gap (75 → 100+) | A.4 + ON-02 (title rewrite on /short-term-residential) |
| GBP reviews | 111 (3.8★) | ≥ 170 (≥4.1★) | A.1 intake SOP |
| GBP 1-star share | 23% | < 18% | A.1 dilution + owner-reply |
| GBP photos | 7 | ≥ 30 | A.2 |
| GBP Posts cadence | 1 in scrape window | ≥4/month sustained M1–M3 | A.1 |
| Disavow uploaded to GSC | None | Uploaded M1 (per Decisions sheet) + re-pull M3 | OFF-Disavow_M1/M3 |
| YMYL trust citations live | 0 confirmed | ≥ 8 new live (SAMHSA + CARF/Joint Commission + LegitScript + NAATP + Psych Today + 3 insurance/vertical) | OFF-Citations |
| Homepage NAP schema matches GBP | No | Yes | HP-01 |
| Page-refresh (ON-02) on top conversion URLs | 0 / 12 | 12 / 12 deployed; CTR delta captured 30d | ON-02 |
| Location-page deliverable health | 96 live, 0 schema | LP-01 working sheet populated from GSC, refresh + 0-click cohorts shipped; LP-02 = 4 upgrades + 2–3 new builds live with schema | LP-01 + LP-02 |
| On-topic blog refresh cadence (CON-05/06/07) | 0 posts refreshed | 9 on-topic bleeding posts refreshed (3 per month) | CON-05/06/07 |
| `recovery center brooklyn` CTR (currently 13.77K imp / 0 clicks @ pos 3.55) | 0% | ≥ 3% (= ≥ 400 clicks / 90d) | SP-01 + ON-02 page refresh compound |
| GBP-tagged homepage clicks (`/?utm_source=gmb`) | 3,275 / 365d | Maintain ≥ 3,500 / 365d | A.x compound |
| Marija's % Full Correlation | — | Full row coverage in M3 close-out | (reporting) |

---

## Department coverage (Q2)

| Dept | M1 | M2 | M3 |
|---|---|---|---|
| **On-Page** (Aleksa) | HP-01 (homepage NAP fix), LP-01_M1 (loc cleanup data-pull + refresh + 0-click removal), LP-02_M1 (3 upgrades + schema) | SP-01 (alcohol-detox upgrade), ON-02 (page refresh on 12 conversion URLs), LP-02_M2 (1 upgrade + 1 new build) | SP-02 (opioid-detox + MAT upgrade), LP-02_M3 (2 new builds conditional) |
| **Content** | CON-05 (blog refresh batch 1) + LP-02_M1 content work | CON-06 (blog refresh batch 2) + LP-02_M2 content work | CON-03 (3 Q-format LLM-targeted articles — Medicaid for detox Brooklyn / women-owned rehab Brooklyn / LGBTQ rehab Brooklyn) + CON-07 (blog refresh batch 3) + LP-02_M3 content |
| **Local/GBP** | GBP-01 (Posts cadence), GBP-03 (review velocity) | GBP-04 (photo blitz), GBP-05 (Posts cadence) | GBP-06 (Posts + Services tab audit), GBP-07 (negative-review owner replies + velocity check) |
| **Off-Page** (Julce) | OFF-Disavow_M1 + OFF-Citations_M1 (SAMHSA + Psych Today + CARF) + OFF-DAS_M1 + OFF-GBPBlast_M1 + OFF-AIArticles_M1 + OFF-DD_M1 + OFF-GMBPin_M1 | OFF-PR_M2 + OFF-Citations_M2 + OFF-DAS_M2 + OFF-GBPBlast_M2 + OFF-RD100_M2 + OFF-AIArticles_M2 + OFF-DD_M2 + OFF-NAPOverlay_M2 | OFF-Disavow_M3 + OFF-Citations_M3 + OFF-DAS_M3 + OFF-GBPSniper_M3 + OFF-RD100_M3 + OFF-AIArticles_M3 + OFF-DD_M3 + OFF-NAPOverlay_M3 |
| **Reporting** (Marija) | REP-01 (LD scan setup — 8 priority terms × 3 Brooklyn coords) | REP-02 (indexation tracker — LP-01 removed URLs + LP-02 BUILD URLs + SP-01 + ON-02 page-refresh delta) | REP-03 (Q2 close-out — planned → executed → impact) |

**Owner-side asks tracked separately** (publish brief, insurance in-network confirmation, CARF status, clinical-lead PT consent — pattern mirrors Surfpoint Owner Items doc). No geography-based redirect approval needed — LP-01 cleanup is data-driven per HQDM Location-Pages-SOP.

---

## Competitor churn — total Δ top-10 cells across all tracked queries *(per-GBP standalone)*

Pooled top-10 (rank ≤ 10) cell appearances across 8 priority queries × 13×13 LD grid (1,344-cell universe per scan), Jan 27 → Apr 22, 2026. Per-GBP standalone (matched by `place_id`).

**Urban Recovery (us):** **1,092 → 1,113 top-10 cells (Δ +21)** while the market churned hard around the pin.

| Direction | GBP | Jan | Apr | Δ | Rating |
|---|---|---:|---:|---:|---|
| **Us — held the grid** | Urban Recovery (Red Hook) | 1,092 | 1,113 | **+21** | 3.9★ (105) |
| Gainer | Elevate Point – Alcohol & Drug Rehab NYC | 478 | 566 | +88 | 5.0★ (14) |
| Gainer | Teen Challenge Inc. | 305 | 358 | +53 | 4.0★ (33) |
| Gainer | **Detox & Drug/Alcohol Rehab Center In Brooklyn, NY** *(stealth direct competitor — watchlist)* | 1,165 | 1,217 | **+52** | 3.7★ (66) |
| Gainer (SNF) | Downtown Brooklyn Nursing and Rehabilitation | 81 | 126 | +45 | 4.3★ (303) |
| Gainer (SNF) | Brooklyn Center for Rehabilitation and Nursing | 155 | 194 | +39 | 4.0★ (268) |
| Gainer | Spring Hill Wellness NY – Outpatient | 528 | 565 | +37 | 4.8★ (20) |
| Gainer | Anchor House Inc. | 806 | 842 | +36 | 3.3★ (13) |
| Gainer | Mountainside Treatment Center – NYC | 78 | 112 | +34 | 4.7★ (61) |
| Gainer | Surfpoint Recovery (Coney Island) | 917 | 950 | +33 | 4.8★ (94) |
| Loser | **Addiction Treatment Brooklyn** *(vanished)* | 138 | 0 | **−138** | 5.0★ (1) |
| Loser (SNF) | Upper East Side Rehabilitation and Nursing | 129 | 25 | −104 | 3.9★ (494) |
| Loser | Samaritan Village *(vanished)* | 52 | 0 | −52 | 2.7★ (10) |
| Loser | Wellbridge Drug & Alcohol Rehab NYC Outreach | 268 | 229 | −39 | 4.9★ (44) |
| Loser | LSA Recovery – Crown Heights | 184 | 146 | −38 | 4.0★ (4) |
| Loser | Dynamite Youth Center | 280 | 243 | −37 | 4.5★ (40) |

*Chart spec:* horizontal diverging bar — gainers right (green), losers left (red), UR row top in slate gray. 16 rows. **Verdict to call out:** "Urban Recovery held the grid. The market churned. We did not move."

Full table: `exports/ld_delta_2026q1q2/urban_recovery_competitor_churn_top10_pooled.csv` (167 GBPs).

---

## Map-grid weak points → caveman pin moves

| Coord | Current UR coverage (8 queries) | M1–M3 plan |
|---|---|---|
| Red Hook pin (40.6754,-74.0148) | **8/8 — defend** | Posts cadence + photos blitz + reviews push |
| Downtown Brooklyn (40.6929,-73.9904) | **0/8** | New build `/locations/downtown-brooklyn` (LP-02_M3 conditional) + DAS / GBP Blast / Driving Directions / GMB Pin micro-area work (M1–M3) |
| Sunset Park (40.6457,-74.0107) | **0/8** | New build `/locations/sunset-park-ny` (LP-02_M2) + DAS / Driving Directions micro-area work |
| Crown Heights (40.6709,-73.9434) | **0/8** | DAS + GBP Blast + Driving Directions micro-area work (M1). No new location-page build in Q2. |
| Williamsburg (40.7142,-73.9526) | **0/8** | Out of immediate catchment — defer to Q3 |
| Coney Island (40.5755,-73.9707) | **0/8** | Out of UR's primary catchment — no Q2 effort |

---

## Explicit deferrals (not in Q2 scope)

- **Manhattan / Queens / Bronx / Staten Island** location-page upgrades — Q3+. UR is a single-pin Brooklyn inpatient; out-of-borough doorways are removal candidates per LP-01 if 0-click, not build candidates.
- **DataForSEO Search Volume 100-keyword pull** — Phase 2 budget.
- **LLM/AI Overview strategy beyond M3 Q-format article batch** — Phase 2.
- **`/services/short-term-residential-program` + `/services/benzodiazepines-detox-services` + `/services/drug-detoxification-services` full rebuilds** — Q3, after SP-01 + SP-02 establish template performance. M2 page refresh (ON-02) lands the explicit "Inpatient" framing on short-term-residential-program ahead of the Q3 rebuild.
- **Aaron-style SEO Neo / link velocity** — paused pending Off-page Risk Assessment outcome.
