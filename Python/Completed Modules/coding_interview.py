#!/usr/bin/env python3
'''
given a list of numbers, return whether a pythagorean triplets exist in the list
    a**2 + b **2 = c**2

1. Outline understanding of the problem
2. Think of edge cases and inputs and outputs
3. pseudocode the solution
4.
'''
def pythagorean_triplets(num_list):
    '''
    3, 4, 5  would return True
    4 would return False-- Do I account for len(list) < 3?
    -3 -4 -5 would return True-- Do I account for negatives?
   5, 4, 3 should return True
    3, 2, 4, 5
   Do they need to be consecutive?
    '''
    sorted(num_list)

    for a in range(len(num_list)):
        for b in range(a + 1, len(num_list)): # this is necessary to make sure we aren't comparing a num with itself
            for c in range(b+1, len(num_list)):
                if num_list[a]**2 + num_list[b]**2 == num_list[c]**2:
                    return True
    return False

'''
Now test with inputs
then analyze time and space complexity
    "Big O notation"
'''
