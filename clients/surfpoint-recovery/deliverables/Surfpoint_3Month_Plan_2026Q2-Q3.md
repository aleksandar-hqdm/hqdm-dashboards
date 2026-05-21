# Surfpoint Recovery — 3-Month Plan (May 2026 → August 2026)

**Owner:** Aleksandar Spasevski (Head of Search Intelligence)
**Date drafted:** 2026-05-12 · **Plan window:** M1 (May 12 – Jun 8) · M2 (Jun 9 – Jul 6) · M3 (Jul 7 – Aug 3)
**Four pillars (scope-defining):** Core Pages · Site Structure & Deindexation · GMB Optimization & Coverage Areas · Off-Page Authority (Citations · Backlinks · Earned Mentions)
**Source diagnostics:** `Surfpoint_Recovery_Q2_2026_Custom_Strategy.md` · `Surfpoint_Task1_Rebuild_Plan.md` · 18-URL competitive audit (2026-05-11) · GSC + GA4 + DataForSEO data on file

---

## 0. How to read this plan

- **§1 executive summary** — outcome thesis + the three pillars + monthly headline
- **§2 monthly swim-lane view** — what ships when, across all three pillars (single-glance overview)
- **§3–§6 per-pillar deep dives** — M1/M2/M3 progression with trackable items, owners, acceptance criteria, evidence (Pillar 4 = Off-Page Authority added 2026-05-12)
- **§7 cross-pillar dependencies** — what blocks what, where the work-streams meet
- **§8 success metrics + reporting cadence** — how we measure each month
- **§9 open inputs + Aleksa feasibility-pass questions**

Trackable execution briefs already exist for several items below — those are referenced inline (Homepage Update Brief, /treatments Hub Brief, Sub-Pages Build Plan, Legacy Redirect Plan). New items get specced here.

---

## 1. Executive summary

Surfpoint Recovery has a structural inversion: the map pack (GBP-tracked entry) converts at 2.53% — roughly 8× the organic-search average. Yet the site itself is bleeding — the 5 "service" URLs that should be the revenue surface receive 104 sessions and 0 conversions in 365 days, the homepage CRD has been drafted and sitting unused since 2026-04, the legacy `/services/*` URLs are orphaned at 0 clicks despite still receiving impressions, and the `/treatments` hub ranks at position 2.11 with 985 impressions but converts 0.2% because its meta + content + schema are thin.

The four pillars in this plan are sequenced to attack the inversion at the architectural root, not at the symptom layer:

1. **Core pages** — homepage + `/treatments` hub + 5 `/treatments/[service]` sub-pages + `/admissions` + `/about-us` + `/faq` + `/contact-us` + `/areas-served`. These pages either don't exist, or do exist with no schema/form/credentials/geo specificity. We rebuild them as the actual revenue surface.

2. **Site structure & deindexation** — 877 URL footprint analyzed; framework v1 wanted to auto-NOINDEX 447 and DELETE 223. A topical+backlinks overlay re-bucketed 453 of those into AUDIT (individual review). The deindexation work isn't "delete the blog" — it's per-URL triage with audit-back paths. Plus 27 NJ + 9 out-of-borough doorway redirects (GBP-suspension risk), `/services/*` orphan retirement, and interlinking refactor that routes equity to services instead of homepage.

3. **GMB optimization & coverage areas** — Surfpoint already wins the immediate Coney Island map pack (rank 1.47 / 96% top-3 on `alcohol rehab brooklyn`), but GBP profile depth lags Ascendant NYC (9 categories vs Surfpoint's 5; 90 photos vs 9; 13 Q&A vs 4). And the Local Dominator tracking covers only one keyword — `alcohol rehab brooklyn` — so we have no baseline on opioid/MAT, dual diagnosis, drug detox, or short-term inpatient grids. Coverage expansion means more tracked clusters + per-neighborhood map-pack diagnostic + measured GBP optimization impact.

4. **Off-page authority (citations · backlinks · earned mentions)** — Backlinks spam score 43 (vs national 16–24); 3 of 3 tested PR placements confirmed PBN-adjacent. Existing April 2026 Citation Report contains only 9 citations, all low-quality directory spam — none of the foundational addiction-treatment citations (SAMHSA Treatment Locator, NYS OASAS Find a Provider, Psychology Today, BBB, Apple Maps) are live. The 185-row Citations(Deliverable) workbook is a generic template (Home Services / Legal / Restaurants categories) not adapted to addiction treatment. Tier 0 grey/black-hat materials (CloudPage / Driving Direction / IFTT / GStack) in `offpage_program_archive/` pending principal-level retirement decision. Zero earned mentions from Brooklyn/NYC publications.

**Outcome target at end of M3** *(per `Surfpoint_Recovery_Q2_2026_Strategy_Condensed.md` revenue scenarios):* move from pessimistic-case (~$52K/yr missed) toward mid-case (~$175K/yr missed); position service pages for top-10 rankings on 4+ of 6 anchor queries; GBP profile depth at or above the Mountainside/Ascendant benchmark on every dimension; cleanup defensible (no auto-prune of core-topical content).

**Monthly headlines:**
- **M1 — Stop the bleeding + ship what's drafted.** Homepage CRD deploys. /treatments hub upgrades. Wave 1 sub-pages build (alcohol-detox + dual-diagnosis). 27 NJ doorway redirects. NOINDEX execution on 121 audited URLs. AUDIT Wave 1 (75 core-topical blogs). GBP profile depth quick wins (categories, attributes, description, photos, Q&A, booking URL). Disavow file generated. LegitScript verification. Local Dominator tracking expansion to 4 clusters.
- **M2 — Service-page rebuild depth + cleanup at scale + GBP post cadence.** Wave 2 sub-pages (opioid-detox + short-term-rehab). /admissions rebuild. AUDIT Wave 2 (~250 URLs). DELETE 99 thin/orphan blogs. Schema deployment on all KEEP pages. Topical-local citations Phase 2. Map-pack grid coverage analysis. GBP post cadence 2/week.
- **M3 — Hub + redirect capture + earned mentions + Q3 setup.** Wave 3 sub-pages (drug-detox + benzodiazepine-detox). All `/services/*` orphans retired. AUDIT Wave 3 (remaining ~200 URLs). Earned-mention outreach (Brooklyn/NYC publications). Backlinks re-pull for disavow effect measurement. Quarterly performance report. Q3 planning sets up the next-quarter framework.

---

## 2. Monthly swim-lane view

| Pillar | M1 (May 12 – Jun 8) | M2 (Jun 9 – Jul 6) | M3 (Jul 7 – Aug 3) |
|---|---|---|---|
| **Core Pages** | Homepage CRD deploys (24 items per brief). /treatments hub upgrades (16 items). Wave 1 sub-pages: `/treatments/alcohol-detox` + `/treatments/dual-diagnosis`. Fix 3 broken 404s (`/about`, `/contact`, `/contact-us.com`). Title+meta rewrite on 23 KEEP pages. | Wave 2 sub-pages: `/treatments/opioid-detox` + `/treatments/short-term-rehab`. `/admissions` page rebuild. `/about-us` named-clinician E-E-A-T expansion. `/faq` page sync with new FAQPage schemas. Service-area on-page enhancement Round 2. | Wave 3 sub-pages: `/treatments/drug-detox` + `/treatments/benzodiazepine-detox`. `/contact-us` page consolidation. Insurance-carrier landing pages (Medicaid, Aetna, Cigna, BCBS). Quarterly content review on all KEEP pages. |
| **Site Structure & Deindexation** | `/services` parent 301. Sitewide HTTPS+www canonical. Sitemap cleanup. 27 NJ + 9 out-of-borough 301 redirects. NOINDEX execution on 121 audited URLs. AUDIT Wave 1 (75 core-topical blogs). `/services/alcohol-detox-services` → `/treatments/alcohol-detox` 301. Disavow file generated + uploaded. PR placement pause. | AUDIT Wave 2 (~250 URLs). DELETE 99 thin/orphan blogs. `/services/opioid-detox-services` → `/treatments/opioid-detox` 301. `/services/comprehensive-short-term-rehab` → `/treatments/short-term-rehab` 301. `/areas-served` page rebuild. Schema deployment on all KEEP pages. Interlinking refactor — locations × services matrix. | AUDIT Wave 3 (remaining ~200 URLs). `/services/drug-detox-services` → `/treatments/drug-detox` 301. `/services/benzodiazepine-detox-services` → `/treatments/benzodiazepine-detox` 301 (captures 147-imp/30d orphan flow). Final sitemap consolidation. Backlinks re-pull (measure spam score 43 → target <30). Quarterly NOINDEX + AUDIT recheck. |
| **GMB & Coverage Areas** | GBP category 5→9 (Counselor, Psychiatrist, Psychologist, Psychotherapist). Description rewrite (OASAS/CARF/MAT/Coney Island, 750 chars). Services list complete. Attributes 5→8. Q&A seeding 4→15. Photo upload 9→30+. Book-online URL. Review velocity 120→140+. Local Dominator expansion: add 3 new tracked clusters (opioid/MAT, dual diagnosis, drug detox). | GBP post cadence 2/week (service offerings + neighborhood). Coverage analysis on 4-cluster LD baseline. Map-pack grid diagnostic per neighborhood. Photo cadence 5–10/month. Q&A maintenance cadence. Topical-local citations Phase 2 (Brooklyn health pubs, NA/AA NYC, NAMI Brooklyn). | Coverage expansion #2 — add service-line × neighborhood tracking. Map-pack rank re-baseline (Q-on-Q delta). GBP profile depth audit (verify parity across 8 dimensions). Earned-mention outreach (Brooklyn/NYC publications). Photo coverage analysis (which photos drive map-pack rank). |
| **Off-Page Authority** | Disavow.txt + PR pause. Backlink portfolio audit per `surfpoint_link_gap.csv` (33 citation gaps + 352 backlink gaps vs ascendantny/acirehab/genesisdob). Tier 1 citations: 7 priority gap targets (rehab.com 3-of-3 + 6 at 2-of-3) + 8 baseline foundational (SAMHSA, NYS OASAS, Psychology Today, BBB, Apple Maps, Bing Places, Foursquare, Healthgrades). NAP audit. Tier 0 grey/black-hat retirement decision (principal-level — CloudPage / Driving Direction / IFTT / GStack in `offpage_program_archive/`). Citations(Deliverable) spreadsheet rebuild (185-row generic → vertical-specific). | Tier 2 citations: 11 single-competitor claimable gaps (sobernation, top10rehabs, yourfirststep, addictioncenter, choosehelp, crunchbase, mapquest, superpages, freerehabcenters, matsdirectory, addictionresource). Backlink investigation: biohackhive.com (3-of-3 competitors) + 13 backlink targets at 2-of-3. Linkable asset Round 1 (Brooklyn detox guide + insurance coverage guide). Recovery community directories (NAMI Brooklyn + NYC, NA/AA NYC, SmartRecovery). Anchor text diversity audit. Press release strategy reset (off the PBN network). | Earned-mention outreach (NY1, Brooklyn Magazine, BKReader, WNYC, Crain's New York Business). Linkable asset Round 2. Backlinks re-pull + spam-score delta measurement (target 43 → <30 directional). Competitor link gap re-pull Q-on-Q. NYS OASAS + SAMHSA listing verification (unlocks Gemini LLM citation surface). |
| **Cross-pillar / dependencies** | LegitScript verification. Clinical roster from Surfpoint Ops (for homepage H-17 + service-page Clinical Team blocks). Schema validation gate operational. | Insurance-carrier logo approval. Cross-account coordination Aleksa+Milica (Surfpoint vs Urban Recovery vs Niagara on shared Brooklyn keywords). | Q3 strategy framework + reporting model output. Cross-Recovery cluster review (territory split across 6 Recovery accounts). LLM citation re-audit. |

---

## 3. Pillar 1 — Core Pages

### 3.1 The problem this pillar fixes

- **Homepage CRD drafted in March, not deployed since April 13** (Asana task `1213398922550813` completed, no follow-up deploy task ever created)
- **`/treatments` ranks at position 2.11 with 985 impressions / 30d** but converts 0.2% — the page wins ranking and loses the click because meta + content depth + schema are all thin
- **5 `/services/*` pages are orphaned** (200 status, 0 internal links, 0 clicks despite minor impression flow)
- **No `/treatments/[service]` sub-pages exist** — there is no dedicated ranking surface per service line
- **Core utility pages have known defects:** `/contact-us` returns 404 on some variants, `/about-us` lacks named clinicians, `/admissions` has no schema, `/areas-served` is generic Brooklyn-info filler with mixed real/doorway link targets, `/faq` is disconnected from the new FAQ content surfacing on homepage and service pages
- **Per Q2 strategy doc §2.2** — the interlinking SOP gives services 15 link-plan rows vs 305 for locations and 423 for blogs; service pages are the revenue surface but get zero contextual inbound

### 3.2 Month 1 — Core Pages (ships May 12 – Jun 8)

| # | Action | Trackable brief | Owner | Acceptance |
|---|---|---|---|---|
| C1-01 | Deploy homepage CRD + 9 beyond-CRD additions | [`Surfpoint_Homepage_Update_Brief.md`](Surfpoint_Homepage_Update_Brief.md) (24 items, H-01 to H-24) | Aleksa + Content + Dev | All 24 items checked; schema validator pass; mobile + desktop verified; CTAs all route to intake (646); GSC URL inspection submitted post-deploy |
| C1-02 | `/treatments` hub upgrade | [`Surfpoint_Treatments_Hub_Update_Brief.md`](Surfpoint_Treatments_Hub_Update_Brief.md) (16 items, T-01 to T-16) | Aleksa + Content | All 15 non-rolling items shipped; H2 anchor IDs live (required for C1-01 link contract); schema validator pass; 30-day post-deploy CTR ≥ 1% (current 0.2%) |
| C1-03 | Build `/treatments/alcohol-detox` (Wave 1) | [`Surfpoint_Treatments_SubPages_BuildPlan.md`](Surfpoint_Treatments_SubPages_BuildPlan.md) §4.1 | Aleksa + Content | Universal template sections deployed; schema + form + Areas We Serve block + named MAT clinician; 1,400–1,600 words; Rich Results Test pass |
| C1-04 | Build `/treatments/dual-diagnosis` (Wave 1) | [`Surfpoint_Treatments_SubPages_BuildPlan.md`](Surfpoint_Treatments_SubPages_BuildPlan.md) §4.2 | Aleksa + Content | Universal template; KD 2.9 cluster (lowest in universe); CBT-grounded content; 1,300–1,500 words |
| C1-05 | Fix 3 broken 404s on revenue-surface URLs | Per Q2 strategy §3.5 — `/about`, `/contact`, `/contact-us.com` | Aleksa | All three return 200 or 301; crawl signals confirmed in GSC |
| C1-06 | Title + meta rewrite for 23 KEEP pages | Per Q2 strategy §3.5 + CTR-optimization SOP. Anchor on `recovery center brooklyn` (10,512 imp / 0 clicks at pos 3.71) | Aleksa | Per-page title + meta deployed; GSC monitored 30d for CTR uplift |

**M1 Pillar 1 acceptance:** Homepage live with all 24 items. /treatments hub live with all 15 non-rolling items. Two sub-pages live with schema validator pass. All 3 broken 404s fixed. 23 KEEP page title+meta rewrites deployed.

### 3.3 Month 2 — Core Pages (ships Jun 9 – Jul 6)

| # | Action | Notes |
|---|---|---|
| C2-01 | Build `/treatments/opioid-detox` (Wave 2, MAT-combined) | Two query clusters in one URL — `opioid detox brooklyn` + `medication assisted treatment brooklyn`. 1,500–1,800 words. Named MAT-supervising clinician (depends on Surfpoint Ops roster delivery in M1). Mount Sinai is rank #1 on clean MAT query but outpatient — Surfpoint's inpatient MAT angle is structurally underclaimed. |
| C2-02 | Build `/treatments/short-term-rehab` (Wave 2) | Lowest competition in entire SERP universe — only Urban Recovery (HQDM) ranks in top 12 among real providers. 1,300–1,500 words. Easiest measurable win. |
| C2-03 | `/admissions` page rebuild | Currently thin — needs form (consolidated with homepage form), insurance-carrier section, what-to-expect content, intake process explanation, schema. Recommended H2 structure: Begin Admission · Insurance We Accept · What to Expect at Intake · 24/7 Intake Process · Privacy & Confidentiality. Schema: WebPage + ContactPage (existing) + FAQPage. |
| C2-04 | `/about-us` page expansion | Add named clinical team (matches homepage H-17 from M1). Add facility tour photos. Add accreditation badges (OASAS, CARF, SAMHSA-alignment, LegitScript if verified). Schema: AboutPage + Person entities for named clinicians. |
| C2-05 | `/faq` page sync with new FAQPage schema | Consolidate the FAQ content shipped on homepage + each new sub-page into the canonical /faq destination. Use FAQPage schema with `@id` cross-references so the canonical entity is at /faq. |
| C2-06 | Service-area on-page enhancement Round 2 | Per Q2 strategy doc §M2-09 + locations × services matrix. Each retained location page gets a "Services Available in [Neighborhood]" block linking to all 5 service pages. Per-location quality pass. |

**M2 Pillar 1 acceptance:** 4 sub-pages live (cumulative across Waves 1 + 2). /admissions, /about-us, /faq rebuilt with schema validator pass. Locations × services matrix executes on at least 10 retained location pages.

### 3.4 Month 3 — Core Pages (ships Jul 7 – Aug 3)

| # | Action | Notes |
|---|---|---|
| C3-01 | Build `/treatments/drug-detox` (Wave 3, hub parent) | Biggest cluster (6,130 addressable) but hardest competition (KD 46.9). Architectural role: parent for substance-specific pages. 1,400–1,600 words. |
| C3-02 | Build `/treatments/benzodiazepine-detox` (Wave 3) | Captures the 147-imp/30d orphan flow from `/services/benzodiazepine-detox-services` (1,925 imps/365d at pos 18-30). Names Xanax / Klonopin / Ativan / Valium. 1,400–1,600 words. |
| C3-03 | `/contact-us` page consolidation | Currently broken (3 URL variants: `/contact`, `/contact-us`, `/contact-us.com`). Consolidate to canonical `/contact-us`. 301 the other variants. Full NAP block with 2-phone role markup per homepage H-22. Service-area map iframe. |
| C3-04 | Insurance-carrier landing pages (4 pages) | New: `/insurance/medicaid`, `/insurance/aetna`, `/insurance/cigna`, `/insurance/bluecross-blueshield`. Each page: carrier-specific copy, "Verify Your Coverage" CTA, FAQ block. Captures insurance-modified query surface that no competitor occupies. |
| C3-05 | Quarterly content review on all KEEP pages | Audit-back path per Q2 strategy doc §M3-04. Some NOINDEX URLs may unblock if rankings recover and value is demonstrated. |

**M3 Pillar 1 acceptance:** All 6 sub-pages live. /contact-us consolidated. 4 insurance landing pages live. Quarterly content review documented with re-bucketing decisions.

---

## 4. Pillar 2 — Site Structure & Deindexation

### 4.1 The problem this pillar fixes

- **877 URL footprint** with **756 pages "Crawled — not indexed" or "Discovered — not indexed"** per GSC Coverage 2026-05-08
- **GSC daily impressions trending −79% peak-to-current over 87 days** — Google is actively de-indexing legacy content
- **27 NJ + 9 out-of-borough doorway pages exist** — compliance risk (GBP suspension possible from out-of-state addresses claiming Brooklyn service)
- **5 `/services/*` orphan URLs** receive 162 impressions / 0 clicks in 30 days; redirect-target ready when sub-pages ship
- **`/services` parent returns 404** while child URLs return 200 — technical defect
- **Protocol/subdomain variants leaking impressions** (`http://`, no-www) — pre-existing canonicalization defect
- **Backlinks spam score 43** (vs national benchmarks 16–24); 3 of 3 tested PR placements confirmed PBN-adjacent
- **99% of backlinks point to homepage** — per-page link equity isn't a viable optimization lever; topical-authority lens dominates the bucket decision
- **Interlinking SOP** (per `Surfpoint Recovery - Interlinking.xlsx`) routes 305 link-plan rows to locations, 423 to blog, 15 to services — service pages get zero contextual inbound

### 4.2 Month 1 — Site Structure & Deindexation (ships May 12 – Jun 8)

| # | Action | Trackable brief | Owner | Acceptance |
|---|---|---|---|---|
| S1-01 | `/services` parent 301 → `/treatments` | [`Surfpoint_Services_Legacy_Redirect_Plan.md`](Surfpoint_Services_Legacy_Redirect_Plan.md) §2.3 | Aleksa + Dev | Curl confirms 301; no chain |
| S1-02 | Sitewide HTTPS + www canonical rule | Same plan §2.3 | Aleksa + Dev | All non-canonical variants 301 to `https://www.` |
| S1-03 | Sitemap cleanup — remove `/services/*`, add `/treatments` | Same plan §3.2 | Aleksa | Sitemap re-submitted to GSC |
| S1-04 | 27 NJ + 9 out-of-borough doorway 301 redirects → `/areas-served` | Per Q2 strategy §M1-04 | Aleksa + Dev | All 36 URLs return 301; GBP suspension risk eliminated |
| S1-05 | NOINDEX execution on 121 already-audited URLs | Per Q2 strategy decision matrix v2 (down from 447 in framework v1 after topical+backlinks overlay) | Aleksa | `<meta robots="noindex,follow">` deployed on 121 URLs |
| S1-06 | AUDIT triage Wave 1 — 75 core-topical blogs | Per Q2 strategy §M1-03. Per-URL decision: rewrite + internal-link to service / NOINDEX / REDIRECT. Sets the pattern for remaining 480 URLs. | Content + On-Page | Decisions sheet + rewrite briefs for Content |
| S1-07 | `/services/alcohol-detox-services` → `/treatments/alcohol-detox` 301 | Legacy redirect plan §2.2 — ships **after** C1-03 Wave 1 sub-page goes live | Aleksa | Curl confirms 301; GSC URL inspection on orphan shows redirect within 7d |
| S1-08 | Generate disavow.txt from PBN cluster + upload to GSC | Per Q2 strategy §M1-05. Pull `backlinks/live` data, filter PBN-pattern sources, upload via GSC. | Off-Page + Aleksandar | Disavow file uploaded; PR placements paused |
| S1-09 | Pause new PR placements | Same | Julce (Off-Page) | No new placements; policy memo signed off |

**M1 Pillar 2 acceptance:** Parent + canonical + sitemap cleanup live. 36 doorways redirected. 121 URLs NOINDEXed. AUDIT Wave 1 decisions documented. Disavow uploaded. PR pause in effect.

### 4.3 Month 2 — Site Structure & Deindexation (ships Jun 9 – Jul 6)

| # | Action | Notes |
|---|---|---|
| S2-01 | AUDIT triage Wave 2 — ~250 URLs | Continues the Wave 1 pattern. Targets the core-topical blogs (367 total flagged for AUDIT in decision matrix v2). |
| S2-02 | DELETE 99 thin/orphan blog posts | Per Q2 strategy §M2-05. Down from 223 in framework v1 — topical overlay preserved 124 core-topical. 410 / removal via WordPress. |
| S2-03 | `/services/opioid-detox-services` → `/treatments/opioid-detox` 301 | Ships after C2-01 |
| S2-04 | `/services/comprehensive-short-term-rehab` → `/treatments/short-term-rehab` 301 | Ships after C2-02 |
| S2-05 | `/areas-served` page rebuild | Currently broken (mixed real/doorway link targets + generic Brooklyn-info filler). Rebuild as proper locations hub with real-catchment-only link list + service-area map + city/neighborhood structure. Schema: CollectionPage + ItemList of Place entities. |
| S2-06 | Schema deployment on all KEEP pages | Per Q2 strategy §M2-09. MedicalBusiness homepage upgrade (already done in C1-01), Service per service page (done in C1-03/04 + C2-01/02), Place per retained location page, Article per retained blog. |
| S2-07 | Interlinking refactor — locations × services matrix | Per Q2 strategy §M2-03. Each retained blog adds 3–5 contextual links to relevant service page. Each retained location page adds "Services Available in [Neighborhood]" block linking to all 5 service pages. Build the matrix. Target: every service page reaches 50+ contextual inbound links by end of M3. |
| S2-08 | Topical local citations Phase 2 | Per Q2 strategy §M2-06. Brooklyn health publications, NA/AA NYC, NAMI Brooklyn/NYC, rehab.com (case-by-case). 5–10 topical-local citations live. |

**M2 Pillar 2 acceptance:** AUDIT Wave 2 complete (~325 URLs total reviewed). 99 DELETE actions executed. 2 more orphan redirects live. /areas-served rebuilt. Schema deployed across all KEEP pages.

### 4.4 Month 3 — Site Structure & Deindexation (ships Jul 7 – Aug 3)

| # | Action | Notes |
|---|---|---|
| S3-01 | AUDIT triage Wave 3 — remaining ~200 URLs | Closes the 555-URL AUDIT queue |
| S3-02 | `/services/drug-detox-services` → `/treatments/drug-detox` 301 | Ships after C3-01 |
| S3-03 | `/services/benzodiazepine-detox-services` → `/treatments/benzodiazepine-detox` 301 | Ships after C3-02. **Captures the highest-impression orphan flow (147 imp/30d, 1,925 imp/365d).** Verify 30-day post-redirect: destination sub-page inherits orphan impressions; position improves from ~25 toward 10-15; CTR rises 0% → ≥2%. |
| S3-04 | Final sitemap consolidation | All `/services/*` removed; all `/treatments/[service]` URLs added; all KEEP pages verified in sitemap; submission to GSC. |
| S3-05 | Verify zero `/services/*` URLs return 200 sitewide | Crawl sweep; final cleanup. |
| S3-06 | Backlinks re-pull at end of Q2 | Per Q2 strategy §M3-06. Measure spam-score trend post-disavow (target 43 → <30). |
| S3-07 | Quarterly NOINDEX + AUDIT recheck | Per Q2 strategy §M3-04. Some NOINDEX URLs may unblock if rankings recover and topical authority demonstrated. |

**M3 Pillar 2 acceptance:** All 555 AUDIT URLs decisioned. All 5 `/services/*` orphans retired. Zero `/services/*` URLs return 200. Backlinks re-pulled and spam score delta measured. Quarterly audit-back documented.

---

## 5. Pillar 3 — GMB Optimization & Coverage Areas

### 5.1 The problem this pillar fixes

- **Surfpoint dominates immediate Coney Island map pack** (rank 1.47 / 96% top-3 on `alcohol rehab brooklyn` per Local Dominator)
- **But profile depth lags the competitive leader on every dimension:**
  - Categories: 5 vs Ascendant's 9 (Counselor + Psychiatrist + Psychologist + Psychotherapist missing)
  - Attributes: 5 vs Mountainside's 7 (onsite services, wheelchair parking, restroom unisex missing)
  - Photos: 9 vs Ascendant 90 / Mountainside 30 — **lowest count of any direct competitor**
  - Q&A: 4 vs Urban 15 / ACI 10
  - Booking URL: none (no competitor has this either — unique differentiator opportunity)
  - Description: generic; doesn't pack OASAS/CARF/MAT/Coney Island
- **Local Dominator tracks only `alcohol rehab brooklyn`** — no baseline on opioid/MAT, dual diagnosis, drug detox, short-term inpatient
- **Coverage areas claim is "South Brooklyn"** but the on-page neighborhood enumeration is broken (current `/areas-served` mixes real and doorway URLs)
- **Cross-account competitive surface** — 2 of 9 organic competitors are HQDM Tier 1 Recovery clients (Urban Recovery + Niagara Recovery). Coordination question for Milica + Aleksa on territory split.

### 5.2 Month 1 — GBP profile depth + coverage tracking expansion (ships May 12 – Jun 8)

| # | Action | Brief | Owner | Acceptance |
|---|---|---|---|---|
| G1-01 | Category expansion 5 → 9 | Add Counselor + Psychiatrist + Psychologist + Psychotherapist. **Depends on Surfpoint Ops confirming on-staff clinical roster.** | GBP Ops + Aleksa + Surfpoint Ops | All 4 new categories live in GBP Manager; verified via DataForSEO Business Data re-scrape |
| G1-02 | Description rewrite | Pack OASAS-licensed / CARF Center of Excellence / MAT (buprenorphine + naltrexone) / dual diagnosis / Medicaid + Aetna + Cigna + BCBS / Coney Island into 750 chars. | GBP Ops + Aleksa | New description live; renders in knowledge panel |
| G1-03 | Services list complete | Add all 5 service lines: alcohol detox, opioid detox + MAT, drug detox, benzo detox, short-term rehab + dual diagnosis. | GBP Ops | All 5 services visible in GBP services list; service-specific map-pack relevance signal active |
| G1-04 | Attribute completion 5 → 8 | `service_options:has_onsite_services` + `accessibility:has_wheelchair_accessible_parking` + `amenities:has_restroom_unisex`. | GBP Ops | 3 attributes added; filter eligibility verified in GBP search |
| G1-05 | Q&A seeding 4 → 15 | Seed 11 new Q&As: insurance accepted, what to bring to intake, family visitation policy, MAT specifics, length of stay, payment plan options, dual diagnosis details, OASAS license details, CARF accreditation, parking + accessibility, after-hours intake. | GBP Ops + Aleksa | 15 Q&As visible; trust signal density at competitive parity |
| G1-06 | Photo upload 9 → 30+ | Facility exterior, clinical areas, common spaces, neighborhood / Coney Island context shots, staff portraits (when clinical roster confirms). | GBP Ops + Surfpoint Ops | 30+ photos live; close gap vs Ascendant (90), Mountainside (30) |
| G1-07 | Book-online URL configured | Calendly or HubSpot intake. **Unique differentiator — no competitor in the audit set has this configured.** | GBP Ops + Aleksa | "Book online" CTA visible in GBP knowledge panel |
| G1-08 | Review velocity 120 → 140+ | Structured discharge-time review request cadence. Maintain current 4.8★ rating. | GBP Ops | 140+ reviews; rating maintained; outpace Urban Recovery (111) |
| G1-09 | Local Dominator coverage expansion | Add tracking on: `opioid rehab brooklyn`, `medication assisted treatment brooklyn`, `dual diagnosis brooklyn`, `drug detox brooklyn`. (Currently only `alcohol rehab brooklyn` tracked.) | Aleksa + Marija | 4 keyword grids tracking; baseline Q-on-Q comparison ready for M3 |
| G1-10 | Foundational citations Phase 1 | Psychology Today, SAMHSA Treatment Locator, NYS OASAS Find a Provider, BBB, Apple Maps, Bing Places, Foursquare, Healthgrades, Yelp claim/optimization. 8–10 vertical-specific citations. **Also unlocks Gemini LLM citation surface** (Gemini leans on gov directories). | Off-Page + GBP + Aleksa | 8+ citations live; NAP consistency verified across all |

**M1 Pillar 3 acceptance:** All 8 GBP profile dimensions at or above competitive parity (categories, attributes, photos, Q&A, description, services list, booking link, review velocity). Local Dominator tracking expanded from 1 → 5 keyword clusters. 8+ foundational citations live.

### 5.3 Month 2 — Post cadence + coverage diagnostic + citations Phase 2 (ships Jun 9 – Jul 6)

| # | Action | Notes |
|---|---|---|
| G2-01 | GBP post cadence — 2/week | Service offerings (week 1 = MAT specifics, week 2 = dual diagnosis, week 3 = benzo detox safety, week 4 = aftercare planning) + neighborhood content (week 1 = Coney Island, week 2 = Bay Ridge, week 3 = Bensonhurst, week 4 = Brighton Beach). Post count target: 1 → 10+ active. |
| G2-02 | Coverage analysis on 4-cluster LD baseline | After 30+ days of new keyword tracking, analyze map-pack ranks per cluster. Identify which grids show Surfpoint rank 2-3 (improvement opportunities) vs rank 5+ (architecture problems). |
| G2-03 | Map-pack grid diagnostic per neighborhood | Per Q2 strategy §1.3 — across broader Brooklyn cluster grids, avg rank slips to 2.98–4.97 (drug, detox, inpatient). Identify the 3-5 neighborhoods where Surfpoint shows weakest map presence relative to demand. Action plan per neighborhood. |
| G2-04 | Photo cadence | 5–10 new photos per month. Categories: clinical activity shots, exterior/neighborhood, staff (post-roster confirmation), facility tours, before/after stories with consent. Verify EXIF / geo-data on uploads where possible. |
| G2-05 | Q&A maintenance cadence | Respond to new questions within 24h. Monthly batch — add 2–3 new seeded Q&As targeted at gap topics identified in G1-05. |
| G2-06 | Topical-local citations Phase 2 | Brooklyn health publications, NA/AA NYC, NAMI Brooklyn/NYC, rehab.com (case-by-case). 5–10 topical-local citations live. |
| G2-07 | Cross-account coordination Aleksa + Milica | Surfpoint vs Urban Recovery + Niagara Recovery on Brooklyn map pack and shared organic keyword surface. Document a territory split: Urban owns Red Hook + Sunset Park; Surfpoint owns Coney Island + Bay Ridge; Niagara handles upstate. Per Q2 strategy §4.4 + M3-08. |

**M2 Pillar 3 acceptance:** 10+ GBP posts live. 5-cluster LD baseline with 30+ days of data. Map-pack grid diagnostic complete. 5+ Phase 2 citations live. Cross-account territory split documented.

### 5.4 Month 3 — Coverage expansion + earned mentions + Q3 setup (ships Jul 7 – Aug 3)

| # | Action | Notes |
|---|---|---|
| G3-01 | Coverage expansion #2 | Add Local Dominator tracking on service-line × neighborhood combinations where M2 data justifies. Example candidates: `alcohol detox bay ridge`, `drug rehab bensonhurst`, `inpatient detox brighton beach`, `MAT sunset park`. |
| G3-02 | Map-pack rank re-baseline | Compare M3 ranks vs M1 baseline across all 5 tracked clusters. Identify the largest rank deltas (positive and negative). Causality analysis. |
| G3-03 | GBP profile depth audit | Re-verify parity vs Ascendant / Mountainside / ACI / Urban across all 8 dimensions. Identify any dimension that has fallen behind during M2-M3 (e.g., Ascendant added 5 more photos). |
| G3-04 | Earned-mention outreach | Per Q2 strategy §M3-01. 3–5 real Brooklyn/NYC publications (NY1, Brooklyn Magazine, local NPR, real health/recovery editorial). Pitch named-clinician bylines. Target: 1–2 quality earned mentions; D-A backlinks. |
| G3-05 | Photo coverage analysis | Which photos drive map-pack ranking improvements? Compare M1 / M2 / M3 photo additions against rank movements on the 5 tracked clusters. Pattern recognition feeds Q3 photo strategy. |
| G3-06 | Quarterly GBP performance report | Planned → executed → impact correlation. First report under the strategy-first reporting model (per `project_hqdm_reporting_state.md` + `project_hqdm_strategy_rollout.md`). |
| G3-07 | LLM citation re-audit | Re-run `scripts/llm_visibility_surfpoint.py` end of M3. Target: 9/10 commercial-local + 1-2/8 research-phase cite rate (current: 7/10 + 0/8). |

**M3 Pillar 3 acceptance:** Coverage expansion completed. Map-pack rank delta measured Q-on-Q. GBP profile parity re-verified. 1–2 earned mentions live or in publication pipeline. Quarterly performance report delivered.

---

## 6. Pillar 4 — Off-Page Authority (Citations · Backlinks · Earned Mentions)

### 6.1 The problem this pillar fixes

- **Backlinks spam score 43** vs national benchmarks (AAC 16, Recovery Village 24) — load-bearing penalty signal
- **Per `exports/dataforseo/backlinks/competitor_benchmark.csv`:** Surfpoint 942 backlinks / 577 ref domains / 386 ref main domains. Ascendant NY 1,000+ ref domains (API cap), ACI 219, Genesis 52. **Surfpoint's profile shape mirrors Urban Recovery exactly** (Urban 1,642 / 958 / 642 / spam 42) — same PR-placement playbook ran on both HQDM Recovery accounts; both should disavow.
- **3 of 3 tested PR placements confirmed PBN-adjacent.** 10 PR domain target list in `drivedocs/Surfpoint Recovery/` — pending kill decision in M1.
- **99% of backlinks point to homepage** — per-page link equity not viable; topical authority must build through citations + earned mentions, not link equity.
- **Existing April 2026 Citation Report shows only 9 citations live, all low-quality directory spam** (pages24.com, localfeatured.org, gowwwlist.com, 1directory.org, biz411.org, etc.). Zero foundational citations done (no SAMHSA Treatment Locator, no NYS OASAS Find a Provider, no Psychology Today, no BBB, no Apple Maps).
- **Existing OffPage `Citations(Deliverable)` is a 185-row generic template** with Home Services / Legal / Real Estate / Restaurants categories. 0 of 185 marked completed. Critical addiction-treatment-specific targets entirely absent (SAMHSA, NYS OASAS, Psychology Today rehab, AddictionResource, Recovery.org, NAMI Brooklyn, DualDiagnosis.org).
- **Tier 0 grey/black-hat materials present** in `drivedocs/offpage_program_archive/`: CloudPage (doorway pages), Driving Direction (geo-spam), IFTT & GStack (link-stacking). Per `project_hqdm_tier0_exposure.md` — principal-level escalation territory.
- **0 earned editorial mentions** from real Brooklyn/NYC publications.
- **Gemini LLM citation rate = 0** because Gemini leans on government directories (samhsa.gov, oasas.ny.gov) which Surfpoint isn't listed on.

### 6.2 Source of truth: `surfpoint_link_gap.csv` (385 prioritized gap domains)

`clients/surfpointrecovery/deliverable/surfpoint_link_gap.csv` contains the priority-scored backlink + citation gap vs the 3 chosen competitors (ascendantny.com, acirehab.org, genesisdob.com — HQDM clients urbanrecovery + niagararecovery excluded; national chains AAC + Recovery Village excluded as unactionable at Surfpoint's scale).

| Type | Total in gap | 3-of-3 competitors | 2-of-3 | 1-of-3 |
|---|---:|---:|---:|---:|
| Citation | 33 | 1 (rehab.com) | 6 | 26 |
| Backlink | 352 | 1 (biohackhive.com) | 13 | 338 |

**False-positive caveat:** the type classifier substring-matches "recovery.com" inside other peer-rehab domains. ~7-10 rows like `oceansluxuryrehab.com`, `hopebridgerecovery.com`, `aristarecovery.com`, `rosewoodatx.com`, `cobboutpatientdetox.com`, `carolinaoutpatientdetox.com`, `callftx.com`, `100nutrix.com`, and the competitor's own `acirehab.com` are tagged as "citation" but are peer-rehab cross-links / brand domains. **Strip these before sending to Julce** — see §6.7.

### 6.3 Month 1 — Cleanup + Tier 1 citations (ships May 12 – Jun 8)

| # | Action | Cross-ref / Source | Owner | Acceptance |
|---|---|---|---|---|
| O1-01 | Generate disavow.txt from PBN cluster + upload to GSC | Same as S1-08 in Pillar 2 | Julce + Aleksandar | File uploaded; PBN domains rejected from inbound profile |
| O1-02 | Pause new PR placements | Same as S1-09 in Pillar 2 | Julce | No new placements; policy memo signed |
| O1-03 | Tier 0 grey/black-hat retirement decision | Principal-level. CloudPage / Driving Direction / IFTT / GStack in `drivedocs/offpage_program_archive/`. Decide: retire entirely / retire selectively / maintain. | Aleksandar → Milica | Decision documented; retirement plan if applicable |
| O1-04 | Citations(Deliverable) spreadsheet rebuild | Replace 185-row generic template (Home Services / Legal / Restaurants) with addiction-treatment + Brooklyn/NYC + behavioral health vertical | Aleksandar + Julce | Rebuilt sheet with Tier 1 / Tier 2 / Tier 3 vertical-relevant only |
| O1-05 | Tier 1 citation submission — **7 gap-priority targets** (per `surfpoint_link_gap.csv`) | 1× 3-of-3 + 6× 2-of-3 — see §6.5 | Julce | All 7 submitted; status tracked in rebuilt spreadsheet |
| O1-06 | Tier 1 citation submission — **8 baseline foundational** (not in gap because competitors also lack some, but industry-standard) | SAMHSA Treatment Locator, NYS OASAS Find a Provider, Psychology Today, BBB, Apple Business Connect, Bing Places, Foursquare, Healthgrades — see §6.5 | Julce + GBP Ops | All 8 submitted; NAP consistency verified |
| O1-07 | NAP consistency audit across existing 9 + new submissions + GBP + footer schema | NAP-canonical decision per Homepage H-22 (intake = primary CTA, facility = secondary on contact/footer only) | Aleksa + Julce | Discrepancies documented; corrections submitted |
| O1-08 | Backlink portfolio audit — categorize 942 backlinks | Per `exports/dataforseo/backlinks/domain_pages.csv` | Aleksandar | Backlinks segmented into PBN-pattern / generic-directory / topical-vertical / earned-mention / quality categories with anchor text diversity profile |
| O1-09 | Linkable asset gap concept identification | List of 2–3 concepts to build in M2 (M3 — Brooklyn detox resource guide; insurance coverage guide; named-clinician thought-leadership content) | Aleksandar + Content | 3 concepts with topic + format + outreach angle |

**M1 Pillar 4 acceptance:** Disavow uploaded. PR pause in effect. Tier 0 retirement decision documented. Citations spreadsheet rebuilt vertical-specific. 15 Tier 1 citations submitted (7 gap-priority + 8 baseline foundational). NAP consistency verified. Backlink portfolio audit complete. Linkable asset concepts identified.

### 6.4 Month 2 — Tier 2 citations + backlink targets + linkable asset build (ships Jun 9 – Jul 6)

| # | Action | Source / Notes |
|---|---|---|
| O2-01 | Tier 2 citation submission — **11 single-competitor claimable gaps** | sobernation.com, top10rehabs.com, yourfirststep.org, addictioncenter.com, choosehelp.com, crunchbase.com, mapquest.com, superpages.com, freerehabcenters.org, matsdirectory.com, addictionresource.com (case-by-case quality review) — see §6.5 |
| O2-02 | Recovery community directory submissions | NAMI Brooklyn + NAMI NYC, NA NYC chapter, AA NYC chapter, Al-Anon NYC, SmartRecovery.org, Mental Health America NYC, NYC Well, DualDiagnosis.org. **Vertical-specific industry directories** — not in the competitor gap because competitors also miss many of these, but baseline-required for an OASAS-licensed inpatient program. |
| O2-03 | Backlink target — **biohackhive.com investigation** | **3-of-3 competitor backlink** (rank 51, spam 0). All 3 competitors have inbound from this domain; Surfpoint doesn't. Investigate site quality, identify outreach angle, evaluate replication. Per `surfpoint_link_gap.csv` row 0 of backlinks. |
| O2-04 | Backlink target outreach — **13 backlinks at 2-of-3 competitor coverage** | addictionhelplineamerica.com, prohealthfirst.com, rehab-bookings.com, healthhelplocator.org, elodiebarathe.com, findrecoverynow.org, manninghammedicalcentre.com.au (.au quality check), mountvernondrugrehabcenters.com, betterlocals.com, recuperatuvida.us (Spanish-language), triggrhealth.com, archynetys.com, addicthelp.org — see §6.6. Per-row quality review before outreach. |
| O2-05 | Linkable asset creation Round 1 | Build 1–2 of the concepts from O1-09. Recommended: **"Brooklyn Inpatient Detox & Rehab Resource Guide"** (comprehensive resource page on Surfpoint site listing services, insurance, locations, FAQ — designed to be linkable by Brooklyn health pages, NAMI Brooklyn resource lists, NYC HRA referrals) + **"Insurance Coverage for NY Inpatient Rehab: A Patient Guide"** (carrier-specific overview, links from `/insurance/*` landing pages per C3-04). |
| O2-06 | NYC + Brooklyn local resource page outreach | NYC HRA mental health resource pages; NYC Health Department addiction treatment lists; Brooklyn community board mental health resources; Coney Island community directories. Outreach for listing inclusion. |
| O2-07 | Anchor text diversity audit | Per O1-08 portfolio audit findings — ensure new inbound links acquired in M2 don't over-concentrate on `drug rehab brooklyn` exact-match. Target mix: ~30% branded, ~30% partial-match, ~25% URL/naked, ~15% generic ("here," "this resource"). |
| O2-08 | Press release strategy reset | Existing `Press Release(Deliverable)` cadence (months 1/3/5/7 bi-monthly) was running on PBN-adjacent networks per O1-01. Pause that cadence. Replace with editorial-pitch outreach plan as foundation for M3 earned-mention work. |
| O2-09 | Backlink monitoring setup | DataForSEO Backlinks weekly pull + alert on spam-score change >2 points + alert on toxic-anchor inbound. Reuse `scripts/lib/dataforseo_client.py` framework. |

**M2 Pillar 4 acceptance:** 11 Tier 2 citations submitted. 8+ recovery community directories submitted. biohackhive.com investigation completed. 13 backlink targets quality-reviewed; 5+ outreach pitches sent. Linkable asset Round 1 published. 5+ local resource page pitches sent. Anchor text diversity baseline established. Press release strategy reset. Weekly backlink monitoring operational.

### 6.5 Month 3 — Earned mentions + Gemini unlock + measurement (ships Jul 7 – Aug 3)

| # | Action | Notes |
|---|---|---|
| O3-01 | Earned-mention outreach — Brooklyn/NYC publications | Per Q2 strategy §M3-01. Targets: NY1 (health beat), Brooklyn Magazine, BKLYNer, BKReader, Brooklyn Eagle, WNYC (health desk), The City, Crain's New York Business (health business angle). Pitch named-clinician bylines on dual diagnosis, MAT, benzo detox safety topics. |
| O3-02 | Press release for newsworthy moment | If applicable: new clinician hire, LegitScript verification (per Cross-pillar), accreditation milestone, community event. Distribute via PRNewswire / equivalent (NOT the PBN network). Earns 1–2 syndicated mentions. |
| O3-03 | Linkable asset creation Round 2 | Second concept from O1-09. Recommended: "What Happens in Detox: A Brooklyn Patient's First 24 Hours" — patient-journey content (leverages homepage H-18 + service-page rebuild content), designed for syndication / earned-mention pitching. |
| O3-04 | Backlinks re-pull and spam-score measurement | Same as S3-06 in Pillar 2. Pull DataForSEO Backlinks at end of M3. Compare vs M1 baseline. Target: spam 43 → <30 (directional realistic 43 → 35–37). |
| O3-05 | Competitor link gap re-pull | Re-run `scripts/competitor_link_gap_surfpoint.py` at end of M3. Compare to M1 baseline — measure how many of the 33 citation gaps + 352 backlink gaps were closed. |
| O3-06 | NYS OASAS + SAMHSA listing verification | Confirm Surfpoint listings in NYS OASAS Find a Provider + SAMHSA Treatment Locator (submitted in O1-06) are live, accurate, and indexed. **This unlocks the Gemini LLM citation surface** (Gemini-2 leans on these gov directories for treatment recommendations). |
| O3-07 | Quarterly off-page program audit | What worked in M1-M3? What didn't? What changes for Q3? Cross-reference with strategy-first reporting model. Feed Q3 framework. |

**M3 Pillar 4 acceptance:** 8+ earned-mention pitches sent. 1–2 mentions live or in editorial pipeline. Round 2 linkable asset published. Backlinks re-pulled; spam-score delta measured. Competitor link gap re-pulled; gap closure rate measured. NYS OASAS + SAMHSA listings verified. Quarterly off-page audit completed.

### 6.6 Citation target list — full priority-ordered (M1 + M2 reference)

**Source:** `surfpoint_link_gap.csv` filtered by `type=citation`, false positives stripped (see §6.7).

#### Tier 1 — Priority gap targets (M1 O1-05) — 7 targets

| Priority | Domain | Competitor coverage | Rank | Spam | Why it's the target |
|---|---|---|---:|---:|---|
| 1 | rehab.com | **3-of-3** (ascendantny + acirehab + genesisdob) | 104 | 0 | Only citation domain ALL 3 competitors share — top-priority gap |
| 2 | sobasearch.com | 2-of-3 (ascendantny + genesisdob) | 72 | 0 | Two of 3 cover it; quality 0 spam |
| 3 | addictionresource.com | 2-of-3 (ascendantny + acirehab) | 7 | 0 | High-rank addiction-treatment vertical directory |
| 4 | rehabspot.com | 2-of-3 (ascendantny + acirehab) | 0 | 0 | Vertical directory; case-by-case quality |
| 5 | betteraddictioncare.com | 2-of-3 (ascendantny + acirehab) | 0 | 0 | Vertical directory |
| 6 | quest2recovery.com | 2-of-3 (ascendantny + acirehab) | 0 | 0 | Vertical directory |
| 7 | hoursfinder.com | 2-of-3 (ascendantny + acirehab) | 0 | 0 | Generic + vertical-relevant |

#### Tier 1 — Baseline foundational (M1 O1-06) — 8 targets

These are not all in the gap (some competitors also lack them) but are industry-standard for OASAS-licensed inpatient programs and unlock specific surfaces:

| Domain | Why baseline-required |
|---|---|
| SAMHSA Treatment Locator (findtreatment.samhsa.gov) | Federal directory; **highest-priority addiction-treatment citation**; unlocks Gemini LLM surface |
| NYS OASAS Find a Provider (oasas.ny.gov) | State-required for OASAS-licensed providers; unlocks Gemini |
| Psychology Today (psychologytoday.com/rehab) | Addiction-vertical authority; trust signal for visitors |
| Better Business Bureau (bbb.org) | Generic trust signal — also a 1-of-3 gap (genesisdob has it) |
| Apple Business Connect | Apple Maps + Siri local results |
| Bing Places for Business | Bing Maps + Bing search local |
| Foursquare | Data aggregator |
| Healthgrades | Medical-vertical directory |

#### Tier 2 — Single-competitor claimable gaps (M2 O2-01) — 11 targets

| Domain | Competitor | Rank | Spam | Notes |
|---|---|---:|---:|---|
| top10rehabs.com | ascendantny | 37 | 10 | Vertical directory |
| matsdirectory.com | acirehab | 51 | 20 | Spam-score 20 — borderline; case-by-case |
| freerehabcenters.org | acirehab | 14 | 0 | Vertical-specific; good rank |
| mapquest.com | ascendantny | 0 | 0 | Generic directory aggregator |
| superpages.com | ascendantny | 0 | 0 | Generic directory aggregator |
| addictioncenter.com | ascendantny | 0 | 0 | Vertical — quality review needed |
| yourfirststep.org | acirehab | 0 | 0 | Vertical directory |
| sobernation.com | acirehab | 0 | 0 | Recovery community |
| choosehelp.com | acirehab | 0 | 2 | Mental health + addiction directory |
| crunchbase.com | ascendantny | 0 | 5 | Business-entity citation |
| ceyplex.com | ascendantny | 11 | 7 | Borderline — review before submission |

### 6.7 Backlink target list — top priorities from gap (M2 O2-03 + O2-04)

#### 3-of-3 competitor coverage (M2 O2-03) — 1 target

| Domain | Rank | Spam | Action |
|---|---:|---:|---|
| **biohackhive.com** | 51 | 0 | All 3 competitors have inbound from this domain; Surfpoint doesn't. Investigate site quality first, identify outreach angle, evaluate replication strategy. First action: have Julce visit the site, identify content type and ask whether it's a guest-post network, a real editorial site, or a directory. |

#### 2-of-3 competitor coverage (M2 O2-04) — 13 targets

| Domain | Competitors | Rank | Spam | Pre-outreach quality flag |
|---|---|---:|---:|---|
| addictionhelplineamerica.com | ascendantny + acirehab | 60 | 0 | Vertical directory |
| prohealthfirst.com | ascendantny + acirehab | 51 | 0 | Health-vertical site |
| rehab-bookings.com | ascendantny + acirehab | 51 | 0 | Vertical directory |
| healthhelplocator.org | ascendantny + acirehab | 57 | 5 | Borderline spam — review |
| elodiebarathe.com | ascendantny + acirehab | 35 | 0 | Personal site? — investigate before outreach |
| findrecoverynow.org | ascendantny + acirehab | 7 | 0 | Vertical directory |
| manninghammedicalcentre.com.au | ascendantny + acirehab | 0 | 0 | **.au domain — unlikely to be high-value for US-local; skip** |
| mountvernondrugrehabcenters.com | ascendantny + acirehab | 0 | 0 | Peer rehab — likely cross-link pattern; skip (false-positive-adjacent) |
| betterlocals.com | ascendantny + genesisdob | 0 | 0 | Local directory aggregator |
| recuperatuvida.us | ascendantny + acirehab | 0 | 0 | Spanish-language site — investigate audience fit |
| triggrhealth.com | ascendantny + acirehab | 0 | 0 | Health-tech site |
| archynetys.com | ascendantny + acirehab | 0 | 0 | Investigate |
| addicthelp.org | ascendantny + acirehab | 0 | 0 | Vertical directory |

### 6.8 False positives — strip from outreach lists

Per the substring-match caveat noted in the link-gap analysis, the following domains are tagged "citation" by the classifier but are actually peer-rehab cross-links (PBN-ish pattern from a shared agency). **Do NOT target for citation outreach.** Some may warrant disavow review depending on inbound presence.

| Domain | Why it's a false positive |
|---|---|
| oceansluxuryrehab.com | Peer rehab brand domain |
| hopebridgerecovery.com | Peer rehab brand |
| aristarecovery.com | Peer rehab brand |
| rosewoodatx.com | Peer rehab brand (Austin TX) |
| cobboutpatientdetox.com | Peer rehab brand |
| carolinaoutpatientdetox.com | Peer rehab brand |
| callftx.com | Peer rehab call-tracking pattern |
| 100nutrix.com | Adjacent peer pattern — investigate |
| floridaaddictionresource.com | Geo-mismatch (Florida, not NY) + peer cross-link pattern |
| onedrugrehab.com | Peer rehab |
| soberlink.com | Peer device/service brand |
| acirehab.com | Competitor's own brand domain (acirehab.org is the live site; .com is brand-defensive registration) |
| directory9.net | Generic spam directory |
| best-rehabs.com | Borderline — likely peer aggregator |

### 6.9 Surfpoint vs competitor inbound profile (current state baseline)

Per `exports/dataforseo/backlinks/competitor_benchmark.csv`, 2026-05-11:

| Domain | Backlinks | Ref domains | Ref main domains | Spam score | DA-equivalent rank |
|---|---:|---:|---:|---:|---:|
| **surfpointrecovery.com** | **942** | **577** | **386** | **43** | 193 |
| ascendantny.com | (API-cap at 1,000 ref domains pulled) | — | — | — | — |
| acirehab.org | — | 219 | — | — | — |
| genesisdob.com | — | 52 | — | — | — |
| urbanrecovery.com (HQDM — comparison only, not a target) | 1,642 | 958 | 642 | 42 | 205 |
| americanaddictioncenters.org (national — reference only) | 102,543 | 20,607 | 18,283 | **16** | 416 |
| therecoveryvillage.com (national — reference only) | 160,370 | 13,884 | 12,570 | **24** | 396 |

**Reads:**
- **Spam-score gap to national-brand parity: ~20 points** (43 → ~23). Not achievable in 3 months. M3 directional target: 43 → 35–37.
- Surfpoint and Urban Recovery share exact profile shape — same PBN-adjacent PR playbook on both HQDM Recovery accounts. **Both should disavow.** Disavow file for one informs the other (cross-account efficiency).
- National brands have 100× more backlinks but better spam scores — **quality > quantity validated.**
- Ascendant has the largest competitor ref-domain count of the 3 chosen (API cap hit at 1,000) — most replicable competitor for what "good" looks like at Surfpoint's scale.

---

## 7. Cross-pillar dependencies + sequencing

### 7.1 Hard dependencies (X must ship before Y can begin)

| Dependency | Source pillar | Blocks | Date |
|---|---|---|---|
| Clinical roster from Surfpoint Ops | Cross-pillar | Homepage H-17 (P1), service-page Clinical Team blocks (P1), GBP staff photo additions (P3) | M1 Week 1 |
| Surfpoint Ops verification of category eligibility | Cross-pillar | GBP category expansion G1-01 (P3) | M1 Week 1 |
| Insurance carrier logos brand-approved | Cross-pillar | Homepage H-16 (P1), service-page insurance sections (P1) | M1 Week 2 |
| Homepage CRD shipped (C1-01) | P1 | /treatments hub H2 anchor IDs need to land before homepage H-23 contextual links resolve correctly | M1 Week 2-3 |
| /treatments hub H2 anchor IDs (T-05) | P1 | Homepage H-23 contextual links to `/treatments#anchor` | M1 Week 2 |
| `/treatments/[service]` Wave 1 sub-pages live (C1-03, C1-04) | P1 | `/services/*` Wave 1 redirects can execute (S1-07) | M1 Week 4 |
| `/treatments/[service]` Wave 2 sub-pages live (C2-01, C2-02) | P1 | `/services/*` Wave 2 redirects (S2-03, S2-04) | M2 Week 4 |
| `/treatments/[service]` Wave 3 sub-pages live (C3-01, C3-02) | P1 | `/services/*` Wave 3 redirects (S3-02, S3-03) | M3 Week 4 |
| Schema validation gate operational | Cross-pillar | All schema deployments across P1 + P2 | M1 Week 1 |
| Foundational citations Phase 1 (G1-10) | P3 | NAP consistency across new citations + Gemini LLM citation unlock | M1 Week 3-4 |
| LegitScript verification | Cross-pillar | Future paid acquisition decisions; schema `hasCredential` array | M1 Week 2 |

### 7.2 Soft dependencies (preferred sequence, not blocking)

- AUDIT Wave 1 (S1-06) preferentially completes before C1-06 KEEP page title+meta rewrite — avoids working on URLs flagged for action
- GBP description rewrite (G1-02) preferentially aligns with homepage meta description (H-02) for entity consistency
- Local Dominator expansion (G1-09) preferentially lands early in M1 so 30+ days of baseline data exists by M2-02 coverage analysis

### 7.3 Items intentionally NOT in M1-M3

| Item | Reason | Future |
|---|---|---|
| Paid acquisition strategy | Gated by LegitScript verification (M1) | Q3 if cleared |
| Neighborhood × service expansion pages (e.g., `/treatments/alcohol-detox-bay-ridge`) | Volume justification needed first | Post-Q3 if data justifies |
| Spanish-language versions | Translation + cultural review required | Future quarter |
| Aftercare / sober living pages | Not in Surfpoint service mix | Out of scope |
| PHP / IOP pages | Surfpoint is inpatient-only | Out of scope |

---

## 8. Success metrics + reporting cadence

### 8.1 Per-pillar success metrics (90-day target post-M3)

**Pillar 1 — Core Pages:**
- Service-page sessions (5 sub-pages + homepage + /treatments hub combined, 90d): 104 → 600+
- Service-page conversions (direct attribution): 0 → 8–15
- Service-page top-10 ranking on anchor queries: 0/6 → 4/6
- Homepage avg position on `drug rehab brooklyn` cluster: 5.8 → 3.0
- Rich-result eligibility (FAQ, Review, AggregateRating): 0 types → 3 types active
- `/treatments` hub CTR: 0.2% → ≥1.5%

**Pillar 2 — Site Structure & Deindexation:**
- 555 AUDIT URL queue: 0% decisioned → 100% decisioned
- `/services/*` orphan URLs returning 200: 5 → 0
- Spam score (DataForSEO Backlinks): 43 → <30
- Service-page contextual inbound count: 0 → 50+ each
- 36 doorway URLs returning 200: 36 → 0
- GSC daily impressions trend: −79% peak-to-current → reversed (stabilized or growing)

**Pillar 3 — GMB Optimization & Coverage:**
- GBP categories: 5 → 9
- GBP photos: 9 → 50+ (cumulative M1 + M2 + M3 additions)
- GBP Q&A: 4 → 18+
- GBP reviews: 120 → 160+
- Map-pack rank baseline expansion: 1 keyword cluster → 5+ keyword clusters tracked
- Surfpoint cited in LLM commercial-local prompts: 7/10 → 9/10
- Surfpoint cited in LLM research-phase prompts: 0/8 → 2/8

**Pillar 4 — Off-Page Authority:**
- Backlinks spam score: 43 → 35–37 (directional M3 target; national-brand parity 16–24 is post-Q3 trajectory)
- Tier 1 citations live (gap-priority + baseline foundational): 9 spam-only currently → 23+ vertical-relevant (15 from M1 + 11 from M2)
- 33 citation gaps closed (per `surfpoint_link_gap.csv`): 0% → ~70%
- 352 backlink gaps targeted: 0 → top-priority subset (biohackhive.com + 13 2-of-3) quality-reviewed and outreached
- Earned editorial mentions from real Brooklyn/NYC publications: 0 → 1–2 live + 5+ in editorial pipeline
- Linkable assets live on site (designed to be link-target): 0 → 2
- NYS OASAS + SAMHSA Treatment Locator listings: not listed → live + indexed (unlocks Gemini LLM citation surface)
- Tier 0 grey/black-hat retirement decision: pending → documented (principal-level)
- Citations(Deliverable) spreadsheet: 0% vertical-relevant (185 generic) → 100% (rebuilt addiction-treatment-specific)

### 8.2 Reporting cadence

- **Weekly:** Aleksandar → Milica/Marija status update (Slack or async doc). Format: what shipped this week × pillar / what's blocked / what's next. ~10-line update.
- **Biweekly:** Aleksandar + Aleksa review session. Format: per-pillar checklist progress + dependency status + risk flags. Live working session.
- **Monthly:** Strategy-first quarterly report (per `project_hqdm_strategy_rollout.md`). Format: planned → executed → impact correlation. Marija pulls from this for client-facing reporting.
- **End of M3:** Quarterly performance report + Q3 framework setup.

### 8.3 Tracking infrastructure

- **Asana** — Each item in this plan exists as an Asana task. Source-of-truth lives in this document (`Surfpoint_3Month_Plan_2026Q2-Q3.md`); Asana mirrors progress.
- **Drive** — All briefs in `clients/surfpointrecovery/deliverable/` + this plan in `ZZ [Aleksandar] Working Folder / Surfpoint Recovery /`
- **GSC + GA4** — Pillar 1 + 2 metrics
- **DataForSEO Business Data + Local Dominator** — Pillar 3 metrics
- **DataForSEO Backlinks** — Pillar 2 spam-score + Pillar 3 earned-mention tracking
- **`scripts/llm_visibility_surfpoint.py`** — Pillar 3 LLM citation re-audits (M2 + M3)

---

## 9. Open inputs + Aleksa feasibility-pass questions

| # | Question | Owner | Affects |
|---|---|---|---|
| 1 | CMS / dev hand-off pattern — WordPress direct edit or dev ticket queue? | Aleksa to confirm | All P1 items |
| 2 | Staging environment available for pre-deploy validation? | Aleksa to confirm | All P1 + P2 schema items |
| 3 | Clinical roster from Surfpoint Ops — names + credentials + photos available by Week 1? | Aleksa to request from Surfpoint Ops | C1-01 (homepage H-17), C1-03/04 + C2-01/02 + C3-01/02 (service-page Clinical Team), C2-04 (/about-us), G1-06 (GBP staff photos) |
| 4 | Insurance carrier logo brand approval — available or text-only fallback? | Aleksa to request | C1-01 (homepage H-16), service-page insurance sections, C3-04 insurance landing pages |
| 5 | GBP category eligibility — does Surfpoint actually have on-staff Counselor, Psychiatrist, Psychologist, Psychotherapist roles? | Aleksa + Surfpoint Ops | G1-01 |
| 6 | LegitScript current status — listed or not? | Aleksandar to query public registry | LegitScript schema entry; paid acquisition gating |
| 7 | Asana task structure — one parent task per pillar + child tasks per item, or one mega-task per item? | Aleksa + Zach | Asana hierarchy + workflow ergonomics |
| 8 | Surfer / DRA on-page tool integration — homepage CRD says "we need the surfer/dra..." (truncated in Asana note) — confirm tooling expectation | Aleksa | C1-01 deploy verification process |
| 9 | Effort estimate per phase × per pillar — Aleksa's hour-bands to Marija for reporting + Zach for scheduling | Aleksa | All pillars |
| 10 | Cross-account coordination — Aleksa + Milica session to scope Recovery cluster keyword/geo split | Aleksandar to schedule | G2-07; affects ranking-cannibalization risk across HQDM Recovery accounts |

---

## 10. Reference

### Sub-briefs (already shipped, referenced inline)

- [`Surfpoint_Homepage_Update_Brief.md`](Surfpoint_Homepage_Update_Brief.md) — 24 items, homepage execution
- [`Surfpoint_Treatments_Hub_Update_Brief.md`](Surfpoint_Treatments_Hub_Update_Brief.md) — 16 items, /treatments hub execution
- [`Surfpoint_Treatments_SubPages_BuildPlan.md`](Surfpoint_Treatments_SubPages_BuildPlan.md) — keyword-data prioritization + per-page content briefs
- [`Surfpoint_Services_Legacy_Redirect_Plan.md`](Surfpoint_Services_Legacy_Redirect_Plan.md) — orphan URL retirement timing + redirect specs
- [`Surfpoint_Task4_Index_Hygiene_Brief.md`](Surfpoint_Task4_Index_Hygiene_Brief.md) — index hygiene + blog consolidation (parallels Pillar 2; consolidates strategy rows M1-03/04/05, M2-06, M3-04)

### Off-page deliverables (Pillar 4 source-of-truth)

- [`surfpoint_link_gap.csv`](surfpoint_link_gap.csv) — **385-row priority-scored backlink + citation gap analysis** vs ascendantny.com + acirehab.org + genesisdob.com (33 citations + 352 backlinks). This is the operational deliverable for Julce.
- [`surfpoint_link_gap_raw_with_lowquality.csv`](surfpoint_link_gap_raw_with_lowquality.csv) — 880-row pre-filter raw version
- `clients/surfpointrecovery/exports/dataforseo/backlinks/{ascendantny,acirehab,genesisdob,surfpoint}/referring_domains.csv` — per-competitor source data
- `clients/surfpointrecovery/exports/dataforseo/backlinks/competitor_benchmark.csv` — spam-score + ref-domain benchmark
- `clients/surfpointrecovery/drivedocs/Citation Report _ HQDM for Surfpoint _ April 2026.xlsx` — pre-existing 9-row spam-directory citation report (must be replaced)
- `clients/surfpointrecovery/drivedocs/offpage_program_archive/OffPage _ Surfpoint recovery.xlsx` — 185-row generic Citations(Deliverable) sheet pending vertical-specific rebuild
- `clients/surfpointrecovery/drivedocs/offpage_program_archive/{CloudPage,Driving Direction,IFTT & GStack,PRs Content,Press Release}/` — Tier 0 grey/black-hat materials pending principal-level retirement decision (per `project_hqdm_tier0_exposure.md`)
- `scripts/competitor_link_gap_surfpoint.py` — reproducible link gap analysis (re-run end of M3 per O3-05)

### Strategic context

- [`Surfpoint_Recovery_Q2_2026_Custom_Strategy.md`](Surfpoint_Recovery_Q2_2026_Custom_Strategy.md) — full diagnostic
- [`Surfpoint_Recovery_Q2_2026_Strategy_Condensed.md`](Surfpoint_Recovery_Q2_2026_Strategy_Condensed.md) — executive summary
- [`Surfpoint_Task1_Rebuild_Plan.md`](Surfpoint_Task1_Rebuild_Plan.md) — consolidated decision document for Task 1 architecture

### Data sources

- `clients/surfpointrecovery/client.json` — config + real_catchment_neighborhoods + services + insurance_accepted
- `clients/surfpointrecovery/exports/competitive_audit/metrics.csv` — 18-URL on-page audit
- `clients/surfpointrecovery/exports/gsc/` — GSC pages + queries 30d/90d/180d/365d
- `clients/surfpointrecovery/exports/dataforseo/` — SERP, GMB profile, backlinks, LLM
- `clients/surfpointrecovery/exports/keyword_universe/` — cluster_summary, transactional top 500

### Methodology

- `methodology/schema-validation-workflow.md` — 3-layer pre-deploy gate
- `methodology/competitor-identification.md` — vertical-strip SOP

---

## 11. Approval & ship date

| Stage | Owner | Action |
|---|---|---|
| Plan draft | Aleksandar | ✓ Complete 2026-05-12 |
| Feasibility pass | Aleksa Popovic | Answer §8 questions; flag effort or capacity concerns |
| Cross-account alignment | Aleksa + Milica | Confirm Surfpoint scope vs Urban + Niagara overlap before M1 Week 1 |
| Asana task creation | Zach DeLorenzo | Lift each tracked item into Asana with this doc as the single reference |
| Surfpoint Ops inputs requested | Aleksa | Clinical roster, insurance logos, category eligibility confirmations (per §8) by M1 Week 1 |
| **M1 kickoff** | All | 2026-05-12 (today) — homepage CRD deploy + GBP profile depth wins are highest-leverage starters |

---

*End of 3-Month Plan. Living document — quarterly review at end of M3 (2026-08-03) sets the Q3 framework.*
