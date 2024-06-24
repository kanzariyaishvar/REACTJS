import { useState } from "react"
import "../App.css"
const initial = {
    username: "",
    email: "",
    password: ""
}

function Form() {
    const [state, setState] = useState(initial);
    const [arr, setArr] = useState([]);
    const [valid, setValid] = useState(false)
    
    const chengInput = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setArr({ ...arr, state });
        setState(initial);
    }
    const chengeBlur = () => {
      console.log(state.password)
        if (state.password.length < 8) {
            setValid(true)
        }
        else {
            setValid(false)
        }
    }

    return (

        <div className="signup-form" >
            <form onSubmit={formSubmit} key={"form"}>
                <h1>SignUp Form</h1>

                <div className="form-group">
                    <label for="username">Username:</label>
                    <input type="text" value={state.username} name="username" required placeholder="Enter User Name..." className="form-control" onChange={chengInput}  />
                </div>

                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" value={state.email} name="email" required placeholder="Enter Email..." className="form-control" onChange={chengInput}  />
                </div>

                <div className="form-group ">
                    <label for="password">Password:</label>
                    <input type="password" value={state.password} name="password" required placeholder="Enter Password..."  className={valid ? "color1" : "none"} onChange={chengInput} onBlur={chengeBlur}  />
                    {valid ? <p>Please Enter 8 Character</p> : ""} 
                </div>

                <input type="submit" className="btn" />

            </form>
        </div>
    )
}

export default Form



