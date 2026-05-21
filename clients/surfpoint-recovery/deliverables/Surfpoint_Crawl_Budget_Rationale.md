# Surfpoint Recovery — Crawl-Budget Hygiene

**Why this work, what it is, and the examples that make it concrete**

Prepared by HQDM Search Intelligence · 2026-05-12 · Aleksandar Spasevski

---

## What crawl budget actually means here

"Crawl budget" in Surfpoint's context is not the literal Google crawl quota. The site is small enough (878 indexable URLs) that Google's crawl capacity isn't the binding constraint — we know that because a single-day crawl spike on March 16 hit **524 requests** against a normal baseline of 70–100, which tells us Google is paying attention and will fetch as many URLs as it wants to.

The real constraint is the **attention budget** Google's quality systems allocate to re-evaluating the site. Of the 878 URLs Google currently knows about, roughly 213 are template debris, off-topic content, or doorway-pattern pages. Every time Google re-evaluates Surfpoint, it judges the site partly against pages we **don't want judged.** The cleanup is not a cosmetic exercise — it changes the **denominator** in Google's site-level quality calculation. Fewer-but-better-aligned URLs concentrate the quality signal on the surface we want indexed.

This is the work that turns the architecture pillar's per-URL decisions into actual deindex signals Google can act on. The architecture pillar decides; this pillar executes.

## The three waste patterns

The 213 mechanical-cleanup URLs are not a homogeneous pile — they split into three patterns, each with its own correct mechanism.

**Pattern 1 — Paginated artifacts and orphan stubs (~99 URLs).** Query-string variants like `?bca49ee9_page=2` and template debris that earn 0 clicks, 0 conversions, no backlinks, and target no topic. These are the easiest call: no content to salvage, no equity to preserve.

**Pattern 2 — Off-topic content with shallow traffic (~121 URLs).** Blogs on topics that share keyword surface with addiction treatment but do not serve the buyer. Examples: `/blog/list-of-phobias-most-common-fears` (23 sess/90d), `/blog/what-is-claustrophobia` (25 sess/90d), `/blog/melatonin-and-alcohol` (31 sess/90d — sleep, not addiction). The traffic is small enough that removal costs effectively nothing, and each one being indexed tells Google something inaccurate about what Surfpoint is for.

**Pattern 3 — Off-topic content with traffic that's the wrong audience (~7 URLs).** This is the counterintuitive lane. These pages earn real traffic but the audience is not Surfpoint's buyer:

| URL pattern | Sessions / 90d | Impressions / 90d | Why it's removed |
|---|---|---|---|
| `/blog/how-to-get-rid-of-alcohol-breath` | 853 | 230k | High traffic, wrong audience, off-topic for treatment |
| `/blog/rappers-with-drug-addiction` | 430 | — | Entertainment intent, not treatment intent |
| `/blog/viagra-and-alcohol` | 337 | — | Clickbait crossover, wrong audience |

The instinct on these is to "redirect them to a service page" — capture the traffic. That's the wrong call. A 301 from a breath/rappers/viagra post into a service page is a misrouting: the visitor intent doesn't match what they land on, the bounce is high, the page-level engagement signals on the destination get worse, and Google reads the receiving page as **less** relevant for its actual buyer queries, not more. The right call is NOINDEX with one internal link preserved from related content so an isolated cliff doesn't form mid-cleanup. The traffic was never going to convert; what matters is that the topical signal these pages give Google about what Surfpoint is *for* stops dragging the rest of the site down.

## The mechanics — why 410, why noindex+follow, why one deploy

Three implementation decisions are doing real work and each one is deliberate.

**HTTP 410 Gone, not 404, for the delete lane.** A 404 says "this URL might come back; please keep checking." Google keeps re-crawling 404s for months. A 410 says "this is gone on purpose." It signals **intentional removal** and triggers faster deindex — exactly what we want when the goal is to align the indexed surface to Google's already-issued cleanup decision.

**`<meta robots="noindex,follow">`, not `noindex,nofollow`, for the noindex lane.** The `follow` directive is the difference between a clean noindex and a wasted one. With `follow`, internal-link equity continues to flow through the URL even while it sits out of the index — so a noindex'd page still passes link juice to the KEEP pages it points at, until the Q3 audit-back decides final disposition. With `nofollow` we'd be throwing away the equity for no additional indexing benefit.

**One deploy window for the entire mechanical lane.** The 128 NOINDEX metas, the 99 410s, and the 43 doorway 301s all ship in a single M1 deploy alongside the sitemap rebuild. The reason is that Google re-evaluates the site on each crawl cycle. Spreading the operations across weeks creates **intermediate contradictory states**:

- A URL with a NOINDEX meta still listed in the sitemap (Google sees: "include this — but actually don't")
- An internal link from a KEEP page pointing at a 410'd URL (Google sees: "this page recommends a dead destination")
- A redirect chain through a soon-to-be-removed intermediate

Each intermediate state delays Google's re-evaluation. The single-window deploy maximizes the quality signal Google sees in one pass — the site shrinks, the waste disappears, and the sitemap matches reality, all on the same crawl.

## The dependency that has to land alongside

The 43 doorway redirects (27 NJ + 9 out-of-borough NYC + 7 deep doorway variants) all land on `/areas-served`. **`/areas-served` is currently broken** — it returns a low-quality response that won't sustain the equity transfer the 301s are meant to deliver.

This is the single most important coordination point in the M1 deploy. If `/areas-served` is not rebuilt in the same deploy window, the redirect chain terminates at a stub, the equity transfer doesn't happen, and the doorway pages are removed without the consolidation benefit. The rebuild is owned by Task 1 (landing-page work), not this pillar — but the cleanup cannot ship without it.

The same pattern applies to the 5 `/services/*` legacy URLs that redirect to `/treatments/[service]` sub-pages — each one only redirects **once its destination sub-page is built and live.** Redirecting `/services/benzodiazepine-detox-services` (91% of orphan service-page impressions, 1,925 in 365d) before `/treatments/benzodiazepine-detox` exists would land all that residual equity on a 404. Those redirects roll out in waves matching the sub-page build schedule.

## Proof — the waste profile and the asymmetry it creates

**The 270-URL mechanical cleanup, by pattern and footprint:**

| Pattern | URLs | Mechanism | Traffic profile per URL | Why this mechanism |
|---|---:|---|---|---|
| Paginated artifacts + orphan stubs | ~99 | **HTTP 410 Gone** | 0 clicks / 0 conv / 0 backlinks / off-topic | Intentional-removal signal; faster deindex than 404 |
| Off-topic, shallow traffic | ~121 | `meta noindex,follow` | <50 sess/90d, off-topic to addiction | Drops from index, preserves internal-link equity through Q3 |
| Off-topic, **high** traffic, wrong audience | **~7** | `meta noindex,follow` + 1 preserved internal link | **300–850+ sess/90d, up to 230k imp/90d** | Same noindex; preserved link prevents an isolated cliff |
| NJ + out-of-borough doorway redirects | 43 | **301** → `/areas-served` | Compliance + doorway-pattern | Consolidates residual equity onto a real catchment page |

**The asymmetry inside the 7-URL "high-traffic but wrong-audience" lane** — the counterintuitive call:

| URL | Sessions / 90d | Impressions / 90d | Conversions / 365d |
|---|---:|---:|---:|
| `/blog/how-to-get-rid-of-alcohol-breath` | 853 | **230,000+** | 0 |
| `/blog/how-long-doxycycline-stays-in-your-system` | 474 | (high) | 0 |
| `/blog/rappers-with-drug-addiction` | 430 | (high) | 0 |
| `/blog/viagra-and-alcohol` | 337 | (high) | 0 |
| **7-URL lane combined** | **~2,400+** | **300K+** | **0** |

These 7 URLs alone account for roughly **18% of the site's non-brand organic sessions** (~2,400 of ~13,700 sess/90d) and a multiple of that in impressions — while delivering zero conversions and a topical signal that tells Google Surfpoint is a site about breath, viagra, doxycycline and rappers, not addiction treatment. The instinct on this lane is "301 the traffic into a service page." That's the wrong call: a 301 from a breath/rappers post into `/treatments/alcohol-detox` is an intent mismatch that drives bounce up on the destination, drops engagement on the receiving page, and tells Google the destination is *less* relevant for its actual buyer queries. NOINDEX with one preserved internal link is correct.

**The denominator change Google will see post-deploy:**

| Signal | Before M1 deploy | After M1 deploy |
|---|---|---|
| URLs in indexed surface | 878 (with ~213 mechanical-waste URLs) | **~665** (waste removed; AUDIT lane preserved for individual review) |
| Share of indexed surface that is core-topical | ~76% (admixed with 24% waste) | **~100%** (or routed to AUDIT for triage) |
| What Google evaluates against | A mix of addiction treatment + breath / phobias / rappers / NJ doorways | A focused addiction-treatment surface |

The cleanup doesn't move conversions directly. It moves the **denominator** in Google's site-level quality calculation. The conversion lift comes from the landing-page rebuild landing into a site Google has stopped discounting.

## What this work explicitly is not

- It is **not the off-page disavow.** The backlink disavow runs in parallel because it has its own 2–4 week GSC processing window and is independent of on-page mechanics. Bundling them would gate one on the other for no reason.
- It is **not a "remove anything with low traffic" pass.** The architecture pillar's per-URL evidence model is what decides what lands in the cleanup; this pillar only executes on URLs that have already cleared the topical + backlinks + traffic gates.
- It is **not a sitemap-only fix.** A NOINDEX meta tag without removing the URL from the sitemap is contradictory; a 410 without sitemap update keeps the URL discoverable. The sitemap rebuild ships in the same deploy.
- It is **not permanent for the noindex lane.** The `follow` directive plus the Q3 audit-back are designed to make this reversible. If a noindex'd URL gains backlinks or starts ranking in the 30–60 day window between deploy and Q3, the meta tag comes off and the page re-enters the index within a crawl cycle.

## What "working" looks like for this pillar

Two crawl cycles (~2 weeks) after the M1 deploy, the GSC Coverage report should show the **128 noindex'd URLs move out of the indexed count**, the **99 410'd URLs disappear from the index**, and the **43 redirected URLs consolidate to `/areas-served`**. Daily impressions continue to dip for those ~2 weeks (this is correct — Google needs to register the cleanup), then bottom out within 30–45 days as the remaining surface is re-evaluated as cleaner. The recovery slope after the bottom is the headline measure of whether the cleanup landed.

The crawl-budget work alone doesn't move conversions. It moves the **denominator** in Google's quality calculation so that the landing-page work and the GBP optimization land into a site Google has stopped discounting.

---

*Supporting per-URL specs and HTTP-level mechanisms in `Surfpoint_Site_Structure_Link_Management_Explainer.md`, `Surfpoint_Task4_Index_Hygiene_Brief.md`, and the action ledger in `exports/site_structure_link_management.xlsx`.*
