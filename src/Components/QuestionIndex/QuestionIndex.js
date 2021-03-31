import React from "react";

import './QuestionIndex.scss';


const QuestionIndex = ({ handleStartGame }) => (
  <div>
    <div className="IndexContainer">
      <div className="firstContainer">
        <h1>Kariyer Haritası Test Bölümü!</h1>
        <p>Aliqua aliqua id minim ex veniam.</p>
      </div>
      <div className="secondContainer">
        <button onClick={handleStartGame}>
          <span>Start</span>
        </button>
      </div>
    </div>
  </div>
);

export default QuestionIndex;