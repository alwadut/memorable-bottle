import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Bottols from './components/bottols/Bottols'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>memoriable water bottle </h1>
      <Header></Header>
      <Bottols></Bottols>
      
    </>
  )
}

export default App
