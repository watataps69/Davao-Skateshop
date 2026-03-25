import { useState, useRef, useEffect } from 'react';

const suggestionsList = [
  "Hello, how are you?",
  "What are your services?",
  "How much is the price?",
  "Contact support",
  "I want to book an appointment",
  // pwede mo idagdag pa
];

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Filter suggestions habang nagty-type
  useEffect(() => {
    if (input.trim().length > 0) {
      const filtered = suggestionsList.filter(s => 
        s.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [input]);

  const handleSelectSuggestion = (suggestion: string) => {
    setInput(suggestion);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    // dito mo ilagay ang logic para i-send ang message
    console.log("User said:", input);
    setInput("");
    setShowSuggestions(false);
  };

  return (
    <div className="chat-container">
      {/* Messages area dito */}

      <div className="chat-input-area relative">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
          placeholder="Type your message..."
          className="w-full p-4 border rounded-lg"
        />

        {/* Suggestions Dropdown */}
        {showSuggestions && (
          <div className="absolute bottom-full left-0 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => handleSelectSuggestion(suggestion)}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b last:border-none"
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}

        <button onClick={handleSend} className="...">
          Send
        </button>
      </div>
    </div>
  );
}