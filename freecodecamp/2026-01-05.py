def tire_status(pressures_psi, range_bar):
    BAR = 14.5038

    lowPressure = range_bar[0] * BAR
    highPressure = range_bar[1] * BAR

    result = []

    for i in range(0, 4):
        pressure = pressures_psi[i]

        if (pressure >= lowPressure and pressure <= highPressure):
            result.append("Good")
        elif (pressure < lowPressure):
            result.append("Low")
        else:
            result.append("High")

    return result
