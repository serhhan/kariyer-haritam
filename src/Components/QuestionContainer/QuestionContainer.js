import React from "react";
import Question from "../Question/Question";
import Options from "../Options/Options";

import "./QuestionContainer.scss"

const QuestionContainer = ({
  question,
  handleIndex,
  index,
  calculatePoint,
  fields
}) => {
  return (
    <div className="question-container">
      <div className="question">
       <Question question={question} index = {index}/>
      </div>
      <div className="option">
        <Options handleIndex = {handleIndex} calculatePoint = {calculatePoint} fields = {fields} index ={index}/>
      </div>
    </div>
  );
};

export default QuestionContainer;
