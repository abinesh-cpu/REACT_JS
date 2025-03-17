import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate()
    const [name,setname]=useState('Abi')
    const handleclick=()=>{
        navigate(`/contact/${name}`)
    }
    return(
        <div>
            <h1>Hi {name}</h1>
            {/* <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
            <input type="text" placeholder="enter your name " value={name} onChange={(e)=>setname(e.target.value)}/>
            <Link to={`/about/${name}`}>About</Link>
            <button onClick={handleclick}>contact</button>
        </div>
    )
}
export default Home