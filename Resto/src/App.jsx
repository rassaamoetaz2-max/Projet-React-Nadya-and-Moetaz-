import { useEffect, useState } from 'react'
import HomePage from './Components/HomePage'
import API from './data/API'
import About from './Components/About'
import Menu from './Components/Menu'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import axios from 'axios'
import userAPI from './data/UserAPI'

//import './App.css'

function App() {
  const [user,setUser]=useState("") 
  const [cart,setCart] =useState([])
  const [list, setList] = useState([])



/* get request
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
  /*const getUsers= async ()=>{
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

          setUser(thisUser);}
        
        
        
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  }
*/


  return (
    <><div>
      <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu/*" element={<Menu list={list} />} />
            <Route path="/cart" element={<Cart cart={cart} user={user}/>} />
           

        </Routes>  


     </div>     
    </>
  )
}

export default App
