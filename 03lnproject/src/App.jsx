// import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>WelcomeTailwing</h1>
      <Card username="Surya" />
      <Card />
      <Card />
      <p>ThankYou</p>
    </>
  )
}

export default App
