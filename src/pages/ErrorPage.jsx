import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ErrorPage = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  }

  return (
    <div>
      <Navbar />
      <div className='h-[60vh] mt-20 flex items-center justify-center flex-col'>
        <h1 className='text-xl mobile:text-2xl tablet:text-3xl laptop:text-5xl mb-6'>
          OOPs, Page not Found!!!
        </h1>
        <p className='text-[#c7c6c6] text-[12px] tablet:text-lg text-center'>This page you are looking for cannot be found!</p>
        <div>
          <button className='custom_btn mt-20 text-sm' onClick={handleNavigate}>Return to homepage</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage