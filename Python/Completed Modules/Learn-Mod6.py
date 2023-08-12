# Modifying lists

NumberList=[1,2,3,4,5]
print(NumberList)
print(NumberList[0])
NumberList[0]="Hello"
print(NumberList[0])
print(NumberList)

# add something to the list
NumberList=NumberList+['New item']
print(NumberList)


beatles=["John","Paul","George","Ringo"]

# cat the two lists together
print(NumberList+beatles)

# Now what if I want to add something to the middle of the list?
# [list].insert([index value],[addition])
beatles.insert(4,"James") #counts from 0, so this adds at five
print(beatles)

# What about removing?
# `del` is apparently a command
# del [list][[index value]]
del beatles[4]
print(beatles)

beatles.remove("George")
print(beatles)

x=0
for musician in beatles:
    print(musician)

# len() tells you how many items there are. You can't use the .items() function
# I do not know why
print(len(beatles))
