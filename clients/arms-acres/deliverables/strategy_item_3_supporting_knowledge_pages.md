# Strategy Item 3 — 2 Supporting Knowledge Pages + Internal-Link Plan (Q2 2026)

**Client:** Arms Acres · **Owner:** Aleksandar · **Department:** Content · **Status:** Briefs complete (implementation by HQDM Content team)
**Team brief:** "Build 2 supporting knowledge pages targeting top-of-funnel recovery queries with internal links to authority page"

**Authority page** (confirmed): `/inpatient/adult-rehabilitation` (see `strategy_item_4_authority_page_aio_rewrite.md`).

---

## 1. Selection logic — why these 2 pages

Selection criteria applied:

| Criterion | Why |
|---|---|
| AIO triggers on the cluster | Item 3 must compound Item 4's AIO push, not work against it |
| AA actually offers the service | Credibility / Y-M-Y-L editorial requirement |
| Distinct from M1 blog-improvement picks | No duplication with `arms_acres_m1_priorities.md` top-10 articles |
| Has GSC + DataForSEO query volume already in AA's universe | Realistic ranking pace; not a 12-month build |
| Natural internal-link path to `/inpatient/adult-rehabilitation` | Authority page strengthening |

**Considered + rejected:**

| Candidate | Why rejected |
|---|---|
| Cost-of-rehab cluster | Already covered by M1 blog picks #3 + #4 (insurance + cost) |
| "How to quit drinking / overcome addiction" cluster | Diffuse intent; no direct AA service mapping |
| Dual-diagnosis cluster | Strong fit BUT lower GSC volume in AA's existing data; better as M2 add |
| Stages-of-recovery cluster | Already absorbed into authority-page §"Stages of Recovery" |

**Selected:**

| # | Page | New URL slug | AIO triggers covered | AA service connector |
|---|---|---|---|---|
| 1 | **Alcohol Detox: What to Expect During Medical Detoxification** | `/guides/alcohol-detox-what-to-expect` | "what happens in alcohol detox" ✅<br>"how does alcohol detox work" ✅<br>"alcohol withdrawal symptoms" (GSC pos 12, 3,171 imp/180d) | Links to /inpatient/detox-program + /inpatient/adult-rehabilitation |
| 2 | **Medication-Assisted Treatment (MAT): A Complete Guide** | `/guides/medication-assisted-treatment-guide` | "what is medication assisted treatment" ✅<br>"how does medication assisted treatment work" ✅<br>"suboxone vs methadone" ✅ | Links to /service/medication-assisted-therapy + /inpatient/adult-rehabilitation |

Both pages live under a new `/guides/` parent path (separates educational content from /service/ + /blog/ — clean Information Architecture distinction; URLs of educational depth get the right URL signal).

---

## 2. Page Brief #1 — Alcohol Detox: What to Expect

### Target queries (clustered, sized via GSC 180d + DataForSEO Search Volume)

| Query | GSC pos | GSC imp/180d | AIO triggers? | Priority |
|---|---:|---:|:---:|---|
| alcohol withdrawal symptoms | 12.3 | 3,171 | (not in current AIO scrape — likely YMYL-suppressed but historically AIO-eligible) | Primary |
| what happens in alcohol detox | n/a | low | ✅ | Primary |
| how does alcohol detox work | n/a | low | ✅ | Primary |
| how to detox from alcohol | 40.3 | 672 | n/a | Secondary |
| how long does it take to detox from alcohol | 29.0 | 394 | (not AIO — pulled, no trigger) | Secondary |
| symptoms of alcohol withdrawal | 8.3 | 325 | n/a | Secondary |
| how to detox your body from alcohol | 7.8 | 393 | n/a | Tertiary |
| how to detox alcohol from your body | 9.3 | 291 | n/a | Tertiary |
| how to detox your liver from alcohol | 29.6 | 393 | n/a | Tertiary |
| signs of detoxing | 13.3 | 535 | n/a | Tertiary |
| signs of detox | 10.2 | 483 | n/a | Tertiary |
| detox symptoms | 21.2 | 1,270 | n/a | Tertiary |
| symptoms of detox | 21.7 | 701 | n/a | Tertiary |

**Cluster total impression volume (180d, GSC-verified): ~9,000 impressions** in AA's existing keyword universe at sub-optimal positions. Closing to top-5 average position = projected ~1,200 clicks/180d (vs current ~50).

### Page structure (2,500–3,000 words)

```
H1: Alcohol Detox: What to Expect During Medical Detoxification

[Reading time: 7 min · Last reviewed: 2026-XX-XX by Dr. [Clinical Director], MD · OASAS-licensed perspective]

[60-word hero summary: definition + safety framing + AA's medical-detox availability + 24/7 admissions]

H2: What Is Alcohol Detox?
  → Definitional 200 words
  → Differentiation: at-home detox is dangerous → medical detox is the standard of care
  → AIO-trigger match for "what happens in alcohol detox"

H2: Alcohol Withdrawal Symptoms (by severity)
  → 400-500 words
  → Mild: headache, tremor, anxiety, insomnia (6-12 hrs after last drink)
  → Moderate: elevated BP/HR, sweating, nausea, irritability (24-48 hrs)
  → Severe / delirium tremens: seizures, hallucinations, confusion, hyperthermia (48-72+ hrs)
  → CIWA-Ar scoring framework reference
  → CDC + NIAAA citations
  → Direct GSC match for high-volume "alcohol withdrawal symptoms" query

H2: How Long Does Alcohol Detox Take?
  → 250 words
  → Typical timeline: 5-7 days for medical detox (medication-supported)
  → Post-acute withdrawal syndrome (PAWS) framing — weeks to months
  → AA's typical detox-to-inpatient transition

H2: What Happens in Medical Detox (Day-by-Day)
  → 500 words
  → Day 1: medical assessment, CIWA-Ar scoring, history
  → Days 1-3: benzodiazepine taper (standard of care for alcohol withdrawal)
  → Days 3-5: tapering off; sleep + nutrition; first group exposure
  → Days 5-7: transition planning to inpatient rehab
  → AIO-trigger match for "what happens in alcohol detox" AND "how does alcohol detox work"
  → **Internal link → /inpatient/adult-rehabilitation (authority page)** for "what comes after detox" framing

H2: Medications Used in Alcohol Detox
  → Benzodiazepines (lorazepam, diazepam) — withdrawal management
  → Anticonvulsants
  → Thiamine + folate (Wernicke prevention)
  → Antiemetics, beta-blockers as adjunct
  → SAMHSA TIP 45 citation

H2: When Is Inpatient Detox Required vs Outpatient Detox Safe?
  → Decision framework: severity history + medical comorbidities + home environment
  → AA offers inpatient detox at the Carmel facility
  → **Internal link → /inpatient/detox-program** (existing AA service page)

H2: After Detox — Why Inpatient Rehab Matters
  → 300 words
  → Detox addresses physical dependence — does not address the SUD
  → 28-day inpatient rehab as the evidence-supported sequel
  → Statistic: relapse rates without continued treatment after detox
  → **Internal link → /inpatient/adult-rehabilitation (authority page)** — primary outbound link

H2: Frequently Asked Questions
  → 6-8 FAQ pairs, FAQPage schema
  → "Is alcohol detox dangerous?"
  → "Can I detox at home?"
  → "How long do alcohol withdrawal symptoms last?"
  → "Do I need a doctor to detox from alcohol?"
  → "Will I have seizures during alcohol detox?"
  → "What medications help with alcohol withdrawal?"
  → "Is medical detox covered by insurance?"
  → "What happens after I finish alcohol detox?"

H2: When to Seek Emergency Care
  → Bullet list of red-flag symptoms (seizures, confusion, fever, hallucinations)
  → 911 + AA's 24/7 admissions hotline

H2: References
  → NIAAA (alcohol withdrawal management)
  → SAMHSA TIP 45 (Detoxification and Substance Abuse Treatment)
  → CDC (alcohol-related morbidity statistics)
  → NIH MedlinePlus (alcohol withdrawal)
```

### Schema markup

- **Article** (`headline`, `author` Person, `reviewedBy` Person Dr. Clinical Director, `datePublished`, `dateModified`, `wordCount`)
- **FAQPage** (8 Q&A pairs)
- **MedicalWebPage** (`medicalAudience` Patient, `aspect` Treatment)

### Internal-link plan

**Inbound to this page:**
- From homepage (Resources / Guides section — add nav element if absent)
- From `/inpatient/detox-program` (existing service page — "Learn more: What to expect in alcohol detox" callout)
- From `/inpatient/adult-rehabilitation` (Item 4 authority page — "Read our complete guide to alcohol detox" link in the "What Conditions We Treat" section)
- From `/blog/insurance-cover-drug-and-alcohol-rehab` (M1 blog refresh #3 — add link from "alcohol detox covered by insurance?" subsection)

**Outbound from this page (authority-page reinforcement):**
- **→ `/inpatient/adult-rehabilitation`** — 2 prominent contextual links (in "what happens after detox" + "why inpatient rehab matters" sections)
- → `/inpatient/detox-program` — 1 link to the actual AA service page
- → `/service/medication-assisted-therapy` — 1 link in medications section

---

## 3. Page Brief #2 — Medication-Assisted Treatment (MAT) Guide

### Target queries

| Query | GSC pos | GSC imp/180d | AIO triggers? | Priority |
|---|---:|---:|:---:|---|
| what is medication assisted treatment | n/a | low | ✅ | Primary |
| how does medication assisted treatment work | n/a | low | ✅ | Primary |
| suboxone vs methadone | n/a | low | ✅ | Primary |
| how does suboxone work | n/a | low | n/a (in scrape) | Secondary |
| how does methadone work | n/a | low | n/a | Secondary |
| naltrexone for alcohol use disorder | n/a | low | n/a | Secondary |
| MAT for opioid addiction | n/a | low | n/a | Secondary |
| is suboxone addictive | n/a | low | n/a | Tertiary |
| how long does suboxone treatment last | n/a | low | n/a | Tertiary |
| vivitrol vs suboxone | n/a | low | n/a | Tertiary |

**This is a low-GSC-volume cluster in AA's current footprint** — by design. The GSC numbers don't yet exist because AA doesn't have published informational content on MAT (only a thin /service/medication-assisted-therapy page). This brief is the **content-led market-entry play** for the MAT cluster:
- 3 AIO-trigger queries
- High commercial-LTV intent (opioid-replacement clients are long-duration)
- Direct AA service match (MAT is in `clinical_offerings`)
- Low-competition NY market relative to AA's authority (Joint Commission + OASAS)

### Page structure (2,500-3,000 words)

```
H1: Medication-Assisted Treatment (MAT) for Addiction: A Complete Guide

[Reading time: 9 min · Last reviewed: 2026-XX-XX by Dr. [Medical Director], MD]

[60-word hero summary: MAT is evidence-based + FDA-approved + reduces overdose mortality + AA offers MAT integrated with inpatient + outpatient programs]

H2: What Is Medication-Assisted Treatment (MAT)?
  → 250-word definitional answer
  → Combines FDA-approved medication with counseling/behavioral therapy
  → Evidence base: SAMHSA + NIDA + WHO endorsements
  → AIO-trigger match for "what is medication assisted treatment"
  → "Whole-person treatment" framing

H2: How Does MAT Work?
  → 400 words
  → Three FDA-approved medication classes:
    → Opioid agonists (methadone): full agonist, reduces craving
    → Partial agonists (buprenorphine / suboxone): blocks high, reduces withdrawal
    → Antagonists (naltrexone / vivitrol): blocks opioid effect entirely
  → Plus alcohol-specific: naltrexone (oral + extended-release injectable), acamprosate, disulfiram
  → AIO-trigger match for "how does MAT work"

H2: Suboxone vs Methadone vs Naltrexone — Which Is Right for Me?
  → 500-word comparison
  → Decision framework table (severity / pregnancy status / liver function / clinic availability / employment + travel needs)
  → AIO-trigger match for "suboxone vs methadone"
  → **Note: framed as clinician-decision, not consumer-pick — Y-M-Y-L safe**

H2: How Long Does MAT Last?
  → 250 words
  → 6-month minimum per SAMHSA guidance for opioid use disorder
  → Many patients on MAT indefinitely (evidence-supported — equivalent to chronic-disease management)
  → AA's approach: titration + maintenance + tapering when clinically appropriate

H2: Is MAT Just "Replacing One Drug With Another"?
  → 300 words — addresses the most common stigma objection
  → Medical-model framing: insulin for diabetes, antidepressants for depression
  → Cite NIH NIDA position statement
  → SAMHSA's "MAT is not trading one addiction for another"

H2: Side Effects + Safety
  → Suboxone: constipation, nausea, headache, precipitated withdrawal risk
  → Methadone: respiratory depression risk, QT prolongation, drug interactions
  → Naltrexone: liver enzyme elevation, post-discontinuation overdose risk
  → Each with mitigation strategy + clinician monitoring framing

H2: MAT During Inpatient Rehab at Arms Acres
  → 300 words
  → AA's inpatient program initiates MAT during the detox phase
  → Transition to outpatient with continued MAT
  → **Internal link → /inpatient/adult-rehabilitation (authority page)** — primary
  → **Internal link → /service/medication-assisted-therapy** — secondary
  → **Internal link → /inpatient/detox-program** — context

H2: MAT in Outpatient Care
  → 200 words
  → AA's Carmel + Bronx + Queens outpatient clinics offer MAT
  → Step-down from inpatient + standalone outpatient pathways
  → **Internal link → /outpatient/{carmel|bronx|queens}-outpatient**

H2: Insurance + Cost of MAT
  → Medicaid + Medicare covered
  → Most commercial insurance covered (ACA mental-health parity)
  → AA's verification process

H2: Frequently Asked Questions
  → 8-10 FAQ pairs, FAQPage schema:
  → "What is medication-assisted treatment?"
  → "How does suboxone work?"
  → "Is suboxone addictive?"
  → "How long does MAT last?"
  → "Can I work or drive while taking suboxone?"
  → "What's the difference between suboxone and methadone?"
  → "Does MAT work for alcohol addiction?"
  → "Is MAT covered by insurance?"
  → "Can pregnant women receive MAT?"
  → "What happens if I want to stop MAT?"

H2: References
  → SAMHSA — Medications for Substance Use Disorders
  → NIDA — Medications to Treat Opioid Use Disorder
  → CDC — Opioid Overdose Prevention
  → FDA — MAT approval documentation
  → ASAM — National Practice Guideline
```

### Schema markup

- **Article**
- **FAQPage** (10 Q&A pairs)
- **MedicalWebPage**
- **Drug entity** schema for suboxone / methadone / naltrexone (rich-result eligible — `Drug` with `clinicalPharmacology`)

### Internal-link plan

**Inbound:**
- From homepage (Guides / Resources nav)
- From `/inpatient/adult-rehabilitation` (Item 4 authority page — "Learn more about MAT" link in the "What Therapies Are Used" section)
- From `/service/medication-assisted-therapy` (existing AA service page — "Read the MAT guide" callout)
- From `/inpatient/detox-program` ("MAT during detox" section link)
- From `/blog/aetna-cover-rehab-treatment` + `/blog/medicare-cover-alcohol-and-drug-rehab` (M1 blog refreshes — insurance + MAT cross-link)

**Outbound (authority-page reinforcement):**
- **→ `/inpatient/adult-rehabilitation`** — 2 contextual links (sections "MAT During Inpatient Rehab" + FAQ "what happens during MAT in rehab")
- → `/service/medication-assisted-therapy` — 1 link
- → `/inpatient/detox-program` — 1 link
- → `/outpatient/carmel-outpatient` + `/outpatient/bronx-outpatient` + `/outpatient/queens-outpatient` — 3 contextual links for "MAT in outpatient" section

---

## 4. Combined internal-link map — strengthening `/inpatient/adult-rehabilitation`

```
                   /guides/alcohol-detox-what-to-expect
                              │
                              │  2 contextual links
                              ↓
   ┌─────────────────────────────────────────────────┐
   │                                                 │
   │      /inpatient/adult-rehabilitation            │
   │      (authority page — Item 4)                  │
   │                                                 │
   └─────────────────────────────────────────────────┘
                              ↑
                              │  2 contextual links
                              │
                   /guides/medication-assisted-treatment-guide
```

**Plus** the authority page receives links **from** these existing AA pages (audit + add during Item 4 rewrite implementation):
- `/inpatient` (parent) — "Adult Inpatient Rehabilitation" featured callout
- `/inpatient/detox-program` — "What happens after detox?" contextual link
- `/admissions` — "Adult inpatient rehabilitation overview" footer link
- All `/outpatient/*` pages — "Looking for inpatient instead?" callout
- `/service/medication-assisted-therapy` — "MAT as part of inpatient rehab" link
- Top 5 highest-traffic blog posts (per M1 blog improvement picks) — contextual link to authority page

**Net inbound link count to `/inpatient/adult-rehabilitation` after Item 3 + Item 4 internal-link work: ~15 contextual links from semantically related URLs** (vs the current scattered state with ~3 navigational links only).

---

## 5. Production sequence — both pages in M1

| Wk | Page #1 (Alcohol Detox) | Page #2 (MAT Guide) |
|---|---|---|
| **M1 wk 1** | Outline approval (Aleksandar + clinical lead) | Outline approval |
| **M1 wk 2** | Write body 2,500-3,000 words; FAQs; schema | Write body; FAQs; schema; Drug schema blocks |
| **M1 wk 3** | Clinical review + revisions | Clinical review + revisions |
| **M1 wk 4** | Publish + add inbound links from §2.4 list + request indexing | Publish + add inbound links from §3.4 list + request indexing |
| **M2 wk 1-4** | Monitor + first ranking checks | Monitor + first ranking checks |

**Critical-path risk:** clinical review (Y-M-Y-L content requirement). Need a clinical lead committed to weekly review cycles. If clinical-review capacity is the bottleneck, ship page #1 (alcohol detox — lower-clinical-risk content) first, then page #2 in M2.

---

## 6. Measurement plan

Re-run `scripts/ai_overview_armsacres.py` 4 + 8 + 12 weeks post-publish. Track:
- Whether the 2 new URLs surface as AIO citations on any of the 6 target AIO-trigger queries (3 per page)
- GSC clicks + impressions on the target query clusters (alcohol-detox cluster currently ~50 clicks / 9,000 imp / 180d; MAT cluster currently negligible)
- LLM mention rate for AA on informational SUD queries (currently 0% on informational; this is the cluster these pages target)
- Authority page ranking changes on the 12 target AIO queries — measure both direct (authority page improvement from Item 4) AND indirect (internal-link mass from Item 3 pages)

**M1 + M2 target:** alcohol detox page achieves top-15 average position for "alcohol withdrawal symptoms" (currently 12.3 — modest move expected within a quarter); MAT guide achieves any top-30 position for "what is medication assisted treatment" (currently no ranking).

---

## 7. What's NOT in this brief (explicit deferrals)

| Item | Why |
|---|---|
| Dual-diagnosis pillar page | Strong fit but lower priority than alcohol-detox + MAT; queued for M2 |
| Stages-of-recovery pillar page | Absorbed into authority page §"Stages of Recovery" rather than standalone |
| City-specific MAT pages (e.g., `/mat-clinic-bronx-ny`) | Phase 2 + 3 build; depends on Queens outpatient ops resolution first (Item 2 dependency) |
| Reframing /service/medication-assisted-therapy itself | Out-of-scope rewrite; this brief covers the new /guides/ asset only |
| Localizing alcohol-detox page to Carmel/Putnam | Could add local geo-target as M2 enhancement; M1 ships as national informational |

---

## 8. Status mapping to team brief

| Brief sub-deliverable | Status | Where |
|---|---|---|
| 2 supporting pages | ✅ Spec'd | §2 (alcohol detox) + §3 (MAT guide) |
| Top-of-funnel recovery queries targeted | ✅ Spec'd | §2 query table + §3 query table |
| Internal links to authority page | ✅ Spec'd | §2.4 + §3.4 + §4 link map |

**Owner (Aleksandar) → ✅ In Report (move from In Progress) → Result/Notes column:** *"Two new /guides/ pages briefed: Alcohol Detox (covers ~9,000 GSC imp/180d cluster + 2 AIO triggers) and MAT Guide (covers 3 AIO triggers + opens MAT informational visibility). Each page ships with FAQPage + MedicalWebPage schema. Combined internal-link plan adds ~15 contextual inbound links to /inpatient/adult-rehabilitation authority page. Production sequence: both ship in M1 wk 4 if clinical review capacity supports; sequenced ship (alcohol detox M1, MAT M2) is the fallback."*
