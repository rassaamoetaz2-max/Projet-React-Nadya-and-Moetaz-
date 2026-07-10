<<<<<<< HEAD
<<<<<<< HEAD
cd import { useState } from 'react'
import HomePage from '../Components/HomePage'

=======
import { useState } from 'react'
import HomePage from './Components/HomePage'
import API from './data/API'
>>>>>>> f6fa16855b0784b681fcef8185fb10a0ec8d1555
=======
import { useEffect, useState } from 'react'
import HomePage from './Components/Nav/Components/HomePage'
import API from './data/API'
import About from './Components/Nav/Components/About'
import Menu from './Components/Menu/Menu'
import Cart from './Components/Nav/Components/Cart'
import Navbar from './Components/Nav/Navbar'
import {Routes,Route} from 'react-router-dom'
import axios from 'axios'
>>>>>>> 819e08b24d1e3a3f43db73b77ccd7e7a3a6e8e82
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
