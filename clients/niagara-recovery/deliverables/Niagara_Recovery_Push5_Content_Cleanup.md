# Push 5 — Content Cleanup + Cannibal Consolidation

**Q2 2026 v2 · Niagara Recovery · 2026-05-19**
**Pillar:** Content · **Month:** M1 (CC-02 + CC-03) → M2 (CC-01) → M3 (CC-04) · **Owner:** Marija (content lead) + Owner (CC-03 sign-off) · **Priority:** P1 (CC-03 is P0 owner ask)

---

## The diagnosis

The site has **670 blog posts** representing 88% of the 760 indexed URLs and **96% of GSC-recorded impressions**. Yet non-branded organic discovery has collapsed.

**Hard quantification from `clients/niagararecovery/exports/gsc/branded_vs_nonbranded_summary.csv`:**

| Period | Non-branded queries | Non-branded impressions | Non-branded clicks | Non-branded CTR |
|---|---|---|---|---|
| Last 365d | 83,546 unique | 2,340,091 | **3,967** | 0.17% |
| Last 180d | 22,408 unique | 217,732 | 374 | 0.17% |
| Last 90d | 14,775 unique | 85,901 | 148 | 0.17% |
| Last 30d | 7,088 unique | 26,563 | **47** | 0.18% |

Extrapolation: 47 non-branded clicks / 30d = ~570/year. The historical 365d baseline is 3,967. **The collapse is ~85-87%.** CTR has flat-lined at 0.17-0.18% — the engine is no longer converting non-branded impressions into clicks even though impression volume is holding (2.3M/365d).

**Meanwhile, the production firehose has not slowed:**

From Asana 5-week window 2026-04-15 → 2026-05-18 (`mcp__claude_ai_Asana__search_tasks` against project 1207449565310463):
- 22 PAA-driven blog posts shipped (all Newfane-modified topics)
- 9 suburb-doorway pages shipped (Millville / Eagle Harbor / Abbott McKinley / Cowlesville / Marilla / Blossom / Attica / E. Oakville / E. Pembroke — all using the same `/locations/<adjective>-<modality>-in-<town>-ny` doorway template that v1 said to consolidate)
- 3 batches of "Suburb Pages x 3" content-ordering pipeline still queued in M2 (Renowned / Famous / Leading template variants)

**The strategic problem:** The blog is concentrated on (a) Newfane-only modifiers (reinforcing already-dominant zone) and (b) off-vertical / off-topic content (porn-addiction 350K imp / vape-by-country / social-media addiction — surfaced in v1 audit). Neither cohort drives commercial intent for the addiction-treatment business in the WNY break-out zone. The blog is in a topical-authority sense diluting toward content categories that don't share buyers.

## The single deliverable

Three discrete moves:
1. **NOINDEX/410 ~300 off-vertical high-impression posts** (CC-01)
2. **Refresh 5 already-converting blog assets with intake CTAs** (CC-02) — these earn ~2,400 clicks combined / 365d but have no schema or CTA
3. **Pause the suburb-doorway production firehose** (CC-03 — Owner Ask)

Plus a sitewide internal-linking pass on the remaining KEEP cohort (CC-04, M3).

## Specific changes

### 1. CC-01 NOINDEX/410 off-vertical cohort (M2)

Open `Niagara_Recovery_Cannibal_Cleanup_Plan.csv` filter `task_id=CC-01`. The ~300 rows are the off-vertical high-impression cohort identified in v1.

Decision criteria per `feedback_blog_topical_relevance.md`:
- **KEEP** = on-topic addiction-treatment content with substantive body (any conversion volume — even 0)
- **NOINDEX** = high-impression but off-vertical (porn-addiction / vape-by-country / social-media-addiction / generic-mental-health that diverges from addiction-treatment) — preserve URL for any earned backlinks but de-list from index
- **410** = high-impression, off-vertical, AND no backlinks AND no internal links AND >12 months old — permanent removal
- **REVIEW** = ambiguous cases for owner-side input

Deployment:
1. Webflow CMS or sitemap-level NOINDEX for the ~250 NOINDEX cohort
2. 410 Gone for the ~50 permanent-removal cohort (Webflow custom 404 redirect or Cloudflare worker rule)
3. Sitemap re-submit to GSC after deployment

### 2. CC-02 refresh 5 already-converting blog assets (M1)

v1 identified 5 specific blog posts that earn combined ~2,400 clicks / 365d but have:
- No intake CTA
- No Article schema
- No medicalReviewedBy field
- Weak internal-linking to /services/* + /admissions

The 5 URLs (placeholder names; pull from v1's `Niagara_Recovery_Q2_2026_Custom_Strategy.md` for the exact paths):
- `/blog/what-should-you-pack-for-rehab-stay-in-newfane`
- (4 others to be confirmed from v1 cannibal-cleanup analysis)

Per-post template:
- **Intake CTA above-fold:** "Begin admissions" button → `/admissions`
- **Intake CTA mid-body:** "Verify insurance" button → `/admissions`
- **Intake CTA footer:** Phone + CTA repeat
- **Article schema:** with `author` (use the canonical author or medical reviewer), `medicalReviewedBy`, `dateModified`
- **Internal links:** 1-2 to relevant /services/* and 1 to /locations/<anchor> if locality is mentioned

These 5 posts account for a disproportionate share of the residual non-branded click volume. Bolting intake CTAs onto them converts the existing read-and-leave traffic into qualified leads.

### 3. CC-03 Owner Ask — pause suburb-doorway production firehose (M1, P0)

This is the structural fix. The Asana 5-week activity log shows:
- 22 PAA blogs shipped (Newfane-modified)
- 9 suburb-doorways shipped (`/locations/best-/most-trusted-/renowned-/famous-/leading-/premium-` template)
- 3 more batches in the Content Ordering pipeline due M2 (Renowned/Famous/Leading variant on Attica/E. Oakville/E. Pembroke)

This production rate, multiplied across Q2 cycles, will continue diluting topical authority and creating doorway URL inventory that Push 4 LP-10 then has to redirect. **The redirect work is downstream cleanup; the upstream cause is the production pipeline configuration.**

Owner-side decision required: pause the suburb-doorway pipeline for the duration of Q2 v2 strategy execution. PAA-driven blog production can continue at a reduced rate (≤2/month) and only on addiction-treatment-vertical topics within the Buffalo-metro break-out zone (Lockport / Williamsville / N. Tonawanda / Buffalo etc.) — not Newfane-only.

Deliverable: `Niagara_Recovery_Owner_Conversation_Items.md` Item 4 (of 5) is the formal ask. Convert to PDF and route to Milica + Owner for sign-off.

### 4. CC-04 sitewide internal-linking pass on KEEP cohort (M3)

After CC-01 NOINDEX/410 reduces the indexed inventory from ~670 blog posts to ~370, the surviving KEEP cohort needs a linking pass to consolidate topical-authority hubs.

Per-post (open `Niagara_Recovery_Internal_Linking_Map.csv` filter `task_id=CC-04` for the specific URL pairings):
- Add 1-2 internal links to canonical /services/* URLs (post-Push 3 consolidation)
- Add 1 internal link to /locations/<relevant anchor city> if the post mentions a specific WNY town
- Anchor text uses the service or location entity name (not generic "click here")

Approximate scale: ~370 KEEP posts × ~2 links each = ~700 link-edits.

## Why this is Push 5

1. **Direct attribution to the 87% non-branded click collapse.** No other lever in Q2 v2 strategy speaks to non-branded discovery rebuild at scale. The 670-post blog is the largest single corpus on the site and its trajectory is the strategy's tail risk.
2. **CC-03 owner ask is the highest-leverage policy change in the quarter.** Pausing the doorway pipeline upstream prevents the perpetual cycle of Push 4 LP-10 needing to redirect a constantly-growing doorway URL inventory.
3. **CC-02 is the fastest conversion-rate lift available.** Bolting intake CTAs onto already-converting blog assets has near-zero engineering cost and immediate measurement signal in GA4.

## Acceptance criteria

- ~300 off-vertical posts NOINDEX or 410 deployed; sitemap re-submitted to GSC.
- 5 high-CTR blog assets have intake CTA at 3 placements + Article schema + medicalReviewedBy.
- Owner signs off on suburb-doorway pipeline pause; affected Asana sections (Content Ordering / Order Gigs / The Royal Prints) reflect the new policy by end of M1.
- ~700 internal-link edits deployed across KEEP cohort by M3.
- GSC non-branded clicks 30d window: 47 → 200+ by M3 (4× rebuild).

## Estimated effort

- CC-01 NOINDEX/410 scoring + deploy: 10 hours (Marija + Aleksa)
- CC-02 5-post refresh: 5 hours (Marija)
- CC-03 owner ask: 1 hour to prepare PDF + 1 short call
- CC-04 internal-linking pass: 6 hours (Marija + part-time team support)

**Total Push 5 = ~22 agency hours + 1 owner call.**

## Risk

- CC-03 is the single most owner-blocked deliverable in the quarter. The 7-month-stuck Press Release task suggests serial owner-approval friction. If CC-03 doesn't ship M1, Push 5 effectively degrades to a downstream-cleanup play (CC-01 + CC-04) without addressing the upstream production cause.
- CC-01 NOINDEX/410 deployment is reversible only at high cost. Get the decision matrix scoring right BEFORE deploy. If a post in the cohort earns backlinks, reconsider 410 vs NOINDEX.
- Marija's content-team bandwidth is shared across PAA writing pipeline (~22 blogs/5 weeks = ~4-5/week sustained rate). If CC-03 doesn't approve the pipeline pause, CC-04 internal-linking pass will run behind schedule.

## Files referenced

- `Niagara_Recovery_Cannibal_Cleanup_Plan.csv` (rows for CC-01 ~300 + LP-10 doorway redirects)
- `Niagara_Recovery_Page_Refresh_Pages.csv` (CC-02 5 high-CTR blog refreshes)
- `Niagara_Recovery_Internal_Linking_Map.csv` (CC-04 ~700 link edits)
- `Niagara_Recovery_Owner_Conversation_Items.md` (Item 4 — doorway pipeline pause)
- GSC data: `clients/niagararecovery/exports/gsc/branded_vs_nonbranded_summary.csv`
- Asana 5-week activity log: search project_id=1207449565310463 completed_on_after=2026-04-15
