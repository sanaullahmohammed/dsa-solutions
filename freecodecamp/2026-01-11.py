def golf_score(par, strokes):
    if strokes == 1:
        return "Hole in one!"

    diff = strokes - par

    match diff:
        case -2:
            return "Eagle"
        case -1:
            return "Birdie"
        case 0:
            return "Par"
        case 1:
            return "Bogey"
        case 2:
            return "Double bogey"
        case _:
            return "Invalid score"

