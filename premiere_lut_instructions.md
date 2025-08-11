# Tae Kwon Do LUT for Adobe Premiere Pro

This repository includes a custom 3D LUT designed for indoor tae kwon do footage shot under fluorescent lighting. The LUT applies a slightly warm tone with increased contrast to evoke the look of classic martial arts films.

## Files

- `taekwondo_lut.cube` – 3D LUT (size 17) ready for use in Premiere.
- `generate_taekwondo_lut.py` – Python script used to generate the LUT.

## How to Install in Premiere Pro 2024

1. Download `taekwondo_lut.cube` to a location on your computer.
2. Open your project in **Adobe Premiere Pro 2024**.
3. Select the clip on your timeline that you want to grade.
4. Open the **Color** workspace to display the **Lumetri Color** panel.
5. In the **Basic Correction** section, click the **Input LUT** dropdown (or in **Creative** under **Look** choose **Browse**).
6. Navigate to where you saved `taekwondo_lut.cube` and select it.
7. Adjust the **Intensity** slider or other Lumetri controls to fine‑tune the effect.

The LUT assumes footage in the Rec.709 color space, typical of iPhone recordings.
