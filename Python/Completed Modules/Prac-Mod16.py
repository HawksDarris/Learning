# Make a file. Copy it to another. Rename it.
# Create a new file. Write text to it. Copy it to another. Append lines
#   to the copied file. Print both to compare.
import os
import shutil

a = open("Prac_Mod16_File_One", "w")
a.close()

shutil.copy("Prac_Mod16_File_One", "Prac_Mod16_File_One_Copied")
os.rename("Prac_Mod16_File_One_Copied", "Prac_Mod16_Copied_File_One")

a = open("Prac_Mod16_File_Two", "w")
a.write("text to it")
a.close()
shutil.copy("Prac_Mod16_File_Two", "Prac_Mod16_File_Two_Copied")

a = open("Prac_Mod16_File_Two_Copied", "a")
a.write("\nAppended line 1\n")
a.write("Appended line 2\n")
a.close()

a = open("Prac_Mod16_File_Two", "r")
print(a.read())
a.close()

a = open("Prac_Mod16_File_Two_Copied", "r")
print(a.read())
a.close()
