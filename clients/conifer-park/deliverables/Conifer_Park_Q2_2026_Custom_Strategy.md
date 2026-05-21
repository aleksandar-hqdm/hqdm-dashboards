# Conifer Park — Q2 2026 Custom SEO Strategy

**Client:** Conifer Park (Drug + Alcohol Addiction Treatment — OASAS Operating Certificate #10018, founded 1983, parent: Liberty Behavioral Management Corp, 225-bed inpatient facility)
**Inpatient facility:** 79 Glenridge Road, Glenville NY 12302 (Schenectady County, Capital Region)
**HQDM-supported outpatient location:** 2435 Sixth Avenue, Troy NY 12180 (Rensselaer County)
**Additional on-site outpatient locations (out of HQDM scope, but on the same domain):** Schenectady, Glens Falls, Plattsburgh, Syracuse/Liverpool, Rochester
**Strategy cycle:** Q2 2026 — third client in HQDM strategy-first reporting rollout (after Surfpoint Recovery 2026-05-08, Arms Acres 2026-05-11)
**Owner:** Aleksandar Spasevski, Head of Search Intelligence
**Feasibility cosignature (pending):** Aleksa Popovic (On-Page lead)
**Date:** 2026-05-11 (v2 — Phase 2 DataForSEO evidence layered in)
**Status:** Draft — internal execution strategy for HQDM team (not client-facing); pending Aleksa feasibility pass

**v2 changes from v1**: (a) corrected finding #1 — service pages route to /admissions and /contact via nav CTAs; "0 conversions" overstates the problem because of last-click attribution; (b) Section 4 (Competitor positioning) and Section 1.8 (Maps SERP) populated with DataForSEO evidence — geo-lock thesis is data-confirmed; (c) Glenville and Troy GBP audit findings added (3.2★ / 153 reviews on Glenville, 3.9★ / 27 reviews on Troy, address inconsistency 2431 vs 2435 6th Ave Troy); (d) DataForSEO budget claim corrected from $65 to actual $0.71 spent.

---

## Executive Summary

> **Conifer Park's organic surface is in better technical shape than the prior two Recovery clients HQDM has triaged — the schema is rich, the site converts at 0.53% sitewide (vs Arms Acres' 0.32%), and the conversion architecture on the top 4 pages already works. The problem is that everything *outside* those 4 pages is structurally invisible to the conversion funnel and operationally polluted: 99.4% of conversions concentrate on home + contact + admissions + /inpatient; six service pages combined draw 283 sessions/year and zero conversions because almost no one reaches them; the only HQDM-supported outpatient surface (/outpatient-rehab-troy-ny) draws 67 organic sessions/year and zero conversions; the site has measurable URL-pollution exposure from a `tel:` href being treated as a relative path on dozens of pages, three flavors of case-sensitive duplicate URLs (`/OUTPATIENT/TROY`, etc.), two parallel service-page architectures (legacy `/program/` + current `/service/...-in-glenville-ny`) competing for the same intent, and 71 adjective-stuffed `/suburb/` doorway pages that contribute zero conversions and substantial March 2024 spam-policy risk. The Q2 strategy is asymmetric: defend the working channel (GBP/click converts at 2.48% — 5.8× organic), repair the architecture so the *retained* service + Troy pages can do their job, kill the doorway/duplicate/pollution surface, and tighten the trust-signal layer (no Joint Commission, CARF, LegitScript, or insurance disclosure visible) before launching any new content investment.**

### Eight headline findings

1. **Conversions concentrate on 4 pages — but last-click attribution hides service-page contribution to the funnel.** /contact (310), /admissions (267), / (61), /inpatient (12) = **650 of 654 annual conversions (99.4%)** measured at the page where `form_submit` fires. The other 6 service pages combined: **283 sessions / 0 directly-attributed conversions in 365 days**. Live HTML audit confirms every service page carries nav-level "Admissions" + "Contact Us" CTAs (→ /admissions, → /contact), an in-body "Transportation" CTA → /admissions, and `tel:` links to the intake line. So visitors who land on `/service/inpatient-rehabilitation-in-glenville-ny`, read it, then click through to /admissions and convert there → /admissions gets last-click credit, the service page gets credit only for the session. **The pages are not non-converting** — they have no on-page form, so their conversions land on the destination URL. **Referred-attribution estimate:** 283 sess × 0.53% site CR = **~1.5 effective conv/year** as a floor; upper-bound ceiling (if every service-page visitor clicked through and converted at the ~6% destination rate) is ~17 conv/year. Either way the absolute number is small because the upstream issue is bigger — service pages aren't being reached. Conifer Park's service pages get 33–106 sessions each: a **traffic problem, not a CRO problem**. (Contrast with Arms Acres, where service pages get 24,000 sess and apply the same referred-CR% test → ~76 referred conv/year — same dynamic, much bigger volume.) The fix is getting visitors to the service pages in the first place; the geo-lock + internal-link rebuild (findings #5, #8) is the lever. **Reporting implication:** add GA4 path-analysis / multi-touch attribution to surface service-page → /admissions/contact funnel flow so the contribution is visible, even if not last-click-credited.

2. **Maps is the working channel at a higher conversion rate than organic.** GA4 365d:
   - Organic Search `google/organic`: 50,142 sess / 217 conv = **0.43%**
   - Direct (mostly brand-aware): 23,337 sess / 190 conv = **0.81%**
   - **Organic Search `gmb/click` (GBP-attributed): 7,656 sess / 190 conv = 2.48%**
   - Bing: 6,245 sess / 34 conv = 0.54%

   GBP/click converts at **5.8× the rate** of standard Google organic and contributes **29% of all conversions from 6.2% of all traffic**. This is the same channel signature as Surfpoint (2.53%) and Arms Acres' GBP track — **Maps is the resilience layer at Conifer Park**, but on the Recovery rollout side it's currently invisible because no Local Dominator scans are configured for either Glenville or Troy. Setting that up is M1 priority #6 below — without it, the channel that's actually working has no rankings tracking.

3. **The brand pull is the engine of clicks, not impressions.** 365d GSC: 103 branded queries pull 81,291 impressions and 14,222 clicks (17.5% CTR). 260,927 non-branded queries pull 4.95M impressions and 14,380 clicks (0.29% CTR). Branded clicks = **49.7% of total clicks despite being 1.6% of impressions**. The blog drives the non-brand impression mass but isn't a conversion path — the brand engine is what's putting visitors on the conversion-capture pages.

4. **The schema looks rich but is the same on every page.** Conifer Park ships a strong global JSON-LD `@graph` (MedicalOrganization + MedicalBusiness + parent Organization + CEO Person + 6× MedicalClinic + 4× MedicalProcedure) — but **the identical block is on every page** (homepage, /inpatient, /outpatient/schenectady, /reviews, /admissions, all service pages). The Troy page should carry a MedicalClinic node referenced specifically to that clinic. The reviews page should carry AggregateRating + Review. The service pages should carry MedicalProcedure or Service specific to the procedure. The admissions page should carry FAQPage if there's FAQ content. The current pattern means Google sees the same entity declaration everywhere — it's adequate but doesn't help Google understand any individual page's specific subject. **This is a refactor, not a rebuild** — different M1 lever from Arms Acres / Surfpoint (both of which needed schema deployed from scratch).

5. **Six service pages are geo-locked to Glenville even though most services are delivered network-wide.** All six `/service/...-in-glenville-ny` URLs (Addiction Treatment Program, Adult Detoxification, Inpatient Rehab, Psychiatric Services, Family Program, Activities & Recreation) carry the `-in-glenville-ny` suffix. Outpatient services are delivered at Troy + Schenectady + Glens Falls + Plattsburgh + Syracuse + Rochester — but the canonical service page for, e.g., MAT or psychiatric services is locked to Glenville. This both (a) prevents these service pages from ranking for queries that include the actual delivery-location city (e.g., "mat treatment troy ny") and (b) creates duplicate-intent risk with the `/outpatient/<city>` pages (which try to cover the same procedures from a location angle). It also stops Google from associating "outpatient psychiatric services in Troy" with the canonical service page, which is the single largest lever for the service-page traffic problem in finding #1.

6. **Three categories of architectural pollution Google is currently indexing.**
   - **(a) `tel:` URL pollution.** The phone number `8009896446` appears as a path segment on dozens of indexed URLs (`/category/tel:8009896446`, `/category/addiction-treatment/tel:8009896446`, `/author/matt/page/tel:8009896446`, `/outpatient/troy/tel:8009896446`, `/category/program/tel:8009896446`). This is a JavaScript or template artifact: a `tel:` href is being resolved against the current URL's relative path rather than treated as a phone-dial action. Result: every category/author/page archive has been spawning a `/tel:8009896446` variant. Verified in GSC and confirmed via grep across the decision matrix output. **High-leverage, single-fix root cause** — fix the template's phone-link handling and all the spawned URLs disappear.
   - **(b) Case-sensitive URL duplicates.** Indexed: `/OUTPATIENT/TROY`, `/OUTPATIENT/SCHENECTADY`, `/OUTPATIENT/SYRACUSE`, `/OUTPATIENT/GLENS-FALLS` — the all-caps variants of the canonical lowercase paths. Cloudflare or Webflow server config is not case-normalizing. Each is a separate URL to Google.
   - **(c) WordPress migration debris still indexed.** The site migrated WordPress → Webflow but the old `/program/<name>` URL pattern is still indexed alongside the new `/service/<name>-in-glenville-ny` URLs (so `/program/addiction-treatment-program` AND `/service/addiction-treatment-program-in-glenville-ny` both exist for the same content). Plus: legacy date-archives `/2013/07`, `/2013/08`, etc., legacy category archives `/category/uncategorized` + `/category/industry-issues`, legacy `/author/matt` archives, legacy `/admissions.html` and `/programs.html` extensions, and legacy PDFs like `/assets/conference-brochure-2016.pdf`. All indexed; none redirected.

7. **71 adjective-stuffed `/suburb/` doorway pages contribute zero conversions and substantial spam-policy risk.** Same pattern as Arms Acres (71 doorways) and Surfpoint (105 location pages). Conifer Park's adjective rotation: "leading," "trusted," "premier," "exceptional," "reliable," "high-quality." Examples: `/suburb/specialized-recovery-center-in-albany-ny`, `/suburb/trusted-addiction-recovery-center-in-rexford-ny`, `/suburb/preferred-addiction-outpatient-treatment-in-guilderland-ny`. Combined 365d: ~150 clicks / ~22K impressions / **0 conversions**. Top suburb page is `/suburb/scotia-ny` (27 clicks — Scotia is a real Glenville-adjacent town, the only suburb page that could conceivably be defended on real-catchment grounds). Some of the targeted "towns" appear to be invented place names: Honeywell Corners, Cedar Bluffs, Huntleigh, Harmony Corners — needs USGS GNIS validation before any keep-versus-delete call. **Same Arms Acres prescription: confirm none rank for converting queries, then DELETE+REDIRECT en masse to `/service-areas` or the nearest `/outpatient/<city>` page.**

8. **The trust-signal layer is thinner than competitors require for YMYL search.**
   - **No Joint Commission accreditation visible** anywhere on the site (homepage, about, admissions, inpatient — all grepped). Mountainside, Hazelden, AAC all display Joint Commission gold seals. Conifer Park's absence is a competitive trust-signal gap.
   - **No CARF certification visible.**
   - **No LegitScript certification visible.** Beyond the trust layer, this also blocks any future Google Ads spend on addiction-treatment queries — Google Ads requires LegitScript certification for SUD-treatment advertisers.
   - **No insurance payor list on the public site.** The admissions page only says "Medicaid and most third-party payors." Competitor admissions pages routinely show payor logos (BCBS, Aetna, Cigna, UnitedHealth). For high-intent visitors, "do you take my insurance" is a top-of-funnel question; not answering it visibly costs conversion.
   - **No author / clinical-team page.** Recovery vertical E-E-A-T benefits from a named clinical leader page with credentials. Conifer Park's homepage has the CEO in JSON-LD (Dr. Kelly Ann Underwood, CASAC-Master) but no dedicated /team or /clinical-leadership page.

### Strategic Focus statement

> *Defend **GBP/click as the working channel** (2.48% conv rate, 29% of conversions, Maps rank #1 at Glenville coords for all 12 priority anchors) by configuring Local Dominator tracking for both Glenville and Troy plus a **rating-lift review-velocity program** (3.2★ Glenville → 4.0★+; 3.9★ Troy → 4.2★+) in parallel; **break out of the Glenville geo-lock** so the topical surface stops competing only on `*-glenville-ny` queries (where Conifer ranks #1-3 and competes with itself across 8 URLs) and starts competing on the Albany / Saratoga / Capital Region queries where Conifer currently ranks NOT-IN-TOP-100 — by un-geo-locking the 6 service pages from `-in-glenville-ny`, consolidating the legacy `/program/` URLs into them, and rebuilding internal linking so service pages are reachable from every blog post and location page; **kill the architectural pollution surface** (single-fix the `tel:` URL spawning, enforce case-normalization, redirect WordPress legacy URLs, delete the 71 `/suburb/` doorways, fix Troy's URL pattern to put `/outpatient/troy` as canonical instead of the legacy `/outpatient-rehab-troy-ny`, identify the JS bug spawning `/inpatienthttps:/vallevistahospital.com/...`); **refactor schema to be page-level specific** (Troy gets a MedicalClinic-focused @graph, reviews gets AggregateRating+Review, service pages get page-specific MedicalProcedure); and **close the trust-signal layer** (insurance payor list, Joint Commission / CARF / LegitScript pursuit, clinical team page). **Compete against sphp.com as the priority benchmark** — they're in 22 of 25 priority queries at avg #9.9 and own the Albany / Troy / Saratoga side of the Capital Region that Conifer Park doesn't reach. **Compete against newchoicesrecovery.org as the Schenectady-specific benchmark** — they beat Conifer at #4-5 on Schenectady queries despite having only 28 reviews to Conifer's 153. Pause the doorway-style content production model. Lean on **brand pull** (49.7% of clicks at 17.5% CTR, 153 reviews × volume moat) as the resilience layer keeping revenue flowing during the rebuild.*

### Top 8 Month 1 actions

| # | Action | Why this is M1 priority | Department owner |
|---|---|---|---|
| 1 | **Single-fix the `tel:` URL pollution at the template layer** — find the phone-number link component that's generating `<a href="tel:...">` resolving as a relative path; change to absolute href or normalize the dial action. Audit GSC for `inurl:tel:` and submit URL-removal requests for the spawned variants. | One change, dozens of pollution URLs eliminated. Compounding effect because the spawning happens automatically wherever the phone-link component renders. Verifiable via the decision-matrix output (multiple `tel:8009896446` URL endings flagged). | On-page (Aleksa) + Tech / Webflow |
| 2 | **Enforce URL case-normalization** — redirect `/OUTPATIENT/<CITY>` → `/outpatient/<city>` site-wide via Cloudflare worker or Webflow 301 rules; submit URL-removal for the 4 known uppercase duplicates already indexed | Eliminates indexed case-duplicate exposure (currently 4 confirmed in GSC; likely more for other paths). Short fix, immediate effect. | Tech / Webflow |
| 3 | **Consolidate parallel service-page architectures** — 301 the legacy `/program/<name>` URLs to their `/service/<name>-in-glenville-ny` counterparts AND rename the `/service/<name>-in-glenville-ny` slugs to drop the `-in-glenville-ny` suffix in the same migration. Final canonical pattern: `/services/<service-slug>` (matching the existing `/services/regional-services` precedent). | Two birds, one redirect plan: kills the WordPress-legacy duplicates AND un-geo-locks the services so they can rank for non-Glenville-specific intent. The Glenville facility's specifics stay on the page body and JSON-LD; the URL stops constraining topical relevance. | On-page (Aleksa) + Tech |
| 4 | **Fix Troy URL pattern**: make `/outpatient/troy` the canonical (matching all other outpatient locations) and 301 the legacy `/outpatient-rehab-troy-ny` → `/outpatient/troy`. Remove `/outpatient/troy` from the sitemap's 301'd entry. | The only HQDM-supported outpatient location currently lives at a legacy non-pattern URL that's the inverse of how every other outpatient location is structured. Brings Troy onto a consistent location-pattern surface that the new internal-linking structure (#7) can target. | On-page (Aleksa) + Tech |
| 5 | **Replace all empty `<meta name="description">` tags site-wide** — every sampled URL (homepage, all 6 outpatient pages, all service pages, admissions, reviews, service-areas) had no meta description. Write proper descriptions per page; prioritize KEEP-bucket (54 URLs) for the M1 sprint. | Empty meta descriptions cede SERP snippet control to Google. Brand-aware searches default to whatever Google extracts from the page (often boilerplate). Easy fix, full-site impact. Use HQDM SOP for meta-description templates. | On-page (Aleksa) + Content |
| 6 | **Configure Local Dominator scans for both HQDM-supported GBPs** — Glenville (priority keywords: drug rehab schenectady ny, addiction treatment center glenville ny, alcohol detox albany ny, inpatient rehab capital region, dual diagnosis schenectady ny, mat treatment schenectady ny, detox program saratoga ny, alcohol rehab albany ny) AND Troy (priority keywords: outpatient rehab troy ny, addiction treatment troy ny, mat treatment troy ny, drug rehab troy ny, alcohol rehab troy ny, suboxone clinic troy ny). | GBP/click is the working channel (2.48% conv) but the rollout currently has no rankings tracking for either supported GBP. Without LD, the reporting tracker cannot show "we ranked top-3 in N% of the grid" — the strategy item that justifies maintaining the GBP investment. | GMB team + Aleksandar (keyword list owner) |
| 7 | **Page-level schema refactor — Phase 1**: (a) Troy page: replace the global @graph with a Troy-specific block referencing only the Conifer Park Troy Outpatient MedicalClinic + relevant procedures (MAT, outpatient) + Conifer Park as parent organization. (b) Reviews page: add AggregateRating + per-review Review schema (use existing GBP data as source of truth). (c) Service pages: replace global @graph with page-specific MedicalProcedure or Service. | The existing global schema is good entity declaration; what it's missing is page-level specificity. Refactor uses the existing @id cross-references the global block already establishes — low rework cost, high relevance gain. | On-page (Aleksa) using HQDM schema-validation cascade (Wikidata Q-ID + schema.org property validator + manual validator.schema.org/RRT) |
| 8 | **Internal linking rebuild** — every NOINDEX-bucket blog post that survives the cleanup needs to link to (a) the most-topically-relevant service page (post-de-geo-locking from #3) and (b) the closest outpatient location page if the post discusses an outpatient-relevant topic. Every outpatient location page needs to link upstream to the relevant service pages. This is the structural fix for finding #1's "service pages don't get reached" problem. | Service-page traffic is currently 33–106 sessions/year — not because they don't convert, because they don't get linked to. Existing internal-link infrastructure routes to home + contact + admissions. The fix is at the internal-link layer, not the content layer. | On-page (Aleksa) + Content |

---

## 1. Current State Diagnosis

### 1.1 Traffic + conversion shape

**GA4 — 365 days:**

| Metric | Value |
|---|---:|
| Total sessions | 124,310 |
| Total conversions | 654 |
| Site-wide conv rate | **0.53%** |
| Pages with any sessions | 800 |
| Pages with any conversions | ~24 |

**GSC — 365 days:**

| Metric | Value |
|---|---:|
| Total impressions | 11,990,743 |
| Total clicks | 75,462 |
| Sitewide CTR | 0.63% |
| Distinct queries (365d) | 261,030 |
| Pages with impressions | 551 |

**Conversion event mix (90d):**

| Event | Count | Notes |
|---|---:|---|
| form_submit | 232 | **100% of all 232 90d conversions** (single conversion event) |

**Conversion concentration by page (365d):**

| Page | Sessions | Conv | Conv Rate | Notes |
|---|---:|---:|---:|---|
| /contact | 5,109 | **310** | **6.07%** | dominant conversion endpoint |
| /admissions | 4,127 | **267** | **6.47%** | second conversion endpoint |
| / (home) | 28,365 | **61** | 0.22% | mass funnel |
| /inpatient | 10,719 | **12** | 0.11% | the one service page with measurable conv |
| /careers | 4,891 | 0 | 0% | careers traffic, expected zero |
| /about-us | 2,370 | 0 | 0% | |
| /outpatient (hub) | 2,216 | 0 | 0% | |
| /service-areas | 1,561 | 0 | 0% | |
| /outpatient/schenectady | 1,472 | 0 | 0% | not HQDM-supported but ranks |
| /outpatient/troy (301 → legacy) | 1,256 | 0 | 0% | HQDM-supported, 0 conv |
| /reviews | 245 | 0 | 0% | reviews page draws traffic, no conv |
| /service/inpatient-rehabilitation | 106 | 0 | 0% | |
| /outpatient-rehab-troy-ny (legacy live) | 67 | 0 | 0% | the canonical Troy page |
| /service/family-program | 61 | 0 | 0% | |
| /service/psychiatric-services | 45 | 0 | 0% | |
| /service/addiction-treatment-program | 40 | 0 | 0% | |
| /service/adult-detoxification-program | 38 | 0 | 0% | |
| /service/activities-and-recreation | 33 | 0 | 0% | |

**Read (directly-attributed):** 650 of 654 (99.4%) conversions concentrate on contact + admissions + home + /inpatient — because those are where on-page conversion elements live. The remaining 4 conversions sit in the AUDIT bucket across 299 ambiguous URLs.

**Read (effective via referral, site-CR% floor at 0.53%):** every page with traffic but no on-page form is still referring conversions to /contact or /admissions. Applied across the page-level table:

| Page | Sessions | Directly-attributed conv | Est. referred conv (sess × 0.53%) |
|---|---:|---:|---:|
| / (home) | 28,365 | 61 | (already converting on-page) |
| /outpatient (hub) | 2,216 | 0 | ~12 |
| /service-areas | 1,561 | 0 | ~8 |
| /outpatient/schenectady | 1,472 | 0 | ~8 |
| /outpatient/troy (301 → legacy) | 1,256 | 0 | ~7 |
| 6 service pages combined | 323 | 0 | ~1.7 |
| /reviews | 245 | 0 | ~1.3 |

The page-level "0 conversions" entries are not signals that those pages don't convert. They're signals that the conversion event fires on /contact or /admissions after the visitor clicks the nav CTA. Decisions about KEEP / DELETE / NOINDEX must use the referred-attribution floor (sess × site CR%), not the literal 0.

The conversion concentration is more extreme than Arms Acres (97%) and Surfpoint (98%) for a different reason — Conifer Park has lower service-page traffic to begin with.

### 1.2 Service-page traffic problem (not a CRO problem)

Hypothesis tested: *Service pages get traffic but no directly-attributed conversions because either (a) they lack an on-page intake form (so visitors who do click through convert on /admissions or /contact and credit lands there), OR (b) they're not being reached by visitors in the first place.*

Per-page session counts make the answer clear — both (a) and (b) are true, but (b) is much bigger:
- /service/inpatient-rehabilitation: **106 sessions in 365 days** (~2/week)
- /service/family-program: **61 sessions / 365d** (~1/week)
- /service/psychiatric-services: **45 sess / 365d**
- /service/adult-detoxification-program: **38 sess / 365d**
- /service/addiction-treatment-program: **40 sess / 365d**
- /service/activities-and-recreation: **33 sess / 365d**

Combined: 323 sessions/year on 6 service pages = ~6 visitors/week across the entire service-page surface. Effective referred conversions at the 0.53% site-CR floor: **~1.7 conv/year**. Upper bound if every visitor clicked through and converted at the 6% destination rate: ~17 conv/year. Either bound is small because the page-level traffic itself is small. The bottleneck is upstream — getting visitors to these pages in the first place. **A CRO-side fix (deploying an on-page form) would surface the ~2 referred conversions and modestly lift the rate, but it would not move the absolute volume meaningfully until the traffic problem is solved.** Conifer Park's service pages aren't being reached.

The two upstream causes:

1. **Geo-lock on the URL.** Every service page slug ends in `-in-glenville-ny`. A query like "outpatient psychiatric services albany" or "mat treatment troy" gets matched against `/service/psychiatric-services-in-glenville-ny` only if Google decides the Glenville-suffix is irrelevant — which it usually doesn't.

2. **No internal-link path to the service pages from the blog or location surface.** Spot-check (raw HTML grep of 5 blog posts + 3 outpatient location pages): no internal links to `/service/<name>-in-glenville-ny` URLs found from any blog post sampled; the outpatient location pages link to `/outpatient` (the hub) but not to specific service pages even when the procedures discussed match. This matches the architectural pattern Surfpoint had — link equity is going to home + contact + utility pages and bypassing service pages entirely. (Note: this spot-check is sample-based, not a full crawl — DataForSEO OnPage scoped to KEEP+KEEP-AUDIT will quantify exactly which pages link where.)

**M1 fix is upstream:** remove the `-in-glenville-ny` suffix from the URLs (#3) AND rebuild internal links so blog + location pages reach the canonical service pages (#8). Both are required — neither alone is sufficient.

### 1.3 Brand vs non-brand split

**GSC 365d (definitions: query matches `(conifer\s*park|coniferpark)` regex case-insensitive):**

| Classification | Queries | Impressions | Clicks | CTR | Imp Share | Click Share |
|---|---:|---:|---:|---:|---:|---:|
| Non-branded | 260,927 | 4,946,575 | 14,380 | **0.29%** | 98.4% | 50.3% |
| Branded | 103 | 81,291 | 14,222 | **17.5%** | 1.6% | 49.7% |

**Trajectory over 30/90/180/365:**

| Period | Branded clicks | Non-branded clicks | Branded share of clicks |
|---|---:|---:|---:|
| 30d | 1,206 | 210 | **85.2%** |
| 90d | 3,727 | 927 | **80.1%** |
| 180d | 6,903 | 2,734 | **71.6%** |
| 365d | 14,222 | 14,380 | **49.7%** |

The branded share of clicks is *growing* in shorter windows (85% in last 30d vs 50% in last 365d). Interpretation: non-branded clicks are decaying faster than branded — suggests organic blog content is losing rankings while brand-direct queries remain stable. This is consistent with the Surfpoint deindexing-event pattern, just less acute.

### 1.4 Channel matrix — with GBP-click broken out

**GA4 365d** (with `gmb / click` source/medium extracted from Organic Search aggregate):

| Channel | Sessions | Sess Share | Conv | Conv Share | Conv Rate |
|---|---:|---:|---:|---:|---:|
| **Organic Search — `google/organic`** | 50,142 | 40.3% | 217 | 33.2% | 0.43% |
| **Direct** | 23,337 | 18.8% | 190 | 29.1% | **0.81%** |
| **Organic Search — `gmb/click`** *(GBP-attributed)* | 7,656 | 6.2% | **190** | **29.1%** | **2.48%** |
| Organic Search — `bing/organic` | 6,245 | 5.0% | 34 | 5.2% | 0.54% |
| Organic Search — `yahoo/organic` | 943 | 0.8% | 13 | 2.0% | 1.38% |
| Unassigned | 865 | 0.7% | 2 | 0.3% | 0.23% |
| Organic Search — `duckduckgo/organic` | 711 | 0.6% | 2 | 0.3% | 0.28% |
| Referral — `albanyjobfair.com` | 232 | 0.2% | 0 | 0% | 0% |
| Organic Social — `m.facebook.com` | 176 | 0.1% | 0 | 0% | 0% |
| Referral — `chatgpt.com` | 132 | 0.1% | 0 | 0% | 0% |
| Referral — `armsacres.com` | 52 | <0.1% | 0 | 0% | 0% |

**Reading the channel matrix:**

- **GBP/click is the highest-converting channel at 2.48%** — 5.8× the `google/organic` rate, 17× the non-GBP organic rate. Contributes 29% of conversions from 6.2% of traffic.
- **Direct (mostly brand-aware) converts at 0.81%** — typed-URL + bookmark + dark-social + branded-search returning visitors. Brand-aware is the second resilience layer.
- **Standard Google organic converts at 0.43%** — most of this is non-brand visitors landing on blog content that isn't a conversion path. The Surfpoint diagnosis applies: non-brand visitors land in the wrong room.
- **LLM referrals total ~221 sess / 365d / 1 conv** (chatgpt.com 132 + chatgpt.com `/(not set)` 89 + perplexity + gemini + claude). Present but small, 0.18% of total traffic — same range as Arms Acres. No M1 LLM action; M3 if AI Overview presence emerges.

**Curious referral: armsacres.com referred 52 sessions in 365d.** Arms Acres is another HQDM Recovery client. Likely a single article linking to a Conifer Park resource. Worth confirming the link target/source for inter-client link-equity awareness.

### 1.5 New vs returning shape (90d)

| Channel | New/Returning | Sess | Conv | Conv Rate |
|---|---|---:|---:|---:|
| Organic Search | new | 8,856 | 87 | 0.98% |
| Direct | new | 5,889 | 69 | 1.17% |
| Organic Search | returning | 3,916 | **67** | **1.71%** |
| Direct | returning | 548 | 5 | 0.91% |
| Referral | new | 354 | 1 | 0.28% |
| Referral | returning | 129 | 1 | 0.78% |

**Read:** Returning Organic Search visitors convert at **1.71% — 1.75× the new-visitor rate (0.98%)**. The brand-pull → return-visit pattern is the highest-value flow on the site. Direct converts new visitors at 1.17% (consistent with brand-aware first arrivals). Two compounding implications:
- The site has a working "remember me, come back, convert" pathway — protect it
- A multi-touch attribution model would shift more credit to whatever first surfaced the brand (likely GBP + the higher-volume blog pages); pure last-click views the brand engine as Direct-driven

### 1.6 Geography — bot pollution + the real catchment

**GA4 90d top regions:**

| Region | Sessions | Conv | Notes |
|---|---:|---:|---|
| US — New York → New York City | 1,788 | 19 | Real catchment |
| Singapore | 1,713 | 0 | **Bot/datacenter** (4.6% engagement is bot signature) |
| US — Virginia → Ashburn | 743 | 5 | **Likely AWS-east bot** (Ashburn is the major AWS datacenter region) |
| US — New York → Albany | 709 | 12 | Real catchment (Capital Region) |
| US — New York → (not set) | 697 | 10 | NY mass |
| China | 587 | 0 | **Bot** |
| US — New York → Syracuse | 468 | 12 | Out-of-area but converts — Syracuse outpatient page works |
| US — New York → Rochester | 467 | 8 | Out-of-area, Rochester outpatient page works |
| US — New Jersey → Newark | 435 | 2 | Out-of-state visit |
| US — New York → Schenectady | 302 | **11** | Real catchment (Glenville's home county) — 3.6% conv rate |
| US — Massachusetts → Boston | 262 | 4 | Out-of-state |
| US — New York → East Glenville | 229 | 1 | Hyper-local |
| US — New York → Troy | 219 | 2 | HQDM-supported outpatient catchment |
| Singapore | 209 | 0 | **More bot** |

**Read:**

- **Real catchment (Capital Region NY): Schenectady 302 sess / 11 conv (3.6%), Albany 709 / 12 (1.7%), Troy 219 / 2 (0.9%), East Glenville 229 / 1 (0.4%).** Schenectady is converting at the highest rate of any Capital Region city — but the Schenectady outpatient page (1,472 sess / 0 conv per decision matrix) doesn't capture the conversions. Schenectady-city visitors are converting on home/contact/admissions, not on the Schenectady page. Same pattern as Arms Acres (city visitors land on the page named for their city; conversion fires on a different page). **Implication for Schenectady page**: redesign as a real funnel asset, not a doorway.
- **Syracuse + Rochester are converting at ~2.5% — out-of-HQDM-scope but the outpatient pages are working.** Useful proof-of-concept for what a fully-tuned `/outpatient/<city>` page can do (the same surface that Troy is currently failing on).
- **Singapore + China + Ashburn VA combined: ~3,000 sessions in 90d = ~10% of site total, with 0 real conversions.** GA4's "Exclude known bots" filter isn't catching this volume. Likely scraper bots. Action: add Singapore + China + the Ashburn IP range to GA4's filtered traffic list to clean reporting numbers (otherwise Q1 → Q2 traffic compares are noisy).
- **The areaServed in the homepage JSON-LD claims NY + NJ + CT + MA + VT for the inpatient facility.** The geo data shows real referral inflows from NJ (Newark) and MA (Boston). The claim is plausible for inpatient. The 6 outpatient locations have narrower real catchments and shouldn't replicate the broad inpatient claim.

### 1.7 Top non-brand queries — informational mass, no commercial intent

Top non-brand queries 365d by clicks:

| Clicks | Impressions | Position | Query |
|---:|---:|---:|---|
| 7,331 | 528,471 | varies | "signs that my body is detoxing" → /blog/signs-that-my-body-is-detoxing |
| 5,094 | 241,499 | varies | "how long do alcoholics live" → /blog/how-long-do-alcoholics-live |
| 2,617 | 653,760 | varies | "how long does kratom last" → /blog/how-long-does-kratom-last |
| 2,590 | 246,686 | varies | "foods to eat in alcohol detox" → /blog/foods-to-eat-in-alcohol-detox |
| 1,763 | 141,250 | varies | "depression post alcohol duration" → /blog/depression-post-alcohol-duration-varies |
| 1,722 | 618,685 | varies | "get rid of alcohol breath" → /blog/get-rid-of-alcohol-breath |
| 1,660 | 337,783 | varies | "what do dreams about drugs mean" → /blog/what-do-dreams-about-drugs-mean |
| 1,399 | 183,058 | varies | "adderall use affect your kidneys" → /blog/adderall-use-affect-your-kidneys |
| 1,296 | 175,473 | varies | "does acid stay in your spinal cord" → /blog/does-acid-stay-in-your-spinal-cord |
| 933 | 289,790 | varies | "mix alcohol and valtrex" → /blog/mix-alcohol-and-valtrex-valacyclovir |

**Read:** Same pattern as Arms Acres ("mix alcohol and tylenol" 767K imp / 0 conv, "hiccups when drunk" 692K imp / 0 conv). Massive informational reach, near-zero commercial intent for a residential treatment facility. The blog is doing topical-authority work that doesn't ladder up to the buyer.

The decision matrix output (Section 3) handles this: NOINDEX preserves link equity, stops the blog from being canonical SEO surface. The blog stays useful as a reference body for internal linking + as topical authority for Google's understanding of the site's vertical, but stops ranking-as-a-result for these queries.

---

## 2. Architectural diagnosis — the cleanup playbook surface

### 2.1 Schema deployment — strong global, missing page-level specificity

**Existing global JSON-LD `@graph` (homepage, replicated on every other page):**

| @type | Count | Name(s) |
|---|---:|---|
| MedicalOrganization + MedicalBusiness (dual @type) | 1 | "Conifer Park" |
| Organization (parent) | 1 | "Liberty Behavioral Management Corp" |
| Person (CEO) | 1 | "Dr. Kelly Ann Underwood" |
| MedicalClinic | 6 | Troy, Syracuse, Schenectady, Plattsburgh, Glens Falls, Rochester |
| MedicalProcedure | 4 | Inpatient Rehabilitation, Outpatient Treatment, Medical Detoxification, Medication-Assisted Treatment (MAT) |

The structure uses `@graph` with `@id` cross-references — this is the *right* schema architecture for a multi-clinic medical organization. The problem is page-level specificity:

| Page | Carries | Should carry |
|---|---|---|
| /outpatient/troy → 301 → /outpatient-rehab-troy-ny | Full global @graph (all 6 clinics) | Conifer Park MedicalClinic node (Troy only) + relevant MedicalProcedure nodes (MAT, outpatient) + parent Conifer Park reference |
| /service/<name>-in-glenville-ny | Full global @graph | Page-specific MedicalProcedure (matching the service) + parent reference |
| /reviews | Full global @graph | AggregateRating (computed from GBP) + per-review Review objects |
| /admissions | Full global @graph | MedicalWebPage + FAQPage (if FAQ content exists) |
| /inpatient | Full global @graph | Conifer Park MedicalClinic (Glenville) + Inpatient MedicalProcedure |
| Blog posts | Full global @graph | MedicalWebPage or BlogPosting + author Person reference |

**Refactor — not rebuild.** The global block on the homepage is good; pages downstream should inherit via `@id` references rather than re-declare the entire graph.

### 2.2 Meta descriptions — 100% empty across all sampled URLs

Confirmed via raw HTTP fetch + regex against 15 pages (homepage, all 6 outpatient pages, all 6 service pages, admissions, reviews, service-areas). Every `<meta name="description">` is absent or empty. No SERP snippet control on the site.

### 2.3 Title tag artifacts

Two outpatient pages have HTML-encoded characters in `<title>`:
- `/outpatient/glens-falls`: title ends with `&quot;` (encoded double quote)
- `/outpatient/plattsburgh`: title contains `&#x27;` (encoded apostrophe in "Conifer Park's")

Webflow / template encoding issue, surfaces in SERPs as broken characters. Verifiable via raw HTML fetch.

### 2.4 `tel:` URL pollution (single-fix root cause)

URLs found indexed with `tel:8009896446` as a path segment (sample from decision matrix):
- `/category/tel:8009896446`
- `/category/addiction-treatment/tel:8009896446`
- `/category/program/tel:8009896446`
- `/author/matt/page/tel:8009896446`
- `/author/tel:8009896446`
- `/outpatient/troy/tel:8009896446`

These are not real pages — they're a JavaScript artifact. A phone-number link template is producing `<a href="tel:8009896446">` that crawlers are resolving as a relative path against the URL where it appears. Result: every category/author/page-archive URL spawns a `/tel:8009896446` variant in Google's index.

**Fix:** identify the offending template component (likely a click-to-call CTA used in the footer or a sidebar). Change `href="tel:8009896446"` to `href="tel:+18009896446"` (absolute) AND/OR add `rel="nofollow"` to prevent resolution, AND submit URL removal in GSC for the spawned variants. Single-fix at the template layer eliminates dozens of indexed URLs.

### 2.5 WordPress → Webflow migration debris

Indexed legacy URLs (decision-matrix-confirmed):

**Parallel service architectures (cannibalization):**
- `/program/addiction-treatment-program` AND `/service/addiction-treatment-program-in-glenville-ny`
- `/program/inpatient-rehabilitation` AND `/service/inpatient-rehabilitation-in-glenville-ny`
- `/program/adult-detoxification` AND `/service/adult-detoxification-program-in-glenville-ny`
- `/program/activities-recreation` AND `/service/activities-and-recreation-program-in-glenville-ny`
- `/program/co-occurring-psychiatric` AND `/service/psychiatric-services-in-glenville-ny`

**Legacy hub variants:**
- `/programs`, `/programs.html`, `/program` (three versions of the same hub)
- `/admissions.html`, `/inpatient-treatment`, `/outpatient-services`, `/outpatient-treatment`, `/outpatient.html`, `/inpatient-rehabilitation-program`
- `/outpatient-substance-abuse-services-open-house-schenectady-ny` (legacy event landing)

**Date archives (WordPress monthly index):**
- `/2013/07`, `/2013/08`, `/2013/09`, `/2013/11`, `/2013/12`, `/2014/01`, etc.

**Category archives:**
- `/category/conifer-news`, `/category/industry-updates`, `/category/conifer-events`, `/category/uncategorized`, `/category/addiction-treatment`, `/category/outpatient`, `/category/industry-issues`

**Author archives:**
- `/author/matt`, `/author/matt/page/2`, `/author/matt/page/3`

**Indexed PDF assets:**
- `/assets/brochures/NoticeofPrivacyPractices.pdf`
- `/assets/conference-brochure-2016.pdf`
- `/assets/2024`, `/assets/wpo/images`

**Fix sequence:**
1. 301 the legacy `/program/<name>` URLs to renamed `/services/<service-slug>` (per M1 #3)
2. 301 the `.html` variants (`/admissions.html`, `/programs.html`, `/outpatient.html`) to their current canonical
3. Delete the `/2013/`, `/2014/` etc. archives from Webflow if they're still being rendered; otherwise GSC URL-removal + 410-status response
4. Delete or 301 category archives — most should go to `/blog` or be killed entirely
5. Delete or 301 author archives — `/author/matt` → `/about-us` (or kill if no author-page strategy exists)
6. Either keep the PDFs (if still legally relevant) or 410 + URL-removal in GSC

### 2.6 Case-sensitive URL duplicates

Indexed URLs at the all-uppercase variant:
- `/OUTPATIENT/TROY`
- `/OUTPATIENT/SCHENECTADY`
- `/OUTPATIENT/SYRACUSE`
- `/OUTPATIENT/GLENS-FALLS`

Likely more exist across other paths but these are the confirmed indexed duplicates. The Cloudflare worker or Webflow rule that should be redirecting uppercase → lowercase isn't active. Fix once at the edge layer.

### 2.7 71 `/suburb/` doorway pages

Adjective-stuffed slugs targeting Capital Region towns. Examples:
- `/suburb/specialized-recovery-center-in-albany-ny` (24 clicks / 2,219 imp / 365d / 0 conv)
- `/suburb/reliable-addiction-treatment-in-clifton-park-ny` (15 / 1,733 / 0)
- `/suburb/trusted-addiction-recovery-center-in-rexford-ny` (5 / 923 / 0)
- `/suburb/most-effective-addiction-treatment-in-cohoes-ny` (6 / 782 / 0)
- `/suburb/preferred-addiction-outpatient-treatment-in-guilderland-ny` (4 / 110 / 0)
- `/suburb/top-rated-recovery-center-in-averill-park-ny` (4 / 183 / 0)

Adjective rotation: "leading," "trusted," "premier," "exceptional," "reliable," "high-quality," "specialized," "preferred," "top-rated," "most-effective."

Combined 71-page contribution to 365d:
- ~150 clicks
- ~22,000 impressions
- **0 directly-attributed conversions** (estimated ~0.8 effective referred conv/year via the nav CTAs at 0.53% site CR — below noise floor; 301-redirecting to `/service-areas` preserves it on the redirect target)

**Categorical breakdown for the cleanup decision:**

| Tier | Criteria | Count (est) | Action |
|---|---|---:|---|
| Tier A — real adjacent town with measurable click pull | e.g., `/suburb/scotia-ny` (27 clicks) | ~5 | Evaluate as KEEP-AUDIT for rewrite into a real location asset OR fold into `/service-areas` |
| Tier B — real town, minimal click pull | e.g., `/suburb/clifton-park-ny`, `/suburb/cohoes-ny` (1-15 clicks each) | ~50 | DELETE+REDIRECT to nearest `/outpatient/<city>` |
| Tier C — micro-hamlet or invented place name | e.g., "Honeywell Corners," "Cedar Bluffs," "Huntleigh," "Harmony Corners" | ~16 | Validate against USGS GNIS — confirmed invented = DELETE+410; real-but-trivial = DELETE+REDIRECT |

**Risk note:** March 2024 Google spam update specifically targets the "doorway page" pattern (multiple low-quality pages targeting the same intent in different cities). Conifer Park's pattern is textbook. The longer the surface exists, the more risk it accrues.

### 2.8 Troy URL architecture — legacy slug as canonical

Verified via curl:
- `GET /outpatient/troy` → **HTTP 301 → /outpatient-rehab-troy-ny**
- `GET /outpatient-rehab-troy-ny` → **HTTP 200** (canonical)
- All other `/outpatient/<city>` URLs → HTTP 200 (canonical)

Conifer Park's only HQDM-supported outpatient location is the only outpatient on the site using a legacy non-pattern URL. The fix is to invert the redirect:

1. Move the page content to `/outpatient/troy` (matches the architecture of all other outpatient locations)
2. 301 `/outpatient-rehab-troy-ny` → `/outpatient/troy`
3. Remove the 301'd `/outpatient/troy` entry from the sitemap
4. Update internal links across the site to `/outpatient/troy`

This is a 1-2 hour Webflow change. It also positions the page consistently for the new internal-linking pattern (M1 #8).

### 2.9 Service pages — Glenville geo-lock

All 6 `/service/<name>-in-glenville-ny` URLs have the suffix even when the service is delivered network-wide:

| Service | Glenville? | Network-wide? | Geo-lock cost |
|---|:-:|:-:|---|
| Addiction Treatment Program | ✅ | ✅ (inpatient draws from anywhere) | Can't rank for "addiction treatment albany" naturally |
| Adult Detoxification | ✅ (inpatient only) | ⚠️ (mostly Glenville) | Geo-lock is fine for this one |
| Inpatient Rehabilitation | ✅ (inpatient only) | ⚠️ (mostly Glenville) | Geo-lock is fine for this one |
| Psychiatric Services | ✅ + outpatient | ✅ (across outpatient sites) | Can't rank for "psychiatric services troy" |
| Family Program | ✅ + outpatient | ✅ | Can't rank for non-Glenville variations |
| Activities and Recreation | ✅ (inpatient activity) | ❌ | Geo-lock is fine for this one |

**Recommended URL refactor (M1 #3):**

| Current | New |
|---|---|
| /service/addiction-treatment-program-in-glenville-ny | /services/addiction-treatment |
| /service/adult-detoxification-program-in-glenville-ny | /services/detox |
| /service/inpatient-rehabilitation-in-glenville-ny | /services/inpatient-rehab |
| /service/psychiatric-services-in-glenville-ny | /services/psychiatric-services |
| /service/family-program-in-glenville-ny | /services/family-program |
| /service/activities-and-recreation-program-in-glenville-ny | /services/activities-and-recreation |

The Glenville location specifics stay on the page (it's the inpatient location) but the URL doesn't constrain topical relevance to one geo. The new URLs also match the existing `/services/regional-services` precedent on the site.

### 2.10 Trust signal layer — competitive gaps

| Trust signal | Status | Competitor benchmark | Cost of absence |
|---|---|---|---|
| Joint Commission accreditation | **Not displayed** | Mountainside, Hazelden, AAC all display gold seals | YMYL trust gap |
| CARF certification | **Not displayed** | Mountainside is CARF-certified Center of Excellence | YMYL trust gap |
| LegitScript certification | **Not displayed** | Most paid-search-active rehab facilities are LegitScript-certified | Blocks Google Ads on SUD-treatment queries |
| Insurance payor list | **Generic claim only** | Industry standard shows payor logos (BCBS, Aetna, Cigna, UH, Humana) | High-intent visitors don't know if they're covered |
| Clinical leadership / team page | **No dedicated page**; CEO is in JSON-LD only | Mountainside has detailed `/team` and `/medical-leadership` pages | E-E-A-T gap, weakens the "people-who-care" homepage H1 promise |
| OASAS license | ✅ Displayed (Operating Certificate #10018) | Industry standard | OK |
| Operating since 1983 / 42 years | ✅ History on about page | Industry standard | OK |
| 225-bed facility | ✅ Mentioned | Industry standard | OK |

**Pursuit framework for the trust-signal accreditations:**

- **LegitScript** — apply directly via legitscript.com/certification/healthcare/. Fee + process; ~6-week turnaround.
- **Joint Commission** — major undertaking (3-day on-site survey, ~$15K+ application fee for behavioral health). Decision to pursue this is *not* an HQDM strategy decision; it's a Conifer Park executive decision. M1 action is *recommending* the pursuit + flagging the SEO/trust cost of absence. Not "build the Joint Commission badge into the website" until it's actually awarded.
- **CARF** — same as Joint Commission. Pursuit is executive-level. Not assumed.
- **Insurance payor list** — no third-party gate. M1 action: confirm with intake which insurers Conifer Park is actually in-network with, then build a payor logo wall on /admissions. 2-week deliverable.

---

## 3. Cleanup playbook — decision matrix output

The decision matrix (run via `scripts/cli/run_analysis.py`) bucketed 771 indexed URLs by their performance + structural classification:

| Bucket | URLs | 90d sess | 365d clicks | 365d conv | Conv share | Action |
|---|---:|---:|---:|---:|---:|---|
| **KEEP** | 54 | 20,240 | 22,107 | **650** | **99.4%** | Maintain; deploy schema refactor + meta descriptions |
| **KEEP-AUDIT** | 2 | 886 | 839 | 0 | 0% | Investigate /outpatient/schenectady (1,472 sess) + /outpatient/troy (1,256 sess) — convert into real funnel assets |
| **AUDIT** | 299 | 6,491 | 25,605 | 4 | 0.6% | Second-pass evaluation (suburb pages + low-traffic blog) |
| **NOINDEX** | 338 | 5,280 | 26,862 | 0 | 0% | Preserve link equity; remove from canonical organic surface |
| **DELETE** | 78 | 130 | 49 | 0 | 0% | Thin/orphan blog content; 410-status |
| **DELETE+REDIRECT** | 0 (in initial bucketing) | — | — | — | — | After URL pattern audit, ~50 of the suburb pages should drop here |

**Notes on the AUDIT bucket** (299 URLs needing manual second-pass):

| Sub-pattern in AUDIT | Count | Recommended bucket post-audit |
|---|---:|---|
| /suburb/ doorway pages | 71 | Split into A/B/C tiers per Section 2.7 |
| /blog/ low-traffic posts | 43 | NOINDEX or DELETE based on individual review |
| /category/* WordPress archives | 10 | Mostly DELETE+REDIRECT to /blog |
| /program/* WordPress legacy services | 8 | DELETE+REDIRECT to renamed /services/<service> |
| /author/* | 5 | DELETE+REDIRECT to /about-us or DELETE |
| /assets/* indexed files | 5 | Keep if useful; otherwise URL-removal |
| /2013/*, /2014/* date archives | 9 | DELETE (or noindex if Webflow still generates them) |
| /outpatient/* malformed (`schenectady robert`, `troy/tel:...`, etc.) | 4 + tel-pollution variants | These need URL-removal — they're not real pages |

**DataForSEO OnPage crawl scope:** When the DataForSEO crawl is procured, scope it to the KEEP + KEEP-AUDIT URLs only (56 URLs). That captures 99.4% of conversion volume on ~7% of the URL surface — same scope-reduction principle that's been working on Surfpoint and Arms Acres.

---

## 4. Competitor positioning — Capital Region SERP + Maps evidence

DataForSEO SERP Live (Albany-Schenectady-Troy DMA, US-NY location code 1023246) for 25 priority commercial queries × top 100 organic results, plus Maps SERP at 4 coordinates × 12 priority anchors. Pulled 2026-05-11. Total spend on this Phase 2 set: $0.71.

### 4.1 Conifer Park's organic ranking story by query

Per-query rank for `coniferpark.com` URLs in the top 100 organic (Albany-Schenectady-Troy DMA):

| Query | Conifer rank(s) | Aggregators in top 10 | Top REAL competitor |
|---|---|:-:|---|
| drug rehab glenville ny | **#1, #3, #7** + 5 more | 3 | drugabuse.com #4 (aggregator); first REAL service provider is www.newchoicesrecovery.org #11 |
| inpatient rehab schenectady ny | #6, #11, #15, #17, #19, #27, #31 | 4 | www.newchoicesrecovery.org #5 |
| alcohol detox glenville ny | #5, #8, #10, #14 + 8 more | 3 | alcohol.org #6 (aggregator); first REAL is www.newchoicesrecovery.org #22 |
| addiction treatment center glenville ny | #4, #9 + 6 more | 5 | www.newchoicesrecovery.org #11 |
| mat treatment troy ny | **#3, #9** | 3 | www.sphp.com #2 (the top competitor in the entire Capital Region) |
| alcohol rehab schenectady ny | #10, #32 | 4 | www.newchoicesrecovery.org #4 |
| drug rehab schenectady ny | #10, #13, #22, #26 | 4 | www.newchoicesrecovery.org #4 |
| outpatient rehab troy ny | #14, #25, #30 | 6 | www.sphp.com #8 |
| addiction treatment troy ny | #12 | 5 | www.sphp.com #4 |
| drug rehab troy ny | #11 | 6 | www.sphp.com #4 |
| alcohol rehab troy ny | #13 | 5 | www.sphp.com #5 |
| detox center albany ny | #32 | 4 | www.sphp.com #4 |
| rehab that takes medicaid ny | #30 | 7 | www.addictionresource.net #11 |
| addiction treatment albany ny | **NOT in top 100** | 5 | www.sphp.com #5 |
| alcohol rehab albany ny | **NOT in top 100** | 5 | www.sphp.com #8 |
| drug rehab albany ny | **NOT in top 100** | 4 | www.sphp.com #4 |
| inpatient rehab albany ny | **NOT in top 100** | 4 | www.sphp.com #8 |
| opioid treatment program albany ny | **NOT in top 100** | 5 | www.sphp.com #4 |
| dual diagnosis treatment albany ny | **NOT in top 100** | 4 | berkshiremountaindetox.com #7 |
| drug rehab saratoga ny | **NOT in top 100** | 5 | www.sphp.com #2 |
| best rehab capital region ny | **NOT in top 100** | 4 | www.sphp.com #5 |
| inpatient rehab capital region ny | **NOT in top 100** | 4 | www.sphp.com #4 |
| addiction treatment near me | **NOT in top 100** | 3 | (Long Island service providers — NY-default fires on Long Island) |
| alcohol rehab near me | **NOT in top 100** | 4 | (Long Island service providers) |
| drug rehab near me | **NOT in top 100** | 4 | (Long Island service providers) |

**Read:**

1. **Geo-lock thesis is now data-confirmed.** Conifer Park ranks well for queries that contain `glenville` or `schenectady` in the query string — the `/service/<name>-in-glenville-ny` URL pattern provides literal keyword match. For queries containing `albany`, `saratoga`, `capital region`, or `near me`, Conifer Park is **NOT in top 100** — the geo-locked URLs don't compete. Eight Albany / Capital Region / Saratoga queries with zero presence in top 100.
2. **The Troy queries are the consistent ~#11-14 pattern** — Conifer ranks but just outside the top 10 (the "page 2" zone) for all Troy non-MAT queries. The MAT query is the standout (#3, #9) — likely because the Troy outpatient page name + content emphasizes MAT.
3. **The pages are competing against themselves.** "drug rehab glenville ny" gets 8 Conifer URLs in the top 30 (#1, #3, #7, #14, #19, #21, #22, #27). Multiple URLs ranking for the same query is internal cannibalization at scale — the same `-in-glenville-ny` page pattern, the legacy `/program/<name>` duplicates, and the `/suburb/` doorways all competing for the same intent.
4. **Aggregator pollution in the local SERP is heavy** — 3-7 of the top 10 results are aggregators (recovery.com, addictioncenter.com, addictions.com, rehabs.com, recovered.org, sobernation.com, addictionresource.com, alcohol.org, drugabuse.com) on most queries. This is the YMYL SERP environment Conifer Park is competing in: the "real competition for buyers" set is much smaller than the top-10 visible list.

### 4.2 The REAL Capital Region rehab pack (Conifer Park's actual competitive set)

Filtered to service providers only (stripped aggregators, government/info sites, social, jobs, Wikipedia, other-region clients):

| Competitor | Queries ranked / 25 | Avg rank | Notes |
|---|:-:|:-:|---|
| **www.sphp.com** *(St. Peter's Health Partners)* | **22/25** | **#9.9** | **THE dominant competitor.** Multi-location: St. Peter's Addiction Recovery Center, Sunnyview Rehab, St. Mary's Hospital. Ranks for Albany, Troy (incl. St. Peter's Addiction Recovery's Troy location), Saratoga, MAT, opioid treatment, inpatient rehab. |
| **www.hopehouseinc.org** *(Hope House Inc, Albany)* | 16/25 | #12.8 | Albany-based, strong programs cluster. Visible for Albany / Troy / Schenectady. |
| **www.newchoicesrecovery.org** | 13/25 | #17.3 | **Schenectady-based — direct Conifer geographic overlap.** Beats Conifer at #4-5 on Schenectady queries. |
| fusionrecovery.com | 11/25 | #22.1 | Multi-location |
| **www.theacca.net** *(Addictions Care Center of Albany)* | 10/25 | #19.5 | Albany |
| **www.capitaldistrictrecoverycenter.org** | 9/25 | #19.2 | Albany / Capital Region |
| wellbridge.org | 8/25 | #16.5 | Multi-location (Saratoga, Schenectady, Long Island) — well-optimized |
| berkshiremountaindetox.com | 8/25 | **#12.4** | Strong organic positioning (low avg rank); proximate (Berkshires MA — markets Albany NY) |
| www.wmyhealth.org *(Whitney M Young Health)* | 8/25 | #21.6 | Albany community health, MAT-focused |
| valleyvistarecovery.com | 7/25 | #19.4 | Out-of-area but ranks for Capital Region queries |
| **www.albanymed.org** | 7/25 | #16.9 | Albany Medical — hospital-based; competes specifically on "inpatient rehab albany / capital region ny" |
| **www.daughtersofsarah.org** | (in top 5 for capital region) | — | Albany rehab/nursing — competes for "rehab capital region" |
| detox.net | 6/25 | #14.3 | Multi-location |

**Pattern:** the local pack outside the immediate Schenectady catchment is **owned by St. Peter's Health Partners**. sphp.com appears in 22 of 25 priority queries at average #9.9. Their footprint (Addiction Recovery Center, Sunnyview Rehab, St. Mary's Troy) covers the same surface Conifer Park does but with a hospital-system trust advantage. **The 1-2 punch is sphp.com (Albany/Troy/Saratoga side) + newchoicesrecovery.org (Schenectady side).**

Conifer Park's organic ranking advantage at Glenville is real but doesn't extend to the broader Capital Region — sphp.com isn't even in the Glenville-specific rankings (because the Glenville-geo-locked URLs don't match Albany-system pages). **Outside the Glenville hyper-local, Conifer is losing the broader Capital Region search to sphp.com and newchoicesrecovery.org.**

### 4.3 AI Overview presence (Phase 2 scope)

DataForSEO AI Overview detection across 25 priority queries: **1 query triggered an AI Overview** — `mat treatment troy ny`. Reference domain in the AI Overview citation is empty (`ref_domain: ''`). Same low-AI-Overview baseline as Surfpoint + Arms Acres. No M1 LLM action; M3 monitoring item if AI Overview presence grows.

### 4.4 Maps SERP — Conifer Park is #1 across the Glenville catchment but ratings are a reputation problem

DataForSEO Maps SERP, 4 coordinates × 12 priority anchors, 2026-05-11:

**Pattern A — All 12 priority anchors at Glenville facility coord (42.8868,-73.9417,14):**

| Anchor keyword | Conifer rank | Notes |
|---|:-:|---|
| addiction treatment center | **#1** | |
| alcohol detox | **#1** | |
| alcohol rehab | **#1** | |
| alcohol rehab near me | **#1** | |
| detox center | **#1** | |
| detox near me | **#1** | |
| drug detox | **#1** | |
| drug rehab | **#1** | |
| drug rehab near me | **#1** | |
| inpatient rehab | **#1** | |
| opioid treatment | **#1** | |
| rehab near me | **#1** | (also Sunnyview Therapy Services 4.9★ #2 and Schenectady County Glendale Home 4.2★ #3) |

**Pattern B — Top-2 anchors across all 4 catchment coords:**

| Coordinate | "alcohol rehab" rank | "drug rehab" rank |
|---|:-:|:-:|
| Glenville facility (inpatient) | **#1** | **#1** |
| Schenectady downtown | #3 | #2 |
| Albany downtown | (not in pack) | (not in pack) |
| Troy outpatient (Sixth Ave) | #5 | #2 |

**Read:** Maps dominance is **strong and concentrated**. At the Glenville facility coordinate, Conifer Park is rank #1 for every priority anchor — a result of having the only OASAS-licensed inpatient facility in Glenville with a claimed GBP. The grid still favors Conifer at Schenectady and Troy for the "rehab" anchors but slips at Albany. **The strategic shape: defend Glenville #1 (it's the working channel + the reason 2.48% GBP-click conv exists), extend grid coverage outward at Schenectady + Troy.**

### 4.5 GBP audit findings (Glenville + Troy)

DataForSEO Business Data pull, 2026-05-11:

**Conifer Park (Glenville inpatient, place_id `ChIJzdp083Js3okRQZCVDHbIe-M`):**
| Field | Value | Benchmark / Note |
|---|---|---|
| Title | "Conifer Park: Inpatient Addiction Treatment Drug & Alcohol Detox & Rehab Center In New York" | Long but keyword-dense — fine |
| Rating | **3.2★** | Below industry standard (4.0+ is the benchmark); same reputation problem as Arms Acres' 3.2★ |
| Reviews | 153 | OK volume but quality (rating) is the issue |
| Category | Addiction treatment center | Primary OK; secondaries unknown (DFS lookup didn't surface them — confirm via direct GBP audit) |
| Phone | +1-800-989-6446 | **Main Line, NOT Intake (800-926-6433). Inconsistent with /admissions which prioritizes intake — confirm canonical GBP phone choice** |
| URL | coniferpark.com/?utm_source=gmb... | UTM in place ✓ |
| Photos | **26** | **Major gap** — Surfpoint, Mountainside, AAC typically run 100+ professional photos |
| Q&A count | None (zero) | **Major gap** — seed Q&A is HQDM SOP |
| Claimed | True ✓ | |
| Work hours | None displayed | **Major gap** — visitors don't know when intake can be reached |
| Attributes | Wheelchair accessible only | Sparse vs the full attribute set Google supports |

**Conifer Park Troy Outpatient (place_id `ChIJlYoJmacP3okRQYXjbtljrdg`):**
| Field | Value | Benchmark / Note |
|---|---|---|
| Title | "Conifer Park - Outpatient Treatment Center - Troy" | OK |
| Rating | **3.9★** | Closer to benchmark than Glenville; near industry-acceptable |
| Reviews | **27** | **Very low volume — only 27 reviews after years of operation; needs aggressive review-velocity** |
| Category | Addiction treatment center | Primary OK; secondaries unknown |
| Phone | +1-518-274-5143 | Troy outpatient direct line ✓ |
| URL | coniferpark.com/ (no UTM) | **No UTM tracking — Troy GBP traffic invisible to GA4 `gmb/click` attribution** |
| Address | **2431 6th Ave, Troy NY 12180** | **MISMATCH with website which says "2435 Sixth Avenue"** — citation inconsistency, signals operational neglect |
| Photos | **3** | **Critical gap** — minimum effort needed |
| Q&A count | None (zero) | Same gap as Glenville |
| Claimed | True ✓ | |
| Work hours | None displayed | Same gap |
| Attributes | Wheelchair accessible only | Same gap |

**Two M1-priority GBP actions:**

1. **Fix Troy GBP address: 2431 vs 2435 6th Ave.** Confirm the true street address with intake (may be 2431 per GBP, may be 2435 per site copy — one of them is wrong). Whichever is correct, update the other surface so the citation chain across GBP + website + Recovery.com + SAMHSA + OASAS find-a-provider is consistent. Local SEO penalizes NAP inconsistency.
2. **Add UTM `?utm_source=gmb&utm_medium=click&utm_campaign=gmb_listing_troy` to Troy GBP URL.** Currently the Troy GBP just points to the homepage with no UTM — traffic from the Troy GBP appears in GA4 as plain `(direct)` or `google/organic`, not as `gmb/click`. The Glenville UTM works; replicate for Troy.

### 4.6 Competitor GBP comparison

DataForSEO Business Data pull, 5 GBPs returned, 2 (St. Peter's Addiction Recovery + Hope House) timed out on async tasks — to re-pull for v3:

| GBP | Rating | Reviews | Photos | Claimed | Address |
|---|:-:|:-:|:-:|:-:|---|
| **Conifer Park Glenville** | **3.2★** | **153** | 26 | ✅ | 79 Glenridge Rd, Glenville |
| **Conifer Park Troy** | 3.9★ | 27 | 3 | ✅ | 2431 6th Ave, Troy |
| New Choices Recovery (Schenectady) | **4.2★** | 28 | 12 | ✅ | 728 State St, Schenectady |
| Ellis Hospital MH Services (Schenectady) | 2.5★ | 34 | 1 | ✅ | 1023 State St, Schenectady |
| Camino Nuevo (Albany) | 4.1★ | 37 | 1 | **❌ UNCLAIMED** | 175 Central Ave, Albany |
| St. Peter's Addiction Recovery (Albany) | — | — | — | — | task timeout — re-pull for v3 |
| Hope House (Albany) | — | — | — | — | task timeout — re-pull for v3 |

**Three competitive observations:**

1. **Rating gap is the issue, not review volume.** Conifer Park's 153 reviews dwarf every direct Capital Region competitor (27-37 each). If Conifer lifted Glenville from 3.2★ → 4.0★+, the review-count moat becomes a real ranking + trust signal. The reverse is true today: high review-volume × low rating = "lots of people had issues" perception. **M1 priority remains the review-velocity program but the framing is "raise the average," not "build volume."**

2. **Photo gap is real but not as severe as the national-brand benchmark.** Conifer Park (26 Glenville / 3 Troy) is actually photo-leading among Capital Region direct competitors (New Choices 12, Ellis 1, Camino 1). The competitive benchmark for photo gap should be **national brands** (Mountainside, AAC routinely run 100+ professional sets), not the local pack. M1 #21 photo target adjusts: Glenville 26 → 60+, Troy 3 → 30+, vs. the 100+ aspirational target only at the M3+ horizon.

3. **Camino Nuevo is unclaimed.** An unclaimed GBP at 4.1★ / 37 reviews — opportunity in two ways: (a) Google ranks unclaimed listings weaker, so Conifer extracts marginal benefit from Camino remaining unclaimed; (b) standard HQDM practice (and ethics) doesn't include hostile claim attempts on competitor profiles — flagged for awareness only.

---

## 5. The 3-month plan

Each item below has: **Department owner | Scheduled month | Expected outcome | Attribution-confidence flag | Aleksa-feasibility flag pending**.

### Month 1 — Architecture cleanup + working-channel defense

| # | Action | Dept | Sched | Expected outcome (numeric where possible) | Attr conf | Aleksa |
|---|---|---|---|---|:-:|:-:|
| 1 | Fix `tel:` URL pollution at template layer; submit URL-removal for spawned variants (`inurl:tel:`) in GSC | On-page / Tech | M1 | 100% of `tel:8009896446` URLs removed from index within 30 days; estimated 30-60 polluted URLs gone | H | pending |
| 2 | Enforce URL case-normalization (`/OUTPATIENT/*` → `/outpatient/*`) at Cloudflare/Webflow edge | Tech | M1 | 4 confirmed case-duplicate URLs 301'd; future duplicates blocked at edge | H | pending |
| 3 | Consolidate parallel service-page architectures: 301 `/program/<name>` → renamed `/services/<service-slug>`; rename `/service/<name>-in-glenville-ny` → `/services/<service-slug>`; update sitemap | On-page + Tech | M1 | 6 service URL paths unified; topical-relevance signal no longer geo-locked to Glenville for non-Glenville services | M | pending |
| 4 | Fix Troy URL: move canonical to `/outpatient/troy`; 301 `/outpatient-rehab-troy-ny` → `/outpatient/troy`; update sitemap | On-page + Tech | M1 | Troy URL matches the architecture of other 5 outpatient locations; consolidated link equity | H | pending |
| 5 | Write meta descriptions for all 54 KEEP-bucket URLs (homepage + admissions + contact + /inpatient + all 6 outpatient + all 6 service + about + careers + service-areas + reviews + news + main news posts) | On-page + Content | M1 | 54 URLs with proper meta descriptions; full SERP snippet control restored on conversion-critical surface | M | pending |
| 6 | Configure Local Dominator scans for both HQDM-supported GBPs (12 priority keywords across Glenville + Troy — list in M1 action #6 above) | GMB team + Aleksandar (keyword list) | M1 | First LD baseline scans recorded; ongoing rank tracking enabled; reporting can show grid-coverage % for the working channel | H | pending |
| 7 | Page-level schema refactor Phase 1: Troy-specific @graph on `/outpatient/troy`; AggregateRating + Review schema on `/reviews`; per-page MedicalProcedure on the 6 service pages (using the existing global @id references) | On-page | M1 | All KEEP+KEEP-AUDIT URLs validate cleanly via schema.org validator; 8 specific page-level schema improvements live | M | pending |
| 8 | Internal-link rebuild: every surviving blog post links to (a) most-topically-relevant service page (renamed `/services/<slug>`) + (b) closest outpatient location page; outpatient location pages link upstream to relevant services | On-page + Content | M1 | Service-page session count rises measurably; baseline 33-106 sess/year per service page → target 200+ sess/quarter per service page (90d window) | M | pending |
| 9 | Delete `/2013/*`, `/2014/*`, `/category/*`, `/author/*`, `/admissions.html`, `/programs.html`, `/outpatient.html`, indexed PDFs at `/assets/...` if no current use | Tech + On-page | M1 | ~35 legacy URLs removed from canonical organic surface | M | pending |
| 10 | Bot-filter Singapore + China + Ashburn VA traffic in GA4 filtered-IPs / known-bots config | Tech + Reporting (Marija) | M1 | Q2 → Q1 traffic comparisons cleaner; ~10% noise removed from session counts | H | pending |
| 11 | Fix HTML-encoded title artifacts on `/outpatient/glens-falls` (`&quot;`) and `/outpatient/plattsburgh` (`&#x27;`) | On-page | M1 | 2 title tags render cleanly in SERPs | H | pending |
| 12 | Suburb page tier classification + DELETE+REDIRECT / DELETE+410 — Tier B and Tier C only (Tier A held for M2 evaluation) | On-page + Aleksandar (classification) | M1 | ~60 suburb pages removed; ~5 held as Tier A pending rewrite call | M | pending |
| 13 | Build the insurance payor list — confirm with intake which insurers Conifer Park is in-network with; add payor logo wall on /admissions | Content + Aleksa | M1 | /admissions conversion rate (currently 6.47%) lifts measurably; H/M confidence on the lift size — flag to reporting | M | pending |
| 14 | Inter-client referrer note: identify the armsacres.com → coniferpark.com referral source; flag for Aleksandar (Arms Acres engagement) | Aleksandar | M1 | One bilateral link inventoried; option to scope or restructure based on context | L | pending |
| 15 | **Fix Troy GBP street address inconsistency** — GBP says "2431 6th Ave," website says "2435 Sixth Avenue, Troy NY 12180." Confirm true address with intake; update whichever surface is wrong (plus any third-party citations: Recovery.com, SAMHSA, OASAS find-a-provider, Yelp). | GMB team + Content | M1 | NAP consistency restored across GBP + website + 3+ third-party citation surfaces; local SEO penalty signal removed | H | pending |
| 16 | **Add `?utm_source=gmb&utm_medium=click&utm_campaign=gmb_listing_troy` to Troy GBP URL** — currently Troy GBP points to `coniferpark.com/` with no UTM, so Troy GBP traffic is invisible to GA4 `gmb/click` attribution. Replicate the working Glenville UTM convention. | GMB team | M1 | Troy GBP-click traffic becomes visible as a distinct GA4 channel; the 29% conversion-share `gmb/click` channel can be split Glenville-vs-Troy for the first time | H | pending |
| 17 | **Find/Search URL pollution: identify the JS bug that's spawning `/inpatienthttps:/vallevistahospital.com/...`** (a Conifer URL with a competitor's URL embedded as a path segment, found in the OnPage crawl). Possibly a sibling of the `tel:` resolution bug (#1). Submit URL-removal for any indexed variants. | Tech / Webflow | M1 | One additional URL-pollution surface identified + eliminated; competitor URL no longer accidentally referenced from Conifer Park's site | H | pending |

### Month 2 — Trust signals + Schenectady page rewrite + content cluster build

| # | Action | Dept | Sched | Expected outcome | Attr conf | Aleksa |
|---|---|---|---|---|:-:|:-:|
| 15 | LegitScript certification application submitted (process owner: Conifer Park exec; HQDM coordinates) | Aleksandar + Conifer exec | M2 | Certification process initiated; ~6-week turnaround; certification trust signal added to site upon award | M | pending |
| 16 | Schenectady page (`/outpatient/schenectady`) full rewrite — currently 1,472 sess / 0 directly-attributed conv (~8 referred conv/year via nav CTAs at 0.53% site CR; Schenectady-city visitors do convert per Section 1.6 geo data, just on /admissions). Treat as a real funnel asset: inline intake form (matching home/admissions/contact pattern), Schenectady-specific clinic node schema, real photos, transit access, services delivered at this location, real-catchment neighborhoods named | Content + On-page | M2 | Schenectady-page directly-attributed conv rate moves from 0% → 1%+ (target ~15 conv/quarter on-page); net new conv ≈ on-page total minus the ~8 referred baseline | M | pending |
| 17 | Troy page (`/outpatient/troy`) full rewrite — same treatment as Schenectady, but post-URL-fix from M1 #4. Currently 1,256 sess (combined across old + new URL) / 0 directly-attributed conv (~7 referred conv/year at site CR) | Content + On-page | M2 | Troy-page directly-attributed conv rate moves from 0% → 1%+; ~7 referred conv recaptured on-page + net new lift on top | M | pending |
| 18 | Clinical leadership / team page build — `/clinical-team` or `/leadership` page introducing Dr. Kelly Ann Underwood + named clinical staff with credentials | Content + Aleksandar | M2 | Page exists; E-E-A-T strength signal added; supports any future LLM-citation strategy | L | pending |
| 19 | Page-level schema refactor Phase 2: per-blog-post MedicalWebPage / BlogPosting on the surviving (KEEP-AUDIT) blog content; per-location Place + MedicalClinic on outpatient pages | On-page | M2 | All retained URLs schema-validate cleanly; entity disambiguation improved across the site | M | pending |
| 20 | Content cluster build: identify the 3-5 highest-priority service clusters (e.g., MAT-related, detox-related, psychiatric-co-occurring). Audit which surviving blog posts cluster under each; rewrite/consolidate to support the renamed `/services/<slug>` pages. Pause speculative new content production | Content + Aleksandar | M2 | 3-5 service clusters defined with their content map; surviving blog inventory categorized; new content scoped against the clusters | L | pending |
| 21 | GBP optimization pass for both Glenville + Troy: photos, posts cadence, Q&A seeding, services list completion, primary + secondary category audit, review-velocity program scoping | GMB team | M2 | Both GBPs sit at HQDM standard for category/services/photos completeness; review-velocity SOP scoped for M3 launch | M | pending |
| 22 | DataForSEO OnPage crawl (KEEP + KEEP-AUDIT scope = 56 URLs) — pull technical SEO audit | Aleksandar + Tech | M2 | Crawl results consumed; specific on-page issues identified for M3 work | H | pending |
| 23 | DataForSEO SERP + Maps + Business Listings pulls (Glenville + Schenectady + Albany + Troy coordinates × 12 priority keywords) | Aleksandar | M2 | Competitor positioning section of strategy doc (Section 4) populated with evidence; competitor backlink mapping (Asana task line 1) becomes actionable | H | pending |
| 24 | **Backlink profile audit (DataForSEO Backlinks)** for coniferpark.com + the 3 confirmed real local competitors from Section 4.2: **sphp.com (St. Peter's Health Partners), hopehouseinc.org (Hope House), newchoicesrecovery.org (New Choices Recovery, Schenectady)**. Add secondaries: berkshiremountaindetox.com (#12.4 avg rank — investigate why so strong organically), www.albanymed.org, theacca.net. | Aleksandar | M2 | Top 5 link opportunities identified per Asana task line 1 ("Map competitor backlink profile vs. Conifer Park"); sphp.com is the priority benchmark | M | pending |

### Month 3 — Expansion + reinforcement + measurement

| # | Action | Dept | Sched | Expected outcome | Attr conf | Aleksa |
|---|---|---|---|---|:-:|:-:|
| 25 | Review-velocity program launch for both GBPs (Glenville + Troy) — POS-based SMS, post-discharge email, in-facility QR. Target: +20 reviews/quarter per GBP | GMB team | M3 | Review velocity measured weekly; Glenville + Troy each gain measurable review count | H | pending |
| 26 | Off-page / link building Phase 1 — execute on top 5 link opportunities identified in M2 #24. Focus on NY recovery community + Capital Region medical citations (BBB Capital Region, NYS OASAS Find a Provider, Psychology Today rehab listings, SAMHSA findtreatment.gov verification, NY recovery community publications) | Off-page (Julce Bartolome) + Aleksandar | M3 | 5 high-quality links acquired; foundational citation gap closed | M | pending |
| 27 | Content cluster execution — Phase 1 published content per the M2 clusters; each piece scoped to support the renamed `/services/<slug>` pages and to link from the most-topically-related surviving blog posts | Content + Aleksa | M3 | First wave of cluster-supporting content live; internal-link rebuild (M1 #8) has the new content woven in | L | pending |
| 28 | LLM visibility probe — DIY pipeline (Perplexity Sonar + ChatGPT API + Gemini API) querying ~15 priority commercial queries with Capital Region geo modifiers, capturing whether Conifer Park is cited and on which queries the AI Overview surfaces | Aleksandar | M3 | First LLM-visibility baseline established; M4 strategy can compare; existing 221 sess/365d from LLM referrals is measurable but limited — informs whether to invest M4+ | L | pending |
| 29 | First strategy → reporting correlation pass — Marija + Aleksandar walk through Q2 actions against Q2 results, using the attribution-confidence flags from this doc. Identifies which strategy items can be reported with H confidence vs which are noise | Reporting (Marija) + Aleksandar | M3 (last week) | First Q2 monthly report published with full action → result correlation; pattern set for Q3 | H | pending |

### Cross-month dependencies

- **M1 #3 (URL rename) gates M1 #5 (meta descriptions) for the affected URLs** — write meta descriptions for the new URLs, not the old. Sequencing: rename + 301 first, then meta descriptions on the canonical.
- **M1 #4 (Troy URL fix) gates M2 #17 (Troy page rewrite)** — rewrite the canonical URL, not the legacy.
- **M2 #22-24 (DataForSEO pulls) gate M3 #26 (link building)** — link opportunities are identified by the DFS competitor pull.
- **M2 #20 (content cluster definition) gates M3 #27 (content cluster execution).**
- **M1 #6 (LD scans) gates the monthly reporting** — without rank tracking the reporting can't show the GBP grid-coverage metric.

### Items NOT in this plan (deliberately)

- **New blog content production at the pre-2026 cadence.** The 433-post backlog is dominated by informational queries that don't ladder up to the buyer (Section 1.7). Until the existing content is clustered (M2 #20), new speculative content production is paused.
- **Major site redesign / homepage rebuild.** The shell is in shape. The findings are architectural debris and routing failures, not a brand or design problem.
- **Joint Commission / CARF accreditation pursuit.** Executive-level decisions for Conifer Park, not HQDM scope. We flag the cost of absence; we don't drive the pursuit.

---

## 6. Reporting hooks (for Marija)

Per the strategy-first reporting rollout, each item in Section 5 must be reportable as **planned → executed → impact**. The attribution-confidence flag (H/M/L) is the honesty signal — high-attribution items get direct credit; medium-attribution items are flagged as "lift correlates with action, can't isolate"; low-attribution items are reported as completed-without-impact-claim.

**Monthly reporting columns this strategy assumes exist in the Reporting Master Sheet:**

| Column | Source |
|---|---|
| Planned Action (from Strategy) | this doc, Section 5 |
| Scheduled Month | this doc |
| Department Owner | this doc |
| Executed Y/N + date | Monthly Execution Log (Asana / Marija update) |
| Expected Outcome | this doc |
| Actual Outcome | reporting pull at end of month |
| Attribution Confidence | this doc (H/M/L) |
| Notes / Anomalies | reporting pull |

**Q2 high-attribution items** (the ones that should be reported as direct cause-effect):
- M1 #1 (`tel:` cleanup) — URL count change is directly measurable in GSC
- M1 #2 (case-normalization) — URL count change is directly measurable
- M1 #4 (Troy URL fix) — page-level conversion rate change post-redirect is observable
- M1 #6 (LD scans) — ranks aren't an action's outcome, they're the measurement tool the action enables
- M1 #10 (bot filtering) — directly observable in GA4 traffic numbers
- M1 #11 (title fix) — directly observable in SERP rendering
- M2 #22-23 (DataForSEO pulls) — output is the evidence
- M3 #25 (review velocity) — directly counted in GBP

**Q2 medium-attribution items** (lift correlates, can't fully isolate):
- M1 #3, #8 (service URL refactor + internal-link rebuild) — service-page sessions lifting is the signal
- M1 #5 (meta descriptions) — SERP CTR change at the page level
- M1 #7 (schema refactor) — Google rich-result eligibility (or rare AI Overview surface) post-deploy
- M1 #12 (suburb page deletion) — sitewide quality-signal pattern; can't directly attribute organic recovery to deletion alone
- M1 #13 (insurance payor list) — /admissions conversion rate change
- M2 #16-17 (Schenectady + Troy page rewrites) — page-level conversion rate change
- M2 #21 (GBP optimization) — Maps grid-coverage change measured by LD

**Q2 low-attribution items** (completed without direct-credit claim):
- M1 #14 (cross-client referrer note) — context, not action
- M2 #18 (clinical team page) — E-E-A-T support, ungauged
- M2 #20 (content cluster definition) — preparation work
- M3 #27 (cluster content publication) — first wave; impact materializes in Q3
- M3 #28 (LLM visibility probe) — baseline establishment

---

## 7. Pending data + open questions

### Data still pending (in priority order)

1. ✅ **DONE 2026-05-11** — DataForSEO SERP (25 priority queries × Albany-Schenectady-Troy DMA) → Section 4.1-4.3
2. ✅ **DONE 2026-05-11** — DataForSEO Maps SERP (12 anchors × 4 Capital Region coords) → Section 4.4
3. ✅ **DONE 2026-05-11** — DataForSEO Business Data (5/7 GBPs returned; 2 timed out) → Sections 4.5-4.6
4. ✅ **DONE 2026-05-11** — DataForSEO Competitors Domain + Domain Intersection (results in Section 4.2; aggregator-heavy raw output filtered manually because the framework's `filter_real_competitors` missed addictioncenter.com / americanaddictioncenters.org / therecoveryvillage.com)
5. ⏳ **OnPage crawl unreliable for this site** — DataForSEO Instant Pages doesn't execute JavaScript by default and Conifer Park's Webflow shell renders titles + descriptions + schema via JS bundles. All 46 crawled URLs returned empty titles/descriptions in the OnPage output despite the raw HTML clearly carrying them. **Solution**: re-run with `enable_javascript: true` (more expensive) OR rely on the raw HTTP + regex audit already in `clients/coniferpark/exports/pages_raw/` for on-page diagnostics. Confirmed via direct comparison: raw HTML has titles + JSON-LD; OnPage parse shows none.
6. ⏳ **DataForSEO Backlinks pulls** for coniferpark.com + top 3 REAL competitors (sphp.com, hopehouseinc.org, newchoicesrecovery.org). Gates M2 #24 (link opportunity identification). Est. cost ~$0.05.
7. ⏳ **Re-pull St. Peter's Addiction Recovery + Hope House GBPs** (async tasks timed out). Gates full Section 4.6.
8. ⏳ **Manual GSC exports** — Coverage, Crawl Stats (specifically: was there a Mar-Apr crawl-budget shift like Surfpoint had?), Top Target Pages.
9. ⏳ **Local Dominator first scans** for both GBPs at the priority keywords confirmed by Section 4. M1 priority.
10. ⏳ **Direct GBP audit** for both Glenville + Troy GBPs (per `scripts/methodology/gbp-manager-audit.md` SOP) — for secondary categories (DFS lookup didn't return them), services list completeness, attributes audit beyond "wheelchair accessible."

*Phase 2 spend total: $0.71 ($0.67 orchestrator + $0.04 Maps SERP + $0.11 GMB Business Data + $0.00 was the pre-existing $4.59 cumulative across other clients prior to this session). Combined: $5.41 cumulative DataForSEO spend across all HQDM Recovery work to date.*
5. **Manual GSC exports** — Coverage (the deindexation event check), Crawl Stats (whether the Mar-Apr crawl budget shifted as it did for Surfpoint), Top Target Pages.
6. **Local Dominator first scan** for both GBPs (12 keywords × 2 grids = 2 scans). Gates monthly reporting.
7. **Confirm OASAS license status** for the 5 non-HQDM-supported outpatient locations on the site (Schenectady, Glens Falls, Plattsburgh, Syracuse, Rochester). Each should have its own Operating Certificate; verify they exist before any site-wide cleanup deletes content that has compliance value.
8. **GBP direct audit** for both Glenville + Troy GBPs (per `scripts/methodology/gbp-manager-audit.md` SOP).

### Open questions

1. **HQDM scope confirmation.** The Recovery roster lists "Conifer Park" + "Conifer Park - Outpatient (Troy)" as separate accounts. The site hosts 7 surfaces (Glenville inpatient + 6 outpatient). Is HQDM scope strictly the 2 named GBPs and their associated pages, or does the engagement cover the full site? **Strategy assumes:** site-wide changes that affect all 7 surfaces are in scope (cleanup playbook, schema refactor, sitewide meta descriptions). Per-page rewrite work outside Glenville + Troy is held until scope is confirmed.
2. **Joint Commission / CARF pursuit decision.** Strategy flags the trust-signal cost of absence but does not assume pursuit. Confirm with Conifer Park whether they're already in process, dismissed it, or want HQDM to advise on initiation.
3. **Asana Lead.** Per the Recovery roster Conifer Park has no Asana lead currently listed. Confirm with Milica / Mario who's owning the account day-to-day to align M2 executions on the Asana side.
4. **`armsacres.com → coniferpark.com` referrer.** 52 sessions in 365d. Likely a single article link. Worth identifying the source for inter-client awareness — does the Arms Acres content link to a Conifer Park resource intentionally or via legacy content? Action assigned to Aleksandar in M1 #14.
5. **Tier A suburb pages.** ~5 of the 71 doorways target real adjacent towns with measurable click pull (Scotia, Albany, Clifton Park, etc.). Decision required: rewrite into real `/service-areas/<town>` assets (preserves the click pull) OR fold the content into the main `/service-areas` page and 301 the doorways. Held for M2 evaluation pending DataForSEO competitor pull.
6. **Mario context.** Pre-2026 HQDM strategy history for Conifer Park — what's been tried, what worked, what didn't. The decision matrix output reflects current state but not the prior-strategy trajectory.

---

## Appendix A — Decision matrix output reference

Full per-URL output: `clients/coniferpark/exports/decision_matrix.csv` (771 URLs, 24 columns, bucket assignments + reasoning per URL).

Topical-enriched output: `clients/coniferpark/exports/decision_matrix_with_topical.csv` (same rows + topical-cluster column where available).

## Appendix B — Data sources tapped for this draft

- **GSC (via info@-scoped OAuth):** pages_last_{30,90,180,365}d, queries_last_{30,90,180,365}d, weekly 16wk, sitemap inventory, branded-vs-nonbranded segmentation
- **GA4 (via info@-scoped OAuth):** pages_last_{30,90,180,365}d, acquisition_last_{30,90,180,365}d, new-vs-returning, geography_last_90d, events_last_90d, conversion_events_last_90d, llm_referrer_summary_90d, pages_weekly_16wk
- **Live HTML fetches:** 23 priority pages via `curl` to `clients/coniferpark/exports/pages_raw/`
- **Schema audit:** Python regex extraction across the 23 fetched HTMLs, JSON-LD `@graph` parse + per-page type enumeration
- **Sitemap inventory:** XML fetch + 535-URL count per pattern
- **Web research:** sub-agent compilation of business facts (founded date, parent organization, location addresses, OASAS license, accreditation status, GBP details)

## Appendix C — Out-of-scope notes

This is **internal-only**. Same as the Surfpoint + Arms Acres drafts. Not client-facing.

Strategy decisions are tied to HQDM SOPs where possible. New SOPs that this strategy implies don't yet exist:
- **Strategy-doc-driven URL refactor SOP.** Sequencing legacy → new URL rename plus its 301 plus its sitemap update plus its internal-link rewrite is non-trivial; needs a checklist.
- **`tel:` URL pollution diagnostic SOP.** This is the second client where a `tel:`-as-relative-path pattern has surfaced (Arms Acres had broken `tel:` links going to the wrong number — different mechanism, same family of issue). Worth a diagnostic SOP for future audits.
- **Page-level schema refactor SOP for clients with existing strong global @graph.** The Arms Acres / Surfpoint schema work was deployment-from-scratch. Conifer Park is a refactor — different SOP.

Flagging these for the Q3 SOP-development cycle of Milica's rollout (Phase 2 = SOP + system).
