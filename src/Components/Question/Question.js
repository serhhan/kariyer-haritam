import React from "react";

const Question = ({ question, index }) => {

  return (
    <>
      <p><span>{index+1}</span> - {question}</p>
    </>
  );
};

export default Question;