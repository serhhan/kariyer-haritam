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
      <Question question={question} index = {index}/>
      <Options handleIndex = {handleIndex} calculatePoint = {calculatePoint} fields = {fields} index ={index}/>
    </div>
  );
};

export default QuestionContainer;
