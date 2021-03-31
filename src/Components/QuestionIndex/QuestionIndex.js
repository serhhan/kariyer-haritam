import React from "react";

import './QuestionIndex.scss';


const QuestionIndex = ({ handleStartGame }) => (
  <div>
    <div className="IndexContainer">
      <div className="firstContainer">
        <h1>Kariyer Haritasına Hazır Olun!</h1>
        <p>Aliqua aliqua id minim ex veniam.</p>
      </div>
      <div className="secondContainer">
        <button onClick={handleStartGame}>
        Start Quiz
        </button>
      </div>
    </div>
  </div>
);

export default QuestionIndex;