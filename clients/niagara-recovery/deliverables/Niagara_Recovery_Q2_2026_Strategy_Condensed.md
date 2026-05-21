# Niagara Recovery — Q2 2026 v2 Strategy (Condensed)

**Prepared 2026-05-19 by Aleksandar, Head of Search Intelligence at HQDM**
**For:** Niagara Recovery (2600 William St, Newfane NY 14108 — Tier 1 Recovery account)
**Supersedes:** v1 (2026-05-14). v1 archived for reference; v2 reflects Local Dominator delta + GBP intake + fresh live-fetch audit.

---

## TL;DR

The Newfane engine works. The Local Dominator 158-cell grid (2026-04-30 scan) shows Niagara Recovery dominating 100% of cells 0-15mi from the pin at average rank #1-2 across every priority addiction-treatment keyword. The GBP at 4.3★/47 reviews ranks #1-2 in every neighborhood from Olcott through Lockport through Ransomville.

**Important correction to v1 framing:** v1 said Niagara was "0/50 outside Newfane" — that was a DataForSEO-at-city-center artifact. The actual LD grid covers ~36mi × 36mi and shows Niagara at 100% coverage / top-3 rank across most of Niagara County + Lockport + the western edge of Erie County. The real geographic gap is **Buffalo proper (0/7 cells)** + scattered weakness in Amherst / Tonawanda / Cheektowaga (37-50% coverage).

The engine stalls at three places, all quantified:

1. **Brand-conflict bleed** — 41% of branded GBP-search demand still routes to "Recovery Center of Niagara" (the old entity name) despite the new "Niagara Recovery" GBP. The website's title-of-record is split across the two names. (363 GBP searches Dec-May for "recovery center of niagara" vs 528 for "niagara recovery" variants.)
2. **Non-branded discovery collapse** — GSC last-30d shows 47 non-branded clicks vs 3,967/365d historical baseline, an 87% extrapolated decline. The 670-post blog continues publishing (22 new + 9 new doorways in the last 5 weeks) without commercial-intent focus or topical-authority discipline.
3. **Geographic break-out gap** — GBP service area is at the 20-entry cap, with 13 entries sitting on just 3 ZIPs (7 on 14094 Lockport, 3 on 14008 Appleton, 3 on 14172 Wilson) — of which 11 are redundant micros that consolidate to 2 keeps. Together they block entries for 8 winnable WNY anchor towns where the LD data shows Niagara already at 100% coverage and top-3 rank.

Q2 v2 is five pushes, M1-M3. The unlock is on-page + GBP discipline, not budget. Existing off-page rotation continues at current cadence.

---

## Push 1 — Brand canonical sitewide (M1, P0)

Fix the entity. One brand name across title, footer, schema, GBP. Replace "Recovery Center of Niagara" on 5 core pages (about / admissions / contact / treatments / areas-served). Update LocalBusiness JSON-LD to drop the WordPress-content image debris that's still referenced despite the Webflow rebuild. Kill the `[phone number]` placeholder that's literally rendered on two service pages. Fix the Buffalo location page's "facility in Buffalo, NY 14215" fabrication.

This is the largest single discoverable lever in the quarter — directly recovers the 41% bleed.

→ See `Niagara_Recovery_Push1_Brand_Canonical.md` for full spec, `Niagara_Recovery_Pages_Action_List.csv` for the 9 specific page changes.

---

## Push 2 — GBP service-area swap + photo blitz + Posts cadence (M1, P0)

Drop 11 redundant micros from the GBP service area. Add 9 anchor towns where Niagara already ranks at top-3: Lockport / Clarence (40 cells in grid — the single largest break-out lever) / Cambria / Pendleton / Sanborn / Wheatfield / Youngstown / Lewiston / North Tonawanda. Reserve 2 slots for Q3 testing.

Photo blitz: 6 owner-photos → 25 with category mix (the current 6 is the lowest of 12 WNY competitor GBPs scanned). Posts: weekly cadence × 12 cumulative over M1-M3. Services tab refinement to add explicit Suboxone / MAT entries.

→ See `Niagara_Recovery_Push2_GBP_Service_Area_Swap.md`, `Niagara_Recovery_GBP_Service_Area_Swap.csv` (the swap proposal with per-entry scoring), `Niagara_Recovery_GBP_Action_List.csv`.

---

## Push 3 — Service page consolidation + schema floor + rewrites (M1-M2, P0/P1)

Today: 10 service URLs (5 base + 5 `-in-newfane-ny` duplicates), 3 clicks / 365d combined, zero schema, two pages with literal placeholder strings in body copy.

Target: 5 canonical service URLs. MedicalBusiness + Service schema on all 5. Three deep rewrites:
- **SP-01 alcohol-detox** (790/mo Bing volume — top single-modality demand) — M1
- **SP-02 drug-detox** (6,600/mo Google Ads volume — largest captured) — M2
- **SP-03 Suboxone / MAT** (top GBP-search non-brand demand at 62 searches Dec-May; +1,900/mo "suboxone doctor" — NEW URL build) — M2

→ See `Niagara_Recovery_Push3_Service_Pages.md`, `Niagara_Recovery_Service_Pages_Plan.csv`, `Niagara_Recovery_Schema_Plan.csv`.

---

## Push 4 — Location page architecture (M1-M3, P1)

Today: Williamsville (986w) + Cheektowaga (679w) have real content but no schema. Tonawanda + N. Tonawanda are 404 (matching the Buffalo-metro Maps black hole). Lockport / NF / Amherst are 276-278w thin doorways. ~60 doorway URLs in the `/locations/best-/most-trusted-/dependable-/premium-/renowned-/famous-/leading-` template clutter the inventory.

Target:
- **UPGRADE** Williamsville + Cheektowaga (add schema + ratings + NAP + service links)
- **BUILD** Tonawanda + N. Tonawanda + Lewiston + Youngstown (4 new ~800-1000w pages)
- **UPGRADE** Lockport + NF + Amherst from 276-278w → 1000w
- **REDIRECT** ~60 doorway URLs via small-level 301s to nearest substantive anchor city page (per HQDM fill-not-kill policy — never bulk-NOINDEX)

→ See `Niagara_Recovery_Push4_Location_Page_Architecture.md`, `Niagara_Recovery_Pages_Action_List.csv` rows PA-18 to PA-27, `Niagara_Recovery_Cannibal_Cleanup_Plan.csv` LP-10 mapping.

---

## Push 5 — Content cleanup + cannibal consolidation (M1-M3, P1 + 1 P0 owner ask)

The 670-post blog at 96% of indexed impressions is diluting topical authority toward off-vertical content (porn-addiction 350K imp / vape-by-country / social-media addiction) and Newfane-only modifiers, not WNY break-out terrain. Non-branded discovery has collapsed 87% even as the production firehose continues (22 new PAA blogs + 9 new doorway pages shipped in the last 5 weeks).

Three moves:
- **CC-01:** NOINDEX/410 the ~300 off-vertical high-impression posts (M2)
- **CC-02:** Refresh 5 already-converting blog assets (~2,400 clicks/365d combined) with intake CTAs + Article schema (M1)
- **CC-03:** **Owner Ask — pause the suburb-doorway production firehose for Q2** (M1, P0). This is the upstream policy change. Without it, Push 4 LP-10 doorway redirects become a perpetual cleanup cycle.

Plus CC-04 sitewide internal-linking pass on the surviving KEEP cohort (M3).

→ See `Niagara_Recovery_Push5_Content_Cleanup.md`, `Niagara_Recovery_Cannibal_Cleanup_Plan.csv`, `Niagara_Recovery_Owner_Conversation_Items.md` Item 4.

---

## Off-page rotation + reporting (continuing cadence — no new Push)

Existing rotation continues: SEO Neo monthly, AI Articles 4/mo (entity-anchored on WNY break-out anchors), Driving Direction Pins 4/mo (Buffalo / Williamsville / N. Tonawanda / Amherst → Newfane in M1, rotating through Lewiston / Youngstown / Clarence in M3), Citations Tier 1/2/3 batches, GBP Posts weekly.

Reporting: GA4 OAuth now works (192 conv / 794 pages / 365d baseline). Set up Local Dominator recurring scan (6 anchor coords × 8 priority kws weekly). M3 close-out scorecard drives Q3 strategy refresh.

→ See `Niagara_Recovery_OffPage_Stack_Template.csv`, `Niagara_Recovery_Reporting_Master_Template.csv`, `Niagara_Recovery_Driving_Direction_Pins.csv`.

---

## Tasks: 41 rows in `Niagara_Recovery_Q2_2026_Tasks.csv`

Every task row's `document_reference` column points to a specific working sheet. No "see strategy doc" rows. The PM team executes from the CSVs.

| Pillar | Tasks | Owner |
|---|---|---|
| On-Page Brand Canonical | BC-01, BC-02, BC-03, BC-04 | Aleksa + Dev |
| Local-GBP | GBP-04, GBP-05, GBP-06, GBP-POST_M1/M2/M3 | Miroslava + AM + Owner |
| Site Architecture (Push 3) | CN-01, SCHEMA-02, SP-01, SP-02, SP-03 | Aleksa + Marija + Dev |
| Location Pages (Push 4) | LP-01 to LP-10 | Aleksa + Marija + Dev |
| Content (Push 5) | CC-01, CC-02, CC-03, CC-04 | Marija + Owner |
| Off-Page rotation | SEO-NEO_M1/M2/M3, AI-ART_M1/M2/M3, DD-PIN_M1/M2/M3, CIT_M1/M2/M3 | Julce + Miroslava |
| Reporting | REP-01, REP-02 | Marija |

---

## M3 KPI targets

- **LD top-3% per kw:** alcohol rehab ≥75 · alcohol detox near me ≥75 · addiction rehab ≥65 · addiction rehab near me ≥65 · addiction treatment center ≥60 (recover the −8.3pt slip)
- **GSC non-branded clicks 30d window:** 47 → 200+ (4× rebuild)
- **GBP photos:** 6 → 25 (category-mix); reviews 47 → 60 (+13 net via intake handoff); service area = 9 KEEPs + 9 ADDs + 2 reserve
- **Service-page combined clicks:** 3/365d → 50/M3 (post-consolidation 5 base URLs)
- **/locations/* combined clicks:** 16/365d → 80/M3 (post Push 4)
- **Branded CTR:** hold ≥15% on 1,299/30d impression baseline

---

## Owner asks (one short call)

5 items bundled in `Niagara_Recovery_Owner_Conversation_Items.md`:

1. Approve "Niagara Recovery" as the canonical brand for sitewide title/H1/schema
2. Decide SAB vs storefront posture for GBP (recommend storefront — 24/7 inpatient supports it)
3. Confirm CARF / LegitScript / SAMHSA / OASAS listings for trust-page deployment + verify Suboxone/MAT clinical offering (gates SP-03 build)
4. **Approve pause on suburb-doorway production pipeline (CC-03)** — the highest-leverage policy change in the quarter
5. Press Release task stuck since 2025-10-11 (7 months) — approve to ship or close out

---

## Spend posture

No budget increase. Existing off-page rotation continues at current cadence. The unlock is on-page execution + GBP discipline — both inside HQDM scope without owner-side line-item spend.

Estimated agency hours: Push 1 ~8 · Push 2 ~12.5 · Push 3 ~34 · Push 4 ~51 · Push 5 ~22 · Off-page/reporting at existing cadence. Total ~128 hours over M1-M3 plus 1 owner call.

---

## Sequencing & dependencies

- **Push 1 BC-04 (Buffalo fabrication fix)** MUST ship before **Push 4 LP-01/LP-02 upgrades** (Williamsville + Cheektowaga reference the Buffalo page in their cross-links)
- **Push 1 BC-03 (placeholder fix)** MUST ship before **Push 3 CN-01** (alcohol-detox dupe URL is currently indexable; placeholder must be fixed on the URL before it's 301'd)
- **Push 3 CN-01 (dupe 301s)** MUST ship with **Push 3 internal-link updates** (rows IL-03 to IL-07) deployed BEFORE the redirects to avoid transitive-redirect issues
- **Push 4 LP-07 (Lockport upgrade)** ships in M2 BEFORE **Push 4 LP-10 (doorway redirects)** later in M2 — Lockport-area doorway redirects target the upgraded Lockport page
- **Push 5 CC-03 owner ask** ships in M1; without it, downstream production capacity for Push 4 LP-03/04/05/06 builds is constrained

---

## Companion docs

- `Niagara_Recovery_Strategic_Diagnosis_2026-05-19.pdf` — 3-page executive headline
- `Niagara_Recovery_Q2_2026_Tasks.csv` — 41 Asana-import rows
- `Niagara_Recovery_Pages_Action_List.csv` — per-page actions
- `Niagara_Recovery_Internal_Linking_Map.csv` — per-link FROM→TO changes
- `Niagara_Recovery_GBP_Action_List.csv` — per-field GBP changes
- `Niagara_Recovery_GBP_Service_Area_Swap.csv` — current + candidate scoring for SA swap
- `Niagara_Recovery_Driving_Direction_Pins.csv` — 12 DD pins M1-M3
- `Niagara_Recovery_OffPage_Stack_Template.csv` — 5 tabs (SEO Neo / AI Articles / DD / GBP Posts / Citations)
- `Niagara_Recovery_Reporting_Master_Template.csv` — baseline + M1/M2/M3 actuals
- 5 Push briefs (Push1_Brand_Canonical · Push2_GBP_Service_Area_Swap · Push3_Service_Pages · Push4_Location_Page_Architecture · Push5_Content_Cleanup)
- `Niagara_Recovery_Owner_Conversation_Items.md` — 5-item bundle for one short call
- v1 reference files (preserved): `Niagara_Recovery_Q2_2026_Custom_Strategy.md` (2026-05-14), `niagara_recovery_3month_plan.md` (2026-05-14), `Niagara_Recovery_3Month_Tasks.csv` (2026-05-14)
