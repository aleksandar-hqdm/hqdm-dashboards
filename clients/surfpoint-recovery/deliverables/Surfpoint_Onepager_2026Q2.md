# Surf Point Recovery — Organic Visibility Diagnosis

**Account tier:** 1 (Recovery / YMYL) | **Prepared:** 2026-05-14 | **Author:** Aleksandar (HQDM Search Intelligence)
**Scope:** Diagnose the 90-day organic impression collapse while Maps held; identify the forces stacked behind it.
**Data sources:** Local Dominator (5 grid scans Oct 2025 → Apr 2026, `alcohol rehab brooklyn`), full /locations/ crawl (99 URLs), GSC URL Inspection on all 99, GSC pages_last_365d, DataForSEO Backlinks.

---

## TL;DR

This is **not** a Maps problem. SP **dominates** the Maps grid — 136 of 136 top-10 cells for `alcohol rehab brooklyn` (avg rank improving to 1.47), and **#1 at 4 of 7 strategic anchor coords** (Coney Island, Bath Beach, Bensonhurst, Brighton Beach) across both alcohol-rehab and drug-rehab queries. **GBP converts 8× organic.** The Maps moat is real and durable.

The bleed is **organic**: −77% impressions in 90 days, page 2 for "drug rehab Brooklyn", **47 of 99 location pages not indexed**, and **147 of 208 blog posts in the bleeding cohort** (−50% to −85% trend / 90d). Four forces stacked, in order of explanatory weight:

1. **Blog content decay.** 147 of 208 blog posts are bleeding. The single biggest piece (`/blog/how-to-get-rid-of-alcohol-breath`) is down −85.9% on 230K impressions/90d — that alone implies ~1.4M lost impressions in the window. This is the largest single explanation for the −77% organic line.
2. **Doorway-bloat trust hit.** 37 of 99 `/locations/*` URLs are 33–37-word empty templates (5 NJ, 32 NY-area). Zero schema across all 99. Google has stopped indexing half the surface area — sitewide quality signal compounds with #1.
3. **Toxic PBN inbound link rot.** High-spam-rating clusters (SEO Anomaly / SEO Cartel / xyz-pattern) appeared in the inbound profile during the regression window. Per Milica's 2026-05-13 call: diagnose-and-disavow, not halt.
4. **Service-page orphaning.** `/services/*` (alcohol-detox, opioid-detox, etc.) sit on legacy URLs with no link path from `/treatments`. The pages that should carry money-keyword load are invisible to the internal-link graph.

Execution detail is in [Surfpoint_3Month_Plan_v2.md](Surfpoint_3Month_Plan_v2.md) and [Surfpoint_3Month_Tasks_v2.csv](Surfpoint_3Month_Tasks_v2.csv). Owner-side asks are in [Surfpoint_Owner_Conversation_Items.md](Surfpoint_Owner_Conversation_Items.md).

---

## 1. Maps grid trend — `alcohol rehab brooklyn` (5 LD scans, 136-cell grid)

| Scan Date | Top-3 cells | Top-10 cells | Avg rank |
|---|---:|---:|---:|
| 2025-10-24 | 133 | 136 | 1.88 |
| 2025-11-22 | 133 | 136 | 1.74 |
| 2026-01-22 | 129 | 136 | 1.60 |
| 2026-02-26 | 120 | 136 | 1.80 |
| 2026-04-22 | 130 | 136 | 1.47 |

*Chart spec:* dual-axis combo. X = scan_date (5 points). Y₁ (left, bars) = Top-3 cells + Top-10 cells. Y₂ (right, line, reversed) = Avg rank. **Verdict to call out:** Maps dominating — full grid held with avg rank improving from 1.88 → 1.47 across the period.

---

## 2. Organic-side metrics

| Metric | Value | Note |
|---|---|---|
| Organic impressions Δ (90d vs prior 90d) | −77% | Primary signal |
| GBP → conversion ratio | 8× organic | Maps moat |
| Location pages indexed | 52 / 99 | 47 not indexed |
| Location pages with schema | 0 / 99 | Homepage has LocalBusiness; nothing propagates |
| Empty doorway pages (`<main>` ≤ 50 words) | 37 / 99 | 5 NJ + 6 Manhattan + 14 Queens + 1 Bronx + 2 SI + 9 Brooklyn |
| Already-noindex'd (partial cleanup) | 2 | `/coney-island`, `/east-flatbush` |
| Blog posts in B_bleeding cohort (90d) | **147 / 208** (~71%) | −50% to −85% trend; primary impression-loss driver |
| Blog posts deindexed (A_deindexed cohort) | 94 | Distinct from bleeding; some overlap with location-page set |
| Top single bleeding blog | `/blog/how-to-get-rid-of-alcohol-breath` | 230K imp/90d at −85.9% → ~1.4M imp lost in window |
| GBP reviews / rating (Apr 2026) | 119 / 4.8★ | +29 reviews in 16 days |

*Chart spec:* single-row stat callouts (KPI cards). Highlight: −77% (red) · 8× (green) · 52/99 (amber) · 0/99 (red) · 37/99 (amber) · 4.8★/119 (green).

---

## 3. Indexation breakdown — `/locations/*` only (GSC URL Inspection on 99 location URLs, 2026-05-13)

| Status | Count | Share |
|---|---:|---:|
| INDEXED | 52 | 52.5% |
| Crawled, not indexed | 21 | 21.2% |
| Discovered, not crawled | 17 | 17.2% |
| NEUTRAL (canonical mismatch) | 7 | 7.1% |
| NOINDEX (meta robots) | 2 | 2.0% |

*Chart spec:* horizontal stacked bar OR donut. 5 segments, color order green → amber → red.

---

## 4. WHO Gained Ground — Competitor top-10 cell delta (Oct 2025 → Apr 2026)

Across the 136-cell `alcohol rehab brooklyn` grid, businesses with ≥5 cells in either scan. **HQDM client (Urban Recovery) excluded.** Δ is the change in top-10 cell appearances over 6 months.

### Top gainers

| Business | Oct 2025 | Apr 2026 | Δ | Rating | Reviews |
|---|---:|---:|---:|---:|---:|
| **Elevate Point** *(new entrant, NYC)* | 0 | 127 | **+127** | 5.0★ | 25 |
| **LSA Recovery – Midwood** *(new entrant)* | 0 | 78 | **+78** | 4.1★ | 14 |
| Realization Center | 98 | 117 | +19 | 4.7★ | 85 |
| Genesis Detox of Brooklyn | 118 | 136 | +18 | 3.5★ | 62 |
| Under Angel's Wings Recovery | 123 | 136 | +13 | 5.0★ | 35 |
| Dynamite Youth Center | 7 | 18 | +11 | 4.5★ | 40 |

### Top losers

| Business | Oct 2025 | Apr 2026 | Δ | Rating | Reviews |
|---|---:|---:|---:|---:|---:|
| Teen Challenge Inc. | 132 | 11 | −121 | 4.0★ | 34 |
| LSA Recovery *(parent — moved to Midwood branch)* | 56 | 0 | −56 | 4.1★ | 14 |
| Anchor House Inc. | 136 | 82 | −54 | 3.3★ | 13 |
| Ascendant Detox Drug & Alcohol Rehab NYC | 28 | 2 | −26 | 4.8★ | 282 |
| Jovenes Brooklyn AA | 60 | 40 | −20 | 4.5★ | 20 |

### SP (us)

| Business | Oct 2025 | Apr 2026 | Δ | Rating | Reviews |
|---|---:|---:|---:|---:|---:|
| **Surfpoint Recovery** | 136 | 136 | **0** | 4.8★ | 119 |

*Chart spec:* diverging horizontal bar chart, sorted by Δ. Top gainers in green, losers in red, SP in dark/neutral. X-axis = Δ in top-10 cells (Oct → Apr). Y-axis labels = business names.

**Reading:** SP held the entire grid. The market churned around us: one chain operator (Anchor House) and two formerly-dominant facilities (Teen Challenge, Ascendant) collapsed; one brand-new operator (Elevate Point, NYC) appeared from zero with **127 cells and a 5★/25-review profile** — likely a marketing-driven launch worth investigating for tactics. SP's competitive position on this grid is structurally strong. **The organic bleed is not coming from Maps competition.**

---

## 5. Service-Level Maps Coverage — 5 service clusters × 12 keywords (DataForSEO, 2026-05-08)

The LD trend in §1 is a single keyword (`alcohol rehab brooklyn`). To verify SP's Maps position **across all 5 services** SP delivers (alcohol detox, opioid detox, drug detox, benzodiazepine detox, comprehensive short-term rehab), we pulled DataForSEO Maps SERP for 12 keywords mapped to 5 service clusters at the Coney Island anchor.

### Keyword → cluster mapping

| Service cluster | Keywords pulled |
|---|---|
| **Alcohol** | alcohol rehab, alcohol detox, alcohol rehab near me |
| **Opioid** | opioid treatment |
| **Drug** | drug rehab, drug detox, drug rehab near me |
| **Inpatient** | inpatient rehab, rehab near me |
| **Detox / Umbrella** | detox center, detox near me, addiction treatment center |

*Note: benzodiazepine detox has no standalone Maps Pack at this volume in this geo — covered implicitly by the Detox/Umbrella cluster.*

### Matrix — SP vs top competitors (HQDM-client domains stripped)

Cells show **average rank (keywords-in-pack / keywords-in-cluster)**. Top-3 in green is the default lever; anything 11+ is a real gap.

| Business | Cov | Avg | Alcohol | Opioid | Drug | Inpatient | Detox/Umbrella |
|---|---|---|---|---|---|---|---|
| **Surfpoint Recovery (us)** | **12/12** | **1.6** | **1.7 (3/3)** | **1.0 (1/1)** | **1.0 (3/3)** | **2.5 (2/2)** | **1.7 (3/3)** |
| LSA Recovery – Coney Island | 11/12 | 5.4 | 4.0 (3/3) | 2.0 (1/1) | 2.3 (3/3) | 14.0 (2/2) | 4.5 (2/3) |
| Spring Hill Wellness NY (outpatient) | 11/12 | 6.1 | 2.7 (3/3) | — (0/1) | 2.7 (3/3) | 16.5 (2/2) | 2.7 (3/3) |
| The Safe Foundation | 9/12 | 5.9 | 5.0 (3/3) | — (0/1) | 4.0 (3/3) | — (0/2) | 8.7 (3/3) |
| Bridge Back To Life | 5/12 | 8.7 | 6.0 (2/3) | — (0/1) | — (0/3) | 15.0 (2/2) | 5.0 (1/3) |
| DWI Assessment and SUE NYS OASAS | 4/12 | 6.3 | 9.0 (2/3) | — (0/1) | 5.0 (1/3) | — (0/2) | 5.0 (1/3) |
| First Step To Recovery | 4/12 | 10.0 | 6.0 (2/3) | — (0/1) | — (0/3) | 14.0 (1/2) | 10.0 (1/3) |
| Shore View Nursing and Rehabilitation | 3/12 | 4.8 | — (0/3) | — (0/1) | — (0/3) | 2.5 (2/2) | 7.0 (1/3) |
| Seagate Rehabilitation and Nursing Center | 3/12 | 9.5 | — (0/3) | — (0/1) | — (0/3) | 6.0 (2/2) | 13.0 (1/3) |

*Chart spec:* heatmap. Rows = businesses (SP highlighted). Columns = 5 service clusters. Cell value = avg rank. Cell color = green ≤ 3 / amber 4–10 / red 11+ / grey "not in pack". Sort rows by overall coverage desc.

### Reading

- **SP holds #1 or near-#1 across every service cluster.** This is the strongest single piece of evidence that GBP is the moat. The matrix says: it's not just `alcohol rehab brooklyn` — SP wins every addiction-treatment query at the Coney Island anchor.
- **The only "competitive pressure" cluster is Inpatient.** SP avg 2.5 vs Shore View Nursing 2.5 vs Seagate Rehab 6.0 — but these are nursing facilities, not addiction-treatment specialists. Different buyer intent, low practical threat.
- **LSA Recovery – Coney Island** is the closest addiction-specific competitor (avg rank 5.4, 11/12 coverage). New entrant (parent LSA dissolved per §4 delta). Worth investigating their launch playbook.
- **Spring Hill Wellness NY** is outpatient — different intent from SP's inpatient model — but they show up across 11/12 keywords. Brand-awareness lever.

### Data-currency caveat

This matrix is a **single point-in-time snapshot from 2026-05-08**. We have 6-month trend data only for the `alcohol rehab brooklyn` keyword (§1) — DataForSEO Maps Pack is not time-travelable for arbitrary past dates. For ongoing movement on the 4 non-alcohol clusters, the right move is to **initiate Local Dominator tracking on a representative keyword per cluster** so we have a real Δ by Q3 (recommended: opioid treatment, drug rehab brooklyn, inpatient rehab brooklyn, detox brooklyn).

---

## 5b. Multi-Location Coverage — 2 priority keywords × 7 target anchor coords (DataForSEO, 2026-05-08)

Section 5 covered 5 service clusters at one anchor (Coney Island). This view rotates the axis: it shows where SP wins or doesn't across the 7 strategic anchor coords SP's strategy targets, for the two highest-volume queries.

| Anchor coord | Alcohol rehab rank | Drug rehab rank | Read |
|---|---:|---:|---|
| **Coney Island center** (primary pin) | **#1** | **#1** | DOMINATING |
| **Bath Beach** | **#1** | **#1** | DOMINATING |
| **Bensonhurst** | **#1** | **#1** | DOMINATING |
| **Brighton Beach** | **#1** | **#2** | STRONG |
| Bay Ridge | not in pack | not in pack | **GAP** — target geo, no coverage |
| Sunset Park | not in pack | not in pack | **GAP** — target geo, no coverage |
| Manhattan downtown | not in pack | not in pack | Out of target radius (expected) |

*Chart spec:* heatmap. Rows = anchor coords (SP-strong on top, gaps next, out-of-radius last). Columns = the 2 keywords. Cells colored by rank: dark green = #1, green = #2-3, amber = #4-10, red = #11+, grey = not in pack.

**Reading:** SP **dominates** the entire South Brooklyn core (Coney Island + Bath Beach + Bensonhurst + Brighton Beach) — 7 of 8 cells across both queries are #1 or #2. The two real gaps inside the target radius are **Bay Ridge** and **Sunset Park** — both directly addressed by the suburb-page SOP: M1 includes `/locations/bay-ridge-shore-road-brooklyn` and `/locations/sunset-park-industry-city-brooklyn`; M2 doubles down with `/locations/bay-ridge-3rd-avenue-brooklyn` and `/locations/sunset-park-5th-avenue-brooklyn`. GBP Post mentions for those geos compound the lift.

### Data limit / Q3 follow-up

This 7-coord pull only covers 2 keywords (alcohol rehab + drug rehab). The full 5-cluster × 7-coord matrix is a Q3 data pull — flagged in Open Items §7.

---

## 6. Root Cause — Why Organic Is Bleeding

### A. PRIMARY: Blog content decay (147 bleeding posts)

147 of 208 blog posts are bleeding — trend −50% to −85% over 90 days. Largest single pieces by absolute impression loss:

| URL | Imp 90d | Clicks 90d | Position | Trend |
|---|---:|---:|---:|---:|
| `/blog/how-to-get-rid-of-alcohol-breath` | 230,925 | 714 | 4.7 | **−85.9%** |
| `/blog/how-long-does-it-take-for-weed-to-leave-your-system-common-myths-and-facts` | 107,376 | 298 | 7.5 | −81.1% |
| `/blog/mixing-alcohol-and-mucinex` | 105,921 | 157 | 7.4 | −77.2% |
| `/blog/does-alcohol-cause-gerd` | 93,769 | 146 | 15.2 | −73.8% |
| `/blog/how-does-alcohol-affect-muscles` | 83,448 | 171 | 5.7 | −77.9% |

These five alone account for an estimated >3M lost impressions in the 90-day window — the largest single explanatory factor for the −77% organic line. Plan: refresh **3 on-topic bleeding posts per month** (M1 / M2 / M3 → 9 posts in Q2) via **CON-06, CON-07, CON-08**. Standard refresh SOP: title rewrite for freshness, intro rewrite with intake CTA, FAQ schema, 2026 stat refresh, internal links to `/treatments` hub + sub-pages, GSC re-crawl. Off-topic high-traffic pieces (phobias, morning-after-pill) explicitly deprioritized.

### B. SECONDARY: Doorway bloat + zero schema across `/locations/*`

99 location pages in sitemap. 37 are empty templates (33–37 words in `<main>`). Among the 37: 5 NJ out-of-state ("…in Newark, NY" — deceptive geo on a NY-only OASAS-licensed facility) plus 32 NY-area empties plus the 9 borough/anchor pages worth building out. 0/99 carry any schema. Of the 62 content-bearing pages, **30 still aren't indexed** — Google rejecting them on quality. **LP-01** (refresh the 33 bleeding/deindexed content-bearing pages) + **LP-02** (28 redirects) + **LP-03** (write content for the 9 upgrade pages) + **LP-04** (schema deploy on the 9 upgrades) address this across M1.

### C. TERTIARY: Toxic PBN inbound link rot

Inbound profile shows clusters from SEO Anomaly, SEO Cartel, xyz-pattern PBNs appearing in the regression window. All dofollow, high spam-rating. Likely SEO Neo / Aaron-style output or external attack. Per Milica's 2026-05-13 call: disavow via Search Console; Aaron consultation pending. OFF-01 in M1.

### D. CONTRIBUTOR: Service-page orphaning

`/services/alcohol-detox-services` and 4 siblings live on legacy URL structure. Not in primary nav. Not linked from `/treatments`. Money-keyword pages invisible to the internal-link graph. **SP-01 through SP-05 (M2 + M3)** each include a content merge from the corresponding `/services/*` legacy page followed by a 301 — consolidating topical authority and eliminating the orphaned URL set by end of M3.

### E. CONTEXT: Homepage CRD stalled at client

24-item homepage update brief drafted March 2026, awaiting owner approval. 2 months stalled. Treatments hub depth + sub-page depth inherit homepage structure — everything downstream is gated. HP-01 builds it in M1 anyway; production push lands when owner Ask #1 is approved.

### F. POSITIVE: Review velocity is strong

+29 reviews in 16 days (91 → 120). 4.5★ → 4.8★. Intake-discharge SOP works. **Lean on it while site cleanup runs.** GBP-03 in M1.

### G. POSITIVE: Maps coverage is dominating

136/136 top-10 cells held across 6 months with avg rank improving to 1.47. SP is #1 at 4 of 7 target anchor coords (Coney Island, Bath Beach, Bensonhurst, Brighton Beach) for both alcohol-rehab and drug-rehab queries. Out-rates ACI, Genesis, Realization Center on reviews and rating. Maps is the platform we build on, not the channel we fix.

---

## 7. Open Items / Follow-Up Data Pulls

- **DataForSEO Backlinks full pull** — current disavow scope is based on spot-checked clusters; quantify the full toxic surface.
- **Aaron Gruenke consultation** — Milica to verify which PBN clusters originated from SEO Neo (in-house) vs external attack.
- **Elevate Point investigation** — brand-new operator with 127 cells from zero in 6 months. What launched them? PR? Posts cadence? Citation push? Diagnose-and-borrow.
- **Blog bleed root cause** — diagnose *why* the 147 posts decayed (algorithm update window? content quality regression on AI-generated batches? sitewide trust spillover from doorways/PBNs?). M1-M3 refresh batches (CON-06/07/08 for blogs + LP-01 for location pages) will reveal whether targeted updates recover — if they don't, the cause is sitewide, not per-post.
- **Full 5-cluster × 7-coord Maps matrix** — currently we have 5 clusters at 1 coord (Coney Island, §5) and 2 keywords at 7 coords (§5b). The full 35-cell matrix (5 clusters × 7 anchor coords) would close the topical-coverage picture for every target geo.

---

## Appendix A — Data sources and methodology

- **Local Dominator:** 5 grid scans for `alcohol rehab brooklyn` (Oct 24 2025 → Apr 22 2026). 13×11 grid (136 cells), centered on SP pin (Coney Island, 40.658293, −74.018249). Top-20 results per cell.
- **Website crawl:** 99 URLs from `/sitemap.xml` `/locations/*`. Body + schema + canonical extracted via raw HTTP + regex (per HQDM schema-audit methodology — WebFetch known to miss JSON-LD blocks).
- **GSC URL Inspection:** all 99 location URLs inspected via Search Console API (info@ token). Coverage state + verdict + canonical + last crawl captured.
- **GSC pages_last_365d:** impressions/clicks by URL for context.
- **Competitor delta:** computed from two endpoint LD scans (Oct 2025, Apr 2026) by counting cells where each business appeared in top-10. HQDM-client domains stripped per `reference_hqdm_client_domains.md`.

## Appendix B — Related deliverables

- [Surfpoint_3Month_Plan_v2.md](Surfpoint_3Month_Plan_v2.md) — Arms Acres-style 30-task execution plan
- [Surfpoint_3Month_Tasks_v2.csv](Surfpoint_3Month_Tasks_v2.csv) — Asana-ready task sheet
- [Surfpoint_Owner_Conversation_Items.md](Surfpoint_Owner_Conversation_Items.md) — 6 owner asks bundled for one 30-min call
- [Surfpoint_Task1_M1_Location_Cleanup_Brief.md](Surfpoint_Task1_M1_Location_Cleanup_Brief.md) — LP-01 cleanup brief
- [Surfpoint_All99_Location_Pages_Decisions.csv](Surfpoint_All99_Location_Pages_Decisions.csv) — full 99-page decision sheet w/ GSC indexation
- [Surfpoint_Competitor_Delta_Oct2025_Apr2026.csv](Surfpoint_Competitor_Delta_Oct2025_Apr2026.csv) — full competitor delta source data
- [Surfpoint_Service_Matrix_2026-05-08.csv](Surfpoint_Service_Matrix_2026-05-08.csv) — 5-service × competitor matrix source data
