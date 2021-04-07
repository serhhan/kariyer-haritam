import React from "react";

import './QuestionIndex.scss';


const QuestionIndex = ({ handleStartGame }) => (
  <div className="container">
    <div className="IndexContainer">
      <div className="firstContainer">
        <h1>Akademik Benlik Kavram Ölçeği</h1>
        <p>Ölçekte ilgi ve yetenek alanlarını yansıtan faaliyetleri ne kadar başarı ile ve ne derece sıklıkla yaptığını ya da o işi yapmaktan ne derece hoşlandığını soran sorular bulunmaktadır. Senden istenen, bu soruları dikkatle okuyup, her faaliyeti ne derece başarı ile yapabildiğini veya o işten ne derece hoşlandığını belirtmen :)</p>
      </div>
      <div className="secondContainer">
        <button onClick={handleStartGame}>
          <span>Teste Başla</span>
        </button>
      </div>
    </div>
  </div>
);

export default QuestionIndex;