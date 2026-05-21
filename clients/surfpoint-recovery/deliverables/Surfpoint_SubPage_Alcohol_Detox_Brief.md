# Surfpoint /treatments/alcohol-detox — Build Brief

**Page:** `https://www.surfpointrecovery.com/treatments/alcohol-detox` (NEW)
**Owner:** Aleksa Popovic (On-Page) — task router · **Author:** Aleksandar Spasevski · **Date:** 2026-05-12
**Scope:** Net-new sub-page under `/treatments/`. Parent hub = `/treatments` (separate brief). Sibling sub-pages = separate briefs each.
**Status:** Ready for Aleksa feasibility pass + team assignment

---

## Why this brief exists

The `/treatments` hub currently has a short "Alcohol Detox" H2 (~80 words, no clinical depth, no anchor id). Per the prioritization in [Surfpoint_Treatments_SubPages_BuildPlan.md](Surfpoint_Treatments_SubPages_BuildPlan.md):

- **Alcohol** cluster = 4,583 addressable searches/mo (geo-modifier + near-me, Brooklyn-aligned)
- **GBP map pack already ranks 1.47 on `alcohol rehab brooklyn`** (96% of audits show top-3 placement)
- Map-pack visitors land on the on-page surface AFTER clicking — and the current on-page surface is a single H2 inside the hub, not a dedicated page

**The strategic ask:** convert existing map-pack dominance into organic dominance by building the on-page surface that the map clickthrough deserves. This is the highest-ROI sub-page in the architecture because GBP traffic is already pre-qualified and currently lands on a generic page.

Secondary: orphan URL `/services/alcohol-detox-services` redirects here once this page ships (per `Surfpoint_Services_Legacy_Redirect_Plan.md`).

---

## 1. At-a-glance checklist

**15 items total: 13 page-build + 2 cross-page integration.**

| # | Type | Item | Owner | Status |
|---|---|---|---|---|
| AD-01 | NEW | Meta title | Aleksa | ☐ |
| AD-02 | NEW | Meta description | Aleksa | ☐ |
| AD-03 | NEW | H1 | Aleksa | ☐ |
| AD-04 | NEW | Hero section — problem statement + primary CTA | Content + Aleksa | ☐ |
| AD-05 | NEW | "What is medically supervised alcohol detox" H2 | Content + Aleksa | ☐ |
| AD-06 | NEW | "Who needs medical alcohol detox" H2 (DTs, seizure risk, dependence severity) | Content + Aleksa | ☐ |
| AD-07 | NEW | "How Surfpoint treats alcohol withdrawal" H2 — clinical protocol section | Content + Aleksa | ☐ |
| AD-08 | NEW | "Alcohol Withdrawal Timeline" H2 — 6hr / 24hr / 48hr / 72hr / 7d table | Content + Aleksa | ☐ |
| AD-09 | NEW | "What to expect at our Coney Island facility" H2 — patient journey | Content + Aleksa | ☐ |
| AD-10 | NEW | "Insurance We Accept" H2 — Medicaid + Aetna + Cigna + BCBS | Aleksa + Content | ☐ |
| AD-11 | NEW | "Frequently Asked Questions" — 6-8 alcohol-specific Q&As (FAQPage schema) | Content + Aleksa | ☐ |
| AD-12 | NEW | Closing CTA — intake `(646) 347-1893` | Aleksa | ☐ |
| AD-13 | NEW | Schema — `MedicalProcedure` + `FAQPage` + `BreadcrumbList` `@graph` (see §3) | Aleksa + Dev | ☐ |
| AD-14 | NEW | Internal links out — `/treatments`, `/admissions`, `/about-us`, `/expectations`, `/areas-served` | Aleksa | ☐ |
| AD-15 | CHANGE | Update `/treatments#alcohol-detox` anchor section: end with "Learn more about our alcohol detox program →" linking to this new page | Aleksa | ☐ |

---

## 2. Item details

### AD-01 · Meta title

**Spec:**
> `Medically Supervised Alcohol Detox in Brooklyn, NY | Surfpoint Recovery`

(70 chars — at the rendered limit; trim "Medically Supervised" to "Medical" if it clips.)

**Why:** "Medically supervised" is the differentiator vs outpatient and meeting-based programs. Geo + brand close the title.

---

### AD-02 · Meta description

**Spec:**
> `OASAS-licensed inpatient alcohol detox in Brooklyn, NY. 24/7 medical monitoring for safe withdrawal from alcohol use disorder. Medicaid, Aetna, Cigna, BCBS accepted.`

(165 chars — slightly over the typical 155; trim "in Brooklyn, NY" inside parenthetical if rendered preview clips.)

**Why:** OASAS + 24/7 monitoring + insurance carriers in the snippet — three signals that influence the click on alcohol-rehab queries.

---

### AD-03 · H1

**Spec:**
> `Medically Supervised Alcohol Detox in Brooklyn, NY`

**Why:** H1 mirrors title intent; declares service + qualifier + geo. Single, clear claim — no slogans.

---

### AD-04 · Hero section — Problem statement + primary CTA

**Spec — content:**

> Alcohol withdrawal is one of the most medically dangerous detox processes. Without proper supervision, severe alcohol withdrawal can trigger seizures, delirium tremens (DTs), and life-threatening complications. At Surfpoint Recovery, our OASAS-licensed clinical team provides 24/7 medical monitoring throughout the alcohol detox process at our inpatient facility in Coney Island, Brooklyn.
>
> [Primary CTA: "Call Intake (646) 347-1893" → `tel:+16463471893`]
> [Secondary: "Verify Your Coverage" → `/admissions`]

**Why:** Lead with the medical-risk framing — this is what differentiates inpatient medical detox from outpatient counseling. Visitors searching "alcohol detox brooklyn" are typically researching a high-stakes decision; the hero must answer "why medical supervision" in the first paragraph.

---

### AD-05 · "What is medically supervised alcohol detox" H2

**Spec — content (~180 words):**

> ## What Is Medically Supervised Alcohol Detox?
>
> Medical alcohol detox is the process of safely withdrawing from alcohol under the continuous supervision of licensed medical and nursing staff. It is the first phase of treatment for alcohol use disorder (AUD), and for patients with moderate-to-severe dependence, it is the only safe way to stop drinking.
>
> During detox, our medical team uses evidence-based medication protocols — most commonly benzodiazepines administered on a structured taper — to manage withdrawal symptoms and prevent seizures. Vital signs are checked on a defined clinical schedule, and medication dosing is adjusted in real time based on the Clinical Institute Withdrawal Assessment for Alcohol (CIWA-Ar) protocol.
>
> Medical detox is distinct from "going cold turkey" at home (which carries seizure and DT risk for dependent drinkers) and distinct from outpatient detox (which is appropriate only for mild dependence with no medical comorbidities). At Surfpoint, alcohol detox is delivered as an inpatient program — patients stay at our Coney Island facility for the duration of detox, typically 3 to 7 days.

**Why:** Definitional content gets cited by LLMs answering "what is alcohol detox" / "is detox necessary" prompts. Without this, the LLM has nothing to quote from Surfpoint and uses a national brand instead.

---

### AD-06 · "Who Needs Medical Alcohol Detox" H2

**Spec — content (~150 words + 5-6 bullet criteria):**

> ## Who Needs Medical Alcohol Detox?
>
> Medical detox is recommended for any patient who:
>
> - Drinks daily or near-daily, particularly heavy or hazardous quantities
> - Has experienced withdrawal symptoms (tremor, sweating, anxiety, nausea, insomnia) on previous attempts to stop or reduce drinking
> - Has a history of withdrawal seizures or delirium tremens (DTs)
> - Has co-occurring medical conditions (cardiovascular disease, liver disease, diabetes) that complicate withdrawal
> - Has a co-occurring mental health condition (depression, anxiety, PTSD) that requires integrated treatment
> - Has tried outpatient detox or "cold turkey" cessation without success
>
> If you or someone you care about meets any of these criteria, attempting to stop drinking without medical supervision carries real risk. Call our admissions team at (646) 347-1893 for a free clinical screening — we can determine in a 10-minute conversation whether medical detox is appropriate.

**Why:** Self-qualification block — readers who match the criteria pre-convert before reaching the CTA. The CIWA / DT signaling also tells crawlers this is clinical content, not marketing copy.

---

### AD-07 · "How Surfpoint Treats Alcohol Withdrawal" H2

**Spec — content (~250 words):**

> ## How Surfpoint Treats Alcohol Withdrawal
>
> Our clinical approach combines pharmacological management of withdrawal symptoms with continuous medical monitoring and same-day initiation of therapeutic services.
>
> **Pharmacological protocol.** The Surfpoint medical team uses a structured benzodiazepine taper (typically chlordiazepoxide or diazepam, dose-adjusted per CIWA-Ar score) to manage withdrawal severity and prevent seizures. Adjunct medications — thiamine, folate, and other vitamins — are administered to prevent Wernicke-Korsakoff syndrome and address the nutritional deficits common in chronic alcohol use.
>
> **Continuous monitoring.** Licensed nursing staff conduct vital sign checks and CIWA-Ar assessments on a defined clinical schedule throughout the first 72 hours, the highest-risk window for withdrawal complications. Medical clinicians are on-site or on-call 24/7 to adjust medication protocols as needed.
>
> **Co-occurring condition management.** Many patients arriving for alcohol detox are also managing depression, anxiety, or PTSD. Our integrated dual diagnosis model treats these conditions concurrently — beginning psychiatric evaluation and medication adjustment during the detox phase rather than after.
>
> **Therapeutic engagement during detox.** Once withdrawal symptoms are stabilized (typically by day 3), patients begin individual counseling and group therapy as part of the transition into our short-term rehabilitation program. There is no "gap" between detox and rehab — they are designed as a single continuous care path.

**Why:** Naming CIWA-Ar, chlordiazepoxide, and Wernicke-Korsakoff signals clinical depth to both Google's medical content quality raters and LLMs evaluating source credibility. National competitors include this; Surfpoint currently doesn't. This is the section that closes the E-E-A-T gap.

---

### AD-08 · "Alcohol Withdrawal Timeline" H2 — Table

**Spec — content (H2 + 1 intro paragraph + table):**

> ## Alcohol Withdrawal Timeline: What to Expect
>
> Alcohol withdrawal follows a relatively predictable timeline, though severity varies significantly by patient. The table below outlines the general progression. Your medical team will set personalized expectations based on your drinking history, medical conditions, and clinical assessment at intake.

| Time since last drink | Common symptoms | Surfpoint protocol |
|---|---|---|
| 6–12 hours | Mild tremor, anxiety, headache, nausea, sweating | CIWA-Ar baseline; first benzodiazepine dose if score warrants |
| 12–24 hours | Increased tremor, insomnia, sometimes hallucinations | Ongoing CIWA monitoring; dose adjustments; vital sign checks |
| 24–48 hours | Peak symptom risk; seizure risk highest in this window | Continuous nursing presence; rapid medical response protocol if seizure activity |
| 48–72 hours | Delirium tremens (DTs) risk window if untreated | Active medication management; psychiatric consult if dual diagnosis present |
| 72 hours–7 days | Tapering symptoms; emergence of underlying mood symptoms | Transition into rehabilitation programming; counseling intake |

**Why:** Tables get pulled into Featured Snippets. Timeline content is high-intent (searched by patients and families before/during a treatment decision). Naming CIWA-Ar in the protocol column twice reinforces clinical depth.

---

### AD-09 · "What to Expect at Our Coney Island Facility" H2

**Spec — content (~200 words):**

> ## What to Expect at Our Coney Island Facility
>
> Surfpoint Recovery is located at 2316 Surf Avenue in Coney Island, Brooklyn, steps from the shoreline.
>
> **Arrival and intake.** Our intake team meets you at the door. You are brought directly into a private intake room — no public waiting area. A licensed nurse and medical clinician complete a same-day medical assessment to confirm your treatment plan and identify any conditions requiring immediate attention.
>
> **Your room and the first night.** You are shown to your room, introduced to the night nursing staff, and given a clear explanation of the next 72 hours. Our medical team is on-site or on-call 24/7 — if withdrawal symptoms emerge during the night, a clinician responds immediately.
>
> **Daily structure.** Once stabilized, your day includes scheduled medical and nursing check-ins, individual counseling, group therapy sessions, meals prepared on-site by our culinary team, and time outside on the boardwalk or in our communal spaces.
>
> For a more detailed walk-through of your first 24 hours, see [What to Expect](/expectations).

**Why:** Patient-journey content captures the high-anxiety pre-treatment researcher. Linking to `/expectations` distributes link equity to that page while keeping this section tight.

---

### AD-10 · "Insurance We Accept" H2

**Spec — content:**

> ## Insurance We Accept for Alcohol Detox
>
> Surfpoint Recovery is in-network with most major insurance plans. We accept:
>
> [LOGO ROW: Medicaid · Aetna · Cigna · BlueCross BlueShield]
>
> Coverage levels vary by carrier and plan. We provide **free insurance verification before admission** — call (646) 347-1893 or use our [coverage verification form](/admissions). Out-of-state plans may also be accepted; our admissions team can verify same-day.

**Why:** Insurance friction is the largest single barrier to admission. Surfacing accepted carriers on every service page reduces the "can I afford this" objection before the user reaches the CTA.

---

### AD-11 · "Frequently Asked Questions" H2

**Spec — content (6-8 alcohol-specific Q&As; will be wrapped in FAQPage schema per §3):**

> ## Frequently Asked Questions About Alcohol Detox at Surfpoint
>
> **How long does alcohol detox take?**
> Most patients complete the acute detox phase in 3 to 7 days. The exact duration depends on drinking history, withdrawal severity, and individual medical factors. Most patients then transition directly into our short-term inpatient rehabilitation program.
>
> **Is alcohol withdrawal dangerous?**
> Yes — alcohol withdrawal is one of the few substance withdrawals that can be fatal without medical supervision. Severe alcohol withdrawal can cause seizures and delirium tremens (DTs). Medical detox eliminates this risk by using benzodiazepine protocols to manage withdrawal severity.
>
> **What is CIWA-Ar?**
> CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol, Revised) is a standardized scoring system used by clinicians to measure alcohol withdrawal severity. Our nursing staff uses CIWA-Ar throughout the first 72 hours to guide medication dosing.
>
> **Can I detox from alcohol at home?**
> For patients with mild dependence and no medical comorbidities, outpatient detox may be appropriate. For anyone with daily heavy drinking, prior withdrawal symptoms, or co-occurring medical or mental health conditions, home detox carries real medical risk. Call us for a free clinical screening to determine which level of care is appropriate.
>
> **Does Surfpoint accept Medicaid for alcohol detox?**
> Yes. We accept Medicaid, along with Aetna, Cigna, and BlueCross BlueShield. We provide free insurance verification before admission.
>
> **Do you treat alcohol use disorder alongside depression or anxiety?**
> Yes. Our integrated dual diagnosis program treats alcohol use disorder and co-occurring mental health conditions at the same time, beginning during the detox phase rather than after.
>
> **What happens after alcohol detox at Surfpoint?**
> Detox is the first phase of treatment. Most patients transition directly into our short-term inpatient rehabilitation program (typically 14 to 30 days), which combines individual therapy, group counseling, relapse prevention planning, and discharge planning for ongoing care.

**Why:** FAQ schema captures People Also Ask placements. Each question above maps to a known PAA query in the alcohol detox cluster. The CIWA-Ar question doubles as a clinical-depth signal.

---

### AD-12 · Closing CTA

**Spec:**

> ## Begin Alcohol Detox Today
>
> Our admissions team is available 24 hours a day, 7 days a week. Call (646) 347-1893 for a free clinical screening and same-day admission decision.
>
> [Primary CTA: "Call Intake (646) 347-1893" → `tel:+16463471893`]
> [Secondary CTA: "Verify Your Coverage" → `/admissions`]

**Why:** Matches site-wide phone display rule (homepage brief §H-22). Intake on every CTA; facility number only in footer.

---

### AD-13 · Schema — full `@graph`

See §3 below.

---

### AD-14 · Internal links out

| Anchor text (inline) | Target |
|---|---|
| "short-term rehabilitation program" | `/treatments/short-term-rehab` *(when that page ships; until then, `/treatments#short-term-rehab`)* |
| "integrated dual diagnosis program" | `/treatments/dual-diagnosis` *(when that page ships; until then, `/treatments#dual-diagnosis`)* |
| "Verify Your Coverage" / "coverage verification form" | `/admissions` |
| "What to Expect" | `/expectations` |
| "Coney Island, Brooklyn" (in facility section) | `/areas-served` *(verify page status before linking)* |
| Breadcrumb: Home → Treatments → Alcohol Detox | `/`, `/treatments` |

---

### AD-15 · Hub anchor update (cross-page)

**Where:** `/treatments` page, end of the Alcohol Detox H2 section.

**Spec:** Add a final paragraph: *"Learn more about our alcohol detox program →"* linking to `/treatments/alcohol-detox`.

**Why:** Once this sub-page ships, the hub H2 becomes a teaser; the read-more link distributes equity to the new page. Coordinated with `/treatments` hub brief and homepage H-23.

---

## 3. Schema spec — full `@graph`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.surfpointrecovery.com/treatments/alcohol-detox#procedure",
      "name": "Medically Supervised Alcohol Detox",
      "alternateName": ["Alcohol Detoxification", "Alcohol Withdrawal Management"],
      "procedureType": "https://schema.org/TherapeuticProcedure",
      "bodyLocation": "Inpatient facility",
      "description": "Inpatient, OASAS-licensed alcohol detoxification with 24/7 medical monitoring, benzodiazepine taper protocols, and CIWA-Ar assessment. Located in Coney Island, Brooklyn.",
      "howPerformed": "Structured benzodiazepine taper (typically chlordiazepoxide or diazepam), CIWA-Ar protocol-guided dosing, continuous nursing monitoring, adjunct thiamine and folate supplementation, transition to inpatient rehabilitation.",
      "preparation": "Free clinical screening by phone or in-person at intake. Insurance verification at admission.",
      "followup": "Direct transition to Surfpoint's short-term inpatient rehabilitation program (14-30 days).",
      "performedBy": {"@id": "https://www.surfpointrecovery.com/#org"}
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.surfpointrecovery.com/#org"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.surfpointrecovery.com/treatments/alcohol-detox#webpage",
      "url": "https://www.surfpointrecovery.com/treatments/alcohol-detox",
      "name": "Medically Supervised Alcohol Detox in Brooklyn, NY | Surfpoint Recovery",
      "isPartOf": {"@id": "https://www.surfpointrecovery.com/#website"},
      "about": {"@id": "https://www.surfpointrecovery.com/treatments/alcohol-detox#procedure"},
      "mainEntity": {"@id": "https://www.surfpointrecovery.com/treatments/alcohol-detox#procedure"}
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.surfpointrecovery.com/treatments/alcohol-detox#faq",
      "mainEntity": [
        {"@type": "Question", "name": "How long does alcohol detox take?", "acceptedAnswer": {"@type": "Answer", "text": "Most patients complete the acute detox phase in 3 to 7 days. Duration depends on drinking history, withdrawal severity, and individual medical factors. Most patients then transition directly into our short-term inpatient rehabilitation program."}},
        {"@type": "Question", "name": "Is alcohol withdrawal dangerous?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — alcohol withdrawal is one of the few substance withdrawals that can be fatal without medical supervision. Severe alcohol withdrawal can cause seizures and delirium tremens (DTs). Medical detox eliminates this risk by using benzodiazepine protocols to manage withdrawal severity."}},
        {"@type": "Question", "name": "Does Surfpoint accept Medicaid for alcohol detox?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We accept Medicaid, along with Aetna, Cigna, and BlueCross BlueShield. We provide free insurance verification before admission."}}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.surfpointrecovery.com/"},
        {"@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://www.surfpointrecovery.com/treatments"},
        {"@type": "ListItem", "position": 3, "name": "Alcohol Detox", "item": "https://www.surfpointrecovery.com/treatments/alcohol-detox"}
      ]
    }
  ]
}
```

---

## 4. Dependencies + open inputs

| Item | Status | Owner | Mitigation if blocked |
|---|---|---|---|
| Clinical protocol detail (which benzo? CIWA-Ar threshold?) for AD-07 | Confirm with Surfpoint Ops or Medical Director | Aleksa | Ship v1 with generic "structured benzodiazepine taper"; add specifics in v2 |
| Insurance carrier logos for AD-10 | Pending | Aleksa to request | Text-only badges in v1 |
| Hero image / facility photo | Pending | Aleksa + Design | Use existing facility hero from /about-us as placeholder |
| /admissions verification form exists | Verify | Aleksa | If form not built, link to phone CTA only |
| /expectations page exists and is published | Verify | Aleksa | If not yet live, drop the link in v1 |
| Orphan redirect `/services/alcohol-detox-services` → `/treatments/alcohol-detox` | Sequence after this page ships | Aleksa + Dev | Coordinate with `Surfpoint_Services_Legacy_Redirect_Plan.md` |

---

## 5. Acceptance criteria

- [ ] All 15 items in §1 complete
- [ ] Schema validator pass (3-layer gate)
- [ ] Rich Results Test pass — `MedicalProcedure`, `FAQPage`, `BreadcrumbList` eligible
- [ ] All CTAs route to `tel:+16463471893`
- [ ] Hub `/treatments#alcohol-detox` updated with read-more link (AD-15)
- [ ] Mobile + desktop render verified at 320 / 768 / 1280 / 1920px
- [ ] CWV baseline post-deploy: LCP, INP, CLS within or better
- [ ] GSC URL inspection request submitted
- [ ] Indexed within 14 days
- [ ] After indexing confirmed: trigger orphan `/services/alcohol-detox-services` 301 → `/treatments/alcohol-detox`

---

## 6. Risks + rollback

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Map-pack rank drops while new page is indexing | Low | Medium | Map-pack and organic are independent ranking systems; sub-page launch should not affect GBP ranking. Monitor LD scans daily for 14 days post-launch. |
| Clinical-protocol detail (named meds, CIWA-Ar) published without Medical Director sign-off | Medium | High | Aleksa + Surfpoint Medical Director sign off on AD-07 + AD-08 + AD-11 (CIWA-Ar Q) before publish |
| Orphan redirect fires before this page is indexed | Low | Medium | Hold redirect until GSC confirms indexing of new page |
| Schema validator errors | Medium | Low | 3-layer pre-deploy gate |

**Rollback:** Page is net-new — full rollback = unpublish. Schema reverts via single block replacement. Orphan redirect can be deferred indefinitely if needed.

---

## 7. Reference

- **Hub page:** `/treatments` ([Surfpoint_Treatments_Hub_Update_Brief.md](Surfpoint_Treatments_Hub_Update_Brief.md))
- **Sibling sub-pages:** [opioid-detox](Surfpoint_SubPage_Opioid_Detox_Brief.md), [benzodiazepine-detox](Surfpoint_SubPage_Benzodiazepine_Detox_Brief.md), [drug-detox](Surfpoint_SubPage_Drug_Detox_Brief.md), [short-term-rehab](Surfpoint_SubPage_Short_Term_Rehab_Brief.md)
- **Build plan / sequencing:** [Surfpoint_Treatments_SubPages_BuildPlan.md](Surfpoint_Treatments_SubPages_BuildPlan.md)
- **Redirect coordination:** [Surfpoint_Services_Legacy_Redirect_Plan.md](Surfpoint_Services_Legacy_Redirect_Plan.md)
- **Site-wide rules (phone, schema patterns):** [Surfpoint_Homepage_Update_Brief.md](Surfpoint_Homepage_Update_Brief.md)

---

*End of /treatments/alcohol-detox brief.*
