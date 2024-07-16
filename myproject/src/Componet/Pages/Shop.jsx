// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../Header';
// import Footer from '../Footer';

// function Shop() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [filter, setFilter] = useState({
//     Noise: false,
//     Apple: false,
//     Rolex: false,
//     Boat: false
//   });




//   const [sortpro, setPro] = useState("");
//   const [search, setsearch] = useState("")

//   useEffect(() => {
//     fetch("http://localhost:3004/product")
//       .then(res => res.json())
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }


//   let filterData = data

//   console.log(data);
//   if (filter.Apple || filter.Boat || filter.Rolex || filter.Noise) {
//     filterData = filterData.filter((el) => {
//       if (filter.Apple && el.catagory === "Apple") {
//         return true;
//       }
//       if (filter.Rolex && el.catagory === "Rolex") {
//         return true;
//       }
//       if (filter.Boat && el.catagory === "Boat") {
//         return true;
//       }
//       if (filter.Noise && el.catagory === "Noise") {
//         return true;
//       }
//       return false;
//     });
//   }

//   const handleFilterChange = (el) => {
//     setFilter({
//       ...filter,
//       [el.target.name]: el.target.checked
//     });
//   };

//   const handleSesrch = () => {

//   }

//   return (
//     <>
//       <Header />
//       <div id='HomeSection1' className='h-auto mb-5'>
//         <div className="HomeChild">
//           <div className="HomeChild1 text-center h-auto">
//             <h1 className='h1 mb-3'>View All Products </h1>
//             <p className='font mb-5'>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//               nostrum odit, deserunt consequatur error earum obcaecati incidunt
//               quibusdam ex aperiam? Consectetur, delectus dignissimos?
//             </p>
//             <center className='d-flex'>
//               <div id='serch'> <input type="text" placeholder='Search ...' className='ps-3 ' onChange={handleSesrch} /> <i className='bi bi-search'></i></div>
//               <div id='filter'>
//                 Noise<input type="checkbox" name='Noise' className='me-5 ms-2' onChange={handleFilterChange} />
//                 Apple<input type="checkbox" name='Apple' className='me-5 ms-2' onChange={handleFilterChange} />
//                 Rolex<input type="checkbox" name='Rolex' className='me-5 ms-2' onChange={handleFilterChange} />
//                 Boat<input type="checkbox" name='Boat' className='me-5 ms-2' onChange={handleFilterChange} />
//               </div>
//               <div id='drop'>
//                 <select name="" id="">
//                   <option value="sort">Sort</option>
//                   <option value="lth">Low To High</option>
//                   <option value="htl">High To Low</option>
//                   {/* <option value="htl">High To Low</option> */}
//                 </select>
//               </div>
//             </center>


//           </div>

//           <div className='myproduct'>
//             {data.map((val) => (
//               <div key={val.id} className='productChild text-start ps-5'>
//                 <img src={val.img} height="250px" width="250px" alt={val.title} /><br />
//                 <b>Model : {val.name}</b> <br />
//                 <p>Title: {val.title}</p>
//                 <p>Price : {val.price}</p>
//                 <Link to={`/product/${val.id}`}><button className='btn text-light bg-info'>View Details</button></Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Shop;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function Shop() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState({
    Noise: false,
    Apple: false,
    Rolex: false,
    Boat: false
  });

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

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.checked
    });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let filteredData = data;

  // Filter by category
  if (filter.Apple || filter.Boat || filter.Rolex || filter.Noise) {
    filteredData = filteredData.filter((el) => {
      return (
        (filter.Apple && el.catagory === "Apple") ||
        (filter.Rolex && el.catagory === "Rolex") ||
        (filter.Boat && el.catagory === "Boat") ||
        (filter.Noise && el.catagory === "Noise")
      );
    });
  }

  // Filter by search term
  if (search) {
    filteredData = filteredData.filter(el =>
      el.name.toLowerCase().includes(search.toLowerCase()) ||
      el.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sort products
  if (sort) {
    filteredData = filteredData.sort((a, b) => {
      if (sort === "lth") {
        return a.price - b.price;
      } else if (sort === "htl") {
        return b.price - a.price;
      }
      return 0;
    });
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
            <center className='d-flex'>
              <div id='serch'>
                <input type="text" placeholder='Search ...' className='ps-3' onChange={handleSearch} />
                <i className='bi bi-search'></i>
              </div>
              <div id='filter'>
                Noise<input type="checkbox" name='Noise' className='me-5 ms-2' onChange={handleFilterChange} />
                Apple<input type="checkbox" name='Apple' className='me-5 ms-2' onChange={handleFilterChange} />
                Rolex<input type="checkbox" name='Rolex' className='me-5 ms-2' onChange={handleFilterChange} />
                Boat<input type="checkbox" name='Boat' className='me-5 ms-2' onChange={handleFilterChange} />
              </div>
              <div id='drop'>
                <select name="" id="" onChange={(e) => setSort(e.target.value)}>
                  <option value="sort">Sort</option>
                  <option value="lth">Low To High</option>
                  <option value="htl">High To Low</option>
                </select>
              </div>
            </center>
          </div>

          <div className='myproduct'>
            {filteredData.map(val => (
              <div key={val.id} className='productChild text-start ps-5'>
                <img src={val.img} height="250px" width="250px" alt={val.title} /><br />
                <b>Model : {val.name}</b> <br />
                <p>Title: {val.title}</p>
                <p>Price : {val.price}</p>
                <p>catagory: {val.catagory}</p>
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
