import {useState} from 'react';
import "./App.css";

function CalcDisplay({display}){
  return(
    <div className="calcDisplay">
    {display}
    </div>
  );
}

function CalcButton({value, onClick}){
  return(
    <button className = "calcButton"
      onClick = {onClick}>
    {value}
    </button>
  );
}
function App(){

  const [num1,setNum1] = useState(0);
  const [disp,setDisp] = useState("Enter Code");
  const [pass] = useState(2019001605);

  const numberClickHandler =(e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
        if(num1 === 0){
          setNum1(value)
          setDisp(value);
        } 
        else{
          setNum1(num1+value)
          setDisp(disp+value);
        }
        console.log(num1 +'|'+disp +'|'+ pass);    
  }
  const clearClickHandler =() => {
    setNum1(0);
    setDisp("Enter Code");
    console.log(num1 +'|'+disp +'|'+ pass);
  }

  const enterClickHandler =() => {
    if(num1 == pass) {
      setDisp("OPEN");
      console.log(num1 +'|'+disp +'|'+ pass);
    } 
    else {
      setDisp("LOCKED");
      console.log(num1 +'|'+disp +'|'+ pass);
    }
    
  }

  return (
    <div className = "calcContainer">
      <CalcDisplay display={disp}/>
        <div className ="calcButtonsContainer">
          <CalcButton value = "7" onClick={numberClickHandler}/>
          <CalcButton value = "8" onClick={numberClickHandler}/>
          <CalcButton value = "9" onClick={numberClickHandler}/>
          <CalcButton value = "4" onClick={numberClickHandler}/>
          <CalcButton value = "5" onClick={numberClickHandler}/>
          <CalcButton value = "6" onClick={numberClickHandler}/>
          <CalcButton value = "1" onClick={numberClickHandler}/>
          <CalcButton value = "2" onClick={numberClickHandler}/>
          <CalcButton value = "3" onClick={numberClickHandler}/>
          <CalcButton value = "RESET" onClick={clearClickHandler}/>
          <CalcButton value = "0" onClick={numberClickHandler}/>
          <CalcButton value = "Enter" onClick={enterClickHandler}/> 
        </div>
    </div>
  );
}
export default App;