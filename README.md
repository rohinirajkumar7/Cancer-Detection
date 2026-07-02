# Cancer Detection Using Machine Learning

A full-stack machine learning application that predicts cancer diagnosis using genomic features. The application combines a React frontend with a Flask backend, where a trained K-Nearest Neighbors (KNN) model performs predictions using user-provided input.

---

## Overview

This project demonstrates an end-to-end machine learning workflow, including:

- Data preprocessing
- Machine learning model training
- Model serialization
- Flask REST API
- React frontend
- Real-time cancer prediction

---

## Features

- Cancer prediction using Machine Learning
- K-Nearest Neighbors (KNN) classifier
- Flask REST API
- React-based user interface
- Data preprocessing with StandardScaler
- Model serialization using Joblib

---

## Tech Stack

### Frontend

- React.js
- CSS

### Backend

- Flask
- Flask-CORS

### Machine Learning

- Python
- Scikit-learn
- Pandas
- Joblib

---

## Project Structure

```text
cancer-detection/
│
├── backend/
│   │
│   ├── app.py                 # Flask API
│   ├── model.py               # Model training script
│   ├── genomic_data.csv       # Dataset
│   ├── cancer_model.pkl       # Generated after training (not included)
│   ├── scaler.pkl             # Generated after training (not included)
│   └── venv/                  # Virtual environment (not included)
│
└── frontend/
    │
    ├── public/
    │   ├── index.html
    │   ├── favicon.ico
    │   └── background-image.png
    │
    ├── src/
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    │
    ├── package.json
    └── package-lock.json
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/rohinirajkumar7/Cancer-Detection.git

cd Cancer-Detection
```

---

# Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Create a virtual environment.

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

Install the required Python packages.

```bash
pip install Flask Flask-Cors pandas scikit-learn joblib
```

---

## Generate the Machine Learning Model

The following files are **not included** in this repository:

- cancer_model.pkl
- scaler.pkl

Generate them by running:

```bash
python model.py
```

This will create:

```text
backend/
├── cancer_model.pkl
└── scaler.pkl
```

---

## Start the Backend Server

```bash
python app.py
```

The Flask server will start at:

```
http://127.0.0.1:5000
```

---

# Frontend Setup

Open a new terminal.

Navigate to the frontend directory.

```bash
cd frontend
```

Install Node.js dependencies.

```bash
npm install
```

Start the React application.

```bash
npm start
```

The frontend will run at:

```
http://localhost:3000
```

---

## Application Workflow

```text
User Input
      │
      ▼
React Frontend
      │
      ▼
Flask API
      │
      ▼
StandardScaler
      │
      ▼
KNN Model
      │
      ▼
Prediction
      │
      ▼
Display Result
```

---

## Machine Learning Model

| Component | Description |
|-----------|-------------|
| Algorithm | K-Nearest Neighbors (KNN) |
| Language | Python |
| Framework | Scikit-learn |
| Backend | Flask |
| Frontend | React |

---

## Dataset

The model is trained using the genomic dataset located at:

```text
backend/genomic_data.csv
```

---

## Files Excluded from GitHub

To keep the repository lightweight, the following files are intentionally excluded:

```text
backend/
├── venv/
├── cancer_model.pkl
└── scaler.pkl

frontend/
└── node_modules/
```

These files are generated or installed locally.

---

## Future Improvements

- Compare multiple machine learning algorithms
- Improve model accuracy
- Deploy using Docker
- Deploy on Render or Railway
- Add prediction confidence score
- Improve UI and visualization

---

## License

This project is intended for educational and learning purposes.
