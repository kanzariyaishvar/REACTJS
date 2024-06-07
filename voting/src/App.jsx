import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [voteA,setState]=useState(0);
  const [voteB,setVoteb]=useState(0)

  const vote0=()=>{
    setState(voteA+1)
  }
  const vote1=()=>{
    setVoteb(voteB+1)
  }

  let data=voteA+voteB;
  
  return (
    <div className="App">
      <h1>Voting Task</h1>

      <div id='main'>
        <div className='child'>

          <div id='state1'>
            <div className='instaste'>
              <div><h2>Jhon</h2></div>
              <div><h2>{voteA}</h2></div>
              <div className='vote'><button onClick={vote0}>Vote</button></div>
            </div>
            
          </div>
            <h4>Total Vote :-{data}</h4>
        </div>
        <div className='child'>
          <div id='state2'>
            <div className='instaste'>
              <div><h2>Doe</h2></div>
              <div><h1>{voteB}</h1></div>
              <div className='vote'><button onClick={vote1}>Vote</button></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;