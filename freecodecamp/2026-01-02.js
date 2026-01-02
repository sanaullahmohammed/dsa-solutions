let dp = [];

function fooBar(n) {
  if (n <= 1) {
    return 0;
  }

  if (n == 2) {
    return 1;
  }

  if (dp[n] != null) {
    return dp[n];
  }

  return dp[n] = fooBar(n - 1) + fooBar(n - 2);
}

function nthFibonacci(n) {
  return fooBar(n);
}
