import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const data = useSelector((ishan) => ishan);
  // console.log(data);
  const dispatch = useDispatch()
  return (
    < >
      <h1>Bank Balance : {data}</h1>
      <button onClick={() => dispatch({ type: "withdraw" })}>Withdraw</button>
      <button onClick={() => dispatch({ type: "deposit" })}>Deposit</button>

    </>
  );
}

export default App;
