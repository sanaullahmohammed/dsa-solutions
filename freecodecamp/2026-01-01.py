def resolution_streak(days):
    if len(days) == 0:
        return "Resolution on track: 0 day streak."
    
    for i in range(len(days)):
        steps, screen_time, pages_read = days[i]
        
        meets_steps_goal = steps >= 10000
        meets_screen_time_goal = screen_time <= 120
        meets_pages_goal = pages_read >= 5
        
        if not (meets_steps_goal and meets_screen_time_goal and meets_pages_goal):
            return f"Resolution failed on day {i + 1}: {i} day streak."
    
    return f"Resolution on track: {len(days)} day streak."
