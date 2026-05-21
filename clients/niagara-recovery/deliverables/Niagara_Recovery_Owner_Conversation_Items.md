# Niagara Recovery — Q2 2026 v2 Owner Conversation Items

**Prepared 2026-05-19 · Bundle 5 items for one short call · ~20 minutes total**

---

## Why one call, not five emails

The Press Release task has been stuck in your Asana since 2025-10-11 (7 months). The Recovery Sites-wide "On-Page Optimizations" ticket has been awaiting approval since earlier. Serial approval cycles slow execution. This document bundles the five Q2 v2 decisions that need your sign-off so the HQDM team can ship Push 1-5 without serial wait.

---

## Item 1 — Approve canonical brand entity (P0, blocks Push 1)

**Decision needed:** Confirm "Niagara Recovery" as the canonical brand entity for the website's title, header, footer, JSON-LD schema, and all marketing assets going forward.

**Why this matters:** Your GBP and homepage already use "Niagara Recovery." Five of your eight core pages (about / admissions / contact / treatments / areas-served) still title-tag as "Recovery Center of Niagara." Schema is mixed. In the last 6 months, the GBP search log shows "recovery center of niagara" pulled **363 searches** vs the new-brand variants at 528 combined — 41% of branded demand routes to the old name because the website's title-of-record sends Google the wrong entity signal.

**Default if no objection:** "Niagara Recovery" (matches GBP + homepage). Alternative is to keep "Recovery Center of Niagara" but that would require renaming the GBP, which has its own risks.

**HQDM time to execute:** ~4 hours of on-page title rewrites + 2 hours of JSON-LD updates once you confirm.

---

## Item 2 — Decide SAB vs storefront posture for the GBP (P1, supports Push 2)

**Decision needed:** Should the Niagara Recovery GBP be configured as a Service Area Business (no public address shown) or a brick-and-mortar storefront (public address shown)?

**Current state:** Storefront — public address at 2600 William St, Newfane is visible to GBP visitors.

**Recommendation:** Keep storefront. The 24/7 inpatient detox + short-term residential program runs at the Newfane facility — patients and families physically visit. Storefront posture supports the entity-claim work in Push 2 (service-area expansion to anchor towns) because Google's entity graph reads a real public address + 47 reviews + 6 photos as a real facility.

**Alternative (SAB):** Hide the public address. Service-area expansion still possible. But may slightly weaken Maps Pack visibility because the entity-graph signals weaken.

---

## Item 3 — Confirm 4 credentialing claims + Suboxone clinical offering (P0, blocks SP-03)

**Decision needed:** Confirm whether Niagara Recovery currently holds (or is in active pursuit of):
- CARF accreditation
- LegitScript certification
- SAMHSA listing
- NY OASAS license

These four credentials are the standard trust signals for addiction-treatment websites. The Push 3 schema deployment + Push 4 location-page upgrades reference them in MedicalBusiness > hasCredential fields. If any are not held but planned, we frame as "Pursuing" rather than claim.

**Plus:** Confirm whether Niagara Recovery currently offers Suboxone induction / Vivitrol / methadone referral as part of MAT services. The Push 3 SP-03 build creates a new `/services/suboxone-mat-program` URL — top GBP-search non-brand demand at 62 searches Dec-May. If the clinical offering exists, we build the page. If it doesn't, we don't.

---

## Item 4 — Approve pause on suburb-doorway production firehose (P0, blocks Push 5 CC-03)

**Decision needed:** Pause the content team's suburb-doorway page production pipeline (the `/locations/best-/most-trusted-/dependable-/premium-/renowned-/famous-/leading-` template) for the duration of Q2 v2 strategy execution.

**Why this matters:** In the last 5 weeks (2026-04-15 → 2026-05-18), the content team shipped:
- 22 new PAA blog posts (Newfane-modified topics)
- 9 new suburb-doorway pages (Millville / Eagle Harbor / Abbott McKinley / Cowlesville / Marilla / Blossom / Attica / E. Oakville / E. Pembroke)

Plus 3 more batches in the pipeline (Renowned / Famous / Leading variants for May-June delivery).

Meanwhile, GSC last-30d shows non-branded clicks have collapsed to **47** vs **3,967 over the prior 365d** — an 87% decline. The blog/doorway production is no longer converting impressions to clicks because the content cohort is too topically diluted (off-vertical posts like porn-addiction at 350K impressions, vape-by-country, social-media addiction) and too Newfane-narrowed (reinforcing already-dominant zone instead of break-out terrain).

**The pause is structural.** Without it, Push 4's LP-10 task — which redirects ~60 existing doorway URLs to substantive anchor city pages — becomes a perpetual cleanup cycle as new doorways ship.

**Alternative if you want to keep some pipeline:** Redirect content-team capacity from suburb-doorways to (a) the Push 4 BUILD work on Tonawanda / N. Tonawanda / Lewiston / Youngstown location pages, and (b) the Push 3 SP-01/02/03 service-page rewrites. Same writers, different output target.

---

## Item 5 — Press Release task stuck since 2025-10-11 (P2, decision required)

**Decision needed:** Ship or close out the "Niagara Recovery Press Release (FOR APPROVAL)" task that has been sitting in the Asana Order Gigs / PR EOM (June) section for 7 months.

**Why this matters:** Off-page work cadence depends on PR distribution. A 7-month-stuck task creates a planning gap — the team doesn't know whether to assume PR distribution is part of the off-page mix.

**Two paths:**
- Ship: send back to Julce with approval, distribute, and re-enter the PR rotation cadence for Q2-Q3
- Close out: archive the task; HQDM moves on from PR distribution for Niagara Recovery as a quarterly cadence

Either path is fine. The unresolved state isn't.

---

## Summary table

| Item | Decision needed | Default if no objection | Blocks |
|---|---|---|---|
| 1 | Confirm "Niagara Recovery" as canonical brand | Niagara Recovery | Push 1 (BC-01 to BC-04) |
| 2 | SAB vs storefront for GBP | Storefront (keep current) | Push 2 framing |
| 3 | 4 credentialing claims + Suboxone clinical offering | Confirm what you actually hold; frame "Pursuing" otherwise | Push 3 SP-03 build |
| 4 | Pause suburb-doorway production firehose | Pause | Push 5 CC-03 |
| 5 | Ship or close Press Release task | Ship (resume PR cadence) | Off-page Q2-Q3 cadence |

---

**Total expected duration: 15-20 minutes for the call.**
**Outcomes can be confirmed via Asana comment or short email after the call.**
