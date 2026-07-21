# 🩺 Diabetes Prediction using Logistic Regression

![Python](https://img.shields.io/badge/Python-3.10-blue?style=for-the-badge&logo=python)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-ML-orange?style=for-the-badge&logo=scikit-learn)
![Pandas](https://img.shields.io/badge/Pandas-Data%20Analysis-150458?style=for-the-badge&logo=pandas)
![NumPy](https://img.shields.io/badge/NumPy-Numerical-blue?style=for-the-badge&logo=numpy)
![Matplotlib](https://img.shields.io/badge/Matplotlib-Visualization-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)

---

# 📌 Project Overview

This project predicts whether a patient is **Diabetic** or **Non-Diabetic** using **Logistic Regression** on the **Pima Indians Diabetes Dataset**.

The project demonstrates a complete Machine Learning workflow:

- 📊 Exploratory Data Analysis (EDA)
- 🧹 Data Cleaning
- 🔄 Data Preprocessing
- 📈 Data Visualization
- 🤖 Model Building
- 📋 Model Evaluation
- 🎯 Prediction on New Data

---

# 📂 Dataset

Dataset Used:

**Pima Indians Diabetes Database**

### Features

| Feature | Description |
|----------|-------------|
| Pregnancies | Number of pregnancies |
| Glucose | Plasma glucose concentration |
| BloodPressure | Diastolic blood pressure |
| SkinThickness | Triceps skin fold thickness |
| Insulin | 2-Hour serum insulin |
| BMI | Body Mass Index |
| DiabetesPedigreeFunction | Diabetes pedigree function |
| Age | Age of patient |
| Outcome | 0 = Non-Diabetic, 1 = Diabetic |

---

# 📊 Exploratory Data Analysis

The following visualizations were performed:

✅ Outcome Distribution

✅ Histograms

✅ Correlation Heatmap

✅ Scatter Plot

---

# 🧹 Data Preprocessing

✔ Removed invalid zero values from:

- Glucose
- BloodPressure
- SkinThickness
- Insulin
- BMI

✔ Replaced missing values using Median Imputation

✔ Standardized features using StandardScaler

✔ Split dataset into Training and Testing sets

---

# 🤖 Machine Learning Model

**Algorithm Used**

- Logistic Regression

Libraries:

- Scikit-Learn
- NumPy
- Pandas

---

# 📈 Model Performance

| Metric | Score |
|---------|--------|
| Accuracy | **75%** |
| Precision | **0.64** |
| Recall | **0.67** |
| F1 Score | **0.65** |

### Confusion Matrix

| | Predicted 0 | Predicted 1 |
|---|---:|---:|
| Actual 0 | 78 | 21 |
| Actual 1 | 18 | 37 |

---

# 📉 Visualizations

Example visualizations included in this project:

```
📊 Outcome Distribution

📊 Correlation Heatmap

📊 Feature Histograms
```


# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/Diabetes-Prediction.git
```

Move into the project

```bash
cd Diabetes-Prediction
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run

```bash
python app.py
```

---

# 💻 Sample Prediction

```
Enter the patient's details

Pregnancies : 2
Glucose : 150
Blood Pressure : 70
Skin Thickness : 35
Insulin : 120
BMI : 31.5
Diabetes Pedigree Function : 0.45
Age : 40

Prediction

Patient is likely to have Diabetes

Probability

Non-Diabetic : 22%

Diabetic : 78%
```

---

# 📚 Libraries Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-Learn


# 🎯 Results

The Logistic Regression model achieved approximately **75% accuracy** in predicting diabetes. Proper preprocessing, feature scaling, and exploratory data analysis significantly improved the model's performance.

---

# 👨‍💻 Author

**S HARISUDHAAN**

---

## ⭐ If you found this project useful, don't forget to Star the repository!
