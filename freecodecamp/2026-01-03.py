def find_left_handed_seats(table):
    numOfValidPos = 0

    for column in range(0, 4):
        firstRowLeftSeat = table[0][column+1] if (column < 3) else None
        secondRowLeftSeat = table[1][column-1] if (column > 0) else None

        currFirstRowSeat = table[0][column]
        currSecondRowSeat = table[1][column]

        if (currFirstRowSeat == "U"):
            if (firstRowLeftSeat is None):
                numOfValidPos += 1
            elif (firstRowLeftSeat != "R"):
                numOfValidPos += 1
        
        if (currSecondRowSeat == "U"):
            if (secondRowLeftSeat is None):
                numOfValidPos += 1
            elif (secondRowLeftSeat != "R"):
                numOfValidPos += 1

    return numOfValidPos
