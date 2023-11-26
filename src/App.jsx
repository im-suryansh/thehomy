import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import './App.css'
import CenterMode from '../components/Carousel/CenterMode'
import Banner from '../components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <CenterMode/>
    </div>
  )
}

export default App
