import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './Componet/Routes/Router'
import {db} from '../src/Firebase/Firebase'


function App() {


  return (
    <>
      <Router/>
    </>
  )
}

export default App
