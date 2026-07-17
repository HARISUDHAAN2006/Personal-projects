# 🚗 Car Price Prediction using Scikit-Learn

<p align="center">

![Python](https://img.shields.io/badge/Python-3.x-blue?style=for-the-badge&logo=python)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-Machine%20Learning-orange?style=for-the-badge&logo=scikitlearn)
![Pandas](https://img.shields.io/badge/Pandas-Data%20Analysis-purple?style=for-the-badge&logo=pandas)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

</p>

---

# 📖 Overview

This project predicts the **selling price of a car** using a **Linear Regression** model built with **Scikit-learn**.

The model is trained on historical car sales data and predicts the estimated price based on several vehicle attributes entered by the user.

---

# ✨ Features

| Feature | Status |
|---------|:------:|
| 📂 Load Dataset using Pandas | ✅ |
| 📊 Dataset Exploration | ✅ |
| 🚗 Display Available Manufacturers | ✅ |
| 🚘 Display Models by Manufacturer | ✅ |
| 🧹 Data Preprocessing | ✅ |
| 🏷️ One-Hot Encoding for Categorical Features | ✅ |
| ✂️ Train-Test Split | ✅ |
| 📈 Linear Regression Model | ✅ |
| 💵 Predict Car Price | ✅ |

---

# 📊 Dataset Information

The dataset contains **50,000** car records with the following features:

| Feature | Description |
|---------|-------------|
| Manufacturer | Car Manufacturer |
| Model | Car Model |
| Engine size | Engine Capacity (L) |
| Fuel type | Petrol, Diesel, or Hybrid |
| Year of manufacture | Manufacturing Year |
| Mileage | Distance Driven |
| Price | Target Variable |

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| 🐍 Python | Programming Language |
| 🐼 Pandas | Data Manipulation |
| 🤖 Scikit-Learn | Machine Learning |
| 📈 Linear Regression | Prediction Model |
| 🔄 OneHotEncoder | Encode Categorical Features |
| ⚙️ Pipeline | Model Workflow |

---

# 📂 Project Structure

```text
📁 Car-Price-Prediction
│
├── 📄 Car_Price_Prediction.ipynb
├── 📄 car_sales_data.csv
└── 📄 README.md
```

---

# 🔄 Project Workflow

```text
            📂 Load Dataset
                   │
                   ▼
          📊 Explore Dataset
                   │
                   ▼
     🧹 Data Preprocessing
                   │
                   ▼
      🏷️ One-Hot Encoding
                   │
                   ▼
      ✂️ Train-Test Split
                   │
                   ▼
      📈 Linear Regression
                   │
                   ▼
      🚗 User Inputs Car Details
                   │
                   ▼
        💰 Predict Car Price
```

---

# 🚘 Input Features

The user is prompted to enter:

- Manufacturer
- Model
- Fuel Type
- Engine Size
- Year of Manufacture
- Mileage

---

# 📌 Sample Prediction

```text
Manufacturer : Ford
Model         : Fiesta
Fuel Type     : Petrol
Engine Size   : 1.0
Year          : 2005
Mileage       : 120000

Predicted Price:

6744.84
```

---

# ▶️ Running the Project

### Clone the Repository

```bash
git clone https://github.com/yourusername/car-price-prediction.git
```

### Install Required Libraries

```bash
pip install pandas scikit-learn
```

### Run the Project

```bash
python Car_Price_Prediction.py
```

or open the notebook and run all cells.

---

# 📚 Concepts Used

- 🐼 Data Analysis with Pandas
- 🤖 Linear Regression
- 🏷️ One-Hot Encoding
- ✂️ Train-Test Split
- ⚙️ Scikit-Learn Pipeline
- 📊 Dataset Exploration
- 🎯 User Input Prediction

---

# 👨‍💻 Author

**S HARISUDHAAN**

---

<p align="center">

⭐ If you found this project useful, consider giving it a star on GitHub!

</p>
