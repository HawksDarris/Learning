# Creating variables on one line of code and printing with F-string

Var1, Var2, Var3=10,20,30

Var1, Var2, Var3, Var4 = 33, "car", 2.158,"hey"
print(Var1)
print(Var2)
print(Var3)
print(Var4)

AssignmentOperator={"Dave":'41',"Bob":'22',"Mark":'38'}
for name, age in AssignmentOperator.items():
    print(F"{name} is {age} years old.")
