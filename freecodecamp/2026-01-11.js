function golfScore(par, strokes) {
    if (strokes === 1) {
        return "Hole in one!";
    }

    const diff = strokes - par;

    switch(diff) {
      case -2: return "Eagle";
      case -1: return "Birdie";
      case 0: return "Par";
      case 1: return "Bogey";
      case 2: return "Double bogey";
      default: return "Invalid score";
    }
}

