import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Counter2 from './redux/Counter2';

function App() {
  const data = useSelector((ishan) => ishan)
  // console.log(data);
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Balance {data}</h1>
      <button onClick={() => dispatch({ type: "withdraw" })}>withdraw</button>
      <button onClick={() => dispatch({ type: "deposit" })}>deposit</button>



      <Counter2 />
    </div>
  );
}

export default App;
