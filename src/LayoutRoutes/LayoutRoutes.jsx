import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Header from '../Components/Header/Header'
// import Footer from '../Components/Footer/Footer'
import  Home  from '../Pages/Home/Home'
import Dishes from '../Pages/Dishes/Dishes'
import Booking from '../Pages/Booking/Booking'
import About  from '../Pages/About/About'
import NotFound from '../Pages/NotFound/NotFound'
import SignUp from '../Components/SignUp/SignUp'
import { ViewId } from '../Components/ViewId/ViewId'

function LayoutRoutes() {
  return (
    
    <Router>
      
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dishes' element={<Dishes/>}/>
            <Route path='/services' element={<Booking/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/*' element={<NotFound/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/viewid' element={<ViewId/>}></Route>
            
        </Routes>
        
        
       
    </Router>

  )
}

export default LayoutRoutes