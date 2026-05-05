import React, { useState } from "react"
import Child from "./Child"


const Counter:React.FC = () => {
    const [count,setCount]=useState<number>(0)
    function handleDec(){
        setCount(pre=>pre-1) 
    }
    function handleReset(){
        setCount(0) 
    }
    function handleInc(){
        // setCount(count+1)
        setCount(count=>count+1) //better
    }

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        // console.log(typeof e.target.value)
        // let x='2' +'12' => 12
        setCount(+e.target.value)
    }

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child 
      handleInc={handleInc}
      handleDec={handleDec}
      handleReset={handleReset}
      />
      <input type="text" name="munum" placeholder="enter number" onChange={handleChange}/>
    </div>
  )
}

export default Counter

// class Counter extends React.Component{
//     this.state={} 
//     this.setState()

//     render(): React.ReactNode {
//         return(
//             <>
//             <h2>lasdjfsd</h2>
//             </>
//         )
//     }
// }
