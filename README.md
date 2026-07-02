# Cancer Detection Using Machine Learning

A full-stack machine learning application that predicts cancer diagnosis using genomic features. The project combines a React frontend with a Flask backend, where a trained K-Nearest Neighbors (KNN) model performs predictions based on user input.

---

## Overview

This application demonstrates the complete workflow of a machine learning project:

- Data preprocessing
- Model training
- Model serialization
- REST API using Flask
- Interactive React frontend
- Real-time cancer prediction

---

## Features

- Cancer prediction using Machine Learning
- K-Nearest Neighbors (KNN) classifier
- Flask REST API
- React-based user interface
- Data preprocessing with StandardScaler
- Model persistence using Joblib

---

## Project Structure

```
Cancer-Detection
│
├── backend
│   ├── app.py
│   ├── model.py
│   ├── genomic_data.csv
│   ├── requirements.txt
│   └── ...
│
├── frontend
│   ├── package.json
│   ├── public
│   ├── src
│   └── ...
│
└── README.md
```

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

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/rohinirajkumar7/Cancer-Detection.git
cd Cancer-Detection
```

---

## Backend Setup

Navigate to the backend directory.

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

Install the required packages.

```bash
pip install -r requirements.txt
```

---

## Generate the Machine Learning Model

This repository intentionally does **not** include:

- `cancer_model.pkl`
- `scaler.pkl`

These files are generated locally.

Run:

```bash
python model.py
```

This will generate:

```
backend/
├── cancer_model.pkl
└── scaler.pkl
```

---

## Start the Backend

```bash
python app.py
```

The Flask server will start on:

```
http://127.0.0.1:5000
```

---

## Frontend Setup

Open a new terminal.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the React application.

```bash
npm start
```

The frontend will run on:

```
http://localhost:3000
```

---

## Workflow

```
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
Return Result
```

---

## Model Information

| Algorithm | K-Nearest Neighbors (KNN) |
|------------|---------------------------|
| Language | Python |
| Framework | Scikit-learn |
| Backend | Flask |
| Frontend | React |

---

## Dataset

The project uses a genomic dataset stored in:

```
backend/genomic_data.csv
```

The dataset is used to train the KNN classifier.

---

## Files Not Included

To keep the repository lightweight, the following files are excluded from GitHub:

```
backend/venv/
backend/cancer_model.pkl
backend/scaler.pkl
frontend/node_modules/
```

Generate the model locally by running:

```bash
python model.py
```

---

## Future Improvements

- Support multiple ML algorithms
- Deploy using Docker
- Cloud deployment on Render or Railway
- Model performance comparison
- Improved visualization dashboard

---

## License

This project is intended for educational and learning purposes.
