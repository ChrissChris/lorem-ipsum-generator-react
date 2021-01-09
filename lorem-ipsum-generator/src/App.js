import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data);
  };
  return (
    <section className="section-center">
      <h3>Lorem ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraph:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </form>
    </section>
  );
}

export default App;
