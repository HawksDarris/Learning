# Module 15: Reading files
# Before being able to read a file, you need to open it with open()

# The function returns a file object (i.e., a 'handle')
# Example:
#a = open("Mod15-readfile.txt","r")
#print(a.read())
#a.close() # must close. Cannot use again unless it's closed, basically.

# file object = open(file_name[, access_mode])
# the mode argument is optional; 'r' is default
# Access modes:
#
# READ
#
# r: read-only
# rb: binary + read-only,
#   offset remains at root level (???)
# r+: opens file in both read and write
#   offset remains at root level (???)
# rb+: binary + read and write,
#   offset remains at root level (???)
#
# WRITE
#
# w: creates file if it doesn't exist,
#   overwrites if it does exist
# wb: writing in binary,
#   overwrites if it does exist
# w+: read & write,
#   overwrites if it does exist
# wb+: read & write in binary,
#   overwrites if it does exist
#
# APPEND
#
# a: Opens file in append mode,
#   offset at end, creates file if it doesn't exist
# ab: Opens file in append binary mode,
#   offset at end, creates file if it doesn't exist
# a+: Opens file in append & read mode,
#   offset at end, creates file if it doesn't exist
# ab+: Opens file in append & read & binary mode,
#   offset at end, creates file if it doesn't exist

# What if I want to read only one line?
#   .readline()
#print("----------------------------------------")
#a = open("Mod15-readfile.txt","r")
#print(a.readline())
#a.close()

#print("----------------------------------------")
#a = open("Mod15-readfile.txt","r")
#print(a.read(7)) # reads the first 7 characters
# a.close() unclosed for the with:

# with
#print("----------------------------------------")
#print("An alternative to .close() is the `with` command: ")
#with open("Mod15-readfile.txt") as myfile:
    #print(myfile.read()) # reads the first 7 characters
    #myfile.close()
#a.close

print("----------------------------------------")
a = open("Mod15-readfile.txt","a")
a.write("\nThis is a new line added by the 'a' option in the open function. a+ does not work how you think right now.")
# print(a.read()) # For some reason, this is only reading what I have added, and not the whole file.
# I don't understand it yet. Commented the above line because I took away a+,
# so a.read() is not available.
a.close()
a = open("Mod15-readfile.txt","r")
print(a.read())
a.close()
print("----------------------------------------")
print("\nYou have to close the file then open it again with r to read it, otherwise you're just reading what you added.")
a = open("Mod15-readfile.txt","w")
a.write("Overwriting the file now. I think.")
a.close()
a = open("Mod15-readfile.txt", "r")
print(a.read())
a.close()
print("----------------------------------------")
print("Interestingly, it only overwrites it for the next run of the program, so I guess it's writing into the stream until it gets finalized at the end of the program.")

print("The 'x' mode creates a file if one doesn't exist already")
