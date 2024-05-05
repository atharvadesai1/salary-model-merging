import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <input type="text" value={yearsOfExperience} onChange={(e) => setYearsOfExperience(e.target.value)} />
      <button onClick={handlePredictClick}>Predict</button>
      {predictedSalary && <p>Predicted Salary: {predictedSalary}</p>}
    </div>
  );
}

export default App;
