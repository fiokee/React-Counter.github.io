import { React, useState } from 'react'
import "./Counter.css"


function Counter(){
const [counter, setCounter ] = useState(0)
// increment the count
function addCount(){
  setCounter(counter => counter + 1 )
  
}
//decrement the count
function subtractCount(){
  setCounter(counter => counter -1)
  //this if statement removes the subtraction sign when decrement is below zero
  if(counter <= 0){
    setCounter(0)
  }
}
function reset(){
      setCounter(0)
}

    
    return(
        
        <main>
        <div className="container">
        <h1>counter</h1>
        <span id="value">{counter}</span>
        <div className="button-container">
          <button className="btn decrease" onClick={subtractCount}>decrease</button>
          <button className="btn reset" onClick={reset}>reset</button>
          <button className="btn increase" onClick={addCount}>increase</button>
        </div>
      </div>
    </main>
    
    )
}

export default Counter