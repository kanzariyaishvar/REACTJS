import '../App.css'
import React from 'react'
const Userapi = ({ arr }) => {
    return (
        <div className='App2'>
            <div className='inner'>
                {
                    arr.map((el) => {
                        return (
                            <div className='mmyapp'>
                                <div className='apppart_1'>
                                    <img src={el.picture.large} alt="" />
                                </div>
                                <div className='apppart_2'>
                                    <h5 className='mt-3 fw-bold'>{el.name.first} {el.name.last}</h5>
                                    <p><span className=''>Email </span> : {el.email}</p>
                                    <p> <span className=''>phone </span> : {el.phone}</p>
                                    <p> <span className=''>Location </span> : {el.location.state} , {el.location.country}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Userapi