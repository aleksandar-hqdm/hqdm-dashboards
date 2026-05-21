# Strategy Item 1 — Competitor Analysis (Q2 2026)

**Client:** Arms Acres · **Owner:** Aleksandar · **Department:** On-Page · **Status:** Complete
**Team brief:** "Analyze top 3 ranking competitors for addiction treatment keywords in Carmel, NY — identify content + link gaps"

**Supporting deliverables (referenced throughout):**
- `arms_acres_competitor_brief.md` — full landscape narrative (NY-wide)
- `arms_acres_content_gap_v2_annotated.csv` — every cluster with `period`/`importance`/`m1_rank` tagging
- `arms_acres_link_gap_annotated.csv` — every referring-domain gap with `period`/`importance` tagging
- `arms_acres_m1_priorities.md` — top 5 pages / top 10 articles / top 10 links picked from above

---

## 1. Top 3 Carmel competitors (literal answer to the brief)

Source: DataForSEO Maps SERP at Carmel coordinates (`41.4309,-73.6804,15`), 10 commercial-intent addiction-treatment queries, 2026-05-11.

| Rank | Operator | GBP / Property | Avg Carmel rank | Queries present (of 10) | Rating / Reviews |
|---|---|---|---:|---:|---|
| 1 | **Arms Acres** | Carmel Outpatient Clinic (Old Rte 6) | **1.1** | 10 | 3.3 / 7 |
| 2 | **CoveCare Center** | Counseling & Wellness Management (US-6) | 2.4 | 7 | 3.0 / 49 |
| 3 | **Putnam Family & Community Services** | *(operates under CoveCare's domain — same operator)* | 5.3 | 3 | n/a / n/a |

**Read:** The Carmel Map Pack is effectively a **two-operator market** — Arms Acres + CoveCare. The slot-3 entry is CoveCare's sister org. No third independent addiction-treatment operator surfaces in the Carmel Map Pack at all. **Defensive position is strong**; offensive opportunity is review-count parity (AA 7 vs CoveCare 49 — 7× review-volume gap despite AA's higher rating).

**Why "top 3 Carmel" alone understates the picture:** Arms Acres' inpatient services serve a multi-zone catchment (Carmel HQ + Hudson Valley + Bronx + Queens outpatient locations). For non-Carmel keywords, the competitor set differs sharply — see §2.

---

## 2. Expanded NY-wide competitor set (for organic + LLM + link work)

Source: DataForSEO SERP organic (NY-anchored queries, 776 rows) + ranked-keywords intersections. Final 5-competitor set after filtering for **real service providers** (per `feedback_competitor_definition.md`): excluded informational/UGC/government/national-chain references.

| # | Operator | Domain | Catchment | Role in landscape |
|---|---|---|---|---|
| 1 | CoveCare Center | covecarecenter.org | Carmel | Only direct Carmel Map Pack competitor (see §1) |
| 2 | Samaritan Daytop Village | samaritanvillage.org | Bronx + statewide NY | Multi-site chain; appears in AA's Bronx + statewide queries |
| 3 | Helio Health | helio.health | Syracuse + NY organic | Strong organic visibility on AA's commercial queries (excluding Maps) |
| 4 | Cornerstone of Medical Arts | cornerstoneny.com | Bronx + NYC | Highest-review Bronx competitor (203 reviews) |
| 5 | **Ascendant NY** | ascendantny.com | Manhattan | **Strongest organic competitor** — 17 SERP appearances avg rank 15.9 on AA target queries |

**Excluded by design:** Bronx Recovery (Maps-only player, 9 backlinks total, used for citation analysis only); Mountainside Treatment (CT/NY benchmark, included in backlinks comparison but not content gap); national chains AAC/Recovery Village/etc. (not addressable as local).

---

## 3. Content gaps — picked from existing v2 sheet

Full sheet: `arms_acres_content_gap_v2_annotated.csv` (171 clusters). Selection here = the gaps **with the strongest competitor signal in the Carmel + Hudson Valley + Bronx/Queens markets**.

### 3.1 Pages — top 5 M1 picks

| # | Action | Target URL | Why | Competitors converging |
|---|---|---|---|---|
| 1 | IMPROVE | `/inpatient/adult-rehabilitation` | 8 cluster matches converge here — single highest-leverage page improvement | All 5 |
| 2 | IMPROVE | `/inpatient/detox-program` | "inpatient detox new york" — 2 of 5 rank, AA doesn't | Helio, Cornerstone |
| 3 | IMPROVE | `armsacres.com/` (homepage) | NY-state alcohol-rehab hero missing; homepage is the matched URL for 880-vol cluster | Helio, Samaritan, Cornerstone |
| 4 | IMPROVE | `/outpatient/queens-outpatient` | Queens queries — page exists but doesn't rank | Cornerstone, Samaritan |
| 5 | NEW (start M1, ship M2) | `/alcohol-rehab-new-york` | Consolidates 3 cluster variants at 880 vol that homepage IMPROVE doesn't cover | Helio, Ascendant, Samaritan |

(Full reasoning + variant clusters in `arms_acres_m1_priorities.md` §"Top 5 PAGES in M1".)

### 3.2 Blog articles — top 5 M1 picks (out of 10 ranked)

Filter: AA blog posts currently ranking 11–30 with measurable demand (GSC-verified, 180-day window). M1 lever = title rewrite + content depth + schema.

| # | URL slug | Pos | Impr/180d | Why M1 |
|---|---|---:|---:|---|
| 1 | `/blog/alcohol-recovery-statistics` | 11.4 | 19,652 | One position from top-10. Refresh 2026 stats, add NY-specific |
| 2 | `/blog/can-you-stop-taking-ambien-cold-turkey` | 12.8 | **55,645** | Single biggest impression opportunity |
| 3 | `/blog/insurance-cover-drug-and-alcohol-rehab` | 11.6 | 8,621 | Helio competes; insurance-by-name table |
| 4 | `/blog/how-to-get-insurance-to-pay-for-inpatient-rehab` | 14.5 | 14,134 | Conversion-intent + FAQ schema |
| 5 | `/blog/medicare-cover-alcohol-and-drug-rehab` | 16.6 | 7,433 | Helio competes |

(Full top-10 + the M2/M3 staging in `arms_acres_blog_improve_candidates.csv`.)

### 3.3 Gap pattern across the 5 competitors

The recurring patterns where 2+ competitors collectively beat AA on AA's own service queries:

1. **Payor-specific landing pages.** Helio + Samaritan have insurance-by-name landing pages (Aetna, Medicare, Medicaid, Tricare). AA mentions Medicaid only in passing — no dedicated payor pages.
2. **City-specific service landing pages.** Helio + Cornerstone + Ascendant ship city/borough pages (`/drug-rehab-bronx-ny`, `/alcohol-rehab-queens-ny`). AA's `/outpatient/<city>-outpatient` URLs lack the keyword + service-specific content variant.
3. **Inpatient-process explainers.** Ascendant + Helio publish detailed "what to expect" educational pages that pull in AIO citations (see Strategy Item 4). AA's adult-rehabilitation page is thin on process content.
4. **Modality-specific landing pages.** MAT, dual-diagnosis, opioid-detox each as standalone pages — Helio + Samaritan ship these; AA has them only as section blocks within /inpatient.

---

## 4. Link gaps — picked from existing v2 sheet

Full sheet: `arms_acres_link_gap_annotated.csv` (annotated against AA's 426 verified referring domains). Selection here = the **10 referring-domain gaps with strongest competitor convergence + acquisition-path clarity** for M1.

| # | Domain | Type | DA-rank | Competitors with link | Acquisition path |
|---|---|---|---:|---|---|
| 1 | **carf.org** | citation | 42 | 3 (Samaritan + Helio + Cornerstone) | Verify AA's CARF status. If accredited → claim. If not → org-level conversation. **Resolves Strategy Item 4 LLM authority too** |
| 2 | **startyourrecovery.org** | citation | 91 | 3 (Samaritan + Helio + Cornerstone) | Apply at startyourrecovery.org/providers — Shatterproof affiliate |
| 3 | **psychologytoday.com** | citation | ~92 | Industry-must-have (added explicitly) | Audit AA facility + clinician profiles |
| 4 | **alcoholism.org** | citation | 79 | 3 (Bronx Recovery + Samaritan + Helio) | Directory submission, ~30 min |
| 5 | **behavioralhealthnews.org** | backlink | 65 | 2 (CoveCare + Samaritan) | Pitch contributed article from AA clinical lead; 4-6 week lead |
| 6 | **charitynavigator.org** | citation | high-trust | 3 (CoveCare + Samaritan + Helio) | Conditional on 501(c)(3) status — verify Liberation Programs Inc structure |
| 7 | best-rehabs.com | citation | 102 | 3 | Directory submission |
| 8 | freerehabcenters.org | backlink | 46 | 3 | Free-rehab directory — verify visibility implications first |
| 9 | choosehelp.com | backlink | high | 3 | Submit + cross-link from PR |
| 10 | sobasearch.com | citation | 72 | 2 | Recovery directory submission |

**Backlink-quality context (DataForSEO 2026-05-11):**

| Target | Backlinks | Ref Domains | Spam |
|---|---:|---:|---:|
| **armsacres.com** | 17,209 | 504 | 19 |
| mountainside.com | 8,138 | 1,628 | 27 |
| ascendantny.com | 4,267 | 1,874 | 44 |
| cornerstoneny.com | 882 | 302 | 18 |

AA's gap is **referring-domain diversity (3-4× behind benchmark)**, not backlink volume. The 10 M1 picks above target +10 high-quality citation domains; M2/M3 staging in the annotated sheet projects +200-300 ref domains over Q2 if executed at the realistic 5-10 editorial domains/month pace.

**Defensive (M1 urgent):** disavow the 5 `seo-anomaly-s*.xyz` PBN domains (active April–May 2026, anchor "TELEGRAM @SEO_ANOMALY"). See `Q2_Strategy §1.8(c)` for full attack documentation.

---

## 5. What's NOT in this analysis (explicit deferrals)

| Item | Why deferred |
|---|---|
| Carmel-only "top 3" content depth comparison | The Carmel addiction market has only 2 unique operators (AA + CoveCare); a "top 3" content comparison is structurally not meaningful. See §1 |
| National chains (AAC, Recovery Village) | Not locally addressable; would distract from realistic Q2 actions |
| Sister HQDM Recovery accounts (e.g., Conifer Park, Surfpoint, Urban Recovery) | Per `feedback_treat_clients_standalone.md` — no cross-client comparisons |
| Queens-specific Maps SERP top-3 | Queens Map Pack already pulled (per maps_serp.csv); will be folded into Strategy Item 2 (GMB) rather than Item 1, since Queens action is GMB-rebuild, not content-gap |

---

## 6. Status mapping to team brief

| Brief sub-deliverable | Status | Where to find it |
|---|---|---|
| Top 3 ranking competitors (Carmel) | ✅ Complete | §1 above |
| Content gaps | ✅ Complete | §3 + full sheet `arms_acres_content_gap_v2_annotated.csv` |
| Link gaps | ✅ Complete | §4 + full sheet `arms_acres_link_gap_annotated.csv` |

**Owner (Aleksandar) → ✅ In Report (move from Pending) → Result/Notes column should reference:** *"Carmel Map Pack is a 2-operator market (AA + CoveCare). Defensive position strong. Real competitive pressure is on Bronx/Queens/NYC organic queries — see §2 + Strategy Items 2/3/4 for the offensive plan."*
