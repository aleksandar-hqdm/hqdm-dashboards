# Surfpoint `/services/*` Legacy URLs — Redirect & Management Plan

**Scope:** Manage the 5 orphan `/services/*` URLs during and after the `/treatments/[service]` sub-page rollout
**Author:** Aleksandar Spasevski · **Date:** 2026-05-11
**Companion to:** `Surfpoint_Treatments_SubPages_BuildPlan.md`

---

## 1. Current state (as of 2026-05-11)

### 1.1 The 5 orphan `/services/*` URLs

All 5 return HTTP 200 but receive **0 contextual internal links** from homepage, admissions, about-us, or any other page on the active site. They exist as legacy URLs from a previous information architecture.

| Orphan URL | 30-day clicks | 30-day impressions | 30-day avg pos | 365-day impressions |
|---|---:|---:|---:|---:|
| `/services/alcohol-detox-services` | 0 | 0 | — | 21 |
| `/services/opioid-detox-services` | 0 | 2 *(no-www variant)* | 4.00 | 12 |
| `/services/drug-detox-services` | 0 | 11 | 7.12 | 119 |
| **`/services/benzodiazepine-detox-services`** | **0** | **147** | **18.36** | **1,925** |
| `/services/comprehensive-short-term-rehab` | 0 | 2 *(http variant)* | 3.50 | 25-49 *(across protocols)* |
| **30d total** | **0** | **162** | — | **2,126** |

**One signal-load-bearing URL:** `/services/benzodiazepine-detox-services` accounts for **91% of 30-day orphan impressions** (147 of 162). Avg position 18-30 — Google still considers this URL relevant for some benzo-related queries despite no internal links pointing to it.

### 1.2 The `/services` parent

- `/services` → **HTTP 404** (broken)
- `/services/` (trailing slash) → 301 redirects to `/services` which returns 404

This is an existing technical defect. Fixing it is part of this plan.

### 1.3 Existing live `/treatments` hub

- `/treatments` → HTTP 200, position 2.11, 985 impressions/30d, 2 clicks/30d (0.2% CTR)
- Has H2 sections for Alcohol Detox, "BenzodiazepinesDetox" *(typo)*, Opioid Detox, Short-Term Rehab
- Does NOT have H2 sections for Drug Detox or Dual Diagnosis (will be added per `Surfpoint_Treatments_Hub_Update_Brief.md` items T-12 + T-11)

---

## 2. Strategic decision — what to do with each orphan

### 2.1 Principle

**A redirect is only valuable if the destination is ready to receive the relevance.** Redirecting `/services/X` → `/treatments/X` before `/treatments/X` exists would either:
- 404 immediately (worst case), or
- Bounce to `/treatments` (default fallback — loses topical relevance)

Conclusion: **Each orphan gets redirected only when its `/treatments/[service]` sub-page ships.** Until then, the orphan stays live (it's earning 0 clicks anyway — no harm).

**Exception:** If the orphan is bleeding revenue or causing UX issues (e.g., users finding it and bouncing), the fallback is to redirect to `/treatments` hub. The current data shows **0 clicks across all 5 orphans in 30 days** — no revenue leakage, no UX harm, no urgency.

### 2.2 Redirect timing per orphan

| Orphan URL | Action | When | Final destination |
|---|---|---|---|
| `/services/alcohol-detox-services` | 301 redirect | Wave 1 ships (M1) | `/treatments/alcohol-detox` |
| `/services/opioid-detox-services` | 301 redirect | Wave 2 ships (M2) | `/treatments/opioid-detox` |
| `/services/comprehensive-short-term-rehab` | 301 redirect | Wave 2 ships (M2) | `/treatments/short-term-rehab` |
| `/services/drug-detox-services` | 301 redirect | Wave 3 ships (M3) | `/treatments/drug-detox` |
| **`/services/benzodiazepine-detox-services`** | 301 redirect | Wave 3 ships (M3) | `/treatments/benzodiazepine-detox` |

**Accelerate option:** If you want to capture the 147-imp/30d flow on the benzo orphan earlier, move `/treatments/benzodiazepine-detox` from Wave 3 → Wave 2. The redirect waits on the sub-page either way.

### 2.3 `/services` parent — fix the 404 now

The parent path can be redirected immediately because the destination `/treatments` already exists. Recommended action:

```
/services        → 301 → /treatments
/services/       → 301 → /treatments  (eliminates current loop /services/ → /services)
```

This fixes a pre-existing technical defect and consolidates the 200-status legacy children (the 5 orphan service pages) under a parent-redirected umbrella for future SEO clarity.

**Timing:** Ship this immediately — it doesn't depend on sub-pages. Can ship with the homepage Phase A or the `/treatments` hub update, whichever ships first.

### 2.4 Protocol / subdomain variants

Per GSC data, some orphan impressions are flowing through:
- `http://www.surfpointrecovery.com/services/comprehensive-short-term-rehab` (HTTP, not HTTPS)
- `https://surfpointrecovery.com/services/opioid-detox-services` (no www)

These are pre-existing canonicalization defects. Recommended:
- Force `https://www.` canonical via `.htaccess` / nginx config (sitewide rule)
- Once the canonical rule is enforced, all variants funnel through the single canonical URL and the per-page 301 plan applies cleanly.

This is a sitewide hygiene fix — recommend bundling with the `/services` → `/treatments` parent redirect (§2.3).

---

## 3. Implementation specs

### 3.1 .htaccess / nginx redirect rules

**For Apache (`.htaccess`):**

```apache
# /services parent → /treatments (immediate)
RewriteRule ^services/?$ /treatments [R=301,L]

# Sitewide HTTPS + www canonical (immediate, sitewide hygiene)
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.surfpointrecovery.com/$1 [R=301,L]

# Wave 1 — ships when /treatments/alcohol-detox + /treatments/dual-diagnosis go live
RewriteRule ^services/alcohol-detox-services/?$ /treatments/alcohol-detox [R=301,L]
# (dual-diagnosis has no orphan to redirect)

# Wave 2 — ships when /treatments/opioid-detox + /treatments/short-term-rehab go live
RewriteRule ^services/opioid-detox-services/?$ /treatments/opioid-detox [R=301,L]
RewriteRule ^services/comprehensive-short-term-rehab/?$ /treatments/short-term-rehab [R=301,L]

# Wave 3 — ships when /treatments/drug-detox + /treatments/benzodiazepine-detox go live
RewriteRule ^services/drug-detox-services/?$ /treatments/drug-detox [R=301,L]
RewriteRule ^services/benzodiazepine-detox-services/?$ /treatments/benzodiazepine-detox [R=301,L]
```

**For nginx:**

```nginx
# /services parent
location = /services { return 301 /treatments; }
location = /services/ { return 301 /treatments; }

# HTTPS + www canonical (server block level)
if ($scheme = "http") { return 301 https://www.surfpointrecovery.com$request_uri; }
if ($host = "surfpointrecovery.com") { return 301 https://www.surfpointrecovery.com$request_uri; }

# Wave 1
location = /services/alcohol-detox-services { return 301 /treatments/alcohol-detox; }

# Wave 2
location = /services/opioid-detox-services { return 301 /treatments/opioid-detox; }
location = /services/comprehensive-short-term-rehab { return 301 /treatments/short-term-rehab; }

# Wave 3
location = /services/drug-detox-services { return 301 /treatments/drug-detox; }
location = /services/benzodiazepine-detox-services { return 301 /treatments/benzodiazepine-detox; }
```

**WordPress plugin alternative:** Redirection plugin (https://wordpress.org/plugins/redirection/) supports per-URL 301s via UI. Each row above translates to one redirect entry.

### 3.2 Sitemap.xml management

Per-wave sitemap actions:

| Wave | Action |
|---|---|
| Immediate | Confirm `/services/*` URLs are NOT in sitemap.xml. If present, remove. |
| Immediate | Add `/treatments` to sitemap.xml (if not already present) |
| Wave 1 ships | Add `/treatments/alcohol-detox` + `/treatments/dual-diagnosis` to sitemap.xml |
| Wave 2 ships | Add `/treatments/opioid-detox` + `/treatments/short-term-rehab` to sitemap.xml |
| Wave 3 ships | Add `/treatments/drug-detox` + `/treatments/benzodiazepine-detox` to sitemap.xml |

Sitemap submission to GSC after each update.

### 3.3 GSC URL inspection

Per-wave GSC actions:

| Action | When |
|---|---|
| Submit /treatments hub re-inspection request | After /treatments hub update ships (Hub Update Brief T-15) |
| Submit URL inspection on each new /treatments/[service] sub-page | Within 24h of each sub-page going live |
| Confirm 301 redirect on each orphan URL via GSC URL inspection | Within 7 days of each redirect going live |
| Monitor "Why pages aren't indexed" report for `/services/*` 301 status | Weekly during M1-M3 |

### 3.4 Internal-link sweep

Per wave, run a sitewide crawl (Screaming Frog or similar) to confirm:
- Zero internal links to `/services/*` URLs (no contextual links, footer links, sitemap-html links)
- Internal links to the new `/treatments/[service]` URLs from homepage H-23 contextual links (per Homepage Brief), from `/treatments` hub T-16 "Read more →" links, and from peer sub-pages' "Continue Your Recovery" cross-link blocks

---

## 4. Monitoring + verification

### 4.1 Pre-deploy

Per wave, before flipping the 301:
- [ ] `/treatments/[service]` sub-page returns HTTP 200
- [ ] Sub-page has the universal template sections (per `Surfpoint_Task1_Rebuild_Plan.md` §4.1)
- [ ] Sub-page schema validator pass + Rich Results Test pass
- [ ] Sub-page added to sitemap.xml
- [ ] No internal links from anywhere on site still point to the orphan URL being redirected

### 4.2 Post-deploy (per orphan redirect)

- [ ] `curl -I https://www.surfpointrecovery.com/services/[X]` returns `HTTP/1.1 301 Moved Permanently` + `Location: https://www.surfpointrecovery.com/treatments/[X]`
- [ ] No redirect chains (one 301 hop, not multiple)
- [ ] No mixed-content / protocol issues on redirect
- [ ] GSC URL inspection on the orphan URL shows "Redirected to [destination]" status within 7 days
- [ ] Destination sub-page indexed in Google within 14 days of redirect going live

### 4.3 30-day post-redirect tracking

For each redirected orphan, track:
- Did the destination sub-page inherit the orphan's impressions? *(Compare GSC `/treatments/[X]` impressions in 30 days post-redirect vs orphan's pre-redirect 30-day baseline)*
- Did position improve? *(Orphan was at pos 18-30; destination sub-page should rank better given proper meta + schema + form)*
- Did clicks emerge? *(Orphan got 0 clicks; destination sub-page CTR target ≥1% on inherited impressions)*

**Particular attention to benzo:** `/services/benzodiazepine-detox-services` brings 147 imps/30d. The `/treatments/benzodiazepine-detox` destination should inherit those impressions + improve from pos ~25 to pos 10-15 within 60 days, with CTR rising from 0% to ≥2% — translating ~3-5 clicks/30d at maturity.

---

## 5. Risks + mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Redirect chain (e.g., `/services/X` → `/treatments` → `/treatments/X` via two hops) | Medium if HTTPS canonical rule + per-page rule interact | Medium (CTR loss) | Apply rules in correct order; test with curl `-IL` to follow redirect chain post-deploy |
| Destination sub-page fails to inherit orphan impressions | Low (301 transfers PageRank reliably) | Medium | Wait 60 days for Google to re-evaluate; verify via GSC URL inspection that the orphan correctly redirects |
| GSC reports "soft 404" on destination if content is too thin | Low (sub-pages are 1,400+ words) | Medium | Monitor GSC coverage report post-deploy |
| Sitewide HTTPS+www canonical breaks unrelated URLs | Low if regex is correct | High | Test on staging; QA all major page types before shipping sitewide canonical |
| Orphan URL gets external backlinks pointing to it | Low (no marketing has pointed there) | Low | 301 transfers backlink equity; check `exports/dataforseo/backlinks/` for any external links pointing to /services/* — none found in current data |

**Rollback plan:** All 301s are revertible. Per-page reversion = remove the rule from .htaccess / nginx config and restore the orphan as 200. Sitewide canonical revert is more disruptive but recoverable via config rollback.

---

## 6. Schedule summary

| Action | Trigger | Owner |
|---|---|---|
| `/services` parent → `/treatments` 301 | Immediate (ship with homepage or hub update, whichever first) | Aleksa + Dev |
| Sitewide HTTPS + www canonical | Immediate | Aleksa + Dev |
| Remove `/services/*` from sitemap.xml | Immediate | Aleksa |
| Add `/treatments` to sitemap.xml | Immediate (if missing) | Aleksa |
| `/services/alcohol-detox-services` → `/treatments/alcohol-detox` 301 | Wave 1 ship (M1) | Aleksa |
| `/services/opioid-detox-services` → `/treatments/opioid-detox` 301 | Wave 2 ship (M2) | Aleksa |
| `/services/comprehensive-short-term-rehab` → `/treatments/short-term-rehab` 301 | Wave 2 ship (M2) | Aleksa |
| `/services/drug-detox-services` → `/treatments/drug-detox` 301 | Wave 3 ship (M3) | Aleksa |
| `/services/benzodiazepine-detox-services` → `/treatments/benzodiazepine-detox` 301 | Wave 3 ship (M3) | Aleksa |
| Final cleanup: verify zero `/services/*` URLs return 200 sitewide | End of Wave 3 | Aleksa |
| Update `client.json` `services[].page_url` values to new `/treatments/[slug]` URLs | After each wave | Aleksandar |

---

## 7. Open questions for Aleksa feasibility pass

1. **CMS redirect implementation** — `.htaccess` (Apache) or nginx config or WordPress Redirection plugin? Determines the spec format Zach lands in Asana.
2. **Sitewide HTTPS + www canonical rule** — does this break anything in the current site? Likely no, but verify with QA before sitewide deploy.
3. **`client.json` updates** — Aleksandar will update `services[].page_url` values after each wave; Aleksa confirms timing matches Asana task closure.
4. **External backlink audit** — before redirecting the benzo orphan (highest impressions), verify via Ahrefs / DataForSEO Backlinks that no external sites are linking to the orphan URL with anchor text we want to preserve. Current `exports/dataforseo/backlinks/` data shows no external backlinks specifically to /services/* URLs, but a final pre-redirect check is good practice.

---

## 8. Reference

- **GSC data:** `exports/gsc/pages_last_30d.csv` (orphan + /treatments impressions)
- **Backlinks data:** `exports/dataforseo/backlinks/` (verify no external links to /services/*)
- **Sub-page build plan:** `deliverable/Surfpoint_Treatments_SubPages_BuildPlan.md`
- **Hub update brief:** `deliverable/Surfpoint_Treatments_Hub_Update_Brief.md`
- **`client.json`** — update `services[].page_url` values per wave

---

*End of Legacy Redirect Plan.*
