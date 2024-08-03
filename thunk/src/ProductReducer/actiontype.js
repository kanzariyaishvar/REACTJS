import { ERROR, LODDING, SUCCEESS } from "./action"

export   const fetchData=(dispatch)=>{
    dispatch({type:LODDING})
    
    fetch(`https://fakestoreapi.com/products`)
    .then(res=>res.json())
    .then((res)=>{
        dispatch({type:SUCCEESS ,payload:res})
        console.log(res);
    })
    .catch(
        dispatch({type:ERROR})
    )
}