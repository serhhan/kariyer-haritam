import React from "react";
import Question from "../Question";
import Options from "../Options";

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
      <Question className="questions" question={question} index = {index}/>
      <Options className="options" handleIndex = {handleIndex} calculatePoint = {calculatePoint} fields = {fields} index ={index}/>
    </div>
  );
};

export default QuestionContainer;
