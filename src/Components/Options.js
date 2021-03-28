import React from "react";

const Options = ({handleIndex, calculatePoint, fields, index}) => {

  return (
<div>
      <button  onClick={() => { handleIndex();
                                calculatePoint(fields[index],4)}}>Her zaman</button>
      <button  onClick={() =>{ handleIndex(); 
                               calculatePoint(fields[index],3)}}>Sık Sık</button>
      <button  onClick={() => { handleIndex(); 
                                calculatePoint(fields[index],2)}}>Ara Sıra</button>
      <button  onClick={() => { handleIndex(); 
                                calculatePoint(fields[index],1)}}>Hiçbir Zaman</button>
    </div>
  );
};

export default Options;
