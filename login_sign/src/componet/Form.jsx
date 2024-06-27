// import React, { useState } from "react";
// import "../App.css";
// import Swal from "sweetalert2";

// function Mysignlog() {
//     const [state, setState] = useState("signup");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loginEmail, setLEmail] = useState("");
//     const [loginpass, setLoginpass] = useState("");
//     const [myvalid, setMyvalid] = useState(false);
//     const [arr, setArr] = useState([]);

//     const passwordPattern = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;


//     const handleSignup = (e) => {
//         e.preventDefault();

//         if (!passwordPattern.test(password)) {
//             setMyvalid(true);
//             return;
//         }

//         let obj = {
//             username: name,
//             email: email,
//             pass: password
//         };
//         setArr([...arr, obj]);

//         console.log(arr);
//         Swal.fire({
//             title: "Signup Successful",
//             text: "You clicked the button!",
//             icon: "success"
//         });
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();
//         let data = arr.find((el) => el.email === loginEmail && el.pass === loginpass);
//         if (data) {
//             Swal.fire({
//                 title: "Login Successful",
//                 text: "You clicked the button!",
//                 icon: "success"
//             });
//         } else {
//             Swal.fire({
//                 icon: "error",
//                 title: "Login Unsuccessful",
//                 text: "Incorrect email or password.",
//             });
//         }
//     };

//     const myBlur = () => {
//         if (!passwordPattern.test(password)) {
//             setMyvalid(true);
//         } else {
//             setMyvalid(false);
//         }
//     };

//     const handleCheckPass = ()=> {
//         if (password == "text") {
            
//         }
//     }
//     return (
//         <div id="main">
//             <div className="part_1">
//                 <img src="../laptop-8556518_640.png" alt="" />
//             </div>
//             <div className="part_2">
//                 {state === "signup" ? (
//                     <div>
//                         <form id="sign" onSubmit={handleSignup}>
//                             <h1>SignUp Form</h1><br />
//                             <label>Name:</label>
//                             <input type="text" className="form-control" placeholder="Enter User Name..." onChange={(d) => setName(d.target.value)} />
//                             <label>Email:</label>
//                             <input type="email" className="form-control" placeholder="Enter User Email..." onChange={(d) => setEmail(d.target.value)} />
//                             <label>Password:</label>
//                             <input type="password" className={myvalid ? "form-control  border1" : "form-control"} placeholder="Enter User Password..." onChange={(d) => setPassword(d.target.value)} onBlur={myBlur} />
//                             <i className="bi bi-eye-fill" onClick={handleCheckPass}></i>
//                             {myvalid ? <p>Please enter a valid password with at least 8 characters, including uppercase, lowercase, and a digit or special character.</p> : ""} 
                           
//                             <button type="submit" className="btn bg-success text-light">SignUp</button>
//                             <span className="ms-5 ">Already have an account? <b className="text-success" onClick={() => setState("login")}>LOGIN</b></span>
//                         </form>
//                     </div>
//                 ) : (
//                     <div id="login">
//                         <form onSubmit={handleLogin}>
//                             <h1>Login Form</h1><br />
//                             <label>Email:</label>
//                             <input type="email" className="form-control" placeholder="Enter User Email..." onChange={(d) => setLEmail(d.target.value)} />
//                             <label>Password:</label>
//                             <input type="password" className="form-control" placeholder="Enter User Password..." onChange={(d) => setLoginpass(d.target.value)} /> <br />
//                             <button type="submit" className="btn bg-success text-light">LOGIN</button>
//                             <span className="ms-5 text-danger" onClick={() => setState("signup")}>Create an Account?</span>
//                         </form>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Mysignlog;



import React, { useState } from "react";
import "../App.css";
import Swal from "sweetalert2";

function Mysignlog() {
    const [state, setState] = useState("signup");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginEmail, setLEmail] = useState("");
    const [loginpass, setLoginpass] = useState("");
    const [myvalid, setMyvalid] = useState(false);
    const [arr, setArr] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const passwordPattern = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    const handleSignup = (e) => {
        e.preventDefault();

        if (!passwordPattern.test(password)) {
            setMyvalid(true);
            return;
        }

        let obj = {
            username: name,
            email: email,
            pass: password
        };
        setArr([...arr, obj]);

        console.log(arr);
        Swal.fire({
            title: "Signup Successful",
            text: "You clicked the button!",
            icon: "success"
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        let data = arr.find((el) => el.email === loginEmail && el.pass === loginpass);
        if (data) {
            Swal.fire({
                title: "Login Successful",
                text: "You clicked the button!",
                icon: "success"
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Login Unsuccessful",
                text: "Incorrect email or password.",
            });
        }
    };

    const myBlur = () => {
        if (!passwordPattern.test(password)) {
            setMyvalid(true);
        } else {
            setMyvalid(false);
        }
    };

    const handleCheckPass = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div id="main">
            <div className="part_1">
                <img src="../laptop-8556518_640.png" alt="" />
            </div>
            <div className="part_2">
                {state === "signup" ? (
                    <div>
                        <form id="sign" onSubmit={handleSignup}>
                            <h1>SignUp Form</h1><br />
                            <label>Name:</label>
                            <input type="text" className="form-control" placeholder="Enter User Name..." onChange={(d) => setName(d.target.value)} />
                            <label>Email:</label>
                            <input type="email" className="form-control" placeholder="Enter User Email..." onChange={(d) => setEmail(d.target.value)} />
                            <label>Password:</label>
                            <div className="password-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className={myvalid ? "form-control border1" : "form-control"}
                                    placeholder="Enter User Password..."
                                    onChange={(d) => setPassword(d.target.value)}
                                    onBlur={myBlur}
                                />
                                <i className={showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"} onClick={handleCheckPass}></i>
                            </div>
                            {myvalid ? <p>Please enter a valid password with at least 8 characters, including uppercase, lowercase, and a digit or special character.</p> : ""}
                            <button type="submit" className="btn bg-success text-light">SignUp</button>
                            <span className="ms-5 ">Already have an account? <b className="text-success login" onClick={() => setState("login")}>LOGIN</b></span>
                        </form>
                    </div>
                ) : (
                    <div id="login">
                        <form onSubmit={handleLogin}>
                            <h1>Login Form</h1><br />
                            <label>Email:</label>
                            <input type="email" className="form-control" placeholder="Enter User Email..." onChange={(d) => setLEmail(d.target.value)} />
                            <label>Password:</label>
                                <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Enter User Password..." onChange={(d) => setLoginpass(d.target.value)} />
                                <i className={showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"} onClick={handleCheckPass}></i>
                            <button type="submit" className="btn bg-success text-light">LOGIN</button>
                            <span className="ms-5 text-danger sign" onClick={() => setState("signup")}>Create an Account?</span>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Mysignlog;
