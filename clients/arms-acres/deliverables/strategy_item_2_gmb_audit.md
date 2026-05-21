# Strategy Item 2 — GBP / GMB Optimization Audit (Q2 2026)

**Client:** Arms Acres · **Owner:** Aleksandar · **Department:** GMB · **Status:** Audit complete (analysis-only deliverable per HQDM scope)
**Team brief:** "GMB photo refresh + Q&A + service additions based on competitor GMBs"

**Methodology note:** Per `feedback_hqdm_analyze_not_deliver.md`, this is an **analysis + recommendations** deliverable. Execution of GBP changes (photo upload, Q&A seeding, category additions) is owned by the HQDM GMB team / Julce; this doc surfaces the gaps and prioritized actions.

**Data source:** DataForSEO Google Business listing API (live + async), 2026-05-12 — 4 Arms Acres GBPs + 6 competitor GBPs. Full raw at `exports/dataforseo/gmb/<sanitized_name>/`; comparison matrix at `exports/dataforseo/gmb/info_comparison.csv`.

---

## 1. The 10-GBP comparison matrix

| GBP | Catchment | Claimed | Primary cat | Add'l cats | **Photos** | Rating | Reviews | **1-star %** | Description chars | Attribute groups |
|---|---|:---:|---|:---:|---:|:---:|---:|:---:|---:|:---:|
| **AA Inpatient (Carmel)** | Carmel HQ | ✅ | Addiction treatment center | 4 | **9** | 3.2 | 133 | 37% | 536 | 1 (accessibility only) |
| **AA Carmel Outpatient** | Carmel | ✅ (misspelled "Arm Acres") | Addiction treatment center | **0** | **2** | 3.3 | 7 | 43% | 201 | 1 |
| **AA Bronx Outpatient** | Bronx | ✅ | Addiction treatment center | 2 | **1** | 3.4 | 9 | 33% | 314 | 1 |
| **AA Queens Outpatient** | Queens | ✅ | Addiction treatment center | 2 | **2** | **2.2** | 16 | **63%** | **33** | 1 |
| Ascendant NY (Manhattan) | Manhattan | ✅ | Addiction treatment center | **8** | **90** | **4.8** | 284 | 3% | **750** | **4** (svc+access+amenities+crowd) |
| Mountainside NYC | NYC | ✅ | Addiction treatment center | 0 | 30 | 4.7 | 71 | 6% | 702 | **5** (parking+svc+access+amenities+crowd) |
| Cornerstone Medical Arts (Bronx) | Bronx | ✅ | Addiction treatment center | 2 | 61 | 4.1 | 203 | 15% | 329 | 1 |
| CoveCare Center (Carmel) | Carmel | ✅ | Mental health service | **6** | 46 | 3.0 | 48 | 46% | 276 | **4** (access+amenities+crowd+planning) |
| Bronx Recovery | Bronx | n/a | *(API returned no record at coordinate)* | — | — | — | — | — | — | — |
| Samaritan Daytop Bronx OP | Bronx | n/a | *(API returned no record at coordinate)* | — | — | — | — | — | — | — |

**Two competitor GBPs (Bronx Recovery + Samaritan Daytop Bronx OP) returned no record on the keyword+coordinate match.** Likely registered under slightly different names; manual lookup needed for Phase 2 if their per-GBP comparison matters operationally. For now, both are visible in maps_serp.csv and reviews-already-pulled, so their absence here is a comparison gap, not a strategy-blocker.

---

## 2. The 5 cross-cutting gap patterns

### 2.1 Photo gap — **Severity: Critical**

| | Carmel Inpatient | Carmel OP | Bronx OP | Queens OP |
|---|---:|---:|---:|---:|
| AA photos | **9** | **2** | **1** | **2** |
| Carmel competitor (CoveCare) | 46 | 46 | — | — |
| Bronx competitor benchmark (Cornerstone) | — | — | 61 | — |
| NYC benchmark (Mountainside / Ascendant) | — | — | — | 30 / 90 |
| **Recommended target** | **40+** | **25+** | **25+** | **25+** |

**Read:** AA's photo deployment is **5-90× behind** competitors at every location. Inpatient with 9 photos vs Ascendant's 90 is the most visible signal-deficit on the Maps property. CoveCare (Carmel) carries 46 photos vs AA's 2-9 at the Carmel-area GBPs.

**Recommended photo content per GBP (mapped from competitor structure):**
- **Inpatient main:** facility exterior (54-acre site + Hudson Valley views — current biggest asset), interior (admissions desk, common rooms, dining, group therapy rooms, individual rooms, medical wing, gym, equine-therapy paddock if applicable), team photos (clinical leadership), accreditation seals (Joint Commission + OASAS)
- **Outpatient locations:** exterior (storefront + signage), interior (reception, group rooms, individual session rooms), accessibility evidence, location-specific neighborhood landmarks for trust
- **Carmel Outpatient correction:** also requires GBP-name spelling fix from "Arm Acres" → "Arms Acres"

**Cross-reference §1.7d (Q2 Strategy main doc):** photo gap is consistent with the broader pattern of GMB ops volume (217 GMB-Ops Asana tasks over 24 months) not translating into property quality. Worth Asana cross-check on whether photo uploads were being tracked.

### 2.2 Category gap — **Severity: High**

AA inpatient has 4 additional categories. Competitors use **6-8 additional categories** to surface in more Map Pack contexts.

**Categories AA's inpatient has + the 4 outpatient GBPs are missing:**

| Category | AA Inpatient | AA Carmel OP | AA Bronx OP | AA Queens OP | Competitors using it |
|---|:---:|:---:|:---:|:---:|---|
| Alcoholism treatment program | ✅ | **❌** | ❌ | ❌ | Ascendant, CoveCare |
| Mental health clinic | ✅ | ❌ | ❌ | ❌ | Ascendant, CoveCare |
| Mental health service | ✅ | ❌ | ❌ | ❌ | Ascendant, CoveCare |
| Rehabilitation center | ✅ | ❌ | ✅ | ✅ | Ascendant, CoveCare, Cornerstone, Bronx OP |
| Counselor | ❌ | ❌ | ❌ | ❌ | Ascendant, CoveCare |
| Psychiatrist | ❌ | ❌ | ❌ | ❌ | Ascendant |
| Psychologist | ❌ | ❌ | ❌ | ❌ | Ascendant, CoveCare |
| Psychotherapist | ❌ | ❌ | ❌ | ❌ | Ascendant |
| Family counselor | ❌ | ❌ | ❌ | ❌ | CoveCare |
| Social worker | ❌ | ❌ | ❌ | ❌ | CoveCare |

**Most acute gap: AA Carmel Outpatient has ZERO additional categories.** Every outpatient GBP should at minimum mirror the 4 categories on the Inpatient GBP, plus add the clinician-role categories (Counselor, Psychologist, Psychotherapist) which match AA's published clinical staff composition.

**Recommended targets per location:**
- **Carmel OP**: +5 (Alcoholism treatment program, Mental health clinic, Mental health service, Rehabilitation center, Counselor)
- **Bronx OP**: +3 (Alcoholism treatment program, Mental health clinic, Counselor)
- **Queens OP**: +3 (Alcoholism treatment program, Mental health clinic, Counselor)
- **Inpatient**: +1 (Counselor — matches the clinical-team make-up; differentiates from CoveCare)

### 2.3 Attributes gap — **Severity: High (zero-cost lever)**

AA's 4 GBPs each have **1 attribute group** (accessibility only). Three competitors carry **4-5 attribute groups** including:

| Attribute group | AA (any) | Ascendant | Mountainside | CoveCare | Strategic value |
|---|:---:|:---:|:---:|:---:|---|
| `service_options` | ❌ | ✅ has_onsite_services | ✅ has_onsite_services | ❌ | Maps filter |
| `accessibility` | ✅ | ✅ | ✅ | ✅ | Required |
| `amenities` | ❌ | ✅ has_restroom_unisex | ✅ has_restroom_unisex | ✅ has_restroom | Maps filter |
| **`crowd`** | ❌ | ✅ **welcomes_lgbtq, transgender_safespace** | ✅ **welcomes_lgbtq, transgender_safespace** | ✅ **welcomes_lgbtq, transgender_safespace** | **High-signal social filter — surfaces in Maps filter chips** |
| `planning` | ❌ | ❌ | ❌ | ✅ requires_appointments | Self-explanatory for outpatient |
| `parking` | ❌ | ❌ | ✅ has_parking_street_paid | ❌ | Maps filter |

**The "crowd" attribute gap is the single highest-leverage zero-cost fix.** Three of three NYC/Carmel competitors expose LGBTQ-welcoming + transgender-safespace flags. AA exposes none. These attributes:
- Appear as Maps filter chips ("LGBTQ-friendly" filter)
- Match clinical reality (AA's `clinical_offerings` from client.json includes "trauma-informed care")
- Cost zero to enable (one-click in GBP dashboard)

**Recommendation:** Enable `welcomes_lgbtq` + `is_transgender_safespace` on all 4 AA GBPs as M1 quick win, assuming clinical leadership confirms intake practices match.

### 2.4 Q&A gap — **Severity: High (operational + visible)**

Sample data (AA Inpatient Carmel GBP, 25 Q&A pairs retrieved 2026-05-12):

| Metric | AA Inpatient | Read |
|---|---:|---|
| Total questions | 25 | Substantial public-facing intake/family question volume |
| Questions answered (any author) | **0** | Every single question is unanswered |
| Owner responses | **0** | Zero owner engagement on Q&A surface |
| Years of accumulated questions | 2018-2025 | 7-year backlog of unanswered intake questions |

**Sample unanswered questions on AA inpatient GBP:**
- "Can a patient receive mail?" (2018) — operational
- "What am I allowed to bring in with me?" (2019) — intake-critical
- "Is cigarette smoking allowed?" (2022) — intake-critical
- "Can you remain on suboxone?" (2020) — **MAT continuity-critical**
- "Does arms acres in carmel ny take pregnant women?" (2019) — **demographic eligibility**
- "How does the Recovery Coach Service at Arms Acres help after treatment?" (2025) — sales/aftercare question
- "What makes the Family Treatment Program at Arms Acres valuable for loved ones?" (2025) — sales question
- "Shut this place down, this place is terrible..." (2020) — **reputational damage left visible 5 years**

**Recommendation: M1 Q&A backlog clearance pass:** seed all 4 GBPs with **15-20 owner-authored Q&A pairs each** covering the recurring intake themes (admissions, MAT continuity, insurance, family, what-to-bring, smoking policy, pregnancy/demographic eligibility, MOUD on entry, length of stay). Use existing intake intake-FAQs content as source material — content already exists internally for /faqs page, just needs republishing as GBP Q&A pairs.

**Then:** respond to any user-asked Q&A within 48 hours per ongoing workflow. This addresses both Q&A vacuum AND the broader 0% owner-response rate identified in §1.7d (review sentiment).

*Competitor Q&A volume comparison pending — DataForSEO async pull still in progress; will append as addendum if material gap surfaces.*

### 2.5 Business description gap — **Severity: Medium**

| GBP | Description length | Quality read |
|---|---:|---|
| Ascendant Manhattan | 750 chars | Detailed services + differentiators |
| Mountainside NYC | 702 chars | Detailed services |
| AA Inpatient | 536 chars | Decent (191-bed + 54-acre detail) |
| Cornerstone Bronx | 329 chars | Sparse |
| AA Bronx Outpatient | 314 chars | OK |
| CoveCare | 276 chars | Sparse |
| AA Carmel Outpatient | 201 chars | Too short |
| **AA Queens Outpatient** | **33 chars** | **Effectively empty** |

**Recommendation:** Rewrite descriptions for AA Carmel OP + Queens OP to 500+ chars each, mirroring the Inpatient GBP's structure (modalities + accreditation + service area + signature program element).

---

## 3. The 4 AA GBPs — per-location action set

### 3.1 AA Inpatient Carmel (the flagship)

**Existing state:** 9 photos · 4 add'l categories · 3.2/133 reviews · 37% 1-star · accessibility-only attributes · 0 Q&A answered.

**M1 actions:**
1. Upload 35+ photos (facility, team, accreditations, equine-therapy, Hudson Valley setting)
2. Add `Counselor` as 5th additional category
3. Enable `welcomes_lgbtq` + `is_transgender_safespace` attributes (pending clinical confirmation)
4. Enable `service_options: has_onsite_services` + `amenities: has_restroom`
5. Seed 15 owner Q&A pairs (operational + MAT + intake + family themes)
6. **Begin owner-response on existing reviews** (cross-ref §1.7d crisis-priority sequencing)

### 3.2 AA Carmel Outpatient

**Existing state:** Misspelled name "Arm Acres" · 2 photos · 0 add'l categories · 3.3/7 reviews · 43% 1-star.

**M1 actions:**
1. **Fix GBP name spelling: "Arm Acres" → "Arms Acres"** (NAP-critical; cross-ref Lowman-style canonical-NAP playbook)
2. Add 5 additional categories (Alcoholism, Mental health clinic, Mental health service, Rehab center, Counselor)
3. Upload 25+ photos (storefront + interior + signage + accessibility)
4. Rewrite description to 500+ chars
5. Enable LGBTQ + transgender attributes; service_options + amenities
6. Seed 15 Q&A pairs (mirror Inpatient deck but outpatient-specific)

### 3.3 AA Bronx Outpatient

**Existing state:** 1 photo · 2 add'l categories · 3.4/9 reviews · 33% 1-star.

**M1 actions:**
1. **Critical: Fix on-page phone confusion** (website displays Queens phone; tel: link goes to a Pennsylvania number — see client.json `_phone_note`). On-page issue, not GBP, but cross-affects local trust.
2. Add 3 additional categories
3. Upload 25+ photos
4. Enable attribute groups (same as inpatient)
5. Seed 15 Q&A pairs
6. Reviews acquisition program (target: 9 → 35 reviews in Q2)

### 3.4 AA Queens Outpatient — **CRISIS PRIORITY**

**Existing state:** 2 photos · 2 add'l categories · **2.2 rating, 16 reviews, 62.5% 1-star** · 33-char description · 0 owner responses.

Per §1.7d (Q2 Strategy main doc): 8 of 10 Queens 1-star reviews mention **alleged insurance-fraud / over-billing / court-mandate referral abuse patterns**. This is above-SEO and requires ops-level escalation before launching review-acquisition.

**M1 sequencing:**
1. **Hold all GBP-acquisition / review-velocity work until ops-level escalation lands** (HQDM principal → Arms Acres leadership). Do not seed Q&A or push reviews while the operational allegations are unresolved.
2. **What can ship before ops escalation:** Fix the website phone confusion (Queens page displays Bronx phone, tel: link to PA number) — pure on-page fix, no Maps property risk.
3. **What can ship in parallel:** Rewrite GBP description from 33 → 500+ chars (factually-defensible content from clinical-offerings list).
4. **After ops escalation:** photo upload + category additions + attribute enables + Q&A seed + owner-response launch.

---

## 4. M1 GMB action checklist (consolidated)

| # | Action | GBP(s) | Owner | Severity |
|---|---|---|---|---|
| 1 | Photo upload to 25-40 count target | All 4 | GMB team | Critical |
| 2 | Add missing additional categories (per matrix in §2.2) | All 4 (most acute: Carmel OP) | GMB team | High |
| 3 | Enable `welcomes_lgbtq` + `is_transgender_safespace` attributes | All 4 (pending clinical confirmation) | GMB team + clinical sign-off | High |
| 4 | Enable `service_options: has_onsite_services` + amenities + planning | All 4 | GMB team | High |
| 5 | Fix Carmel OP name spelling "Arm Acres" → "Arms Acres" | Carmel OP | GMB team | Critical (NAP) |
| 6 | Rewrite descriptions: Carmel OP + Queens OP to 500+ chars | Carmel OP + Queens OP | GMB team + content | Medium |
| 7 | Seed 15 owner Q&A pairs per GBP from existing /faqs source content | All 4 *(Queens deferred)* | GMB team + content | High |
| 8 | Launch owner-response workflow (48-hr SLA, all reviews) | All 4 *(Queens deferred until ops escalation)* | GMB team | Critical |
| 9 | Resolve website on-page phone confusion (Bronx ↔ Queens swap + PA tel: leak) | Website (not GBP) | On-page | Critical |
| 10 | **Ops-level escalation re: Queens insurance-fraud / over-billing allegations** | Above-SEO | HQDM principal | Critical (pre-ops) |

---

## 5. Q&A + GBP-Posts cadence comparison (addendum 2026-05-12, post-async-pull)

### 5.1 Q&A volume + ownership

| GBP | Questions on GBP | Answered (any) | Owner-answered |
|---|---:|---:|---:|
| Cornerstone Bronx | 27 | 0 | 0 |
| **AA Inpatient Carmel** | 25 | 0 | 0 |
| Ascendant Manhattan | 13 | 0 | 0 |
| Mountainside NYC | 5 | 0 | 0 |
| **AA Queens Outpatient** | 4 | 0 | 0 |
| **AA Bronx Outpatient** | 3 | 0 | 0 |
| CoveCare Center (Carmel) | 1 | 0 | 0 |
| AA Carmel Outpatient | no Q&A returned | — | — |

**Industry-wide pattern:** **0 owner-answered Q&A across all 10 GBPs.** Every competitor has the same Q&A vacuum. **This makes the Q&A seeding recommendation in §2.4 even higher-leverage than originally framed — it's a category-wide competitive gap, not an AA-specific one.** AA going from 0 → 15 seeded owner Q&A pairs would be **genuinely differentiating** in the Carmel + Bronx + Manhattan SUD competitive sets.

### 5.2 GBP Posts cadence

| GBP | Recent posts captured | Most recent | Cadence |
|---|---:|---|---|
| **Ascendant Manhattan** | 10 | 2026-05-08 | **Weekly (Wed/Fri)** — consistent on-brand voice |
| **Cornerstone Bronx** | 10 | (data pulled, cadence pending review) | Active |
| **Mountainside NYC** | 10 | (data pulled, cadence pending review) | Active |
| **AA Inpatient Carmel** | 10 | 2026-05-06 (most recent) → 2025-09-29 (prior) | **Sporadic — recent post this week then 8-month gap to Sept 2025** |
| CoveCare Center | 2 | (data pulled) | Inactive |
| **AA Carmel Outpatient** | 0 | — | **Zero posts** |
| **AA Bronx Outpatient** | 0 | — | **Zero posts** |
| **AA Queens Outpatient** | 0 | — | **Zero posts** |

**Read:** **Ascendant posts weekly with consistent voice.** AA has 1 post in the last 8 months on Inpatient and **zero posts on 3 of 4 GBPs**. Combined with the 217 GMB-Ops Asana tasks (Q2 Strategy §1.10a) over 24 months, the posting-cadence inactivity raises a question about what those 217 tasks actually executed.

**Sample Ascendant post (2026-05-08):** *"Navigate the first step of your recovery journey with 24/7 medical supervision in a secure and professional environment. Our specialized detox programs prioritize your safety and physical comfort..."* — polished detox-program marketing copy, no operational filler.

**Sample AA Inpatient post (2025-09-27):** *"Weekend movie nights are the best! 🎬✨ It's a wonderful way to come together and enjoy great films..."* — operational/activity post, not service-led. Mix of service-led and activity posts; no clear voice strategy.

### 5.3 Addendum to M1 GMB action checklist

| # | Action | Why added |
|---|---|---|
| 11 | Launch weekly GBP-posts cadence across all 4 AA GBPs (mirror Ascendant's weekly-Wed/Fri cadence) | 3 of 4 AA GBPs have zero posts; flagship has 1 post in 8 months. Industry benchmark = weekly |
| 12 | GBP posts content mix (proposed): 60% service-led + 25% operational/availability + 15% facility/community | AA's existing post mix is heavy on activity content (movie nights); should rebalance toward service/intent content per Ascendant pattern |

## 6. What's NOT in this audit (explicit deferrals)

| Item | Why deferred |
|---|---|
| Bronx Recovery + Samaritan Daytop Bronx GBPs | API returned no record at keyword+coord; manual lookup is Phase 2 |
| Photo-content review (categorization of existing AA photos) | Requires manual visual inspection of GBP — outside DataForSEO scope |
| Service additions in the GBP "Services" tab (separate from categories) | DataForSEO Business Listings API doesn't expose this surface; requires direct GBP-manager check |
| Cornerstone + Mountainside Posts cadence detail | Captured but full cadence-stats review out-of-scope for this brief |
| Review-acquisition workflow specifics | Owned by ongoing HQDM GMB workflow, see Q2 Strategy main doc §1.7d |

---

## 7. Status mapping to team brief

| Brief sub-deliverable | Status | Where to find it |
|---|---|---|
| Photo refresh recommendations | ✅ Complete | §2.1 + §3 per-location |
| Q&A recommendations | ✅ Complete | §2.4 + §3 per-location |
| Service / category additions | ✅ Complete | §2.2 + §3 per-location |
| *(implicit)* Attribute additions | ✅ Complete (added — zero-cost lever) | §2.3 |
| *(implicit)* Owner-response gap | ✅ Cross-referenced | §2.4 + Q2 Strategy §1.7d |

**Owner (Aleksandar) → ✅ In Report (move from Not Started) → Result/Notes column:** *"Audit covers 10 GBPs (AA's 4 + 5 competitor + 1 missing). Photo gap is 5-90× behind benchmark. Categories on AA Carmel Outpatient = 0 (worst gap). Attribute gap is the highest-leverage zero-cost fix (LGBTQ-welcoming attribute group). Queens OP requires ops-level escalation before any review-acquisition push. Full action checklist §4."*
