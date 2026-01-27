function oddOrEvenDay(timestamp) {
  return (
    ((new Date(timestamp)).getUTCDate() & 1) === 1
    ? "odd"
    : "even"
  )
}
