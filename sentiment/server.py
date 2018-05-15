from encoder import Model
from flask import Flask, jsonify, request, Response, make_response, current_app

model = Model()

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def home():
    text =  request.args.get('text') 

    text_features = model.transform([text]) 

    sentiment = text_features[:, 2388]

    data = {'output' : sentiment.tolist()}
    
    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == '__main__':
    app.run(debug=True)

