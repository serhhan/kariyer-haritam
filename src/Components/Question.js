import React from "react";

const Question = ({ question, index }) => {

  return (
    <>
      <p>{question} <span>{index+1}</span></p>
    </>
  );
};

export default Question;