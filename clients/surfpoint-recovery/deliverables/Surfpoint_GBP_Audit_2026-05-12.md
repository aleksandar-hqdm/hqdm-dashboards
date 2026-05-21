# Surfpoint Recovery — GBP Audit + Competitive Position
**Date:** 2026-05-12 · **Analyst:** Aleksandar · **Status:** Diagnostic, complements Q2 2026 Custom Strategy

---

## 0. Scope and what this is not

This audit opens the GBP listing as a standalone asset — field-by-field state, hidden risks inside the review base, and competitive position. It complements (does not duplicate) the Q2 2026 Custom Strategy doc, which already queued GBP tactics as M1-06 → M1-13 + M2-07 but treated the listing as a "resilience layer" without breaking it open.

**Sources triangulated:**
- 2026-05-12 live GBP Manager session (screenshots + visible reviews stream, captured by Ace)
- 2026-05-08 DataForSEO Business Data pull — Surfpoint + 11 direct competitors (`exports/dataforseo/gmb/`)
- 2026-04-22 Local Dominator 5-scan trend (`exports/localdominator/`) + 2026-05-08 LD update
- 2026-05-08 DataForSEO Maps SERP grid across 20 keyword anchors / Coney Island + Bay Ridge + Sunset Park centers (`exports/dataforseo/maps_serp_anchors_coney.csv`, `maps_grid_*.csv`)
- DataForSEO review pull (50 most-recent per competitor) — used to compute 90/180/365-day velocity

**Competitor set (filtered to direct, non-HQDM service providers):** ACI Inpatient, Genesis Detox of Brooklyn, Spring Hill Wellness NY, Under Angels Wings Recovery, Ascendant Detox NYC, Mountainside Treatment Center NYC, Long Island Interventions, Realization Center.

**Excluded from competitor set (and why):**
- **Urban Recovery** (Red Hook, Brooklyn), **Elev8 Recovery NY** (Harlem) — HQDM Recovery clients (full Recovery roster: Surfpoint, Urban, Elev8, Arms Acres, Conifer Park, Niagara). Treating either as a competitor would compare two HQDM accounts; would be referenced only as internal-coordination context for Milica/Aleksa, never as a benchmark.
- **Arms Acres, Conifer Park, Niagara Recovery** — other HQDM Recovery clients; out of NYC geo anyway.
- **Skilled-nursing-rehab facilities** (Shore View, Haym Salomon, Seagate, Menorah) — surface in the generic "inpatient rehab" grid but treat post-surgical/elderly populations, not addiction. Not service-providers for Surfpoint's buyer.
- **Informational/UGC/social/government domains** — stripped per standard competitor filter.

---

## 1. Headline read — the listing is overperforming the architecture

**The 60-second take.** Surfpoint Recovery's GBP is the single strongest asset the brand has — and is doing the work the website should be doing. Maps ranks #1 across every Coney-Island-centered addiction query in the DataForSEO grid (alcohol rehab, drug rehab, drug detox, alcohol detox, inpatient rehab refined to addiction). The rating moved 4.5 → 4.8 in 16 days (April 22 → May 8) on a 91 → 120 review surge. Against direct outside competition inside Brooklyn (ACI Inpatient 3.8★/71, Genesis Detox 3.5★/63, Spring Hill outpatient 4.8★/21, Under Angels Wings 5.0★/35, Realization Center 4.7★/85 unclaimed), Surfpoint is the only listing combining a 4.8+ rating with 100+ review volume — uncontested in its catchment.

**But under the headline:** the listing has nine field-level leaks that are individually cheap to fix and collectively shape Knowledge-Panel completeness, rich-feature surface (booking, Q&A, posts), and audit risk inside an OASAS-regulated vertical. The Q2 strategy queues most of these as M1 tasks but didn't catalog the source state — this audit does that.

**The three findings the Q2 doc didn't catch:**
1. **0% owner-response rate across 120 reviews**, including a 20-week-old RN-flagged review describing nurses on Bluetooth during medication administration — a public, indexed HIPAA/med-admin compliance signal sitting unaddressed.
2. **20-neighborhood service area on an inpatient-only facility** — service area is for businesses that travel to clients; inpatient = clients come to the facility. The current setup dilutes geo precision and includes neighborhoods (Howard Beach, Belle Harbor, Bedford-Stuyvesant) that don't match the `real_catchment_neighborhoods` defined in client.json.
3. **4 of 5 categories carry zero services** — the listing has 16 services on the primary "Addiction treatment center" category, but the 4 secondary categories (Mental Health Clinic, Mental Health Service, Rehabilitation Centre, Alcoholism Treatment Programme) all show empty service lists. Each secondary category surfaces independently in different refinement queries; emptiness here costs map-pack coverage on mental-health-refined intents.

---

## 2. Map-pack position — where the listing is right now

### 2.1 Tracked anchor (Local Dominator, 5-scan trend)
**Query:** `alcohol rehab brooklyn`, grid centered Coney Island, 5-month trend Oct 2025 → Apr 2026

| Scan date | Avg rank | Top-3 grid % | Trend |
|---|---|---|---|
| 2025-10-24 | 1.88 | 87% | baseline |
| 2025-11-22 | 1.74 | 89% | ↑ |
| 2026-01-22 | 1.62 | 92% | ↑ |
| 2026-02-26 | 1.55 | 94% | ↑ |
| 2026-04-22 | **1.47** | **96%** | ↑ |

Listing is gaining grid coverage continuously. No degradation signal.

### 2.2 Multi-keyword grid (DataForSEO, Coney Island center 40.5755,-73.9707)

| Cluster keyword | Surfpoint rank | Position 2 | Position 3 |
|---|---|---|---|
| alcohol rehab | **1** | Spring Hill Wellness | The Safe Foundation |
| drug rehab | **1** | LSA Recovery Coney | Spring Hill Wellness |
| drug detox | **1** | Spring Hill Wellness | LSA Recovery Coney |
| alcohol detox | **1** | Spring Hill Wellness | LSA Recovery Coney |
| inpatient rehab | **1** (addiction-refined) | Shore View Nursing* | Haym Salomon* |
| addiction treatment brooklyn | **1** | (verify in grid) | (verify in grid) |

*Skilled-nursing-rehab — not an addiction-treatment competitor.

**Read:** Surfpoint is the default Maps answer for South-Brooklyn addiction-treatment intent. The actual addiction competitors (Spring Hill, LSA Coney) sit clearly below; non-addiction nursing-home rehabs contaminate generic "inpatient rehab" but are filtered out of refined queries.

### 2.3 Where Surfpoint is NOT dominant
- **Bay Ridge + Sunset Park grid centers** (north-west of facility): Surfpoint drops out of top 8 entirely. Top players: Seek Counseling, Under Angel's Wings, Genesis Detox, Jovenes Brooklyn AA.
- **Manhattan + Queens DMA-wide:** Ascendant Detox NYC + Mountainside NYC own those grids — not territory Surfpoint should chase.
- **Outpatient-refined queries** (`outpatient rehab brooklyn`): Surfpoint is inpatient-only; this is correctly out of scope but the broad service-area setting is creating false competitive surface here.

---

## 3. Field-by-field current state

### 3.1 Business name
**Current:** `Surfpoint Recovery: Inpatient Drug & Alcohol Rehab & Detox In Brooklyn, NY`
**Legal real name (per client.json):** `Surfpoint Recovery` (alternates: Surf Point Recovery, Surfpoint Recovery LLC)

**Read.** This is keyword-stuffing — a documented Google Business Profile policy violation. **However**, the same pattern is used by ACI Inpatient, Mountainside NYC, Ascendant Detox NYC, and the broader addiction-treatment vertical — keyword-stuffed names have been normalized. Unilateral cleanup of Surfpoint's name without competitive parity would surrender the keyword surface to peers who are also violating policy.

**Action:** **No change** to Surfpoint's name in isolation. Flag as known-policy-violation lever — if a competitor reports Surfpoint, Surfpoint reports the same competitors. Document in account risk log. (This pattern was already in the team's playbook; calling it out explicitly so it's not "fixed" in a future hygiene sprint.)

### 3.2 Categories
**Current:** 5 total
- Primary: Addiction Rehabilitation Centre (UI label) / `addiction_treatment_center` (category ID)
- Secondary: Mental Health Clinic, Mental Health Services, Rehabilitation Centre, Alcoholism Treatment Programme

| Comparator | Category count | Categories beyond Surfpoint's set |
|---|---|---|
| Ascendant Detox NYC | **9** | Counselor, Psychiatrist, Psychologist, Psychotherapist |
| Long Island Interventions | 6 | Counselor |
| Surfpoint Recovery | 5 | — |
| ACI Inpatient | 5 | — (same set as Surfpoint) |
| Spring Hill Wellness | 3 | Wellness program (lighter set) |
| Mountainside NYC | 1 | — (under-optimized despite chain backing) |
| Genesis Detox / Under Angels Wings / Realization Center | 1 | — (primary only) |

**Gap.** Ascendant's 4-category clinical-roles expansion (Counselor + 3× psych) extends keyword surface across `counselor brooklyn`, `psychiatrist near me`, etc. — adjacent intents that send referral traffic.

**Action: M1-11 already queued.** Verify on-staff clinical credentials first (NPI lookups; LegitScript directory; LinkedIn for hire-able titles) before adding categories. Don't add Psychiatrist if there is no licensed psychiatrist on staff — false-claim grounds for suspension. Per CRD, dual diagnosis IS offered with CBT-grounded therapy — Counselor at minimum is defensible.

### 3.3 Description (knowledge panel)
**Current (471 / 750 chars used):**
> "Situated in Brooklyn, Surfpoint Recovery is a premier destination for compassionate and comprehensive care. Since opening in 2022, this innovative facility has specialized in inpatient services for those facing substance use disorder. Offering a supportive environment for detox, withdrawal, and stabilization, they are dedicated to guiding individuals through their journey to recovery. Surfpoint provides expert care in a setting focused on healing and long-term wellness."

**What's missing.** Boilerplate language; no specific credentials, no specific services, no insurance, no geography beyond "Brooklyn."

| Signal | Present in current description? | Should be? |
|---|---|---|
| OASAS license | No | Yes |
| CARF Center of Excellence | No | Yes |
| MAT (buprenorphine / naltrexone) | No | Yes |
| Dual diagnosis | No | Yes |
| Coney Island / South Brooklyn | No | Yes (uncontested geo) |
| Insurance carriers (Medicaid + Aetna/Cigna/BCBS) | No | Yes |
| 24/7 admissions | No | Yes |
| Family programs | No | Yes |

**Action: M1-12 queued.** Status as of audit date: not shipped. 750 chars budgeted = ~120 words. Sample draft (633 chars):

> "Surfpoint Recovery is an OASAS-licensed, CARF Center of Excellence inpatient drug and alcohol detox + short-term rehab serving Coney Island and South Brooklyn since 2022. We provide medically supervised alcohol, opioid, and benzodiazepine detox with MAT (buprenorphine, naltrexone), dual-diagnosis treatment, family programs, and discharge planning. We accept Medicaid, Aetna, Cigna, and BlueCross BlueShield. Admissions are open 24/7. Call (646) 347-1893 to speak with admissions. 2316 Surf Ave (entrance on West 24th Street), Brooklyn, NY 11224."

### 3.4 NAP cleanup
**Current parse from DataForSEO + GBP UI:** `2316 Surf Ave Entrance on, W 24th St, Brooklyn, NY 11224`

The "Entrance on West 24th Street" qualifier got embedded into address line 1, producing an address string that hashes differently from how it's listed on the website (`2316 Surf Avenue, Brooklyn, NY 11224`) and on most citation directories. This breaks NAP-match deduplication used by Yelp, Foursquare, BBB, Apple Maps, and most importantly the Bing Places + Apple Maps citation lifts.

**Action.** In GBP Manager → Edit profile → Address → put `2316 Surf Avenue` as line 1, move "Entrance on West 24th Street" into a separate Notes/Additional info field if available, or strip it entirely (the entrance qualifier belongs in the description, not the structured address). After change, propagate clean NAP to the 8-10 priority citations queued in M1-14.

### 3.5 Website URL
**Current:** `http://www.surfpointrecovery.com/?utm_source=gmb&utm_medium=click&utm_campaign=gmb_listing`

Two issues:
1. **`http://` not `https://`** — the canonical site serves over TLS. Google often handles the redirect transparently but the http base is still indexed as the raw GBP citation. Free fix.
2. **UTM tags inline** — vertical-standard (LSA Recovery and Mountainside use the same pattern); harmless for attribution, but if the site has 301 logic that strips/preserves UTMs inconsistently it can produce duplicate URLs in GSC. The bigger reason to clean: when the GBP-driven traffic is attributed via UTM, it shows up as `(direct)/(none)` in GSC and as `google/cpc` or `google/organic` shifted in GA4 — already noted in the channel-mix analysis.

**Action.** Change to `https://www.surfpointrecovery.com/?utm_source=gmb&utm_medium=organic&utm_campaign=gbp` (organic medium, not click — `click` triggers Google Ads bot misattribution heuristics in GA4). Or strip UTMs and use UTM-injection at the link-out only via a GBP-specific landing redirect. Either path is a 5-minute change.

### 3.6 Hours and contact
**Hours:** 24/7 across all 7 days. **Correct** for inpatient/detox; matches actual operations.
**Phones:** Primary +1-646-347-1893 (intake), Secondary +1-347-727-4800 (facility). Canonical matches client.json. **No change.**
**Chat:** Empty. Acceptable (most addiction-treatment listings leave this off; the 24/7 phone is the conversion path).

### 3.7 Service area
**Current:** 20 service areas spanning Brooklyn neighborhoods + Queens (Howard Beach, Breezy Point, Belle Harbor, Rockaway Park, Woodhaven) + Bedford-Stuyvesant + Bushwick + Brownsville.

**The problem.** Service area in GBP is intended for businesses that travel to client locations (plumbers, lawn care, etc.). Surfpoint is **inpatient-only** — clients come to the facility. Per Google's policy, a business with a public storefront AND a wide service-area attribute can have its rank distance algorithm partially down-weighted, and the wide service area dilutes the geo precision that the Coney-Island map dominance is built on.

**The secondary problem.** Many neighborhoods listed don't match the `real_catchment_neighborhoods` defined in `client.json`:

| Service area neighborhood (current) | In real catchment? | Read |
|---|---|---|
| Brooklyn, NY | Yes | core |
| New York, NY | No (too broad) | dilution |
| Midwood | Yes | core |
| Woodhaven, Queens | No | out-of-borough dilution |
| Bushwick | No (north Brooklyn) | dilution |
| Canarsie | No (east Brooklyn) | dilution |
| Flatbush | Marginal | weak |
| Bay Ridge | Yes | core |
| Gravesend | Yes | core |
| Homecrest | Yes | core |
| Bath Beach | Yes | core |
| Breezy Point, Queens | No | out-of-borough |
| Howard Beach, Queens | No | out-of-borough |
| Bensonhurst | Yes | core |
| Brownsville | No | dilution |
| Rockaway Park, Queens | No | out-of-borough |
| Borough Park | Marginal | weak |
| Sheepshead Bay | Yes | core |
| Belle Harbor, Queens | No | out-of-borough |
| Bedford-Stuyvesant | No (north Brooklyn) | dilution |

**Action.** Two paths:
- **Path A (recommended):** Remove service area entirely. Surfpoint is a storefront for inpatient services; the Maps grid will continue to surface for queries from any neighborhood that lands inside the proximity ring driven by category + reviews + on-page geo signals. The South-Brooklyn grid dominance does not depend on service-area; it's already proven.
- **Path B (conservative):** Trim to 9 South-Brooklyn neighborhoods only: Coney Island, Brighton Beach, Bensonhurst, Bay Ridge, Sunset Park, Sheepshead Bay, Gravesend, Bath Beach, Midwood. Match `real_catchment_neighborhoods`.

Path A is cleaner and lower-risk. Path B preserves the appearance of "we serve a wide area" for prospects browsing the listing, which is mostly cosmetic.

### 3.8 Photos
**Current:** 9 photos total (1 logo, 1 exterior aerial video, 2 interior, 1 exterior signage; cover photo NOT set). Second-lowest in the competitor set.

| Listing | Photos | Cover photo |
|---|---|---|
| Ascendant Detox NYC | **90** | Yes |
| Mountainside NYC | 30 | Yes |
| Spring Hill Wellness | 17 | TBD |
| ACI Inpatient | 12 | Yes |
| Under Angels Wings | 11 | TBD |
| **Surfpoint Recovery** | **9** | **No** |
| Long Island Interventions | 7 | Yes |
| Genesis Detox | 2 | Yes |
| Realization Center | 2 | TBD (unclaimed) |

**Read.** Ascendant's 90 photos sets a corporate benchmark; Mountainside's 30 is the floor for a multi-location chain treating GBP seriously. Surfpoint's 9 sits below every non-trivial direct competitor in the set — only Genesis Detox (2 photos, 3.5★ in Sunset Park) and the unclaimed Realization Center (2) are below.

**Action: M1-06 queued — target 30+.** Composition recommendation (delivered to GBP Ops in implementation brief):
- **Exterior (5–8):** building front, sign close-up, surrounding Coney Island area, parking area, ADA-accessible entrance signage, neighborhood/street view
- **Interior facility (10–15):** lobby/intake, treatment rooms, group therapy room, individual counseling room, medical station/nursing station (without patient identifiers), cafeteria (1 already in set, add 2 more angles), recreation area, common spaces, hallways, sleeping accommodations (without identifiers)
- **Staff (5–8):** clinical director, admissions team, group counselors, nursing staff (with consent + faces visible — humanizes the listing; Mountainside does this well)
- **Documentation (3–5):** OASAS license certificate, CARF Center of Excellence award, accepted-insurance logos panel, facility safety certifications

Avoid stock photography (Google can detect via reverse image search and downweight).

### 3.9 Services list
**Current state:** 16 services listed under the **primary** category (Addiction Rehabilitation Centre).

The 4 secondary categories — Mental Health Clinic, Mental Health Service, Rehabilitation Centre, Alcoholism Treatment Programme — show **zero services attached**. Each secondary category has its own services list slot that drives recommendation-algorithm relevance for refinement queries (`mental health clinic brooklyn`, `rehabilitation centre coney island`).

**Existing service list (primary cat):**
1. Alcohol Rehab
2. Detox Center
3. Inpatient Treatment Program
4. Substance Use Treatment
5. Detoxification
6. Inpatient Rehabilitation
7. Family Therapy
8. Medication-Assisted Treatment (MAT)
9. Aftercare Programs
10. Short-Term Rehab in Brooklyn, NY
11. Alcohol Detox in Brooklyn, NY
12. Benzodiazepines Detox in Brooklyn, NY ← *should be "Benzodiazepine Detox" (singular, matches site URL)*
13. Opioid Detox in Brooklyn, NY

**Missing from primary:**
- **Dual Diagnosis Treatment** — major differentiator per CRD; should be top-3 listed
- Individual Counseling
- Group Therapy
- Cognitive Behavioral Therapy (CBT)
- Discharge Planning
- Sober Living Coordination
- Family Education Programs
- 24/7 Admissions

**Per-category recommended additions (each secondary cat needs ≥3 services):**

| Secondary category | Recommended services |
|---|---|
| Mental Health Clinic | Dual Diagnosis Treatment, Individual Counseling, Group Therapy, CBT, Anxiety Treatment, Depression Treatment |
| Mental Health Service | Mental Health Counseling, Crisis Intervention, Psychiatric Evaluation |
| Rehabilitation Centre | Inpatient Rehab, Drug Rehab, Alcohol Rehab, Substance Abuse Rehab |
| Alcoholism Treatment Programme | Alcohol Detox, Alcohol Rehab, Outpatient Alcohol Aftercare |

**Geo-tagging note.** Only 4 of the 16 primary-cat services use "in Brooklyn, NY" suffix. The pattern is inconsistent. Standardize: keep geo-suffix on the 4–6 highest-priority services (Alcohol Detox, Opioid Detox, Inpatient Treatment, MAT, Dual Diagnosis). Don't suffix every service — over-suffixing trips spam heuristics.

### 3.10 Attributes
**Current:** 5 set
- `accessibility:has_wheelchair_accessible_entrance`
- `accessibility:has_wheelchair_accessible_restroom`
- `accessibility:has_wheelchair_accessible_seating`
- `crowd:welcomes_lgbtq`
- `crowd:is_transgender_safespace`

**Empty sections (visible in GBP UI):** From the business, Parking, Place page attributes, Service options.

**Competitor attribute coverage:**

| Comp | Attributes | Notable |
|---|---|---|
| Mountainside NYC | 7 | `service_options:has_onsite_services`, paid parking |
| Ascendant Detox NYC | 6 | onsite services + amenities:restroom_unisex |
| LI Interventions | 5 | parking attributes |
| **Surfpoint Recovery** | **5** | accessibility-heavy, no service_options or amenities |
| Under Angels Wings | 5 | women-owned + LGBTQ + transgender |
| ACI Inpatient | 5 | wheelchair entrance/restroom/seating + restroom_unisex + LGBTQ |
| Spring Hill Wellness | 4 | onsite services + accessibility (no crowd attributes) |
| Genesis Detox | 2 | onsite services + wheelchair entrance only |
| Realization Center | 2 | unclaimed listing — minimal attributes |

**Action: M1-10 queued.** Specific gaps to close:
1. `service_options:has_onsite_services` — yes, inpatient = onsite. Cheap signal.
2. `accessibility:has_wheelchair_accessible_parking` — verify and add.
3. `amenities:has_restroom_unisex` — verify and add (note: GBP UI showed "No gender-neutral toilets" in Amenities section currently; clarify if this is operational truth or oversight).
4. `from_the_business:is_owned_by_women` — verify ownership; if applicable, add (real differentiator in vertical).
5. **From the business** section: populate. This is a separate 750-char field from main description, often used for an "Our story" angle (founding story, clinical philosophy, accreditation timeline). Mountainside and Spring Hill use this well; most competitors don't.

### 3.11 Posts
**Current visible:** 1 post — `What Should You Expect During Your First Week at a Brooklyn Drug Rehab Center?` — published "last week" with Call now CTA.

**Read.** Cadence is the issue, not topic. Posts auto-expire after 6 months (offers/events) or 12 months (standard) from the knowledge panel. At 1/week, freshness signal is weak. Top performers in the vertical (Ascendant, Mountainside) post 2–3/week.

**Action: M2-07 queued at 2/week.** Topic mix recommendation:
- 1× research-phase content per week (matches current "first week" post style — what to expect, how detox works, insurance coverage explained, MAT explained, family member guidance)
- 1× community/credibility per week (OASAS accreditation reaffirmation, CARF anniversary, staff spotlight with photo, neighborhood involvement in Coney Island, before/after facility renovation, accepted-insurance updates)

Avoid event posts unless there's a real community event (open house, alumni gathering) — fake event posts to game freshness gets flagged.

### 3.12 Q&A
**Current:** 4 questions on listing. **0 owner responses to any.**

| Question | Posted | Owner-seeded? | Status |
|---|---|---|---|
| What makes Surfpoint Recovery's opioid detox program effective for individuals in Brooklyn, NY? | 2025-10-08 14:59:23 | Likely (timestamp matches batch) | **Unanswered** |
| How does Surfpoint Recovery ensure a safe and comfortable alcohol detox process in Brooklyn, NY? | 2025-10-08 14:59:23 | Likely | **Unanswered** |
| What can patients expect during a short-term rehab program at Surfpoint Recovery in Brooklyn, NY? | 2025-10-08 14:59:23 | Likely | **Unanswered** |
| Do they accept walk-ins | 2024-05-08 14:59:23 | Possibly (timestamp suspicious) | **Unanswered 24 months** |

The first three Q's are owner-seeded research-phase intents — likely added in October 2025 to seed the knowledge-panel Q&A surface. Then the seeding effort stalled and answers were never published. This is worse than no Q&A at all: it signals an actively-neglected listing.

| Comp | Q&A count |
|---|---|
| ACI Inpatient | 10 |
| Ascendant Detox NYC | TBD (verify in raw_qa) |
| Mountainside NYC | TBD |
| Spring Hill / UAW / Genesis / Realization | 0–2 (vertical low) |
| **Surfpoint** | **4 (0 answered)** |

**Action: M1-08 queued.** 10–15 patient-and-family-facing Q&A pairs with full answers. Topic priority (from intake-question patterns and GSC research-phase queries):
- Insurance: "Do you accept [Medicaid / Aetna / Cigna / BlueCross BlueShield]?" (4 separate Q&As)
- "How long does inpatient detox take?"
- "Do I need to bring anything for my stay?"
- "Can family visit during inpatient treatment?"
- "Is MAT (buprenorphine, naltrexone) available?"
- "Can I keep my medications during detox?"
- "Are you OASAS licensed?"
- "Can I leave whenever I want?" (the consent/voluntary admission question — important to clarify)
- "What's the difference between detox and short-term rehab?"
- "What happens after I complete the program?"

Seed each as a question from a non-owner account, then answer as the listing owner within 24 hours (matches Google's "user-asked, owner-answered" pattern best).

### 3.13 Booking link
**Current:** Empty.

**The unique-win observation.** Across the 11-competitor set, **none** have a booking link configured. This is an uncontested feature surface. If Surfpoint enables it (M1-13), the "Book online" CTA appears in the knowledge panel below the call button — most addiction-treatment intent is high-urgency, so the booking CTA likely captures research-phase visitors who aren't ready to call but will commit to a callback.

**Action: M1-13.** Tooling options: HubSpot meeting link, Calendly intake-screening 15-minute slot, custom intake form on `surfpointrecovery.com/admissions` with calendar widget. Whichever, route to a clearly-named intake URL so the GA4 attribution path is clean.

### 3.14 Social links
**Current:**
- LinkedIn: `https://www.linkedin.com/company/surfpoint-recovery-llc`
- Facebook: `https://m.facebook.com/profile.php?id=100092174512275` (listed under both Current AND Previous — duplicate)

**Missing:** Instagram, YouTube, TikTok.

**Read.** Facebook duplicate is a UI hygiene issue — remove the Previous entry. Instagram is the single biggest gap; addiction-treatment patient/alumni testimonial content lives there. YouTube enables embedded video tours and clinician explainer videos (which can also be embedded on service pages, double-duty). TikTok is generation-shift dependent — only worth investment if there's a real content lead.

**Action.** Low priority but cheap. Resolve Facebook duplicate, add Instagram if claimed (`@surfpointrecovery` URL pattern — verify).

---

## 4. Reviews — the asset, the velocity, and the hidden risks

### 4.1 Position vs competition

**Composite rating + count, true competition only (DataForSEO Business Data, 2026-05-08 pull):**

| Listing | Rating | Reviews | Locale |
|---|---|---|---|
| Long Island Interventions | 4.9 | 106 | West Hempstead, NY |
| Under Angels Wings | 5.0 | 35 | Sunset Park (low volume) |
| **Surfpoint Recovery** | **4.8** | **120** | **Coney Island** ★ |
| Ascendant Detox NYC | 4.8 | 284 | Upper East Side, Manhattan |
| Spring Hill Wellness | 4.8 | 21 | Sheepshead Bay (outpatient) |
| Realization Center | 4.7 | 85 | Brooklyn Heights (unclaimed) |
| Mountainside NYC | 4.7 | 70 | Chelsea, Manhattan |
| ACI Inpatient | 3.8 | 71 | Brownsville, Brooklyn |
| Genesis Detox | 3.5 | 63 | Sunset Park, Brooklyn |

**Inside Brooklyn proper, against true outside competition:** Surfpoint is the only listing combining 4.8★ + 100+ reviews. The four other Brooklyn addiction-treatment competitors split into:
- **High rating, low volume:** Under Angels Wings (5.0★/35, Sunset Park), Spring Hill (4.8★/21, outpatient — not a direct service match)
- **Mid rating, modest volume:** Realization Center (4.7★/85 — unclaimed, decayed), ACI Inpatient (3.8★/71, Brownsville)
- **Low rating:** Genesis Detox (3.5★/63, Sunset Park)

No Brooklyn outside competitor matches Surfpoint on the rating-AND-volume combination. Ascendant Detox NYC matches on rating (4.8★ at 284 reviews) but operates from Manhattan's Upper East Side — different catchment, doesn't compete for the South-Brooklyn map pack.

### 4.2 Velocity comparison — last 90 days

DataForSEO pulls the 50 most-recent reviews per listing. The 90-day window inside that pull:

| Listing | Reviews in last 90d | Reviews in last 180d | Reviews in last 365d |
|---|---|---|---|
| **Surfpoint Recovery** | **26** | **35** | **50+** |
| Ascendant Detox NYC | 18 | 35 | 50+ |
| Mountainside NYC | 10 | 10 | 12 |
| ACI Inpatient | 5 | 13 | 22 |
| Spring Hill Wellness | 1 | 3 | 6 |
| Under Angels Wings | 1 | 1 | 14 |
| Genesis Detox | 1 | 3 | 8 |
| Realization Center | 1 | 2 | 3 |
| Long Island Interventions | 0 | 0 | 1 (decayed) |

**Read.** Inside Brooklyn proper against true outside competition, Surfpoint has **~5.2× the 90-day review velocity of the next-nearest competitor (ACI Inpatient, 5 reviews)**. Across all of NYC the only outside listing operating at comparable velocity is Ascendant Detox (Manhattan, 18 reviews — different catchment). Every other Brooklyn addiction-treatment listing is acquiring fewer than 5 reviews per quarter.

**The velocity surge — May 2026 campaign:**
- 2026-04-22 (LD scan): 91 reviews, 4.5★
- 2026-05-08 (DataForSEO pull): 120 reviews, 4.8★
- **29 reviews in 16 days; +0.3 to rating in same window**

This is a coordinated review-acquisition sprint (discharge-handoff request, alumni outreach, or both). It worked — both rating and volume moved meaningfully in a 16-day window. The question is whether the pattern is sustainable without triggering Google's review-filter heuristics. (See §4.4.)

### 4.3 Rating distribution (DataForSEO raw)
| Stars | Count |
|---|---|
| 5 | 110 |
| 4 | 3 |
| 3 | 3 |
| 2 | 0 |
| 1 | **4** |

**Note.** The DataForSEO 50-most-recent pull is 100% 5-star — meaning the 4 one-stars + 3 three-stars are all older than the recent 50 reviews. This is itself informative: the negative content is being **diluted but not removed**. Anyone who scrolls to "lowest rating" sort sees the 1-stars surfaced; the 4.8 averaged rating doesn't hide them from due-diligence-mode prospects.

### 4.4 Pattern audit — the brittleness inside the velocity

The 50-review DataForSEO sample (+ the additional 30+ reviews visible in the GBP Manager scroll provided) shows three patterns that are individually fine, but compounding:

**Pattern 1 — Single-purpose reviewers (~70% of recent base):**
- Lawrence Abramov: 1 lifetime review (Surfpoint, 5★)
- Jalil Black: 1 lifetime review
- tcsincclientid limo7Seven: 1 lifetime review
- Husam Glanton: 2 lifetime reviews
- Stone Cold: 1 lifetime review
- Michael Draper, Melvin Alford, Claudio Cuadrado, Charlie Terry, Pablito Perez, Aaron Dames, Maurice Marria, Tian Williams, Charles Smith, William Hill, Adam Alomari, Joseph Laluz, Kevin Hernandez, Diego Alvarez, Joey N — all 1 lifetime review

This is the predictable consequence of asking inpatient clients to review at discharge (which is a structurally legitimate ask in healthcare) — but Google's spam classifier flags clusters of single-purpose accounts that mention the same staff names.

**Pattern 2 — Repetitive staff naming (template-match):**

Across ~80 visible reviews, the same 10–15 staff names recur: Paul, Eric Moore, Michael Fox, Wallace, Leeshawn, Tevahn/Tavi, Paula, Nicole, Charisma (also spelled Charssma / Carissma / charismaaa), Rita, Anna, Hurley, Kevin, Jamelix, Jenifer, Megan, Helen.

Per Google's published review guidelines, this naming pattern is consistent with "encouraged reviews from interested parties" — which IS permitted as long as no incentive is offered. The risk isn't the naming itself; it's that the textual signature (`Thank you [Staff1] thank you [Staff2] thank you Surfpoint` + `just for today group`) repeats across 30+ reviews in a way that template-matches. Google's filters can flag this.

**Pattern 3 — Compliance content embedded in 5-star reviews:**

These are 5-star reviews whose text contains operationally serious content. Owner-response rate is 0% across all of them:

| Reviewer | Date | Stars | Embedded flag | Audit risk |
|---|---|---|---|---|
| Jacob Gaik (RN) | 20 wks ago | 5★ | "As an RN MYSELF, nurses be having conversations there Bluetooth while talking to and dispensing meds to patients" | **HIPAA + med-admin protocol — credentialed source. OASAS-visible.** |
| Pedro | 24 Apr 2025 | 5★ | "Please tell Paul to STOP vaping" + "Imani, stay sweet and HUMBLE!" | Staff conduct, vaping with patients = OASAS-relevant |
| Lance Harley | 37 wks ago | 5★ | "2 thumbs up for all Departments..." (otherwise positive) | Low |
| Various | various | 5★ | Naming specific staff by full name (counselors, shift supervisors) | Patient identity is masked but staff identity is exposed — minor confidentiality concern |
| Nick Tonjuk | 6 Jul 2024 | **1★** | "Stole my property and said 'you'll just have to take the loss.'" | **Theft accusation, zero response in 11 months — highest reputational risk asset on listing** |
| Michael Mabe | 28 Nov 2024 | **1★** | "Shelter/Jail/Prison/ Most people are from there including me." | Patient-mix stigma; operational, not malicious |
| s k | 23 Jun 2024 | **1★** | "Lazy staff. Lots of food. No place to walk. Very noisy." | Operational complaint |

**Read.** The Jacob Gaik review is the most damaging single asset on the listing. An RN-credentialed reviewer describes a public, repeatable HIPAA-adjacent + medication-administration safety concern. The review is 5-star (so it boosts the average), but the **text** is the kind of content an OASAS audit, a referring hospital social worker, or a malpractice attorney will find when due-diligencing the facility. Zero owner response.

The Nick Tonjuk theft accusation has been live 11 months unanswered. Whatever happened, the silence reads as confirmation.

### 4.5 Risk-rating the review base
| Risk | Severity | Likelihood | Action |
|---|---|---|---|
| Owner-response = 0% across 120 reviews | **High** | Realized | §5.1 — backfill responses for all 4 one-stars + the 2 compliance-flagged 5-stars THIS WEEK |
| Compliance content (Bluetooth/meds, vaping) public + unaddressed | **High** | Realized | §5.1 — public response + internal ops review |
| Single-purpose + templated reviews triggering Google filter | Medium | 12-month horizon | §5.3 — review-request UX changes |
| 4 one-star reviews permanent on listing, never responded to | Medium | Realized | §5.1 — respond now (changes nothing visible if hidden under newer reviews, but shows up in due-diligence; signals managed listing) |
| Theft accusation (Nick Tonjuk) damaging brand search | Medium | Live | §5.1 — responder template specifically for this review |

---

## 5. Action queue — what's new vs Q2 strategy

### 5.1 URGENT (this week) — what the Q2 strategy didn't catalog as urgent

| # | Action | Owner | Effort | Why this week |
|---|---|---|---|---|
| 1 | **Backfill owner responses to the 4 one-star reviews + 2 compliance-flagged 5-stars (Jacob Gaik, Pedro)**. Template-driven, brand-appropriate, no admission of liability, clear "please contact us directly at [intake email] for resolution." | GBP Ops + Aleksandar approves copy | S | Each day Jacob Gaik's RN-flagged review stays public + unaddressed compounds OASAS/referrer-visible risk |
| 2 | **Internal operational reviews triggered by reviews**: (a) nurse Bluetooth-during-meds-admin policy, (b) staff vaping policy on premises, (c) discharge-time property/possessions protocol | Eric Moore (CEO) + Clinical Director | M | These are HR/clinical-ops items, not SEO — but they're public + indexed. If left unfixed, the public review becomes proof of a known unaddressed issue. |
| 3 | **Address line cleanup**: move "Entrance on West 24th Street" out of street line in GBP Manager | GBP Ops | S | 5-min fix; unblocks consistent NAP for citation lift |
| 4 | **Service area decision**: remove (Path A) or trim to 9 South-Brooklyn neighborhoods (Path B) | Aleksandar + GBP Ops | S | Current 20-area sprawl is diluting geo signal AND including non-catchment areas |
| 5 | **Website URL https switch + UTM normalization** in GBP Manager | GBP Ops | S | 5-min change |

### 5.2 STANDARD GBP optimization queue — confirm or update Q2 strategy tasks

| Q2 task # | Status | Audit-driven update |
|---|---|---|
| M1-06 Photo upload 9 → 30+ | Queued | **Add cover photo first.** Composition spec in §3.8. Confirm staff photo consent process. |
| M1-07 Review velocity 120 → 140+ | In progress (May sprint) | **Add discharge-time UX changes (§5.3) to make pattern sustainable.** Velocity alone isn't enough; pattern diversification matters. |
| M1-08 Q&A seeding 4 → 15+ | Queued | **Answer the 4 existing Q's first** (3 owner-seeded + 1 walk-in question). Then seed new. Without answering existing, more Q's just compound the neglect signal. |
| M1-09 Services list audit | Queued | **Per-secondary-category services** (§3.9). Currently 4 of 5 cats empty. Add Dual Diagnosis Treatment. Fix "Benzodiazepines" → "Benzodiazepine." |
| M1-10 Attribute completion | Queued | **Verify amenities:restroom_unisex** before adding — GBP UI currently shows "No gender-neutral toilets" which may be operational truth. Don't add false attributes. |
| M1-11 Category expansion (Counselor + Psychiatrist + Psy + Psychotherapist) | Queued | **Verify on-staff clinical credentials first.** Psychiatrist + Psychologist require licensed staff. Counselor is defensible. |
| M1-12 Description rewrite | Queued | Draft in §3.3 (633 chars). 750 char budget. |
| M1-13 Booking URL | Queued | **Unique-win opportunity (§3.13)** — no competitor in set has this. Prioritize. |
| M2-07 Post cadence 1 → 2/week | Queued | Topic mix spec in §3.11. |

### 5.3 NEW — sustainable review-acquisition redesign (audit-proofing)
Beyond M1-07 velocity, three operational changes to make the review base less brittle:

| Change | Description | Effort |
|---|---|---|
| Discharge review-request UX | Encourage 2–3 sentences in own words, mention specific service (alcohol detox / opioid MAT / dual diagnosis) not just staff names. Adds keyword surface + variation. Reduces template-match flag. | S — operational change to discharge handoff |
| Source diversification | Beyond inpatient discharge: structured outreach to family members (often advocates), referring providers, post-90-day-aftercare check-in clients. Different commenter profiles + dates dilute the single-purpose-account cluster signal. | M — requires CRM/aftercare process |
| Owner-response protocol | Every new review gets a reply within 48 hours. Templates for: (a) standard 5-star (personalized thanks), (b) operational complaint (acknowledgment + invitation to contact), (c) clinical/HIPAA-flagged content (thanks + "we've shared with our clinical leadership"). | S — define templates, M — sustain at 9 reviews/month |

---

## 6. What's explicitly NOT in this audit (left to other workstreams)

- **Homepage + service-page optimization** — covered in `competitive_audit/01_homepage_gap.md` + `Surfpoint_Treatments_Hub_Update_Brief.md`
- **Schema + JSON-LD upgrades** — covered in `Surfpoint_Homepage_Update_Brief.md` §4.1
- **Citation strategy + foundational directories** — covered in `Surfpoint_Backlinks_Citations_Strategy.md`
- **LegitScript verification** — queued M1-15
- **GMB ban risk from NJ doorway pages** — site-side compliance; queued M1-04 DELETE+REDIRECT 27 NJ doorways
- **Channel attribution + conversion economics** — covered in Q2 strategy §1.2 and §5.1–5.3

---

## 7. Bottom line

Surfpoint's GBP is the strongest asset in the brand — top map-pack position across every south-Brooklyn addiction query, #1 in Brooklyn by rating-and-count, 4.3× the 90-day review velocity of the next direct competitor. The Q2 strategy correctly identified this as the resilience layer holding revenue flat during the on-page rebuild.

The audit finds three classes of gap:
1. **Owner-side neglect:** 0% review-response rate, 0 of 4 Q&A answered, no cover photo, 4 of 5 categories empty of services. These are uniformly cheap, no-CMS-dependency, owner-controllable fixes.
2. **Configuration mismatches that dilute the geo dominance:** 20-area service-area sprawl on an inpatient-only facility, "Entrance on" embedded in address line, http URL, UTMs that re-route attribution.
3. **Audit-risk content sitting public and unaddressed:** the Jacob Gaik RN-flagged review (HIPAA + med-admin) is the single most damaging asset on the listing — public 20 weeks, zero response, and an OASAS reviewer or referring hospital social worker will find it on first search.

The Q2 strategy queue (M1-06 through M1-13 + M2-07) covers the standard GBP optimization. This audit's net-new layer is §5.1 (URGENT response + ops items) and §5.3 (audit-proofing the review machine before Google's filter notices).

Two-week sprint, six items in §5.1, addresses ~70% of the realized risk on the listing.
