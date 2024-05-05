from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model from the pickle file
with open("regressor.pkl", "rb") as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    years_of_experience = float(request.json['yearsOfExperience'])
    predicted_salary = model.predict([[years_of_experience]])[0]
    return jsonify({'predictedSalary': predicted_salary})

if __name__ == '__main__':
    app.run(debug=True)
