# Module 25: Displaying date, working directory, and file metadata

from datetime import date
from datetime import time
from datetime import datetime
# the reason it is not
#   import datetime
# is because doing import date time requires this:
#   today = datetime.date.today()
# Whereas,
#   from datetime import date
# allows this:
#   today = date.today()
# Which is simply cleaner.

today = date.today()
date_time = datetime.now()
print("Today's date is:", today)
print("Full date and time:", date_time)

import os
# getcwd(): get current working directory
#   This gives full path. To get just the directory:
#       basename (also in os)

fullpath = os.getcwd()
print(fullpath)
print(os.path.basename(fullpath))

import sys
print(os.stat(sys.argv[0]))
