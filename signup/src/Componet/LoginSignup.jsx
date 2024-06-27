import { useState } from "react"
import Swal from 'sweetalert2'


function LoginSignup() {

    const [state, setState] = useState("Signup")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginEmail, setLEmail] = useState("");
    const [loginpass, setLoginpass] = useState("");
    const [arr, setArr] = useState([]);

    const handleClick = () => {
        let obj = {
            username: name,
            email: email,
            pass: password
        }
        setArr([...arr, obj]);

        alert("Signup Sucessfull");

    }
    const handleLoginClick = () => {
        let data = arr.filter((el) => {
            return el.email == loginEmail && el.pass == loginpass
        })
        if (data.length > 0) {
            // alert("Login Successfull");
            Swal.fire({
                title: "Login Successfull",
                text: "You clicked the button!",
                icon: "success"
              });
        } else {
            // alert("Login Unsuccessfull")
            Swal.fire({
                icon: "error",
                title: "Login Unsuccessfull",
                text: "Something went wrong!",
              });
        }
    }
    return (
        <div id="main">
            <div id="inner">
            {state == "Signup" ? <div>
                <h1>Signup</h1><br />
                <label htmlFor="">Enter User Name..</label>
                <input type="text" placeholder="Enter User Name.." onChange={(d) => setName(d.target.value)} /><br /> <br />

                <label htmlFor="">Enter User Email..</label>
                <input type="email" placeholder="Enter Email.." onChange={(d) => setEmail(d.target.value)} /><br /> <br />

                <label htmlFor="">Enter User Password..</label>
                <input type="text" placeholder="Enter Password..." onChange={(d) => setPassword(d.target.value)} /><br /> <br />

                <button onClick={handleClick}>Singup</button>
                <p>Already an account ? <b onClick={() => setState("Login")}>Login</b></p>

            </div> : <div>

                <h1>Login</h1><br /><br />
                <label htmlFor="">Enter User Name..</label>
                <input type="text" placeholder="Enter email.." onChange={(e) => setLEmail(e.target.value)} /> <br /><br />

                <label htmlFor="">Enter User Password..</label>
                <input type="text" placeholder="Enter password..." onChange={(e) => setLoginpass(e.target.value)} /> <br /><br />
                
                <button onClick={handleLoginClick}>Login</button>
                <p onClick={() => setState("Signup")} className="p">Create an account ? </p>
            </div>}
            </div>
        </div>
    )
}

export default LoginSignup