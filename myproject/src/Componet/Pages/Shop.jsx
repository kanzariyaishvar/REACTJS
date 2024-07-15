import React, { useEffect, useState } from 'react'
import Header from '../Header';
import Footer from '../Footer';

function Shop() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("http://localhost:3004/product")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }, [])





  return (
    <>
      <Header />
      <div id='HomeSection1'>
        <div className="HomeChild">
          <div className="HomeChild1 text-center h-auto">
            <h1 className='h1 mb-3'>View All Product</h1> <br />
            <p className='font mb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum odit, deserunt consequatur error <br /> earum obcaecati incidunt quibusdam ex aperiam? Consectetur, delectus dignissimos?</p>
          </div>

          <div id='' className=' '>
            <div className='myproduct'>

              {
                data.map((val) => {
                  return (
                    <div>
                      <div className='productChild'>
                        <div key={val.id} className=' '></div>
                        <img src={val.img} height="250px" width="250px" alt="" />
                        <h1>{val.title}</h1>
                        <p>{val.price}</p>
                        <p>{val.name}</p>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>


        </div>

      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Shop


// {
//   data.map((val) => {
//     return (
//       <div key={val.id}>
//         <div>{val.title}</div>
//         <div>{val.price}</div>
//         <div><img src={val.img} height="250px" width="250px" alt="" /></div>
//         <div>{val.name}</div>

//       </div>
//     )
//   })
// }