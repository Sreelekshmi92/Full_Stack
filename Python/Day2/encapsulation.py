#Encapsulation
class Employee:
    name="Anu"
    age=22
    basicpay=21000
    hra=8000
    DA=60/100*basicpay
    def calc_salary(self):
        return self.basicpay+self.hra+self.DA
myemp=Employee()
print("Monthly Salary of",myemp.name,"is",myemp.calc_salary())