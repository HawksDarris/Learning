# Module 6 instructor's notes
#Module 6 - Modifying Lists

employees = ['Sara', 'Tammy', 'Debbie', 'John', 'Carrie']
print(employees)
print("--------------------------------------------------------")
employees[0] = 'Mark'  #This should replace whatever is at Index 0 with Mark
print(employees)


employees = ['Sara', 'Tammy', 'Debbie', 'John', 'Carrie']
employees.insert(1, 'Dave')  #Insert 'Dave' at Index spot 1, and move others down
print(employees)


#Loop through the list, printing each item per line
employees = ['Sara', 'Tammy', 'Debbie', 'John', 'Carrie']
for x in employees:
    print(x)


#Check for an item in the list
employees = ['Sara', 'Tammy', 'Debbie', 'John', 'Carrie']
if "Tammy" in employees:
    print("Yup, she is there")
