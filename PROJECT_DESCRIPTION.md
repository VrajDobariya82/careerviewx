# CareerviewX: Comprehensive Project Description

## 1. Executive Summary

**CareerviewX** is a modern, full-stack, AI-powered career counseling and pathway discovery platform developed using the MERN stack (MongoDB, Express.js, React 19, Node.js) and integrated with Large Language Models (LLMs) via OpenRouter. 

Traditional career counseling relies heavily on rigid, static multiple-choice questionnaires or expensive one-on-one sessions that are inaccessible to many students. CareerviewX bridges this gap by offering:
- **Dynamic, AI-Driven Assessments:** Adaptive questioning that randomizes across 20 investigative psychological angles, tags behavioral traits from student choices, and synthesizes 5 deeply personalized career recommendations.
- **Interactive Career Roadmaps:** Step-by-step milestone timelines taking learners from foundational education (10th/12th/Undergraduate) to entry-level, mid-level, and senior industry roles.
- **Career Encyclopedia:** Curated career database covering required qualifications, competitive entrance exams, top Indian colleges, salary metrics, and job outlooks.
- **Mentor Marketplace:** A discovery portal connecting students with verified industry mentors for 1-on-1 guidance.
- **Longitudinal Tracking:** Complete assessment history, saved career goals, and personalized profiles accessible through a responsive, unified left-sidebar interface with dark/light mode support.

---

## 2. Motivation & Problem Statement

### 2.1 The Problem
- **Information Overload & Misdirection:** Students often make critical career choices based on peer pressure or incomplete information from fragmented search results.
- **Static & Repetitive Testing:** Conventional psychometric tests present identical, predictable questions that fail to adapt to modern job titles or extract nuanced behavioral traits.
- **High Counselor-to-Student Ratio:** In most educational institutions, dedicated counselors are either unavailable or burdened with hundreds of students, making tailored guidance impossible.
- **Siloed Ecosystems:** Students must use different tools to take quizzes, research colleges, find mentors, and track their academic goals.

### 2.2 The CareerviewX Solution
CareerviewX unifies self-assessment, career exploration, educational roadmapping, and mentorship into one streamlined, accessible digital workspace.

---

## 3. High-Level System Architecture

CareerviewX follows a decoupled three-tier architectural pattern:

```
┌─────────────────────────────────────────────────────────────┐
│                     PRESENTATION LAYER                      │
│     React 19 • Tailwind CSS • React Router v7 • Context API │
│  (Universal Left Sidebar, Assessment UI, Roadmaps, News)    │
└──────────────────────────────┬──────────────────────────────┘
                               │
                        HTTPS / REST (Axios)
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                     APPLICATION LAYER                       │
│           Node.js & Express.js RESTful API Engine           │
│  ├── JWT Authentication & Bcrypt Password Encryption       │
│  ├── Dynamic Assessment Engine (OpenRouter LLM Bridge)     │
│  ├── Trait Extraction & Multi-Factor Scoring Controller    │
│  ├── Career Search & Regex Partial-Matching Engine         │
│  └── User Profile & Milestone Management Controller         │
└──────────────────────────────┬──────────────────────────────┘
                               │
                     Mongoose ODM / Driver
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                         DATA LAYER                          │
│                   MongoDB Atlas (Cloud NoSQL)               │
│  ├── users collection (Auth, Profile, History, Goals)       │
│  ├── careers collection (Descriptions, Salaries, Roadmaps)  │
│  └── questions collection (Curated Baseline Fallbacks)      │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Detailed Feature Breakdown

### 4.1 AI-Powered Adaptive Assessment Engine
- **Pre-Quiz Configuration:** Shuffles across 20 distinct psychological and vocational inquiry angles (academic interests, risk tolerance, collaborative dynamics, leadership style, problem-solving methodology, work environment, etc.) using the Fisher-Yates algorithm.
- **Dynamic Question Generation:** Generates 10 sequential or batch questions with 4 distinct choices each. Every choice carries 2 to 3 latent behavioral trait tags (e.g., `analytical`, `leadership`, `empathy`, `creative`).
- **Trait Aggregation & Histogram:** The server tallies trait frequencies from student choices, identifying the top 10 dominant traits.
- **Constrained Synthesis:** OpenRouter API prompts the LLM with strict JSON schema constraints. The model outputs:
  - An overarching personality profile summary.
  - Exactly 5 career recommendations.
  - Realistic match percentages (varied realistically between 60% and 95%).
  - Specific justifications referencing the student's actual answers.
  - Actionable skills to learn and top relevant colleges.
- **Defensive Fallback Mechanism:** In the event of API timeout or transient network failures, the engine gracefully falls back to curated internal questions and fallback career profiles without throwing application errors.

### 4.2 Interactive Career Paths & Visual Roadmaps
- **Progressive Timelines:** Displays visual step-by-step pathways from current education level (10th / 12th / Degree) through essential milestones, exams, skill acquisition, and target industry positions.
- **Add to Career Goals:** Logged-in users can bookmark recommendations directly into their personal career timeline with a single click.
- **Detailed Popup Overviews:** Clicking any milestone node opens a detailed card with skill tags, recommended courses, and reasons for fit.

### 4.3 Career Encyclopedia & Live Explorer
- **Multi-Domain Categorization:** Engineering, IT, Medical & Healthcare, Design, Business & Finance, Government & Civil Services.
- **Granular Data Points:**
  - Category & job outlook badges.
  - Salary ranges and market demand indicators.
  - Minimum education required.
  - Key entrance/competitive examinations.
  - Top Indian and global universities.
  - Complete multi-stage roadmaps.
- **Smart Partial Match Search:** Handles composite career names returned by AI (e.g., matching `"Product Manager"` from `"Product Manager (Tech)"`) preventing 404 network errors.

### 4.4 Mentor Marketplace
- Connects aspiring students with industry practitioners.
- Browse mentors by technical domain, rating, hourly rate, and company background.
- Direct session booking modal and mentor profile cards.

### 4.5 Personalized Dashboard & Career News
- **Quick Metric Cards:** Shows top career matches, saved paths, and assessment completion status.
- **Curated News Feed:** Live career and education updates with automatic broken-image fallbacks.
- **Notifications Panel:** In-app notifications for assessment results, mentor messages, and new career updates.

### 4.6 Theme & Navigation Architecture
- **Universal Left Sidebar:** Persistent navigation on desktop (`w-64`, sticky layout) and sleek slide-over drawer on mobile viewports.
- **Logo Route Intelligence:** Clicking the CareerviewX logo directs authenticated users to `/dashboard` and public visitors to `/`.
- **System Theme Context:** Fluid Dark Mode and Light Mode switching persisted in browser storage.

---

## 5. Technology Stack

### 5.1 Frontend
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **React** | 19.2.3 | Core UI library with component-based architecture |
| **React Router DOM** | 7.12.0 | Client-side routing, route guards, and history navigation |
| **Tailwind CSS** | 3.4.19 | Utility-first styling with responsive grid and dark mode support |
| **Axios** | 1.13.5 | Promise-based HTTP client with request/response interceptors |
| **Lucide React & React Icons** | Latest | Modern vector iconography |
| **Context API** | Native | Global authentication and theme state management |

### 5.2 Backend
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Node.js** | v20+ LTS | Asynchronous event-driven server runtime |
| **Express.js** | 5.2.1 | Minimalist web application framework for RESTful APIs |
| **MongoDB & Mongoose** | 9.2.0 | Schema-based NoSQL database modeling and querying |
| **JSON Web Token (JWT)** | 9.0.3 | Stateless token-based user authentication |
| **bcryptjs** | 3.0.3 | Password hashing with cryptographic salt |
| **dotenv** | 17.2.4 | Centralized environment variable management |
| **Nodemailer** | 6.10.1 | Automated transactional emails (verification, reset links) |
| **CORS** | 2.8.6 | Cross-origin resource sharing protection |

### 5.3 AI & Cloud Services
| Service | Purpose |
| :--- | :--- |
| **OpenRouter API** | Unified gateway for Meta Llama 3.3 70B & Gemini Flash models |
| **MongoDB Atlas** | Fully managed cloud database cluster |
| **Vercel** | Optimized global CDN hosting for frontend React SPA |
| **Render** | Cloud hosting for Node.js backend REST service |

---

## 6. Database Schema Design

### 6.1 User Model (`User.js`)
```javascript
{
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, default: "" },
  education: { type: String, default: "12th" },
  stream: { type: String, default: "" },
  bio: { type: String, default: "" },
  isVerified: { type: Boolean, default: false },
  role: { type: String, enum: ["user", "mentor", "admin"], default: "user" },
  
  // Longitudinal Assessment History
  assessmentHistory: [
    {
      date: { type: Date, default: Date.now },
      assessmentType: { type: String, default: "Comprehensive Career Assessment" },
      summary: { type: String },
      topCareer: { type: String },
      matchPercentage: { type: Number },
      careers: [
        {
          title: String,
          matchPercent: Number,
          whyItFits: String,
          stream: String,
          skillsToLearn: [String],
          topColleges: [String]
        }
      ]
    }
  ],

  // Saved Milestones & Pathways
  careerPaths: [
    {
      careerName: { type: String, required: true },
      education: { type: String },
      stream: { type: String },
      matchPercentage: { type: Number },
      addedDate: { type: Date, default: Date.now }
    }
  ]
}
```

### 6.2 Career Model (`Career.js`)
```javascript
{
  careerName: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  shortDescription: { type: String },
  description: { type: String },
  salaryRange: {
    entry: { type: String },
    average: { type: String },
    senior: { type: String }
  },
  educationRequired: { type: String },
  jobOutlook: { type: String },
  exams: [String],
  topColleges: [String],
  skillsNeeded: [String],
  roadmap: [
    {
      stage: { type: String },
      title: { type: String },
      description: { type: String },
      duration: { type: String }
    }
  ]
}
```

---

## 7. API Reference

### 7.1 Authentication (`/api/auth`)
- `POST /register`: Register a new user with encrypted password.
- `POST /login`: Validate credentials and return signed JWT.
- `GET /verify-email/:token`: Verify user account via email link.
- `POST /forgot-password`: Send password reset link to user email.
- `POST /reset-password/:token`: Update password with valid reset token.

### 7.2 Career Guidance & Assessments (`/api/assessment`)
- `GET /generate-all`: Generate 10 randomized psychometric assessment questions with trait options.
- `POST /final-result`: Evaluate all user answers, rank traits, and return 5 tailored career matches.
- `GET /history`: Fetch user’s past assessment records chronologically.

### 7.3 Career Library (`/api/careers`)
- `GET /`: Retrieve all careers with domain filtering and search queries.
- `GET /:id`: Fetch complete career details by MongoDB ID.
- `GET /by-name/:careerName`: Fetch career details by name with regex fallback matching.

### 7.4 Profile & Goals (`/api/profile`)
- `GET /`: Retrieve authenticated user's profile, history, and goals.
- `PUT /`: Update profile details (education, stream, bio, phone).
- `POST /career-path`: Add a selected career track to the user's milestone timeline.
- `DELETE /career-path/:id`: Remove a career track from the milestone timeline.

---

## 8. Directory Structure

```
careerviewx/
├── backend/                        # Node.js & Express.js REST API
│   ├── config/
│   │   └── db.js                   # MongoDB Atlas Mongoose connection
│   ├── middleware/
│   │   └── authMiddleware.js       # JWT header token verification
│   ├── models/
│   │   ├── Career.js               # Career encyclopedia schema
│   │   ├── Question.js             # Baseline assessment question schema
│   │   └── User.js                 # User profile, history & roadmap schema
│   ├── routes/
│   │   ├── assessment.js           # Dynamic AI question & evaluation routes
│   │   ├── authRoutes.js           # Registration, login & reset routes
│   │   ├── careers.js              # Career search, filter & detail routes
│   │   └── profileRoutes.js        # User profile & saved pathway routes
│   ├── seeds/
│   │   ├── careers.js              # Seed dataset for careers
│   │   └── questions.js            # Seed dataset for baseline questions
│   ├── utils/
│   │   └── openrouter.js           # OpenRouter LLM inference integration
│   ├── .env.example                # Sample environment configuration
│   ├── package.json                # Backend dependencies and scripts
│   └── server.js                   # Server entrypoint and CORS setup
│
├── frontend/                       # React 19 Single Page Application
│   ├── public/
│   │   ├── index.html              # HTML template
│   │   └── logo.png                # Platform branding asset
│   ├── src/
│   │   ├── assets/                 # Platform images and icons
│   │   ├── components/
│   │   │   ├── cards/              # Career, course, and news cards
│   │   │   ├── InternalNavbar.jsx  # Universal Left Sidebar navigation
│   │   │   ├── MentorMarketplace.jsx # Mentor discovery & booking module
│   │   │   ├── SearchBar.jsx       # Real-time search with dropdown
│   │   │   └── Skeleton.jsx        # Smooth content loading skeletons
│   │   ├── context/
│   │   │   ├── AuthContext.jsx     # Authentication state provider
│   │   │   └── ThemeContext.jsx    # Dark/light mode theme provider
│   │   ├── pages/
│   │   │   ├── AllCareers.jsx      # Career encyclopedia directory
│   │   │   ├── Assessment.jsx      # Interactive 10-step assessment
│   │   │   ├── AssessmentsHub.jsx  # Assessment history & analytics hub
│   │   │   ├── CareerPage.jsx      # Detailed single career view
│   │   │   ├── CareerPaths.jsx     # Visual milestone career timeline
│   │   │   ├── CareerResult.jsx    # Assessment result & match cards
│   │   │   ├── Dashboard.jsx       # Student central workspace
│   │   │   ├── Login.jsx           # Sign in view
│   │   │   ├── Mentors.jsx         # Mentor marketplace view
│   │   │   ├── Profile.jsx         # Student profile details
│   │   │   └── Settings.jsx        # Account settings view
│   │   ├── Services/
│   │   │   ├── api.js              # Axios centralized API methods
│   │   │   └── newsService.js      # Curated educational news handler
│   │   ├── App.js                  # Route definitions and layouts
│   │   ├── index.css               # Tailwind CSS imports and custom rules
│   │   └── index.js                # React root mount
│   ├── package.json                # Frontend dependencies and scripts
│   └── tailwind.config.js          # Tailwind theme and plugin setup
│
├── docs/                           # Extended architectural guides
│   ├── API_REFERENCE.md            # In-depth API endpoint reference
│   ├── DATABASE.md                 # MongoDB schema and indexing reference
│   ├── DEPLOYMENT.md               # Production deployment manual
│   ├── SETUP_GUIDE.md              # Local development guide
│   └── STRUCTURE.md                # Repository layout documentation
│
├── CareerviewX_Technical_Paper_Report.md   # Academic project report (Markdown)
├── CareerviewX_Technical_Paper_Report.html # Print-ready academic paper (HTML/PDF)
├── PROJECT_DESCRIPTION.md                  # Comprehensive project documentation
└── README.md                               # Primary repository overview
```

---

## 9. Local Setup & Execution Guide

### 9.1 Prerequisites
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher
- **MongoDB Atlas Database URI** (or local MongoDB server)
- **OpenRouter API Key** (for dynamic AI assessment generation)

### 9.2 Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/VrajDobariya82/careerviewx.git
   cd careerviewx
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### 9.3 Environment Configuration
Create a `.env` file in the `backend/` directory:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/careerviewx?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
OPENROUTER_API_KEY=your_openrouter_api_key_here
FRONTEND_URL=http://localhost:3000
```

Create a `.env` file in the `frontend/` directory (optional for custom API host):
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 9.4 Database Seeding
Populate the database with initial career tracks and baseline questions:
```bash
cd backend
npm run seed:all
```

### 9.5 Running Development Servers
Open two terminal windows:

* **Terminal 1 (Backend API Server):**
  ```bash
  cd backend
  node server.js
  ```
  *Server starts on `http://localhost:5000`*

* **Terminal 2 (Frontend Client):**
  ```bash
  cd frontend
  npm start
  ```
  *Application opens automatically on `http://localhost:3000`*

---

## 10. Key Project Highlights & Contributions

1. **End-to-End Dynamic Evaluation:** Completely eliminates rigid, repetitive career quizzes by pairing Fisher-Yates angle shuffling with LLM trait synthesis.
2. **Deterministic Fallbacks:** Engineered with multiple safety barriers, regex partial-matching, and curated fallback sets to ensure zero crashes or 404 network errors.
3. **Unified Responsive UI:** Implemented a universal left sidebar across all desktop views with fluid transition to mobile drawers, eliminating layout shifting.
4. **Actionable Outcomes:** Bridges assessment results directly with step-by-step milestone roadmaps and direct mentor connectivity.

---

## 11. Author & Project Metadata

- **Author:** Vraj Dobariya
- **Email:** `dobariyavra82@gmail.com` / `d24it148@charusat.edu.in`
- **Institution:** K.D. Patel Department of Information Technology, CSPIT, CHARUSAT University
- **Course:** IT414 – Software Group Project (SGP, 7th Semester)
- **GitHub Repository:** [https://github.com/VrajDobariya82/careerviewx](https://github.com/VrajDobariya82/careerviewx)
