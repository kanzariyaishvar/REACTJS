import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const data = useSelector((ishan) => ishan)

  console.log(data);


  const dispatch = useDispatch()

  return (
    <div className="App">

      <h1>MyCounter :{data}</h1>

      <button onClick={dispatch({type:"withdraw"})}>inc</button>
      <button onClick={dispatch({type:"diposit"})}>dec</button>
    </div>
  );
}

export default App;
