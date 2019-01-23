class Car:
    model="jd"
    def __init__(self,model,color):
        self.model1=model
        self.color=color
    
mycar1=Car("Toyota","Red")
mycar2=Car("Honda","Green")
mycar3=Car("Ford","Blue")
print(mycar1.model1,mycar1.color)
print(mycar2.model1,mycar2.color)
print(mycar3.model1,mycar3.color)