import { useState } from 'react'
import './Chatbot.css'

interface Message {
  from: 'user' | 'bot'
  text: string
}

const choices = [
  { label: 'Anong oras kayo bukas?', answer: 'Bukas kami 9am-6pm! 🕘' },
  { label: 'Paano mag-order?', answer: 'I-click ang ADD TO CART tapos CHECKOUT! 🛒' },
  { label: 'Saan kayo located?', answer: 'Nandito kami sa Davao City! 📍' },
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Wassup! Pano kita matulungan? 🤙' },
  ])

  function handleChoice(choice: { label: string; answer: string }) {
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: choice.label },
      { from: 'bot', text: choice.answer },
    ])
  }

  function handleUnknown() {
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: '...' },
      { from: 'bot', text: 'Wala ko kasabot saimo dawg 😂' },
    ])
  }

  return (
    <div className="chatbot-wrapper">
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>Davao Skateshop 🛹</span>
            <span className="chatbot-close" onClick={() => setOpen(false)}>&times;</span>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-choices">
            {choices.map((choice) => (
              <button key={choice.label} onClick={() => handleChoice(choice)}>
                {choice.label}
              </button>
            ))}
            <button onClick={handleUnknown}>Iba pa</button>
          </div>
        </div>
      )}
      <div className="chatbot-toggle" onClick={() => setOpen((prev) => !prev)}>
        💬
      </div>
    </div>
  )
}