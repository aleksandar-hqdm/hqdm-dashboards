# Urban Recovery — Owner Conversation Items (Q2 2026)

**Owner:** Aleksandar (HQDM) · **For:** Account manager (AM-side) — bundle into one 30-min call with UR
**Prepared:** 2026-05-14

This bundles all owner-side asks for Q2 into a single conversation so the AM can run one structured call instead of pinging UR's leadership repeatedly. Each ask has: status today / what we need / why it matters / risk if not / recommended ask wording. There is also a "what we explicitly are NOT asking the client" section so the AM is clear on the boundary.

---

## Ask #1 — Publish-permission for 4 location-page upgrades + 2-3 new builds + 2 service-page upgrades

**Status today:** UR's WordPress has 96 `/locations/*` pages and 5 `/services/*` pages. Live HTML probe (2026-05-14) confirms 0 of 96 location pages and 0 of 5 service pages carry JSON-LD; all are doorway templates. HQDM has scoped 6 location pages for full rebuilds (red-hook-ny, carroll-gardens-red-hook, gowanus, sunset-park-ny, boerum-hill, park-slope-ny) plus 2 service-page upgrades in Q2 (/services/alcohol-detoxification-service in M2, /services/opioid-detoxification-services in M3).

**What we need:** Standing approval for HQDM-Content + Aleksa to publish the upgraded pages to production directly, with a 24-hour preview-window emailed to UR's marketing contact for objection. (Surfpoint runs this model — silent approval after 24h preview.)

**Why it matters:** The bottleneck pattern that stalled the Surfpoint homepage upgrade for 2 months (March → May 2026) was synchronous owner approval at each page push. Standing approval keeps the M1 → M2 → M3 cadence on track.

**Risk if not:** Each page push waits in queue. If average lag is 2 weeks/page, the 6-7 LP-02 URLs alone slip from M1–M3 to Q3, and SP-02 opioid-detox slips with them.

**Recommended ask wording:** *"HQDM-Content drafts every page and submits to staging. UR marketing gets a 24-hour preview email. No reply within 24 hours = approval to push. Any objection in that window blocks the push until resolved. Same model we run for Surfpoint."*

---

## Ask #2 — Confirm in-network insurance carriers

**Status today:** `client.json` and `/admission-overview` both reference Medicaid, Aetna, Cigna, and BCBS as accepted carriers, but the exact in-network status (vs out-of-network with reimbursement) is not documented. OFF-04 (M2) plans 3 insurance-directory submissions that require formal in-network confirmation.

**What we need:** A confirmed list of in-network carriers from UR's billing/intake team. Format: `Carrier · in-network: yes/no · facility ID if known · effective date`.

**Why it matters:** Provider-directory submissions (Aetna, Cigna, BCBS) require accurate in-network attestation. Submitting "we accept X" when UR is out-of-network is a misrepresentation that creates a future takedown risk + erodes trust signal.

**Risk if not:** OFF-04 batch 2 (LegitScript + NAATP + 3 insurance directories) can ship only LegitScript + NAATP; we drop 3 of 5 planned M2 citations. Insurance-directory profile is one of the strongest YMYL trust signals on the addiction-treatment surface.

**Recommended ask wording:** *"For our M2 insurance-directory submissions, we need the in-network list confirmed. Can your billing team send a one-line confirmation per carrier — Aetna, Cigna, BCBS, Medicaid — with in-network status?"*

---

## Ask #3 — CARF accreditation status verification

**Status today:** `client.json` marks `carf_certified` as `needs_verification`. The GBP description references "Joint Commission accredited" but not CARF. OFF-02 (M1) plans a CARF directory submission contingent on confirmed accreditation.

**What we need:** Yes/no confirmation that UR is CARF-accredited, plus accreditation effective date and the CARF certificate number if available.

**Why it matters:** Critical-tier YMYL signal. CARF directory listing is one of the highest-DA citation signals for an addiction-treatment facility. If UR is not CARF-accredited, we substitute Joint Commission Behavioral Health Center accreditation as the M1 alternative (Joint Commission already referenced in GBP).

**Risk if not:** OFF-02 batch 1 drops the CARF row. Three submissions in M1 instead of three; we backfill with a Joint Commission directory submission. Not a blocker, just a substitution.

**Recommended ask wording:** *"Is Urban Recovery CARF-accredited? We're submitting to the CARF directory in M1 as part of our trust-signal stack. If yes, we need the accreditation effective date + certificate number. If no, we'll substitute Joint Commission Behavioral Health Center accreditation."*

---

## Ask #4 — Clinical-lead consent for Psychology Today + clinical bios

**Status today:** Psychology Today is a critical-tier YMYL citation in OFF-02 (M1). It requires (a) a named clinical lead (psychiatrist or licensed clinician) and (b) a facility profile that references the clinical lead. UR has no clinician profile live today.

**What we need:** UR clinical lead's consent to publish a Psychology Today profile + 200–300 word bio + headshot.

**Why it matters:** Psychology Today is the single highest-DA (91) addiction-treatment-relevant citation that's gated on a real clinician identity. Without it, OFF-02 batch 1 drops from 3 citations to 2.

**Risk if not:** OFF-02 ships SAMHSA + CARF (or Joint Commission substitute) only. Psychology Today moves to OFF-04 or Q3.

**Recommended ask wording:** *"For Psychology Today, we need to publish your clinical lead's profile — their name, credentials, 200-300 word bio, and a headshot. This is one of the highest-trust citations for any addiction-treatment center. Can your clinical lead consent to a profile and provide a bio + photo by end of M1 week 1?"*

---

## What we explicitly are NOT asking the client

Per `feedback_hqdm_client_involvement_filter.md`: filter high-client-involvement work; replace or push to Owner Asks.

- **No client photo capture** — HQDM team handles GBP photo blitz (GBP-04) using existing exterior shots + interior environmental shots; staff photos require release-signed images already on file with UR's marketing team. We are *not* asking UR to capture new photography.
- **No client review-collection effort** — HQDM provides the SMS template + QR card asset; UR's intake team operationalizes per existing intake-discharge SOP. We are *not* asking UR to manually solicit reviews.
- **No client copy edits on the new location/service pages** — HQDM-Content owns drafting + revision; the 24-hour preview window (Ask #1) is for objection only, not collaborative editing.
- **No location-page sweep approval** — LP-01 cleanup is data-driven per HQDM Location-Pages-SOP. Only URLs with 0 clicks 365d are removal candidates, and the working sheet documents every per-URL decision. No client sign-off needed.
- **No client involvement on the disavow file** — OFF-01 is HQDM-owned; we submit, log, and re-pull.
- **No client involvement on the off-page 6-strategy stack** — OFF-07/08/09 are Julce-owned per HQDM SOP.

---

## Suggested call sequence

Order asks by reversibility + risk-to-trust, so easy yeses front-load the call:

1. Ask #3 (CARF status verification — 30 sec, single yes/no)
2. Ask #2 (insurance in-network confirmation — 1 min, billing team handoff)
3. Ask #4 (clinical-lead Psychology Today consent — 2 min)
4. Ask #1 (standing publish permission — 5 min — biggest ask)

Total estimated call time: 10 min + 10 min buffer for questions = **20 min**.

---

## Tracking

Once the call lands, log each ask's outcome in this doc (Approved / Pending / Substituted / Declined) so the team has a single source of truth for owner-side state.

| Ask | Status | Date | Notes |
|---|---|---|---|
| #1 Publish-permission | — | — | — |
| #2 Insurance in-network | — | — | — |
| #3 CARF status | — | — | — |
| #4 Clinical-lead PT consent | — | — | — |
