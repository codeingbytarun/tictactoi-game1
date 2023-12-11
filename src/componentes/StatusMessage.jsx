/* eslint-disable react/prop-types */

const StatusMessage = ({winner,gameBoard}) => {
    const {square,isNext} = gameBoard;
    

    const noMovesLeft =  square.every(squareValue => squareValue !==null );
     const nextPlayer = isNext ? 'X' : '0';
   
  
  const renderStatusMessage = () =>{
    if(winner){
        return (
        <div>
            Winner is {''}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
            </span>
        </div>)
    }
    if(!winner && noMovesLeft){
        return (
        <div>
            <span className="text-orange">0</span> and {''} 
            <span className="text-green">X</span> tied
            </div>
            )
    }
    if(!winner && !noMovesLeft){
        return <div>
            Next player is {''} 
            <span className={isNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
            </span>
        </div>
    }

    return null;
  }
  return (
    <div>
        <div className="status-message">{renderStatusMessage()}</div>
    </div>
  )
}

export default StatusMessage