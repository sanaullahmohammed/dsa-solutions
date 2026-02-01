from datetime import datetime

def digital_detox(logs):
    # Parse and sort logs
    times = sorted(datetime.strptime(log, "%Y-%m-%d %H:%M:%S") for log in logs)

    daily_count = {}
    four_hours = 4 * 60 * 60  # seconds

    for i in range(len(times)):
        # Rule 1: 4-hour gap
        if i > 0:
            diff = (times[i] - times[i - 1]).total_seconds()
            if diff < four_hours:
                return False

        # Rule 2: max 2 per day
        day = times[i].date()
        daily_count[day] = daily_count.get(day, 0) + 1

        if daily_count[day] > 2:
            return False

    return True
