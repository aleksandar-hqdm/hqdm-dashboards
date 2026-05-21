# Arms Acres — Q2 2026 Custom SEO Strategy

**Client:** Arms Acres (Drug + Alcohol Addiction Treatment, OASAS-licensed + Joint Commission-accredited, founded 1982, employee-owned, 191-bed facility)
**Inpatient facility:** 75 Seminary Hill Road, Carmel NY 10512 (Carmel Hamlet, Putnam County / Hudson Valley)
**Outpatient locations:** Carmel NY, Bronx NY, Queens NY
**Strategy cycle:** Q2 2026 — second client in HQDM's strategy-first reporting rollout (after Surfpoint Recovery, 2026-05-08)
**Owner:** Aleksandar Spasevski, Head of Search Intelligence
**Date:** 2026-05-11
**Status:** Draft — internal execution strategy for HQDM team (not client-facing)

---

## Executive Summary

> **Arms Acres has the traffic. It does not have the conversion architecture to capture it on the page where the traffic lands.** 167,798 sessions and 531 conversions in 365d — but **97% of GA4-attributed conversions concentrate on just three pages (home + contact + admissions)** because those are the only three pages that host the 4-input intake form. The 6 service pages bring in ~24,000 sessions of high-engagement traffic and show zero *directly-attributed* conversions, but a portion of those visitors click "Start your treatment here" → /contact and convert there (credit goes to /contact). At the site-wide 0.32% conv rate, the service pages are referring an estimated **~76 conversions/year** that are currently invisible to page-level reporting — 14% of total site conversions originating from a page surface that the data makes look like a dead zone. The Webflow template for the 4-input intake form exists; it was never deployed to service pages. The single highest-leverage M1 fix is deploying it: this both **(a)** captures the navigation-leakage on visitors who don't click through and **(b)** lifts the page-level conversion rate above the referred-baseline by removing the inter-page step. The fix is an attribution + lift play, not a "make a dead page convert" play. In parallel, the site carries three indexable-doorway exposures (71 templated "suburb" pages, 4 city-modifier service duplicates, and one wrong-brand boilerplate string sitting on the homepage og:description) plus a near-total schema gap (Organization only on homepage, zero JSON-LD on service / location / blog). The Q2 plan is asymmetric: rebuild the conversion-capture layer on existing service pages first, clean up the doorway/duplicate exposure in parallel, then layer on schema + topical-cluster content + competitive positioning.

### Five headline findings

1. **Service pages bring 24,000+ sessions per year — zero directly-attributed conversions, ~76 estimated referred conversions/year.** The 6 service pages (`/inpatient`, `/inpatient/detox-program`, `/inpatient/adult-rehabilitation`, `/outpatient/carmel-outpatient`, `/outpatient/bronx-outpatient`, `/outpatient/queens-outpatient`) carry **5,938 / 4,770 / 4,032 / 3,192 / 2,902 / 2,772 sessions in 365d** with engagement rates of **49.4% / 63.6% / 58.9% / 55.2% / 55.1% / 57.2%** and average durations of **64–131 seconds**. Combined: **~23,600 sessions, 1 directly-attributed conversion**. The pages are not non-converting — they have no on-page conversion element and refer visitors via the hero CTA to /contact, where form_submit fires and credit lands. Applying the site-wide 0.32% conv rate as a conservative referral-attribution floor: **~76 estimated conversions/year originate from service-page traffic**. (Tighter funnel estimate using /contact's 3.97% CR × an assumed 10% service-page → /contact CTR ≈ 0.40% — same order of magnitude as the floor.)

   The conversion architecture is **partially functional but structurally and operationally broken**:
   - **No inline intake form on the page itself.** The only on-page form is a footer newsletter widget (`id="email-form"`, single email field, label "Subscribe"). The 4-input intake form (Name + Email + Phone + Message) exists only on home, /admissions, and /contact.
   - **Hero CTA "Start your treatment here" → /contact** is present on 5 of 6 service pages (missing on `/inpatient` root). When clicked, conversion fires on /contact and is credited to /contact — the service page gets credit for the session but not the conversion (the +222 conversions on /contact partially come from this flow).
   - **"Call Us" button at the end of each page** is the user-mystery one — and on the 3 outpatient pages it dials a wrong number: visible text says "718-520-1513" (Bronx) / "718-653-1537" (Queens) / "845-225-5202" (Carmel), but the underlying `tel:` link on all three goes to **`tel:7178961880`** — a Pennsylvania-area-code number (717-896-1880). Anyone tapping "Call Us" on an outpatient page calls a wrong number, conversion never happens. The inpatient pages dial correctly (888-227-4641 + 845-225-3400), though `/inpatient/detox-program` and `/inpatient/adult-rehabilitation` show a visible-text typo ("845-227-4641" — number doesn't exist; tel: link correctly goes to 845-225-3400).
   - **Tap-to-call is not tracked as a conversion** — `click` event count site-wide is 988 in 90d, so any successful tap-to-call from an inpatient page is unmeasured.

   **Page-level directly-attributed conversion rates** (what GA4 reports today): 0.004% on service pages vs 0.71% on home vs 3.97% on /contact vs 2.99% on /admissions. The service-page rate is artificially zero because there is no on-page form to fire form_submit on — the conversion fires downstream and credit follows the form. **Page-level effective conversion rate** (referred attribution): ~0.32% on service pages (site-wide floor), and likely higher on the inpatient pages where intent is closer to bottom-funnel. The structural fix is twofold: (a) deploy the inline intake form on all 6 service pages so conversion can fire *on* the service page (lift estimate: +200–470 conv/year on a 1–2% page-level target, of which **~76 conv/year is attribution recapture** — already happening, just credited to /contact — and **~125–400 conv/year is genuine net new** from visitors who don't click through to /contact today), and (b) fix the broken outpatient `tel:` links so the phone path actually works. Item (b) is a 30-minute Webflow edit; item (a) is the bigger lift.

2. **Top 3 pages drive 97% of all 531 annual conversions.** Home: 231 conv / 32,555 sess. /contact: 222 conv / 5,588 sess. /admissions: 63 conv / 2,107 sess. **Everything else combined: ~15 conv.** The dominant conversion event (170 of 178 90-day conversions = 96%) is `form_submit`. Tap-to-call events are not tracked as conversions — the `click` event count site-wide is 988 in 90d, so any visitor who taps a phone link from a service page is invisible. Secondary signal: of the 522 form_starts in 90d, only 170 complete = **33% form-completion rate** — a separate field-level CRO issue (likely the required Phone field).

3. **Three indexable doorway / duplication exposures.** (a) 71 templated `/suburb/` pages target small CDPs ("Holistic Addiction Treatment Center in Carmel Hamlet, NY", "Effective Rehab Center in Kent Lakes NY") with shared boilerplate text — they pull 348 clicks / 127K impressions / 365d (0.27% CTR), so they're not delivering value but they are *exposure*. (b) 4 of 5 `/service/` pages have city-modifier duplicates at `/service/<name>-in-carmel-hamlet-ny` (equine therapy, fitness/recreation, MAT, psychiatric) with 39% body-text similarity to their non-suffixed originals — both indexable, internal cannibalization. (c) The homepage `og:description` meta tag contains the literal text **"Bold Steps Behavioral Health is the best drug rehab in Harrisburg PA that empowers people struggling with behavioral health and substance abuse issues."** — wrong-brand boilerplate, live in production. (Confirmed via raw HTTP fetch + regex against homepage HTML — not WebFetch, which would have missed it.)

4. **Schema deployment is bare; meta descriptions are empty.** Homepage carries only `Organization` JSON-LD (no `MedicalBusiness`, `MedicalClinic`, or `LocalBusiness`). The 6 service pages have **zero JSON-LD**. The 3 outpatient location pages have **zero JSON-LD**. The 469 blog posts have **zero `Article` / `BlogPosting`**. The `<meta name="description">` tag is empty across all 19 non-homepage URLs sampled (raw HTML). This is unrecovered schema surface area in a YMYL vertical where Google weighs structured-data signals heavily for trust + clinical context. Also missing: review aggregate (the /reviews page renders no JSON-LD), team/author pages (none exist).

5. **Arms Acres ranks nowhere in the top 30 organic for any of 26 priority geo-anchored commercial queries** (DataForSEO Live SERP, US-default location). The clicks the site does get from organic come almost entirely from informational blog content — three-quarters of all 14.5M impressions / 365d come from the blog. Top blog pages are pulling massive impressions on questions that have no commercial intent for Arms Acres: "mix alcohol and tylenol" (767K imp), "hiccups when drunk" (692K imp), "diflucan and alcohol" (302K imp), "valtrex and alcohol" (143K imp). These pages drive ~zero conversions (Organic Search converts at 0.025% non-GBP).

6. **GBP reality is worse than expected.** Two claimed Arms Acres GBP listings exist (DataForSEO Business Listings + Maps SERP 2026-05-11):
   - **Inpatient main** ("Arms Acres: Inpatient Addiction Treatment | Drug & Alcohol Detox Center In New York") at 75 Seminary Hill Rd, Carmel: **3.2★ / 128 reviews**. Category: Addiction treatment center + 4 secondary categories. Claimed. Place ID `ChIJwdGAVwxN3YkR9n3sBY9ccZY`.
   - **Outpatient Carmel** titled **"Arm Acres Outpatient Clinic - Carmel NY"** (missing the "s" in the brand name) at 21 Old Rte 6, Carmel: **3.3★ / 7 reviews**. Category: Addiction treatment center, no secondary categories. Claimed. Place ID `ChIJ-9-BhN5N3YkR6pyWXMLweIk`.

   Three compounding issues:
   - **Brand name is misspelled on the outpatient GBP** ("Arm Acres" vs "Arms Acres") — splits brand-search attribution and signals operational neglect to Google
   - **Both Carmel GBPs sit at 3.2–3.3 stars** — for a 40+-year-old OASAS-licensed Joint-Commission-accredited 191-bed institution this is a reputation crisis; review velocity has clearly never been a programmatic priority
   - **The outpatient location has only 7 reviews after years of operation** — likely the result of no review-generation program

   At Carmel coordinates the misspelled outpatient GBP ranks #1 across 10 priority queries — not because the listing is strong but because the local competitive set in Putnam County is thin (the #1 organic competitor at Carmel coords is the Arm Acres outpatient itself; #2 for `detox` is ShopRite of Carmel, a grocery store).

7. **GBP map-pack reality — all 4 locations now confirmed (2026-05-11, corrected from earlier draft):** Arms Acres operates **4 claimed GBPs** — I missed the Queens listing in my initial DataForSEO Business Listings search. Direct visual verification surfaced it. Updated picture:

   | GBP | Address | Rating | Reviews | Status | Phone |
   |---|---|:---:|:---:|---|---|
   | Inpatient main | 75 Seminary Hill Rd, Carmel Hamlet NY 10512 | **3.2★** | **133** | Open 24h, claimed, 4 secondary categories | 888-227-4641 |
   | Carmel outpatient | 21 Old Rte 6, Carmel Hamlet NY 10512 | 3.3★ | **7** | claimed; **brand misspelled as "Arm Acres" (missing 's')** | 845-225-5202 |
   | **Bronx outpatient** | **3584 Jerome Ave, Bronx NY 10467** | 3.4★ | 9 | claimed, exists, but **not ranking in top 30** for Bronx queries | 718-653-1537 |
   | **Queens outpatient** | **90-02 161st St, Jamaica NY 11432** | **2.2★** | **16** | claimed, exists, but **not ranking** + **lowest rating of all 4** — reputation crisis | 718-520-1513 |

   Critical issues compound:
   - **All 4 GBPs are below 4★.** Inpatient at 3.2 / 133 reviews after 40+ years of operation is the largest single reputation gap. Queens at 2.2★ is the most acute.
   - **Carmel outpatient brand name is misspelled** ("Arm Acres") — signals operational neglect to Google and splits brand-search attribution.
   - **Bronx + Queens have empty secondary categories.** Inpatient has 4 (Alcoholism treatment program, Mental health clinic, Mental health service, Rehabilitation center) — outpatients have **none**.
   - **Bronx + Queens GBPs are invisible in their local-pack queries** despite being claimed. At Bronx coords, top-1 is `Bronx Recovery` (4.6★/9rev); at Queens coords, top-1 is `Cornerstone of Medical Arts Center` (4.1★/203rev). Both are realistically displaceable through review-velocity + category-completion work — but the gap is wide.

   The reframe: **the M1 GMB action set is not "claim missing GBPs" — it's "fix the 4 GBPs that exist".** Specifically: (a) fix Carmel outpatient spelling; (b) add 4 secondary categories to each outpatient (mirror the inpatient set); (c) launch programmatic review-velocity work prioritizing Queens (2.2★) → Carmel outpatient (7 reviews) → Inpatient (3.2★/133); (d) audit photo / Q&A / posts / service-list completeness on each.

8. **Website displays the WRONG phone numbers on Bronx + Queens outpatient pages — they're cross-swapped, AND the `tel:` link goes to a Pennsylvania number.** Triple-compounding bug:

   | Page | Visible "Call Us" text shown to user | tel: link dials | Correct phone (per GBP) |
   |---|---|---|---|
   | `/outpatient/bronx-outpatient` | **718-520-1513** (this is the Queens phone) | **`tel:7178961880`** (Pennsylvania) | Should be **718-653-1537** |
   | `/outpatient/queens-outpatient` | **718-653-1537** (this is the Bronx phone) | **`tel:7178961880`** (Pennsylvania) | Should be **718-520-1513** |
   | `/outpatient/carmel-outpatient` | 845-225-5202 (correct) | **`tel:7178961880`** (Pennsylvania) | tel: should be 845-225-5202 |

   Net effect: a Bronx visitor sees the Queens phone displayed → calls the Pennsylvania number → conversation lost / wrong-number disconnect. Same shape for Queens visitor. **Both displayed text AND tel: link are wrong on all 3 outpatient pages.** The Carmel outpatient page has correct display text but the tel: link still dials Pennsylvania. This is an M1 action #1a expansion — not just "fix broken tel: links" but "fix the displayed phone numbers, which are swapped between Bronx and Queens pages".

### Strategic Focus statement

> *Push **inpatient detox + adult rehab + MAT** as the Carmel/Hudson Valley anchor and **outpatient (Carmel / Bronx / Queens)** as the NYC-side expansion, by **(a) deploying the 4-input intake form to all 6 service pages immediately to fix the catastrophic CRO gap, (b) fixing the GBP misspelling + launching a review-velocity program to lift the 3.2★ inpatient + 3.3★ outpatient ratings, (c) auditing whether claimed Bronx + Queens outpatient GBPs exist (or building the case for new claims) since both outpatient locations are currently invisible in the map pack, (d) replacing the wrong-brand `og:description` and building out LocalBusiness / MedicalClinic / Service schema, (e) rebuilding the 6 service-page narratives with insurance disclosure + trust signals (OASAS, Joint Commission, 1982 founded, 191-bed, employee-owned) currently missing, and (f) clustering the legit core-topic blog content under the service pages to harvest topical authority that's currently uncaptured**. In parallel, **delete the 71 suburb doorway pages and 301 the 4 city-modifier service duplicates to remove the doorway-page exposure**. Lean on **the brand-aware Direct + GMB-click channel** (51,739 sess / 259 conv + 5,411 sess / 43 conv 365d = ~57K sess / 302 conv = 57% of all conversions) as the resilience layer keeping revenue flowing during the rebuild — but recognize that the channel is at-risk because the underlying GBPs have weak ratings.*

### Top 7 Month 1 actions

| # | Action | Why this is M1 priority | Department owner |
|---|---|---|---|
| 1 | **Deploy the 4-input intake form (Name + Email + Phone + Message — same Webflow template currently on home / admissions / contact) to all 6 service pages** | Single largest leverage in the entire site. Adds the conversion-capture layer to 24,000+ existing high-engagement annual sessions. The pages are already referring an estimated ~76 conv/year to /contact (sess × 0.32% site CR) — this fix **(a)** recaptures that attribution on-page so reporting is honest and **(b)** lifts effective CR from the ~0.32% referred-floor toward a 1–2% on-page target. At 2% page-level rate that's +396 net new conv/year against a 531-baseline — ~75% lift. | On-page (Aleksa Popovic) with web/dev support |
| 1a | **Fix the phone-number mess on outpatient pages (triple bug):** (i) Displayed text on `/outpatient/bronx-outpatient` shows the Queens number (718-520-1513) — should show **718-653-1537**; (ii) Displayed text on `/outpatient/queens-outpatient` shows the Bronx number (718-653-1537) — should show **718-520-1513**; (iii) all 3 outpatient pages' `tel:` links point to a Pennsylvania number (`tel:7178961880`) — should match the GBP-canonical number for each page. **Verify against GBP:** Bronx GBP phone 718-653-1537 (3584 Jerome Ave) ; Queens GBP phone 718-520-1513 (90-02 161st St Jamaica) ; Carmel outpatient GBP phone 845-225-5202 (21 Old Rte 6). Also fix the visible-text phone typo on `/inpatient/detox-program` + `/inpatient/adult-rehabilitation` ("Call Us 845-227-4641" → "845-225-3400"). | Critical mid-funnel bug — every visitor sees the WRONG local number AND any tap-to-call dials a Pennsylvania number. Conversion path is doubly broken. ~30-minute Webflow edit, zero risk. | On-page (Aleksa) |
| 1b | **Delete the 10 legacy sitemaps from GSC** (`/sitemap/sitemap1.xml` through `/sitemap/sitemap10.xml`, last downloaded April 2018, collectively claiming ~103,000 URLs of which 13 are indexed) | 8-year-old sitemaps are a site-quality-signal disaster: they tell Google "we have 100K URLs" when the site has 529. 5-minute fix in GSC UI (Settings → Sitemaps → Remove). High-leverage, zero risk — these sitemap paths return 404 on the live site already. | On-page (Aleksa) — has GSC access |
| 1c | **File disavow against active PBN attack** — 5 `seo-anomaly-s*.xyz` domains (spam scores 73–99, first seen April-May 2026) + 7 nonsense `blogspot.com` PBN domains. Use Google Search Console Disavow Tool. | Active toxic backlink attack in progress over the last 4 weeks — either negative SEO from a competitor or stale PBN network re-activating. 30-minute file generation + 5-minute disavow submission. | Off-page (Julce) — file the disavow.txt |
| 1d | **Fix the 12 broken KEEP+KEEP-AUDIT URLs surfaced by DataForSEO OnPage** (per Section 1.6a): (i) Decide on the 5 removed-program URLs — restore or 301-to-closest-equivalent (`/inpatient/young-adult-services`, `/inpatient/veteran-substance-abuse-program`, `/service/family-treatment-program` + carmel-hamlet duplicate, `/service/conferences-and-education`); (ii) 301 the 5 alias URLs (`/contact-us` → `/contact`, `/admissions.html` → `/admissions`, `/admissions/insurance` to admissions or contact, `/contact-me` and `/contactus` to `/contact`); (iii) Fix Webflow tel: URL bug on `/outpatient/carmel-outpatient` and `/services` (links rendered as relative URLs instead of `tel:` protocol — same root cause as M1 #1a tel: links). | These URLs are in GSC's index because Google crawled them via internal links or old sitemaps. They contribute to the 8.47% 404 rate from Crawl Stats. Fix in one Webflow pass + GSC URL Inspection re-submit. | On-page (Aleksa) |
| 1e | **Delete or NOINDEX the 3 off-topic blog posts with NO title** flagged by OnPage: `/blog/list-of-celebrities-who-died-overdose`, `/blog/valtrex-valacyclovir-and-alcohol`, `/blog/alcohol-while-taking-macrobid`. All 3 are also off-topic per the topical-overlay analysis (Section 1.5). Easy unanimous decision. | These pages exist with zero `<title>` tag — both an on-page error and an off-topic content fit. Quick win. | On-page (Aleksa) |
| 2 | **Replace the wrong-brand `og:description` boilerplate on homepage + audit all `og:` / `meta description` site-wide; write proper meta descriptions for the 19 sampled empty URLs (homepage + service + location + core)** | Wrong-brand boilerplate is a quality + reputation signal failure. Empty meta descriptions on commercial pages = Google fills it from on-page text and the brand surrenders SERP snippet control. | On-page (Aleksa Popovic) |
| 3 | **301 the 4 `/service/<name>-in-carmel-hamlet-ny` duplicates to their non-suffixed originals; remove from sitemap** | Resolves internal cannibalization that's already costing the canonical service pages organic equity. Low effort, immediately reversible. | On-page (Aleksa Popovic) + Tech |
| 4 | **Begin retirement of the 71 `/suburb/` doorway pages — confirm none rank for a converting query, then DELETE+REDIRECT to `/service-areas` or `/outpatient/<closest-location>`** | Reduces sitewide doorway-page exposure, removes a Google quality-systems risk surface, consolidates link equity onto pages that actually serve buyers. 365d data: 348 clicks / 127K imp / 0 directly-attributed conv. Even applying the referred-attribution test (clicks × 0.32% site CR ≈ **1.1 effective referred conv/year**), the retained value is below noise — and 301-redirecting to `/service-areas` preserves that floor on the redirect target. Effectively zero downside. | On-page (Aleksa Popovic) + Tech |
| 5 | **Schema deployment Phase 1 — model from Ascendant NY + Mountainside (reference URLs in Section 1.7a)**: Homepage `MedicalClinic` + `LocalBusiness` + `Place` (Ascendant model) ; service pages `MedicalWebPage` + `BreadcrumbList` + `FAQPage` (Mountainside MAT model) ; outpatient pages `MedicalBusiness` (each = separate location) ; admissions + reviews + homepage `AggregateRating` + 5+ `Review` blocks (Ascendant model). | Closes the largest single schema gap vs converting competitors. Recovery vertical has zero AI Overview presence today, but Ascendant + Mountainside demonstrate the schema stack that builds LLM-citation eligibility + traditional rich-result eligibility. Validate via HQDM 3-layer pre-deploy gate per SOP. | On-page (Aleksa Popovic) |
| 6 | **GMB correction package — all 4 GBPs need work (revised 2026-05-11):** (a) fix "Arm Acres" → "Arms Acres" spelling on the Carmel outpatient GBP; (b) add 4 secondary categories to each of the 3 outpatient GBPs (currently empty — mirror inpatient's set: Alcoholism treatment program, Mental health clinic, Mental health service, Rehabilitation center); (c) launch programmatic **review-velocity SOP** prioritized by acuity: **Queens 2.2★/16 first (most acute)** → Carmel outpatient 7 reviews → Inpatient 3.2★/133 → Bronx 3.4★/9; (d) photo + Q&A + post-cadence + services-list completeness audit on each of the 4 GBPs (only inpatient has Services listed); (e) GBP-linked NAP audit (website pages currently display WRONG phones — see action #1a). | The Maps channel converts at 1.96% organic + 0.79% click-tagged. All 4 GBPs are below 4★. Queens 2.2★ is the single most-acute reputation crisis. Audit + corrections package; HQDM GMB team executes. | GMB team (audit owned by Aleksandar; corrections land on GMB dept) |
| 7 | **Add tap-to-call event tracking + form-funnel field-level analysis** | Tap-to-call clicks are currently invisible to GA4 (`click` event = 988 site-wide 90d), which means a non-trivial conversion path is uncounted. Form_start → form_submit completion is 33% — the field abandoning needs identification (likely Phone). Both are measurement-and-CRO fixes that gate the visibility of all other M1+M2 work. | Tech / On-page |

---

## 1. Current State Diagnosis

### 1.1 Traffic + conversion shape

**GA4 — 365 days:**

| Metric | Value |
|---|---:|
| Total sessions | 167,798 |
| Total conversions | 531 |
| Site-wide conv rate | **0.32%** |
| Pages with any sessions | 772 |
| Pages with any conversions | ~20 |

**Conversion event mix (90d):**

| Event | Count | Notes |
|---|---:|---|
| form_submit (the conversion) | 170 | **96% of all 178 90d conversions** |
| form_start | 522 | 33% form-completion rate (170/522) |
| user_engagement | 19,898 | – |
| click | 988 | Tap-to-call NOT a conversion event |
| file_download | 35 | – |

**Conversion concentration by page (365d):**

| Page | Sessions | Conv | Conv Rate |
|---|---:|---:|---:|
| / (home) | 32,555 | **231** | 0.71% |
| /contact | 5,588 | **222** | 3.97% |
| /admissions | 2,107 | **63** | 2.99% |
| /careers | 3,519 | 10 | 0.28% (probably noise — careers shouldn't convert) |
| /services | 2,110 | 1 | 0.05% |
| /inpatient/detox-program | 4,770 | 1 | 0.02% |
| /outpatient/carmel-outpatient | 3,192 | 0 | 0.00% |
| /inpatient | 5,938 | 0 | 0.00% |
| /inpatient/adult-rehabilitation | 4,032 | 0 | 0.00% |
| /outpatient/bronx-outpatient | 2,902 | 0 | 0.00% |
| /outpatient/queens-outpatient | 2,772 | 0 | 0.00% |
| Blog (top 20 individual posts, each) | 2,000–9,000 each | 0 | 0.00% |

**Read (page-level directly-attributed):** 516 of 531 (97%) conversions concentrate on the top 3 pages — because those three pages are the only ones hosting the 4-input intake form. The remaining 469 blog posts + 6 service pages + 3 outpatient pages have no on-page form, so their visitors' conversions fire on /contact or /admissions and credit lands there.

**Read (page-level effective via referral, conservative site-CR% floor):** applying the 0.32% site-wide CR to each page's session count:

| Page bucket | Sessions | Directly-attributed conv | Estimated referred conv (sess × 0.32%) | Read |
|---|---:|---:|---:|---|
| 6 service pages | 23,606 | 1 | **~76** | The "0 conv" framing was a measurement artifact, not a behavior signal |
| Blog (top 469 posts) | ~140,000 | ~0 | **~450** | The blog IS referring conversions — undercredited by orders of magnitude |
| Service + outpatient (full 9) | ~23,600 | 1 | ~76 | Same dynamic, same fix |

The reframe matters because **none of these pages are "non-converting"** — they're all referring conversions to /contact and /admissions where the form is. The CRO work is **(a) deploying on-page conversion elements so attribution surfaces** (and so visitors who don't navigate to /contact still convert) and **(b) improving the internal-link path from these pages into the funnel**. It is *not* writing off these pages as dead. The same logic applies to the suburb doorways (Section 1.5) and core-topic blog posts (Section 1.5 audit) — apply traffic × CR% before deciding to delete on conversion grounds.

### 1.2 The service-page conversion gap (the diagnosis)

Hypothesis tested: *Service pages show 0 directly-attributed conversions not because they don't convert, but because (a) they lack an on-page intake form, (b) the form they do have is a newsletter, (c) GA4 credits conversions to wherever form_submit fires — which is /contact or /admissions after the visitor clicks the hero CTA and navigates away.* The pages ARE converting; the attribution lands on the next URL.

Confirmation: raw HTML inspection of every service page returned the same result — `<form id="email-form" class="footer8_form" method="get">` with a single `<input name="Email 2">`. Submit label: blank. Form text: "subscribe". This is identical across all 6 service pages.

The 4-input intake form (`<form id="wf-form-Application" class="contact7_form contact" method="get">` with Name + Email + Phone + Message + Continue button) appears on home, /admissions, and /contact only.

The Webflow template for the intake form is reusable. Adding it as a section block on each service page is a standard Webflow component-paste operation — no engineering build required. The reason it was never deployed to service pages appears to be a templating choice when those pages were initially built, not a technical limitation.

**Quantification of expected lift (conservative):**

| Service page | Sessions (365d) | Directly-attributed conv | Est. referred conv (sess × 0.32%) | Est. conv at 2% on-page rate | Net new lift (target − referred) |
|---|---:|---:|---:|---:|---:|
| /inpatient | 5,938 | 0 | 19 | 119 | +100 |
| /inpatient/detox-program | 4,770 | 1 | 15 | 95 | +79 |
| /inpatient/adult-rehabilitation | 4,032 | 0 | 13 | 81 | +68 |
| /outpatient/carmel-outpatient | 3,192 | 0 | 10 | 64 | +54 |
| /outpatient/bronx-outpatient | 2,902 | 0 | 9 | 58 | +49 |
| /outpatient/queens-outpatient | 2,772 | 0 | 9 | 55 | +46 |
| **Total** | **23,606** | **1** | **~76** | **472** | **+396 net new** (plus ~76 in attribution recapture) |

Two ways to read the lift:
- **Net new conversions** (visitors who would NOT have navigated to /contact without an on-page form): +396 conv/year at a 2% target rate ≈ **+75% on the 531-baseline**.
- **Attribution recapture** (visitors who currently DO navigate to /contact and convert there, but would convert on-page if the form existed): ~76 conv/year shift in page-level credit — no change in total site conversions, but reporting becomes accurate and the page-level CR becomes legible.

A 2% page-level conversion rate is conservative (homepage runs 0.71% with weaker intent; /contact + /admissions run 3-4% with downstream intent). Service pages should land between those bounds — engaged visitors reading clinical content with their specific service in mind. Even at 1% page-level rate the net new is +160 = +30% lift.

### 1.3 Brand vs non-brand split + channel mix

**GSC — branded vs non-branded (365d):**

| Classification | Queries | Impressions | Clicks | CTR | Imp Share | Click Share |
|---|---:|---:|---:|---:|---:|---:|
| Non-branded | 224,790 | 5,089,634 | 17,133 | **0.34%** | 98.6% | **59.8%** |
| Branded | 216 | 72,171 | 11,532 | **15.98%** | 1.4% | **40.2%** |

**Read:** Branded queries get 1.4% of impressions but 40.2% of clicks. Non-branded queries account for 98.6% of impressions but only 60% of clicks at a 0.34% CTR — Arms Acres is showing up for non-brand queries (largely informational blog) but rarely getting the click, because the position is mid-page-1-to-mid-page-2 and the snippet is weak (empty meta description = Google-generated).

**GA4 — acquisition (365d):**

| Channel | Sessions | Conv | Conv Rate | Notes |
|---|---:|---:|---:|---|
| Organic Search (google) | 74,566 | **81** | **0.11%** | Massive volume, very low conv — informational blog dominates |
| Direct | 51,739 | **259** | **0.50%** | Brand-aware visitors typing URL or via dark social |
| Organic Search (gmb/click) | 5,411 | **43** | **0.79%** | The Maps-tagged subset — highest-converting Organic channel |
| Referral (armsacres.com — internal redirect) | 3,668 | **81** | **2.21%** | Internal redirect chain — investigate for cleanup |
| Organic Search (bing) | 3,631 | 15 | 0.41% | – |
| Organic Search (GMB/organic) | 1,937 | 38 | 1.96% | Other GBP-attributed Organic traffic |
| LLM referrers combined (chatgpt + gemini + perplexity + claude + you.com) | ~285 | ~1 | 0.35% | Modest volume; will track as quarterly trend |

**Brand-aware conversion path (Direct + GMB combined): ~57,150 sessions / 302 conv = 0.53% conv rate / 57% of total conversions** — this is the resilience layer.

**Non-brand path (google + bing organic non-GBP): ~78,200 sessions / 96 conv = 0.12% conv rate** — this is the leak surface that the service-page intake-form deployment is designed to capture.

### 1.4 Geographic reality

**GA4 90d geography (top 15):**

| Country / Region | Sessions | Conv | Conv Rate | Read |
|---|---:|---:|---:|---|
| US — New York | 10,853 | **61** | **0.56%** | The actual customer geography. **54% of US conversions.** |
| US — California | 2,466 | 0 | 0% | Wasted blog-content traffic |
| US — Texas | 1,970 | 1 | 0.05% | Same |
| US — Virginia | 1,855 | 4 | 0.22% | Same — likely informational blog |
| UK — England | 1,852 | 0 | 0% | Wasted blog traffic — foreign geography |
| US — Florida | 1,579 | 2 | 0.13% | – |
| Singapore | 1,542 | 0 | 0% | Wasted — foreign |
| US — New Jersey | 1,531 | 9 | 0.59% | Adjacent NY catchment |
| US — Illinois | 1,371 | 0 | 0% | Wasted |
| US — Connecticut | 890 | 1 | 0.11% | Adjacent (Danbury area) |
| US — Massachusetts | 859 | 1 | – | – |

**Read:**
- **The converting geography is New York + adjacent NJ/CT** — ~13,300 sessions / 71 conversions in 90d = ~21% of all sessions but ~76% of US conversions.
- **California, Texas, Virginia, UK, Singapore + others** (combined ~12,000+ sessions/90d) are blog-content traffic with ~zero local-intent conversion potential.
- This is a **content-distribution + cleanup signal**, not a geo-targeting fix — the foreign / out-of-state traffic is captured by informational content, which is fine if the content is topically core (per the topical-relevance correction).

### 1.5 URL inventory + cleanup playbook

**Sitemap inventory (529 URLs):**

| Bucket | Count | GSC clicks 365d | Notes |
|---|---:|---:|---|
| Blog | 424 | 63,106 | 91% of all clicks, ~0 conversions |
| Suburb doorway | 85 | 348 | Templated city-modifier pages, low CTR, doorway-pattern |
| Other / misc | 71 | — | – |
| Core (about, contact, admissions, etc.) | 15 | 3,499 | Working surface |
| Inpatient pages | 9 | 1,238 | – |
| Outpatient pages | 5 | 2,084 | – |
| Real services | 5 | 112 | Equine, fitness, MAT, psychiatric, recovery-coach, alumni |
| Service-in-carmel-hamlet duplicates | 5 | 103 | 39% body-text duplicate of originals |

**Decision matrix output (framework + topical-relevance overlay):**

| Adjusted decision | URLs | Clicks 365d | Imp 365d | Conv 365d | Notes |
|---|---:|---:|---:|---:|---|
| KEEP-AUDIT (topical core blog) | 247 | 1,767 | 1,359,313 | 0 | Legit topical content reclassified from framework-NOINDEX based on topical relevance to addiction-treatment vertical |
| AUDIT (unclassified blog + ambiguous) | 256 | 44,996 | 6,192,572 | 0 | Needs human-pass topical review |
| DELETE+REDIRECT (suburb doorways) | 72 | 348 | 127,322 | 0 | Templated city-modifier pages — kill all |
| KEEP (homepage + core + service + outpatient pages) | 45 | 21,124 | 1,072,079 | **528** | The working surface, 99.4% of conv |
| NOINDEX (off-topic blog with traffic) | 14 | 13,642 | 3,577,839 | 1 | Drug-interaction junk pulling impressions with no commercial intent |
| DELETE (off-topic + unclassified low-traffic blog) | 47 | 311 | 351,994 | 0 | – |
| KEEP-AUDIT (other) | 4 | 2,333 | 146,011 | 1 | – |

**Key correction from Surfpoint-shape playbook:** the topical-relevance overlay reclassifies 159 blog posts that the framework's pure-conv-data heuristic marked NOINDEX. Posts like "alcohol withdrawal symptoms", "intensive outpatient program iop", "medicaid cover drug and alcohol rehab", "aetna cover rehab treatment", "can gabapentin cause depression" are core-topical content that should remain indexed (and should likely be optimized + linked-from-services, not deleted).

**Cleanup priority order:**

1. **M1**: 72 suburb doorway pages → 301 → relevant service-area or outpatient location
2. **M1**: 4 service `/service/<name>-in-carmel-hamlet-ny` duplicates → 301 → non-suffixed originals
3. **M1**: 14 off-topic blog posts that pull big traffic ("mix-alcohol-and-tylenol", "hiccups-when-drunk", "diflucan-and-alcohol", etc.) → NOINDEX (preserve link equity, stop ranking pollution)
4. **M2**: 47 off-topic + thin blog posts → DELETE
5. **M2-M3**: 256 AUDIT blog posts → human-pass review with content team to apply topical-relevance + cannibalization filter

**GSC Crawl Stats (manual export, 89 days 2026-02-10 → ~2026-05-09):**

| Metric | Value | Note |
|---|---:|---|
| Hosts crawled | www.armsacres.com (16,505), armsacres.com (455) | 97% canonical-host crawl share — clean |
| Response code: OK (200) | **66.14%** | Mediocre — 1 in 3 crawls hits redirects or errors |
| Response code: 301 (redirect) | **17.72%** | High; mostly the legacy 2018 sitemap URLs Google is still re-fetching |
| Response code: 404 (not found) | **8.47%** | **Real quality-signal concern** — ~1,400 of every ~16,500 crawls hit 404s. Linked to the 10 legacy 2018 sitemaps (M1 #1b) + the suburb doorway pages already returning 404 on http:// versions |
| Response code: 304 (not modified) | 7.64% | Normal |
| Avg response time | 123-270ms per day, ~150ms median | Acceptable, not great |
| Purpose breakdown | 93.43% Refresh, 6.57% Discovery | Mature site — Google rarely discovering new pages, which means **adding M2/M3 new pages will need explicit Indexing API push or fresh sitemap entries** |
| Googlebot type | 86.77% Smartphone, 9.28% Desktop, 3.26% Other, 0.16% AdsBot | Mobile-first indexing confirmed |
| File type | 66.14% HTML, 25.36% Other (JS/CSS/images), 8.50% Unknown (failed) | The 8.50% unknown/failed correlates with the 404 + 5xx + can't-reach responses |

**Read:** Crawl-budget waste is real. ~26% of crawls (404 + 301) are landing on URLs Google shouldn't be re-fetching. The M1 cleanup of legacy sitemaps + suburb doorway 301-redirects → consolidate-target should drive the OK% back toward 80%+ within a quarter as Google re-evaluates.

**Indexation truth (URL Inspection API, top 546 by 90-day impressions):**

| Coverage state | Count | % |
|---|---:|---:|
| Submitted and indexed | 518 | **94.9%** |
| URL is unknown to Google | 10 | 1.8% |
| Page with redirect | 6 | 1.1% |
| Discovered – currently not indexed | 6 | 1.1% |
| Not found (404) | 4 | 0.7% |
| Crawled – currently not indexed | 2 | 0.4% |

Indexation health is **not** the crisis at Arms Acres (unlike Surfpoint, which had a 756-page active deindexing event). The site has 518 of 546 inspected pages successfully indexed. The 28 non-PASS URLs are mostly old `http://` protocol versions of suburb doorways already in "page with redirect" state (Google has already cleaned those up partially — confirms the M1 doorway-deletion recommendation is low-risk). Canonical mismatch count: 0 (good).

**Legacy sitemap exposure — separate quality-signal failure:**

GSC currently has **10 sitemaps from April 2018** still submitted (`/sitemap/sitemap1.xml` through `/sitemap/sitemap10.xml`), last downloaded by Google in April 2018 (8 years ago). Collectively they reference **~103,000 URLs** but only **13 of those are indexed**. The sitemap paths themselves return 404 on the live site already (they were leftover from a pre-Webflow CMS migration). Google reads this as "this site claims 100K URLs and indexes 0.01% of them" — a textbook site-quality-signal failure.

**Fix:** delete the 10 legacy sitemaps from GSC's Submitted Sitemaps panel. 30-seconds-per-sitemap, 5 minutes total. Zero risk (the URLs don't exist on the live site anyway). Add as M1 action #1b.

### 1.6 Core Web Vitals — PASSED (2026-05-11)

Per Ace's PageSpeed Insights / CrUX Report screenshot:

| Metric | Value | Threshold | Status |
|---|---:|---|:---:|
| **Largest Contentful Paint (LCP)** | 1.3s | <2.5s | ✓ Green |
| **Interaction to Next Paint (INP)** | 95ms | <200ms | ✓ Green |
| **Cumulative Layout Shift (CLS)** | 0 | <0.1 | ✓ Green |
| First Contentful Paint (FCP) | 1.3s | <1.8s | ✓ Green |
| Time to First Byte (TTFB) | 0.5s | <0.8s | ✓ Green |

**Core Web Vitals Assessment: PASSED.** All 5 metrics green across the latest 28-day CrUX window (mobile, various network conditions). Webflow's CDN + the site's structure are delivering. **CWV is not a strategic priority for this engagement** — there's no work to do on this axis. Implication: any future technical-audit conversation should skip CWV and focus on indexation + canonical + schema + crawl-budget.

### 1.6a OnPage Instant Pages crawl (DataForSEO, 51 KEEP+KEEP-AUDIT URLs, 2026-05-11)

Crawled the 51 URLs the decision matrix marked KEEP / KEEP-AUDIT. 49 successful, 2 input failures. Per-page checks output → `clients/armsacres/exports/dataforseo/onpage/onpage_pages.csv`.

**Three new categories of finding from the crawl:**

**(a) 12 KEEP+KEEP-AUDIT URLs return 4xx — these are pages the framework says are critical, but they're broken on the live site:**

| Group | URLs | Likely fix |
|---|---|---|
| **Removed programs (5)** | `/inpatient/young-adult-services`, `/inpatient/veteran-substance-abuse-program`, `/service/family-treatment-program`, `/service/family-treatment-program-in-carmel-hamlet-ny`, `/service/conferences-and-education` | Either restore (if these are real services Arms Acres still offers) or REMOVE from decision matrix + 301 to closest live equivalent + remove from sitemap |
| **Alias / wrong-suffix URLs (5)** | `/contact-us`, `/admissions.html`, `/admissions/insurance`, `/contact-me`, `/contactus` | 301 to canonical (`/contact`, `/admissions`). These return 404 but Google still crawls them — adds to the 8.47% 404 rate in Crawl Stats |
| **Webflow tel: URL bug (2)** | `/outpatient/carmel-outpatient/tel:8882274641`, `/services/tel:8882274641` | The `tel:` link is being rendered as a RELATIVE URL on these two pages — concatenated to the current path instead of as proper `tel:` protocol. Google followed those links and got 404s. **Confirms and expands the M1 #1a "broken tel: links" finding to a site-wide rendering bug.** |

**M1 expansion:** the cleanup playbook in M1 #4 (suburb doorways) + M1 #1a (broken outpatient tels) now needs a third item — fix the 12 KEEP-bucket 4xx URLs. New action #1d below.

**(b) Title-length + meta integrity:**

| Metric | Result |
|---|---|
| Pages with NO title | **3** (all 3 are KEEP-AUDIT blog posts already flagged as off-topic in topical overlay: `/blog/list-of-celebrities-who-died-overdose`, `/blog/valtrex-valacyclovir-and-alcohol`, `/blog/alcohol-while-taking-macrobid`) — also good DELETE candidates per topical relevance |
| Pages with short title (<30 chars) | 9 (Admissions = 23, What-To-Bring = 27, Reviews = 7, Email-Patients = 27, Patient-Rights = 27, Alumni = 19) |
| Title length: mean / median / max | 35.8 / 36 / 60 chars |
| Description length: mean / median / max | 132 / 133 / 200 chars |
| Pages flagged short_title (per DFS rule) | 9 of 49 |
| Pages flagged long_title | 0 |
| Pages with `is_4xx_code` | 12 (per above) |
| Pages with `high_loading_time` (per DFS lab check, contradicts CrUX field-data) | 5 — note: this is **lab measurement**, the CrUX 28d field-data showed all green. Lab CWV is unreliable for the field-aggregate. **Defer to the CrUX assessment in Section 1.6** — the 5 lab flags are likely cold-cache transient. |

**(c) Image alt-text + accessibility gap:**

| Check | Pages flagged |
|---|---|
| `no_image_alt` | **37 of 49** (76%) — sitewide image alt-text gap |
| `no_image_title` | 37 of 49 — same |
| `seo_friendly_url_keywords_check` | 36 of 49 — slugs missing target keywords on many pages |
| `seo_friendly_url_relative_length_check` | 37 of 49 — URL length / structure issues |

**Read:** image alt-text is the most-impactful single missing layer here. On a YMYL site where Joint Commission accreditation, OASAS licensing, and CARF/LegitScript trust signals would ideally be communicated via accessible images of the facility/staff/credentials, having 76% of pages missing all image alts is both an accessibility violation AND a missed SEO surface. Add to M1 #2 or as new M2 #11a.

### 1.6 On-page integrity (schema, metadata, content)

**Schema deployment (audited via raw HTTP + regex on 21 sampled pages):**

| Page | JSON-LD found | Schema present | Schema missing (recommended) |
|---|---|---|---|
| / (home) | 1 block | `Organization` | `MedicalBusiness`, `LocalBusiness`, `Place`, `FAQPage`, `BreadcrumbList` |
| /about-us | 1 block | `AboutPage` | `Organization`, `Hospital` |
| /contact | 1 block | `ContactPage` | `LocalBusiness` |
| /admissions | 0 blocks | none | `WebPage`, `FAQPage`, `Service` |
| /faqs | 0 blocks | none | `FAQPage` |
| /reviews | 0 blocks | none | `AggregateRating`, `Review` |
| /inpatient | 0 blocks | none | `MedicalBusiness`, `Service`, `MedicalProcedure` |
| /inpatient/detox-program | 0 blocks | none | `Service`, `MedicalProcedure`, `BreadcrumbList` |
| /inpatient/adult-rehabilitation | 0 blocks | none | `Service`, `MedicalProcedure` |
| /outpatient/* (all 3) | 0 blocks | none | `MedicalBusiness` (each separate location), `Service`, `LocalBusiness` |
| /service/* (all 9) | 0 blocks | none | `Service`, `MedicalProcedure` |
| /blog (and 469 blog posts) | 0 blocks | none | `Article` / `BlogPosting`, `BreadcrumbList`, author markup |
| /suburb/* | 0 blocks | none | (slated for DELETE+REDIRECT — no schema needed) |

**Meta description audit:** empty across **all 19 non-homepage URLs sampled.** Google generates a snippet from page text when meta description is empty — for clinical/sensitive pages this means brand-uncontrolled SERP descriptions.

**Title-tag audit:** mostly fine but some artifacts:
- `/reviews` title is literally "Reviews" — no brand, no location modifier, no value prop
- `/suburb` title is literally "Suburb" — clearly a CMS leftover, page should not exist as-is
- `/inpatient` + `/outpatient` titles use "Carmel Hamlet, New York" — geographically accurate but the actual searches will be for "Carmel NY", "Putnam County NY", "Hudson Valley NY". Worth A/B testing.

**Wrong-brand boilerplate:** homepage `<meta property="og:description">` contains the literal text:
> "Bold Steps Behavioral Health is the best drug rehab in Harrisburg PA that empowers people struggling with behavioral health and substance abuse issues."

This is a left-over from a template build pulling from a different rehab brand (Bold Steps Behavioral Health, Harrisburg PA). Live on armsacres.com homepage as of 2026-05-11. **Replace immediately** as part of M1 action #2.

**Trust signal coverage on service pages (current vs benchmark):**

| Element | Home | /inpatient | Service pages | Recommendation |
|---|:---:|:---:|:---:|---|
| Insurance / Medicaid mentions | 6 | 0 | 0 | Add insurance disclosure block to each service page (Medicaid, Aetna, BCBS, Cigna confirmed per intake — needs final list) |
| OASAS / Joint Commission / accreditation mentions | 4 | 7 | 3 | Standardize a trust-signal block (logo strip + accreditation list) across all service pages |
| 1982 founded / 191-bed / employee-owned narrative | yes | sparse | sparse | Differentiator vs younger competitors — surface on each service page |
| Tap-to-call `tel:` links | 5 | 5 | 5–6 | Already present (OK) |
| 4-input intake form | yes | **no** | **no** | The headline M1 action |

### 1.7a Competitor service-page "stealable patterns" (added 2026-05-11)

Pulled 30 service-page samples from 3 real local competitors (Mountainside, Ascendant NY, Cornerstone of Medical Arts Center Queens) and extracted four concrete pattern gaps Arms Acres has against converting competitors. Source: `clients/armsacres/exports/competitor_audit/`.

**(a) Schema gap (the largest single finding):**

| Layer | Arms Acres | Mountainside | Ascendant NY | Cornerstone NY |
|---|---|---|---|---|
| Homepage schema | `Organization` only | `Organization` | **`MedicalClinic`** | (none) |
| Service-page schema | **none** | `Organization` + **`FAQPage`** on MAT pages | **`MedicalWebPage` + `BreadcrumbList`** | (none) |
| Reviews / About schema | (none) | (none) | **`AggregateRating` + 5 `Review` blocks** | (none) |
| Admissions schema | (none) | `Organization` | **`AggregateRating` + 5 `Review` blocks** | (none) |

Ascendant NY's schema stack is the model: `MedicalClinic` on homepage, `MedicalWebPage` on every service page, `AggregateRating` + `Review` on `/about-us` + `/admissions`. Mountainside puts `FAQPage` on every MAT service page (`/suboxone/`, `/sublocade/`, `/vivitrol/`). Arms Acres has none of this.

**(b) Service-page word-count gap:**

| | Avg word count |
|---|---:|
| Arms Acres service pages (sampled) | 1,500–2,000 |
| Mountainside service pages | ~7,000–8,000 |
| Cornerstone NY service pages | ~12,000 |
| Ascendant NY service pages | **~20,000** |

Ascendant's `/alcohol-addiction-treatment/` is 20,907 words. Arms Acres' `/inpatient/detox-program` is 1,444 — **14× shallower**. Even if Ascendant's pages are over-padded for LLM-citation visibility (they likely are), Mountainside at 7K average is a realistic target. The narrative-rebuild action (M2 #9) needs an explicit word-count target and content brief per service page.

**(c) Insurance disclosure depth:**

| | Carriers listed |
|---|---|
| Arms Acres (sampled) | Medicaid + Beacon |
| Mountainside `/admissions/paying-for-treatment/` | **Aetna, Cigna, BCBS, Empire, United, Anthem, Magellan, Beacon, Optum, Tricare, Medicaid, Medicare** (12+) |
| Mountainside per-service pages | 5+ carriers each |
| Ascendant NY homepage | Aetna, Cigna, Blue Cross, United, Beacon, Optum |
| Cornerstone NY `/admissions/` | Medicaid, Blue Cross, Empire, United |

Mountainside's `/admissions/paying-for-treatment/` is the gold-standard format. Arms Acres needs the verified carrier list + a dedicated insurance-disclosure block deployed on each service page (M1 #8 captures this; the format-reference is now Mountainside's `paying-for-treatment` page).

**(d) Trust-signal stack:**

| | Arms Acres | Mountainside | Ascendant NY |
|---|---|---|---|
| Joint Commission | ✓ site-wide | **✓ on every page audited** | ✓ |
| OASAS | ✓ site-wide | n/a (CT-based) | ✓ |
| CARF | ? unverified | **✓** | ? |
| LegitScript | ? unverified | **✓** | ? |
| SAMHSA findtreatment listing | ? unverified | n/a | claimed |

Mountainside surfaces **Joint Commission + CARF + LegitScript on all 13 sampled pages**. Arms Acres has Joint Commission + OASAS site-wide but doesn't (visibly) mention CARF or LegitScript. **CARF + LegitScript pursuit** is a M2-M3 credentialing action item — separate from on-page work, requires application + audit.

**Stealable-patterns reference table (for the content + on-page team):**

| Pattern to deploy | Reference URL |
|---|---|
| `MedicalClinic` schema on homepage | `ascendantny.com/` |
| `MedicalWebPage` + `BreadcrumbList` on every service page | `ascendantny.com/alcohol-addiction-treatment/` |
| `FAQPage` schema on every MAT / service page | `mountainside.com/treatment/offerings/medication-assisted-treatment/suboxone/` |
| `AggregateRating` + `Review` schema on `/reviews`, `/about-us`, `/admissions`, homepage | `ascendantny.com/about-us/`, `ascendantny.com/admissions/` |
| Multi-carrier insurance-disclosure block | `mountainside.com/admissions/paying-for-treatment/` |
| 6,000–8,000-word service pages with structured H2 hierarchy + nested H3s | All Mountainside `/treatment/*` pages |
| Demographic + service-line landing pages | `mountainside.com/alcohol-detox-lp/`, `mountainside.com/womens-inpatient-rehab-lp/` |

### 1.7b Search volume sizing — priority keyword universe (added 2026-05-11)

DataForSEO Search Volume triangulation (Google Ads + Bing + Clickstream) on 100 priority keywords across 10 intent groups, 2 locations (US-wide + NYC DMA). The triangulation is mandatory because **Google Ads / Keyword Planner systematically suppresses volume for sensitive-vertical queries**: `residential rehab` (21,410/mo Bing), `drug rehab center` (3,830/mo Bing), `inpatient rehab` (1,220/mo Bing), `alcohol rehab` (640/mo Bing), and `suboxone treatment` (940/mo Bing) all return NULL from Google Ads. Bing-only volumes are the only reliable signal for these terms.

**US-wide demand by priority group (max_volume, 10 keywords each, monthly):**

| Group | Total /mo | Top kw | Volume | Arms Acres positioning |
|---|---:|---|---:|---|
| **near_me** | **49,120** | `detox center near me` | 27,100 | No dedicated landing page — opportunity |
| **inpatient_residential** | **24,840** | `residential rehab` (Bing-only) | 21,410 | `/inpatient` ranks for some terms (1,238 clicks/365d) |
| **outpatient** | **20,790** | `outpatient rehab` | 18,100 | `/outpatient` ranks pos 7 (887 clicks/365d) |
| **drug_broad** | 14,290 | `drug detox` | 8,100 | Partial coverage |
| **detox** | 13,590 | `detoxification center` | 8,100 | `/inpatient/detox-program` ranks pos 5 (964 clicks/365d) — under-optimized for the named term |
| quality_comparison | 3,020 | `best rehab facility` | 2,900 | No coverage |
| opioid_mat | 2,600 | `suboxone treatment` (Bing-only) | 940 | `/service/medication-assisted-therapy-in-carmel-hamlet-ny` exists but is duplicated + buried |
| alcohol | 2,350 | mostly Bing-only | 790 | Partial |
| insurance | 630 | — | — | No coverage (also a content gap) |
| dual_diagnosis | 230 | — | — | Niche; service exists but no dedicated page |

**Top 5 highest-volume keywords with no canonical Arms Acres landing page:**

| Keyword | US monthly volume | Source variance | Note |
|---|---:|---|---|
| `detox center near me` | 27,100 | Google Ads | "Near me" cluster has no AA landing page |
| `residential rehab` | 21,410 | Bing-only | Google Ads suppresses; AA `/inpatient/adult-rehabilitation` could rank but title is "Adult Rehabilitation" — keyword mismatch |
| `outpatient rehab` | 18,100 | Google Ads | `/outpatient` page exists but ranks pos 7 |
| `detox near me` | 18,100 | Google Ads | No AA landing page; could capture via Hudson Valley positioning |
| `drug detox` / `detoxification center` | 8,100 each | Google Ads | `/inpatient/detox-program` underweighted vs `drug detox center` term cluster |

**M2-M3 implications added:**
- **M2 #12 (Local content build #1)** expands to include a `/areas-served/[region]-rehab-near-me` or equivalent template — capture the `near_me` cluster (49K/mo)
- **M2 #18 expansion**: a `residential rehab in Hudson Valley NY` landing page targets the 21K/mo `residential rehab` Bing demand
- **M3 service-page expansion**: a `Suboxone Treatment` standalone page (Bing-only 940/mo, no Arms Acres ranking; Mountainside has 3 such pages — Suboxone, Sublocade, Vivitrol — each with FAQPage schema)
- **Service-page title-tag rewrites** in M1: `/inpatient/detox-program` title from "Medical Detox Program" → include `Drug Detox` or `Detox Center` keywords to match the 8,100/mo `drug detox` + `detoxification center` cluster; same for `/inpatient/adult-rehabilitation` → include `residential rehab` to match the 21,410/mo demand

Raw data: `clients/armsacres/exports/dataforseo/keywords/search_volume_us.csv`, `search_volume_nyc.csv`, `search_volume_by_group.csv`.

**Ahrefs enrichment landed 2026-05-11.** 6 Matching Terms reports across seeds: `addiction treatment`, `alcohol withdrawal treatment`, `intensive outpatient program`, `alcohol detox dutchess county`, `alcohol rehab bronx`, `alcohol rehab queens`. Combined 3,635 keyword rows across Arms Acres + 7,813 from Surfpoint reuse = **9,546 unique keywords** in the cross-client master at [`HQDM/data/keywords/master_keywords_latest.csv`](../../../data/keywords/master_keywords_latest.csv).

**(a) Near-me cluster confirms ~60K/mo addressable demand (Ahrefs-confirmed volumes):**

| Keyword | Vol /mo | KD | Traffic potential |
|---|---:|---:|---:|
| rehab near me | **14,000** | 16 | 8,200 |
| rehab centers near me | 10,000 | 6 | 9,700 |
| detox centers near me | 8,600 | 20 | 15,000 |
| alcohol rehab near me | 8,000 | 20 | 20,000 |
| methadone clinic near me | **7,600** | 13 | 1,000 |
| suboxone clinic near me | **6,800** | **3** | 4,300 |
| detox near me | 5,900 | 4 | 8,000 |
| rehab facilities near me | 5,100 | 19 | 16,000 |
| drug rehab near me | 4,800 | 15 | 8,200 |
| inpatient rehab near me | 4,100 | 7 | 22,000 |
| alcohol detox near me | 3,200 | 5 | 9,700 |
| outpatient rehab near me | 2,600 | 24 | 3,200 |
| intensive outpatient program near me | 2,200 | **1** | 5,800 |
| addiction treatment near me | 2,100 | **1** | 900 |

**(b) Low-KD high-volume opportunities (KD ≤ 10, vol ≥ 2K) — the easy wins:**

| Keyword | Vol | KD | Use case |
|---|---:|---:|---|
| `intensive outpatient program` | 9,000 | **2** | M3 #18 service-page rebuild target |
| `drug rehab` | 12,000 | **4** | Highest absolute vol with very low KD — generic but Arms Acres should own it |
| `detox near me` | 5,900 | 4 | Near-me cluster anchor |
| `suboxone clinic near me` | 6,800 | **3** | MAT-page opportunity (M2 #18 + Bronx/Queens cluster) |
| `intensive outpatient program near me` | 2,200 | **1** | Service-page modifier — practically uncontested |
| `addiction treatment near me` | 2,100 | **1** | Same — KD 1 |
| `rehab centers near me` | 10,000 | 6 | |
| `suboxone clinic` | 2,600 | **2** | |
| `inpatient rehab near me` | 4,100 | 7 | |

**(c) Geo-modified picture for Bronx + Queens outpatients (Ahrefs-confirmed):**

| Keyword | Vol /mo | KD |
|---|---:|---:|
| `bronx addiction treatment center` | 90 | 0 |
| `methadone clinic bronx ny` | 50 | 0 |
| `drug rehab bronx ny` | 30 | 2 |
| `outpatient rehab bronx ny` | 20 | 16 |
| `methadone clinic queens` | 60 | 0 |
| `alcohol rehab queens` | 50 | — |
| `drug rehab queens ny` | 40 | — |

Direct geo-anchored organic volume is small (~350-450/mo combined). **The real opportunity for Bronx + Queens is local-pack visibility on the parent "near me" terms** — `methadone clinic near me` 7,600/mo + `suboxone clinic near me` 6,800/mo + `outpatient rehab near me` 2,600/mo all route to local-pack-derived clicks for searchers in those boroughs. Capturing local-pack rankings via the M1 #6 GBP work (categories + review velocity + photos) is the lever, not direct geo-anchored organic ranking.

**(d) Westchester + Yonkers + Dutchess (adjacent-county demand):**

| Keyword | Vol /mo | KD |
|---|---:|---:|
| `alcohol withdrawal treatment yonkers ny` | 100 | — |
| `drug rehab westchester county` (+ ny variant) | 40 | — |
| `alcohol rehab westchester county` | 40 | — |
| `drug rehab yonkers ny` | 40 | — |
| `drug rehab dutchess county ny` | (null — too thin for Ahrefs) | — |

Westchester demand is small but real; Yonkers' `alcohol withdrawal treatment` 100/mo is the single-strongest adjacent-county opportunity (highest commercial intent).

**(e) Ahrefs gaps — flag for follow-up enrichment:**

| Gap | Why it matters | Fix |
|---|---|---|
| **No "Hudson Valley" data** in master | Arms Acres' homepage tagline uses "Hudson Valley" — no demand sizing for the regional umbrella term | Pull Matching Terms for seed `hudson valley rehab` |
| **Only 1 "Carmel" match** (`best drug and alcohol rehab carmel`, vol null) | Inpatient main is in Carmel — can't size the hometown demand | Pull Matching Terms for seed `carmel ny rehab` or `carmel hamlet rehab` |
| **No "Putnam County" matching-terms data** | Putnam County is the literal jurisdiction — surely some demand | Pull Matching Terms for seed `putnam county rehab` |
| **Limited MAT-specific NY data** | Methadone Bronx + Queens cluster only had ~5 keywords each — likely more under different MAT seeds | Pull Matching Terms for seed `methadone clinic` (national) + `suboxone clinic` |

Three fresh Ahrefs pulls would close (e): `hudson valley rehab`, `carmel ny rehab`, `putnam county rehab`. Each ≤ 1000-row cap. Total 3 additional Matching Terms reports.

### 1.7c Local Dominator scan analysis (28 scans across 12 keywords, 5-month trend window)

**Revised after full LD inventory** (2026-05-11). Initial draft analyzed only 4 Carmel-anchored scans; the full Arms Acres LD set is **28 scans across 12 keywords spanning Dec 2025 → Apr 2026** (5 months).

**Two distinct grid contexts** the scans cover:

**(a) Carmel-anchored grids** (the keywords `carmel recovery`, `carmel methadone clinic`, `carmel new york rehab` — 3 keywords × 4 scans). Arms Acres' two Carmel GBPs absolutely dominate:

| Keyword | Latest scan | Inpatient avg rank | Inpatient top-3 % | Carmel outpatient avg rank | Carmel outpatient top-3 % |
|---|---|---:|---:|---:|---:|
| carmel recovery | 2026-04-22 | **1.01** | **100%** | 2.16 | 98.2% |
| carmel methadone clinic | 2026-01-27 | 1.20 | 100% | 1.99 | 100% |
| carmel new york rehab | 2026-04-22 | 1.00 | 100% | 2.00 | 100% |

Carmel saturation is total. No offensive map work needed.

**(b) NY-broader / Hudson Valley / NYC grids** (the keywords `alcohol detox`, `alcohol rehab`, `drug detox`, `drug rehab`, plus their near-me variants and `alcohol rehab near me`, `alcohol rehabilitation`, `detox center near me` — 9 keywords × 18 scans). **Different picture entirely**:

| Keyword | Latest scan | Inpatient avg rank | Inpatient top-3 % | Carmel outpatient avg rank | Carmel outpatient top-3 % |
|---|---|---:|---:|---:|---:|
| alcohol detox near me | 2026-04-22 | 2.31 | **82.2%** | 10.94 | 7.7% |
| alcohol detox | 2026-02-09 | ~2.6 | ~76% | (further out) | (low) |
| alcohol rehab | 2026-02-16 | 3.22 | 63.3% | 9.99 | 13.6% |
| alcohol rehab near me | 2026-01-27 | 3.15 | 68.0% | 10.22 | 9.5% |
| alcohol rehabilitation | 2026-01-27 | 2.56 | 76.3% | 10.09 | 10.7% |
| detox center near me | 2026-04-22 | 2.53 | 76.9% | 10.11 | 11.2% |
| drug detox | 2026-04-22 | 2.99 | 71.6% | 9.64 | 11.8% |
| drug detox near me | 2026-02-09 | (mid-pack) | — | — | — |
| drug rehab | 2026-02-09 | (mid-pack) | — | — | — |

**Read:** the inpatient GBP punches outside Carmel — it ranks **avg 2.3–3.2 in 63–82% top-3** of the broader NY/Hudson Valley grids. That's a much wider footprint than I first reported. The Carmel outpatient drops to rank ~10 in 8–14% top-3 across these wider grids — it's geographically bounded to Carmel.

**(c) Queens GBP shows up in 5 of the broader scans** (`drug detox near me` 12/29 + 2/9, `drug detox` 12/29 + 1/19, `drug rehab` 12/29 + 1/19 + 2/9): avg rank 5.7–6.7 across 150–169 grid cells. **Queens IS actively appearing in the NY-broader map pack at mid-pack rank** — better than I first thought (when I said "Queens has no GBP" — wrong; "Queens GBP exists but doesn't rank in top-5" is the accurate framing). Queens place_id `ChIJC9XFB5hgwokRZdowndxV4uo` / CID `16925184755630135909` (resolved from LD data, 2026-05-11). The Bronx GBP doesn't appear meaningfully in these particular scans — likely the scans don't extend over the Bronx geographically.

**Real competitors that surface in the broader NY grids** (these are who Arms Acres is actually competing with for NYC + Hudson Valley addiction-treatment queries):

| Competitor | Notable scans | Top-5 grid presence | Rating | Reviews |
|---|---|---:|:---:|---:|
| Richmond Hill Medically Assisted Treatment | drug detox near me, alcohol detox, alcohol rehab, drug rehab | **169 cells in some scans** (full grid) | 3.6 | 10 |
| Faith Mission Crisis Center | drug detox near me, alcohol detox, alcohol rehab | 100–118 cells | 3.8 | 16 |
| Cornerstone of Medical Arts Center | drug detox near me, alcohol detox, alcohol rehab | 60–99 cells | 4.1 | 198 |
| Van Wyck Residential Treatment | drug detox near me, alcohol rehab, drug rehab | 104–156 cells | 2.6 | 5 |
| Lantana Recovery | alcohol detox near me, alcohol rehab near me, detox center near me, alcohol rehabilitation | 33–76 cells | **4.9** | 33–36 |
| We Level Up New York | alcohol detox near me, alcohol rehab near me, detox center near me, drug detox | 54–66 cells | **5.0** | 6 |
| MCCA - McDonough House and Detox | alcohol detox near me, alcohol rehab near me, detox center near me, drug detox | 50–66 cells | 3.7 | 33–36 |
| The Counseling Center at Yorktown Heights | alcohol detox near me, alcohol rehab near me, detox center near me | 32–61 cells | 4.3 | 12 |
| Hudson Valley Addiction Treatment Center | alcohol detox near me, drug detox, detox center near me | 25–36 cells | **5.0** | 9–10 |
| Lexington Center For Recovery | alcohol rehab near me, drug detox, alcohol rehabilitation | 38–57 cells | 4.1–5.0 | 2–93 |

**Strategic reframe from the expanded LD set:**
- **Inpatient main is a real player across the NY-broader grid** — 63–82% top-3 across 7 cluster keywords. The earlier draft underrepresented how strong this signal is.
- **Carmel outpatient is geographically bounded** — stays in Carmel, drops to rank ~10 in NY-broader grids.
- **Queens GBP is mid-pack** in the broader scans (rank 5.7–6.7), not absent. The work isn't "claim a Queens GBP" — it's "lift Queens from rank 6 → rank 1–3 via review velocity + categories + signal strengthening."
- **The actual NY-broader competitive set** is led by Richmond Hill MAT + Cornerstone + Lantana + We Level Up — these are the targets for competitor service-page audit + comparative positioning, NOT the national-chain names that DataForSEO Competitors Domain surfaced.

**Critical scan-coverage gap remaining:** all 28 scans are seeded from Hudson Valley / NY-broader. **There are still zero Bronx-anchored scans** (3584 Jerome Ave) — adding 5 Bronx queries to the LD setup is the highest-priority scan addition for Q2 measurement (proposed list in Appendix A.2).

### 1.7 Competitor landscape

**Two layers:** the keyword-overlap "competitor" list from DataForSEO Competitors Domain (US-default) is dominated by **national chains + sister HQDM Recovery accounts** — not directly addressable as Carmel-NY local competitors. Per the per-client framing rule, sister accounts are excluded.

**Top "competitors" by keyword overlap (DataForSEO Competitors Domain, US default, filtered for service providers only — sister HQDM accounts removed):**

| Domain | Keyword intersections | Notes |
|---|---:|---|
| americanaddictioncenters.org | 3,976 | National chain |
| therecoveryvillage.com | 3,894 | National chain |
| townsendla.com | 2,985 | LA-area |
| prescotthouse.com | 2,720 | – |
| newhorizonscenters.com | 2,371 | – |
| aristarecovery.com | 2,299 | – |
| socialrecoverycenter.com | 2,234 | – |
| springhillwellnessny.com | 2,227 | **Real NY local competitor** |
| coachellavalleyrecoverycenter.com | 2,053 | – |

**Real Carmel-NY / Hudson Valley / NYC competitors (from SERP scrape at NY-anchored queries, top-10 frequency):**

Notable in the top 10 for ≥4 priority NY-anchored queries: `mountsinai.org`, `bronxcare.org`, `odysseyhousenyc.org`, `nyp.org`, `nychealthandhospitals.org`, `flushinghospital.org`, `wellbridge.org`, `springhillwellnessny.com`, `victoryrp.com`, `naomedical.com`, `suboxonetreatmentclinicnyc.com`, `centerforliving.org`, `stjoestreatment.org`. The Maps SERP run at Carmel + Bronx + Queens coordinates will return the actual map-pack competitors. Add findings here once that completes.

**Arms Acres' position on the 26 NY-anchored priority queries (US-default SERP):** does not appear in top 30 organic for any of them. The site's organic visibility for commercial intent queries is essentially zero. Whatever's driving the 86,569 GSC clicks/365d is informational blog content, not commercial-intent local rankings.

### 1.8 Off-page / backlinks — deep pull

**Cross-target backlinks (DataForSEO 2026-05-11) — Arms Acres + 4 real local competitors:**

| Target | Backlinks | Referring Domains | Spam Score | DFS Rank |
|---|---:|---:|---:|---:|
| **armsacres.com** | **17,209** | **504** | **19** | 293 |
| mountainside.com | 8,138 | 1,628 | 27 | 278 |
| ascendantny.com | 4,267 | 1,874 | 44 | 286 |
| cornerstoneny.com | 882 | 302 | 18 | 202 |
| bronxrecovery.org | 9 | 8 | 45 | 23 |

**Three diagnoses:**

**(a) 90.9% of Arms Acres' backlinks come from ONE domain.** `healthyclass.com` (rank 281, spam score 19, sitewide template, first seen 2022-01-16) contributes 15,644 of 17,209 backlinks. Strip the outlier and the realistic profile is **~1,565 backlinks from 503 domains**. Worth investigating whether healthyclass.com is an intentional partner / network member or an accidental footer-template injection. Spam-neutral (19), so no urgent action — but it inflates the headline backlinks count by 11×.

**(b) Real referring-domain diversity gap is 3-4× behind competitors.** Mountainside: 1,628 ref domains. Ascendant NY: 1,874. Arms Acres: 504 (or 503 effective after stripping the sitewide outlier). Cornerstone NY: 302 (Arms Acres is ahead here). The strategy implication is **acquire new editorial referring domains, not more backlinks from existing relationships**. M2 #14 citations work + M3 #19 PR placements address this — but at the realistic acquisition pace (5-10 new editorial domains per month), closing a 1,000-domain gap is a 2-year build, not a quarter.

**(c) Active toxic-link attack in progress (April-May 2026).** The DataForSEO referring-domain pull surfaced 4 PBN domains with the spam signature `seo-anomaly-s2/s6/s8/s9/s10.xyz`:

| Domain | Backlinks | Spam Score | First Seen |
|---|---:|---:|---|
| seo-anomaly-s10.xyz | 20 | **99** | 2026-05-05 |
| seo-anomaly-s9.xyz | 30 | 79 | 2026-04-14 |
| seo-anomaly-s8.xyz | 30 | 79 | 2026-04-22 |
| seo-anomaly-s2.xyz | 30 | 79 | 2026-04-20 |
| seo-anomaly-s6.xyz | 6 | 73 | 2026-04-19 |

Combined: ~116 backlinks with anchor texts like "TELEGRAM @SEO_ANOMALY - SEO BACKLINKS, PBN, TRAFFIC BOOST, LINK IND...". First-seen dates cluster April 14 - May 5, 2026 — **active in the last 4 weeks.** Plus ~7 nonsense-named `blogspot.com` PBN domains with similar patterns. Anchor-text artifacts include OCR character substitutions ("De T Oxiﬁca I N" with ﬁ ligature) and tab characters in anchor text — classic PBN signatures.

Read on the attack: either (a) negative SEO from a competitor (more likely given the timing concentration and the inflammatory "SEO_ANOMALY" anchor text designed to look like a Google-trigger phrase), or (b) old PBN-buy exposure being re-activated through a spam network. Either way, **disavow is the safe action** — these links don't help and may hurt.

**Surprisingly favorable framing**: Arms Acres' top-100 referring-domain spam-score profile is the **cleanest of the 4 competitors** I sampled — avg spam score 13.1 vs Mountainside 16.3 vs Cornerstone NY 23.3 vs **Ascendant NY 51.0** (Ascendant's link profile is 79% high-spam — borderline trash, despite their LLM brand presence). Arms Acres isn't suffering from a quality problem in its existing backlink graph; the gap is volume and diversity, plus the new active attack to clean up.

**Cross-reference: GSC Top Linking Sites export (manual, 298 domains, 2026-05-11):** GSC shows the same sitewide-template pattern from a different angle — its top-2 linking sites are:

| Site | Linking pages | Target pages | Read |
|---|---:|---:|---|
| **addiction-programs.net** | **2,203** | **1** | Sitewide template — single target page, 2,203 referring pages |
| **americanaddictionfoundation.com** | **1,642** | **1** | Same shape — sitewide template |
| ziprecruiter.com | 117 | 1 | Job-listing reference |
| batchgeo.com | 44 | **20** | Legit map citation tool — distributes |
| alcoholrehabus.org | 32 | 1 | Sitewide template |
| yellowpages.com | 32 | 1 | Generic directory |
| **springhillwellnessny.com** | **15** | **13** | **NY competitor linking to AA across 13 pages — interesting peer link** |
| robinrecovery.com | 11 | 11 | Peer rehab linking diverse pages |
| socialrecoverycenter.com | 9 | 9 | Peer rehab, distributed |

**Combined read across the two backlink data sources:** the GSC export + DataForSEO Backlinks agree — Arms Acres' link graph is **mostly volume from a few sitewide-template referers** (healthyclass.com, addiction-programs.net, americanaddictionfoundation.com) and a long tail of moderate single-page citations. The **editorial diversity gap** vs Mountainside/Ascendant is the real story; the **acquisition focus should be on diverse-target peer + directory linking** (robinrecovery.com pattern: 11 pages linked across 11 different AA URLs is the gold-standard shape).

**Action set (added to M1 + M2):**
- **M1 (urgent)**: file a disavow against the 5 `seo-anomaly-s*.xyz` domains + the 7 nonsense `blogspot.com` PBN domains. Send to Search Console disavow tool. Off-page (Julce) executes; 30-minute file write.
- **M1 investigation**: confirm whether `healthyclass.com` sitewide link is intentional (Arms Acres partner / employee-owned-network link / etc.) — if accidental, decide whether to leave alone (spam-neutral) or have it cleaned up. Low priority.
- **M2 #13/14 reframed**: the citations rebuild and the link-acquisition work address the diversity gap. Realistic target Q2: +200-300 new referring domains via OASAS/SAMHSA/JointCommission/Psychology Today + 5-10 PR placements. Closes ~15% of the diversity gap to Mountainside in one quarter.

### 1.9 LLM / AI Overview visibility — measured

Two distinct surfaces:

**(a) Google AI Overview presence: zero across all 26 priority queries scraped.** Addiction-treatment local queries in NY don't currently trigger AI Overviews. This is consistent with Google's stated caution on YMYL / medical AIO surfacing.

**(b) LLM chat-response visibility (ChatGPT, Gemini, Perplexity — queried via DataForSEO `ai_optimization/llm_responses/live`, 16 prompts × 3 LLMs = 48 responses). Claude endpoint rejected the model name we tried; framework gap noted for follow-up.**

**Brand-mention rate (Arms Acres named in response body) — final 16 prompts:**

| LLM | Commercial-local (8 prompts) | Research-phase (8 prompts) | Overall |
|---|:---:|:---:|:---:|
| **Perplexity** | **5 / 8 = 62.5%** | 0 / 8 = 0% | 5 / 16 = 31% |
| **ChatGPT** | **2 / 8 = 25%** | 0 / 8 = 0% | 2 / 16 = 13% |
| **Gemini** | 0 / 8 = 0% | 0 / 8 = 0% | **0 / 16 = 0%** |

**Per-prompt detail (commercial-local — which models name Arms Acres):**

| Commercial-local prompt | Models mentioning Arms Acres |
|---|---|
| What is the best inpatient drug rehab in Carmel NY? | ChatGPT, Perplexity |
| Inpatient detox center near Putnam County NY | ChatGPT, Perplexity |
| Best alcohol rehab in Hudson Valley NY | Perplexity |
| OASAS-licensed rehab in upstate New York | Perplexity |
| Outpatient rehab clinic in the Bronx | Perplexity |
| Drug rehab that accepts Medicaid in New York | — *(none)* |
| Joint Commission accredited drug rehab in New York State | — *(none)* |
| Suboxone clinic in Queens NY | — *(none)* |

**Three patterns:**
- **Perplexity is the Arms Acres-friendly LLM** — 62.5% mention rate on commercial-local queries, driven by Perplexity's preference for directory profiles (`rehabs.org/arms-acres-inpatient/`, `addictionresource.com/listings/arms-acres-inpatient-carmel-new-york/`) that index Arms Acres explicitly.
- **ChatGPT mentions Arms Acres on the most-specific Carmel/Putnam queries but not on adjacent queries** — suggests ChatGPT has a knowledge surface for the brand but it doesn't fire on queries that don't hit the right entity match.
- **Gemini doesn't know Arms Acres at all** (0% across all 16 prompts). Confirms the Knowledge-Graph entity gap. Gemini's responses lean heavily on government directories (`findtreatment.samhsa.gov`, `oasas.ny.gov`).
- **Zero mentions on research-phase / informational queries** ("How long is inpatient rehab?", "What insurance covers drug rehab?") across all 4 LLMs — informational LLM responses default to government + nonprofit sources, not specific providers.

**Second audit (v2) — "Best inpatient recovery clinic in [location]" pattern across 8 catchment locations:**

A second audit (8 prompts, same 3 working LLMs + Claude with corrected model_name `claude-sonnet-4-5` for next quarter) targeted the "best X in [location]" prompt shape across Arms Acres' actual geographic footprint. The geographic-coverage gap is now measurable:

| Prompt | LLMs that named Arms Acres |
|---|---|
| **Best inpatient recovery clinic in Putnam County NY** | ChatGPT + Gemini + Perplexity (**3 of 4 — strongest signal**) |
| Top-rated inpatient rehab in Mahopac NY | ChatGPT + Perplexity (2) |
| Best inpatient drug rehab in Westchester County NY | Perplexity only (1) |
| Best alcohol detox center in Dutchess County NY | Perplexity only (1) |
| Best inpatient addiction treatment center in NYC | **none (0)** |
| Best inpatient drug rehab in Beacon NY | **none (0)** |
| Best inpatient recovery clinic in Poughkeepsie NY | **none (0)** |
| Best inpatient drug detox program in Yonkers NY | **none (0)** |

**Brand-mention rate on best-in-[location] prompts:** Perplexity 50% / ChatGPT 25% / Gemini 12.5% / Claude 0% (API model-name fix landed mid-session; next quarterly re-run will include Claude).

**Key geographic insight:** Arms Acres' LLM brand awareness is **concentrated within ~10-mile radius of the Carmel facility** (Putnam County, Mahopac) and **drops off sharply into adjacent counties** (Westchester, Dutchess — Perplexity only), and is **completely absent for NYC, Beacon, Poughkeepsie, Yonkers**. This matches the entity-recognition pattern: LLMs have learned Arms Acres = Putnam County / Carmel from directory profiles, but haven't generalized the brand to the wider Hudson Valley catchment Arms Acres serves. Action: directory-profile work needs to explicitly tag Arms Acres as serving each of these adjacent locations (not just "Carmel, NY") — Westchester, Dutchess, Beacon, Poughkeepsie, Yonkers should be enumerated in the regulatory + directory listings so the entity-location association builds.

**v2 top cited domains (171 citations across 8 prompts × 3 working LLMs):**

| Domain | Citations | Unique prompts | Models |
|---|---:|---:|---|
| recovery.com | 12 | 7 | perplexity |
| **armsacres.com** | **11** | **4** | **chatgpt, perplexity** |
| oasas.ny.gov | 11 | 6 | gemini, perplexity |
| google.com | 10 | 1 | chatgpt |
| psychologytoday.com | 6 | 4 | perplexity |
| nyp.org | 6 | 2 | chatgpt, perplexity |
| rehabs.com | 6 | 3 | perplexity |
| detox.net | 5 | 3 | perplexity |
| addictions.com | 5 | 5 | perplexity |
| mountainside.com | 4 | 2 | perplexity | *(competitor — Mountainside Treatment Center, CT/NY)*
| ascendantny.com | 4 | 1 | chatgpt, perplexity | *(competitor — Ascendant NYC)*
| rehabnet.com | 4 | 2 | perplexity |
| cityofyonkers.com | 4 | 2 | chatgpt | *(government — Yonkers official site)*

**Notable shifts from v1 to v2:**
- **Direct armsacres.com citations doubled in rate**: 8/16 prompts in v1 (~0.5 per prompt) → 11/8 prompts in v2 (~1.4 per prompt). "Best in [location]" prompts trigger LLMs to cite the brand site directly more often than the v1 mixed-intent prompts.
- **psychologytoday.com surfaces here but not in v1** — Perplexity uses the Psychology Today rehab directory for some queries. Add to citation-target list.
- **Real local competitors (Mountainside, Ascendant NYC) get LLM citations** for the broader NY queries where Arms Acres doesn't surface. These are the competitors LLMs are actively recommending in the markets Arms Acres should be serving.

**Combined v1 + v2 (24 prompts, 3 working LLMs):**

| LLM | Brand mention rate | Direct armsacres.com citations |
|---|:---:|---:|
| Perplexity | 9/24 = 38% | ~15 |
| ChatGPT | 4/24 = 17% | ~4 |
| Gemini | 1/24 = 4% | 0 |

**Third audit (v3) — GMB-location-balanced coverage (4 prompts per GBP location × 4 LLMs):**

v1+v2 over-indexed on Carmel/Putnam inpatient queries. v3 fills the gap with 4 prompts each for Carmel outpatient + Bronx outpatient + Queens outpatient (the 3 GBP locations). Same prompt template set for each: `Best outpatient rehab in {loc}`, `Best drug rehab clinic in {loc}`, `Best alcohol rehab in {loc}`, `Best MAT clinic for opioid addiction in {loc}`. Claude included this time using corrected model_name `claude-sonnet-4-5`.

**Mention rate by GMB location:**

| GMB Location | GBP status | ChatGPT | Claude | Gemini | Perplexity | **Combined / 16 prompts** |
|---|---|:---:|:---:|:---:|:---:|:---:|
| **Carmel outpatient** | claimed but misspelled, 3.3★/7rev | **4/4 (100%)** | 2/4 (50%) | 0/4 (0%) | **4/4 (100%)** | **10/16 = 62.5%** |
| Bronx outpatient | claimed at 3584 Jerome Ave, 3.4★/9rev, NOT in map pack | 1/4 (25%) | 0/4 (0%) | 0/4 (0%) | 1/4 (25%) | 2/16 = 12.5% |
| Queens outpatient | **no GBP exists** | 0/4 (0%) | 1/4 (25%) | 0/4 (0%) | 1/4 (25%) | 2/16 = 12.5% |

**Per-prompt detail (commercial-local pattern):**

| Prompt | Mentions |
|---|---|
| Best outpatient rehab in Carmel NY | ChatGPT + Perplexity + Claude (3/4) |
| Best drug rehab clinic in Carmel NY | ChatGPT + Perplexity |
| Best alcohol rehab in Carmel NY | ChatGPT + Perplexity |
| Best MAT clinic for opioid addiction in Carmel NY | ChatGPT + Perplexity + Claude (3/4) |
| Best outpatient rehab in the Bronx NY | ChatGPT only |
| Best drug rehab clinic in the Bronx NY | Perplexity only |
| Best alcohol rehab in the Bronx NY | **— none —** |
| Best MAT clinic for opioid addiction in the Bronx NY | **— none —** |
| Best outpatient rehab in Queens NY | Perplexity only |
| Best drug rehab clinic in Queens NY | Claude only |
| Best alcohol rehab in Queens NY | **— none —** |
| Best MAT clinic for opioid addiction in Queens NY | **— none —** |

**Strategic read:**

The LLM visibility map mirrors the GBP ecosystem exactly. **Where Arms Acres has a strong-cited GBP + directory presence (Carmel), LLM mention rate is 62.5%. Where they have a weak/under-claimed GBP (Bronx, in maps but not ranking), it's 12.5%. Where they have no GBP at all (Queens), it's 12.5% — and those mentions are likely brand-bleed from Carmel-related knowledge, not actual location awareness.**

**Two specific service-line gaps:** "alcohol rehab" and "MAT clinic" prompts in **both Bronx and Queens** got **zero mentions across all 4 LLMs**. Even when Bronx + Queens get a mention on "outpatient rehab" or "drug rehab", neither location surfaces for alcohol-specific or MAT-specific queries. Action: when the GBP claim work for Bronx + Queens lands (M1 #6 + new Queens claim), the categories MUST include "Alcoholism treatment program" + "Mental health clinic" + "Mental health service" + "Rehabilitation center" (mirroring the categories the Carmel inpatient GBP has — currently the Bronx outpatient has none of these secondary categories, and Queens doesn't exist).

**v3 top cited domains (273 citation rows across 12 prompts × 4 LLMs):**

| Domain | Citations | Unique prompts | Unique locations | Models |
|---|---:|---:|---:|---|
| google.com | 18 | 2 | 2 | ChatGPT |
| **armsacres.com** | **17** | **7** | **2** | ChatGPT + Perplexity |
| rehabs.org | 14 | 2 | 1 | ChatGPT |
| recovery.com | 13 | 10 | 3 | Perplexity |
| **startyourrecovery.org** | **13** | **10** | **3** | Perplexity |
| oasas.ny.gov | 12 | 9 | 3 | Gemini + Perplexity |

Note: v3 had the **highest direct armsacres.com citation rate of any audit** — 17 citations across 7 unique prompts, all chatgpt or perplexity, all concentrated in the Carmel prompts. Bronx + Queens contribute 0 of the 17 armsacres.com citations.

**Combined v1+v2+v3 (36 prompts, 4 LLMs where Claude valid):**

| LLM | Combined brand-mention rate |
|---|:---:|
| **Perplexity** | **15/36 = 42%** |
| ChatGPT | 9/36 = 25% |
| Claude (v3 only, 12 prompts) | 3/12 = 25% |
| Gemini | 2/36 = 6% |

The **Bronx + Queens visibility gap is the single sharpest data point** in this entire baseline — both LLMs and Maps SERP confirm Arms Acres is functionally invisible outside Carmel/Putnam County. The M1 GMB actions (#6 GBP fix + Queens claim) close this gap; the M2 directory work (#14 with multi-region tagging requirement added) reinforces it.

**Citation pattern — where LLMs route users (top 15 cited domains across all 16 prompts × 3 LLMs):**

| Domain | Citations | Models | Type |
|---|---:|---|---|
| **oasas.ny.gov** | **30** | chatgpt, gemini, perplexity | NY State licensing body — top cited overall by 2.5× margin |
| google.com | 16 | chatgpt | Search-result links emitted by ChatGPT |
| **recovery.com** | **9** | perplexity | Rehab directory — Perplexity preferred citation source |
| **armsacres.com** | **8** | chatgpt, perplexity | **Direct brand-site citation (5 unique prompts) — 6.6% of all citations** |
| **rehabs.org** | **8** | chatgpt | Rehab directory — ChatGPT citations carry `?utm_source=openai` tracking |
| **rehabs.com** | **8** | perplexity | Rehab directory |
| jointcommission.org | 6 | perplexity | Accreditation body |
| suboxonetreatmentclinicnyc.com | 6 | chatgpt, perplexity | Provider site (NYC competitor) |
| **startyourrecovery.org** | **6** | perplexity | Patrick J Kennedy Foundation directory |
| integritytreatmentpartners.com | 6 | chatgpt | Provider site |
| samhsa.gov | 6 | gemini, perplexity | Federal SAMHSA |
| americanaddictioncenters.org | 6 | chatgpt, perplexity | National-chain provider |
| addictions.com | 5 | perplexity | Rehab directory |
| **findtreatment.samhsa.gov** | **5** | gemini | Federal SAMHSA treatment locator — Gemini's top choice |
| odysseyhousenyc.org | 4 | chatgpt, perplexity | NYC competitor |
| bronxcare.org | 4 | chatgpt, gemini, perplexity | Bronx healthcare system |
| addictionresource.com | 4 | perplexity | Rehab directory (carries Arms Acres listing) |
| sobercentersofamerica.com | 4 | chatgpt | Rehab directory (with `?utm_source=openai`) |

**Direct armsacres.com citations (8 total, 5 unique prompts):**

| Prompt | LLM | Cited URL |
|---|---|---|
| What is the best inpatient drug rehab in Carmel NY? | Perplexity | https://www.armsacres.com |
| Best alcohol rehab in Hudson Valley NY | Perplexity (×2) | https://www.armsacres.com |
| Inpatient detox center near Putnam County NY | ChatGPT (×2), Perplexity | https://www.armsacres.com |
| Outpatient rehab clinic in the Bronx | Perplexity | https://www.armsacres.com/outpatient/bronx-outpatient |
| OASAS-licensed rehab in upstate New York | Perplexity | https://www.armsacres.com |

Note: Perplexity is the only LLM that links directly to armsacres.com's deep page (`/outpatient/bronx-outpatient`) — that's the kind of cite-the-specific-page behavior the LLM-citation work is trying to scale.

**Read:**
- Arms Acres is **named and described** in LLM responses to commercial Carmel/Hudson Valley queries — strongest on Perplexity (62.5% mention rate), weaker on ChatGPT (25%), absent on Gemini (0%).
- **armsacres.com is directly cited 8 times across 5 unique prompts** (6.6% of all 122 citations) — better than initially estimated. Perplexity is responsible for 6 of 8 direct citations; ChatGPT 2. Gemini emitted zero armsacres.com links across all 16 prompts. The citation surface is still mediated mostly by government + directory sources, but Perplexity is actively willing to link the brand site directly.
- **The dominant citation domains are NY State + Federal regulatory bodies** (oasas.ny.gov at 30 citations, samhsa.gov + findtreatment.samhsa.gov combined at 11, jointcommission.org at 6, dasny.org at 2). Combined regulatory: ~50 of 122 citations = 41%. **Owning the regulatory-directory profile surface is the highest-leverage M2 lever**.
- **Rehab directories are the second-tier citation source** (recovery.com 9, rehabs.org 8, rehabs.com 8, startyourrecovery.org 6, addictions.com 5, addictionresource.com 4, sobercentersofamerica.com 4 = 44 citations, 36% of total). Owning these profiles is M2 lever #2.
- **Gemini gap is real and isolated**: Gemini emits 0 armsacres.com citations and 0 brand mentions even on the Carmel-specific query. Almost certainly a Knowledge Graph entity gap — Gemini falls back to government directories when it doesn't have a high-confidence entity match. Action: Wikidata + Wikipedia + Google Knowledge Panel claim audit.
- **Research-phase queries get zero brand mentions across all LLMs** — confirms that informational LLM responses default to government + nonprofit sources, not specific providers. The LLM-citation play is on commercial-local queries only, not on informational topical content.

**Strategic implications (replaces prior "track + small-bet" framing):**

1. **The LLM-citation play is to own the directory + regulatory profile surface that LLMs cite, not to win citations to armsacres.com directly** (low-feasibility — LLMs systematically prefer 3rd-party + government sources for YMYL queries).
2. **Highest-leverage citation targets:** verify and update Arms Acres profiles on `oasas.ny.gov` Find-a-Provider (NY State directory — LLMs' #1 cited domain), `findtreatment.samhsa.gov`, `qualitycheck.org` / `jointcommission.org` quality directories, `rehabs.org`, `recovery.com`, `sobercentersofamerica.com`, `rehabs.com`, `addictionresource.com`.
3. **For Gemini specifically**: Knowledge Graph entity claim + Wikidata + Wikipedia presence audit (Arms Acres is a 40+ year-old institution — sufficient notability for Wikipedia).
4. **Direct armsacres.com LLM-citation work** (FAQ schema, first-person Q&A formatting, named-entity-rich pages) is still M2-M3 worth doing, but with the realistic expectation that LLMs will continue to prefer 3rd-party sources for YMYL queries even after improvements. The realistic ceiling is ~10-15% direct citation rate, not 50%+.

**LLM referrer traffic (GA4 90d) — actual user flow today:** combined ~96 sessions from chatgpt + gemini + perplexity + claude + you.com. Modest, but the *citation surface* analysis above shows the brand-awareness floor is much higher than the referrer count suggests — users are seeing "Arms Acres" in LLM answers and clicking through to either the brand directly (untracked) or to directory profiles. The 96 measured sessions is a floor, not a ceiling, for LLM-driven awareness.

### 1.7d GBP review sentiment — the underlying operational issues

DataForSEO Reviews pull, 2026-05-11. **66 review samples across 3 GBPs** (Queens GBP returned no reviews via API — needs alternative pull):

| GBP | Reviews returned | Avg rating in sample | 1★ count | 5★ count | 1★ rate |
|---|:---:|:---:|:---:|:---:|:---:|
| Inpatient main | 50 (of 133) | 2.70 | **24** | 14 | 48% |
| Carmel outpatient | 7 (of 7) | 3.29 | 3 | 4 | 43% |
| Bronx outpatient | 9 (of 9) | 3.44 | 3 | 4 | 33% |
| **Queens outpatient** | **16 (of 16)** | **2.2** | **10** | **4** | **62.5%** ← most acute |

**Owner-response rate in the inpatient sample: 0 of 50.** Nobody at Arms Acres responds to reviews — positive or negative.

**Themes in the 1-star reviews (inpatient main — most acute):**

| Theme | Sample quotes | Severity |
|---|---|---|
| **Medical / medication errors** | "daughter given the WRONG AMOUNT OF MEDICATION — went into CARDIAC ARREST"; "over-medicated me"; "blood pressure medication for anxiety instead of what they offer" | **Patient-safety / clinical** |
| **Deaths during/after care** | "ended up giving up and going to use drugs and overdosing and dying"; "son almost died after being discharged in a serious accident while taking their medications" | **Clinical outcomes** |
| **Theft / lost property** | "brother left valuables nobody answers calls"; "duffle bag with all his clothes — everything is gone" | Operational |
| **Communication failures** | "intake department hour hold time hang up when they answer"; "don't communicate with concerned families"; "no communication whatsoever" | Operational |
| **Understaffing** | "1 staff member is expected to supervise 15+ patients"; "short staff and no patience" | Operational |
| **Facility cleanliness** | "disgusting and dirty"; "filthy place"; "scuff marks dark fluorescent lights" | Operational |
| **Discrimination claims** | "discriminated cause I'm black by a white guard"; "documents being sent to NYS" | **Compliance** |
| **Patient-on-patient incidents** | "threatened by patients"; "nightshift employee instigated argument with patient and attempted to make it physical" | **Compliance / safety** |

**Themes in Carmel outpatient 1-stars** ("Manipulative, lying, no desire to help just make money"; "filthy disgusting place that cares nothing about you but your insurance. Hopefully will get shut down due to the documents being sent to NYS"; "constant lies from case managers, faulty tests indicating substances never used"):
- Money-not-care perception (insurance abuse framing)
- Documentation/testing accuracy disputes
- Allegations of regulatory complaints filed

**Themes in Bronx outpatient 1-stars**: missed-appointment / staff-no-show pattern at the Zoom group + urine-testing sessions; lack of post-discharge follow-up support.

**Themes in Queens outpatient 1-stars (62.5% 1-star — most-acute):**

| Theme | Sample quotes | Severity |
|---|---|---|
| **Insurance/money extraction allegations** (8 of 10 1-stars mention) | "only interested in your Insurance Benefits Money. Don't waste your time"; "trys to keep you in the program for insurance money if you are court mandated"; "they really is trying to keep you longer to get paid by the insurance companies"; "Their accounting is horrible" | **Compliance** |
| **Court-mandate / DUI exploitation** | "I came here for a court order assessment for a DUI... they will recommend treat to get that money in to their pockets"; "Only needed a drug Assessment to be cleared to go back to work and my urine came back clean they still told me I have to do 6 weeks" | **Compliance / regulatory** |
| **Counselor / clinician unresponsive** | "she has not been called back by her doctor that she has left numerous messages for in the past whole week and a half"; "Sat there 6 hours for nothing"; "groups consisted of 3-4 people, sometimes just myself and the counselor" | Operational |
| **Suboxone / MAT continuity gap** | "since one medication was suboxone... they left me with nothing" — patient-safety implication for opioid-replacement continuity | **Clinical** |
| **Tiny / shrinking groups** | "groups were consistent of 3 or 4 people, sometimes just myself" — operational under-utilization or program winding down | Operational |

**The Queens-specific theme is sharply different from inpatient.** Inpatient 1-stars are about clinical safety + facility conditions. Queens 1-stars are about **alleged insurance-fraud / over-billing patterns + court-mandate referral abuse** — these are compliance-level operational allegations that, if substantiated, are above-SEO concerns. **Pre-launch ops escalation is non-optional for Queens.**

**Themes in positive (5-star) reviews** (mostly inpatient): individual staff praise — specific nurses or counselors named, gratitude for getting clean, family members thanking staff for saving loved ones. **Pattern:** positive experience is **person-dependent (individual nurse / counselor / case manager)**, negative experience is **system-dependent (intake, communication, medication management, security).** This is consistent with an under-resourced operational system where outcomes depend on which staff a patient happens to encounter.

**Strategic implication — this is bigger than SEO:**

A pure review-velocity program (asking happy clients for Google reviews) WITHOUT addressing the underlying operational concerns will just generate more 1-star reviews at the same 33–48% rate. The strategy item is correctly: **escalate ops-level findings to HQDM principal / Arms Acres leadership BEFORE launching a review-acquisition push.** Specifically:

1. **Cardiac-arrest medication-error claim** — if true, this is a clinical-incident-report issue, not a Google-reviews issue
2. **Owner-response rate 0%** — start responding to ALL reviews (positive AND negative) within 48 hours. Standard HQDM GMB workflow.
3. **Communication operational fix** — the "hour hold time, hang up when answer" pattern appears across multiple 1-star reviews and across years. That's the front-line phone team, which is also Mountainside's #1 differentiator (Mountainside's reviews praise call-center responsiveness).
4. **Per the Tier 0 exposure memo:** absolutely **no fake review / review-gating / suppression tactics**. The HQDM legitimate-program path is owner-response + programmatic ask-from-current-clients.

The Asana data shows 217 GMB Ops tasks (16.1% of all work) over 24 months — but the GBPs are still at 2.2-3.4★ with 0% owner-response. The GMB workflow is recurring but not actually moving the needle on reputation. Worth an Asana cross-check on what those 217 tasks were and why they didn't impact ratings.

### 1.10a Asana task-mix analysis (711-day engagement history)

1,345 Asana tasks across 711 days of HQDM engagement (2024-05-30 → 2026-05-11). Task-mix by category (mirroring the Surfpoint analysis methodology):

| Category | Tasks | % of total | Completion |
|---|---:|---:|---:|
| Content (blog + production) | **654** | **48.6%** | active production cycle |
| Other (intake / misc / setup) | 314 | 23.4% | 86.6% done |
| **GMB Ops** | **217** | 16.1% | 2.3% done (mostly recurring monthly review/reply tasks) |
| Off-page (link building + PR) | 88 | 6.5% | 76.1% done |
| Audit / Reporting | 31 | 2.3% | 67.7% done |
| Meeting / Sync | 15 | 1.1% | — |
| **On-page** | **13** | **1.0%** | 69.2% done |
| Strategy | 8 | 0.6% | 37.5% done |
| Technical | 4 | 0.3% | 50% done |
| **Schema** | **1** | **0.07%** | 100% (but the schema is still missing from the live site — see Section 1.6) |

**Read:** 48.6% of work over 24 months went into content production. **On-page + Schema + Technical combined = 1.4% of total work.** The structural lever Arms Acres has been pulled is content + GMB + off-page; the conversion-architecture levers (forms, schema, on-page rebuilds) have been near-zero allocation. This is consistent with the diagnoses in Sections 1.2 (no forms on service pages), 1.6 (no schema), and 1.8 (link-acquisition diversity gap) — it's not a team-capacity problem, it's an allocation problem.

**Engagement quirks** (per the "don't over-weight stale Asana WIP" rule, noting but not centering):
- 3 tasks in `Order Backlinks` section, all open, median age 711 days — abandoned tickets, not active stall
- 1 task in `Schema Markup` section, marked complete — but live site has zero schema beyond `Organization` on homepage. Either the schema was deployed and removed, or the task closed without actual deployment.

Recent activity (last 90 days, 250 new tasks): Content Posted (25), Order Gigs (10), Content Being Written (7), Content Ready To Post (7), Intake (4), Reporting (3), Content Ordering (3), On Page Optimizations (1). The mix has not shifted — still 95%+ content-side.

**Strategic implication for M1 ordering:** the M1 actions in this strategy (intake form deployment, schema, doorway cleanup, GBP fixes, phone-number repair, disavow filing) are precisely the work that has been under-allocated for 24 months. The first quarterly cycle of the strategy-first reporting rollout is mostly about **redirecting some of the content allocation toward the structural fixes**.

### 1.10 Form-funnel CRO secondary issue

Independent of the service-page form-deployment gap above, the existing intake form (on home / admissions / contact) shows a **33% form-completion rate** (522 form_starts → 170 form_submits in 90d). For a 4-input form on a rehab intake, that's roughly industry-typical but improvable. Likely culprits (to be diagnosed in M1-M2):

- Phone field required → users uncomfortable disclosing phone before knowing the program
- Message textarea required → friction; consider optional
- No field-level analytics → can't see where the drop happens

Recommend implementing field-level form analytics (Hotjar form-tracking, or GA4 enhanced form events) as part of M1 action #7.

---

## 2. Three-Month Plan

> Each item: action description, strategy area, department owner, scheduled month, expected outcome (numeric where possible), effort estimate (S/M/L), attribution-confidence flag (H/M/L), risk note. Items are sorted by impact within each month.

### Month 1 — Foundation (highest leverage)

| # | Action | Area | Dept | Month | Expected outcome | Effort | Attribution conf. | Risk |
|---|---|---|---|---|---|---|---|---|
| 1 | Deploy 4-input intake form (Name + Email + Phone + Message — same Webflow template currently on home/admissions/contact) on all 6 service pages (`/inpatient`, `/inpatient/detox-program`, `/inpatient/adult-rehabilitation`, `/outpatient/carmel-outpatient`, `/outpatient/bronx-outpatient`, `/outpatient/queens-outpatient`) | Website | On-page (Aleksa) + Web | M1 | +200 to +470 form_submit conversions /365d at 1–2% page-level rate (current: 1/year) | M | **H** — pre/post conversion measurable on each service-page URL | Low — Webflow component-paste, reversible |
| 2 | Replace homepage `og:description` (wrong-brand "Bold Steps Behavioral Health / Harrisburg PA" boilerplate). Author proper `og:description` for home + meta descriptions for 19 sampled empty URLs. **Also expand to address OnPage findings (Section 1.6a)**: (a) rewrite 9 short-title pages — Admissions (currently 23 chars), Reviews (7 chars), What-To-Bring-To-Arms-Acres (27), Email-Patients (27), Patient-Rights (27), Alumni (19), plus 3 others — target 50–60 chars including geographic modifier; (b) add `alt` + `title` attributes to images sitewide — 37 of 49 KEEP pages currently have ZERO image alt-text (76% coverage gap); (c) extend meta-description coverage to the broader KEEP set, not just the 19 manually sampled. | Website | On-page | M1 | CTR lift 0.3% → 0.5% on non-brand impressions (~2.5K → ~4K clicks /90d). Snippet brand control. Image alts close a YMYL accessibility + image-SEO gap. | M | **M** — CTR change measurable in GSC; image-alt coverage measurable via DFS OnPage re-crawl post-fix | Low |
| 3 | 301-redirect 4 `/service/<name>-in-carmel-hamlet-ny` URLs to non-suffixed originals (equine therapy, fitness/recreation, MAT, psychiatric). Remove from sitemap. | Website | On-page + Tech | M1 | Resolves duplicate-content cannibalization; consolidate ranking equity to 1 canonical URL per service | S | **M** | Low |
| 4 | 301-redirect 71 `/suburb/*` doorway pages to closest matching `/service-areas`, `/outpatient/<carmel|bronx|queens>-outpatient`, or `/contact`. Remove from sitemap. Confirm none rank for commercial query before redirecting. | Website | On-page + Tech | M1 | Removes doorway-page exposure; reduces site's "Crawled — not indexed" thin-content surface (likely meaningful — verify with gsc_inspect Coverage data when manual export lands) | M | **M** | Medium — review for any unexpected backlinks pointing to doorway pages before redirecting |
| 5 | Schema deployment Phase 1: Homepage `MedicalBusiness` + `LocalBusiness` + `Place` + `BreadcrumbList`; service pages `Service` + `MedicalProcedure`; 3 outpatient pages `MedicalBusiness` (one per location, each with own address + phone); admissions `WebPage` + `FAQPage`; reviews `AggregateRating` + `Review` | Website | On-page | M1 | Sets structured-data foundation; closes the largest schema gap in a YMYL vertical. Use HQDM schema validation cascade per SOP. | M | L | Low — validate each schema with the 3-layer pre-deploy gate |
| 6 | GMB audit (DataForSEO Business Data + Maps SERP at Carmel + Bronx + Queens): verify primary category, secondary categories, services list, hours, photo cadence, Q&A, review velocity. Verify 3 outpatient locations each have their own claimed GBP. Output: gap inventory + assignable recommendations to GMB dept. | GMB | Aleksandar audit → GMB dept execution | M1 | Each gap identified gets an assignable line item for the GMB team (which is currently a flagged bottleneck per the HQDM ops memo). | M | M | Low (audit-only) |
| 7 | Add `tap-to-call` event tracking to GA4 (custom event on `tel:` link click, marked as secondary conversion) + Hotjar or GA4 field-level form-event tracking on home/admissions/contact intake forms | Tracking | Tech / On-page | M1 | Tap-to-call channel becomes visible (~0 → ~thousands of measurable events/year). Form abandon-field becomes identifiable. | S | **H** for the measurement itself; M for downstream optimization | Low |
| 8 | Rewrite the 6 service-page narratives to add: trust-signal block (OASAS + Joint Commission + 1982 + 191-bed + employee-owned), insurance disclosure (Medicaid + carriers list once intake-confirmed), real photos of the facility / staff, 2-3 testimonial quotes pulled from existing review base | Content + Website | Content team brief → Aleksa for on-page implementation | M1-M2 | Lift in service-page form-completion rate from baseline (post-action #1 measurement) | M | M | Low — content review against compliance / OASAS messaging rules |

### Month 2 — Build (compound on M1 foundation)

| # | Action | Area | Dept | Month | Expected outcome | Effort | Attribution conf. |
|---|---|---|---|---|---|---|---|
| 9 | Service-page narrative + trust-signal rebuild (continuation of M1 #8 if not complete). **Target word count: 6,000–8,000 per service page (Mountainside model — see Section 1.7a)**. Structured H2/H3 hierarchy; embedded multi-carrier insurance disclosure block per `mountainside.com/admissions/paying-for-treatment/` format; FAQ section eligible for FAQPage schema. | Content + Website | Content + On-page | M2 | Service-page conv rate moves from 1% (post-form-deploy) to 1.5-2%; topical authority + LLM-citation surface increases | L | M |
| 9a | **Pursue CARF accreditation + LegitScript certification** (currently unverified on Arms Acres but standard on Mountainside). Both are independent audits that take 3-6 months to acquire. Initiate applications M2 so credentials land in M3 or Q3. | Risk + Compliance | Aleksandar coordinates → operations + clinical leadership | M2-M3 (applications) | Joint Commission + OASAS + CARF + LegitScript = full YMYL credential stack matching converting competitors | L | L — measurable as credential acquisition + downstream visibility lift |
| 10 | **Topical cluster build**: cluster the 247 KEEP-AUDIT (core topical) blog posts under the 6 service pages via internal-linking templates. E.g., posts on "alcohol withdrawal symptoms", "medicaid cover rehab", "intensive outpatient program iop" → linked from /inpatient/detox-program, /admissions, /outpatient/* respectively. Build a topical-cluster spreadsheet mapping each blog post to its parent service page. | Content + Website | Content + On-page | M2 | Topical authority signal builds. Recovery of organic ranking on commercial queries within 2-3 months. | L | M |
| 11 | **47 off-topic blog posts → DELETE**. **14 off-topic-but-high-traffic posts → NOINDEX**. Use the topical overlay output (`decision_matrix_with_topical.csv`) as the manifest. | Content + Website | On-page + Tech | M2 | Removes ~62K thin-content imp/90d that's pulling no commercial intent; consolidates indexable surface around topical core | M | M |
| 12 | **Local content build #1**: Carmel NY / Hudson Valley landing page rebuild (currently `/service-areas` is the area page and `/inpatient` carries the geographic-modifier title). Add: explicit Putnam County + Westchester + Dutchess + Mahopac + Brewster + Lake Carmel + Mount Kisco coverage; embedded GBP map; distance-to-facility from each neighborhood; transit/driving directions. | Content + Website | Content + On-page | M2 | Captures geo-modified non-brand queries that Arms Acres currently doesn't rank for | M | M |
| 13 | **Backlinks audit & disavow assessment** (DataForSEO Backlinks deep pull: anchor profile, referring domain spam-score distribution, page-level backlink targeting). Surface toxic-pattern referring domains for disavow review. | Off-page | Off-page (Julce) | M2 | Disavow file (if warranted); identification of priority pages under-supported by links | M | L |
| 14 | **Citations rebuild (now LLM-citation-aligned)**: foundational vertical-specific citations prioritized by LLM-citation frequency from the audit: **(1) NYS OASAS Find a Provider** (`oasas.ny.gov` — top cited domain across both audits, 41+ citations combined), **(2) SAMHSA findtreatment.gov** + `findtreatment.samhsa.gov`, **(3) Joint Commission Quality Check** (`qualitycheck.org` + `jointcommission.org`), **(4) directory profiles**: `rehabs.org`, `recovery.com` *(Perplexity's #1 directory, 21 combined citations)*, `rehabs.com`, `psychologytoday.com` *(surfaced in v2 best-in-location audit)*, `addictionresource.com`, `sobercentersofamerica.com`, `startyourrecovery.org`, `addictions.com`, **(5) regional**: NY State Department of Health behavioral health directory, BBB Putnam NY, LegitScript certification listing if granted. **Each profile listing must explicitly enumerate all 5 served regions** (Putnam County / Carmel + Westchester + Dutchess + Bronx + Queens + Hudson Valley + Beacon + Poughkeepsie + Yonkers) — v2 audit showed Arms Acres' LLM entity-recognition is concentrated within ~10mi of Carmel and drops to zero for NYC/Beacon/Poughkeepsie/Yonkers. Forcing the location-association into the citation graph is how LLMs learn the broader catchment. | Off-page | Off-page (Julce) | M2 | Anchors the citation foundation that's currently underbuilt AND is the actual path LLMs use to surface Arms Acres in chat responses; closes the geographic-coverage gap for adjacent counties | M | M |
| 15 | **Author / team page deployment**: clinical team page with bios + credentials + Joint Commission + OASAS license numbers; add `Person` schema. | Content + Website | Content + On-page | M2 | E-E-A-T signal for YMYL vertical; foundation for medical-author markup on blog | M | L |
| 16 | **Bronx + Queens outpatient location pages — separate GBP-anchored landing pages** with each location's own NAP, hours, phone, photos, services, transit info. Each gets its own MedicalBusiness schema (deployed in M1 #5). | Content + Website | Content + On-page | M2 | Outpatient locations gain their own local-pack representation rather than being collapsed under inpatient Carmel | M | M |

### Month 3 — Expand + Reinforce

| # | Action | Area | Dept | Month | Expected outcome | Effort | Attribution conf. |
|---|---|---|---|---|---|---|---|
| 17 | **Topical cluster build continuation**: extend the M2 internal-linking map to cover the additional ~250 AUDIT-category blog posts (after human-pass review). Map each retained post to either a service page, an outpatient location page, or to a higher-funnel topical hub. | Content + Website | Content + On-page | M3 | Compound the M2 topical authority signal | L | M |
| 18 | **Service-page expansion**: build (currently missing) service pages for client's actually-offered services that don't yet have their own URL: MAT-standalone (currently buried in /service/medication-assisted-therapy-in-carmel-hamlet-ny), dual diagnosis (no current page despite mention in clinical offerings), aftercare / alumni program (currently /service/alumni — thin) | Content + Website | Content + On-page | M3 | Captures non-brand commercial queries for MAT + dual diagnosis (no current ranking) | M | M |
| 19 | **PR / digital-PR placements targeting authority recovery + behavioral-health domains** (no specific list yet — drive from M2 backlinks audit). Target: 2-3 placements in NY-regional or addiction-recovery-specific authoritative outlets | Off-page | Off-page (Julce) | M3 | Authority signal lift to specific priority pages | L | L |
| 20 | **LLM visibility build (reframed per LLM audit)**: (a) Structured FAQ blocks on service pages with FAQPage schema + first-person Q&A formatting for the highest-volume LLM prompts the audit surfaced (Carmel/Hudson Valley/Putnam County addiction-treatment queries, insurance-coverage queries, OASAS/Joint Commission accreditation queries); (b) **Wikidata + Wikipedia entity presence audit** — Arms Acres at 40+ years old, OASAS-licensed, Joint Commission-accredited, 191-bed has notability for Wikipedia; this is the highest-leverage Gemini-visibility lever (Gemini's 0% brand-mention rate in the audit suggests Knowledge Graph gap); (c) Google Knowledge Panel claim if not already done; (d) named-entity-rich content with explicit address/phone/credential mentions structured to be quotable by LLMs; (e) re-run the LLM audit quarterly to track shift. | Website + Content | On-page + Content | M3 | Realistic ceiling: 10-15% direct armsacres.com LLM-citation rate (vs current 1.6%); Gemini brand-mention rate 0% → 30%+ via Wikipedia/Knowledge Graph; foundational entity surface for AI Overview (when YMYL surfacing activates) | M | L — measurable as LLM-audit re-run quarterly + GA4 LLM-referrer trend |
| 21 | **Local Dominator scan deployment**: set up Arms Acres LD grid for `drug rehab carmel ny`, `alcohol rehab carmel ny`, `inpatient rehab hudson valley`, `outpatient rehab bronx`, `outpatient rehab queens`. Baseline scan after M1+M2 work lands. Compare grid coverage vs Surfpoint's tracked patterns. | GMB + Tracking | Aleksandar | M3 (one-time setup; ongoing monthly thereafter) | Per-cluster grid baseline for the next quarter's strategic review | S | – |
| 22 | **Q3 2026 strategy refresh prep**: pull updated decision_matrix; re-run topical overlay; re-run SERP scrape; document M1+M2+M3 actual outcomes vs expected; identify next-quarter levers | All | Aleksandar | end of M3 | Quarterly cycle continuation | M | – |

---

## 3. Strategic Focus — what to push (consolidated)

Push, in priority order:

1. **Inpatient detox + adult rehab** (Carmel NY, Hudson Valley) — the differentiated 191-bed clinical product that no NYC outpatient-focused competitor matches.
2. **Outpatient (Carmel + Bronx + Queens)** — three separate map-pack opportunities, each with its own GBP. Currently underbuilt: outpatient locations don't have their own schema, distinct LocalBusiness profiles, or location-specific content depth.
3. **MAT (medication-assisted therapy)** — currently buried in service-modifier URL. Standalone service-page rebuild captures non-brand MAT queries in NYC + Hudson Valley.
4. **Insurance acceptance** — Medicaid is the qualifying claim that opens a large NY-state customer base (NYS OASAS-licensed + Medicaid acceptance is a differentiator). Currently absent from service-page copy entirely.

Do **not** push:
- The `/suburb/` doorway tree — actively kill it
- The off-topic drug-interaction blog content — NOINDEX or delete
- The duplicated `/service/<name>-in-carmel-hamlet-ny` URLs — redirect to canonical
- LLM AIO optimization as M1 priority (track + foundation only — the vertical doesn't surface AIO yet)

---

## 4. Resilience Layer

Brand-driven traffic (Direct + GMB-click combined: ~57,150 sessions / 302 conv / 365d = ~57% of all conversions) is the resilience layer. The cleanup + intake-form work in M1-M2 is the *expansion* layer. Loss of either kills revenue; the brand-driven channel is the floor and the M1+M2 work is what raises the ceiling.

**Risk:** none of the M1 actions touch the homepage or the GMB profile in ways that risk the brand-driven channel — except action #2 (homepage `og:description`), which is *replacing* a defect, not introducing one. Action #5 (schema deployment on homepage) needs the 3-layer validation cascade pre-deploy.

---

## 5. Open Questions — Items to Determine During Execution

The strategy is defensible end-to-end without these answers, but each one shapes the execution of specific M1-M3 items. Tracked here so they don't get lost.

### 5.1 Binary verifications (yes/no, shift specific items)

| # | Question | What hangs on the answer |
|---|---|---|
| 1 | **Is Arms Acres CARF-accredited?** | If yes → drop M2 #9a "pursue CARF" and instead "surface existing CARF badge on every service page + footer + GBP." If no → keep #9a as a 3-6 month application track. |
| 2 | **Is Arms Acres LegitScript-certified?** | Same logic. If yes → surface. If no → applies. LegitScript is a YMYL trust signal that Mountainside surfaces on every page. |
| 3 | **Is Arms Acres listed on findtreatment.samhsa.gov?** | If yes → confirm listing accuracy + secondary categories. If no → file the listing in M2 (this is the #1 LLM-cited domain by Gemini). |
| 4 | **Is Arms Acres listed on the NY OASAS Find-a-Provider directory?** (oasas.ny.gov) | Top-cited domain in LLM responses (30 citations across audits). If listed → verify accuracy + service description. If not → file the listing — top citation-acquisition target. |
| 5 | **Is `healthyclass.com` an intentional partner / network member, or accidental?** | 15,644 of 17,209 backlinks (90.9%) come from this one sitewide-template referer. Spam-neutral (19), so no urgent action — but worth knowing whether to leave alone or clean up. Same question for `addiction-programs.net` (2,203 GSC linking pages) and `americanaddictionfoundation.com` (1,642). |

### 5.2 Operational + clinical context (shape priority)

| # | Question | What hangs on the answer |
|---|---|---|
| 6 | **What insurance carriers does Arms Acres actually accept** (in-network)? | Confirmed from site copy: Medicaid + Beacon. Industry-standard for OASAS-licensed rehabs is also Aetna / Cigna / BCBS / Empire / UHC / Tricare / Medicare. Action: confirm with intake team, then populate the insurance-disclosure block (M1 #8) and the per-service-page disclosure (M2 #9). Mountainside's gold-standard list is 12+ carriers. |
| 7 | **Has Arms Acres had any prior Google penalties or GMB suspensions?** | Affects how aggressively M1 cleanup can move. Live indexation looks healthy (95% indexed), so probably no current action — but quarterly history would confirm. |
| 8 | **Are the medication-error / cardiac-arrest / discrimination claims surfaced in 1-star reviews currently in litigation or regulatory escalation?** | Affects how M2/M3 review-velocity work is sequenced. **HQDM cannot run a review-acquisition program when active complaints are unresolved.** Compliance gate before launch. |
| 9 | **Is there a known operational fix in progress for the "intake department phone never answers" pattern surfaced in 5+ reviews?** | Frontline phone responsiveness is the single most-cited negative pattern. SEO can't fix this — it's an ops finding. Needs principal-level escalation to Arms Acres leadership. |
| 10 | **Is there a Queens outpatient operational reality (real intake clinicians, full hours, full services) that matches the website page?** | The Queens GBP exists at 90-02 161st St Jamaica with 2.2★/16 reviews — but if the location is staffed only part-time / not at parity with Bronx + Carmel, the review-velocity push will surface those gaps. |

### 5.3 Strategic context (shape sequencing)

| # | Question | What hangs on the answer |
|---|---|---|
| 11 | **What was the last quarter's strategy (if any), and what items rolled in/out?** | Affects M1 ordering — we don't want to re-relitigate work already started or sequenced last quarter. |
| 12 | **Was the wrong-brand "Bold Steps Behavioral Health" og:description and the cross-swapped Bronx/Queens phone numbers noticed by the team before this audit?** | Tells me whether these are net-new findings (red flag for QA process) or known issues with backlog reasons. Not blocking, but informs the team conversation. |
| 13 | **Is Milica or the Arms Acres AM setting the priority ordering of M1 items, or am I?** | Two of the M1 items (review-velocity launch, healthyclass.com cleanup decision) are best-handled at AM-level. |
| 14 | **Does Arms Acres want HQDM to recommend Local Dominator scan setup for Bronx + Queens** (which keywords + grid sizes)? | Recommended set in Section A below; needs LD admin to set up the scans. |

---

## 6. Questions for the Team (early-cycle followups)

Items that need direct conversation with Milica, Aleksa, Julce, Marija, or the GMB team owner before the strategy doc moves to the Tracker:

- **Account Manager (TBD — Arms Acres AM not yet identified to me):** Asana intake → confirm the Q2 strategy doc is the deliverable (vs a strategy meeting + tracker entries). Confirm review-velocity-program launch is OK before clinical-incident issues are confirmed-cleared.
- **Aleksa (On-page lead):** Walkthrough of the M1 items that are on-page deliverables (#1, #1a phone fix, #1b sitemap removal, #2 og:description fix, #3 service-duplicate redirects, #5 schema deployment) — capacity + sequencing.
- **Julce (Off-page lead):** Walkthrough of M1 #1c disavow filing + M2 #14 citation rebuild prioritization. The disavow file structure I can hand over; what's Julce's existing GSC disavow workflow?
- **Marija (Reporting lead):** What attribution model is Marija using for the Quarterly Strategy Tracker `Result/Notes` column? Each M1 item has an Expected Outcome (numeric) — does Marija want pre/post measurement done at the URL level, the page-section level, or the channel level?
- **Milica (Principal):** Two items need principal-level visibility before execution: (a) the cardiac-arrest medication-error review claim and what it means for review-velocity timing; (b) the `healthyclass.com` 90.9% backlink concentration — known partnership or to-be-investigated?
- **GMB team owner:** Why have 217 GMB Ops tasks over 24 months not moved the inpatient rating above 3.2★, and which sub-tasks were actually executed vs theatre? Workflow audit before launching new programmatic review-velocity work.

---

## Appendix A — Pending data + open data-pulls

### A.1 Data items still expected from Ace

- ~~Web Vitals reports~~ ✓ **DELIVERED** 2026-05-11 (Section 1.6). CWV passed; no further action.
- ~~GSC manual exports~~ ✓ **DELIVERED** 2026-05-11. Crawl Stats (Section 1.5), Top Linking Sites (Section 1.8), Top Target Pages (used for internal-link distribution audit).
- ~~Asana intake CSV~~ ✓ **DELIVERED** 2026-05-11 (Section 1.10a).
- ~~Local Dominator scans~~ ✓ **PARTIAL** — 4 scans delivered (3 keywords × Carmel coords). Pending: Bronx + Queens coordinate scans.
- Confirmation of Open-Questions items in Sections 5.1–5.3.

### A.2 Recommended Local Dominator scan additions

Based on the Carmel-grid 100% dominance + the Bronx + Queens visibility gap, the highest-value LD scan set to add:

**Bronx outpatient grid (anchor: 3584 Jerome Ave, ~40.8748 / -73.8995):**
- `outpatient rehab bronx`
- `drug rehab bronx`
- `alcohol rehab bronx`
- `MAT clinic bronx`
- `suboxone clinic bronx`

**Queens outpatient grid (anchor: 90-02 161st St Jamaica, ~40.7099 / -73.7903):**
- `outpatient rehab queens`
- `drug rehab queens`
- `alcohol rehab queens`
- `MAT clinic queens`
- `methadone clinic queens`

**Carmel grid expansions (since current 4 scans confirm domination — these would track risk):**
- `outpatient rehab carmel ny`
- `MAT treatment hudson valley`
- `inpatient rehab putnam county`

Total proposed scan set: 13. At HQDM-standard 169-point grids, monthly cadence, this is the right size to track meaningful trend without LD-budget bloat.

### A.3 Keywords where Ahrefs enrichment would tighten the analysis

DataForSEO Search Volume Phase 2 returned Bing-only data on several high-value commercial-intent terms (Google Ads suppresses sensitive-vertical volumes):

| Keyword | Google Ads vol | Bing vol | DataForSEO max | Ahrefs reuse opportunity |
|---|---:|---:|---:|---|
| `residential rehab` | NaN | 21,410 | 21,410 | **Reuse from Surfpoint** — relevant for both Hudson Valley + NYC catchments |
| `inpatient rehab` | NaN | 1,220 | 1,220 | **Reuse from Surfpoint** |
| `alcohol rehab` | NaN | 640 | 640 | **Reuse from Surfpoint** |
| `drug rehab center` | NaN | 3,830 | 3,830 | **Reuse from Surfpoint** |
| `suboxone treatment` | NaN | 940 | 940 | **Reuse from Surfpoint** if MAT enrichment was pulled |
| `MAT treatment carmel ny` | (not pulled in v2 set) | (not pulled) | — | **Need fresh Ahrefs** — Carmel/Putnam-specific MAT volumes |
| `outpatient rehab bronx` | (not pulled) | (not pulled) | — | **Need fresh Ahrefs** — Bronx-specific outpatient volumes |
| `methadone clinic bronx` | (not pulled) | (not pulled) | — | **Need fresh Ahrefs** — Bronx MAT |
| `outpatient rehab queens` | (not pulled) | (not pulled) | — | **Need fresh Ahrefs** — Queens-specific |
| `methadone clinic queens` | (not pulled) | (not pulled) | — | **Need fresh Ahrefs** — Queens MAT |

**Reuse-from-Surfpoint set:** the 5 generic terms above (residential rehab, inpatient rehab, alcohol rehab, drug rehab center, suboxone treatment) have national volumes that apply to Arms Acres' Hudson Valley + NYC catchments equally — no need to re-enrich.

**Fresh Ahrefs needed:** Bronx + Queens + Carmel-specific geo-modified terms (5 from the Bronx set, 5 from the Queens set, 3 from the Carmel expansion). 13 keywords × Ahrefs Keywords Explorer = the volume + parent-topic data DataForSEO can't supply for these geo-modifiers. Worth pulling.

### A.4 Pending data-pulls / DataForSEO refinements

- **Queens GBP reviews** (Queens CID couldn't be resolved via DataForSEO Business Listings even with location_coordinate at Jamaica + brand description; the listing exists but DFS's index doesn't surface it through that filter). Alternative: pull via DataForSEO SERP Knowledge Panel for `Arms Acres Outpatient Queens` query, or pull via direct place_id (need to fetch from Google Maps URL).
- **Carmel outpatient + Bronx outpatient reviews via DataForSEO Reviews task_post** — currently the script returned ratings but not review-text bodies on these two; depth-50 hit only inpatient. May need separate pulls with location-coord at each location to seed the task properly.

---

*Per Ace 2026-05-11: HQDM does not deliver execution — items above are assignable to HQDM departments (On-page = Aleksa Popovic, Off-page = Julce Bartolome, Content team, GMB team) for execution, with Aleksandar owning the strategy + measurement + reporting alignment with Marija.*
