# Conifer Park — Q2 2026 3-Month Execution Plan

**Owner:** Aleksandar · **Date:** 2026-05-14 · **Phase:** Phase 1 Recovery — strategy-first rollout
**Source docs:** `Conifer_Park_Q2_2026_Custom_Strategy.md` (651-line internal) · `Conifer_Park_Q2_2026_Strategy_Condensed.md` (3-page team doc) · DataForSEO Maps SERP (4 baseline + 5 new coords) · GMB scrape (7 GBPs, all claimed) · GSC 365d (pages + queries)

> **Strategy posture.** Conifer owns the Glenville Map Pack outright (#1 at the facility coord on all 12 priority anchors) and ranks **#1-#2 in the Map Pack at every one of the 7 GBP locations** — but average rating across the 7 GBPs is 3.3★, three are below 4.0★, two are at 2.7★. The Maps win is fragile. **Plattsburgh is the proof template** — only `/outpatient/<city>/` URL with trailing slash + the only GBP that points to the city page (not homepage); ranks **pos 5.5 organic at 3.38% CTR** vs the other 5 outpatient pages at pos 9.4–11.8 / 0.82–1.63% CTR. Q2 = replicate the Plattsburgh pattern across all 7 pins, fix architectural pollution (tel: URLs, case-sensitive duplicates, legacy /program/), run an HQDM off-page playbook against the 3 weakest pins (Schenectady 2.7★, Rochester 2.7★, Syracuse 3.4★), defend Glenville + Plattsburgh.
>
> **Department coverage every month:** On-Page (Aleksa) · Content · Off-Page/Authority (Julce) · Local/GBP · CRO/Reporting (Marija) · Compliance/intake (client-side asks).

---

## MONTH 1 — Fix the architecture + plant tracking + GBP triage (10 tasks)

| # | Dept | Task | Specifics | Why (data) | Done = |
|---|---|---|---|---|---|
| **1** | On-Page | **Single-fix the `tel:` URL spawning at template layer** + 410 the spawned URLs (`/category/tel:8009896446`, `/author/matt/page/tel:8009896446`, `/outpatient/troy/tel:8009896446`, and any other `tel:` resolved as relative path) | Phone-number `tel:8009896446` is being treated as a relative path, spawning dozens of polluted URLs across the site. Single fix at the template layer kills the source | URL-pollution exposure; flagged in session log finding #3 + Custom Strategy §2.4 finding (b) | One template fix shipped; full list of `tel:*` URLs returns 410; sitemap clean |
| **2** | On-Page | **Force lowercase URL normalization** via Cloudflare/Webflow server rule + 301 the 4 known case-sensitive duplicates (`/OUTPATIENT/TROY`, `/OUTPATIENT/SCHENECTADY`, `/OUTPATIENT/SYRACUSE`, `/OUTPATIENT/GLENS-FALLS`) | Indexed all-caps variants compete with canonical lowercase paths. Each is a separate URL to Google | Custom Strategy §2.4 finding (b) — case-sensitive duplicate URLs indexed | All 4 capital-case URLs 301 to canonical; rule prevents future occurrences |
| **3** | On-Page | **Fix Troy URL canonicalization** — make `/outpatient/troy/` the canonical (matching the working Plattsburgh pattern) and 301 the legacy `/outpatient-rehab-troy-ny` to it. Update sitemap | Troy is the *only* HQDM-supported outpatient on the legacy slug. Currently /outpatient/troy 301s to legacy; reverse the direction. Aligns with Plattsburgh's winning pattern (pos 5.5, 3.38% CTR) | Per `feedback_check_framework_first.md` — Plattsburgh = the proof template for outpatient URL pattern. Troy GSC: pos 4.7, 438 clicks, 0.90% CTR — has rank, needs the slug + form to convert | Canonical `/outpatient/troy/` 200s; `/outpatient-rehab-troy-ny` 301s; sitemap reflects |
| **4** | Local/GBP | **Configure Local Dominator scans on all 7 GBPs** — Glenville + Troy (HQDM-supported, priority) + Schenectady + Glens Falls + Plattsburgh + Syracuse/Liverpool + Rochester. 8 priority keywords per pin: drug rehab `<city>`, alcohol rehab `<city>`, outpatient rehab `<city>`, addiction treatment `<city>`, suboxone/MAT `<city>`, detox `<city>`, opioid treatment `<city>`, rehab near me | All 7 GBPs are claimed (confirmed via DataForSEO Business Data probe 2026-05-14). Zero LD scans configured today. Without LD, the reporting tracker cannot show "we ranked top-3 in N% of the grid" — the strategy item that justifies maintaining GBP investment | All 56 grids running weekly; M3 has 4-week baseline |
| **5** | Local/GBP | **Fix 4 GBP NAP / title / category issues across the 7 pins** — (a) Troy address inconsistency 2431 vs 2435 6th Ave [Custom Strategy §4.5]; (b) Glens Falls GBP title typo "Glen Falls" → "Glens Falls"; (c) Syracuse GBP says "Liverpool" while website says "Syracuse" — pick one, align both; (d) **Rochester GBP secondary categories are spam-tier** — remove `Coaching center`, `Physical fitness program`, `Physical therapist`, `Wellness program`; replace with clinically-true secondaries (`Mental health service`, `Medical clinic`) | NAP / category inconsistencies are documented local-SEO ranking penalties. Rochester is at 2.7★ × 36 reviews — wrong categories make the rating gap worse | All 4 fixes verified live in GBP; screenshot in evidence column |
| **6** | Local/GBP | **Photo + description gap close on the 4 photo-starved GBPs** — Plattsburgh (0→25 photos), Glens Falls (3→25), Rochester (5→25), Syracuse (6→25). Glenville + Troy + Schenectady already at 9+; add description on Plattsburgh (currently null) | All 7 GBPs scraped 2026-05-14. Photo counts: Plattsburgh **null/0**, Glens Falls 3, Rochester 5, Syracuse 6, Schenectady 9. New Choices Recovery (3.4★ × 28 reviews) outranks Conifer in Schenectady with 12 photos — photo depth matters. Plattsburgh is the rank #1 winner with zero photos = trust-signal gap | Each of 4 pins ≥ 25 photos, geotagged, categorized; Plattsburgh has 720-char description |
| **7** | Local/GBP | **Add UTM `?utm_source=gmb&utm_medium=click&utm_campaign=gmb_listing_<location>` to GBP URLs across all 7 pins** + repoint the 6 pins currently URLed to homepage so each pin points to its corresponding `/outpatient/<city>/` page (matching Plattsburgh) | Only Plattsburgh GBP points to its location page; the other 6 dump traffic on coniferpark.com/. None of the 6 carry UTMs — that traffic is invisible to GA4 `gmb/click` attribution. Custom Strategy §4.5 + §4.6. Without UTMs, the 29% conversion-share `gmb/click` channel can't be split by pin | All 7 GBP URLs carry UTM + point to per-location page; GA4 starts splitting `gmb/click` by location |
| **8** | Off-Page | **Citation NAP-sync audit + cleanup across the 7 pins** — pull NAP from BBB, Apple Maps, Bing Places, Yelp, Foursquare, Healthgrades, Psychology Today, SAMHSA findtreatment.gov, NYS OASAS Find a Provider, Recovery.com. Build a per-pin NAP diff spreadsheet; submit corrections | All 7 GBPs share the same parent brand but the 5 additional locations were never in HQDM's citation workflow — NAP drift across third parties is the default state. Local SEO penalizes inconsistency | Per-pin NAP diff doc shipped; corrections submitted on all priority citations (≥8 surfaces per pin) |
| **9** | Off-Page | **Pull DataForSEO Backlinks for coniferpark.com + 3 priority competitors** — sphp.com (St Peter's Health Partners, the #1 organic competitor at avg #9.9 across 22/25 queries), hopehouseinc.org, newchoicesrecovery.org. Build link-gap CSV using the Arms Acres template | Backlink profile audit gated all M2/M3 link-building work. Custom Strategy §4.2 — sphp.com owns the Albany/Troy/Saratoga organic side that Conifer can't reach (NOT-IN-TOP-100 for 8 Albany/Saratoga queries) | Link-gap CSV shipped; top 10 link opportunities identified |
| **10** | Reporting/CRO | **Diagnose Rochester CRO catastrophe** — pos 49 organic for "drug rehab rochester" (430 imp, 0 clicks) BUT Maps SERP #1 with 36 reviews. Why does Map Pack visibility not convert to organic CTR? Audit page content vs intent + form placement vs Plattsburgh template | GSC: Rochester page ranks pos 9.4 / 422 clicks / 0.82% CTR; specific city queries return pos 23-49. Plattsburgh has the same GBP rank but pos 5.5 / 3.38% CTR / 612 clicks on the page. Per `feedback_blog_topical_relevance.md` — diagnose root cause not just metric | GA4 funnel diff Rochester vs Plattsburgh; 1 page-redesign brief shipped to feed M2 |

---

## MONTH 2 — Replicate Plattsburgh template + competitor takedown + content cluster (10 tasks)

| # | Dept | Task | Specifics | Why (data) | Done = |
|---|---|---|---|---|---|
| **1** | On-Page | **Rebuild `/outpatient/schenectady`** as Schenectady-funnel asset (highest-priority rebuild — 1,472 sess/yr, 0 conv, GBP at 2.7★ × 10 reviews) | Schenectady-specific copy (neighborhoods: Niskayuna, Rotterdam, Scotia, Glenville; transit access), embedded map at Franklin St coord, inline intake form, MAT/OTP/IOP service callout, LocalBusiness + MedicalClinic schema with Schenectady NAP, real photos, payor list | Schenectady-city visitors converting at 3.6% on home/contact/admissions but 0 on the Schenectady page (Custom Strategy §1.6). New Choices Recovery beats Conifer at #1 in Schenectady Maps with 4.2★ × 28 reviews despite Conifer having 153 reviews on Glenville | Page meets 1000+ word bar; intake form; per-location schema; manual Maps re-pull at Schenectady coord shows Conifer position improved or held |
| **2** | On-Page | **Rebuild `/outpatient/troy/`** (post-M1 URL canonicalization) | Same Plattsburgh-template treatment — Rensselaer County neighborhoods (Rensselaer, Watervliet, Cohoes, Lansingburgh, Wynantskill), embedded map, inline intake, MAT/OTP service callout, MedicalClinic schema per Troy. Real photos including streetview | Troy is HQDM-supported, currently at 4.7 pos / 0.90% CTR vs Plattsburgh's 5.5 pos / 3.38% CTR — Troy has rank, needs the page to convert. Custom Strategy M1 #15 + M1 #16 already specified Troy fixes | Page rebuilt; M3 measures CTR delta + on-page-attributed conv |
| **3** | On-Page | **Un-geo-lock the 6 `/service/<name>-in-glenville-ny` service pages** — rewrite each to be NY-state-level service page (e.g., `/services/medication-assisted-treatment`); cross-link to each `/outpatient/<city>/` page from a "Where to receive this service" section; consolidate the legacy `/program/<name>` (WordPress) URLs into a 301 chain to the new canonical | All 6 service pages range from pos 22-40 in GSC (2-15 clicks each); they only rank for `*-glenville-ny` queries where they self-compete across 8 URLs. Custom Strategy §2.1 — geo-lock confirmed in SERP data; not in top 100 for Albany / Saratoga / Capital Region queries | 6 service pages re-slugged; 301s in place; internal links from each `/outpatient/<city>/` page added |
| **4** | Local/GBP | **GBP Posts cadence — 1/week per pin on the 3 weakest** (Schenectady 2.7★, Rochester 2.7★, Syracuse 3.4★) | Topics drawn from rebuilt service pages + insurance acceptance + walk-in MAT + Medicaid + community events. Caveman-spam vehicle for ranking signals per Arms Acres pattern | 0 active Posts on 6 of 7 Conifer GBPs (Glenville has 10 active per scrape; Troy has 1; others 0 per Phase 2 GMB run timeouts but assumed 0). Competitors run Posts cadence | ≥4 Posts per pin by end of M2 on the 3 priority pins; Glenville + Troy keep 1/week defensive cadence |
| **5** | Local/GBP | **Owner replies to all <4★ reviews across the 7 GBPs** with empathy + outcome statement | 7 GBPs × avg 3.3★. Rochester is 19/36 1-star (52.8%), Schenectady 5/10 1-star (50%), Glens Falls 6/25 1-star (24%), Syracuse 9/27 1-star (33%). Per `feedback_gbp_place_topics_signal.md` — negative content density is a ranking lever | Every <4★ review has owner reply across all 7 pins; <4★ % targeted to fall via positive review inflow (Task #10 below) |
| **6** | Off-Page | **HQDM Maps Dominator runs on the 3 weakest pins** (Schenectady + Rochester + Syracuse/Liverpool) — 9 suburbs each = 27 supporting MyMaps + spintext cloud-blog stacks per Dominator SOP. Schenectady suburbs: Niskayuna, Rotterdam, Scotia, Glenville; Rochester: Brighton, Henrietta, Greece, Penfield; Syracuse: Liverpool, Clay, North Syracuse, Salina | Schenectady (#4 Map Pack, beaten by New Choices), Rochester (#1 Map Pack but 2.7★ = fragile), Syracuse (#1 Map Pack but thin SERP, only 1-2 competitors). Defensible aggressive lift per `project_hqdm_tier0_exposure.md` — principal-level escalation pattern used on Arms Acres + Best of Utah | 27 MyMaps + supporting stacks live per pin (81 total); cadence per existing Dominator program |
| **7** | Off-Page | **HQDM Embedinator across all 7 pins** — embed-stack web-2.0 pyramid pointing at every GBP per Embedinator SOP | Standard HQDM off-page tactic. All 7 pins benefit; Plattsburgh + Glenville defensive, the other 5 offensive | Embed stacks live for all 7 pins; URL-tracking sheet logged |
| **8** | Off-Page | **HQDM SEO NEO cloud-blog network — 25-30 spun articles per pin on the 3 weakest** (Schenectady + Rochester + Syracuse/Liverpool) | Aaron Gruenke methodology per `SEO NEO SOP BASIC` — ExifTool keyword-stuffed images, iframe-within-iframe dwell-time loops, authority-entity injection. Each cloud blog points at corresponding `/outpatient/<city>/` URL + GBP profile | 75-90 spun articles deployed across 3 pins; pointing live |
| **9** | Off-Page | **HQDM Cloud Page deployment on the 3 weakest pins** — geo-targeted Google Sites + bunny.net/Dropbox subdomain stacks per `Cloud Page \| SOP \| HQDM`. One Cloud Page per pin × 3 attack pins. Title-tag geo-spoofed to target catchment | Mirrors Arms Acres M2 #5. The HQDM playbook for matching off-page signal density at the pin level | 3 Cloud Pages live; pointing logged; staging sheet entry per cadence |
| **10** | Local/GBP | **Review-velocity program scoping + launch on the 3 weakest pins** (Schenectady, Rochester, Syracuse). Intake-discharge SOP: SMS + printed card with QR. Target +15 reviews per pin in M2-M3 | Quarantined `Review SOP.docx` available as parallel track per `project_hqdm_tier0_exposure.md` — escalate to principal before activating ChatGPT-authored review track. Intake-side velocity is the cleaner channel | Review counts logged weekly per pin in reporting sheet; <4★ % trends down |

---

## MONTH 3 — Compound + measure + new authority + close trust gap (10 tasks)

| # | Dept | Task | Specifics | Why (data) | Done = |
|---|---|---|---|---|---|
| **1** | On-Page | **Rebuild remaining 4 outpatient pages** (`/outpatient/glens-falls`, `/outpatient/syracuse`, `/outpatient/rochester`, and any remaining sub-locations) using the Plattsburgh template + the M2 Schenectady/Troy rebuilds | Per-city neighborhoods + embedded map + intake form + MedicalClinic schema per location. Resolve title-tag HTML-encoding artifacts on Glens Falls (`&quot;`) and Plattsburgh (`&#x27;`) [Custom Strategy M1 #11] | GSC: Glens Falls pos 10.0, Syracuse 11.8, Rochester 9.4 — all behind Plattsburgh's pos 5.5. The page architecture is the difference | All 4 pages rebuilt to template; encoding artifacts fixed |
| **2** | On-Page | **Page-level schema refactor** — Troy gets Troy-specific MedicalClinic block (not global @graph); Reviews page gets AggregateRating + Review schema; each rebuilt `/outpatient/<city>/` gets per-location MedicalClinic + LocalBusiness; each rebuilt service page gets MedicalProcedure | Custom Strategy §3 / M1 #7 — schema is already rich (global @graph) but identical on every page. The lever is page-level specificity, not full deployment | Rich-results test passes for ≥80% of touched URLs; HQDM 3-layer validation cascade (Wikidata Q-ID + schema.org property + manual RRT) passes per `reference_schema_validation_workflow.md` |
| **3** | On-Page | **NOINDEX the 71 `/suburb/*` doorway pages** + redirect 5 highest-traffic ones to nearest real location. NOINDEX/delete the WordPress migration debris (`/2013/*`, `/2014/*`, `/category/*`, `/author/matt`, `/admissions.html`, `/programs.html`, indexed PDFs) | Custom Strategy session log finding #8 + #7. 71 suburbs include invented place names (Honeywell Corners, Cedar Bluffs, Huntleigh, Harmony Corners — failed USGS GNIS validation). March 2024 spam-policy risk | All 71 suburbs return `noindex,follow`; 5 redirects in place; WordPress debris purged from sitemap |
| **4** | Content | **M3 content batch — 5 articles refresh** + 3 new supporting articles. Refresh the highest-volume already-ranking blogs (kratom: 107K imp, detox symptoms: 9.7K imp, how long alcoholics live: 5.5K imp, what is kratom: 30.5K imp, valacyclovir+alcohol: 16.5K imp) — title rewrites + FAQ schema. NO net-new blog content per content-posture decision | These 5 are top non-brand traffic drivers; kratom alone is 368 clicks/yr at pos 2.1. Per `feedback_blog_topical_relevance.md` — keep relevant high-impression content, refresh CTR | All 5 refresh + 3 supporting articles shipped; GSC re-crawl requested |
| **5** | Off-Page | **Execute top 10 link opportunities from M1 #9 link-gap CSV.** Focus on NYS recovery community + Capital Region medical citations (CARF if applicable, NYS OASAS Find a Provider, Psychology Today, SAMHSA verification, NY recovery community publications, behavioralhealthnews.org pitch) + ATPA membership profile | M1 #9 surfaces the gaps. Custom Strategy §4.2 — sphp.com / hopehouseinc / newchoicesrecovery have specific citations Conifer doesn't | 10 link opportunities executed (or pitched); 6 confirmed live |
| **6** | Local/GBP | **Pull Maps SERP re-run at all 7 coords** + LD grid scan compare. Compare to M1 baseline; assign credit to specific M1/M2 work per pin | Need closed-loop measurement for Marija's "% Reports With Full Correlation" metric. Custom Strategy M2 #6 echo | Delta report shipped per pin; win/hold/lose tagged per pin |
| **7** | Off-Page | **Disavow file generation from M1 #9 backlinks pull** — build disavow.txt of pure-spam patterns only (not borderline); ready for client-side GSC upload | Per `project_hqdm_offpage_position.md` — diagnose-and-disavow not halt. Conifer's backlinks profile hasn't been audited per Phase 2 data state (gates M2 #24 per session log) | Disavow file ready for Conifer SC upload (client-side approval gating) |
| **8** | On-Page | **Close trust-signal gap** — pursue Joint Commission OR CARF accreditation status confirmation; if either is held, deploy badges sitewide + schema mention + admissions page section. If neither, escalate to client-side as a sales-cycle ask. LegitScript certification status verification (lookup_url in client.json) | Custom Strategy §1.5 — NO Joint Commission, CARF, or LegitScript visible on site; competitive gap vs Mountainside/Hazelden/AAC. Insurance payor list also absent from public site — high-intent conversion gap | Trust-signal status documented per badge; deployed if confirmed; insurance payor list published on /admissions |
| **9** | Local/GBP | **GBP services list completion across all 7 pins** — full clinical service enumeration (MAT, OTP, IOP, dual diagnosis, family program, psychiatric services, detox referral for outpatient pins). Match clinically-true service offering per pin | Most GBPs don't have services list per default. Service-specific Map Pack ranking improves with proper services list. Each pin has different service scope (e.g., only Glenville has inpatient detox) | All 7 GBPs have services list populated; per-pin clinical accuracy verified |
| **10** | Reporting | **Q2 close-out report — planned → executed → impact.** Every M1-M3 task → action → outcome metric per pin. Mirror Marija's MoM Summary "% Reports With Full Correlation" format | Per `project_hqdm_strategy_rollout.md` — this is the rollup Milica is judging Phase 1 rollout against | Single report shipped; every row has Result/Notes + Evidence column populated |

---

## Department coverage check

| Dept | M1 | M2 | M3 |
|---|---|---|---|
| On-Page (Aleksa) | 1, 2, 3 | 1, 2, 3 | 1, 2, 3, 8 |
| Content | — | 3 (service rewrites) | 4 |
| Local/GBP | 4, 5, 6, 7 | 4, 5, 10 | 6, 9 |
| Off-Page (Julce) | 8, 9 | 6, 7, 8, 9 | 5, 7 |
| Reporting/CRO (Marija) | 10 | — | 10 |
| **Client-side asks** | CARF/JCAHO status verify, LegitScript registry check, Troy address ground-truth | Insurance payor list compile, intake-side review SOP, Driving Directions principal-level escalation if approved | Disavow approval, schema sign-off, accreditation badges sign-off |

---

## Map-grid weak points → per-pin moves (2026-05-14 baseline)

| Coord | GBP rank (priority anchor) | Rating × reviews | M1-M3 plan |
|---|---|---|---|
| `glenville_facility` | **#1/12** all anchors | 3.2★ × 153 | DEFEND — LD scans + review-velocity to lift to 4.0★, photo refresh, Posts cadence |
| `troy_outpatient` | (Maps + organic both rank, organic pos 4.7) | 3.9★ × 27 | URL fix (M1#3) + page rebuild (M2#2) + photos + review velocity (M2#10) + Posts |
| `schenectady_franklin` | **#4** outpatient rehab; **#2** suboxone | **2.7★ × 10** | Page rebuild (M2#1) + Posts + Dominator (M2#6) + SEO NEO (M2#8) + Cloud Page (M2#9) + review velocity |
| `glens_falls` | **#1** drug rehab; **#2** outpatient rehab | 3.9★ × 25 | Page rebuild (M3#1) + photo blitz (M1#6) + title typo fix (M1#5) + Posts (defensive) |
| `plattsburgh` | **#1** drug rehab + opioid treatment | 4.2★ × 16 | DEFEND — only photo+description gap (M1#6); page is the template (do not touch URL or layout) |
| `syracuse_liverpool` | **#1** both anchors (thin SERP) | 3.4★ × 27 | Page rebuild (M3#1) + Posts (offensive) + Dominator (M2#6) + SEO NEO (M2#8) + Cloud Page (M2#9) + review velocity |
| `rochester` | **#1** both anchors but **organic pos 49** | **2.7★ × 36** | CRO diagnosis (M1#10) + page rebuild (M3#1) + Dominator (M2#6) + SEO NEO (M2#8) + Cloud Page (M2#9) + remove spam categories (M1#5d) + review velocity |

**Aggressive playbook = M2 only on the 3 weakest pins (Schenectady, Rochester, Syracuse).** Glenville + Plattsburgh + Troy + Glens Falls hands-off for Tier-1 spam tactics (Glenville + Plattsburgh = winning pins; touching with spam-pattern signals is asymmetric risk per Arms Acres rationale). Carmel-OP-equivalent here is: Glenville and Plattsburgh.

---

## GSC organic conversion levers (already in M1/M2/M3 batches)

Per `gsc/pages_last_365d.csv` (2026-05-14 snapshot), highest-leverage already-ranking pages:

1. `/admissions` — pos 4.0, 696 clicks, 1.10% CTR, **63,242 imp** — CTR optimization could 2-3x clicks
2. `/inpatient` — pos 7.5, 818 clicks, 1.39% CTR, 58,924 imp — same
3. `/outpatient/plattsburgh/` — pos 5.5, 612 clicks, **3.38% CTR**, 18,127 imp — PROOF TEMPLATE
4. `/outpatient/rochester` — pos 9.4, 422 clicks, 0.82% CTR, 51,508 imp — CTR catastrophe (51K imp wasted)
5. `/outpatient/syracuse` — pos 11.8, 354 clicks, 0.92% CTR, 38,385 imp
6. `/outpatient/troy` — pos 4.7, 438 clicks, 0.90% CTR, 48,845 imp — rank exists, CTR doesn't

Brand vs non-brand: 14,273 vs 14,329 clicks (50/50) on **86K vs 4.9M impressions** — non-brand CTR is 0.29%. Every 1-point CTR lift on the 4.9M non-brand impressions = 49,000 additional clicks/yr.

---

## Explicit deferrals

- **New `/locations/<city>/<service>` matrix pages** (e.g., `/locations/troy/mat-treatment`) — Phase 2; first prove the M1-M3 rebuild moves the needle on existing pages
- **PPC / paid acquisition** — gated on LegitScript verification (M3 #8)
- **Backlinks audit beyond top 3 competitors** — sphp.com / hopehouseinc / newchoicesrecovery covers 80% of the organic surface; berkshiremountaindetox.com + Wellbridge.org are Phase 2 if budget
- **Driving Directions program** — principal-level escalation only; not in Q2 plan absent approval (Glenville already #1, so program ROI is questionable here unless added to weakest pins; defer until Maps re-pull at M3 shows real movement)
- **Net-new blog content beyond M3 #4's 3 supporting articles** — confirmed content posture; refresh existing high-impression blogs only

---

## Tier-1 aggressive playbook coverage matrix

| Pin | LD scan | Photo blitz | Posts cadence | Dominator | Embedinator | SEO NEO | Cloud Page | Review velocity | Page rebuild |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Glenville (inpatient) | ✅ | (already 9+) | defensive | — | ✅ | — | — | ✅ (lift to 4.0★) | (defended) |
| Troy outpatient | ✅ | (already adequate) | defensive | — | ✅ | — | — | ✅ | ✅ M2#2 |
| Schenectady | ✅ | (already 9) | offensive | ✅ M2#6 | ✅ | ✅ M2#8 | ✅ M2#9 | ✅ | ✅ M2#1 |
| Glens Falls | ✅ | ✅ M1#6 | defensive | — | ✅ | — | — | ✅ | ✅ M3#1 |
| Plattsburgh | ✅ | ✅ M1#6 | defensive | — | ✅ | — | — | ✅ | (template — do not touch) |
| Syracuse/Liverpool | ✅ | ✅ M1#6 | offensive | ✅ M2#6 | ✅ | ✅ M2#8 | ✅ M2#9 | ✅ | ✅ M3#1 |
| Rochester | ✅ | ✅ M1#6 | offensive | ✅ M2#6 | ✅ | ✅ M2#8 | ✅ M2#9 | ✅ | ✅ M3#1 |
