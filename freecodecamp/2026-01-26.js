function fizzBuzzMini(n) {
  return (
    (n%3 == 0) && (n%5 == 0)
    ? "FizzBuzz"
    : (n%5 == 0)
      ? "Buzz"
      : (n%3 == 0)
        ? "Fizz"
        : String(n)
  );
}
