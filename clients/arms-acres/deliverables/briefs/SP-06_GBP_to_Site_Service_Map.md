# SP-06 — GBP Services List ↔ Site URL Mapping

**Purpose:** every service AA lists on a GBP must link to a real, conversion-ready site page. Today's gap audit + the Q3 page-build queue.
**Pulled via:** public-side GBP scrape (2026-05-12) + site catalog from `sitemap_urls.txt`.

---

## Current GBP services list state (per pin, public-side audit)

| Pin | DataForSEO `place_topics` field | Visible service items on profile |
|---|---|---|
| **Inpatient Carmel** (managed) | empty | None set in GBP Manager today. The site has dedicated /service/* + /inpatient/* URLs that *should* populate the list. |
| Carmel OP | empty | Same — no service items set publicly. |
| Bronx OP | empty | Same. |
| Queens OP | empty | Same. |

**Reality check:** none of AA's 4 pins currently has a populated services list on the public profile. The DataForSEO `place_topics` field returned empty for all 4. Adding services-list items is **net-new GBP work**, not just a refresh.

---

## Site catalog — what AA already has

| URL | Page type | Notes |
|---|---|---|
| `/inpatient` | Inpatient hub (parent) | Currently captures 77K imp / 964 clk at pos 5.6 (per GSC 365d) — the page already winning the "inpatient" cluster |
| `/inpatient/adult-rehabilitation` | Inpatient sub-page | Only 1,610 imp at pos 27.2 — sub-page of the parent |
| `/inpatient/detox-program` | Inpatient detox | 39K imp at pos 4.4 — strong |
| `/outpatient` | Outpatient hub | Parent page |
| `/outpatient/carmel-outpatient` | OP location | Carmel OP pin's destination |
| `/outpatient/bronx-outpatient` | OP location | Bronx OP pin's destination — rebuild M2 (SP-05) |
| `/outpatient/queens-outpatient` | OP location | Queens OP pin's destination — rebuild M2 (SP-04) |
| `/service/alumni` | Aftercare service | Alumni network |
| `/service/equine-therapy-program` | Niche modality | Has city-modifier dupe (SA-02 dedup) |
| `/service/fitness-recreation-program` | Niche modality | Has city-modifier dupe (SA-02 dedup) |
| `/service/medication-assisted-therapy` | MAT service | Has city-modifier dupe (SA-02 dedup) |
| `/service/psychiatric-services` | Psych service | Has city-modifier dupe (SA-02 dedup) |
| `/service/recovery-coach` | Coach service | Single page |
| `/admissions` | Conversion / intake | The form-converting page (515 of 531 annual conversions land here) |
| `/about-us` | About | Brand/credibility page |

---

## Recommended GBP services-list mapping for Inpatient Carmel (managed pin)

Per `Arms_Acres_GBP_Services_Inpatient.xlsx`. 8 ADD rows + 2 GATED. Custom 700-char description per service, URL field points at the site page below.

| GBP service item | Site URL | Status |
|---|---|---|
| Inpatient Rehabilitation | `/inpatient/adult-rehabilitation` | ADD |
| Medical Detox | `/inpatient/detox-program` | ADD |
| Medication Assisted Therapy (MAT) | `/service/medication-assisted-therapy` | ADD |
| Dual Diagnosis Treatment | `/inpatient/adult-rehabilitation` (dual-dx anchor) | ADD |
| Psychiatric Services | `/service/psychiatric-services` | ADD |
| Family Treatment Program | `/inpatient/adult-rehabilitation` (family anchor) | ADD |
| Recovery Coaching | `/service/recovery-coach` | ADD |
| Alumni Aftercare | `/service/alumni` | ADD |
| IOP (Intensive Outpatient) | **GATED — build /service/iop in Q3** | Site page doesn't exist yet |
| Counselor / Psychiatrist / Psychologist categories | **GATED — Owner Conversation roster** | Categories, not service items |

---

## Q3 page-build queue (gaps surfaced by this audit)

These services AA likely offers (or could position as) but have **no dedicated site page**. Build queue ordered by competitive opportunity:

| # | Proposed URL | Service | Rationale |
|---|---|---|---|
| 1 | `/service/iop` or `/intensive-outpatient` | IOP (Intensive Outpatient Program) | High-intent commercial query; competitors rank for "IOP" but AA has no IOP page; gates GBP services-list item for IOP across all 3 OP pins |
| 2 | `/service/dual-diagnosis` or `/dual-diagnosis-new-york` | Dual diagnosis residential | Cluster `mica\|new york` (30/mo, 2-competitor consensus); current dual-dx mentions live only as an anchor on `/inpatient/adult-rehabilitation` |
| 3 | `/service/alcohol-detox` | Substance-specific alcohol detox | `/inpatient/detox-program` is generic; alcohol detox has its own commercial intent + query cluster |
| 4 | `/service/opioid-detox` | Substance-specific opioid detox | Same logic — splits off from generic detox + MAT pages |
| 5 | `/service/family-program` | Standalone family treatment page | Currently lives as a sub-section of `/inpatient/adult-rehabilitation`; standalone page serves the family-decision-maker traffic + creates a clean GBP-services destination |

---

## What ships in Q2 vs Q3

**Q2 (this quarter):** populate GBP services list on Inpatient Carmel with the 8 existing-site-page items (LG-INPC-02). Each item → site URL → conversion path verified.

**Q3 (after this audit):** build the 5 net-new service pages above. Once they exist, the GBP services-list updates to add IOP + Dual Diagnosis as standalone items pointing at their dedicated pages.

**For the other 3 pins (Carmel OP + Bronx OP + Queens OP):** same mapping applies once HQDM has manager access (Owner Conversation Item 0). The mapping for OP pins skews toward the OP-specific service set — outpatient counseling, MAT continuation, IOP, dual-dx OP.

---

*Companion to task `SP-06` in `Arms_Acres_3Month_Tasks.csv`. Companion sheet: `Arms_Acres_GBP_Services_Inpatient.xlsx`.*
