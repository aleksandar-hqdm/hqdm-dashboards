# Push 2 — GBP Service-Area Swap + Photo Blitz + Posts Cadence

**Q2 2026 v2 · Niagara Recovery · 2026-05-19**
**Pillar:** Local-GBP · **Month:** M1 (with monthly Posts cadence M1/M2/M3) · **Owner:** Miroslava + AM · **Priority:** P0

---

## The diagnosis

The GBP service area is at the 20-entry cap. **13 of those 20 entries sit on just 3 ZIPs — and 11 of those 13 are redundant micros that consolidate to 2 KEEPs:**

| ZIP | Entries on this ZIP | KEEP | DROP |
|---|---|---|---|
| 14094 (Lockport) | Ridgewood / North Ridge / Highland Park / Cambria Center / Hickory Corners / Warrens Corners / Wrights Corners | 0 (all 7 are non-canonical micros; Lockport itself gets ADDED) | **7** |
| 14008 (Appleton) | Appleton / West Somerset / North Hartland | 1 (Appleton) | **2** |
| 14172 (Wilson) | Wilson / South Wilson / Hopkins Beach | 1 (Wilson) | **2** |
| Other 7 unique ZIPs | Newfane (14108) / Olcott / Burt / Barker / Hartland / Ransomville / Johnson Creek | 7 (all KEEP) | 0 |
| **Total** | **20 entries** | **9 KEEP** | **11 DROP** |

Meanwhile, the Local Dominator 158-cell grid (13×13, ~36mi × 36mi span centered north of Lockport) shows Niagara Recovery dominating 8 anchor towns where **no service-area entry currently exists.** From the anchor-town analysis `clients/niagararecovery/exports/localdominator/niagara_anchor_town_summary.csv`:

| Candidate anchor | Cells in grid | Coverage | Avg rank | Status |
|---|---|---|---|---|
| Lockport | 13 | 100% | 1.4 | Not in SA — 7 micros on its ZIP take the slots |
| Clarence | 40 | 100% | 3.4 | Not in SA — biggest break-out lever |
| Cambria | 4 | 100% | 1.2 | Not in SA |
| Pendleton | 6 | 100% | 2.1 | Not in SA |
| Sanborn | 2 | 100% | 3.5 | Not in SA |
| Wheatfield | 3 | 100% | 6.0 | Not in SA |
| Youngstown | 2 | 100% | 1.3 | Not in SA |
| Lewiston | 2 | 100% | 4.2 | Not in SA |
| North Tonawanda | 2 | 90% | 9.7 | Not in SA — Buffalo-metro break-out |

Niagara is already ranking #1-2 in nearly every cell at every one of these anchors, but Google's entity graph has no service-area declaration to anchor the relationship. The 11 micros on 3 ZIPs are using cap-space to declare neighborhoods of towns Niagara already covers by proximity to the pin.

## The single deliverable

Consolidate the service-area entries to **18 of 20 cap-space** (leaving 2 buffer slots for Q3 testing). Drop the 11 redundant micros. Add the 9 anchor towns above. Photo blitz to 25+. Weekly GBP Posts cadence keyed to addiction-clean keywords.

## Specific changes

### 1. Service-area swap (GBP-04)

Open `Niagara_Recovery_GBP_Service_Area_Swap.csv`. Two sections: CURRENT_SA (20 rows) and CANDIDATE (16 rows).

**Drops (11 entries):**
- 7 micros on ZIP 14094: Ridgewood, North Ridge, Highland Park, Cambria Center, Hickory Corners, Warrens Corners, Wrights Corners
- 2 dupes on ZIP 14008: West Somerset, North Hartland (keep Appleton)
- 2 dupes on ZIP 14172: South Wilson, Hopkins Beach (keep Wilson)

**Keeps (9 entries):**
Newfane (14108) · Burt · Olcott · Appleton · Wilson · Barker · Hartland · Ransomville · Johnson Creek

**Adds (9 entries) — in priority order:**
1. Lockport, NY (14094) — 13 cells, 100%/r1.4
2. Clarence, NY (14031) — 40 cells, 100%/r3.4 (largest grid representation)
3. Cambria, NY (14094) — 4 cells, 100%/r1.2
4. Pendleton, NY (14094) — 6 cells, 100%/r2.1
5. Sanborn, NY (14132) — 2 cells, 100%/r3.5
6. Wheatfield, NY (14304) — 3 cells, 100%/r6.0
7. Youngstown, NY (14174) — 2 cells, 100%/r1.3
8. Lewiston, NY (14092) — 2 cells, 100%/r4.2
9. North Tonawanda, NY (14120) — 2 cells, 90%/r9.7

**Reserve (2 slots):** Hold for Q3. Candidates pending Push 4 location-page upgrade lifts: Niagara Falls, Amherst, Williamsville. Re-evaluate at REP-02 M3 close-out.

**SKIP (do not add this quarter):**
- Buffalo proper — 0/7 cells coverage. Service-area entry alone won't fix this; Push 4 location-page upgrade + Push 6 Driving Direction Pins from Buffalo are the levers.
- Williamsville — LP-01 UPGRADE Push 4 first, then evaluate Q3.
- Niagara Falls — LP-08 UPGRADE Push 4 Month 3, then evaluate Q3.
- Amherst — LP-09 UPGRADE Q3 priority.

### 2. Photo blitz (GBP-05) — 6 → 25+

Current photo count: **6 owner-photos** — the lowest of 12 WNY competitor GBPs scanned in the v1 audit. This is a quantified Maps-ranking lever.

Owner-side upload, staggered 5 photos/week over 4 weeks for recency-signal:

| Category | Count | Examples |
|---|---|---|
| Facility | 5 | Exterior + lobby + nurses station + bedroom + therapy room |
| Staff | 5 | Clinical director + nursing team + therapist + admissions coordinator + medical director |
| Treatment | 5 | Group therapy room + individual counseling space + DBT setup + medication station + intake-paperwork desk |
| Outdoor / Grounds | 5 | Property entrance + walking path + outdoor reflection area + parking + signage with NAP |
| Newfane-specific | 5 | Newfane sign + 2600 William St marker + community context + local landmark + facility address closeup |

Tag each photo with its category in GBP. Avoid stock photography. Owner approval required for any staff-faces.

### 3. Posts cadence (GBP-POST_M1/M2/M3) — weekly × 4/month = 12 cumulative

Current posts cadence: **1 recent post** (the "What to Pack for Inpatient Rehab Stay in Newfane" post, from May 2026).

Open `Niagara_Recovery_OffPage_Stack_Template.csv` tab `GBP_Posts`. Monthly topic rotation:

**M1 (4 posts):**
1. Brand canonical (post explaining "Niagara Recovery" as canonical name, addressing search results that may show the old brand)
2. Alcohol detox modality (linking to /services/alcohol-detoxification-services post-Push 3 rewrite)
3. Suboxone / MAT program (linking to /services/suboxone-mat-program post-Push 3 build)
4. Newfane facility tour (linking to the upgraded /locations/buffalo or /locations/williamsville to seed Buffalo-metro Maps signal)

**M2 (4 posts):**
1. Drug detox modalities (per-substance breakdown)
2. Benzodiazepines detox program
3. Payor / insurance accepted (Medicaid emphasis — top GBP-search demand "addiction treatment medicaid" 10/mo)
4. Insurance verification CTA

**M3 (4 posts):**
1. Short-term residential program
2. Dialectical Behavioral Therapy
3. WNY break-out (specific outreach to Buffalo / Williamsville / N. Tonawanda residents)
4. Brand-canonical reinforcement (reinforces Push 1)

Topic-density bias toward `place_topics` gap analysis (see Map Pack module spec).

### 4. Services tab refinement (GBP-06)

The GBP currently lists 10 services with descriptions (per intake 2026-05-19):
- Inpatient Detox Center
- Alcohol Abuse Treatment
- Drug Abuse Treatment
- Rehab Center
- Detoxification in Newfane, NY
- Alcohol Detox in Newfane, NY
- Benzodiazepines Detox in Newfane, NY
- Opioid Detox in Newfane, NY
- Short-Term Residential Rehab Program in Newfane, NY
- Dialectical Behavioral Therapy in Newfane, NY

**ADD 2 new services to mirror Push 3 SP-03 build:**
- Suboxone / MAT Program
- Medication-Assisted Recovery

**Refine the 10 existing descriptions** to (a) match post-Push 3 site copy on /services/* pages, (b) mention the modality + intake + payor language explicitly, and (c) stay within 200 chars.

### 5. Reviews push (GBP-07)

Current: 4.3★ / 47 reviews. Target M3: 4.4★ / 60 reviews (+13 net = ~4/month).

Mechanism: intake-handoff text-message flow. At discharge, intake coordinator sends an SMS with the GBP review link. Track conversion rate; target ~10% click-to-review at 40 SMS/month = 4 new reviews/month.

Owner-side: confirm intake-coordinator SMS capability + approve review-request template language.

## Why this is Push 2

1. **Maximum leverage from existing dominance.** Niagara is already at #1-2 in the cells these anchor-town entries would claim. The SA swap declares the entity relationship Google can already see in the cell-rank data. Speed-to-implement matters because the LD scan delta 2/22 → 4/30 shows the addiction-treatment-center top-3 share already slipping 8.3 points — competitors are moving.
2. **No site code required for the SA + photo + post work.** The team can execute Push 2 in parallel with Push 1 on-page work.
3. **Photo + Posts cadence are scoreboard inputs** for the Map Pack module diagnostics (place_topics + photo benchmark per `reference_hqdm_module_map_pack.md`). Fixing them feeds the next reporting cycle.

## Acceptance criteria

- GBP Service Area shows 18 entries: 9 KEEPs + 9 ADDs. 2 reserve slots empty.
- GBP photo gallery has 25+ owner-uploaded photos with category-mix tags (5+ per category).
- 4 GBP Posts published in M1, 4 in M2, 4 in M3 (12 cumulative).
- GBP Services tab has 12 services with refined descriptions; suboxone + MAT explicit.
- 13 net new reviews collected by M3 (intake-handoff flow live).

## Estimated effort

- SA swap: 1 hour (Miroslava)
- Photo blitz coordination: 2 hours (Miroslava + Owner over 4 weeks)
- Services tab refinement: 2 hours (Miroslava)
- Posts authoring: 2 hours/month × 3 = 6 hours total (Miroslava)
- Review-push flow setup: 1.5 hours one-time + ongoing intake-coordinator effort

**Total Push 2 = ~12.5 agency hours over Q2 + owner coordination on photo upload + intake flow.**

## Risk

- SA cap is firm at 20. If Google introduces a different cap or changes service-area logic, revisit. (Low risk — cap has held for 5+ years.)
- Photo blitz requires owner cooperation. The 7-month-stuck Press Release suggests owner approval friction; bundle photo asks with the Push 1 brand-canonical conversation.
- Review-push intake-handoff is client-controlled. Per `feedback_hqdm_client_involvement_filter.md` review work is high-client-involvement; if owner can't execute SMS flow, replace with QR-card-at-discharge fallback.

## Files referenced

- `Niagara_Recovery_GBP_Service_Area_Swap.csv` (the swap analysis with current + candidate scoring)
- `Niagara_Recovery_GBP_Action_List.csv` (rows GA-01 to GA-11)
- `Niagara_Recovery_OffPage_Stack_Template.csv` (tab GBP_Posts M1/M2/M3)
- `Niagara_Recovery_Owner_Conversation_Items.md` (items 2, 3)
- LD data: `clients/niagararecovery/exports/localdominator/niagara_anchor_town_summary.csv`
- LD delta: `clients/niagararecovery/exports/localdominator/niagara_anchor_town_delta.csv`
