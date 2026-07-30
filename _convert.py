# -*- coding: utf-8 -*-
# 把官方商店页素材转成站内 WebP（1600 宽为主，<=110KB），存 public/images/
# 素材来源（均为官方发行渠道的宣传素材，抓取日 2026-07-30）：
#   image/ps/      PlayStation Store concept 10014719 —— 10 张 3840x2160 截图 + 4K key art
#   image/xbox/    Xbox Store 9NXWSWBM4H6T —— 6 张截图 + hero/box art（内容与 PS 重复，仅留档）
#   image/steam2/  Steam App 2001760 library_hero —— 3840x1240 宽幅主视觉
#   image/         最初的 7 张 1920x1080 Steam 截图（已被同图的 4K PS 版本取代）
# 目标：每篇文章、每个页面一张不重复的图。
import os
from PIL import Image

DST = "public/images"
os.makedirs(DST, exist_ok=True)

# (源文件, 目标文件名, 目标宽度)
MAP = [
    # 战斗 / 场景截图 —— 1600x900，取自 PS Store 4K 原图
    ("image/ps/ps-ss-04.jpg", "beast-of-reincarnation-machine-swarm-combat.webp", 1600),
    ("image/ps/ps-ss-05.jpg", "beast-of-reincarnation-emma-parry-flower-beast.webp", 1600),
    ("image/ps/ps-ss-06.jpg", "beast-of-reincarnation-emma-koo-river-exploration.webp", 1600),
    ("image/ps/ps-ss-07.jpg", "beast-of-reincarnation-wasteland-colossal-boss.webp", 1600),
    ("image/ps/ps-ss-08.jpg", "beast-of-reincarnation-waterfall-grotto.webp", 1600),
    ("image/ps/ps-ss-09.jpg", "beast-of-reincarnation-blighted-boar-enemies.webp", 1600),
    ("image/ps/ps-ss-10.jpg", "beast-of-reincarnation-nushi-boss-fight.webp", 1600),
    # 角色 / 犬只官方渲染图
    ("image/ps/ps-ss-01.jpg", "beast-of-reincarnation-emma-character.webp", 1600),
    ("image/ps/ps-ss-02.jpg", "beast-of-reincarnation-koo-shiba-skin.webp", 1600),
    ("image/ps/ps-ss-03.jpg", "beast-of-reincarnation-koo-blighted-wolf.webp", 1600),
    # 主视觉
    ("image/ps/ps-keyart.jpg", "beast-of-reincarnation-key-art.webp", 1600),
    ("image/steam2/library_hero_2x.jpg", "beast-of-reincarnation-forest-hero-wide.webp", 1600),
]

# OG 图单独从 key art 裁 1200x630，避免与任何文章配图重复
OG_SRC = "image/ps/ps-keyart.jpg"
OG_DST = "beast-of-reincarnation-wiki-og.webp"

MAX_BYTES = 160 * 1024
MIN_QUALITY = 68  # 低于这个画质就宁可缩宽度，避免草丛 / 尘土这类高频画面糊掉


def save_capped(im, path, start_q=82):
    """先降质量到 MIN_QUALITY，仍超标就逐步缩宽度，保证画质下限。"""
    while True:
        q = start_q
        while q >= MIN_QUALITY:
            im.save(path, "WEBP", quality=q, method=6)
            if os.path.getsize(path) <= MAX_BYTES:
                return im, q, os.path.getsize(path) / 1024
            q -= 6
        if im.size[0] <= 1100:
            return im, q + 6, os.path.getsize(path) / 1024
        w = round(im.size[0] * 0.9)
        im = im.resize((w, round(im.size[1] * w / im.size[0])), Image.LANCZOS)


for src, dst_name, target_w in MAP:
    im = Image.open(src).convert("RGB")
    w, h = im.size
    if w > target_w:
        im = im.resize((target_w, round(h * target_w / w)), Image.LANCZOS)
    im, q, kb = save_capped(im, os.path.join(DST, dst_name))
    print(f"{dst_name:58s} {im.size[0]}x{im.size[1]}  q={q}  {kb:6.1f} KB")

im = Image.open(OG_SRC).convert("RGB")
w, h = im.size
crop_h = round(w / (1200 / 630))
top = max(0, (h - crop_h) // 2)
im = im.crop((0, top, w, top + min(crop_h, h))).resize((1200, 630), Image.LANCZOS)
im, q, kb = save_capped(im, os.path.join(DST, OG_DST))
print(f"{OG_DST:58s} {im.size[0]}x{im.size[1]}  q={q}  {kb:6.1f} KB")

print("done")
