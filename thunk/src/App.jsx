import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './ProductReducer/actiontype';

function App() {

  const data = useSelector((ishan) => ishan)
  console.log(data);
  const dispatch = useDispatch()

  const handleClick = () => {
    // fetchData(dispatch)
    dispatch(fetchData)
  }

  return (
    <div className="App">
      <h1>hello world</h1>

      <button onClick={handleClick}>fetchData</button>
    </div>
  );
}

export default App;
