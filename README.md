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
└── package-lock.json