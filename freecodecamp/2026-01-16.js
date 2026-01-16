function isIntegerHypotenuse(a, b) {
  const hypotenuse = Math.sqrt(a * a + b * b);
  return Number.isInteger(hypotenuse);
}
