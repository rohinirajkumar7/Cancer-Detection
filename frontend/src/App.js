import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    BMI: "",
    Smoking: "",
    GeneticRisk: "",
    PhysicalActivity: "",
    AlcoholIntake: "",
    CancerHistory: ""
  });

  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (formData.Age < 0 || formData.Age > 120) return "Invalid Age";
    if (formData.BMI < 10 || formData.BMI > 60) return "Unrealistic BMI";
    if (formData.PhysicalActivity < 0 || formData.PhysicalActivity > 10) return "Physical Activity must be 0–10";
    if (formData.AlcoholIntake < 0 || formData.AlcoholIntake > 5) return "Alcohol Intake must be 0–5";
    return "";
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) {
      setError(err);
      setResult("");
      return;
    }

    setError("");

    const payload = {
      data: [
        {
          Age: Number(formData.Age),
          Gender: Number(formData.Gender),
          BMI: Number(formData.BMI),
          Smoking: Number(formData.Smoking),
          GeneticRisk: Number(formData.GeneticRisk),
          PhysicalActivity: Number(formData.PhysicalActivity),
          AlcoholIntake: Number(formData.AlcoholIntake),
          CancerHistory: Number(formData.CancerHistory)
        }
      ]
    };

    const res = await axios.post("http://127.0.0.1:5000/predict", payload);
    setResult(res.data.prediction[0] === 1 ? "Cancer Detected" : "No Cancer Detected");
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Cancer Detection</h1>
        <p className="subtitle">AI-powered early risk assessment</p>

        <input name="Age" placeholder="Age" onChange={handleChange} />
        <select name="Gender" onChange={handleChange}>
          <option value="">Gender</option>
          <option value="0">Female</option>
          <option value="1">Male</option>
        </select>

        <input name="BMI" placeholder="BMI" onChange={handleChange} />

        <select name="Smoking" onChange={handleChange}>
          <option value="">Smoking</option>
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>

        <select name="GeneticRisk" onChange={handleChange}>
          <option value="">Genetic Risk</option>
          <option value="0">Low</option>
          <option value="1">Medium</option>
          <option value="2">High</option>
        </select>

        <input name="PhysicalActivity" placeholder="Physical Activity (0–10)" onChange={handleChange} />
        <input name="AlcoholIntake" placeholder="Alcohol Intake (0–5)" onChange={handleChange} />

        <select name="CancerHistory" onChange={handleChange}>
          <option value="">Family Cancer History</option>
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>

        <button onClick={handleSubmit}>Predict</button>

        {error && <p className="error">{error}</p>}
        {result && <h2 className="result">{result}</h2>}
      </div>
    </div>
  );
}

export default App;
