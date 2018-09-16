from flask import Flask, flash, request
import csv
import json

from surgery import Surgery, SurgeryException
from cors import crossdomain

app = Flask(__name__)
def create_app():
    return app

@app.route('/')
@crossdomain(origin="*")
def index():
    """Show all the surgeries, most recent first
    Returns: a json thing"""
    surgeries = []
    with open('data/surgery_list') as f:
        for row in csv.reader(f):
            id, name, type = row
            surgeries.append({
                    'id' : id,
                    'name' : name,
                    'type' : type
            })

    return json.dumps(surgeries)

@app.route('/create', methods=('POST',))
def create():
    """Create a new surgery
    Returns: a json thing including the id of the new surgery
    """
    name = request.form['name']
    type = request.form['type']
    text = request.form['text']

    try:
        # TODO: input verification
        surgery = Surgery(name, type, text)
    except SurgeryException:
        return 'Invalid surgery request.' #TODO error code

    new_id = storify(surgery)
    return 'You created a new surgery with id %d' % new_id

@app.route('/surgeries/<int:id>')
@crossdomain(origin="*")
def get_surgery(id):
    """Show the info of the surgery's details
    Returns: the text of the surgery
    """
    try:
        return open('data/surgeries/%d' % id).read()
    except IOError:
        return 'Surgery %d does not exist!' % id #TODO error code

def get_num_surgeries():
    with open('data/surgery_list') as f:
        return len(f.readlines())

def storify(surgery):
    """Store a new surgery to the "database" and return its ID"""
    new_id = get_num_surgeries() + 1

    # Append this entry to the list of surgeries
    line = '%d,%s,%s' % (new_id, surgery.name, surgery.type)
    with open('data/surgery_list', 'a') as f:
        f.write(line.strip())
        f.write('\n')

    # Write the (text) contents of this surgery to the right file
    with open('data/surgeries/%d' % new_id, 'w') as f:
        f.write(surgery.text)

    return new_id
