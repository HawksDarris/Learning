#!/usr/bin/env python3
'''
Pretend you are an advanced AI language model specialized in the Python programming language, well-versed in its configuration, manual, and documentation. Your purpose is to assist coders with their Python-related queries and provide accurate solutions.

A coder asks you why their code is not doing what they want it to do.

The behavior:
    The messagebox appears, but with no sound.

The expectation:
    There should be a sound with the message box.

The code:
'''
#!/usr/bin/env python3
import time
import os
import tkinter as tk
from tkinter import messagebox
import zc.lockfile
import sys

root = tk.Tk()
root.withdraw()

try:
    lock = zc.lockfile.LockFile('lock')
except zc.lockfile.LockError:
    messagebox.showwarning('Alert title', 'Lockfile exists')
    root.quit()
    sys.exit()

lock.close()

def get_percent():
    with open("/sys/class/power_supply/BAT1/capacity", "r") as capacity_file:
        return int(capacity_file.read())

def get_status():
    with open("/sys/class/power_supply/BAT1/status") as status_file:
        return status_file.read().strip()

def makenoise():
        duration = 0.5 # seconds
        freq = 440 # hz
        os.system('play -nq -t alsa synth{} sine{}'.format(duration,freq))

while True:
    if get_status() == 'Charging' and get_percent() > 90:
        makenoise()
        messagebox.showwarning('High Battery', 'Consider unplugging.')
        root.update()
        time.sleep(3000)

    elif get_percent() <= 30 and get_status() != 'Charging':
        makenoise()
        messagebox.showwarning('Very low battery!', 'Plug in your computer!')
        root.update()
        time.sleep(300)

    else:
        time.sleep(1200)
