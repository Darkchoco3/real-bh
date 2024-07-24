import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'







import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import Footer from './Layout/Footer'
import Navbar from './Layout/NavBar'
import Hero from './Components/Hero'
import Discovery from './Layout/Discovery'
import PropertyCard from './Components/PropertyCard'
import Home from './Pages/Home'





function App() {

  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/SignUp' element={<SignUp/>}/> 
<Route path='/' element={<SignIn/>}/> 
<Route path='/Home' element={<Home/>}/> 
<Route path='/Footer' element={<Footer/>}/> 
<Route path='/Navbar' element={<Navbar/>}/> 
<Route path='/Hero' element={<Hero/>}/> 
<Route path='/Discovery' element={<Discovery/>}/> 
<Route path='/PropertyCard' element={<PropertyCard/>}/> 



</Routes>
</BrowserRouter>
    </>
  )
}

export default App
