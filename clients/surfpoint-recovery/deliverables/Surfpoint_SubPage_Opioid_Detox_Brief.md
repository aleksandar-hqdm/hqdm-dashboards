# Surfpoint /treatments/opioid-detox — Build Brief

**Page:** `https://www.surfpointrecovery.com/treatments/opioid-detox` (NEW)
**Owner:** Aleksa Popovic (On-Page) — task router · **Author:** Aleksandar Spasevski · **Date:** 2026-05-12
**Scope:** Net-new sub-page under `/treatments/`. Combines opioid detox + Medication-Assisted Treatment (MAT) into one page. Parent hub = `/treatments`.
**Status:** Ready for Aleksa feasibility pass + team assignment

---

## Why this brief exists

Per the prioritization in [Surfpoint_Treatments_SubPages_BuildPlan.md](Surfpoint_Treatments_SubPages_BuildPlan.md):

- **opioid_mat cluster:** 718 addressable searches/mo · effective geo-only KD = **3.3** (one of the lowest in the universe)
- **Strategically uncontested SERP:** the top 3 for "medication assisted treatment brooklyn" are Mount Sinai, Seek Counseling, One Brooklyn Health — **all outpatient**. No inpatient MAT competitor surfaces in the top 12.
- **Surfpoint already offers inpatient MAT** with buprenorphine and naltrexone (per `client.json` + CRD), but currently has no page that says so. The MAT angle is differentiated and underclaimed.
- **LLM citation gap:** "MAT Brooklyn" is one of the prompts where Surfpoint provides the service but isn't surfaced (per Q2 LLM audit).

**The strategic ask:** build the page that captures the inpatient-MAT search surface no other Brooklyn provider owns. This is the highest-leverage build in the architecture by `addressable / KD` (score 218).

Secondary: orphan URL `/services/opioid-detox-services` redirects here once this page ships.

---

## 1. At-a-glance checklist

**16 items total: 14 page-build + 2 cross-page integration.**

| # | Type | Item | Owner | Status |
|---|---|---|---|---|
| OD-01 | NEW | Meta title | Aleksa | ☐ |
| OD-02 | NEW | Meta description | Aleksa | ☐ |
| OD-03 | NEW | H1 | Aleksa | ☐ |
| OD-04 | NEW | Hero section — opioid crisis + Surfpoint's MAT position | Content + Aleksa | ☐ |
| OD-05 | NEW | "What is opioid detox + MAT" H2 — clinical definition | Content + Aleksa | ☐ |
| OD-06 | NEW | "Medications We Use" H2 — buprenorphine, naltrexone, methadone notes | Content + Aleksa | ☐ |
| OD-07 | NEW | "Who needs medical opioid detox" H2 | Content + Aleksa | ☐ |
| OD-08 | NEW | "Opioid Withdrawal Timeline" H2 — short-acting vs long-acting table | Content + Aleksa | ☐ |
| OD-09 | NEW | "How Surfpoint treats opioid use disorder" H2 — clinical protocol | Content + Aleksa | ☐ |
| OD-10 | NEW | "What to expect at our Coney Island facility" H2 | Content + Aleksa | ☐ |
| OD-11 | NEW | "Insurance We Accept" H2 | Aleksa + Content | ☐ |
| OD-12 | NEW | "Frequently Asked Questions" — 7-9 opioid+MAT Q&As (FAQPage schema) | Content + Aleksa | ☐ |
| OD-13 | NEW | Closing CTA — intake `(646) 347-1893` | Aleksa | ☐ |
| OD-14 | NEW | Schema — `MedicalProcedure` + `Drug` references + `FAQPage` + `BreadcrumbList` | Aleksa + Dev | ☐ |
| OD-15 | NEW | Internal links out — `/treatments`, `/admissions`, `/about-us`, `/expectations`, `/areas-served` | Aleksa | ☐ |
| OD-16 | CHANGE | Update `/treatments#opioid-detox` anchor section: end with "Learn more about opioid detox & MAT →" linking to this new page | Aleksa | ☐ |

---

## 2. Item details

### OD-01 · Meta title

**Spec:**
> `Opioid Detox & Medication-Assisted Treatment (MAT) in Brooklyn, NY | Surfpoint`

(78 chars — may clip in rendered SERP; trim Surfpoint to fit if needed.)

**Why:** Targets two query clusters in one title (`opioid detox brooklyn` + `MAT brooklyn`). Inpatient-MAT positioning differentiates from the all-outpatient top-3.

---

### OD-02 · Meta description

**Spec:**
> `OASAS-licensed inpatient opioid detox with Medication-Assisted Treatment (MAT) in Brooklyn, NY. Buprenorphine and naltrexone under 24/7 clinical supervision.`

(158 chars.)

**Why:** Names the meds in the snippet — the buprenorphine/naltrexone signal is what differentiates from outpatient MAT clinics that mention "MAT" generically.

---

### OD-03 · H1

**Spec:**
> `Inpatient Opioid Detox and Medication-Assisted Treatment (MAT) in Brooklyn`

**Why:** "Inpatient" is the structural differentiator. Every Brooklyn competitor that ranks for MAT is outpatient — declaring "inpatient" in the H1 owns a different SERP surface entirely.

---

### OD-04 · Hero section — Problem statement + primary CTA

**Spec — content:**

> Opioid use disorder is the leading driver of overdose mortality in New York State. Medical detox is the safe first step toward recovery — and for opioid dependence, evidence-based Medication-Assisted Treatment (MAT) is what bridges detox into long-term remission.
>
> At Surfpoint Recovery, our OASAS-licensed clinical team provides inpatient opioid detox combined with clinically appropriate MAT — using FDA-approved medications including buprenorphine and naltrexone — at our facility in Coney Island, Brooklyn.
>
> [Primary CTA: "Call Intake (646) 347-1893" → `tel:+16463471893`]
> [Secondary: "Verify Your Coverage" → `/admissions`]

**Why:** Two-paragraph hero positions Surfpoint inside the medical conversation (overdose data + MAT framing) before any sales language. This is the framing that LLMs cite.

---

### OD-05 · "What Is Opioid Detox + MAT" H2

**Spec — content (~250 words):**

> ## What Is Opioid Detox and Medication-Assisted Treatment?
>
> Opioid detox is the medically supervised process of safely withdrawing from opioids — whether the dependence involves heroin, prescription painkillers (oxycodone, hydrocodone, morphine), or fentanyl. Opioid withdrawal is rarely directly life-threatening for medically healthy adults, but it is severe enough that most patients cannot complete withdrawal without medical support — which is why relapse rates without medication assistance are high.
>
> Medication-Assisted Treatment (MAT) is the FDA-approved, evidence-based clinical approach that combines pharmacological support (buprenorphine, naltrexone, methadone) with counseling and behavioral therapy to treat opioid use disorder. MAT is endorsed by SAMHSA, the American Society of Addiction Medicine, and the World Health Organization as the standard of care for opioid use disorder.
>
> At Surfpoint, opioid detox and MAT are delivered together as part of an inpatient program. This is different from outpatient MAT clinics — which provide medication and counseling on a visit-by-visit basis — and different from non-medication detox programs, which omit the pharmacological piece that MAT contributes. Our integrated inpatient model means medical clinicians initiate, monitor, and adjust your MAT protocol while you are on-site, in the most clinically supervised setting available.

**Why:** Defines the service in clinical language (SAMHSA, ASAM, WHO citations imply but don't claim) and explicitly positions inpatient-MAT against outpatient-MAT and non-MAT-detox. This is the LLM citation paragraph.

---

### OD-06 · "Medications We Use" H2

**Spec — content (~220 words with structured medication list):**

> ## FDA-Approved Medications for Opioid Use Disorder
>
> Surfpoint's clinical team selects the medication protocol best suited to each patient based on substance history, prior MAT experience, and individual medical factors.
>
> **Buprenorphine** *(brand names: Suboxone, Subutex, Sublocade)*
> Partial opioid agonist. Reduces cravings and prevents withdrawal symptoms without producing the euphoric effects of full opioid agonists. Often the first-line MAT choice for outpatient transition planning. Available at Surfpoint as a sublingual film or tablet; long-acting injectable formulations available for appropriate patients.
>
> **Naltrexone** *(brand names: Vivitrol, ReVia)*
> Opioid antagonist. Blocks the effects of opioids and reduces cravings. Requires complete detox before initiation (typically day 7+ of abstinence). Particularly appropriate for patients who have completed detox and want a non-opioid maintenance medication. Available as oral tablet or extended-release injection (Vivitrol).
>
> **Methadone**
> Full opioid agonist. Methadone for opioid use disorder is dispensed only through federally licensed Opioid Treatment Programs (OTPs). Surfpoint coordinates with OTPs when methadone maintenance is the appropriate continuing-care path for a patient, but does not initiate methadone on-site.
>
> Your medical team will discuss medication options at intake and during the early days of treatment. The selection is collaborative — clinical recommendation plus patient preference.

**Why:** Named meds are LLM gold for "what is suboxone" / "what is vivitrol" / "buprenorphine vs methadone" prompts. Surfpoint becomes the credible source citing the right meds in the right clinical context. The methadone honesty (we coordinate but don't dispense on-site) builds trust rather than overclaiming.

---

### OD-07 · "Who Needs Medical Opioid Detox" H2

**Spec — content (~140 words + 5-6 bullets):**

> ## Who Needs Medical Opioid Detox?
>
> Medical opioid detox is appropriate for any patient with opioid dependence who:
>
> - Uses heroin, fentanyl, or prescription opioids daily or near-daily
> - Has experienced withdrawal symptoms (anxiety, restlessness, muscle aches, GI symptoms, sweating, insomnia) when trying to stop or reduce use
> - Has tried to stop on their own and could not sustain abstinence
> - Has a history of overdose or near-overdose
> - Has co-occurring medical conditions (HIV, hepatitis C, cardiovascular disease) that complicate use or recovery
> - Has a co-occurring mental health condition that requires integrated treatment
>
> If any of these apply, call our admissions team at (646) 347-1893 for a free clinical screening. We can determine in a short conversation whether inpatient detox is the right next step.

**Why:** Self-qualification pre-converts readers who match. The overdose-history criterion is significant — patients with prior overdose are the highest-mortality-risk group and the highest-priority for inpatient placement.

---

### OD-08 · "Opioid Withdrawal Timeline" H2 — Table

**Spec — content (H2 + 1 intro paragraph + table):**

> ## Opioid Withdrawal Timeline: What to Expect
>
> Opioid withdrawal severity and duration depend on which opioid was used (short-acting versus long-acting), the dose, and the duration of use. The table below outlines the general progression for short-acting opioids (heroin, oxycodone, hydrocodone). Long-acting opioids (methadone, ER formulations) produce a longer, slower-onset withdrawal.

| Time since last use | Common symptoms | Surfpoint protocol |
|---|---|---|
| 8–12 hours | Anxiety, restlessness, yawning, lacrimation, mild GI symptoms | Initial assessment; MAT initiation discussion |
| 12–48 hours | Peak withdrawal: muscle aches, sweating, GI distress, dilated pupils, gooseflesh, insomnia | Buprenorphine induction (when appropriate); supportive medications for symptom management |
| 48–72 hours | Withdrawal symptoms begin tapering with proper MAT | MAT dose stabilization; counseling intake |
| 72 hours–7 days | Acute symptoms resolved; emergence of post-acute symptoms (mood, sleep, cravings) | MAT maintenance dose established; transition into rehabilitation programming |
| 7–14 days+ | Post-acute withdrawal syndrome (PAWS) may persist for weeks | Continuing MAT; discharge planning for outpatient continuation if appropriate |

**Why:** Tables capture Featured Snippets. Buprenorphine induction timing (12-48h window) is a clinically specific detail that signals depth.

---

### OD-09 · "How Surfpoint Treats Opioid Use Disorder" H2

**Spec — content (~250 words):**

> ## How Surfpoint Treats Opioid Use Disorder
>
> **Same-day assessment.** A licensed nurse and medical clinician complete a same-day medical and substance use assessment at intake. The assessment determines withdrawal severity (using the Clinical Opiate Withdrawal Scale, COWS), confirms the appropriate medication protocol, and identifies any medical or psychiatric conditions requiring concurrent treatment.
>
> **Buprenorphine induction protocol.** For patients appropriate for buprenorphine, induction typically begins 12-24 hours after last opioid use, when COWS-measured withdrawal reaches a threshold that allows safe buprenorphine initiation. Dosing is titrated based on symptom response, with most patients reaching a stable maintenance dose within 48-72 hours.
>
> **Naltrexone induction protocol.** Naltrexone requires complete opioid clearance — typically 7-10 days after last short-acting opioid use, longer for long-acting opioids. Naltrexone candidates complete their opioid washout under medical supervision at Surfpoint before naltrexone initiation.
>
> **Integrated dual diagnosis.** Many patients arriving for opioid detox are also managing depression, anxiety, PTSD, or other co-occurring conditions. Our integrated dual diagnosis model treats these concurrently — psychiatric evaluation and medication adjustment begin during the detox phase rather than after.
>
> **Counseling and group therapy.** Once withdrawal is medically managed (typically by day 2-3 of buprenorphine induction), patients begin individual counseling and group therapy as part of the transition into inpatient rehabilitation. There is no gap between detox and rehab.
>
> **Discharge and continuing care planning.** Discharge planning begins during the first week of treatment. For patients continuing on MAT after discharge, our team coordinates with outpatient buprenorphine providers, Opioid Treatment Programs (for methadone), or Vivitrol injection providers in the community.

**Why:** Naming COWS, induction protocols, and continuing-care coordination is the clinical-depth signal. The discharge-planning section addresses the "what happens after I leave" question that researchers want answered before they commit to inpatient care.

---

### OD-10 · "What to Expect at Our Coney Island Facility" H2

**Spec:** Same content as Alcohol Detox brief AD-09 (the patient-journey content is service-agnostic). Cross-reference rather than duplicate authoring effort.

> ## What to Expect at Our Coney Island Facility
>
> [Insert standard patient-journey content — see [Surfpoint_SubPage_Alcohol_Detox_Brief.md](Surfpoint_SubPage_Alcohol_Detox_Brief.md) §AD-09 for canonical version. Adapt only as needed for opioid-specific details — e.g., timing of buprenorphine first dose.]

**Why:** Patient-journey content is shared across sub-pages. Single canonical version with adaptations keeps voice consistent and authoring effort low.

---

### OD-11 · "Insurance We Accept" H2

**Spec:** Same content as Alcohol Detox brief AD-10 — see canonical version.

**Why:** Insurance carrier list is service-agnostic.

---

### OD-12 · "Frequently Asked Questions" H2

**Spec — content (8 opioid+MAT-specific Q&As):**

> ## Frequently Asked Questions About Opioid Detox and MAT at Surfpoint
>
> **What is MAT and is it just "trading one drug for another"?**
> MAT — Medication-Assisted Treatment — uses FDA-approved medications (buprenorphine, naltrexone, methadone) to treat opioid use disorder. It is not "trading one drug for another." Buprenorphine and methadone are pharmacologically distinct from drugs of abuse: they prevent withdrawal and cravings without producing the euphoric high. Naltrexone is an opioid blocker and produces no high at all. SAMHSA, the American Society of Addiction Medicine, and the World Health Organization all endorse MAT as the standard of care.
>
> **What medications does Surfpoint use for opioid use disorder?**
> Buprenorphine (Suboxone, Subutex, Sublocade) and naltrexone (Vivitrol, oral). We coordinate with federally licensed Opioid Treatment Programs when methadone maintenance is appropriate for continuing care.
>
> **How long does opioid detox take?**
> Acute withdrawal management typically takes 5 to 7 days for short-acting opioids, longer for long-acting opioids or for patients transitioning off methadone. Most patients then transition directly into our short-term inpatient rehabilitation program.
>
> **Can I start buprenorphine if I just used opioids?**
> Buprenorphine induction requires you to be in mild-to-moderate withdrawal first (typically 12-24 hours after last short-acting opioid use). Starting buprenorphine too soon can precipitate severe withdrawal. Our clinical team uses the COWS scale to time induction safely.
>
> **What if I'm on methadone now and want to switch programs?**
> Transitioning off methadone requires a careful taper under medical supervision. Methadone for opioid use disorder is dispensed only through federally licensed Opioid Treatment Programs (OTPs), not at Surfpoint or any inpatient facility — but we can support methadone tapers and transitions to buprenorphine or naltrexone where clinically appropriate.
>
> **Does Surfpoint accept Medicaid for opioid detox and MAT?**
> Yes. We accept Medicaid, along with Aetna, Cigna, and BlueCross BlueShield. Free insurance verification before admission.
>
> **Do you treat opioid use disorder alongside depression, anxiety, or PTSD?**
> Yes. Our integrated dual diagnosis model treats opioid use disorder and co-occurring mental health conditions concurrently, beginning during the detox phase.
>
> **What happens after detox at Surfpoint?**
> Most patients transition directly into our short-term inpatient rehabilitation program (14 to 30 days), continuing MAT when clinically appropriate. Discharge planning includes coordination with outpatient MAT providers in the community for continuing care.

**Why:** The "trading one drug for another" question is the single most common objection to MAT and the highest-impression PAA in the cluster. Answering it head-on with clinical citations is the single highest-leverage content decision on this page.

---

### OD-13 · Closing CTA

**Spec:** Same pattern as AD-12 — intake CTA + verify coverage secondary.

---

### OD-14 · Schema — full `@graph`

See §3 below.

---

### OD-15 · Internal links out

| Anchor text (inline) | Target |
|---|---|
| "short-term inpatient rehabilitation program" | `/treatments/short-term-rehab` *(when shipped; until then, `/treatments#short-term-rehab`)* |
| "integrated dual diagnosis model" | `/treatments/dual-diagnosis` *(when shipped; until then, `/treatments#dual-diagnosis`)* |
| "Verify Your Coverage" | `/admissions` |
| "Coney Island, Brooklyn" | `/areas-served` *(verify before linking)* |
| Breadcrumb: Home → Treatments → Opioid Detox & MAT | `/`, `/treatments` |

---

### OD-16 · Hub anchor update (cross-page)

**Where:** `/treatments` page, end of Opioid Detox H2 section.

**Spec:** Add closing paragraph: *"Learn more about opioid detox and MAT →"* linking to `/treatments/opioid-detox`.

---

## 3. Schema spec — full `@graph`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.surfpointrecovery.com/treatments/opioid-detox#procedure",
      "name": "Inpatient Opioid Detox and Medication-Assisted Treatment",
      "alternateName": ["Opioid Detoxification", "MAT", "Medication-Assisted Treatment for Opioid Use Disorder"],
      "procedureType": "https://schema.org/TherapeuticProcedure",
      "bodyLocation": "Inpatient facility",
      "description": "Inpatient, OASAS-licensed opioid detoxification with Medication-Assisted Treatment (MAT) using FDA-approved buprenorphine and naltrexone protocols. 24/7 medical monitoring and COWS-guided induction. Coney Island, Brooklyn.",
      "howPerformed": "COWS-protocol-guided assessment, buprenorphine or naltrexone induction (per clinical appropriateness), continuous nursing monitoring, integrated dual diagnosis treatment, transition to inpatient rehabilitation.",
      "drug": [
        {"@type": "Drug", "name": "Buprenorphine", "nonProprietaryName": "Buprenorphine"},
        {"@type": "Drug", "name": "Naltrexone", "nonProprietaryName": "Naltrexone"}
      ],
      "performedBy": {"@id": "https://www.surfpointrecovery.com/#org"}
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.surfpointrecovery.com/#org"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.surfpointrecovery.com/treatments/opioid-detox#webpage",
      "url": "https://www.surfpointrecovery.com/treatments/opioid-detox",
      "name": "Opioid Detox & Medication-Assisted Treatment (MAT) in Brooklyn, NY | Surfpoint",
      "isPartOf": {"@id": "https://www.surfpointrecovery.com/#website"},
      "about": {"@id": "https://www.surfpointrecovery.com/treatments/opioid-detox#procedure"},
      "mainEntity": {"@id": "https://www.surfpointrecovery.com/treatments/opioid-detox#procedure"}
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.surfpointrecovery.com/treatments/opioid-detox#faq",
      "mainEntity": [
        {"@type": "Question", "name": "What is MAT and is it just trading one drug for another?", "acceptedAnswer": {"@type": "Answer", "text": "MAT — Medication-Assisted Treatment — uses FDA-approved medications (buprenorphine, naltrexone, methadone) to treat opioid use disorder. It is not trading one drug for another. Buprenorphine and methadone are pharmacologically distinct from drugs of abuse: they prevent withdrawal and cravings without producing euphoric effects. SAMHSA, ASAM, and the WHO all endorse MAT as the standard of care."}},
        {"@type": "Question", "name": "What medications does Surfpoint use for opioid use disorder?", "acceptedAnswer": {"@type": "Answer", "text": "Buprenorphine (Suboxone, Subutex, Sublocade) and naltrexone (Vivitrol, oral). We coordinate with federally licensed Opioid Treatment Programs when methadone maintenance is appropriate for continuing care."}},
        {"@type": "Question", "name": "How long does opioid detox take?", "acceptedAnswer": {"@type": "Answer", "text": "Acute withdrawal management typically takes 5 to 7 days for short-acting opioids, longer for long-acting opioids. Most patients then transition directly into our short-term inpatient rehabilitation program."}},
        {"@type": "Question", "name": "Does Surfpoint accept Medicaid for opioid detox and MAT?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We accept Medicaid, along with Aetna, Cigna, and BlueCross BlueShield. Free insurance verification before admission."}}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.surfpointrecovery.com/"},
        {"@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://www.surfpointrecovery.com/treatments"},
        {"@type": "ListItem", "position": 3, "name": "Opioid Detox & MAT", "item": "https://www.surfpointrecovery.com/treatments/opioid-detox"}
      ]
    }
  ]
}
```

---

## 4. Dependencies + open inputs

| Item | Status | Owner | Mitigation if blocked |
|---|---|---|---|
| Confirm Surfpoint dispenses buprenorphine AND naltrexone (both) | Verify with Medical Director | Aleksa | If only one med is offered, edit OD-06 to match reality |
| Confirm methadone coordination practice (yes / no / how) for OD-06 | Verify with Medical Director | Aleksa | If methadone coordination doesn't happen, remove that paragraph |
| Sublocade (long-acting injectable buprenorphine) availability | Verify | Aleksa | Soften OD-06 language if not currently offered |
| Vivitrol injection availability vs oral naltrexone only | Verify | Aleksa | Soften OD-06 language if injectable not currently offered |
| Insurance carrier logos | Pending (same dependency as alcohol-detox AD-10) | Aleksa | Text-only badges in v1 |
| Hero image | Pending | Aleksa + Design | Use existing facility hero as placeholder |
| /admissions verification form | Verify exists | Aleksa | Link to phone CTA only if form not built |
| Orphan redirect `/services/opioid-detox-services` → new page | Coordinate post-launch | Aleksa + Dev | Hold redirect until indexing confirmed |

---

## 5. Acceptance criteria

- [ ] All 16 items in §1 complete
- [ ] Schema validator pass (3-layer gate)
- [ ] Rich Results Test pass — `MedicalProcedure`, `FAQPage`, `BreadcrumbList` eligible
- [ ] Medication claims in OD-06 verified accurate by Medical Director sign-off
- [ ] All CTAs route to `tel:+16463471893`
- [ ] Hub `/treatments#opioid-detox` updated with read-more link (OD-16)
- [ ] Mobile + desktop render verified at 320 / 768 / 1280 / 1920px
- [ ] CWV baseline post-deploy: LCP, INP, CLS within or better
- [ ] GSC URL inspection request submitted
- [ ] Indexed within 14 days
- [ ] After indexing: trigger orphan `/services/opioid-detox-services` 301

---

## 6. Risks + rollback

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Medication claims (buprenorphine, naltrexone, sublocade) overstated relative to actual on-site offering | Medium | **High — regulatory and clinical liability** | Medical Director sign-off REQUIRED on OD-06 before publish. Edit copy to match reality if anything is overstated. |
| Methadone paragraph in OD-06 + OD-12 misleads readers about on-site availability | Low | Medium | Explicit "not dispensed on-site" language is non-negotiable in copy |
| MAT framing triggers stigma response from some readers | Low | Low | Address head-on in OD-12 FAQ Q1 ("trading one drug for another") |
| Orphan redirect fires before indexing | Low | Medium | Hold redirect until GSC confirms new page indexed |
| Schema validator errors | Medium | Low | 3-layer pre-deploy gate |

**Rollback:** Page is net-new — rollback = unpublish. Medication claims in OD-06 must be re-verified for any future content change.

---

## 7. Reference

- **Hub page:** `/treatments` ([Surfpoint_Treatments_Hub_Update_Brief.md](Surfpoint_Treatments_Hub_Update_Brief.md))
- **Sibling sub-pages:** [alcohol-detox](Surfpoint_SubPage_Alcohol_Detox_Brief.md), [benzodiazepine-detox](Surfpoint_SubPage_Benzodiazepine_Detox_Brief.md), [drug-detox](Surfpoint_SubPage_Drug_Detox_Brief.md), [short-term-rehab](Surfpoint_SubPage_Short_Term_Rehab_Brief.md)
- **Build plan / sequencing:** [Surfpoint_Treatments_SubPages_BuildPlan.md](Surfpoint_Treatments_SubPages_BuildPlan.md)
- **Redirect coordination:** [Surfpoint_Services_Legacy_Redirect_Plan.md](Surfpoint_Services_Legacy_Redirect_Plan.md)

---

*End of /treatments/opioid-detox brief.*
