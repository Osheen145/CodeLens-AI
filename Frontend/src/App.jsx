import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

const API_URL = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/$/, '')

function App() {
  const [ code, setCode ] = useState(`function calculateTotal(price, quantity) {
  return price * quantity;
}`)

  const [ review, setReview ] = useState(``)
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    prism.highlightAll()
  }, [review])

  async function reviewCode() {
    if (loading) return
    setLoading(true)
    setReview('Analyzing code with Gemini AI...')
    try {
      const response = await axios.post(`${API_URL}/ai/get-review`, { code })
      setReview(response.data)
    } catch (error) {
      const errorMsg = error.response?.data || error.message || 'Failed to connect to the backend server.'
      setReview(`### Error\n\n${errorMsg}\n\nPlease check your backend connection and API key.`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <button
            onClick={reviewCode}
            disabled={loading}
            className="review"
            style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Reviewing...' : 'Review Code'}
          </button>
        </div>
        <div className="right">
          <Markdown
            rehypePlugins={[ rehypeHighlight ]}
          >{review || 'Click **"Review Code"** to get AI feedback on your code.'}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App
