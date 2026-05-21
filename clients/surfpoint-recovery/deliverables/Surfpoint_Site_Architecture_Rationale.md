# Surfpoint Recovery — Site Architecture Work

**Why this work, what it is, and the examples that make it concrete**

Prepared by HQDM Search Intelligence · 2026-05-12 · Aleksandar Spasevski

---

## The problem we are responding to

Between February 7 and May 4, 2026, Google's quality systems issued a re-evaluation signal against surfpointrecovery.com. The site lost **−77% of daily impressions** and **−37% of URLs known to Google** in 87 days, and Search Console flagged **756 URLs as "not indexed"** — 562 of those classified specifically as "Crawled — currently not indexed," meaning Google fetched the page, evaluated it, and chose not to keep it. A single-day crawl spike of 524 requests on March 16 confirms this was a system-level re-evaluation event, not a manual action.

Those 756 not-indexed URLs are an instruction from Google about which pages have failed its quality threshold. The strategic question is not whether to clean up — Google has already imposed the cleanup. The question is **which URLs survive, which die, and which get rewritten,** because the cost of getting either side wrong is large.

## Why two naive approaches both fail

A delete-first approach (kill anything with under N clicks and zero conversions) would auto-remove roughly 450 URLs. Most are blog posts on **core addiction-treatment topics** — withdrawal protocols, detox timelines, recovery process explanations. In an OASAS-regulated, YMYL-classified vertical, those posts are the topical-authority substrate that lets Google decide which sites get to rank for transactional queries in the first place. Mass-deleting them weakens the foundation the service-page rebuild stands on.

A preserve-first approach (leave everything, just improve the homepage) leaves 213 URLs — paginated artifacts, off-topic content like `/blog/viagra-and-alcohol` or `/blog/rappers-with-drug-addiction`, and 43 NJ + out-of-borough doorway pages from a NY-only OASAS-licensed facility — actively dragging down the site-level quality signal Google evaluates. That signal is what determines whether the remaining 562 "Crawled — currently not indexed" pages ever come back.

Surgical, per-URL decisions are the only correct response.

## The evidence model — four signals, no single-data-point kills

Every URL on the site (878 indexable) was scored against four orthogonal signals:

| Signal | What it tells us |
|---|---|
| **GA4** sessions / users / conversions | Is anyone actually using this page? |
| **GSC** clicks / impressions / position / 90-day trend | Is Google still surfacing this page, and is the trend healthy? |
| **DataForSEO Backlinks** referring domains per URL | Does this page hold equity we'd lose by killing it? |
| **Topical relevance** (core / adjacent / off-topic) | Does this page serve the addiction-treatment buyer, or something else? |

The combination decides the action. The rule of thumb: **a URL is never killed on a single data point.** A blog with 0 GSC clicks survives if it has 1 conversion in GA4 plus a real backlink. A blog with 50K impressions is removed if it is off-topic, bounces hard, and serves the wrong audience.

The v1 framework — GA + GSC alone — would have auto-routed 447 URLs to NOINDEX and 223 to DELETE. The v2 topical+backlinks overlay re-bucketed **453 of those into AUDIT** for individual review. The headline rule: **0 conversions does not equal auto-prune.** A blog routes to NOINDEX or DELETE only if it is *also* off-topic *and* has no backlinks *and* has fewer than 5 clicks in 365 days.

## What gets done — the three action families

Every URL lands in one of three families:

**KEEP / KEEP-AUDIT (47 URLs).** The revenue and utility surface (homepage, `/treatments`, `/admissions`, `/contact-us`, `/faq`, `/reviews`, `/careers`) plus real-catchment Brooklyn location pages (Coney Island, Bay Ridge, Marine Park, Sheepshead Bay, etc.) and a handful of high-traffic blogs that earn their place (e.g. `/blog/the-history-of-drugs` at 523 sessions/90d). These stay at HTTP 200; some get a light review to confirm they still do their job.

**AUDIT (555 URLs).** Individual 5-minute triage per URL, split across three monthly batches. Most are core-topic blogs that the v1 framework would have killed but the topical overlay preserved — for example, `/blog/withdrawal-from-alcohol-using-hydroxyzine` (244 sess/90d) or `/blog/how-long-does-it-take-for-weed-to-leave-your-system` (306 sess/90d). Each one resolves to KEEP-with-an-added-internal-link to a service page, REWRITE for service-page alignment, NOINDEX if shallow, or REDIRECT if it duplicates an existing KEEP page.

**NOINDEX / DELETE / REDIRECT (276 URLs).** The mechanical lane — 128 NOINDEX + 99 DELETE + 43 doorway 301s + 5 legacy `/services/*` 301s + light cleanup. Used on off-topic shallow content like `/blog/list-of-phobias-most-common-fears` or `/blog/melatonin-and-alcohol`; on paginated artifacts and orphan stubs; on the 43 NJ + out-of-borough doorway pages; and on the 5 legacy `/services/*` URLs being replaced by `/treatments/[service]` counterparts.

The action lane is the *decision*. Which HTTP-level mechanism executes the decision is a separate question, and the choices are doing real work.

## How it ships — three deliberate mechanism choices

The cleanup is not "noindex some things, delete others." Three implementation decisions are load-bearing, and the obvious alternative is wrong in each case.

### 1. HTTP 410 Gone, not 404, for the delete lane

A 404 says "this URL might come back; please keep checking." Google keeps re-crawling 404s for months — the URL stays in the index discovery queue, the quality-signal denominator stays stale, and the cleanup signal we want Google to act on is diluted.

A 410 says "this is gone on purpose." It signals **intentional removal** and triggers faster deindex. Exactly what we want when the goal is to align the indexed surface to a cleanup decision Google has already partially issued (756 not-indexed flags).

The 99 paginated artifacts and orphan stubs (`?bca49ee9_page=2` query-string debris, template-test pages, etc.) all ship as 410. No content to salvage, no equity to preserve, no ambiguity for Google to keep checking.

### 2. `<meta robots="noindex,follow">`, not `noindex,nofollow`, for the noindex lane

The `follow` directive is the difference between a clean noindex and a wasted one. With `follow`, internal-link equity continues to flow **through** the URL even while it sits out of the index — so a noindex'd page still passes link juice to the KEEP pages it points at, until the Q3 audit-back decides final disposition. With `nofollow` we'd be throwing away the equity for no additional indexing benefit.

All 128 NOINDEX'd URLs use `noindex,follow`. The reversibility property (remove the meta tag → re-indexes within a crawl cycle) depends on this choice; so does the Q3 audit-back's ability to read what would have happened to KEEP-page metrics in the cleanup's absence.

### 3. One deploy window, not a slow rollout

The 128 NOINDEX metas, the 99 410s, the 43 doorway 301s, and the 5 legacy `/services/*` 301s all ship in **a single M1 deploy** alongside the sitemap rebuild. Spreading the operations across weeks creates **intermediate contradictory states** that Google reads as noise, not signal:

- A URL with a NOINDEX meta still listed in the sitemap → "include this — but actually don't"
- An internal link from a KEEP page pointing at a 410'd URL → "this page recommends a dead destination"
- A redirect chain through a soon-to-be-removed intermediate → quality dilution on the receiving end
- A 301 chain to a destination page that hasn't been built yet → equity transfer to a stub

Each intermediate state delays Google's re-evaluation by another crawl cycle. The single-window deploy maximizes the quality signal Google sees in one pass — the site shrinks, the waste disappears, the sitemap matches reality, all on the same crawl. Coordination dependencies — `/areas-served` rebuilt before the 43 doorway redirects fire, the `/treatments/[service]` sub-pages live before each `/services/*` 301 fires — are owned by the landing-pages pillar but must land **inside the same window** for the deploy to function as intended.

## The counterintuitive lane — high-traffic but wrong-audience

The 128-URL NOINDEX lane splits two ways. Most of it (~121 URLs) is off-topic shallow content: `/blog/list-of-phobias-most-common-fears` at 23 sess/90d, `/blog/melatonin-and-alcohol` at 31 sess/90d. Easy calls; the traffic is small enough that removal costs nothing, and each one being indexed tells Google something inaccurate about what Surfpoint is for.

The counterintuitive sub-lane (~7 URLs) is off-topic with **real** traffic targeted at the wrong audience:

| URL | Sessions / 90d | Impressions / 90d | Conv / 365d |
|---|---:|---:|---:|
| `/blog/how-to-get-rid-of-alcohol-breath` | 853 | **230,000+** | 0 |
| `/blog/how-long-doxycycline-stays-in-your-system` | 474 | high | 0 |
| `/blog/rappers-with-drug-addiction` | 430 | high | 0 |
| `/blog/viagra-and-alcohol` | 337 | high | 0 |
| `/blog/list-of-phobias-most-common-fears` | (off-topic, low) | — | 0 |
| **7-URL lane combined** | **~2,400+** | **300K+** | **0** |

These 7 URLs deliver roughly **18% of the site's non-brand organic sessions** with **zero conversions** — and a topical signal that tells Google Surfpoint is a site about breath, viagra, doxycycline, and rappers, not addiction treatment.

The instinct is "301 the traffic into a service page" — capture the sessions. That's the wrong call. A 301 from a breath/rappers/viagra post into `/treatments/alcohol-detox` is an intent mismatch: the visitor lands on something they didn't ask for, bounces hard, the destination's page-level engagement signals get worse, and Google reads the receiving page as **less** relevant for its actual buyer queries, not more. The traffic was never going to convert; what matters is that the topical signal these pages give Google about what Surfpoint is *for* stops dragging the rest of the site down.

The right call: NOINDEX with **one internal link preserved** from related content so an isolated cliff doesn't form mid-cleanup. Same `noindex,follow` mechanism as the rest of the lane; just an extra rule on the preserved-link side.

## Proof — the signal we are responding to, and what the methodology preserved

**The 87-day de-indexing signal (GSC Coverage + Crawl Stats, Feb 7 → May 4, 2026)**

| Metric | Reading |
|---|---|
| Total URLs known to Google | **−37%** in 87 days |
| Daily impressions | **−77%** peak-to-current |
| URLs flagged "not indexed" in Coverage | **756** |
| └ Of those: "Crawled — currently not indexed" | **562** (Google fetched, evaluated, chose not to keep) |
| Single-day crawl spike (Mar 16) | **524 requests** vs. ~70–100 baseline (system-level re-evaluation event) |

This is the trigger. Google has already decided to discount a majority of the indexed surface; the per-URL framework decides which pages survive that decision.

**v1 vs v2 — what the topical + backlinks overlay changed (878 URLs, decision_matrix_with_topical.csv)**

| Routing | v1 — auto-bucketing on traffic data alone | v2 — with topical + backlinks overlay |
|---|---:|---:|
| Auto-removed *(NOINDEX + DELETE + DELETE+REDIRECT)* | **670** (76% of site) | **261** (30%) |
| Routed to individual review *(AUDIT, all sub-lanes)* | — | **555** |
| Kept or lightly reviewed *(KEEP + KEEP-AUDIT)* | 47 | 47 |
| Redirected *(REDIRECT, standalone)* | ~60 | 14 |
| **Total** | **877** | **877** |
| **Net effect: URLs preserved from auto-removal** | | **453** |

A naive framework would have stripped 76% of the site to mechanical-cleanup lanes on traffic data alone. The topical + backlinks overlay re-routes 453 of those into AUDIT — each gets 5 minutes of human triage before any irreversible action is taken.

**What "rescued from auto-removal" looks like in practice** — four representative URLs the v1 rule would have NOINDEX'd or DELETE'd, and the reason the overlay saved them:

| URL | Why v1 wanted to kill it | Why v2 kept it for triage |
|---|---|---|
| `/blog/how-to-help-someone-with-a-porn-addiction` | 0 conversions in 365d | 901 sess/90d, core addiction topic, ranks position 17 — rewrite candidate |
| `/blog/withdrawal-from-alcohol-using-hydroxyzine` | 0 conversions, weak rank | 244 sess/90d, core detox-protocol topic, clinical specificity |
| `/blog/how-long-does-it-take-for-weed-to-leave-your-system` | 0 conversions | 306 sess/90d, core substance-Q topical surface |
| `/blog/dopamine-detox-timeline-explained` | Low traffic | Core "detox" topical anchor; supports service-page authority |

These are the topical-authority assets that let Google decide Surfpoint should be allowed to rank for transactional addiction-treatment queries at all. Auto-deleting them is the failure mode the methodology is designed to prevent.

**The denominator change Google sees after the M1 deploy:**

| Signal | Before M1 deploy | After M1 deploy |
|---|---|---|
| Indexed surface | 878 URLs (~213 mechanical-waste URLs admixed) | **~665** (waste removed; AUDIT lane preserved for individual triage) |
| Share of indexed surface that is core-topical | ~76% | **~100%** (or routed to AUDIT) |
| What Google evaluates against | Addiction treatment + breath / phobias / rappers / NJ doorways | A focused addiction-treatment surface |

The cleanup doesn't move conversions directly. It moves the **denominator** in Google's site-level quality calculation, so that the landing-page rebuild and the GBP optimization land into a site Google has stopped discounting.

## Why this is defensible — reversibility and the Q3 audit-back

Every action lane has a reversal path. **NOINDEX:** remove the meta tag, page re-indexes within a crawl cycle (the `follow` directive keeps equity flowing through internal links the whole time). **DELETE (410):** restore the page, Google re-discovers via sitemap + internal links (equity is gone after ~30 days, so reversal cost grows with time). **REDIRECT:** remove the 301, source page returns.

The Q3 (August 2026) audit-back is the scheduled checkpoint. We re-pull GSC Coverage + per-URL traffic for every removed and triaged URL, and we re-bucket on evidence: removed pages that lost no value stay removed; rewrites that moved metrics get promoted; rewrites that didn't move get demoted back to remove.

Three site-level metrics are tracked weekly so we catch direction-changes early: total URLs known to Google, daily impressions, average position on tracked queries. If any of those moves the wrong direction for two consecutive weeks, new task creation pauses and the team reviews what was deployed in that window. The per-URL audit trail makes the bad change traceable to a specific deploy — that is what makes routing several hundred URLs to NOINDEX or DELETE trustworthy to leadership and to Google.

## What this work explicitly is not

- It is **not a blog purge.** The topical overlay exists specifically to prevent that outcome.
- It is **not preservation-by-default.** 213 URLs being actively crawled while contributing nothing to the buyer journey is a cost we are choosing to stop paying.
- It is **not permanent.** Every decision is reversible, measured, and scheduled for re-evaluation against fresh data in 90 days.

The architecture work is the precondition for the rest of the Q2 program — the GBP optimization, the landing-page rebuilds, the citations and links work — to land into a site Google has stopped discounting.

---

*Supporting evidence and per-URL decisions in `Surfpoint_Site_Architecture_Audit_Methodology.md`, `Surfpoint_Site_Structure_Link_Management_Explainer.md`, and `exports/decision_matrix_with_topical.csv`.*
