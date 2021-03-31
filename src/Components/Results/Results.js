import React from "react";
import table from "../../NormTable"
import ResultChart from "./ResultChart"
function Results({ sozelPoint, sayisalPoint, uzayPoint, gozElKPoint, fenPoint, sosyalPoint, iknaPoint, dilPoint,
  ticaretPoint, ziraatPoint, mekanikPoint, isAyrintiPoint, edebiyatPoint, sanatPoint, muzikPoint, sosyalYardimPoint }) {

  return (
    <div>
      <div classname="container">
        {/* <div className="result-texts">
          <h3>Results</h3>
          <p>Your sozel score: {sozelPoint}</p>
          <p>Your sozel yüzdelik: {table[sozelPoint]["SÖZEL"]}</p>
          <p>Your sayisal score: {sayisalPoint}</p>
          <p>Your sayisal yüzdelik: {table[sayisalPoint]["SAYISAL"]}</p>
          <p>Your uzay score: {uzayPoint}</p>
          <p>Your uzay yüzdelik: {table[uzayPoint]["ŞEKİL- UZAY"]}</p>
          <p>Your goz el score: {gozElKPoint}</p>
          <p>Your goz el yüzdelik: {table[gozElKPoint]["GÖZ-EL KOORD."]}</p>
          <p>Your fen score: {fenPoint}</p>
          <p>Your fen yüzdelik: {table[fenPoint]["FEN BİL."]}</p>
          <p>Your sosyal score: {sosyalPoint}</p>
          <p>Your sosyal yüzdelik: {table[sosyalPoint]["SOSYAL BİL."]}</p>
          <p>Your ikna score: {iknaPoint}</p>
          <p>Your ikna yüzdelik: {table[iknaPoint]["İKNA"]}</p>
          <p>Your dil score: {dilPoint}</p>
          <p>Your dil yüzdelik: {table[dilPoint]["Y. DİL"]}</p>
          <p>Your ticaret score: {ticaretPoint}</p>
          <p>Your ticaret yüzdelik: {table[ticaretPoint]["TİCARET"]}</p>
          <p>Your ziraat score: {ziraatPoint}</p>
          <p>Your ziraat yüzdelik: {table[ziraatPoint]["ZİRAAT"]}</p>
          <p>Your mekanik score: {mekanikPoint}</p>
          <p>Your mekanik yüzdelik: {table[mekanikPoint]["MEKANİK"]}</p>
          <p>Your is ayrinti score: {isAyrintiPoint}</p>
          <p>Your is ayrinti yüzdelik: {table[isAyrintiPoint]["İŞ AYRINTI"]}</p>
          <p>Your edebiyat score: {edebiyatPoint}</p>
          <p>Your edebiyat yüzdelik: {table[edebiyatPoint]["EDEBİYAT"]}</p>
          <p>Your sanat score: {sanatPoint}</p>
          <p>Your sanat yüzdelik: {table[sanatPoint]["SANAT"]}</p>
          <p>Your muzik score: {muzikPoint}</p>
          <p>Your muzik yüzdelik: {table[muzikPoint]["MÜZİK"]}</p>
          <p>Your sosyal yardim score: {sosyalYardimPoint}</p>
          <p>Your sosyal yüzdelik: {table[sosyalYardimPoint]["SOSYAL YARD."]}</p>
          </div> */}
        
        <ResultChart sozelPercentange = {table[sozelPoint]["SÖZEL"]}
                     sayisalPercentage = {table[sayisalPoint]["SAYISAL"]}
                     uzayPercentage = {table[uzayPoint]["ŞEKİL- UZAY"]}
                     gozElPercentage = {table[gozElKPoint]["GÖZ-EL KOORD."]}
                     fenPercentage = {table[fenPoint]["FEN BİL."]}
                     sosyalPercentage = {table[sosyalPoint]["SOSYAL BİL."]}
                     iknaPercentage = {table[iknaPoint]["İKNA"]}
                     dilPercentage = {table[dilPoint]["Y. DİL"]}
                     ticaretPercentage = {table[ticaretPoint]["TİCARET"]}
                     ziraatPercantage = {table[ziraatPoint]["ZİRAAT"]}
                    mekanikPercantage = {table[mekanikPoint]["MEKANİK"]}
                    isAyrintiPercentage = {table[isAyrintiPoint]["İŞ AYRINTI"]}
                    edebiyatPercentage = {table[edebiyatPoint]["EDEBİYAT"]}
                    sanatPercentage =  {table[sanatPoint]["SANAT"]} 
                    muzikPercentage = {table[muzikPoint]["MÜZİK"]}
                    sosyalYardimPercentage = {table[sosyalYardimPoint]["SOSYAL YARD."]}/>
        <button>Play Again</button>
      </div>
    </div>
  );
}

export default Results;