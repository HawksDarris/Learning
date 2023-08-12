# Module 21: Default Arguments
# Any number of arguments in a function can have a default value
# BUT
# Once you have a default argument, all arguemnts to its right must also have
# default values.
# Non-default arguments cannot follow default arguments.
#

# define a default argument with = in the def
def student(firstname, lastname="Smith"):
    print(firstname, lastname)
print('Define the function:\n\ndef student(firstname, lastname="Smith"):')
print('     print(firstname, lastname)\n')

print('student("Antonio") yields:')
student("Antonio")
print("--------------------------------------------------")
print('student("Antonio", "Not Smith") yields:')
student("Antonio", "Not Smith")
