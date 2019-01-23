username=input("Enter Username:")
password=input("Enter password:")
fileobj=open("login.txt","r")
uname=fileobj.readline()
passw=fileobj.readline()
print(username)
print(password)
print(uname)
print(passw)
uname=uname.rstrip("\n")
if username == uname and password==passw:
    print("Successfull login")
else:
    print("Unsuccessfull login")
