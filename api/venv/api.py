import time
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return {'Ok': 'Dokie'}

@app.route('/sponsor')
def get_sponsor():
    return {'sponsor': 'Mjammy'}