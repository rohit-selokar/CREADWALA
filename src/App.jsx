import React from 'react'
import Header from './components/Header'
import First from './components/First'
import Third from './components/Third'
import Second from './components/Second'
import Cards from './components/Cards'
import Work from './components/Work'
import Loan from './components/Loan'
import Slide from './components/Slide'
import Footer from './components/Footer'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'

const App = () => {
  return (
    <>
      <Header/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes> */}

      <First/>
      <Second/>
      <Third/>
      <Work/>
      <Loan/>
      <Cards/>
      <Slide/>
      <Footer/>
    </>
  )
}

export default App
