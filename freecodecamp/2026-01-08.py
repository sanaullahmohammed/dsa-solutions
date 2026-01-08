def is_sorted(arr):
    isAsc = True
    isDesc = True
    
    n = len(arr)
    
    if n <= 1:
        return "Ascending"
    
    for i in range(0, n-1):
        if arr[i] > arr[i+1]:
            isAsc = False
        
        if arr[i] < arr[i+1]:
            isDesc = False
    
    if isAsc:
        return "Ascending"
    elif isDesc:
        return "Descending"
    else:
        return "Not sorted"
