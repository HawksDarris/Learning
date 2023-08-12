# Module 9: Working with Operators
# There are some that aren't on my list because they aren't for beginners, it
# says (modulus is not included for some reason)

a = 2
b = 3
c = a

# Operators:
#
# Arithmetic:
# +, -, *, /, %, **
# ** is exponent
#
print("Arithmetic operators:  +, -, *, /, %, **")
print(a-b)
print(a*b)
print(a/b)
print(a%b) # remainder
print(a**b)
print("\n")

# Assignment:
# =, +=, -=, *=, /=, **=
# Pretty self-explanatory when you know the basic idea:
#   a += 5 == a=a+5
#   it's just shorthand.
#
# Comparison:
# ==, !=, <, >, <=, >=
#
print("Comparison operators: ==, !=, <, >, <=, >=")
print("2 = 3")
print(a==b)
print("2 != 3")
print(a!=b)
print("2 < 3")
print(a<b)
print("2 > 3")
print(a>b)
print("2 <= 3")
print(a<=b)
print("2 >= 3")
print(a>=b)
print("\n")

# Logical:
# and, or, not
print("Logical operators: and, or, not, xor")
print("2 = 3 or 2 + 2 > 3")
print(a==b or a+a>b)
print("2 = 3 and 2 + 2 > 3")
print(a==b and a+a>b)
print("not(2 = 3) and 2 + 2 > 3")
print(not(a==b) and a+a>b)
print("not(2 = 3 and 2 + 2 > 3)")
print(not(a==b and a+a>b))
print("2 = 3 and not(2 + 2 > 3)")
print(a==b and not(a+a>b))
print("\n")

# Identity:
# is, is not
print("Identity operators: is, is not")
print("Checks NOT if they are equal, but if they are the SAME OBJECT in the same memory location.")
print("a is b")
print(a is b)
print("a is not b")
print(a is not b)
print("a is c (assigned a = c above)")
print(a is c)
print("\n")

# Membership:
# in, not in
print("Membership operators: in, not in")
print("Checks if a sequence is presented in an object (like if something is in a list[])")
vars=[a,b]
print("the list is vars=[a,b]: "+str(vars))
print("1 in vars")
print(1 in vars)
print("2 in vars")
print(2 in vars)
print("1 not in vars")
print(1 not in vars)
print("\n")

# Bitwise:
# &, |, ^
print("Bitwise operators: &, |, ^ (and, or, XOR).")
print("Bitwise operators work only on binary numbers. Use bin() for now.")
print("binary numbers print in python with the indicator `0b` before the binary value. The leading zeros are omitted. Every number will be 8 digits long, including the omitted 0s.")
print("a = 24, b = 60")
a = 24
b = 60
print("print(bin(24)): ")
print(bin(a))
print("print(bin(60)): ")
print(bin(b))

print("As you can see, 24 = 00011000")
print("As you can see, 60 = 00111100")
print("If you use &, it will check where the bits line up to equal 1 in both numbers.")
print("24 & 60:")
print(a & b)
print("Why is it 24? Because 00011000 is where both numbers have 1, and 00011000 is 24\n")

print("or, `|` does where either number has a 1")
print("24 | 60:")
print(a | b)
print("\n")

print("xor, `^` does where either number has a 1")
print("24 ^ 60:")
print(a ^ b)
print("Why is it 36? Because "+str(bin(36))+" is where both numbers have 1, and 00011000 is 24\n")
print("This is rarely used, apparently.")
