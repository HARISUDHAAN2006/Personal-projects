# 💻 Laptop Price Prediction Using Scikit-Learn

<div align="center">

![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-Machine%20Learning-orange?logo=scikitlearn)
![Pandas](https://img.shields.io/badge/Pandas-Data%20Analysis-150458?logo=pandas)
![NumPy](https://img.shields.io/badge/NumPy-Scientific%20Computing-013243?logo=numpy)
![License](https://img.shields.io/badge/License-MIT-green)

### Predicting Laptop Prices using Machine Learning and Scikit-Learn

*A beginner-friendly Machine Learning project demonstrating data preprocessing, feature engineering, Linear Regression, and model evaluation.*

</div>

---

## 📌 Overview

Laptop prices depend on several hardware specifications such as processor, RAM, storage, graphics card, display, and manufacturer. This project uses **Linear Regression** to predict laptop prices based on these specifications.

The project demonstrates a complete Machine Learning workflow using **Scikit-Learn**, from data preprocessing to model evaluation.

---

## 🎯 Objectives

- Clean and preprocess laptop specification data.
- Perform feature engineering.
- Encode categorical variables.
- Train a Linear Regression model.
- Evaluate the model using regression metrics.
- Predict laptop prices for new user inputs.

---

## 📂 Dataset Features

| Feature | Description |
|---------|-------------|
| Company | Laptop manufacturer |
| Product | Laptop model/series |
| Inches | Screen size (inches) |
| Ram | RAM size (GB) |
| OS | Operating System |
| Weight | Weight (kg) |
| Screen | Screen Resolution |
| Touchscreen | Touchscreen support |
| IPSpanel | IPS display |
| RetinaDisplay | Retina display |
| CPU_company | CPU manufacturer |
| CPU_freq | CPU clock speed (GHz) |
| CPU_model | Processor model |
| PrimaryStorage | Primary storage size (GB) |
| SecondaryStorage | Secondary storage size (GB) |
| PrimaryStorageType | SSD / HDD |
| SecondaryStorageType | SSD / HDD / None |
| GPU_company | GPU manufacturer |
| GPU_model | Graphics processor |

### 🎯 Target Variable

```
Price
```

---

# 🧠 Machine Learning Workflow

```
Laptop Dataset
      │
      ▼
Data Cleaning
      │
      ▼
Feature Engineering
      │
      ▼
Encoding Categorical Features
      │
      ▼
Train-Test Split
      │
      ▼
Linear Regression
      │
      ▼
Prediction
      │
      ▼
Model Evaluation
```

---

# ⚙️ Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-Learn
- Jupyter Notebook

---

# 📦 Required Libraries

```python
import pandas as pd
import numpy as np

from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LinearRegression
from sklearn.metrics import (
    r2_score,
    mean_absolute_error,
    mean_squared_error
)
```

---

# 📊 Data Preprocessing

The following preprocessing steps were performed:

- Removed unnecessary columns
- Checked missing values
- Handled categorical variables
- Applied One-Hot Encoding
- Converted numerical columns into appropriate data types
- Created training and testing datasets

---

# 🤖 Model

Algorithm Used:

- **Linear Regression**

Reason:

- Simple and interpretable
- Suitable for continuous target variables
- Fast training time
- Good baseline regression model

---

# 📈 Model Performance

| Metric | Score |
|---------|--------:|
| R² Score | **0.87** |
| Mean Absolute Error (MAE) | **182.79** |

### Interpretation

- The model explains approximately **87%** of the variance in laptop prices.
- The average prediction error is around **183 price units**.

---

# 📊 Features Used

- Company
- Product
- Inches
- Ram
- OS
- Weight
- Screen
- Touchscreen
- IPSpanel
- RetinaDisplay
- CPU_company
- CPU_freq
- CPU_model
- PrimaryStorage
- SecondaryStorage
- PrimaryStorageType
- SecondaryStorageType
- GPU_company
- GPU_model

---

# 🖥 Sample Prediction

### Input

| Feature | Value |
|---------|-------|
| Company | Dell |
| Product | Inspiron 15 |
| Inches | 15.6 |
| RAM | 8 GB |
| OS | Windows |
| Weight | 1.85 kg |
| Screen | Full HD |
| Touchscreen | No |
| IPS Panel | Yes |
| Retina Display | No |
| CPU | Intel Core i5 |
| CPU Frequency | 2.5 GHz |
| Storage | 512 GB SSD |
| GPU | Intel UHD Graphics 620 |

### Output

```
Predicted Laptop Price

₹62,500
```

---

# 📂 Project Structure

```
Laptop-Price-Prediction
│
├── dataset
│   └── laptop_price.csv
│
├── notebooks
│   └── Laptop_Price_Prediction.ipynb
│
├── model
│   └── linear_regression.pkl
│
├── images
│   ├── heatmap.png
│   ├── residual_plot.png
│   ├── actual_vs_predicted.png
│   └── workflow.png
│
├── README.md
├── requirements.txt
└── app.py
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/Laptop-Price-Prediction.git
```

Navigate into the project

```bash
cd Laptop-Price-Prediction
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

# ▶️ Run the Project

Using Jupyter Notebook

```bash
jupyter notebook
```

or

```bash
python app.py
```

---

# 📉 Evaluation Metrics

The model was evaluated using:

- R² Score
- Mean Absolute Error (MAE)
- Mean Squared Error (MSE)
- Root Mean Squared Error (RMSE)

---

# 🚀 Future Improvements

- Ridge Regression
- Lasso Regression
- Decision Tree Regressor
- Random Forest Regressor
- XGBoost Regressor
- Hyperparameter Tuning
- Streamlit Web App
- Model Deployment

---

# 📚 Learning Outcomes

Through this project, I learned:

- Data Cleaning
- Exploratory Data Analysis
- Feature Engineering
- One-Hot Encoding
- Building Machine Learning Pipelines
- Linear Regression
- Model Evaluation
- Predictive Analytics using Scikit-Learn

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Open a Pull Request.

---

# 📜 License

This project is licensed under the MIT License.

---

# 📜 Author

S HARISUDHAAN

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a Star!

Made with ❤️ using **Python**, **Pandas**, and **Scikit-Learn**

</div>
