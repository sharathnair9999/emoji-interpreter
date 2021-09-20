import "./styles.css";
import { useState } from "react";
export default function App() {
  const [meaning, setMeaning] = useState("");
  var emojis = {
    "😊": "smiling",
    "😂": "laughing",
    "😎": "swag",
    "😜": "funny",
    "❤": "love"
  };
  var emojisWeKnow = Object.keys(emojis);
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojis[userInput];
    if (meaning === undefined) {
      meaning = "Oops, we don't have that in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    setMeaning(emojis[emoji]);
  }
  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h2>emojis we have</h2>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => {
              emojiClickHandler(emoji);
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
