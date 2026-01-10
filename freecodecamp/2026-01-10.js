function ticTacToe(board) {
    const lines = [
        // rows
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],

        // columns
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],

        // diagonals
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    for (const line of lines) {
        const [a, b, c] = line;
        const value = board[a[0]][a[1]];

        if (
            value === board[b[0]][b[1]] &&
            value === board[c[0]][c[1]]
        ) {
            return value === "X" ? "X wins" : "O wins";
        }
    }

    return "Draw";
}

