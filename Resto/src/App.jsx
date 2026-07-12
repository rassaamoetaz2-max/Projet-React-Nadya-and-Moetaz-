import { useEffect, useState } from 'react'
import HomePage from './Components/HomePage'
import API from './data/API'
import About from './Components/About'
import Menu from './Components/Menu'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import axios from 'axios'
import usersAPI from './data/UserAPI'
import Login from './Components/Login'
//import './App.css'

function App() {
  const [user,setUser]=useState({}) 
  const [cart,setCart] =useState([])
  const [list, setList] = useState([])
  const [mode, setMode] = useState("");

  
  

//get request
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
 /* const getUsers= async ()=>{
    try {
        await axios.get(API).then((res)=>setUser(res.data))
        console.log(list);
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  }

  useEffect(()=>{getUsers()},[])*/

//Cart 
  const addToCart =  (product)=>{
    if(!cart.includes(product))
      setCart([...cart.map(item=>{item.quantity=0; return item}),product])
    else
      cart.find(product).quantity+=1
    //      setCart([...cart,product])

  }



 //login
    const loginUser = async (username,password)=>{
    try {
       //setUser(thisUser);
      if(mode==="login")  {
        const thisUser = await axios.get(usersAPI).then((res)=>res.data.find((user)=>user.email===username&&user.password===password))
        if(thisUser===undefined)
          console.log("Pass or email wrong baka");
        else{
          navigate("/")
          setCart(thisUser.currentOrders)
           setUser(thisUser);}}
      else{
        const thisUser = await axios.post(usersAPI ,{username:username,password:password})
        setMode("login")
        navigate("/")
        setUser(thisUser);
      }   
         
     
       
        
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  }

  /*     const loginUser = async (username,password)=>{
    try {
      
        const thisUser = await axios.get(usersAPI).then((res)=>res.data.find((user)=>(user.username===username||user.email===username)&&user.password===password))
        if(thisUser===undefined)
          console.log("Pass or email wrong baka");
        else{
          setCart(thisUser.currentOrders)
          setUser(thisUser);}
        
        
        
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  } */
  
   const createUser = async (username,password)=>{
    try {
        const thisUser = await axios.post(usersAPI ,{username:username,password:password})
        setUser(thisUser)
        setMode("login")
        navigate("/")
        
        
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  }
  
    const logOut = ()=>{
    try {
        setUser({})
        setMode("login")
        navigate("/")
        
        
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  } 



  return (
    <><div>
      <Navbar user={user} logOut={logOut} setMode={setMode} />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu/*" element={<Menu list={list} addToCart={addToCart} setList={setList} getList={getList}/>} />
            <Route path="/cart" element={<Cart cart={cart} user={user}/>} />
            <Route path="/login" element={<Login mode={mode} loginUser={loginUser} createUser={createUser} />} />

        </Routes>  


     </div>     
    </>
  )
}

export default App
