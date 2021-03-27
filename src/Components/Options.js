import React from "react";

const Options = ({handleIndex, calculatePoint, fields, index}) => {

  return (
    <div>
      <button  onClick={() => { handleIndex();
                                calculatePoint(fields[index],4)}}>A (her zaman)</button>
      <button  onClick={() =>{ handleIndex(); 
                               calculatePoint(fields[index],3)}}>B</button>
      <button  onClick={() => { handleIndex(); 
                                calculatePoint(fields[index],2)}}>C</button>
      <button  onClick={() => { handleIndex(); 
                                calculatePoint(fields[index],1)}}>D</button>
    </div>
  );
};

export default Options;
