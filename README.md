# Rajdip Mondal — Portfolio Website

A modern, dynamic personal portfolio built with the **MERN Stack** featuring stunning animations, dark/light mode, and a fully functional contact form.

## ✨ Features

- **Hero Section** — Animated name with typing effect cycling through roles
- **Skills Grid** — Scroll-animated cards with glassmorphism styling
- **Experience Timeline** — Vertical timeline with alternating cards
- **Projects Carousel** — Interactive carousel with hover effects
- **Contact Form** — Connected to Express + MongoDB backend
- **Custom Cursor** — Animated cursor that reacts to hoverable elements
- **Dark/Light Mode** — Seamless theme toggle with CSS transitions
- **Particle Background** — Interactive canvas constellation effect
- **Responsive Design** — Works on mobile, tablet, and desktop

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Tailwind CSS v4, Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Icons | React Icons (Feather) |
| Fonts | Inter (Google Fonts) |

## 📁 Project Structure

```
Portfolio/
├── client/                  # React frontend (Vite)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── sections/        # Page sections (Hero, Skills, etc.)
│   │   ├── context/         # React Context (Theme)
│   │   ├── hooks/           # Custom hooks
│   │   ├── data/            # Centralized portfolio data
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css        # Design system & theme variables
│   └── ...
│
├── server/                  # Express backend
│   ├── config/db.js         # MongoDB connection
│   ├── models/Contact.js    # Contact schema
│   ├── routes/contact.js    # API routes
│   ├── middleware/validate.js
│   ├── server.js
│   ├── .env.example
│   └── .gitignore
│
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Rajdip03/portfolio.git
cd portfolio
```

### 2. Set up the Backend
```bash
cd server
cp .env.example .env    # Edit .env with your MongoDB URI
npm install
npm run dev             # Starts on http://localhost:5000
```

### 3. Set up the Frontend
```bash
cd client
npm install
npm run dev             # Starts on http://localhost:5173
```

### 4. Open in browser
Navigate to `http://localhost:5173`

## 📝 Customization

All portfolio content (skills, projects, experience, personal info) is centralized in:

```
client/src/data/portfolioData.js
```
Edit this single file to update your name, descriptors, social links, skills, projects, and experience — no need to touch component code.
## 📦 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact` | Submit a contact form message |
| `GET` | `/api/contact` | List all contact submissions |
| `GET` | `/api/health` | Server health check |

## 📄 License

Built with ❤️ by **Rajdip Mondal**
