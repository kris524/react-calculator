import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Wrapper } from './components/wrapper'
import { Screen } from './components/screen'

function App() {

  return <Wrapper screen={<Screen/>}/>
}

export default App
