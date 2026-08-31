AI-Powered Code Reviewer

An AI-powered code reviewer that analyzes code, provides feedback, and highlights potential improvements using artificial intelligence.





Features 🚀

AI-driven code analysis and review

Supports multiple programming languages

Syntax highlighting with real-time editing

Markdown-based AI review display

Built with React (Frontend) and Node.js (Backend)

Uses OpenAI API for AI-powered insights




Tech Stack 🛠️

Frontend: React, React Markdown, Highlight.js, Axios

Backend: Node.js, Express.js

AI Integration: OpenAI API

Package Management: npm





Installation & Setup 🏗️

Prerequisites

Ensure you have the following installed:

Node.js (v16+ recommended)

npm or yarn

Git

1. Clone the Repository

  git clone https://github.com/yourusername/ai-code-reviewer.git
  cd ai-code-reviewer

2. Setup Backend

  cd BackEnd
  npm install
  npm start

3. Setup Frontend

  cd ../Frontend
  npm install
  npm run dev

4. Configure API Keys

Create a .env file in BackEnd and add your OpenAI API key:

OPENAI_API_KEY=your_openai_api_key_here





Usage 📝

Start both the backend and frontend servers.

Enter your code into the editor.

Click Review to receive AI-generated feedback.




Project Structure 📁

ai-code-reviewer/
├── BackEnd/          # Node.js backend
│   ├── src/
│   │   ├── routes/   # API routes
│   │   ├── services/ # AI services
│   │   ├── app.js    # Express server setup
│   ├── package.json
│   ├── .env.example
│
├── Frontend/         # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.jsx      # Main UI
│   ├── package.json
│
├── README.md         # Project documentation
└── .gitignore        # Files to ignore in Git





Contributing 🤝

Fork the repository.

Create a new branch: git checkout -b feature-branch

Commit your changes: git commit -m "Added new feature"

Push to the branch: git push origin feature-branch

Open a Pull Request 🚀






License 📜

This project is open-source and available under the MIT License.
