import { useState } from 'react';
import { calculateWinner } from './Winner';
import './style.scss'
import Board from './componentes/Board'
import History from './componentes/History';
import StatusMessage from './componentes/StatusMessage';

function App() {
  const [history,sethistroy] = useState([{square: Array(9).fill(null),isNext:false}])
 const [currentMove, setCurrentMove] = useState(0);

 const gameBoard = history[currentMove];

  const winner =  calculateWinner(gameBoard.square)
 
  console.log({history,currentMove})

  const handleSquareClick = (clickedPosition) =>{

    if (gameBoard.square[clickedPosition] || winner) {
      return
    }
    sethistroy((currentHistory) => {
      
      const istraversing = currentHistory + 1 !== currentHistory.length;

      const lastGameingState = istraversing
       ? currentHistory [currentMove]
       : history[ history.length - 1]


     const nextSquareState =  lastGameingState.square.map((squareValue,position)=>{

      if(clickedPosition === position) {
        return lastGameingState.isNext ?'X' : '0';
      } 

      return squareValue

     })

     const base = istraversing 
     ? currentHistory.slice(0, currentHistory.indexOf(lastGameingState) + 1 )
     : currentHistory

     return base.concat({ 
      square: nextSquareState,
      isNext:!lastGameingState.isNext, })
     })
    

   setCurrentMove(move => move + 1)
  }

  const moveTo = (move) =>{
    setCurrentMove(move)
  }
 

  return (
    <>
     <div className='app'>
      <StatusMessage winner={winner} gameBoard={gameBoard}/>
      <Board square={gameBoard.square} handleSquareClick={handleSquareClick}/>
      
      <h2>Current Game History</h2>
      <History  history={history} moveTo={moveTo} currentMove={currentMove}/>
     </div>
    </>
  )
}

export default App
