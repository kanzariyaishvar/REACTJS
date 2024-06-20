import React, { useRef } from "react";
import "../App.css"
function Compo() {

    let a = useRef("");
    let b = useRef("");
    let c = useRef("");

    const handelclick = () => {
        a.current.focus();
        
    }

    const Selecttext = useRef();

    const Select = () => {
        if (Selecttext.current) {
            Selecttext.current.select();
        }
    };

    return (
        <React.Fragment>
            <center>
            <div id="form">
                <h1>Fill This Form...</h1><br />
                <label htmlFor="">Enter Your Name...</label> <br/>
                <input type="text" id="input_1" placeholder="Enter Your Name..." ref={a} /> <br />
                <label htmlFor="">Enter Your Email...</label><br/>
                <input type="text" id="input_2" placeholder="Enter Your Email..." ref={b} /> <br />
                <label htmlFor="">Enter Your Password...</label><br/>
                <input type="text" id="input_3" placeholder="Enter Your Password..." ref={c} /> <br /><br/>
                <button onClick={handelclick}>Focuse</button>
            </div>
            </center>

            {/* this is simple fragment tag */}

            <>
                <div className="select">
                    <textarea name="" id="" rows="10" cols="40" ref={Selecttext} placeholder='Type your text heare....'></textarea><br />
                    <button onClick={Select}>Click to Select Text</button>
                </div>
            </>

        </React.Fragment>
    )
}

export default Compo;