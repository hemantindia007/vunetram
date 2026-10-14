"""
Remove the solid light background from the Vunetram logo and write a
transparent PNG. Uses an edge flood-fill so white *inside* the logo
(eagle head highlights, glossy wing areas) is preserved — only the
background connected to the image borders is made transparent.
"""
from collections import deque
from PIL import Image

SRC = "public/logo.jpeg"
OUT = "public/logo.png"

# A pixel counts as "background" if it is near-white.
THRESHOLD = 232  # 0-255; higher = stricter (removes only very white pixels)


def is_bg(px):
    r, g, b = px[0], px[1], px[2]
    return r >= THRESHOLD and g >= THRESHOLD and b >= THRESHOLD


def main():
    img = Image.open(SRC).convert("RGBA")
    w, h = img.size
    px = img.load()

    visited = bytearray(w * h)
    q = deque()

    # Seed the flood fill from every border pixel that is background.
    for x in range(w):
        for y in (0, h - 1):
            if is_bg(px[x, y]):
                q.append((x, y))
                visited[y * w + x] = 1
    for y in range(h):
        for x in (0, w - 1):
            if is_bg(px[x, y]) and not visited[y * w + x]:
                q.append((x, y))
                visited[y * w + x] = 1

    # Flood fill over connected background region.
    while q:
        x, y = q.popleft()
        r, g, b, _ = px[x, y]
        px[x, y] = (r, g, b, 0)  # make transparent
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not visited[ny * w + nx]:
                if is_bg(px[nx, ny]):
                    visited[ny * w + nx] = 1
                    q.append((nx, ny))

    # Crop to the non-transparent bounding box so the mark sits tight.
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    img.save(OUT)
    print(f"Saved {OUT} ({img.size[0]}x{img.size[1]})")


if __name__ == "__main__":
    main()
