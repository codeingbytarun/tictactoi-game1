/* eslint-disable react/prop-types */


const Sqare = ({value,onClick}) => {
  
  return (
    <button type="button" className="square" onClick={onClick }>
      {value}
      </button>

   
  )
}

export default Sqare