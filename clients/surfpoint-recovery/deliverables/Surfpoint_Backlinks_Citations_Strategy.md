# Surfpoint Recovery — Off-Page Strategy

**Backlink Portfolio Audit, Competitor Gap Analysis & Execution Plan**

Prepared by HQDM Search Intelligence · 2026-05-12

---

## Executive summary

Surfpoint Recovery's link profile contains **386 referring domains**. A spam audit run against the full dataset shows **~47% of those domains are toxic** — dominated by three identifiable link-blast networks (`bhs-links-*`, `seo-anomaly-*`, `seo-cartel-*`) plus assorted PBN debris. A disavow file covering **183 domains** has been generated and is ready for Search Console submission.

In parallel, we ran a competitor link-gap analysis against three direct service competitors (ascendantny.com, acirehab.com, genesisdob.com) using DataForSEO. The 385 gap domains they collectively link from were merged with the team's existing 116-row directory template and the 237-row Whitespark citation report, deduplicated, cross-referenced against Surfpoint's existing link profile, and scored.

The output is a single Excel workbook — **Surfpoint_All_Link_Citation_Opps.xlsx** — containing 697 unique target domains, 684 of them open opportunities, sorted by composite priority. The team executes off this one sheet; no separate research queues, no parallel trackers.

This document explains the data, the method, the deliverable, and the execution model in that order.

---

## 1. Current state of the backlink portfolio

### 1.1 Source data

Backlink data was pulled from **DataForSEO's Backlinks API** on 2026-05-08, queried at the root domain level. The full referring-domains dataset is stored at:

```
clients/surfpointrecovery/exports/dataforseo/backlinks/surfpoint/referring_domains.csv
```

386 unique root domains link to surfpointrecovery.com. DataForSEO returns rank (0–1000), backlink count, nofollow share, and a spam score (0–100, higher = more toxic) per domain.

### 1.2 Spam distribution

| Spam-score band | Count | Share |
|---|---:|---:|
| ≥ 70 (clearly toxic) | 19 | 4.9% |
| 40 – 69 (suspect) | 186 | 48.2% |
| < 40 (clean-ish) | 181 | 46.9% |

Roughly half the profile sits in the 40-69 band — large enough that a blanket disavow at spam ≥ 40 would be aggressive and self-harming, so the methodology in §1.4 layers in a second signal (pattern matching) before flagging.

### 1.3 Identified link networks

Manual inspection of the spam-heavy tail surfaced four distinct programmatic patterns:

- **`bhs-links-*.xyz`** — 5 subdomains (`bhs-links-rt.xyz`, `-bg`, `-yt`, `-fr`, `-gb`). All-nofollow, spam ≥ 81, rank 0. Classic link-blast footprint pointing 100+ links at the homepage.
- **`seo-anomaly-*`** — 106 domains across `.xyz / .online / .site / .space / .website`. Names are SEO terminology (anchor, canonical, dofollow, sitemap, snippet, etc.). Spam 60–94. Appears to be an automated negative-SEO crawler footprint or PBN scaffolding.
- **`seo-cartel-N.online`** — 40 numerically-suffixed domains. Spam 55. Same all-nofollow profile.
- **`australianwebdirectory.{pro,shop,info}`** — small PBN ring across three TLDs. Spam 65–70.

A handful of one-off high-spam domains (`belonnanotservice.ga`, `what-happens-next.xyz`, `violationfunding.com`, `thebestbacklinksavailable.click`) round out the toxic set.

### 1.4 Classification logic (used to build the disavow file)

A domain is flagged **AUTO-disavow** if any of the following is true:

1. Spam score ≥ 70.
2. Domain name matches a known spam pattern (regex: `^bhs-links-`, `^seo-anomaly-`, `^australianwebdirectory`, `-pbn[-.]`, `bestbacklinks`, `expireddomain`, `^getwebsiteworth\.`).
3. Domain uses a hard-spam TLD (`.xyz / .ga / .tk / .ml / .cf / .gq / .party / .click / .work / .loan / .bid / .stream / .trade`) **and** spam score ≥ 40.
4. Domain uses a soft-spam TLD (`.online / .site / .space / .website / .store / .shop / .info / .biz / .fyi / .buzz / .club`) **and** spam score ≥ 50.
5. 100% of links are nofollow **and** spam score ≥ 50 **and** domain rank = 0 (typical PBN/crawler footprint).

A **safety allowlist** prevents disavow of mainstream/authoritative domains (bbb.org, google.com, facebook.com, yelp.com, linkedin.com, yahoo.com, healthline.com, webmd.com, gov/edu domains, etc.) regardless of the score DataForSEO returns.

Domains that score in the 50–69 band but don't match any pattern are routed to a **manual review file** rather than the disavow.

### 1.5 Output

| File | Purpose | Count |
|---|---|---:|
| `Surfpoint_Disavow.txt` | Ready to upload to GSC | 183 |
| `Surfpoint_Disavow_Review.txt` | Borderline — judge before adding | 42 |
| `Surfpoint_Disavow_Decisions.csv` | Per-domain audit trail (all 386) | 386 |

Upload via Search Console → Disavow links tool, select `surfpointrecovery.com`, submit the `.txt` as-is (comments are ignored by Google's parser). Allow 2–4 weeks for processing before re-evaluating any ranking signal.

---

## 2. Competitor gap analysis

### 2.1 Competitor selection

Three competitors were used as the gap-analysis comparison set:

- **ascendantny.com** — direct NYC inpatient/outpatient service competitor.
- **acirehab.com** — direct service competitor, similar treatment mix.
- **genesisdob.com** — direct service competitor, overlapping SERP footprint.

These three were selected after stripping the candidate list of (a) informational / UGC / social / app sites that share keywords but don't share buyers (per our standard competitor definition), (b) HQDM-managed client domains that would create internal cross-contamination (urbanrecovery, niagararecovery, armsacres, coniferpark are excluded by default), and (c) national chains whose backlink profile reflects PR/brand spend that's not replicable at Surfpoint's scale.

### 2.2 Method

For each competitor, the full referring-domain set was pulled via DataForSEO Backlinks API and stored at `exports/dataforseo/backlinks/<competitor>/referring_domains.csv`. The Surfpoint set was then subtracted from the union of all three competitor sets, producing the **gap set**: domains where at least one competitor has a link and Surfpoint does not.

Each gap domain was classified as **citation** or **backlink** based on referring-page patterns (directory-listing structures vs editorial/blog mentions), and assigned a composite priority score:

```
priority = competitors_with_link × 3
         + (1 / log(rank + 2)) × DA_weight
         − spam_score / 20
         + recency_bonus_if_first_seen_within_12_months
```

The formula favors domains that **multiple** competitors have managed to land (signal of accessibility + relevance), de-weights spammy targets, and slightly rewards recency (a competitor landing a link in 2026 is more interesting than one from 2021).

### 2.3 Output

385 gap domains were identified:

- 352 backlinks (editorial/profile links)
- 33 citations (directory-style listings)

Stored at `clients/surfpointrecovery/deliverable/surfpoint_link_gap.csv` with a raw-with-lowquality variant at `surfpoint_link_gap_raw_with_lowquality.csv` for transparency.

The top 10 priorities from competitor gap alone:

| Domain | Type | Competitors | Priority |
|---|---|:---:|---:|
| rehab.com | citation | 3 | 14.5 |
| biohackhive.com | backlink | 3 | 10.7 |
| sobasearch.com | citation | 2 | 10.4 |
| addictionresource.com | citation | 2 | 8.2 |
| addictionhelplineamerica.com | backlink | 2 | 8.0 |
| rehabspot.com | citation | 2 | 8.0 |
| betteraddictioncare.com | citation | 2 | 8.0 |
| quest2recovery.com | citation | 2 | 8.0 |
| hoursfinder.com | citation | 2 | 8.0 |
| prohealthfirst.com | backlink | 2 | 7.7 |

---

## 3. Merging with the team's existing work

The competitor gap is only one of three input sources. Two more were folded in to avoid losing institutional knowledge and to give the off-page team a single working surface.

### 3.1 Team Worksheet — "list of sites" tab

The HQDM team has been working off `Worksheet | HQDM for Surfpoint Recovery.xlsx`, which contains a curated 124-row directory list with columns for Type (Directories / Profile / Map / Database / CMS / Blogging Sites / Reviews), DA, internal Priority (1–3), can-blog flag, and an "Existing?" status field.

116 of those 124 rows carry a non-null directory name and were merged into the consolidated sheet. Type and DA from the team list are preserved as separate columns so the team can still filter by their original categorization.

### 3.2 Whitespark Report

The Whitespark Report tab from the same worksheet provided 237 manually-researched citation opportunities (rehab-vertical local citation sources, ranked by DA). These were folded in as a third source.

### 3.3 Dedup logic

Domains were normalized to **root level** (last 2 labels for standard TLDs, last 3 for `.co.uk`, `.com.au`, `.com.ar` and similar) before deduplication. `business.google.com` and `mapsconnect.apple.com` from the team list dedup against `google.com` and `apple.com` from competitor gap automatically. 697 unique root domains remain after merging.

### 3.4 Cross-reference against existing profile

Each merged domain was checked against Surfpoint's own 386 referring domains. **13 domains** in the opportunity list are already linking (e.g. zoominfo.com, batchgeo.com, blogspot.com, acirehab.org). These remain in the sheet but are flagged `Already Linking? = Yes` and pushed to the bottom of the priority sort, so the team can see at a glance which "opportunities" don't need new outreach.

### 3.5 Result

| Source | Domains | After dedup | Open opportunities |
|---|---:|---:|---:|
| Competitor gap | 385 | — | — |
| Worksheet "list of sites" | 116 | — | — |
| Whitespark Report | 237 | — | — |
| **Merged unique** | — | **697** | **684** |

---

## 4. The deliverable — `Surfpoint_All_Link_Citation_Opps.xlsx`

The workbook is the single execution surface for the off-page team.

### 4.1 Sheets

| Sheet | Purpose |
|---|---|
| **Summary** | Counts by source and by type. Sanity-check the deliverable in 10 seconds. |
| **Opportunities** | The work queue. 697 rows × 23 columns. Sort/filter-driven. |
| **NAP** | Surfpoint's canonical Name/Address/Phone block + keywords. Used by team for citation submissions. |
| **Existing (Have Link)** | The 382 root domains we already have. Reference only — don't pursue these. |

### 4.2 Opportunities sheet — column structure

| Column | What it does |
|---|---|
| Domain | Normalized root (lowercased, no www., no path). |
| Type | `citation` / `backlink` / blank. Drives team-track assignment. |
| Already Linking? | `Yes` rows are grey-filled and sorted to the bottom. |
| Composite Priority | The score used for default ranking. |
| Competitor Gap Score | The raw score from the gap analysis. |
| Competitors With Link / Competitor List | Which competitors landed this domain. |
| Worksheet Type / DA / Worksheet Priority / Can Blog? | Preserved from team's "list of sites". |
| In Worksheet Template / Whitespark Opp / Competitor Gap Source | Yes/blank flags showing which source(s) each domain came from. |
| First Seen (Competitor) / Spam Score | Recency and toxicity context. |
| Sources | Comma-joined list of every source that flagged the domain. |
| **Status** | Empty. Team fills: `open` / `in progress` / `submitted` / `live` / `blocked` / `skip`. |
| **Submission URL / Username / Email / Password / Notes** | Empty. Team fills as they go. |

The five Status-onward columns are deliberately blank so this becomes the team's working record, not a research artifact that gets shelved.

### 4.3 How the priority is computed

```
composite = competitor_gap_score
          + (10 − worksheet_priority) × 0.5     if listed in worksheet
          + 1.0                                  if Whitespark opp
          + 0.5                                  if in worksheet template
          + DA / 20                              if DA available
          − 5.0                                  if already linking
```

The "already linking" penalty pushes existing links to the bottom of the sort without removing them from the audit.

---

## 5. Execution model

### 5.1 Operating rules

1. **One sheet, one source of truth.** All off-page work — competitor gap, team's legacy directory list, Whitespark opportunities — lives in `Surfpoint_All_Link_Citation_Opps.xlsx`. No parallel spreadsheets, no Slack/email queues.
2. **Sort by Composite Priority descending.** Work top-down.
3. **Two parallel tracks.** Filter by `Type = citation` for the citation specialist; `Type = backlink` for the backlink/outreach specialist. They never collide.
4. **Status hygiene.** Every domain the team touches gets a Status. A blank Status means "nobody has looked at it yet." This is what makes the sheet self-documenting — at any point we can answer "what's left?" in one filter click.
5. **Don't re-pursue greyed rows.** The 13 `Already Linking? = Yes` rows are the system already working. Skip them.

### 5.2 Cadence

- **Weekly:** team reviews `Status = in progress` rows and updates to `submitted` / `live` / `blocked`. Roughly 30 min standup-paced.
- **Monthly:** export the Status column and report `live` count by month — this is the headline off-page metric for Surfpoint.
- **Quarterly:** re-pull `referring_domains.csv` for Surfpoint + the three competitors, re-run `_build_all_link_citation_opps.py`, and refresh the Opportunities sheet. New competitor wins surface as new rows; existing rows we've landed get auto-flagged `Already Linking? = Yes`.

### 5.3 Tooling

The Excel workbook is generated by `_build_all_link_citation_opps.py` (in the deliverable folder). Inputs are the three source files; output overwrites the workbook in place. Regenerating takes ~3 seconds.

The disavow file is generated by `_build_disavow.py` from the same `referring_domains.csv`. Re-run after each quarterly DataForSEO refresh to catch new spam injections.

---

## 6. Risk & sequencing

### 6.1 Why disavow first, opportunities second

Disavow processing takes Google 2–4 weeks. Submitting it now means the toxic-link drag begins clearing while the team is still in the early ramp of new acquisition. By the time the first batch of high-priority citations (rehab.com, bbb.org, mapquest.com, crunchbase.com, addictionresource.com) is live, the spammy profile should be discounted.

### 6.2 What we are deliberately not chasing

- **Mainstream social/profile sites** (linktr.ee, youtube.com, github.com etc. from the team template) carry low composite priority because they're nofollow and don't move local rankings — they're brand hygiene, not link equity. Worth doing once, not worth prioritizing.
- **The `seo-anomaly-*` and `seo-cartel-*` clusters that the disavow targets.** These appear in some competitor profiles too. They are not real link opportunities to mimic — they are SEO-tool/scanner footprints that DataForSEO and Ahrefs misclassify as backlinks. We disavow them; we don't acquire them.
- **Foreign-language link farms** (`.com.br`, `.com.ar`, `.vn`, `.fr` domains with no English content) that show up in competitor profiles. These are likely artifacts of the competitor having been linked from scraper/aggregator sites overseas. Low cost to ignore, real cost to acquire.

### 6.3 Success signals (90 days out)

1. Clean referring-domain count (excluding disavowed) trending up.
2. Status column shows ≥ 50 rows in `submitted` or `live` state.
3. Toxic-domain re-injection rate (new spam domains appearing in the next quarterly pull) is being captured by the disavow rerun, not accumulating untouched.
4. Top 25 priority targets from competitor gap are all attempted at minimum, with `live` / `blocked` / `skip` decisions documented per row.

---

## 7. Files & references

All paths under `clients/surfpointrecovery/`:

| File | Description |
|---|---|
| `deliverable/Surfpoint_All_Link_Citation_Opps.xlsx` | The execution sheet. |
| `deliverable/Surfpoint_Disavow.txt` | Ready to submit to GSC. |
| `deliverable/Surfpoint_Disavow_Review.txt` | 42 borderline domains to judge manually. |
| `deliverable/Surfpoint_Disavow_Decisions.csv` | Full audit trail for all 386 referring domains. |
| `deliverable/surfpoint_link_gap.csv` | Raw competitor gap output. |
| `deliverable/_build_all_link_citation_opps.py` | Opportunities sheet generator. |
| `deliverable/_build_disavow.py` | Disavow file generator. |
| `exports/dataforseo/backlinks/surfpoint/referring_domains.csv` | Source backlink data. |
| `exports/dataforseo/backlinks/{ascendantny,acirehab,genesisdob}/` | Competitor backlink data. |

Drive mirror: `ZZ [Aleksandar] Working Folder > Surfpoint Recovery`.

---

*Prepared by HQDM Search Intelligence — 2026-05-12. Refresh recommended quarterly.*
