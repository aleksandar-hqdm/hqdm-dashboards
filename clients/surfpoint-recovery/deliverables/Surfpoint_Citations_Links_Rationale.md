# Surfpoint Recovery — Citations & Links

**Why this work, what it is, and the examples that make it concrete**

Prepared by HQDM Search Intelligence · 2026-05-12 · Aleksandar Spasevski

---

## The starting state — half the link profile is working against us

Surfpoint's referring-domain profile contains **386 root domains**. A spam audit run against the full set shows roughly **47% of those domains are toxic** — dominated by three identifiable link-blast networks plus assorted PBN debris. The composite spam score on the profile is **43**; for context, national-brand references (americanaddictioncenters.org at 16, therecoveryvillage.com at 24) sit roughly half that. Spam score 43 is the load-bearing signal — large enough to function as a **drag on every link earned**, regardless of how clean the new link is.

Three programmatic patterns account for most of the toxic tail:

| Pattern | Domains | Footprint |
|---|---|---|
| `bhs-links-*.xyz` (5 subdomains) | 5 | All-nofollow, spam ≥ 81, rank 0 — classic link-blast |
| `seo-anomaly-*` (.xyz / .online / .site / .space / .website) | 106 | SEO-terminology domain names (anchor, canonical, dofollow, sitemap...) — automated crawler/PBN scaffolding |
| `seo-cartel-N.online` (numerically suffixed) | 40 | Same all-nofollow profile, spam 55 |

Plus a small Australian-PBN ring (`australianwebdirectory.{pro,shop,info}`) and a handful of one-off high-spam domains. The patterns are unambiguous enough that they show up as automatable regex matches, which is what makes the disavow file defensible at scale.

Surfpoint and Urban Recovery have **near-identical backlink profiles**, which is consistent with both having run the same PR-placement playbook. Both need ongoing disavow hygiene as the playbook's residue keeps surfacing.

## Why disavow comes before opportunity, not after

Disavow processing inside Google Search Console takes 2–4 weeks. If the team starts acquiring new high-quality citations and backlinks before the disavow lands, the new equity arrives into a profile Google is still discounting at spam-43 levels. **Submitting the disavow file first** means the toxic-link drag begins clearing while new acquisition ramps. By the time the first batch of high-priority citations (rehab.com, BBB, Apple Maps, Bing Places, Healthgrades, Psychology Today, SAMHSA Treatment Locator, NYS OASAS Find a Provider) is live, the discount should be lifting.

The disavow is also a **maintenance cycle, not a one-time event.** The spam-domain re-injection rate — new toxic domains appearing in each quarterly DataForSEO pull — is captured by re-running the disavow generator, not by accumulating untouched.

## How the 183 number is defensible

A blanket disavow at spam ≥ 40 would flag 205 domains and would be aggressive and self-harming, because the 40–69 band contains real (if mid-tier) domains alongside PBN scaffolding. The classification layers a second signal in. A domain routes to AUTO-disavow if it satisfies any of:

1. **Spam score ≥ 70** — clearly toxic regardless of context
2. **Domain-name pattern match** — regex on the three identified networks (`bhs-links-`, `seo-anomaly-`, `australianwebdirectory`) plus `-pbn`, `bestbacklinks`, `expireddomain`
3. **Hard-spam TLD** (`.xyz / .ga / .tk / .ml / .cf / .gq / .party / .click / .work / .loan / .bid / .stream / .trade`) AND spam ≥ 40
4. **Soft-spam TLD** (`.online / .site / .space / .website / .store / .shop / .info / .biz / .fyi / .buzz / .club`) AND spam ≥ 50
5. **100%-nofollow profile** AND spam ≥ 50 AND domain rank = 0 — the typical PBN/crawler footprint

A **safety allowlist** prevents disavow of bbb.org, google.com, facebook.com, yelp.com, linkedin.com, yahoo.com, healthline.com, webmd.com, government and education domains, regardless of what DataForSEO returns. This is the guard against an automated false-positive removing a real citation.

Domains in the 50–69 band that don't match any pattern route to a **42-row manual review file** — judged before flagging, not autopsied after. The output is 183 domains in the disavow file (ready for GSC submission), 42 in the borderline-review file, and a 386-row per-domain audit trail. If any domain's status is contested, the decision per row is visible and reproducible.

## The competitor gap — why three competitors, not ten

For the acquisition side, three competitors were used as the gap-analysis comparison set: **ascendantny.com, acirehab.com, and genesisdob.com.** Each is a direct NYC service provider with overlapping SERP footprint. The shortlist was produced after stripping the candidate set of three classes of contamination:

- **Informational / UGC / social / app sites** that share keywords but don't share buyers (filtered per the standard competitor definition — Surfpoint's actual competitors are other service providers, not WebMD or Reddit threads)
- **HQDM-managed client domains** (urbanrecovery, niagararecovery, armsacres, coniferpark) which would create internal cross-contamination — comparing two HQDM accounts as competitors makes no sense
- **National chains** (AAC, Recovery Village) whose backlink profile reflects PR/brand spend that is not replicable at Surfpoint's scale

Three competitors is the right size because the **multi-competitor signal** — domains where two or more direct competitors have landed a link — is what filters accessible-AND-relevant from accessible-but-narrow. A domain only one competitor has might be a relationship quirk; a domain two or three have is a documented success pattern Surfpoint can pursue with reasonable expectation of landing.

The gap analysis produced **385 gap domains**: 352 editorial / profile backlinks and 33 directory-style citations. Composite priority weights multi-competitor signal heaviest, then domain authority, then de-weights by spam score, and adds a small recency bonus. Top of the priority sort includes vertical-relevant targets like **rehab.com, biohackhive.com, sobasearch.com, addictionresource.com, addictionhelplineamerica.com, rehabspot.com, betteraddictioncare.com, hoursfinder.com.** Each is a target the team can pursue with documented success patterns from at least two competitors.

## One work surface, not three

The competitor gap is one of three input sources. The HQDM team has been working off a curated **124-row directory list** (the worksheet "list of sites") and a **237-row Whitespark citation report**. Both are folded into a single Excel workbook (`Surfpoint_All_Link_Citation_Opps.xlsx`) — **697 unique root domains** after dedup, 684 of them open opportunities.

Two operational mechanics make this work:

- **Root-level dedup.** `business.google.com` from the team list resolves against `google.com` from the competitor gap; `mapsconnect.apple.com` resolves against `apple.com`. The same domain doesn't appear three times under three slightly different forms.
- **Cross-reference against existing profile.** Each merged domain is checked against Surfpoint's 386 referring domains; **13 domains are already linking** (zoominfo.com, batchgeo.com, blogspot.com, acirehab.org and others). These are flagged `Already Linking? = Yes` and sorted to the bottom — kept visible for audit purposes but pushed out of the work queue. The team sees at a glance which "opportunities" are already the system working.

Why this matters: off-page work fragments across spreadsheets fast. A team holding research outputs in one queue, manual additions in another, and competitor gap in a third quickly stops trusting any of them. The consolidated workbook is the **single source of truth.** The team filters by `Type = citation` for the citation specialist and `Type = backlink` for the outreach specialist; the two tracks never collide. Status hygiene (open / in progress / submitted / live / blocked / skip) makes the sheet self-documenting — at any point the question "what's left?" is one filter click.

## Proof — the drag, the cleanup, and the size of the opportunity

**Surfpoint's link profile in context** (DataForSEO Backlinks, 2026-05-08):

| Domain | Backlinks | Ref domains | Spam score | Read |
|---|---:|---:|---:|---|
| **surfpointrecovery.com** | 942 | 386 | **43** | The drag we are responding to |
| urbanrecovery.com *(HQDM peer)* | 1,642 | 642 | 42 | Same PR playbook → near-identical profile |
| therecoveryvillage.com *(national benchmark)* | 160,370 | 12,570 | 24 | What clean looks like at scale |
| americanaddictioncenters.org *(national benchmark)* | 102,543 | 18,283 | **16** | Best-in-vertical reference |

Surfpoint sits at **~2× the spam score** of national benchmarks. Urban Recovery's near-identical profile (42 vs 43) confirms the shared-PR-playbook hypothesis — same residue, same disavow need.

**What the 183-domain disavow removes from the link-equity denominator:**

| Bucket | Domains | Share of total profile |
|---|---:|---:|
| **AUTO-disavow** *(matched one of 5 classification rules)* | **183** | **47%** |
| Borderline manual review *(spam 50–69, no pattern match)* | 42 | 11% |
| Retained *(safety allowlist + low-spam + real domains)* | 161 | 42% |
| **Total referring domains** | **386** | 100% |

Three of the AUTO-disavow networks are programmatic and unambiguous: 5 `bhs-links-*.xyz` subdomains, 106 `seo-anomaly-*` domains across five TLDs, 40 `seo-cartel-N.online` domains. After processing, Google evaluates Surfpoint's link equity against **~161 clean domains** (plus whatever survives the 42-row manual review) instead of 386 mixed domains. The denominator on the link side moves the same way the on-page cleanup moves the URL denominator.

**The competitor gap and the merged-workbook math:**

| Source | Inputs | After root-level dedup |
|---|---:|---|
| Competitor gap *(3 direct competitors)* | 385 *(352 backlinks + 33 citations)* | — |
| HQDM worksheet "list of sites" | 116 | — |
| Whitespark Report | 237 | — |
| **Sum** | **738** | — |
| **Unique root domains in merged workbook** | — | **697** |
| **Open opportunities** *(excluding 13 already-linking)* | — | **684** |

**41 redundant domains** were caught by root-level normalization (`business.google.com` → `google.com`, `mapsconnect.apple.com` → `apple.com`, etc.) — without dedup the off-page team would have worked through ~6% noise across three queues that don't talk to each other. The 13 domains the merge flagged as already linking (zoominfo, batchgeo, blogspot, acirehab.org and others) are greyed out at the bottom of the work queue — the system showing the team which "opportunities" are already the system working.

**The combined denominator change Google will see** (this pillar + the architecture/crawl-budget pillars, after Q2):

| Side | Before | After M1 deploys + disavow processed |
|---|---|---|
| On-page (URL denominator) | 878 URLs, ~24% waste | ~665 URLs, focused topical surface |
| Off-page (link-equity denominator) | 386 ref domains, 47% toxic | ~161 clean ref domains + new acquisition ramping |
| What Google evaluates | Mixed waste site + 47%-toxic profile | Focused site + clean profile |

The disavow is the upstream change that makes every new citation and backlink earn its full value. The competitor gap workbook is the downstream pipeline that fills the clean denominator with vertical-relevant equity.

## What this work explicitly is not

- It is **not pursuing mainstream social / profile sites** (linktr.ee, youtube.com, github.com) as a priority. They are nofollow, they don't move local rankings, and they are brand hygiene — worth doing once, not worth prioritizing.
- It is **not acquiring the `seo-anomaly-*` and `seo-cartel-*` patterns** even though they show up in some competitor profiles. Those are SEO-tool footprints that DataForSEO and Ahrefs misclassify as backlinks. We disavow them; we don't mimic them.
- It is **not pursuing foreign-language link farms** (`.com.br`, `.com.ar`, `.vn`, `.fr` domains with no English content) that show up in competitor profiles. These are likely artifacts of the competitor having been linked from scraper/aggregator sites overseas. Low cost to ignore, real cost to acquire.
- It is **not resuming the PR-placement playbook** that produced the original spam-43 profile. New PR placements pause until the disavow has cleared and the acquisition pattern shifts to vertical-specific topical sources (Brooklyn/NYC health publications, NA/AA NYC, NAMI Brooklyn/NYC, real editorial bylines).
- It is **not foundational citations as a one-time push.** Citations need consistent NAP across every directory — which is why the GBP address-line cleanup (the "Entrance on West 24th Street" qualifier embedded in line 1) ships **before** the foundational citation Phase 1 push. Submitting Yelp, Foursquare, BBB, Apple Maps, Bing Places, Healthgrades against an inconsistent NAP creates citation debt that's expensive to clean up later.

## How this pillar closes the loop with the others

The citation work is what connects the GBP claims to the schema assertions to the on-site geo signals. **Foundational citations** (Psychology Today, SAMHSA Treatment Locator, NYS OASAS Find a Provider, BBB, Apple Maps, Bing Places, Foursquare, Healthgrades, Yelp) reinforce the same NAP signal the GBP carries and the website `MedicalBusiness` schema asserts — they triangulate. **Competitor-gap backlinks** build the topical-authority signal that lets the rewritten service pages rank for queries the homepage currently catches indirectly. **The disavow** is what makes all of that new equity arrive into a clean profile rather than a discounted one.

The sequence is: disavow submit → foundational citation Phase 1 → topical-local Phase 2 → earned mentions. Each stage's work is more productive because the previous one landed first.

---

*Supporting per-domain classification, the full opportunity workbook, and the disavow audit trail in `Surfpoint_Backlinks_Citations_Strategy.md`, `Surfpoint_All_Link_Citation_Opps.xlsx`, `Surfpoint_Disavow.txt`, and `Surfpoint_Disavow_Decisions.csv`.*
