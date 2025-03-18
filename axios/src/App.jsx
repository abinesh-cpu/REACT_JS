import axios from 'axios';
import { useState,useEffect } from 'react';

function App(){
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      console.log(response)
      setPosts(response.data);
  }
)
  .catch(errors=>console.log(errors))
},[])
const handlepost=()=>{
  axios.post('https://jsonplaceholder.typicode.com/posts',{
    userid:1,
    title:'my home',
    body:'this is my home'
  })
  .then((response)=>{
      console.log(response)
      const newpost={
        ...response.data,id:Math.max(...posts.map(post=>post.id))+1
      }
      console.log([newpost,...posts])
      setPosts([newpost,...posts])
  })
  .catch(error=>console.log(error))
}
const handleupdate=(postidforupdate)=>{
  axios.put(`https://jsonplaceholder.typicode.com/posts/${postidforupdate}`,{
    userid:1,
    title:'PUT',
    body:'updated'
  })
  .then((response)=>{
    console.log(response.data)
    const updatedpost=posts.map((post)=>
      post.id===postidforupdate?response.data:post
  )
  setPosts(updatedpost)
  console.log(updatedpost)
})
.catch(error=>console.log(error))
}
const handlepatch=(postidforpatch)=>{
  axios.patch(`https://jsonplaceholder.typicode.com/posts/${postidforpatch}`,{
    title:'patched'
  })
  .then((response)=>{
    console.log(response.data)
    const updatedpost=posts.map((post)=>
      post.id===postidforpatch?response.data:post
    )
    setPosts(updatedpost)
    console.log(updatedpost)
  })
  .catch(error=>console.log(error))
}
const handledelete=async(postidfordelete)=>{
  try{
 const response=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postidfordelete}`)
  console.log(response.data)
  setPosts(posts.filter((post)=>post.id !==postidfordelete))
}
catch(error){
}
}
return(
  <>
    <button onClick={handlepost}>click to add a default data</button>
    <ul>
      {posts.map(post=>(
        <li key={post.id}>
          <dl>
            <dt>{post.title}</dt>
            <dd>{post.body}</dd>
          </dl>
          <button onClick={()=>handleupdate(post.id)}>click to update default value</button>
          <button onClick={()=>handlepatch(post.id)}>click to update single field</button>
          <button onClick={()=>handledelete(post.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </>
)
}
export default App