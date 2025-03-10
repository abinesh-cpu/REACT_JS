import { useState } from 'react';

function App(){
  const [number,setnumber]=useState(1)
  const handleChange1 = () => {
    setnumber(count=>count+1)
  }
  const handleChange2 = () => {
    setnumber(count=>count-1)
  }


  return(
    <>
      <h1>{number}</h1>
      <button onClick={handleChange1}>increment</button>
      <button onClick={handleChange2}>decrement</button>
    </>
  );
}
export default App;