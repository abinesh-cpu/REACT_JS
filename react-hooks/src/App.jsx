// import { useState } from 'react';

// function App(){
//   const [name, setName] = useState('Manu');

//   // const handleChange = () => {
//   //   setName('Vysakh');
//   // }

//   return(
//     <>
//       <h1>{name}</h1>
//       {/* <button onClick={handleChange}>Change Name</button> */}
//       <button onClick={() => setName('Vysakh')}>Change Name</button>
//     </>
//   );
// }

// export default App;




// import { useEffect,useState } from 'react';

// function App(){
//   const [number,setcount]=useState(0)
//   const [name,setName]=useState('manu')
//   const handleincrement = () => {
//     setcount(number+1)
//   }
  
//   const handleChange = () => {
//     setName('abi');
//   }
//   useEffect(()=>{
//     console.log('component re-rendered....')
//   },[number])
//   return(
//     <>
//       <h1>{number}</h1>
//       <button onClick={handleincrement}>increment</button>
//       <h1>{name}</h1>
//       <button onClick={handleChange}>Change Name</button>
//     </>
//   );
// }
// export default App;





// import { useEffect,useState } from 'react';

// function App(){
//     const [number,setcount]=useState(0)
//     const [running,setrunning]=useState(false)
//     useEffect(()=>{
//       if(!running) return
//         const interval=setInterval(()=>{
//         setcount((prevcount)=>prevcount+1)
//     },1000)
//     return()=>{
//       clearInterval(interval){
//         console.log('cleanup:cleared interval')
//     }
//   },[running])
//   return(
//         <>
//           <h1>timer : {number}</h1>
//           <button onClick={()=>setrunning(true)}>start</button>
//           <button onClick={()=>setcount(false)}>stop</button>
//         </>
//       );
//     }
// export default App;





// import { useEffect,useRef} from 'react';

// function App(){
//   const myref=useRef(null)
//   useEffect(()=>{
//     console.log(myref.current)
//   })
//   // const handlesubmit=(event)=>{
//   //   event.preventDefault()
//   //   console.log(myref.current.value)
//   // }
//   const handleChange=()=>{
//     console.log(myref.current.value)
//   }
//   return(
//     <>
//       {/* <form onSubmit={handlesubmit}>
//         <input type="text" name="" id='' ref={myref}/>
//         <input type="submit" value="submit" />
//       </form> */}
//       <input type="text" name='' id='' ref={myref} onChange={handleChange} />
//     </>
//   )
// }
// export default App;





// import React,{ useContext} from 'react';
// const mycontext=React.createContext()
// function App(){
//   const value='helloo how are you'
//   return(
//     <mycontext.Provider value={value}>
//         <ChildComponent/>
//     </mycontext.Provider>
//   )
// }
// function ChildComponent(){
//   const contextvalue=useContext(mycontext)
//   return(
//     <>
//       {contextvalue}
//     </>
//   )
// }
// export default App








// import React,{ useState,useMemo} from 'react';

// const App=()=>{
//   const [count,setcount]=useState(0)
//   const [text,settext]=useState('')

//   const doubledvalue=useMemo(()=>{
//     return count*2
//   },[count])
// return(
//   <div>
//     <h2>usememo example</h2>
//     <p>count:{count}</p>
//     <p>doubledvalue:{doubledvalue}</p>
//     <button onClick={()=>setcount(count+1)}>increment</button>
//     <br />
//     <input type="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder='type something......'/>
//   </div>
// )
// }
// export default App





// import { useMemo,useState } from "react";

// export default function App(){
//   const [count, setCount] = useState(0);
//   let sum=useMemo(()=>loop(),[])
//   return(
//     <>
//       <p>{count}</p>
//       <button onClick={()=>setCount(count+1)}>increment</button>
//       <p>sum :{sum}</p>
//     </>
//   )
// }
// function loop(){
//   let sum=0;
//   for(let i=0;i<=1e9;i++){
//     sum+=i;
// }
// return sum;
// }





import React,{useState,useCallback} from "react";

const Counter=React.memo(({count1,increment1})=>{
  console.log('child re-rendeered')
  return(
    <>
      <p>second component</p>
      <p>{count1}</p>
      <button onClick={increment1}>increment</button>
    </>
  )
})

const App=()=>{
  const [count, setCount] = useState(0);
  const [count1,setCount1]=useState(0)
  const increment=()=>{
    setCount((prevcount)=>prevcount+1)
  }
  const increment1=useCallback(()=>{
    setCount1((prevcount)=>prevcount+1)
    },[count1])
    console.log('parent rendered')
    return(
      <div>
        <p>parent component</p>
        <h2>count : {count}</h2>
        <button onClick={increment}>count</button>
        <Counter count1={count1} increment1={increment1}/>
      </div>
    )
}
export default App