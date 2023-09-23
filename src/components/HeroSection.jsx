import React, { useState, useEffect } from 'react';

// Importing images
import Link from '../assets/images/link.png';
import Fire from '../assets/images/fire.png';
import Creative from '../assets/images/creative.png';
import Man from '../assets/images/man_wearing_glasses.png';
import Bubble from '../assets/images/bubble.png';
import BentLine from '../assets/images/bent_line.png';

const HeroSection = ({PurpleLens, Star, StarBlur}) => {

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        // Increase seconds
        setSeconds((prev) => (prev + 1) % 60);

        // If seconds reach 60, increase minutes
        if (seconds === 59) {
          setMinutes((prev) => (prev + 1) % 60);

          // If minutes reach 60, increase hours
        if (minutes === 59) {
          setHours((prev) => (prev + 1) % 24);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes]);


  return (
    <div className='w-full hero-height'>

      <div className='flex flex-col gap-1'>
        <h1 className='text-sm mobile:text-xl mt-[-10px] laptop:mt-4 laptop:text-2xl italic font-semibold justify-center text-center laptop:text-right'>Igniting a Revolution in HR Innovation</h1>

        <div className='flex justify-center laptop:justify-end'>
          <img src={BentLine} alt="" />
        </div>

      </div>

      <div className='w-full h-full flex items-center flex-wrap'>

        {/* ======================Bright Light ==========================*/}
        <div className='absolute w-[50%] top-0 z-[-20] left-[6%]'>
          <img src={PurpleLens} className='w-full h-full opacity-[.5]' alt="" />
        </div>
        <div className='absolute w-[50%] top-[8%] z-[-20] right-[1%]'>
          <img src={PurpleLens} className='w-full h-full opacity-[.5]' alt="" />
        </div>

        {/*==================== Star ============================================*/}

        <p className='w-[13px] laptop:w-[20px] absolute top-[20%] left-[12%]'><img src={Star} alt="" /></p>
        <p className='w-[13px] laptop:w-[20px] absolute top-[30%] left-[50%]'><img src={StarBlur} alt="" /></p>
        <p className='w-[13px] laptop:w-[20px] absolute bottom-[20%] left-[40%]'><img src={StarBlur} alt="" /></p>

        {/* ============== Section One ================== */}
        <div className='w-full laptop:w-[50%]'>

          <div className='text-[20px] tablet:text-[55px] font-bold mt-20 text-center laptop:text-left relative'>getlinked Tech
            
            <div className='flex items-center gap-2 justify-center laptop:justify-start'>Hackathon
              <span className='color-pink'>1.0</span>
              <div className='w-[10%]'>
                <img src={Link} className='w-full' alt="" />
              </div>
              <div className='w-[10%]'>
                <img src={Fire} className='w-full' alt="" />
              </div>

              {/*============================= Bulb Image============================== */}
            </div>

            <div className='w-[20px] laptop:w-[40px] absolute top-[-20%] right-[14%] laptop:right-[30%]'>
              <img src={Creative} alt="" />
            </div>

          </div>

          <p className='text-[#bdbcbc] mb-8 mt-1 text-center laptop:text-left text-[12px] laptop:text-sm laptop:w-[90%]'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
          <div class="flex justify-center laptop:justify-start">
            <button className='custom_btn'>Register</button>
          </div>
          <div className='flex items-center justify-center laptop:justify-start gap-[30px] mt-16 text-4xl laptop:text-5xl px-10 laptop:px-0'>
            <p>{String(hours).padStart(2, '0')}<span className='text-sm laptop:text-lg'>H</span></p>
            <p>{String(minutes).padStart(2, '0')}<span className='text-sm laptop:text-lg'>M</span></p>
            <p>{String(seconds).padStart(2, '0')}<span className='text-sm laptop:text-lg'>S</span></p>
          </div>

        </div>

        {/* ============== Section Two ================== */}
        <div className='w-full laptop:w-[50%] h-full relative'>

          <div className='w-full h-full flex items-baseline'>
            <img src={Man} className='w-full mt-10' alt="" />
            <img src={Bubble} className='absolute top-[13%] w-[95%]' alt="" />
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default HeroSection
