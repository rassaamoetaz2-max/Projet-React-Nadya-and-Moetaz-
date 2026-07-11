import React from 'react'
import { useEffect, useState } from 'react'


function Login({mode,loginUser,createUser}) {
    const [userName,setUserName]=useState("") 
    const [password,setPassword]=useState("") 

  

  return (
    <div>
    <div>hey</div>
    <form onSubmit={()=>{/*mode==="login" ? loginUser(userName,password): mode==="create"?createUser(userName,password):null;*/loginUser(userName,password)}}>
      <label>Username/Email</label>
      <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
      <label>Password:</label>
      <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      {mode==="login"?    <button>submit</button>: <button>create Account</button> }
 
      </form>
    </div>
  )
}

export default Login