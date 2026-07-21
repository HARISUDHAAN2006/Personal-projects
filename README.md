<!-- ============================================================ -->
<!-- PERSONAL-PROJECTS ARCHIVE — README                          -->
<!-- Maintainer: HARISUDHAAN2006                                 -->
<!-- Theme: Cyberpunk Terminal / Neon Grid                       -->
<!-- ============================================================ -->

<div align="center">

<!-- ===================== HERO: ANIMATED SVG BANNER ===================== -->
<svg width="100%" height="260" viewBox="0 0 1200 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Personal Projects animated terminal banner">
  <defs>
    <linearGradient id="scanGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#00F5FF" stop-opacity="0"/>
      <stop offset="50%" stop-color="#00F5FF" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#00F5FF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="edgeFade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#05060A" stop-opacity="1"/>
      <stop offset="6%" stop-color="#05060A" stop-opacity="0"/>
      <stop offset="94%" stop-color="#05060A" stop-opacity="0"/>
      <stop offset="100%" stop-color="#05060A" stop-opacity="1"/>
    </linearGradient>
    <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" class="grid-line"/>
    </pattern>
    <clipPath id="bannerClip"><rect x="0" y="0" width="1200" height="260" rx="14"/></clipPath>
  </defs>

  <style>
    .void { fill:#05060A; }
    .grid-line { stroke:#00F5FF; stroke-opacity:0.09; stroke-width:1; }
    .frame { fill:none; stroke:#8B5CF6; stroke-opacity:0.55; stroke-width:1.5; }
    .scan { fill:url(#scanGrad); animation: scandrop 4.2s linear infinite; }
    @keyframes scandrop { 0% { transform:translateY(-40px); } 100% { transform:translateY(300px); } }

    .glitch-cyan   { fill:#00F5FF; font-family:'Courier New', monospace; font-weight:700; animation: glitchC 3.6s infinite steps(1); }
    .glitch-magenta{ fill:#FF2BD6; font-family:'Courier New', monospace; font-weight:700; animation: glitchM 3.6s infinite steps(1); }
    .glitch-base   { fill:#F5F7FA; font-family:'Courier New', monospace; font-weight:700; }
    @keyframes glitchC {
      0%, 91%, 100% { transform:translate(0,0); opacity:1; }
      92% { transform:translate(-3px,1px); }
      94% { transform:translate(2px,-1px); }
      96% { transform:translate(-2px,0px); opacity:0.7; }
    }
    @keyframes glitchM {
      0%, 91%, 100% { transform:translate(0,0); opacity:1; }
      92% { transform:translate(3px,-1px); }
      94% { transform:translate(-2px,1px); }
      96% { transform:translate(2px,0px); opacity:0.7; }
    }

    .rotword { opacity:0; font-family:'Courier New', monospace; font-size:20px; letter-spacing:3px; fill:#9AA5B8; animation: rotcycle 9s infinite; }
    .rw1 { animation-delay:0s; }
    .rw2 { animation-delay:3s; }
    .rw3 { animation-delay:6s; }
    @keyframes rotcycle {
      0% { opacity:0; }
      3% { opacity:1; }
      30% { opacity:1; }
      34% { opacity:0; }
      100% { opacity:0; }
    }

    .cursor { fill:#FFD166; animation: blink 1s steps(1) infinite; }
    @keyframes blink { 0%, 49% { opacity:1; } 50%, 100% { opacity:0; } }

    .dot { animation: pulse 2s ease-in-out infinite; }
    @keyframes pulse { 0%,100% { opacity:1; r:5; } 50% { opacity:0.35; r:7; } }
  </style>

  <g clip-path="url(#bannerClip)">
    <rect class="void" width="1200" height="260"/>
    <rect width="1200" height="260" fill="url(#gridPattern)"/>
    <rect width="1200" height="60" class="scan"/>

    <circle class="dot" cx="40" cy="40" r="5" fill="#FF2BD6"/>
    <circle cx="60" cy="40" r="5" fill="#FFD166" opacity="0.5"/>
    <circle cx="80" cy="40" r="5" fill="#00F5FF" opacity="0.5"/>
    <text x="100" y="45" font-family="Courier New, monospace" font-size="13" fill="#9AA5B8">root@harisudhaan2006:~/Personal-projects$</text>

    <text x="70" y="130" font-size="46" class="glitch-cyan" transform="translate(-2,-2)">PERSONAL_PROJECTS</text>
    <text x="70" y="130" font-size="46" class="glitch-magenta" transform="translate(2,2)">PERSONAL_PROJECTS</text>
    <text x="70" y="130" font-size="46" class="glitch-base">PERSONAL_PROJECTS</text>
    <rect class="cursor" x="640" y="98" width="14" height="36"/>

    <text x="72" y="165" class="rotword rw1">&gt; MACHINE_LEARNING_MODELS.exe</text>
    <text x="72" y="165" class="rotword rw2">&gt; JAVAFX_SWING_DESKTOP_SUITE.exe</text>
    <text x="72" y="165" class="rotword rw3">&gt; WEB_UTILITY_TOOLKIT.exe</text>

    <text x="72" y="200" font-family="Courier New, monospace" font-size="13" fill="#5B6478">A living archive of ML models, JavaFX/Swing desktop apps &amp; web utilities — built, trained and shipped by Harisudhaan.</text>

    <rect class="frame" x="4" y="4" width="1192" height="252" rx="14"/>
  </g>
</svg>

<br/>

<!-- ===================== QUICK NAV ===================== -->
[![Stack](https://img.shields.io/badge/-STACK_MATRIX-05060A?style=for-the-badge&labelColor=05060A&color=00F5FF)](#-stack-matrix)
[![ML](https://img.shields.io/badge/-ML_MODELS-05060A?style=for-the-badge&labelColor=05060A&color=FF2BD6)](#-machine-learning-lab)
[![Desktop](https://img.shields.io/badge/-JAVA_DESKTOP-05060A?style=for-the-badge&labelColor=05060A&color=FFD166)](#-javafxswing-desktop-suite)
[![Web](https://img.shields.io/badge/-WEB_UTILITIES-05060A?style=for-the-badge&labelColor=05060A&color=8B5CF6)](#-web-utility-toolkit)
[![Metrics](https://img.shields.io/badge/-LIVE_METRICS-05060A?style=for-the-badge&labelColor=05060A&color=00F5FF)](#-live-metrics)

<!-- ===================== LIVE BADGES GRID ===================== -->
<table>
<tr>
<td align="center">
<img src="https://komarev.com/ghpvc/?username=HARISUDHAAN2006&label=REPO%20VIEWS&color=00F5FF&style=for-the-badge" alt="repo views"/>
</td>
<td align="center">
<img src="https://img.shields.io/github/last-commit/HARISUDHAAN2006/Personal-projects?style=for-the-badge&labelColor=05060A&color=FF2BD6&label=LAST%20SIGNAL" alt="last commit"/>
</td>
<td align="center">
<img src="https://img.shields.io/github/languages/top/HARISUDHAAN2006/Personal-projects?style=for-the-badge&labelColor=05060A&color=FFD166&label=PRIMARY%20LANG" alt="top language"/>
</td>
<td align="center">
<img src="https://img.shields.io/github/repo-size/HARISUDHAAN2006/Personal-projects?style=for-the-badge&labelColor=05060A&color=8B5CF6&label=PAYLOAD%20SIZE" alt="repo size"/>
</td>
</tr>
<tr>
<td align="center">
<img src="https://img.shields.io/github/stars/HARISUDHAAN2006/Personal-projects?style=for-the-badge&labelColor=05060A&color=00F5FF&label=STARS" alt="stars"/>
</td>
<td align="center">
<img src="https://img.shields.io/github/forks/HARISUDHAAN2006/Personal-projects?style=for-the-badge&labelColor=05060A&color=FF2BD6&label=FORKS" alt="forks"/>
</td>
<td align="center">
<img src="https://img.shields.io/github/issues/HARISUDHAAN2006/Personal-projects?style=for-the-badge&labelColor=05060A&color=FFD166&label=OPEN%20ISSUES" alt="issues"/>
</td>
<td align="center">
<img src="https://img.shields.io/badge/STATUS-ACTIVE_BUILD-8B5CF6?style=for-the-badge&labelColor=05060A" alt="status active"/>
</td>
</tr>
</table>

</div>

<br/>

<!-- ============================================================ -->
<!-- STACK MATRIX                                                 -->
<!-- ============================================================ -->
## 🧬 Stack Matrix

<div align="center">

| 🧠 Data Science / ML | ☕ Java Desktop | 🌐 Web Utilities |
|:---:|:---:|:---:|
| <img src="https://img.shields.io/badge/Python-05060A?style=for-the-badge&logo=python&logoColor=00F5FF" align="center"/> | <img src="https://img.shields.io/badge/Java-05060A?style=for-the-badge&logo=openjdk&logoColor=FFD166" align="center"/> | <img src="https://img.shields.io/badge/HTML5-05060A?style=for-the-badge&logo=html5&logoColor=8B5CF6" align="center"/> |
| <img src="https://img.shields.io/badge/scikit--learn-05060A?style=for-the-badge&logo=scikitlearn&logoColor=00F5FF" align="center"/> | <img src="https://img.shields.io/badge/JavaFX-05060A?style=for-the-badge&logo=java&logoColor=FFD166" align="center"/> | <img src="https://img.shields.io/badge/CSS3-05060A?style=for-the-badge&logo=css3&logoColor=8B5CF6" align="center"/> |
| <img src="https://img.shields.io/badge/pandas-05060A?style=for-the-badge&logo=pandas&logoColor=00F5FF" align="center"/> | <img src="https://img.shields.io/badge/Swing-05060A?style=for-the-badge&logo=java&logoColor=FFD166" align="center"/> | <img src="https://img.shields.io/badge/JavaScript-05060A?style=for-the-badge&logo=javascript&logoColor=8B5CF6" align="center"/> |
| <img src="https://img.shields.io/badge/NumPy-05060A?style=for-the-badge&logo=numpy&logoColor=00F5FF" align="center"/> | <img src="https://img.shields.io/badge/Swing_UI-05060A?style=for-the-badge&logo=codefactor&logoColor=FFD166" align="center"/> | <img src="https://img.shields.io/badge/REST_API-05060A?style=for-the-badge&logo=fastapi&logoColor=8B5CF6" align="center"/> |
| <img src="https://img.shields.io/badge/Jupyter-05060A?style=for-the-badge&logo=jupyter&logoColor=00F5FF" align="center"/> | <img src="https://img.shields.io/badge/IntelliJ_IDEA-05060A?style=for-the-badge&logo=intellijidea&logoColor=FFD166" align="center"/> | <img src="https://img.shields.io/badge/OpenWeather_API-05060A?style=for-the-badge&logo=openweathermap&logoColor=8B5CF6" align="center"/> |

<sub>⚡ hover any badge on GitHub Desktop / web to see the native icon-shift micro-interaction shields.io renders on load</sub>

</div>

<br/>

<!-- ============================================================ -->
<!-- MACHINE LEARNING LAB                                         -->
<!-- ============================================================ -->
## 🧠 Machine Learning Lab

<table>
<tr>
<td width="50%" valign="top">

<h3>🔥 Calories Burnt Prediction</h3>

<svg width="18" height="18"><circle cx="9" cy="9" r="6" fill="#FF2BD6"><animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite"/></circle></svg> **Regression model** estimating calories burnt from workout &amp; biometric session data.

![sklearn](https://img.shields.io/badge/model-Random_Forest_Regressor-00F5FF?style=flat-square&labelColor=05060A)
![data](https://img.shields.io/badge/data-exercise_%2B_calories.csv-FF2BD6?style=flat-square&labelColor=05060A)

<details>
<summary>▸ Tech stack &amp; setup</summary>

**Stack:** Python · pandas · scikit-learn · matplotlib

```bash
cd Calories-Burnt-Prediction
pip install -r requirements.txt
python train_model.py
python predict.py --age 24 --duration 30 --heart_rate 110
```

</details>

</td>
<td width="50%" valign="top">

<h3>🚗 Car Price Prediction</h3>

<svg width="18" height="18"><circle cx="9" cy="9" r="6" fill="#00F5FF"><animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite"/></circle></svg> **Regression pipeline** predicting resale value of used cars from spec &amp; mileage features.

![sklearn](https://img.shields.io/badge/model-Linear_%2F_Lasso_Regression-00F5FF?style=flat-square&labelColor=05060A)
![data](https://img.shields.io/badge/data-car_data.csv-FF2BD6?style=flat-square&labelColor=05060A)

<details>
<summary>▸ Tech stack &amp; setup</summary>

**Stack:** Python · pandas · scikit-learn · seaborn

```bash
cd Car-Price-Prediction
pip install -r requirements.txt
python train_model.py
python predict.py --year 2019 --kms 32000 --fuel Petrol
```

</details>

</td>
</tr>
<tr>
<td width="50%" valign="top">

<h3>🩺 Diabetes Prediction</h3>

<svg width="18" height="18"><circle cx="9" cy="9" r="6" fill="#FFD166"><animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite"/></circle></svg> **Binary classifier** flagging diabetes risk from diagnostic health measurements.

![sklearn](https://img.shields.io/badge/model-SVM_%2F_Logistic_Regression-00F5FF?style=flat-square&labelColor=05060A)
![data](https://img.shields.io/badge/data-diabetes.csv-FF2BD6?style=flat-square&labelColor=05060A)

<details>
<summary>▸ Tech stack &amp; setup</summary>

**Stack:** Python · pandas · scikit-learn · numpy

```bash
cd Diabetes-Prediction
pip install -r requirements.txt
python train_model.py
python predict.py --glucose 148 --bmi 33.6 --age 50
```

</details>

</td>
<td width="50%" valign="top">

<h3>💻 Laptop Price Prediction</h3>

<svg width="18" height="18"><circle cx="9" cy="9" r="6" fill="#8B5CF6"><animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite"/></circle></svg> **Regression model** pricing laptops from specs — RAM, CPU, GPU, storage &amp; brand.

![sklearn](https://img.shields.io/badge/model-Random_Forest_Regressor-00F5FF?style=flat-square&labelColor=05060A)
![data](https://img.shields.io/badge/data-laptop_data.csv-FF2BD6?style=flat-square&labelColor=05060A)

<details>
<summary>▸ Tech stack &amp; setup</summary>

**Stack:** Python · pandas · scikit-learn · pickle

```bash
cd Laptop-Price-Prediction
pip install -r requirements.txt
python train_model.py
python predict.py --ram 16 --cpu "Intel i7" --ssd 512
```

</details>

</td>
</tr>
<tr>
<td width="50%" valign="top">

<h3>💼 Salary Prediction</h3>

<svg width="18" height="18"><circle cx="9" cy="9" r="6" fill="#00F5FF"><animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite"/></circle></svg> **Regression model** estimating salary from experience, role &amp; education level.

![sklearn](https://img.shields.io/badge/model-Linear_Regression-00F5FF?style=flat-square&labelColor=05060A)
![data](https://img.shields.io/badge/data-salary_data.csv-FF2BD6?style=flat-square&labelColor=05060A)

<details>
<summary>▸ Tech stack &amp; setup</summary>

**Stack:** Python · pandas · scikit-learn · matplotlib

```bash
cd Salary-Prediction
pip install -r requirements.txt
python train_model.py
python predict.py --experience 5.5
```

</details>

</td>
<td width="50%" valign="top">

<h3>📈 Lab Notes</h3>

Every model here follows the same pipeline discipline:

- Clean &amp; encode raw `.csv` data
- Train / test split with cross-validation
- Serialize the trained model (`.pkl`) for reuse
- Thin CLI or notebook front-end for inference

<img src="https://img.shields.io/badge/methodology-train_%E2%86%92_validate_%E2%86%92_serialize_%E2%86%92_predict-05060A?style=flat-square&color=8B5CF6"/>

</td>
</tr>
</table>

<br/>

<!-- ============================================================ -->
<!-- JAVAFX / SWING DESKTOP SUITE                                 -->
<!-- ============================================================ -->
## ☕ JavaFX/Swing Desktop Suite

<table>
<tr>
<td width="33%" valign="top">

<h3>🏦 Bank Management App</h3>

<svg width="18" height="18"><rect x="3" y="3" width="12" height="12" rx="2" fill="#FFD166"><animate attributeName="opacity" values="1;0.35;1" dur="1.8s" repeatCount="indefinite"/></rect></svg> Desktop CRUD app for accounts, deposits, withdrawals &amp; transaction history.

<details>
<summary>▸ Tech stack &amp; setup</summary>

**Stack:** Java · Swing · JDBC

```bash
cd Bank-Management-App
javac -d bin src/*.java
java -cp bin Main
```

</details>

</td>
<td width="33%" valign="top">

<h3>✅ To-Do List App</h3>

<svg width="18" height="18"><rect x="3" y="3" width="12" height="12" rx="2" fill="#00F5FF"><animate attributeName="opacity" values="1;0.35;1" dur="1.8s" repeatCount="indefinite"/></rect></svg> Task tracker with add/edit/delete, priority tagging &amp; completion state.

<details>
<summary>▸ Tech stack &amp; setup</summary>

**Stack:** Java · JavaFX · FXML

```bash
cd To-Do-List-App
javac --module-path %PATH_TO_FX% --add-modules javafx.controls -d bin src/*.java
java --module-path %PATH_TO_FX% --add-modules javafx.controls -cp bin Main
```

</details>

</td>
<td width="33%" valign="top">

<h3>🧮 Calculator Suite</h3>

<svg width="18" height="18"><rect x="3" y="3" width="12" height="12" rx="2" fill="#FF2BD6"><animate attributeName="opacity" values="1;0.35;1" dur="1.8s" repeatCount="indefinite"/></rect></svg> Standard + scientific calculator variants sharing one expression engine.

<details>
<summary>▸ Tech stack &amp; setup</summary>

**Stack:** Java · Swing · GridLayout

```bash
cd Calculator-Suite
javac -d bin src/*.java
java -cp bin Calculator
```

</details>

</td>
</tr>
</table>

<br/>

<!-- ============================================================ -->
<!-- WEB UTILITY TOOLKIT                                          -->
<!-- ============================================================ -->
## 🌐 Web Utility Toolkit

<table>
<tr>
<td width="50%" valign="top">

<h3>🔗 URL Shortener</h3>

<svg width="18" height="18"><path d="M3 9 L15 9" stroke="#8B5CF6" stroke-width="3" stroke-linecap="round"><animate attributeName="stroke-dasharray" values="0,20;20,0;0,20" dur="2.2s" repeatCount="indefinite"/></path></svg> Converts long URLs into short, shareable, trackable links.

<details>
<summary>▸ Tech stack &amp; setup</summary>

**Stack:** HTML · CSS · JavaScript · REST API

```bash
cd URL-Shortener
# open index.html in a browser, or serve locally:
python -m http.server 8000
```

</details>

</td>
<td width="50%" valign="top">

<h3>⛅ Weather Application</h3>

<svg width="18" height="18"><circle cx="9" cy="9" r="5" fill="#FFD166"><animate attributeName="r" values="5;6.5;5" dur="2.2s" repeatCount="indefinite"/></circle></svg> Live weather lookup by city using a public weather API, with a clean responsive UI.

<details>
<summary>▸ Tech stack &amp; setup</summary>

**Stack:** HTML · CSS · JavaScript · OpenWeather API

```bash
cd Weather-Application
# add your API key in config.js, then:
python -m http.server 8000
```

</details>

</td>
</tr>
</table>

<br/>

<!-- ============================================================ -->
<!-- LIVE METRICS                                                 -->
<!-- ============================================================ -->
## 📡 Live Metrics

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=HARISUDHAAN2006&show_icons=true&theme=tokyonight&hide_border=true&bg_color=05060A&title_color=00F5FF&icon_color=FF2BD6&text_color=9AA5B8" width="49%" alt="GitHub Stats"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=HARISUDHAAN2006&layout=compact&theme=tokyonight&hide_border=true&bg_color=05060A&title_color=00F5FF&text_color=9AA5B8" width="35%" alt="Top Languages"/>

<br/>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=HARISUDHAAN2006&theme=tokyonight&hide_border=true&background=05060A&ring=00F5FF&fire=FF2BD6&currStreakLabel=00F5FF" width="60%" alt="GitHub Streak"/>

</div>

<br/>

<!-- ============================================================ -->
<!-- CONTRIBUTION SNAKE (workflow placeholder)                    -->
<!-- ============================================================ -->
### 🐍 Contribution Snake

<div align="center">
<img src="https://raw.githubusercontent.com/HARISUDHAAN2006/HARISUDHAAN2006/output/github-contribution-grid-snake.svg" width="100%" alt="Contribution snake animation"/>
</div>

<sub>Rendered by a scheduled GitHub Action that consumes the contribution graph and writes an animated snake SVG to an `output` branch. Workflow scaffold:</sub>

```yaml
# .github/workflows/snake.yml
name: generate-snake
on:
  schedule:
    - cron: "0 0 * * *"     # daily at midnight
  workflow_dispatch: {}
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: Platane/snk@v3
        id: snake
        with:
          github_user_name: HARISUDHAAN2006
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark

      - uses: crazy-max/ghaction-github-pages@v4
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

<br/>

<!-- ============================================================ -->
<!-- FOOTER                                                       -->
<!-- ============================================================ -->
<div align="center">

<svg width="100%" height="90" viewBox="0 0 1200 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="footer divider">
  <defs>
    <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#00F5FF" stop-opacity="0.55"/>
      <stop offset="50%" stop-color="#8B5CF6" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#FF2BD6" stop-opacity="0.55"/>
    </linearGradient>
  </defs>
  <style>
    .footvoid{fill:#05060A;}
    .wave{ fill:none; stroke:url(#waveGrad); stroke-width:3; animation: drift 6s ease-in-out infinite; }
    @keyframes drift {
      0%,100% { transform:translateX(0); }
      50% { transform:translateX(-24px); }
    }
  </style>
  <rect class="footvoid" width="1200" height="90"/>
  <path class="wave" d="M0,45 C150,10 350,80 600,45 C850,10 1050,80 1200,45"/>
  <text x="600" y="60" text-anchor="middle" font-family="Courier New, monospace" font-size="13" fill="#9AA5B8">// end of transmission — thanks for reading the source</text>
</svg>

**⭐ If a project here saved you time, star the repo — it keeps the lab funded in caffeine.**

</div>
