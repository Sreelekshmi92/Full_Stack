from flask import Flask,render_template

app=Flask(__name__)

#routing to home page
@app.route('/') 
def home():
    return render_template('home2.html')

#About page
@app.route('/about/')
def about():
    return render_template('about1.html')

@app.route('/contact/')
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run()
