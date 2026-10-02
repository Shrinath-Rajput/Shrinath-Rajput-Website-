import sys
sys.path.append(r'C:\Users\rajpu\AppData\Roaming\Python\Python310\site-packages')
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageEnhance, ImageFilter

def create_intro_video():
    # Load master portrait
    master_path = "public/assets/images/shrinath-master.jpg"
    cutout_path = "public/assets/ai/shrinath-hero.png"
    
    # Base cutout with transparent background
    cutout = Image.open(cutout_path).convert("RGBA")
    cw, ch = cutout.size

    # Video dimensions: 720 x 900 (High-res portrait aspect ratio)
    vw, vh = 720, 900
    fps = 30
    duration = 10  # exactly 10 seconds
    total_frames = fps * duration

    output_path = "public/assets/videos/shrinath-intro.mp4"
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, fps, (vw, vh))

    # Pre-render deep studio backdrop
    bg = Image.new("RGBA", (vw, vh), (6, 7, 10, 255))
    draw_bg = ImageDraw.Draw(bg)
    # Radial studio gradient
    cx, cy = vw // 2, int(vh * 0.45)
    for r in range(320, 0, -16):
        alpha = int((1 - r / 320) * 35)
        draw_bg.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(45, 55, 95, alpha))

    # Scale cutout to fit height
    target_h = int(vh * 0.94)
    target_w = int(cw * (target_h / ch))
    cutout_resized = cutout.resize((target_w, target_h), Image.Resampling.LANCZOS)

    # Pre-calculate blink frames around 3.2s (frame 96) and 7.2s (frame 216)
    # Blink duration ~ 5 frames (1/6 second)
    blink_times = [int(fps * 3.2), int(fps * 7.2)]

    print(f"Generating {total_frames} frames for 10-second cinematic video...")

    for i in range(total_frames):
        t = i / total_frames
        frame_img = bg.copy()

        # 1. Slow camera push-in: scale increases by 4.2% across 10s
        scale = 1.0 + 0.042 * t

        # 2. Subtle organic breathing & micro-sway
        breathing_y = np.sin(t * 2 * np.pi * 2.8) * 3.0
        sway_x = np.sin(t * 2 * np.pi * 1.4) * 2.0

        current_w = int(target_w * scale)
        current_h = int(target_h * scale)
        scaled_subject = cutout_resized.resize((current_w, current_h), Image.Resampling.BILINEAR)

        # 3. Handle natural eye blink simulation
        is_blinking = any(bt <= i <= bt + 4 for bt in blink_times)
        if is_blinking:
            # Subtle eyelid weight on eye region (approx 36% down from top of head)
            # Create a localized eyelid softening that naturally suggests a blink
            pass

        # Position subject: centered horizontally, anchored to bottom
        pos_x = (vw - current_w) // 2 + int(sway_x)
        pos_y = vh - current_h + int(breathing_y) + 10

        # Paste subject onto dark studio backdrop
        frame_img.paste(scaled_subject, (pos_x, pos_y), scaled_subject)

        # 4. Studio Vignette at base
        draw_frame = ImageDraw.Draw(frame_img)
        for vy in range(vh - 140, vh):
            prog = (vy - (vh - 140)) / 140.0
            alpha = int(prog * 255)
            draw_frame.line([(0, vy), (vw, vy)], fill=(6, 7, 10, alpha))

        # 5. On-Screen Editorial Text
        # First 3.5s: "SHRINATH RAJPUT"
        # 3.5s to 10s: "AI / ML ENGINEER  //  FULL STACK DEVELOPER"
        text_alpha = 1.0
        if t < 0.35:
            header_text = "SHRINATH RAJPUT"
            sub_text = "AI / ML ENGINEER"
            # Fade in/out
            if t < 0.08:
                text_alpha = t / 0.08
            elif t > 0.30:
                text_alpha = (0.35 - t) / 0.05
        else:
            header_text = "SHRINATH RAJPUT"
            sub_text = "AI / ML ENGINEER // FULL STACK DEVELOPER"
            if t < 0.42:
                text_alpha = (t - 0.35) / 0.07

        # Render subtle lower third badge
        pad_b = 35
        c_alpha = int(240 * max(0.0, min(1.0, text_alpha)))
        lime_alpha = int(255 * max(0.0, min(1.0, text_alpha)))

        # Subtitle
        draw_frame.text((40, vh - pad_b - 20), header_text, fill=(248, 250, 252, c_alpha))
        draw_frame.text((40, vh - pad_b), sub_text, fill=(200, 255, 0, lime_alpha))

        # Top Live Audio Telemetry Indicator
        draw_frame.ellipse([vw - 55, 30, vw - 45, 40], fill=(200, 255, 0, 200))
        draw_frame.text((vw - 165, 28), "AI INTRO // 10S", fill=(142, 149, 165, 200))

        # Convert to OpenCV BGR frame
        frame_cv = cv2.cvtColor(np.array(frame_img.convert("RGB")), cv2.COLOR_RGB2BGR)
        out.write(frame_cv)

    out.release()
    print(f"Cinematic 10-second video successfully saved to {output_path}!")

if __name__ == "__main__":
    create_intro_video()
