#!/usr/bin/env python3
'''
9x9 grid
one pawn per player
even number of players (3 players is possible, but it gives one player an advantage)
Players start opposite each other on the center space

walls are two spaces wide
20 walls divide equally among the players

Player can take one of three actions:
    place wall one wall
    move pawn one space horizontally or vertically
    jump over other player's adjacent pawn

Player may not place a wall that eliminates a path to the other side.
Player may not jump over more than one pawn during one action


Objective is to move to opposite side

------------------------------------------------------------------------------------------------------------------------
Concept:
    2D array of 0's for an empty board. 1 for walls. 2 for pawns.
------------------------------------------------------------------------------------------------------------------------
Plan:
    make a class for the pawns, the walls, and the board to keep track of where each pawn and wall is on the board.

    For the pawn, I will need a method for movement and a method for placing walls.
        is_move_legal():

        Check if pawn has remaining walls
            select cell,
                check if that fully blocks the path
            place wall

        store N, S, E, and W of pawn as property
            get pawn movement selection (NSEW)
                if selection would jump a wall, invalid move
                if other pawn adjacent and selection direction is empty for other pawn and not the edge of the board:
                    update pawn position
                    update pawn NSEW property
            (Feels like there could be a method called is_move_legal() that checks all this in the Board class)

        Store starting coordinates as property. Victory if opposite side is reached:
            start on (0,5) means win on (9,X)
            start on (9,5) means win on (0,X)
            start on (5,0) means win on (X,9)
            start on (5,9) means win on (X,0)

    For the walls, I think I need only to subtract a wall from the player who moved it

    For the board, store position of all players and walls and update and check for victory every time one of them changes.


Bells and whistles in the future:
    convert the path to Forsythe notation
'''
class Player:
    pass

class Pawn: # Might get rid of this class and just handle everything in the Player class or vice versa
    def __init__(self, name, coordinates, walls):
        pass

    def move_pawn(self):
        pass

    def place_wall(self):
        pass
    pass

class Wall:
    pass

class Board:
    def __init__(self):
        self.board_state = [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]
        ]
    def setup_two_players(self):
        # Maybe I should do this by calling the Pawn and then updating the
        # board instead?
        self.board_state[0][5] == 2
        self.board_state[9,5] == 2

    def setup_three_players(self):
        pass

    def setup_four_players(self):
        pass
'''
        Board indexes for reference:

        0,0 	0,1     0,2     0,3     0,4     0,5     0,6     0,7
        1,0     1,1     1,2     1,3     1,4     1,5     1,6     1,7
        2,0     2,1     2,2     2,3     2,4     2,5     2,6     2,7
        3,0     3,1     3,2     3,3     3,4     3,5     3,6     3,7
        4,0     4,1     4,2     4,3     4,4     4,5     4,6     4,7
        5,0     5,1     5,2     5,3     5,4     5,5     5,6     5,7
        6,0     6,1     6,2     6,3     6,4     6,5     6,6     6,7
        7,0     7,1     7,2     7,3     7,4     7,5     7,6     7,7
'''
