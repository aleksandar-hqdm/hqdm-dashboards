# Push 3 — Service Page Consolidation + Schema Floor + Rewrites

**Q2 2026 v2 · Niagara Recovery · 2026-05-19**
**Pillar:** Site Architecture + On-Page Schema + Service Pages · **Month:** M1 (CN-01, SCHEMA-02, SP-01) + M2 (SP-02, SP-03) · **Owner:** Aleksa + Marija + Dev · **Priority:** P0/P1

---

## The diagnosis

Niagara Recovery has **10 indexable service URLs** — 5 base modality URLs + 5 `-in-newfane-ny` near-duplicate variants. Combined they earn **3 clicks / 365d** per the GSC pull (`exports/gsc/pages_last_365d.csv`).

Per live-fetch 2026-05-19 (`exports/_v2_live_html_audit.json`):
- Both URLs in each pair have unique body content (not redirects, not canonicals)
- Both index — Google's chosen which version surfaces is inconsistent across cells
- All 5 base service pages have **zero JSON-LD schema deployed**
- Two service pages have a literal `[phone number]` placeholder rendered in the body
- All service pages have null `meta_description`
- All service pages use "Niagara Recovery" + "Recovery Center of Niagara" in mixed body copy

Demand context (DataForSEO triangulation `exports/dataforseo/search_volume_v2.csv`):

| Modality query | Google Ads vol | Bing vol | Max vol |
|---|---|---|---|
| drug detox | 6,600 | 110 | 6,600 |
| inpatient rehab | n/a (censored) | 1,220 | 1,220 |
| alcohol detox | n/a (censored) | 790 | 790 |
| inpatient drug rehab | n/a (censored) | 400 | 400 |
| benzo detox | 480 | 30 | 480 |
| benzodiazepine detox | 140 | 110 | 140 |
| opioid detox | n/a | 40 | 40 |
| medication assisted treatment | n/a | 510 | 510 |
| suboxone clinic | n/a | 530 | 530 |
| suboxone doctor | 1,900 | 40 | 1,900 |
| short term residential rehab | 10 | 0 | 10 |

GBP demand evidence (top GBP-search-log queries Dec-May, 11,019 profile views):
- "detox" — 128 searches
- "suboxone" — 62 searches (third-highest non-brand query)
- "inpatient rehab near me" — 34 searches
- "alcohol rehab buffalo, ny" — 22 searches

**The signal:** drug-detox + suboxone-MAT are the two highest commercial-intent service queries, and Niagara has either fragmented coverage (drug detox split across 2 URLs) or no dedicated landing (suboxone). The largest single-modality demand (drug detox at 6,600/mo) lands on a 733-word page with zero schema. This is leaving demand on the table.

## The single deliverable

5 canonical service URLs (down from 10). Each with MedicalBusiness + Service JSON-LD schema. Three deep rewrites (alcohol detox + drug detox + suboxone-MAT new build). Per-page meta_description on all 5.

## Specific changes

### 1. Dupe consolidation (CN-01)

Open `Niagara_Recovery_Pages_Action_List.csv`, filter `action_type=301`. Five pairs, content-merge before redirect:

| Source URL (dupe) | Target URL (canonical) | Pre-merge action |
|---|---|---|
| `/services/alcohol-detoxification-services-in-newfane-ny` | `/services/alcohol-detoxification-services` | Pull any unique body sections from the dupe into the base before redirecting |
| `/services/opioid-detoxification-services-in-newfane-ny` | `/services/opioid-detoxification-services` | Same |
| `/services/drug-detox-services-in-newfane-ny` | `/services/drug-detox-services` | Same |
| `/services/benzodiazepines-detoxification-services-in-newfane-ny` | `/services/benzodiazepines-detoxification` | Same |
| `/services/short-term-residential-program-in-newfane-ny` | `/services/short-term-residential-program` | Same |

Process per pair:
1. Diff body content. Identify sections in the dupe that don't exist on the base.
2. Merge unique sections into the base.
3. Update internal links across the site to point to the base URL only (`Niagara_Recovery_Internal_Linking_Map.csv` rows IL-03 to IL-07).
4. Deploy 301 redirect from dupe URL to base URL.
5. Re-fetch each base URL and verify 200 + final content.
6. Re-fetch each dupe URL and verify 301 → base.

**Sequencing constraint:** BC-03 (`[phone number]` placeholder fix) must run BEFORE CN-01 on the alcohol-detox dupe URL, because the dupe is currently indexable and a live request to the dupe URL still renders the placeholder string. Fix the dupe FIRST, then 301 it.

### 2. MedicalBusiness + Service schema deploy (SCHEMA-02)

Open `Niagara_Recovery_Schema_Plan.csv` filter `task_id=SCHEMA-02`. Deploy on all 5 base service URLs + the `/treatments` hub + `/services/short-term-residential-program`.

Schema structure per service page (example for alcohol-detoxification-services):

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Alcohol Detoxification Services",
  "url": "https://www.niagararecovery.com/services/alcohol-detoxification-services",
  "provider": {
    "@type": "MedicalBusiness",
    "@id": "https://www.niagararecovery.com/#organization",
    "name": "Niagara Recovery",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2600 William St",
      "addressLocality": "Newfane",
      "addressRegion": "NY",
      "postalCode": "14108",
      "addressCountry": "US"
    },
    "telephone": "+1-716-203-8000"
  },
  "serviceType": "Alcohol Detoxification",
  "areaServed": [
    {"@type": "City", "name": "Newfane"},
    {"@type": "City", "name": "Lockport"},
    {"@type": "City", "name": "Niagara Falls"},
    {"@type": "City", "name": "Buffalo"}
  ],
  "audience": {
    "@type": "PeopleAudience",
    "suggestedMinAge": 18
  }
}
```

Validate each via `validator.schema.org` + Google Rich Results Test per `reference_schema_validation_workflow.md`.

### 3. SP-01 alcohol-detox rewrite (M1)

Target the highest single-modality demand (790/mo Bing volume).

Current state: 932w body, zero schema, `[phone number]` placeholder, null meta_description, 7 RCoN brand mentions, no FAQ block, no intake CTA placement strategy.

Target state: **~1500w + MedicalBusiness/Service schema + per-page meta_description + 3 intake CTA placements + FAQ block (8 PAA questions) + symptom-and-timeline section + medical-supervision section + insurance/payor section.**

Required sections (in order):
1. **H1 + intro** — "Alcohol Detoxification Services in Western NY" — frame the medical-detox process and link to /services/short-term-residential-program for the post-detox transition
2. **Intake CTA above-fold** — "Verify Insurance" or "Call (716) 203-8000" — link to /admissions
3. **What is medical alcohol detox** — 200w
4. **Timeline & symptoms** — Hour-by-hour breakdown (24h / 48h / 72h / 7 days) with medical-supervision callouts
5. **Medications used during detox** — Benzodiazepines (medical), thiamine, anti-nausea — written for the layperson but with the clinical anchor
6. **Why inpatient vs outpatient** — 150w with link to /services/short-term-residential-program
7. **Insurance & payment options** — Medicaid + commercial + self-pay — link to /admissions for verification
8. **What to expect at intake** — link to the blog post on "What Should You Pack for an Inpatient Rehab Stay in Newfane" (this is one of the 5 already-converting blog assets per Push 5 CC-02)
9. **FAQ section** — 8 PAA questions: "How long does alcohol detox take?" / "Can I detox at home?" / "Is alcohol withdrawal dangerous?" / "Does insurance cover detox?" / "What happens after detox?" / "What's the difference between detox and rehab?" / "Can I detox while taking other medications?" / "What if I relapse during detox?"
10. **Intake CTA after-fold** — Same CTA as above
11. **Footer intake CTA** — "Verify Insurance" + phone number

Meta description: `Medically supervised alcohol detox at Niagara Recovery in Newfane, NY. 24/7 nursing care, evidence-based medication-assisted detox, and a smooth transition to short-term residential treatment. Insurance accepted including Medicaid.`

### 4. SP-02 drug-detox rewrite (M2)

Target the largest captured volume (6,600/mo Google Ads "drug detox").

Same structural pattern as SP-01 but with per-modality body split:
- Opioids subsection (heroin / fentanyl / prescription painkillers) — 200w with link to /services/opioid-detoxification-services
- Amphetamines / stimulants subsection — 150w
- Cocaine subsection — 100w
- Poly-drug detox — 200w (when more than one substance is involved)
- Benzodiazepines — 150w with link to /services/benzodiazepines-detoxification
- General medication-assisted detox section — 200w

Target: ~1500w + schema + meta_description + intake CTAs + FAQ.

### 5. SP-03 Suboxone / MAT page build (M2)

**This is a new URL** — `/services/suboxone-mat-program` does not currently exist.

Why build it: top GBP non-brand demand ("suboxone" = 62 searches Dec-May, 3rd-highest non-brand query). DataForSEO triangulation: "suboxone clinic" 530/mo Bing + "suboxone doctor" 1,900/mo Google Ads + "medication assisted treatment" 510/mo Bing. Combined this is a multi-thousand-monthly-search modality with **no dedicated Niagara Recovery landing page.**

Build to ~1500w including:
- What is Suboxone / how MAT works
- Eligibility criteria
- Insurance + Medicaid coverage (Medicaid emphasis — addiction-medicaid intersection is a known PAA cluster)
- Other MAT options: Vivitrol, methadone referral
- Intake & induction process
- FAQ (8 PAA)
- Schema: MedicalBusiness > Service with hasOfferCatalog listing Suboxone + Vivitrol + methadone-referral

GBP-side: GBP-06 task adds "Suboxone / MAT Program" + "Medication-Assisted Recovery" to the Services tab to mirror this new URL.

## Why this is Push 3

Push 1 fixes the brand entity. Push 2 fixes the GBP geographic claim. Push 3 fixes the **commercial conversion surface** — the URLs that people landing from non-branded modality searches should hit. Without Push 3, the brand-canonical fix in Push 1 sends users to fragmented, schema-less, placeholder-bearing service pages, and the GBP service-area expansion in Push 2 routes those users into a broken funnel.

Push 3 is also the lowest-risk site-code change. Service-page rewrites are sandboxed — they affect 5 URLs (post-consolidation) without touching the location-page architecture (Push 4) or the blog content firehose (Push 5).

## Acceptance criteria

- 5 canonical /services/* URLs live with merged body content; 5 `-in-newfane-ny` URLs return 301 to canonical.
- All 5 base service pages + /treatments + /services/short-term-residential-program have valid MedicalBusiness/Service JSON-LD (validator.schema.org + RRT pass).
- /services/suboxone-mat-program (new URL) live with schema + intake.
- /services/alcohol-detoxification-services ≥1500w + 3 intake CTAs + FAQ + meta_description.
- /services/drug-detox-services ≥1500w + same pattern.
- 0 occurrences of `[phone number]` placeholder anywhere on /services/*.
- 0 occurrences of "Recovery Center of Niagara" in body copy on /services/*.

## Estimated effort

- CN-01 consolidation: 4 hours (Aleksa + Dev)
- SCHEMA-02 deploy + validation: 4 hours (Aleksa)
- SP-01 alcohol-detox rewrite: 8 hours (Aleksa + Marija)
- SP-02 drug-detox rewrite: 8 hours (Aleksa + Marija)
- SP-03 suboxone-MAT build: 10 hours (Aleksa + Marija)

**Total Push 3 = ~34 hours over M1+M2.**

## Risk

- Content-merge step for CN-01 is the highest-effort sub-task. If the team underestimates merge complexity and just deploys 301s without first pulling unique content from the dupes, body content unique to the dupe URLs will be lost.
- Schema validation is non-negotiable — past HQDM client work has hit JSON-LD parse errors that block Rich Results indexing. Validate before each deploy.
- SP-03 (suboxone) requires confirmation that Niagara Recovery actually offers Suboxone/MAT clinically. Verify with owner before building the page (Owner Ask item 3).

## Files referenced

- `Niagara_Recovery_Pages_Action_List.csv` (rows PA-10 to PA-17)
- `Niagara_Recovery_Service_Pages_Plan.csv` (per-page rewrite specs)
- `Niagara_Recovery_Schema_Plan.csv` (5 service-page schemas + treatments + short-term-residential)
- `Niagara_Recovery_Internal_Linking_Map.csv` (rows IL-03 to IL-13)
- `Niagara_Recovery_Owner_Conversation_Items.md` (item 3 — Suboxone offering confirmation)
- Search volume: `clients/niagararecovery/exports/dataforseo/search_volume_v2.csv`
- Live-fetch: `clients/niagararecovery/exports/_v2_live_html_audit.json`
