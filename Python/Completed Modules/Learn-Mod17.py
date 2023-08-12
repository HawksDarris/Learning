# Module 17: Merging emails

# use with statements because it autocloses, if you want.
#
import os

print("The addresses:")
with open("Learn-Mod17-Emails", "w") as file:
    file.write("Learn-Mod17-name1@gmail.com\nLearn-Mod17-name2@gmail.com\nLearn-Mod17-name3@gmail.com\n")

with open("Learn-Mod17-Emails", "r") as file:
    print(file.read())

print("The body:")
with open("Learn-Mod17-Message", "w") as file:
    file.write("Lorem ipsum")

with open("Learn-Mod17-Message", "r") as file:
    print(file.read())

with open("Learn-Mod17-Emails", "r") as address_file:
    with open("Learn-Mod17-Message", "r") as email_file:
        body = email_file.read()
        for name in address_file:
            mail = "Greetings\n"+ name + body
            with open(name.strip(),"w") as email_file:
                email_file.write(mail)

with open("name1@gmail.com", "r") as OneOfTheEmails:
    print(OneOfTheEmails.read())
