# Module 18: Reading console inputs and formatting outputs
# input() stops program until user puts something in cli
a = input("Can you see this? Y/N ")
while a != "Y" and a != "N":
    print("Please use Y or N")
    a = input("Can you see this? Y/N ")
print("You said", a)

while True:
    try:
        num = int(input("Now we will play with numbers. Put in a whole number. "))
        print("The number you gave is: ", num)
    except:
        print("Use a numeral.")
        continue
    break

while True:
    try:
        salary = int(input("How much do you make per month?\n$"))*12
        text = "You make ${} per year"
        print(text.format(salary))
    except ValueError:
        print("Use a whole number, please. The pennies don't matter anyway.")
        continue
    break
