import HOC from "./HOC"
import '../App.css'

function Counter_2(props) {

        return(
            <div id="main">
            <h1>Counter 2</h1>
            <h1>{props.state}</h1>
            <button onClick={props.decrese}>DECRESE</button>
        </div>
        )
}

export default HOC( Counter_2)