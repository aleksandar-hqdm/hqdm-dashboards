# Surfpoint /treatments Hub — Update Brief

**Page:** `https://www.surfpointrecovery.com/treatments`
**Owner:** Aleksa Popovic (On-Page) — task router · **Author:** Aleksandar Spasevski · **Date:** 2026-05-11
**Scope:** /treatments hub page only. Homepage = separate brief. /treatments/[service] sub-pages = separate build plan.
**Status:** Ready for Aleksa feasibility pass

---

## How to use this brief

Same trackable format as the homepage brief:
- **§1 at-a-glance checklist** tracks progress
- **§2 item details** are execution cards (What / Where / Spec / Why)
- **§3 schema spec**
- **§4 dependencies**
- **§5 acceptance**

**Sequencing context:** This update happens **before** /treatments/[service] sub-pages exist. The hub upgrades content + schema now; each H2 section gets a "Read more →" link to its sub-page **when that sub-page ships** (rolling updates). The hub is designed to function correctly as a standalone today AND as a listing hub once sub-pages exist.

---

## 1. At-a-glance checklist

**16 items total: 9 content updates, 4 new sections, 3 schema/technical.**

| # | Type | Item | Owner | Status |
|---|---|---|---|---|
| T-01 | CHANGE | Replace meta title | Aleksa | ☐ |
| T-02 | CHANGE | Replace meta description | Aleksa | ☐ |
| T-03 | CHANGE | Replace H1 | Aleksa | ☐ |
| T-04 | CHANGE | Fix typo: `BenzodiazepinesDetox` → `Benzodiazepine Detox` | Aleksa | ☐ |
| T-05 | CHANGE | Add `id` attributes to every service H2 (for homepage H-23 anchor links) | Aleksa + Dev | ☐ |
| T-06 | CHANGE | Rewrite intro section — add OASAS / CARF / SAMHSA, Coney Island, insurance carriers | Content + Aleksa | ☐ |
| T-07 | CHANGE | Rewrite "Alcohol Detox" H2 section — expand depth + add OASAS + neighborhoods | Content + Aleksa | ☐ |
| T-08 | CHANGE | Rewrite "Benzodiazepine Detox" H2 section — expand depth + name specific benzos | Content + Aleksa | ☐ |
| T-09 | CHANGE | Rewrite "Opioid Detox" H2 section — expand depth + name MAT meds | Content + Aleksa | ☐ |
| T-10 | CHANGE | Rewrite "Short-Term Rehab" H2 section — expand depth + name program duration | Content + Aleksa | ☐ |
| T-11 | NEW | Add new H2 section: "Dual Diagnosis Treatment" | Content + Aleksa | ☐ |
| T-12 | NEW | Add new H2 section: "Drug Detox" (currently missing entirely) | Content + Aleksa | ☐ |
| T-13 | NEW | Add on-page lead form (mid-page + bottom-page) | Aleksa + Dev | ☐ |
| T-14 | NEW | Add "Areas We Serve" block with real-catchment neighborhood links + service-area map iframe | Aleksa | ☐ |
| T-15 | CHANGE | Add schema: `MedicalBusiness` reference + `ItemList` of services + `BreadcrumbList` + `FAQPage` | Aleksa + Dev | ☐ |
| T-16 | ROLLING | When each /treatments/[service] sub-page ships, update the corresponding H2 section to include "Read more about [service] →" link | Aleksa | ☐ |

---

## 2. Item details

---

### T-01 · CHANGE · Replace meta title

**Where:** /treatments `<title>` tag

**Current:** `Treatments | Surfpoint Recovery` (32 chars — too thin)

**Spec — replace with:**
> `Inpatient Drug & Alcohol Treatment in Brooklyn, NY | Surfpoint Recovery`

(72 chars; may render at 65 — acceptable)

**Why:** /treatments ranks at **position 2.11 with 985 impressions / 2 clicks / 0.2% CTR** in the past 30 days (per GSC). The page already wins the ranking — it loses the click. Title is the highest-leverage CTR lever. New title packs service modifiers (Inpatient, Drug, Alcohol) + geo (Brooklyn, NY) + brand.

---

### T-02 · CHANGE · Replace meta description

**Where:** /treatments `<meta name="description">`

**Current:** ~146 chars (decent length, generic content)

**Spec — replace with:**
> `Surfpoint Recovery offers inpatient detox and rehabilitation in Brooklyn, NY for alcohol, opioids, benzodiazepines, and dual diagnosis. OASAS-licensed. CARF Center of Excellence. Most major insurance accepted including Medicaid.`

(226 chars — over the typical 155 limit. Trim to ~155 by dropping clauses; suggested 155-char version: `Inpatient detox & rehab in Brooklyn, NY for alcohol, opioids, benzodiazepines & dual diagnosis. OASAS-licensed. CARF-accredited. Medicaid accepted.`)

**Why:** Current snippet doesn't surface trust signals or insurance — critical for CTR on commercial-intent queries. Replacement packs OASAS / CARF / specific substances / Medicaid into 155 chars.

---

### T-03 · CHANGE · Replace H1

**Where:** /treatments H1

**Current:** `Our experts are here to help.` (vague, no service or geo)

**Spec — replace with:**
> `Inpatient Detox & Rehabilitation Programs in Brooklyn, NY`

**Why:** Service-modifier H1 with geo. Current H1 reads like a hero subhead, not a page title. Aligns the on-page hierarchy with the new meta title.

---

### T-04 · CHANGE · Fix `BenzodiazepinesDetox` typo

**Where:** H2 currently reads `BenzodiazepinesDetox` (literal — no space between "Benzodiazepines" and "Detox")

**Spec — replace with:**
> `Benzodiazepine Detox`

(Note: singular `Benzodiazepine`, not plural `Benzodiazepines`, matches medical convention and the homepage CRD H-10.)

**Why:** Visible typo on a primary service H2. Also normalizes to medical convention used across the rest of the rebuild.

---

### T-05 · CHANGE · Add `id` attributes to every service H2

**Where:** Every service H2 on the page. Required IDs:

| H2 | `id` attribute |
|---|---|
| Alcohol Detox | `id="alcohol-detox"` |
| Opioid Detox | `id="opioid-detox"` |
| Benzodiazepine Detox *(after T-04 typo fix)* | `id="benzodiazepine-detox"` |
| Drug Detox *(new section per T-12)* | `id="drug-detox"` |
| Dual Diagnosis Treatment *(new section per T-11)* | `id="dual-diagnosis"` |
| Short-Term Rehab | `id="short-term-rehab"` |

**Spec example:**
```html
<h2 id="alcohol-detox">Alcohol Detox</h2>
```

**Why:** Homepage H-23 spec routes new CRD H2 sections to `/treatments#[anchor]` contextual links. Those links 404-fail without IDs on the destination H2s. Same anchor pattern stays valid when /treatments/[service] sub-pages ship (links can be updated link-by-link in T-16).

---

### T-06 · CHANGE · Rewrite intro section

**Where:** The intro / first H2 area of /treatments. Currently `Detox is not a one-size-fits-all process.` H2 + thin generic body.

**Spec — replace with:**

> ## Inpatient Detox Treatment in Brooklyn — Personalized for Every Patient
>
> No two patients arrive at Surfpoint Recovery with the same history, the same substance use pattern, or the same medical needs. That's why our Brooklyn, NY inpatient detox programs are designed around clinical specificity, structured medical supervision, and the realities of real recovery — not a template.
>
> Surfpoint Recovery is OASAS-licensed by the New York State Office of Addiction Services and Supports and CARF-certified as a Center of Excellence. Our 2316 Surf Avenue facility in the Coney Island neighborhood serves patients across South Brooklyn — including Brighton Beach, Bay Ridge, Bensonhurst, Sunset Park, Bath Beach, and Sheepshead Bay — and from across New York City.
>
> Most major insurance is accepted, including **Medicaid, Aetna, Cigna, and BlueCross BlueShield**. Our admissions team provides free insurance verification before admission. Call (646) 347-1893 — admissions available 24/7.

**Why:** Per the audit `metrics.csv`: current /treatments has 0 OASAS, 0 CARF, 0 SAMHSA, 0 Coney Island, 1 Brooklyn mention, 0 insurance carrier mentions, 0 dual diagnosis. This single intro rewrite closes 6 of those gaps in one block.

---

### T-07 · CHANGE · Rewrite "Alcohol Detox" H2 section

**Where:** The existing "Alcohol Detox" H2 section.

**Spec — replace existing section content with:**

> ## Alcohol Detox
> *(add `id="alcohol-detox"` per T-05)*
>
> Alcohol withdrawal is medically complex — risks include seizures and delirium tremens if left unmanaged. Surfpoint Recovery's OASAS-licensed medical team provides 24/7 monitored inpatient alcohol detox at our Brooklyn, NY facility, using evidence-based medication protocols (including CIWA-Ar withdrawal scoring and benzodiazepine taper where clinically appropriate) to reduce withdrawal severity and protect patient safety.
>
> Our alcohol detox program bridges directly into short-term inpatient rehabilitation — no gaps in clinical care between detox completion and the next stage of recovery. Most patients complete medical detox in 3–7 days, depending on dependence severity, then transition into our 14–30 day rehabilitation program with the same clinical team.
>
> Serving Coney Island, Brighton Beach, Bath Beach, Bensonhurst, Bay Ridge, and the broader South Brooklyn area.
>
> *[When /treatments/alcohol-detox ships: add "Read more about our alcohol detox program →" link to that URL — per T-16]*

**Why:** Closes the substance-specific clinical depth gap; adds OASAS, neighborhoods, CIWA-Ar clinical specificity, program duration. Provides anchor target for homepage H-08 contextual link.

---

### T-08 · CHANGE · Rewrite "Benzodiazepine Detox" H2 section

**Where:** Existing "BenzodiazepinesDetox" H2 section (rename per T-04).

**Spec — replace existing section content with:**

> ## Benzodiazepine Detox
> *(add `id="benzodiazepine-detox"` per T-05)*
>
> Benzodiazepine withdrawal can be life-threatening if unmanaged. Surfpoint Recovery's Brooklyn inpatient program uses a structured tapering protocol under continuous medical supervision — the only safe approach to stopping benzodiazepine dependence.
>
> Whether the dependency involves prescription medications such as Xanax (alprazolam), Klonopin (clonazepam), Ativan (lorazepam), or Valium (diazepam), our medical team builds a personalized detox plan that safely reduces the substance while monitoring vital signs, managing withdrawal symptoms, and providing emotional support throughout.
>
> As a CARF-certified Center of Excellence located in Brooklyn, New York, our benzodiazepine detox patients receive integrated care that prepares them for inpatient rehabilitation from day one.
>
> *[When /treatments/benzodiazepine-detox ships: add "Read more about benzodiazepine detox →" link per T-16]*

**Why:** Names specific benzodiazepines (Xanax / Klonopin / Ativan / Valium) — matches Seek Counseling (ranking competitor) and beats them on depth + medical specificity. Closes typo (T-04) and adds CARF reference.

---

### T-09 · CHANGE · Rewrite "Opioid Detox" H2 section

**Where:** Existing "Opioid Detox" H2 section.

**Spec — replace existing section content with:**

> ## Opioid Detox & Medication-Assisted Treatment (MAT)
> *(add `id="opioid-detox"` per T-05)*
>
> Surfpoint Recovery provides medically supervised inpatient opioid detox and clinically appropriate Medication-Assisted Treatment (MAT) at our Brooklyn, NY facility. Our licensed clinical team uses FDA-approved medications such as **buprenorphine** and **naltrexone** to reduce cravings, prevent relapse, and support a safe transition through the most critical phase of early recovery.
>
> Each opioid detox plan is designed around the patient's substance use history, co-occurring health conditions, and recovery goals. We combine pharmacological support with individual counseling, group therapy, and relapse prevention planning — addressing both the physical and psychological dimensions of opioid use disorder.
>
> Patients from Sunset Park, Bay Ridge, Coney Island, and the broader Brooklyn community access OASAS-licensed inpatient opioid detox with the clinical depth that complex cases require.
>
> *[When /treatments/opioid-detox ships: add "Read more about opioid detox & MAT →" link per T-16]*

**Why:** Names specific MAT medications (buprenorphine, naltrexone) — critical because `medication assisted treatment brooklyn` is a query Surfpoint doesn't currently rank for. Mount Sinai dominates that cluster — Surfpoint's differentiation is **inpatient** MAT vs Mount Sinai's outpatient. Section makes that distinction visible.

---

### T-10 · CHANGE · Rewrite "Short-Term Rehab" H2 section

**Where:** Existing "Our short-term rehabilitation program Treats all of you: mind, body, and soul." H2 section.

**Spec — replace H2 + section content with:**

> ## Comprehensive Short-Term Inpatient Rehab
> *(add `id="short-term-rehab"` per T-05)*
>
> After medical detox, most patients transition into Surfpoint Recovery's short-term inpatient rehabilitation program — a structured 14–30 day continuum of care delivered at the same Brooklyn, NY facility, by the same clinical team. The continuity of care matters: relapse risk is highest in the gap between detox completion and the start of behavioral treatment.
>
> Our short-term rehab program includes individual therapy, group counseling, relapse prevention planning, life skills training, and integrated mental health care for patients with co-occurring conditions. Discharge planning begins on day one — we coordinate aftercare, sober living placement, and ongoing outpatient services so that the work continues beyond your stay.
>
> The program is available to adult patients at our 2316 Surf Avenue inpatient facility. Most major insurance is accepted.
>
> *[When /treatments/short-term-rehab ships: add "Read more about short-term inpatient rehab →" link per T-16]*

**Why:** The current H2 is poetic but content-thin. New version names duration (14–30 days), discharge planning, and clinical specificity. Addresses the lowest-competition query in the entire universe (`short term inpatient brooklyn` has only 1 real service-provider competitor in top 12 — Urban Recovery).

---

### T-11 · NEW · Add "Dual Diagnosis Treatment" H2

**Where:** Brand new H2 section. Place **after the "Opioid Detox" H2 section**, before "Short-Term Rehab".

**Spec — new H2 + content:**

> ## Dual Diagnosis Treatment
> *(add `id="dual-diagnosis"` per T-05)*
>
> Many patients arriving at our Brooklyn drug rehab center are managing more than substance use disorder. Depression, anxiety, PTSD, and other mental health conditions frequently co-occur — and treating addiction alone, without addressing the underlying psychiatric condition, dramatically increases relapse risk.
>
> Surfpoint Recovery uses an integrated dual diagnosis model: our licensed counselors, medical staff, and behavioral health clinicians work together to treat substance use disorder and co-occurring psychiatric conditions at the same time. The approach is grounded in Cognitive Behavioral Therapy (CBT) and evidence-based clinical frameworks, and is available to all adult patients at our inpatient facility.
>
> Most major insurance is accepted, including Medicaid — comprehensive co-occurring care is not gated by financial barriers.
>
> *[When /treatments/dual-diagnosis ships: add "Read more about dual diagnosis treatment →" link per T-16]*

**Why:** Dual diagnosis cluster has KD 2.9 (the lowest in the entire keyword universe) — easiest cluster to rank for organically. Per the LLM audit, `dual diagnosis brooklyn ny` was one of 3 commercial-local prompts where Surfpoint provides the service but isn't surfaced. Currently 0 dual-diagnosis mentions on /treatments. Adding this section as a hub block sets up the upcoming /treatments/dual-diagnosis sub-page (Wave 1 build per the sub-page plan).

---

### T-12 · NEW · Add "Drug Detox" H2

**Where:** Brand new H2 section. Place **after the intro** and **before "Alcohol Detox"** — drug detox sits as the broad parent that alcohol/opioid/benzo fall under.

**Spec — new H2 + content:**

> ## Drug Detox in Brooklyn, NY
> *(add `id="drug-detox"` per T-05)*
>
> Drug detox is the medically supervised process of safely removing harmful substances from the body. At Surfpoint Recovery, every drug detox plan is built around the specific substance involved — alcohol, opioids, benzodiazepines, or poly-substance dependence each requires a distinct clinical protocol.
>
> Our Brooklyn inpatient drug detox program is OASAS-licensed and CARF-accredited. Patients are monitored 24/7 by our licensed nursing and medical staff. The detox typically takes 3–7 days, after which patients transition directly into short-term inpatient rehabilitation under continuous clinical care.
>
> We treat the full range of substances — see the sections below for clinical details on alcohol, opioid, and benzodiazepine detox, and on the integrated dual diagnosis care available to patients with co-occurring mental health conditions.
>
> *[When /treatments/drug-detox ships: add "Read more about drug detox programs →" link per T-16]*

**Why:** Currently `Drug Detox` doesn't exist as an H2 on /treatments — it's the broadest service term and one of Surfpoint's actual service lines per `client.json`. `drug_broad` cluster is the biggest by addressable volume (2,850 geo-modified / 6,130 total addressable). Adding this section also creates the architectural parent that the substance-specific H2s nest under, and serves as the anchor target for users navigating from the "Drug Detox" entry in any locations × services matrix.

---

### T-13 · NEW · Add on-page lead form

**Where:** Mid-page (after the "Drug Detox" or "Alcohol Detox" H2 — first conversion opportunity above the fold of the section list) AND bottom-page (after the last service H2, before footer).

**Spec — same form pattern as the homepage form:** First Name, Last Name, Phone, Email, City, State, Insurance Type (dropdown: Medicaid / Aetna / Cigna / BCBS / Other / Not Sure), Brief Message (textarea, optional), Submit button.

Mid-page form should be visually less prominent than the bottom-page form (avoid disrupting content flow). Bottom-page form should be full-width with a strong header like "Ready to Begin? Talk to Our Admissions Team."

**Why:** Per the audit `metrics.csv`, current /treatments has 0 form tags. The page ranks at position 2.11 with 985 imps but 0 conversions tracked from it. Forms are the on-page conversion path. Without one, every interested visitor must navigate to /admissions or call — both of which add friction and break attribution.

---

### T-14 · NEW · "Areas We Serve" block + service-area map iframe

**Where:** New block placed near bottom of page, after the last service H2 (Short-Term Rehab), before the on-page form.

**Spec:**

> ## Areas We Serve
>
> Surfpoint Recovery accepts patients from across South Brooklyn and the broader New York City metro. Our 2316 Surf Avenue facility in Coney Island is the entry point for inpatient detox and rehabilitation.
>
> [Service-area Google Maps iframe — same as homepage H-14]
>
> **South Brooklyn neighborhoods we serve:**
> - [Coney Island](/locations/coney-island)
> - [Brighton Beach](/locations/brighton-beach-ny)
> - [Bay Ridge](/locations/accredited-addiction-recovery-center-in-bay-ridge-ny)
> - [Bensonhurst](/locations/bensonhurst)
> - [Bath Beach](/locations/bath-beach)
> - [Gravesend](/locations/comprehensive-rehabilitation-center-in-gravesend-bay-ny)
> - [Sheepshead Bay](/locations/sheepshead-bay-ny)
> - [Dyker Heights](/locations/dyker-heights)
> - [Manhattan Beach](/locations/manhattan-beach)
> - [Marine Park](/locations/marine-park)
> - [Flatlands](/locations/flatlands)
> - [Midwood](/locations/midwood)
> - [Fort Hamilton](/locations/dependable-rehab-in-fort-hamilton-ny)

**Allowlist rule:** Real-catchment neighborhoods only. **Do NOT link to:** `/locations/astoria`, `/locations/cambria-heights`, `/locations/corona`, `/locations/east-elmhurst`, `/locations/elmhurst`, `/locations/brownsville` — these are doorway URLs scheduled for redirect in Task 5.

**Why:** Currently 0 Coney Island / 1 Brooklyn mention on /treatments. Adding the neighborhood block + map iframe closes the geo signal gap; routes equity to real-catchment location pages; gives the /treatments hub the locations × services architecture role it should have.

---

### T-15 · CHANGE · Schema upgrade

**Where:** /treatments `<head>` section. Currently 0 JSON-LD blocks.

**Spec — add this single `@graph`:**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.surfpointrecovery.com/treatments#webpage",
      "url": "https://www.surfpointrecovery.com/treatments",
      "name": "Inpatient Detox & Rehabilitation Programs in Brooklyn, NY",
      "isPartOf": {"@id": "https://www.surfpointrecovery.com/#website"},
      "about": {"@id": "https://www.surfpointrecovery.com/#org"},
      "description": "Inpatient detox & rehab in Brooklyn, NY for alcohol, opioids, benzodiazepines & dual diagnosis. OASAS-licensed. CARF-accredited. Medicaid accepted."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.surfpointrecovery.com/"},
        {"@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://www.surfpointrecovery.com/treatments"}
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.surfpointrecovery.com/treatments#service-list",
      "name": "Inpatient Detox & Rehabilitation Programs",
      "numberOfItems": 6,
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Drug Detox", "url": "https://www.surfpointrecovery.com/treatments#drug-detox"},
        {"@type": "ListItem", "position": 2, "name": "Alcohol Detox", "url": "https://www.surfpointrecovery.com/treatments#alcohol-detox"},
        {"@type": "ListItem", "position": 3, "name": "Opioid Detox & Medication-Assisted Treatment", "url": "https://www.surfpointrecovery.com/treatments#opioid-detox"},
        {"@type": "ListItem", "position": 4, "name": "Benzodiazepine Detox", "url": "https://www.surfpointrecovery.com/treatments#benzodiazepine-detox"},
        {"@type": "ListItem", "position": 5, "name": "Dual Diagnosis Treatment", "url": "https://www.surfpointrecovery.com/treatments#dual-diagnosis"},
        {"@type": "ListItem", "position": 6, "name": "Comprehensive Short-Term Rehab", "url": "https://www.surfpointrecovery.com/treatments#short-term-rehab"}
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "What substances does Surfpoint Recovery detox?", "acceptedAnswer": {"@type": "Answer", "text": "Alcohol, opioids (heroin, prescription painkillers, fentanyl), benzodiazepines (Xanax, Klonopin, Ativan, Valium), and poly-substance dependence are the most common."}},
        {"@type": "Question", "name": "How long does inpatient detox take?", "acceptedAnswer": {"@type": "Answer", "text": "Most detox programs run 3 to 7 days. Patients typically transition into our short-term inpatient rehabilitation program (14 to 30 days) immediately after detox completion."}},
        {"@type": "Question", "name": "Is Surfpoint licensed to provide medication-assisted treatment (MAT)?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Surfpoint Recovery is OASAS-licensed and provides Medication-Assisted Treatment using FDA-approved medications including buprenorphine and naltrexone, under the supervision of licensed medical staff."}},
        {"@type": "Question", "name": "Do you treat dual diagnosis (mental health and addiction together)?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Our integrated dual diagnosis program treats substance use disorder and co-occurring conditions like depression, anxiety, and PTSD at the same time."}}
      ]
    }
  ]
}
```

**Why:** Currently 0 schema. The `ItemList` lets Google understand /treatments as a hub of related services; the `@id` cross-reference to `https://www.surfpointrecovery.com/#org` (the homepage MedicalBusiness entity) consolidates the entity graph; `FAQPage` is rich-result eligible. When /treatments/[service] sub-pages ship, the `ItemList` urls update to point directly to sub-page URLs (one-line edit per sub-page launch).

---

### T-16 · ROLLING · Update each H2 with "Read more →" link when sub-page ships

**Where:** Each service H2 section. Initially the link is OMITTED (sub-page doesn't exist). When the corresponding /treatments/[service] sub-page launches, add the link.

**Spec — link target per section:**

| H2 section | Add link when sub-page ships | Anchor text | Target URL |
|---|---|---|---|
| Drug Detox | Wave 3 (M3) | "Read more about drug detox programs →" | `/treatments/drug-detox` |
| Alcohol Detox | Wave 1 (M1) | "Read more about our alcohol detox program →" | `/treatments/alcohol-detox` |
| Opioid Detox & MAT | Wave 2 (M2) | "Read more about opioid detox & MAT →" | `/treatments/opioid-detox` |
| Benzodiazepine Detox | Wave 3 (M3) | "Read more about benzodiazepine detox →" | `/treatments/benzodiazepine-detox` |
| Dual Diagnosis Treatment | Wave 1 (M1) | "Read more about dual diagnosis treatment →" | `/treatments/dual-diagnosis` |
| Short-Term Rehab | Wave 2 (M2) | "Read more about short-term rehab →" | `/treatments/short-term-rehab` |

Also: update the `ItemList` schema (T-15) `url` field for each item from `#anchor` to `/treatments/[slug]` when the sub-page ships.

**Why:** Hub-and-spoke routing. While the hub is the only ranking surface today, anchor links serve the user. Once each sub-page exists, the hub becomes a routing layer + brief overview + entry point.

**Per-launch checklist:** When sub-page Y ships → (1) add the "Read more" link in H2 Y on /treatments, (2) update `ItemList[Y].url` in schema, (3) update homepage H-23 contextual link for Y from `/treatments#Y` to `/treatments/Y` if you want direct routing (optional — anchor link still works).

---

## 3. Schema spec

See T-15 above.

---

## 4. Dependencies + open inputs

| Item | Status | Owner | Mitigation |
|---|---|---|---|
| Service-area Google Maps embed URL | Same as homepage H-14 — share the iframe `src` | Aleksa | n/a |
| Logo + hero image paths for schema | Same as homepage — use the homepage MedicalBusiness `@id` reference | Aleksa | Schema cross-reference removes the need for duplicate logo/image fields |
| `/locations/[slug]` link verification | Pre-deploy step — confirm each link in T-14 returns 200 | Aleksa | Drop neighborhoods whose location page is missing |
| Form integration (HubSpot / Calendly / native CMS) | Aleksa to confirm pattern, ideally match homepage form | Aleksa + Dev | Use same form across homepage + /treatments + sub-pages |
| Insurance carrier visibility (T-06 mentions all 4) | Already accurate per `client.json` | n/a | n/a |

---

## 5. Phase acceptance criteria (binary)

- [ ] All 15 non-rolling items (T-01 through T-15) shipped
- [ ] T-16 begins as sub-pages ship (rolling — not blocking initial /treatments deploy)
- [ ] Schema validator pass + Rich Results Test pass (FAQPage, BreadcrumbList eligible)
- [ ] All H2s have `id` attributes matching homepage H-23 anchor link targets
- [ ] No layout breaks at 320px / 768px / 1280px / 1920px
- [ ] Core Web Vitals re-baseline within or better than pre-deploy
- [ ] Meta title + description live and verified in GSC URL inspection post-deploy
- [ ] Index status confirmed post-deploy (page already indexed; ensure no de-index from changes)
- [ ] CTR improvement tracked — target 30-day post-deploy CTR ≥ 1% (current 0.2%)

---

## 6. Risks + rollback

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Position 2.11 ranking drops during re-crawl | Low-Med | **Medium-High** (this is the page already winning impressions) | Stage carefully; submit URL inspection request post-deploy; daily GSC monitoring for 14 days |
| Schema validator errors block deploy | Medium | Low | 3-layer pre-deploy gate |
| CTR fails to improve despite content/meta upgrade | Low | Medium | If 30-day CTR still <0.5%, the queries it ranks for are brand-eaten-by-GBP; investigate via GSC per-query CTR — different intervention needed |
| H2 IDs accidentally collide with existing CSS / JS selectors | Low | Low | Pre-deploy code review |
| Adding 4 new sections drops ranking from content-dilution | Very Low | Low | Content is on-topic for the page's existing topic; no off-topic addition risk |

**Rollback:** Revert via CMS version history. Schema reverts via single `<script>` block removal. New sections (T-11, T-12, T-13, T-14) can be individually toggled off.

---

## 7. Aleksa feasibility-pass questions

1. CMS hand-off path same as homepage?
2. Anchor IDs (T-05) — can these ship before the homepage H-23 contextual links go live, OR co-ship with homepage Phase A?
3. Form integration (T-13) — same form pattern as homepage, or different?
4. Timeline target — same M1 ship window as homepage Phase A, or sequenced after?
5. Should the meta description trim to ~155 chars be done by Aleksa or Content (T-02)?

---

## 8. Reference

- **Audit data:** `exports/competitive_audit/raw_html/sp_treatments.html` + `metrics.csv`
- **GSC performance:** `exports/gsc/pages_last_30d.csv` (985 imps, 2 clicks, pos 2.11)
- **Homepage brief:** `deliverable/Surfpoint_Homepage_Update_Brief.md` (defines the anchor link contract via H-23)
- **Sub-page build plan:** `deliverable/Surfpoint_Treatments_SubPages_BuildPlan.md`
- **Legacy redirect plan:** `deliverable/Surfpoint_Services_Legacy_Redirect_Plan.md`

---

*End of /treatments Hub Update Brief.*
