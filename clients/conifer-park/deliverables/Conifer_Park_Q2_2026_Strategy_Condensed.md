# Conifer Park — Q2 2026 Strategy *(Condensed — 3 pages)*

**Client:** Conifer Park (Inpatient Glenville NY + 6 outpatient locations across NY State) | **Tier:** 1 Recovery
**Owner:** Aleksandar · **On-Page feasibility:** Aleksa Popovic · **Date:** 2026-05-14

> *Companion to the 651-line internal `Conifer_Park_Q2_2026_Custom_Strategy.md`. Execution detail in `coniferpark_3month_plan.md` + `Conifer_Park_3Month_Tasks.csv`.*

---

## TL;DR

Conifer Park is **#1 or #2 in the Map Pack at every one of its 7 GBP locations** — but average rating across the 7 is **3.3★** (3 below 4.0★, 2 at 2.7★). Maps win is fragile; LLM-citation surface is closed below 4★. All 6 outpatient pages share the same `/outpatient/<city>` URL pattern; CTR varies from **Glens Falls 1.63%** down to **Rochester 0.82%** — driven by per-page content depth + GBP rating drag.

**HQDM scope** — GBP access is limited to **Glenville Inpatient + Troy Outpatient**. The 5 unmanaged pins (Schenectady, Glens Falls, Plattsburgh, Syracuse/Liverpool, Rochester) are out of scope for direct GBP work but **stay in scope for on-page work** (page rebuilds, schema, internal links) + **off-page playbook** (DAS / Blast / Sniper / RD100 / AI Articles / Cloud Page / NAP overlay / Driving Directions — all target external signal at coords + URLs, no GBP Manager access needed) + **citation NAP submissions** narrowed to the 2 managed pins where the GBP attribution can flow back.

**Q2 = (1) Reverse Troy redirect so /outpatient/troy is canonical (1-hour fix); (2) rebuild the 5 high-impression outpatient pages (Troy + Schenectady in M2, Glens Falls + Syracuse + Rochester in M3) — site-side work, no GBP access needed; (3) un-geo-lock 6 `/service/*-in-glenville-ny` pages so they compete on Capital Region demand; (4) run the HQDM off-page playbook on the 3 weakest-rating pins (Schenectady, Rochester, Syracuse); (5) full GBP work on Glenville + Troy (descriptions, services, UTM, Posts, photos, owner-replies, ExifTool); (6) intake-side review-velocity SOP across all 7 facilities; (7) site-wide architecture cleanup (cannibal pages, suburb doorways, schema refactor).** Schema already rich — refactor for page-level specificity. Trust signals absent — close in M3 once client confirms accreditation status. Backlink-gap analysis dropped from scope.

---

## 1. Map coverage across the 7 pins *(chart-ready)*

DataForSEO Maps SERP + GMB profile probe, 2026-05-14.

| Pin | Top Map Pack rank | Rating × reviews | Photos | Notes |
|---|---|---:|---:|---|
| Glenville (inpatient) | **#1** / 12 anchors | 3.2★ × 153 | 26 | HQDM-supported. Revenue floor — defend |
| Troy outpatient | #1-2 (page ranks organic pos 4.66) | 3.9★ × 27 | 3 | HQDM-supported. NAP mismatch (GBP 2431 / site 2435 6th Ave). Photo-starved |
| Schenectady | **#4** outpatient rehab / #2 suboxone | **2.7★ × 10** | 9 | Beaten at #1 by New Choices (4.2★ × 28) despite Conifer having 153 Glenville reviews |
| Glens Falls | **#1** drug rehab / #2 outpatient rehab | 3.9★ × 25 | 3 | GBP title typo "Glen Falls" |
| Plattsburgh | **#1** drug rehab / **#1** opioid treatment | **4.2★ × 16** | **null** | Best rating + worst profile depth. Description null. |
| Syracuse/Liverpool | **#1** both anchors (thin SERP) | 3.4★ × 27 | 6 | GBP title says "Liverpool" while site says "Syracuse" — geo disambiguation needed |
| Rochester | **#1** both anchors but page organic pos 9.36 / 0.82% CTR | **2.7★ × 36** | 5 | Highest impressions (51K/yr) + lowest CTR on the site. Worst rating + most reviews → biggest rating drag |

**Story:** Conifer wins the local pack wherever it has a pin — but rating + profile depth are inconsistent and three pins sit below the 4★ AI Overview / LLM-citation threshold. NAP/title/category cleanup is the cheapest win available.

*Chart-spec: 7-pin matrix table — pin name (rows) × {Map Pack rank, rating, review count, photos} (columns). Highlight sub-4★ rows red, ≥4★ rows green.*

---

## 1b. Maps SERP delta — Glenville flagship + Troy outpatient baselines *(chart-ready, standalone per GBP)*

Local Dominator grid scans, pre-strategy baselines. Each GBP is its own visibility universe — no cross-pin attribution.

### GBP 1 — Glenville Inpatient (CID 16391915678087876673), Feb 21 → Apr 27 2026 (9-week delta, 13×13 / 3-mi grid)

| Query | Coverage | Top-3 cells | Avg rank | Improved / regressed |
|---|---|---:|---:|---|
| rehab upstate new york | 100% → 100% | 136 → **156** (+20) | 2.83 → **1.81** | 97 / 7 |
| drug rehab near me | 96% → 98% | 100 → **110** (+10) | 4.48 → **3.92** | 90 / 11 |
| alcohol rehab | 91% → 91% | 71 → **84** (+13) | 4.95 → **4.55** | 84 / 15 |
| rehab near me | 85% → 85% | 38 → **54** (+16) | 6.57 → **5.55** | 101 / 19 |

*Chart-spec: 4-term grouped horizontal bar chart, two bars per term (Feb 21 / Apr 27 top-3 cell count), gold + green, value labels on each bar.*

**Read — Glenville:** Hardening across every term. Improvement-to-regression ratio 5–14×. Top-3 cells expanded 8–20 cells per term. "Rehab upstate new york" saturated at 156/169 cells in top-3. "Rehab near me" remains the weakest term but also where top-3 grew most in absolute terms.

### GBP 2 — Troy Outpatient (CID 15613245268682835265), Apr 24 → May 12 2026 (18-day delta, 13×13 / 0.5-mi neighborhood grid)

| Query | Coverage | Top-3 cells | Avg rank | Improved / regressed |
|---|---|---:|---:|---|
| outpatient rehab troy | 99% → 100% | 168 → **169** | 1.74 → **1.18** | 95 / 0 |
| drug rehab troy | 99% → 100% | 168 → **169** | 2.00 → 2.00 | 0 / 0 |
| drug rehab near me | 100% → 100% | 1 → **17** (+16) | 9.51 → **6.35** | 166 / 1 |
| alcohol rehab near me | 93% → 99% | 0 → **4** (+4) | **12.45 → 8.52** | 156 / 1 |
| outpatient rehab near me | 99% → 100% | **50 → 35** (-15) | 5.39 → 4.61 | 72 / 37 |

*Chart-spec: 5-term grouped horizontal bar chart, two bars per term (Apr 24 / May 12 top-3 cell count), gold + green, value labels. Highlight "outpatient rehab near me" row in red — only regression.*

**Read — Troy:** Steep 18-day climb on near-me terms. Branded local terms locked at #1–#2 across the entire neighborhood grid. The single regression — "outpatient rehab near me" lost 15 top-3 cells while gaining top-10 coverage — is the one defensive priority. Whitney M Young Rehab Clinic (140 → 169 top-10 cells) and Hope House Outpatient Clinic (+98 top-10 cells) are the two pins pushing into Troy's top-3 space.

### Competitor watch list (surfaced from delta data)

Glenville grid — *collapsing competitors*: Capital District Recovery Center (-122 / -50 / -31 across terms), Sunnyview Rehab Hospital (-42 / -62), Addictions Care Center of Albany (-29 to -48). *Rising*: BriteLife Recovery at Lexington (+84 on "rehab upstate ny"), St. Peter's Addiction Recovery (+45 to +52 across terms), Every1 Center.

Troy grid — *Threat for "outpatient rehab near me" top-3*: Whitney M Young Rehab Clinic, Hope House Outpatient Clinic. *Rising on near-me terms*: Hospitality House TC (+88 to +105), Camino Nuevo (+66 to +78).

### Strategic implication

Both pins are on an upward trend before HQDM strategy work begins — **defensive posture is the correct call for Glenville + Troy**. The aggressive playbook stays reserved for the 3 weakest pins (Schenectady, Rochester, Syracuse) per §4. Troy adds one specific defense: the "outpatient rehab near me" SERP cluster against Whitney M Young + Hope House Outpatient. The other 5 outpatient pins (Schenectady, Glens Falls, Plattsburgh, Syracuse, Rochester) have no LD baseline yet — establish in M1.

---

## 1c. Competitor churn — total Δ top-10 cells across all tracked queries *(per-GBP standalone)*

Aggregates every competitor's top-10 cell count *summed across all tracked queries* per GBP, before-vs-after. Conifer Park's own line is the reference. Sibling Conifer pins (e.g. the inpatient pin appearing in the Troy grid) are listed but flagged — same brand, different GBP, treated as independent entities.

### Conifer Park Glenville Inpatient — Feb 21 2026 → Apr 27 2026 (9-week delta, 4 queries × 169 cells = 676 max top-10 cell-slots)

| Competitor | Before (top-10 cells) | After (top-10 cells) | Δ | Note |
|---|---:|---:|---:|---|
| St. Peter's Addiction Recovery | 179 | 311 | **+132** |  |
| BriteLife Recovery at Lexington | 44 | 143 | **+99** |  |
| Hedgerow House | 162 | 245 | **+83** |  |
| Every1 Center (Inpatient Detox and Drug & Alcohol Rehab) | 463 | 527 | **+64** |  |
| Hudson Park Rehabilitation and Nursing Center | 30 | 77 | **+47** |  |
| Pathways Nursing and Rehabilitation Center | 231 | 266 | **+35** |  |
| Delmar Center for Rehabilitation and Nursing | 20 | 48 | **+28** |  |
| Schenectady Center | 23 | 49 | **+26** |  |
| **Conifer Park Glenville Inpatient (this GBP)** | **565** | **584** | **+19** | **reference line — gained** |
| Capital District Recovery Center | 239 | 42 | **-197** |  |
| Healing Springs Recovery Community Center | 431 | 299 | -132 |  |
| Addictions Care Center of Albany | 171 | 46 | -125 |  |
| Sunnyview Rehabilitation Hospital | 364 | 252 | -112 |  |
| New Choices | 301 | 215 | -86 |  |
| St Marys Healthcare Outpatient Addiction At Amsterdam | 202 | 118 | -84 |  |
| Dawn LaCarte Counseling, Coaching & Consulting | 28 | 3 | -25 |  |
| St. Peter's Addiction Recovery Center (alt listing) | 70 | 48 | -22 |  |

*Chart-spec: horizontal bar chart, gainers top (green) → focal reference (highlighted) → losers bottom (red). X-axis = Δ top-10 cells, range ±200. Value labels on each bar. Title: "Competitor churn around Conifer Park Glenville Inpatient, Feb 21 2026 to Apr 27 2026".*

**Read — Glenville:** Conifer gained +19 top-10 cells across all 4 tracked queries — modest but positive against a backdrop of major churn. Top rising competitor: **St. Peter's Addiction Recovery** (+132 cells) — the dominant Capital Region organic player is now also pushing on Maps. Biggest collapse: **Capital District Recovery Center** (-197 cells) — vacated the SERP. The pattern is consistent with §1b's per-query data: competitor field is reshuffling significantly, Conifer is holding its own.

---

### Conifer Park Troy Outpatient — Apr 24 2026 → May 12 2026 (18-day delta, 5 queries × 169 cells = 845 max top-10 cell-slots)

| Competitor | Before (top-10 cells) | After (top-10 cells) | Δ | Note |
|---|---:|---:|---:|---|
| Addictions Care Center of Albany | 48 | 308 | **+260** |  |
| Hospitality House TC, Inc. | 153 | 411 | **+258** |  |
| Camino Nuevo | 34 | 203 | **+169** |  |
| Whitney M Young Rehab Clinic | 146 | 301 | **+155** | *Troy "outpatient rehab near me" threat per §1b* |
| Hope House Troy Outpatient | 662 | 786 | **+124** |  |
| Hope House Outpatient Clinic | 13 | 112 | **+99** | *Troy "outpatient rehab near me" threat per §1b* |
| Behavioral Health Outpatient Svs | 88 | 167 | **+79** |  |
| Troy Rehabilitation & Improvement Program, Inc. | 16 | 80 | **+64** |  |
| **Conifer Park Troy Outpatient (this GBP)** | **663** | **770** | **+107** | **reference line — gained** |
| 820 Supportive Living | 415 | 196 | **-219** |  |
| Kingdom Drug Rehab Group NY | 231 | 24 | -207 |  |
| Hive of Hope | 164 | 0 | -164 | **(dropped out)** |
| Hope House Inc | 139 | 20 | -119 |  |
| The Next Step Inc | 88 | 0 | -88 | **(dropped out)** |
| Hudson Mohawk Supportive Living | 118 | 55 | -63 |  |
| St Peter's Addiction Recovery | 111 | 56 | -55 |  |
| Conifer Park Glenville Inpatient | 401 | 144 | -257 | *sibling Conifer pin — independent ranking entity, not a Troy-side signal* |

*Chart-spec: horizontal bar chart, gainers top (green) → focal reference (highlighted) → losers bottom (red). X-axis = Δ top-10 cells, range ±300. Value labels on each bar. Title: "Competitor churn around Conifer Park Troy Outpatient, Apr 24 2026 to May 12 2026".*

**Read — Troy:** Conifer gained +107 top-10 cells across all 5 tracked queries — strong absolute gain. But the competitive field gained even harder: Addictions Care Center of Albany (+260) and Hospitality House TC (+258) both expanded from low baselines, and the two Troy "outpatient rehab near me" threats flagged in §1b (Whitney M Young +155, Hope House Outpatient +99) compound across all 5 queries. Biggest non-sibling collapse: **820 Supportive Living** (-219 cells). The Troy SERP is a high-churn environment in this 18-day window — defending the gain requires the CP-M2-11 targeted defense plus the M2 page rebuild.

---

## 2. Where conversions actually come from *(chart-ready)*

365-day GSC + GA4.

| Page group | Sessions / clicks | Conversions | % of total |
|---|---:|---:|---:|
| Home + /contact + /admissions + /inpatient | dominant | 99.4% | dominant |
| 6 `/service/*-in-glenville-ny` pages | 79 clicks / 365d combined | **0** | 0% |
| 6 `/outpatient/<city>` pages | ~2,200 clicks/365d combined | low/0 | low |
| **GBP/click** (GA4 `gmb/click`) | 7,656 sess/yr | **190** | **29%** at **2.48% conv** |

GBP/click converts at **5.8× the Google Organic rate** — this is the working channel. Service pages have a traffic problem (geo-locked URLs, no internal links from blog or location pages), not a CRO problem. Outpatient pages have a page-architecture + GBP-rating problem — high impressions and decent positions but CTR drag.

GSC positions (365d) for the 6 outpatient landing pages:
- Troy `/outpatient/troy` — pos 4.66, **0.897% CTR**, 438 clicks / 48.8K imp · best position, modest CTR
- Schenectady `/outpatient/schenectady` — pos 5.91, 1.066% CTR, 401 clicks / 37.6K imp · 2.7★ rating drag
- Plattsburgh `/outpatient/plattsburgh` — pos 6.96, 1.079% CTR, 318 clicks / 29.5K imp · 4.2★ rating, null photos
- Rochester `/outpatient/rochester` — pos 9.36, **0.819% CTR**, 422 clicks / **51.5K imp** · highest imp, worst CTR + 2.7★ rating drag
- Glens Falls `/outpatient/glens-falls` — pos 10.04, **1.627% CTR**, 255 clicks / 15.7K imp · best CTR; lower imp ceiling
- Syracuse `/outpatient/syracuse` — pos 11.75, 0.922% CTR, 354 clicks / 38.4K imp · weakest position
- 6 `/service/*` pages — pos 20-40, 1-42 clicks each · geo-locked to `-in-glenville-ny`, self-competing

---

## 3. Root cause — why we're underperforming outside Glenville

**A. PRIMARY — site architecture leaks the Maps win.** Only 1 of 7 GBPs (Plattsburgh) points to a city-specific page; the other 6 dump traffic on homepage. No GBP UTMs on 7 of 7 pins → GBP traffic invisible in GA4 by location. 6 `/service/*` pages geo-locked to `-in-glenville-ny` → not in top 100 for Albany / Saratoga / Capital Region queries. Troy redirect is backwards — `/outpatient/troy` is the URL Google indexes (438 clicks / pos 4.66) but it 301s to `/outpatient-rehab-troy-ny` (0 traffic); reversing the redirect direction is a 1-hour fix. 4 cannibal URLs (`/serving-all-of-troy-ny`, `/professional-outpatient-rehab-in-troy-ny-cornifer-park`, `/rochester-review`, `/liverpoolreview`) split topical authority with their canonical landing pages. 71 `/suburb/*` doorways with adjective-stuffed slugs ('leading', 'trusted', 'premier') including non-USGS place names (Honeywell Corners, Cedar Bluffs, Huntleigh — failed GNIS validation).

**B. SECONDARY — GBP profile depth gap.** Glenville (26 photos) is the only pin meeting the 25-photo benchmark. Troy has only 3 photos. Glens Falls 3; Rochester 5; Syracuse 6; Schenectady 9; Plattsburgh null. Plattsburgh also has a null description despite being a #1 rank winner. Rochester GBP has spam-tier secondary categories. Glens Falls has a title typo ("Glen Falls"). Syracuse GBP says "Liverpool" while site says "Syracuse". Of these, **only Glenville + Troy gaps are HQDM-actionable** (the 2 GBPs we have access to). The 5 unmanaged-pin issues are documented in the Hygiene Plan for the future when access opens.

**C. CONTRIBUTOR — trust-signal layer absent.** No Joint Commission. No CARF. No LegitScript. No insurance payor list public. Mountainside / Hazelden / AAC all carry visible accreditation.

**D. NOT a root cause — schema.** Conifer has the richest schema of any Recovery client audited (global @graph with MedicalOrganization + MedicalBusiness + 6× MedicalClinic + 4× MedicalProcedure). Deployed identically on every page. The lever is **refactor for page-level specificity** (M3), not full deployment like Arms Acres / Surfpoint.

---

## 4. Strategic focus

> *Defend GBP/click as the working channel (2.48% conv, 29% of conversions, #1-#2 Map Pack at all 7 pins) via LD scans on all 7 GBPs, photo + UTM + description cleanup, and a rating-lift review-velocity program targeting the 3 sub-4★ pins. **Rebuild the 5 high-impression outpatient pages** (Troy + Schenectady in M2; Glens Falls + Syracuse + Rochester in M3) to a common conversion-focused template — inline intake form, city-specific copy + map embed, MedicalClinic schema per location, GBP UTM → page. Rochester gets a CRO-specific brief (M1 diagnosis CN-03) because it has highest imp + worst CTR + worst rating drag. **Un-geo-lock the 6 service pages** from `-in-glenville-ny` so they compete on real Albany / Saratoga / Capital Region demand. **Clean up site architecture** (71 suburb doorways + WordPress debris). **Run the HQDM off-page playbook** (Dominator + SEO NEO + Cloud Page + Embedinator) against the 3 weakest-rating pins (Schenectady + Rochester + Syracuse) — defensive only on Glenville + Plattsburgh per asymmetric-risk doctrine. **Close trust signals** in M3 once client confirms accreditation. Compete vs **sphp.com** (St Peter's, owns Capital Region organic) + **newchoicesrecovery.org** (beats Conifer at Schenectady Map Pack with 4.2★ × 28 reviews). Pause new blog content; refresh top-5 high-impression already-ranking pages only.*

**Three themes:** (1) Defend Maps + lift ratings. (2) Rebuild 5 outpatient pages + un-geo-lock services. (3) HQDM off-page playbook on the 3 weakest-rating pins; hands-off Glenville + Plattsburgh per asymmetric-risk doctrine.

---

## 5. 3-month plan at a glance — 54 tasks, full detail in companion docs

*Schema matches Arms Acres canonical format: 12 lowercase snake_case columns (`task_id, pillar, month, owner, action, why, how, priority, estimated_hours, acceptance, document_reference, sop_reference`). Pillar codes: CP / SP / SA / OS / CN / LG-GV / LG-TR / LG-UP / LG-INF / OFF / OFF-07x / TS / RP. Priority: P0-must / P1-stretch / Q3-defer. Off-page sub-strategies broken out into 7 tactics (DAS · GBP Blast · GBP Sniper · RD100 · AI Article Creator · Driving Directions · NAP overlay) × 2 months. Per-pin GBP tasks for HQDM-supported pins (Glenville flagship + Troy outpatient); unmanaged-pin work rolled up under LG-UP gated on Owner Ask #1 access.*

| Month | What ships |
|---|---|
| **M1** | Reverse Troy redirect (/outpatient/troy → canonical) · consolidate 4 cannibal pages (301 or rewrite-as-support) · LD scans on remaining 5 pins (Glenville + Troy baselines already established) · competitor watch list per §1b · Glenville GBP description polish + services audit (15+ exist) + UTM + attributes · Troy GBP NAP fix + description build + services build from scratch (0 exist) + UTM · Troy photo blitz (3→25) gated on Owner Ask #6 · Glenville ExifTool re-injection on 26 existing photos · citation Tier-1 sweep on Glenville + Troy · Rochester CRO diagnosis · top-5 blog title+FAQ refresh · service-page ↔ GBP services-list gap audit (7 pins) |
| **M2** | Schenectady page rebuild · Troy page rebuild (conditional on SP-01 outcome) · service pages un-geo-locked · Glenville+Troy GBP Posts cadence (24+24 = 48) · **Troy 'outpatient rehab near me' targeted defense** (Whitney M Young + Hope House Outpatient — per §1b) · Glenville+Troy owner replies <4★ · **DAS + Blast + Sniper + AI Articles + Cloud Page + NAP overlay + Driving Directions on Schenectady + Rochester + Syracuse** · Embedinator across all 7 pins · review-velocity intake-side SOP rollout · top-5 blog content update |
| **M3** | Glens Falls + Syracuse + Rochester page rebuilds · page-level schema refactor (16 URLs) · NOINDEX 71 suburbs + WordPress debris · top-5 blog measurement + 3 supporting articles · LD re-pull at 7 coords vs baselines · DAS/Blast/Sniper/RD100/AI/NAP/DD cycle 2 · disavow file (toxic-links scan) · trust-signal close · Q2 close-out report |

**Aggressive playbook coverage matrix:**

| Pin | LD scan | Photo blitz | Posts | Dominator | Embedinator | SEO NEO | Cloud Page | Review velocity | Page rebuild |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Glenville | ✅ | (have 26) | defensive | — | ✅ | — | — | ✅ | (defended) |
| Troy | ✅ | ✅ M1 (3→25) | defensive | — | ✅ | — | — | ✅ | ✅ M2 |
| **Schenectady** | ✅ M1 | (have 9) | offensive | ✅ M2 | ✅ | ✅ M2 | ✅ M2 | ✅ | ✅ M2 |
| Glens Falls | ✅ M1 | ✅ M1 (3→25) | defensive | — | ✅ | — | — | ✅ | ✅ M3 |
| Plattsburgh | ✅ M1 | ✅ M1 (null→25) | defensive | — | ✅ | — | — | ✅ | (defended) |
| **Syracuse** | ✅ M1 | ✅ M1 (6→25) | offensive | ✅ M2 | ✅ | ✅ M2 | ✅ M2 | ✅ | ✅ M3 |
| **Rochester** | ✅ M1 | ✅ M1 (5→25) | offensive | ✅ M2 | ✅ | ✅ M2 | ✅ M2 | ✅ | ✅ M3 |

---

## 6. Risk register + client-side dependencies

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| 5 additional GBPs are out-of-HQDM-roster — ownership unclear | High | Medium | Escalate to Milica in M1 — same domain, same brand, distinct AM |
| Service-page un-geo-lock breaks current `*-glenville-ny` rankings before state-level builds | Medium | Medium | Sequence 301s + monitor weekly; rollback path = restore `-glenville-ny` slugs if Glenville Map Pack erodes |
| Rebuild rate exceeds team capacity (6 outpatient page rebuilds across M2-M3) | High | Medium | Phase: Schenectady + Troy in M2; Glens Falls + Syracuse + Rochester in M3. Plattsburgh untouched |
| GBP suspension risk from M2 aggressive off-page work | Low-Med | **High** | All HQDM-rotation tactics; hands-off Glenville (#1 + revenue floor) + Plattsburgh (only clean winner) |
| Troy "outpatient rehab near me" top-3 erosion (50 → 35 cells in 18 days per §1b) — Whitney M Young + Hope House Outpatient pushing in | Medium-High | Medium | Targeted defense in M2: Troy GBP Posts cadence + Troy page rebuild + LD weekly tracking of these two competitors; no aggressive off-page on Troy (suspension risk vs HQDM-supported pin) |

**Client-side asks (one consolidated call):** CARF / Joint Commission status · LegitScript registry check · insurance payor list · Troy address ground-truth (2431 vs 2435) · ownership of 5 non-HQDM-roster GBPs · intake-side review SOP · Driving Directions program escalation · disavow approval · schema sign-off.

---

### Strategy + execution docs

| Doc | Purpose |
|---|---|
| `Conifer_Park_Q2_2026_Custom_Strategy.md` | 651-line internal long doc — full diagnostic + evidence |
| `Conifer_Park_Q2_2026_Strategy_Condensed.md` | This 3-page team strategy doc |
| `coniferpark_3month_plan.md` | Long-form 3-month execution plan — owner / dept / specifics / acceptance |
| `Conifer_Park_3Month_Tasks.csv` | 62-task Asana-ready CSV — Drive AA-canonical schema (12 cols snake_case) |
| `Conifer_Park_Owner_Conversation_Items.md` | Consolidated owner asks (10 items) |
| `LG-GV-01_Description_Rewrite.docx` | Glenville GBP description rewrite brief |
| `LG-TR-01_Description_Rewrite.docx` | Troy GBP description rewrite + NAP fix brief |

### Per-task supporting sheets

| Doc | Backs which tasks |
|---|---|
| `Conifer_Park_Outpatient_Pages_Plan.xlsx` | SP-02 (Troy — conditional rebuild), SP-03 (Schenectady), SP-05 (Glens Falls + Syracuse + Rochester) per-page rebuild briefs + Page_Benchmarks tab with verified GSC + GBP metrics per pin |
| `Conifer_Park_Cannibal_Pages_Plan.xlsx` | SA-02 (4 cannibal URLs × 301 or rewrite-to-supporting action) |
| `Conifer_Park_Service_Pages_UnGeoLock.xlsx` | SP-04 (6 service pages × old slug → new slug + 301) |
| `Conifer_Park_Suburb_Decisions.csv` | CP-M3-03 (71 suburbs × NOINDEX / DELETE / KEEP-AUDIT decision + USGS validation) |
| `Conifer_Park_OffPage_Stack_3Month.xlsx` | CP-M2-06 Dominator, CP-M2-07 Embedinator, CP-M2-08 SEO NEO, CP-M2-09 Cloud Page + Driving Directions + Coverage Matrix |
| `Conifer_Park_GBP_Posts_3Month.xlsx` | CP-M2-04 (post schedule × pin × week) |
| `Conifer_Park_GBP_Hygiene_Plan.xlsx` | CP-M1-05 NAP/title/category, CP-M1-06 photos, CP-M1-07 UTMs, CP-M3-09 services list |
| `Conifer_Park_Citations_3Month.xlsx` | CP-M1-08 (7 pins × 15 citation surfaces) |
| `Conifer_Park_Reviews_Plan_3Month.xlsx` | CP-M2-05 owner replies, CP-M2-10 review velocity targets |
| `Conifer_Park_Blog_Refresh.xlsx` | CP-M3-04 (top 5 high-impression + 3 supporting) |
| `Conifer_Park_Schema_Plan.xlsx` | CP-M3-02 (page-level schema refactor map) |
| `Conifer_Park_Trust_Signals_Tracker.xlsx` | CP-M3-08 (per-badge status — OASAS / Joint Commission / CARF / LegitScript / SAMHSA / payor list / ATPA) |

### Raw data exports

| Doc | Purpose |
|---|---|
| `exports/dataforseo/maps_additional_5coords.csv` | Fresh Maps SERP at the 5 non-Glenville/Troy coords (2026-05-14) |
| `exports/dataforseo/probe_additional_locations.json` | Full GMB profile data for the 5 additional GBPs (2026-05-14) |
| `exports/dataforseo/gmb/*/info.json + reviews.csv` | Full GMB scrape (Glenville + Troy reviews, info, Q&A, updates) |
| `exports/decision_matrix.csv` | 771-URL decision matrix (459 blogs + 71 suburbs + 9 services + 6 locations + 43 core + 2 home) |
| `exports/local_dominator/conifer_ld_delta_summary.csv` | Per-GBP per-query delta summary backing §1b |
| `exports/local_dominator/conifer_ld_delta_cells.csv` | Cell-level rank before/after/delta (renderable as heatmap) |
| `exports/local_dominator/conifer_ld_delta_competitors.csv` | Per-query competitor top-10 cell-count movement |
| `exports/local_dominator/conifer_ld_competitor_churn_glenville.csv` | Cross-query aggregated competitor churn backing §1c (Glenville, 219 competitors) |
| `exports/local_dominator/conifer_ld_competitor_churn_troy.csv` | Cross-query aggregated competitor churn backing §1c (Troy, 46 competitors) |
