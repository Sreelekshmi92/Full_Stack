import pandas as pd 

class data1:
    df=pd.read_csv("HES2018-Table1and2.csv")
    region=df.Region

class data2(data1):
    name="Anu"
myData=data2()
print(myData.region)
