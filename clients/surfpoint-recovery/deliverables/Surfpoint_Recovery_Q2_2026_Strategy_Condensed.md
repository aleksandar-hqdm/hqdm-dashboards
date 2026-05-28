# Surfpoint Recovery — Q2 2026 Strategy *(Condensed)*

**Client:** Surfpoint Recovery (Inpatient Drug & Alcohol Detox, Brooklyn NY)
**Owner:** Aleksandar Spasevski · **On-Page feasibility:** Aleksa Popovic
**Date:** 2026-05-11 · **Status:** Draft pending Aleksa feasibility pass

> *Condensed companion to the full Q2 strategy doc. Same conclusions, surfaced for execution. Full diagnostic, methodology, and per-cluster data in the long version.*

---

## At a glance

**What's working** — Maps + brand are the revenue engine. Surfpoint is rank 1 in the map pack at Coney Island center on 9 of 12 priority service anchors and rank 1.47 / 96% top-3 on the `alcohol rehab brooklyn` grid. GMB-tagged sessions (GA4 custom segment, `source=gmb`) convert at **2.53%, ~8× the all-Organic-Search average of 0.32%**. Review velocity is strong (4.5★ / 91 → 4.8★ / 120 in 30 days). Surfpoint is already the **#1 cited rehab provider domain** across an 18-prompt LLM audit (15 citations, more than Urban Recovery).

**What's broken** — Service pages get **104 sessions and 0 conversions in 365 days** because the interlinking SOP routes equity to homepage + utility pages and bypasses services entirely. The legacy blog footprint is being **actively de-indexed by Google** (impressions −79% peak-to-current, 756 pages "Crawled — not indexed" or "Discovered — not indexed"). Backlinks profile carries a **spam score of 43** from PR placements to PBN-adjacent domains. GBP profile depth lags the competitive leader by 4 categories and 2 attributes.

**Headline Q2 move** — Push **inpatient detox + dual diagnosis** as the differentiated mix in **South Brooklyn**. Deploy the homepage CRD, rebuild service-page experience with locational on-page elements, refactor internal links to route equity to services, sequence GBP optimization beyond reviews into categories/attributes/photos/posts/Q&A, generate a disavow file from the PBN cluster, and run an individual-review pass on 555 legacy URLs that the cleanup framework wanted to auto-NOINDEX but which preserve topical authority. Pause PBN PR placement. Lean on GBP dominance as the resilience layer.

**Twelve-month revenue range** *(per §3.2 of long doc, three scenarios):*

| Scenario | Conv-rate assumption | Annual missed revenue est | What it requires |
|---|---|---:|---|
| Pessimistic | 0.15% (current non-brand rate) | **~$52K** | Just rank improvements |
| Mid-case | 0.5% (halfway to brand rate) | **~$175K** | Service-page rebuild + interlinking |
| Headline | 1.0% (matches Direct rate) | **~$352K** | Full architectural fix |

---

## Seven findings

1. **Map dominance is real but spatially concentrated.** Surfpoint dominates immediate-neighborhood + the tracked alcohol-rehab anchor (rank 1.47 / 96% top-3). Across broader Brooklyn cluster grids (drug, detox, inpatient) avg rank slips to 2.98–4.97 — strong but not dominant. The dominance is improving on the tracked anchor (1.88 → 1.47 over 6 months).

2. **Conversions concentrate on 16 pages — service pages are orphaned.** Homepage = 67% of 833 annual conversions. 15 named core/utility pages = another 31% — because those pages host the on-page form. The 5 service pages combined = **0 directly-attributed conversions / 104 sessions in 365 days** (the pages have no on-page form; visitors who click through convert on /contact or /admissions and credit follows the form. Site-CR referred floor ≈ 1 conv/year — tiny because the traffic itself is tiny). Cause: the interlinking SOP gives 305 link-plan rows to locations, 423 to blog, **15 to services** — the upstream traffic problem dominates the page-level attribution gap.

3. **~51% of traffic is brand-driven; ~47% non-brand converts at ~0.32%.** Brand-aware visitors (Direct + branded search) convert at 1.02%, returning at 5.24%. Non-brand organic delivers ~13,700 sessions/90d that mostly land on legacy blog content disconnected from the funnel. The leak is at the top of the funnel.

4. **Google is actively de-indexing legacy content.** 87-day GSC Coverage: total URLs −37%, daily impressions −79% peak-to-current, **756 pages "Crawled/Discovered — not indexed"**. Google's quality systems have already made the cleanup decision; the strategic question is alignment speed.

5. **Asana history shows a task-mix allocation problem, not a workflow problem.** Across 24 months / 1,294 tasks: 241 content/blog, 203 GBP ops, **10 service-page tasks (all 2024)**, 4 technical/schema/internal-linking, 16 off-page link-building. Output mirrors input — heavy blog + GBP investment, near-zero service-page or architectural investment. The pivot is reallocating where work goes.

6. **LLM visibility is already live, not a future bet.** 18-prompt audit across ChatGPT-4o-mini, Gemini 2.0 Flash, Perplexity Sonar, Claude 3.5 Sonnet: **Surfpoint cited on 7 of 18 prompts (39%)** and is the #1 cited rehab provider domain (15 citations vs Urban Recovery's 13). Strong on commercial-local Brooklyn queries; gap on 3 service-line prompts where Surfpoint provides the service but isn't surfaced (dual diagnosis, MAT-opioid, short-term inpatient) and on all 8 research-phase prompts.

7. **The cleanup rule changed — 555 URLs go to AUDIT, not auto-NOINDEX/DELETE.** A topical+backlinks overlay re-bucketed 453 URLs from NOINDEX (447 → 121) and DELETE (223 → 99) into AUDIT. The rule: a 0-conversion blog routes to NOINDEX/DELETE only if it's *also* off-topic AND has no backlinks AND has <5 clicks/365d. The 367 blogs on core addiction-treatment topics preserve topical authority — they need rewrite + internal linking, not deletion. Cleanup is now a content-review project (~66h across M1-M3), not a delete project.

---

## Strategic focus

> *Push **inpatient detox + dual diagnosis** as the differentiated service mix in **South Brooklyn (Coney Island catchment)** by:*
>
> *(a) deploying the remaining homepage CRD + adding service-area on-page elements (map embed, neighborhood enumeration),*
> *(b) rebuilding service-page authority + repointing internal links to services,*
> *(c) sequencing GBP optimization beyond reviews into categories, attributes, photos, posts, Q&A, description, and a booking link,*
> *(d) rebuilding citations from generic-directory to foundational vertical + topical-local + earned mention pattern, AND generating a disavow file for the PBN cluster,*
> *(e) running individual review on 555 legacy URLs the topical+backlinks overlay flagged as AUDIT.*
>
> *Pause new low-conversion blog production. Lean on GBP dominance as the resilience layer keeping revenue flowing during the rebuild.*

**Three themes:**

1. **Reinforce the map win on-page** — service-area map embed, neighborhood naming, service pages that exist for the queries map listings rank for.
2. **Concentrate equity to where conversion happens** — interlinking refactor + service-page rebuild + locations × services matrix.
3. **Defensible cleanup with audit-back path** — topical-authority lens preserves core content; per-page review replaces auto-delete.

---

## Month 1 — Stop the bleeding + ship CRD + GBP sprint

| # | Action | Dept | Effort | Expected outcome |
|---|---|---|---|---|
| M1-01 | Deploy remaining 5 CRD H2 sections + SAMHSA footer + service-area map embed | On-Page | M | Homepage avg position 27.4 → top 10 branded; +10% conv |
| M1-02 | NOINDEX execution on the 128 audited URLs (topical+backlinks overlay already pre-filtered from 447) | On-Page | S | Site-wide quality signal improves |
| M1-03 | **Start AUDIT triage** — 75 of 555 AUDIT URLs (core-topical blogs first); rewrite + internal-link to relevant service, or NOINDEX/REDIRECT | Content + On-Page | L | Pattern established; queue moves |
| M1-04 | 301-redirect 27 out-of-state + 9 out-of-borough doorway pages → /areas-served | On-Page | S | Compliance risk eliminated; equity consolidated |
| M1-05 | **Generate disavow.txt** for the PBN cluster (backlinks data in hand — full `backlinks/live` pull + filter PBN-pattern sources, upload via GSC) + pause new PR placements | Off-Page | M | Spam score 43 trending down by Q3 |
| M1-06 | GBP photo upload — close gap 9 → 30+ (lowest count in competitive set) | GBP Ops | M | Map-pack visual signal improves |
| M1-07 | GBP review velocity continues (4.8★/120 → 140+); structured discharge-time review request cadence | GBP Ops | S | Pull further ahead of Urban Recovery (111) |
| M1-08 | GBP Q&A seeding — 10–15 patient-facing questions w/ full answers (Q&A 4 → 15+; benchmark Urban 15, ACI 10) | GBP Ops | S | Trust signal + filter eligibility |
| M1-09 | GBP services list audit — complete with alcohol/opioid/drug/benzo detox, MAT, dual diagnosis | GBP Ops | S | Service-specific map-pack ranking improves |
| M1-10 | **GBP attribute completion — 3 specific gaps:** `service_options:has_onsite_services`, `accessibility:has_wheelchair_accessible_parking`, `amenities:has_restroom_unisex` (plus OASAS/CARF/Medicaid markers) | GBP Ops | S | Attribute count 5 → 8 (Mountainside level) |
| M1-11 | **GBP category expansion** — add Counselor + Psychiatrist + Psychologist + Psychotherapist (verify on-staff clinical roster; Ascendant NYC uses all 4) | GBP Ops + Aleksandar | S | Category count 5 → 9 (Ascendant level); broader keyword surface |
| M1-12 | **GBP description rewrite** — replace generic with OASAS-licensed + CARF Center of Excellence + MAT meds + dual diagnosis + Medicaid/Aetna/Cigna/BCBS + Coney Island neighborhood (750-char budget) | GBP Ops + Aleksandar | S | Trust + service-line signals packed into knowledge panel |
| M1-13 | **GBP book-online URL** — add Calendly/HubSpot intake (no competitor has this configured; unique differentiator) | GBP Ops + Aleksandar | S | "Book online" CTA appears in knowledge panel |
| M1-14 | Foundational citations Phase 1 — Psychology Today, SAMHSA Treatment Locator, NYS OASAS Find a Provider, BBB, Apple Maps, Bing Places, Foursquare, Healthgrades, Yelp claim/optimization | Off-Page + GBP | M | 8–10 vertical-specific citations; also unlocks Gemini LLM citation surface |
| M1-15 | LegitScript verification via public registry + homepage source inspection | Aleksandar | S | Compliance status confirmed; gating dependency for any future paid acquisition flagged |
| M1-16 | Title + meta rewrite for 10 + 13 KEEP pages flagged in OnPage scan (esp. `recovery center brooklyn` 10,512 imp / 0 clicks at pos 3.71) | On-Page | S | +50 clicks/mo from existing-rank queries |
| M1-17 | Fix 3 broken (404) URLs in KEEP list (`/about`, `/contact`, `/contact-us.com`) | On-Page | S | Recover crawl signals on revenue surface |

## Month 2 — Service-page rebuild + interlinking refactor + AUDIT triage continues

| # | Action | Dept | Effort | Expected outcome |
|---|---|---|---|---|
| M2-01 | **Service-page rebuild — alcohol detox + opioid detox first.** Use `choosing-best-rehab-in-brooklyn` blog as quality template: service-area block, neighborhood references, insurance carriers, real photos, clinician quotes, OASAS/CARF refs, Service + LocalBusiness schema | On-Page + Content | L | 104 sessions / 0 conv → 500+ sessions / 5+ conv per quarter on these two |
| M2-02 | Service-page rebuild — drug detox + benzo detox + comprehensive short-term rehab | On-Page + Content | L | All 5 service lines covered |
| M2-03 | **Internal linking refactor** — every retained blog + retained location page links to the relevant service page (~3–5 contextual links per source); build locations × services matrix | On-Page | L | Service-page internal-link count: 0 → 50+ each |
| M2-04 | AUDIT triage continues — process remaining ~480 URLs (core-topical + unclassified-w/-traffic + framework-ambiguous) | Content + On-Page | L | Most legacy footprint reviewed; balance carries to M3 |
| M2-05 | DELETE 99 thin/orphan blog posts (down from 223 in v1 — topical overlay preserved 124 core-topical) | On-Page | M | Site footprint 877 → ~780 URLs |
| M2-06 | Topical local citations Phase 2 — Brooklyn health publications, NA/AA NYC, NAMI Brooklyn/NYC, rehab.com (case-by-case) | Off-Page | M | 5–10 topical-local citations live |
| M2-07 | GBP post cadence: 2/week, service-offerings + neighborhood content | GBP Ops | M | Continuous freshness signal; post count 1 → 10+ active |
| M2-08 | CTR optimization on transactional ranking-but-no-clicks queries | On-Page | S | +50 clicks/mo from `recovery center brooklyn`, `drug rehab brooklyn`, etc. |
| M2-09 | Schema deployment on KEEP+KEEP-AUDIT (MedicalBusiness homepage upgrade, Service per service page, Place per retained location, Article per retained blog) | On-Page | M | Rich-result eligibility on service queries |
| M2-10 | PAA pipeline redirect — switch topic seeds from generic to Surfpoint-service-aligned (per §3.4 demand-gap table + LLM research-phase gaps); 1–2 high-quality pieces from existing infrastructure | Content | M | First service-aligned blog ships; pipeline pivot complete |
| M2-11 | **LLM citation gap closure** — targeted on-page + schema on dual-diagnosis, MAT-opioid, short-term-rehab service pages | On-Page + Content | M | Re-audit end of M2: cited on 9/10 commercial-local prompts (up from 7/10) |

## Month 3 — Authority + LLM extend + earned mentions

| # | Action | Dept | Effort | Expected outcome |
|---|---|---|---|---|
| M3-01 | Earned-mention outreach — 3–5 real Brooklyn/NYC publications (NY1, Brooklyn Magazine, local NPR, real health/recovery editorial); pitch named-clinician bylines | Off-Page + Aleksandar | L | 1–2 quality earned mentions; D-A backlinks |
| M3-02 | LLM visibility re-audit (`scripts/llm_visibility_surfpoint.py` already operational) — target 9/10 commercial-local + 2/8 research-phase cite rate | LLM Visibility | M | Trend signal for LLM channel |
| M3-03 | Quality blog production (1–2/month) using `choosing-best-rehab-in-brooklyn` template; topic selection from demand-gap + LLM research-phase gap prompts | Content | M | First service-aligned posts ship; research-phase LLM surface expands |
| M3-04 | Quarterly NOINDEX + AUDIT audit — recheck ranking recovery, backlinks, conversions; re-bucket on evidence | On-Page | M | Cleanup defensibility intact; some NOINDEX may unblock |
| M3-05 | Service-area on-page enhancement Round 2 — insurance-carrier landing pages (Medicaid, Aetna, Cigna, BCBS) + neighborhood-specific landing logic | On-Page | M | Coverage of insurance + neighborhood subqueries |
| M3-06 | Backlinks re-pull at Q3 — measure spam-score trend post-disavow (target 43 → <30) | Off-Page | M | Disavow effect quantified |
| M3-07 | **Expand LD coverage** — add opioid/MAT, dual diagnosis, drug detox brooklyn keywords (no LD tracking today on these per §1.3) | Maps | S | Apples-to-apples cluster baseline for Q3 |
| M3-08 | Surfpoint vs Urban Recovery + Niagara internal coordination | Strategy / Aleksandar | S | Agreed territory split across HQDM Recovery clients |
| M3-09 | Q2 performance report — planned → executed → impact correlation | Reporting | M | First report under new strategy-first model |

**Intentionally NOT in plan:** new PAA-style blog production volume (pipeline redirected, not expanded); new doorway/location-page creation (architecture fix is locations × services matrix on existing); new PBN-adjacent PR placement; outpatient strategy (Surfpoint is inpatient-only); paid acquisition (gated by LegitScript M1-15).

---

## Decision matrix v2 — what changed

877 URLs analyzed. Framework v1 wanted to auto-NOINDEX 447 and DELETE 223. **Topical+backlinks overlay re-bucketed 453 of those into AUDIT** (individual review) because they cover core addiction-treatment topics, carry residual traffic, or have backlinks.

| Bucket | URLs | Action |
|---|---:|---|
| KEEP | 23 | Optimize, expand, schema-tighten — the 821-conv revenue surface |
| KEEP-AUDIT | 29 | Audit individually; salvage real-catchment locations + 6 conv-signal blogs |
| AUDIT *(framework-ambiguous)* | 109 | Manual review per URL |
| **AUDIT (core topical)** | **367** | Re-bucketed from NOINDEX/DELETE — core addiction-treatment topics; rewrite + internal-link to services, or NOINDEX if shallow |
| **AUDIT (unclassified w/ traffic)** | 76 | ≥5 clicks/365d; topic-classify, decide salvage |
| **AUDIT (adjacent w/ traffic)** | 3 | ≥10 clicks/365d; rewrite for service-area alignment |
| NOINDEX | 121 | `<meta robots="noindex,follow">` — down from 447 |
| NOINDEX (off-topic but traffic) | 7 | Drop indexability without losing equity |
| DELETE | 99 | 410 / removal — down from 223 |
| DELETE+REDIRECT | 34 | 27 out-of-state + 7 deep doorways → /areas-served |
| REDIRECT | 9 | Out-of-borough NYC → /areas-served |
| **Total** | **877** | |

**The rule:** a blog with 0 conversions routes to NOINDEX/DELETE only if it's *also* off-topic AND has no backlinks AND has <5 clicks/365d. Otherwise it goes to AUDIT for individual review. **0 conversions ≠ auto-prune.**

---

## Backlinks profile

| Domain | Backlinks | Ref domains | Ref main domains | Spam score | Rank |
|---|---:|---:|---:|---:|---:|
| **surfpointrecovery.com** | **942** | **577** | **386** | **43** | 193 |
| urbanrecovery.com | 1,642 | 958 | 642 | 42 | 205 |
| americanaddictioncenters.org | 102,543 | 20,607 | 18,283 | 16 | 416 |
| therecoveryvillage.com | 160,370 | 13,884 | 12,570 | 24 | 396 |

- **Spam score 43 is the load-bearing signal** (national brands sit at 16–24). Source: PR placements to PBN-adjacent domains. Disavow is the highest-leverage off-page action (M1-05).
- **99% of backlinks point to homepage.** Per-page link equity isn't a viable optimization lever; only 1 blog page (`/blog/what-happens-in-drug-rehab`) has any referring main domain. Simplifies cleanup — topical-authority lens dominates the bucket decision.
- Surfpoint and Urban Recovery have near-identical profiles, consistent with running the same PR-placement playbook. Both should disavow.

---

## LLM visibility

**18-prompt audit, 4 LLMs, 2026-05-11.** Surfpoint cited on 7 of 18 prompts (39%) — strong for a 2-year-old brand and the #1 cited rehab provider domain across the audit (15 citations).

**Commercial-local (10 prompts):** Surfpoint cited on 7 — *best inpatient Brooklyn, best alcohol detox, inpatient detox Coney Island, drug rehab + Medicaid, OASAS-licensed Brooklyn, benzo detox Brooklyn, CARF-accredited Brooklyn*.

**Gap on 3 service-line prompts** where Surfpoint provides the service but isn't surfaced:
- **Dual diagnosis Brooklyn NY** — ACI, AAC, Mount Sinai, victoryrp cited; Surfpoint absent
- **MAT for opioid in Brooklyn** — only Mount Sinai cited; Surfpoint absent despite offering MAT
- **Short-term inpatient NYC** — 5 providers cited (Ascendant, Mount Sinai, Odyssey House, Urban Recovery, Wellbridge); Surfpoint absent despite `comprehensive-short-term-rehab` service page

**Research-phase (8 prompts):** Surfpoint cited 0 times. National brands (AAC, Recovery Village) dominate via deep informational content. This is what the AUDIT (core topical) rewrite project addresses.

**Per-model behavior:**

| Model | Surfpoint citations | Notes |
|---|---:|---|
| ChatGPT-4o-mini *(w/ web search)* | 10 | Strongest channel — cites canonical sites on commercial-local |
| Perplexity Sonar | 5 | Wide domain set (105 unique), more diluted |
| Gemini 2.0 Flash | 0 | Leans on government directories (samhsa.gov, oasas.ny.gov) — M1-14 citation push unlocks this |
| Claude 3.5 Sonnet | 0 | API didn't return citation arrays for any provider in this run |

**LLM visibility is now a defend-and-extend channel, not a build-from-zero.** M2-11 closes the 3 commercial-local gaps; M3-03 starts the research-phase build via service-aligned blog rewrites.

---

## GMB profile depth — competitive gaps

| Metric | Surfpoint | Competitive leader | Action |
|---|---:|---|---|
| Primary + additional categories | **5** | Ascendant NYC: **9** *(adds Counselor, Psychiatrist, Psychologist, Psychotherapist)* | M1-11: add the 4 clinical categories if staff confirms |
| Attributes | **5** | Mountainside: **7** | M1-10: add onsite-services, wheelchair-parking, restroom-unisex |
| Photos | **9** | Ascendant: 90 / Mountainside: 30 | M1-06: target 30+ |
| Q&A captured | **4** | Urban: 15 / ACI: 10 | M1-08: seed 10–15 |
| Reviews | 120 (4.8★) | Ascendant: 284 (4.8★) | M1-07: maintain velocity 120 → 140+ |
| Booking link | **none** | **none in competitive set** | M1-13: add Calendly/HubSpot intake — unique differentiator |
| Description | generic | n/a | M1-12: rewrite to pack OASAS/CARF/MAT/dual-diagnosis/insurance/Coney Island |

---

## Schema gaps *(quick reference)*

Deployed: LocalBusiness on homepage, ContactPage `/contact-us`, AboutPage `/about-us`, FAQPage `/faq`.
**Not deployed (high-leverage):** all 5 service pages, all retained location pages, admissions, treatments, all blog posts.

**Homepage `LocalBusiness` block** has `@id` empty, generic `LocalBusiness` type, NAP-inconsistent phone, and missing aggregateRating / geo / sameAs / priceRange / description / logo / medicalSpecialty / paymentAccepted / availableService. Upgrade to `MedicalBusiness` + add all missing fields (M2-09).

**NAP inconsistency:** schema shows `(347) 727-4800` (facility); `client.json` canonical is `(646) 347-1893` (intake). Pick one and align everywhere.

---

## Risk register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Continued de-indexing during cleanup | High | Medium | Ship CRD M1; sequence cleanup with audit-back path |
| GBP suspension from compliance flag (NJ doorways) | Low-Med | **HIGH** | M1-04 DELETE+REDIRECT NJ doorways Week 1; M1-15 LegitScript |
| Service-page rebuild capacity (only 10 service-page tasks across 24 months — §1.5) | Medium | High | Allocate explicit on-page through Aleksa; fewer-but-bigger pieces |
| Internal cannibalization with Urban Recovery + Niagara | Medium | Medium | M3-08 coordinate keyword/geo with Milica |
| AUDIT triage workload (~66h across M1-M3 on 555 URLs) | Medium | Medium | Phased: 75 in M1, ~292 in M2, balance M3 |

---

## Open dependencies (non-blocking)

- **LegitScript verification** — re-query public registry + homepage source inspection (M1-15)
- **Insurance carrier confirmation** — Medicaid/Aetna/Cigna/BCBS still accepted? Q3 ask
- **Homepage CRD deployment timing** — internal execution call once strategy signs off
- **Full backlinks `backlinks/live` pull** for disavow file generation (M1-05) — DataForSEO Backlinks summary + domain_pages already in hand

---

## Cross-account coordination

Two HQDM Tier 1 Recovery clients are in Surfpoint's organic competitor list: **Urban Recovery** (3,475 keyword intersections, same Brooklyn map pack) and **Niagara Recovery** (1,801 intersections, different geo). M3-08 — bring to Milica: agreed territory split or coordinated optimization across the 6 Recovery accounts (e.g., Urban owns Red Hook + Sunset Park, Surfpoint owns Coney Island + Bay Ridge, Niagara handles upstate).

---

## Where to find the long-version detail

| Topic | Long-doc section |
|---|---|
| Map dominance + cluster grids + 5-scan trend | §1.3 |
| Channel matrix + new vs returning + GBP/click economics | §1.2, §5.1–§5.3 |
| Decision matrix logic + topical+backlinks rule explained | §2.1 |
| Locations × services interlinking gap | §2.2 |
| Schema audit verbatim + per-page issues | §2.3 |
| Backlinks profile + per-page distribution | §2.4 |
| Keyword universe + addressable demand methodology + revenue scenarios | §3.2 |
| GSC cluster table + CTR optimization wins | §3.1, §3.5 |
| Competitor identification + Domain Intersection gaps | §4.1, §4.3 |
| GBP profile depth — categories/attributes/completeness | §4.2 |
| LLM visibility live audit + per-prompt + per-model | §5.4 |
| Citations + backlinks rebuild sequence + PR pause | §6.2 |
| PAA content engine redirect | §6.3 |
| Risk register | §6.5 |
| Reproducibility — scripts to re-run for Q3 | §10.1 |

---

*Condensed strategy doc for team consumption. Full version: `Surfpoint_Recovery_Q2_2026_Custom_Strategy.{md,html}` in same folder.*
