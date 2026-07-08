<div align="center">
  <img src="Angle-AI/logo.png" alt="Angel AI Logo" width="150" height="150" />
  <h1>Angel AI — Personal Safety & Guardian Companion</h1>
  <p><strong>An enterprise-grade, proactive personal safety web and mobile application powered by AI de-escalation coaching, covert emergency triggers, and tamper-proof evidence archiving.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
    <img src="https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-4.21-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
    <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/Firebase-Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
    <img src="https://img.shields.io/badge/Platform-Web%20%7C%20Android%20%7C%20iOS-4CAF50?style=for-the-badge" alt="Platforms" />
  </p>
</div>

---

## 🌟 Executive Summary

**Angel AI** is a state-of-the-art personal safety companion designed to provide seamless protection, proactive journey monitoring, and instant crisis de-escalation. 

### Why It Exists
Personal safety remains a paramount concern globally. Existing solutions often require overt actions (like dialing a number) which can escalate dangerous situations. Angel AI solves this by introducing covert triggers, proactive monitoring, and AI-assisted de-escalation.

### Vision & Mission
Our **vision** is a world where everyone can walk freely without fear. 
Our **mission** is to leverage cutting-edge AI, cloud infrastructure, and mobile hardware to build an invisible but impenetrable shield for personal safety.

---

## ✨ Features

### 🧠 AI Features
- **AI Escape Coach:** Real-time conversational agent trained in crisis de-escalation and emergency psychology.
- **AI Guardian:** Intelligent background monitoring of your journey.
- **Smart Recommendations:** Contextual prompts based on your current situation.
- **AI Safety Assistant:** Automated analysis of threats and navigation to safe havens.

### 🛡️ Safety Features
- **SOS:** Instant alerting to emergency contacts.
- **Hidden SOS:** Covert triggers (rapid clicks, shaking) to dispatch help silently.
- **Guardian Mode:** Countdown-based journey tracking.
- **Emergency Contacts:** Priority-based alert routing.
- **Live Location:** Continuous background GPS monitoring.
- **Journey Tracking:** ETA calculation and checkpoint logging.

### 📁 Evidence Features
- **Smart Evidence Vault:** AES-256 cloud-encrypted storage for media.
- **Cloud Storage:** Instant mirroring of captured evidence to prevent local deletion.
- **Timestamping:** Cryptographic stamping of time and location on all media.

### 💬 Communication
- **Dummy Call:** Scheduled, realistic simulated phone calls to escape uncomfortable situations.
- **Notifications:** In-app real-time alerts.
- **Push Notifications:** Firebase Cloud Messaging (FCM) integration.

### 🔐 Authentication
- **Google Login:** Secure OAuth 2.0 integration.
- **Phone Login:** OTP-based verification.
- **Firebase Authentication:** Enterprise-grade identity management.

### 🗄️ Database
- **Supabase PostgreSQL:** Highly scalable relational database.
- **Prisma ORM:** Type-safe database interactions and migrations.

---

## ⚡ Tech Stack

| Frontend | Backend | Database | Authentication |
| :--- | :--- | :--- | :--- |
| React 18 | Node.js (v18+) | Supabase | Firebase Auth |
| TypeScript | Express.js | PostgreSQL | Firebase Admin SDK |
| Vite 8.1 | Prisma ORM | Prisma Client | Google OAuth |
| Tailwind CSS | CORS & Helmet | Connection Pooling | JWT Tokens |

| Cloud Services | Maps & Location | AI | Development Tools |
| :--- | :--- | :--- | :--- |
| Cloudinary (Media) | Google Maps API | Google Gemini AI | Concurrently |
| Firebase (FCM) | Capacitor Geolocation | NLP Processing | Nodemon |
| Supabase Storage | Safe Haven Routing | Smart Suggestions | Vite PWA |

---

## 🏗️ Project Architecture

Angel AI follows a strict client-server architecture with a clear separation of concerns, utilizing cloud-native services for scaling.

```mermaid
graph TD
    Client[React/Vite Frontend] -->|Auth Token| Firebase[Firebase Authentication]
    Client -->|API Requests + JWT| Express[Express.js Backend]
    
    Firebase -->|Verifies User| Express
    
    Express -->|Prisma Query| Database[(Supabase PostgreSQL)]
    Express -->|Upload Media| Cloudinary[Cloudinary Vault]
    Express -->|Prompt Context| Gemini[Google Gemini AI]
    Express -->|Geo-queries| Maps[Google Maps API]
```

---

## 📁 Folder Structure

```text
Angel-AI/
│
├── Angle-AI/                     # Frontend Application (React + Vite)
│   ├── android/                  # Native Android Project
│   ├── ios/                      # Native iOS Project
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── core/api/             # API Connectors (Fetch to Backend)
│   │   ├── features/             # Feature-isolated screens (SOS, Maps)
│   │   └── platform/             # Capacitor Hardware Abstraction
│   └── package.json
│
├── backend/                      # Backend Application (Node.js + Express)
│   ├── prisma/                   # Prisma Schema & Migrations
│   ├── src/
│   │   ├── config/               # Prisma, Firebase, Cloudinary Configs
│   │   ├── controllers/          # Business Logic (Auth, SOS, Journey)
│   │   ├── middleware/           # JWT, Error Handling
│   │   └── routes/               # Express API Routes
│   └── package.json
│
├── package.json                  # Root Workspace Configuration
├── push.sh                       # Automation Script for Deployment
└── README.md                     # You are here
```

---

## 🚀 Installation Guide

### 1. Clone Repository
```bash
git clone https://github.com/mrigeshkoyande/Angle-AI.git
cd Angle-AI
```

### 2. Install Dependencies
Install everything (Root, Frontend, Backend) with one command:
```bash
npm run install:all
```

### 3. Environment Variables
Create `.env.local` in the Frontend (`Angle-AI/Angel-AI/.env.local`):
```env
VITE_FIREBASE_API_KEY="..."
VITE_FIREBASE_AUTH_DOMAIN="..."
VITE_FIREBASE_PROJECT_ID="..."
VITE_API_URL="http://localhost:5000/api"
```

Create `.env` in the Backend (`backend/.env`):
```env
PORT=5000
DATABASE_URL="postgresql://user:pass@host:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://user:pass@host:5432/postgres"
FIREBASE_PROJECT_ID="..."
FIREBASE_PRIVATE_KEY="..."
CLOUDINARY_CLOUD_NAME="..."
GEMINI_API_KEY="..."
```

### 4. Database Sync (Prisma)
```bash
cd backend
npx prisma generate
npx prisma db push
cd ..
```

### 5. Run Entire Project
Start both Frontend and Backend concurrently from the root directory:
```bash
npm run dev
```

---

## 📚 API Documentation

| Method | Route | Description | Auth Required | Expected Response |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Syncs Firebase user to PostgreSQL | Yes (Bearer) | `{ success: true, user: {...} }` |
| `POST` | `/api/sos/trigger` | Activates SOS & notifies contacts | Yes (Bearer) | `{ success: true, alertId: "123" }` |
| `POST` | `/api/journey/start` | Starts Guardian Mode journey | Yes (Bearer) | `{ success: true, journey: {...} }` |
| `POST` | `/api/vault/upload` | Uploads media to Cloudinary | Yes (Bearer) | `{ success: true, url: "..." }` |
| `POST` | `/api/escape/chat` | Interacts with Gemini AI Coach | Yes (Bearer) | `{ success: true, response: "..." }` |

---

## 🗄️ Database Schema

Angel AI uses a strictly typed relational schema via Prisma:

- **User:** Core identity, settings, and Firebase UID mapping.
- **Emergency Contacts:** Priority-based list of trusted contacts.
- **Guardian & Guardian Session:** Tracks active watchers and session lifecycles.
- **Evidence Vault:** Stores Cloudinary URLs, metadata, and timestamps.
- **Journey:** Live tracking of origin, destination, ETA, and current coordinates.
- **SOS History:** Audit trail of all triggered emergencies.
- **Dummy Call:** Scheduled fake calls and configurations.
- **Escape Coach History:** Logs of AI interactions for context awareness.

---

## 🔄 Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Firebase
    participant Backend
    participant Supabase

    User->>Frontend: Clicks "Continue with Google"
    Frontend->>Firebase: Initiates OAuth Popup
    Firebase-->>Frontend: Returns User Info & JWT Token
    Frontend->>Backend: POST /api/auth/register (Bearer Token)
    Backend->>Firebase: Verify Token (Admin SDK)
    Firebase-->>Backend: Token Valid
    Backend->>Supabase: Upsert User (Prisma)
    Supabase-->>Backend: User Record
    Backend-->>Frontend: 200 OK (User Synced)
```

---

## 🧠 AI Workflow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Gemini AI

    User->>Frontend: Types: "I think I am being followed"
    Frontend->>Backend: POST /api/escape/chat
    Backend->>Gemini AI: Injects context (Location, Night time) + User Prompt
    Gemini AI-->>Backend: Returns De-escalation tactics & Actions
    Backend-->>Frontend: Renders Action Chips (Call 911, Share Location)
    Frontend-->>User: Displays Tactical Guidance
```

---

## 🔒 Security Features

- **JWT Verification:** All backend routes are protected by Firebase Admin Token verification.
- **Helmet.js:** Secures Express apps by setting various HTTP headers.
- **CORS:** Strictly configured to accept requests only from the verified frontend origin.
- **Environment Variables:** Complete isolation of secrets from the source code.
- **Prisma Security:** Prevents SQL injection by using parameterized queries automatically.

---

## 🚀 Performance Optimizations

- **Connection Pooling:** Supabase PgBouncer integration via `DATABASE_URL` for handling massive concurrent requests.
- **Vite PWA:** Service worker caching for lightning-fast frontend loads and offline capabilities.
- **Singleton Prisma Client:** Prevents exhausting connection limits during hot reloads in development.

---

## 🛡️ Error Handling

- **Centralized Middleware:** The backend utilizes a global `errorHandler.js` to catch all async errors and format them consistently.
- **Graceful Shutdown:** Prisma client disconnects safely on `SIGTERM` and `SIGINT`.
- **Frontend Fallbacks:** Axios/Fetch interceptors automatically handle 401 Unauthorized errors and trigger re-authentication.

---

## 📸 Screenshots

*(Replace with actual image links)*
| Dashboard | Guardian Mode | AI Escape Coach |
| :---: | :---: | :---: |
| <img src="https://via.placeholder.com/250x500?text=Dashboard" width="250" /> | <img src="https://via.placeholder.com/250x500?text=Guardian+Mode" width="250" /> | <img src="https://via.placeholder.com/250x500?text=AI+Coach" width="250" /> |

---

## 🔮 Future Roadmap

- [ ] **Voice-Activated SOS:** Trigger alerts using custom safe words.
- [ ] **Hardware Integration:** Wearable bluetooth ring for invisible triggers.
- [ ] **Mesh Networking:** Peer-to-peer SOS transmission without cellular data.
- [ ] **Predictive Crime Mapping:** Real-time risk analysis based on municipal data.

---

## 🤝 Contributing Guide

We welcome contributions to make Angel AI even safer!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingSafetyFeature`)
3. Commit your Changes (`git commit -m 'feat: add amazing safety feature'`)
4. Push to the Branch (`git push origin feature/AmazingSafetyFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and developed for personal safety and educational purposes. Distributed under the **MIT License**.

---

## 🧑‍💻 Authors

**Built with ❤️ by Mrigesh Koyande & the Angel AI Engineering Team**

---

## 🙏 Acknowledgements

- [React](https://reactjs.org/) & [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- [Supabase](https://supabase.com/) & [Prisma](https://www.prisma.io/)
- [Firebase](https://firebase.google.com/)
- [Google Gemini AI](https://deepmind.google/technologies/gemini/)
- [Cloudinary](https://cloudinary.com/)
