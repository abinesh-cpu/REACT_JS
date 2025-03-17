import React from "react";
import { useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";

const Contact=()=>{
    // const {name}=useParams
    const navigate=useNavigate()
    const [name,setname]=useState('abi')
    const handleclick=()=>{
        navigate("/")
    }
    return(
        <div>
            <h1>Contact {name}</h1>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> */}
            <button onClick={handleclick}>home</button>
        </div>
    )
}
export default Contact