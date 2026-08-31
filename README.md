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

### Backend
- Node.js
- Express.js
- Google Gemini API

## How It Works

1. User enters source code in the editor.
2. The frontend sends the code to the backend.
3. The backend sends the code to Google Gemini.
4. Gemini analyzes the code and generates a review.
5. The backend returns the review to the frontend.
6. The review is displayed in the application.

## Project Structure

CodeLens-AI/
├── BackEnd/
├── Frontend/
├── .gitignore
└── README.md

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Osheen145/CodeLens-AI.git
cd CodeLens-AI