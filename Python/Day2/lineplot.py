import matplotlib.pyplot as plt

x=[1,2,3]
y=[2,4,1]
#plotting the line 1 points
plt.plot(x,y,label="line 1")

x1=[1,2,3]
y1=[4,1,3]
plt.plot(x1,y1,label="line 2")

#naming x axis
plt.xlabel("x - axis")
plt.ylabel("y - axis")

plt.title("My First Graph")
#show a legend 
plt.legend()

plt.show()
