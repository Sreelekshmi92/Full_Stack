def printme(a,b):
    c=a*b
    c1=a+b
    c2=a-b
    return(c,c1,c2)
x=int(input("Enter first num:"))
y=int(input("Enter second num:"))
z=printme(x,y)
print("outside",z)
print(type(z))