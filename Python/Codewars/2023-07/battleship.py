'''
Write a method that takes a field for well-known board game "Battleship" as an argument and returns True if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

    There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
    Each ship must be a straight line, except for submarines, which are just single cell.
    The ship cannot overlap, but can be contact with any other ship.

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
Thought process:
    1. Make a class called ship, give each ship a size
        1x4
        2x3
        3x2
        4x1
    2. Check if each full ship is present on the 2D grid by removing the ship object from the list if (horizontal == Ship.size) or (vertical == Ship.size and )

Thought process correction:
That is wrong. I will need to backtrack because, e.g., two types of ship arranged like this would remove my battleship:
            x  x  y  y
            x  x  0  0
            x  x  0  0
        I should not do this with a class. This is a lot like the sudoku challenge, so I can just use some of the code I wrote for that to backtrack over this one and check

    3. To return false for overlaps or an incorrect number of ships, all I have to do is make sure there are exactly 20 cells of 1, so I should keep a count as it iterates and return False at the end of the loop if count != 20
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
Plan:
    1. loop through the rows and cols in the field
    2. make sure there are at least 20 1's and that all of the following are true, in this order:
        3. make sure that there is a series of 1's, horizontally or vertically, that is at least four long
        4. make sure there are two series of 1's, horizontally or vertically, that are at least three long
        5. make sure there are three series of 1's, horizontally or vertically, that are at least two long
        6. make sure there are four other 1's

Update:
    CodeWars says it's failing for diagonals, but passing for everything else.  I don't think that's possible with the code I have so far because I am only checking either rows or columns, so it should not return anything for a diagonal. I don't see the test that says that, but when I modified my test in a way that I know it cannot be, I found it becomes true even when there are not enough cruisers. I think I need to count the ships or check them in a different order.

New plan:
    Make a function that returns True if a rule is violated

'''

def validate_battlefield(field):
    ships = {4:1, 3:2, 2:3, 1:4} # dictionary of ship_size:number of occurrences
    total_lengths = 0

    def remove_ships(row, col, length):
        nonlocal total_lengths
        if all(field[row][c] == 1 for c in range(col, col + length)):
            for c in range(col, col + length):
                field[row][c] = 0
            total_lengths += length

        elif all(field[r][col] == 1 for r in range(row, row + length)):
            for r in range(row, row + length):
                field[r][col] = 0
            total_lengths += length

    def all_zero(field):
        for col in field:
            for row in field:
                for item in row:
                    if item != 0:
                        return False
        return True

    for ship_size in ships.keys():
        for row in range(10):
            for col in range(10-ship_size-1): # to make sure it doesn't exceed the field
                if all(field[row][col+num] == 1 for num in range(ship_size)):
                    remove_ships(row, col, ship_size)
                    ships[ship_size] -= 1

        for col in range(10):
            for row in range(10-ship_size+1):
                if all(field[row+num][col] == 1 for num in range(ship_size)):
                    remove_ships(row, col, ship_size)
                    ships[ship_size] -= 1

            return all(ships[ship_size] == 0 for ship_size in ships)

'''
                    for i in range(4):
                        #print('loop', i)
                        if i == battleship and battleship != 0:
                            #print(battleship)
                            for ii in range(battleship):
                                remove_ships(field, row, col, battleship)
                            battleship -= battleship
                        elif i == cruiser and cruiser != 0:
                            for ii in range(cruiser):
                                remove_ships(field, row, col, i)
                            cruiser =- 1
                        elif i == destroyer and destroyer != 0:
                            for ii in range(destroyer):
                                remove_ships(field, row, col, i)
                            destroyer -= 1
                        elif i == sub and sub != 0:
                            for ii in range(sub):
                                remove_ships(field, row, col, i)
                            sub -= 1
                        # Check if it's all zero and that total_lengths = 20
'''
        # return all_zero(field) and total_lengths == 20

'''

    # make a list for each row of how long each series of 1s is.
    def horizontal_lengths():
        row_counts = []
        horizontal_length = 0

        for row in field:
            row_count = []
            for num in row:
                if num == 1:
                    horizontal_length += 1
                elif num == 0 and horizontal_length > 0:
                    row_count.append(horizontal_length)
                    horizontal_length = 0
            if horizontal_length > 0:
                row_count.append(horizontal_length)
            row_counts.append(row_count)
        return row_counts

    # make a list for each column of how long each series of 1s is.
    def vertical_lengths():
        col_counts = []
        for col in range(10):
            col_count = []
            vertical_length = 0
            for row in field:
                num = row[col]
                if num == 1:
                    vertical_length += 1
                elif num == 0 and vertical_length > 0:
                    col_count.append(vertical_length)
                    vertical_length = 0
            if vertical_length > 0:
                col_count.append(vertical_length)
            col_counts.append(col_count)
        return col_counts

    # making sure that each ship could possibly exist here.
    def check_ships(lengths_list, ship_size, occurrences_required):
        count = 0
        for sublist in lengths_list:
            for num in sublist:
                if num == ship_size:
                    count += 1
                    if count >= occurrences_required:
                        return True
        return False

    def get_coordinates(ship):
        if check_ships(horizontal_lengths(), ship[0], ship[1]):
            pass


    if check_ships(horizontal_lengths(), battleship[0], battleship[1]) or check_ships(vertical_lengths(), battleship[0], battleship[1]):
        total_lengths += battleship[1]
    if check_ships(horizontal_lengths(), cruiser[0], cruiser[1]) or check_ships(vertical_lengths(), cruiser[0], cruiser[1]):
        total_lengths += cruiser[1]
    if check_ships(horizontal_lengths(), destroyer[0], destroyer[1]) or check_ships(vertical_lengths(), destroyer[0], destroyer[1]):
        total_lengths += destroyer[1]
    if check_ships(horizontal_lengths(), sub[0], sub[1]) or check_ships(vertical_lengths(), sub[0], sub[1]):
        total_lengths += sub[1]

    if total_lengths == 20:
        return True
    else:
        print(total_lengths)
        return False
'''


test1 = [
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

test2 = [
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

print(validate_battlefield(test1))
print(validate_battlefield(test2))
'''
    def find_ones_sequences_coordinates(length):
        sequences = []
        num_rows = len(rows)
        num_columns = len(rows[0])

        # Search for sequences in the rows
        for row_index, row in enumerate(rows):
            sequence_starts = []
            sequence_ends = []
            count = 0
            for col_index, num in enumerate(row):
                if num == 1:
                    if count == 0:
                        sequence_starts.append((row_index, col_index))
                    count += 1
                elif num == 0 and count == length:
                    sequence_ends.append((row_index, col_index - 1))
                    count = 0
                else:
                    count = 0
            if count == length:
                sequence_ends.append((row_index, num_columns - 1))
            sequences.extend(list(zip(sequence_starts, sequence_ends)))

        # Search for sequences of length in the columns
        for col_index in range(num_columns):
            sequence_starts = []
            sequence_ends = []
            count = 0
            for row_index, row in enumerate(rows):
                num = row[col_index]
                if num == 1:
                    if count == 0:
                        sequence_starts.append((row_index, col_index))
                    count += 1
                elif num == 0 and count == length:
                    sequence_ends.append((row_index - 1, col_index))
                    count = 0
                else:
                    count = 0
            if count == length:
                sequence_ends.append((num_rows - 1, col_index))
            sequences.extend(list(zip(sequence_starts, sequence_ends)))

        return sequences


'''
