import random

# TO DO:
# 1. Figure out an efficient way to check win conditions
#       Is there a way to create a hash of a given list? Then I could just put
#       every way to make each hand into a hash and rank the hashes, then hash
#       the players' hands to see who won.
# 2. Implement betting
# 3. Add player input
# 4. Add GUI
# 5. Make a computer player

class Card:
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit

    def __lt__(self, other):
        return self.suit < other.suit, self.value < other.value

    def show(self):
        print('{} {}'.format(self.suit,self.value))

class Deck:
    def __init__(self):
        self.cards = []
        self.generate()

    def generate(self, numberofcards=52):
        suits=['\u2660', '\u2666', '\u2663', '\u2665'] # Unicode values for the suit icons
        cardspersuit = int(numberofcards/len(suits))
        for suit in suits:
            for cardofsuit in range(cardspersuit):
                if cardofsuit==9:
                    cardname=10
                    self.cards.append(Card(cardname,suit))
                elif cardofsuit==10:
                    cardname ='J'
                    self.cards.append(Card(cardname,suit))
                elif cardofsuit==11:
                    cardname ='Q'
                    self.cards.append(Card(cardname,suit))
                elif cardofsuit==12:
                    cardname ='K'
                    self.cards.append(Card(cardname,suit))
                elif cardofsuit==0:
                    cardname ='A'
                    self.cards.append(Card(cardname,suit))
                else:
                    self.cards.append(Card(cardofsuit+1,suit))


    def shuffle(self):
        for i in range(len(self.cards) - 1, 0, -1):
            r = random.randint(0, i)
            self.cards[i], self.cards[r] = self.cards[r], self.cards[i]

    def draw(self):
        return self.cards.pop()

    def showdeck(self):
        for card in self.cards:
            card.show() # I need to figure out why the last line of this prints 'None'

class Player:
    def __init__(self, name):
        self.name = name
        self.hand = []

    def draw(self,deck,cardsdrawn=1, showdrawn=False):
        for i in range(cardsdrawn):
            self.hand.append(deck.draw())
        if showdrawn==True:
            return self, self.showdraw(),print('The Table:')
        else:
            return self

    def showhand(self):
        for card in self.hand:
            card.show()

    def showdraw(self):
        self.hand[-1].show()

class Hands:
    def __init__(self):
        self.besthand = []
        self.cards = []

    def royalflush(self):
        suits=['\u2660', '\u2666', '\u2663', '\u2665'] # Unicode values for the suit icons
        numberofcards=52
        cardspersuit = int(numberofcards/len(suits))
        for suit in suits:
            for cardofsuit in range(cardspersuit):
                if cardofsuit==9:
                    cardname ='10'
                    self.besthand.append(Card(cardname,suit))
                elif cardofsuit==10:
                    cardname ='J'
                    self.besthand.append(Card(cardname,suit))
                elif cardofsuit==11:
                    cardname ='Q'
                    self.besthand.append(Card(cardname,suit))
                elif cardofsuit==12:
                    cardname ='K'
                    self.besthand.append(Card(cardname,suit))
                elif cardofsuit==0:
                    cardname ='A'
                    self.besthand.append(Card(cardname,suit))
        #self.besthand.sort()

        for card in self.besthand:
            card.show() # I need to figure out why the last line of this prints 'None'

Hands().royalflush()

# Create the deck:
deck = Deck()
#deck.shuffle()
#deck.showdeck()

"""
# Create the players
table=Player('Table')
dealer=Player("Dealer") # in case you're playing with a house, maybe.
grave=Player("Grave")
alice=Player("Alice")
bob=Player("Bob")

# Draw initial hands
alice.draw(deck,2)
bob.draw(deck,2)

# Burn one:
grave.draw(deck)
# The flop:
print('Burning one...')
print('The Flop: ',end=' ')
table.draw(deck,3)
print('')
table.showhand()
print('')
# Burn one:
print('Burning one...')
grave.draw(deck)
# The turn
print('The Turn:',end=' ')
table.draw(deck,showdrawn=True)
table.showhand()
print('')
# Burn one:
print('Burning one...')
grave.draw(deck)
# The river
print('The River:',end=' ')
table.draw(deck,showdrawn=True)
table.showhand()
print('')

# Make sure everything makes sense
print('Alice:')
alice.showhand()
print('')
print('Bob:')
bob.showhand()
print('')
print('The deck:')
print('')
deck.showdeck()
print('')
"""
