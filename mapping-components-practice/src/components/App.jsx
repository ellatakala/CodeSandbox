import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function showEmoji(emojiped) {
  return (
    <Entry
      key={emojiped.id}
      emoji={emojiped.emoji}
      name={emojiped.name}
      meaning={emojiped.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(showEmoji)}
    </div>
  );
}

export default App;
