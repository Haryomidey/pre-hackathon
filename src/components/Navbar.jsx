import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ timeline, overview, faqs, scrollToSection }) => {

  // const { } = useContext(Context);

  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleNavOpen = () => {
    setIsOpenNav(prev => !prev);
  }

  return (
    <header className="h-[60px] laptop:h-[80px] w-full fixed left-0 top-0 px-2 mobile:px-5 tablet:px-[50px] laptop:px-[100px] flex items-center justify-between border-b border-[#707070] bg-dark z-50">
      <Link to='/'><h1 className='font-bold text-lg tablet:text-2xl'>get<span className='text-[#D434FE]'>linked</span></h1></Link>
      <nav className='w-[60%] laptop:block'>
        <div className='flex items-center justify-between'>
          <ul className='hidden laptop:flex items-center justify-between w-[60%] text-[#dedede]'>
            <li className='cursor-pointer hover:text-[#D434FE] duration-300 ease' onClick={() => scrollToSection(timeline)}>Timeline</li>
            <li className='cursor-pointer hover:text-[#D434FE] duration-300 ease' onClick={() => scrollToSection(overview)}>Overview</li>
            <li className='cursor-pointer hover:text-[#D434FE] duration-300 ease' onClick={() => scrollToSection(faqs)}>FAQs</li>
            <li className='hover:text-[#D434FE] duration-300 ease'><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
          <Link to='/register' className='hidden laptop:block'><button className="custom_btn">Register</button></Link>
        {/* ================ Menu ============== */}
        </div>
      </nav>
        <div className={`laptop:hidden menu_div ${isOpenNav ? 'active' : ''}`} onClick={handleNavOpen}>
          <p className='w-[50%] h-[2px] rounded-lg bg-white'></p>
          <p className='w-[100%] h-[2px] rounded-lg bg-white'></p>
          <p className='w-[50%] ml-auto h-[2px] rounded-lg bg-white'></p>
        </div>
      {/* ================= Mobile Menu ===================== */}
      <nav className={`fixed top-0 w-full h-screen bg-dark block laptop:hidden pt-24 px-10 z-10 transition-left ease duration-500 ${isOpenNav ? 'left-[0]' : 'left-[-100%]'}`}>
        <ul className='flex flex-col gap-4 w-[25%]'>
          <li className='hover:text-[#D434FE] duration-300 ease'>
            <Link>Timeline</Link>
          </li>
          <li className='hover:text-[#D434FE] duration-300 ease'>
            <Link>Overview</Link>
          </li>
          <li className='hover:text-[#D434FE] duration-300 ease'>
            <Link>FAQs</Link>
          </li>
          <li className='hover:text-[#D434FE] duration-300 ease'>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <Link to='/register'><button className="custom_btn mt-4">Register</button></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;