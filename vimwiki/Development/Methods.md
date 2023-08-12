# Interesting Methods Organized by Data Structure

## Sets
The `union()` method returns a set that contains all items from the original set, and all items from the specified set(s).
```py
x = {"a", "b", "c"}
y = {"f", "d", "a"}
z = {"c", "d", "e"}

result = x.union(y, z)

print(result)
# yields: {'d', 'a', 'b', 'e', 'c', 'f'}
```

The `difference()` method returns a set that contains the difference between two sets.
```py
x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}

z = x.difference(y)

print(z)
# Yields: {'cherry', 'banana'}
```
The returned set contains items that exist only in the first set, and not in both sets.

### NOTE
This is a lot of math, but it's very cool and uses `union()` and `difference()`
```py
def solution(number):
  A = {n for n in range(0, number, 3)}  # all multiples of 3 from 0 to number
  B = {n for n in range(0, number, 5)}  # all multiples of 5 from 0 to number
  C = {n for n in range(0, number, 15)} # all multiples of both (of 15) from 0 to number
  return sum(A.union(B).difference(C))  # combine A and B, remove duplicates existing inC. Sum the resulting set.
```
'If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.'

My original code was
```py
def solution(number):
    result = 0
    for i in range(number):
        if number % 3 == 0 or number % 5 == 0 :
            result += i
    return result
```
But that has time complexity of O(n) where n is the value of the number. The better result above has a time complexity of O(1) because it does not have to go through every number between 0 and the [argument](Python Arguments).
This is called *arithmetic progression* and/or *triangle summation*. Pretty neat.
