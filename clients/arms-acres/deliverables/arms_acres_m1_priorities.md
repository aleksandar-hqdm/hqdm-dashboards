# Arms Acres — M1 Priorities (Q2 2026)

**Owner:** Aleksandar · **Date:** 2026-05-11 · **Source data:** content gap v2 + blog improve candidates + link gap (all annotated with `period` + `importance` columns)

> This document is the **operational pick list for Month 1** out of the broader Q2 opportunity surface. M2/M3 picks live in the same sheets — filter by `period` column.

---

## Top 5 PAGES in M1

| # | Action | Target URL | Importance | Why | Variants this covers |
|---|---|---|---|---|---|
| **1** | **IMPROVE** | `/inpatient/adult-rehabilitation` | Critical | **8 cluster matches converge here** — single highest-leverage page improvement. Add insurance-by-name (Aetna/Medicare/Medicaid/Tricare), opioid/alcohol sub-sections, Brooklyn service-area mention, condition-specific copy | "inpatient rehab near me", "drug rehab near me inpatient", "inpatient rehab program near me", "drug rehabilitation center inpatient", "inpatient drug rehabilitation facility", "adult rehab centers near me", "inpatient rehab brooklyn", "inpatient opioid rehab near me", "inpatient rehab medicaid near me" |
| **2** | **IMPROVE** | `/inpatient/detox-program` | Critical | Add NY-state-level positioning + 'near me' semantic markup + insurance display | "inpatient detox new york" (2 comps rank, AA doesn't) |
| **3** | **IMPROVE** | `armsacres.com/` (homepage) | High | Add NY-state alcohol-rehab hero section + internal link to adult-rehabilitation. 880 vol, 3 competitors rank, homepage is the matched URL | "alcohol rehab centers in new york", "alcohol rehab centers in ny" |
| **4** | **IMPROVE** | `/outpatient/queens-outpatient` | High | Existing page does not rank for Queens queries. Add Queens-specific copy, schema, NAP, internal links | "outpatient drug rehab queens ny", "outpatient rehab queens ny" |
| **5** | **NEW (start design)** | `/alcohol-rehab-new-york` | High | Start M1, ship M2. Consolidates 3 cluster variants at 880 vol that the homepage IMPROVE doesn't fully cover | "alcohol treatment new york city", "alcoholism treatment new york", "new york alcohol treatment centers" |

**Sheet reference:** `arms_acres_content_gap_v2.csv` — filter `period == "M1"` (12 rows, since clusters #1's 8 sub-clusters auto-promoted).

---

## Top 10 ARTICLES in M1

All from `arms_acres_blog_improve_candidates.csv` (GSC-verified — currently ranking 11-30 with measurable demand). M1 focus = **title rewrites + content depth + schema** (high-leverage, low-risk on already-ranking pages).

| # | URL slug | Pos | Impressions/180d | CTR | Importance | Action |
|---|---|---:|---:|---:|---|---|
| 1 | `/blog/alcohol-recovery-statistics` | 11.4 | 19,652 | 0.22% | Critical | One position from top-10. Refresh stats with 2026 data, add NY-specific stats |
| 2 | `/blog/can-you-stop-taking-ambien-cold-turkey` | 12.8 | **55,645** | 1.14% | Critical | Single biggest opportunity. Title rewrite to lead with clinical answer + safety warning |
| 3 | `/blog/insurance-cover-drug-and-alcohol-rehab` | 11.6 | 8,621 | 0.05% | Critical | Helio Health competes here. Rewrite title, add insurance-by-name table |
| 4 | `/blog/how-to-get-insurance-to-pay-for-inpatient-rehab` | 14.5 | 14,134 | 0.52% | Critical | Conversion-intent query. Add step-by-step framework + FAQ schema |
| 5 | `/blog/medicare-cover-alcohol-and-drug-rehab` | 16.6 | 7,433 | 0.16% | High | Helio competes. Lead with AA's Medicare acceptance in first 100 words |
| 6 | `/blog/tricare-cover-alcohol-and-drug-rehab` | 20.2 | 7,917 | 0.08% | High | Helio competes. Veteran payor — high-LTV demographic |
| 7 | `/blog/aetna-cover-rehab-treatment` | 20.1 | 11,440 | 0.15% | High | Specific payor query. Title rewrite + Aetna FAQ schema |
| 8 | `/blog/how-much-does-drug-rehab-cost-without-insurance` | 16.5 | 17,040 | 0.24% | High | Cost objection-handling. Add price ranges, financing, scholarships |
| 9 | `/blog/a-clear-overview-of-percocet` | 15.8 | 40,600 | 0.10% | Medium | CTR disaster — title rewrite is the primary lever |
| 10 | `/blog/how-addictive-is-xanax` | 23.6 | 31,496 | 0.05% | Medium | Needs both rank push (internal links) AND title rewrite |

**Pattern:** 7 of 10 are **insurance/payor + cost** content — the highest-conversion-intent SUD queries. Combined impressions of M1 articles = ~214K / 180 days; current clicks = ~1,200; **at top-3 average CTR, projected ~17,000 clicks = ~14× improvement**.

**Sheet reference:** `arms_acres_blog_improve_candidates.csv` — filter `period == "M1"` (10 rows).

---

## Top 10 LINKS & CITATIONS in M1

All verified missing from AA's 426 referring domains (full backlinks set checked 2026-05-11).

| # | Domain | Type | Importance | DA rank | Competitors with link | Action / acquisition path |
|---|---|---|---|---:|---|---|
| 1 | **carf.org** | citation | **Critical** | 42 | 3 (Samaritan + Helio + Cornerstone) | Verify if AA is CARF-accredited (escalate to compliance). If yes → claim/update listing. If no → org-level conversation. **Resolves both link gap AND Strategy Item 4 (LLM authority).** |
| 2 | **startyourrecovery.org** | citation | **Critical** | 91 | 3 (Samaritan + Helio + Cornerstone) | Apply at startyourrecovery.org/providers — straightforward gov-affiliated (Shatterproof) listing |
| 3 | **psychologytoday.com** | citation | High | 92 (est) | 0 in competitor set | **Industry-must-have** (not surfaced via competitor diff — added explicitly). Audit all AA facility + clinician profiles, ensure complete + linked back |
| 4 | **alcoholism.org** | citation | High | 79 | 3 (Bronx Recovery + Samaritan + Helio) | Directory submission, ~30 min form |
| 5 | **behavioralhealthnews.org** | backlink | High | 65 | 2 (CoveCare + Samaritan) | **Pitch contributed article** from AA clinical lead (e.g., 'Hudson Valley SUD trends in 2026'). 4-6 week lead time — start M1, may land in M2 |
| 6 | **charitynavigator.org** | citation | High | 0 (high-trust vertical) | 3 (CoveCare + Samaritan + Helio) | Conditional on 501(c)(3) status. Verify AA's legal structure first (operated by Liberation Programs Inc) |
| 7 | **best-rehabs.com** | citation | Medium | 102 | 3 | Directory submission |
| 8 | **freerehabcenters.org** | backlink | Medium | 46 | 3 | Free-rehab directory — verify visibility implications first |
| 9 | **choosehelp.com** | backlink | Medium | 2 (very high authority) | 3 | Submit, cross-link from PR. High-DA listing site |
| 10 | **sobasearch.com** | citation | Medium | 72 | 2 | Recovery directory submission |

**Verification status:** All 10 confirmed missing from AA's 426 referring main domains. Source flag in CSV: `competitor_gap` (9 rows) or `industry_must_have` (1 row — psychologytoday.com).

**Sheet reference:** `arms_acres_link_gap.csv` — filter `period == "M1"` (10 rows).

---

## Sheet column additions (applied to all 3 deliverables)

Every CSV now has these new columns:

| Column | Values | Purpose |
|---|---|---|
| `period` | `M1` / `M2` / `M3` / `Q3+` | Phase 1 monthly cadence; `Q3+` = parked beyond Q2 |
| `importance` | `Critical` / `High` / `Medium` / `Low` | Filter at a glance |
| `m1_rank` | 1-10 (or blank) | The M1 ordering within each sheet |
| `m1_notes` | freeform | Why this is in M1 + specific action context |
| `source` (link gap only) | `competitor_gap` / `industry_must_have` | Provenance |
| `aa_already_has` (link gap only) | `True` / `False` | Defensive flag — verified against AA's full 426 referring domains |

**Auto-promotion logic applied** so M2/M3 aren't empty:
- Pages: 2+ competitors AND LP intent → M2; 1-comp LP at vol≥1000 → M3
- Articles: CORE topic AND impressions ≥10K → M2; CORE AND ≥3K → M3
- Links: 3-comp citations → M2; 2-comp citations OR 2-comp high-DA backlinks → M3

---

## What's *not* in M1 (explicit deferrals)

| Item | Why deferred |
|---|---|
| Bronx market new pages | Bronx Recovery is Maps-only competitor — fix via Strategy Item 2 (GMB) first |
| CASAC training cluster | Workforce play, requires AA product-team decision first |
| MICA program landing page | Requires clinical-team verification of AA's dual-diagnosis residential program |
| Queens DataForSEO Maps SERP pull | Phase 2 prep (~$0.10 in M3) |
| 152 non-competitor-overlap blog improvements | Spread across M2/M3 once M1 insurance sprint validates the title-rewrite hypothesis |
