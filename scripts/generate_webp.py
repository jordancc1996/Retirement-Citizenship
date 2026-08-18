from PIL import Image
import os

assets_dir = "src/assets"
converted = []

for filename in os.listdir(assets_dir):
    if filename.lower().endswith((".jpg", ".jpeg")):
        filepath = os.path.join(assets_dir, filename)
        webp_filename = os.path.splitext(filename)[0] + ".webp"
        webp_filepath = os.path.join(assets_dir, webp_filename)

        if not os.path.exists(webp_filepath):
            img = Image.open(filepath)
            img.save(webp_filepath, "WEBP", quality=80, optimize=True)
            webp_size = os.path.getsize(webp_filepath)
            converted.append(f"{webp_filename}: {webp_size/1024:.0f}KB")

print(f"Converted {len(converted)} images to WebP:")
for c in converted:
    print(c)
