import logo from './logo.svg';
import './App.css';
import Compponet from './Componet/Compponet';

function App() {

  let count=0;
  
  const hndaleClick = () => {
    return  count =+1
  }


  return (


    <div className="App">

      <h1>hello world {count} </h1>

      <button onClick={hndaleClick}>add</button>

      <Compponet />

    </div>
  );
}

export default App;
