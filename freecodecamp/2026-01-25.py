def scale_image(size, scale):
    width, height = size.split("x")
    new_width = int(float(width) * scale)
    new_height = int(float(height) * scale)
    return f"{new_width}x{new_height}"
