import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import './App.css'
import CenterMode from '../components/Carousel/CenterMode'
import Banner from '../components/Banner/Banner'
import FeatureBanner from '../components/FeatureBanner'
import Footer from '../components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <CenterMode/>
      <FeatureBanner/>
      <Footer/>
    </div>
  )
}

export default App
