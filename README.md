# CodeLens AI

CodeLens AI is a full-stack AI-powered code review application that analyzes source code and provides automated feedback, bug detection, explanations, and improvement suggestions using Google Gemini.

## Features

- AI-powered source code review
- Bug and potential issue detection
- Code improvement and refactoring suggestions
- Explanation of detected problems
- Interactive code editor
- Syntax highlighting
- Markdown-formatted review output
- React-based frontend
- Node.js and Express backend
- Google Gemini API integration

## Tech Stack

### Frontend

- React.js
- Vite
- Axios
- React Simple Code Editor
- Prism.js
- React Markdown
- Rehype Highlight

### Backend

- Node.js
- Express.js
- Google Gemini API

## How It Works

1. User enters source code in the code editor.
2. The frontend sends the code to the backend through a REST API.
3. The backend sends the code to Google Gemini for analysis.
4. Gemini analyzes the code and generates a detailed review.
5. The backend returns the AI-generated review to the frontend.
6. The review is displayed in the application using Markdown formatting and syntax highlighting.

## Project Structure

```text
CodeLens-AI/
│
├── BackEnd/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── services/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── ...
│
├── .gitignore
├── README.md
├── docker-compose.yml
└── package-lock.json
```

## Environment Variables

### Backend (`BackEnd/.env`)
| Variable | Description | Default |
|---|---|---|
| `GOOGLE_GEMINI_KEY` | **(Required)** Google Gemini API Key from [Google AI Studio](https://aistudio.google.com/) | - |
| `PORT` | Server listening port | `3000` |
| `GEMINI_MODEL` | Gemini Model identifier | `gemini-1.5-flash` |

### Frontend (`Frontend/.env`)
| Variable | Description | Default |
|---|---|---|
| `VITE_BACKEND_URL` | Base URL of deployed/local backend API | `http://localhost:3000` |

---

## Local Development

### 1. Backend Setup
```bash
cd BackEnd
npm install
# Create .env and set GOOGLE_GEMINI_KEY
npm start
```

### 2. Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

---

## Deployment Guide

### Option 1: Vercel (Frontend) + Render (Backend) [Recommended]

#### A. Deploy Backend to Render
1. Go to [Render Dashboard](https://dashboard.render.com/) and click **New + > Web Service**.
2. Connect your GitHub repository `CodeLens-AI`.
3. Configure the service settings:
   - **Root Directory**: `BackEnd`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Under **Environment Variables**, add:
   - `GOOGLE_GEMINI_KEY`: Your Gemini API key from AI Studio.
   - `GEMINI_MODEL`: `gemini-1.5-flash`
5. Click **Create Web Service**. Copy the generated URL (e.g. `https://codelens-ai-backend.onrender.com`).

#### B. Deploy Frontend to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/new) and import your `CodeLens-AI` repository.
2. Configure project settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `Frontend`
3. Under **Environment Variables**, add:
   - `VITE_BACKEND_URL`: `https://codelens-ai-backend.onrender.com` (Your Render backend URL).
4. Click **Deploy**.

---

### Option 2: Docker & Docker Compose

Run the entire full-stack application with a single command:

```bash
# 1. Set your Gemini API key in your terminal/environment
export GOOGLE_GEMINI_KEY="your_api_key_here"

# 2. Build and start containers
docker compose up --build
```
- Frontend will be accessible at: `http://localhost:8080`
- Backend will be running at: `http://localhost:3000`