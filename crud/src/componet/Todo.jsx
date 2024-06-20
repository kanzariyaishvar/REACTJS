import { useState } from "react";
import "../App.css"
function Todo() {
    const [task,setTask]=useState("");

    return(
        <div className="NewApp">
                <div className="addtask">
                    <h1>Crud Operation</h1>
                    <input type="text" placeholder="Enter Your Work..." className="form-control"/>
                    <button className="btn">Add Data</button>
                </div>
        </div>
    )
}

export default Todo;