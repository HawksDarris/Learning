# Module 12: For loops
# in loops, range() is used to control how many times the loop repeats

colors = ['blue', 'red', 'green','pink']
for i in colors:
    print(i)

# range(start, stop, step)
# start states the integer value at which the sequence begins. Default 0.
# stop is always required. Iteration per loop. Default null.
# step sets how much to change the iterative. Default 1.
#

for a in range (10): # 10 is the stop because start and step are optional
    print(a)

print("\n")

for a in range (1, 35): # 35 is the iterative.
    print(a)

for a in range (0, 20, 2): # 35 is the iterative.
    print(a)
