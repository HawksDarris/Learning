# Do if statements for a temperature range
temps=[0,10,20,30,40]

for temp in temps:
    if temp <= 0:
        print("Freezing")
    elif temp <= 10:
        print("Not")
    elif temp <= 20:
        print("Normal")
    elif temp <= 30:
        print("Hot")
    elif temp <= 40:
        print("Devil's piss")
