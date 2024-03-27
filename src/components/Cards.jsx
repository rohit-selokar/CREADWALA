import React from 'react'
import home from "../assets/home-loan.png"
import credit from "../assets/Credit-cards.png"
import business from "../assets/business.png"
import personal from "../assets/personal.png"
import "../app.css";

const Cards = () => {
  return (
    <div className=' mx-7 my-10 lg:px-20 xl:px-56'>
      <p className='font-bold text-center text-[25px] my-3 lg:text-[34px] xl:text-[35px]'>Bringing You the <span className='text-[#112FD1]'>Best</span> of Finances</p>
      <div className=' grid gap-5 md:grid-cols-2 my-6'>
        <img src={home} className='shadow-card cursor-pointer'/>
        <img src={credit} className='shadow-card cursor-pointer'/>
        <img src={business} className='shadow-card cursor-pointer'/>
        <img src={personal} className='shadow-card cursor-pointer'/>
      </div>
    </div>
  )
}

export default Cards
