import math

ACRE_IN_SQ_MTRS = 4_046.86
HECTARE_IN_SQ_MTRS = 10_000


def unit_to_sq_mtrs(unit):
    if unit == "acres":
        return ACRE_IN_SQ_MTRS
    elif unit == "hectares":
        return HECTARE_IN_SQ_MTRS
    else:
        raise ValueError("Unknown Unit Requested")


def per_crop_sq_mtrs(crop):
    if crop == "corn":
        return 1
    elif crop == "wheat":
        return 0.1
    elif crop == "soybeans":
        return 0.5
    elif crop == "tomatoes":
        return 0.25
    elif crop == "lettuce":
        return 0.2
    else:
        raise ValueError("Unknown Crop Requested")


def get_number_of_plants(field_size, unit, crop):
    total_available_sq_mtrs = field_size * unit_to_sq_mtrs(unit)
    return math.floor(total_available_sq_mtrs / per_crop_sq_mtrs(crop))

