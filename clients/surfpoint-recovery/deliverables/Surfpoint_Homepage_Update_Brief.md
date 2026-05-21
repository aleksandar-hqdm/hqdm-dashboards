# Surfpoint Homepage — Update Brief

**Page:** `https://www.surfpointrecovery.com/`
**Owner:** Aleksa Popovic (On-Page) — task router · **Author:** Aleksandar Spasevski · **Date:** 2026-05-11
**Scope:** Homepage only. `/treatments` rebuild + `/treatments/[service]` sub-pages + `/services/*` redirects = separate briefs.
**Status:** Ready for Aleksa feasibility pass + team assignment

---

## How to use this brief

- The **at-a-glance checklist** in §1 is the tracking surface. Tick items as they ship.
- Each item below the checklist is a self-contained execution card with **What / Where / Spec / Why / Owner**. The "Spec" is the exact content or change to publish.
- Items prefixed **CRD** = content already drafted in `drivedocs/Surfpoint Recovery - Final.docx`. Spec is included inline here for execution convenience; the CRD is the source-of-truth if there's any discrepancy.
- Items prefixed **NEW** = additions identified in the competitor + on-page audit, not in the CRD. Spec is provided here.
- Items prefixed **CHANGE** = modifications to existing live elements (meta, schema, link targets, etc.).
- §3 contains the full schema JSON to drop in.
- §4 lists dependencies (the few items that need input from Surfpoint Ops).

---

## 1. At-a-glance checklist

**24 items total: 13 from CRD (already drafted), 9 new additions, 2 link-audit.**

| # | Type | Item | Owner | Status |
|---|---|---|---|---|
| H-01 | CRD | Replace meta title | Aleksa | ☐ |
| H-02 | CRD | Replace meta description | Aleksa | ☐ |
| H-03 | CRD | Replace H1 | Aleksa | ☐ |
| H-04 | CRD | Add new paragraph in About Us section (CBT + MAT + dual diagnosis) | Content + Aleksa | ☐ |
| H-05 | CRD | Replace one paragraph in Customized Treatment Programs section | Content + Aleksa | ☐ |
| H-06 | CRD | Replace intro + bullet list in "What Sets Our Center Apart" | Content + Aleksa | ☐ |
| H-07 | CRD | Replace intro + service list + closing in "Who We Help" | Content + Aleksa | ☐ |
| H-08 | CRD | **Add new section** — Alcohol Detox H2 (3 paragraphs) | Content + Aleksa | ☐ |
| H-09 | CRD | **Add new section** — Opioid Detox + MAT H2 (3 paragraphs) | Content + Aleksa | ☐ |
| H-10 | CRD | **Add new section** — Benzodiazepine Detox H2 (3 paragraphs) | Content + Aleksa | ☐ |
| H-11 | CRD | **Add new section** — Dual Diagnosis H2 (3 paragraphs) | Content + Aleksa | ☐ |
| H-12 | CRD | **Add new section** — Coney Island / South Brooklyn geo H2 (3 paragraphs) | Content + Aleksa | ☐ |
| H-13 | CRD | Add SAMHSA compliance line to footer | Aleksa | ☐ |
| H-14 | NEW | **Add section** — Service-area Google Maps iframe (inside Coney Island H2) | Aleksa + Dev | ☐ |
| H-15 | NEW | **Add section** — Neighborhood enumeration block with `/locations/[neighborhood]` links | Aleksa | ☐ |
| H-16 | NEW | **Add section** — "Insurance We Accept" H2 with carrier logo row + Verify Coverage CTA | Aleksa + Content + Surfpoint Ops | ☐ |
| H-17 | NEW | **Add section** — "Meet Our Clinical Team" H2 with named clinicians + credentials | Surfpoint Ops + Aleksa | ☐ |
| H-18 | NEW | **Add section** — "What to Expect: Your First 24 Hours" H2 (patient-journey) | Content + Aleksa | ☐ |
| H-19 | NEW | **Add section** — "Frequently Asked Questions" with 5-8 Q&As (FAQPage schema) | Content + Aleksa | ☐ |
| H-20 | NEW | **Add section** — Customer reviews block with 3-5 named GBP reviews (Review schema) | Aleksa | ☐ |
| H-21 | CHANGE | Replace schema block: `LocalBusiness` → full `MedicalBusiness` @graph (see §3) | Aleksa + Dev | ☐ |
| H-22 | CHANGE | Phone display rule: intake (646) on all CTAs; both phones in footer with role labels | Aleksa | ☐ |
| H-23 | CHANGE | Internal links: each new H2 (H-08 to H-12) ends with contextual link to `/treatments` (anchor target — see §2 H-23) | Aleksa | ☐ |
| H-24 | CHANGE | CTA audit: every Call/Contact button routes to `tel:+16463471893` | Aleksa | ☐ |

---

## 2. Item details

---

### H-01 · CRD · Replace meta title

**Where:** Homepage `<title>` tag (managed via Yoast / RankMath / SEO plugin or theme)

**Spec — replace current with:**
> `Trusted Alcohol & Drug Rehab - Brooklyn, NY | Surfpoint Recovery`

(63 chars — within the ~60 char rendered limit; "Alcohol &" prefix added vs current `Trusted Drug Rehab - Brooklyn | Surfpoint Recovery`)

**Why:** Current title omits "Alcohol" — drops capture on alcohol-rehab-modified queries. CRD addition maintains brand position while broadening service-keyword coverage.

**Source:** CRD docx, "Meta Title and Description" section, green text.

---

### H-02 · CRD · Replace meta description

**Where:** Homepage `<meta name="description">` tag

**Spec — replace current with:**
> `Surfpoint Recovery offers licensed drug rehab in Brooklyn, NY, including inpatient detox, opioid treatment, MAT, alcohol rehab, and dual diagnosis care near Coney Island.`

(170 chars — slightly over the typical 155 limit; recommend trimming to ~155 if rendered preview clips. Suggested trim: drop "in Brooklyn, NY" inside the parenthetical to leave only one Brooklyn ref.)

**Why:** Current meta is generic ("Discover personalized addiction rehab..."). Replacement packs OASAS/MAT/dual-diagnosis/Coney Island into the SERP snippet — every signal that influences the click decision.

**Source:** CRD docx, "Meta Title and Description" section, green text.

---

### H-03 · CRD · Replace H1

**Where:** Page H1 (currently "Leading Brooklyn Recovery Center")

**Spec — replace with:**
> `Top-Rated Drug Rehab & Alcohol Recovery Center in Brooklyn, NY`

**Why:** Current H1 is 3 generic words; replacement adds service + geo modifiers. Per `metrics.csv`, every direct competitor has a service-modifier H1 (ACI: "Rediscover You" — outlier; Genesis: no H1; Ascendant: "The Premier NYC Drug Rehab : Upscale Alcohol Detox & Addiction Treatment"; Urban: "#1 Substance Use Treatment Center in Brooklyn, New York").

**Source:** CRD docx, "H1" line, green text.

---

### H-04 · CRD · Add new paragraph in About Us section

**Where:** About Us section, **after** the existing intro paragraphs ("Surfpoint Recovery is a cutting-edge..." and "In our Brooklyn recovery center..." and "Our state-of-the-art nursing facilities...")

**Spec — add the following new paragraph:**
> Our clinical team uses evidence-based modalities, including Cognitive Behavioral Therapy (CBT) and medication-assisted treatment (MAT) to address both physical dependence and the underlying drivers of substance use disorder in Brooklyn, NY. Patients with co-occurring conditions such as depression, anxiety, or PTSD benefit from our integrated dual diagnosis care model.

Existing closing lines ("Our highly trained clinical and recovery management specialists..." and "Join our beautiful addiction recovery center...") remain unchanged.

**Why:** Surfaces CBT + MAT + dual-diagnosis on the homepage About section. Per `metrics.csv`, current page mentions MAT 2× and dual diagnosis 2×; CRD takes both to 4-5×, matching Ascendant benchmark.

**Source:** CRD docx, "About Us" section, green text.

---

### H-05 · CRD · Replace one paragraph in Customized Treatment Programs

**Where:** Customized Treatment Programs section. Currently the closing paragraph reads (something like) about therapy + plans.

**Spec — replace current paragraph with:**
> Each plan includes comprehensive therapy sessions, support for managing alcohol, opioid, and benzodiazepine withdrawal symptoms, medication-assisted treatment (MAT) when clinically appropriate, and proven strategies to help you regain control of your life.

**Why:** Adds substance-specific signals (alcohol / opioid / benzo) and re-mentions MAT in the personalized-treatment context.

**Source:** CRD docx, "Customized Treatment Programs in Brooklyn, NY" section, green text.

---

### H-06 · CRD · Replace intro + bullet list in "What Sets Our Center Apart"

**Where:** "What Sets Our Brooklyn Addiction Treatment Center Apart" H2 section. Replace current intro paragraphs AND the current bullet list.

**Spec — new intro (replaces current intro paragraphs):**
> At Surfpoint Recovery, we go beyond what typical drug rehab centers offer. Our Brooklyn, NY facility, located near the Coney Island shoreline at 2316 Surf Avenue, is designed to provide a comprehensive and compassionate approach to addiction treatment, addressing both the physical and emotional dimensions of substance use disorder and mental health recovery.
>
> Unlike many drug rehab centers in Brooklyn, New York, we provide both medically supervised detox services and a structured inpatient rehabilitation program, guiding patients through the full recovery process, from safely managing alcohol withdrawal, opioid dependence, and benzodiazepine withdrawal to helping you rebuild your life with strength, confidence, and lasting clarity.

**Spec — new bullet list (replaces current bullets):**
> What makes us different:
> - **Full Continuum of Care:** From medically supervised detox to personalized treatment planning, we support every stage of healing with clinical structure, proven effectiveness, and compassionate individual and group counseling.
> - **Customized Treatment Plans:** Each person receives an individualized plan tailored to their history with drug addiction, alcohol misuse, and substance abuse, developed in collaboration with our licensed counselors and medical team.
> - **Nurturing Environment:** Our warm, structured facility in Brooklyn promotes comfort, safety, and emotional well-being, especially important for those healing from co-occurring trauma or mental health challenges.
> - **Dedicated Support Staff:** Our experienced team offers 24/7 care, counseling, proper medication, emotional aid, and personalized guidance to walk you through every phase of treatment.
> - **Dual Emphasis on Physical and Mental Wellness:** We integrate therapies to support your mental and emotional health throughout treatment.
> - **In-Network with Major Insurance Providers:** We accept most major insurance plans, including Medicaid, Aetna, Cigna, and BlueCross BlueShield. Contact us for free insurance verification and coverage assistance.
> - **Comprehensive Medical Management:** Our Brooklyn, NY facility offers medical detox programs with SAMHSA-aligned clinical protocols, supervised care, and structured assistance to help patients safely taper off harmful substances.
> - **Serving the Community with Excellence:** As one of Brooklyn's most trusted drug rehab and detox centers, we're committed to delivering care with compassion, expertise, and measurable outcomes.

**Why:** New intro names the address (2316 Surf Avenue, Coney Island shoreline) and the substance-specific service mix. New bullet list explicitly names all 4 insurance carriers (Medicaid, Aetna, Cigna, BCBS — currently only Medicaid is on the page) and adds SAMHSA reference. Per `metrics.csv`, current page mentions Aetna/Cigna/BCBS 0× each — this single change closes that gap.

**Source:** CRD docx, "What Sets Our Brooklyn Addiction Treatment Center Apart" section, green text.

---

### H-07 · CRD · Replace intro + service list + closing in "Who We Help"

**Where:** "Who We Help: Serving Brooklyn Adults" H2 section. Replace current intro paragraph, current service list, and current closing paragraph.

**Spec — new intro:**
> Our Brooklyn-based drug rehab clinic provides a full spectrum of addiction treatment services designed to help adults recover from drug and alcohol dependence in a safe, structured, and compassionate inpatient environment. Whether you are struggling with opioids, alcohol, benzodiazepines, or other substances, our programs are built around clinical excellence and long-term recovery outcomes.

**Spec — new service list (replaces current):**
> Our licensed medical and clinical team offers:
> - Medically supervised alcohol detox in Brooklyn, NY, with 24/7 monitoring to manage withdrawal symptoms including seizure risk and delirium tremens
> - Opioid detox with clinically appropriate medication-assisted treatment (MAT), including FDA-approved options such as buprenorphine and naltrexone
> - Benzodiazepine detox using structured tapering protocols supervised by licensed nursing staff to minimize withdrawal complications
> - Inpatient rehabilitation programs that include individual therapy, group counseling, relapse prevention planning, and life skills training
> - Integrated dual diagnosis support for co-occurring conditions such as depression, anxiety, and PTSD, grounded in Cognitive Behavioral Therapy (CBT)
> - Ongoing care coordination, structured discharge planning, and aftercare support to sustain recovery beyond inpatient treatment

**Spec — new closing paragraph:**
> We take pride in creating a warm, welcoming facility where patients feel respected and safe. Our approach is rooted in evidence-based practices, compassionate care, and a deep commitment to the Brooklyn community we serve, from Coney Island and Brighton Beach to Bay Ridge and Sunset Park.

**Why:** Adds substance specificity (named: alcohol, opioid, benzo) + named MAT meds (buprenorphine, naltrexone) + neighborhood specifics in closing (Coney Island, Brighton Beach, Bay Ridge, Sunset Park — first appearance of these named neighborhoods on the homepage; per `metrics.csv` current count = 0).

**Source:** CRD docx, "Who We Help: Serving Brooklyn Adults" section, green text.

---

### H-08 · CRD · ADD NEW SECTION — Alcohol Detox H2

**Where:** Brand new section, placed **after the "Who We Help" section closes**, before the next existing section.

**Spec — new H2 + content:**

> ## Alcohol Rehab & Detox in Brooklyn, NY
>
> Alcohol withdrawal is one of the most medically complex detox processes, carrying serious risks including seizures and delirium tremens if left unmanaged. At Surfpoint Recovery, our OASAS-licensed medical team provides 24/7 monitored alcohol detox at our Brooklyn, NY inpatient facility, using evidence-based medication protocols to reduce withdrawal severity and protect your safety at every stage of the process.
>
> Our structured alcohol detox program bridges directly into inpatient rehabilitation, giving patients a continuous care path without gaps in clinical support. Medical clinicians conduct daily assessments, adjust withdrawal medications as needed, and coordinate with our counseling staff to begin addressing the behavioral and psychological patterns behind alcohol use disorder.
>
> Serving patients from across South Brooklyn, including Coney Island, Bath Beach, and Bensonhurst, we make medically supervised alcohol detox accessible, safe, and effective for the New York City community.
>
> *[Internal link — per H-23: end this section with a "Learn more about our alcohol detox program →" link to `/treatments#alcohol-detox`]*

**Why:** Closes a topical gap — current homepage has 0 dedicated alcohol-detox content. Adds OASAS reference + clinical specificity + named neighborhoods (Coney Island, Bath Beach, Bensonhurst).

**Source:** CRD docx, "Alcohol Rehab & Detox in Brooklyn, NY" NEW SECTION, green text.

---

### H-09 · CRD · ADD NEW SECTION — Opioid Detox + MAT H2

**Where:** Brand new section, placed **after the H-08 Alcohol Detox section**.

**Spec — new H2 + content:**

> ## Opioid Detox and Medication-Assisted Treatment (MAT) in Brooklyn
>
> Opioid dependence affects thousands of New Yorkers each year, and safe medical detox is a critical first step toward recovery. Surfpoint Recovery offers medically supervised opioid detox and clinically appropriate Medication-Assisted Treatment (MAT) in Brooklyn, NY, using FDA-approved medications such as buprenorphine and naltrexone to reduce cravings and prevent relapse during the most critical phase of early recovery.
>
> Our licensed clinical team designs each opioid detox plan around the patient's history, substance use patterns, and co-occurring health conditions. By combining pharmacological support with individual counseling, group therapy, and relapse prevention planning, we address both the physical and psychological dimensions of opioid use disorder.
>
> Patients from Sunset Park, Bay Ridge, and surrounding Brooklyn neighborhoods trust Surfpoint Recovery as a leading opioid detox center in New York City, where safety, dignity, and clinical precision guide every step of the recovery process.
>
> *[Internal link — per H-23: end with "Learn more about opioid detox & MAT →" link to `/treatments#opioid-detox`]*

**Why:** Targets two query clusters in one section (`opioid detox brooklyn` + `medication assisted treatment brooklyn`). Per the SERP audit, the clean MAT query top-3 are Mount Sinai, Seek Counseling, One Brooklyn Health — all hospital-system or outpatient; no inpatient MAT competitor surfaces in the top 12. Surfpoint's MAT angle is differentiated and underclaimed.

**Source:** CRD docx, "Opioid Detox and Medication-Assisted Treatment (MAT) in Brooklyn" NEW SECTION, green text.

---

### H-10 · CRD · ADD NEW SECTION — Benzodiazepine Detox H2

**Where:** Brand new section, placed **after the H-09 Opioid Detox section**.

**Spec — new H2 + content:**

> ## Benzodiazepine Detox in Brooklyn, NY
>
> Benzodiazepine withdrawal requires careful, supervised medical management. Stopping benzos abruptly can trigger life-threatening complications, which is why Surfpoint Recovery's Brooklyn inpatient detox program uses a structured tapering protocol under the continuous supervision of our licensed nursing and medical staff.
>
> Whether the dependency involves prescription medications such as Xanax, Klonopin, or Valium, our team builds a personalized detox plan that safely reduces the substance while monitoring vital signs, managing withdrawal symptoms, and providing emotional support throughout the process.
>
> As a CARF-certified Center of Excellence located in Brooklyn, New York, our benzodiazepine detox patients receive integrated support that prepares them for inpatient rehabilitation and longer-term recovery, beginning from day one of their stay at our Surf Avenue facility.
>
> *[Internal link — per H-23: end with "Learn more about benzodiazepine detox →" link to `/treatments#benzodiazepine-detox`]*

**Why:** Names specific benzos (Xanax, Klonopin, Valium) — currently the only competitor naming benzos in title is Seek Counseling at rank #7 for `benzodiazepine detox brooklyn`. Closing paragraph surfaces the CARF Center of Excellence credential explicitly tied to the benzo program.

**Source:** CRD docx, "Benzodiazepine Detox in Brooklyn, NY" NEW SECTION, green text.

---

### H-11 · CRD · ADD NEW SECTION — Dual Diagnosis H2

**Where:** Brand new section, placed **after the H-10 Benzo Detox section**.

**Spec — new H2 + content:**

> ## Dual Diagnosis and Co-Occurring Disorder Treatment in Brooklyn
>
> Many people seeking drug rehab in Brooklyn are managing more than one condition. Depression, anxiety, PTSD, and other mental health disorders frequently co-occur with substance use disorder, and treating only the addiction without addressing the underlying psychiatric condition leads to significantly higher relapse rates.
>
> Surfpoint Recovery's Brooklyn addiction treatment center uses an integrated dual diagnosis model in which our licensed counselors, medical staff, and behavioral health clinicians work together to treat substance use disorder and co-occurring psychiatric conditions at the same time. This approach, grounded in Cognitive Behavioral Therapy (CBT) and evidence-based clinical frameworks, improves outcomes and supports sustainable, long-term recovery.
>
> Our dual diagnosis program is available to adult patients at our Brooklyn, NY inpatient facility. We accept most major insurance plans, including Medicaid, so access to comprehensive co-occurring disorder care is not limited by financial barriers.
>
> *[Internal link — per H-23: end with "Learn more about dual diagnosis treatment →" link to `/treatments#dual-diagnosis`]*

**Why:** Per the LLM audit (Q2 strategy doc §5.4), `dual diagnosis brooklyn ny` was one of 3 commercial-local LLM prompts where Surfpoint provides the service but isn't surfaced. This section gives the LLM something to cite. Per `metrics.csv`, current homepage has 2 dual-diagnosis mentions — this section takes it to 5+, matching Ascendant benchmark.

**Source:** CRD docx, "Dual Diagnosis and Co-Occurring Disorder Treatment in Brooklyn" NEW SECTION, green text.

---

### H-12 · CRD · ADD NEW SECTION — Coney Island / South Brooklyn H2

**Where:** Brand new section, placed **after the H-11 Dual Diagnosis section**.

**Spec — new H2 + content:**

> ## Brooklyn Drug & Alcohol Rehab Serving Coney Island, Sunset Park, and Beyond
>
> Located at 2316 Surf Avenue in the Coney Island neighborhood of Brooklyn, New York, Surfpoint Recovery is one of the most accessible inpatient detox and drug rehab centers in the borough. We serve residents across South Brooklyn, including Brighton Beach, Bensonhurst, Bath Beach, Bay Ridge, Sunset Park, Borough Park, and Gravesend, as well as patients traveling from Staten Island and other New York City boroughs.
>
> Our location near the Coney Island shoreline provides a calm, structured environment that supports the healing process from day one. Patients do not need to travel far from their community to access OASAS-licensed inpatient substance abuse treatment with the clinical depth their situation requires.
>
> If you or someone you care about is searching for drug rehab in Brooklyn, our admissions team is available 24 hours a day, 7 days a week. Call (646) 347-1893 to speak with an intake specialist and begin the process today.
>
> *[H-14 service-area Google Maps iframe lives inside this section. H-15 neighborhood enumeration block lives inside this section.]*

**Why:** **Coney Island is mentioned 0× anywhere in the audit set's homepage data — no competitor occupies this hyper-local angle.** This is the load-bearing geo signal of the entire CRD. Per `client.json`, the real catchment is 26 neighborhoods; the section names 7 of them visibly + the address.

**Source:** CRD docx, "Brooklyn Drug & Alcohol Rehab Serving Coney Island, Sunset Park, and Beyond" NEW SECTION, green text.

---

### H-13 · CRD · Add SAMHSA compliance line to footer

**Where:** Footer block, below existing footer content

**Spec — add the following line:**
> Surfpoint Recovery follows SAMHSA-aligned treatment standards and evidence-based clinical protocols for substance use disorder care.

**Why:** Per `metrics.csv`, current homepage has 0 SAMHSA mentions. Per the LLM audit, Gemini 2.0 Flash cited Surfpoint 0 times and leans on government directories (samhsa.gov, oasas.ny.gov). Adding the footer reference is the lowest-effort signal that SAMHSA standards are met; combined with future Task 9 (Foundational citations Phase 1 — adding Surfpoint to the SAMHSA Treatment Locator), this unlocks Gemini citation eligibility.

**Source:** CRD docx, "Footer" section, green text.

---

### H-14 · NEW · Service-area Google Maps iframe inside H-12 section

**Where:** Inside the H-12 Coney Island H2 section, ideally after the first paragraph (before the second).

**Spec — embed the following:**

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d!2d-73.9847!3d40.5755!..."
  width="100%"
  height="350"
  style="border:0; border-radius: 8px;"
  loading="lazy"
  allowfullscreen=""
  referrerpolicy="no-referrer-when-downgrade"
  title="Surfpoint Recovery — Coney Island, Brooklyn"
></iframe>
```

The exact `src` URL: go to https://www.google.com/maps, search for `2316 Surf Avenue, Brooklyn, NY 11224`, click Share → Embed a map → copy the iframe `src` attribute.

**Why:** Per `metrics.csv`, current homepage iframe_map = 0; no competitor in the audit set has an iframe map either. GBP is Surfpoint's strongest channel (GBP-tracked traffic converts at 2.53%, ~8× organic average). Embedding the live Google Maps view creates an on-page connection to the GBP entity, reinforces Coney Island geo, and signals service-area to crawlers via the embedded Place reference. `loading="lazy"` prevents Core Web Vitals regression.

---

### H-15 · NEW · Neighborhood enumeration block

**Where:** Inside the H-12 Coney Island H2 section, after the H-14 map iframe.

**Spec — render a clean neighborhood-list block (CSS-grid or simple list):**

```html
<div class="areas-served-block">
  <p><strong>Surfpoint Recovery serves these South Brooklyn neighborhoods:</strong></p>
  <ul class="neighborhoods-grid">
    <li><a href="/locations/coney-island">Coney Island</a></li>
    <li><a href="/locations/brighton-beach-ny">Brighton Beach</a></li>
    <li><a href="/locations/accredited-addiction-recovery-center-in-bay-ridge-ny">Bay Ridge</a></li>
    <li><a href="/locations/bensonhurst">Bensonhurst</a></li>
    <li><a href="/locations/bath-beach">Bath Beach</a></li>
    <li><a href="/locations/comprehensive-rehabilitation-center-in-gravesend-bay-ny">Gravesend</a></li>
    <li><a href="/locations/sheepshead-bay-ny">Sheepshead Bay</a></li>
    <li><a href="/locations/dyker-heights">Dyker Heights</a></li>
    <li><a href="/locations/manhattan-beach">Manhattan Beach</a></li>
    <li><a href="/locations/marine-park">Marine Park</a></li>
    <li><a href="/locations/flatlands">Flatlands</a></li>
    <li><a href="/locations/midwood">Midwood</a></li>
    <li><a href="/locations/dependable-rehab-in-fort-hamilton-ny">Fort Hamilton</a></li>
  </ul>
</div>
```

**Important:** Aleksa to verify each `/locations/[slug]` URL exists and returns 200 before deploy. **Do NOT link to:** `/locations/astoria`, `/locations/cambria-heights`, `/locations/corona`, `/locations/east-elmhurst`, `/locations/elmhurst`, `/locations/brownsville` — these are doorway URLs scheduled for 301-redirect under Task 5.

**Why:** Routes equity to real-catchment location pages (the ones we're keeping); creates inbound link supply for the locations × services matrix; reinforces hyper-local geo. Closes the gap that the broken `/areas-served` page currently tries to fill but with mixed real/doorway link targets.

---

### H-16 · NEW · "Insurance We Accept" H2 with logo row + Verify Coverage CTA

**Where:** New H2 section, placed **after the H-12 Coney Island section**, before the form/CTA section.

**Spec — content:**

> ## Insurance We Accept
>
> Surfpoint Recovery accepts most major insurance plans for inpatient detox and rehabilitation. Coverage levels vary by carrier and plan — we offer **free insurance verification** before admission so you know exactly what's covered.
>
> [LOGO ROW: Medicaid · Aetna · Cigna · BlueCross BlueShield]
>
> Don't see your carrier? We may still be in-network. Most major insurance is accepted, including out-of-state plans.
>
> [CTA Button: "Verify Your Coverage"] → `/admissions` (or in-page form trigger)

**Implementation notes:**
- Logo assets: Aleksa to request brand-approved insurance logos from Surfpoint Ops. If unavailable, ship v1 with text-only carrier names in styled badges.
- Use a qualifying disclaimer (above) — `Coverage levels vary by carrier and plan` — to avoid implying full coverage of any specific service.

**Why:** Per `metrics.csv`, current homepage mentions Medicaid 2× but Aetna/Cigna/BCBS 0× each — and **no competitor in the 4-set (ACI, Genesis, Ascendant, Urban) lists insurance carriers in body content**. This is a low-cost differentiator + first-pass capture for insurance-modified queries (`drug rehab brooklyn medicaid`, `rehab that takes aetna brooklyn`). Note: H-06 also mentions the carriers in bullet form; this H2 makes them visually prominent at the conversion-decision point.

---

### H-17 · NEW · "Meet Our Clinical Team" H2

**Where:** New H2 section, placed **after H-16 Insurance section**, before the form/CTA section.

**Spec — content template:**

> ## Meet Our Clinical Team
>
> Every patient at Surfpoint Recovery is supported by a multidisciplinary team of licensed medical and clinical professionals. Our staff combines decades of experience in addiction medicine, psychiatry, nursing, and licensed counseling.
>
> [CLINICIAN CARDS — repeat per role:]
>
> | Photo | Name | Credentials | Role | Brief bio (1-2 sentences) |
> |---|---|---|---|---|
> | [photo] | [Dr. Name MD] | MD, Addiction Medicine certified | Medical Director | [bio] |
> | [photo] | [Name LCSW] | LCSW, CASAC | Clinical Director | [bio] |
> | [photo] | [Name RN] | RN, BSN | Director of Nursing | [bio] |
> | [photo] | [Name LMSW] | LMSW | Counselor (dual diagnosis lead) | [bio] |

**Dependency on Surfpoint Ops:** Provide named clinical team + credentials + headshots. Aleksa to request from Surfpoint Ops in Week 1.

**v1 fallback if names unavailable:** Ship the section with role-titles-only (no names, no photos) — still adds the structural E-E-A-T signal. Update to v2 with names within 30 days.

**Why:** Per the Q2 LLM audit, Surfpoint cited 0/8 research-phase prompts. National brands (Recovery Village, AAC) cited heavily because they surface named medical reviewers. Ascendant Detox NYC runs an "Editorial Policy / Our Contributors" section using this pattern. Adding named clinicians on the homepage is the lowest-effort starting point for E-E-A-T architecture; it cascades to credibility on every service-page rebuild later.

---

### H-18 · NEW · "What to Expect: Your First 24 Hours at Surfpoint" H2

**Where:** New H2 section, placed **after H-17 Clinical Team section**, before the form/CTA section.

**Spec — content (write in patient-comprehensible language, no clinical jargon):**

> ## What to Expect: Your First 24 Hours at Surfpoint
>
> Walking into a detox program is one of the hardest first steps a person can take. We've designed our admission process to be calm, respectful, and as straightforward as possible.
>
> **When you arrive at 2316 Surf Avenue.** Our intake team meets you at the door — no waiting room shuffle, no public lobby. You're brought directly into a private intake room where we begin the conversation about why you're here.
>
> **Medical clearance and intake interview.** A licensed nurse and a medical clinician complete a same-day medical assessment to identify any conditions that need immediate attention. The intake specialist reviews insurance, answers your questions, and confirms your treatment plan.
>
> **Your first night.** You're shown to your room, introduced to the night nursing staff, and given a clear explanation of what to expect over the next several days. If withdrawal symptoms begin during the night, our medical team responds immediately — every patient has direct access to a clinician 24/7.
>
> **The next morning.** Your assigned counselor meets with you to begin building your individualized treatment plan. Group introductions are voluntary on day one; we want you to feel safe before you participate in shared activities.
>
> If you have questions about what to expect, our admissions team is available 24/7 at (646) 347-1893.

**Why:** Per the SERP audit, TBH (rank #1 service provider on every detox query) dedicates significant page real estate to "What can I expect?" content. Ascendant Detox NYC runs similar patient-journey content. Surfpoint currently has zero patient-journey content on the homepage. This captures research-phase + decision-phase visitor intent (visitors comparing options before committing). It's also content the LLMs can cite for prompts like "what happens in detox" / "first day of rehab" — addresses the 0/8 LLM research-phase gap.

---

### H-19 · NEW · "Frequently Asked Questions" with 5-8 Q&As

**Where:** New section near homepage bottom, before the footer.

**Spec — content (8 Q&As, written in patient-facing language; will be wrapped in `FAQPage` schema per H-21):**

> ## Frequently Asked Questions
>
> **Is Surfpoint Recovery OASAS-licensed?**
> Yes. Surfpoint Recovery is licensed by the New York State Office of Addiction Services and Supports (OASAS) to provide inpatient detox and rehabilitation services in Brooklyn, NY.
>
> **Does Surfpoint accept Medicaid?**
> Yes. We accept Medicaid, along with Aetna, Cigna, and BlueCross BlueShield. We provide free insurance verification before admission.
>
> **How long is inpatient detox at Surfpoint?**
> Most detox programs run 3 to 7 days, depending on the substance, severity of dependence, and individual medical needs. Many patients then transition into our short-term inpatient rehabilitation program (typically 14 to 30 days).
>
> **What is medication-assisted treatment (MAT)?**
> MAT combines FDA-approved medications such as buprenorphine and naltrexone with counseling and behavioral therapy to treat opioid use disorder. Surfpoint offers MAT under the supervision of our licensed medical staff.
>
> **Do you treat dual diagnosis (mental health and addiction together)?**
> Yes. Our integrated dual diagnosis program treats substance use disorder and co-occurring conditions like depression, anxiety, and PTSD at the same time, using Cognitive Behavioral Therapy (CBT) and evidence-based clinical care.
>
> **Where is Surfpoint Recovery located?**
> We are at 2316 Surf Avenue in the Coney Island neighborhood of Brooklyn, New York. Entrance on West 24th Street.
>
> **Do you accept walk-in admissions?**
> We strongly recommend calling our intake team at (646) 347-1893 first to begin a brief over-the-phone assessment. This ensures we have your room and clinical team ready when you arrive.
>
> **What substances does Surfpoint detox?**
> Alcohol, opioids (heroin, prescription painkillers, fentanyl), benzodiazepines (Xanax, Klonopin, Ativan, Valium), and poly-substance dependence are the most common. Our medical team handles complex cases including co-occurring conditions.

**Why:** PAA (People Also Ask) capture is the natural downstream of `FAQPage` schema markup. The 8 questions above each have evidence in GSC impression data (insurance, length-of-stay, MAT, location queries surface in the existing query data). Rich-result eligibility on FAQ snippets in SERP. Reduces objection-handling friction on intake calls (operational ROI).

---

### H-20 · NEW · Customer reviews block with 3-5 named GBP reviews

**Where:** New section near homepage bottom (can sit before or after H-19 FAQ).

**Spec — pull 3-5 reviews from the 120 GBP reviews captured in `exports/gbp/`. Pick reviews that:**
- Have a named reviewer (first name + last initial OK for privacy)
- Are 50-200 chars (long enough to be substantive, short enough for visual layout)
- Reference specific services (alcohol detox / opioid / MAT / dual diagnosis) or staff
- Are recent (last 90 days preferred)

**Display template:**

```
[★★★★★]
"[Review body, 50-200 chars]"
— [Reviewer Name First L.], [Date]
```

(Will be wrapped in `Review` schema per H-21.)

**Why:** Per `metrics.csv`, no competitor in the 3-pick (ACI, Genesis, Ascendant) has on-page Review schema. Surfpoint has 120 reviews to pull from — best inventory in the competitive set. Adds star-rating rich-result eligibility. The visible block also reinforces social proof at the conversion-decision point.

---

### H-21 · CHANGE · Schema upgrade — `LocalBusiness` → `MedicalBusiness` `@graph`

**Where:** `<head>` section. Replace the existing single `<script type="application/ld+json">` block with the full `@graph` from §3 below.

**Spec:** See full JSON in §3.

**Why:** Per `metrics.csv`, current homepage schema is 1 block (`LocalBusiness`); the schema-depth benchmark is Elevate Point at 8 schema types. `LocalBusiness` is the wrong @type for a medical business — `MedicalBusiness` is the schema.org-defined parent for the vertical and unlocks rich-result eligibility on medical queries. The `@graph` pattern lets entities cross-reference via `@id`, which Google handles more reliably for medical organizations.

---

### H-22 · CHANGE · Phone display rule

**Where:** Site-wide rule, but applies on homepage to: hero CTA, sticky mobile CTA, header phone display, all in-body CTA buttons, footer NAP block.

**Spec:**

| Surface | Phone displayed | Link target | Label |
|---|---|---|---|
| Hero CTA button | (646) 347-1893 | `tel:+16463471893` | "Call Intake (646) 347-1893" |
| Sticky mobile CTA | (646) 347-1893 | `tel:+16463471893` | "Call Now" |
| Header phone | (646) 347-1893 | `tel:+16463471893` | "Intake: (646) 347-1893" |
| All H2-section CTAs | (646) 347-1893 | `tel:+16463471893` | "Call (646) 347-1893" |
| Footer NAP block | **Both** | Both `tel:` links | `**Intake:** (646) 347-1893` *(line 1)* `**Facility:** (347) 727-4800` *(line 2)* |
| Contact Us page (separate page) | Both | Both `tel:` links | Same as footer pattern |

**Why:** Per `client.json`, both phone numbers are legitimate with distinct purposes (intake = 24/7 admissions; facility = direct line to building). Current schema declares the facility number while the visible site uses the intake number — NAP-inconsistent and a trust-penalty signal. The fix is markup, not consolidation. The visible-site rule (intake on all CTAs) preserves attribution clarity; the contact/footer distinction preserves operational clarity.

---

### H-23 · CHANGE · Internal-link contextual references from new H2s → `/treatments`

**Where:** End of each new H2 section (H-08, H-09, H-10, H-11), and end of CRD H2s where contextually appropriate.

**Spec — link target rule:**

| Source H2 section | Link anchor text | Link target |
|---|---|---|
| H-08 Alcohol Detox | "Learn more about our alcohol detox program →" | `/treatments#alcohol-detox` |
| H-09 Opioid Detox + MAT | "Learn more about opioid detox & MAT →" | `/treatments#opioid-detox` |
| H-10 Benzo Detox | "Learn more about benzodiazepine detox →" | `/treatments#benzodiazepine-detox` |
| H-11 Dual Diagnosis | "Learn more about dual diagnosis treatment →" | `/treatments#dual-diagnosis` |
| H-12 Coney Island | "See all areas we serve →" | `/areas-served` *(verify before linking — page is under separate rebuild)* |

**Why:** The architectural plan is to build `/treatments/[service]` sub-pages later (Path C). Until those exist, link to `/treatments#[anchor]` — which works today (the `/treatments` hub has H2 sections that can be ID'd) AND will continue to work when sub-pages ship (links can be updated in one batch when sub-pages launch).

**Anchor IDs to add to `/treatments`:** When updating `/treatments` (separate brief), ensure each H2 has an `id` attribute matching the anchor:
- `<h2 id="alcohol-detox">Alcohol Detox</h2>`
- `<h2 id="opioid-detox">Opioid Detox</h2>`
- `<h2 id="benzodiazepine-detox">BenzodiazepinesDetox</h2>` *(also fix the typo: "Benzodiazepine Detox")*
- Plus a new `<h2 id="dual-diagnosis">Dual Diagnosis</h2>` section in the /treatments rebuild.

---

### H-24 · CHANGE · CTA audit — every Call/Contact button → intake (646)

**Where:** Site-wide audit on the homepage. Crawl the deployed page after H-22 changes ship; verify every `tel:` link, every `href` to `/contact-us`, and every CTA button in headers/menus/sticky bars points to either:
- Intake phone: `tel:+16463471893`
- Form trigger or `/admissions`

**Spec:** Pre-deploy inventory of all CTAs (run a `grep` or a crawl); post-deploy verification that all CTAs route correctly.

**Why:** Phone-display inconsistency is a known issue from `metrics.csv` (intake referenced 6×, facility 3× on current page — facility shouldn't appear in CTAs). Single root-cause fix.

---

## 3. Schema spec — full `@graph` for H-21

Replace existing `<script type="application/ld+json">` block in `<head>` with this single `@graph`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.surfpointrecovery.com/#org",
      "name": "Surfpoint Recovery",
      "alternateName": ["Surf Point Recovery", "Surfpoint Recovery LLC"],
      "url": "https://www.surfpointrecovery.com/",
      "logo": "https://www.surfpointrecovery.com/[INSERT-LOGO-PATH]",
      "image": "https://www.surfpointrecovery.com/[INSERT-HERO-IMAGE-PATH]",
      "description": "OASAS-licensed, CARF Center of Excellence inpatient drug & alcohol rehab in Coney Island, Brooklyn. MAT, dual diagnosis, Medicaid + Aetna + Cigna + BlueCross BlueShield accepted.",
      "slogan": "Top-Rated Drug Rehab & Alcohol Recovery Center in Brooklyn, NY",
      "medicalSpecialty": ["Addiction", "AddictionMedicine"],
      "priceRange": "$",
      "paymentAccepted": ["Medicaid", "Aetna", "Cigna", "BlueCross BlueShield", "Insurance"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2316 Surf Avenue",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "postalCode": "11224",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.5755",
        "longitude": "-73.9847"
      },
      "areaServed": [
        {"@type": "City", "name": "Brooklyn"},
        {"@type": "AdministrativeArea", "name": "Coney Island"},
        {"@type": "AdministrativeArea", "name": "Brighton Beach"},
        {"@type": "AdministrativeArea", "name": "Bay Ridge"},
        {"@type": "AdministrativeArea", "name": "Bensonhurst"},
        {"@type": "AdministrativeArea", "name": "Bath Beach"},
        {"@type": "AdministrativeArea", "name": "Sunset Park"},
        {"@type": "AdministrativeArea", "name": "Borough Park"},
        {"@type": "AdministrativeArea", "name": "Gravesend"},
        {"@type": "AdministrativeArea", "name": "Sheepshead Bay"},
        {"@type": "AdministrativeArea", "name": "Dyker Heights"},
        {"@type": "AdministrativeArea", "name": "Manhattan Beach"},
        {"@type": "AdministrativeArea", "name": "Marine Park"},
        {"@type": "AdministrativeArea", "name": "Flatlands"},
        {"@type": "AdministrativeArea", "name": "Midwood"},
        {"@type": "AdministrativeArea", "name": "Fort Hamilton"}
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-646-347-1893",
          "contactType": "customer support",
          "areaServed": "US",
          "availableLanguage": ["en"],
          "description": "Admissions / intake (24/7)"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-347-727-4800",
          "contactType": "customer service",
          "description": "Facility direct line"
        }
      ],
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Alcohol Detox", "url": "https://www.surfpointrecovery.com/treatments#alcohol-detox"},
        {"@type": "MedicalProcedure", "name": "Opioid Detox & Medication-Assisted Treatment", "url": "https://www.surfpointrecovery.com/treatments#opioid-detox"},
        {"@type": "MedicalProcedure", "name": "Benzodiazepine Detox", "url": "https://www.surfpointrecovery.com/treatments#benzodiazepine-detox"},
        {"@type": "MedicalProcedure", "name": "Dual Diagnosis Treatment", "url": "https://www.surfpointrecovery.com/treatments#dual-diagnosis"},
        {"@type": "MedicalProcedure", "name": "Comprehensive Short-Term Rehab", "url": "https://www.surfpointrecovery.com/treatments#short-term-rehab"}
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "license",
          "name": "OASAS License (NYS Office of Addiction Services and Supports)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "certification",
          "name": "CARF Center of Excellence"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "120",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.google.com/maps?cid=18357653462538900774"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "00:00",
          "closes": "23:59",
          "validFrom": "2024-05-30",
          "description": "24/7 admissions and clinical care"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.surfpointrecovery.com/#website",
      "url": "https://www.surfpointrecovery.com/",
      "name": "Surfpoint Recovery",
      "publisher": {"@id": "https://www.surfpointrecovery.com/#org"}
    },
    {
      "@type": "WebPage",
      "@id": "https://www.surfpointrecovery.com/#webpage",
      "url": "https://www.surfpointrecovery.com/",
      "name": "Top-Rated Drug Rehab & Alcohol Recovery Center in Brooklyn, NY",
      "isPartOf": {"@id": "https://www.surfpointrecovery.com/#website"},
      "about": {"@id": "https://www.surfpointrecovery.com/#org"},
      "primaryImageOfPage": {"@type": "ImageObject", "url": "https://www.surfpointrecovery.com/[INSERT-HERO-IMAGE-PATH]"}
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.surfpointrecovery.com/#faq",
      "mainEntity": [
        {"@type": "Question", "name": "Is Surfpoint Recovery OASAS-licensed?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Surfpoint Recovery is licensed by the New York State Office of Addiction Services and Supports (OASAS) to provide inpatient detox and rehabilitation services in Brooklyn, NY."}},
        {"@type": "Question", "name": "Does Surfpoint accept Medicaid?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We accept Medicaid, along with Aetna, Cigna, and BlueCross BlueShield. We provide free insurance verification before admission."}},
        {"@type": "Question", "name": "How long is inpatient detox at Surfpoint?", "acceptedAnswer": {"@type": "Answer", "text": "Most detox programs run 3 to 7 days, depending on the substance, severity of dependence, and individual medical needs. Many patients then transition into our short-term inpatient rehabilitation program (typically 14 to 30 days)."}},
        {"@type": "Question", "name": "What is medication-assisted treatment (MAT)?", "acceptedAnswer": {"@type": "Answer", "text": "MAT combines FDA-approved medications such as buprenorphine and naltrexone with counseling and behavioral therapy to treat opioid use disorder. Surfpoint offers MAT under the supervision of our licensed medical staff."}},
        {"@type": "Question", "name": "Do you treat dual diagnosis (mental health and addiction together)?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Our integrated dual diagnosis program treats substance use disorder and co-occurring conditions like depression, anxiety, and PTSD at the same time, using Cognitive Behavioral Therapy (CBT) and evidence-based clinical care."}},
        {"@type": "Question", "name": "Where is Surfpoint Recovery located?", "acceptedAnswer": {"@type": "Answer", "text": "We are at 2316 Surf Avenue in the Coney Island neighborhood of Brooklyn, New York. Entrance on West 24th Street."}},
        {"@type": "Question", "name": "Do you accept walk-in admissions?", "acceptedAnswer": {"@type": "Answer", "text": "We strongly recommend calling our intake team at (646) 347-1893 first to begin a brief over-the-phone assessment. This ensures we have your room and clinical team ready when you arrive."}},
        {"@type": "Question", "name": "What substances does Surfpoint detox?", "acceptedAnswer": {"@type": "Answer", "text": "Alcohol, opioids (heroin, prescription painkillers, fentanyl), benzodiazepines (Xanax, Klonopin, Ativan, Valium), and poly-substance dependence are the most common. Our medical team handles complex cases including co-occurring conditions."}}
      ]
    },
    {
      "@type": "Review",
      "itemReviewed": {"@id": "https://www.surfpointrecovery.com/#org"},
      "author": {"@type": "Person", "name": "[Reviewer 1 — first name + last initial]"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "[Review body 1 — pull from GBP exports/gbp/]",
      "datePublished": "[YYYY-MM-DD]"
    }
    /* Repeat the Review entity 2-4 more times for additional reviews — populate from exports/gbp/ */
  ]
}
```

**Schema validation gate (per `reference_schema_validation_workflow.md`):**
1. Wikidata Q-ID verifier (verify any `sameAs` values resolve)
2. Schema.org property validator
3. Manual paste into validator.schema.org/RRT — zero errors, zero warnings on critical types

**Rich Results Test (Google):** Submit URL post-deploy; expect eligibility on `FAQPage`, `Review`, `MedicalBusiness`, `BreadcrumbList`.

---

## 4. Dependencies + open inputs

| Item | Status | Owner | Mitigation if blocked |
|---|---|---|---|
| Clinical roster names + photos for H-17 | Pending — needs Surfpoint Ops | Aleksa to request | Ship v1 with role-titles-only; v2 within 30 days |
| Insurance carrier logo assets for H-16 | Pending — needs Surfpoint Ops | Aleksa to request | Ship v1 with text-only carrier badges |
| 5 named GBP reviews for H-20 + H-21 Review schema | Available in `exports/gbp/` | Aleksa to pull and select | Pick 5 best matching criteria in §H-20 |
| Logo + hero image paths for schema | Pending | Aleksa to provide URLs | Schema can ship with placeholder URLs; replace with real paths post-design pass |
| Verify each `/locations/[slug]` link in H-15 returns 200 | Pre-deploy step | Aleksa | Skip neighborhoods whose location page is missing or in NOINDEX bucket |
| `/treatments` H2 anchor IDs for H-23 | Pending — coupled with `/treatments` rebuild brief (separate doc) | Aleksa | If `/treatments` rebuild ships first, anchors are ready; otherwise, ensure CMS adds the IDs as a small-scope edit |
| Lat/lng for H-14 map iframe + H-21 schema `geo` | Approximate values used (40.5755, -73.9847); verify via Google Maps for precise | Aleksa | Use Google Maps Share → Embed flow for iframe; Property Inspector for precise lat/lng |
| Google My Maps embed URL for H-14 | Generate from Google Maps Share → Embed flow | Aleksa | n/a |

---

## 5. Phase A acceptance criteria (binary)

When all the boxes below are checked, Phase A ships:

- [ ] All 24 items in §1 marked complete
- [ ] Schema validator pass (§3 gate)
- [ ] Rich Results Test pass — `FAQPage`, `Review`, `MedicalBusiness` all eligible
- [ ] Mobile + desktop render verified — no layout breaks at 320px / 768px / 1280px / 1920px
- [ ] Core Web Vitals re-baseline post-deploy: LCP, INP, CLS within or better than pre-deploy values
- [ ] All CTAs route to `tel:+16463471893` (intake); facility number appears only in footer NAP block + Contact Us page
- [ ] All H-15 `/locations/[slug]` links return 200 (not 404, not redirect)
- [ ] H-23 contextual links from new H2s land on `/treatments#[anchor]` and the anchors exist in the live `/treatments` page
- [ ] GSC URL inspection request submitted post-deploy
- [ ] Page indexed in Google within 14 days of deploy (track via GSC daily)

---

## 6. Risks + rollback

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Schema validator errors block deploy | Medium | Low | 3-layer pre-deploy gate (§3) |
| Page redesign drops `drug rehab brooklyn` ranking (current pos 5.8) during Google re-crawl | Low-Med | Medium | Stage via canonical-preserving deploy; submit URL inspection request; monitor GSC daily for 14 days |
| Clinical-team H-17 contains incorrect credentials | Medium | High | Aleksa + Surfpoint Ops sign off on names + credentials before publish; v1 ships role-titles-only |
| Insurance H-16 carrier logos used without brand approval | Low | Medium | Use text-only badges if logos not approved |
| H-15 neighborhood links land on doorway pages flagged for redirect (Task 5) | Low if list followed | Medium | Strict allowlist enforcement; pre-deploy crawl check |
| H-14 Google Maps iframe regresses Core Web Vitals | Low (lazy-loaded) | Low | `loading="lazy"` attribute; defer iframe load until after main content paint |
| Footer NAP showing two phones confuses visitors | Low | Low | Clear role labels (`Intake:` / `Facility:`); intake is primary on visual hierarchy |

**Rollback:** All changes revert via CMS version history. Schema reverts via single `<script>` block replacement. Each H2 section is independently revertable. Order of preference if partial rollback needed: keep CRD H2 sections (H-08 through H-12) over beyond-CRD additions (H-14 through H-20).

---

## 7. Aleksa feasibility-pass questions

Before this brief lands in Asana, Aleksa to confirm or escalate:

1. **CMS / dev hand-off path** — WordPress with theme/template direct edit, or does this route through dev tickets? Affects ownership of H-21 (schema) and H-14 (iframe).
2. **Staging environment** — staging URL available for pre-deploy validation, or production-only?
3. **Clinical roster availability for H-17** — can Surfpoint Ops provide named clinicians by Week 1, or v1 ships role-titles-only?
4. **Insurance logo assets for H-16** — brand-approved logos available, or text-only?
5. **Schema implementation pattern** — single `@graph` block in `<head>` (recommended) or parallel `<script>` blocks?
6. **Internal-link anchor IDs on `/treatments`** — can these be added to the live `/treatments` page as a small-scope edit before homepage Phase A ships, OR does H-23 wait for the `/treatments` rebuild?
7. **Effort estimate** — Aleksa's hour-band for the 24 items split by content / schema / dev / QA. Informs Zach's Asana scheduling.
8. **Timeline target** — Phase A ship date target: end of Week 2 of M1, or earlier?

---

## 8. Reference

- **CRD source:** `drivedocs/Surfpoint Recovery - Final.docx` (color-coded; green = new content used in this brief)
- **Audit data:** `exports/competitive_audit/metrics.csv` + `exports/competitive_audit/raw_html/`
- **Strategic context:** `deliverable/Surfpoint_Recovery_Q2_2026_Custom_Strategy.md` + `deliverable/Surfpoint_Task1_Rebuild_Plan.md`
- **Schema validation workflow:** `methodology/schema-validation-workflow.md`
- **Client config:** `clients/surfpointrecovery/client.json`
- **GBP reviews source for H-20:** `clients/surfpointrecovery/exports/gbp/`

---

*End of Homepage Update Brief. Aleksa: feasibility pass → answer §7 questions → request inputs from Surfpoint Ops for H-17 + H-16 → Zach routes to Asana with this doc as the single reference per item.*
