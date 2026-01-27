import time

def odd_or_even_day(timestamp):
    return "odd" if (time.gmtime(timestamp/1000).tm_mday & 1) else "even"

