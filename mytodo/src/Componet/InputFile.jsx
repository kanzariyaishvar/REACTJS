// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { v4 } from 'uuid'
// function ProductInput() {
//   const [state, setState] = useState({
//     id: v4(),
//     title: "",
//     price: "",
//     des: "",
//     img: ""
//   })

//   const [arr, setarr] = useState(JSON.parse(localStorage.getItem("data")) || [])

//   const handleChange = (e) => {
//     let { name, value } = e.target
//     setState({ ...state, [name]: value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setarr([...arr, state])
//     setState({
//       id: v4(),
//       title: "",
//       price: "",
//       des: "",
//       img: ""
//     })
//   }
//   console.log(arr)

//   useEffect(() => {
//     localStorage.setItem("data", JSON.stringify(arr))
//   }, [arr])

//   const handleDelete = (id) => {
//     let d = arr.filter(el => el.id != id)
//     setarr(d)
//   }

//   const handleUpdate=(id)=>{
//       let del=arr.map((el)=>{
//         if (el.id ==id) {
//           return(
//             {...setarr}
//           )
//           console.log(setarr);
//         }else{
//           return el
//         }
//       })
//       setarr(del)
//   }



//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name='title' value={state.title} onChange={handleChange} placeholder='Title' />
//         <input type="text" name='des' value={state.des} onChange={handleChange} placeholder='Description' />
//         <input type="text" name='price' value={state.price} onChange={handleChange} placeholder='Price' />
//         <input type="text" name='img' value={state.img} onChange={handleChange} placeholder='Image URL' />
//         <input type="submit" />
//       </form>

//       {
//         arr.map((el) => {
//           return (
//             <>
//               <h1>{el.title}</h1>
//               <h1>{el.price}</h1>
//               <h1>{el.des}</h1>
//               <img src={el.img} alt="{el.title}" />
//               <button onClick={()=>handleDelete(el.id)}>Delete</button>
//               <button onClick={()=>handleUpdate(el.id)}>Edit</button>
//             </>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default ProductInput

import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';

function ProductInput() {
  const [state, setState] = useState({
    id: v4(),
    title: "",
    price: "",
    des: "",
    img: ""
  });

  const [arr, setArr] = useState(JSON.parse(localStorage.getItem("data")) || []);
  const [editing, setEditing] = useState(null);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing !== null) {
      setArr(
        arr.map(item => item.id === editing ? state : item)
      );
      setEditing(null);
    } else {
      setArr([...arr, state]);
    }
    setState({
      id: v4(),
      title: "",
      price: "",
      des: "",
      img: ""
    });
  };

  useEffect(() => {
    sessionStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);

  const handleDelete = (id) => {
    setArr(arr.filter(el => el.id !== id));
  };

  const handleEdit = (id) => {
    const itemToEdit = arr.find(el => el.id === id);
    setState(itemToEdit);
    setEditing(id);
  };

  return (
    <div>
      <h1>my todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' value={state.title} onChange={handleChange} placeholder='Title' />
        <input type="text" name='des' value={state.des} onChange={handleChange} placeholder='Description' />
        <input type="text" name='price' value={state.price} onChange={handleChange} placeholder='Price' />
        <input type="text" name='img' value={state.img} onChange={handleChange} placeholder='Image URL' />
        <input type="submit" value={editing !== null ? "Update" : "Submit"} />
      </form>

      {arr.map((el) => (
        <div key={el.id}>
          <h1>{el.title}</h1>
          <h1>{el.price}</h1>
          <h1>{el.des}</h1>
          <img src={el.img} alt={el.title} />
          <button onClick={() => handleDelete(el.id)}>Delete</button>
          <button onClick={() => handleEdit(el.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default ProductInput;
