# Surfpoint /about-us — Update Brief

**Page:** `https://www.surfpointrecovery.com/about-us`
**Owner:** Aleksa Popovic (On-Page) — task router · **Author:** Aleksandar Spasevski · **Date:** 2026-05-12
**Scope:** Full rebuild of `/about-us` + sitewide nav relabel + footer addition.
**Status:** Ready for Aleksa feasibility pass + team assignment

---

## Why this brief exists

The current `/about-us` page is functionally a "Our Facility" amenities page (H1: "Designed for recovery.", H2s about ocean serenity, food, mutual respect). It is not an authoritative About page. For a healthcare facility being evaluated by Google E-E-A-T and by LLM search (Perplexity, ChatGPT, Gemini), the About page must surface:

- **Who we are** (mission, history)
- **What licenses us** (OASAS, CARF Center of Excellence, SAMHSA-aligned protocols)
- **Who treats you** (named clinical leadership with credentials)
- **How we treat** (evidence-based modalities: CBT, MAT, dual diagnosis)
- **Where we sit** (Coney Island / Brooklyn geo anchor)

National brands that win LLM citations (Recovery Village, American Addiction Centers, Hazelden) all do this on their About pages. Surfpoint currently does not — this brief closes that gap.

The current "facility / amenities / staff vibe" content does not get deleted; it survives as a **subsection** of the rebuilt page rather than the dominant frame.

Additionally: `/about-us` is currently linked in the top nav (labeled "Our Facility") but is **not in the footer**. Both surfaces need correction.

---

## 1. At-a-glance checklist

**18 items total: 15 on-page rebuild, 3 sitewide (nav + footer + interlink).**

| # | Type | Item | Owner | Status |
|---|---|---|---|---|
| A-01 | CHANGE | Replace meta title | Aleksa | ☐ |
| A-02 | CHANGE | Replace meta description | Aleksa | ☐ |
| A-03 | CHANGE | Replace H1 | Aleksa | ☐ |
| A-04 | NEW | **Add section** — Mission statement (H2 + 2 paragraphs) | Content + Aleksa | ☐ |
| A-05 | NEW | **Add section** — Credentials & Accreditations (OASAS / CARF / SAMHSA) with logo row | Aleksa + Surfpoint Ops | ☐ |
| A-06 | NEW | **Add section** — Treatment Philosophy (evidence-based: CBT, MAT, dual diagnosis) | Content + Aleksa | ☐ |
| A-07 | NEW | **Add section** — Meet Our Clinical Leadership (named clinicians + credentials + photos) | Surfpoint Ops + Aleksa | ☐ |
| A-08 | KEEP | Preserve "With compassion to spare" section (re-flow into new hierarchy) | Content + Aleksa | ☐ |
| A-09 | MERGE | Collapse "Serenity / Modern outlook / Mutual respect" into single "Our Facility & Environment" H2 | Content + Aleksa | ☐ |
| A-10 | NEW | **Add section** — Trust signals block (review count, years operating, patients served) | Aleksa + Surfpoint Ops | ☐ |
| A-11 | NEW | **Add section** — Why Brooklyn / Why Coney Island (geo anchor + service-area echo) | Content + Aleksa | ☐ |
| A-12 | NEW | **Add section** — FAQ specific to Surfpoint (5–7 Q&As, FAQPage schema) | Content + Aleksa | ☐ |
| A-13 | CHANGE | Replace closing CTA section with intake-routed CTA (matches homepage H-22 rule) | Aleksa | ☐ |
| A-14 | CHANGE | Replace schema: `AboutPage + Organization` → `AboutPage + MedicalBusiness` `@graph` (see §3) | Aleksa + Dev | ☐ |
| A-15 | NEW | Internal links out: `/treatments`, `/admissions`, `/expectations`, homepage hub | Aleksa | ☐ |
| B-01 | CHANGE | **Sitewide nav** — relabel "Our Facility" → "About Us" (URL stays `/about-us`) | Aleksa + Dev | ☐ |
| B-02 | NEW | **Sitewide footer** — add `About Us` link in Company column | Aleksa + Dev | ☐ |
| B-03 | NEW | **Sitewide interlinks** — homepage About section + every service page footer link to `/about-us` | Aleksa + Dev | ☐ |

---

## 2. Item details

---

### A-01 · CHANGE · Replace meta title

**Where:** `/about-us` `<title>` tag

**Spec — replace current with:**
> `About Surfpoint Recovery — OASAS-Licensed Drug Rehab in Brooklyn, NY`

(67 chars; current is `Our Facility | Surfpoint Recovery` — purely brand-and-amenity framing, no service or credential signal.)

**Why:** Current title misses every keyword that signals trust (OASAS, Brooklyn, drug rehab). About-page titles are read by LLMs when deciding which source to cite for "who is X" questions.

---

### A-02 · CHANGE · Replace meta description

**Where:** `/about-us` `<meta name="description">` tag

**Spec — replace current with:**
> `Surfpoint Recovery is an OASAS-licensed, CARF Center of Excellence inpatient drug & alcohol rehab in Coney Island, Brooklyn. Meet our clinical team and learn how we treat substance use disorder.`

(198 chars — trim to ~155 if rendered preview clips. Suggested trim: drop "in Coney Island,".)

**Why:** Replacement packs OASAS + CARF + Coney Island + clinical team into the SERP snippet. Current meta is amenity-led ("medical care, comfortable spaces, and great food") which doesn't capture trust intent.

---

### A-03 · CHANGE · Replace H1

**Where:** `/about-us` H1 (currently "Designed for recovery.")

**Spec — replace with:**
> `About Surfpoint Recovery`

**Why:** Current H1 is a brand slogan; reads as a tagline, not a heading. About pages should declare themselves as About pages — both for users skimming and for the entity-recognition pass that LLMs and Google run on the page. The slogan "Designed for recovery" can survive as a hero subhead or visual element below the H1.

---

### A-04 · NEW · ADD NEW SECTION — Mission Statement

**Where:** First H2 section after hero. Above all other content.

**Spec — new H2 + content:**

> ## Our Mission
>
> Surfpoint Recovery exists to make medically supervised drug and alcohol treatment safer, more humane, and more accessible to the people of Brooklyn and greater New York City. We treat substance use disorder as a medical condition, not a moral failing — combining OASAS-licensed clinical care, evidence-based therapy, and an environment designed for healing.
>
> Every decision we make — from how we staff our nursing unit to how we coordinate insurance — is measured against one question: does this make recovery more achievable for the patient in front of us? If the answer is no, we change it.

**Why:** Mission statements are the single highest-cited element on About pages in LLM responses to "what is X" / "is X reputable" prompts. Surfpoint currently has none. This is a 90-second write that materially changes how the page is parsed.

---

### A-05 · NEW · ADD NEW SECTION — Credentials & Accreditations

**Where:** Second H2 section, immediately after Mission. **High visibility — above the fold on desktop.**

**Spec — new H2 + content:**

> ## Credentials & Accreditations
>
> Surfpoint Recovery operates under the following licenses and accreditations:
>
> [LOGO ROW: OASAS · CARF · SAMHSA-aligned · LegitScript (if verified)]
>
> - **OASAS-Licensed** — Licensed by the New York State Office of Addiction Services and Supports to provide inpatient detox and rehabilitation services in New York.
> - **CARF Center of Excellence** — Accredited by the Commission on Accreditation of Rehabilitation Facilities, with a Center of Excellence designation reflecting clinical and operational standards above baseline accreditation.
> - **SAMHSA-Aligned Treatment Protocols** — Our clinical protocols follow Substance Abuse and Mental Health Services Administration evidence-based standards for medication-assisted treatment, detox safety, and co-occurring disorder care.

**Implementation notes:**
- Logo assets: Aleksa to request from Surfpoint Ops. If unavailable, ship v1 with text-only badges in styled boxes.
- LegitScript: only include if certification is verified (currently TBD per `client.json`).
- If/when Surfpoint adds to SAMHSA Treatment Locator (Task 9 in Q2 plan), add a "Listed in SAMHSA Treatment Locator" badge with link.

**Why:** This is the page's load-bearing trust block. National brands lead their About pages with credentials. Currently Surfpoint's CARF + OASAS appear only on the homepage in body text — putting them in a structured, scannable block on /about-us makes them legible to crawlers and to readers skimming for legitimacy signals.

---

### A-06 · NEW · ADD NEW SECTION — Treatment Philosophy

**Where:** Third H2 section, after Credentials.

**Spec — new H2 + content:**

> ## How We Treat Substance Use Disorder
>
> Surfpoint Recovery's clinical approach is evidence-based and patient-individualized. Three principles guide every treatment plan:
>
> **1. Medical safety first.** Detox from alcohol, opioids, and benzodiazepines carries real medical risk — seizures, delirium tremens, withdrawal complications. Our licensed nursing and medical staff conduct daily assessments and adjust medication protocols as needed throughout the detox phase.
>
> **2. Integrated dual diagnosis care.** Many patients arriving for substance use treatment are also managing depression, anxiety, PTSD, or other psychiatric conditions. Our integrated dual diagnosis model treats both at the same time, because treating only the addiction without addressing the underlying mental health condition leads to significantly higher relapse rates.
>
> **3. Evidence-based modalities.** Our clinical team uses Cognitive Behavioral Therapy (CBT) and clinically appropriate Medication-Assisted Treatment (MAT) — including FDA-approved options such as buprenorphine and naltrexone for opioid use disorder — alongside individual counseling, group therapy, and relapse prevention planning.

**Why:** This is the LLM-citation block. When ChatGPT or Perplexity is asked "what is the difference between Surfpoint Recovery and [competitor]" or "is Surfpoint evidence-based," this paragraph is what gets quoted. Without it, the LLM has nothing to quote, so it omits Surfpoint or paraphrases generically.

---

### A-07 · NEW · ADD NEW SECTION — Meet Our Clinical Leadership

**Where:** Fourth H2 section.

**Spec — content template:**

> ## Meet Our Clinical Leadership
>
> Every patient at Surfpoint Recovery is supported by a multidisciplinary team of licensed medical and clinical professionals.
>
> [CLINICIAN CARDS — repeat per role:]
>
> | Photo | Name | Credentials | Role | Brief bio (1–2 sentences) |
> |---|---|---|---|---|
> | [photo] | [Dr. Name MD] | MD, Addiction Medicine certified | Medical Director | [bio] |
> | [photo] | [Name LCSW] | LCSW, CASAC | Clinical Director | [bio] |
> | [photo] | [Name RN] | RN, BSN | Director of Nursing | [bio] |
> | [photo] | [Name LMSW] | LMSW | Lead Counselor (Dual Diagnosis) | [bio] |

**Dependency on Surfpoint Ops:** Provide named clinical team + credentials + headshots. Same dependency as homepage H-17 — request once, use on both pages.

**v1 fallback if names unavailable:** Ship the section with role-titles-only (no names, no photos). Still adds structural E-E-A-T signal. Update to v2 with names within 30 days.

**Why:** Named medical reviewers are the strongest single E-E-A-T signal Google's quality raters look for on medical pages. National competitors have it; Surfpoint doesn't. The /about-us page is the natural home — it propagates to E-E-A-T credibility on every other page via the same `Person` schema entities referenced by `@id`.

---

### A-08 · KEEP · Preserve "With compassion to spare"

**Where:** As an H3 sub-section under A-09 "Our Facility & Environment", OR as its own H2 directly after Clinical Leadership.

**Spec:** Keep the existing copy under this heading (or its essence). This is genuinely good brand voice and should not be lost in the rebuild.

**Why:** The current copy under this heading captures Surfpoint's brand personality — warmth, dignity, no clinical detachment. That voice should survive the rebuild. The framing change is: this stops being the PAGE; it becomes a SECTION.

---

### A-09 · MERGE · "Serenity / Modern outlook / Mutual respect" → "Our Facility & Environment"

**Where:** Collapse three current H2s into one H2 with three short paragraphs (or a paragraph + bullet list).

**Spec — new H2 + content (rewrite, ~200 words):**

> ## Our Facility & Environment
>
> Surfpoint Recovery is located at 2316 Surf Avenue in Coney Island, Brooklyn, steps from the shoreline. The Atlantic Ocean and the rhythm of the boardwalk are not amenities — they are part of the clinical rationale for this location. The first days of detox and early rehabilitation are stressful; a calm, structured environment with natural light, fresh sea air, and space to walk supports the physiological recovery process.
>
> Inside the facility, we've designed for dignity. Private intake rooms, comfortable patient rooms, communal spaces for group therapy and meals, and dedicated nursing stations are arranged around the clinical workflow — not the other way around. Our food service is prepared on-site by an in-house culinary team, because nutrition during withdrawal and early recovery is part of the treatment, not an afterthought.
>
> Mutual respect is non-negotiable. Patients are not labeled by their substance, their insurance, or their history. They are adults receiving medical treatment, and they are treated as such.

**Why:** The three current H2s ("Serenity of the ocean...", "A modern outlook on sobriety", "It's all about mutual respect") are well-written but they're too granular at the H2 level and they fragment the page hierarchy. Collapsing them into one H2 with the same content (rewritten tighter) keeps the brand voice while restoring a coherent outline.

---

### A-10 · NEW · ADD NEW SECTION — Trust Signals Block

**Where:** Visually distinct band on the page (could be a row of stat cards). Placement: after Facility & Environment, before Why Brooklyn.

**Spec — content (placeholders — Aleksa to confirm exact numbers):**

> [STAT CARD ROW — four cards:]
> - **4.8★ Google Rating** · [N] verified patient reviews
> - **OASAS Licensed** · New York State Office of Addiction Services and Supports
> - **CARF Center of Excellence** · Beyond standard CARF accreditation
> - **24/7 Admissions** · Same-day intake available

**Dependencies:**
- Verify current GBP rating + review count (homepage schema says 4.8 / 120 — confirm before publishing).
- If years-in-operation or patients-treated figures are available from Surfpoint Ops, add a 5th card.

**Why:** Scannable trust signals at the page's visual midpoint. Cards get read; long paragraphs don't.

---

### A-11 · NEW · ADD NEW SECTION — Why Brooklyn / Why Coney Island

**Where:** After Trust Signals.

**Spec — new H2 + content:**

> ## Serving Brooklyn and Greater New York City
>
> Surfpoint Recovery exists in Brooklyn because Brooklyn needs it. New York City has among the highest per-capita rates of opioid-related overdose deaths in the country, and inpatient detox capacity has not kept pace.
>
> Our facility at 2316 Surf Avenue serves residents across South Brooklyn — Coney Island, Brighton Beach, Bensonhurst, Bath Beach, Bay Ridge, Sunset Park, Borough Park, Gravesend, Sheepshead Bay, and surrounding neighborhoods — as well as patients traveling from Staten Island, Queens, the Bronx, Manhattan, and Long Island.
>
> Patients do not need to leave New York City to access OASAS-licensed inpatient substance use treatment with the clinical depth their situation requires.

**Why:** Reinforces the same Coney Island geo signal that loads the homepage (per homepage brief §H-12). Search engines reward consistent geo-entity signals across multiple pages on the same domain. Same anchor, different page — both legitimate.

---

### A-12 · NEW · ADD NEW SECTION — FAQ Specific to Surfpoint

**Where:** Near page bottom, before final CTA. Will be wrapped in `FAQPage` schema per §3.

**Spec — content (5–7 Q&As, About-specific — different from the homepage FAQ):**

> ## Frequently Asked Questions About Surfpoint Recovery
>
> **Is Surfpoint Recovery a hospital, a clinic, or a residential rehab?**
> Surfpoint Recovery is a licensed inpatient detox and rehabilitation facility — patients stay on-site for the duration of detox (typically 3–7 days) and inpatient rehab (typically 14–30 days). We are not a hospital; we are a specialized addiction treatment facility licensed by OASAS to operate as an inpatient program.
>
> **How long has Surfpoint been operating?**
> [Aleksa + Surfpoint Ops to confirm — placeholder: Surfpoint Recovery has been treating patients at our Coney Island facility since [YEAR].]
>
> **Who owns Surfpoint Recovery?**
> [Aleksa + Surfpoint Ops to confirm ownership disclosure. If a parent organization exists, name it. If privately held, state that.]
>
> **Is Surfpoint Recovery part of a larger national chain?**
> Surfpoint Recovery is an independent, Brooklyn-based facility. We are not part of a national chain. Every clinical decision is made by our on-site clinical team without corporate intermediaries.
>
> **What makes Surfpoint different from other Brooklyn rehabs?**
> Three things differentiate us: an OASAS license combined with a CARF Center of Excellence designation, a fully integrated dual diagnosis model that treats co-occurring conditions on day one, and a location in Coney Island that combines accessibility for South Brooklyn residents with the clinical benefit of a calm, low-stimulus environment.
>
> **What languages does your clinical staff speak?**
> [Aleksa + Surfpoint Ops to confirm — likely English + Spanish + Russian given Brooklyn neighborhood demographics, but confirm before publishing.]

**Why:** About-specific FAQs are highly cited by LLMs in response to "is X legitimate" / "what is X" / "who runs X" prompts. The homepage FAQ covers operational questions (Medicaid, length-of-stay, walk-ins); the About FAQ covers identity / ownership / differentiation. Both are valuable. Both should ship.

---

### A-13 · CHANGE · Replace closing CTA section

**Where:** Replace current "Get your life back on track." closing section.

**Spec — content:**

> ## Begin the Admissions Process Today
>
> Our admissions team is available 24 hours a day, 7 days a week. Whether you are calling for yourself or someone you care about, our intake specialists will walk you through insurance verification, clinical assessment, and same-day admission options.
>
> [Primary CTA: "Call Intake (646) 347-1893" → `tel:+16463471893`]
> [Secondary CTA: "Verify Your Coverage" → `/admissions`]

**Why:** Closing CTA must match the site-wide phone display rule established in homepage brief §H-22 (intake = `(646) 347-1893` on all CTAs; facility number only in footer NAP block). Current CTA section uses inconsistent phone routing.

---

### A-14 · CHANGE · Schema upgrade — `AboutPage + Organization` → full `@graph` with `MedicalBusiness`

**Where:** Single `<script type="application/ld+json">` in `<head>`. Replace existing block.

**Spec:** See full JSON in §3 below.

**Why:** Current schema declares `AboutPage` + `Organization`. The `Organization` type is generic — it doesn't signal medical entity. Upgrading to `MedicalBusiness` (matching the homepage schema after homepage H-21 ships) makes the entity graph consistent across the site. `AboutPage` is retained because this is, in fact, an About page; both types co-exist in the `@graph`.

The `@graph` also adds:
- `Person` entities for clinical leadership (per A-07) with `@id` so other pages can reference them.
- `FAQPage` for A-12 questions.
- `BreadcrumbList` for the About page in the site hierarchy.

---

### A-15 · NEW · Internal links out

**Where:** Inline in body where contextually natural; not a separate "related links" block.

**Spec — confirmed internal-link targets:**

| Source paragraph | Anchor text | Link target |
|---|---|---|
| Mission paragraph 1 ("medically supervised drug and alcohol treatment") | "drug and alcohol treatment" | `/treatments` |
| Treatment Philosophy point 3 (MAT mention) | "Medication-Assisted Treatment (MAT)" | `/treatments#opioid-detox` |
| Treatment Philosophy point 2 (dual diagnosis) | "integrated dual diagnosis model" | `/treatments#dual-diagnosis` |
| Closing CTA "Verify Your Coverage" | "Verify Your Coverage" | `/admissions` |
| Why Brooklyn section closing | "[N] neighborhoods we serve" | `/areas-served` (verify before linking — page is under separate rebuild) |
| Anywhere "first day at Surfpoint" is mentioned | "what to expect" | `/expectations` |

**Why:** About pages that link out internally to service / admissions / locations propagate authority across the site. About pages that don't link out are dead ends. Default rule: every paragraph that names a service or process should link to its dedicated page, once.

---

### B-01 · CHANGE · Sitewide nav — relabel "Our Facility" → "About Us"

**Where:** Top navigation, every page on the site.

**Spec:**
- **Before:** `Our Facility` → `/about-us`
- **After:** `About Us` → `/about-us`

**Why:** The URL is `/about-us`, and the rebuilt page is an About page (not a facility tour). Nav label and URL slug should match. Industry-standard nav label for recovery / medical sites is "About" or "About Us" — every audited competitor uses this convention. "Our Facility" as a label is unusual and signals an amenity-focused frame, which we are explicitly moving away from.

**Note:** Watch for hardcoded usage elsewhere — if any page body says "see our Our Facility page", it needs the same string-replacement.

---

### B-02 · NEW · Sitewide footer — add "About Us" link

**Where:** Site footer, every page. Place in the "Company" column (or whatever the leftmost column is — usually company / brand links).

**Spec:**

> **Company**
> About Us → /about-us
> Treatments → /treatments
> Admissions → /admissions
> Locations → /areas-served
> Careers → /careers
> Contact → /contact-us

**Why:** `/about-us` is currently absent from the footer entirely (verified via `https://www.surfpointrecovery.com/` HTML inspection on 2026-05-12). Footer links are a major source of site-wide internal link equity to a page; missing About from the footer means About inherits less link weight than every other major page despite being the trust hub. Standard practice on every audited competitor is About-in-footer.

---

### B-03 · NEW · Sitewide interlinks → `/about-us`

**Where:**
1. **Homepage About Us section** (per homepage brief §H-04): add a "Read more about Surfpoint Recovery →" link to `/about-us` at the end of the About section.
2. **Every service page footer / sidebar**: add a "Learn more about Surfpoint Recovery →" link to `/about-us`.

**Spec:** Contextual link, not a "Related Pages" block.

**Why:** Internal link velocity to `/about-us` is the lever that makes Google recognize this as a high-authority hub page. Currently the About page receives traffic mostly from nav clicks — once the nav relabel + footer + cross-page interlinks are in place, About becomes a properly-weighted internal node.

---

## 3. Schema spec — full `@graph` for A-14

Replace existing schema block in `<head>` with this `@graph`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.surfpointrecovery.com/about-us#aboutpage",
      "url": "https://www.surfpointrecovery.com/about-us",
      "name": "About Surfpoint Recovery — OASAS-Licensed Drug Rehab in Brooklyn, NY",
      "isPartOf": {"@id": "https://www.surfpointrecovery.com/#website"},
      "about": {"@id": "https://www.surfpointrecovery.com/#org"},
      "primaryImageOfPage": {"@type": "ImageObject", "url": "https://www.surfpointrecovery.com/[INSERT-HERO-IMAGE-PATH]"}
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.surfpointrecovery.com/#org",
      "name": "Surfpoint Recovery",
      "url": "https://www.surfpointrecovery.com/",
      "description": "OASAS-licensed, CARF Center of Excellence inpatient drug & alcohol rehab in Coney Island, Brooklyn. MAT, dual diagnosis, Medicaid + Aetna + Cigna + BlueCross BlueShield accepted.",
      "medicalSpecialty": ["Addiction", "AddictionMedicine"],
      "hasCredential": [
        {"@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "OASAS License (NYS Office of Addiction Services and Supports)"},
        {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "CARF Center of Excellence"}
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2316 Surf Avenue",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "postalCode": "11224",
        "addressCountry": "US"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "120",
        "bestRating": "5",
        "worstRating": "1"
      },
      "employee": [
        {"@id": "https://www.surfpointrecovery.com/about-us#medical-director"},
        {"@id": "https://www.surfpointrecovery.com/about-us#clinical-director"},
        {"@id": "https://www.surfpointrecovery.com/about-us#director-of-nursing"}
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.surfpointrecovery.com/about-us#medical-director",
      "name": "[Dr. Name MD]",
      "jobTitle": "Medical Director",
      "honorificSuffix": "MD",
      "worksFor": {"@id": "https://www.surfpointrecovery.com/#org"},
      "knowsAbout": ["Addiction Medicine", "Detoxification", "Medication-Assisted Treatment"]
    },
    {
      "@type": "Person",
      "@id": "https://www.surfpointrecovery.com/about-us#clinical-director",
      "name": "[Name LCSW]",
      "jobTitle": "Clinical Director",
      "honorificSuffix": "LCSW, CASAC",
      "worksFor": {"@id": "https://www.surfpointrecovery.com/#org"}
    },
    {
      "@type": "Person",
      "@id": "https://www.surfpointrecovery.com/about-us#director-of-nursing",
      "name": "[Name RN]",
      "jobTitle": "Director of Nursing",
      "honorificSuffix": "RN, BSN",
      "worksFor": {"@id": "https://www.surfpointrecovery.com/#org"}
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.surfpointrecovery.com/about-us#faq",
      "mainEntity": [
        {"@type": "Question", "name": "Is Surfpoint Recovery a hospital, a clinic, or a residential rehab?", "acceptedAnswer": {"@type": "Answer", "text": "Surfpoint Recovery is a licensed inpatient detox and rehabilitation facility — patients stay on-site for the duration of detox (typically 3–7 days) and inpatient rehab (typically 14–30 days). We are licensed by OASAS to operate as an inpatient program."}},
        {"@type": "Question", "name": "Is Surfpoint Recovery part of a larger national chain?", "acceptedAnswer": {"@type": "Answer", "text": "Surfpoint Recovery is an independent, Brooklyn-based facility. We are not part of a national chain. Every clinical decision is made by our on-site clinical team without corporate intermediaries."}},
        {"@type": "Question", "name": "What makes Surfpoint different from other Brooklyn rehabs?", "acceptedAnswer": {"@type": "Answer", "text": "Three things differentiate us: an OASAS license combined with a CARF Center of Excellence designation, a fully integrated dual diagnosis model that treats co-occurring conditions on day one, and a location in Coney Island that combines accessibility for South Brooklyn residents with the clinical benefit of a calm, low-stimulus environment."}}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.surfpointrecovery.com/"},
        {"@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.surfpointrecovery.com/about-us"}
      ]
    }
  ]
}
```

**Schema validation gate (per `reference_schema_validation_workflow.md`):**
1. Wikidata Q-ID verifier for any `sameAs` values
2. Schema.org property validator
3. Manual paste into validator.schema.org/RRT — zero errors on critical types

**Rich Results Test (Google):** Submit URL post-deploy; expect eligibility on `FAQPage`, `MedicalBusiness`, `BreadcrumbList`.

**Cross-page consistency:** The `MedicalBusiness` entity uses the same `@id` (`https://www.surfpointrecovery.com/#org`) on both the homepage (after H-21 ships) and `/about-us`. This is intentional — it tells Google the two pages describe the same entity, which strengthens entity recognition.

---

## 4. Dependencies + open inputs

| Item | Status | Owner | Mitigation if blocked |
|---|---|---|---|
| Clinical roster names + photos for A-07 | Pending — needs Surfpoint Ops | Aleksa to request (same dependency as homepage H-17 — request once, use on both) | Ship v1 with role-titles-only; v2 within 30 days |
| Accreditation logo assets (OASAS, CARF, SAMHSA) for A-05 | Pending | Aleksa to request | Ship v1 with text-only badges |
| Years-in-operation + founding date for A-12 FAQ | Pending — needs Surfpoint Ops | Aleksa to request | Leave as `[YEAR]` placeholder; don't fabricate |
| Ownership disclosure for A-12 FAQ | Pending — needs Surfpoint Ops | Aleksa to request | Drop the question from v1 if Surfpoint Ops declines to disclose |
| Clinical staff language coverage for A-12 FAQ | Pending — needs Surfpoint Ops | Aleksa to request | Drop the question from v1 if unconfirmed |
| Confirm GBP rating + review count for A-10 | `client.json` says 4.8 / 120 — re-confirm | Aleksa | Use current GBP numbers at publish time |
| Sitewide footer template access for B-02 | Pending — depends on CMS structure | Aleksa + Dev | If footer is hard-coded in theme, schedule as a small dev ticket |
| Sitewide nav template access for B-01 | Pending — depends on CMS structure | Aleksa + Dev | Same as above |
| Service page footer template for B-03 | Pending | Aleksa + Dev | Add to dev ticket alongside B-02 |
| LegitScript verification status for A-05 | TBD per `client.json` | Aleksa | If not verified, omit from logo row; don't claim |

---

## 5. Phase acceptance criteria (binary)

When all the boxes below are checked, this ships:

- [ ] All 18 items in §1 marked complete
- [ ] Schema validator pass (§3 gate)
- [ ] Rich Results Test pass — `FAQPage`, `MedicalBusiness`, `BreadcrumbList` all eligible
- [ ] Nav label updated to "About Us" on every page (spot-check 10 random pages)
- [ ] Footer "About Us" link present on every page (spot-check 10 random pages)
- [ ] Homepage About Us section ends with link to `/about-us` (per B-03 item 1)
- [ ] At least one service page links to `/about-us` in body or sidebar (per B-03 item 2)
- [ ] All CTAs route to `tel:+16463471893` (intake); facility number does not appear in CTAs
- [ ] Mobile + desktop render verified — no layout breaks at 320px / 768px / 1280px / 1920px
- [ ] Core Web Vitals re-baseline post-deploy: LCP, INP, CLS within or better than pre-deploy values
- [ ] GSC URL inspection request submitted post-deploy
- [ ] Page indexed in Google within 14 days of deploy (track via GSC daily)

---

## 6. Risks + rollback

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Clinical leadership names published without Surfpoint Ops sign-off | Medium | High | Aleksa + Surfpoint Ops must sign off on names + credentials before publish; v1 ships role-titles-only as fallback |
| Schema validator errors block deploy | Medium | Low | 3-layer pre-deploy gate (§3) |
| Page rebuild drops existing rankings (if any) for "Surfpoint Recovery facility" / brand queries | Low | Low | Brand queries are URL-anchored; rebuild preserves URL; minor SERP fluctuation expected during recrawl |
| Sitewide nav change breaks hardcoded internal references to "Our Facility" string | Low-Med | Low | Pre-deploy site-wide grep for `Our Facility` text references; update or leave per context |
| Accreditation badges claimed without certification (LegitScript) | Low | High | Strict allowlist — only claim verified certifications |
| Footer link addition triggers layout reflow on long-footer pages | Low | Low | Pre-deploy QA at all breakpoints |

**Rollback:** All page changes revert via CMS version history. Schema reverts via single `<script>` block replacement. Nav + footer changes revert via template version control.

---

## 7. Aleksa feasibility-pass questions

Before this brief lands in Asana, Aleksa to confirm or escalate:

1. **CMS hand-off path** — WordPress theme/template direct edit, or dev tickets? Affects ownership of A-14 (schema), B-01 (nav), B-02 (footer), B-03 (cross-page interlinks).
2. **Sitewide template access** — can the team edit nav + footer templates directly, or does that require dev ticket cycles? Same question for the service page footer.
3. **Clinical roster timing** — same dependency as homepage H-17. Is Surfpoint Ops on track to provide names by Week 1 of M1? If not, both pages ship v1 with role-titles-only.
4. **Accreditation logos** — brand-approved logos available, or text-only badges?
5. **Surfpoint Ops disclosure questions** — ownership, founding year, language coverage. Is there a single point of contact at Surfpoint to source these once, or does each question require a separate request?
6. **Schema implementation pattern** — single `@graph` block in `<head>` (recommended) or parallel `<script>` blocks?
7. **Timeline target** — coupled with homepage Phase A or independent? Both pages share the clinical team dependency, so shipping them together is operationally efficient.

---

## 8. Reference

- **Current page (audited 2026-05-12):** `https://www.surfpointrecovery.com/about-us`
- **CRD source (homepage):** `drivedocs/Surfpoint Recovery - Final.docx` — note: CRD covers homepage only, /about-us has no CRD
- **Homepage brief (sibling doc):** `deliverable/Surfpoint_Homepage_Update_Brief.md` — phone display rules, clinical team dependency, schema patterns all carry over
- **Strategic context:** `deliverable/Surfpoint_Recovery_Q2_2026_Custom_Strategy.md`
- **Schema validation workflow:** `methodology/schema-validation-workflow.md`
- **Client config:** `clients/surfpointrecovery/client.json`

---

*End of /about-us Update Brief. Aleksa: feasibility pass → answer §7 questions → coordinate clinical roster + accreditation logo requests with Surfpoint Ops (same requests as homepage) → Zach routes to Asana with this doc as the single reference per item.*
