
import Sqare from './Sqare'

// eslint-disable-next-line react/prop-types
const Board = ({square, handleSquareClick}) => {
  
  
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