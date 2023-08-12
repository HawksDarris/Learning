# Module 22: Keyword and Positional Arguments
# keyword arguments allow you to call the arguments in another order
# You can mix keyword arguments with positional arguments during the function
# call
# BUT
# keyword arguments must follow positional arguments
#   otherwise an error.
#

def greet(name, msg = 'how are you?'):
    print('Hey',name+', '+ msg)

greet(name='Dave')
greet(name='Dave',msg='screw you')
greet(msg='I switched these in this call',name='Dave')
