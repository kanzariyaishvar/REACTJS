import HOC from "./HOC";
import '../App.css'


function Addition(props) {
    return(
        <div id="main">
            <h1>Counter 3</h1>
            <h1>{props.state}</h1>
            <button onClick={props.decrese}>DECREES</button>
            &nbsp;&nbsp;<button onClick={props.handle}>Add</button>
        </div>
    )
}
export default HOC(Addition)