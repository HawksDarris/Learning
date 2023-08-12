# Module 19: Passing command line arguments

import sys # one way to pass CLI arguments to the program
import os

# sys.argv
#   len(sys.argv) counts the number of arguments
#   str(sys.argv) shows you the arguments being passed in

file = open(str(sys.argv[1]), "w")
print('Writing "Hello" to the file...')
with file as myfile:
    myfile.write("Hello")

print("The name of our file is: ", (sys.argv[1]))
print("The number of arguments is: ", len(sys.argv))
print("The actual arguments: ", str(sys.argv))
