import { useContext } from 'react'
import './App.css'
import {MyContext} from "../src/Contextapi/Context"

function App() {

const data=useContext(MyContext)

console.log(data.state);
  return (
    <>
          <h1>hello world {data.state}</h1>
          <button onClick={()=>data.dispatch({type:"DECRES"})}>DECRES</button>                                &nbsp;&nbsp;&nbsp;
          <button onClick={()=>data.dispatch({type:"INCRES"})}>increse</button>
    </>
  )
}

export default App

