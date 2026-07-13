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
import Layout from './Components/Layout'
//import './App.css'
import { useNavigate } from 'react-router-dom';


function App() {
  
  const [user,setUser]=useState(()=> { const savedUser = localStorage.getItem('currentUser');
  return savedUser ? JSON.parse(savedUser) : {};}) 
  const [cart,setCart] =useState(/*()=>{ const savedUser = localStorage.getItem('currentUser');
  return savedUser ? JSON.parse(savedUser).currentOrders  :[]}*/[])
  const [list, setList] = useState([])
  const [mode, setMode] = useState("");

 /* useEffect(async ()=>{
    try {
        await axios.(API).then((res)=>setList(res.data))
        console.log(list);
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  }, [cart]);*/

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }, [user]);
  
const navigate = useNavigate();

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
const addToCart = (product) => {
  const existingItem = cart.find(item => item.id === product.id);

  if (!existingItem) {
    setCart([...cart, { ...product, quantity: 1 }]);
  } else {
    setCart(
      cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }
};
    

  



 //login
 /*   const loginUser = async (email,username,password)=>{
    try {
       //setUser(thisUser);

      if(mode==="login")  {
      /*  const thisUser = await axios.get(usersAPI).then((res)=>res.data.find((user)=>user.email===email&&user.password===password))*/
      /*  const response = await axios.get(usersAPI);

const thisUser = response.data.find(
    (user)=>user.Email===email && user.password===password
);
        if(thisUser===undefined)
          console.log("Pass or email wrong baka");
        else{
          setCart(thisUser.currentOrders)
           setUser(thisUser);
            navigate("/") }}
      else{
        const thisUser = await axios.post(usersAPI ,{email:email,username:username,password:password,currentOrders:cart,pastOrders:[],isAdmin:false})
        setMode("login")
        setUser(thisUser.data);
       navigate("/")
      }   
         
     
       
        
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  }*/

  const loginUser = async (email,password)=>{
  
      
 try {
    const response = await axios.get(usersAPI);

    const thisUser = response.data.find(
      (user) => user.Email === email && user.password === password
    );

    if (thisUser === undefined) {
      console.log("Pass or email wrong baka");
    } else {
      //setCart(thisUser.currentOrders);
      setUser(thisUser);
      navigate("/");
    }
        
        
        
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  } 
  
const createUser = async (email,username,password)=>{

    try {
      const response = await axios.post(usersAPI, {
      email: email,
      username: username,
      password: password,
      currentOrders: cart,
      pastOrders: [],
      isAdmin: false
    });

    setMode("login");
    setUser(response.data);
    navigate("/");
        
        
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  }
  
    const logOut = ()=>{
    try {
        setUser({})
        setMode("login")
        localStorage.removeItem('currentUser')
        navigate("/")
        
        
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  } 

const isAnAdmin=()=>{
    return user.isAdmin
}

  return (
    <><div>
    <Routes>  
     <Route path="/login" element={<Login mode={mode} loginUser={loginUser} createUser={createUser} />} />

    <Route element={<Layout user={user} logOut={logOut} setMode={setMode} /> } >
      
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} user={user}/>} /> 
            <Route path="/menu/*" element={<Menu isAnAdmin={isAnAdmin} list={list} addToCart={addToCart} setList={setList} getList={getList}/>} />



     
    </Route>

      
        

       </Routes>    
     </div>     
    </>
  )
}

export default App
