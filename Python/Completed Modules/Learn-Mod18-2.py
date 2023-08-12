# FORMATTING OUTPUT
# Include parameters within the curly braces of the print statement.
#   {field_name:conversion}
#       field_name specifies the index number of the argument to the
#       str.format() method
#   conversion refers to the conversion code of the data type taht you're using
#   with the formatter
#   ???
#       The conversion type is the single-character type code that python uses
#       inside the brackets.
#       s for string, d for decimal integers, f for floats
#           {0,s}

string = "My name is {0} {3}, and I have {2} convictions for {1}ing."
print(string.format("john".title(), "smith", 31, "war crimes".title()))

string = "Bob loves {act}"
print(string.format(act = "running"))
