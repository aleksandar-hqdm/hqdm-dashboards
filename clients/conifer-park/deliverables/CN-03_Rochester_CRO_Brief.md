# CN-03 — Rochester CRO Diagnosis Brief

**Page:** /outpatient/rochester
**Owner:** Marija (Reporting/CRO) + Aleksandar
**Month:** M1 (output feeds SP-05 Rochester rebuild in M3)
**Status:** Brief — replace with diagnosis findings after GA4 funnel diff runs

---

## The Rochester paradox

Rochester is the highest-impression outpatient page on the site but the worst-converting one.

| Metric | Rochester | Site average (6 outpatient pages) |
|---|---|---|
| GSC impressions 365d | **51,508** | ~30,300 (highest by a margin) |
| GSC clicks 365d | 422 | ~365 |
| GSC position (page-level avg) | 9.36 | ~8.1 |
| **GSC CTR** | **0.819%** | **~1.1%** (Rochester is the worst) |
| GBP rating × reviews | **2.7★ × 36** | 3.5★ × 27 (Rochester has the most reviews + lowest rating combo) |
| GBP photos | 5 | 11 average |

**Compare Glens Falls** as the counter-example: 15,672 imp at pos 10.04 but **1.627% CTR** — twice Rochester's CTR at slightly worse position. The lever isn't position; it's everything that happens after the user lands.

## Query-level data (180d)

Verified via GSC queries export:

| Query | Imp | Clicks | Avg position | CTR |
|---|---:|---:|---:|---:|
| outpatient rehab rochester ny | 137 | 4 | 3.28 | 2.92% |
| drug rehab rochester ny | 188 | 2 | 4.46 | 1.06% |
| rehab rochester ny | 205 | 3 | 9.18 | 1.46% |
| rehabs in rochester ny | 61 | 1 | 9.21 | 1.64% |
| inpatient rehab rochester ny | 57 | 2 | 11.42 | 3.51% |
| alcohol rehab rochester | 123 | 0 | 12.20 | 0.00% |
| drug rehab rochester | 76 | 0 | 19.63 | 0.00% |
| rehab facilities rochester ny | 62 | 0 | 4.45 | 0.00% |
| alcohol rehab rochester ny | 47 | 0 | 8.55 | 0.00% |

**The pattern:** When Rochester ranks top-5 it converts (3.28 → 2.92%). When it ranks 9+ it bleeds. The 51K aggregate impressions are dragged down by long-tail mid-position queries where users see Conifer in the SERP next to better-rated competitors and click elsewhere.

## Hypothesis tree (to test in GA4 funnel diff)

**H1 — Rating drag on click-through (most likely)**
- Rochester GBP is 2.7★ × 36. Three-star floor with 36 reviews = high social proof of a bad experience.
- Users see the rating in the SERP rich snippet and skip the result.
- **Test:** Compare Rochester organic CTR to Glens Falls (3.9★ × 25) at similar positions — same query type, different rating, different CTR.
- **If confirmed:** rating-lift work (LG-UP-06 intake-side review velocity SOP) is the primary fix; on-page changes are secondary.

**H2 — Page architecture (intake form / hero / mobile rendering)**
- Page may not have an inline intake form (Plattsburgh has one — converts at 1.08% on similar position).
- Hero may not lead with the right hook (transit access? sliding fee? insurance?).
- Mobile rendering may bury the CTA.
- **Test:** GA4 page-level engagement metrics — scroll depth, time on page, mobile vs desktop conversion rate, form-impression rate if form exists.
- **If confirmed:** SP-05 rebuild ships with corrected architecture.

**H3 — Insurance / affordability friction**
- Rochester GBP rating pattern (2.7★ × 36) often correlates with affordability complaints in addiction vertical.
- Page may not surface sliding-fee or insurance acceptance prominently enough.
- **Test:** Owner Ask #5 — confirm whether sliding fee is available at Rochester. Layer onto rebuild as a lead-position hook if yes.

**H4 — Geographic / catchment mismatch**
- "Rochester" is far from Glenville. Brand awareness in Rochester catchment may be weaker than in Capital Region.
- Local trust signals (Monroe County, neighborhood context) may be thin.
- **Test:** Catchment-zoom GSC: which query modifiers convert at Rochester? Hyperlocal ("rochester ny") vs regional ("monroe county")?

## Diagnostic methodology

1. **GA4 funnel diff** — Rochester sessions → conversion drop-off pattern. Identify drop-off step (hero engagement → scroll → form impression → form submit).
2. **Compare Rochester vs Glens Falls vs Plattsburgh** at the page-level: same template? Different hero? Form present/absent? Mobile differences?
3. **Mobile vs desktop split** — Rochester sessions split by device. Hypothesis: mobile is the bleeding channel because the CTA is below-fold on mobile.
4. **Time-of-day pattern** — addiction-vertical traffic peaks differ. Verify Rochester pattern matches the rest.
5. **Bounce pattern** — high-bounce queries vs converting queries. Cross-reference with H1 (rating drag) — high-bounce queries should correlate with positions where users see GBP rating in SERP.

## Output for SP-05 Rochester rebuild

The brief output should specify:
- **Hero hook** (insurance / sliding fee / "confidential treatment" / transit / something else per diagnosis)
- **Section ordering** (insurance + sliding fee should lead if H3 confirmed)
- **Form placement** (above the fold + sticky bar on mobile if H2 confirmed)
- **Trust-signal density** (rating context, OASAS license, ATPA membership)
- **Mobile-specific tweaks** (sticky CTA, simplified hero)
- **Internal link cluster** (admissions page, sliding-fee FAQ, /services/medication-assisted-treatment)

## Source data

- exports/gsc/pages_last_365d.csv (page-level Rochester metrics)
- exports/gsc/queries_last_180d.csv (query-level Rochester metrics)
- exports/dataforseo/probe_additional_locations.json (Rochester GBP probe — 2.7★ × 36, 5 photos, spam-tier secondary categories)
- exports/ga4/* (acquisition + engagement + conversion 30/90/180/365d)
- Conifer_Park_Outpatient_Pages_Plan.xlsx (row=rochester — template for rebuild scope)
- Conifer_Park_Owner_Conversation_Items.md #5 (sliding fee program — gates H3 fix)

## Owner asks gated

- **#5 Sliding fee / self-pay program** — confirm availability + publishable details. Gates whether the Rochester rebuild can lead with affordability hook.

## Acceptance

- GA4 funnel diff complete (Rochester vs Glens Falls vs Plattsburgh page-level engagement)
- Mobile vs desktop conversion split logged
- Top-converting query vs bleeding-query CTR pattern documented
- 1-page page-redesign brief output for SP-05 Rochester row in Outpatient_Pages_Plan.xlsx
- Hypothesis ranked (which H1-H4 is driving most of the CTR gap)
