import React from "react";
import table from "../../NormTable"
import ResultChart from "./ResultChart"
function Results({ sozelPoint, sayisalPoint, uzayPoint, gozElKPoint, fenPoint, sosyalPoint, iknaPoint, dilPoint,
  ticaretPoint, ziraatPoint, mekanikPoint, isAyrintiPoint, edebiyatPoint, sanatPoint, muzikPoint, sosyalYardimPoint, restartFunction }) {

  return (
    <div>
      <div classname="container">
        
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

        <button onClick = {restartFunction}>Play Again</button>
      </div>
    </div>
  );
}

export default Results;