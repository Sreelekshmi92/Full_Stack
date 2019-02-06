from flask import Flask,render_template

app=Flask(__name__)

#routing to home page
@app.route('/') 
def home():
    return render_template('home2.html')

#About page
@app.route('/register/')
def register():
    return render_template('register.html')

@app.route('/login/')
def login():
    return render_template('login.html')

@app.route('/contact/')
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run()
