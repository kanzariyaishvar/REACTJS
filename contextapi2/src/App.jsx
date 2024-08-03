import { useContext } from 'react';
import './App.css';
import {MyContext} from "../src/Api/MyApi"


function App() {

  const data=useContext(MyContext)
  console.log(data);


  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
