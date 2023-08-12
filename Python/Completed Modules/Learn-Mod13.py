# Module 13: while loops
#

a = 1
while a < 6:
    print(a)
    a+=1

x = "hello world"
i = 1
while i<=3:
    print(x)
    i += 1

# You can skip in the middle of an iteration with continue
#
x = 0
while x < 6:
    x+=1
    if x == 4:
        continue
    print(x)

# You can also just stop the loop entirely with break:
a=1
while a < 14:
    print(a)
    if a==4:
        break
    a+=1
