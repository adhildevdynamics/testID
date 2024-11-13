import React from 'react'
import Header from '../../Components/Header/Header'
import Welcome from '../Welcome/Welcome'
import Partner from '../Partner/Partner'
import Booking from '../Partner/Partner'
import Dishes from '../Dishes/Dishes'
import Ambience from '../Ambience/Ambience'
import Delivery from '../Delivery/Delivery'
import About from '../About/About'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <>
      <Header/>
      <Welcome />
      <Partner/>
      <Booking/>
      <Dishes/>
      <Ambience/>
      <Delivery/>
      <About/>
      <Footer/>
    </>
  )
}

export default Home