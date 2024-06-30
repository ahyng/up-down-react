import { useState } from "react";
import "./style.css";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 89 + 10));
  const [inputNum, setInputNum] = useState("");
  const [upDown, setUpDown] = useState("1부터 100까지의 수를 맞춰보세요!");
  const [reset, setReset] = useState(false);
  const [count, setCount] = useState(0);
  const [gameOverCheck, setGameOver] = useState(false);

  const getInput = (event) => {
    if (isNaN(event.target.value)) {
      alert('1부터 100까지의 수를 입력해주세요!');
    } else if (event.target.value == ''){
      setInputNum('');
    } else {
      setInputNum(Number(event.target.value));
    }
  }

  const resetGame = () => {
    setNumber(Math.floor(Math.random() * 99 + 1));
    setReset(false);
    setCount(0);
    setGameOver(false);
    setUpDown("1부터 100까지의 수를 맞춰보세요!");
  }

  const gameOver = () => {
    setUpDown(`Game Over! ( 정답 : ${number} )`);
    setGameOver(true);
    setReset(true);
  }

  const guessNum = (event) => {
    event.preventDefault();
    
    if (!(inputNum >= 1 && inputNum <= 100)){
      alert("1부터 100까지의 수를 입력해주세요!");
    } 
    else {

      setCount((current) => (current + 1));

      if (count === 9) {
        gameOver();
      }

      else if (inputNum === number){
        setUpDown(`${number} 정답!`);
        setReset(true);
        setGameOver(true);
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
            <h3 className="guide">{upDown}</h3> 
            <button onClick={resetGame}>reset</button>
          </div>

          : 
          
          <form onSubmit={guessNum}>
            <input className="inputBox" value={inputNum} onChange={getInput}/>
            <button>enter</button>
            <h4 className="guide">{upDown}</h4>
          </form>
        }

        { gameOverCheck ? null : <h6 className="gameCount">남은 기회 : {count === 9 ? <span style={{color : 'rgb(192, 0, 0)'}}>{10 - count}</span> : <span>{10 - count}</span>}</h6>}
        
      </div>
    </div>
  );
}

export default App;
