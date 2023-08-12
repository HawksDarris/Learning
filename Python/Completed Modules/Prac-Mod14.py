# Nest for loop
# 3 outer
# 5 inner
# print all inner for each outer

inner = [1,2,3,4,5]
outer = ['A','B','C']

for x in outer:
    print(x+": ",end='') # not setting 'end=' defaults to 'end='\n''
    for y in inner:
        print(y,end='')
    print("\n")
