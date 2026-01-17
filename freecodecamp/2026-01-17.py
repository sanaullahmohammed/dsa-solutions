alpha_index_map = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7,
}

num_of_keys_of_alpha_index_map = len(alpha_index_map)

num_index_map = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    7: 6,
    8: 7,
}

num_of_keys_of_num_index_map = len(num_index_map)

dy = [ 2,  2,  1, -1, -2, -2,  1, -1]
dx = [-1,  1,  2,  2, -1,  1, -2, -2]

num_of_moves = 8


def knight_moves(position):
    alpha, num = position[0], position[1]

    alpha_val = alpha_index_map[alpha]
    num_val = num_index_map[int(num)]

    valid_num_of_moves = 0

    for i in range(num_of_moves):
        new_row = num_val + dy[i]
        new_col = alpha_val + dx[i]

        if (
            0 <= new_row < num_of_keys_of_num_index_map and
            0 <= new_col < num_of_keys_of_alpha_index_map
        ):
            valid_num_of_moves += 1

    return valid_num_of_moves

