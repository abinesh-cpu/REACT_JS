import React from "react";
import { Link,useNavigate } from "react-router-dom";

const About=()=>{
    const navigate=useNavigate()
    const handleclick=()=>{
        navigate("/contact")
    }
    return(
        <div>
            <h1>About Page</h1>
            {/* <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link> */}
            <button onClick={handleclick}>contact</button>
        </div>
    )
}
export default About