# Conifer Park — Owner Conversation Items (Q2 2026)

**Owner:** Aleksandar · **Date:** 2026-05-14 · **Phase:** Q2 strategy intake

> Consolidated client-side asks gathered from the Q2 Custom Strategy. One call (or async batch) to close as many as possible. Items gated by owner are flagged in the 3-month task sheet with "Owner Ask #N".

---

## 1. GBP scope decision — confirmed: Glenville + Troy only

**Status (2026-05-15): DECIDED.** HQDM has GBP Manager access to Glenville Inpatient + Troy Outpatient. The 5 unmanaged pins (Schenectady, Glens Falls, Plattsburgh, Syracuse/Liverpool, Rochester) are out of scope for direct GBP work in Q2. Their issues (NAP, descriptions, photos, services, attributes, UTMs) are documented in `Conifer_Park_GBP_Hygiene_Plan.xlsx` for the future when access opens.

**What stays in scope for unmanaged pins:**
- Site-side rebuilds of `/outpatient/<city>/` location pages (SP-03 Schenectady · SP-05 Glens Falls + Syracuse + Rochester)
- Off-page playbook targeting their page URLs + GBP coords (DAS / Blast / Sniper / RD100 / AI Articles / Cloud Page / NAP overlay / Driving Directions) — doesn't need GBP Manager access
- Intake-side review velocity SOP (workflow at client facility, no GBP access needed)
- LD passive monitoring of public SERP

**No ask** — flagged for principal awareness only.

---

## 2. CARF / Joint Commission / LegitScript / SAMHSA accreditation status

The site has zero visible accreditation badges aside from OASAS Operating Certificate #10018. Site grep confirms absence of Joint Commission, CARF, and LegitScript references across homepage, about-us, admissions, inpatient, outpatient, and the 6 service pages.

**Ask:** Per badge — (a) Joint Commission: accredited? if yes, what year? (b) CARF: certified? if yes, what level (CARF Center of Excellence vs basic)? (c) LegitScript: certified? (d) SAMHSA: confirm OTP designation still active.

**Why this matters:** Competitive set (Mountainside, Hazelden, American Addiction Centers) all carry visible accreditation. Surfpoint has CARF Center of Excellence. Conifer's apparent absence reads as a trust-signal gap to organic visitors and LLM citations.

**If pursuing rather than already having:** Owner timeline + estimated cost can stay private — we just need to know whether to plan badges as Q2 deployment (already have) or Q3+ pursuit (in flight).

---

## 3. Insurance payor list — public disclosure

Admissions page currently says "Medicaid and most third-party payors". No payor logo wall, no named list.

**Ask:** Full insurance payor list for inpatient (Glenville) and per outpatient location. Plus any sliding-fee or self-pay program details (relevant for Rochester CRO work specifically — the 2.7★ × 36 rating gap correlates with affordability friction).

**Why this matters:** Public payor list is a documented conversion-trust signal in the Recovery vertical. Competitors enumerate explicitly.

---

## 4. Troy address verification — 2431 vs 2435 6th Avenue

GBP says **2431 6th Ave**, site copy says **2435 Sixth Avenue**. Both are on the same block of 6th Ave in Troy NY 12180.

**Ask:** Which is the ground-truth correct street number? (Possibly building has multiple entries / one is mailing vs facility — either way we align everything to one.)

**Why this matters:** NAP inconsistency is a documented local-SEO ranking penalty + a citation-clean-up blocker. Per §1b LD data, Troy is on a strong upward trend — we don't want a NAP drift fix to confuse Google during this momentum window.

---

## 5. Sliding fee / self-pay program

Specific to Rochester CRO gap. Page-level metrics: pos 9.36 / 0.819% CTR / 422 clicks on 51,508 imp 365d (highest impressions on the site, lowest CTR). GBP 2.7★ × 36 reviews (worst rating-drag combo on the site). Affordability is the likely friction.

**Ask:** Does Conifer offer sliding fee at Rochester (or anywhere)? Detox program scholarships? Self-pay package pricing? If yes, can we publish on the Rochester rebuild?

**Why this matters:** Rochester rebuild (SP-05) needs a hook against the rating gap. Sliding-fee disclosure is one of the strongest conversion hooks in the addiction vertical when honest.

---

## 6. Troy photo content — GBP blitz (3 → 25)

Troy GBP has only 3 photos (verified via probe) — well below the 25-photo benchmark. Glenville at 26 already meets the benchmark. The 5 unmanaged pins (Plattsburgh null · Glens Falls 3 · Rochester 5 · Syracuse 6 · Schenectady 9) all sit below 25 but are out of scope (no GBP access).

**Ask (Troy-specific):** Can client supply (a) interior photos of the Troy outpatient facility (reception, group rooms, counselor offices, intake desk — no patient faces), (b) exterior + 2431/2435 6th Ave address-sign photos, (c) staff photos with media-release approval?

**If client cannot supply within M1:** Troy photo blitz task (LG-TR-06) documents as skipped + re-issues ask in M2 sync. No HQDM photo stock currently exists for Conifer in Drive.

---

## 7. Intake-side review SOP

Review-velocity program (LG-UP-06) targets +15 reviews per pin in M2-M3, with highest priority on Schenectady (2.7★) and Rochester (2.7★) where rating floor blocks LLM citations.

**Ask:** Does the intake/discharge team have a current review-request workflow? Can we deploy SMS + printed-QR card distribution at intake/discharge?

**If yes:** HQDM provides the tooling + cadence; intake distributes.
**If no:** Owner Ask becomes a small operational lift on the intake-side team to deploy the workflow.

**Why this matters:** Rating lift is the single highest-leverage GBP move available, and it can't be HQDM-shipped from the outside.

---

## 8. Disavow file — Search Console approval

OFF-06 generates the disavow file from a targeted toxic-links scan (independent of the backlink-gap analysis which has been dropped from Q2 scope). Upload to Google Search Console requires client-side approval (it's their property).

**Ask:** Who has GSC access for `sc-domain:coniferpark.com`? Can we get the disavow file approved + uploaded by M3 wk2 once we ship it?

---

## 9. Schema sign-off

OS-01 ships page-level schema refactor across ~16 URLs. Validation cascade catches errors before deploy, but any client-side schema preferences (named clinicians? specific accreditations to include? specific awards to surface?) should land before M3 wk1.

**Ask:** Any named clinical leadership we should reference in schema `medicalSpecialty` or `Person` blocks? Any specific awards/recognitions to surface in `award` properties?

---

## 10. Driving Directions program escalation

OFF-07f_M2 / M2-M3 Driving Directions cycle on the 3 weakest pins is HQDM-rotation tactic — standard cadence. Mentioned here only as principal-level visibility per `project_hqdm_tier0_exposure.md`.

**No client-side ask** — flagged for principal awareness only.

---

## Reference

| Item | Gates | Risk if unresolved |
|---|---|---|
| #1 GBP scope | DECIDED — 2-pin scope (Glenville + Troy) | No action — principal awareness only |
| #2 Accreditation status | TS-01 trust-signal close | Trust-signal gap stays open into Q3 |
| #3 Payor list | Admissions page conversion + Rochester rebuild | Conversion-friction stays |
| #4 Troy address (2431 vs 2435) | LG-TR-01 NAP fix + citation cleanup | NAP drift continues on Troy GBP; minor ranking penalty |
| #5 Sliding fee | Rochester rebuild (SP-05) | Rochester CRO work has no affordability hook |
| #6 Troy photo content | LG-TR-06 photo blitz | Troy stays photo-starved at 3/25; trust-signal gap |
| #7 Intake review SOP | LG-UP-06 review velocity (7 facilities) | Rating lift across pin set can't happen from outside |
| #8 Disavow approval | OFF-06 disavow deploy | File ships but doesn't upload |
| #9 Schema sign-off | OS-01 schema refactor | Schema deploys with HQDM-only assumptions |
| #10 Driving Directions | — | Principal awareness only |
