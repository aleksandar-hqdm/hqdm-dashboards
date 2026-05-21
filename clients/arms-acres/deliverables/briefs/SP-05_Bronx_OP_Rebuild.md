# SP-05 — /outpatient/bronx-outpatient rebuild brief

**Page:** https://www.armsacres.com/outpatient/bronx-outpatient
**Pin:** Arms Acres Outpatient - Bronx (3584 Jerome Ave, Bronx NY 10467) · phone +1 718-653-1537
**Maps state:** **No LD grid configured** at AA's actual Bronx OP coord. The "0 visibility in Bronx" finding from earlier sessions was based on a DataForSEO scrape at Westchester Square (4 mi southeast of Norwood) — that coord doesn't measure AA's catchment. Bronx OP rank state is **unmeasured until task `LG-INF-01` lands** (M1 grid setup).
**Page state today (inferred from same template pattern as Queens):** Same structure assumed — hero + NAP + "Start Your Treatment Here" + likely the same broken-map-widget issue.

---

## What's likely broken (verify in audit step)

Audit step before rebuild:

1. View the page live, screenshot the embedded map widget, confirm whether it renders Bronx address (3584 Jerome Ave) or another address
2. Confirm CTA = Call Now button only (no form)
3. Word count + content audit
4. LocalBusiness schema present? (almost certainly no — schema deployment is bare sitewide)
5. Internal-link inbound count

Most-likely findings (template pattern):
- **Map widget renders wrong address** (Carmel default) — same template bug as Queens page
- **No form** — Call Now button only
- **Thin content** — no Bronx neighborhood enumeration
- **No LocalBusiness schema** with the Bronx NAP

---

## What the rebuild ships (per HQDM On-Page Optimization SOP + Schema Markup SOP)

### 1. Fix the embedded map widget *(highest priority if broken)*

- Render Bronx 3584 Jerome Ave Norwood NY
- Verify the embed shows the Bronx pin

### 2. Add Bronx neighborhood enumeration (EAV-stack)

Six neighborhoods served — each named in body copy with commute context:

- Norwood (immediate pin)
- Fordham (south of pin)
- Williamsbridge (east of pin)
- Tremont (south-east)
- Belmont (south, "Little Italy of the Bronx")
- Bedford Park (immediate west)

Body copy: 1-2 sentences per neighborhood. E.g., "our Jerome Ave clinic is a 4-minute walk from the Mosholu Parkway 4-train station, serving the surrounding Norwood and Bedford Park communities."

### 3. Add LocalBusiness schema with the actual Bronx NAP

Per HQDM Schema Markup SOP:
- `@type`: MedicalBusiness + LocalBusiness
- `name`: "Arms Acres Outpatient - Bronx"
- `address`: 3584 Jerome Ave, Bronx NY 10467
- `telephone`: +17186531537
- `geo`: 40.880, -73.886 (Bronx OP pin coord)
- `openingHours`
- `areaServed`: list the 6 neighborhoods
- `medicalSpecialty`: ["AddictionMedicine", "Psychiatric"]
- `paymentAccepted`: ["Medicaid", "Medicare", "Aetna", "Tricare", "Cigna", "BCBS"]
- `parentOrganization`: Arms Acres

Pre-deploy: 3-layer schema validation gate.

### 4. Integrate the 4-input intake form (gated on CP-01)

Same logic as SP-04 — form on this page if CP-01 approved, fall back to tap-to-call tracking if not.

### 5. Content depth — 1000-word minimum

Sections beyond hero + NAP + hours:

- **What we treat (Bronx-specific)** — outpatient SUD treatment, MAT continuation, IOP, dual-dx OP. Reference the GBP services-list items (per LG-INPC-02 mapping, applied to Bronx OP once access lands).
- **Insurance accepted** — Medicaid + Medicare + Aetna + Tricare + Cigna + BCBS. Spanish-language services if applicable (Bronx demographics — verify with intake).
- **Neighborhoods served** — 6 enumerated above
- **Walk-in vs scheduled intake** — Bronx OP is reachable by 4-train; commute-friendly
- **Connection to inpatient + continuum of care** — internal link to `/inpatient/adult-rehabilitation` + `/inpatient/detox-program` for step-up patients
- **MAT support** — internal link to `/service/medication-assisted-therapy`
- **Spanish-language services note** — if applicable; verify with intake team

### 6. Internal-link inbound

Same as Queens — homepage + /outpatient parent + /areas-served + 2-3 /suburb/* Bronx-area pages from SA-01 audit + new NY-state pages.

---

## Acceptance criteria

- [ ] Map widget renders Bronx address (3584 Jerome Ave)
- [ ] Neighborhood block live with ≥6 named neighborhoods
- [ ] LocalBusiness schema validates with Bronx NAP + geo
- [ ] Word count ≥1000
- [ ] Internal-link inbound count ≥5
- [ ] Form deployed if CP-01 recommends
- [ ] GSC URL Inspection re-crawl requested post-deploy
- [ ] M3 Bronx LD grid (LG-INF-01) captures the rebuild's measurable impact

---

## Why this matters

Bronx is a data gap. We don't currently know whether AA Bronx OP is invisible in its Norwood catchment (the LG-INF-01 grid will tell us in M2). What we DO know:

- Bronx Recovery wins the Bronx Map Pack with 9 backlinks + zero organic top-30 — pure pin-geometry + GBP signal density advantage
- AA already has 17,209 backlinks (2.5× Bronx Recovery's profile by domain count)
- The thing standing between AA Bronx OP and the Bronx pack is **pin-level signal density**, which starts with a credible location page

Fixing this page is the on-page floor for the M1+M2 off-page stack (OFF-07a/b/c/e — DAS / GBP Blast / GBP Sniper / SEO NEO) to land on. Without a real page to point those signals at, the link surface is hollow.

---

*Companion to task `SP-05` in `Arms_Acres_3Month_Tasks.csv`.*
