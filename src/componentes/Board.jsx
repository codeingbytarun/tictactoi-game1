
import Square from './Square'

// eslint-disable-next-line react/prop-types
const Board = ({square, handleSquareClick}) => {
  
  
  const renderSquare = ( position) =>{
    return (
      <Square 
      value={square[position]} 
      onClick={()=> handleSquareClick(position)}
       />
    )
  }
  return (
    <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>

    </div>
  )
}

export default Board