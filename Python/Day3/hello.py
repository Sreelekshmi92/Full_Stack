#importing the Flask class object
from flask import Flask

app=Flask(__name__) #instatiating the flask obj

#routing to home page
@app.route('/') 
def home():
    return "Hello World!"
    #return __name__

#About page
@app.route('/about1/')
def about():
    return "About Us"


if __name__ == '__main__':
    app.run()