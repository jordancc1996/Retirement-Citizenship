from PIL import Image
import os

assets_dir = "src/assets"
results = []

for filename in os.listdir(assets_dir):
    if filename.lower().endswith((".jpg", ".jpeg")):
        filepath = os.path.join(assets_dir, filename)
        original_size = os.path.getsize(filepath)

        if original_size > 200_000:
            img = Image.open(filepath)

            # Resize if wider than 1920px
            if img.width > 1920:
                ratio = 1920 / img.width
                new_height = int(img.height * ratio)
                img = img.resize((1920, new_height), Image.LANCZOS)

            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")

            # Save compressed version
            img.save(filepath, "JPEG", quality=75, optimize=True)
            new_size = os.path.getsize(filepath)

            results.append({
                "file": filename,
                "before": f"{original_size/1024:.0f}KB",
                "after": f"{new_size/1024:.0f}KB",
                "reduction": f"{(1-new_size/original_size)*100:.0f}%"
            })
        else:
            results.append({
                "file": filename,
                "before": f"{original_size/1024:.0f}KB",
                "after": "skipped (already under 200KB)",
                "reduction": "n/a"
            })

# Print results table
print(f"{'File':<50} {'Before':>8} {'After':>10} {'Reduction':>10}")
print("-" * 80)
for r in results:
    print(f"{r['file']:<50} {r['before']:>8} {r['after']:>10} {r['reduction']:>10}")
