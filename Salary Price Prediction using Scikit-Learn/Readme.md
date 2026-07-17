# 💼 Salary Price Prediction using Machine Learning

## 📌 Project Overview

This project predicts employee salaries using Machine Learning based on categorical features such as company name, job title, and location.

The project demonstrates the complete Machine Learning workflow, including preprocessing categorical variables using One-Hot Encoding and building a Linear Regression model.

---

## 📂 Dataset

Dataset Source:

Kaggle – Analytics Industry Salaries 2022 India

Features:

- Company Name
- Job Title
- Location
- Salaries Reported

Target Variable:

- Salary

---

## 🛠️ Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Scikit-learn

---

## 📊 Exploratory Data Analysis

Performed:

- Data Cleaning
- Duplicate Removal
- Company Analysis
- Salary Distribution
- Job Title Analysis
- Location Analysis

Visualizations:

- Salary Histogram
- Average Salary by Job Title
- Top Companies by Salary
- Company Distribution

---

## ⚙️ Data Preprocessing

- Removed unnecessary columns
- Handled categorical variables
- One-Hot Encoding
- Train-Test Split
- Pipeline using ColumnTransformer

---

## 🤖 Machine Learning Model

Model Used:

- Linear Regression

Pipeline:

1. Data Preprocessing
2. One-Hot Encoding
3. Model Training
4. Prediction
5. Evaluation

---

## 📈 Evaluation Metrics

The model was evaluated using:

- Mean Absolute Error (MAE)
- Mean Squared Error (MSE)
- Root Mean Squared Error (RMSE)
- R² Score

### Observation

The Linear Regression model achieved a very low R² score because salary is influenced by many important factors that are not included in the dataset, such as:

- Years of Experience
- Education
- Skills
- Seniority Level
- Company Size

Therefore, the available features have limited predictive power.

---

## 🚀 How to Run

Clone the repository

```bash
git clone https://github.com/yourusername/salary-price-prediction.git
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the notebook or Python script.

---

## 👨‍💻 Author

Your Name
