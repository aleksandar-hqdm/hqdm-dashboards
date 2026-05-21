# Surfpoint /treatments/[service] Sub-Pages — Build Plan

**Scope:** Which sub-pages to build, in what order, with what content. Companion to `/treatments` hub update.
**Author:** Aleksandar Spasevski · **Date:** 2026-05-11
**Architecture:** Path C — `/treatments` stays as hub; specific service sub-pages live at `/treatments/[service]`; orphan `/services/*` URLs redirect to corresponding sub-pages when those sub-pages ship (separate brief).

---

## 1. Sub-page list — 6 candidates

Each sub-page corresponds to a service H2 on the /treatments hub:

| Sub-page URL | Service | /treatments H2 anchor | Orphan equivalent (currently 200, no links to it) |
|---|---|---|---|
| `/treatments/alcohol-detox` | Alcohol Detox | `#alcohol-detox` | `/services/alcohol-detox-services` |
| `/treatments/opioid-detox` | Opioid Detox + MAT (combined) | `#opioid-detox` | `/services/opioid-detox-services` |
| `/treatments/benzodiazepine-detox` | Benzodiazepine Detox | `#benzodiazepine-detox` | `/services/benzodiazepine-detox-services` |
| `/treatments/dual-diagnosis` | Dual Diagnosis Treatment | `#dual-diagnosis` | *(no orphan — never built)* |
| `/treatments/drug-detox` | Drug Detox (broad parent) | `#drug-detox` | `/services/drug-detox-services` |
| `/treatments/short-term-rehab` | Comprehensive Short-Term Rehab | `#short-term-rehab` | `/services/comprehensive-short-term-rehab` |

---

## 2. Prioritization data — addressable demand × difficulty per cluster

Source: `exports/keyword_universe/cluster_summary.csv` + `exports/keyword_universe/transactional_top500.csv` + GSC ranking data + DataForSEO SERP audit.

### 2.1 Cluster-level summary (US volume, Brooklyn-addressable subset)

| Service cluster | Geo-modifier addressable | Near-me addressable | Total addressable | KD (avg) | Current SP rank (anchor query) |
|---|---:|---:|---:|---:|---|
| **drug_broad** | 2,850 | 598 | **6,130** | 46.9 | Not in top 8 |
| **alcohol** | 1,618 | 445 | **4,583** | 41.5 | Not in top 8 *(but map pack: rank 1.47)* |
| **detox** *(generic)* | 230 | 613 | 1,641 | 51.7 | Not in top 8 |
| **opioid_mat** | 116 | 105 | **718** | **16.0 → geo-only KD 3.3** | Not in top 12 *(clean MAT query)* |
| **dual_diagnosis** | 156 | ~75 *(est)* | **551** | **9.3 → geo-only KD 2.9** | Not in top 12 |
| **inpatient** | 20 | 160 | ~180 | 19.8 | Not in top 12 *(low-comp surface)* |

### 2.2 Build-priority score — `addressable / KD` (higher = better leverage)

| Service | Total addressable | KD (effective) | Leverage score | Strategic notes |
|---|---:|---:|---:|---|
| **dual_diagnosis** | 551 | **2.9** | **190** | **Lowest competition in entire universe.** LLM citation gap (3 of 18 prompts). Differentiator vs Genesis/ACI/TBH (none offer integrated dual diagnosis). |
| **opioid_mat** | 718 | **3.3** | **218** | Clean MAT query newly identified — Mount Sinai dominates but **only with outpatient**. Surfpoint's inpatient MAT is uncontested. |
| **alcohol** | 4,583 | 41.5 | 110 | Largest aligned cluster. **Map pack already rank 1.47** — convert GBP dominance into organic. |
| **inpatient** | 180 | ~20 | 9 | Tiny volume but uncontested SERP — only Urban Recovery (HQDM) ranks. Quick measurable win. |
| **drug_broad** | 6,130 | 46.9 | 131 | Biggest volume, hardest competition. Hub-type page. |
| **benzodiazepine** | ~1,300 *(est)* | ~35 | ~37 | Small cluster; high impressions on orphan `/services/benzodiazepine-detox-services` (1,925 / 365d, pos 18-30) → **redirect target for highest-impression orphan.** |

### 2.3 Critical Surfpoint context modifiers

- **alcohol** → already winning maps (`alcohol rehab brooklyn` rank 1.47 / 96% top-3). Building the sub-page captures the on-page surface that visitors land on after clicking the map listing. Map → on-page conversion is the highest-ROI vector available.
- **opioid_mat** → **the MAT query is structurally underclaimed.** Top 3 are Mount Sinai (outpatient), Seek Counseling (outpatient), One Brooklyn Health (outpatient). Surfpoint is the only inpatient detox option that mentions MAT meds (buprenorphine, naltrexone) — and currently doesn't rank because it doesn't have a dedicated page.
- **dual_diagnosis** → KD 2.9 + LLM citation gap + service differentiator. Smallest-volume of the top-leverage picks but the easiest to win and the most strategically aligned with E-E-A-T.
- **benzodiazepine** → not in the top leverage list but the orphan `/services/benzodiazepine-detox-services` receives the bulk of orphan impressions (1,925 / 365d at avg pos 18-30, mostly informational benzo queries). Building this sub-page gives the redirect a strong destination.
- **drug_detox** → hub-type query. Hardest cluster (KD 46.9). Volume is real but competition is national brand + hospital systems. **Build last** — the architectural role can be served by /treatments hub alone for the first 2 months.

---

## 3. Recommended build sequence

### Wave 1 — Month 1 — Quick wins + lowest-competition

| Order | Sub-page | Why first |
|---|---|---|
| 1 | **`/treatments/alcohol-detox`** | Largest aligned cluster (4,583 addressable). Surfpoint's existing map dominance (rank 1.47) creates the highest map-to-on-page conversion opportunity. KD is high (41.5) but Surfpoint's structural advantages (GBP, credentials, reviews) make this winnable. |
| 2 | **`/treatments/dual-diagnosis`** | Leverage score 190 (KD 2.9). LLM citation gap. Service differentiator vs Genesis/ACI/TBH. Lowest competition + strategic alignment. Small volume but high probability of ranking in 60-90 days. |

### Wave 2 — Month 2 — Clean-query opportunities

| Order | Sub-page | Why second |
|---|---|---|
| 3 | **`/treatments/opioid-detox`** *(combined with MAT)* | Leverage 218. **Two query clusters in one URL** — `opioid detox brooklyn` (KD 16) + `medication assisted treatment brooklyn` (KD 3.3 effective). MAT cluster is structurally underclaimed by inpatient providers. |
| 4 | **`/treatments/short-term-rehab`** | Smallest volume (~180 addressable) but **the most uncontested SERP** in the entire set — only Urban Recovery (HQDM) ranks among real service providers. Quick measurable win to demonstrate cadence. |

### Wave 3 — Month 3 — Hub + redirect capture

| Order | Sub-page | Why last |
|---|---|---|
| 5 | **`/treatments/drug-detox`** | Biggest cluster (6,130 addressable) but highest difficulty (KD 46.9). Architectural role — broad parent for substance-specific sub-pages. Build last because: (a) competing against national brands, (b) /treatments hub serves the "drug detox" semantic role for the first 2 months, (c) substance-specific pages built earlier inbound-link to it once it's live. |
| 6 | **`/treatments/benzodiazepine-detox`** | Small cluster but **redirect target for the highest-impression orphan** (`/services/benzodiazepine-detox-services`, 147 imps/30d, 1,925 imps/365d). When this sub-page ships, the 301 captures the orphan's impression flow into a page with proper meta + schema + form, which should convert 5-10% of those impressions. |

### Alternative — accelerate benzo to Wave 2

If the orphan benzo impressions (147 imps/30d at pos 18-30) feel like meaningful leakage, swap the order of benzo and short-term-rehab in Wave 2. Both are small-leverage on volume but benzo has live impression flow to capture immediately.

---

## 4. Per-sub-page content brief

Each sub-page follows the **universal service-page template** defined in `Surfpoint_Task1_Rebuild_Plan.md` §4.1. Universal sections per page:

1. Hero (H1 + sub-hero with OASAS / CARF / Medicaid / Coney Island + intake CTA)
2. About [Service]
3. Surfpoint's [Service] Approach
4. What to Expect: Your First 24 Hours *(can reference the homepage version)*
5. Substances / Specifics *(service-dependent)*
6. Insurance We Accept *(reuse pattern from homepage H-16)*
7. Areas We Serve *(real-catchment block + map iframe)*
8. Our Clinical Team *(service-relevant clinician)*
9. Frequently Asked Questions *(5-8 service-specific Q&As + FAQPage schema)*
10. Continue Your Recovery *(cross-links to peer sub-pages)*
11. Footer NAP *(both phones with role labels)*

**Universal schema per sub-page (per `Surfpoint_Task1_Rebuild_Plan.md` §4.1):**
- `MedicalProcedure` (primary, service-specific)
- `MedicalBusiness` reference via `@id` to homepage org entity
- `BreadcrumbList` (Home > Treatments > [Service])
- `FAQPage` (matching visible FAQ)

### 4.1 `/treatments/alcohol-detox` — Wave 1, build first

- **Anchor query:** `alcohol detox brooklyn` (volume ~700 US monthly, addressable in Brooklyn cluster)
- **Secondary queries:** `alcohol rehab brooklyn` (Surfpoint already map-pack rank 1), `inpatient alcohol detox brooklyn`, `alcohol detox coney island`
- **Word target:** 1,400–1,600
- **Meta title:** `Alcohol Detox in Brooklyn, NY | OASAS-Licensed | Surfpoint Recovery`
- **Meta description:** `OASAS-licensed inpatient alcohol detox in Coney Island, Brooklyn. 24/7 medical supervision, CIWA-Ar protocol. Medicaid & major insurance accepted. (646) 347-1893.`
- **H1:** `Alcohol Detox in Brooklyn, NY`
- **Service-specific content:**
  - **Medical protocol** — CIWA-Ar scoring, benzodiazepine taper, thiamine + folate supplementation, MD oversight
  - **Withdrawal timeline** — Days 1-3 (acute), Days 4-7 (peak), Days 8+ (transition to rehab)
  - **DTs and seizure risk management** — why inpatient is required for severe dependence
  - **Program duration** — 3-7 days detox + 14-30 days rehab
  - **Substances co-treated** — poly-substance presentations (alcohol + benzo, alcohol + opioid)
- **Cross-link to:** opioid-detox (poly), benzo-detox (cross-tolerance), drug-detox hub, short-term-rehab (post-detox), dual-diagnosis (anxiety/depression co-occurrence)
- **301 redirect from:** `/services/alcohol-detox-services` (0 clicks 365d but residual relevance)

### 4.2 `/treatments/dual-diagnosis` — Wave 1, build first

- **Anchor query:** `dual diagnosis treatment brooklyn` (KD 2.9, smallest competition in universe)
- **Secondary queries:** `co-occurring disorder treatment brooklyn`, `mental health and addiction brooklyn`, `dual diagnosis rehab brooklyn`
- **Word target:** 1,300–1,500
- **Meta title:** `Dual Diagnosis Treatment in Brooklyn, NY | Integrated Care | Surfpoint Recovery`
- **Meta description:** `Integrated dual diagnosis treatment in Brooklyn — addressing addiction and co-occurring depression, anxiety, PTSD. CBT-grounded, OASAS-licensed inpatient care. Medicaid accepted.`
- **H1:** `Dual Diagnosis Treatment in Brooklyn, NY`
- **Service-specific content:**
  - **What dual diagnosis means** — patient-language explanation
  - **Conditions treated** — depression, anxiety, PTSD, bipolar, trauma history
  - **Clinical approach** — CBT, DBT components, integrated psychiatric care
  - **Why integrated care matters** — relapse risk of treating only addiction
  - **MAT for opioid + co-occurring** — links to opioid-detox
- **Cross-link to:** opioid-detox (MAT + co-occurring), alcohol-detox (anxiety co-occurrence), benzo-detox, short-term-rehab
- **No orphan to redirect** — this is a new URL

### 4.3 `/treatments/opioid-detox` — Wave 2

- **Anchor queries (dual cluster):** `opioid detox brooklyn` + `medication assisted treatment brooklyn`
- **Word target:** 1,500–1,800 (deepest, two clusters)
- **Meta title:** `Opioid Detox & MAT in Brooklyn, NY | Buprenorphine + Naltrexone | Surfpoint Recovery`
- **Meta description:** `Inpatient opioid detox with Medication-Assisted Treatment (MAT) in Brooklyn — buprenorphine and naltrexone. OASAS-licensed, Medicaid accepted. (646) 347-1893.`
- **H1:** `Opioid Detox & Medication-Assisted Treatment (MAT) in Brooklyn, NY`
- **Service-specific content:**
  - **Parallel H2 clusters** — Opioid Detox specifics (withdrawal timeline, comfort meds) + MAT specifics (buprenorphine, naltrexone, induction protocol, maintenance options)
  - **SAMHSA opioid treatment alignment** — citations
  - **Substances treated** — heroin, fentanyl, prescription opioids (Oxycodone, Percocet, Vicodin, Norco)
  - **Why inpatient MAT** — vs outpatient (Mount Sinai, Seek competitors)
  - **MAT-supervising clinician** — named (from clinical team)
- **Cross-link to:** alcohol-detox, drug-detox hub, short-term-rehab, dual-diagnosis (opioid + co-occurring)
- **301 redirect from:** `/services/opioid-detox-services`

### 4.4 `/treatments/short-term-rehab` — Wave 2

- **Anchor query:** `short term inpatient brooklyn` (lowest competition; only Urban Recovery ranks in top 12)
- **Secondary queries:** `short term rehab brooklyn`, `inpatient rehabilitation brooklyn`, `14 day rehab brooklyn`, `30 day rehab brooklyn`
- **Word target:** 1,300–1,500
- **Meta title:** `Short-Term Inpatient Rehab in Brooklyn, NY | Surfpoint Recovery`
- **Meta description:** `Short-term inpatient drug & alcohol rehab in Brooklyn. 14-30 day program, OASAS-licensed, CARF Center of Excellence. Discharge planning included. (646) 347-1893.`
- **H1:** `Short-Term Inpatient Rehab in Brooklyn, NY`
- **Service-specific content:**
  - **Program length** — 14-30 days (specific)
  - **Daily structure** — individual therapy, group counseling, life-skills, relapse prevention
  - **Discharge planning + aftercare coordination** — surface as feature
  - **Short-Term vs Long-Term Rehab** — comparison block (when is each appropriate)
  - **Continuum from detox → rehab** — patient journey graphic
- **Cross-link to:** all 4 detox sub-pages (upstream entry)
- **301 redirect from:** `/services/comprehensive-short-term-rehab`

### 4.5 `/treatments/drug-detox` — Wave 3 (hub parent)

- **Anchor query:** `drug detox brooklyn` (biggest volume, hardest competition)
- **Secondary queries:** `drug rehab brooklyn`, `inpatient drug detox brooklyn`, `medical detox brooklyn`
- **Word target:** 1,400–1,600
- **Meta title:** `Drug Detox in Brooklyn, NY | All Substances | Surfpoint Recovery`
- **Meta description:** `Inpatient drug detox for alcohol, opioids, benzodiazepines & poly-substance dependence. OASAS-licensed, CARF Center of Excellence. Coney Island, Brooklyn. (646) 347-1893.`
- **H1:** `Drug Detox in Brooklyn, NY`
- **Service-specific content:**
  - **Architectural hub** — anchor-link out to all substance-specific sub-pages
  - **All substances we detox** — comprehensive list with internal links
  - **Poly-substance dependence** — Surfpoint's clinical capability for complex cases
  - **Medical supervision philosophy**
  - **Treatment continuum** — detox → rehab → aftercare flow chart
- **Cross-link to:** all 5 other sub-pages (alcohol, opioid, benzo, dual, short-term)
- **301 redirect from:** `/services/drug-detox-services`

### 4.6 `/treatments/benzodiazepine-detox` — Wave 3 (orphan redirect target)

- **Anchor query:** `benzodiazepine detox brooklyn`
- **Secondary queries:** `xanax detox brooklyn`, `klonopin detox brooklyn`, `benzo tapering brooklyn`, `valium detox brooklyn`
- **Word target:** 1,400–1,600
- **Meta title:** `Benzodiazepine Detox in Brooklyn, NY | Xanax, Klonopin, Ativan | Surfpoint Recovery`
- **Meta description:** `Inpatient benzodiazepine detox with structured tapering protocol. OASAS-licensed Brooklyn detox treating Xanax, Klonopin, Ativan, Valium. (646) 347-1893.`
- **H1:** `Benzodiazepine Detox in Brooklyn, NY`
- **Service-specific content:**
  - **Named benzos treated** — Xanax (alprazolam), Klonopin (clonazepam), Ativan (lorazepam), Valium (diazepam)
  - **Why inpatient for benzo detox** — seizure risk in unsupervised withdrawal; differentiates from outpatient Seek Counseling (ranking competitor)
  - **Structured tapering protocol** — clinical specifics
  - **Withdrawal timeline** — educational + intent-aligned
  - **Z-drugs and related** — Ambien, Lunesta (sub-class)
  - **Long-half-life vs short-half-life dependence** — clinical depth
- **Cross-link to:** alcohol-detox (cross-tolerance), drug-detox hub, dual-diagnosis (anxiety co-occurrence — high overlap)
- **301 redirect from:** `/services/benzodiazepine-detox-services` *(this is the highest-impression orphan — 147 imps/30d, 1,925 imps/365d, avg pos 18-30 — the redirect captures this flow into a page with proper schema + form)*

---

## 5. Aggregated build effort estimate

Assuming the universal template per `Task1_Rebuild_Plan.md` §4.1, each sub-page requires:
- Content writing: ~6-10 hours per page (1,400-1,800 words + per-page clinical specifics)
- Schema implementation: ~1 hour per page (template reusable)
- Form integration: ~1 hour per page (template reusable across pages)
- QA + cross-link verification: ~1-2 hours per page

**Per-page total: ~10-14 hours**

**Wave totals:**
- Wave 1 (2 pages): ~20-28 hours
- Wave 2 (2 pages): ~20-28 hours
- Wave 3 (2 pages): ~20-28 hours

Total project across 3 months: **~60-84 hours**, ~5-7 hours per week on average.

---

## 6. Per-wave acceptance + cadence

### Wave 1 ships when:
- [ ] `/treatments/alcohol-detox` live with all universal template sections
- [ ] `/treatments/dual-diagnosis` live with all universal template sections
- [ ] `/treatments` hub T-16 updated for both — "Read more →" links added in respective H2 sections
- [ ] `/treatments` schema ItemList updated — alcohol-detox + dual-diagnosis URLs point to new sub-pages
- [ ] Homepage H-23 contextual links updated *(optional)* — can stay on `/treatments#anchor` or update to `/treatments/[slug]` direct
- [ ] 301 redirects live: `/services/alcohol-detox-services` → `/treatments/alcohol-detox`
- [ ] Schema validator pass + Rich Results Test pass on both new sub-pages
- [ ] GSC URL inspection submitted for both new sub-pages

### Wave 2 ships when:
- Same checklist for `/treatments/opioid-detox` and `/treatments/short-term-rehab`
- 301 redirects live: `/services/opioid-detox-services` → `/treatments/opioid-detox`; `/services/comprehensive-short-term-rehab` → `/treatments/short-term-rehab`

### Wave 3 ships when:
- Same checklist for `/treatments/drug-detox` and `/treatments/benzodiazepine-detox`
- 301 redirects live: `/services/drug-detox-services` → `/treatments/drug-detox`; `/services/benzodiazepine-detox-services` → `/treatments/benzodiazepine-detox`
- *(Final orphan redirect closes the legacy `/services/*` cleanup)*

---

## 7. Open inputs

| Item | Status | Owner |
|---|---|---|
| Clinical roster names (for "Our Clinical Team" section on each sub-page) | Pending Surfpoint Ops | Aleksa to request |
| MAT-supervising physician name + credentials (specific to opioid-detox sub-page) | Pending Surfpoint Ops | Aleksa to request |
| Program duration confirmation — verify "3-7 day detox + 14-30 day rehab" matches Surfpoint reality | Pending Surfpoint Ops | Aleksa to verify |
| Per-page hero image assets | Pending design | Aleksa + design |
| Patient testimonials specifically for dual diagnosis + opioid-MAT angles | Pending Surfpoint Ops | Aleksa to request |

---

## 8. Out of scope

- Neighborhood × service combinations (e.g., `/treatments/alcohol-detox-bay-ridge`) — future expansion only if data justifies after Wave 3 ranks land
- Outpatient pages — Surfpoint is inpatient-only per `client.json`
- PHP / IOP pages — not in Surfpoint's service mix
- Spanish-language versions — future expansion
- Aftercare / sober living pages — separate task if scoped

---

## 9. Reference

- **Hub update brief:** `deliverable/Surfpoint_Treatments_Hub_Update_Brief.md`
- **Legacy redirect plan:** `deliverable/Surfpoint_Services_Legacy_Redirect_Plan.md`
- **Homepage brief:** `deliverable/Surfpoint_Homepage_Update_Brief.md`
- **Universal template (clinical content + schema):** `deliverable/Surfpoint_Task1_Rebuild_Plan.md` §4.1
- **Keyword data:** `exports/keyword_universe/cluster_summary.csv` + `transactional_top500.csv`
- **GSC orphan data:** `exports/gsc/pages_last_30d.csv` (legacy /services/* impressions tracked)

---

*End of Sub-Pages Build Plan. Aleksa: confirm Wave 1 sub-pages (alcohol-detox + dual-diagnosis) to proceed.*
