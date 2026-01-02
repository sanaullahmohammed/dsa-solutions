dp = []

def foobar(n):
    if n <= 1:
        return 0
        
    if n == 2:
        return 1

    if dp[n] is not None:
        return dp[n]

    dp[n] = foobar(n - 1) + foobar(n - 2)
    return dp[n]

def nth_fibonacci(n):
    global dp
    dp = [None] * (n + 1)   # initialize memo table
    return foobar(n)
