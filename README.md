#  Cancer Detection System  
**AI-powered Early Cancer Risk Prediction Web Application**

An end-to-end Machine Learning web application that predicts the likelihood of cancer using lifestyle, genetic, and health indicators. The system uses a trained ML model deployed via a Flask API and a modern React frontend for real-time prediction.

---

##  Key Features
- Machine Learning–based cancer risk prediction  
- Real-time inference via Flask REST API  
- Modern React UI with responsive design  
- Input validation for realistic medical values  
- Clean professional medical-themed interface  

---

##  Machine Learning Model
The model is trained on health and genetic indicators such as:
- Age  
- Gender  
- BMI  
- Smoking status  
- Genetic risk  
- Physical activity  
- Alcohol intake  
- Family cancer history  

The trained model and feature scaler are stored as:
- `cancer_model.pkl`
- `scaler.pkl`

These are used by the Flask API for real-time predictions.

---

##  Tech Stack
| Layer | Technology |
|------|-----------|
| Frontend | React.js, CSS |
| Backend | Python, Flask |
| ML | Scikit-Learn |
| API | Flask-CORS |
| Deployment Ready | Localhost / Cloud |

---

##  Project Structure
```
cancer-detection/
│
├── backend/
│   │
│   ├── app.py                 # Flask API for prediction
│   ├── model.py               # ML training & model creation
│   ├── genomic_data.csv       # Dataset used for training
│   ├── cancer_model.pkl       # Trained ML model (ignored in Git)
│   ├── scaler.pkl             # Feature scaler (ignored in Git)
│   └── requirements.txt       # Backend dependencies
│
└── frontend/
    │
    ├── public/
    │   ├── index.html
    │   ├── favicon.ico
    │   └── background-image.png
    │
    └── src/
        ├── App.js
        ├── App.css
        └── index.js

```
---

##  How to Run the Project

### 1️ Start Backend (Flask)
```
cd backend
venv\Scripts\activate
python app.py
```

Backend runs at:
http://127.0.0.1:5000


---

### 2️ Start Frontend (React)
```
cd frontend
npm install
npm start
```

Frontend opens at:
http://localhost:3000


---

##  How It Works
1. User enters health details in the web UI  
2. React sends data to Flask API  
3. Data is scaled using `scaler.pkl`  
4. ML model predicts cancer risk  
5. Result is returned and displayed instantly  

---

##  Output
The system returns:
- **Cancer Detected**
- **No Cancer Detected**

Based on the trained Machine Learning model.

---

##  Use Cases
- Medical decision support  
- Early cancer screening systems  
- AI in healthcare demonstrations  
- Academic and internship projects  

---

##  Validation Logic
The system validates inputs to prevent unrealistic values:
- Age: 0 – 120  
- BMI: 10 – 60  
- Physical Activity: 0 – 10  
- Alcohol Intake: 0 – 5  

This ensures meaningful predictions.

---

##  Why This Project is Strong
This project demonstrates:
- Full-stack AI integration  
- Machine learning deployment  
- REST API design  
- Real-world medical application  
- Professional UI/UX  

---
