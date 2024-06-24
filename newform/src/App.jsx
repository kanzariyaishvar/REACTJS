import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

let obj = [{
  type: "text",
  name: "username",
  place: "Enter Username...",
},
{
  type: "email",
  name: "email",
  place: "Enter Email...",
}]

function App() {

  let [arr, setArr] = useState(obj)
  const ClickToAdd = () => {
      setArr([...arr,{type:"text", place:"Enter Text..."}]);
  }
  return (
    <div className="App">
      <form action="">
        {
          arr.map((val) => {
            return(
              <input type={val.type} name={val.name} placeholder={val.place} />
            )
          })
        }
      </form>

      <button onClick={ClickToAdd}>Add</button>
    </div>
  );
}

export default App;
