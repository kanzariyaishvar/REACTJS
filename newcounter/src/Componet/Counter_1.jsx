import HOC from "./HOC";
import '../App.css'

function Counter_1(props) {
  return (
    <div id="main">
      <h1>Counter 1</h1>
      <h1>{props.state}</h1>
      <button onClick={props.handle}>Add</button>
    </div>
  )
}
export default HOC(Counter_1);
