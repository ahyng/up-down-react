import { useState } from "react";
import "./style.css";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 89 + 10));
  const [inputNum, setInputNum] = useState('');
  const [upDown, setUpDown] = useState("1부터 100까지의 수를 맞춰보세요!");
  const [reset, setReset] = useState(false);

  const getInput = (event) => {
    setInputNum(event.target.value);
  }

  const resetGame = () => {
    setNumber(Math.floor(Math.random() * 99 + 1));
    setReset(false);
    setUpDown("1부터 100까지의 수를 맞춰보세요!");
  }

  const guessNum = (event) => {
    event.preventDefault();
    console.log(inputNum);

    if (inputNum == "" || inputNum <= 0 || inputNum > 100){
      alert("1부터 100까지의 수를 입력해주세요!");
      
    } else {
      if (inputNum == number){
        setUpDown(`${inputNum} 정답!`);
        setReset(true);
      }
      else if (inputNum > number) {
        setUpDown("Down");
      } else {
        setUpDown("Up");
      }
    }

    setInputNum("");
    
  }

  return (
    <div className="total">
      <h4 className="title">Up and Down</h4>
      <div className="App">
        {reset ? 
          <div>
            <h3>{upDown}</h3> 
            <button onClick={resetGame}>reset</button>
          </div>

          : 
          
          <form onSubmit={guessNum}>
            <input className="inputBox" value={inputNum} type="number" onChange={getInput}/>
            <button>enter</button>
            <h4>{upDown}</h4>
          </form>
        }
        
      </div>
    </div>
  );
}

export default App;
