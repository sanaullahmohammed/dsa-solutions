function digitalDetox(logs) {
  // Convert to Date objects and sort
  const times = logs
    .map(log => new Date(log.replace(" ", "T")))
    .sort((a, b) => a - b);

  const FOUR_HOURS = 4 * 60 * 60 * 1000;
  const dailyCount = {};

  for (let i = 0; i < times.length; i++) {
    // Rule 1: 4-hour gap
    if (i > 0 && times[i] - times[i - 1] < FOUR_HOURS) {
      return false;
    }

    // Rule 2: max 2 per day
    const day = times[i].toISOString().split("T")[0];
    dailyCount[day] = (dailyCount[day] || 0) + 1;

    if (dailyCount[day] > 2) {
      return false;
    }
  }

  return true;
}
