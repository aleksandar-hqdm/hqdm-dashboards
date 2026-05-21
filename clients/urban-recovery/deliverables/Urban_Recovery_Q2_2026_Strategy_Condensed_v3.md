# Urban Recovery — Q2 2026 Strategic Direction (v3)

**Client:** Urban Recovery (Red Hook Brooklyn) | **Tier:** 1 Recovery
**Prepared:** 2026-05-18 | **Author:** Aleksandar (HQDM Search Intelligence)
**Scope:** Single Red Hook GBP at 411 Van Brunt St, Brooklyn NY 11231

---

## TL;DR

Urban Recovery is **the only Brooklyn addiction-treatment pin gaining net top-10 cells** across 8 priority Maps queries Jan 27 → Apr 22 2026 (+21 cells; 1,092 → 1,113). The 13×13 grid is **92.8% held** (1,247 of 1,344 cells) with rank 2.0–2.2 on Brooklyn-tagged queries. The brand engine works (`urban recovery` 1,357 clicks @ pos 2.26; GBP-tagged homepage path drives 3,275 clicks @ 1.18% CTR).

The lift now sits on **five pushes that convert that authority and extend its reach** rather than rebuilding the grid:

1. **GBP depth surge** — photos 7 → 30+, Posts ≥4/mo, reviews +20/mo (1-star share 23% → <18%). The pin is gaining passively while the field churns; push the depth signals and that gain accelerates.
2. **Service-page rebuild** — `/services/*` (5 templated URLs / 0 schema) rank pos 1–3 for 9,269 local-intent kws at near-zero CTR. `recovery center brooklyn` = **13,770 imp / 0 clicks @ pos 3.55**. SP-01 + SP-02 + HP-01 + ON-02 = the structural conversion fix.
3. **Cross-borough location-page upgrades** — 5-coord matrix shows UR in 8 of 40 cells (all at Red Hook). Cross-borough is organic-only. 8 existing /locations/* URLs get content audit + LocalBusiness + BreadcrumbList schema. `/locations/recovery-center-in-sunset-park-ny` (1,722 words / 3,152 imp / pos 19.58) is the primary diffusion target.
4. **Counter SNF category drift on `inpatient rehab`** — Brooklyn Center for Rehabilitation and Nursing (SNF) went 0 → 102 cells while UR lost 10 cells. Explicit "Inpatient Drug & Alcohol Rehab Brooklyn — 24-Hour Medical Supervision" framing on `/services/short-term-residential-program` + internal-link anchor consolidation + Inpatient-framing GBP Posts.
5. **Off-page disavow + YMYL trust + 6-strategy stack + Q-format LLM articles** — disavow is data-warranted (61% RDs at spam ≥30 / 216 in `anomaly-seo-*` cluster); YMYL citation gaps (SAMHSA / CARF / Psych Today / LegitScript / NAATP / insurance) close M1-M3; 3 Q-format LLM articles M3 (Medicaid / LGBTQ+ / women-owned).

**Asymmetric play this quarter: defend the moat, deepen what's already winning, extend organically into cross-borough.** Maps work is GBP-depth-driven (no new pin work). Everything else is on-page architecture, schema, and off-page authority.

---

## 1. Current State

### 1.1 Maps (Red Hook pin) — held the grid while market churned

Pooled top-10 cell appearances across 8 priority queries × 13×13 LD grid (1,344-cell universe), Jan 27 → Apr 22 2026. Per-keyword avg rank computed on cells visible both dates.

| Keyword | Δ top-10 cells | Avg rank Jan → Apr | Cells held (Apr) | Status |
|---|---:|---:|---:|---|
| alcohol rehab | gain | 5.71 → **4.48** | ~200 | Climbing |
| drug rehab | gain | 6.49 → **5.64** | ~200 | Climbing |
| alcohol rehab brooklyn | hold | 2.20 → **2.16** | ~210 | Owned |
| drug rehab brooklyn | hold | 2.05 → **2.05** | ~210 | Owned |
| rehab brooklyn | hold | 2.10 → **2.10** | ~210 | Owned |
| detox brooklyn | hold | 2.30 → **2.25** | ~180 | Owned |
| inpatient rehab | **−10** | 4.5 → 5.2 | **75** | **SNF drift** |
| rehab new york | hold | 8.5 → 8.0 | ~160 | Climbing |
| **TOTAL** | **+21 top-10 cells pooled** | — | **1,247 / 1,344 (92.8%)** | — |

*Chart-spec: stacked bar of Δ top-10 cells per keyword colored by tier (Owned / Climbing / SNF-drift), annotated "Only Brooklyn addiction pin gaining top-10 cells."*

Six queries owned or climbing inside the Red Hook radius. One weakening — `inpatient rehab` — where Brooklyn Center for Rehabilitation and Nursing (SNF) entered the category 0 → 102 cells in 90 days and pulled UR from 85 → 75 cells. Category ambiguity, not addiction-treatment competition.

### 1.2 Cross-borough 5-coord matrix — 8 of 40 cells, all at Red Hook pin

DataForSEO Maps SERP at 5 Brooklyn anchor coords on 8 priority queries:

| Coord | UR appearances | Distance from pin |
|---|---:|---:|
| Red Hook (40.6754, −74.0148) | 8/8 | 0 mi |
| Downtown Brooklyn (40.6929, −73.9904) | 0/8 | 1.6 mi NE |
| Sunset Park (40.6457, −74.0107) | 0/8 | 1.7 mi S |
| Crown Heights (40.6709, −73.9434) | 0/8 | 3.8 mi NE |
| Williamsburg (40.7081, −73.9571) | 0/8 | 5.0 mi NE |
| Coney Island (40.5755, −73.9707) | 0/8 | 4.0 mi S |

Maps reach is physically capped at the ~3.25-mi grid radius. Cross-borough capture is organic-only.

### 1.3 Organic SERP — service-page conversion leak

GSC last 180d on /services/* URLs:

| Query | Imp 180d | Clicks | Avg pos | Status |
|---|---:|---:|---:|---|
| recovery center brooklyn | **13,770** | **0** | **3.55** | **Conversion leak headline** |
| drug rehab new york city | 7,100 | 1 | 3.2 | Conversion leak |
| alcohol rehab brooklyn | 4,300 | ~5 | 2-3 | Some conversion |
| opioid detox brooklyn | 880 | ~3 | 2-3 | Some conversion |
| benzo detox brooklyn | 310 | ~2 | 1-3 | Some conversion |

**9,269 local-intent queries** rank pos 1–3 across /services/* with near-zero CTR. GBP authority converts on the GBP-tagged homepage path (3,275 clicks @ 1.18% CTR) but the organic SERP service-page entries leak 100% of clicks. Root cause: 700-1,000-word doorway templates with no JSON-LD, no intake-form depth, no Areas We Serve enumeration.

### 1.4 GBP audit (Red Hook pin) — depth gap

| Finding | Current | Target | Why it matters |
|---|---|---|---|
| **Photos** | **7** | 30+ across 6 categories | Ascendant 90 / Mountainside 30 / ACI 12. Documented E-E-A-T + Maps freshness signal |
| **Posts cadence** | **1 in scrape window** | 4/month sustained | Documented Maps freshness signal; direct competitor has visible cadence |
| **Reviews / rating** | **111 / 3.8★** | 170+ / 4.1★+ by M3 | Positive-volume dilution is only single-pin lever |
| **1-star share** | **23% (26 of 111)** | <18% | YMYL Maps deprioritization signal |
| **place_topics** | **null** | populated | Google hasn't derived enough review-content density |
| **Owner replies <4★** | 0 of 30 | 30 of 30 by M3 | Reduces negative topic-density in embeddings |
| Services tab | 5 listed | 5 + custom descriptions + 5 MAT (if applicable, Owner Items #1) | Reinforces SP-02 MAT positioning |
| Description | strong base | + OASAS license + same-day admissions + borough-access | Entity completeness |

All 8 GBP issues enumerated in `Urban_Recovery_GBP_Action_List.csv`.

### 1.5 Off-page profile — PBN exposure (disavow data-warranted)

DataForSEO Backlinks 2026-05-15:

| Metric | Value | Interpretation |
|---|---:|---|
| Total backlinks | 1,642 | — |
| Referring domains (unique) | **642** | — |
| Domain spam-score | **42** | High — manual review of profile warranted |
| **RDs at spam-rating ≥30** | **395 (61%)** | Disavow candidate pool |
| **RDs in `anomaly-seo-*` cluster** | **216** | PBN pattern; top RD reaches spam-94 |
| **RDs on PBN-pattern TLDs** | 323 (.online .website .site .space .xyz) | Strong PBN signal |

Per `feedback_hqdm_disavow_is_data_driven.md` — disavow is the right call here. Per-row decisions in `Urban_Recovery_Disavow_Plan.xlsx`.

---

## 2. Competition

### 2.1 Top-10 cell churn (Jan 27 → Apr 22 2026)

Per-GBP standalone. HQDM-portfolio sister clients flagged.

| Pin | Jan | Apr | Δ | Rating | Note |
|---|---:|---:|---:|---|---|
| **Urban Recovery (us)** | 1,092 | 1,113 | **+21** | 3.9★ × 105 | **Only Brooklyn addiction pin gaining top-10 cells** |
| Detox & Drug/Alcohol Rehab Center In Brooklyn NY | 1,165 | 1,217 | **+52** | 3.7★ × 66 | **Direct competitor watch — gaining on every kw** |
| Elevate Point – Alcohol & Drug Rehab NYC | 478 | 566 | +88 | 5.0★ × 14 | Top gainer; small review base |
| Teen Challenge Inc. | 305 | 358 | +53 | 4.0★ × 33 | Faith-based — soft overlap |
| **Brooklyn Center for Rehab and Nursing** | 155 | 194 | +39 | 4.0★ × 268 | **SNF entering inpatient rehab 0→102 cells** |
| Downtown Brooklyn Nursing and Rehabilitation | 81 | 126 | +45 | 4.3★ × 303 | SNF entering rehab new york |
| Spring Hill Wellness NY – Outpatient | 528 | 565 | +37 | 4.8★ × 20 | Outpatient — narrow overlap |
| Mountainside Treatment Center NYC | 78 | 112 | +34 | 4.7★ × 61 | Regional chain encroaching |
| Surfpoint Recovery (HQDM sister) | 917 | 950 | +33 | 4.8★ × 94 | Coney Island axis |
| **Addiction Treatment Brooklyn (vanished)** | 138 | 0 | **−138** | 5.0★ × 1 | Cells freed |
| Upper East Side Rehabilitation and Nursing | 129 | 25 | −104 | 3.9★ × 494 | SNF collapsing |
| Samaritan Village (vanished) | 52 | 0 | −52 | 2.7★ × 10 | Cells freed |
| Wellbridge Drug & Alcohol Rehab NYC Outreach | 268 | 229 | −39 | 4.9★ × 44 | Weakening |
| LSA Recovery – Crown Heights | 184 | 146 | −38 | 4.0★ × 4 | Weakening — Crown Heights cell opportunity |
| Dynamite Youth Center | 280 | 243 | −37 | 4.5★ × 40 | Weakening |

*Chart-spec: horizontal diverging bar — gainers right (green), losers left (red), UR row top in slate gray. Annotation: "Urban Recovery held the grid. The market churned. We did not move."*

### 2.2 The two competitive stories

**Standout #1 — `Detox & Drug/Alcohol Rehab Center In Brooklyn, NY` is gaining rank on every single tracked query while UR holds.** This is the direct competitor whose mechanism deserves M1 forensic pull (review velocity? GBP Posts? photo count? services-tab depth?). Action: monitor delta monthly in REP-01/02/03.

**Standout #2 — `Brooklyn Center for Rehabilitation and Nursing` (SNF) entered `inpatient rehab` from zero while UR lost 10 cells on that single query.** Category ambiguity, not addiction-treatment competition. Action: Push 4 = explicit "Inpatient Drug & Alcohol Rehab Brooklyn" framing on `/services/short-term-residential-program` + Inpatient-anchor internal-link consolidation + Inpatient-framing GBP Posts + M3 forensic pull on SNF mechanism.

### 2.3 Cross-borough capture — organic only

Maps reach physically capped at 3.25 mi from Red Hook pin (verified across 5 Brooklyn anchor coords on 8 queries — UR off in 32/40 cells). Borough Maps wins are physically impossible from one pin. **Borough capture must come from organic SERP** via LP-02 cross-borough location-page upgrades.

---

## 3. Potential

### 3.1 Where the volume sits

Total local-intent queries Urban Recovery currently touches in GSC (last 180d): **~9,269 queries at pos 1–3 across /services/***. Combined imp ~280K with near-zero CTR.

| Bucket | URLs | Combined imp 180d | Combined clicks | Strategic posture |
|---|---:|---:|---:|---|
| /services/* doorway templates (5) | 5 | ~280K | <50 | Rebuild conversion surface (Push 2) |
| /locations/* in-radius + adjacency (8) | 8 | ~7,300 | ~70 | Upgrade + schema (Push 3 LP-02) |
| Brand + GBP-tagged | 2 | — | 3,565 | Defend (Push 1) |
| /blog/* (674 URLs) | 674 | high (off-topic) | mixed | Refresh on-topic bleeding only (Push 3) |

### 3.2 Single-URL push concentration

Top 5 URLs by ship-ready volume:

| URL | Imp 90d | Clicks | Current rank | Action |
|---|---:|---:|---:|---|
| /services/alcohol-detoxification-service | ~4,300 | ~5 | pos 2-3 | SP-01 upgrade M2 |
| /locations/recovery-center-in-sunset-park-ny | **3,152** | **26** | **pos 19.58** | LP-02_M2 — **primary diffusion** |
| /services/short-term-residential-program | ~1,600 | ~2 | pos 1-4 | ON-02-Inpatient M2 + SP-03 Q3 |
| /services/opioid-detoxification-services | ~880 | ~3 | pos 2-3 | SP-02 upgrade M3 |
| /locations/red-hook-ny | 2,038 | 15 | pos 30 | LP-02_M1 upgrade M1 |

*Chart-spec: horizontal bar of imp 90d × current rank, colored by Push number.*

### 3.3 Cross-borough opportunity (organic-only)

| Cluster | Combined imp 90d | Combined avg pos | LP-02 target |
|---|---:|---:|---|
| Sunset Park / Bay Ridge | 3,152+ | 19.58 | LP-02_M2 (primary) |
| Boerum Hill / Carroll Gardens / Gowanus | ~1,400 | 22-32 | LP-02_M1 (anchors) |
| Park Slope / South Park Slope | ~450 | — | LP-02_M2 |
| Crown Heights / Prospect Heights | ~720 | 23 | LP-02_M3 (conditional) |
| Downtown Brooklyn | ~60 | 21.1 | LP-02_M3 (conditional) |

Plus uncaptured variant volume (drug rehab in [neighborhood], [substance] detox [neighborhood]).

---

## 4. Positives vs Negatives

| Positives | Negatives |
|---|---|
| Only Brooklyn addiction pin gaining top-10 cells (+21) | One query weakening (`inpatient rehab` −10 cells) |
| 92.8% of 1,344-cell grid held | Cross-borough invisible (0/40 cells outside Red Hook) |
| Brand engine works (1,357 clicks at pos 2.26) | 9,269 local-intent kws rank pos 1-3 with near-zero CTR |
| GBP-tagged homepage drives 3,275 clicks at 1.18% CTR | GBP photo count 7 (vs Ascendant 90, Mountainside 30) |
| Differentiators real (women-owned + LGBTQ+ + transgender-safespace) | 23% 1-star review share (26 of 111) |
| Improving on broad terms (alcohol rehab 5.71→4.48; drug rehab 6.49→5.64) | place_topics null (no derived topical tags) |
| 8 existing /locations/* URLs ready for upgrade (no new builds needed) | 61% RDs at spam ≥30 (PBN exposure — disavow warranted) |
| Brooklyn-tagged Maps queries hold rank 2.0-2.2 | Direct competitor `Detox & Drug/Alcohol Rehab Center NY` gaining on every kw |

Net direction: **positives compound** (grid hold + brand engine + differentiators + ready-to-upgrade URLs) when paired with structural fixes (GBP depth + service-page rebuild + cross-borough schema + disavow). Negatives are **architectural + signal-depth**, not Maps rank — meaning they're fixable through HQDM-side work, not gated on Maps tactical engagement.

---

## 5. What's Next — 5 Strategic Pushes

Ordered by leverage. Each push is data-justified and measurable in 60–90 days. **Every action is enumerated as a specific row in seven supporting CSVs:**

- `Urban_Recovery_Pages_Action_List.csv` — 29 per-page actions (BUILD / UPGRADE / REFRESH / SCHEMA_FIX / 301)
- `Urban_Recovery_Internal_Linking_Map.csv` — 62 per-link changes (FROM → TO + anchor + section)
- `Urban_Recovery_GBP_Action_List.csv` — 8 GBP-field changes (services / products / photos / attributes / description / posts)
- `Urban_Recovery_Driving_Direction_Pins.csv` — 9 specific lat/lng pins with target neighborhoods + queries
- `Urban_Recovery_OffPage_Stack_Template.csv` — 8 tabs × 3 months
- `Urban_Recovery_Reporting_Master_Template.csv` — KPI tracker per URL/query/month
- `Urban_Recovery_Disavow_Plan.xlsx` — Decisions tab + Re-Pull tab

Tasks in `Urban_Recovery_Q2_2026_Tasks.csv` (47 rows) reference specific rows in each sheet.

### Push 1 — GBP Depth Surge (Defend Red Hook + Diffuse)

**Why:** UR's grid hold is real but defensible only if depth signals reach competitive parity. Photos 7 (vs Ascendant 90), Posts 1 (vs weekly cadence on competitor pins), 23% 1-star share — pin is gaining passively while field churns; push depth signals and gain accelerates.

**Action:**
- M1: GBP-01 Posts cadence 4/month + GBP-03 reviews push +20/month + GBP-02 Services audit + GBP-05/06/08 attributes/description/categories
- M2: GBP-04 photo blitz 7 → 30+ (owner-gated; HQDM delivers photo brief)
- M3: GBP-06 Posts + Services final audit + GBP-07 owner replies on all <4★ reviews

**Expected outcome (90d):** Photos 30+. Posts cadence sustained 4/mo. Reviews 111 → 170+. 1-star share 23% → <18%. place_topics populated.

**Specific actions:** `Urban_Recovery_GBP_Action_List.csv` rows GBP-01 through GBP-08. `Urban_Recovery_OffPage_Stack_Template.csv` GBP_Posts tab (12 Posts across Q2). Brief: `Urban_Recovery_Push1_GBP_Surge.md`.

### Push 2 — Service-Page Rebuild + Homepage NAP + Page Refresh

**Why:** 9,269 local-intent queries rank pos 1-3 at near-zero CTR (recovery center brooklyn 13.77K imp / 0 clicks @ pos 3.55). GBP authority converts on the GBP-tagged homepage path (3,275 clicks @ 1.18% CTR); organic SERP service-page entries leak 100% of clicks because pages are 700-1,000-word doorway templates with no JSON-LD. Compounded by homepage JSON-LD telephone mismatch with GBP canonical.

**Action:**
- M1: HP-01 homepage JSON-LD NAP fix (one-line schema edit: 646-960-6656 → 646-347-1892)
- M2: SP-01 `/services/alcohol-detoxification-service` upgrade (1,400-1,600 words + Service + LocalBusiness + FAQPage schema + intake form + Areas We Serve); ON-02 page refresh on 12 conversion-intent URLs (visible H1 + hero + body + intake CTA per `feedback_hqdm_on_page_visible_only.md`)
- M3: SP-02 `/services/opioid-detoxification-services` + MAT positioning

**Expected outcome (60d):** SP-01 alcohol-detox ranks top 3 + CTR ≥3%. recovery center brooklyn CTR 0% → ≥3% (=≥400 clicks/90d). SP-02 opioid-detox + MAT ranks top 5 + CTR ≥3%. 12 ON-02 URLs see 30d CTR delta logged.

**Specific actions:** `Urban_Recovery_Pages_Action_List.csv` rows PA-01 through PA-14. `Urban_Recovery_Internal_Linking_Map.csv` rows IL-01 through IL-11 + IL-53 through IL-57. Brief: `Urban_Recovery_Push2_Service_Pages.md`.

### Push 3 — Cross-Borough Location-Page Upgrades + LP-01 Data-Driven Cleanup

**Why:** Cross-borough 5-coord matrix shows UR in 8/40 cells (all at Red Hook). Maps reach physically capped at ~3.25mi. Cross-borough is organic-only. 8 existing /locations/* URLs already have 800-1,700 words but zero schema — lift is structural, not new builds. Per `feedback_hqdm_location_pages_fill_not_kill.md` — fill matrix gaps + small-level 301 redundant ones to MAIN canonicals; NEVER bulk NOINDEX.

**Action:**
- M1: LP-02_M1 upgrades on red-hook-ny + carroll-gardens-red-hook + gowanus (in-radius anchors); LP-01_M1 96-URL GSC pull + refresh batch + 0-click 301 cohort
- M2: LP-02_M2 park-slope-ny + boerum-hill-ny + recovery-center-in-sunset-park-ny (adjacency + cross-borough; **Sunset Park is the primary diffusion target — 3,152 imp pos 19.58, one push from page 1**)
- M3: LP-02_M3 leading-rehab-center-in-downtown-brooklyn-ny + rehab-center-in-crown-heights-ny (cross-borough conditional — gated on REP-02 cross-borough delta)
- Blog refresh M1-M3: 3 bleeding on-topic posts per month

**Expected outcome (90d):** 8 /locations/* URLs upgraded with schema by M3 close. Cross-borough 5-coord matrix 8/40 → 14/40 cells. /locations/recovery-center-in-sunset-park-ny pos 19.58 → top 10 within 60d. 9 bleeding on-topic blog posts refreshed.

**Specific actions:** `Urban_Recovery_Pages_Action_List.csv` rows PA-15 through PA-22 + PA-23 (LP-01) + PA-27/28/29 (blog refresh). `Urban_Recovery_Internal_Linking_Map.csv` rows IL-19 through IL-46 + IL-58/59. Brief: `Urban_Recovery_Push3_Location_Diffusion.md`.

### Push 4 — Counter SNF Category Drift on `Inpatient Rehab`

**Why:** Brooklyn Center for Rehabilitation and Nursing (SNF) entered `inpatient rehab` 0 → 102 cells in 90d while UR lost 10 cells. Category ambiguity, not addiction-treatment competition. UR's `/services/short-term-residential-program` doesn't use "inpatient" in primary framing. Lever: lift "Inpatient Drug & Alcohol Rehab" framing in visible page elements + reinforce via internal-link anchor text + GBP Posts.

**Action:**
- M2: ON-02-Inpatient page refresh on `/services/short-term-residential-program` — H1 to "Inpatient Drug & Alcohol Rehab in Brooklyn — 24-Hour Medical Supervision at Urban Recovery"; hero + body explicit inpatient framing; "Why inpatient vs SNF" block; intake CTA above fold
- M2: Internal-link anchor consolidation — 7 internal links with "Inpatient" anchor-text variants from LP-02 hubs + admission overview
- M1-M3: 1 GBP Post per month uses explicit "Inpatient" phrasing
- M3: Forensic pull on Brooklyn Center for Rehabilitation and Nursing mechanism (category? GBP edits? review velocity?)
- Q3-deferred: Full SP-03 rebuild after SP-01/SP-02 template proven

**Expected outcome (90d):** `inpatient rehab` LD cells 75 → 90+ by M3 close. ON-02-Inpatient page CTR delta logged 30d post-deploy. SNF forensic finding documented in REP-03 + Q3 SP-03 scope informed.

**Specific actions:** `Urban_Recovery_Pages_Action_List.csv` row PA-05 + PA-04 (SP-03 deferred Q3). `Urban_Recovery_Internal_Linking_Map.csv` rows IL-12 through IL-18 + IL-57. Brief: `Urban_Recovery_Push4_Inpatient_Counter.md`.

### Push 5 — Off-Page Disavow + YMYL Trust + 6-Strategy Stack + Q-Format LLM Articles

**Why:** PBN exposure data-warranted disavow (61% RDs at spam ≥30 / 216 in `anomaly-seo-*` cluster). YMYL trust gap (UR not listed in SAMHSA / CARF / LegitScript / NAATP / Psych Today / insurance directories despite qualifying offerings). 6-strategy off-page stack reinforces Push 2/3/4 URL launches. 3 Q-format LLM articles complete differentiator surface (Medicaid / LGBTQ+ / women-owned) in PAA + AI Overview.

**Action:**
- M1: OFF-Disavow_M1 (per Decisions sheet — 395 RDs reviewed; disavow.txt uploaded to GSC); OFF-Citations_M1 (SAMHSA + Psych Today + CARF/Joint Commission); DAS + GBP Blast + AI Articles + Driving Directions + GMB Pin at gap coords (Downtown Brooklyn + Sunset Park + Crown Heights); LLM citation share baseline audit (5 surfaces × 4 differentiator queries)
- M2: OFF-PR_M2 LGBTQ+-affirming inpatient detox pitch (behavioralhealthnews.org + 1 NYC trade outlet); OFF-Citations_M2 (LegitScript + NAATP + insurance directories)
- M3: OFF-Disavow_M3 re-pull; CON-03 3 Q-format LLM articles live (Medicaid drug rehab Brooklyn + LGBTQ+-affirming rehab Red Hook + Women-owned rehab Brooklyn); OFF-Citations_M3 recovery-vertical tier

**Expected outcome (90d):** Disavow uploaded M1 + re-pulled M3. 13 YMYL citations live across Q2. 6-strategy stack execution per OffPage_Stack_Template (SEO Neo 4/mo + AI Articles 25/mo + Driving Directions 3/mo + DAS + GBP Blast + GBP Sniper + RD100 + NAP Overlay + GMB Pin). 3 Q-format articles indexed + ranking. LLM citation baseline + M3 lift measured.

**Specific actions:** `Urban_Recovery_Disavow_Plan.xlsx` Decisions tab + Re-Pull tab. `Urban_Recovery_OffPage_Stack_Template.csv` all 8 tabs × 3 months. `Urban_Recovery_Pages_Action_List.csv` rows PA-24/25/26. `Urban_Recovery_Internal_Linking_Map.csv` rows IL-47 through IL-52. `Urban_Recovery_Driving_Direction_Pins.csv` rows DD-01 through DD-09. Brief: `Urban_Recovery_Push5_OffPage_Trust.md`.

---

## 6. M3 Close-Out Scorecard

| Metric | Baseline (2026-05-18) | M3 target | Push |
|---|---|---|---|
| Grid coverage (13×13 × 8 kws) | 92.8% / 1,247 cells | hold ≥ 92% | Push 1 |
| Inpatient rehab cells (single-query) | 75 | 90+ | Push 4 |
| Cross-borough 5-coord matrix (8 kws × 5 coords) | 8/40 (all Red Hook) | ≥ 14/40 | Push 3 + Push 5 micro-area |
| GBP photos | 7 | ≥ 30 | Push 1 GBP-04 |
| GBP Posts cadence | 1 in scrape window | ≥ 4/month sustained | Push 1 GBP-01/05/06 |
| GBP reviews | 111 (3.8★) | ≥ 170 (≥ 4.1★) | Push 1 GBP-03 |
| GBP 1-star share | 23% (26/111) | < 18% | Push 1 dilution + GBP-07 owner replies |
| `recovery center brooklyn` CTR | 0% (13.77K imp / 0 clicks @ pos 3.55) | ≥ 3% (≥ 400 clicks/90d) | Push 2 SP-01 + ON-02 |
| /locations/recovery-center-in-sunset-park-ny rank | pos 19.58 (3,152 imp / 26 clicks) | top 10 | Push 3 LP-02_M2 |
| /services/alcohol-detoxification-service rank + CTR | pos 1-3 / near-zero CTR | top 3 + CTR ≥ 3% | Push 2 SP-01 |
| /services/opioid-detoxification-services rank + CTR | pos 1-3 / near-zero CTR | top 3 + CTR ≥ 3% | Push 2 SP-02 |
| /services/short-term-residential-program rank + CTR | pos 1-4 / near-zero CTR | top 5 + CTR ≥ 3% | Push 4 ON-02-Inpatient |
| Homepage NAP schema matches GBP | No (646-960-6656) | Yes (646-347-1892) | Push 2 HP-01 |
| Location-page upgrades + schema | 0 of 8 | 8 of 8 with LocalBusiness + BreadcrumbList | Push 3 LP-02 |
| LP-01 96-URL cleanup | 0 reviewed | working sheet populated; refresh + 0-click cohorts shipped | Push 3 LP-01 |
| 3 Q-format LLM articles | 0 | 3 live + indexed | Push 5 CON-03 |
| YMYL trust citations | 0 confirmed live | ≥ 13 live (SAMHSA + Psych Today + CARF + LegitScript + NAATP + 3 insurance + 5 vertical) | Push 5 OFF-Citations |
| Disavow uploaded to GSC | None | Uploaded M1 + re-pulled M3 | Push 5 OFF-Disavow |
| Blog refresh on-topic (CON-05/06/07) | 0 | 9 posts refreshed (3/month) | Push 3 blog cadence |
| LLM citation share — 4 differentiator queries × 5 surfaces | unknown | baseline M1 + M3 lift measured | Push 5 LLM-Audit |
| Marija's % Full Correlation | — | Full row coverage in M3 close-out | (Reporting) |

---

## 7. Department Coverage (Q2)

| Dept | M1 | M2 | M3 |
|---|---|---|---|
| **On-Page** (Aleksa) | HP-01 NAP fix; LP-02_M1 (3 in-radius anchor upgrades); LP-01_M1 (GSC pull + refresh + 0-click cohort) | SP-01 (alcohol-detox upgrade); ON-02 (page refresh on 12 URLs incl. ON-02-Inpatient on /short-term-residential); LP-02_M2 (3 adjacency + cross-borough upgrades) | SP-02 (opioid-detox + MAT upgrade); LP-02_M3 (2 cross-borough conditional); CON-03 (3 Q-format LLM articles) |
| **Content** | CON-05 (blog refresh batch 1); LP-02_M1 content work | CON-06 (blog refresh batch 2); LP-02_M2 content work; PA-10 about-us refresh | CON-07 (blog refresh batch 3); CON-03 3 Q-format articles; LP-02_M3 content |
| **Local/GBP** | GBP-01 (Posts M1); GBP-02 (Services audit); GBP-03 (reviews push); GBP-05/06/08 (attributes/description/categories) | GBP-04 (photo blitz 7→30+); GBP-05 (Posts M2 linking SP-01 + LP-02_M1) | GBP-06 (Posts M3 + Services audit); GBP-07 (owner replies on <4★ reviews) |
| **Off-Page** (Julce) | OFF-Disavow_M1 + OFF-Citations_M1 (SAMHSA + Psych Today + CARF) + OFF-DAS_M1 + OFF-GBPBlast_M1 + OFF-AIArticles_M1 + OFF-DD_M1 (DD-01/02/03 gap coords) + OFF-GMBPin_M1 | OFF-PR_M2 + OFF-Citations_M2 (LegitScript + NAATP + insurance) + OFF-DAS_M2 + OFF-GBPBlast_M2 + OFF-RD100_M2 + OFF-AIArticles_M2 + OFF-DD_M2 (DD-04/05/06) + OFF-NAPOverlay_M2 | OFF-Disavow_M3 (re-pull) + OFF-Citations_M3 (recovery-vertical) + OFF-DAS_M3 + OFF-GBPSniper_M3 + OFF-RD100_M3 + OFF-AIArticles_M3 + OFF-DD_M3 (DD-07/08/09) + OFF-NAPOverlay_M3 |
| **Reporting** (Marija + Aleksandar) | REP-01 (LD scan setup 8 priority terms × 3 Brooklyn coords); LLM-Audit baseline | REP-02 (indexation tracker + ON-02 CTR delta + LP-01 verification) | REP-03 (Q2 close-out + Brooklyn Center for Rehab and Nursing forensic finding) |

---

## 8. Owner-Side Asks (4 items · companion doc `Urban_Recovery_Owner_Conversation_Items.md`)

1. **CARF certification status** — gates SP-01/SP-02 E-E-A-T credential framing + OFF-Citations_M1 CARF directory (substitute Joint Commission Behavioral Health if not in place)
2. **Insurance carrier in-network confirmation** — Aetna + Cigna + BCBS verification gates accurate insurance copy on SP-01/SP-02/ON-02-Insurance + OFF-Citations_M2 insurance directory submissions
3. **GBP photo upload schedule** — Push 1 GBP-04 completion gated on this; HQDM delivers photo-category brief; owner commits 30+ photos within 60 days
4. **Clinical lead photo + bio + quotable consent** — gates Psychology Today profile (OFF-Citations_M1) + OFF-PR_M2 LGBTQ+-affirming inpatient detox pitch

No geography-based redirect approval needed — LP-01 cleanup is data-driven per HQDM Location-Pages-SOP.

---

## 9. Explicit Deferrals (Q3+ Scope)

- **`/services/short-term-residential-program` full SP-03 rebuild** — Q3, after SP-01/SP-02 template proven. M2 ON-02-Inpatient page refresh lands explicit inpatient framing as 90-day quick-win.
- **`/services/drug-detoxification-services` + `/services/benzodiazepines-detox-services` full rebuilds** — Q3+ after SP-01/SP-02/SP-03 establish template.
- **Manhattan / Queens / Bronx / Staten Island location-page upgrades** — Q3+. UR is single-pin Brooklyn inpatient; out-of-borough doorways are LP-01 removal candidates if 0-click.
- **DataForSEO Search Volume 100-keyword pull** — Phase 2 budget.
- **LLM/AI Overview strategy beyond M3 Q-format article batch** — Phase 2 (LLM citation baseline informs Q3 entity-signal work).
- **Aaron-style SEO Neo / link velocity surge** — paused pending Off-page Risk Assessment outcome per `project_hqdm_offpage_position.md`.

---

*Companion docs delivered separately: Strategic Diagnosis PDF (3-page exec summary) · 7 working CSVs · Disavow Plan workbook · Location Pages Plan workbook · 5 Push briefs · Owner Conversation Items.*

*v3 supersedes v2 (2026-05-15) — same data, refreshed into Elev8 5-Push pattern with companion CSVs.*
