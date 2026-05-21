# Arms Acres — Q2 2026 3-Month Execution Plan

**Owner:** Aleksandar · **Date:** 2026-05-13 · **Phase:** Phase 1 Recovery — Strategy-first rollout
**Source docs:** `arms_acres_m1_priorities.md` (pages/articles/links) · `arms_acres_competitor_brief.md` · GBP `info_comparison.csv` + `qa_updates_summary.csv` · `maps_serp.csv` (5 coords)

> **Strategy posture:** Caveman that spams — at scale, in the right places. Carmel is uncontested (defend). Bronx + Queens are 0/0 in their own Map Packs (attack). Service pages have zero conversion mechanism (fix structurally). Insurance + payor articles rank 11-30 with 214K impressions (push to top 5).
>
> **Department coverage every month:** On-Page (Aleksa) · Content · Off-Page/Authority (Julce) · Local/GBP · CRO/Reporting (Marija) · Compliance/intake (client-side asks).

---

## MONTH 1 — Stop the bleeding + plant the spam flag (10 tasks)

| # | Dept | Task | Specifics | Why (data) | Done = |
|---|---|---|---|---|---|
| **1** | On-Page | Deploy the **4-input intake form** (Name/Email/Phone/Message) to every `/service/*`, `/inpatient/*`, `/outpatient/*` page, above the fold and at footer | Template exists in Webflow, never deployed. 24K sessions/365d → 0 conv on service pages | Service pages = 0 conv vs home/contact/admissions = 97% of 531 annual conv | Form live + GA4 `form_submit` event verified on each URL |
| **2** | On-Page | Fix homepage `og:description` — "Bold Steps Behavioral Health is the best drug rehab in Harrisburg PA." is **live** | Replace with NY-state Arms Acres copy mentioning Carmel + inpatient + Medicaid | Wrong-brand boilerplate on the homepage social/share preview | View-source check on `armsacres.com/` |
| **3** | On-Page | Improve `/inpatient/adult-rehabilitation` — single highest-leverage page | Insurance-by-name section (Aetna/Medicare/Medicaid/Tricare), opioid sub-section, alcohol sub-section, Brooklyn service-area mention, Medicaid-acceptance prominent | 8 content-gap clusters converge on this URL | All 4 insurance names + opioid + alcohol + Brooklyn present; word count +30%; FAQ schema |
| **4** | Content | Title rewrites + 2026-stat refresh on **top 5 insurance/cost articles** (M1 batch 1) | `/blog/insurance-cover-drug-and-alcohol-rehab` · `/blog/how-to-get-insurance-to-pay-for-inpatient-rehab` · `/blog/medicare-cover-alcohol-and-drug-rehab` · `/blog/tricare-cover-alcohol-and-drug-rehab` · `/blog/aetna-cover-rehab-treatment` | All ranking 11-20, 49K combined imp / 180d, 0.05-0.5% CTR — moving to top 5 = ~10× clicks | Title + intro + FAQ schema shipped on all 5; GSC re-crawl requested |
| **5** | Local/GBP | **Fix Queens GBP description** — currently 33 chars (vs Ascendant 750, Mountainside 702) | Write 720-char description: outpatient SUD treatment, MAT, Medicaid, Queens/Jamaica service area, languages, hours, intake phone | 2.2★ / 16 reviews / 62.5% 1-star — the **single worst-performing GBP** in the portfolio | Description live in GBP, screenshot in evidence column |
| **6** | Local/GBP | **Answer all 32 unanswered Q&A** across the 4 GBPs (25 inpatient + 4 Queens + 3 Bronx) | Use the website FAQ content as source. Owner response, not 3rd-party. Insurance Q's get the insurance-by-name answer | 0 owner-answered Q&A across the portfolio while Cornerstone/Ascendant answer all of theirs | All Q's marked owner-answered |
| **7** | Local/GBP | **Photo blitz** on the 3 photo-starved GBPs | Queens (2 → 25 photos), Bronx (1 → 25), Carmel OP (2 → 25). Mix: exterior, interior, intake desk, staff (signed release), street view | Ascendant has 90, Mountainside 30, Cornerstone 61. AA photos are a per-pin trust-signal gap | Each GBP ≥ 25 photos, geotagged, categorized |
| **8** | Off-Page | Submit citations **carf.org + startyourrecovery.org + psychologytoday.com** | Verify CARF accreditation with AA compliance first (escalation route in m1_priorities.md). Apply or claim profiles | All 3 critical-tier in link gap (3/3 competitors have CARF, 3/3 have startyourrecovery) | Submission confirmations filed; live-listing date logged |
| **9** | Off-Page | **Review-generation push** at the inpatient + Queens locations | Intake-discharge SOP: SMS + printed card with QR. Target: +20 reviews on inpatient, +10 on Queens by end of M1 | Inpatient 3.2★ + Queens 2.2★ both below the 4-star LLM-citation threshold; LLM/AI Overview won't surface a 2.2★ result | Review count delta tracked weekly in reporting sheet |
| **10** | Reporting/CRO | Diagnose **form-completion funnel** — 522 form_start → 170 form_submit (33%) | GA4 funnel: field-level drop, hypothesis = phone field validation. Recommend fix to dev | 352 abandoned starts/90d = ~70 lost intakes if completion went to 80% | GA4 funnel report + 1 recommended dev fix |

---

## MONTH 2 — Build the new doorways + plant Bronx/Queens pins (10 tasks)

| # | Dept | Task | Specifics | Why (data) | Done = |
|---|---|---|---|---|---|
| **1** | On-Page | **Ship `/alcohol-rehab-new-york`** (started M1 as design) | NY-state-level page, 1500+ words, hero + service tiers + Medicaid + locations + intake form. Internal link from homepage + `/inpatient/adult-rehabilitation` | 880 vol single query, 3 competitors rank, AA's homepage is the matched URL but doesn't fully cover | Page live, indexed, ranking measured at M2 close |
| **2** | On-Page | **Audit + improve `/outpatient/queens-outpatient`** — Queens content | Queens-specific copy (neighborhoods served: Jamaica, Flushing, Forest Hills, Astoria), embedded map, hours, intake phone, Medicaid acceptance, LocalBusiness schema with Queens NAP | Maps SERP = AA appears in 0/4 Queens queries; on-page is currently thin | Page meets 1000+ word + schema bar; manual Maps re-pull shows AA appears in ≥2 of 4 queries |
| **3** | On-Page | **Audit + improve `/outpatient/bronx-outpatient`** — Bronx content | Same treatment as Queens. Bronx neighborhoods (Fordham, Williamsbridge, Norwood, Tremont). Beat Bronx Recovery (9 backlinks, Maps-only) | AA appears in 0/6 Bronx Map Pack queries; Bronx Recovery wins on citations alone | Page meets bar; manual Maps re-pull |
| **4** | Content | **M2 article batch — 5 articles** | `/blog/alcohol-recovery-statistics` (1 pos from top-10, refresh stats) · `/blog/can-you-stop-taking-ambien-cold-turkey` (55K imp) · `/blog/how-much-does-drug-rehab-cost-without-insurance` · `/blog/a-clear-overview-of-percocet` (title rewrite — CTR 0.10% disaster) · `/blog/how-addictive-is-xanax` (title + internal links) | Same compounding logic as M1 batch — already-ranking pages = highest leverage | Re-crawl requested; M3 measures position delta |
| **5** | Content | **NOINDEX the 71 `/suburb/*` doorway pages** + redirect 5 highest-impression ones to nearest service/location | The suburb-template doorways have 348 clicks / 127K imp over 365d. Doorway exposure is a sitewide trust-quality risk per Google's spam guidance | All 71 URLs return `noindex,follow`; 5 redirects 301'd; sitemap refreshed |
| **6** | Local/GBP | **Bronx + Queens GBP Posts cadence** — 1 per week per pin, M2-M3 | Topics drawn from M1 articles + new pages (insurance acceptance, walk-in detox, Medicaid, MAT). Use as caveman-spam vehicle for ranking signals | 0 active Posts on Bronx/Queens GBPs; competitors all use Posts | ≥4 Posts on each pin by end of M2 |
| **7** | Local/GBP | **Add primary-category sub-categories** to GBPs missing them | Queens (only "Addiction treatment center" + 2 add'l) → add `Alcoholism treatment program`, `Mental health service`, `Rehabilitation center`. Match Ascendant's 8 categories where AA actually offers the service | Cornerstone has 2, Ascendant has 8; AA categories are sparse | All 4 GBPs have ≥4 categories, all clinically truthful |
| **8** | Off-Page | **Submit citations batch 2** — alcoholism.org, charitynavigator.org (conditional on 501c3 verification), best-rehabs.com, sobasearch.com | All multi-competitor gaps from link_gap.csv | All 4 submitted, profile URLs logged |
| **9** | Off-Page | **Pitch contributed article to behavioralhealthnews.org** | Hudson Valley SUD trends 2026, byline = AA clinical lead. 4-6 week lead time = start M1 actually, but lands editorial in M2 if accepted | Industry trade backlink, 2/5 competitors have it | Pitch sent + editor reply; if accepted, draft in flight |
| **10** | Reporting | **Set up Local Dominator scans** for 8 priority terms × 4 GBP grids | Carmel (defensive) + Bronx (offensive) + Queens (offensive) + Inpatient-Carmel grid. Terms: drug rehab, alcohol rehab, detox, inpatient rehab, outpatient rehab, addiction treatment, medicaid rehab, suboxone clinic | No LD scans configured for AA per session log; can't measure pin-level Maps delta without them | All 32 grids running weekly; M3 has 4-week baseline |

---

## MONTH 3 — Compound + measure + new authority (10 tasks)

| # | Dept | Task | Specifics | Why (data) | Done = |
|---|---|---|---|---|---|
| **1** | On-Page | **Ship `/detox-new-york`** state-level detox page | NY-state positioning, drug + alcohol detox sections, medical supervision, insurance, intake. Internal link from `/inpatient/detox-program` + `/alcohol-rehab-new-york` + homepage | Cluster #1 NEW_PAGE (260 vol, 3 competitors rank) | Live + indexed |
| **2** | On-Page | **Schema deployment sitewide** | LocalBusiness on all 3 outpatient location pages + inpatient. Service schema on every `/service/*`. FAQPage schema on M1+M2 article batch. BlogPosting on top 50 blog posts by impressions | Service pages = 0 JSON-LD; blog = 0 Article schema (session log finding #2) | Rich-results test passes for ≥80% of touched URLs |
| **3** | On-Page | **De-duplicate the 4 city-modifier `/service/*` near-duplicates** | 4 `/service/<name>-in-carmel-hamlet-ny` dupes share 39% body with parent. Decide canonical → 301 the dupe OR rewrite the city version to be Carmel-Hamlet-specific | Internal cannibalization flagged in session log finding #6 | 4 URLs either 301'd or rewritten + uniquely valuable |
| **4** | Content | **M3 article batch — final 5** + 3 supporting articles | Remaining M1/M2 picks + 3 new support articles that internally link into `/alcohol-rehab-new-york`, `/detox-new-york`, `/inpatient/adult-rehabilitation`. NO other new blog content per content-posture decision | Per `arms_acres_competitor_brief.md` §3: zero new blog except supporting Tier-1 pages | All 8 articles live |
| **5** | Content | **Insurance-page expansion** — add named carrier sub-pages or anchored sections | Aetna, Medicare, Medicaid, Tricare, Cigna, BCBS — each gets either a stub LP or an anchored section on `/admissions` with FAQ schema | M1 batch validated that named-payor queries convert; double down | 6 anchored sections live OR 3 sub-pages shipped |
| **6** | Local/GBP | **Pull Queens + Bronx Maps SERP re-run** + grid scan compare | DataForSEO Maps re-pull at Queens + Bronx coords with the same query set. Compare to baseline → assign credit for the M1/M2 content + photo + Q&A work | Need closed-loop measurement to feed reporting % Full Correlation | Delta report in strategy doc; if AA appears in ≥2 of 6 Bronx and ≥1 of 4 Queens = win |
| **7** | Local/GBP | **Owner replies to all negative reviews** (1-3 star) across 4 GBPs with empathy + outcome statement | Inpatient 36.8% 1-star + Queens 62.5% 1-star = heavy negative-content load that LLMs and Maps both penalize. Use review-response SOP | Negative content density is a documented GBP-ranking lever (per `feedback_gbp_place_topics_signal.md`) | Every <4★ review has an owner reply; <4★ % reduced by new positive review inflow |
| **8** | Off-Page | **Psychology Today profile audit** | Confirm every AA facility + clinician has a complete, linked profile. PT is industry-must-have (not in competitor diff because everyone has it) | Surface-area gap that compounds with E-E-A-T for inpatient page | Audit doc lists every profile + status (complete/incomplete/missing) |
| **9** | Off-Page | **Disavow review + spam-domain cleanup** | Backlink profile = 17K BLs / 504 RDs / spam 19. Pull anchor + toxic patterns from DataForSEO Backlinks; build disavow list of pure-spam patterns only (not borderline) | Per `project_hqdm_offpage_position.md` — diagnose-and-disavow not halt | Disavow file ready for AA SC upload (client-side approval) |
| **10** | Reporting | **Q2 close-out report — planned → executed → impact** | For Marija's MoM Summary "% Reports With Full Correlation". Every M1-M3 task → action → outcome metric (rank/clicks/conv) | This is the rollup Milica is judging Phase 1 rollout against (per `project_hqdm_strategy_rollout.md`) | Single report shipped, every row has Result/Notes + Evidence column populated |

---

## Department coverage check

| Dept | M1 | M2 | M3 |
|---|---|---|---|
| On-Page (Aleksa) | 1, 2, 3 | 1, 2, 3 | 1, 2, 3 |
| Content | 4 | 4, 5 | 4, 5 |
| Local/GBP | 5, 6, 7 | 6, 7 | 6, 7 |
| Off-Page (Julce) | 8, 9 | 8, 9 | 8, 9 |
| Reporting/CRO (Marija) | 10 | 10 | 10 |
| **Client-side asks** | CARF status verify, 501c3 verify, intake SOP for reviews | OTP/MICA verify, contributed-article byline | Disavow approval, schema sign-off |

---

## Map-grid weak points → caveman pin moves (the "spam" thesis)

| Coord | AA appearances | M1-M3 plan |
|---|---|---|
| `carmel_ny` | **10/10** | Defend (Posts cadence + Q&A + photos) |
| `bronx_outpatient` | **0/6** | New content (M2 #3) + photos + Posts + categories + citations + GBP description tune |
| `queens_outpatient` | **0/4** | New content (M2 #2) + 33-char description fix (M1 #5) + photos + Q&A + categories |
| `mahopac` | **0/8** | Spillover from Carmel inpatient — Posts mentioning Mahopac service area, Q&A naming Mahopac, photos with Mahopac geotag |
| `putnam_lake` | **0/4** | Same spillover treatment as Mahopac |

---

## GSC conversion levers — the 5 (already in M1/M2 batches)

Per `arms_acres_blog_improve_candidates.csv` (period == M1/M2), the 5 highest-leverage already-ranking conversion drivers:

1. `/blog/how-to-get-insurance-to-pay-for-inpatient-rehab` — pos 14.5, 14K imp, **conversion-intent**
2. `/blog/insurance-cover-drug-and-alcohol-rehab` — pos 11.6, 8.6K imp
3. `/blog/medicare-cover-alcohol-and-drug-rehab` — pos 16.6, 7.4K imp
4. `/blog/aetna-cover-rehab-treatment` — pos 20.1, 11.4K imp
5. `/blog/how-much-does-drug-rehab-cost-without-insurance` — pos 16.5, 17K imp

Combined ~58K imp / 180d at <0.5% CTR. Top-3 average CTR target = ~30% → projected ~17,400 clicks / 180d = **14× lift**. Pair with intake-form deployment (M1 #1) to convert the new traffic.

---

## Explicit deferrals

- Queens net-new content pages — Phase 2; first prove the Queens GBP work moves the Maps needle
- CASAC workforce content — skip (Recovery clinical, not training school)
- Bronx Maps SERP at a third coord (further west of Jerome Ave) — Phase 2
- DataForSEO Search Volume 100-keyword × 2-location pull — Phase 2 budget
- New blog content beyond M3 #4's 3 supporting articles — confirmed `competitor_brief.md` §3 posture
