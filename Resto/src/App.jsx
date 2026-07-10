<<<<<<< HEAD
cd import { useState } from 'react'
import HomePage from '../Components/HomePage'

=======
import { useState } from 'react'
import HomePage from './Components/HomePage'
import API from './data/API'
>>>>>>> f6fa16855b0784b681fcef8185fb10a0ec8d1555
//import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={} />
            <Route path="/menu" element={} />
            <Route path="/cart" element={} />

        </Routes>    
    </>
  )
}

export default App
