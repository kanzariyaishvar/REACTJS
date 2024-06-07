import { useState } from "react";



function MyLogin() {
  const [arr, setArr] = useState([]);
  const [state, setState] = useState("Signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loginmail, setMail] = useState("");
  const [loginpass, setPassword] = useState("");

  function chenge() {
    let obj = {
      name: name,
      email: email,
      pass: pass
    }
    setArr([...arr, obj])
    console.log(obj);
  }

  function check() {
    let data = arr.filter((all) => {
      return all.email == loginmail && all.pass==loginpass 
    })

    if (data.length>0) {
      alert("Login Successfull")
    }
    else{
      alert("Login Unsuccessfull")
    }
  }

  return (
    <div>
      <h1>Hello world</h1>

      {state == "Signup" ?
        <div>
          <h1>SignUp</h1>

          <label htmlFor="">Enter User Name...</label><br />
          <input type="text" placeholder="Enter user Name.." onChange={(d) => { setName(d.target.value) }} /><br /><br />

          <label htmlFor="">Enter User Email...</label><br />
          <input type="text" placeholder="Enter user Email.." onChange={(d) => { setEmail(d.target.value) }} /><br /><br />

          <label htmlFor="">Enter User Password...</label><br />
          <input type="text" placeholder="Enter user NamePassword.." onChange={(d) => { setPass(d.target.value) }} /><br /><br />

          <button onClick={chenge}>SignUp</button>
          <p onClick={()=>{""}}></p>
        </div>

        :

        <div>
          <h1>Login</h1>

          <label htmlFor="">Enter User Email...</label><br />
          <input type="text" placeholder="Enter user Email.." onChange={(d) => { setEmail(d.target.value) }} /><br /><br />

          <label htmlFor="">Enter User Password...</label><br />
          <input type="text" placeholder="Enter user NamePassword.." onChange={(d) => { setPass(d.target.value) }} /><br /><br />

          <button onClick={check}>Login</button>
        </div>

      }
    </div>
  )
}

export default MyLogin;