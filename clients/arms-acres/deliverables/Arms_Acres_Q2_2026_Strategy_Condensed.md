# Arms Acres — Q2 2026 Strategic Diagnosis

**Account tier:** Tier 1 / YMYL · **Prepared:** 2026-05-14 · **Author:** Aleksandar Spasevski, HQDM Search Intelligence
**Scope:** Inpatient Carmel NY + 3 NYC-metro Outpatient clinics. Identify where the visibility surface is dominating, where it leaks, and where the next quarter of execution routes.
**Data sources:** Local Dominator grids (Queens OP + Inpatient Carmel), DataForSEO Maps SERP + Business Data, GSC pages + queries, on-site crawl, public-side GBP profile audit across 4 pins + 5 competitor pins.

---

## TL;DR

**Inpatient Carmel is dominating Putnam County across 169 cells and 4 priority generic queries — and it's getting better.** Jan 27 → Apr 22 scan-over-scan: top-3 coverage improving on `drug rehab` (101→111 cells), `alcohol rehab near me` (115→123), `detox center near me` (128→130). 100% top-20 coverage across all 169 cells on those 3 queries. Carmel OP additionally co-ranks alongside Inpatient at #1+#2 on the Carmel-branded queries (carmel recovery / carmel new york rehab / carmel methadone clinic) across 100% of cells — but Carmel OP does **not** appear in top-20 on the generic high-intent terms where Inpatient solo-dominates. **The Carmel OP rank-pushing opportunity is real**: access would unlock pushing it onto the same generic queries Inpatient already owns.

**Queens is competitive with rank-pushing headroom**, not invisible. The 169-cell Jamaica-Queens grid shows AA in 100% of cells in top-20, 93-95% in top-10, 12-25% in top-3, median rank 5 on alcohol rehab + drug rehab. The lever is converting more cells from top-10 into top-3, not building visibility from zero.

**Bronx is a data gap.** No LD grid exists at AA's actual Norwood pin coord. Any "Bronx visibility" claim before that grid lands is unsupported by measurement.

**Four forces stacked, in order of explanatory weight:**

1. **Service-page conversion mechanism is missing.** 24,000 sessions / 365d on /service/* + /inpatient/* + /outpatient/* produce 0 form-conversions because there is no form on the page — only a Call Now button. At conservative 2-3% form-completion rates on high-intent SUD service pages, this is +480 to +720 annual conversions left on the table, comparable to or exceeding the entire portfolio's current 531/yr baseline.
2. **GBP profile depth gap on 3 of 4 pins, all AA-managed.** HQDM has manager access only to Inpatient Carmel. Carmel OP description = 201 chars, Queens OP = 33 chars (vs Ascendant 750). Categories, attributes, Q&A, Posts, photos all well below competitive depth on the 3 unmanaged pins.
3. **Schema deployment is bare.** Organization on homepage only; nothing on /service/* or /inpatient/* or /outpatient/*. Closes the rich-result eligibility gap on the highest-intent pages.
4. **71 templated /suburb/* doorway pages + 4 city-modifier /service/* near-duplicates.** Doorway surface needs audit-and-improve treatment, not blanket-NOINDEX — 348 clicks / 127K imp / 365d is real signal to preserve while quality is fixed.

---

## §1 Maps grid trend — per pin, per query

Three pins have grid coverage. Inpatient Carmel and Carmel OP are **separate GMB listings tracked separately** — they share the same geography but appear in different LD scans depending on the keyword tracked.

### Inpatient Carmel (75 Seminary Hill Rd) — 169-cell grid, ~2-mi spacing, monthly cadence

| Keyword | Jan 27 cells appearing | Jan 27 top-3 | Apr 22 cells appearing | Apr 22 top-3 | Δ top-3 (Jan→Apr) | Read |
|---|---:|---:|---:|---:|---:|---|
| drug rehab | 169 | 101 | 169 | 111 | **+10** | Improving |
| alcohol rehab near me | 169 | 115 | 168 | 123 | **+8** | Improving |
| detox center near me | 169 | 128 | 169 | 130 | **+2** | Steady, near-saturation |
| rehab *(broadest)* | 105 | 24 | 88 | 21 | **−3** | Slight decline; weakest query |

100% top-20 coverage on all 3 high-intent queries. Median rank 2-8. The `rehab` plain-vanilla query is the only slipping signal — broadest term, hardest to defend.

### Carmel OP (21 Old Rte 6) — appears in branded-query scans only

| Keyword | Carmel OP appearance | Notes |
|---|---|---|
| carmel recovery (Jan 27 + Apr 22) | 169/169 cells at rank 2 | Co-ranks alongside Inpatient at #1+#2 in every cell |
| carmel new york rehab (Apr 22) | 169/169 cells at rank 2 | Same co-rank pattern |
| carmel methadone clinic (Jan 27) | 169/169 cells at rank 2 | Same co-rank pattern |
| drug rehab / alcohol rehab near me / detox center near me / rehab | **0/169 cells** | Carmel OP **does not appear in top-20** on the generic high-intent queries Inpatient dominates solo. **This is the access opportunity** — Carmel OP has rank-pushing headroom on the queries Inpatient already owns. |

### Queens OP (90-02 161st St) — 169-cell grid, ~0.5-mi spacing, weekly cadence

| Keyword | Top-3 cells | Top-10 cells | Top-20 cells | Median rank | Date |
|---|---:|---:|---:|---:|---|
| alcohol rehab | 42 (25%) | 158 (93%) | 169 (100%) | 5 | 2026-02-16 |
| drug rehab | 20 (12%) | 160 (95%) | 169 (100%) | 5 | 2026-02-16 |

100% top-20 across the grid. Median rank 5. Headroom = converting more of the top-10 cohort into top-3.

### Bronx OP (3584 Jerome Ave)

**No LD grid configured.** Task `LG-INF-01` is the M1 setup. Any "AA invisible in Bronx" claim before this lands is unsupported by measurement.

*Chart spec:* per-pin grid-coverage matrix. Rows = keywords (grouped: generic high-intent / Carmel-branded / outer ring). Columns = pins (Inpatient / Carmel OP / Queens OP / Bronx OP). Cells colored by % top-3 coverage: dark green ≥60%, green 30-60%, amber 10-30%, red <10%, grey unmeasured. Annotate the 0-cells row "Carmel OP not in top-20 on generic queries — access opportunity."

---

## §2 Organic-side metrics (KPI snapshot)

| Metric | Value | Read |
|---|---|---|
| Inpatient Carmel grid coverage — 4 priority queries, Jan→Apr | 100% top-20 / top-3 share IMPROVING on 3 of 4 kws | Dominating + extending |
| Carmel OP grid coverage on generic queries | 0/169 cells in top-20 (Carmel OP doesn't appear on drug rehab / alcohol rehab near me / detox center near me / rehab) | Access opportunity |
| Both pins on Carmel-branded queries | 100% co-rank #1+#2 across 169 cells | Branded queries owned |
| Queens OP grid coverage (alcohol rehab + drug rehab) | 100% top-20 · 93-95% top-10 · 12-25% top-3 | Competitive — top-3 headroom |
| Bronx OP grid coverage | Unmeasured | Data gap |
| GBP manager access (of 4 pins) | 1 of 4 (Inpatient Carmel only) | Constraint |
| Service-page sessions → conversions / 365d | 24,000 → 0 | Form missing |
| Total annual GA4 conversions | 531 | Baseline |
| Insurance article cluster ranking 11-20 | 10 articles, 214K imp / 180d at <0.5% CTR | CTR-lift lever |
| Schema coverage | Organization on homepage only | Bare |
| Backlinks | 17,209 from 426 ref domains, spam 19 | Healthy volume, moderate spam |
| GBP Q&A owner-answered across competitive set | 0 of any pin (AA or competitors) | First-mover opportunity |
| Doorway surface | 71 /suburb/* pages + 4 /service/* near-duplicates | Audit-and-improve target |

*Chart spec:* single-row KPI cards. Pills: "Dominating" green · "Competitive" amber · "Data gap" grey · "Constraint" amber · "Form missing" red · "CTR-lift lever" green · "Bare" red · "Healthy" green · "First-mover" green · "Audit target" amber.

---

## §3 Indexation breakdown *(/suburb/* + /service/* scope)*

GSC URL Inspection rollup focused on the highest-risk surfaces. Full sitewide breakdown deferred to a separate pass.

| Status | /suburb/* (71 URLs) | /service/* (12 URLs incl 4 near-dupes) | Read |
|---|---:|---:|---|
| Indexed | TBD — pending audit | TBD — pending audit | Sub-task C1-S1 outputs this |
| Crawled, not indexed | TBD | TBD | |
| Discovered, not crawled | TBD | TBD | |
| Canonical mismatch | TBD | likely on 4 city-modifier dupes | |
| Noindex | 0 | 0 | |

**Action:** the suburb-page improvement work (task `LP-01_M2`/`M3`) and the service-page near-duplicate dedup (task `SP-04`) both depend on this breakdown. Pull it in M1 before committing to the cohort to improve vs the cohort to redirect.

---

## §4 Competitive Landscape — direct service providers

No historical LD scan series exists for AA outside Carmel, so a time-series competitor delta (Surfpoint Δ Oct→Apr style) isn't computable yet. Current-state snapshot of the direct service-provider competitive set:

| Competitor | Reviews | Rating | Photos | Description chars | Categories | Q&A captured | Where they win |
|---|---:|---:|---:|---:|---:|---:|---|
| **Arms Acres Inpatient (us — managed)** | 133 | 3.2 | 9 | 536 | 5 | 25 (0 owner-answered) | Carmel grid 100% top-3 |
| **Arms Acres Carmel OP (us — AA-managed)** | 7 | 3.3 | 2 | 201 | 1 | 0 | Carmel grid 100% top-3 (co-rank) |
| **Arms Acres Bronx OP (us — AA-managed)** | 9 | 3.4 | 1 | 314 | 3 | 3 (0 owner-answered) | Unmeasured |
| **Arms Acres Queens OP (us — AA-managed)** | 16 | 2.2 | 2 | 33 | 3 | 4 (0 owner-answered) | Queens grid 100% top-20 |
| Ascendant NY (Manhattan) | 284 | 4.8 | 90 | 750 | 9 | 13 (0 owner-answered) | NYC organic + GBP depth |
| Mountainside Treatment (NYC) | 71 | 4.7 | 30 | 702 | 1 | 5 (0 owner-answered) | GBP depth + smaller review base |
| Cornerstone of Medical Arts (Bronx) | 203 | 4.1 | 61 | 329 | 3 | 27 (0 owner-answered) | Bronx multi-borough |
| Bronx Recovery | 9 | 4.6 | TBD | TBD | TBD | TBD | Bronx Map Pack #1 with 9 backlinks total |
| CoveCare (Carmel) | 48 | 3.0 | 46 | 276 | 6 | 1 | Carmel #2 outside Map Pack |

*Chart spec:* horizontal stacked bar comparing AA 4 pins (self, highlighted) vs competitors on a depth-composite score (review_count_log + photos + desc_chars/100 + categories + Q&A_captured). Sort desc. AA pins in dark/neutral, competitors in light blue.

---

## §5 Service-Level Maps Coverage — Carmel anchor

DataForSEO Maps SERP at Carmel-Hamlet center (41.43, -73.68) across 5 service clusters. Avg rank for AA's primary pin per cluster (Inpatient if returned, else Carmel OP).

| Service cluster | Tracked queries | AA avg rank | In-pack | Status |
|---|---|---:|---|---|
| Inpatient rehab | drug rehab · alcohol rehab · inpatient rehab · inpatient drug rehab · rehab near me | 1.0 | 5/5 | Dominating |
| Detox | detox · alcohol detox · drug detox · alcohol detox near me · drug detox near me | 1.0–3.0 | 5/5 | Strong |
| Addiction treatment | addiction treatment · drug rehab carmel · alcohol rehab carmel · rehab | 1.0–2.0 | 4/4 | Dominating |
| Mid-funnel substance terms | substance use facilities · substance use facilities near me · alcoholic counseling | 3.6–7.9 | 3/3 | Headroom — push toward top-3 |
| Generic broad | rehab (no modifier) | 14.5 | 1/1 | Headroom — pin-extension play |

*Chart spec:* heatmap. Rows = service clusters (sorted by AA avg rank asc). Columns = 4 AA pins (Inpatient + Carmel OP + Bronx + Queens). Cell color = green ≤3 / amber 4-10 / red 11+ / grey unmeasured. Inpatient + Carmel OP show all-green for top-3 rows; Bronx + Queens cells mostly grey/unmeasured at Carmel coord (correct — they're different catchment).

---

## §5b Multi-Location Coverage — 2 priority kws × 4 pin coords

How AA performs on `alcohol rehab` + `drug rehab` across the 4 pin coords + spillover catchment.

| Anchor coord | alcohol rehab | drug rehab | Read |
|---|---|---|---|
| Carmel Hamlet (41.43, -73.68) | Inpatient #1 / Carmel OP #2 | Inpatient #1 / Carmel OP #2 | Dominating |
| Mahopac (41.37, -73.74) — Carmel catchment | Inpatient ~1-3 (per LD grid) | Inpatient ~1-3 | Strong spillover |
| Putnam Lake (41.49, -73.55) — Carmel catchment | Inpatient ~1-3 (per LD grid) | Inpatient ~1-3 | Strong spillover |
| Jamaica Queens (40.75, -73.86) — Queens OP pin | Queens OP median 5 / 25% top-3 | Queens OP median 5 / 12% top-3 | Top-3 headroom |
| Norwood Bronx (40.88, -73.89) — Bronx OP pin | Unmeasured (no grid) | Unmeasured (no grid) | Data gap |

*Chart spec:* heatmap. Rows = anchor coords (Carmel + spillover at top, Queens next, Bronx last). Columns = 2 keywords. Cells colored by rank: dark green = #1, green = #2-3, amber = #4-10, red = #11+, grey = unmeasured.

Each grey cell in the Bronx row maps directly to task `OFF-07_M1` (Bronx LD grid setup as the first OFF-stack target).

---

## §6 Root Cause, Ranked

**A. PRIMARY — Service-page form is missing.** 24K sessions / 365d on /service/* + /inpatient/* + /outpatient/* convert at 0% because there's no form on the page (Call Now button only). At 2-3% form-completion on high-intent SUD service pages, this is +480 to +720 annual conversions — comparable to the entire portfolio's 531/yr baseline. Requires AA dev approval. → tasks `CP-01` (form deployment recommendation), `SP-06` (sub-page rebuilds inherit the form).

**B. SECONDARY — GBP profile depth on 3 of 4 pins, all AA-managed.** Carmel OP description = 201 chars, Bronx OP = 314, **Queens OP = 33** (vs Ascendant 750). Categories, attributes, photos, Posts, Q&A all well below competitive depth. Closing the gap requires manager access. → tasks `LG-INPC-*` (managed pin work shippable now), `LG-PENDING-*` (queue activates on access grant — bundled in Owner Conversation Items).

**C. SECONDARY — Schema deployment is bare.** Organization on homepage only. 0 LocalBusiness on locations, 0 Service on /service/*, 0 FAQPage on the insurance article cluster. → task `OS-01` (Schema deploy across location pages + service pages + FAQ on article batch).

**D. CONTRIBUTOR — Site architecture surface needs audit-and-improve.** 71 templated /suburb/* doorway pages + 4 city-modifier /service/* near-duplicates. Surfpoint AUDIT-back pattern: don't blanket-NOINDEX; per-URL audit + improve highest-traffic thin pages over M2-M3. The 4 /service/* near-duplicate pairs need a content-merge decision (canonical the strong + 301 the dupe, or genuinely differentiate). → tasks `SA-01` (suburb audit + monthly improvement cohort), `SA-02` (service-page near-duplicate dedup).

**E. CONTRIBUTOR — Missing NY-state Tier-1 pages.** `/alcohol-rehab-new-york` (880-vol cluster, 3-competitor consensus) + `/detox-new-york` (260-vol, 3-competitor consensus). Both buildable in Q2 as Service Pages with content merged from existing /inpatient/* anchor. → tasks `SP-01` (alcohol-rehab-new-york), `SP-02` (detox-new-york).

**F. CONTRIBUTOR — Wrong-brand homepage `og:description`.** Live in production: "Bold Steps Behavioral Health is the best drug rehab in Harrisburg PA." 5-minute fix; not load-bearing but ship M1. → task `CP-02`.

**G. POSITIVE — Inpatient Carmel is dominating AND improving.** 169-cell grid, 4 priority queries, scan-over-scan deltas: `drug rehab` top-3 +10 (101→111 cells), `alcohol rehab near me` top-3 +8 (115→123), `detox center near me` top-3 +2 (128→130). 100% top-20 on the 3 high-intent queries. Inpatient is the revenue-engine pin and the dominance is durable, not flat. Defend posture only on the managed pin; don't apply spam-pattern signals to a winning pin.

**G2. POSITIVE/OPPORTUNITY — Carmel OP has rank-pushing upside on generic queries.** Carmel OP co-ranks at #2 alongside Inpatient at #1 on Carmel-branded queries (carmel recovery / carmel new york rehab / carmel methadone clinic) across 100% of cells. But Carmel OP does **not appear in top-20** on the generic high-intent queries Inpatient solo-dominates (drug rehab / alcohol rehab near me / detox center near me / rehab). Access on Carmel OP unlocks pushing it onto those same queries. → Owner Conversation Item 0 + tasks `P-COP-*`.

**H. POSITIVE — Insurance article cluster ranking 11-20.** 10 articles at 214K imp / 180d with <0.5% CTR. Title + FAQ-schema rewrites on already-ranking pages, no new content production, projected ~14× clicks at top-3 average CTR. → tasks `CN-01_M1` / `_M2` / `_M3` (3-month cadence).

**I. POSITIVE — First-mover Q&A opportunity.** Zero competitor in the local SUD set has any owner-answered Q&As across their public profiles. AA Inpatient seeding 10-15 + answering existing 25 puts AA 5× ahead of any direct competitor at ~3 hours of work. → task `LG-INPC-07`.

---

## §7 Open Items / Follow-Up Data Pulls

- **Bronx OP LD grid** at 3584 Jerome Ave / Norwood coord. Without measurement we can't claim "invisible in Bronx" and we can't size the OFF-07 Bronx-pin work. M1 setup, M2 baseline. → task `OFF-07_M1`.
- **GSC URL Inspection** on /suburb/* + /service/* + /inpatient/* + /outpatient/* (full set). Feeds §3 indexation breakdown + the SA-01 audit-and-improve cohort + SA-02 dedup canonical decisions.
- **CARF accreditation verification.** Gates link gap #1 (carf.org citation, 3-of-3 competitor coverage) + LLM authority signal.
- **501(c)(3) status verification.** Gates charitynavigator.org listing.
- **LegitScript verification.** Gates any paid-acquisition motion in Q3+.
- **MICA / dual-diagnosis residential program confirmation.** Gates `/dual-diagnosis` service page recommendation.
- **OTP / MAT license per facility.** Gates the dedicated MAT/OTP service page + GBP services-list mapping per pin.
- **Clinical roster + named-clinician bios.** Gates E-E-A-T block on /inpatient/adult-rehabilitation + behavioralhealthnews.org contributed-article pitch.
- **Insurance carrier authoritative list.** Gates /admissions insurance sub-sections + GBP description insurance line.
- **Intake-side review-request SOP.** Only structural fix for the 36-62% one-star content density on Inpatient + Queens reviews.
- **GBP manager access on Carmel OP + Bronx OP + Queens OP.** Single highest unlock — activates 41 staged pending-access tasks.

All bundled in `Arms_Acres_Owner_Conversation_Items.md` for one consolidated 30-min call.

---

## Appendix A — Data sources and methodology

- **Local Dominator**: 169-cell grids (13×13). Queens OP grid weekly at 40.749, -73.857 (~0.5 mi cell spacing). Inpatient Carmel grid monthly at 41.587, -73.908 (~2 mi cell spacing). Co-tracks Carmel OP in every cell. Bronx OP grid: not yet configured.
- **DataForSEO Maps SERP + Business Data**: live pulls on 5 AA + competitor pins. Maps SERP at Carmel-Hamlet center across 10 priority queries. Business Data scrape for public-profile depth (description / categories / attributes / photos / Q&A / Posts).
- **GSC**: pages + queries CSVs at 30/90/180/365d. URL Inspection pulls deferred (M1 task).
- **On-site crawl**: sitemap.xml + page snapshots for /service/* + /inpatient/* + /outpatient/* + /suburb/* + /admissions + homepage. JSON-LD extraction via raw HTTP + regex per HQDM schema-audit methodology.

---

## Appendix B — Related deliverables

- `Arms_Acres_3Month_Tasks.csv` — executable Q2 task sheet (Asana-intake-ready, 12 columns + sop_reference)
- `Arms_Acres_Pending_GBP_Access_Tasks.csv` — queue activated on access grant for Carmel OP + Bronx OP + Queens OP
- `Arms_Acres_Owner_Conversation_Items.md` — owner-side asks bundled for one 30-min call
- `arms_acres_competitor_brief.md` — long-form competitor analysis + content gap + link gap
- `arms_acres_m1_priorities.md` — top pages / articles / links with rationale
