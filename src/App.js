import react,{ useState } from 'react';
import data from './Questions';
import './App.css';
import QuestionContainer from "./Components/QuestionContainer";
import Home from "./Components/Home";
import Results from "./Components/Results";

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
      {startGame ? "" : <Home handleStartGame={handleStartGame} />}
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
     {index === 170 ? <Results  sozelPoint = {sozelPoint} sayisalPoint = {sayisalPoint} 
                                uzayPoint = {uzayPoint} gozElKPoint = {gozElKPoint}  fenPoint = {fenPoint}  
                                sosyalPoint = {sosyalPoint} iknaPoint = {iknaPoint} dilPoint = {dilPoint}
                                ticaretPoint = {ticaretPoint} ziraatPoint = {ziraatPoint} mekanikPoint ={mekanikPoint}  
                                isAyrintiPoint = {isAyrintiPoint} edebiyatPoint = {edebiyatPoint}  sanatPoint = {sanatPoint} 
                                muzikPoint = {muzikPoint} sosyalYardimPoint = {sosyalYardimPoint} /> : ""}
  </div>
  );

}

export default App;
