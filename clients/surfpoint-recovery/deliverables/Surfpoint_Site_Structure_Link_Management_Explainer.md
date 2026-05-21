# Surfpoint Recovery — Site Structure & Link Management

**Companion to:** `site_structure_link_management.xlsx`
**Author:** Aleksandar Spasevski · **Date:** 2026-05-12
**Scope:** What each action lane in the sheet means, why it exists, and how to read the per-URL decisions.

---

## 1. What this sheet is

A single per-URL action ledger for all 878 indexable URLs on surfpointrecovery.com. Every URL gets exactly one action: `KEEP`, `KEEP-AUDIT`, `AUDIT` (4 sub-types), `NOINDEX` (2 sub-types), `DELETE`, `DELETE+REDIRECT`, or `REDIRECT`.

The sheet is the merge of:
- The 877-URL **v2 decision matrix** (GA + GSC + DataForSEO backlinks + topical relevance overlay).
- **Explicit overrides** from the Services-Legacy-Redirect and Task-4 Index-Hygiene briefs (the 5 `/services/*` URLs + the `/services` parent).

It's the input to the Phase-A single-window deploy (M1, ~13 hours of execution) and the Phase-B audit triage (M1–M3, ~66 hours).

---

## 2. Why this work exists

Between Feb 7 and May 4 2026 (87 days), Google issued an active quality signal against the site:

- **756** URLs flagged "not indexed" in GSC Coverage (562 of those: "Crawled — currently not indexed")
- **−37%** total URLs known to Google
- **−77%** daily impressions
- A **524-request crawl spike** on Mar 16 — a system-level re-evaluation event

Google has already made the cleanup decision on the bulk of the site. The 756 "not indexed" pages are an instruction. The strategic question is **how fast we align the indexed surface to that signal** so the remaining pages become the canonical Surfpoint surface and impression recovery begins.

The cleanup is the first half of the recovery thesis. The second half (Task 3 — Off-page disavow + PR pause, addressing the spam-score-43 PBN backlink pattern) must run in parallel.

---

## 3. How to read a row

Each row in `Link Management` has the same shape:

| Column | What it means |
|---|---|
| **URL** | The canonical URL |
| **action** | The single decision for this URL |
| **implementation** | HTTP-level mechanism (`HTTP 200`, `meta noindex,follow`, `HTTP 410 Gone`, `301 permanent`) |
| **redirect_target** | For 301s only — where the URL points |
| **phase** | M1 / M2 / M3 / Q3 — the deploy month |
| **owner** | On-Page (Aleksa) / Content + Aleksa cosign / On-Page (Task 1) |
| **reason** | One-line rationale from the decision matrix |
| **override_note** | Where an explicit brief overrides the matrix (only the 6 `/services` URLs) |
| traffic + backlink columns | The evidence the decision was made against |

The action column is color-coded — green for keep, yellow for audit, orange for noindex, red for delete, blue for redirect.

---

## 4. The 11 action lanes — what each one is and why

### 4.1 KEEP (18 URLs)

**What:** Core revenue / utility surface. Stays at HTTP 200, untouched.
**Why:** These URLs convert, have backlinks, or are essential utility pages. Task 1 owns them (rebuild/refresh).
**Examples:**
- `/` (homepage) — 4,844 sessions/90d, 180 backlinks
- `/careers` — 577 sess/90d, ranks pos 3.5
- `/about-us`, `/treatments`, `/admissions`

### 4.2 KEEP-AUDIT (29 URLs)

**What:** Real-catchment location pages + 6 conversion-signal blogs. HTTP 200 with a light per-URL review.
**Why:** Some signal but not enough to leave fully alone — verify the page still does its job before promoting.
**Examples:**
- `/blog/the-history-of-drugs` — 523 sess/90d, pos 6.7
- `/blog/can-a-urine-drug-test-show-how-much-you-take` — 265 sess/90d, adjacent topic
- Real-catchment location pages with ≥5 sess/90d

### 4.3 AUDIT (core topical) — 367 URLs

**What:** Blog URLs on core addiction-treatment topics that need a 5-minute triage each (KEEP-with-internal-link / REWRITE / NOINDEX / REDIRECT).
**Why:** This is the bulk of the new work. The v1 decision matrix would have auto-NOINDEX'd most of these. The v2 topical overlay correctly surfaces them as **topical-authority assets**. Killing them en masse would weaken the core topical surface; keeping them all untouched leaves real cleanup on the table. Per-URL eyes are the only correct answer.
**Examples:**
- `/blog/how-to-help-someone-with-a-porn-addiction` — 901 sess/90d, core topic, position 17 (rewrite candidate)
- `/blog/how-long-does-it-take-for-weed-to-leave-your-system` — 306 sess/90d, core topic
- `/blog/withdrawal-from-alcohol-using-hydroxyzine` — 244 sess/90d, core topic
**Triage rule:** Does it match a service page? Is it a near-duplicate of a KEEP page? Does it rank for relevant queries with ≥5 clicks/365d? See Task-4 brief §4.2 for the full decision tree.

### 4.4 AUDIT (unclassified w/ traffic) — 76 URLs

**What:** Blog URLs that don't cleanly fit the topical taxonomy but have traffic. 5-min triage each, Content owner.
**Why:** Most are tangential-to-addiction queries (alcohol+gallbladder, alcohol+specific medication). They earn traffic but don't directly serve the buyer journey. Triage decides whether they get rewritten toward the service-area, kept as info pages, or NOINDEX'd.
**Examples:**
- `/blog/whiskey-and-acid-reflux` — 629 sess/90d
- `/blog/what-drugs-cause-bags-under-eyes` — 510 sess/90d
- `/blog/dangers-of-mixing-alcohol-and-buspar` — 410 sess/90d

### 4.5 AUDIT (adjacent w/ traffic) — 3 URLs

**What:** Adjacent topics (mental health, sleep meds) with traffic — keep + add a service-page link + rewrite intro/outro.
**Why:** Adjacent traffic can be routed to revenue surfaces if the page sets up the link properly. Small lane, high-leverage edits.
**Examples:**
- `/blog/mental-health-disorder-statistics` — 138 sess/90d
- `/blog/mixing-sleeping-pills-and-alcohol` — 37 sess/90d
- `/blog/fingerprint-drug-tests` — 17 sess/90d

### 4.6 AUDIT (framework-ambiguous) — 109 URLs

**What:** Had a signal in the data but didn't fit any framework bucket cleanly. On-Page owner.
**Why:** When traffic exists but the page doesn't match service / location / clean topic patterns, the safe move is to look at the URL individually rather than apply a default.
**Examples:**
- `/blog/mixing-xarelto-and-alcohol` — 947 sess/90d, position 4.0 (high traffic but off-core)
- `/blog/can-alcohol-cause-blood-in-urine` — 773 sess/90d, position 3.0
- `/blog/does-alcohol-affect-the-gallbladder` — 372 sess/90d

### 4.7 NOINDEX — 121 URLs

**What:** `<meta robots="noindex,follow">`. Equity stays in the site via internal links; URL drops out of the index.
**Why:** Off-topic content with shallow traffic. Removing it from the index immediately stops dragging down the site-level quality signal Google evaluates. The `follow` directive preserves internal-link equity until the Q3 re-audit decides final disposition.
**Examples:**
- `/blog/melatonin-and-alcohol` — 31 sess/90d but off-topic (sleep, not addiction)
- `/blog/what-is-claustrophobia` — 25 sess/90d, completely off-topic
- `/blog/list-of-phobias-most-common-fears` — 23 sess/90d, off-topic
**Pre-execution gate:** Each of the 128 NOINDEX URLs is checked for (a) ≥2 quality backlinks → reroute to REDIRECT instead, or (b) ranking improvement >5 positions in last 30d vs prior 60d → reroute to KEEP-AUDIT. Expected reroute volume: ~5–10.

### 4.8 NOINDEX (off-topic but traffic) — 7 URLs

**What:** Same `noindex,follow` mechanism, but with the rule "keep 1 internal link from a related blog so internal flow isn't broken mid-cleanup."
**Why:** These have meaningful traffic (>300 sess/90d) but are off-topic. Removing them from the index protects the site-level quality signal; preserving 1 internal link from related content prevents an isolated NOINDEX cliff.
**Examples:**
- `/blog/how-to-get-rid-of-alcohol-breath` — 853 sess/90d, 230k imp/90d, off-topic
- `/blog/how-long-doxycycline-stays-in-your-system` — 474 sess/90d
- `/blog/rappers-with-drug-addiction` — 430 sess/90d (entertainment, not treatment)
- `/blog/viagra-and-alcohol` — 337 sess/90d (off-topic clickbait)

### 4.9 DELETE — 99 URLs

**What:** HTTP 410 Gone at server level. Not 404 — 410 signals **intentional removal** to Google and triggers faster deindex.
**Why:** Paginated artifacts (`?bca49ee9_page=2`-style), orphan stubs <5 clicks / 0 conversions / no backlinks / off-topic, and template debris. No salvage value.
**Examples:**
- `/blog/alcohol-and-gout` — 4 sess/90d, 0 impressions, off-topic
- `/blog/why-do-i-get-hiccups-when-i-drink-whiskey` — 4 sess/90d, off-topic
- Paginated artifacts and orphan stubs across the site

### 4.10 DELETE+REDIRECT — 34 URLs

**What:** 301 permanent redirect to `/areas-served` and source URL deleted from sitemap.
**Why:** These are out-of-state (NJ) doorway pages targeting service in NJ from a NY-only OASAS-licensed facility. Two reasons to remove:
1. **Compliance:** YMYL geo-targeting from a NY-licensed addiction-treatment facility into NJ is regulator-visible deceptive geo-targeting.
2. **Quality signal:** Doorway-pattern pages are exactly what Google's quality systems penalize.
The 301 preserves any residual equity → `/areas-served`.
**Examples:**
- `/locations/leading-addiction-recovery-center-in-georgetown-ny` (NJ) — 17 sess/90d
- `/locations/newark` (NJ) — 15 sess/90d
- `/locations/jersey-city`, `/locations/hoboken`, `/locations/elizabeth` patterns

### 4.11 REDIRECT — 14 URLs

**What:** 301 permanent redirect (no DELETE marker because the source URL has indexed history worth preserving).
**Why:** Three sub-cases bundled in one lane:
- **9 out-of-borough NYC** location doorways → `/areas-served`. These target Manhattan/Queens/Bronx/Staten Island from a Brooklyn facility — same doorway-pattern problem as the NJ pages, just intra-state.
- **5 `/services/*` URLs** → `/treatments/[service]`. Legacy orphan service pages with 0 contextual internal links. Each redirect ships **only when its `/treatments/[service]` sub-page is built** (Wave 1 = M1, Wave 2 = M2, Wave 3 = M3). One URL — `/services/benzodiazepine-detox-services` — accounts for **91% of orphan impressions (147 of 162 in 30d, 1,925 in 365d)** and is the lead candidate to accelerate into M2.
- **1 `/services` parent** → `/treatments`. Currently HTTP 404 (broken). Ships immediately — fixes a pre-existing technical defect, no destination-readiness dependency.

---

## 5. Phased rollout

### 5.1 Phase A — Mechanical cleanup (M1, single deploy window, ~13h)

All four mechanical lanes ship in one window:
- 121 NOINDEX + 7 NOINDEX (off-topic but traffic) = **128 noindex,follow** metas
- 99 **410 Gone**
- 34 + 9 = **43 301 redirects** (NJ + out-of-borough → `/areas-served`)
- 1 `/services` → `/treatments` parent redirect
- Sitemap rebuild + GSC submit + baseline metrics snapshot

Why one window: doing all four in a single deploy maximizes the quality signal Google sees in one pass and minimizes intermediate-state contradictions (e.g., a URL with NOINDEX still in the sitemap).

### 5.2 Phase A.5 — `/services/*` redirects (rolling M1 / M2 / M3)

Each `/services/*` → `/treatments/[service]` 301 ships only when the destination sub-page is built and live. A redirect to a non-existent destination either 404s or falls back to `/treatments` hub (loses topical relevance).

### 5.3 Phase B — AUDIT triage (M1–M3, ~66h)

The 555 AUDIT URLs get split into three monthly batches of ~185:
- M1 weeks 2–4: batch 1 (~170 URLs)
- M2: batch 2 (~190 URLs)
- M3: batch 3 (~195 URLs)

5-min triage per URL → KEEP / KEEP+REWRITE / NOINDEX / REDIRECT / DELETE. ~50 URLs in the core-topical lane warrant a 30-min rewrite slot.

### 5.4 Q3 audit-back (Aug 2026)

The cleanup is **defensible and reversible**. At Q3:
- Re-pull GSC Coverage + per-URL clicks/imp/conversions for all 128 NOINDEX'd URLs + 555 AUDIT-triaged URLs
- NOINDEX'd URL gained backlinks/ranking → reactivate index + add internal link
- NOINDEX'd URL still flat → final DELETE (Q3 or Q4)
- KEEP+REWRITE didn't move metrics → demote back to NOINDEX

This is the path that makes routing 128 URLs to NOINDEX trustworthy to leadership and to Google.

---

## 6. Decisions locked before execution

| # | Decision | Resolution |
|---|---|---|
| 1 | NOINDEX implementation | `<meta robots="noindex,follow">` — equity stays in the site through internal links until Q3 |
| 2 | DELETE implementation | **HTTP 410 Gone** for paginated artifacts and orphan stubs; not 404 |
| 3 | REDIRECT type | **301 permanent** for all 48 cross-page redirects |
| 4 | Where 9 out-of-borough redirects land | `/areas-served` (not homepage) |
| 5 | Where 34 NJ out-of-state redirects land | `/areas-served` — additional compliance rationale (NY-only OASAS license) |
| 6 | Where 5 `/services/*` redirects land | `/treatments/[matching-service]`, timed to sub-page build wave |
| 7 | Pre-execution NOINDEX gate | Each candidate checked for ≥2 quality backlinks (→ REDIRECT) or rank improvement (→ KEEP-AUDIT) |
| 8 | Quarterly audit-back | Q3 (Aug 2026) re-evaluation of all NOINDEX'd + AUDIT-triaged URLs |
| 9 | Internal de-linking | When NOINDEX'ing, remove or rewrite internal links from KEEP pages (exception: 7 high-traffic NOINDEX URLs keep 1 link) |
| 10 | Sitemap handling | Excluded URLs removed in same deploy as meta-tag / 301; sitemap re-submitted via GSC same day |

---

## 7. Reversibility

Three reversal paths if any decision turns out wrong:

- **NOINDEX** → remove the meta tag, page re-indexes within a crawl cycle. Equity preserved via `follow` directive throughout.
- **DELETE (410)** → restore the page; Google re-discovers via internal links + sitemap. Equity is gone after ~30 days, so the reversal cost grows with time.
- **REDIRECT** → remove the 301; restore the source page. Destination accumulates equity in the interim.

The cleanup is mechanically reversible at any time; the Q3 audit-back is the scheduled checkpoint.

---

## 8. What this sheet does NOT cover

- **Schema deployment** on KEEP pages → Task 1 (separate brief)
- **`/areas-served` rebuild** → separate task (called out in Task 1 §1); must land in M1 so 43 redirects have a functional destination
- **Service-page → location-page interlinking refactor** → Task 1 Phase B
- **LegitScript certification verification** → Strategy §10 row M1-16
- **Off-page disavow + PR pause** → Task 3 (the upstream cause; must run in parallel with this work)

The sheet is the on-page link-management input. The recovery curve depends on this cleanup + Task 3 disavow landing in parallel.

---

## 9. Source files

- `decision_matrix_with_topical.csv` — 877-URL bucketed matrix (v2 topical + backlinks overlay)
- `scripts/topical_overlay_surfpoint.py` — v1 → v2 re-bucketing logic, reproducible
- `Surfpoint_Recovery_Q2_2026_Custom_Strategy.md` §1.1 (deindexing event), §2.1 (decision logic), §2.4 (backlinks)
- `Surfpoint_Services_Legacy_Redirect_Plan.md` — the 6 `/services` URL overrides
- `Surfpoint_Task4_Index_Hygiene_Brief.md` — action-lane definitions and phase plan

The sheet itself is regenerated by `exports/_build_site_structure_sheet.py` — rerun anytime the matrix or overrides change.
