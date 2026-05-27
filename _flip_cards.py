"""Flip a client's root-index card from the 2-button (View dashboard / Client report)
layout to the 3-button Strategy / Condensed / Client layout. Idempotent."""
import io, re, sys

INDEX = 'C:/tmp/hqdm-dashboards/index.html'
BTN = 'class="text-center px-3 py-2 rounded border border-brand-500 text-brand-500 font-semibold hover:bg-brand-500 hover:text-white transition text-xs"'
BTN_SOLID = 'class="text-center px-3 py-2 rounded bg-brand-500 text-white font-semibold hover:bg-brand-700 transition text-xs"'


def flip(html, slug):
    block_re = re.compile(
        r'<div class="mt-3 grid grid-cols-2 gap-2">\s*'
        r'<a href="clients/' + re.escape(slug) + r'/index\.html"[^>]*>View dashboard\s*&rarr;|→</a>',
    )
    # Simpler: match the whole 2-button block for this slug.
    pat = re.compile(
        r'<div class="mt-3 grid grid-cols-2 gap-2">\s*'
        r'<a href="clients/' + re.escape(slug) + r'/index\.html"[^>]*>[^<]*</a>\s*'
        r'<a href="clients/' + re.escape(slug) + r'/client-report\.html"[^>]*>[^<]*</a>\s*'
        r'</div>', re.S)
    new = (
        '<div class="mt-3 grid grid-cols-3 gap-2">\n'
        f'          <a href="clients/{slug}/index.html" {BTN}>Strategy</a>\n'
        f'          <a href="clients/{slug}/client-report.html" {BTN}>Condensed</a>\n'
        f'          <a href="clients/{slug}/snapshot.html" {BTN_SOLID}>Client</a>\n'
        '        </div>')
    html2, n = pat.subn(new, html)
    return html2, n


if __name__ == '__main__':
    slugs = sys.argv[1:]
    html = io.open(INDEX, encoding='utf-8').read()
    for slug in slugs:
        html, n = flip(html, slug)
        print(f'  {slug}: {"flipped" if n else "NO MATCH (already flipped or different markup)"}')
    io.open(INDEX, 'w', encoding='utf-8', newline='\n').write(html)
