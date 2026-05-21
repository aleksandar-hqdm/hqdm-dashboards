# Push 1 — Brand Canonical Sitewide

**Q2 2026 v2 · Niagara Recovery · 2026-05-19**
**Pillar:** On-Page · **Month:** M1 · **Owner:** Aleksa (on-page lead) + Dev · **Priority:** P0

---

## The diagnosis

The site uses two brand entities sitewide. The homepage + footer say "Niagara Recovery"; the about / admissions / contact / treatments / areas-served titles say "Recovery Center of Niagara"; the LocalBusiness JSON-LD references the old name with a `niagararecovery.com/wp-content/*` image URL (WordPress migration debris on what is now a Webflow build).

**Live-fetched 2026-05-19** (`exports/_v2_live_html_audit.json`):

| URL | Title | Brand mentions in body |
|---|---|---|
| `/` | "Top-Rated Drug Rehab - Newfane \| Niagara Recovery" | NR=9, RCoN=1 |
| `/about-us` | "Rehabilitation Center - Detox - Recovery Center of Niagara" | NR=11, RCoN=8 |
| `/admissions` | "Admissions - Recovery Center of Niagara" | NR=11, RCoN=8 |
| `/contact-us` | "Contact Us - Rehabilitation Center - Recovery Center of Niagara New York" | NR=12, RCoN=3 |
| `/treatments` | "Best Recovery Treatment - Recovery Center of Niagara" | NR=6, RCoN=7 |
| `/areas-served` | "Areas We Serve - Recovery Center of Niagara" | NR=9, RCoN=3 |
| Service pages (×5 base) | Modality-only | NR=7 each, RCoN=2-9 each |

The GBP itself shows the new name ("Niagara Recovery: Inpatient Detox & Drug And Alcohol Rehab In Newfane, NY"). The site's source-of-truth divergence is the problem.

**Quantified demand signal:** In the GBP's own search log (Dec 2025 – May 2026, 11,019 profile views), users searched:
- "recovery center of niagara" — **363 searches**
- "niagara recovery: inpatient detox..." (long-brand variants) — 186 + 39 = 225
- "niagara recovery" — 157
- "niagara recovery center" — 145
- "niagara rehab" — 36

The old-brand variant ("recovery center of niagara") draws **363 of the 891 brand-search total = 41%**. After six months of operating with the new GBP brand, the old name still pulls almost half of branded demand because the website's title-of-record sends the wrong entity signal.

## The single deliverable

One brand entity, one schema, one image, no placeholders, no fabrications. All visible-on-page elements (titles, H1s, footer, schema name fields) align to "Niagara Recovery."

## Specific changes

### 1. Title rewrites (5 core pages)

Open `Niagara_Recovery_Pages_Action_List.csv`, filter `task_id` = BC-01. The 5 rows are PA-01 through PA-05.

| URL | Current title | New title |
|---|---|---|
| `/about-us` | Rehabilitation Center - Detox - Recovery Center of Niagara | About Us — Niagara Recovery |
| `/admissions` | Admissions - Recovery Center of Niagara | Admissions — Niagara Recovery |
| `/contact-us` | Contact Us - Rehabilitation Center - Recovery Center of Niagara New York | Contact Us — Niagara Recovery |
| `/treatments` | Best Recovery Treatment - Recovery Center of Niagara | Treatments — Niagara Recovery |
| `/areas-served` | Areas We Serve - Recovery Center of Niagara | Areas We Serve — Niagara Recovery |

Sweep H2/H3 on each page for old-brand instances. Replace body copy mentions of "Recovery Center of Niagara" with "Niagara Recovery."

### 2. LocalBusiness JSON-LD fix (BC-02)

Open `Niagara_Recovery_Schema_Plan.csv`. The single LocalBusiness JSON-LD lives on the homepage. Update fields:
- `name`: "Niagara Recovery" (was ambiguous between the two brand entities)
- `image`: the live Webflow CDN URL (replace `niagararecovery.com/wp-content/*` reference — that's WP-migration debris that survived the Webflow rebuild)
- `@id`: canonical entity URL `https://www.niagararecovery.com/#organization`
- `address`, `geo`, `telephone`, `openingHours`: confirm against the GBP — `2600 William St, Newfane, NY 14108` / `+1-716-203-8000` / 24/7

Replicate `name` and `image` updates on the AboutPage + ContactPage JSON-LD on the respective pages.

**Validation:** Each updated schema MUST pass `validator.schema.org` + Google Rich Results Test before deploy. Per `reference_schema_validation_workflow.md`.

### 3. Kill the `[phone number]` placeholder (BC-03)

Live-fetch confirms the literal string `[phone number]` is rendered in body copy on:
- `/services/alcohol-detoxification-services`
- `/services/alcohol-detoxification-services-in-newfane-ny` (the dupe — note that CN-01 will 301 this URL in Push 3, but the placeholder must be killed first because the dupe is currently indexable and a search hit on this URL renders the broken string)

Find/replace `[phone number]` → `(716) 203-8000` on both URLs. Spot-check the remaining 3 base service pages (opioid / drug / benzo / short-term-residential) for the same defect — none showed it on 2026-05-19 live fetch but verify before assuming.

### 4. Fix the Buffalo location page fabrication (BC-04)

Live-fetch confirms `/locations/buffalo` body copy claims: **"...our facility in Buffalo, NY 14215..."**

This is false. The only Niagara Recovery facility is at 2600 William St, Newfane, NY 14108. Maps signals build off NAP integrity, and a literal claim of a Buffalo facility — when no such facility exists — creates a NAP-conflict risk if Google's entity graph cross-references the site to the GBP.

Rewrite body copy to truthful framing:
> "Niagara Recovery serves the Buffalo metro area from our 2600 William St Newfane facility, approximately 30 minutes north of downtown Buffalo. While our inpatient detox and short-term residential program are housed at the Newfane location, our admissions team helps families across Erie County understand their treatment options, including transportation logistics from Buffalo neighborhoods like North Park, University Heights, Allentown, and Elmwood Village."

Include drive directions from Buffalo to Newfane. Embed Google Maps directions widget. Add intake CTA above-fold and after-fold. Keep MedicalBusiness schema referencing **only** the Newfane HQ — never declare a second Buffalo location in schema.

## Why this is Push 1

Three reasons:

1. **Largest single discoverable lever.** 41% of branded demand currently leaks. Brand-canonical fix directly recovers that share — the moment users see one entity name across title + footer + schema + GBP, the click-share consolidates.
2. **Cleans up structural blockers for every later Push.** Push 3 service-page schema deployment needs the LocalBusiness entity to be canonical. Push 4 location-page builds need a single brand entity to anchor the service-area copy. Push 5 blog refreshes will reference the canonical brand in author + medicalReviewedBy fields.
3. **No client coordination required for the visible-on-page changes.** Title/H1/body rewrites are pure on-page execution. The owner sign-off is only needed for the strategic choice of canonical brand (recommended: "Niagara Recovery" since that matches the GBP and the homepage source-of-truth).

## Acceptance criteria

- All 8 core pages have "Niagara Recovery" as the titular brand entity in `<title>`.
- "Recovery Center of Niagara" appears **0 times** in any `<title>` or JSON-LD `name` field sitewide.
- LocalBusiness JSON-LD on `/` passes `validator.schema.org` and Google RRT.
- Image URL in LocalBusiness schema is a live Webflow CDN asset (no `/wp-content/` references anywhere in schema).
- `[phone number]` literal appears 0 times sitewide (grep audit pre-ship).
- `/locations/buffalo` body copy says "serving Buffalo metro from Newfane" and contains 0 claims of a Buffalo facility.

## Estimated effort

- Title + H1 sweep: 4 hours (Aleksa)
- Schema fix: 2 hours (Aleksa)
- Placeholder + Buffalo fabrication fix: 2 hours (Aleksa)
- Owner sign-off + brand-canonical decision: 1 short call

**Total Push 1 = ~8 hours engineering + 1 owner call.**

## Risk

The owner has not yet signed off on "Niagara Recovery" vs "Recovery Center of Niagara" as the canonical brand. Run BC-01 only after the call. If the owner chooses the old brand (unlikely given the GBP is already on the new brand), the entire title sweep reverses direction — but the JSON-LD entity consolidation work in BC-02 still applies regardless of which brand wins.

The 7-month-stuck Press Release task (since 2025-10-11) suggests the owner has approval-cycle friction. Bundle BC-01 sign-off + the four other Owner Asks (per `Niagara_Recovery_Owner_Conversation_Items.md`) into a single conversation to avoid serial waits.

## Files referenced

- `Niagara_Recovery_Pages_Action_List.csv` (rows PA-01 to PA-09)
- `Niagara_Recovery_Schema_Plan.csv` (rows for BC-02 LocalBusiness fix)
- `Niagara_Recovery_Internal_Linking_Map.csv` (rows IL-01, IL-02 footer/header brand links)
- `Niagara_Recovery_Owner_Conversation_Items.md` (items 1, 2, 5)
- Live-fetch evidence: `clients/niagararecovery/exports/_v2_live_html_audit.json`
