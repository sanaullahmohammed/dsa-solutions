def case_helper(c):
    smallC = c.lower()

    match smallC:
        case 'a': return c.upper()
        case 'e': return c.upper()
        case 'i': return c.upper()
        case 'o': return c.upper()
        case 'u': return c.upper()
        case _: return c.lower()

def vowel_case(s):
    result = ""
    sList = list(s)

    for character in sList:
        result += case_helper(character)

    return result
