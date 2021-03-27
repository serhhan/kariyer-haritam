import React from "react";


const Home = ({ handleStartGame }) => (
  <div>
    <h1>Welcome to my quiz</h1>
    <p>The following quizz contains 10 questions about music in general.</p>
    <button onClick={handleStartGame}>
      Start Quiz
    </button>
  </div>
);

export default Home;