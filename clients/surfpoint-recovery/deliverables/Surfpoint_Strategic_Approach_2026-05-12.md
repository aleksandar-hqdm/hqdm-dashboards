# Surfpoint Recovery — Strategic Approach

**Why this work, in this order, on this evidence**

Prepared by HQDM Search Intelligence · 2026-05-12
Author: Aleksandar Spasevski · Status: Companion to the Q2 2026 Custom Strategy

---

## 0. What this document is

The reasoning document. Tasks live in the Q2 Custom Strategy, the per-URL Site Structure sheet, the page-specific briefs, the GBP Audit, and the Backlinks & Citations Strategy. Those answer *what* and *when*. This one answers **why this approach, why now, and what proves it.**

Four pillars are in scope:

1. **Site architecture** — the per-URL decision framework on the 878-URL footprint, including the execution mechanics (NOINDEX / 410 / 301) that align the indexed surface to Google's already-issued cleanup signal.
2. **Landing-page improvement** — the homepage rebuild, the service-page rebuild, the locations layer.
3. **GBP optimization** — closing the field-level depth gap and the audit-risk exposure while the listing is already winning the immediate-neighborhood map pack.
4. **Citations & links** — disavow first, then close the competitor gap through a single deduplicated work queue.

The thesis across all four: **Surfpoint is overperforming its architecture.** The brand is being carried by its GBP and review velocity into a position the website cannot defend. The question is not "what to add" — it is "what to fix, in what order, so the next 90 days of map-pack dominance translate into a defensible organic surface and direct revenue lift, instead of evaporating into a slow algorithmic correction."

---

## 1. The starting picture

### 1.1 Three numbers frame everything below

| Signal | Reading | Source |
|---|---|---|
| Daily impressions, 87-day trend | **−77%** peak-to-current | GSC Performance, Feb 7 → May 4, 2026 |
| URLs known to Google, 87-day trend | **−37%** | GSC Coverage |
| URLs flagged "not indexed" | **756** (562 specifically "Crawled — currently not indexed") | GSC Coverage |
| Single-day crawl spike, March 16 | **524 requests** vs. 70–100 baseline | GSC Crawl Stats |
| Service pages, 365-day total | **104 sessions / 0 conversions** | GA4 |
| GMB-tagged sessions vs. all-Organic-Search conv rate | **2.53% vs. 0.32%** (~8×) | GA4 custom segment (`source=gmb`) vs. default channel grouping |
| Tracked anchor `alcohol rehab brooklyn`, Coney Island grid | **rank 1.47 / 96% top-3** (was 1.88 / 87% in Oct 2025) | Local Dominator |
| Review base, 16-day movement | **91 / 4.5★ → 120 / 4.8★** | DataForSEO Business Data |

The shape: an algorithmically-shrinking website attached to a map-pack-dominant GBP. The strategy leans on the GBP as a resilience layer while the website surface is rebuilt around it, in a sequence that doesn't break what's already working.

### 1.2 The win is real where Surfpoint sits — and a gradient outside it

The tracked-anchor headline (rank 1.47 / 96% top-3) is one keyword on a grid centered at Surfpoint's address. The **cluster-wide picture is a gradient, not a uniform win** (Apr 22, 2026 LD scan, out-of-pack cells excluded from rank avg):

| Topical cluster (keywords) | Avg map rank | Top-3 grid % | Top direct competitor |
|---|---:|---:|---|
| **alcohol** *(10 kw — detox + rehab)* | **2.65** | **73%** | Urban Recovery (4.22) |
| **drug** *(5 kw — detox + rehab)* | **2.98** | **72%** | Urban Recovery (4.26) |
| **detox** *(6 kw — broader)* | **4.11** | **54%** | ACI Inpatient (4.33) |
| **inpatient** *(3 kw)* | **4.97** | **44%** | Ditmas Park (5.62) |
| **near-me** *(9 kw — combined)* | 3.29 | 64% | Urban Recovery (4.44) |

The win is concentrated on the immediate neighborhood. Cluster-wide there are real grid-coverage gaps Surfpoint is closer to a co-leader than a dominant first result on. The on-page work in pillars 2–4 is what extends the win outward; the GBP work in pillar 3 keeps the immediate-neighborhood resilience layer intact while that happens.

### 1.3 The funnel leak is at the top, not the bottom

| Channel | Share of sessions (90d) | Share of conversions | Conv rate |
|---|---:|---:|---:|
| **Brand-driven** *(100% Direct + 19% Organic + share of Referral/Social)* | **~51%** | **~66%** | ~0.80% |
| **Non-brand** *(mostly Organic Search blog)* | **~47%** | ~34% | **~0.45%** *(non-GBP non-brand: 0.15%)* |
| GMB-tagged sessions *(GA4 custom segment, attributed to Direct in default grouping)* | 4.1% of all sessions | — | **2.53%** *(16× non-GBP non-brand)* |

Non-brand visitors arrive at legacy content that doesn't connect to the conversion funnel. The opportunity is **converting more of the non-brand visitors Surfpoint already gets**, not generating more of them. That's the landing-page argument in two numbers.

---

## 2. Pillar one — site architecture (and execution)

### 2.1 The problem is not whether to clean up; Google has already imposed it

756 not-indexed URLs is an instruction from Google about which pages have failed its quality threshold. The question is *which* URLs survive, *which* die, *which* get rewritten — and the cost of getting either side wrong is large. Two naive approaches both fail:

- **Delete-first** (kill anything < N clicks, 0 conv) would auto-remove ~450 URLs, most of them core-topic blogs (withdrawal protocols, detox timelines, recovery process). In an OASAS-regulated, YMYL vertical those posts are the topical-authority substrate Google uses to decide which sites get to rank for transactional queries at all.
- **Preserve-first** leaves 213 URLs of template debris, off-topic content (viagra/breath/rappers/phobias), and 43 NJ + out-of-borough doorway pages from a NY-only OASAS-licensed facility — dragging down the site-level signal that determines whether the 562 "Crawled — currently not indexed" pages ever return.

The per-URL evidence model is the only correct response.

### 2.2 v1 vs v2 — what the topical + backlinks overlay rescued

Every URL was scored against four orthogonal signals: GA4 traffic/conv, GSC clicks/impressions/trend, DataForSEO Backlinks (equity preservation), and topical relevance (core / adjacent / off-topic).

| Routing | v1 — GA + GSC alone | v2 — with topical + backlinks overlay |
|---|---:|---:|
| Auto-removed *(NOINDEX + DELETE + DELETE+REDIRECT)* | **670** (76% of site) | **261** (30%) |
| Routed to AUDIT *(individual triage)* | — | **555** |
| KEEP + KEEP-AUDIT | 47 | 47 |
| REDIRECT *(standalone)* | ~60 | 14 |
| **Net effect** | | **453 URLs rescued from auto-removal** |

Concrete saves (URLs v1 would have NOINDEX'd/DELETE'd; the overlay routed them to AUDIT for triage):

| URL | Why v1 wanted to kill it | Why v2 kept it |
|---|---|---|
| `/blog/how-to-help-someone-with-a-porn-addiction` | 0 conv / 365d | 901 sess/90d, core addiction topic, ranks pos 17 — rewrite candidate |
| `/blog/withdrawal-from-alcohol-using-hydroxyzine` | 0 conv, weak rank | 244 sess/90d, core detox-protocol topic, clinical specificity |
| `/blog/how-long-does-it-take-for-weed-to-leave-your-system` | 0 conv | 306 sess/90d, core substance-Q topical surface |

Headline rule: **0 conversions does not equal auto-prune.** A blog routes to NOINDEX or DELETE only if it is *also* off-topic *and* has no backlinks *and* has fewer than 5 clicks in 365 days.

### 2.3 The execution layer — the mechanism that aligns the index to the decision

The architecture decision is the *what*; the execution is the *how*, and the mechanism choices are doing real work:

| Lane | URLs | Mechanism | Why this, not the obvious alternative |
|---|---:|---|---|
| NOINDEX *(off-topic, including 7 high-traffic wrong-audience)* | **128** | `<meta robots="noindex,follow">` | `follow` keeps internal-link equity flowing while page sits out of index; reversible by removing the tag |
| DELETE *(paginated artifacts + orphan stubs)* | **99** | **HTTP 410 Gone**, not 404 | 410 signals *intentional removal* → faster deindex; 404 keeps Google re-checking for months |
| REDIRECT *(NJ + out-of-borough doorways + 5 legacy `/services/*`)* | **43 + 5** | 301 → `/areas-served` or `/treatments/[service]` | Doorway-removal consolidates residual equity onto a real catchment page |

The 7-URL "high-traffic but wrong-audience" lane is the counterintuitive one — and the largest single lever inside the cleanup:

| URL | Sessions / 90d | Impressions / 90d | Conv / 365d |
|---|---:|---:|---:|
| `/blog/how-to-get-rid-of-alcohol-breath` | 853 | **230,000+** | 0 |
| `/blog/how-long-doxycycline-stays-in-your-system` | 474 | high | 0 |
| `/blog/rappers-with-drug-addiction` | 430 | high | 0 |
| `/blog/viagra-and-alcohol` | 337 | high | 0 |
| **7-URL lane combined** | **~2,400+** | **300K+** | **0** |

~18% of non-brand organic sessions, ~0 conversions, and a topical signal that tells Google Surfpoint is a site about breath/viagra/rappers — not addiction treatment. The instinct is "301 the traffic into a service page." Wrong: an intent mismatch drives bounce up on the destination and tells Google the destination is **less** relevant for its actual buyer queries. NOINDEX with one preserved internal link is correct.

**All 270 mechanical operations ship in one M1 deploy window** alongside a sitemap rebuild. Spreading across weeks creates contradictory intermediate states (a NOINDEX'd URL still in the sitemap, an internal link pointing at a 410'd page) — each one delays Google's re-evaluation by another crawl cycle.

### 2.4 The denominator change Google sees post-deploy

| Signal | Before M1 deploy | After M1 deploy |
|---|---|---|
| Indexed surface | 878 URLs (~24% waste) | **~665** (waste removed; AUDIT lane preserved for triage) |
| Site-level quality denominator | Addiction-treatment + breath / phobias / rappers / NJ doorways | A focused addiction-treatment surface |

The cleanup doesn't move conversions directly. It moves the **denominator** in Google's quality calculation so that the landing-page work and the GBP optimization land into a site Google has stopped discounting.

### 2.5 Why this is defensible — reversibility and the Q3 audit-back

Every lane has a reversal path. NOINDEX: remove the meta tag, re-indexed within a crawl cycle. DELETE (410): restore the page, re-discovered via sitemap (equity decays after ~30 days). REDIRECT: remove the 301.

The Q3 (August 2026) audit-back re-pulls GSC Coverage + per-URL traffic on every removed and triaged URL: removed pages that lost no value stay removed; rewrites that moved metrics get promoted; rewrites that didn't get demoted back to remove. A mid-cycle guardrail pauses new task creation if any of three weekly metrics moves the wrong direction for two consecutive weeks.

### 2.6 What we are explicitly not doing

- Not deleting URLs that hold referring domains, even at weak traffic. Equity is more expensive than disk space.
- Not preserving NJ doorways. A NY-licensed facility advertising service in NJ is a regulator-visible compliance pattern, not a ranking strategy.
- Not running cleanup and rebuild in sequence. They run in parallel — sequential ordering wastes ~6 weeks where Google sees a smaller-but-not-better site.

---

## 3. Pillar two — landing-page improvement

### 3.1 The allocation mismatch in two numbers

| Workstream | 24-month task share (1,294 Asana tasks) | Conversion share (365d, 833 conv) |
|---|---:|---:|
| Blog content | 19% (241 tasks) | ~2% (residual) |
| GBP operations | 16% (203 tasks) | (separate channel) |
| **Service pages** | **0.8%** (10 tasks, all 2024) | **0%** *(104 sess / 0 conv across 5 pages)* |
| Technical / schema / interlinking | 0.3% (4 tasks) | — |
| Homepage + utility pages | (folded in) | **98%** (67% homepage + 31% utility) |

**0.8% of effort has gone to the surface that delivers 0% of conversions.** The interlinking SOP reinforced the gap — 305 link-plan rows to location pages, 423 to blog content, **15 to services** over the audit period.

The mismatch isn't a capacity problem. The team's individual completion is strong (Nina content: 94.5% closed at median 9d; Aleksa on-page: 92.9% at median 1d; Content Posted: 184/184 closed). The mismatch is at the **publish path's middle stages** — Content Being Written 0/7, Content Ready To Post 0/11, Order Backlinks 0/3 (oldest open 708 days), and Content Ordering 2 open at median 343 days. **21 tasks sit at 0% completion at median 60-day open age.** Work enters the middle stages and does not exit them. The team has not been doing the wrong work — it has been doing the wrong *mix* of work, and the workflow that gates new work into service-page output is stuck.

### 3.2 What the mismatch costs

Per Q2 Custom Strategy §3.2 addressable-demand model (10% lead-to-admission, $20K per admission — conservative against published $30–60K inpatient pricing):

| Scenario | Conv-rate assumption on missed clicks | Annual missed revenue | What it requires |
|---|---|---:|---|
| Pessimistic | 0.15% *(current non-brand)* | **~$52K** | Rank improvements alone; service pages stay orphaned |
| Mid-case | 0.5% *(halfway to brand)* | **~$175K** | Service-page rebuild + interlinking refactor ships |
| Headline | 1.0% *(matches Direct rate)* | **~$352K** | Full architectural fix (this plan) |

The 1.0% rate is not aspirational — it is what the homepage already delivers when the content infrastructure is on the page. The service-page rebuild moves the rest of the surface up the same curve.

### 3.3 Homepage — what the gap audit shows

Surfpoint live vs. three direct competitor homepages (ACI, Genesis, Ascendant):

| Element | Surfpoint live | + CRD adds | Ascendant (benchmark) |
|---|---|---|---|
| Word count | 1,320 | ~2,200 | 2,590 |
| H2 count | 7 | ~12 | 19 |
| Schema | 1 `LocalBusiness` | unchanged | 1 `MedicalClinic` |
| OASAS / CARF body refs | 2 / 2 | 2 / 2 | **0 / 0** |
| Insurance carriers named | 1 (Medicaid only) | 4 (Medicaid/Aetna/Cigna/BCBS) | 0 |
| Coney Island body refs | **0** | ~4 | **0** |
| Homepage form | **1** | 1 | **0** |
| Brooklyn refs | 27 | ~30 | 5 |

The read: Surfpoint **already wins** on credentialing, geo density, and conversion infrastructure (the homepage form is uncontested in the set — don't lose it in the rebuild). It loses on content depth, hyper-local specificity, and insurance specificity. The CRD addresses topical gaps; it does not address schema, E-E-A-T, and several quick wins.

**Coney Island is uncontested as a hyper-local angle.** Zero competitors in the set mention it in body content; Surfpoint occupies the only inpatient detox facility on the Coney Island shoreline. The homepage rebuild claims that positioning at scale (named neighborhoods embedded across new H2 sections, service-area map iframe pointed at the facility coordinates) — and the same on-page geo signals reinforce the map-pack proximity ranking the GBP is already winning.

### 3.4 Service pages — the architectural failure

All five service pages share the **same diagnostic profile**. That is what tells us this is structural, not a per-page problem:

| Dimension | Status across all 5 service pages |
|---|---|
| Meta description | **EMPTY (0 chars)** |
| JSON-LD schema | **0 blocks** |
| On-page form | **0** |
| Coney Island mentions | **0** |
| OASAS / CARF / SAMHSA refs | **0 / 0 / 0** |
| Insurance carriers | 0 across 4 of 5 |
| Dual diagnosis mentions | **0** |
| Body word count | 643–863 |
| Contextual links to peer services | **0** |

Template stub problem. Each page was built once with generic copy and never specialized. The on-page form lives on `/admissions` and `/contact-us` but not on the service pages where the service decision is made. Credentials live on the homepage but not on the conversion-decision page.

The concentration inside the lane: `/services/benzodiazepine-detox-services` alone carries **91% of orphan service-page impressions (1,925 in 365 days)** with zero conversions. The rebuild is a five-element addition per page: credentialing block (OASAS + CARF), insurance block (with verification CTA), clinical-roster block (named MD/RN/counselor + credentials), patient-journey "What to Expect" block, and schema deployment (`Service` + `MedicalProcedure` + `FAQPage`) — plus the missing on-page form, the missing meta descriptions, and contextual links.

The benchmark for `alcohol detox brooklyn` shows top-3 real providers are TBH (hospital, 888 words, OASAS-named, lists care team), Genesis (homepage ranking structurally on DA), and Urban Recovery (1,556 words MAT-deep homepage). Surfpoint's dedicated service page should beat TBH on depth AND be service-specific.

### 3.5 Locations — real catchment, not doorway sprawl

43 URLs target NJ neighborhoods + out-of-borough NYC. Both classes are doorway-pattern pages — same template repeated across geographies Surfpoint cannot or should not serve. They 301 to `/areas-served`, which is rebuilt in the **same M1 deploy** as the cleanup. **Dependency:** if `/areas-served` is not rebuilt in that window, the redirect chain terminates at a stub and the equity transfer doesn't happen.

What remains is the real Brooklyn catchment: Coney Island, Brighton Beach, Bensonhurst, Bay Ridge, Sunset Park, Sheepshead Bay, Gravesend, Bath Beach, Midwood, Marine Park. Same neighborhoods referenced on the rebuilt homepage — the geo signal is consistent across surfaces.

### 3.6 What we are explicitly not doing

- Not expanding blog volume. The PAA pipeline is redirected from generic seeds to service-aligned seeds.
- Not expanding the location footprint. The locations × services matrix runs against the real catchment.
- Not deploying schema as a single block. Each schema type matches a surface where the claims are supported: full `MedicalBusiness` graph on the homepage, `Service` + `MedicalProcedure` + `FAQPage` per service, `Place` on retained locations.
- Not stripping the homepage form. It is the only one in the competitor set and the largest single conversion-attribution surface.

---

## 4. Pillar three — GBP optimization

### 4.1 The listing is winning despite being structurally incomplete

Inside Brooklyn proper, against true outside competition (HQDM peers excluded):

| Listing | Rating | Reviews | 90-day velocity | Locale |
|---|---:|---:|---:|---|
| **Surfpoint Recovery** | **4.8★** | **120** | **26** | Coney Island |
| ACI Inpatient | 3.8★ | 71 | 5 | Brownsville |
| Genesis Detox | 3.5★ | 63 | 1 | Sunset Park |
| Realization Center (unclaimed) | 4.7★ | 85 | 1 | Brooklyn Heights |
| Under Angels Wings | 5.0★ | 35 | 1 | Sunset Park |

Surfpoint is the **only Brooklyn listing combining 4.8+★ with 100+ reviews** and is acquiring **~5× the 90-day velocity** of the next-nearest direct competitor. The closest match on rating-and-volume is Ascendant Detox NYC (4.8★/284) — Manhattan, different catchment, different map pack. So why touch it?

Two reasons. The listing wins despite nine field-level leaks that individually shape Knowledge-Panel completeness and audit risk. And the depth gap against Ascendant is the lever for keyword surface Surfpoint doesn't currently surface on.

### 4.2 The depth gap, quantified

| Field | Surfpoint | Competitive leader | Closing it does |
|---|---|---|---|
| Categories | 5 | Ascendant: 9 | Counselor (defensible) extends reach to adjacent intents |
| Attributes | 5 | Mountainside: 7 | `has_onsite_services`, `wheelchair_accessible_parking`, `restroom_unisex` — cheap defensible adds |
| Photos | 9 (no cover) | Ascendant: 90 / Mountainside: 30 | Surfpoint second-lowest in set; signals active management |
| Q&A | 4 (0 answered) | ACI: 10, Urban: 15 | Three of four are owner-seeded then never answered — worse than no Q&A |
| **Booking link** | **none** | **none across full set** | **Uncontested competitive differentiator** |
| Description | 471/750 chars, generic | n/a | Zero mention of OASAS, CARF, MAT, dual diagnosis, insurance carriers, or Coney Island |

The **booking link** is the cheapest single change in the audit and is uncontested across the eleven-competitor set. The **description rewrite** packs every click-decision signal into the 750-char budget.

### 4.3 The audit-risk content — the highest-leverage finding

Owner-response rate is **0% across 120 reviews.** Time-on-listing for the load-bearing items (as of 2026-05-12):

| Reviewer | Stars | Unaddressed | Embedded content | Exposure |
|---|:---:|---:|---|---|
| **Jacob Gaik (RN-credentialed)** | 5★ | **~140 days** | "nurses … Bluetooth … talking and dispensing meds to patients" | **OASAS / med-admin protocol** |
| Pedro | 5★ | ~390 days | "Please tell Paul to STOP vaping" | Staff conduct |
| **Nick Tonjuk** | 1★ | **~310 days** | "Stole my property and said 'you'll just have to take the loss'" | **Theft accusation, brand-search visible** |
| Michael Mabe | 1★ | ~165 days | Patient-mix stigma | Operational |
| s k | 1★ | ~325 days | "Lazy staff. … No place to walk. Very noisy." | Operational |

In an OASAS-regulated vertical, this is the most damaging asset on the listing — not for star-rating impact, but because the listing is **what regulators and referring providers see first when they vet the facility**. Each day adds compounding exposure to OASAS auditors, hospital social workers, malpractice attorneys, and due-diligence searchers. Owner-response backfill closes the exposure in one sprint without changing the rating.

The review velocity itself is **brittle**: ~70% of recent reviewers have 1 lifetime review and ~30 visible reviews share template signature (same 10–15 staff names, same "thank you / just for today group" phrasing). Structurally legitimate in inpatient discharge UX — but Google's spam classifier flags single-purpose-account clusters. Fix is operational: diversify the review-request UX, broaden the source pool (family, referrers, post-90-day aftercare), and run a 48-hour response protocol on every new review.

### 4.4 The service-area dilution + NAP mismatch

The GBP service area lists **20 neighborhoods** spanning Brooklyn + Queens (Howard Beach, Belle Harbor, Rockaway Park) + Bed-Stuy + Bushwick + Brownsville. Per Google's policy the attribute is for businesses that **travel to clients**; Surfpoint is inpatient-only. A storefront-plus-wide-service-area can have its rank distance partially down-weighted, and the wide service area dilutes the Coney-Island grid precision. Right move: **remove the service area entirely**; the grid dominance does not depend on it. Conservative fallback: trim to the 9-neighborhood real catchment.

NAP mismatch — companion fix: GBP address line reads `2316 Surf Ave Entrance on, W 24th St, Brooklyn, NY 11224`. The "Entrance on West 24th Street" qualifier embedded in line 1 hashes differently from the website (`2316 Surf Avenue, Brooklyn, NY 11224`) and most directories. This breaks NAP-match dedup at Yelp, Foursquare, BBB, Apple Maps, Bing Places — and matters because the citation pillar depends on consistent NAP to lift cleanly. **Fix lands before the Phase 1 citation push.**

### 4.5 What we are explicitly not doing

- Not unilaterally cleaning up the keyword-stuffed business name. ACI Inpatient, Mountainside NYC, Ascendant Detox NYC all use the same pattern. Unilateral compliance surrenders keyword surface to peers also in violation. Documented in the account risk log; action deferred.
- Not adding clinical-role categories (Psychiatrist, Psychologist) without staff credential verification. False category claim is suspension-grounds. Counselor is defensible per the CRD.
- Not over-suffixing services with geo modifiers. 4 of 16 services use the suffix — correct ratio; over-suffixing trips spam heuristics.
- Not chasing review volume as the headline metric. Pattern diversity matters more at this point in the curve.

---

## 5. Pillar four — citations and links

### 5.1 The drag, in context

| Domain | Backlinks | Ref domains | Spam score |
|---|---:|---:|---:|
| **surfpointrecovery.com** | 942 | 386 | **43** |
| urbanrecovery.com *(HQDM peer)* | 1,642 | 642 | 42 |
| therecoveryvillage.com *(national)* | 160,370 | 12,570 | 24 |
| americanaddictioncenters.org *(national)* | 102,543 | 18,283 | **16** |

Surfpoint sits at **~2× the spam score** of national benchmarks. Spam score 43 is the load-bearing signal — large enough to function as a drag on every link earned regardless of quality. The near-identical Urban Recovery profile (42) confirms shared-PR-playbook residue; both need ongoing disavow hygiene as the playbook's tail keeps surfacing.

### 5.2 Three programmatic networks account for most of the toxic tail

| Network pattern | Domains | Footprint |
|---|---:|---|
| `bhs-links-*.xyz` | 5 | All-nofollow, spam ≥ 81, rank 0 — classic link-blast |
| `seo-anomaly-*` *(.xyz / .online / .site / .space / .website)* | **106** | SEO-terminology domain names (anchor, canonical, dofollow, sitemap…) — automated crawler/PBN scaffolding |
| `seo-cartel-N.online` *(numerically suffixed)* | 40 | All-nofollow, spam 55 |

Plus an Australian-PBN ring (`australianwebdirectory.{pro,shop,info}`) and one-off high-spam domains. Unambiguous regex matches → automatable disavow at scale.

### 5.3 Why 183 — disavow classification, not a blanket cutoff

A blanket disavow at spam ≥ 40 would flag 205 domains and be self-harming (the 40–69 band mixes real mid-tier with PBN scaffolding). The classification layers in a second signal. Domain routes to AUTO-disavow if:

1. Spam ≥ 70 (toxic regardless of context)
2. Domain-name pattern match (`bhs-links-`, `seo-anomaly-`, `australianwebdirectory`, `-pbn`, `bestbacklinks`, `expireddomain`)
3. Hard-spam TLD (`.xyz / .ga / .tk / .ml / .cf / .gq / .party / .click / .work / .loan / .bid / .stream / .trade`) **AND** spam ≥ 40
4. Soft-spam TLD (`.online / .site / .space / .website / .store / .shop / .info / .biz / .fyi / .buzz / .club`) **AND** spam ≥ 50
5. 100%-nofollow profile **AND** spam ≥ 50 **AND** rank = 0 (typical PBN/crawler footprint)

Plus a safety allowlist (bbb.org, google.com, facebook.com, yelp.com, linkedin.com, healthline.com, webmd.com, .gov, .edu) regardless of what DataForSEO returns. Output: **183 AUTO-disavow / 42 borderline manual / 161 retained / 386-row audit trail.**

| Bucket | Domains | Share |
|---|---:|---:|
| AUTO-disavow | **183** | **47%** |
| Borderline manual review (spam 50–69, no pattern) | 42 | 11% |
| Retained (allowlist + low-spam + real) | 161 | 42% |

### 5.4 Why disavow comes before opportunity

GSC disavow processing takes 2–4 weeks. New citations + backlinks acquired before disavow lands arrive into a profile Google is still discounting at spam-43 levels. **Submitting first** means the toxic drag clears while acquisition ramps; by the time Phase 1 citations land (rehab.com, BBB, Apple Maps, Bing Places, Healthgrades, Psychology Today, SAMHSA Treatment Locator, NYS OASAS Find a Provider), the discount is lifting.

### 5.5 The competitor gap — three direct competitors, not ten

Comparison set: **ascendantny.com, acirehab.com, genesisdob.com.** Three is the right size because the **multi-competitor signal** — domains where 2+ direct competitors have landed a link — filters accessible-AND-relevant from accessible-but-narrow. Shortlist produced after stripping three contamination classes: informational/UGC/social (share keywords, not buyers), HQDM-managed peers (urbanrecovery / niagararecovery / armsacres / coniferpark — internal cross-contamination), and national chains (AAC / Recovery Village — PR/brand spend not replicable at Surfpoint scale).

Gap produced **385 domains** (352 editorial/profile + 33 directory). Composite priority = `competitors_with_link × 3 + (1 / log(rank+2)) × DA_weight − spam_score / 20 + recency_bonus`. Top of the priority sort: rehab.com, biohackhive.com, sobasearch.com, addictionresource.com, addictionhelplineamerica.com, rehabspot.com, betteraddictioncare.com, hoursfinder.com.

### 5.6 One work surface, not three

| Source | Inputs | After dedup |
|---|---:|---|
| Competitor gap | 385 *(352 backlinks + 33 citations)* | — |
| HQDM "list of sites" | 116 | — |
| Whitespark report | 237 | — |
| **Sum** | **738** | — |
| **Unique root domains** | — | **697** |
| Open opportunities *(excl. 13 already linking)* | — | **684** |

41 redundant domains caught by root-level normalization (`business.google.com` → `google.com`, `mapsconnect.apple.com` → `apple.com`). Without dedup the off-page team would have worked through ~6% noise across three queues that don't talk. 13 already-linking domains (zoominfo, batchgeo, blogspot, acirehab.org and others) flagged + sorted to bottom — visible for audit, out of the work queue.

### 5.7 What we are explicitly not doing

- Not pursuing mainstream social/profile sites (linktr.ee, youtube.com, github.com) as priority. Nofollow, no local-rank lift; brand hygiene only.
- Not acquiring `seo-anomaly-*` / `seo-cartel-*` patterns even where they appear in competitor profiles. Tool-footprint misclassifications. Disavow; don't mimic.
- Not pursuing foreign-language link farms (`.com.br`, `.com.ar`, `.vn`, `.fr` with no English content). Scraper/aggregator artifacts.
- Not resuming the PR-placement playbook that produced the spam-43 profile. New placements pause until disavow clears and acquisition shifts to vertical topical sources.

---

## 6. Why the four pillars reinforce each other

**Site architecture (with execution) is the precondition.** As long as the site-level quality signal is dragged down by 213 doorway/off-topic URLs, a perfect homepage rebuild ships into a discounted site. The cleanup moves the denominator; the rebuild lands into the cleaner denominator. Sequential (clean first, build second) wastes ~6 weeks; they run in parallel.

**GBP is the resilience layer.** Map-pack ranking is driven by category + proximity + reviews + on-page reinforcement. The first three are stable and improving. The fourth — on-page reinforcement — is what the landing-page work delivers. Optimizing the GBP fields while the on-page work is in flight protects the 2.53% / 0.32% conversion economics (8×) that fund the rebuild period.

**Citations and links close the entity-authority loop.** Foundational citations (SAMHSA, NYS OASAS, BBB, Apple Maps, Bing Places, Foursquare, Healthgrades, Yelp, Psychology Today) reinforce the same NAP signal the GBP claims and the website `MedicalBusiness` schema asserts — triangulation. Competitor-gap backlinks build the topical-authority signal that lets rewritten service pages rank for queries the homepage currently catches indirectly. Disavow is what makes new equity arrive into a clean profile.

Sequence: **disavow submit → M1 cleanup deploy → service-page rebuild → Phase 1 citations → Phase 2 topical-local.** Measured in weeks; the work overlaps. The point of the sequencing is that each downstream piece is more productive because the upstream piece landed first.

---

## 7. What working looks like — the recovery curve

Three site-level metrics tracked weekly. They are the operating definition of "this is working."

| Metric | Current trajectory | Expected post-M1 |
|---|---|---|
| Total URLs known to Google (GSC Coverage) | −37% / 87d | Continued dip ~2 crawl cycles → stabilization → modest growth as rebuilt service/location pages enter index |
| Daily impressions (GSC Performance, 7d rolling) | −77% peak-to-current | Bottom within 30–45 days post-deploy → recovery slope as remaining surface re-evaluated as cleaner |
| Avg position on tracked queries (GSC + LD) | Mixed | KEEP + KEEP-AUDIT improve as site-level quality normalizes; map-pack grid (1.47 / 96% top-3) is resilience layer — does not need to move; needs to not regress |

The Q3 (August 2026) audit-back is the verdict. If all three move the right direction, next quarter shifts cleanup → growth. If one is flat, the next step is a wider strategy review — the data refuses to confirm the thesis, and continuing to push tasks against an unconfirmed thesis is the failure mode this audit is designed to avoid.

**Mid-cycle guardrail:** any of the three moving wrong direction for two consecutive weeks → pause new task creation, review what deployed in that window. The per-URL audit trail makes the bad change traceable to a specific deploy.

---

## 8. What this approach is not

- Not "do everything we can think of." The Q2 task surface is bounded — no blog-volume cadence increase, no outpatient strategy, no paid acquisition (LegitScript-gated), no cross-account keyword competition with HQDM Recovery peers (Milica-level coordination question, not a per-account tactic).
- Not an assumption that the GBP win is permanent. The audit-risk findings inside the review base (RN-credentialed compliance content unaddressed 140d, theft accusation unaddressed 310d) are a public, indexed, time-decaying liability. Owner-response backfill is non-negotiable inside the first sprint.
- Not a guarantee. The metrics either move or they don't. The point is that **fewer, better-sequenced moves on the right surfaces outperform more moves spread across surfaces that aren't ready to absorb them.** That is the strategy.

---

## 9. Where the underlying evidence sits

- **Site architecture + execution:** `exports/decision_matrix_with_topical.csv` (878-URL v2 bucketed matrix), `Surfpoint_Site_Architecture_Audit_Methodology.md`, `Surfpoint_Site_Structure_Link_Management_Explainer.md`, `Surfpoint_Task4_Index_Hygiene_Brief.md`, `Surfpoint_Site_Architecture_Rationale.md`, `surfpointrecovery.com-Coverage-2026-05-08.xlsx`, `surfpointrecovery.com-Crawl-stats-2026-05-08.xlsx`.
- **Landing pages:** `Surfpoint_Landing_Pages_Rationale.md`, `exports/competitive_audit/01_homepage_gap.md`, `02_service_pages_gap.md`, `metrics.csv`, `Surfpoint_Homepage_Update_Brief.md`, `Surfpoint_Treatments_Hub_Update_Brief.md`, `Surfpoint_Treatments_SubPages_BuildPlan.md`, `Surfpoint_Services_Legacy_Redirect_Plan.md`.
- **GBP:** `Surfpoint_GBP_Audit_2026-05-12.md`, `Surfpoint_GBP_Rationale.md`, `exports/dataforseo/gmb/`, `exports/dataforseo/maps_serp_anchors_coney.csv`, `exports/localdominator/`.
- **Citations & links:** `Surfpoint_Citations_Links_Rationale.md`, `Surfpoint_Backlinks_Citations_Strategy.md`, `Surfpoint_All_Link_Citation_Opps.xlsx`, `Surfpoint_Disavow.txt`, `Surfpoint_Disavow_Decisions.csv`, `exports/dataforseo/backlinks/`.
- **Q2 strategy umbrella:** `Surfpoint_Recovery_Q2_2026_Custom_Strategy.md` (long), `Surfpoint_Recovery_Q2_2026_Strategy_Condensed.md` (executive).

Every CSV is re-pullable, every script in `exports/` or `deliverable/`. The strategy is meant to survive re-running the data at Q3 and adjusting bucket counts, not to depend on a specific snapshot.

---

*Prepared by HQDM Search Intelligence — 2026-05-12. Refresh at Q3 audit-back (August 2026).*
