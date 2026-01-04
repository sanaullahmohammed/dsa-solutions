function findLeftHandedSeats(table) {
  let numberOfValidSeats = 0;

  for (let column = 0; column < 4; column++) {
    const seat = table[0][column];
    const leftSeat = (column + 1) >= 4 ? null : table[0][column + 1];

    if (seat === "U" && leftSeat !== "R") {
      numberOfValidSeats++;
    }
  }

  for (let column = 0; column < 4; column++) {
    const seat = table[1][column];
    const leftSeat = (column - 1) < 0 ? null : table[1][column - 1];

    if (seat === "U" && leftSeat !== "R") {
      numberOfValidSeats++;
    }
  }

  return numberOfValidSeats;
}
