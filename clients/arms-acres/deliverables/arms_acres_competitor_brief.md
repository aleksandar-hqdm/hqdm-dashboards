# Arms Acres — Competitor Analysis Brief (Q2 2026 Strategy Item 1)

**Owner:** Aleksandar Spasevski · **Date:** 2026-05-11 · **Phase:** Q2 2026 Phase 1
**Companion sheets:**
- **Content gap (v2 — current):** `arms_acres_content_gap_v2.csv` + `arms_acres_content_gap_v2_summary.md`
- **Link gap:** `arms_acres_link_gap.csv`

> **v2 changes** (2026-05-11 revision):
> - Bronx Recovery dropped from competitor set (Maps-only, 0 organic data) and replaced with **Ascendant NY** (Manhattan, 17 organic SERP appearances).
> - Semantic clustering applied — variants like "detox ny / detox nyc / detox new york city" now collapse into one cluster.
> - Each cluster mapped to an AA sitemap URL → NEW_PAGE / IMPROVE_PAGE / NEW_BLOG / IMPROVE_BLOG action.
> - Sections 1, 2, 3 below reflect v2; sections 4–9 (link gap, plays, assignments) unchanged.

---

## 1. Competitor landscape (real service providers, NY focus)

**v2 set — organic-ranking real service providers:**

| # | Competitor | Domain | Market | Why on shortlist |
|---|---|---|---|---|
| 1 | **CoveCare Center** | covecarecenter.org | Carmel | Only direct addiction-treatment competitor in Carmel Map Pack |
| 2 | **Samaritan Daytop Village** | samaritanvillage.org | Bronx + statewide NY | Multi-site NY chain |
| 3 | **Helio Health** | helio.health | NY organic | Regional SUD chain (Syracuse-based), ranks organic on Carmel queries |
| 4 | **Cornerstone of Medical Arts** | cornerstoneny.com | Bronx + NYC | High-review (203) Bronx competitor, dual maps + organic visibility |
| 5 | **Ascendant NY** | ascendantny.com | Manhattan | **Strongest organic competitor** — 17 SERP appearances avg rank 15.9 on AA's target queries |

**Used only for Link Gap (not Content Gap):** Bronx Recovery (`bronxrecovery.org`) — Maps-only player, 9 backlinks total, zero organic top-30. Still relevant for citation strategy in Strategy Item 2 (GMB).

**⚠️ Queens market gap:** No DataForSEO Maps SERP pulled for the Queens outpatient location. Competitor set for Queens is unknown. **Recommend pulling before Phase 2.**

**⚠️ Conifer Park (coniferpark.com)** appeared in organic competitors but was excluded — other HQDM client.

---

## 2. Headline read of the landscape

**The defensive picture:**
- **Carmel Map Pack is essentially uncontested.** Arms Acres holds avg rank 1.1 across 10 query appearances. CoveCare is the only other real player (avg 2.4). No M1 defensive emergency here.
- **Bronx is contested.** Bronx Recovery beats AA in the Bronx Map Pack (avg 1.3 vs AA's local listing), has higher GMB rating (4.6 vs AA Bronx OP). Samaritan + Cornerstone also active.
- **Bronx Recovery is Maps-only.** They have 9 backlinks total and zero organic top-30 rankings. Their advantage is entirely in the Map Pack, which makes them a **GMB-only competitor — beat them with citations and reviews, not content**.

**The offensive picture:**
- Arms Acres has 17,209 backlinks from 426 referring main domains — **2.5× any competitor's domain profile**. AA's link gap is NOT about volume; it's about specific high-trust citations competitors have that AA doesn't.
- AA ranks for 1,000+ organic keywords; CoveCare ranks for 122 and Cornerstone for 139. **AA out-publishes its Carmel-area peers 8:1.** The gaps are not generalist — they are specific **topical clusters** and **geographic permutations** (NY/NYC level vs Carmel level).

---

## 3. Top content gaps (v2 — properly clustered + sitemap-mapped)

> Full detail in `arms_acres_content_gap_v2_summary.md` + `arms_acres_content_gap_v2.csv`.
> Counts: 573 NEW_PAGE clusters, 14 IMPROVE_PAGE, 1,020 NEW_BLOG, 0 IMPROVE_BLOG (after tight matching).

### Top NEW_PAGE candidates (multi-competitor consensus)

| Cluster | Variants | Vol | Competitors | Q2 action |
|---|---|---|---|---|
| `center|detox|newyork` | "detox center in nyc", "detox centers in new york", "detox centers in nyc" | 260 | 3 (CoveCare + Samaritan + Helio) | Build `/detox-new-york` — NY-state-level positioning page; AA's existing detox-program is Carmel-only |
| `alcohol|*|newyork|treatment` (3 cluster variants — same page intent) | "alcohol treatment new york city", "alcoholism treatment new york", "new york alcohol treatment centers", "alcohol rehab centers in new york", "alcohol rehab centers in ny" | 880 (single query) | 2-3 | **Build one consolidated page**: `/alcohol-rehab-new-york` covering all variants |
| `newyork|outpatient|rehab` | "outpatient rehab in nyc", "outpatient rehab new york" | 390 | 2 (Helio + Samaritan) | Build NYC-OP hub page or strengthen existing OP location pages with NYC-level meta |
| `mica|newyork` | "mica program nyc", "mica programs in nyc" | 30 | 2 | **Strong opportunity** — MICA = Mentally Ill Chemical Abusers, clinical term AA serves but doesn't use. Build dedicated dual-diagnosis page using this term. |
| `mat|meridian|otp|treatment` | "meridian medication assisted treatment otp" | 40 | 2 | Verify AA's OTP license — if licensed, build MAT/OTP landing page |
| `facility|health|mental|newyork|residential` | "residential mental health facilities new york" | 90 | 2 | Build only if AA offers residential MH (verify with clinical) |

### Top IMPROVE_PAGE candidates (AA has the URL but isn't winning)

| AA URL | Cluster | Improvement focus |
|---|---|---|
| `armsacres.com/` (homepage) | `alcohol|center|newyork|rehab` (880 vol, 3 comps) | Add NY-state alcohol-rehab hero section + internal link to adult-rehabilitation |
| `/inpatient/detox-program` | `detox|inpatient|newyork`, `center|detox` (multiple) | Add NY-state positioning, "near me" semantic markup, insurance-by-name |
| `/inpatient/adult-rehabilitation` | 8 clusters incl. `inpatient|rehab`, `inpatient|opioid|rehab`, `inpatient|medicaid|rehab`, `brooklyn|inpatient|rehab` | **Highest-leverage page improvement.** Add: insurance-by-name, Medicaid acceptance, condition sub-sections (opioid/alcohol), Brooklyn service-area mention |
| `/outpatient/queens-outpatient` | `newyork|outpatient|queens|rehab` | Audit per Strategy Item 3 — likely thin content, missing schema |
| `/service/psychiatric-services-in-carmel-hamlet-ny` | `72|hold|hour|newyork|psychiatric`, `5150|hold|newyork|psychiatric` | Add involuntary-hold + crisis intake content |

### CASAC workforce cluster — explicit Skip recommendation

The largest blog cluster by competitor consensus is **CASAC training** (Credentialed Alcoholism and Substance Abuse Counselor — NY-licensed counselor credential) — `casac`, `casac training`, `casac verification`, etc. Combined ~3,500/mo across 10+ sub-clusters, both Helio Health and Samaritan Daytop Village rank for it.

**This is NOT a content gap for Arms Acres** — it's a workforce recruitment play. Helio/Samaritan both have CASAC training programs as business lines. Arms Acres is a clinical treatment facility, not a counselor school. **Skip unless AA launches a training program.**

### Blog content posture

Per Ace's feedback memory (blog audit by topical relevance, not pure volume):
- The only multi-competitor blog clusters are CASAC/CRPA workforce content → skip per above.
- AA already over-publishes blog content (91% of GSC impressions, 0.025% non-brand CR per baseline finding).
- **Q2 recommendation: zero new blog posts**. Blog work in Q2 should be **pruning + improving existing** via Strategy Item 3, not adding new.
- Exception: support articles that directly internally-link to a Tier 1-3 landing page being built (e.g., "What is PROS?" supporting a PROS service page if AA offers PROS).

---

## 4. Top 5 link gaps (consolidated, by acquisition difficulty)

> Full list of **514 missing root domains** in `arms_acres_link_gap.csv` (deduped, citation/backlink flagged, quality-filtered). Top 5 below are filtered for: high authority + multi-competitor consensus + actionable.

| # | Domain | Type | Competitors with link | DA rank | Acquisition path | Priority |
|---|---|---|---|---|---|---|
| **1** | **carf.org** | citation | Samaritan + Helio + Cornerstone | 42 | Verify if AA is CARF-accredited; if yes, claim/update listing. If not, **flag to compliance — CARF accreditation is the single highest-trust signal in addiction treatment and AA is missing it.** | Critical |
| **2** | **startyourrecovery.org** | citation | Samaritan + Helio + Cornerstone | 91 | Government-affiliated (Shatterproof) provider listing. Apply at startyourrecovery.org/providers. Trust-tier #2 after CARF. | Critical |
| **3** | **alcoholism.org** | citation | Bronx Recovery + Samaritan + Helio | 79 | Recovery-vertical directory. Submit facility listing. | High |
| **4** | **charitynavigator.org** | citation/backlink | CoveCare + Samaritan + Helio | 0 (low DA but high trust vertical) | Only available if AA operates as 501(c)(3). Verify legal structure — Arms Acres is operated by Liberation Programs Inc. Confirm with compliance. | Medium |
| **5** | **behavioralhealthnews.org** | backlink | CoveCare + Samaritan | 65 | Industry trade publication. Editorial outreach: pitch a contributed article (clinician byline) on Hudson Valley SUD trends. | Medium |

### Honorable mentions (lower priority but explicit wins)

- **best-rehabs.com** (rank 102, citation) — 3 competitors listed
- **freerehabcenters.org** (rank 46, free directory) — 3 competitors listed
- **sobasearch.com** (rank 72) — 2 competitors
- **choosehelp.com** (rank 2 but exceptionally high authority site) — 3 competitors
- **psychologytoday.com** (already known target — every clinical service provider should be here; verify AA has all facility + clinician profiles)

### What's NOT a link gap

- **17,209 total backlinks across 426 referring main domains is healthy** — AA out-ranks every competitor on link volume. The strategic frame for Julce is **quality, not quantity** — close specific trust-tier citation gaps + earn 4–6 editorial placements per quarter, not run a generic outreach blast.
- **Spam score 19** is moderate. 346 spam/PBN domains were stripped from the gap list before this brief was generated — they are NOT recommended targets.

---

## 5. Cross-cutting plays (content + link pairings)

These are the highest-leverage Q2 moves because the content gap is unlocked by closing the link gap.

| Play | Content gap | Link gap | Why it compounds |
|---|---|---|---|
| **A. NY-state detox positioning** | Build `/detox-new-york` landing page (cluster #1) | Earn placement in startyourrecovery.org + alcoholism.org with the new URL as canonical | Citation links to the new state-level page accelerate ranking for the 880/mo unique-intent query |
| **B. CARF + trust-signal cluster** | Reinforce E-E-A-T elements on `/about-us`, `/admissions`, all service pages | Pursue carf.org accreditation listing | Resolves both link gap (#1 priority) AND the LLM Visibility strategy item (Strategy Item 4) — CARF is heavily cited by AI Overviews for SUD queries |
| **C. Bronx Map Pack recapture** | Bronx outpatient page audit — verify NAP consistency, schema, photos | Build citations Bronx Recovery has: alcoholism.org, sobasearch.com | Bronx Recovery has only 9 backlinks but #1 Map Pack — citation strategy is the lever, not content |

---

## 6. What is NOT a gap (don't spend Q2 budget here)

| Area | Why skip |
|---|---|
| Carmel-specific content | AA already #1 Map Pack + top organic. Defending, not building. |
| Drug-interaction blog content (diflucan + alcohol, etc.) | Baseline flagged: 91% impressions, 0.025% CR. Over-indexed already. |
| Backlink volume push | AA has 426 referring main domains — 2.5× nearest competitor. Quality > quantity. |
| Upstate NY content | Helio Health territory, out of AA service area |
| CASAC workforce content | Recruitment play, not patient acquisition — only build if product team requests |

---

## 7. Q2 strategy doc row updates (for Marija)

| Strategy Item | Status update for the quarterly doc | Result/notes column |
|---|---|---|
| **1. Competitor Analysis** | Mark **Complete** | "5 competitors mapped (Carmel/Bronx/NY-organic); content gap = 580 LP + 1,287 blog opportunities, dedup-clustered; link gap = 514 missing root domains, quality-filtered. Deliverables: `arms_acres_content_gap.csv`, `arms_acres_link_gap.csv`, this brief. Queens market flagged as unmeasured gap." |
| **2. GMB Optimization** | Add scope from this brief | Focus area = Bronx outpatient GBP (where AA loses to Bronx Recovery), not Carmel (where AA wins) |
| **3. Rankings Gap** | Tie to LP gaps #1–#2 (NY-state pages) + #4 (Queens audit) | Two supporting knowledge pages = state-level detox + state-level inpatient/residential — both linking to `/inpatient` authority page |
| **4. LLM Visibility** | Tie to Cross-cutting Play B | CARF accreditation listing + E-E-A-T on `/inpatient` resolves both link gap #1 AND LLM authority requirement |

---

## 8. Assignments

| Action | Owner | Sheet/row reference |
|---|---|---|
| Build `/detox-new-york` page | Aleksa (on-page) + Content | `content_gap_v2.csv` filter `cluster_key=center\|detox\|newyork` |
| Build consolidated `/alcohol-rehab-new-york` page | Aleksa + Content | `content_gap_v2.csv` filter cluster_keys containing `alcohol` + `newyork` |
| Improve `/inpatient/adult-rehabilitation` (highest-leverage existing page) | Aleksa | `content_gap_v2.csv` filter `aa_url=...adult-rehabilitation` (8 clusters) |
| Audit existing `/outpatient/queens-outpatient` page | Aleksa | `content_gap_v2.csv` filter cluster_key=`newyork\|outpatient\|queens\|rehab` |
| Add NY-state alcohol-rehab section to homepage | Aleksa | `content_gap_v2.csv` filter cluster_key=`alcohol\|center\|newyork\|rehab` |
| Investigate MICA program page opportunity | Aleksandar → AA clinical lead | `content_gap_v2.csv` filter cluster_key=`mica\|newyork` |
| Verify AA's OTP license status (for MAT/OTP page decision) | Aleksandar → AA compliance | `content_gap_v2.csv` cluster_key=`mat\|meridian\|otp\|treatment` |
| Pull Queens DataForSEO Maps SERP | Aleksandar | (Phase 2 prep, ~$0.10) |
| Verify CARF accreditation status | Aleksandar → AA compliance contact | `link_gap.csv` (filter `root_domain=carf.org`) |
| Submit startyourrecovery.org provider listing | Julce (off-page) | `link_gap.csv` (filter `root_domain=startyourrecovery.org`) |
| Submit alcoholism.org listing | Julce | `link_gap.csv` (filter `root_domain=alcoholism.org`) |
| Pitch behavioralhealthnews.org contributed article | Julce + AA clinical lead | `link_gap.csv` (filter `root_domain=behavioralhealthnews.org`) |
| Verify AA 501(c)(3) status → charitynavigator.org listing | Julce | `link_gap.csv` (filter `root_domain=charitynavigator.org`) |

---

## 9. Methodology notes

- **Variant deduplication** applied per Ace's feedback memory — same-Google-query keyword variants (e.g., "detox nyc" vs "detox ny") counted once for cluster volume, not summed.
- **Competitor filter** stripped national directories (rehab.com, addictioncenter.com, alcohol.org, etc.), informational sites (Mayo, Cleveland Clinic, Verywell), UGC (Reddit, Quora), and social platforms — these share keywords but don't compete for buyers per `methodology/competitor-identification.md`.
- **Link gap quality filter** dropped 346 spam/PBN domains (spam_score > 30 unless rank > 100; rank=0 + spam_score > 0; suspicious-TLD low-authority).
- **Citation vs backlink classification** based on a 80-pattern directory/aggregator list. Borderline domains (SaaS footer tools like constantcontact, givecloud) are flagged as `backlink` but are *NOT acquisition targets* — they appear because competitors use those tools, not because they're earned links.
- **DataForSEO spend for this analysis:** $0.59 (under $2 budget).

---

*End of brief.*
