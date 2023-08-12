# Module 14: Nesting for loops
#
from typing_extensions import LiteralString


outer = ['outer1','outer2','outer3']
inner = ['inner1','inner2','inner3']

for x in outer:
    for y in inner:
        print(x,y)
    print("\n")

numbers = [1,2,3]
letters = ['a','b','c']
for x in numbers:
    print(x)
    for y in letters:
        print(y)
    print("\n")
