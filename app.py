from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/seed_data.json')
def seed_data():
    return send_from_directory(os.path.dirname(os.path.abspath(__file__)), 'seed_data.json')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
