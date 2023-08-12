# Module 23: Handling exceptions:
import sys
from typing import final

try:
    print(0/0)
except ZeroDivisionError:
    print("you blew up the universe")

try:
    num = int(input("enter a number between 1-10"))
    print("you entered the number", num)
except ValueError:
    print("you didn't do it right")
    sys.exit() # exits program gracefully
finally:
    print("Goodbye World")
