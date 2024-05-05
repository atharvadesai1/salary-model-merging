import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

function App() {
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [predictedSalary, setPredictedSalary] = useState('');

  const handlePredictClick = () => {
    axios.post('http://127.0.0.1:5000/predict', { yearsOfExperience })
      .then(res => {
        setPredictedSalary(res.data.predictedSalary);
      })
      .catch(err => {
        console.error('Prediction failed:', err);
      });
  };

  return (
    <div className="container">
      <h1>Salary Predictor</h1><br />
      <input 
        type="text" 
        value={yearsOfExperience} 
        onChange={(e) => setYearsOfExperience(e.target.value)} 
        className="input-field" 
        placeholder="Enter years of experience"
      />
      <button onClick={handlePredictClick} className="predict-button">Predict</button>
      {predictedSalary && <p className="predicted-salary">Predicted Salary: {predictedSalary}₹</p>}
    </div>
  );
}

export default App;
