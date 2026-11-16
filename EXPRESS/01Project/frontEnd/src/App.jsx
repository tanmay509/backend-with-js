import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'


function App() {
  const [user, setUser] = useState({});
  useEffect(()=>{
    
    
    axios.get("http://localhost:3000/github")
    .then((responce)=>{
      console.log( responce.data[0])
      
      
      
      setUser(responce.data[0])
    
      
    }).catch((err)=>{
      console.log(err);
      
    })
  },[])

  return (
    <>
    <div>
      <h1>
        Username={user.login}
      </h1>
     
      
      <img src={user.avatar_url} alt="" />
    </div>
    </>
  )
}

export default App
