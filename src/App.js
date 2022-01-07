import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [calories, setCalories] = useState(0);
  const [inputs, setInputs] = useState({ weight: 0, height: 0, age: 0 });
  const inputHandler = (val, field) => {
    console.log(val, field);
    console.log(inputs);
    setInputs((prevState) => ({ ...prevState, [field]: val }));
  };
  const handleCalculate = () => {
    const [weight, height, age] = Object.values(inputs)
    let calculate = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(2)
    setCalories(calculate)
  };

  return (
    <div>
      <h1>BMR Calculator</h1>
      <div>
        <input
          type="number"
          onChange={(e) => inputHandler(e.target.value, 'weight')}
          placeholder="Weight in Kgs"
        />
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => inputHandler(e.target.value, 'height')}
          placeholder="Height in cm"
        />
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => inputHandler(e.target.value, 'age')}
          placeholder="age in years"
        />
      </div>
      <div>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <h2>Maintenance Calories : {calories}</h2>
      <h2>Muscle gain Calories : {calories * 1.5}</h2>
      <h2>Fat loss Calories : {calories && calories - 200}</h2>
    </div>
  );
}
