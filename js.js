// 1. ** Initialize Firebase:**


//    import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     // Your Firebase config here
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);


// 2. ** Create a Document:**


//    import { addDoc, collection } from 'firebase/firestore';
//      Import{ db } from ’./config’
// const usersCollection = collection(db, 'users'); :.........your collection name

// const newUser = {
//     name: 'Deepak',
//     email: “Deepak@gmail.com'',
//    };

// const docRef = await addDoc(usersCollection, newUser);
// console.log('Document written with ID: ', docRef.id);


// 3. ** Read Documents:**


//    import { getDocs, collection } from 'firebase/firestore';

// const usersCollection = collection(db, 'users');

// const querySnapshot = await getDocs(usersCollection);
// querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
// });


// 4. ** Update a Document:**


//    import { doc, updateDoc } from 'firebase/firestore';

// const userDoc = doc(db, 'users', 'user_id_here');

// const updatedData = {
//     name: 'Updated Name',
// };

// await updateDoc(userDoc, updatedData);


// 5. ** Delete a Document:**


//    import { doc, deleteDoc } from 'firebase/firestore';

// const userDoc = doc(db, 'users', 'user_id_here');
// await deleteDoc(userDoc);
  





//       React firebase

// import React, { useState, useEffect } from 'react';
// import { db } from './firebase';
// import { collection, addDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

// function App() {
//     const [users, setUsers] = useState([]);
//     const [newUserName, setNewUserName] = useState('');

//     const fetchUsers = async () => {
//         const usersCollection = collection(db, 'users');
//         const querySnapshot = await getDocs(usersCollection);
//         const usersData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setUsers(usersData);
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const handleAddUser = async () => {
//         const usersCollection = collection(db, 'users');
//         const newUser = {
//             name: newUserName,
//         };
//         await addDoc(usersCollection, newUser);
//         fetchUsers();
//         setNewUserName('');
//     };

//     const handleDeleteUser = async (userId) => {
//         const userDoc = doc(db, 'users', userId);
//         await deleteDoc(userDoc);
//         fetchUsers();
//     };

//     return (
//         <div>
//             <h1>Firebase Firestore CRUD Example</h1>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Enter a new user's name"
//                     value={newUserName}
//                     onChange={(e) => setNewUserName(e.target.value)}
//                 />
//                 <button onClick={handleAddUser}>Add User</button>
//             </div>
//             <ul>
//                 {users.map((user) => (
//                     <li key={user.id}>
//                         {user.name} <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;


import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from './Firebase/firebase';

function App() {
   const [email,setEmail] = useState("");
   const [pass,setPass] = useState("");
   const [data,setData] = useState([])
   const UserCollection = collection(db , "users")  

   const handleSubmit = async (e)=>{
    e.preventDefault();
    let obj = {
        email : email,
        password : pass
    }
    let a = await addDoc(UserCollection, obj)
    alert(`Data added Successfully with id ${a.id}`)
   }
   
   const getData = async ()=>{
     let data = await getDocs(UserCollection)
     let arr = data.docs.map((el)=>{
        // console.log(el.id)
        // console.log(el.data())
        return {id : el.id, ...el.data()}
     })
     setData(arr)
   }

   useEffect(()=>{
       getData()
   },[])

   const handleDelete = async (id)=>{
     const data = doc(db,"users",id)
     await deleteDoc(data)
     alert("User Deleted Successfully")
     getData()
   }

  return (
    <>
     <form onSubmit={handleSubmit}>
       <input type="text" onChange={(e)=>setEmail(e.target.value)} />
       <input type="text" onChange={(e)=>setPass(e.target.value)} />
       <input type="submit" />
       
     </form>
     {
         data.map((el)=>{
            return (
                <div key={el.id}>
                    <h1>{el.email} - {el.password}</h1>
                    <button onClick={()=>handleDelete(el.id)}>Delete</button>
                </div>
            )
         })
       }
    </>
  )
}

export default App



import React, { useEffect, useState } from 'react'
import "../css/Table.css"
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/Firebase'

const ProductTable = () => {

  const [productarr, setProductarr] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({ brand: '', name: '', price: '', des: '', img: '' })

  const productCollection = collection(db, "product")

  const getData = async () => {
    let Data = await getDocs(productCollection)
    let arr = Data.docs.map((el) => {
      return { id: el.id, ...el.data() }
    })
    setProductarr(arr)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleDelete = async (id) => {
    const data = doc(db, "product", id)
    await deleteDoc(data)
    alert("Product deleted.")
    getData()
  }

  const handleEdit = (product) => {
    setEditingProduct(product.id)
    setFormData({ brand: product.brand, name: product.name, price: product.price, des: product.des, img: product.img })
    // Trigger the Bootstrap modal
    const modal = new window.bootstrap.Modal(document.getElementById('editModal'))
    modal.show()
  }

  const handleSave = async () => {
    if (editingProduct) {
      const productDoc = doc(db, "product", editingProduct)
      await updateDoc(productDoc, formData)
      alert("Product updated.")
      setEditingProduct(null)
      setFormData({ brand: '', name: '', price: '', des: '', img: '' })
      getData()

      // Hide the Bootstrap modal
      const modalElement = document.getElementById('editModal')
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement)
      modalInstance.hide()
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="table1">
        <div className="t-1">
          <table className="table text-center table-bordered border-success">
            <thead>
              <tr>
                <th scope="col" className='text-light'>Brand</th>
                <th scope="col" className='text-light'>Name</th>
                <th scope="col" className='text-light'>Price</th>
                <th scope="col" className='text-light'>Description</th>
                <th scope="col" className='text-light'>Image</th>
                <th scope="col" className='text-light'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                productarr.map((el) => (
                  <tr key={el.id}>
                    <td className='text-light text-center'>{el.brand}</td>
                    <td className='text-light text-center'>{el.name}</td>
                    <td className='text-light text-center'>{el.price}</td>
                    <td className='text-light text-center w-25 ms-5'>{el.des}</td>
                    <td>
                      <img src={el.img} alt={el.name} style={{ width: "100px", height: "100px" }} />
                    </td>
                    <td>
                      <button className='btn border border-success text-light mt-2 ms-4 w-50' onClick={() => handleDelete(el.id)}>Delete</button>
                      <button className='btn border border-success text-light ms-4 mt-3 w-50' onClick={() => handleEdit(el)}>Edit</button>
                  
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        {/* Bootstrap Modal */}
        <div className="modal fade " id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header table-bordered border-success">
                <h5 className="modal-title text-light" id="editModalLabel">Edit Product</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body table-bordered border-success">
                <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" className="form-control mb-2 table-bordered border-success text-light mt-2" />
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="form-control mb-2 table-bordered border-success text-light mt-4" />
                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="form-control mb-2 table-bordered border-success text-light mt-4" />
                <textarea name="des" value={formData.des} onChange={handleChange} placeholder="Description" className="form-control mb-2 table-bordered border-success text-light mt-4"></textarea>
                <input type="text" name="img" value={formData.img} onChange={handleChange} placeholder="Image URL" className="form-control mb-2 table-bordered border-success text-light mt-4" />
              </div>
              <div className="modal-footer table-bordered border-success">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success" onClick={handleSave}>update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductTable