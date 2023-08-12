# Create a new file. Write text to it then read and display it.
# Create another new file, write some text with a while loop w/ 3 lines and
# read and print

print("Writing a file with one line of text that says `Some text`...")
a = open("Mod15-Prac","w")
a.write(" Some text\n")
a.close()

print("Printing that file: ")
a = open("Mod15-Prac","r")
print(a.read())
print("The next bit will append more text to it and reread the whole file...")
a.close()

print("Appending text to the end...")

i = 0
a = open("Mod15-Prac","a")
while i < 3:
    a.write(" Some other text\n")
    i+=1
a.close()

print("Printing:")
a = open("Mod15-Prac","r")
print(" ",end='')
print(a.read())
a.close()
