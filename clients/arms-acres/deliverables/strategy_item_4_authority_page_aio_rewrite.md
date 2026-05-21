# Strategy Item 4 — LLM Visibility / Authority Page AI Overview Rewrite Spec (Q2 2026)

**Client:** Arms Acres · **Owner:** Aleksandar · **Department:** On-Page · **Status:** Spec complete (analysis-only — implementation by HQDM On-Page team / Aleksa)
**Team brief:** "Optimize authority page for AI Overview inclusion — add structured FAQ, first-person success signals, E-E-A-T elements"

**Authority page (confirmed with Aleksandar):** `/inpatient/adult-rehabilitation` — chosen because (a) it's the 8-cluster-converger from M1 priorities and (b) consolidates AIO-trigger query intent rather than fragmenting authority to a new URL.

---

## 1. Why this page + this strategy (the constraint that drove the brief)

**Constraint** (measured 2026-05-11 + reconfirmed 2026-05-12):
- Local Carmel/NY commercial queries: **0 / 26 trigger AI Overview** (`exports/dataforseo/serp_features.csv`). Google's YMYL caution suppresses AIO on local addiction-treatment queries.
- **Informational SUD queries: 24 / 36 trigger AI Overview** (67%) (`exports/dataforseo/ai_overview/serp_features_informational.csv`).

**Implication:** AIO presence for Arms Acres is **not winnable through local-commercial intent**. It is winnable through **informational top-of-funnel content depth** on the page where AA's authority signals (Joint Commission, OASAS, 191-bed, 1982, employee-owned, 54-acre facility) materialize.

**AIO-trigger queries with direct relevance to `/inpatient/adult-rehabilitation`:**

| Trigger query | AIO present | Bucket | Why this page can target it |
|---|:---:|---|---|
| what is inpatient rehab | ✅ | what_is | Page's literal subject |
| how does drug rehab work | ✅ | how_does | Treatment-process content fits naturally |
| how long is inpatient rehab | ✅ | how_does | AA's 28-day default + variable lengths |
| what to expect in rehab | ✅ | process | Inpatient process narrative |
| what happens in inpatient rehab | ✅ | process | Direct fit |
| inpatient vs outpatient rehab | ✅ | comparisons | AA offers both — credentialed to compare |
| is rehab worth it | ✅ | process | Alumni testimonials + outcomes |
| stages of addiction recovery | ✅ | education | Treatment-process content |
| is alcoholism a disease | ✅ | education | Medical-authority content |
| what is dual diagnosis treatment | ✅ | what_is | AA's dual-diagnosis offering |
| what is medication assisted treatment | ✅ | what_is | AA's MAT offering |
| how does MAT work | ✅ | how_does | AA's MAT offering |

12 directly-targetable AIO-trigger queries. These are the **content scaffolding** for the rewrite.

---

## 2. Current state of the page — audit (2026-05-12)

Source: `exports/pages_raw/inpatient_adult-rehabilitation.html` (38,913 bytes raw).

| Audit dimension | Current state | Gap vs AIO-cited competitor pattern |
|---|---|---|
| Title | `Adult Rehabilitation \| Arms Acres` | No keyword hook, no differentiator |
| Meta description | **EMPTY** | Site-wide pattern; needs filling |
| H1 | `Adult Rehabilitation` | Generic |
| H2/H3 structure | Women's / Men's / Co-Ed program; quote; newsletter | Demographics-led, not informational-led |
| Body word count | **1,519 words** | Short for an authority page (target 2,500–3,500) |
| JSON-LD blocks | **0** | Should have MedicalClinic + FAQPage + MedicalBusiness |
| FAQ schema | **None** | Highest-leverage AIO-citation lever |
| Article / clinical reviewer schema | **None** | E-E-A-T gap |
| Author byline | None visible | E-E-A-T gap |
| Last-updated date | None visible | E-E-A-T gap |
| Outbound citations to NIH/NIDA/CDC/SAMHSA | None | AIO sources frequently cite alongside authoritative gov references |
| Alumni testimonials (first-person quotes) | None on page | Team brief gap |
| Outcome statistics (with attribution) | None on page | Trust/E-E-A-T gap |
| Image alt-text mentioning clinical role / accreditation | Unknown — sample sub-set | Audit task |

---

## 3. The editorial pattern AIO cites (from the 9 actual citations on "what is inpatient rehab")

Citations captured 2026-05-12: medicareinteractive.org, rehabselect.net, **addictioncenter.com**, savidahealth.com, lcmchealth.org, washburnhouse.com, rehabs.com, upmc.com, **encompasshealth.com**.

**Pattern observed:**
- **Long-form (2,500–4,000 words)** explainer pages, not service-sell pages
- **Strong heading hierarchy** that maps to common questions (H2 = "How long is inpatient rehab?" rather than H2 = "Our Program")
- **Comparative content** ("inpatient vs outpatient" tables / decision frameworks) — Google's AIO synthesizer loves explicit comparison structure
- **FAQ blocks** present on 7 of the 9 cited pages
- **Clinical reviewer byline** (Dr. X, LCSW Y) — particularly on hospital-network sites (lcmchealth, upmc, encompasshealth)
- **Citations / references list** at the bottom (medlineplus, NIH, NIDA, SAMHSA)
- **First-person testimonial** or quote block from alumni
- **Last-updated timestamp** prominently displayed
- **Reading-time estimate** displayed (signal for content-depth credibility)

This pattern is the **template** for the rewrite. AA already has the credential basis (OASAS, Joint Commission, 191-bed, 1982) — what's missing is the editorial packaging.

---

## 4. The rewrite spec

### 4.1 New title + meta

| Element | New value |
|---|---|
| Title | `Inpatient Rehabilitation in New York: What to Expect at Arms Acres (Joint Commission + OASAS Licensed)` |
| Meta description | `Inpatient drug & alcohol rehabilitation at Arms Acres' 191-bed, Joint Commission–accredited Carmel NY facility. Learn what to expect during a 28-day inpatient program, including detox, dual-diagnosis treatment, MAT, and aftercare. Serving the Hudson Valley & NYC since 1982.` |

### 4.2 New page structure (heading-led, informational-first)

> Existing demographics-led structure (Women's / Men's / Co-Ed) becomes **sub-section** under "Who is Inpatient Rehab For?" rather than the page skeleton.

```
H1: Inpatient Rehabilitation: A Complete Guide to Arms Acres' Adult Inpatient Program

  [Reading time: 9 min · Last reviewed: 2026-05-XX by Dr. [Clinical Director], MD · OASAS licensed · Joint Commission accredited]

  [Hero summary — 60 words: what AA offers, 191-bed campus, 54-acre Hudson Valley setting, 28-day default length, Medicaid/Medicare/most commercial insurance accepted, 24/7 admissions hotline]

H2: What Is Inpatient Rehab?
  → 250-word definitional answer matching the AIO-trigger query exactly
  → Pulls in OASAS regulatory definition + NIDA reference

H2: How Does Inpatient Drug & Alcohol Rehab Work?
  → 400-word process narrative
  → Day-1 admission → medical detox (5-7 days) → therapy phase → aftercare planning
  → Citation to NIDA "Principles of Effective Treatment"

H2: How Long Is Inpatient Rehab?
  → AA-specific: typical 28 days; variable 14-90+ based on clinical need
  → Acknowledge the AIO-cited frameworks ("short-term" 28-day, extended residential 90-day)
  → Insurance-length-of-stay reality check

H2: What to Expect in the First 7 Days
  → Day-by-day timeline (intake → medical detox → first group → first individual session)
  → Sub-H3 per day or per phase
  → This is the highest-engagement section per pattern in AIO-cited content

H2: Inpatient vs Outpatient Rehab: Which Is Right?
  → Decision-framework table (severity / medical-monitoring need / home environment / employment / family obligations)
  → AA offers both — links to /outpatient
  → Direct AIO-target match

H2: What Conditions We Treat
  → Alcohol use disorder (link cluster → Item 3 supporting page #1: alcohol-detox)
  → Opioid use disorder + MAT continuity
  → Benzodiazepine dependence
  → Stimulant use disorder
  → Dual diagnosis (anxiety + addiction, depression + addiction, PTSD + addiction)
  → Each sub-H3 with 80-100 words + outbound NIH citation

H2: What Therapies Are Used
  → CBT · Motivational Interviewing · Trauma-Informed Care · Group · Family · Equine-Assisted · Psychiatric Co-Treatment · MAT
  → Each modality 60-80 words with mechanism-of-action language

H2: Who Is Inpatient Rehab For? (← demographics moved here)
  → H3: Adult Men (relocated existing content)
  → H3: Adult Women (relocated existing content)
  → H3: Co-Ed Program (relocated existing content)

H2: Accreditation, Licensing, and Clinical Standards
  → OASAS-licensed facility (state #)
  → Joint Commission accredited (last survey date if available — pending intake)
  → CARF status (pending verification — flagged in M1 link gap)
  → Clinical-director credentials + bio + photo

H2: What Insurance Is Accepted
  → In-network plans (Medicaid, Beacon confirmed; expanded list pending intake)
  → Out-of-pocket / financing
  → Pre-verification CTA

H2: Real Alumni Stories
  → 3 first-person testimonials (250–400 words each)
  → Real first names (with consent) + recovery duration ("3 years sober")
  → Connect-the-dots ("alumni program" link to /service/alumni)

H2: Aftercare and Continuing Care
  → Recovery Coach Service overview (link to /service/recovery-coach)
  → Alumni program
  → Step-down to outpatient (Carmel / Bronx / Queens)

H2: Frequently Asked Questions (FAQ — schema-targeted)
  → 10–12 Q&A pairs — see §4.3

H2: References
  → NIDA — Principles of Effective Treatment (2018+)
  → NIAAA — Treatment for Alcohol Problems
  → SAMHSA — TIP 45 / TIP 63
  → OASAS — NY licensing standards
  → AA-Cited internal sources (with last-accessed dates)
```

**Word count target: 2,800–3,500.** Doubles current 1,519.

### 4.3 FAQ schema — 12 Q&A pairs targeting AIO-trigger queries

Each Q matches a verified AIO-trigger query verbatim or near-verbatim. Each A is 60–150 words.

| # | Question | AIO-trigger source | Target answer beats |
|---|---|---|---|
| 1 | What is inpatient rehab? | Direct AIO trigger | Definitional + AA-specific in 100 words |
| 2 | How long is inpatient rehab? | Direct AIO trigger | Typical durations + variability + AA's 28-day default |
| 3 | How does drug rehab work? | Direct AIO trigger | Stages: detox → therapy → aftercare |
| 4 | What happens in alcohol detox? | Direct AIO trigger | Day-1 medical assessment → withdrawal management → therapy initiation |
| 5 | What is dual diagnosis treatment? | Direct AIO trigger | Co-occurring SUD + mental health; integrated approach |
| 6 | What is medication assisted treatment (MAT)? | Direct AIO trigger | Defines MAT + AA's MAT availability |
| 7 | How does suboxone work? | High-volume AIO-adjacent | Mechanism of action — primer link to MAT-specific service page |
| 8 | Is inpatient or outpatient rehab better? | Direct AIO trigger | Decision-framework answer |
| 9 | Is alcoholism a disease? | Direct AIO trigger | Medical-model answer + AA's clinical stance |
| 10 | Does insurance cover inpatient rehab? | High GSC search demand (M1 blog link) | Insurance reality + AA's verification process |
| 11 | Can I keep my phone / personal belongings? | High Q&A volume on AA's GBP (8 mentions) | Operational answer — addresses real prospect anxiety |
| 12 | What happens after I finish inpatient rehab? | Aftercare gap | Recovery Coach + alumni + outpatient step-down |

**FAQPage JSON-LD block** (full @context, structure mirroring AIO-cited competitor pattern):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is inpatient rehab?",
      "acceptedAnswer": { "@type": "Answer", "text": "<full answer 1>" } },
    ...
  ]
}
```

### 4.4 MedicalBusiness / MedicalClinic schema

Currently the page (and the site) has **zero JSON-LD**. Adding three nested schema blocks:

1. **`MedicalClinic`** — with sameAs to all 4 GBPs, address, telephone, openingHours (24/7), medicalSpecialty `Psychiatry`/`Addiction Medicine`, availableService array enumerating MAT/Detox/Inpatient/Outpatient/PsychiatricServices/etc.
2. **`FAQPage`** — see §4.3
3. **`MedicalWebPage`** — with `reviewedBy` Person (Clinical Director), `lastReviewed` (ISO date), `medicalAudience` `Patient`, `aspect` `Treatment`

### 4.5 E-E-A-T elements added

**Experience (the missed-most-often pillar):**
- 3 alumni testimonials with first names + recovery duration + photo (with release)
- Clinical-director bio with date credentialed + years-in-practice
- Founded-1982 + employee-owned positioning in the hero
- Photos of physical facility (Hudson Valley + 54-acre context)

**Expertise:**
- Clinical reviewer byline at top of page (Dr. X, MD, Addiction Medicine board-certified)
- Co-author byline (LCSW or Clinical Director)
- Citations to NIDA / NIAAA / SAMHSA / OASAS at section ends and in references

**Authoritativeness:**
- Joint Commission seal (image with alt-text)
- OASAS license badge
- CARF (pending verification — see Strategy Item 1 link gap #1)
- Last-reviewed-on date + reviewing physician

**Trustworthiness:**
- "How we make money / insurance & payment" transparency section
- Editorial-policy footer link ("This page was clinically reviewed by Dr. X on YYYY-MM-DD")
- Privacy / HIPAA section link
- Explicit disclaimer: "This page provides general information and is not a substitute for medical advice."

### 4.6 First-person success signals — concrete spec

Three alumni stories. Each story:

| Element | Content |
|---|---|
| Lede | 1-sentence hook with first name + recovery duration + locale ("M., Putnam Valley NY, 3 years sober") |
| Before-arrival paragraph | 100 words — life context, addiction trajectory |
| Treatment experience | 150 words — what AA was like, what helped (specific modalities or staff types — not specific names without consent) |
| Aftercare | 80 words — what continuing-care looked like (alumni / recovery coach / outpatient step-down) |
| Outcome / current life | 80 words — present-tense outcome |
| Pull-quote | 1 sentence highlighted, schema-marked as `Quotation` |

**Sourcing:** Recovery Coach Service team + alumni program have the contact relationships. Editorial → release form → publication. 3-week typical timeline per testimonial; can land all 3 in M1 if intake started immediately.

---

## 5. What this rewrite is NOT trying to do

| Not in scope | Why |
|---|---|
| Rank for "drug rehab carmel ny" (local-commercial) | Already rank-1 in Carmel Map Pack; this page is for informational AIO + supporting authority |
| Replace `/inpatient` (parent) or `/inpatient/detox-program` | Those are sibling service pages; this rewrite makes adult-rehabilitation the **authority hub** but doesn't consolidate the sibling URLs |
| Add internal-link mass from blog content | Item 3's 2 supporting knowledge pages handle the internal-link build (see strategy_item_3) |
| Schema markup on the entire site | Site-wide schema rollout is a separate M2 workstream (see Q2 Strategy §1.6) |
| Get AA into AIO on local Carmel queries | Constraint — Google doesn't trigger AIO on local SUD queries. Not winnable through page-level work |

---

## 6. Measurement plan (post-implementation)

Re-run `scripts/ai_overview_armsacres.py` every 6 weeks. Track:
- AIO citation count for `armsacres.com/inpatient/adult-rehabilitation/*` URLs (currently: 0)
- AIO trigger rate on the 12 target queries
- AA organic position 1–10 inclusion for any of the 12 target queries
- LLM chat-response mention rate (re-run llm_visibility_armsacres_v3) on educational prompts ("what is inpatient rehab", "how does drug rehab work") — currently 0% mention rate on informational queries per Q2 Strategy §1.9

**Baseline as of 2026-05-12 (pre-rewrite):**
- AIO citations for armsacres.com on the 12 target queries: 0
- AA in top 10 organic for "what is inpatient rehab": not in top 30 (page exists but doesn't rank)
- LLM mention rate on informational SUD queries: 0% across ChatGPT/Gemini/Perplexity/Claude (16 prompt-LLM pairs)

**M1 target (4 weeks post-ship):** at least 1 of 12 AIO target queries surfaces armsacres.com as cited reference; at least 1 lands in top 20 organic. Material AIO lift expected M2–M3 (Google's AIO index lag).

---

## 7. Implementation handoff checklist (for HQDM On-Page team)

| # | Task | Owner | M1/M2 | Effort |
|---|---|---|---|---|
| 1 | Approve content outline § 4.2 | Aleksandar + clinical lead | M1 wk 1 | 1 review cycle |
| 2 | Source 3 alumni testimonials with release forms | Alumni program + content | M1 wk 1-3 | Concurrent |
| 3 | Confirm clinical-reviewer byline person + credentials | Clinical leadership | M1 wk 1 | 1 hr |
| 4 | Write FAQ section (12 Q&A) | Content writer | M1 wk 2 | 8 hrs |
| 5 | Write or commission body copy (2,800-3,500 words to outline) | Content writer | M1 wk 2-3 | 16-24 hrs |
| 6 | Produce 3 JSON-LD blocks (MedicalClinic + FAQPage + MedicalWebPage) | On-Page (Aleksa) | M1 wk 3 | 3 hrs |
| 7 | Pre-publish schema validation (Schema.org Validator + Rich Results Test) | On-Page | M1 wk 3 | 1 hr |
| 8 | Source clinical-credential images (OASAS, Joint Commission badges) + alt-text | On-Page | M1 wk 3 | 1 hr |
| 9 | Publish + submit URL Inspection / request indexing | On-Page | M1 wk 4 | 30 min |
| 10 | First measurement re-run (4 weeks post-publish) | Aleksandar | M2 wk 1 | 30 min |

**Critical path:** alumni testimonials (3-week sourcing pipeline) is the gate — start M1 wk 1 to land all of §4-§9 in M1. Without alumni testimonials, the rewrite ships without the first-person dimension and we lose the team-brief specificity.

---

## 8. Status mapping to team brief

| Brief sub-deliverable | Status | Where |
|---|---|---|
| Structured FAQ | ✅ Spec'd | §4.3 (12 Q&A pairs mapped to AIO triggers) |
| First-person success signals | ✅ Spec'd | §4.6 (3 alumni stories, structured) |
| E-E-A-T elements | ✅ Spec'd | §4.5 (all 4 pillars addressed) |
| AI Overview optimization | ✅ Spec'd | §4.2 outline + §4.4 schema + §3 editorial pattern |

**Owner (Aleksandar) → ✅ In Report (move from In Progress) → Result/Notes column:** *"Authority page selected: /inpatient/adult-rehabilitation. Page currently has 1,519 words, 0 schema, no E-E-A-T markers. AIO is winnable through informational queries (24/36 trigger AIO at 67%) but not local-commercial (0/26). Rewrite spec targets 12 AIO-trigger queries via new structure, FAQ schema, MedicalClinic + MedicalWebPage schema, 3 alumni testimonials, clinical-reviewer byline. Implementation handoff in §7."*
