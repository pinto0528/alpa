import urllib.request, urllib.parse, base64, zlib, sys

code = sys.stdin.read().strip()

compressed = zlib.compress(code.encode('utf-8'))
encoded = base64.urlsafe_b64encode(compressed).decode('ascii')
url = 'https://mermaid.ink/img/' + encoded

urllib.request.urlretrieve(url, sys.argv[1])
print(f'PNG guardado en {sys.argv[1]}')
