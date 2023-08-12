# Module 16: More on files

# COPYING:
#
# Must import module shutil module.
#
# shutil.copy(source, destination)
# ALTERNATIVE,
#   shutil.copystat(src, dest)
#   This also copies metadata (MAC times, permissions, etc.)

import shutil # allows copying
import os # allows renaming a file

a = open("Learn-Mod16-src", "w")
a.write("This is the text in the src file.")
a.close()

src = "Learn-Mod16-src"
dst = "Learn-Mod16-dst"
shutil.copy(src, dst)

a = open("Learn-Mod16-src", "r")
#print("This is the src:")
print(a.read())
a.close()

a = open("Learn-Mod16-dst", "r")
print("This is the text in the dst file (I added the indent):")
print("    "+a.read())
a.close()

a = open("Learn-Mod16-src", "r")
b = open("Learn-Mod16-dst", "r")
if a.read() == b.read():
    print("Successfully copied.")
a.close()
b.close()

c = open("Learn-Mod16-demo", "w")
c.write("This file was created to be renamed.")
c.close()

c = open("Learn-Mod16-demo", "r")
print("Print contents of Learn-Mod16-demo:")
print(c.read())
c.close()

print("Immediately renaming Learn-Mod16-demo to Learn-Mod16-renamed...")
os.rename("Learn-Mod16-demo", "Learn-Mod16-renamed")

c = open("Learn-Mod16-renamed", "r")
print("Print contents of Learn-Mod16-renamed:")
print(c.read())
c.close()

c = open("Learn-Mod16-demo", "w")
c.write("This file was created to be removed.")
c.close()
os.remove("Learn-Mod16-demo")
