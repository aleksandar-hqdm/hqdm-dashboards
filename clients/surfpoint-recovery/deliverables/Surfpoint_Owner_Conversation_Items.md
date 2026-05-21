# Surf Point Recovery — Owner Conversation Items (Q2 2026)

**Owner:** Aleksandar · **Date:** 2026-05-14
**Purpose:** Everything that needs the client's attention or sign-off, isolated from the execution task list so the team can keep moving on work that doesn't need owner approval.

> **Posture:** Group the asks. Make one call, not ten. Reduce decision load on the client — show them the recommended path, the evidence, and the impact, then ask for sign-off as a single decision.

---

## Ask 1 — Publish the homepage CRD update (sitting since March 2026)

| Field | Detail |
|---|---|
| Status | Drafted 2026-03; in client review since; **2 months stalled** |
| What we need | Final sign-off OR a track-change pass — either is fine |
| Why it matters | Homepage is the highest-converting page; the 24 items in the brief (schema, insurance H2, clinical team H2, what-to-expect, FAQ, reviews block) are gated on this publish |
| Risk if not signed | Every downstream improvement (Treatments hub, sub-pages, schema validation) inherits the homepage's missing structure |
| Recommended ask | "Either approve as-is or tell us the 2-3 changes you want — we can ship within 48h of either response" |
| Doc | [Surfpoint_Homepage_Update_Brief.md](Surfpoint_Homepage_Update_Brief.md) |

---

## Ask 2 — Authorize removal/redirect of 28 empty location pages

| Field | Detail |
|---|---|
| Status | Audit complete (2026-05-13). 37 location pages have 33-37 words in `<main>` — pure boilerplate, no city-specific content. Decisions made: 9 build out, 28 redirect |
| What we need | Sign-off to deploy the 28 redirects |
| Why it matters | These pages are dragging the site's quality score; 47/99 location pages aren't indexed by Google today and the doorways are part of why |
| Risk if not signed | Continued algorithmic distrust; the upgrades to the 9 keep-pages won't compound while doorways stay live |
| What we recommend | All 28 → 301 redirect: 5 NJ + 23 NY-area → `/areas-served` · 3 → parent location pages |
| Doc | [Surfpoint_Task1_M1_Location_Cleanup_Brief.md](Surfpoint_Task1_M1_Location_Cleanup_Brief.md) · [Surfpoint_All99_Location_Pages_Decisions.csv](Surfpoint_All99_Location_Pages_Decisions.csv) |

---

## Ask 3 — Authorize the `/services/*` → `/treatments/*` legacy redirects

| Field | Detail |
|---|---|
| Status | Existing `/services/alcohol-detox-services` and 4 sibling pages live but heavily orphaned and not in primary nav. New canonical structure under `/treatments/*` |
| What we need | Sign-off on the 5 301 redirects |
| Why it matters | URL structure consistency; current orphan state means Google doesn't know which is the canonical service page |
| Doc | [Surfpoint_Services_Legacy_Redirect_Plan.md](Surfpoint_Services_Legacy_Redirect_Plan.md) |

---

## Ask 4 — URL normalization for 40 verbose-slug location pages (deferred to Q3, but flag now)

| Field | Detail |
|---|---|
| Status | 40 of the 62 keep-pages use a verbose pattern like `/locations/restorative-addiction-rehab-in-crown-heights-ny`. Clean version would be `/locations/crown-heights-ny` |
| What we need | Conceptual buy-in; execution Phase 2 (Q3 2026) |
| Why it matters | URL hygiene + reader trust + future-proofing; some of these pages have 8 clicks / 225 impressions and the slug is doing nothing for them |
| Recommended ask | "We're not doing this in Q2 — but we want to flag the work. 40 redirects, mapped 1:1, executed as one batch when you give the word" |
| Doc | [Surfpoint_Location_Pages_Uniqueness.csv](Surfpoint_Location_Pages_Uniqueness.csv) |

---

## Ask 5 — Confirm review-acquisition SOP can run at intake-discharge

| Field | Detail |
|---|---|
| Status | SP gained +29 reviews in 16 days (4.5★→4.8★, 91→120) — the SOP works. Want to formalize so it keeps running without weekly nudging |
| What we need | Confirm the intake team can keep running QR-card-at-discharge + SMS at 24h |
| Why it matters | Review count is the single competitive lever where a single-location practice can match chain competitors. The Joint Brooklyn locations sit at 554–1,125 reviews each; SP at 120 |
| Recommended ask | "Keep doing exactly what you're doing — we'll measure the velocity at M3 and tell you if anything needs to change" |

---

## Ask 6 — Disavow file upload (informational, not blocking)

| Field | Detail |
|---|---|
| Status | Toxic PBN inbound link clusters identified (SEO Anomaly / SEO Cartel / xyz-pattern). HQDM building disavow file |
| What we need | Heads up — HQDM uploads to Search Console with existing access |
| Why it matters | These links are likely contributing to the 77% impression loss over 90 days |
| Note | Not asking client approval; just transparency that this action is happening |

---

## Ask 7 — Photo content for GBP catalog

| Field | Detail |
|---|---|
| Status | SP has 9 photos on the GBP today (1 logo, 1 exterior aerial video, 2 interior, 1 exterior signage; cover photo NOT set). Second-lowest in the competitor set (Mountainside 30, ACI 12, Ascendant 90 as benchmarks). HQDM has no stock of SP photos in Drive. |
| What we need | Share 25+ photos via Google Drive (or equivalent): interior (intake desk, treatment rooms, common areas), exterior (Surf Avenue entrance, W 24th St entrance, building context), staff with signed releases (clinical lead, intake coordinator, nursing), facility detail (cafeteria, recreational area), and any neighborhood/Coney Island context shots. **A clear, well-composed exterior shot for the cover photo is highest priority.** |
| Why it matters | Photo count is a per-pin GBP trust signal. SP currently sits below the floor of every non-trivial direct competitor in Brooklyn rehab. The cover-photo slot is the single highest-leverage missing element. |
| Risk if not provided | GBP-08 (M3 photo upload task) stays blocked. SP's photo footprint stays at 9 vs Mountainside 30 / ACI 12. We can't generate the photos ourselves (Google reverse-image detects stock). |
| Recommended ask | "Share whatever you already have — even 10 quick phone photos beats waiting for a pro shoot. We'll geotag, categorize, and upload via GBP Manager." |

---

## Group these into one call

| Call topic | Decision needed | Time estimate |
|---|---|---|
| Homepage CRD (Ask 1) | Approve / track-change | 10 min |
| Doorway cleanup (Ask 2) | Approve 28 redirects | 5 min |
| Service redirects (Ask 3) | Approve 5 redirects | 3 min |
| URL normalization (Ask 4) | Conceptual nod for Q3 | 5 min |
| Review SOP (Ask 5) | Confirm intake team continuity | 5 min |
| Disavow (Ask 6) | Informational | 2 min |
| Photo content (Ask 7) | Send 25+ photos via Drive | 2 min ask, async delivery |
| **Total** | **One 30-min call** | |

---

## What we explicitly are NOT asking the client

- Approval to run GBP Posts, Q&A, review responses — HQDM has GBP Manager access, executes directly
- Approval to deploy schema on the 9 location upgrade pages — internal SEO change, no editorial impact
- Approval to update meta tags / title tags on the 5 conversion pages — internal SEO change
- Approval for off-page work (citations, press releases, SEO Neo program execution) — already covered
- Approval for suburb-page monthly cadence — already covered by HQDM SOP

These items execute regardless of the call. The call only unblocks the 7 asks above.
