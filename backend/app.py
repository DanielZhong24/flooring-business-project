from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/api/hello',methods=['GET'])
def hello():
    data = {'message':'Hello from flask'}
    return jsonify(data)


if __name__ ==  '__main__':
    app.run(debug=True)