from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    """Show all the surgeries, most recent first
    Returns: a json thing"""
    # TODO: implement
    return 'Hello, world!'

@app.route('/create', methods=('POST',))
def create():
    """Create a new surgery
    Returns: a json thing including the id of the new surgery
    """
    # TODO: implement
    return 'You created a new surgery!'

@app.route('/surgeries/<int:id>')
def get_surgery(id):
    """Show the info of the surgery's details
    Returns: a json thing describing the surgery
    """
    # TODO: implement
    return 'Surgery #%d went well!' % id
