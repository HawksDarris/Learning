# Module 7: Sorting lists, reversing lists
#
# The .sort() method sorts the list ascending by default
colors=['blue','red', 'yellow','green']
print(str(colors)+"how I put it")
colors.sort()
print(str(colors)+"after sorting, alphabetically")

# we can pass parameters to reverse it alphabetically
colors=['blue','red', 'yellow','green']
colors.sort(reverse=True)
print(str(colors)+"reverse sorting alphabetically")

# To just reverse it generally without regard to alphbetization, we have the
# .reverse() method.
colors=['blue','red', 'yellow','green']
colors.reverse()
print(str(colors)+"reverse how I put it")

# The sorted() function does not change the order of the list, it just orders
# the list in the stream
colors=['blue','red', 'yellow','green']
print(str(colors)+"how I put it originally again")
print(str(sorted(colors))+"sorting without changing")
print(str(colors)+"printing again, should match how I put it originally")
