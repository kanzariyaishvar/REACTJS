// import React, { useState } from 'react';
// import '../Pages/style.css';
// import Header from '../Header';
// import Footer from '../Footer';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import Shop from './Shop';

// const obj = {
//   Email: "",
//   Password: ""
// };

// function Login() {
//   let [state, setState] = useState(obj);

//   const navigate=useNavigate()

//   const handleChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (state.Email) {
//       fetch(`http://localhost:3004/users?email=${state.Email}`)
//         .then((res) => {
//           return res.json();
//         })
//         .then((res) => {
//           console.log(res);

//           if (res[0]?.password === state.Password) {
//             localStorage.setItem("islogin", true);
//             Swal.fire({
//               title: "Login Successfull",
//               text: "You clicked the button!",
//               icon: "success"
//             });
//             navigate('/Shop')
//           } else {
//             Swal.fire({
//               title: "wrong Password! Please Enter Correct Password",
//               icon: "error",
//             });
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//           alert("Please try again later.");
//         });
//     }
//   };

//   return (
//     <>
//       <Header />

//       <div id="LoginHader">
//         <h1>Login</h1>
//       </div>

//       <div id='LoginMain'>
//         <div className="LoginChild">
//           <div className="LoginInner1">
//             <img src="/Colorlib/laptop.png" alt="" />
//           </div>

//           <div className="LoginInner2">
//             <h2>Welcome Back! <br /> Please Login Now</h2>
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="email">UserName...</label>
//               <input
//                 type="email"
//                 name='Email'
//                 className='form-control'
//                 placeholder='Enter Email...'
//                 onChange={handleChange}
//               />
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 name='Password'
//                 className='form-control'
//                 placeholder='Enter Password...'
//                 onChange={handleChange}
//               />
//               <button type='submit' className='btn sign'>LOGIN</button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import '../Pages/style.css';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const obj = {
  Email: "",
  Password: ""
};

function Login() {
  let [state, setState] = useState(obj);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.Email) {
      fetch(`http://localhost:3004/users?email=${state.Email}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);

          if (res[0]?.password === state.Password) {
            localStorage.setItem("islogin", "true");
            navigate('/Shop');
            Swal.fire({
              title: "Login Successful",
              text: "You clicked the button!",
              icon: "success"
            });
          } else {
            Swal.fire({
              title: "Wrong Password! Please Enter Correct Password",
              icon: "error",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Please try again later.");
        });
    }
  };

  return (
    <>
      <Header />

      <div id="LoginHader">
        <h1>Login</h1>
      </div>

      <div id='LoginMain'>
        <div className="LoginChild">
          <div className="LoginInner1">
            <img src="/Colorlib/laptop.png" alt="" />
          </div>

          <div className="LoginInner2">
            <h2>Welcome Back! <br /> Please Login Now</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">UserName...</label>
              <input
                type="email"
                name='Email'
                className='form-control'
                placeholder='Enter Email...'
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name='Password'
                className='form-control'
                placeholder='Enter Password...'
                onChange={handleChange}
              />
              <button type='submit' className='btn sign'>LOGIN</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
