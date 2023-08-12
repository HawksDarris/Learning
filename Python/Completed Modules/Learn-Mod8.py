# Module 8: Slicing lists
players=['bob','steve','michael','tom','eli','bill','dave']
print("Here are the first three players:")
for player in players[:3]:
    print(player.title())
print("Here are players 3 to 5:") # (starts at 0)
for player in players[2:5]:
    print(player.title())


# What if I want to do every other one?
nums=[1,2,3,4,5,6,7,8,9,10]

print(nums)
print(nums[1:10:2]) # This could be very powerful in other scenarios, but this is a silly way to print a range
