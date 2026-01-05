function tireStatus(pressuresPSI, rangeBar) {
  const BAR = 14.5038;

  const [lowPressure, highPressure] = rangeBar.map((element) => element * BAR);

  return pressuresPSI.map((pressure) => {
    if (pressure >= lowPressure && pressure <= highPressure) {
      return "Good";
    } else if (pressure < lowPressure) {
      return "Low";
    } else {
      return "High";
    }
  });
}
