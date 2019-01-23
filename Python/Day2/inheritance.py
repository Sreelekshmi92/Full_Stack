class Vehicle:
    type="Sedan"
    Yom="2018"
    mileage=17

class Bus(Vehicle):
    type="Coach"
    mileage=8
myBus=Bus()
print(myBus.type,myBus.Yom,myBus.mileage)