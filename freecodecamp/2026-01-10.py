def tic_tac_toe(board):
    lines = [
        # rows
        [(0, 0), (0, 1), (0, 2)],
        [(1, 0), (1, 1), (1, 2)],
        [(2, 0), (2, 1), (2, 2)],

        # columns
        [(0, 0), (1, 0), (2, 0)],
        [(0, 1), (1, 1), (2, 1)],
        [(0, 2), (1, 2), (2, 2)],

        # diagonals
        [(0, 0), (1, 1), (2, 2)],
        [(0, 2), (1, 1), (2, 0)]
    ]

    for line in lines:
        (r1, c1), (r2, c2), (r3, c3) = line
        value = board[r1][c1]

        if value == board[r2][c2] == board[r3][c3]:
            return "X wins" if value == "X" else "O wins"

    return "Draw"

