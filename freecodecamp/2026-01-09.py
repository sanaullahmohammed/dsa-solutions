def is_prime(num):
    # Check if a number is prime
    if num < 2:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    
    i = 3
    while i <= num**0.5:
        if num % i == 0:
            return False
        i += 2
    
    return True


def get_rotations(num):
    # Get all rotations of a number
    str_num = str(num)
    rotations = []
    
    for i in range(len(str_num)):
        rotated = str_num[i:] + str_num[:i]
        rotations.append(int(rotated))
    
    return rotations


def is_circular_prime(n):
    # Check if all rotations are prime
    rotations = get_rotations(n)

    result = False;

    for i in range(len(rotations)):
        result = is_prime(rotations[i])
    
    return result
