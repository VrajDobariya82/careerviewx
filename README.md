# CareerviewX — AI-Powered Career Guidance & Pathway Platform

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue.svg)](https://reactjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.3-61dafb.svg)](https://react.dev/)
[![Express.js](https://img.shields.io/badge/Express-5.2.1-lightgrey.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)](https://www.mongodb.com/)
[![OpenRouter](https://img.shields.io/badge/AI-OpenRouter%20LLM-purple.svg)](https://openrouter.ai/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38bdf8.svg)](https://tailwindcss.com/)

**CareerviewX** is an end-to-end full-stack career discovery and guidance ecosystem developed as a 7th Semester Software Group Project (SGP) at CHARUSAT. The platform replaces traditional static career quizzes with an adaptive AI psychometric assessment engine, connects users with interactive milestone roadmaps, provides an exhaustive career encyclopedia, and offers an integrated mentor marketplace.

---

## 🎯 Key Capabilities

- **🧠 Dynamic AI-Powered Psychometric Assessment:**
  - Shuffles across 20 distinct investigative psychological angles (academic strengths, temperament, problem-solving, risk appetite, work-style).
  - Generates 10 questions with 4 distinct options each, tagging latent behavioral traits.
  - Aggregates student trait frequencies and synthesizes 5 personalized career matches via OpenRouter (Meta Llama 3.3 70B / Gemini Flash) with realistic match percentages (60%–95%).
  - Robust local fallback system ensuring zero interruption during network or model timeouts.

- **🗺️ Interactive Milestone Timelines & Career Roadmaps:**
  - Progressive stage-by-stage visualization from secondary education through collegiate degrees, entrance exams, and entry/mid/senior industry roles.
  - One-click goal saving directly to the user's personal profile.

- **📚 Curated Career Encyclopedia:**
  - Multi-domain coverage: Engineering, IT, Healthcare, Design, Business & Finance, Civil Services.
  - In-depth metrics: Entry/Average/Senior salary ranges, market outlook, essential skills, competitive exams, and top Indian institutions.
  - Smart regex partial-title matching to prevent 404 network errors on AI-generated career titles.

- **🤝 Integrated Mentor Marketplace:**
  - Discover and connect with verified industry practitioners.
  - Review domain specializations, ratings, hourly consultation rates, and book 1-on-1 sessions.

- **📊 Central Student Dashboard & News Feed:**
  - Longitudinal assessment history and goal progression tracking.
  - Real-time educational and industry news feed with broken-image fallback guards.

- **🎨 Seamless Responsive UI/UX:**
  - Universal Left Sidebar on desktop screens with smooth transition to mobile drawer navigation.
  - Persistent Light & Dark mode support managed via React Context.

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 19.2.3 (Single Page Application)
- **Routing:** React Router DOM 7.12.0
- **Styling:** Tailwind CSS 3.4.19 with `@tailwindcss/forms`
- **HTTP Client:** Axios 1.13.5 with Bearer token interceptors
- **Icons & UI:** Lucide React & React Icons
- **State Management:** React Context API (AuthContext, ThemeContext)

### Backend
- **Runtime:** Node.js (v20+ LTS)
- **Web Framework:** Express.js 5.2.1 (RESTful Architecture)
- **Database:** MongoDB Atlas with Mongoose 9.2.0 ODM
- **Authentication:** JSON Web Tokens (`jsonwebtoken` 9.0.3)
- **Security:** `bcryptjs` 3.0.3 password hashing, CORS protection, custom error handlers
- **AI Integration:** OpenRouter API (Meta Llama 3.3 / Gemini endpoints)
- **Email Service:** Nodemailer 6.10.1

---

## 📁 Repository Monorepo Structure

```
careerviewx/
├── backend/                        # Express.js REST API Server
│   ├── config/                     # Database connection setup (db.js)
│   ├── middleware/                 # JWT authentication middleware
│   ├── models/                     # Mongoose models (User, Career, Question)
│   ├── routes/                     # API route controllers (assessment, auth, careers, profile)
│   ├── seeds/                      # Initial database seeders (careers, questions)
│   ├── utils/                      # OpenRouter LLM inference integration
│   ├── package.json                # Backend dependencies and scripts
│   └── server.js                   # Main API server entry point
│
├── frontend/                       # React 19 Client Application
│   ├── public/                     # Public assets (index.html, logo.png)
│   ├── src/
│   │   ├── assets/                 # Vector graphics, banners, illustration assets
│   │   ├── components/             # Reusable UI (InternalNavbar, SearchBar, Cards, Mentors)
│   │   ├── context/                # Global contexts (AuthContext, ThemeContext)
│   │   ├── pages/                  # Page views (Dashboard, CareerPaths, AllCareers, Assessment, Mentors, Profile, Settings)
│   │   ├── Services/               # API endpoint service layer (api.js, newsService.js)
│   │   ├── App.js                  # Route definitions and layouts
│   │   ├── index.css               # Tailwind directives and custom animation styles
│   │   └── index.js                # React root mount
│   ├── package.json                # Frontend dependencies and scripts
│   └── tailwind.config.js          # Tailwind theme configuration
│
├── docs/                           # Technical documentation and guides
│   ├── API_REFERENCE.md            # Detailed REST API endpoint specification
│   ├── DATABASE.md                 # MongoDB schema definitions & indexing
│   ├── DEPLOYMENT.md               # Production deployment manual (Vercel & Render)
│   ├── SETUP_GUIDE.md              # Detailed local environment setup
│   └── STRUCTURE.md                # Codebase modularization guide
│
├── CareerviewX_Technical_Paper_Report.md   # Academic project report (Markdown)
├── CareerviewX_Technical_Paper_Report.html # Print-ready academic paper (HTML/PDF)
├── PROJECT_DESCRIPTION.md                  # Complete architectural description
└── README.md                               # Project overview and instructions
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn package manager
- MongoDB Atlas cluster connection URI
- OpenRouter API key (for dynamic AI assessment generation)

### 1. Clone the Repository
```bash
git clone https://github.com/VrajDobariya82/careerviewx.git
cd careerviewx
```

### 2. Configure Environment Variables

**Backend (`backend/.env`):**
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/careerviewx?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
OPENROUTER_API_KEY=your_openrouter_api_key_here
FRONTEND_URL=http://localhost:3000
```

**Frontend (`frontend/.env`):**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 3. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 4. Seed Database (Optional but Recommended)
Populate your MongoDB database with baseline questions and career data:
```bash
cd backend
npm run seed:all
```

### 5. Start Development Servers

**Terminal 1 — Backend API:**
```bash
cd backend
node server.js
```
*Backend runs on `http://localhost:5000`*

**Terminal 2 — Frontend Application:**
```bash
cd frontend
npm start
```
*Frontend runs on `http://localhost:3000`*

---

## 📡 REST API Summary

| Method | Endpoint | Description | Protected |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/auth/register` | Register new user account | No |
| `POST` | `/api/auth/login` | Authenticate user & issue JWT | No |
| `GET` | `/api/auth/verify-email/:token`| Verify user email address | No |
| `GET` | `/api/assessment/generate-all` | Generate 10 dynamic AI assessment questions | Yes |
| `POST` | `/api/assessment/final-result` | Evaluate answers, rank traits & return 5 careers | Yes |
| `GET` | `/api/assessment/history` | Retrieve user assessment history | Yes |
| `GET` | `/api/careers` | Browse all careers with search/filter | No |
| `GET` | `/api/careers/:id` | Fetch career details by ID | No |
| `GET` | `/api/careers/by-name/:name` | Fetch career by title with regex partial matching | No |
| `GET` | `/api/profile` | Retrieve user profile, history & milestones | Yes |
| `PUT` | `/api/profile` | Update profile information | Yes |
| `POST` | `/api/profile/career-path` | Bookmark career to personal roadmap | Yes |

---

## 📄 Academic Documentation

- 📄 **Full Technical Paper (Markdown):** [CareerviewX_Technical_Paper_Report.md](CareerviewX_Technical_Paper_Report.md)
- 🖨️ **Print-Ready Academic Paper (HTML/PDF):** [CareerviewX_Technical_Paper_Report.html](CareerviewX_Technical_Paper_Report.html)
- 📖 **Comprehensive Project Description:** [PROJECT_DESCRIPTION.md](PROJECT_DESCRIPTION.md)

---

## 👨‍💻 Project Information

- **Developer:** Vraj Dobariya
- **Department:** K.D. Patel Department of Information Technology
- **Institution:** CSPIT, CHARUSAT University, Changa, India
- **Course:** IT414 – Software Group Project (SGP, 7th Semester)
- **Email:** `dobariyavra82@gmail.com` / `d24it148@charusat.edu.in`
- **GitHub:** [@VrajDobariya82](https://github.com/VrajDobariya82)
