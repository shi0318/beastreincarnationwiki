# -*- coding: utf-8 -*-
# 把 image/ 下 7 张 1920x1080 Steam 截图转成 <100KB 的 WebP（1600 宽），存 public/images/
import os
from PIL import Image

SRC = "image"
DST = "public/images"
os.makedirs(DST, exist_ok=True)

# 原文件 hash -> 目标描述性文件名（SEO 友好、kebab-case）
MAP = {
    "ss_9165d04eccf6fb47c9b71f7a80ed685726502b6f.1920x1080.jpg":
        "beast-of-reincarnation-wasteland-colossal-boss.webp",
    "ss_9759eb253a5c18a6e9840d89e7127f610627c684.1920x1080.jpg":
        "beast-of-reincarnation-emma-koo-river-exploration.webp",
    "ss_f55c103953c70b47025b04f0c121b1723d6c1670.1920x1080.jpg":
        "beast-of-reincarnation-blighted-boar-enemies.webp",
    "ss_8c99c5092bae7a08967faff2f77ca9a3e41f72a3.1920x1080.jpg":
        "beast-of-reincarnation-nushi-boss-fight.webp",
    "ss_7252f8336988a2830e56428d99cf8792bc172161.1920x1080.jpg":
        "beast-of-reincarnation-waterfall-grotto.webp",
    "ss_2900b5fbc2ef7b5c2bd3fab6007942e89da34020.1920x1080.jpg":
        "beast-of-reincarnation-malefact-horde-combat.webp",
    "ss_f9988d54094c2a099e5dafcdd12f045e4ca35f3b.1920x1080.jpg":
        "beast-of-reincarnation-emma-parry-flower-beast.webp",
}

TARGET_W = 1600
MAX_BYTES = 100 * 1024

for src_name, dst_name in MAP.items():
    src_path = os.path.join(SRC, src_name)
    dst_path = os.path.join(DST, dst_name)
    im = Image.open(src_path).convert("RGB")
    w, h = im.size
    if w > TARGET_W:
        im = im.resize((TARGET_W, round(h * TARGET_W / w)), Image.LANCZOS)
    # 二分/递减质量，压到 <100KB
    q = 82
    while q >= 40:
        im.save(dst_path, "WEBP", quality=q, method=6)
        if os.path.getsize(dst_path) <= MAX_BYTES:
            break
        q -= 6
    kb = os.path.getsize(dst_path) / 1024
    print(f"{dst_name:60s} {im.size[0]}x{im.size[1]}  q={q}  {kb:6.1f} KB")

print("done")
