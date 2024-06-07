import { useState } from "react";
import './App.css';



function Todo() {

  let [arr, setArr] = useState([])
  const [work, setWork] = useState("")

  const handleClick = () => {

    let obj = {
      work: work,
      iscomp: false,
    }

    setArr([...arr, obj])
  }
  return (
    <div id="parent">
      <div id="child">
        <div>
          <div>
            <h2>My Todo Application</h2>
          </div>
          <div>
            <div id="input">
              <input type="text" placeholder="Enter Employ Work" onChange={(el) => setWork(el.target.value)}></input>
              <button class="btn w-50" onClick={handleClick}>Add Your Work</button>
            </div>
          </div>
        </div>
        <div >
            <h2>Panding Work</h2>
          <div>
            {
              arr.map((el) => {
                return (
                  <div className="">
                    <div id="work">
                      <h2>#  {el.work}</h2>
                      <p className="">  {el.iscomp ? "Your Work Is Completed" : "Your Work Is not completed"}</p>
                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo;