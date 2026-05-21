# SP-04 — /outpatient/queens-outpatient rebuild brief

**Page:** https://www.armsacres.com/outpatient/queens-outpatient
**Pin:** Arms Acres Outpatient - Queens (90-02 161st St, Jamaica NY 11432) · phone +1 718-520-1513
**Maps state (Feb 16 2026 LD scan):** 100% top-20 across 169-cell grid · 93-95% top-10 · 12-25% top-3 · median rank 5 on alcohol rehab + drug rehab · avg 8.70 overall
**Page state today (audited 2026-05-12):**

- Hero + Queens NAP shown
- "Start Your Treatment Here" button as the only CTA (no form)
- Phone (718-520-1513) + Address + Clinic Hours block
- Embedded map widget **renders "21 Old Rte 6, Carmel Hamlet NY" — the Carmel address, not Queens.** Anyone using the embed gets directions to Carmel.

---

## What's broken

1. **Wrong-address map embed** — biggest user-trust signal, currently telling Maps users to drive to Putnam County for a Queens facility
2. **No form** — Call Now button only (CP-01 form-deploy advocacy is the gating change)
3. **Thin content** — copy doesn't enumerate Queens neighborhoods, doesn't anchor to Jamaica/Flushing/Forest Hills, doesn't reference adjacent services
4. **No LocalBusiness schema** with the actual Queens NAP — homepage carries Organization only
5. **No internal link inbound** from the rest of the site beyond standard nav

---

## What the rebuild ships (per HQDM On-Page Optimization SOP + Schema Markup SOP)

### 1. Fix the embedded map widget *(highest priority — credibility fix)*

- Replace the map widget's address from `21 Old Rte 6 Carmel Hamlet` to `90-02 161st St, Jamaica NY 11432`
- Verify embed renders correctly with the Queens pin (CID `[Queens OP CID]`)
- Mobile + desktop QA

### 2. Add Queens neighborhood enumeration (EAV-stack per Boost Mode SOP)

Six neighborhoods served — each named in body copy + ideally as an internal-anchor:

- Jamaica
- Flushing
- Forest Hills
- Astoria
- Long Island City
- Sunnyside

Body copy should include 1-2 sentences per neighborhood about commute/access ("our Jamaica clinic on 161st St is a 5-minute walk from Sutphin Blvd – Archer Av…").

### 3. Add LocalBusiness schema with the actual Queens NAP

Per HQDM Schema Markup SOP. Include:
- `@type`: MedicalBusiness + LocalBusiness
- `name`: "Arms Acres Outpatient - Queens"
- `address`: 90-02 161st St, Jamaica, NY 11432
- `telephone`: +17185201513
- `geo`: 40.749, -73.857 (Queens OP pin coord)
- `openingHours`
- `areaServed`: list the 6 neighborhoods
- `medicalSpecialty`: ["AddictionMedicine", "Psychiatric"]
- `paymentAccepted`: ["Medicaid", "Medicare", "Aetna", "Tricare", "Cigna", "BCBS"]
- `parentOrganization`: Arms Acres

Pre-deploy: 3-layer schema validation gate (Wikidata Q-ID verifier + schema.org property validator + manual paste into validator.schema.org/RRT).

### 4. Integrate the 4-input intake form (gated on CP-01 outcome)

If CP-01 form deployment is approved by AA dev:
- Drop the same 4-input form (Name / Email / Phone / Message) from homepage + /contact + /admissions onto this page
- GA4 form_submit event firing per URL
- Position above-the-fold alongside the existing "Start Your Treatment Here" button OR as a sticky-side widget

If CP-01 not approved by M2:
- At minimum, verify GA4 tap-to-call event firing on the existing Call Now button
- Document the conversion-tracking state for Marija's correlation rollup

### 5. Content depth — match the rebuilt page to a 1000-word minimum

Sections (in addition to existing hero + NAP + hours):

- **What we treat (Queens-specific intake)** — outpatient SUD treatment, MAT continuation, IOP, dual-dx OP. Reference the GBP services-list items (per LG-INPC-02 mapping).
- **Insurance accepted** — Medicaid + Medicare + Aetna + Tricare + Cigna + BCBS (mirror the GBP description)
- **Neighborhoods served** — 6 enumerated above with 1-2 sentence access notes
- **What to expect at your first visit** — admission process + intake intake form vs phone
- **Connection to inpatient + continuum of care** — internal link to `/inpatient/adult-rehabilitation` + `/inpatient/detox-program` for patients who may step up to inpatient
- **MAT support** — internal link to `/service/medication-assisted-therapy`
- **Family support** — internal link to `/service/alumni` + family-program content

### 6. Internal-link inbound

The page should receive internal links from:
- Homepage (Locations section)
- `/outpatient` parent hub
- `/areas-served` (if rebuilt — see /service-areas current state)
- 2-3 /suburb/* Queens-area pages flagged in SA-01 audit decision = REDIRECT or UPGRADE (per the redirect-target column)
- New `/alcohol-rehab-new-york` + `/detox-new-york` pages once they ship (SP-01 + SP-02) — Queens OP listed in the location enumeration

---

## Acceptance criteria

- [ ] Map widget renders Queens address (90-02 161st St)
- [ ] Neighborhood block live with ≥6 named neighborhoods
- [ ] LocalBusiness schema validates in Rich Results Test with Queens NAP + geo
- [ ] Word count ≥1000 (up from ~300 today)
- [ ] Internal-link inbound count ≥5
- [ ] Form deployed if CP-01 recommends (or tracking fix verified if CP-01 falls back to tap-to-call)
- [ ] GSC URL Inspection re-crawl requested post-deploy
- [ ] M3 Maps re-pull (LG-INF-02) measures whether the rebuild moves the cell-distribution from 12-25% top-3 to a higher band

---

## Why this matters

The Queens OP page is the destination for two things:
1. Maps Pack clicks at the Jamaica Queens grid (currently 100% top-20 / 93-95% top-10 — proximity-bound coverage)
2. Organic queries with Queens / NYC intent

Both of those click streams currently land on a page that says "21 Old Rte 6 Carmel Hamlet" on its map. That's the single biggest user-trust kill. Fixing it is the credibility floor before any rank-pushing work on this pin makes sense.

---

*Companion to task `SP-04` in `Arms_Acres_3Month_Tasks.csv`.*
