# Surfpoint Site Architecture Audit — Methodology & Approach

**Companion to:** Surfpoint Site Architecture Audit (the consolidated Google Sheet)
**Author:** Aleksandar Spasevski · **Date:** 2026-05-12
**Audience:** Aleksa Popovic (On-Page lead), Content team, Zach DeLorenzo (Asana lead)

---

## 1. Why this audit exists

Between **Feb 7 and May 4 2026** (87 days), Google's quality systems issued an active negative signal against surfpointrecovery.com. The signal isn't a manual action — it's the algorithmic re-evaluation pattern that follows a topical-authority assessment.

What the GSC data shows:

| Metric | Reading |
|---|---|
| URLs flagged "not indexed" in Coverage | **756** (562 of those: "Crawled — currently not indexed") |
| Total URLs known to Google | **−37%** over 87 days |
| Daily impressions | **−77%** over 87 days |
| Mar 16 crawl-stats anomaly | **524 crawl requests in one day** vs ~70-100 baseline |

**The strategic read:** Google has already made the cleanup decision on the bulk of the site. The 756 "not indexed" URLs are an instruction, not a problem to argue with. The question this audit answers is: **how fast can we align the indexed surface to that signal so the remaining pages become Google's canonical view of Surfpoint and impression recovery can begin?**

---

## 2. The approach — evidence per URL

Every URL on the site (878 indexable URLs at audit start) was evaluated against four evidence sources:

1. **GA4** — sessions, users, conversions, engagement rate at 30/90/365 day windows
2. **GSC** — clicks, impressions, average position, 90-day trend at the URL level
3. **DataForSEO Backlinks** — referring domains and dofollow count per page (used as an equity-preservation filter — a URL with real incoming links shouldn't be killed even if its traffic is weak)
4. **Topical relevance overlay** — does this URL serve the core addiction-treatment buyer journey, an adjacent topic (mental health, sleep, therapy), or off-topic content

The combination of these four signals decides the action lane each URL goes into. The rule of thumb: **no URL is killed on a single data point.** A blog with 0 GSC clicks still earns a KEEP-AUDIT if it has 1 conversion in GA4 + a real backlink. A blog with 50k impressions still earns a deletion if it's off-topic and bounces hard. The matrix is the v2 iteration of the decision model — the v1 version would have auto-killed ~450 URLs on traffic data alone; v2 surfaces them for human review because **topical-authority assets are how Google decides which sites get to rank in this vertical**, and killing them en masse would damage the recovery curve.

---

## 3. The 9 tabs — what each one is

The consolidated Google Sheet has 9 tabs. Tabs 1-8 are the **decision layer** (what each URL should become). Tab 9 (**Ongoing Tasks**) is the **execution layer** — the live tracker the team works against day-to-day, where each row carries its own explanation of what to do next.

### 3.1 Actions

The legend / summary tab. Maps each lane to its action, default owner, and target phase (M1 / M2 / M3 / Q3). Read this first to set context before opening any of the other tabs.

### 3.2 KEEP (18 URLs)

**What:** The core revenue and utility surface. These are the pages Surfpoint earns from and the pages users transact on.
**Examples:** `/` (homepage), `/treatments`, `/admissions`, `/areas-served`, `/about-us`, `/contact-us`, `/careers`, `/faq`, `/reviews`, `/expectations`, `/blog` (hub), `/confidentiality-notice`, `/privacy-policy`.
**Why:** These URLs convert, have backlinks, or are essential utility pages.
**Action:** Leave as-is in this audit. Task 1 owns rebuild/refresh on these (homepage rewrite, treatments hub update, areas-served reset, etc.).
**Don't touch** unless Task 1 is owning the change.

### 3.3 KEEP-AUDIT (29 URLs)

**What:** Real-catchment Brooklyn location pages (real neighborhoods Surfpoint can clinically serve) + 5-6 conversion-signal blogs.
**Examples:** `/locations/accredited-addiction-recovery-center-in-bay-ridge-ny`, `/locations/coney-island`, `/locations/recovery-center-in-marine-park-ny`, `/blog/the-history-of-drugs`, `/blog/what-happens-when-you-get-your-stomach-pumped`.
**Why:** Some signal but not strong enough to leave fully alone — these pages need a 5-minute review each to confirm they still do their job (one clear CTA, internal link out to a service page, accurate clinical claim).
**Action:** Light review per URL. On-Page owns.
**Output per row:** Confirm KEEP as-is, or add one internal link to a service page if missing.

### 3.4 AUDIT (core topical) (363 URLs)

**What:** Blog URLs on core addiction-treatment topics — detox, rehab, recovery, withdrawal, treatment access. This is the **bulk of the new work** in this audit.
**Examples:** `/blog/how-to-help-someone-with-a-porn-addiction`, `/blog/withdrawal-from-alcohol-using-hydroxyzine`, `/blog/how-long-does-it-take-for-weed-to-leave-your-system-common-myths-and-facts`, `/blog/dopamine-detox-timeline-explained-key-phases-and-duration`.
**Why:** Each of these URLs is a potential topical-authority asset. The v1 framework would have auto-killed most of them on weak traffic data. The v2 topical overlay correctly surfaces them as eyes-on work because at the site level, this lane *is* what makes Surfpoint a topical authority for Google. Mass-killing them weakens the core surface; keeping them all untouched leaves real cleanup on the table.
**Action:** 5-minute triage per URL → one of {keep with internal link added, rewrite, remove, redirect}.
**Owner:** Content + Aleksa cosign.
**Phase:** Split across M1 / M2 / M3 in 3 monthly batches of ~120.
**Triage rule:**
1. Does the URL match a service page? → redirect to that service page
2. Is it a near-duplicate of another KEEP page? → redirect to that page
3. Does it cover a core topic AND rank for relevant queries (≥5 clicks/365d)? → keep + add internal link to a service page
4. Recently published (<6mo) or has backlinks but doesn't rank? → keep if salvageable; else remove
5. Off-topic for addiction treatment? → remove

### 3.5 AUDIT unclassified w/ traffic (86 URLs)

**What:** Blogs that earn meaningful traffic but don't cleanly fit the topical taxonomy — mostly alcohol-and-medication interactions, body-system effects (alcohol + gallbladder, alcohol + specific meds), or substance Q&A.
**Examples:** `/blog/whiskey-and-acid-reflux`, `/blog/what-drugs-cause-bags-under-eyes`, `/blog/dangers-of-mixing-alcohol-and-buspar`, `/blog/how-much-whiskey-to-get-drunk`.
**Why:** These earn traffic but don't directly serve the buyer journey. Triage decides whether each one gets rewritten toward the service area (route the reader to a treatment page), kept as standalone info content, or removed.
**Action:** 5-minute triage per URL.
**Owner:** Content.

### 3.6 AUDIT framework-ambiguous (95 URLs)

**What:** URLs that had a signal in the data but didn't match any framework bucket cleanly — high-traffic blogs that don't fit core/adjacent/off-topic, location pages with edge-case neighborhoods, and "other"-type pages.
**Examples:** `/blog/mixing-xarelto-and-alcohol` (947 sess/90d, high-CTR but tangential), `/REVIEW` and `/REVIEWS` (real GA4 sessions but probably template debris — note these are not the same as the KEEP `/reviews` page), `/old-home`, `/8c6cbc32f40dcb9f8b8e61b2c5d04f2b4a4711cdd2057364288bd1925a700806` (a SHA-256-style hash path that GA captured once — likely plugin debris or a verification file), `/locations/new-york-city`, `/locations/staten-island`.
**Why:** When traffic exists but the page doesn't match service / location / clean topic patterns, the safe move is to eyeball each URL individually rather than apply a default. Many of these will collapse into KEEP or DELETE after a 30-second check on the live site.
**Action:** Per-URL judgment call.
**Owner:** On-Page.

### 3.7 DELETE (213 URLs)

**What:** The mechanical removal lane. This consolidates three sub-cases:
- **Paginated artifacts + orphan stubs** (~99 URLs): template debris (e.g. paginated query-string variants) and orphan blog stubs with 0 clicks / 0 conversions / no backlinks / off-topic. No salvage value.
- **Off-topic with shallow traffic** (~121 URLs): off-topic content that earns minimal traffic. Removing it stops dragging down the site-level quality signal Google evaluates.
- **Off-topic with traffic that's the wrong audience** (~7 URLs): higher-traffic off-topic content. Examples: `/blog/rappers-with-drug-addiction`, `/blog/viagra-and-alcohol`, `/blog/how-to-get-rid-of-alcohol-breath`, `/blog/rare-and-weird-phobias` — the traffic is there but it's the wrong audience and the topical signal hurts the rest of the site.

**Action:** Remove the URL. Implementation detail (status code, sitemap removal, internal-link cleanup) is captured per-row in the Ongoing Tasks tab.
**Owner:** On-Page.
**Phase:** M1, single deploy window with the redirects.
**Pre-execution gate:** For URLs that have ≥2 quality referring domains, route to REDIRECT instead so the equity is preserved. Expected reroute volume: ~5-10 URLs from this lane.

### 3.8 Redirect Map (49 × 301s)

**What:** Every redirect this audit specifies, in one place. Three sub-cases:
- **27 NJ out-of-state doorways** → `/areas-served`. Examples: `/locations/jersey-city`, `/locations/newark`, `/locations/paterson`, `/locations/trenton`. Compliance: a NY-only OASAS-licensed facility advertising service in NJ is regulator-visible deceptive geo-targeting, plus they're doorway-pattern pages Google penalizes.
- **9 out-of-borough NYC doorways** → `/areas-served`. Examples: `/locations/queens`, `/locations/bronx`, `/locations/harlem`, `/locations/washington-heights`. Same doorway problem, intra-state.
- **5 `/services/*` legacy URLs** → `/treatments/[matching-service]`. Each ships only when its destination sub-page is built (Wave 1 = M1, Wave 2 = M2, Wave 3 = M3). `/services/benzodiazepine-detox-services` carries 91% of the orphan-service-page impressions and is the lead candidate to accelerate into M2.
- **`/services` parent** → `/treatments` immediately (currently broken — fixes a pre-existing technical defect).

**Owner:** On-Page.

### 3.9 Ongoing Tasks (the live execution tracker)

**What:** The operational tab where audit decisions become assigned, trackable work items. Tabs 2-8 say *what each URL should become*; this tab says *who is doing what, when, and how.*

Each row in this tab carries its own short explanation of what to do next — the team member opening a row knows exactly how to approach the work without needing to re-read this methodology doc or hunt for an SOP. The tab will be populated progressively as we move through the 3-month execution window:

1. **Week 1 (M1):** All obvious mechanical work — the Redirect Map's 49 redirects + the DELETE lane's 213 removals + sitemap rebuild + internal de-linking pass. These don't require triage decisions; they're already specified per URL.
2. **Weeks 2-4 (M1) → M2 → M3:** AUDIT triage outputs land here in monthly batches of ~180 URLs. Each triaged URL either generates a task or closes out as KEEP.
3. **Rolling (M1-M3):** Page-level updates on KEEP URLs — homepage rewrite, treatments hub update, services sub-page builds, areas-served rebuild, schema deployment, `/reviews` refresh — these run in parallel with the cleanup.

The tab is the audit's heartbeat. When a row moves to Done, it should leave a trail back to the metric that confirms the change worked. When the team needs to know "is this audit working?" the answer is the weekly delta on the three site-level metrics in §6, not the count of closed tasks.

---

## 4. Implementation phasing

The 3-month execution window runs M1 → M2 → M3, with phases running in parallel rather than in strict sequence. The **Ongoing Tasks tab is the single source of truth for what's in flight at any given moment**; the phases below describe the cadence the tab is loaded against.

### 4.1 Phase A — Mechanical cleanup (M1, single deploy window)

The DELETE lane and most of the Redirect Map ship together in **one M1 deploy window**:

- 213 URLs removed
- 43 URLs redirected to `/areas-served` (NJ + out-of-borough doorways)
- `/services` parent redirected to `/treatments` immediately
- Internal de-linking pass — remove any links from KEEP pages pointing to URLs being killed
- Sitemap rebuilt + GSC submit + baseline metrics snapshot

**Why one window:** Doing all operations in a single deploy maximizes the quality signal Google sees in one pass. Spreading it across weeks creates intermediate states that delay re-evaluation.

### 4.2 Phase A.5 — `/services/*` redirects (rolling M1 → M3)

Each `/services/*` URL only redirects to `/treatments/[service]` **once its destination sub-page is live**. A redirect to a non-existent destination either breaks or falls back to the `/treatments` hub and loses the topical relevance the source URL was carrying.

- Wave 1 (M1): `/services/alcohol-detox-services`
- Wave 2 (M2): `/services/opioid-detox-services`, `/services/comprehensive-short-term-rehab`
- Wave 3 (M3): `/services/drug-detox-services`, `/services/benzodiazepine-detox-services`

### 4.3 Phase B — AUDIT triage (M1 weeks 2-4, M2, M3)

The 544 URLs in the four AUDIT lanes (363 + 86 + 95) get split into three monthly batches of ~180:

- M1 weeks 2-4: batch 1
- M2: batch 2
- M3: batch 3

Each URL gets a 5-minute triage. The ~50 URLs in AUDIT (core topical) that warrant a rewrite get a separate 30-minute rewrite slot. **Each triage decision becomes a row in Ongoing Tasks**, so the team has a live work queue instead of a static spreadsheet.

### 4.4 Phase B.5 — Page-level updates on KEEP URLs (M1-M3, rolling)

Running alongside the audit cleanup are the larger page-level updates on KEEP URLs — homepage rewrite, treatments hub update, services sub-page builds (Waves 1-3), areas-served rebuild, `/reviews` refresh, `/about-us` and `/admissions` updates, schema deployment. These are tracked as rows in Ongoing Tasks, mostly drawn from the Task 1 brief.

The reason these run in parallel rather than after cleanup: a clean indexed surface is only half the recovery. The other half is **better pages where they remain**. Doing cleanup first and updates second wastes ~6 weeks where Google sees a smaller-but-not-yet-better site.

### 4.5 Phase C — Q3 audit-back (August 2026)

The Q3 checkpoint is what makes this cleanup **defensible and reversible**. At Q3 we re-pull:

- GSC Coverage + per-URL clicks/impressions/conversions for every removed or AUDIT-triaged URL
- Recovery curve: total impressions, total URLs in index, average position on tracked queries

Decisions at Q3:

- A removed URL that's lost no value → leave removed (it's gone from Google anyway)
- A KEEP+REWRITE that moved metrics → promote (more internal links, expand the topic cluster)
- A KEEP+REWRITE that didn't move → demote back to remove
- The recovery curve says no movement → escalate to a wider strategy review

---

## 5. Dependencies and out-of-scope blockers

This audit doesn't ship in isolation — there's one dependency that has to land alongside it for the work to function:

**The `/areas-served` page is currently broken** (Task 1 §1). The 43 redirects in the Redirect Map all land on `/areas-served`. **The `/areas-served` rebuild must ship in M1**, ideally the same week as Phase A, or the redirect destination doesn't function and the doorway URLs effectively land on a broken page. This blocker sits with Task 1, not this audit, but it's the single most important coordination point — flag it in the M1 kickoff.

Everything else this audit specifies is internally self-contained: the team has the URL list, the action per URL, and (via Ongoing Tasks) the per-row instructions to execute.

---

## 6. What success looks like

Three site-level metrics get tracked **weekly** in the Ongoing Tasks tab — these are the metrics every completed task ultimately rolls up to. Tracking weekly (not monthly) catches direction-changes early enough to course-correct inside the 3-month window:

1. **Total URLs known to Google** — should stabilize, then grow modestly across M1-M3 (GSC Coverage report)
2. **Daily impressions** — should bottom out within 30-45 days of the M1 Phase A deploy, then begin recovering (GSC Performance — 7-day rolling)
3. **Average position on tracked queries** — should improve for KEEP and KEEP-AUDIT URLs as the site-level quality signal normalizes (GSC Performance + Local Dominator)

**The 3-month cadence:**

- **M1 weeks 1-2 — expected dip** in URLs known and impressions as the mechanical cleanup deploys. This is correct; Google needs ~2 crawl cycles to register the cleanup.
- **M1 weeks 3-4 → M2 — bottom and pivot.** Daily impressions hit their lowest point, then recover as the remaining surface gets re-evaluated as cleaner.
- **M2 → M3 — recovery slope.** Impressions climb. KEEP-AUDIT and REWRITE tasks start showing up as position improvements on individual URLs.
- **Q3 audit-back — verdict.** All three metrics evaluated against the Phase A baseline snapshot.

If all three metrics are moving the right direction by Q3, the cleanup worked and the next quarter shifts from cleanup to growth (new service-page content, expanded location pages, internal link refactor).

If one or more metrics is flat at Q3, the cleanup needs more time to register, or external factors not addressable by on-page work are at play — either way the next step is a wider strategy review rather than more cleanup tasks.

**What the team should do mid-cadence:** If a weekly check shows a metric moving wrong way for two consecutive weeks, **pause new task creation** and review what's deployed. The Ongoing Tasks tab makes this visible — the team can see exactly which tasks landed in that window and trace the metric back to a specific deploy.

---

## 7. Sources

- `exports/decision_matrix_with_topical.csv` — 878-URL v2 bucketed matrix
- `Surfpoint_Recovery_Q2_2026_Custom_Strategy.md` §1.1 (deindexing event), §2.1 (decision logic)
- `Surfpoint_Services_Legacy_Redirect_Plan.md` — the 6 `/services` URL overrides
- `Surfpoint_Task4_Index_Hygiene_Brief.md` — original action-lane definitions and phase plan
- GA4 `pages_last_365d.csv` + `pages_last_90d.csv` — traffic evidence
- GSC manual exports — Coverage, Crawl Stats, Top Target Pages (May 2026)
- DataForSEO Backlinks `domain_pages` — pulled 2026-05-11 (equity-preservation filter)

The data layer can be re-pulled at any time; the methodology is meant to be **reproducible per-client**, not Surfpoint-specific. The same evidence model (GA + GSC + DataForSEO + topical overlay) is being applied across the other Recovery accounts (Arms Acres, Conifer Park, Urban Recovery, Niagara) in parallel.
