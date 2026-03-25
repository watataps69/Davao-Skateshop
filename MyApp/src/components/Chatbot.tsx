import { useState } from 'react'
import './Chatbot.css'

export default function Chatbot() {
  const [messages, setMessages] = useState<string[]>([
    "Hi! How can I help you?"
  ])
  const [input, setInput] = useState("")

  const suggestions = [
    "What is this site?",
    "How to use ads?",
    "Tell me about social"
  ]

  const sendMessage = (text: string) => {
    if (!text.trim()) return

    const newMessages = [...messages, "You: " + text]

    let reply = "Sorry, I don't understand."

    if (text.toLowerCase().includes("ads")) {
      reply = "Ads page helps you promote things."
    } else if (text.toLowerCase().includes("social")) {
      reply = "Social page is for connecting people."
    } else if (text.toLowerCase().includes("about")) {
      reply = "This is a demo website."
    }

    setMessages([...newMessages, "Bot: " + reply])
    setInput("")
  }

  return (
    <div className="chatbot">
      <h4>Chatbot</h4>

      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>

      <div className="suggestions">
        {suggestions.map((s, i) => (
          <button key={i} onClick={() => sendMessage(s)}>
            {s}
          </button>
        ))}
      </div>

      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here..."
        />
        <button onClick={() => sendMessage(input)}>Send</button>
      </div>
    </div>
  )
}