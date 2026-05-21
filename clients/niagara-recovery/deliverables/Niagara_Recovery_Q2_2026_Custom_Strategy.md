# Niagara Recovery — Q2 2026 Custom Strategy

**Owner:** Aleksandar · **Date:** 2026-05-14 · **Phase:** Phase 1 Recovery — Strategy-first rollout
**Data sources (this engagement):** GSC 365d (3.7M imp / 14,700 clicks / 699 pages) · DataForSEO Maps SERP (6 WNY coords × 14 kws) · DataForSEO GMB (Niagara + 11 WNY competitors, full info + reviews + Q&A) · DataForSEO Backlinks (Niagara + 5 local competitors) · Live HTML crawl (10 sample pages: home, core, services, locations, doorways) · Sitemap (760 URLs)

---

## Posture (one paragraph)

Niagara Recovery owns Newfane completely (#1 on Maps for **all 14** core queries at the home pin) and is invisible for those same queries at every other Western NY coordinate scanned (Lockport, Niagara Falls, North Tonawanda, Buffalo, Amherst — **0 of 50** non-Newfane appearances). The site has the largest backlink profile in the local set (577 referring domains vs Beacon 186, Northpointe 139, Cazenovia 363) but the worst spam ratio (spam score **43** vs competitors' 3–24), suggesting active PBN backlash or prior agency residue. Of 760 indexed URLs, **670 are blog posts** (88%) absorbing 96% of impressions but converting near-zero patients — the blog ranks for "porn addiction", "vaping by country" and "alcohol purine charts" while the Niagara Falls / Buffalo geo queries (the actual revenue surface) sit at positions 12–32 with zero clicks. Q2 is **break-out + cleanup** mode, not site-rebuild like Surfpoint and not multi-pin spam like Arms Acres: defend Newfane, claim Niagara County + Buffalo metro through real geo content + GBP signal stacking, kill the blog dilution, fix the brand-naming entity confusion, and disavow the spam tail.

---

## Top 5 facts the team needs to know

1. **Maps cliff is severe.** Niagara is #1 (4.3★/47) for "drug rehab", "alcohol rehab", "detox", "addiction treatment", "rehab near me", "inpatient rehab", "alcohol detox", "opioid rehab", and brand-area queries — but **only at the Newfane pin**. At Lockport, Niagara Falls, North Tonawanda, Buffalo, and Amherst, Niagara is not in the Map Pack at all. Beacon Center (37 appearances), Horizon Health (multi-location: 38 combined), Cazenovia Recovery network (27), and Northpointe Council (24) own those coordinates instead.
2. **Brand-name conflict is sitewide.** Homepage title + footer + location-page bodies say **"Niagara Recovery"**. Every other indexed URL title (about, admissions, contact, treatments, areas-served) and the LocalBusiness JSON-LD on the homepage say **"Recovery Center of Niagara"**. GSC confirms the user confusion: top non-brand+brand-adjacent queries are split between "newfane recovery center" (85 clicks), "recovery of niagara" (54), "niagara recovery" (254), "recovery center of niagara" (1,222). Two entities, one business — Google can't merge them on its own.
3. **Service pages do not work.** 5 base `/services/<slug>` pages + 5 `/services/<slug>-in-newfane-ny` near-duplicates = **10 indexable service URLs**. Combined: **3 clicks / 365 days, 167 impressions, 0 conversions inferred**. The alcohol-detox page (and its dupe) ships the literal string `[phone number]` in body copy — a placeholder live in production. No JSON-LD on any service page.
4. **Location pages are doorway debt.** **94 `/locations/*` pages** generate **16 clicks / 365 days** combined. ~30% of them are templated "best-/most-trusted-/holistic-/dependable-/highly-recommended-" doorway URLs identical to the patterns we're killing on Surfpoint and Arms Acres. The Buffalo location page openly fabricates "...our facility in Buffalo, NY 14215..." despite the only physical facility being in Newfane (NAP-integrity risk for Maps).
5. **Backlink profile is the largest in the local set but the dirtiest.** 940 BLs / **577 RDs** / spam score **43** vs Horizon (666/3), Beacon (186/12), Cazenovia (363/24), Northpointe (139/13). Plenty of asset to keep, plenty of spam to disavow. Same SEO Anomaly / SEO Cartel / "site20" PBN signature we documented on Surfpoint will need a Search Console disavow run pending Aaron Gruenke confirm-or-clear.

---

## The 5 strategic levers (one per pillar)

### 1) On-Page — Brand consolidation + service-page rebuild + schema floor
**Why:** "Niagara Recovery" vs "Recovery Center of Niagara" is creating two parallel entity identities Google has been forced to disambiguate manually for 18+ months. Service pages (10 URLs, 3 clicks/yr) are the conversion floor and they're broken. 7 of 10 sampled pages have zero JSON-LD; the homepage LocalBusiness still references `niagararecovery.com/wp-content/...` image URLs from a prior WordPress build (the site is now Webflow).
**Mandate this quarter:** pick the canonical brand and propagate it to every title, meta description, schema block, and footer. Consolidate the 10 service URLs to 5 (canonicalize or 301 the Newfane variants into the parents — they share intent). Ship MedicalBusiness schema on home + service hub + 5 service pages. Delete the `[phone number]` placeholder.

### 2) Local / GBP — Defend Newfane, attack Lockport + Niagara Falls + Buffalo metro
**Why:** Niagara owns Newfane on all queries scanned and the closest competitors at the other coords are weak (Beacon 2.6★/7, Northpointe 3.4★/5 *unclaimed*). The patient catchment for an inpatient detox is 40 miles, not 4. Right now they are competing only in the smallest sub-market.
**Mandate this quarter:** photo blitz (5 → 25+ on the Niagara GBP, geotagged across Newfane + Lockport + Niagara Falls + Buffalo trips); answer the 4 unanswered Q&A items; weekly GBP Posts cadence focused on Lockport / Niagara Falls / Buffalo service-area mentions (3 named per post); add 3+ secondary categories matching what Horizon's locations carry (Mental health service, Rehabilitation center, Alcoholism treatment program). **Confirm with client whether service-area expansion in GBP is approved** — service area type GBP can reach the cliff coordinates without requiring additional addresses.

### 3) Content — Kill the off-vertical blog tail, double down on the 5 conversion-intent assets that already rank
**Why:** 670 blog posts → 96% of impressions, 62.8% of clicks, ~0 conversions inferred. The top blog assets (`/blog/vaping-statistics`, `/blog/alcohol-and-gout`, `/blog/how-long-does-it-take-to-break-a-porn-addiction`, `/blog/friend-passed-out-drunk-how-to-wake-up-a-drunk-person`) are pure informational — they will never convert a Western NY patient. Meanwhile 399 pages have **zero clicks in 365 days** — that is the blog tail strangling the rest of the site.
**Mandate this quarter:** blog audit using the standard decision matrix (KEEP / NOINDEX / DELETE-REDIRECT). Hard NOINDEX criteria: high-impression posts with <0.5% CTR on off-vertical topics (porn addiction, vaping by country, social media addiction, gambling addiction, phone addiction, coffee addiction, autism). Then take the **5 actually-converting non-brand queries** (`alcohol purine level chart` 149 clicks, `how to wake up a drunk person` 46 clicks, `low purine alcohol` 37 clicks, `legal drugs that make you happy` 22 clicks, `hydroxyzine for alcohol withdrawal` 19 clicks) and bolt named-insurance + intake CTAs onto them so the impression doesn't bleed.

### 4) Off-Page / Authority — Disavow tail + targeted citation + WNY editorial play
**Why:** Spam score 43 is materially higher than every local competitor and the top spam clusters look identical to the Surfpoint signature (PBN-pattern dofollow domains). Meanwhile Niagara is missing presence on the WNY institutional citations Horizon, Cazenovia, and CHS have (Erie County / Niagara County human-services directories, OASAS directory, SAMHSA findtreatment.gov). The disavow lifts spam-driven algorithmic risk and the citation push compounds with the Maps work in lever 2.
**Mandate this quarter:** pull spam-pattern subset from `backlinks.csv`, draft disavow.txt, ship pending Aaron Gruenke recognition pass. Submit/claim 4 priority citations: SAMHSA findtreatment, OASAS provider directory, NIAAA / 211 WNY human services, Niagara County mental-health resource list. Pitch one contributed Hudson Valley/WNY publication ("Buffalo News" health vertical or "WNY Refresh") — 6-week editorial lead time.

### 5) Reporting / CRO — Form deployment + Maps-grid baseline before measuring impact
**Why:** Niagara has 14,700 organic clicks / 365d and the GMB-tagged homepage alone gets **4,216 clicks** (3,429 + 787 from two GMB UTM variants). That's the entire pipeline of measurable demand and there is no documented form-conversion benchmark. Meanwhile we cannot measure whether the GBP / on-page work in M2-M3 moves the Maps cliff because no Local Dominator scans exist for Niagara yet.
**Mandate this quarter:** verify intake-form deployment on `/services/*` + `/locations/*` (above-fold + footer); GA4 `form_submit` event must fire (not just page-view); set up Local Dominator (or DataForSEO Maps recurring) grids at 6 coords × 8 priority queries weekly so M3 has a 6-week baseline to attribute the M1-M2 work against. **GA4 access blocked** during this engagement — `info@` token returned `ACCESS_TOKEN_SCOPE_INSUFFICIENT` for `properties/458221101`. Need re-auth before GA4 conversion attribution can be set up.

---

## Map-grid weak points → caveman pin moves

| Coord | NR appearances (this scan) | Q2 plan |
|---|---|---|
| `newfane` | **14/14** (#1, every query) | **Defend** — Posts cadence, photo blitz, Q&A complete |
| `lockport` | **0/14** | Attack — service-area GBP + content + citation against Northpointe (3.4★/5, unclaimed) and Horizon Lockport (3.5★/36) |
| `niagara_falls` | **0/10** | Attack — content + GBP against Horizon Pine Avenue (3.2★/26), Sundram Manor (5★/2 — noise), Beacon (2.6★/7 — weak) |
| `north_tonawanda` | **0/10** | Spillover from Buffalo + Niagara Falls work (no dedicated pin moves yet) |
| `buffalo` | **0/10** | Attack — content + GBP against Horizon Terrace House (3.2★/25) and Horizon Boulevard (3.4★/56) |
| `amherst` | **0/10** | Spillover from Buffalo work; Buffalo Rehab Group (4.9★/209) is non-substance physical rehab, doesn't compete clinically |

---

## GSC conversion levers — already-ranking assets to bolt CTAs onto (the 5)

| URL / query | clicks/365d | imp/365d | avg pos | CTR | Why it matters |
|---|---|---|---|---|---|
| `/blog/alcohol-and-gout` (q: "alcohol purine level chart") | 149 | 5,750 | 11.4 | 2.6% | Sober-curious medical-symptom searcher; high-intent for alcohol-detox upsell |
| `/blog/...wake-up-a-drunk-person` | 46 | 2,432 | 11.2 | 1.9% | Family-member crisis searcher → admissions-page deep link + intake form |
| `/blog/how-long-does-it-take-to-break-a-porn-addiction` | 1,185 | 223,455 | 33.3 | 0.5% | High volume but off-vertical — keep but bolt clear "this is not what we treat" + redirect to local mental-health resource |
| `/blog/legal-drugs-that-make-you-feel-good` | 383 | 18,339 | 23.0 | 2.1% | Gateway-substance searcher; bolt addiction-treatment intake CTA |
| `/blog/withdrawal-from-alcohol-using-hydroxyzine` | 152 | 16,474 | 53.9 | 0.9% | Active-withdrawal searcher = highest medical urgency; pos 53 → could 5–10× with title rewrite + on-page revision |

Combined non-brand blog clicks at top of the list: ~2,000 / 365d, ~270K imp. Pair with intake-form deployment (Lever 5) to convert.

---

## Explicit deferrals (not Q2 — Phase 2)

- **GA4 event-level conversion attribution** — blocked on token scope; re-auth pending
- **DataForSEO Search Volume + Keywords endpoint** — useful for cluster sizing in M3 but not required for the M1 cleanup work
- **DataForSEO OnPage crawl on KEEP+KEEP-AUDIT URLs** — runs after M1 decision matrix is committed
- **LegitScript / SAMHSA / CARF / OASAS verification** — admin work for client-facing trust signals; bundle for compliance owner ask
- **Net-new Niagara Falls / Lockport content pages** — depends on M2 GBP categories + service-area decision; if approved, batch in M3
- **LLM visibility audit (Perplexity / Gemini / OpenAI)** — once on-page brand consolidation is live (otherwise both brand entities skew the LLM citations)

---

## Cross-account risk note

Niagara Recovery, Surfpoint Recovery, and Arms Acres share the **same Webflow template + same /locations/-doorway pattern + same blog dilution profile + similar PBN-spam fingerprint**. This is upstream evidence — content team and/or prior agency systematized a single playbook across the Recovery portfolio. Per `feedback_treat_clients_standalone.md` this strategy doesn't lean on cross-account comparison for Niagara's deliverables, but flagging for HQDM internal: the same disavow framework, same doorway-classification matrix, and same brand-schema audit will likely apply to Conifer Park, Urban Recovery, and Elev8 Centers when those engagements open.
