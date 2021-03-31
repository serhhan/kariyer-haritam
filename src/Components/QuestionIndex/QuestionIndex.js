import React from "react";

import './QuestionIndex.scss';


const QuestionIndex = ({ handleStartGame }) => (
  <div>
    <div className="IndexContainer">
      <h1>Kariyer Haritasınıza Hazır Olun!</h1>
      <p>Aliqua aliqua id minim ex veniam.</p>
      <button onClick={handleStartGame}>
        Start Quiz
      </button>
    </div>
  </div>
);

export default QuestionIndex;