# 🏦 Bank Management System

<p align="center">

![Java](https://img.shields.io/badge/Java-17+-orange?style=for-the-badge&logo=java)
![JavaFX](https://img.shields.io/badge/JavaFX-GUI-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![License](https://img.shields.io/badge/Project-Educational-green?style=for-the-badge)

</p>

---

# 📖 Overview

A simple **JavaFX desktop application** that simulates a basic banking system.

The application allows users to:

- 👤 Create a new account
- 🔐 Login using stored credentials
- 💾 Save user details in a text file
- 📂 Validate login credentials
- 💰 Show account balance
- 🙈 Hide account balance

---

# ✨ Features

| Feature | Status |
|---------|:------:|
| 👤 Create New Account | ✅ |
| 💾 Save Username & Password | ✅ |
| 🔐 Login Authentication | ✅ |
| 📂 Read User Credentials from File | ✅ |
| ⚠️ Empty Field Validation | ✅ |
| 💰 Show Balance | ✅ |
| 🙈 Hide Balance | ✅ |
| 🔄 Scene Navigation | ✅ |

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ☕ Java | Programming Language |
| 🎨 JavaFX | GUI Development |
| 📂 FileWriter | Save Account Details |
| 📝 Scanner | Read Stored Credentials |
| 📄 Text File | Local Data Storage |

---

# 📂 Project Structure

```text
📁 Bank-Management-System
│
├── 📄 BankApp.java
├── 📄 New_Account_Details.txt
└── 📄 README.md
```

---

# 🖥️ Application Workflow

```text
               🏦 Start Application
                        │
                        ▼
              ┌─────────────────┐
              │   Login Page    │
              └─────────────────┘
                 │           │
        Login 🔐 │           │ Create Account 👤
                 ▼           ▼
      Validate Credentials   Save Username & Password
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
 ❌ Invalid Login     ✅ Login Successful
                             │
                             ▼
                 ┌────────────────────┐
                 │ Account Dashboard  │
                 └────────────────────┘
                    │             │
          💰 Show Balance   🙈 Hide Balance
```

---

# 💾 Data Storage

User credentials are stored in:

```text
New_Account_Details.txt
```

Example:

```text
john,password123
alice,bank@123
```

---

# 📋 GUI Components

### 🏠 Login Page

- Welcome Message
- Username Field
- Bank Account Number Field
- Password Field
- Login Button
- Account Status Message

### 👤 Create Account

- Username Field
- Password Field
- Create Button

### 💳 Account Dashboard

- Account Balance Label
- Show Balance Button
- Hide Balance Button

---

# ▶️ Running the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/bank-management-system.git
```

### 2️⃣ Open in Your IDE

- IntelliJ IDEA
- NetBeans
- Eclipse

### 3️⃣ Configure JavaFX

Ensure the JavaFX SDK is added to your project.

### 4️⃣ Run

Execute:

```text
BankApp.java
```

---

# 📚 Java Concepts Used

- ☕ JavaFX
- 🎨 Scene Builder Concepts
- 📐 BorderPane
- 📐 GridPane
- 📐 VBox
- 📐 HBox
- 🎯 Event Handling
- 📂 File Handling
- 📝 Scanner Class
- 💾 FileWriter
- ⚠️ Exception Handling

---

# 👨‍💻 Author

**S HARISUDHAAN**

---

<p align="center">
⭐ If you found this project helpful, consider giving it a star!
</p>
