# Surfpoint Recovery — GBP Optimization

**Why this work, what it is, and the examples that make it concrete**

Prepared by HQDM Search Intelligence · 2026-05-12 · Aleksandar Spasevski

---

## The paradox — the listing is already winning

Inside Brooklyn proper, against true outside competition, Surfpoint at **4.8★ / 120 reviews** is the only listing combining a 4.8+ rating with 100+ review volume. The next-nearest direct competitors on volume are ACI Inpatient (3.8★ / 71) and Genesis Detox (3.5★ / 63); the closest on rating-and-volume is Ascendant Detox NYC (4.8★ / 284) — but Ascendant operates from Manhattan's Upper East Side, a different catchment and a different map pack. On the Coney-Island-centered DataForSEO grid, Surfpoint ranks **#1 across every priority service anchor** — alcohol rehab, drug rehab, drug detox, alcohol detox, addiction-refined inpatient rehab. The Local Dominator trend on the tracked `alcohol rehab brooklyn` anchor moved from rank 1.88 / 87% top-3 in October 2025 to **1.47 / 96% top-3 in April 2026**. The review base moved from 91 / 4.5★ to 120 / 4.8★ in 16 days. And the GMB-tagged session cohort converts at **2.53% versus 0.32% on all-Organic-Search** — roughly 8× more productive than the website at large.

So why touch the listing at all?

Two reasons. **First, the listing is winning despite being structurally incomplete.** Nine field-level leaks are individually cheap to fix and collectively shape Knowledge-Panel completeness, rich-feature surface, and audit risk inside an OASAS-regulated vertical. Closing them doesn't risk the win; it deepens it. **Second, the depth gap against the competitive leader is a lever for keyword surface Surfpoint doesn't currently surface on.** Ascendant's nine-category configuration extends keyword reach across `counselor brooklyn`, `psychiatrist near me`, and other adjacent intents — surfaces Surfpoint provides the underlying service for but doesn't currently rank for, because the category configuration doesn't expose them.

## The depth gap, quantified

| Field | Surfpoint | Competitive leader | What closing it does |
|---|---|---|---|
| Categories | 5 | Ascendant NYC: 9 | Adding Counselor (defensible) extends keyword reach to adjacent intents |
| Attributes | 5 | Mountainside: 7 | `service_options:has_onsite_services` + `accessibility:has_wheelchair_accessible_parking` are cheap, defensible additions |
| Photos | 9 (no cover) | Ascendant: 90 / Mountainside: 30 | Surfpoint is second-lowest in the set; staff/facility/credential photos signal an actively-managed listing |
| Q&A | 4 (0 answered) | ACI: 10, Urban: 15 | Three of the four existing Q's are owner-seeded then never answered — worse than no Q&A |
| Booking link | **none** | **none across the full set** | The cheapest competitive differentiator — see below |
| Description | 471/750 chars, generic | n/a | Currently zero mention of OASAS, CARF, MAT, dual diagnosis, insurance carriers, or Coney Island |

The **booking link finding** is the unusual one. Across the eleven-competitor set, no listing has a booking URL configured. Adding one surfaces a "Book online" CTA in the knowledge panel below the call button. Addiction-treatment intent is high-urgency but also high-friction — a non-trivial fraction of research-phase visitors aren't ready to dial a phone but will commit to a callback. This is the single highest-leverage / lowest-cost change in the whole audit, and it is **uncontested** in the competitor set.

The **description rewrite** is the second cheapest. The current 471-character description ("Situated in Brooklyn, Surfpoint Recovery is a premier destination for compassionate and comprehensive care...") is boilerplate. It does not mention the OASAS license, the CARF Center of Excellence accreditation, MAT (buprenorphine, naltrexone), dual-diagnosis treatment, insurance carriers (Medicaid / Aetna / Cigna / BCBS), or Coney Island geography. The rewrite packs all of those into the 750-character budget — every signal that influences the click decision when the knowledge panel surfaces.

## Proof — the win is real, the audit-risk is time-decaying

**Map-pack dominance trend** (Local Dominator, tracked anchor `alcohol rehab brooklyn`, Coney Island grid center, 5 scans Oct 2025 → Apr 2026):

| Scan date | Avg rank | Top-3 grid % | Trend |
|---|---:|---:|---|
| 2025-10-24 | 1.88 | 87% | baseline |
| 2025-11-22 | 1.74 | 89% | ↑ |
| 2026-01-22 | 1.62 | 92% | ↑ |
| 2026-02-26 | 1.55 | 94% | ↑ |
| 2026-04-22 | **1.47** | **96%** | ↑ |

Continuous improvement across 6 months on the tracked anchor. The DataForSEO multi-keyword grid (Coney Island center, 2026-05-08) shows Surfpoint ranks **#1 on every priority addiction-treatment anchor** — alcohol rehab, drug rehab, drug detox, alcohol detox, addiction-refined inpatient rehab — with Spring Hill Wellness and LSA Recovery Coney consistently at positions 2–3.

**Review-base competitive position** (DataForSEO Business Data, 2026-05-08), Brooklyn proper, true outside competition only:

| Listing | Rating | Reviews | 90-day velocity | Locale |
|---|---:|---:|---:|---|
| **Surfpoint Recovery** | **4.8★** | **120** | **26** | Coney Island |
| ACI Inpatient | 3.8★ | 71 | 5 | Brownsville |
| Spring Hill Wellness | 4.8★ | 21 | 1 | Sheepshead Bay (outpatient) |
| Under Angels Wings | 5.0★ | 35 | 1 | Sunset Park |
| Genesis Detox | 3.5★ | 63 | 1 | Sunset Park |
| Realization Center | 4.7★ | 85 | 1 | Brooklyn Heights (unclaimed) |

Surfpoint is the **only Brooklyn listing combining 4.8+★ with 100+ reviews** and is acquiring **~5× the 90-day velocity** of the next-nearest direct competitor (ACI at 5). The closest match on rating-and-volume is Ascendant Detox NYC (4.8★/284) — different catchment, different map pack.

**Conversion economics that justify the resilience-layer framing:**

| Cohort | Conversion rate | Read |
|---|---:|---|
| GMB-tagged sessions *(GA4 custom segment, `source=gmb`)* | **2.53%** | Map-pack visitors arrive with high intent |
| All-Organic-Search | 0.32% | Includes blog + thin service-page traffic |
| **Ratio** | **~8×** | The GBP-driven cohort is roughly eight times more productive than the website at large |

*Attribution note:* the GBP listing URL carries `?utm_source=gmb&utm_medium=click&utm_campaign=gmb_listing`. The `utm_medium=click` value isn't in GA4's default channel-grouping rule set, so these sessions land in **Direct/Unassigned**, not Organic Search. The 2.53% figure is from a custom GA4 segment (`sessionSource contains 'gmb'`); the 0.32% is the all-Organic-Search rate from the standard channel grouping. Changing `utm_medium=click` to `utm_medium=organic` on the listing URL would route these sessions into Organic Search by default (detail in `Surfpoint_GBP_Audit_2026-05-12.md` §3.5).

*Tracking caveats:* `gmb_click` (584/90d) and `contact_form_submit` (61/90d) fire in GA4 but aren't flagged as conversion events; `form_submit` fires 237×/90d with only 58 flagged. The 2.53% / 0.32% rates above are computed from the in-scope phone + form_submit + email composite — both numerator and denominator share the same definition, so the ratio holds, but absolute lead volume is understated. GA4 admin fixes pending.

**The audit-risk content, quantified by time-on-listing (as of 2026-05-12):**

| Reviewer | Stars | Time unaddressed | Embedded content | Exposure type |
|---|:---:|---:|---|---|
| Jacob Gaik (RN) | 5★ | **~140 days** | "nurses be having conversations there Bluetooth while talking to and dispensing meds to patients" | **OASAS / med-admin protocol — credentialed source** |
| Pedro | 5★ | ~390 days | "Please tell Paul to STOP vaping" | Staff conduct on premises |
| Nick Tonjuk | 1★ | **~310 days** | "Stole my property and said 'you'll just have to take the loss'" | **Theft accusation — brand-search visible** |
| Michael Mabe | 1★ | ~165 days | Patient-mix stigma content | Operational |
| s k | 1★ | ~325 days | "Lazy staff. Lots of food. No place to walk. Very noisy." | Operational |

Each day adds compounding exposure to OASAS auditors, referring hospital social workers, malpractice attorneys, and due-diligence searchers. The owner-response backfill closes the exposure inside one sprint without touching the star rating — the cheapest, highest-leverage mitigation in the entire pillar.

## The audit-risk finding — the single most damaging asset on the listing

The highest-leverage finding in the GBP audit is not the depth gap. It is the **owner-response rate of 0% across 120 reviews.** Inside that zero are two compounding problems.

A 20-week-old 5-star review from **Jacob Gaik (RN-credentialed)** describes nurses using Bluetooth headphones during medication administration. The review is 5-star — it lifts the average — but its **text** is the content an OASAS auditor, a referring hospital social worker, or a malpractice attorney finds on first search. The reviewer's credential makes the claim weighty; the zero owner response over 20 weeks reads as confirmation. A 1-star **theft accusation** (Nick Tonjuk, July 2024 — "Stole my property and said 'you'll just have to take the loss'") has been live 11 months unanswered.

In an OASAS-regulated vertical, the audit-risk content sitting public-and-unaddressed is the most damaging asset on the listing — not because of its effect on the star rating, but because the listing is **what regulators and referring providers see first when they vet the facility.** The owner-response backfill is the cheapest, fastest mitigation available; it doesn't change anything visible to a casual searcher scrolling through 5-star reviews, but it changes everything visible to a due-diligence reader. The response template doesn't admit liability — it acknowledges, redirects to a private channel, and signals an actively-managed listing.

The review velocity itself (29 reviews in 16 days, April–May 2026) is strong but **brittle**. Roughly 70% of recent reviewers have 1 lifetime review, and ~30 of the visible reviews repeat the same template signature (same 10–15 staff names, same "thank you / just for today group" phrasing). This is the predictable consequence of asking inpatient clients to review at discharge — structurally legitimate in healthcare — but Google's spam classifier flags clusters of single-purpose accounts naming the same staff. The fix is operational, not technical: diversify the review-request UX (encourage 2–3 sentences in own words mentioning specific service, not just staff names), source diversification (family members, referring providers, post-90-day-aftercare clients), and a 48-hour owner-response protocol on every new review.

## The service-area dilution finding

The current GBP service area lists 20 neighborhoods spanning Brooklyn + Queens (Howard Beach, Belle Harbor, Rockaway Park) + Bedford-Stuyvesant + Bushwick + Brownsville. Per Google's policy, the service-area attribute is intended for businesses that **travel to client locations** — plumbers, mobile services. Surfpoint is **inpatient-only**; clients come to the facility. A business with a public storefront AND a wide service-area attribute can have its rank distance algorithm partially down-weighted, and the wide service area dilutes the geo precision that the Coney-Island grid dominance is built on. Several neighborhoods listed (Bedford-Stuyvesant, Bushwick, Brownsville) don't even match the real catchment defined in `client.json`.

The right move is to **remove the service area entirely.** The map-pack grid will continue to surface for queries from any neighborhood inside the proximity ring driven by category + reviews + on-page geo signals. The grid dominance is already proven; it does not depend on the service-area attribute. The conservative fallback is to trim to the nine South-Brooklyn neighborhoods that match the real catchment. Either path removes the dilution; full removal is cleaner.

A small companion fix: the GBP address line currently reads `2316 Surf Ave Entrance on, W 24th St, Brooklyn, NY 11224` — the "Entrance on West 24th Street" qualifier got embedded into address line 1, producing a string that hashes differently from the website (`2316 Surf Avenue, Brooklyn, NY 11224`) and most citation directories. This breaks NAP-match deduplication used by Yelp, Foursquare, BBB, Apple Maps, and Bing Places, and matters because the citation pillar depends on consistent NAP to lift cleanly.

## What this work explicitly is not

- It is **not a unilateral cleanup of the keyword-stuffed business name.** The current name (`Surfpoint Recovery: Inpatient Drug & Alcohol Rehab & Detox In Brooklyn, NY`) is a documented Google policy violation, but the same pattern is used by ACI Inpatient, Mountainside NYC, Ascendant Detox NYC, and the broader addiction-treatment vertical. Unilateral cleanup surrenders the keyword surface to peers who are also violating policy. The finding is documented in the account risk log; the action is deferred until competitive parity moves.
- It is **not adding clinical-role categories without staff credential verification.** Falsely claiming Psychiatrist or Psychologist is suspension-grounds. Counselor is defensible per the CRD (CBT-grounded dual-diagnosis treatment is offered); the others gate on a staff-roster check.
- It is **not over-suffixing services with geo modifiers.** Only 4 of 16 primary-category services currently use the "in Brooklyn, NY" suffix, and that ratio is correct — over-suffixing every service trips Google's spam heuristics. The work is normalizing the ratio, not maximizing it.
- It is **not chasing review volume as the headline metric.** Velocity matters, but pattern diversity matters more at this point in the curve. Continued velocity without the response protocol and the source-diversification changes risks tripping Google's review filter at the exact moment the listing is most exposed.

The GBP pillar is the **resilience layer.** While the architecture cleanup, the landing-page rebuild, and the citation work are landing across the next 90 days, the GBP keeps revenue flowing at its current 8× conversion rate. The optimization work makes that resilience deeper, not weaker.

---

*Supporting field-by-field state, competitor benchmarks, and review pattern audit in `Surfpoint_GBP_Audit_2026-05-12.md` and `exports/dataforseo/gmb/`.*
