import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter';

// function App() {

//   const [state, setState] = useState(0)
//   const [dishable,setdishable]=useState(true)


//   function increase() {
//     if (state<20) {
//       setState(state + 1);
//       setdishable(false)
//     }
//   }

//   function decrease() {
//     if (state>1) {
//       setState(state - 1);
//     }
//     else{
//       setState(0);
//       setdishable(true)
//     }
//   }

//   return (
//     <div className="App">
//       <div id="main">
//         <div className='child1' dishable={dishable} onClick={decrease}><button>-</button></div>
//         <div className='child2'><h3>{state}</h3></div>
//         <div className='child3' onClick={increase} id='decrese'><button>+</button></div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import './style.css';

export default function App() {
  const [state, setCount] = useState(0);
  const [disable, setDisable] = useState(true);

  const handleInc = () => {
    setCount(state + 1);
    setDisable(false);
  };
  const handledec = () => {
    if (state > 1) {
      setCount(state - 1);
    } else {
      setCount(0);
      setDisable(true);
    }
  };
  return (
    <div>
      <div id="main">
        <div><button disabled={disable} onClick={handledec}>-</button></div>
        {/* <div><h3>{state}</h3></div> */}
        <Counter  ishvar={state}/>
        <div><button onClick={handleInc}>+</button></div>
      </div>
    </div>
  );
}
