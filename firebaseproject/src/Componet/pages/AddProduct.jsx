import React, { useState } from 'react'
import Aside from './Admin'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../Firebase/Firebase'



function AddProduct() {
  const UserCollection = collection(db, "User")
  const [name, setName] = useState("")
  const [desk, setDesk] = useState("")
  const [size, setSize] = useState("")
  const [img, setImg] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    let obj = {
      name: name,
      desk: desk,
      size: size,
      img: img,
      price: price
    }


    await addDoc(UserCollection, obj)
    alert("Product Added Successfully...")

    setName("")
    setDesk("")
    setSize("")
    setImg("")
    setPrice("")
  }


  return (
    <>
      <div className='container'>
        <Aside />
        <div className="innercontainer">
          <div className="form-box">
            <h2>Add Product Here...</h2>
            <form onSubmit={handleSubmit}>
              <label>Enter Product Item name...</label>
              <input
                type="text"
                value={name}
                placeholder="Enter Product Item name..."
                required
                onChange={(e) => setName(e.target.value)} />

              <label>Enter Product Description...</label>
              <input
                type="text"
                value={desk}
                placeholder="Enter Product Description..."
                required
                onChange={(e) => setDesk(e.target.value)}
              />

              <label>Enter Product Size...</label>
              <input
                type="text"
                value={size}
                placeholder="Enter Product Size..."
                required
                onChange={(e) => setSize(e.target.value)}
              />

              <label>Enter Product Price...</label>
              <input
                type="text"
                value={price}
                placeholder="Enter Product Price..."
                required
                onChange={(e) => setPrice(e.target.value)}
              />

              <label>Enter Image URL...</label>
              <input
                type="text"
                value={img}
                placeholder='Enter Image URL...'
                required
                onChange={(e) => setImg(e.target.value)}
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProduct
