import { useState } from 'react'

import './App.css'

function App() {
const [count,setcount]=useState(1);


  const addValue=()=>{
    setcount((prev)=>prev+1);
    setcount((prev)=>prev+1);
    setcount((prev)=>prev+1);
    setcount((prev)=>prev+1);
  }
  const removeValue=()=>{
    setcount(count-1);
  }
// let count=15;
  return (
    <>
    <h1> It is a counter  {count}</h1>
    <button onClick={addValue}>Add Value</button>{"  "}
    <button onClick={removeValue}>remove Value</button>
    <p>It is  simpler:{count}</p>
      
    </>
  )
}

export default App
