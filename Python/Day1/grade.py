
def calc(m1,m2,m3,m4,m5):
    avg=(m1+m2+m3+m4)/5
    print(avg)
    if avg >=90 and avg<=100:
        print("A+")
    elif avg>=80 and avg<90:
        print("A")
    elif avg>=70 and avg<80:
        print("B+")
    elif avg>=60 and avg<70:
        print("B")
    elif avg>=50 and avg<60:
        print("B")
    elif avg<50:
        print("C+")
    return

m1=int(input("Enter mark1:"))
m2=int(input("Enter mark2:"))
m3=int(input("Enter mark3:"))
m4=int(input("Enter mark4:"))
m5=int(input("Enter mark5:"))

calc(m1,m2,m3,m4,m5)