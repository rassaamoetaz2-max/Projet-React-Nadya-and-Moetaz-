



import { useEffect, useState } from 'react'
import HomePage from './Components/HomePage'
import API from './data/API'
import About from './Components/About'
import Menu from './Components/Menu'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import axios from 'axios'
<<<<<<< HEAD
import userAPI from './data/UserAPI'
import Login from './Components/Login'
=======

>>>>>>> 944fc1ee8ed30118816006db4d75962ac7693024
//import './App.css'

function App() {
  const [user,setUser]=useState("") 
  const [cart,setCart] =useState([])
  const [list, setList] = useState([])



// get request
  const getList= async ()=>{
    try {
        await axios.get(API).then((res)=>setList(res.data))
        console.log(list);
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  }

  useEffect(()=>{getList()},[])
//getUsers
  const getUsers= async ()=>{
    try {
        await axios.get(API).then((res)=>setUser(res.data))
        console.log(list);
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  }

  useEffect(()=>{getUsers()},[])

//Cart 
  const makeNewCart = (product)=>{
    setCart(...cart,product)
  }
 //login
    const loginUser = async (username,email,password)=>{
    try {
        const thisUser = await axios.get(API).then((res)=>setUser(res.data)).find((user)=>(user.username===username||user.email===email)&&user.password===password)
        if(thisUser===undefined)
          console.log("Pass or email wrong baka");
        else{
          setUser(thisUser);
          }
        
        
        
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  }



  return (
    <><div>
      <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
<<<<<<< HEAD
            <Route path="/menu" element={<Menu list={list} />} />
            <Route path="/cart" element={<Cart cart={cart} user={user}/>} />
            <Route path="/login" element={<Login loginUser={loginUser} />} />

=======
            <Route path="/menu/*" element={<Menu list={list} />} />
            <Route path="/cart" element={<Cart />} />
>>>>>>> 944fc1ee8ed30118816006db4d75962ac7693024
        </Routes>  


     </div>     
    </>
  )
}

export default App
