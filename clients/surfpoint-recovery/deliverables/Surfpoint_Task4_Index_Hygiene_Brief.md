# Surfpoint Recovery — Task 4 Implementation Brief

**Title:** Index hygiene & blog consolidation — align the indexed surface to Google's deindexing signal
**Author:** Aleksandar Spasevski · **Date:** 2026-05-11
**For:** Aleksa Popovic (On-Page) — feasibility pass before tasks land in Asana
**Then routes to:** Zach DeLorenzo (Asana lead) for task creation + Content / On-Page / Off-Page as specified per row

**Source diagnostics:**
- `Surfpoint_Recovery_Q2_2026_Custom_Strategy.md` §1.1 (deindexing event), §2.1 (decision matrix), §2.4 (backlinks per page), §10 (implementation table M1-03/04/05, M2-06, M3-04)
- `exports/gsc/surfpointrecovery.com-Coverage-2026-05-08.xlsx` (GSC Coverage report — 756 "not indexed" URLs)
- `exports/gsc/surfpointrecovery.com-Crawl-stats-2026-05-08.xlsx` (Mar 16 crawl spike — 524 requests/day vs ~70-100 baseline)
- `exports/decision_matrix_with_topical.csv` (877-URL bucketed decision matrix; v2 with topical + backlinks overlay)
- `exports/dataforseo/` (per-page backlinks for the 128 NOINDEX candidates — pulled 2026-05-11)
- `scripts/topical_overlay_surfpoint.py` (v1 → v2 re-bucketing logic, reproducible)

This brief consolidates **strategy rows M1-03, M1-04, M1-05, M2-06, and M3-04** into one operational lane. It supersedes the "Task 5" (redirect) and "Task 6" (AUDIT triage) placeholders called out in Task 1 §1 out-of-scope.

---

## 1. Strategic context — why this brief, and why now

Between Feb 7 and May 4 2026 (87 days), Google's quality systems issued an active signal against the site:

| GSC Coverage metric | Trajectory |
|---|---|
| Pages "Crawled — currently not indexed" | → **562** (the bulk of the bucket) |
| Total pages flagged not indexed across all sub-reasons | **756** |
| Total URLs known to Google | **−37%** over 87 days |
| Daily impressions | **−77%** over the same window |
| Mar 16 crawl-stats anomaly | **524 crawl requests in one day** vs. daily baseline ~70-100 — a system-level re-evaluation event |

**Strategic read:** Google has already made the cleanup decision on the bulk of the site. The 756 "not indexed" pages are an instruction, not a problem to argue with. The strategic question is **how fast we can align the indexed surface to that signal** so Google starts treating the remaining pages as the canonical Surfpoint surface and impression recovery begins.

**The recovery thesis has two halves:**
1. **Reduce the bad surface** (this brief) — remove, NOINDEX, or redirect the legacy URLs Google has deprioritized so the quality signal at the site level improves and the remaining pages become the canonical surface.
2. **Cut the upstream cause** (Task 3 — Off-page disavow + PR pause) — the spam-score-43 PBN backlink pattern (§2.4 + §6.2 of the strategy) is what triggered the algorithmic discount in the first place. Cleaning the indexed surface without fixing the off-page cause means the signal returns.

This brief is the first half. It must run in **parallel** with Task 3, not before or after.

**Bucket allocation across 877 URLs (decision matrix v2, topical + backlinks overlay applied):**

| Action lane | URLs | Owner | Effort | Phase |
|---|---:|---|---|---|
| KEEP (revenue surface, untouched) | 23 | — *(out of scope; Task 1 owns these)* | — | — |
| KEEP-AUDIT (real-catchment locations + 6 conversion-signal blogs) | 29 | On-Page (light cosign per URL) | ~3h | M1 |
| **AUDIT — core topical blogs** ← bulk of new work | **367** | Content + Aleksa cosign | ~50h | M1-M3 |
| **AUDIT — unclassified w/ traffic** | 76 | Content | ~6h | M1-M2 |
| **AUDIT — adjacent w/ traffic** | 3 | Content | ~1h | M1 |
| **AUDIT — framework-ambiguous (had signal, didn't fit)** | 109 | On-Page | ~9h | M1-M2 |
| **NOINDEX (off-topic / shallow tail)** | **121** | On-Page | ~6h | M1 |
| **NOINDEX (off-topic but traffic)** | 7 | On-Page | ~1h | M1 |
| **DELETE (paginated / orphan / off-topic thin)** | 99 | On-Page | ~3h | M1 |
| **DELETE+REDIRECT (27 out-of-state doorways)** | 27 | On-Page | ~2h | M1 |
| **REDIRECT (9 out-of-borough NYC → /areas-served)** | 9 | On-Page | ~1h | M1 |

Total: **~82 hours of execution** across 825 in-scope URLs (excludes the 52 KEEP / KEEP-AUDIT URLs Task 1 owns). The mechanical lanes (NOINDEX / DELETE / REDIRECT) are ~13 hours and ship in M1. The AUDIT lanes are ~66 hours spread M1-M3.

---

## 2. Decisions locked before execution

| # | Decision | Resolution | Source |
|---|---|---|---|
| 1 | NOINDEX implementation | `<meta robots="noindex,follow">` — equity stays in the site through internal links until Q3 re-audit | Strategy §2.1; preserves the reversal path |
| 2 | DELETE implementation | **410 Gone** for paginated artifacts and orphan stubs; not 404 | Signals intentional removal to Google; faster deindex |
| 3 | REDIRECT type | **301 permanent** for all 36 cross-page redirects (27 DELETE+REDIRECT out-of-state, 9 REDIRECT out-of-borough) | Standard equity-consolidation pattern |
| 4 | Where the 9 out-of-borough redirects land | `/areas-served` (not homepage) | Strategy §2.1; consolidates borough equity to one location hub |
| 5 | Where the 27 NJ out-of-state redirects land | `/areas-served` (not homepage) — same destination, different rationale (compliance: YMYL geo-targeting from NY-only OASAS-licensed facility into NJ is deceptive) | Strategy §2.1 |
| 6 | AUDIT review SLA | **5 min triage per URL** (target). Outputs: KEEP-with-internal-link, REWRITE, NOINDEX, or REDIRECT. The ~50 URLs in the AUDIT (core topical) lane that warrant rewrite get a separate 30-min rewrite slot | Strategy §2.1 |
| 7 | Per-URL evidence pull before NOINDEX | DataForSEO Backlinks `domain_pages` already exported. For each of the 128 NOINDEX candidates check: ≥2 quality backlinks → REDIRECT instead; ranking improvement in last 30d vs prior 60d → KEEP-AUDIT instead; standard pattern → NOINDEX | Strategy §2.1 (pre-execution audit) |
| 8 | Quarterly audit-back | At Q3 (Aug 2026), re-pull GSC Coverage + per-URL clicks/impressions/conversions for the 128 NOINDEX'd URLs + AUDIT-triaged URLs. Anything with new backlinks or recovered ranking → reactivate or 301. No signal change → final DELETE in Q3 or Q4 | Strategy §2.1 + §10 row M3-04 |
| 9 | Internal de-linking policy | When NOINDEX'ing a URL, remove or rewrite internal links to it from KEEP pages. Exception: the 7 "NOINDEX off-topic but traffic" URLs — keep one link from a related blog so internal flow isn't broken mid-cleanup | Strategy §2.1 |
| 10 | Sitemap handling | Excluded URLs (NOINDEX + DELETE + redirected sources) removed from all sitemaps in the same deploy as the meta-tag / 301 change. Submit updated sitemap via GSC the same day | Standard hygiene; prevents Google re-finding excluded URLs |

---

## 3. Phase A — Mechanical cleanup (M1, ~13h execution)

Ships first because every day a deprioritized URL stays in the index is a day the site-level quality signal stays depressed.

### 3.1 NOINDEX execution — 128 URLs

**Pre-execution per-URL check (~10 min for all 128, mostly already pulled):**

```
For each URL in 128 NOINDEX candidates:
  refmains = DataForSEO domain_pages.referring_main_domains
  rank_30d = GSC avg_position last 30 days
  rank_prior_60d = GSC avg_position 30-90 days ago

  IF refmains >= 2 AND spam_score < 50:
    route to REDIRECT (preserve equity → most-relevant retained page)
  ELIF rank_30d < rank_prior_60d - 5:  # rank improved by 5+ positions
    route to KEEP-AUDIT (the page is gaining; don't kill it)
  ELSE:
    apply NOINDEX
```

Expected reroute volume: ~5-10 URLs based on the §2.4 finding that only 1 blog page has any incoming main-referring domain. The rule is for defensibility, not volume.

**Implementation:**

| Step | Action | Tool | Effort |
|---|---|---|---|
| A1 | Pull final NOINDEX list from `exports/decision_matrix_with_topical.csv` filtered to bucket = `NOINDEX` + `NOINDEX (off-topic but traffic)` | csv filter | S |
| A2 | Run pre-execution check per A1 list against DataForSEO `domain_pages` + GSC `pages_last_90d` / `pages_last_30d` exports | Script (1 hour to write/run; reusable for Q3 re-audit) | S |
| A3 | Output: final NOINDEX list (~120 after reroutes) + REDIRECT/KEEP-AUDIT reroute list (~5-10) | csv | — |
| A4 | Deploy `<meta name="robots" content="noindex,follow">` per URL via the WordPress mechanism Surfpoint uses (Yoast → per-post `_yoast_wpseo_meta-robots-noindex`, or theme functions.php conditional) | WordPress | M |
| A5 | Remove all NOINDEX'd URLs from `/sitemap.xml` and any sub-sitemaps | Yoast sitemap settings | S |
| A6 | Internal de-link from KEEP pages — pull current internal link graph (Screaming Frog or DataForSEO OnPage `links` endpoint) and remove links pointing to NOINDEX'd URLs from KEEP pages | On-Page | M |
| A7 | Submit updated sitemap via GSC; flag NOINDEX'd URLs in "URL Inspection" tool to confirm Google sees the directive | GSC | S |

### 3.2 DELETE execution — 99 URLs

These are paginated artifacts (`?bca49ee9_page=2`-style), orphan blog stubs <5 clicks / 0 conversions / no backlinks / off-topic, and template debris. No salvage value.

| Step | Action | Effort |
|---|---|---|
| B1 | Pull DELETE list from decision matrix | S |
| B2 | Verify zero internal links pointing in from KEEP pages (de-link if any found — should be ~0 by design) | S |
| B3 | Return **HTTP 410 Gone** at server level for each URL — signals intentional removal, faster Google deindex than 404 | M |
| B4 | Remove from sitemap (most likely already absent) | S |
| B5 | Verify in GSC URL Inspection that Google sees 410 | S |

### 3.3 REDIRECT execution — 36 URLs (27 out-of-state + 9 out-of-borough)

Both lanes land on `/areas-served` (decision #4 + #5). The 27 NJ pages additionally remove a YMYL/compliance risk — a NY-only OASAS-licensed facility advertising service in NJ is regulator-visible deceptive geo-targeting.

| Step | Action | Effort |
|---|---|---|
| C1 | Build redirect map: 27 NJ doorways → `/areas-served`; 9 out-of-borough NYC doorways → `/areas-served` | S |
| C2 | Deploy 301 redirects at server / WordPress level (Redirection plugin or `.htaccess`) | S |
| C3 | Remove source pages from sitemap; remove internal links from KEEP pages pointing to the 36 redirected URLs | M |
| C4 | Verify all 36 return 301 → 200 at destination via Screaming Frog or curl batch | S |
| C5 | Submit updated sitemap; spot-check 5 URLs in GSC URL Inspection | S |

**Important interaction:** `/areas-served` is currently broken (per Task 1 §1 out-of-scope note — "page is broken, needs full reset"). The 36 redirects can ship before the `/areas-served` rebuild lands — a 301 to a broken page is still better than the doorway pages staying live with stale geo-targeting and compliance risk — but the `/areas-served` rebuild should land in M1 too, ideally in the same week, so the redirect destination is functional.

### 3.4 Phase A sequencing

All four actions ship in the **same deploy window** (within a single M1 week), in this order:

1. Internal de-linking (~3h across NOINDEX + DELETE + REDIRECT source pages)
2. NOINDEX meta tags on the 128 (~3h)
3. 410 Gone on the 99 DELETE (~1h)
4. 301 redirects on the 36 (~1h)
5. Sitemap rebuild + submit (~30 min)
6. GSC URL Inspection spot-check on ~20 URLs across all four lanes (~1h)
7. GSC Coverage report saved as a baseline snapshot the day of deploy

Doing all four in a single deploy maximizes the quality signal Google sees in one pass and minimizes the days of intermediate state (e.g., a URL with NOINDEX still in the sitemap is contradictory).

---

## 4. Phase B — AUDIT triage (M1-M3, ~66h execution)

Phase B is where the cleanup stops being mechanical and becomes a content-and-internal-linking review project. **This is the work the v1 framework hid by routing 453 of these URLs into auto-NOINDEX/DELETE buckets.** The v2 overlay correctly surfaces them as topical-authority assets that need eyes-on per URL.

### 4.1 Sub-bucket allocation

| Sub-bucket | URLs | Per-URL time | Total | Owner | Phase |
|---|---:|---|---:|---|---|
| AUDIT (core topical) | 367 | 5 min triage + 30 min for ~50 worth rewriting | ~50h | Content + Aleksa cosign | M1 (75) → M2 (150) → M3 (142) |
| AUDIT (unclassified w/ traffic) | 76 | 5 min triage | ~6h | Content | M1 (40) → M2 (36) |
| AUDIT (adjacent w/ traffic) | 3 | 10 min each | ~1h | Content | M1 |
| AUDIT (framework-ambiguous) | 109 | 5 min triage | ~9h | On-Page | M1 (50) → M2 (59) |

### 4.2 Per-URL triage decision tree

Standardize this so 555 URLs don't become 555 independent judgment calls:

```
For each AUDIT URL:
  1. What's the topic? (one-line classification)
  2. Is it a duplicate / near-duplicate of a KEEP page? → REDIRECT to that page
  3. Does it cover a core addiction-treatment topic AND already rank for relevant queries (>=5 clicks/365d)?
     → KEEP. Add 1-3 internal links from this page into the most-relevant service page (conversion path fix).
        If the page is <500 words OR has no service-page link OR has a misleading title, flag for REWRITE (30-min slot).
  4. Does it cover a core topic but get <5 clicks/365d?
     → KEEP if recently published (<6mo) or has any backlinks; otherwise NOINDEX.
  5. Is it off-topic for addiction treatment (lifestyle, generic health, unrelated)?
     → NOINDEX if any traffic; DELETE if zero traffic.
  6. Adjacent (insurance, mental health, therapy) with traffic?
     → KEEP + add a service-page link + rewrite intro/outro for service-area alignment.
```

**Outputs per URL** (logged in a single tracking sheet):

| Column | Values |
|---|---|
| URL | (the page) |
| Sub-bucket | core / unclassified / adjacent / ambiguous |
| Decision | KEEP / KEEP+REWRITE / NOINDEX / REDIRECT / DELETE |
| Reason | one line |
| Service-page link target | for KEEP / KEEP+REWRITE rows: which service page the URL now links to |
| Rewrite-slot needed (Y/N) | for KEEP+REWRITE rows only |
| Reviewer | Content lead / On-Page / Aleksa cosign |
| Decision date | yyyy-mm-dd |

### 4.3 The conversion-path fix per KEEP decision

Per strategy §2.1: the issue with most core-topical blogs isn't the topic — it's that they have no internal link into the service funnel. A blog ranking for "how to help someone with a porn addiction" (1,093 clicks / 88K impressions per the strategy) produces topical-authority surface but zero conversions because nothing on the page routes the reader toward `/services/...`.

**Minimum spec for a KEEP decision in AUDIT:**

1. The blog has **>=1 contextual internal link** in the first half of the body to the most-relevant service page (not the homepage, not a generic CTA — a contextual link with anchor text that names the service).
2. The blog has **a sticky or end-of-body service-page CTA block** ("Looking for [service] in Brooklyn? → /services/[service]"). This can be a sitewide template insert rather than per-page work.
3. The blog title and H1 reflect the actual topic accurately (no clickbait drift from the body content).

If 1-2 aren't possible on the current URL state, the page goes to REWRITE (30-min slot inside the 50h budget) or NOINDEX.

### 4.4 Phase B sequencing across M1-M3

| Month | URLs reviewed | Cumulative | Focus |
|---|---:|---:|---|
| M1 (June) | ~170 | 170 / 555 | All ambiguous + adjacent + first 75 core topical + first 40 unclassified — establish the pattern, lock the SLA |
| M2 (July) | ~250 | 420 / 555 | Bulk of core topical + finish unclassified + finish ambiguous |
| M3 (August) | ~140 | 555 / 555 | Long tail of core topical; Q3 audit-back kickoff |

Each month closes with a per-batch summary in the project doc: how many KEEP / KEEP+REWRITE / NOINDEX / REDIRECT / DELETE per sub-bucket, and which service pages got the most new internal links (so the on-page team sees the equity-routing pattern emerge in real time).

---

## 5. Verification & audit-back path (Q3 — Aug 2026)

The cleanup is **defensible and reversible**. The Q3 audit-back path is what makes routing 128 URLs to NOINDEX trustworthy to leadership and to Google.

### 5.1 What gets re-audited at Q3

| Cohort | Question | Action if signal recovered |
|---|---|---|
| 128 NOINDEX'd URLs (Phase A.1) | Did any gain backlinks, ranking, or conversion signal in the 90 days since NOINDEX? | Reactivate index + add service-page internal link. If still flat → final DELETE in Q3 or Q4. |
| 555 AUDIT-triaged URLs (Phase B) | Of the KEEP+REWRITE decisions, did the rewrites move clicks/conversions? | Promote winners; demote duds (back to NOINDEX). |
| 36 redirected URLs (Phase A.3) | Is `/areas-served` accumulating the equity (referring domains, impressions for borough queries)? | Verify; no action needed unless redirects are not chaining properly. |
| 99 DELETE'd URLs (Phase A.2) | Has any been re-discovered by Google? | Confirm 410 still serving; spot-check 5 URLs. |

### 5.2 Site-level recovery metrics

Track these monthly post-Phase-A deploy, charted against the Feb 7 baseline:

| Metric | Source | Baseline (May 11) | Q3 target | Q4 target |
|---|---|---|---|---|
| URLs known to Google (Coverage total) | GSC Coverage | ~1,800 (post-drop) | Stable | Stable or rising |
| Pages "Crawled — not indexed" | GSC Coverage | 562 | < 300 | < 150 |
| Pages "Discovered — not indexed" | GSC Coverage | (remainder of 756) | < 100 | < 50 |
| Daily impressions (30d avg) | GSC Performance | (77% below Feb baseline) | +40% off May trough | +80% off May trough |
| Indexed-page count | GSC Coverage | TBD on May 11 | +10% | +25% |
| Avg position on KEEP-page queries | GSC Performance | TBD per page | +3 positions | +5 positions |

The recovery curve is **expected to lag the deploy by 4-8 weeks** — Google needs to re-crawl + re-evaluate. Don't read May → June as "it didn't work." Read July → August.

---

## 6. Dependencies

| # | Dependency | Owner | Why it matters |
|---|---|---|---|
| 1 | **Task 3 (disavow + PR pause)** must run in parallel | Off-Page (Julce) + Aleksandar | Cleaning the indexed surface without fixing the off-page cause means the spam-score-43 PBN signal keeps re-triggering the quality discount. Phase A loses ~40% of its impact if Task 3 isn't shipped in the same M1 window. |
| 2 | **`/areas-served` rebuild** | On-Page + Content (Task 1 ecosystem) | All 36 Phase A.3 redirects land here. Can ship a few days after the redirects, but no later than end of M1. |
| 3 | **DataForSEO Backlinks per-URL pull** for the 128 NOINDEX candidates | Already pulled (2026-05-11) | Pre-execution audit gate |
| 4 | **GSC Coverage + Crawl Stats export refresh** the day of Phase A deploy | Aleksandar | Baseline snapshot for the recovery curve |
| 5 | **WordPress backup** the day of Phase A deploy | Whoever runs the site | Standard rollback insurance for a deploy touching 200+ URLs |
| 6 | **Content lead capacity confirmation** for the ~66h AUDIT triage budget across M1-M3 | Asana lead (Zach) | If content team is at capacity, the AUDIT lane stretches to M4 — Phase A still ships M1 regardless. |
| 7 | **Aleksa cosign budget** for AUDIT (core topical) — ~2-3h/month for spot-check + edge-case calls | Aleksa | The 367-URL core-topical lane is the highest-judgment work; the content lead shouldn't run it alone. |

---

## 7. Out of scope (handled separately)

| Item | Where it lives |
|---|---|
| Service-page rebuild (5 pages) + homepage CRD deployment | **Task 1** |
| GBP profile optimization | **Task 2** |
| Disavow file + PBN PR pause (off-page cause-side) | **Task 3** |
| Schema deployment site-wide | Task 1 (schema for KEEP pages); not relevant for NOINDEX/DELETE URLs |
| `/areas-served` page rebuild | Separate task (called out in Task 1 §1) |
| Service-page → location-page interlinking refactor | Task 1 Phase B |
| LegitScript certification verification | Strategy §10 row M1-16 |
| Quarterly LD scan coverage expansion | Strategy §10 row M3-09 |

---

## 8. Effort + sequencing summary

| Phase | Work | Calendar | Effort | Risk if delayed |
|---|---|---|---:|---|
| **A.1** | NOINDEX 128 + pre-exec check | M1 week 1 | ~6h | Each week of delay = ~1 additional week of impression recovery lag |
| **A.2** | DELETE 99 via 410 | M1 week 1 (same deploy) | ~3h | Same as A.1 |
| **A.3** | REDIRECT 36 (NJ + out-of-borough) | M1 week 1 (same deploy) | ~3h | Compliance risk on NJ pages grows with every day they stay live |
| **A.4** | Sitemap + GSC submit + baseline snapshot | M1 week 1 (same deploy) | ~1h | — |
| **B.1** | AUDIT triage batch 1 (~170 URLs) | M1 weeks 2-4 | ~20h | Doesn't block A; can stretch to M2 if needed |
| **B.2** | AUDIT triage batch 2 (~250 URLs) | M2 | ~30h | Same |
| **B.3** | AUDIT triage batch 3 (~140 URLs) | M3 | ~16h | Same |
| **C** | Q3 audit-back | M3 last week | ~6h | Confirms cleanup defensibility |

**Total:** ~85h of work across M1-M3. ~13h in M1 week 1 (the high-leverage, fast-acting mechanical cleanup). ~72h across M1-M3 for AUDIT triage + Q3 audit-back.

---

## 9. Asana task structure recommendation

For Zach when this lands:

| Asana task | Owner | Effort | Dependencies |
|---|---|---|---|
| T4.A — Phase A mechanical deploy (NOINDEX 128 + DELETE 99 + REDIRECT 36 in one window) | On-Page | M | Backup; sitemap update |
| T4.A.1 — Pre-execution NOINDEX gate script run | Aleksandar | S | DataForSEO data (already in hand) |
| T4.A.2 — Internal de-linking pass on KEEP pages | On-Page | M | T4.A.1 output |
| T4.B.1 — AUDIT batch 1 triage (170 URLs in M1 weeks 2-4) | Content lead + Aleksa cosign | L | T4.A complete |
| T4.B.2 — AUDIT batch 2 triage (250 URLs in M2) | Content lead + Aleksa cosign | L | T4.B.1 |
| T4.B.3 — AUDIT batch 3 triage (140 URLs in M3) | Content lead + Aleksa cosign | L | T4.B.2 |
| T4.C — Q3 audit-back review (recovery metrics + final NOINDEX disposition) | Aleksandar | M | All B batches done |

---

## 10. What I need from Aleksa before this routes to Zach

1. **Feasibility cosign on the deploy plan** — particularly the single-window deploy in Phase A (NOINDEX + DELETE + REDIRECT + sitemap update in one M1 week). Any reason to split into two windows from a Surfpoint-WordPress-stack perspective?
2. **Content lead capacity check** — is the ~66h AUDIT budget across M1-M3 realistic given the existing Surfpoint content allocation, or does it need to stretch to M4?
3. **Per-URL tracking-sheet location** — where should the 555-URL AUDIT log live so it's discoverable for Q3 re-audit? (Suggesting `exports/audit_log_q2.csv` in the client folder + a synced Drive copy.)
4. **NOINDEX deploy mechanism preference** — Yoast per-post meta-robots field, or theme-level conditional in functions.php? Yoast is more transparent; functions.php is faster for bulk.

Once those four are answered, this routes to Zach for Asana creation in the standard M1-04 / M2-06 / M3-04 cadence the strategy already specifies.
