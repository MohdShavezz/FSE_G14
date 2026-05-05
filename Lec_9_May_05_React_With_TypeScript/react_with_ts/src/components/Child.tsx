import React from 'react'

interface PropType{
    handleInc:()=>void,
    handleDec:()=>void,
    handleReset:()=>void,
    // count:number
}

const Child:React.FC<PropType> = ({handleInc,handleDec,handleReset}) => {
  return (
    <div>
        CHILD
      <button onClick={handleInc}>INC</button> <br />
      <button onClick={handleDec}>DEC</button> <br />
      <button onClick={handleReset}>RESET</button> <br />
    </div>
  )
}

export default Child
