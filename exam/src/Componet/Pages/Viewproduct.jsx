import React, { useEffect, useState } from 'react';
import Aside from './Aside';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';

function Viewproduct() {
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);
    const [formData, setFormData] = useState({
        product: "",
        size: "",
        price: "",
        img: "",
        description: ""
    });

    const UserCollection = collection(db, "Newuser");

    useEffect(() => {
        const fetchData = async () => {
            const fetchData = await getDocs(UserCollection);
            const productsData = fetchData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setProducts(productsData);
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "Newuser", id));
        alert("Data Deleted Successfully");
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    }

    const handleEdit = (product) => {
        setEditProduct(product.id);
        setFormData({
            product: product.Product,
            size: product.Size,
            price: product.Price,
            img: product.Img,
            description: product.Description
        });
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productDoc = doc(db, "Newuser", editProduct);
        await updateDoc(productDoc, {
            Product: formData.product,
            Size: formData.size,
            Price: formData.price,
            Img: formData.img,
            Description: formData.description
        });
        alert("Product Updated Successfully");
        setProducts((prevProducts) => 
            prevProducts.map((product) =>
                product.id === editProduct ? { ...product, ...formData } : product
            )
        );
        setEditProduct(null);
        setFormData({
            product: "",
            size: "",
            price: "",
            img: "",
            description: ""
        });
    }

    return (
        <div className="container">
            <Aside />
            <div className='viewproduct'>
                <div className="card">
                    {products.map((product) => (
                        <div key={product.id} className='product'>
                            <img src={product.Img} alt={product.Description} />
                            <h3>Item : {product.Product}</h3>
                            <p>Product Description: {product.Description}</p>
                            <p>Size: {product.Size}</p>
                            <p>Price: {product.Price}</p>

                            <div>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                                <button onClick={() => handleEdit(product)}>Edit</button>
                            </div>
                        </div>
                    ))}
                </div>

                {editProduct && (
                    <div className="edit-form">
                        <h2>Edit Product</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Product:
                                <input
                                    type="text"
                                    name="product"
                                    value={formData.product}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                Size:
                                <input
                                    type="text"
                                    name="size"
                                    value={formData.size}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                Price:
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                Image URL:
                                <input
                                    type="text"
                                    name="img"
                                    value={formData.img}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                Description:
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <button type="submit">Update</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Viewproduct;
