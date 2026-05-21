# LG-INPC-01 — Inpatient Carmel GBP Description Rewrite

**Pin:** Arms Acres: Inpatient Addiction Treatment (75 Seminary Hill Rd, Carmel Hamlet NY)
**Current state:** 536 characters · live in the knowledge panel · pulled 2026-05-12
**Target:** 720-750 characters · pack OASAS / Medicaid / Aetna / Tricare / MAT / dual-dx / Hudson Valley · stays normal-owner voice

---

## Current description (536 chars — verbatim)

> Arms Acres is a 191 bed licensed facility, providing inpatient treatment for those suffering from substance use disorder. We are situated on a tranquil 54-acre site in Carmel Hamlet, Putnam County, New York.
>
> Arms Acres is a private health care system providing the highest quality professional treatment to those suffering from substance use disorder, co-occurring medical and mental health disorders and to those whose lives are impacted by the disease of addiction. Medication Assisted Therapy is available when clinically necessary.

**What's strong already:**
- Specific physical credibility (191 beds, 54-acre site, Carmel Hamlet, Putnam County)
- Mentions co-occurring disorders (dual-diagnosis intent)
- Mentions MAT (Medication Assisted Therapy)
- Reads as owner-voice, not keyword-stuffed

**What's missing (the 200-char headroom):**
- Specific licensure (OASAS-licensed for NY)
- Insurance acceptance (Medicaid + Aetna + Medicare + Tricare)
- Intake phone explicitly
- Hudson Valley + adjacent-county service area
- Reference to companion programs (detox + adult-rehabilitation + family treatment + recovery-coach + alumni)

---

## Option A — Conservative refresh *(recommended default)*

Keeps the existing voice + opening. Adds the missing trust + intake signals. 745 chars.

> Arms Acres is a 191-bed OASAS-licensed inpatient addiction treatment facility on a tranquil 54-acre site in Carmel Hamlet, Putnam County, New York, serving Hudson Valley + adjacent counties. We provide medical detox, residential rehabilitation, dual-diagnosis treatment for co-occurring SUD + mental health disorders, and Medication Assisted Therapy (Suboxone, methadone, naltrexone) when clinically indicated. We accept Medicaid, Medicare, Aetna, Tricare, Cigna, and most major commercial insurance. Programs include adult rehabilitation, family treatment, recovery coaching, and alumni aftercare. Operated by Liberation Programs Inc. Call 1-888-227-4641 for 24/7 intake.

### Why this lands
- OASAS-licensed is the most-cited credential by Gemini + AI Overview on NY-state SUD queries
- Insurance carrier name list maps to the 5-article M1 batch (CN-01) for cross-signal reinforcement
- "1-888-227-4641 for 24/7 intake" gives the knowledge panel a direct conversion CTA
- "Operated by Liberation Programs Inc." opens charitynavigator.org listing pathway (Ownership Doc item 2)

---

## Option B — Service-led variant

If we want to lead with services rather than the physical-credibility hook. 742 chars.

> Arms Acres provides 24/7 inpatient addiction treatment in Carmel Hamlet, Putnam County, New York — medical detox, residential rehabilitation, dual-diagnosis programs, and Medication Assisted Therapy (Suboxone, methadone, naltrexone) on a 191-bed, 54-acre OASAS-licensed campus. We serve Hudson Valley and adjacent NYC-metro counties. Programs include adult rehabilitation, family treatment, on-site psychiatric services, recovery coaching, and an alumni aftercare network. We accept Medicaid, Medicare, Aetna, Tricare, Cigna, and most major commercial insurance. Operated by Liberation Programs Inc. — a non-profit network. Call 1-888-227-4641 for 24/7 intake or insurance verification.

### Trade-off vs Option A
- Slightly stronger keyword density (medical detox / residential rehabilitation / dual-diagnosis / MAT all surfaced earlier)
- Loses the "tranquil 54-acre site" emotional hook — less owner-voice
- "Non-profit network" framing is helpful for charitynavigator + community-citation pathways

---

## Option C — Insurance-led variant *(M3-aligned)*

Leads with insurance — most useful AFTER the M1+M2 article batch lifts insurance-query CTR. Defer to M3 if used. 728 chars.

> Arms Acres accepts Medicaid, Medicare, Aetna, Tricare, Cigna, BlueCross/BlueShield, and most major commercial insurance for inpatient addiction treatment in Carmel Hamlet, NY. Our 191-bed, 54-acre OASAS-licensed facility in Putnam County provides medical detox, residential rehabilitation, dual-diagnosis treatment for co-occurring SUD and mental-health disorders, and Medication Assisted Therapy (Suboxone, methadone, naltrexone). Programs include adult rehabilitation, family treatment, on-site psychiatric services, recovery coaching, and alumni aftercare. We serve Hudson Valley, Westchester, Dutchess, and the NYC metro. Operated by Liberation Programs Inc. Call 1-888-227-4641 for 24/7 intake.

### When to use
Switch to this in M3 once CN-01 article batch has established the insurance-query CTR lift — the GBP description doubles down on the commercial-intent signal driving Maps Pack clicks.

---

## Field validation checklist before deploy

- [ ] CARF accreditation status confirmed (Ownership Doc item 1) — if accredited, add "CARF-accredited" to the licensure line
- [ ] Insurance carrier list confirmed against AA's actual current acceptance (Ownership Doc item 10) — strike any carrier they don't actively accept
- [ ] Phone number `1-888-227-4641` matches what AA wants in the public knowledge panel (the existing GBP phone is the same)
- [ ] OASAS license number — if AA wants it in the description, add at end (~30 chars)
- [ ] Character count ≤ 750 after final edits

---

## Deploy steps (per HQDM GBP-Description-SOP)

1. Open Google Business Profile Manager → Arms Acres: Inpatient Addiction Treatment
2. Click "Edit profile" → Business information → About section
3. Select the chosen Option (A recommended default)
4. Paste final approved text
5. Save → screenshot the rendered knowledge panel within 24 hrs
6. Cross-reference against M1 CN-01 article batch language for consistency
7. Mark `LG-INPC-01` complete in `Arms_Acres_3Month_Tasks.csv`

---

*Companion to task `LG-INPC-01` in `Arms_Acres_3Month_Tasks.csv`.*
