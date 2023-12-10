import { useState } from 'react'
import Sqare from './Sqare'

const Board = () => {
  const [square,setsquares] = useState(Array(9).fill(null));
  const [isNext, setNext] = useState(false);

  const handleSquareClick = (clickedPosition) =>{

    if (square[clickedPosition]) {
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

  const renderSuare = ( position) =>{
    return (
      <Sqare 
      value={square[position]} 
      onClick={()=> handleSquareClick(position)}
       />
    )
  }
  return (
    <div className="board">
        <div className="board-row">
          {renderSuare(0)}
          {renderSuare(1)}
          {renderSuare(2)}
        </div>
        <div className="board-row">
          {renderSuare(3)}
          {renderSuare(4)}
          {renderSuare(5)}
        </div>
        <div className="board-row">
          {renderSuare(6)}
          {renderSuare(7)}
          {renderSuare(8)}
        </div>

    </div>
  )
}

export default Board