import React from "react";
import './Options.scss';

const Options = ({handleIndex, calculatePoint, fields, index}) => {

  return (
<div>
      <button onClick={() => { handleIndex();
                                calculatePoint(fields[index],4)}}><div className="btn-in"></div>Her Zaman</button>
      <button  onClick={() =>{ handleIndex(); 
                               calculatePoint(fields[index],3)}}><div className="btn-in"></div>Sık Sık</button>
      <button  onClick={() => { handleIndex(); 
                                calculatePoint(fields[index],2)}}><div className="btn-in"></div>Ara Sıra</button>
      <button  onClick={() => { handleIndex(); 
                                calculatePoint(fields[index],1)}}><div className="btn-in"></div>Hiçbir Zaman</button>
    </div>
  );
};

export default Options;
