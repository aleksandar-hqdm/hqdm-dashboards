"""Run cross-check on all 6 recovery client dashboards via the local preview server.
Loads each URL, captures render counts, returns a pass/fail."""
import json, urllib.request

CLIENTS = ['elev8-recovery', 'urban-recovery', 'niagara-recovery', 'surfpoint-recovery', 'arms-acres', 'conifer-park']
SERVER = 'http://localhost:8765'

# Verify each page returns 200 + data.json is valid + a sample deliverable file is reachable
for slug in CLIENTS:
    print(f"\n=== {slug} ===")
    # 1) index.html
    try:
        with urllib.request.urlopen(f"{SERVER}/clients/{slug}/index.html") as r:
            html = r.read().decode('utf-8')
            print(f"  index.html: {r.status}, {len(html):,} bytes")
    except Exception as e:
        print(f"  index.html ERROR: {e}")
        continue
    # 2) data.json
    try:
        with urllib.request.urlopen(f"{SERVER}/clients/{slug}/data/data.json") as r:
            data = json.loads(r.read().decode('utf-8'))
            print(f"  data.json: {r.status}, levers={len(data.get('levers',[]))}, kpis={len(data.get('kpis',[]))}, deliverables={len(data.get('deliverables',[]))}")
    except Exception as e:
        print(f"  data.json ERROR: {e}")
        continue
    # 3) First deliverable file
    if data.get('deliverables'):
        first = data['deliverables'][0]
        url = f"{SERVER}/clients/{slug}/deliverables/{urllib.parse.quote(first['path'])}"
        try:
            import urllib.parse
            req = urllib.request.Request(url, method='HEAD')
            with urllib.request.urlopen(req) as r:
                print(f"  First file ({first['path']}): {r.status}, {r.headers.get('Content-Length')} bytes")
        except Exception as e:
            print(f"  First file FAIL: {e}")

# 4) Root index
print(f"\n=== ROOT index ===")
try:
    with urllib.request.urlopen(f"{SERVER}/index.html") as r:
        html = r.read().decode('utf-8')
        for slug in CLIENTS:
            assert f"clients/{slug}/" in html, f"missing card link for {slug}"
        print(f"  index.html: {r.status}, all 6 recovery cards present")
except Exception as e:
    print(f"  Root index FAIL: {e}")
