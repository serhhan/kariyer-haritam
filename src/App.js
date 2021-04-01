import react,{ useState } from 'react';
import data from './Questions';
import './App.scss';
import QuestionContainer from "./Components/QuestionContainer/QuestionContainer";
import QuestionIndex from "./Components/QuestionIndex/QuestionIndex";
import Results from "./Components/Results/Results";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import Homepage from "./Components/Homepage/Homepage";

function App() {

  const [questions,setQuestions] = useState(data);
  const [index, setIndex] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [fields, setFields] = useState(data.map(d => d.field))

  const [sozelPoint, setSozelPoint] = useState(0);
  const [sayisalPoint, setSayisalPoint] = useState(0);
  const [uzayPoint, setUzayPoint] = useState(0);
  const [gozElKPoint, setGozElKPoint] = useState(0);
  const [fenPoint, setFenPoint] = useState(0);
  const [sosyalPoint, setSosyalPoint] = useState(0);
  const [iknaPoint, setIknaPoint] = useState(0);
  const [dilPoint, setDilPoint] = useState(0);
  const [ticaretPoint, setTicaretPoint] = useState(0);
  const [ziraatPoint, setZiraatPoint] = useState(0);
  const [mekanikPoint, setMekanikPoint] = useState(0);
  const [isAyrintiPoint, setIsAyrintiPoint] = useState(0);
  const [edebiyatPoint, setEdebiyatPoint] = useState(0);
  const [sanatPoint, setSanatPoint] = useState(0);
  const [muzikPoint, setMuzikPoint] = useState(0);
  const [sosyalYardimPoint, setSosyalYardimPoint] = useState(0);

  const restartTest = () => {
    setIndex(0);
    setSozelPoint(0);
    setSayisalPoint(0);
    setUzayPoint(0);
    setGozElKPoint(0);
    setFenPoint(0);
    setSosyalPoint(0);
    setIknaPoint(0);
    setDilPoint(0);
    setTicaretPoint(0);
    setZiraatPoint(0);
    setMekanikPoint(0);
    setIsAyrintiPoint(0);
    setEdebiyatPoint(0);
    setSanatPoint(0);
    setMuzikPoint(0);
    setSosyalYardimPoint(0);

  }
  const handleStartGame = () => {
    setStartGame(!startGame);
  };

  const handleIndex = () => {
    setIndex(prevIndex => prevIndex + 1);
  };

  const calculatePoint = (field, point) =>{
    if(field === "SÖZEL"){
      setSozelPoint( p => p + point )
    }
    else if (field === "SAYISAL" ){
      setSayisalPoint( p => p + point)
    }
    else if(field === "ŞEKİL- UZAY"){
     setUzayPoint( p => p + point )
    }
    else if(field === "GÖZ-EL KOORD."){
      setGozElKPoint( p => p + point )
    }
    else if(field === "FEN BİL."){
      setFenPoint( p => p + point )
    }
    else if(field === "SOSYAL BİL."){
      setSosyalPoint( p => p + point )
    }
    else if(field === "İKNA"){
      setIknaPoint( p => p + point )
    }
    
    else if(field === "Y. DİL"){
      setDilPoint( p => p + point )
    }
    else if(field === "TİCARET"){
      setTicaretPoint( p => p + point )
    }
    else if(field === "ZİRAAT"){
      setZiraatPoint( p => p + point )
    }
    else if(field === "MEKANİK"){
      setMekanikPoint( p => p + point )
    }
    else if(field === "İŞ AYRINTI"){
      setIsAyrintiPoint( p => p + point )
    }
    else if(field === "EDEBİYAT"){
      setEdebiyatPoint( p => p + point )
    }
    else if(field === "SANAT"){
      setSanatPoint( p => p + point )
    }
    else if(field === "MÜZİK"){
      setMuzikPoint( p => p + point )
    }
    
    else if(field === "SOSYAL YARD."){
      setSosyalYardimPoint( p => p + point )
    }
    else{

    }
  };
  return (
  <div>
     <Navbar />
     <Homepage />
     <div className ="QuestionArea">
        {startGame ? "" : <QuestionIndex handleStartGame={handleStartGame} />}
        {startGame && index < questions.length ? (
          <QuestionContainer
            {...questions[index]}
            handleIndex={handleIndex}
            index = {index}
            calculatePoint ={calculatePoint}
            fields = {fields}
          />
        ) : (
          ""
        )}
      {index === 170 ? <div className="results"> 
                        <Results  sozelPoint = {sozelPoint} sayisalPoint = {sayisalPoint} 
                                  uzayPoint = {uzayPoint} gozElKPoint = {gozElKPoint}  fenPoint = {fenPoint}  
                                  sosyalPoint = {sosyalPoint} iknaPoint = {iknaPoint} dilPoint = {dilPoint}
                                  ticaretPoint = {ticaretPoint} ziraatPoint = {ziraatPoint} mekanikPoint ={mekanikPoint}  
                                  isAyrintiPoint = {isAyrintiPoint} edebiyatPoint = {edebiyatPoint}  sanatPoint = {sanatPoint} 
                                  muzikPoint = {muzikPoint} sosyalYardimPoint = {sosyalYardimPoint} restartFunction = {restartTest}/>  
                       </div> : ""}
                                
      </div>
      <AboutUs />
  </div>
  );

}

export default App;
