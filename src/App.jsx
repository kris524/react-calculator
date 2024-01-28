import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='calc-grid'>
      <div className='calc-output'></div>
      <div className='previous-num'></div>
      <div className='curr-num'></div>
    </div>


  )
}

export default App
