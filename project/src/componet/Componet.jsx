import { useState } from 'react';
import '../App.css';
import Swal from 'sweetalert2'


function AddComponet() {

  const [state, setState] = useState("Addpro")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [stock, setStock] = useState("")
  const [image, setImage] = useState("")
  const [arr, setArr] = useState([])

  function addpro() {
    if (!name || !price || !description || !category || !stock || !Image) {
      Swal.fire({
        icon: "error",
        title: "Somthing Went Wrong..",
        text: "Plele Add Product...",
      });
      return;
    }


    let obj = {
      name: name,
      price: price,
      description: description,
      category: category,
      stock: stock,
      Image: image
    };
    setArr([...arr, obj]);
    console.log(obj);

    Swal.fire({
      title: "Success!",
      text: "Product added successfully!",
      icon: "success"
    });
  }

  function show() {

  }


  //   return (
  //     <div className="App">
  //       {state=="Addpro" ?
  //       <div className='parent'>
  //         <div className='child'>

  //           <h1> Add Product... </h1>

  //           <label htmlFor="">Enter Product Name..</label>
  //           <input type="text" placeholder='Enter Product Name' onChange={(i) => { setName(i.target.value) }} className='form-control'/>

  //           <label htmlFor="">Enter Product Price..</label>
  //           <input type="text" placeholder='Enter Product Price' onChange={(i) => { setPrice(i.target.value) }} className='form-control'/>

  //           <label htmlFor="">Enter Product Description..</label>
  //           <input type="text" placeholder='Enter Product Description' onChange={(i) => { setDescription(i.target.value) }} className='form-control'/>

  //           <label htmlFor="">Enter Product Category..</label>
  //           <input type="text" placeholder='Enter Product Category' onChange={(i) => { setCategory(i.target.value) }} className='form-control'/>

  //           <label htmlFor="">Enter Product Stock Quntity..</label>
  //           <input type="text" placeholder='Enter Product Quntity' onChange={(i) => { setStock(i.target.value) }} className='form-control'/>

  //           <label htmlFor="">Select Product image ..</label><br />
  //           <input type="url" placeholder='Enter image url..' onChange={(i) => { setImage(i.target.value)}}  className='form-control'/>

  //           <button onClick={addpro}>Add Product</button>
  //           <button onClick={show}>Show Product</button>
  //         </div>
  //       </div>
  //  :


  //       {/* <div className="parent1">
  //           <h1>View Product</h1>
  //           <div>
  //             {
  //               arr.map((val)=>{
  //                 <h1>{val.name}</h1>
  //               })
  //             }
  //           </div>
  //       </div> */}

  // <div className="parent1">
  //         <h1>View Product</h1>
  //         <div>
  //           {arr.map((val, index) => (
  //             <div key={index}>
  //               <h2>{val.name}</h2>
  //               <p>{val.price}</p>
  //               <p>{val.description}</p>
  //               <p>{val.category}</p>
  //               <p>{val.stock}</p>
  //               <img src={val.image} alt={val.name} style={{ width: "100px", height: "100px" }} />
  //             </div>
  //           ))}
  //         </div>
  //       </div>

  //     </div>
  //         }
  //   );
  // }
  return (
    <div className="App">
      {state === "Addpro" ? (
        <div className='parent'>
          <div className='child'>
            <h1> Add Product... </h1>

            <label>Enter Product Name..</label>
            <input type="text" placeholder='Enter Product Name' onChange={(i) => { setName(i.target.value) }} className='form-control' />

            <label>Enter Product Price..</label>
            <input type="text" placeholder='Enter Product Price' onChange={(i) => { setPrice(i.target.value) }} className='form-control' />

            <label>Enter Product Description..</label>
            <input type="text" placeholder='Enter Product Description' onChange={(i) => { setDescription(i.target.value) }} className='form-control' />

            <label>Enter Product Category..</label>
            <input type="text" placeholder='Enter Product Category' onChange={(i) => { setCategory(i.target.value) }} className='form-control' />

            <label>Enter Product Stock Quantity..</label>
            <input type="text" placeholder='Enter Product Quantity' onChange={(i) => { setStock(i.target.value) }} className='form-control' />

            <label>Select Product Image..</label><br />
            <input type="url" placeholder='Enter image url..' onChange={(i) => { setImage(i.target.value) }} className='form-control' />

            <button onClick={addpro}>Add Product</button>
            <button onClick={show}>Show Product</button>
          </div>
        </div>
      ) : (
        <div className="parent1">
          <h1>View Product</h1>
          <div>
            {arr.map((val, index) => (
              <div key={index}>
                <h2>{val.name}</h2>
                <p>{val.price}</p>
                <p>{val.description}</p>
                <p>{val.category}</p>
                <p>{val.stock}</p>
                <img src={val.image} alt={val.name} style={{ width: "100px", height: "100px" }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddComponet;





