import React from "react";
import Question from "./Question";
import Options from "./Options";
const QuestionContainer = ({
  question,
  handleIndex,
  index,
  calculatePoint,
  fields
}) => {
  return (
    <div>
      <Question question={question} index = {index}/>
      <Options handleIndex = {handleIndex} calculatePoint = {calculatePoint} fields = {fields} index ={index}/>
    </div>
  );
};

export default QuestionContainer;
