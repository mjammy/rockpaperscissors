from flask import Flask
import os

app = Flask(__name__, static_folder=os.path.abspath("rockpaperscissors-app/build/static"), template_folder=os.path.abspath("rockpaperscissors-app/build"))

# Basic test routes
@app.route('/')
def hello():
    return {'Ok': 'Dokie'}
@app.route('/sponsor')
def get_sponsor():
    return {'sponsor': 'Mjammy'}