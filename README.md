# HQDM Dashboards

Interactive client strategic dashboards. Static site, deployed via GitHub Pages.

## What this is

A way to share HQDM strategic diagnoses with clients (and the HQDM team) as interactive web dashboards instead of PDFs or markdown files. Each client lives at `/clients/<client-slug>/` with its own data file and shared rendering code.

## Live URLs

- Index: `https://aleksandar-hqdm.github.io/hqdm-dashboards/`
- Professional Movers: `https://aleksandar-hqdm.github.io/hqdm-dashboards/clients/professional-movers/`
- Bernie's Best: `https://aleksandar-hqdm.github.io/hqdm-dashboards/clients/bernies-best/`

## Access posture

- `noindex, nofollow, noarchive` meta on every page
- `robots.txt` disallows all crawlers
- Public URL — anyone with the link can view, but it won't show up in search results
- For full confidentiality (private hosting), see *Hosting alternatives* below

## Local dev

```bash
# from repo root
python -m http.server 8000
# then open http://localhost:8000
```

Or any other static server. Opening the HTML over `file://` will fail because the dashboard uses `fetch()` to load JSON.

## Adding a new client

1. Create directory: `clients/<client-slug>/data/`
2. Copy `clients/professional-movers/index.html` to `clients/<client-slug>/index.html` (no changes needed — it loads `./data/data.json` relative to its own location)
3. Create `clients/<client-slug>/data/data.json` matching the PM schema (see below)
4. Add the client tile to `index.html`

## Data schema

`data.json` keys (all required unless marked optional):

| Key | Description |
|---|---|
| `meta` | client/domain/tagline/tier/prepared_date/author/quarter/doc_subtitle |
| `kpis` | array of `{label, value, sentiment: positive\|negative\|neutral, detail}` |
| `trend` | 18-month sessions + form_submits per channel + quarterly aggregate |
| `maps_presence` | array of `{coord, ll, distance, managed, avg_rank, top3, top20, winners, action}` |
| `ld_leaderboard` | competitor leaderboard `{name, may_top3, delta_top3, may_avg_rank, delta_avg_rank, cells, note, is_client}` |
| `per_keyword` | per-keyword Feb→May movement |
| `gsc_decline` | monthly impressions/clicks decline points |
| `url_class` | URL class contribution (donut chart) |
| `brand_pull` | `{brand: {imp, imp_pct, clicks, clicks_pct}, non_brand: {...}, note}` |
| `organic_competitors` | array of `{domain, shared, type}` |
| `keyword_buckets` | array of `{bucket, keywords, pct, posture}` |
| `top_urls` | `{url, imp_90d, clicks_90d, pos, class, lever}` |
| `map_upside` | `{coord, today, m3_target, managed, delta_text}` |
| `positives`, `negatives` | string arrays |
| `levers` | array of `{id, name, priority, color, why, actions, outcome}` |

### Optional Bernie's-style sections

| Key | Description |
|---|---|
| `ahrefs_trajectory` | 24-month traffic + pages-ranking line chart |
| `aio_saturation` | AIO presence on top kws, year-over-year + SERP feature bars |
| `index_health` | GSC Coverage 'crawled - not indexed' growth + root-cause categories |
| `sku_coverage` | Per-SKU keyword universe, opportunity, priority |
| `competitor_reshuffle` | Top-10 visibility delta bars (gainers + losers) |
| `st_pattern_verified` | Content-pattern audit card with adaptation guidance |
| `top_loser_blogs` | Per-URL YoY click-loss + competitor context |
| `top_winners_q1yoy` | Per-URL sessions/transactions/CVR YoY |
| `q3_kpi_targets` | Baseline → target → stretch table |

Each section is only rendered if both the data key exists in `data.json` AND the corresponding container exists in the client's `index.html`.

## Stack

- HTML + Tailwind (CDN) + Chart.js (CDN) + vanilla JS
- No build step
- Deploys via GitHub Pages from `main` branch root

## Hosting alternatives (more private)

| Option | How it works |
|---|---|
| **Cloudflare Pages + Access** | Free tier; Cloudflare Access gates the site to allowlisted emails |
| **Vercel + Password** | Vercel Pro password-protects the site |
| **Private GitHub Pages** | GitHub Pro+ allows private Pages — only repo collaborators see the site |
| **Netlify + Identity** | Netlify Identity gates the site |

## File layout

```
hqdm-dashboards/
├── index.html              # Landing page (client picker)
├── robots.txt              # Disallow all crawlers
├── README.md
├── assets/
│   ├── css/dashboard.css
│   └── js/dashboard.js
└── clients/
    └── professional-movers/
        ├── index.html      # Dashboard shell
        └── data/data.json  # All data for this client
```

## License

Internal HQDM tool. Not for redistribution.
