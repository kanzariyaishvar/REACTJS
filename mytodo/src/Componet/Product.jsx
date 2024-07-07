import { useEffect, useState } from "react";
import { v4 } from "uuid";

function Practice(params) {

    const [state, setState] = useState({
        id: v4(),
        title: "",
        price: "",
        img: ""
    })

    const [arr,setArr]=useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(arr));
    }, [arr])

    console.log(arr);

    const handleChenge = (e) => {
        let [name, value] = e.target;

        setArr({ ...state, [name]: value })
    }

    return (
        <>
            <h1>My Paractice </h1>
            <form onChange={handleSubmit}>
                <input type="text" name="title" onChange={handleChenge} placeholder="Enter product Title" />
                <input type="text" name="price" onChange={handleChenge} placeholder="Enter Product Price" />
                <input type="text" name="img" onChange={handleChenge} placeholder="Enter Url" />
                <input type="submit" />
            </form>

        </>
    )


}

export default Practice;