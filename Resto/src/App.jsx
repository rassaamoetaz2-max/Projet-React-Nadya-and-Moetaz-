import { useEffect, useState } from 'react'
import HomePage from './Components/HomePage'
import API from './data/API'
import About from './Components/About'
import Menu from './Components/Menu'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import axios from 'axios'
//import './App.css'

function App() {
  const [list, setList] = useState([])

  const getList= async ()=>{
    try {
        await axios.get(API).then((res)=>setList(res.data))
        console.log(list);
        
    } catch (error) {
      console.log("error is :"+error);
      
    }
  }

  useEffect(()=>{getList()},[])



  return (
    <><div>
      <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu list={list} />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>  


     </div>     
    </>
  )
}

export default App
