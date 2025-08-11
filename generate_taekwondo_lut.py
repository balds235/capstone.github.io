import math

def clamp(val, minimum=0.0, maximum=1.0):
    return max(minimum, min(maximum, val))

def grade(r, g, b):
    r = r ** 0.85
    g = g ** 0.90
    b = b ** 1.05
    r = r * 1.1 + 0.02
    g = g * 1.05 + 0.01
    b = b * 0.95
    return clamp(r), clamp(g), clamp(b)

def generate_lut(size=17):
    lines = []
    for r_idx in range(size):
        r = r_idx / (size - 1)
        for g_idx in range(size):
            g = g_idx / (size - 1)
            for b_idx in range(size):
                b = b_idx / (size - 1)
                rr, gg, bb = grade(r, g, b)
                lines.append(f"{rr:.6f} {gg:.6f} {bb:.6f}")
    return lines

def main():
    size = 17
    print('TITLE "taekwondo LUT"')
    print(f'LUT_3D_SIZE {size}')
    print('LUT_3D_INPUT_RANGE 0 1')
    lines = generate_lut(size)
    for line in lines:
        print(line)

if __name__ == '__main__':
    main()
