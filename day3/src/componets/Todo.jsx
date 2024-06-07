import { useState } from "react"

function Todo() {
    let [arr,setArr]=useState([])
    const [work,setWork]=useState("")

    const handlechenge=(ele)=>{
        setWork(ele.target.value)
    }

    return(

        <div>
            <input type="text" onChange={handlechenge}/>
            <button>Submit</button>
        </div>
    )
};

export default Todo