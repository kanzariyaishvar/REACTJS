import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import Aside from './Admin';

function ProductList() {
  const [products, setProducts] = useState([]);
  const UserCollection = collection(db, 'User');
  const [edit, setEdit] = useState(null);  // Holds the ID of the product being edited
  const [data, setData] = useState({
    name: '',
    desk: '',
    size: '',
    price: ''
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getDocs(UserCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'User', id));
    alert('Product Deleted Successfully...');

    // Update products list
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (product) => {
    setEdit(product.id);
    setData({
      name: product.name,
      desk: product.desk,
      size: product.size,
      price: product.price,
      img:product.img
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (edit) {
      const productDoc = doc(db, 'User', edit);
      await updateDoc(productDoc, data);
      alert('Product Updated Successfully...');

      setProducts(products.map((product) => 
        product.id === edit ? { ...product, ...data } : product
      ));

      
      setEdit(null);
      setData({
        name: '',
        desk: '',
        size: '',
        price: '',
        img:''
      });
    }
  };

  return (
    <div className='container'>
      <Aside />
      <div className='product_list'>
        <div className='card'>
          {products.map((product) => (
            <div key={product.id} className='card1'>
              <img src={product.img} alt={product.name} />
              <p><b>Product name</b> :{product.name}</p>
              <p><b>Product desk</b> :{product.desk}</p>
              <p><b>Product size</b> :{product.size}</p>
              <p><b>Product price</b> :{product.price}</p>
              <div className='button'>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {edit && (
          <div className='edit_form'>
            <form onSubmit={handleUpdate}>
            <h2>Edit Product</h2> <br /><br />
              <div>
                <label>Product Name:</label>
                <input 
                  type='text' 
                  name='name' 
                  value={data.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div>
                <label>Product Description:</label>
                <input 
                  type='text' 
                  name='desk' 
                  value={data.desk} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div>
                <label>Product Size:</label>
                <input 
                  type='text' 
                  name='size' 
                  value={data.size} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div>
                <label>Product Price:</label>
                <input 
                  type='text' 
                  name='price' 
                  value={data.price} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div>
                <label>Product image:</label>
                <input 
                  type='text' 
                  name='img' 
                  value={data.img} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <button type='submit'>Update Product</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
