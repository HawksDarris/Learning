# Multiple Assignment Statements
a=1
b=2
# is the same thing as
(a,b)=(1,2)

# you can assign multiple variables to each other all at one
x=y=z=3

print("a="+str(a))
print("b="+str(b))
print(x)
print(y)
print(z)

# Multiple assignments is common in for loops
# This is the example from the class:
numbers={"First Num":'1',"Second Num":'2',"Third Num":'3'}
for key, value in numbers.items():
    #.items() counts the number of things in a dictionary object
    print(F"Key {key} has a value of {value}")

# The F in print(F"Key {key} has a value of {value}") makes the {things}
# evaluate before printing
Name="John"
age="20"
print(F"His name is {Name} and he is {age} years old.")
