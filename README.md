# Netflix Customer Churn Analysis — Portfolio

A premium, cinematic Flask web application showcasing an enterprise-grade **Netflix Customer Churn Analysis** case study. Built with smooth scroll animations, animated data counters, and an embedded interactive Tableau dashboard.

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-3.1-000000?logo=flask&logoColor=white)
![Tableau](https://img.shields.io/badge/Tableau-Public-E97627?logo=tableau&logoColor=white)
[![Live Demo](https://img.shields.io/badge/Live-Demo-E91E63?style=flat-square&logo=render)](https://netflix-churn-portfolio.onrender.com)
![License](https://img.shields.io/badge/License-MIT-green)

**Live Demo:** [https://netflix-churn-portfolio.onrender.com](https://netflix-churn-portfolio.onrender.com)

---

## Key Findings

| Metric | Retained (0) | Churned (1) |
|---|---|---|
| **Avg Weekly Watch Hours** | 16 – 20 h | 5.5 – 6.4 h |
| **Avg Profiles per Account** | 3.1 – 3.5 | 2.6 – 2.9 |

- **Household Multiplier Effect** — Multi-profile accounts are highly resilient to cancellation.
- **Engagement Cliff** — Users below 6 weekly watch hours are at extreme churn risk.
- **Risk Clusters** — Low usage + increased login gaps form distinct high-risk segments.

---

## Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: Vanilla HTML/CSS/JS, Inter font
- **Animations**: Intersection Observer API, requestAnimationFrame counters
- **Dashboard**: Tableau Public (embedded)
- **Analysis**: Python (pandas, scikit-learn) — [Google Colab Notebook](https://colab.research.google.com/drive/1EW3bN-aTwctMu4_jax6UfcQS5GViVh3P?usp=sharing)
- **Dataset**: [Kaggle — Netflix Customer Churn](https://www.kaggle.com/datasets/abdulwadood11220/netflix-customer-churn-dataset)

---

## Project Structure

```
netflix_churn_portfolio/
├── app.py                          # Flask routes
├── requirements.txt                # Dependencies
├── exported_netflix_data.csv       # Cleaned dataset
├── NetflixCustomerChurn.ipynb      # Jupyter notebook (analysis)
├── static/
│   ├── css/main.css                # Premium dark-mode design system
│   └── js/
│       ├── animations.js           # Scroll-triggered counters & reveals
│       └── main.js                 # Navbar & mobile interactions
└── templates/
    ├── base.html                   # Global layout shell
    ├── index.html                  # Home — hero, bio, resources
    ├── analytics.html              # Animated data narrative
    └── dashboard.html              # Tableau embed
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/NikhilKhatrii/netflix-churn-portfolio.git
cd netflix-churn-portfolio

# Install dependencies
pip install -r requirements.txt

# Run the development server
python app.py
```

Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

---

## Pages

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Cinematic hero, professional bio, project resources, key signal teasers |
| **Insights** | `/analytics` | Animated metrics, comparison bars, insight narratives, risk clusters |
| **Dashboard** | `/dashboard` | Fully responsive embedded Tableau Public dashboard |

---

## Author

**Nikhil Khatri** — AI, Machine Learning & Software Engineer

- [GitHub](https://github.com/NikhilKhatrii)
- [LinkedIn](https://www.linkedin.com/in/nikhil-khatrii/)

---

## License

This project is open source under the [MIT License](LICENSE).
