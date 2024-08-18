import React from 'react'
import Navbar from '../components/Navbar'

import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Footer/>
    </div>
  )
}

export default Home
