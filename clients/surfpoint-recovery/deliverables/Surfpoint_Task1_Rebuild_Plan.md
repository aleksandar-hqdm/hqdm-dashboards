# Surfpoint Recovery — Task 1: Homepage & Service-Page Rebuild

**Subtitle:** Diagnostic, evidence-backed decisions, and implementation plan — every change has a data point and a reason
**Owner:** Aleksandar Spasevski (Head of Search Intelligence) · **Date:** 2026-05-11
**Status:** Draft pending Aleksa Popovic feasibility pass, then Zach DeLorenzo routing into Asana
**Scope:** Homepage (live + non-deployed CRD) + 5 service pages + internal-link refactor; areas-served and doorway redirects flagged as separate tasks

---

## 0. How to read this document

This is the single consolidated source-of-truth for the Task 1 rebuild. It replaces the standalone gap docs and the team brief as the canonical decision artifact. Three sub-documents continue to exist as references:

- `exports/competitive_audit/01_homepage_gap.md` — raw homepage diagnostic
- `exports/competitive_audit/02_service_pages_gap.md` — raw service-page diagnostic
- This document — synthesized plan with data + reasoning + outcomes for every change

The aim: anyone (Aleksa, Zach, Milica, Marija, Surfpoint client) can read just this doc and understand what's changing, why, what the evidence is, and what success looks like.

**Each decision in §3 follows the same four-part structure:**
- **What changes** — the action
- **Evidence** — the data point that motivates the action
- **Reasoning** — why this is the right call (vs alternatives)
- **Expected outcome** — what success looks like and how we'll measure

---

## 1. Executive summary

Maps and brand are the working revenue channels for Surfpoint. Google Business Profile traffic converts at 2.53% — roughly 8× the all-organic average. Reviews are growing (4.5★/91 → 4.8★/120 in 30 days). The site is the broken channel: service pages — the actual revenue surface — receive **104 sessions and 0 conversions in 365 days** because they are functionally template stubs (empty meta descriptions, zero schema, no on-page form, no geo specificity, no insurance details, no clinical credentials, no MAT or dual-diagnosis surface), and the interlinking SOP routes site equity to homepage + utility pages instead of services.

The homepage Content Recommendation Document (CRD) is partially shipped. OASAS/CARF references are live, but the 5 major new H2 sections (alcohol detox, opioid+MAT, benzo detox, dual diagnosis, Coney Island geographic) are not live — the rewritten content sits unused in a Drive draft.

**Task 1 deploys the homepage CRD as drafted, adds 6 elements identified in the competitor audit that the CRD does not address (schema upgrade, insurance H2, clinical team H2, what-to-expect H2, Review schema, FAQPage schema), rebuilds all 5 service pages against a universal template, and refactors internal links so equity flows to services.** Expected outcome: per the §3.2 revenue scenarios in the Q2 strategy doc, this plan moves the engagement from the pessimistic-case (~$52K/yr missed) toward the mid-case (~$175K/yr missed) trajectory.

The plan is supported by:
- An 18-URL on-page audit (Surfpoint + 3 direct competitors + 7 ranking competitor pages + 5 cross-checks)
- Fresh SERP scrapes for 2 anchor queries (`short term inpatient brooklyn`, `medication assisted treatment brooklyn`)
- Re-pull of GBP profile depth vs 10 competitors
- Reuse of the existing Q2 diagnostic (channel mix, GSC trend, backlinks profile, decision matrix)

---

## 2. The diagnostic — what the data says

### 2.1 Service pages are not just under-ranking; they are under-built

The 5 service-page URLs (alcohol detox, opioid detox, drug detox, benzo detox, comprehensive short-term rehab) share an identical structural failure profile. Every page audited 2026-05-11 returns:

| Dimension | Status across all 5 service pages |
|---|---|
| Meta description | Empty (0 chars) on every page |
| JSON-LD schema | Zero blocks on every page |
| On-page form | Zero forms on every page |
| Coney Island mentions | Zero on every page |
| OASAS / CARF / SAMHSA mentions in body | Zero / Zero / Zero on every page |
| Insurance carrier mentions (Medicaid, Aetna, Cigna, BCBS) | One mention (Aetna, alcohol-detox) — all others zero |
| Dual diagnosis mentions | Zero on every page |
| Word count | 643–863 (below ranking-page benchmark) |
| Cross-links to peer service pages | Zero contextual links from body |
| Phone CTA infrastructure | Present and consistent (intake 646 in CTAs) |

**This is not a content problem to optimize — it is an architectural absence.** The pages have nav, footer, sticky CTA, and a generic body paragraph. They lack everything that would let them rank or convert.

The current Surfpoint position on the 4 covered service-query anchors:

| Query | Surfpoint current rank |
|---|---|
| alcohol detox brooklyn | Not in top 8 organic |
| opioid detox brooklyn | Not in top 8 organic |
| drug detox brooklyn | Not in top 8 organic |
| benzodiazepine detox brooklyn | Not in top 8 organic |
| medication assisted treatment brooklyn | Not in top 12 organic |
| short term inpatient brooklyn | Not in top 12 organic |

**Surfpoint ranks nowhere on any of its 5 service queries.** This is consistent across organic and is masked by GBP dominance — the map pack is rank 1.47 / 96% top-3 on `alcohol rehab brooklyn` (per Local Dominator), so revenue is preserved while organic erodes.

### 2.2 The homepage is mid-tier — strong where it matters, missing in places no competitor occupies

The current live homepage:
- 1,320 words (mid-pack — below Ascendant at 2,590, above ACI at 793 and Genesis at 652)
- 7 H2 sections (below Ascendant at 19, Elevate Point at 17)
- 1 JSON-LD block (`LocalBusiness`) — substantially below Elevate Point's 8-type schema stack
- OASAS mentioned 2×, CARF mentioned 2× (better credential signal than ACI, Genesis, Ascendant — all of which mention them 0)
- Brooklyn mentioned 27× (strongest geo signal in the audit set)
- Coney Island mentioned 0× (uncontested — no competitor mentions Coney Island)
- Medicaid mentioned 2×; other insurance carriers (Aetna, Cigna, BCBS) mentioned 0×
- One on-page form (the only competitor in the audit with a homepage form)

**The reads from this:** Surfpoint already wins on credentials, Brooklyn geo, and conversion infrastructure. Surfpoint loses on content depth and schema. The Coney Island angle is a free-and-clear position. The CRD content (drafted, unshipped) addresses the content-depth gap; nothing in the CRD addresses schema or insurance specificity.

### 2.3 The non-deployed CRD covers most but not all of the gap

The CRD draft at `drivedocs/Surfpoint Recovery - Final.docx` is color-coded (black = keep, **green = new/unshipped**, gray = team notes). Its scope is homepage only. Its target keyword is `drug rehab center in Brooklyn, NY`.

**CRD adds (estimated impact on metrics):**

| Metric | Live | + CRD adds | Ascendant benchmark |
|---|---|---|---|
| Word count | 1,320 | ~2,200 | 2,590 |
| H2 count | 7 | ~12 | 19 |
| Coney Island mentions | 0 | ~4 | 0 (uncontested) |
| MAT mentions | 2 | ~5 | 6 |
| Dual diagnosis mentions | 2 | ~4 | 4 |
| SAMHSA mentions | 0 | ~1 | 0 |

**CRD does not address:**
- Schema upgrade (still single `LocalBusiness` block; competitor benchmark is `MedicalClinic` or 8-type stack)
- Insurance carrier visibility (Aetna / Cigna / BCBS still mentioned 0×)
- E-E-A-T / named clinical team (no competitor in our 3-pick has it; Ascendant uses Editorial Policy + Our Contributors model as benchmark)
- Review schema (no competitor has it; Surfpoint has 120 reviews to draw from)
- FAQPage schema (Elevate Point uses; rich-result eligible)
- What-to-expect / patient-journey content (TBH and Ascendant both cover)

### 2.4 Ranking competition surface — three structural insights

Live SERP analysis 2026-05-11, top-3 ranking real service providers per anchor query (after stripping directories, government sites, hospital systems, and aggregators per the competitor-identification SOP):

| Query | Real provider top-3 |
|---|---|
| alcohol detox brooklyn | tbh.org, genesisdob.com, urbanrecovery.com |
| opioid detox brooklyn | tbh.org, genesisdob.com (only 2 in top 12) |
| drug detox brooklyn | tbh.org, genesisdob.com, urbanrecovery.com / elevatepoint.org |
| benzodiazepine detox brooklyn | genesisdob.com, tbh.org, seekcounseling.com (Bay Ridge) |
| medication assisted treatment brooklyn | mountsinai.org, seekcounseling.com, onebrooklynhealth.org |
| short term inpatient brooklyn | urbanrecovery.com (only real provider in top 12) |

**Three load-bearing reads:**

1. **TBH (The Brooklyn Hospital Center) ranks #1 across every detox query** with a single 888-word `detox-unit` page that has no schema. TBH wins on hospital domain authority, not page quality. Surfpoint's structural advantage is better on-page architecture + schema + GBP dominance — the gap to close is content depth.

2. **Genesis Detox of Brooklyn ranks consistently in top 5** with its homepage (no H1, 652 words, no clinical depth, no MAT mention, no dual diagnosis). Genesis wins on age, backlinks, and GBP — not content. **Surfpoint can outrank Genesis on content quality alone.**

3. **`short term inpatient brooklyn` has only 1 real service-provider competitor (Urban Recovery).** The query surface is almost empty of competition. This is the lowest-hanging fruit query in the set.

### 2.5 The MAT query needs to be re-spelled

Original anchor query `MAT brooklyn` returns:

| Rank | Domain | URL |
|---|---|---|
| #2 | flowpilatesny.com | /mat-classes/ |
| #3 | matblak.com | / |
| #4 | classpass.com | /search/brooklyn/mat-pilates |

**`MAT` alone is a Pilates query.** Google interprets it as "Mat Pilates" not "Medication-Assisted Treatment." The corrected target query `medication assisted treatment brooklyn` returns Mount Sinai, Seek Counseling, One Brooklyn Health — the actual medical-intent surface.

Implication: the opioid-detox service page targets two query clusters (`opioid detox brooklyn` + `medication assisted treatment brooklyn`) and content must spell out "medication-assisted treatment" alongside the MAT abbreviation.

### 2.6 The areas-served page is broken

The current `/areas-served` page is generic Brooklyn-info filler — H2 sections like "Brooklyn's Green Spaces," "Schools in Brooklyn, NY," "Public Transportation and Major Highways" — with the actual "Areas We Serve" section buried near the bottom. It links to:

- Real catchment neighborhoods (correct): `/locations/coney-island`, `/locations/bay-ridge`, `/locations/bath-beach`, `/locations/bensonhurst`, `/locations/brighton-beach-ny`, `/locations/flatlands`, `/locations/sheepshead-bay-ny`, etc.
- Doorway URLs marked for redirect (incorrect): `/locations/astoria`, `/locations/cambria-heights`, `/locations/corona`, `/locations/east-elmhurst`, `/locations/elmhurst`, `/locations/brownsville` — these are Queens, not Brooklyn
- Duplicate location pages: `/locations/coney-island` AND `/locations/comprehensive-rehab-center-in-coney-island-ny` (same neighborhood, two URLs)

**Out of scope for Task 1** — flagged as a sibling task. Recommendation: bundle the `/areas-served` rebuild with the doorway-redirect execution under Task 5 (legacy URL cleanup). The architectural reset of internal linking inside Task 1 still uses the real-catchment links directly, sidestepping the broken hub page during the rebuild.

---

## 3. Decisions — every change, with data and reasoning

### 3.1 Homepage decisions

The homepage gets 13 specific changes: 7 from the CRD (deploy-as-drafted) and 6 beyond-CRD additions identified in the competitor audit.

---

#### H-01 — Deploy the CRD H2 sections (alcohol detox, opioid+MAT, benzo detox, dual diagnosis, Coney Island)

**What changes:** The 5 green-text H2 sections in the CRD (`drivedocs/Surfpoint Recovery - Final.docx`) ship as drafted. Each H2 ends with a contextual link to its corresponding service page.

**Evidence:**
- The 5 H2 sections are draft-complete in the CRD (verified by reading the docx) but `metrics.csv` shows the current live homepage at 7 H2s; the CRD takes it to ~12.
- Per §1.1 of the Q2 strategy doc, this content was identified as the highest-leverage move available three weeks ago.

**Reasoning:** The content already exists. The cost of deploying is operational (CMS + QA), not editorial. Topic-depth on alcohol detox, opioid+MAT, benzo, dual diagnosis, and Coney Island closes both a Google relevance gap (current pos 27.4 on `drug rehab center brooklyn ny` homepage variant) and an LLM citation gap (Surfpoint is already #1 cited rehab provider domain across the 18-prompt LLM audit, missing on 3 specific service-line prompts — see §6 of the Q2 strategy doc).

**Expected outcome:** Homepage avg position 27.4 → top 10 for the branded `drug rehab brooklyn` variant; LLM commercial-local citation rate from 7/10 → 9/10 prompts after M1 re-audit; estimated +10% homepage conversion lift from content-trust signals.

---

#### H-02 — Internal links from each new H2 land on the corresponding service page (not /admissions, not /contact)

**What changes:** Every contextual link from the 5 new H2 sections targets the relevant service-page URL (`/services/alcohol-detox-services`, `/services/opioid-detox-services`, `/services/drug-detox-services`, `/services/benzodiazepine-detox-services`, `/services/comprehensive-short-term-rehab`).

**Evidence:** Per `Surfpoint Recovery - Interlinking.xlsx`, the current interlinking SOP has 305 link-plan rows for location pages, 423 for blog, and **15 for services**. Per §2.2 of the Q2 strategy doc, service pages have **zero contextual inbound links from homepage** today. Per `metrics.csv`, each service page currently has only 32 inbound links — all from common nav/footer template, none contextual.

**Reasoning:** Service pages are the revenue surface (the entity Google should associate with `alcohol detox brooklyn`, not the homepage with everything). Routing equity to services now — before the M2 rebuild — means the rebuild lands on pages that already have non-zero internal-link counts, accelerating ranking response post-deploy. Alternative routes considered: link to `/admissions` (better immediate conversion, but doesn't fix the architectural problem); link to topical blog posts (would benefit cleanup, not revenue surface).

**Expected outcome:** Per-service-page inbound link count: 0 → 5+ from H2 contextual links in Phase A. Combined with Phase B's location-page outbound additions and AUDIT-triage rewrite (Task 6 Wave 1), target 50+ inbound per service page by end of M2.

---

#### H-03 — Upgrade `LocalBusiness` schema → `MedicalBusiness` with full `@graph` (8 entities)

**What changes:** Replace the single `LocalBusiness` JSON-LD block with a `@graph` containing `MedicalBusiness` (primary), `FAQPage`, `Review` (×3-5), `WebSite`, and `WebPage` entities. Full property set: `medicalSpecialty`, `availableService`, `paymentAccepted`, `priceRange`, `hasCredential`, `aggregateRating`, `sameAs`, `geo`, `areaServed`, `contactPoint` (2-phone array), `logo`, `image`, `description`, `slogan`.

**Evidence:**
- `metrics.csv` shows current homepage schema: 1 block, `LocalBusiness` only
- Ascendant Detox NYC (closest depth benchmark): `MedicalClinic` — vertical-specific @type
- Elevate Point (ranking benchmark): 8 schema types including `MedicalBusiness`, `MedicalOrganization`, `FAQPage`, `Review`, `Organization` — schema depth pays off
- Per `Surfpoint_Recovery_Q2_2026_Custom_Strategy.md` §2.3 schema audit, the existing `LocalBusiness` block has empty `@id`, generic type, NAP-inconsistent phone, and missing aggregateRating / geo / sameAs / priceRange / description / logo / medicalSpecialty / paymentAccepted / availableService

**Reasoning:** `LocalBusiness` is the wrong @type for a medical business. `MedicalBusiness` is the schema.org-defined parent for the vertical and unlocks rich-result eligibility on medical queries. The `@graph` pattern (vs multiple parallel `<script>` blocks) lets entities reference each other via `@id`, which Google's structured-data interpreter handles more reliably for medical organizations. The full property set is what makes the entity "knowable" — empty fields silently underperform populated ones.

**Expected outcome:** Rich-result eligibility on service queries (Service object cards + Aggregate Rating star ratings + FAQ rich snippets); knowledge panel completeness improves (currently has gaps Google fills with public-web inference, which is less precise than schema-supplied data); entity-graph clarity for both Google and downstream LLMs that cite knowledge-panel-confirmed organizations more readily.

---

#### H-04 — 2-phone `contactPoint` array, role markup (intake vs facility)

**What changes:** Schema declares both phones with `contactType` role. Intake (646) 347-1893 = `customer support` with description "Admissions / intake (24/7)". Facility (347) 727-4800 = `customer service` with description "Facility direct line". Visible site CTAs (hero, sticky mobile, all buttons) point to intake; contact page + footer NAP shows both with labels.

**Evidence:** Per `client.json` `contact` block, both phones are legitimate with distinct purposes. Current schema (per `exports/schema_audit/contact_us.html`) declares only one phone (the facility number 347), which is NAP-inconsistent with the CTA-canonical intake number 646.

**Reasoning:** Picking one phone (the original framing) is wrong — both are real. The fix is markup, not consolidation. `contactType` is the schema.org-recommended pattern for organizations with multiple roles. The visible-site rule (all CTAs → intake) preserves attribution clarity for marketing purposes; the contact-page distinction preserves operational clarity for visitors.

**Expected outcome:** Eliminates NAP inconsistency Google can use as a trust-penalty signal; preserves both operational paths; phone-role clarity in knowledge panel.

---

#### H-05 — New H2: "Insurance We Accept" with carrier logo row + Verify Coverage CTA

**What changes:** New section listing Medicaid, Aetna, Cigna, BlueCross BlueShield (per `client.json` `insurance_accepted`) with carrier logos and a "Verify Your Coverage" CTA routing to /admissions or an in-page form.

**Evidence:** Per `metrics.csv`, current homepage mentions Medicaid 2× and Aetna/Cigna/BCBS 0× each. Across 3 chosen competitors (ACI, Genesis, Ascendant): zero insurance carriers mentioned in body. Across 4 ranking competitors (TBH, Urban, Seek, Elevate Point): zero in-body insurance carrier listings.

**Reasoning:** Insurance-modified queries (`drug rehab brooklyn medicaid`, `rehab that takes aetna brooklyn`) carry strong commercial intent. Zero competitors capture this surface in body content. This is a low-cost differentiator — the schema-side declaration (`paymentAccepted` in §H-03) handles machine-readability; the visible body section captures human-readable trust + intent capture.

**Expected outcome:** First-pass capture of insurance-modified queries (estimated 5–15 new query impressions in GSC within 30 days of crawl); reduces phone-time on coverage-verification calls (operational ROI); supports the broader "make the conversion decision happen on-page" architectural goal.

---

#### H-06 — New H2: "Meet Our Clinical Team" with named clinicians + credentials

**What changes:** Section listing named MD-Psychiatry / RN / LCSW / CASAC clinical leadership with credentials displayed. Surfpoint Ops provides the roster; v1 ships role-titles-only if names aren't available in Week 1.

**Evidence:** Per the 18-prompt LLM audit in `exports/dataforseo/llm/`, Surfpoint cited 0 times on the 8 research-phase prompts; competitors cited in research-phase prompts (Recovery Village, AAC) carry "Editorial Policy / Reviewer" type pages where named medical reviewers are surfaced. Ascendant Detox NYC has H2 sections "Awards & Accreditations," "Editorial Policy," and "Our Contributors" on its homepage — the closest direct competitor running the E-E-A-T pattern.

**Reasoning:** Surfpoint's brand SERP and commercial-local LLM citation surface are already strong. The research-phase LLM gap is structural: LLMs cite pages that surface named medical reviewers more readily than anonymous brand pages. Adding named clinicians on the homepage is the lowest-effort starting point; future research-phase blog rewrites (Task 6 Wave 2) inherit the clinician roster as cross-page reviewers.

**Expected outcome:** LLM research-phase citation rate 0/8 → 1-2/8 within Q3 (after re-audit per `scripts/llm_visibility_surfpoint.py`); long-term E-E-A-T trust signal that compounds across blog rewrites and service-page expansion.

---

#### H-07 — New H2: "What to Expect: Your First 24 Hours at Surfpoint" (patient-journey content)

**What changes:** Patient-journey H2 covering arrival → medical clearance → intake interview → first night → next-morning routine. Direct-language, no clinical jargon, patient-comprehensible.

**Evidence:** TBH (rank 1 service provider on every detox query) dedicates significant on-page real estate to "What can I expect?" content. Ascendant Detox NYC runs similar patient-journey content on homepage. Surfpoint currently has zero patient-journey content on homepage.

**Reasoning:** "What to expect" + "what happens in detox" + "first day" queries are research-phase intent — visitors comparing options before committing. These queries don't carry the same volume as commercial-local terms, but they capture the visitor who's pre-decision. Patient-journey content also supports the LLM research-phase citation gap (research-phase prompts asked LLMs questions like "what happens in detox" — Surfpoint had nothing to surface).

**Expected outcome:** Capture of research-phase impressions in GSC (10s of impressions/mo on long-tail patient-journey queries); supports both organic and LLM research-phase surfaces.

---

#### H-08 — Service-area Google Maps iframe embed (Coney Island center)

**What changes:** Lazy-loaded Google Maps iframe centered on 2316 Surf Avenue, with `loading="lazy"` attribute. Placed inside the Coney Island H2 section.

**Evidence:** Per `metrics.csv`, current homepage iframe_map = 0; no competitor in the 3-pick has an iframe map either; the Q2 strategy doc §4.4 calls for service-area on-page elements to "reinforce the map win on-page."

**Reasoning:** GBP is Surfpoint's resilience layer (8× conversion rate vs all-organic average). Embedding the live Google Maps view on the homepage creates an on-page connection to the GBP entity, reinforces Coney Island geo, and signals service-area to crawlers via the embedded Place reference. Cost is one iframe with lazy-load — no Core Web Vitals regression risk.

**Expected outcome:** Visual reinforcement of GBP dominance on the homepage; entity-clarity for service-area; supports `geo` schema property by visual confirmation.

---

#### H-09 — Neighborhood enumeration block linking to real-catchment location pages

**What changes:** Block listing real-catchment neighborhoods (per `client.json` `real_catchment_neighborhoods`): Coney Island, Brighton Beach, Bay Ridge, Sunset Park, Bath Beach, Bensonhurst, Borough Park, Gravesend, Sheepshead Bay, Dyker Heights, Manhattan Beach, Marine Park, Flatlands, Midwood, Fort Hamilton, plus the rest of the catchment list. Each neighborhood links to `/locations/[neighborhood]`.

**Evidence:** Current homepage has 27 Brooklyn mentions but 0 Coney Island mentions and 0 neighborhood-specific mentions. The areas-served page exists but is broken (per §2.6). The CRD draft includes a neighborhood enumeration in green text; this decision deploys it but constrains the link targets to **real catchment only** (not doorways).

**Reasoning:** Neighborhood mentions reinforce geographic relevance for the long-tail neighborhood-modified queries (`drug detox bay ridge`, `alcohol rehab bensonhurst`). Linking to real-catchment location pages (and explicitly not to the doorway URLs flagged for redirect in Task 5) routes equity to the location-page hubs we want to keep, not the doorways we're killing.

**Expected outcome:** First-pass capture of neighborhood-modified queries; equity flow to real-catchment location pages (which then link back to service pages — closes the locations × services matrix loop); zero accidental support for doorway pages we're trying to remove.

---

#### H-10 — SAMHSA footer reference

**What changes:** Footer block adds a "SAMHSA Treatment Locator" trust badge or text reference. Links to SAMHSA Treatment Locator if Surfpoint is listed; otherwise text-only reference acknowledging SAMHSA alignment.

**Evidence:** Per `metrics.csv`, current homepage has 0 SAMHSA mentions. Per the 18-prompt LLM audit (Q2 strategy doc §5.4), Gemini 2.0 Flash cited Surfpoint 0 times and leans heavily on government directories (samhsa.gov, oasas.ny.gov) for treatment recommendations.

**Reasoning:** SAMHSA reference is a vertical-standard trust signal. Adding the reference to footer (not body) keeps the homepage focused while satisfying both the trust signal and unlocking the Gemini citation surface (which expects gov-directory cross-references). Combined with the foundational citation push in Task 9 (which adds Surfpoint to the SAMHSA Treatment Locator), this is a 2-step play: footer reference now, listing-confirmation later.

**Expected outcome:** Trust signal density; Gemini LLM citation surface unlock (target: 0 → 1+ Gemini citations after M2 re-audit, conditional on Task 9 listing completion).

---

#### H-11 — Embedded `Review` schema for 3-5 named GBP reviews

**What changes:** Pull 3-5 best-quality named reviews from the 120 GBP reviews captured in `exports/gbp/`. Each wraps in `Review` schema with `itemReviewed: { @id: MedicalBusiness }`. Visible on-page block displays the reviews; schema makes them rich-result eligible.

**Evidence:** Per `metrics.csv`, no homepage in the 3-pick (ACI, Genesis, Ascendant) has `Review` schema. Elevate Point (ranking, non-target) has Review schema. Surfpoint has 120 reviews to pull from.

**Reasoning:** Review schema is rich-result eligible. No direct competitor in our set has it. Surfpoint has the inventory. Cost is operational (pick 5 reviews, mark up). The visible block also reinforces social-proof on the trust-decision page.

**Expected outcome:** Star-rating rich result eligibility on homepage SERP; visible social-proof block; +CTR on branded SERP variants.

---

#### H-12 — `FAQPage` schema with 5-8 patient-facing Q&As

**What changes:** New Q&A block at homepage bottom (5-8 questions) wrapped in `FAQPage` schema. Topic seeds: "Is Surfpoint OASAS-licensed?" "Does Surfpoint accept Medicaid?" "How long is inpatient detox?" "What is MAT?" "Do you take walk-in admissions?" "Is dual-diagnosis treated?" "Where exactly are you located?" "What insurance carriers do you accept?"

**Evidence:** Elevate Point (ranking, non-target) runs `FAQPage` schema. Surfpoint currently has a `/faq` page with FAQPage schema but not on homepage. The 8 candidate questions above all have GSC impression evidence (per existing query data).

**Reasoning:** FAQPage schema is rich-result eligible. PAA (People Also Ask) block-capture is the natural downstream of FAQPage markup. Q&A content directly answers the visitor's pre-call objection set. Cost is editorial (write 5-8 Q&As; the answers can pull from existing on-page content).

**Expected outcome:** PAA capture; rich-result eligibility; reduces objection-handling friction on phone calls (operational ROI).

---

#### H-13 — Revised Meta Title + Meta Description + H1 (CRD-drafted)

**What changes:**
- Meta Title: `Trusted Alcohol & Drug Rehab - Brooklyn, NY | Surfpoint Recovery` (replaces current `Trusted Drug Rehab - Brooklyn | Surfpoint Recovery`)
- Meta Description: `Surfpoint Recovery offers licensed drug rehab in Brooklyn, NY, including inpatient detox, opioid treatment, MAT, alcohol rehab, and dual diagnosis care near Coney Island.` (replaces current generic version)
- H1: `Top-Rated Drug Rehab & Alcohol Recovery Center in Brooklyn, NY` (replaces current `Leading Brooklyn Recovery Center`)

**Evidence:** Current title (50 chars) is brand-positioned but omits "Alcohol" — drops capture on alcohol-rehab-modified queries. Current meta description (152 chars) is generic. Current H1 has no service or geo modifier (3 generic words).

**Reasoning:** All three changes come directly from the CRD (green text). They follow standard on-page best practice: title under 60 chars, description 145-155 chars, H1 with service + geo modifier. The meta description packs OASAS-licensed + Inpatient detox + Opioid + MAT + Alcohol + Dual diagnosis + Coney Island into 153 chars — every signal that matters for the click-through decision.

**Expected outcome:** CTR uplift on homepage SERP (target +5-10% from existing-rank queries); alcohol-rehab query family capture; SERP snippet now communicates the trust + service mix.

---

### 3.2 Service-page decisions — universal pattern (applies to all 5 pages)

The 5 service pages share a universal failure mode. Rather than treat each as a one-off, the rebuild applies a single template to all. The universal decisions follow; per-page specifics (clinical content, anchor query, word target) are in §3.3.

---

#### S-U-01 — Add meta description (currently empty on all 5 pages)

**What changes:** 145-155 char meta description on each service page packing OASAS-licensed / CARF-accredited / service-specific / Medicaid / Coney Island / Brooklyn variant. See per-page table in §3.3.

**Evidence:** `metrics.csv` shows meta_desc_len = 0 across all 5 service pages.

**Reasoning:** Empty meta description is the single biggest unforced CTR error in SEO. Google generates SERP snippet from page content fallback, which is rarely well-aligned with click intent. Costs 5 minutes of work per page.

**Expected outcome:** Service-page SERP snippet shifts from auto-generated to intentional; +CTR on whatever rankings the rebuild achieves.

---

#### S-U-02 — Deploy 4-type schema stack on every service page (currently zero)

**What changes:** Each service page deploys `MedicalProcedure` + `MedicalBusiness` reference (via `@id` to homepage entity) + `BreadcrumbList` + `FAQPage`. Schema embedded in `<head>` as single `@graph`.

**Evidence:** `metrics.csv` shows `jsonld_blocks = 0` across all 5 service pages.

**Reasoning:** Zero schema on a service page is invisible to Google's structured-data interpreter. `MedicalProcedure` is the schema.org-defined @type for clinical service procedures and explicitly supports `procedureType: TherapeuticProcedure` for detox/rehab. The 4-type stack matches the homepage `@graph` pattern (consistency benefits the entity graph) while keeping each page's primary entity service-specific.

**Expected outcome:** Rich-result eligibility on service queries (Service object cards in SERP for `[service] brooklyn`); entity-graph completeness; schema-driven LLM citation surface.

---

#### S-U-03 — Add on-page form on every service page (currently zero)

**What changes:** Each service page adds an on-page lead form (matching the homepage form pattern). Form lives mid-page (after "Surfpoint's [Service] Approach" H2) and bottom-page (after "Continue Your Recovery" cross-links). Form fields: name, phone, insurance carrier (dropdown), substance, message.

**Evidence:** `metrics.csv` shows `form_tags = 0` on all 5 service pages. Per Q2 strategy doc §1.2, the 0-conv attribution problem isn't pure traffic — when visitors do land on a service page, there is no on-page conversion path; they must navigate to /admissions or /contact, and attribution credits the destination page.

**Reasoning:** The service pages are the deepest commercial-intent surface (a visitor on `/services/opioid-detox-services` has very high purchase intent). Forcing them to navigate to convert is the wrong UX and the wrong attribution. On-page form fixes both. Risk: form proliferation can dilute conversion focus — mitigation is consistent form schema (HubSpot/Calendly) and routing logic.

**Expected outcome:** Direct-attribution conversions on service pages (currently 0/year); improved visitor-to-lead conversion rate on service-page traffic; cleaner channel attribution for Marija's reporting.

---

#### S-U-04 — Add OASAS / CARF / SAMHSA references to every service page (currently zero)

**What changes:** Each service page surfaces OASAS-licensed status, CARF Center of Excellence accreditation, and SAMHSA alignment in:
- Hero sub-line (compressed)
- Body content (expanded with credential explanation)
- Schema (`hasCredential` array)
- Footer (badge row)

**Evidence:** `metrics.csv` shows oasas/carf/samhsa = 0/0/0 across all 5 service pages. Yet the homepage carries OASAS=2, CARF=2 in body — credentials exist but are not distributed to the decision-point pages.

**Reasoning:** Trust signals on the homepage don't transfer to a visitor who land-pages a service URL from organic. Each service page is itself a trust-decision surface. The credentials are factual (per `client.json`) — the cost of adding them is zero editorial work; it's a copy-paste from the homepage with service-specific framing.

**Expected outcome:** Trust signal density on every decision page; conversion-rate uplift from credentialed visitors; supports the broader E-E-A-T architecture introduced on the homepage.

---

#### S-U-05 — Add insurance carrier section to every service page

**What changes:** Each service page surfaces Medicaid + Aetna + Cigna + BCBS in:
- Body section "Insurance We Accept"
- Schema (`paymentAccepted`)
- CTA: "Verify Your Coverage" linking to /admissions or in-page form

**Evidence:** `metrics.csv` shows insurance carrier mentions are 0 across nearly all service pages (only Aetna mentioned 1× on alcohol-detox).

**Reasoning:** Same as H-05 for homepage. Insurance-modified queries carry commercial intent. The service-page surface is where the visitor's coverage question is most active (they're about to call).

**Expected outcome:** Insurance-modified service query capture; reduced phone-time on coverage questions; supports the architectural goal of moving the conversion decision on-page.

---

#### S-U-06 — Add "Areas We Serve" block on every service page with real-catchment links

**What changes:** Each service page adds a section listing 8+ real-catchment neighborhoods with `/locations/[neighborhood]` links. Includes a service-area Google Maps iframe (Coney Island center). Real-catchment-only — no doorway URLs.

**Evidence:** `metrics.csv` shows neighborhoods_referenced = 0 on all 5 service pages. Q2 strategy doc §2.2 calls for locations × services matrix architecture; per `client.json` real_catchment_neighborhoods, the real catchment is 26 neighborhoods.

**Reasoning:** Service-page geo signals are weak (every page mentions Brooklyn 9× from header/footer, but no neighborhood specificity). Adding the Areas We Serve block on each service page closes the loop: services link out to locations, locations link back to services (this part executes on the location-page side in a future task). This pattern is what Mountainside and Ascendant use for state-level coverage; we adapt to neighborhood-level for Brooklyn.

**Expected outcome:** Neighborhood × service query capture (long-tail `alcohol detox coney island`, `drug detox bay ridge`); equity routing to real-catchment location pages (which then link back to services); reinforcement of GBP geographic dominance on-page.

---

#### S-U-07 — Add "Our Clinical Team" reference on every service page (or service-relevant clinician)

**What changes:** Each service page references the relevant clinician for that service (e.g., MAT-supervising physician on opioid-detox page; named LCSW for dual-diagnosis content). Minimum: role-title + credentials. Maximum: named clinician with `Person` schema cross-reference.

**Evidence:** Q2 strategy doc §6 identifies E-E-A-T as the LLM citation gap. The clinical-team architecture introduced on the homepage (H-06) is reinforced on each service page.

**Reasoning:** Service-specific clinician attribution is the strongest E-E-A-T signal for medical content. Cost is operational (Surfpoint Ops provides the roster). Per-service relevance is the right framing — alcohol detox is supervised by an internist, opioid+MAT by a physician with addiction medicine certification, dual-diagnosis by a psychiatrist.

**Expected outcome:** Service-specific E-E-A-T signal; LLM citation surface on research-phase prompts about specific services; medical-trust reinforcement at the conversion-decision page.

---

#### S-U-08 — Cross-link service pages along the patient-journey (currently zero)

**What changes:** Each service page outbound-links to 1-2 peer service pages following patient-journey logic:
- Alcohol detox → Opioid detox (poly-substance), Drug detox (hub), Short-term rehab (post-detox), Dual diagnosis
- Opioid detox → Drug detox (hub), Short-term rehab, Dual diagnosis
- Drug detox (hub) → all 4 substance-specific pages + Short-term rehab
- Benzo detox → Alcohol detox (cross-tolerance), Drug detox (hub), Dual diagnosis
- Short-term rehab → all 4 detox pages (upstream entry)

**Evidence:** Per `metrics.csv`, current service-page internal links are 32 each — but these are common nav/footer template links, not contextual body links. Contextual body cross-links: 0.

**Reasoning:** Patient-journey logic mirrors how visitors actually move through addiction treatment (detox → rehab → aftercare; alcohol/opioid co-occurrence; cross-tolerance between benzos and alcohol). Cross-linking enables both equity flow and visitor-flow optimization on the same architecture. Alternative (link to every service page from every service page) is over-engineered; alternative (no cross-links) leaves the patient navigating via nav alone.

**Expected outcome:** Equity propagation across the service-page cluster; visitor-flow improvement (longer sessions, more pages per visit); LLM citation density when a research-phase prompt asks about service-line specifics.

---

#### S-U-09 — Word-count target per page: 1,300–1,800

**What changes:** Per-page word target (see §3.3) lifts each service page from current 643-863 words to 1,300-1,800 words.

**Evidence:** Ranking-page benchmarks from `metrics.csv`:
- TBH detox unit page: 888 words (ranks #1 most queries — but on hospital authority)
- Urban Recovery homepage: 1,556 words
- Elevate Point homepage: 1,308 words
- Seek Counseling benzo page: 504 words (ranks #7-8 for benzo — proves a thin page can rank if it's specific enough)
- Ascendant Detox homepage: 2,590 words (the content-depth ceiling)

**Reasoning:** Word count is a weak ranking signal in isolation but correlates with topical depth, schema-supporting content, and on-page conversion infrastructure (form, FAQ, neighborhood links) that all require body text. Targeting 1,300-1,800 is "deep enough to beat Genesis on content, not deep enough to be padded." Each page's content brief specifies what content fills the words — no fluff additions for word-count.

**Expected outcome:** Service pages match ranking-page benchmarks on depth; content-trust signals reach Google's "comprehensive" threshold for medical content.

---

### 3.3 Service-page decisions — per-page specifics

Universal decisions apply to all 5 pages. Per-page specifics:

| Page | Anchor query | Meta title | H1 | Word target | Service-specific H2 content | Cross-links |
|---|---|---|---|---|---|---|
| `/services/alcohol-detox-services` | alcohol detox brooklyn | `Alcohol Detox in Brooklyn, NY \| OASAS-Licensed \| Surfpoint Recovery` | Alcohol Detox in Brooklyn, NY | 1,400–1,600 | CIWA-Ar scoring + benzo taper protocol; named clinical lead; substances treated alongside (poly-substance); length of program (3-7 days detox + step-down to short-term rehab) | Opioid detox, benzo detox, drug detox hub, short-term rehab, dual diagnosis |
| `/services/opioid-detox-services` | opioid detox brooklyn + medication assisted treatment brooklyn (dual cluster) | `Opioid Detox & MAT in Brooklyn, NY \| Buprenorphine + Naltrexone \| Surfpoint Recovery` | Opioid Detox & Medication-Assisted Treatment in Brooklyn, NY | 1,500–1,800 | Parallel H2 clusters: opioid detox (medical supervision, withdrawal timeline, comfort meds) + MAT (buprenorphine, naltrexone, named clinical specifics, SAMHSA citation, MAT-supervising clinician) | Alcohol detox (poly-substance), drug detox hub, short-term rehab, dual diagnosis |
| `/services/drug-detox-services` | drug detox brooklyn | `Drug Detox in Brooklyn, NY \| All Substances \| Surfpoint Recovery` | Drug Detox in Brooklyn, NY | 1,400–1,600 | Substance list (alcohol/opioids/benzos/poly-substance) with anchor links to substance-specific pages; poly-substance dependence; medical supervision philosophy. **Architectural hub — links to all substance-specific pages.** | All 4 substance-specific service pages + short-term rehab |
| `/services/benzodiazepine-detox-services` | benzodiazepine detox brooklyn | `Benzodiazepine Detox in Brooklyn, NY \| Xanax, Klonopin, Ativan \| Surfpoint Recovery` | Benzodiazepine Detox in Brooklyn, NY | 1,400–1,600 | Named benzos (Xanax/alprazolam, Klonopin/clonazepam, Ativan/lorazepam, Valium/diazepam); structured tapering protocol; withdrawal timeline; "Why Inpatient for Benzo Detox?" (seizure risk in unsupervised) | Alcohol detox (cross-tolerance), drug detox hub, dual diagnosis (anxiety co-occurrence) |
| `/services/comprehensive-short-term-rehab` | short term inpatient brooklyn | `Short-Term Inpatient Rehab in Brooklyn, NY \| Surfpoint Recovery` | Short-Term Inpatient Rehab in Brooklyn, NY | 1,300–1,500 | Program length (3-7 days detox + 14-30 days rehab); discharge planning + aftercare coordination; "Short-Term vs Long-Term Rehab" comparison; continuum of care from detox → rehab | All 4 detox pages (upstream patient journey) |

**Per-page rationale notes:**
- **Opioid detox carries the deepest content load** (1,500-1,800 words) because it targets two distinct query clusters — `opioid detox brooklyn` AND the clean `medication assisted treatment brooklyn`. Two H2 clusters in parallel, one URL.
- **Drug detox is the architectural hub** — all substance-specific pages inbound to it; it outbounds to all of them. Word count modest (1,400-1,600) but link-count high.
- **Short-term rehab is the easiest win** — only Urban Recovery (HQDM) ranks among real providers in top 12 for `short term inpatient brooklyn`. Quick measurable lift.
- **Benzo detox carries clinical specificity** (Xanax/Klonopin/Ativan/Valium named) because Seek Counseling's thin 504-word page ranks by naming them in title — Surfpoint matches and beats on depth + schema.

---

### 3.4 Internal-link refactor decisions

#### I-01 — Each service page targets 50+ inbound contextual links

**What changes:** Each service page receives contextual inbound links from:
- 1 link from homepage (each new H2 section per H-02)
- 3-5 links from each retained blog (per Task 6 AUDIT triage Wave 1, ~75 blogs)
- 1 link from each real-catchment location page's "Services Available in [Neighborhood]" block (executes in a future locations-page rebuild task — out of scope for Task 1 but flagged)
- 1-2 links from peer service pages (per S-U-08)

**Evidence:** Current contextual inbound count to service pages: ~0 (template-nav links don't count). Per Q2 strategy doc §2.2, the interlinking SOP gives services 15 link-plan rows vs 305 for locations and 423 for blogs.

**Reasoning:** Equity flows where you point it. 50+ inbound contextual is the rough threshold at which a page starts to outrank competitors on content-equity factors alone. The mix of source types (homepage + blogs + locations + peers) creates topical clustering — Google's algorithm reads "many topically-relevant pages link here" as a strong signal of subject authority.

**Expected outcome:** Service-page authority lift; ranking response on anchor queries within 60-90 days post-link-deployment.

---

#### I-02 — Real-catchment only for location links (no doorways)

**What changes:** All location-page links from homepage neighborhood enumeration, from service pages' Areas We Serve blocks, and from any other location reference target real-catchment URLs only. Doorway URLs (`/locations/astoria`, `/locations/corona`, `/locations/east-elmhurst`, etc.) are not linked from anywhere new.

**Evidence:** Per `/areas-served` audit (§2.6), current site mixes real-catchment and doorway URLs in location references. Task 5 (legacy URL execution) is scheduled to 301-redirect the 27 NJ + 9 out-of-borough doorways.

**Reasoning:** Linking to doorways during Task 1 actively contradicts Task 5's purpose. Real-catchment-only links route equity to pages we're keeping. Pre-redirect, this also reduces the doorway pages' inbound count, which makes the redirect cleaner.

**Expected outcome:** No accidental support for pages being killed; equity consolidation on pages being kept; cleaner pre-/post-redirect ranking trajectory.

---

### 3.5 Out-of-scope decisions — what Task 1 does NOT do, and why

| Item | Out-of-scope rationale | Where it lives |
|---|---|---|
| `/areas-served` page rebuild | Page is broken; rebuild is its own architectural piece; should sequence with doorway redirects for atomic execution | Task 5 (legacy URL execution) — recommend bundling |
| 27 NJ + 9 out-of-borough doorway 301-redirects | Compliance + equity-consolidation action; cleaner if it ships together with the areas-served rebuild | Task 5 |
| GBP profile optimization (categories, attributes, description, photos, Q&A, posting cadence, booking URL) | Different surface (GBP Manager), different owner (GBP Ops), different review cycle | Task 2 |
| Disavow file + PBN PR pause | Off-page action; independent of on-page rebuild | Task 3 |
| AUDIT triage of 555 legacy URLs (rewrite + internal-link to service) | Task 1 receives the 50+ inbound target; Task 6 delivers the inbound link supply | Task 6 — Wave 1 in M1, balance M2-M3 |
| Location page rebuilds (per-neighborhood) | Services link **to** location pages in Task 1; full locations × services matrix requires location pages to also be rebuilt as proper hubs, which is a separate project | Future task — recommend M3 or Q3 |
| LegitScript verification | Compliance status check; gates paid acquisition decisions but doesn't gate the rebuild | Task 10 |
| Paid acquisition strategy | Gated by Task 10; not part of organic architectural reset | Future task — Q3 earliest |
| Service-area expansion (neighborhood × service combinations) | Task 1 sets up the 5 service-page hubs and links them to existing real-catchment locations; the neighborhood × service expansion (e.g., dedicated `alcohol-detox-bay-ridge` pages) is a separate volume play | Future task |

---

## 4. Implementation plan

### 4.1 Phase A — Homepage (deploy CRD + beyond-CRD additions)

**Owner:** Aleksa Popovic (On-Page) + Surfpoint Ops (clinical roster) + Aleksandar (schema spec ownership)

| Step | Action | Deliverable |
|---|---|---|
| A.1 | Pull existing homepage HTML, identify CMS surface for each H2 section | CMS access confirmation + section anchor map |
| A.2 | Deploy meta title + description + H1 (H-13) | Live |
| A.3 | Deploy 5 CRD H2 sections in CRD order (H-01) | Live |
| A.4 | Deploy SAMHSA footer reference (H-10) | Live |
| A.5 | Deploy service-area map iframe in Coney Island H2 (H-08) | Live |
| A.6 | Deploy neighborhood enumeration block in Coney Island H2 (H-09) | Live |
| A.7 | Deploy 3 beyond-CRD H2 sections: Insurance We Accept (H-05), Meet Our Clinical Team (H-06), What to Expect First 24 Hours (H-07) | Live |
| A.8 | Add 5-8 patient-facing Q&As to homepage bottom (H-12 visible content) | Live |
| A.9 | Replace `LocalBusiness` schema block with full `@graph` (H-03 + H-04 + H-11 + H-12 schema sides) | Live + validator pass |
| A.10 | Internal-link contextual references from 5 new H2s → service pages (H-02) | Live + crawl verified |
| A.11 | GSC URL inspection submit post-deploy | Submitted; index status tracked daily for 14 days |
| A.12 | Schema validator pass (validator.schema.org/RRT + Rich Results Test) | Zero errors, zero warnings on critical types |

**Phase A acceptance criteria (binary):**
- [ ] All A.* steps live
- [ ] Schema validator pass (per `reference_schema_validation_workflow.md` 3-layer gate: Wikidata Q-ID + schema.org property + manual paste)
- [ ] Mobile + desktop render verified
- [ ] No Core Web Vitals regression (LCP, INP, CLS re-baseline)
- [ ] All CTAs (hero + sticky mobile + buttons) → intake (646) 347-1893
- [ ] Footer NAP block displays both phones with role labels

### 4.2 Phase B — Service-page rebuild (5 pages)

**Owner:** Aleksa Popovic (On-Page) + Content team (page copy) + Aleksandar (schema spec)

**Per-page sequence (applies to each of 5 pages):**

| Step | Action |
|---|---|
| B.1 | Pull current page HTML; archive as reference |
| B.2 | Draft new content per universal template + per-page brief from §3.3 |
| B.3 | Add meta title + meta description (S-U-01) |
| B.4 | Add OASAS / CARF / SAMHSA references (S-U-04) |
| B.5 | Add Insurance We Accept section (S-U-05) |
| B.6 | Add Our Clinical Team reference (S-U-07) |
| B.7 | Add Areas We Serve block with real-catchment links + service-area map iframe (S-U-06) |
| B.8 | Add on-page form (S-U-03) |
| B.9 | Add cross-links to peer service pages (S-U-08) |
| B.10 | Deploy 4-type schema stack (S-U-02) |
| B.11 | Validator pass + Rich Results Test |
| B.12 | Mobile + desktop QA |
| B.13 | GSC URL inspection submit |

**Recommended sequencing across 5 pages:**
1. **Short-term rehab first** — lowest-competition surface, fastest measurable win
2. **Drug detox hub second** — sets up the architectural pattern; other substance-specific pages link into it
3. **Alcohol detox + Opioid detox parallel** — highest-traffic substance queries
4. **Benzo detox last** — narrowest-volume cluster, smallest near-term ROI

### 4.3 Internal-link refactor — Phase A+B parallel

Homepage H2 contextual links to services (Phase A.10) ship with Phase A. Service-page cross-links to peers (Phase B.9) ship with each service page rebuild. Location-page → service-page back-links require Task 6 Wave 1 (AUDIT-triage rewrite of 75 core-topical blogs) for full link-count target. Phase B alone gets each service page to ~10 contextual inbound; 50+ requires Task 6 to complete.

---

## 5. Expected outcomes — what success looks like

### 5.1 Quantitative targets (post-Phase-A + Phase-B + Task-6-Wave-1)

| Metric | Current | 90-day target | 180-day target | Source / methodology |
|---|---|---|---|---|
| Service-page sessions (5 pages combined, 90d) | 104 | 250–400 | 500–800 | GA4 pages report |
| Service-page conversions (5 pages combined, 90d) | 0 | 3–6 | 8–15 | GA4 events + form-submit tracking |
| Service-page average position (anchor queries) | n/a (not ranking) | top 10 on 2 of 6 anchor queries | top 10 on 4 of 6 + top 5 on 1 | GSC per-query rank |
| Homepage average position (`drug rehab brooklyn` cluster) | 5.8 | 4.0 | 3.0 | GSC |
| Homepage word count | 1,320 | 2,400 | 2,400 | Re-pull metrics.csv |
| Homepage schema types | 1 | 5 | 5 | Schema audit |
| Service-page schema types | 0 each | 4 each | 4 each | Schema audit |
| Homepage Coney Island mentions | 0 | 4+ | 5+ | Re-pull metrics.csv |
| LLM commercial-local citation rate (Surfpoint) | 7/10 | 9/10 | 9/10 | LLM re-audit (Q2 strategy §5.4 methodology) |
| LLM research-phase citation rate (Surfpoint) | 0/8 | 1/8 | 2/8 | LLM re-audit |
| Rich-result eligibility (FAQ, Review, AggregateRating) | 0 types | 3 types | 3 types | GSC enhancements report |

### 5.2 Revenue-trajectory positioning

Per Q2 strategy doc §3.2 (three-scenario model):

| Scenario | Conv-rate assumption | Annual missed revenue est | What it requires |
|---|---|---|---|
| Pessimistic | 0.15% (current non-brand rate) | ~$52K | Just rank improvements |
| **Mid-case** | **0.5% (halfway to brand rate)** | **~$175K** | **Service-page rebuild + interlinking ← Task 1 lands here** |
| Headline | 1.0% (matches Direct rate) | ~$352K | Full architectural fix (Task 1 + Task 6 + Task 2 + Task 3) |

**Task 1 alone moves the engagement from pessimistic to mid-case scenario.** Headline requires the full Q2 task stack to ship.

### 5.3 Architectural outcome (qualitative)

Beyond the metric targets, Task 1 delivers:
- A repeatable service-page template that can be reused for any future neighborhood × service expansion
- A schema architecture (`@graph` with cross-`@id` references) that scales — every future page can reference the homepage `MedicalBusiness` entity rather than duplicating it
- A clean separation between real-catchment locations (kept, linked) and doorway URLs (redirected, ignored)
- A patient-journey cross-linking pattern that mirrors how visitors and clinical sequence actually work

---

## 6. Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Schema validator errors block deploy | Medium | Low | 3-layer pre-deploy gate per `reference_schema_validation_workflow.md` |
| Homepage redesign drops `drug rehab brooklyn` ranking (current pos 5.8) during Google re-crawl | Low-Med | Medium | Stage via canonical-preserving deploy; submit URL inspection request post-deploy; monitor GSC daily for 14 days |
| Service-page rebuilds drop Surfpoint from any current rankings | Low (not in top 8 for any service query today) | Low | Same monitoring |
| Internal-link refactor over-concentrates equity on one service page | Low | Low | Spread inbound proportionally; review distribution post-deploy |
| Clinical-roster H2 (A-10) contains incorrect credentials | Medium | High | Aleksa + Zach validate names + credentials with Surfpoint Ops before publish; v1 can ship role-titles-only |
| Insurance-carrier section becomes a coverage-claim liability | Low | Medium | Use qualifying language ("Accepted insurance includes...; coverage verification required before admission") |
| Service-page rebuild capacity overruns Phase B timeline | Medium | Medium | Sequenced per §4.2 (short-term rehab first, lowest-competition, fastest measurable win); fewer-but-bigger pieces vs all-five-at-once |
| Doorway pages (`/locations/astoria` etc.) accidentally linked from new content | Low | Medium | Real-catchment allowlist hardcoded in editor; pre-deploy crawl check that no body link routes to doorway URL list |

**Rollback plan:** Phase A and Phase B are independently revertable. Homepage changes revert via CMS version history (content blocks + schema block). Service pages revert per page via CMS. Schema upgrades carry lowest reversion cost (drop in / drop out a single `<script>` block).

---

## 7. Dependencies and unresolved questions

| Dependency / question | Status | Owner | Mitigation if blocked |
|---|---|---|---|
| CRD content draft-complete | ✓ Verified in docx | n/a | n/a |
| Clinical roster for H-06 + S-U-07 | Pending — needs Surfpoint Ops | Aleksa to request | v1 ships role-titles-only |
| CMS / dev hand-off path (WordPress direct vs dev ticket) | Unknown | Aleksa feasibility pass | Determines who owns each acceptance criteria |
| Staging environment availability | Unknown | Aleksa feasibility pass | If no staging, ship to production with rollback plan |
| Insurance-carrier logo assets | Unknown | Aleksa to request | Use text-only carrier names if logos unavailable |
| LegitScript verification status | Pending (Task 10) | Aleksandar | Schema entry conditional — add when verified |
| Task 6 Wave 1 (AUDIT triage 75 core-topical blogs) | Pending | Aleksandar / Content | Service-page inbound link count caps at ~10 contextual until Wave 1 ships |
| Real-catchment location pages bucketed correctly in decision matrix | Verified — most are KEEP; verify `/locations/coney-island`, `/locations/bay-ridge`, `/locations/bath-beach`, etc. are not in NOINDEX | Aleksandar | Pull from NOINDEX if mis-bucketed (they're now link targets) |
| 120 GBP reviews available for H-11 Review schema | ✓ In `exports/gbp/` | n/a | Pick 5 best (named reviewer + 100-200 char body) |

---

## 8. Appendix A — full audit metrics

Source: `exports/competitive_audit/metrics.csv`, 18-URL audit conducted 2026-05-11.

### A.1 Homepage comparison

| Metric | Surfpoint live | ACI | Genesis | Ascendant | Urban (HQDM) | Elevate Point | TBH | Seek |
|---|---|---|---|---|---|---|---|---|
| Word count | 1,320 | 793 | 652 | 2,590 | 1,556 | 1,308 | 888 | 504 |
| H1 / H2 / H3 | 1 / 7 / 4 | 1 / 4 / 5 | 0 / 6 / 0 | 1 / 19 / 16 | 1 / 9 / 3 | 1 / 17 / 17 | 1 / 3 / 0 | 2 / 1 / 2 |
| JSON-LD types | LocalBusiness | Breadcrumb+WebPage+WebSite | Breadcrumb+ImageObject+WebPage+WebSite | MedicalClinic | LocalBusiness | LB+MedicalBusiness+MedicalOrg+Org+FAQ+Review+Breadcrumb+WebPage | (none) | Breadcrumb+ImageObject+WebPage+WebSite |
| Schema block count | 1 | 3 | 4 | 1 | 1 | 8 | 0 | 4 |
| OASAS mentions | 2 | 0 | 1 | 0 | 4 | 0 | 1 | 0 |
| CARF mentions | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| SAMHSA mentions | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| MAT mentions | 2 | 1 | 1 | 6 | 5 | 0 | 0 | 1 |
| Dual diagnosis | 2 | 0 | 0 | 4 | 1 | 1 | 0 | 2 |
| Medicaid mentions | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Aetna / Cigna / BCBS | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Coney Island mentions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Brooklyn mentions | 27 | 1 | 7 | 5 | 21 | 18 | 8 | 3 |
| Form tags | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| iframe map | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Image count | 21 | 5 | 0 | 2 | 0 | 2 | 1 | 0 |
| Internal link count | 31 | 37 | 51 | 236 | 46 | 96 | 124 | 30 |
| Tel: links | 9 | 6 | 2 | 4 | 7 | 5 | 1 | 3 |

### A.2 Service-page state (Surfpoint only — all 5 share the failure pattern)

| Metric | sp_alcohol | sp_opioid | sp_drug | sp_benzo | sp_short_term |
|---|---|---|---|---|---|
| Word count | 844 | 863 | 643 | 732 | 779 |
| Meta description length | 0 | 0 | 0 | 0 | 0 |
| JSON-LD blocks | 0 | 0 | 0 | 0 | 0 |
| H1 / H2 / H3 | 1 / 6 / 2 | 1 / 8 / 2 | 1 / 6 / 0 | 1 / 6 / 1 | 1 / 6 / 3 |
| OASAS / CARF / SAMHSA | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Medicaid / Aetna / Cigna / BCBS | 0 / 1 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 |
| MAT mentions | 0 | 2 | 0 | 2 | 0 |
| Dual diagnosis | 0 | 0 | 0 | 0 | 0 |
| Coney Island mentions | 0 | 0 | 0 | 0 | 0 |
| Brooklyn mentions (header/footer only) | 9 | 9 | 9 | 9 | 9 |
| Form tags | 0 | 0 | 0 | 0 | 0 |
| Image count | 9 | 9 | 9 | 9 | 9 |
| Internal link count (template only) | 32 | 32 | 32 | 32 | 32 |

### A.3 SERP top-3 ranking real service providers per anchor query

| Anchor query | Real-provider top-3 (after directory / gov / aggregator strip) |
|---|---|
| alcohol detox brooklyn | tbh.org (#4), genesisdob.com (#5), urbanrecovery.com (#6) |
| opioid detox brooklyn | tbh.org (#4), genesisdob.com (#5) — only 2 in top 12 |
| drug detox brooklyn | tbh.org (#4), genesisdob.com (#5), urbanrecovery.com (#6) / elevatepoint.org (#8) |
| benzodiazepine detox brooklyn | genesisdob.com (#5), tbh.org (#6), seekcounseling.com (#7) |
| medication assisted treatment brooklyn | mountsinai.org (#1), seekcounseling.com (#5), onebrooklynhealth.org (#6) |
| short term inpatient brooklyn | urbanrecovery.com (#4) — only real provider in top 12 |

### A.4 Real catchment neighborhoods (per `client.json`)

Coney Island, Brighton Beach, Bay Ridge, Sunset Park, Bath Beach, Bensonhurst, Borough Park, Gravesend, Sheepshead Bay, Dyker Heights, Manhattan Beach, Marine Park, Flatlands, Old Mill Basin, Stillwell, Neptune Avenue, Shore Road, Starrett City, Seagate (Sea Gate), Midwood, East Midwood, Ditmas Park, New Utrecht, Mapleton, Flatbush, Fort Hamilton.

---

## 9. Appendix B — supporting documents

| Document | Path | Purpose |
|---|---|---|
| Homepage gap doc (raw diagnostic) | `exports/competitive_audit/01_homepage_gap.md` | Full per-element comparison of live + CRD + 3 competitors |
| Service-page gap doc (raw diagnostic) | `exports/competitive_audit/02_service_pages_gap.md` | Per-service ranking-page comparison + universal failure pattern |
| Aleksa implementation brief (earlier version of this doc) | `deliverable/Surfpoint_Task1_Aleksa_Brief.md` | Now superseded by this consolidated plan |
| Q2 strategy doc | `deliverable/Surfpoint_Recovery_Q2_2026_Custom_Strategy.md` | Full diagnostic context — channels, conversion concentration, decision matrix, LLM audit, GBP profile depth, revenue scenarios |
| Q2 strategy condensed | `deliverable/Surfpoint_Recovery_Q2_2026_Strategy_Condensed.md` | Executive summary |
| Homepage CRD (source content) | `drivedocs/Surfpoint Recovery - Final.docx` | Color-coded draft of homepage page copy |
| Interlinking SOP | `drivedocs/Surfpoint Recovery - Interlinking.xlsx` | Current link plan (refactor against this) |
| Audit metrics | `exports/competitive_audit/metrics.csv` | 18-URL on-page metrics (re-runnable via `_run.py`) |
| Audit raw HTML | `exports/competitive_audit/raw_html/` | Page snapshots as fetched 2026-05-11 |
| SERP data | `exports/dataforseo/serp_organic.csv` + `exports/competitive_audit/serp_*.csv` | Anchor-query rankings |
| Client configuration | `client.json` | Services, real_catchment_neighborhoods, insurance_accepted, contact, credentials |
| Schema validation workflow | `methodology/schema-validation-workflow.md` (or `reference_schema_validation_workflow.md`) | 3-layer pre-deploy gate |
| Competitor identification SOP | `methodology/competitor-identification.md` | Vertical-strip filter (directories, govs, aggregators) |

---

## 10. Aleksa feasibility-pass checklist

Before this plan lands in Asana, Aleksa to confirm or escalate:

1. CMS / dev hand-off — WordPress direct or dev ticket pipeline?
2. Staging environment available, or production-only?
3. Clinical roster availability — Week 1 names or ship v1 role-titles-only?
4. Schema implementation pattern — single `@graph` in `<head>` (recommended) or parallel `<script>` blocks?
5. Insurance-carrier logo availability — brand-approved assets or text-only?
6. GSC URL-inspection submission ownership — Aleksa or Zach?
7. Effort estimate per phase — Aleksa's hour-band for Phase A vs Phase B (informs Zach's Asana scheduling and Milica's reporting cadence)
8. Capacity reality — given the universal service-page rebuild affects 5 pages, is Phase B M1-deliverable or does it bleed into M2?

---

*End of consolidated plan. Aleksa: feasibility pass → answer §10 checklist → Zach routes into Asana with this doc as the single reference.*
