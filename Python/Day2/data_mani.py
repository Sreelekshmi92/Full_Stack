import pandas as pd 

class d1:
    df=pd.read_csv("C2ImportCalEventSample.csv")
    event=df.EventTitle

class d2(d1):
    name="abc"
    

myd2=d2()
print(myd2.event,myd2.name)