import React, { useState } from 'react';
import Aside from './Aside';
import { db } from '../../Firebase/Firebase';
import { addDoc, collection } from 'firebase/firestore';

function AddProduct() {
    const UserCollection = collection(db, "Newuser");
    const [product, setProduct] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const obj = {
            Product: product,
            Size: size,
            Price: price,
            Img: img,
            Description: description
        };

            await addDoc(UserCollection, obj);
            alert("Data Added Successfully...");
            setProduct("");
            setSize("");
            setPrice("");
            setImg("");
            setDescription("");
        
    };

    return (
        <>
            <div className="container">
                <Aside />
                <form onSubmit={handleSubmit}>
                    <h2>Add Product Here...</h2>
                    <br /><br /><br />
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Product Name...</label>
                        <input type="text" className="form-control"  placeholder='Product Name...' value={product} onChange={(e) => setProduct(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">Product Price</label>
                        <input type="text" className="form-control"  placeholder='Product Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productSize" className="form-label">Product Size</label>
                        <input type="text" className="form-control" placeholder='Product Size' value={size} onChange={(e) => setSize(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productDescription" className="form-label">Product Description</label>
                        <input type="text" className="form-control" placeholder='Product Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productImg" className="form-label">Image URL</label>
                        <input type="text" className="form-control" placeholder='Enter Image URL' value={img} onChange={(e) => setImg(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}

export default AddProduct;
