

import { useEffect, useState } from 'react'
import './App.css'
import Post from './post/post'

function App() {
 
  const [posts , setPosts] = useState([])
  
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>  res.json())
    .then(data => setPosts(data))
  } , [])
   

  

  return (
    <>
      <div className="w-1/3 mx-auto  p-5 font-bold ">
       
       {
        posts.map( (post , i )=> <Post key={i} post={post}></Post>)
       }

      </div>

    </>
  )
}

export default App
