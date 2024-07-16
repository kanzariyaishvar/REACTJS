import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function Shop() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3004/product")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div id='HomeSection1' className='h-auto mb-5'>
        <div className="HomeChild">
          <div className="HomeChild1 text-center h-auto">
            <h1 className='h1 mb-3'>View All Products</h1>
            <p className='font mb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              nostrum odit, deserunt consequatur error earum obcaecati incidunt
              quibusdam ex aperiam? Consectetur, delectus dignissimos?
            </p>
          </div>

          <div className='myproduct'>
            {data.map((val) => (
              <div key={val.id} className='productChild text-start ps-5'>
                <img src={val.img} height="250px" width="250px" alt={val.title} /><br />
                <b>Model : {val.name}</b> <br/>
                <p>Title: {val.title}</p>
                <p>Price : {val.price}</p>
                <Link to={`/product/${val.id}`}><button className='btn text-light bg-info'>View Details</button></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
