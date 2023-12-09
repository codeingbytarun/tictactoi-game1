
import Sqare from './Sqare'

const Board = () => {
  return (
    <div className="board">
        <div className="board-row">
            <Sqare value={0} />
            <Sqare value={1}/>
            <Sqare value={2}/>
        </div>
        <div className="board-row">
            <Sqare value={3}/>
            <Sqare value={4}/>
            <Sqare value={5}/>
        </div>
        <div className="board-row">
            <Sqare value={6}/>
            <Sqare value={7}/>
            <Sqare value={8}/>
        </div>

    </div>
  )
}

export default Board