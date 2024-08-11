import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebase';



function App() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("")
  const [data, setData] = useState([])
  const UserCollection = collection(db, "Users");

  // add data in firebase 
  const handleSubmit = async (e) => {

    e.preventDefault()

    let obj = {
      email: email,
      pass: pass
    }
    let a = await addDoc(UserCollection, obj);
    alert("User Added Suceess...")

    setEmail("")
    setPass("")

    // add data in firebase 

    // get Data in firebase
  }
  const getData = async () => {
    let data = await getDocs(UserCollection)
    let arr = data.docs.map((el) => {
      return { id: el.id, ...el.data() }
    })
    setData(arr)
  }

  useEffect(() => {
    getData()
  }, [])


  const handleDelete = async (id) => {
    const dldata = doc(db, "Users", id)
    await deleteDoc(dldata);
    alert("data Delete Suceessfully")
    getData()
  }

  const handleEdit = (id) => {
    console.log(id);

  }

  return (

    <>
      <h1>hello world</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} placeholder='Enter Email..' onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="text" value={pass} placeholder='Enter Password..' onChange={(e) => setPass(e.target.value)} /><br />
        <button type='Submit' id='btn' >submit</button>
      </form>

      <h2>Show Data</h2>
      {/* <ul>
        {data.map((el) => {
          <li key={el.id}>
            <h5>Email:{el.email}, PassWord :{el.pass}</h5>
          </li>
        })}
      </ul> */}
      <ul>
        {data.map((el) => (
          <li key={el.id}>
            <b>Email: {el.email}, Password: {el.pass}</b>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
            <button onClick={() => handleEdit(el.id)}>Edit</button>
          </li>
        )
        )}
      </ul>

    </>
  )
}

export default App
