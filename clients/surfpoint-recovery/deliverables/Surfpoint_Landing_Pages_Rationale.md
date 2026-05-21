# Surfpoint Recovery — Landing-Page Improvement

**Why this work, what it is, and the examples that make it concrete**

Prepared by HQDM Search Intelligence · 2026-05-12 · Aleksandar Spasevski

---

## The problem we are responding to

The site has a clean split between pages that earn and pages that don't, and it does not match where the work has been going. **The homepage alone accounts for 67% of 833 annual conversions**; another 31% lands on `/admissions`, `/contact-us`, `/treatments`, and the named utility pages — because those pages host the on-page form. The five service pages combined deliver **104 sessions and 0 conversions in 365 days.**

The cause is upstream and visible in the team's task history. Over 24 months and 1,294 Asana tasks, the breakdown was **241 blog tasks, 203 GBP tasks, 10 service-page tasks (all 2024), and 4 technical / schema / internal-linking tasks.** Output mirrored input. The interlinking SOP gave 305 link-plan rows to location pages and 423 to blog content; service pages got 15. Surfpoint's organic problem is not a content-volume problem — it is a content-allocation problem. The leverage is on the pages where conversion happens and on the topical-authority links between them, not on the next blog post.

## Why landing pages, not more blog content

A continued blog cadence at the current volume produces more URLs Google will de-index, on the same topical surface that the architecture audit is already triaging. The blog is 600+ posts and shrinking under Google's quality-system re-evaluation. The homepage is 1,320 words and ranks. The service pages are 643–863 words each and don't rank for their anchor queries.

Three landing-page surfaces are in scope. Each has a different problem.

## Proof — the allocation mismatch and what it costs

**Where the team's work has gone (24 months, 1,294 Asana tasks)** — and where it hasn't:

| Workstream | Tasks | Share |
|---|---:|---:|
| Blog content | 241 | 19% |
| GBP operations | 203 | 16% |
| Off-page / link-building | 16 | 1.2% |
| **Service pages** | **10** (all 2024) | **0.8%** |
| **Technical / schema / internal-linking** | **4** | **0.3%** |
| Other (admin, misc, ops) | 820 | 63% |
| **Total** | **1,294** | 100% |

**Where the 833 annual conversions actually happen (365d, GA4):**

| Surface | Conversion share | Why it converts |
|---|---:|---|
| Homepage | **67%** | Hosts the on-page form; ranks for brand + local |
| `/admissions`, `/contact-us`, `/treatments` + named utility pages | 31% | Also host the form |
| **5 service pages combined** | **0%** (0 conv / 104 sess over 365d) | **No on-page form, no schema, empty meta** |
| Blog (residual) | ~2% | High traffic but disconnected from funnel |

The mismatch in one line: **0.8% of the team's work has gone to the surface that delivers 0% of conversions** — despite that surface receiving real impressions (`/services/benzodiazepine-detox-services` alone carries 91% of orphan service-page impressions, 1,925 in 365d). The interlinking SOP reinforces the gap: over the audit period it directed 305 link-plan rows to location pages and 423 to blog content; service pages received 15. The team has not been doing the wrong work — it has been doing the wrong *mix* of work.

**What the mismatch costs, three scenarios** (per Q2 Strategy §3.2 addressable-demand model):

| Conversion-rate assumption | Annual missed revenue | What it requires |
|---|---:|---|
| Pessimistic — 0.15% (current non-brand rate) | ~**$52K** | Rank improvements alone |
| Mid-case — 0.5% (halfway to brand rate) | ~**$175K** | Service-page rebuild + interlinking refactor |
| Headline — 1.0% (matches Direct-traffic rate) | ~**$352K** | Full architectural fix (this plan) |

The 1.0% rate isn't aspirational — it's what the homepage already delivers when the content infrastructure is on the page. The service-page rebuild moves the rest of the surface up that same curve.

## Homepage — content depth + hyper-local specificity

The live homepage versus the three direct competitor homepages (ACI, Genesis, Ascendant):

| Element | Surfpoint live | + CRD adds | Ascendant (benchmark) |
|---|---|---|---|
| Word count | 1,320 | ~2,200 | 2,590 |
| H2 count | 7 | ~12 | 19 |
| Schema | 1 `LocalBusiness` | unchanged | 1 `MedicalClinic` |
| OASAS / CARF body refs | 2 / 2 | 2 / 2 | 0 / 0 |
| Insurance carriers named | 1 (Medicaid only) | 4 | 0 |
| Coney Island references | **0** | ~4 | **0** |
| Homepage form | 1 | 1 | **0** |

What this tells us is specific. Surfpoint **already wins** on credentialing (OASAS/CARF body mentions), on geo density (27 Brooklyn mentions vs Ascendant's 5), and on conversion infrastructure (Surfpoint is the **only** site in the competitor set with a homepage form — don't lose this in the rebuild). What it loses on is content depth, hyper-local specificity, and insurance specificity.

The single most-leveraged finding is **Coney Island is uncontested.** Zero competitors mention Coney Island in body content. Surfpoint occupies the only inpatient detox facility on the Coney Island shoreline. The homepage rebuild claims that hyper-local positioning at scale (named neighborhoods — Brighton Beach, Bath Beach, Bensonhurst, Bay Ridge — embedded across the new H2 sections, plus a service-area map iframe pointed at the facility coordinates). That same on-page geo signal is what reinforces the map-pack proximity ranking the GBP is already winning.

The CRD draft addresses most of the topical gaps. What it does not address — and what the rebuild adds — is the **schema upgrade** (move from a single `LocalBusiness` block to a full `MedicalBusiness` graph with `medicalSpecialty`, `availableService`, `paymentAccepted`, `aggregateRating`, `geo`, two-phone `contactPoint` array, plus a separate `FAQPage` block) and the **E-E-A-T section** (named clinical roster with credentials — LCSW, CASAC, MD-Psychiatry — matching Ascendant's "Awards & Accreditations" + "Editorial Policy" + "Our Contributors" model).

## Service pages — the architectural failure

The service-page diagnostic is the clearest finding in the audit because **all five service pages show the same profile.** That is what tells us this is structural, not a per-page problem.

| Dimension | Status across all 5 service pages |
|---|---|
| Meta description | **EMPTY (0 chars)** |
| JSON-LD schema | **0 blocks** |
| On-page form | **0** |
| Coney Island mentions | **0** |
| OASAS / CARF / SAMHSA refs | **0 / 0 / 0** |
| Insurance carriers | 0 across 4 of 5 pages |
| Dual diagnosis mentions | **0** |
| Contextual links to peer service pages | **0** |

This is a template stub problem. Each page was built once with generic copy and never specialized. The on-page form exists on `/admissions` and `/contact-us` but not on the service pages where the service decision is being made. Credentials live on the homepage but not on the conversion-decision page. Insurance carriers are not surfaced where coverage anxiety actually peaks. Dual diagnosis — a Surfpoint differentiator — is mentioned zero times across all five service pages.

The competitor benchmark for `alcohol detox brooklyn` shows top-3 ranking real providers are TBH (a hospital, 888 words, OASAS-named, lists care team), Genesis (homepage, 652 words — ranking structurally on domain authority), and Urban Recovery (homepage, 1,556 words, MAT-deep). Surfpoint's dedicated service page should beat TBH on depth AND be service-specific, not all-purpose.

The rebuild is therefore not a "rewrite for length" project. It is a **five-element addition** applied to each service page:

1. A credentialing block (OASAS license + CARF Center of Excellence)
2. An insurance block (Medicaid, Aetna, Cigna, BCBS with verification CTA)
3. A clinical-roster block (named MD/RN/counselor staff with credentials)
4. A patient-journey "What to Expect" block (matches the TBH model)
5. Schema deployment — `Service` + `MedicalProcedure` + `FAQPage`

Plus the on-page form (closes the 104-sess / 0-conv gap), the missing meta descriptions, and contextual links to peer service pages and to the relevant location pages.

For example, the `/services/benzodiazepine-detox-services` URL alone carries **91% of orphan-service-page impressions (1,925 in 365 days)** without a destination page that converts. Rebuilding it as `/treatments/benzodiazepine-detox` — with the five elements above — converts a high-impression / zero-conversion surface into one that earns.

## Locations layer — real catchment, not doorway sprawl

Of the existing location footprint, 43 URLs target NJ neighborhoods (`/locations/jersey-city`, `/locations/newark`, `/locations/paterson`, etc.) and out-of-borough NYC (`/locations/queens`, `/locations/bronx`, `/locations/harlem`). Both classes are doorway-pattern pages — the same template repeated across geographies the facility cannot or should not serve. The NJ pages are also a compliance pattern: a NY-only OASAS-licensed facility advertising service in NJ is regulator-visible deceptive geo-targeting.

These are removed and 301-redirected to `/areas-served`, which is being rebuilt to function as the canonical service-area page. What remains is the **real Brooklyn catchment**: Coney Island, Brighton Beach, Bensonhurst, Bay Ridge, Sunset Park, Sheepshead Bay, Gravesend, Bath Beach, Midwood, Marine Park.

Why this matters strategically: map-pack proximity ranking is driven in part by the on-page geo signals on the site (neighborhood enumeration, embedded map iframe, location-page links to and from service pages). A wide doorway footprint dilutes those signals across geographies that contribute nothing to the catchment. A tight, real-catchment location layer reinforces them — and the homepage rebuild references the same neighborhoods, so the geo signal is consistent across surfaces.

## What this work explicitly is not

- It is **not new blog volume.** The PAA pipeline is being redirected from generic seeds to service-aligned seeds — fewer pieces, each tied to the demand-gap table and the LLM research-phase gaps.
- It is **not location footprint expansion.** The locations × services matrix runs against the real catchment, not against a synthetic one.
- It is **not schema-as-a-single-deploy.** Each schema type matches a surface where the claims are actually supported by page content: `MedicalBusiness` graph on the homepage, `Service` + `MedicalProcedure` + `FAQPage` per service, `Place` on retained locations.
- It is **not stripping the homepage form.** Surfpoint's homepage form is the only one in the competitor set and the largest single conversion-attribution surface — the rebuild keeps it and surrounds it with better content.

The landing-page work is what turns the architecture cleanup into actual conversion lift. The cleanup makes Google stop discounting the site; the landing-page rebuild gives the surviving surface something to convert on.

---

*Supporting specs and competitor benchmarks in `Surfpoint_Homepage_Update_Brief.md`, `Surfpoint_Treatments_Hub_Update_Brief.md`, `Surfpoint_Treatments_SubPages_BuildPlan.md`, and `exports/competitive_audit/01_homepage_gap.md` + `02_service_pages_gap.md`.*
