# Module 11: If statements

x = 10
y = 2
if x > y:
    print("x is more than y")
elif x==y:
    print("x equals y")
else:
    print("x is less than y")

# You can put it all on one line if you want.
a = 8
b = 2
print("A is greater") if a > b else print("B wins")
b+=7
print("A is greater") if a > b else print("B wins")
