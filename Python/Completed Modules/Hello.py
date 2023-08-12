print('hello world!')
print('hello')
print("nothing")

FloatVariable=10.32
print(type(FloatVariable))
# type() gives data type. Because 10.32 has `.32`, it is a float.

# To test a data type, use isinstance()
isinstance(FloatVariable, float) # returns True, but it won't do anything without print

# Prints True
print(isinstance(FloatVariable, float))

# Ints can be trivially converted to floats with `.0`
SomeNumber=10 # int because it has no decimal
print(SomeNumber)

OtherNumber="12"
print(float(OtherNumber))


# Strings must be in single or double quotes
first_string="hello"
second_string=first_string

print(first_string)
print("wow "+second_string)

first_string="I have changed"
print(first_string)
print(second_string+"! Oh no, I have not changed because my variable wasn't set equal to the first_string variable after it changed")

# [string].title() capitalizes each first letter
# [string].upper() capitalizes each word
# [string].lower() uncapitalizes each word
print(first_string.title())
print(first_string.upper())
print(first_string.lower())
print("HELLO".lower()) #doesn't have to be variable

# String Concatenation
FirstName="john"
LastName="smith"
FullName=FirstName.title()+" "+LastName.title()
age=40
# but you cannot cat numbers to strings, so you must either convert the int
# variable to a string by doing [intvar]=str([intvar]) or using str([intvar])
# in the concatenation expression
age=str(age)

print(FullName+" is "+age+" years old.")

# Python has some methods for getting rid of extra spaces, especially for
# user-supplied data:
# strip() removes white space from both sides;
# lstrip() removes white space from the left
# rstrip() removes white space from the right

game="  baseball    "
print(game.strip()+"test")
print(game.lstrip()+"test")
print(game.rstrip()+"test")

# Booleans

# This will print False
print("print(20<10):\n")
print(20<10)

# You can create a Boolaen variable in multiple ways:
print("\nPrint all the Boolean variables:")
BooleanOne=10==10
BooleanTwo=20==10
BooleanThree=True
BooleanFour=False

print(BooleanOne)
print(BooleanTwo)
print(BooleanThree)
print(BooleanFour)
