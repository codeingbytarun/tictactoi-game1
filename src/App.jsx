import { useState } from 'react';
import { calculateWinner } from './Winner';
import './style.scss'
import Board from './componentes/Board'
import StatusMessage from './componentes/StatusMessage';

function App() {
  const [square,setsquares] = useState(Array(9).fill(null));
  const [isNext, setNext] = useState(false);

  const winner =  calculateWinner(square)
 

  const handleSquareClick = (clickedPosition) =>{

    if (square[clickedPosition] || winner) {
      return
    }
    setsquares((currentSquare) => {
     return currentSquare.map((squareValue,position)=>{

      if(clickedPosition === position) {
        return isNext ?'X' : '0';
      } 

      return squareValue

     })
    })
    

    setNext((currentIsNext) =>! currentIsNext)
  }

  return (
    <>
     <div className='app'>
      <StatusMessage winner={winner} isNext={isNext} square={square}/>
      <Board square={square} handleSquareClick={handleSquareClick}/>
     </div>
    </>
  )
}

export default App
