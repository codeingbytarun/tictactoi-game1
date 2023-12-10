import { useState } from 'react';
import { calculateWinner } from './Winner';
import './style.scss'
import Board from './componentes/Board'

function App() {
  const [square,setsquares] = useState(Array(9).fill(null));
  const [isNext, setNext] = useState(false);

  const winner =  calculateWinner(square)
  const nextPlayer = isNext ? 'x' : '0';
  const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`
  

  const handleSquareClick = (clickedPosition) =>{

    if (square[clickedPosition] || winner) {
      return
    }
    setsquares((currentSquare) => {
     return currentSquare.map((squareValue,position)=>{

      if(clickedPosition === position) {
        return isNext ?'x' : '0';
      } 

      return squareValue

     })
    })
    

    setNext((currentIsNext) =>! currentIsNext)
  }

  return (
    <>
     <div className='app'>
      <h2>{statusMessage}</h2>
      <Board square={square} handleSquareClick={handleSquareClick}/>
     </div>
    </>
  )
}

export default App
