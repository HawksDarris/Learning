# Converting types
i = 22
f = float(i)
s = str(i)

print(i)
print(f)
print(s)

f2 = 99.9
i2 = int(f2)
s2 = str(f2)

print(f2)
print(str(i2)+": notice how it deletes the .9, no rounding")
print(s2)

s3 = "16.1"
i3 = int(float(s3))
f3 = float(s3)

print(s3)
print("can't do int([string of float]):")
print("Instead, do int(float([string]))")
print(i3)
print(f3)
