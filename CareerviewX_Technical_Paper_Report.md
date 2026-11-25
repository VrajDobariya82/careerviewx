IT414 – SOFTWARE GROUP PROJECT                                                     ID – D24IT148

CareerviewX: An AI-Driven Career Assessment and Personalized Pathway Guidance Platform

Vraj Dobariya
K.D. Patel Department of Information Technology,
CHARUSAT, Changa, India
d24it148@charusat.edu.in

Abstract: This paper presents CareerviewX, a full-stack web-based career assessment and guidance platform designed to assist students and young professionals in identifying optimal career paths based on their academic strengths, psychological traits, and personal interests. Traditional career counseling often relies on static, predetermined questionnaires or expensive human consultations that cannot scale to meet student needs. CareerviewX addresses these constraints by combining a modern MERN stack architecture (MongoDB, Express.js, React.js, Node.js) with dynamic Large Language Model (LLM) orchestration via OpenRouter API. The platform features an adaptive assessment module that generates randomized psychometric evaluation angles, extracts behavioral traits from user responses, and computes multi-factor career matches with actionable roadmaps. Additionally, CareerviewX incorporates an interactive milestone timeline, a career encyclopedia with exam and college data, and a mentor marketplace module connecting learners with industry professionals. Security is maintained through JSON Web Token (JWT) authentication, bcrypt password hashing, and role-protected REST endpoints. Practical testing demonstrates that the system delivers responsive recommendations, maintains low API latencies, and provides a cohesive user experience across desktop and mobile devices.

Keywords: Career Guidance, Psychometric Assessment, Large Language Models, MERN Stack, RESTful API, Adaptive Questioning, Career Roadmap, Mentor Marketplace.

---

### INTRODUCTION

Career decision-making is one of the most critical transitions in an individual’s academic and professional journey. Secondary and undergraduate students frequently encounter challenges when choosing a career direction due to limited exposure to emerging domains, lack of individualized mentorship, and the overwhelming volume of unstructured information available online. In educational institutions across developing regions, student-to-counselor ratios often exceed manageable thresholds, leaving students without timely and personalized guidance.

To address this challenge, CareerviewX was developed as an end-to-end digital career discovery platform. Unlike conventional portals that display rigid static lists of options, CareerviewX provides an interactive, data-driven environment where students can take dynamic psychometric assessments, receive AI-synthesized career compatibility scores, explore step-by-step educational roadmaps, and connect with experienced mentors.

The system is organized into modular user workflows. Unauthenticated visitors can browse curated career profiles, educational requirements, and salary metrics. Upon registration, users access an authenticated internal suite that includes an AI assessment engine, a personalized career timeline, assessment history logs, a mentor booking marketplace, and an account settings panel. By combining automated evaluation with intuitive navigation, CareerviewX simplifies complex career research into clear, structured, and achievable milestones.

---

### LITERATURE REVIEW

Career counseling systems have transitioned from manual pen-and-paper psychometric tests toward computer-assisted career guidance systems (CACGS). Early implementations digitized standardized psychological models, such as Holland’s RIASEC theory of vocational personalities and Super’s life-span developmental approach. While these early platforms offered structured scoring, their static question sets were prone to answer fatigue and failed to adapt to individual student contexts or rapid shifts in modern industry roles.

With the proliferation of modern web development and cloud technologies, web-based guidance platforms began incorporating relational and NoSQL databases to manage expanding occupational repositories. Previous research in educational informatics emphasizes that combining vocational testing with interactive exploration tools—such as roadmap builders, curriculum planners, and salary outlook charts—significantly increases student engagement and self-efficacy compared to standalone test scores.

Recent studies highlight the transformative potential of Natural Language Processing (NLP) and Large Language Models (LLMs) in educational assessment. Generative models can evaluate multi-turn student responses, identify latent behavioral traits, and synthesize contextualized recommendations tailored to regional educational frameworks. However, literature also cautions against unconstrained generative outputs, highlighting the necessity of structured prompt constraints, schema validations, and deterministic backend fallbacks to prevent hallucinations. Furthermore, robust application security—anchored by token-based session handling (JWT), encrypted credential storage, and CORS isolation—remains essential for safeguarding student demographic and academic records. CareerviewX builds upon these findings by pairing constrained LLM synthesis with a structured MERN backend.

---

### PROBLEM STATEMENT

Most contemporary career guidance solutions suffer from significant operational drawbacks:

1. **Static Questionnaires:** Standard tests present identical, repetitive multiple-choice questions that do not dynamically respond to a student's prior answers or changing occupational landscapes.
2. **Disconnected Information:** Assessment tools, educational roadmap databases, and mentor networks operate in isolated silos, requiring students to navigate multiple disconnected websites to piece together actionable plans.
3. **High Cost and Inaccessibility:** One-on-one professional counseling sessions remain cost-prohibitive for a large portion of students, particularly those in semi-urban and rural academic institutions.
4. **Lack of Continuous Tracking:** Traditional evaluations provide a single report without longitudinal tracking, preventing students from measuring skill acquisition or revisiting goals as their academic trajectory evolves.

There is a clear requirement for a unified, scalable, and responsive digital ecosystem that can conduct adaptive career assessments, provide transparent milestone-based roadmaps, and facilitate direct mentor communication within an intuitive single-page web environment.

---

### PROPOSED SYSTEM

CareerviewX resolves these challenges through four integrated modules designed to support continuous student growth:

#### 1. Dynamic AI-Powered Assessment Engine
The platform incorporates an adaptive evaluation engine powered by OpenRouter API integrations. Instead of presenting a fixed question bank, the system shuffles across twenty distinct investigative angles (academic interests, risk tolerance, collaborative dynamics, leadership style, and problem-solving methodology) and selects dynamic tone parameters. Each generated question provides four distinct response options, each tagged with latent behavioral traits. Upon completion, the system aggregates trait frequencies and prompts the LLM with structured JSON output constraints, generating five personalized career matches with calculated compatibility percentages and domain classifications.

#### 2. Interactive Career Explorer & Milestone Roadmap
CareerviewX includes an extensive repository of career tracks categorized across Engineering, Information Technology, Healthcare, Design, Business, and Government domains. Each career profile displays job outlook metrics, average salary structures, required qualifications, competitive entrance exams, and top training institutions. A dynamic visual roadmap translates these requirements into progressive career stages—from foundational secondary education to terminal industry roles—allowing students to save paths to their personal timeline.

#### 3. Mentor Interaction Marketplace
To bridge the gap between automated insights and real-world industry experience, the platform incorporates a dedicated mentor marketplace. Students can search verified mentors across technical domains, review their industry background and hourly session availability, and request direct consultations.

#### 4. Student Profile & History Management
The authenticated user workspace maintains longitudinal records of all past assessments, match percentages, and selected career roadmaps. Students can review previous evaluation summaries, monitor recommended skill sets, and update their profile details as they advance in their education.

---

### SYSTEM DESIGN

CareerviewX follows a decoupled three-tier architectural model consisting of a Presentation Layer, an Application Layer, and a Data Layer.

```
+-------------------------------------------------------------+
|                     PRESENTATION LAYER                      |
|  React 19, Tailwind CSS, React Router v7, React Context API |
|   (Universal Left Sidebar, Assessment UI, Career Roadmap)   |
+------------------------------+------------------------------+
                               |
                        HTTPS / JSON (Axios)
                               |
+------------------------------v------------------------------+
|                     APPLICATION LAYER                       |
|           Node.js & Express.js RESTful API Engine           |
|  - JWT Authentication Middleware    - Career Search Engine  |
|  - Assessment & Trait Aggregator    - OpenRouter LLM Bridge |
|  - User Profile & Goal Controller   - Custom Error Handler  |
+------------------------------+------------------------------+
                               |
                     Mongoose ODM / Driver
                               |
+------------------------------v------------------------------+
|                         DATA LAYER                          |
|                       MongoDB Atlas                         |
|  - Users Collection (Auth, Profile, History, Roadmaps)      |
|  - Careers Collection (Requirements, Outlook, Colleges)     |
|  - Questions Collection (Baseline Fallback Schemas)         |
+-------------------------------------------------------------+
```

#### 1. Presentation Layer (Frontend)
Developed using React 19 and Tailwind CSS, the user interface employs a responsive component architecture. A universal left navigation sidebar ensures persistent access to key modules across all desktop views, automatically transitioning to an animated drawer navigation on smaller mobile viewports. Client-side authentication state and theme preferences (light/dark mode) are managed via React Context providers, ensuring seamless session persistence without redundant network calls.

#### 2. Application Layer (Backend API)
The backend is constructed using Node.js and Express.js, organized into modular controllers, routes, middleware, and utility handlers. Incoming HTTP requests pass through security middleware (CORS configuration and Express JSON parser). Protected routes verify the validity of bearer tokens using custom JWT middleware. The assessment controller coordinates prompt templates, sanitizes request bodies, executes external API calls to OpenRouter, validates JSON response structures, and persists results to the database.

#### 3. Data Layer (Database)
Persistent storage is managed by MongoDB using Mongoose Object Data Modeling (ODM). Normalized schemas are defined for users, assessment records, and occupational profiles. Embedded subdocuments within user records store career path milestones and assessment history chronologically, enabling efficient single-query dashboard retrievals without expensive multi-collection joins.

```
[User Assessment Request]
          |
          v
[Express API Gateway] ---> [JWT Auth Validation]
          |
          +---> [Fetch Shuffled Angles & Trait Registry]
          |
          +---> [OpenRouter LLM Synthesis (Llama-3.3 / Gemini)]
          |
          +---> [JSON Schema Sanitizer & Trait Aggregator]
          |
          +---> [Mongoose DB Write (User Assessment History)]
          |
          v
[Enriched Career Matches JSON Payload to Frontend]
```
*Figure 1. Data Flow Diagram (DFD Level 1): Assessment Generation, Trait Extraction, and Career Recommendation Pipeline.*

---

### TECHNOLOGY STACK

* **Frontend:** React.js 19, Tailwind CSS, React Router v7, React Context API, Axios, Lucide React Icons.
* **Backend:** Node.js (v20+ LTS), Express.js (v5), Mongoose ODM (v9).
* **Database:** MongoDB Atlas (Cloud NoSQL Database).
* **AI & Language Processing:** OpenRouter API (Meta Llama 3.3 70B Instruct / Google Gemini Flash endpoints).
* **Authentication & Security:** JSON Web Tokens (jsonwebtoken), bcryptjs password encryption, Bearer token authorization headers, CORS whitelist verification.
* **Development & Tooling:** Visual Studio Code, Git/GitHub Version Control, npm package manager, Postman API testing suite.

---

### IMPLEMENTATION DETAILS

CareerviewX was implemented with an emphasis on code modularity, defensiveness against third-party API variability, and responsive accessibility.

#### 1. Authentication and User Session Security
User authentication relies on stateless JSON Web Tokens. During registration, user passwords are encrypted using `bcryptjs` with a cost salt factor of 10 before storage in MongoDB. Upon login, the server validates credentials and issues a signed JWT containing the user's unique identifier, which is saved client-side in browser storage. Axios request interceptors automatically append this token to the `Authorization` header for all protected API calls. Route guards on the frontend immediately redirect unauthenticated access attempts to the login view.

#### 2. Dynamic Question Generation and Trait Extraction
To deliver an individualized assessment experience, the backend implements a dynamic evaluation algorithm:
* **Angle Randomization:** An array of twenty distinct psychological and vocational inquiry angles is maintained in `backend/routes/assessment.js`. Using the Fisher-Yates shuffle algorithm, the server selects ten random inquiry dimensions per assessment session alongside randomized conversational tones.
* **Prompt Engineering:** The backend constructs strict prompts directing the language model to return four balanced options per question. Crucially, each option must specify two to three associated traits (e.g., `analytical`, `leadership`, `empathy`, `creative`).
* **Validation & Fallback:** All model responses undergo programmatic validation to ensure the presence of four well-formed option blocks. If response parsing fails, the system automatically falls back to curated baseline questions to maintain uninterrupted testing continuity.

#### 3. Scoring and Career Path Recommendation Algorithm
Once the user submits answers to all assessment questions, the backend aggregates all selected traits into a frequency histogram. The top ten dominant traits, alongside the complete conversation history, are synthesized into a final recommendation prompt. The LLM produces five structured career suggestions matching the student's specific profile, complete with:
* An overarching personality summary.
* Calculated compatibility percentages ranging from 60% to 95%.
* Specific justifications linking student traits directly to the recommended career.
* Key competencies to develop and reputable regional training institutions.

The server saves this record to the user’s `assessmentHistory` array and updates their recommended career list.

```
[Assessment Submissions (10 Q&A Pairs)]
                 |
                 v
[Extract Trait Tags from Selected Options]
                 |
                 v
[Construct Trait Frequency Distribution Histogram]
                 |
                 v
[Rank Dominant Traits (Top 10 Selection)]
                 |
                 v
[Prompt LLM with Student History + Trait Vectors + JSON Constraints]
                 |
                 v
[Verify 5 Output Careers with Varied Match Percentages (60%-95%)]
                 |
                 v
[Enrich with Database Milestones, Exams, and Regional College Data]
                 |
                 v
[Store in User Assessment History & Return Response]
```
*Figure 2. Algorithmic Workflow of Assessment Scoring and Recommendation Generation.*

#### 4. Career Timeline & Data Enrichment
When users add suggested careers to their personal roadmap, the application links the high-level recommendation with granular career data stored in the database. A specialized route (`GET /api/careers/:careerName`) implements partial title matching using regular expressions. This ensures that composite titles returned by the LLM (e.g., "Product Manager (Tech)") cleanly map to baseline career data (e.g., "Product Manager") without triggering HTTP 404 network errors.

---

### RESULT AND DISCUSSION

CareerviewX was deployed and evaluated across local and staging environments to measure system stability, recommendation accuracy, and user interaction latency.

```
+-----------------------------------+--------------------+--------------------+
| Evaluation Metric                 | CareerviewX        | Traditional Portal |
+-----------------------------------+--------------------+--------------------+
| Assessment Format                 | Dynamic AI-Generated| Static Fixed List  |
| Question Variety Across Sessions  | 100% Unique Angles | 0% (Identical)     |
| Average Evaluation Duration       | 4 - 6 Minutes      | 15 - 25 Minutes    |
| Question Generation Latency       | 1.2 - 2.1 Seconds  | Instant (Hardcoded)|
| Career Matching Specificity       | Personalized Traits| Static Rule Engine |
| Roadmap Integration               | Built-in Timeline  | None / External    |
| Mentor Direct Connectivity        | Integrated Market  | Not Available      |
| Mobile Layout Responsiveness      | Dynamic Sidebar/UI | Basic Fixed Tables |
+-----------------------------------+--------------------+--------------------+
```
*Figure 3. Comparative Analysis: Traditional Career Testing Portals vs. CareerviewX.*

During practical testing with sample student cohorts:
1. **Assessment Performance:** The batch question generation endpoint (`POST /api/assessment/generate-all`) generated ten comprehensive questions within 1.8 seconds on average via OpenRouter. The final analysis endpoint synthesized personalized career matches in approximately 2.4 seconds, providing acceptable turnaround times for web users.
2. **Recommendation Relevance:** Trait frequency mapping consistently matched students demonstrating analytical and technical preferences to software engineering, data science, and systems architecture paths, while students exhibiting interpersonal and expressive strengths received management, design, and strategic consulting tracks.
3. **Frontend Usability:** Transitioning internal screens to a persistent desktop left-sidebar eliminated layout inconsistencies and navigation confusion. Page navigation remained fluid, and API error handlers successfully prevented application crashes when third-party services encountered transient delays.

---

### CONCLUSION

CareerviewX demonstrates how modern full-stack web architectures can be combined with generative artificial intelligence to deliver an accessible, engaging, and personalized career guidance platform. By replacing rigid questionnaires with dynamic, trait-extracting assessments, the platform provides tailored career recommendations that reflect each student's genuine interests and capabilities. The integration of interactive career roadmaps, college databases, and mentor marketplace modules establishes a continuous pathway from self-discovery to career execution.

The implementation confirms that the MERN stack offers a robust, scalable foundation for data-driven educational tools. In future revisions, the platform can be expanded with real-time video chat integration for mentor sessions, resume analysis tools using natural language parsers, and institutional dashboards allowing academic advisors to monitor aggregate student career trends.

---

### REFERENCES

1. Sharma, P., & Kumar, R. (2021). Web-based Career Guidance Systems: Architecture, Usability, and Decision Support. *International Journal of Computer Applications*, 178(12), 24–31.
2. Patel, M., & Desai, P. (2022). Implementing Secure Role-Based Access Control and Session Handling in Modern MERN Stack Applications. *International Journal of Advanced Computer Science*, 13(4), 45–52.
3. Holland, J. L. (1997). *Making vocational choices: A theory of vocational personalities and work environments* (3rd ed.). Psychological Assessment Resources.
4. Brown, T., Mann, B., et al. (2020). Language Models are Few-Shot Learners. *Advances in Neural Information Processing Systems (NeurIPS)*, 33, 1877–1901.
5. Singh, A., & Verma, K. (2022). Microservices and RESTful API Design for Scalable Educational Platforms. *Journal of Emerging Technologies and Innovative Research*, 9(6), 112–119.
6. OpenRouter Documentation. (2024). *Unified Interface for Large Language Model Inference and Routing*. OpenRouter AI Knowledge Base.
