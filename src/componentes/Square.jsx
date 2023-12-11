/* eslint-disable react/prop-types */


const Square = ({value,onClick,isWinningSquare}) => {
  
  const colorClassName = value === 'X' ? 'text-green' :'text-orange'
  const winninClassName = isWinningSquare ? 'winning': ''
  
  return (
    <button type="button" className={`square ${ colorClassName} ${ winninClassName}`} 
    onClick={onClick }
    >
      {value}
    </button>

   
  )
}

export default Square