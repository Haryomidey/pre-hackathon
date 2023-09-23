import React from 'react'
import Standing from '../assets/images/standing_on_padlock.png';
import Lock from '../assets/images/vector.png';
import CheckMark from '../assets/images/checkmark.png';

const Privacy = ({PurpleLens, StarPurple, Star, StarBlur}) => {
  return (
    <div className='flex flex-wrap items-center mt-20 laptop:mt-40 min-h-[100vh] pb-20 relative overflow-x-hidden'>
      {/* ===================== ABSOLUTE IMAGES ================== */}
      <img src={Star} className='w-[13px] absolute bottom-[25%] right-[40%]' alt="" />
      <img src={StarBlur} className='absolute top-[6%] left-[28%]' alt="" />
      <img src={StarPurple} className='absolute bottom-[24%] left-[-5%]' alt="" />
      <img src={StarPurple} className='absolute top-[24%] left-[46%]' alt="" />
      <img src={StarPurple} className='w-[13px] absolute bottom-[35%] right-[35%]' alt="" />
      <img src={Star} className='w-[13px] absolute top-[24%] right-[14%]' alt="" />
      <img src={StarBlur} className='absolute bottom-[24%] right-[2%]' alt="" />
      <div className='absolute w-[50%] bottom-[-15%] z-[-20] left-[-18%]'>
        <img src={PurpleLens} className='w-full h-full opacity-[.5]' alt="" />
      </div>

      <div className='w-full laptop:w-[46%]'>
        <h1 className='text-[20px] font-semibold text-center leading-8 pb-3 laptop:pb-0 laptop:text_secondary'>Privacy Policy and <p className='color-pink'>Terms</p></h1>
        <p className='text_primary text-center laptop:text-left'>Last updated on September 12, 2023</p>
        <p className='text-sm mt-7 w-[82%] mx-auto text-center laptop:text-left laptop:mx-0'>Below are our privacy & policy, which outline a lot of goodies. it's our aim to always take of our participant</p>
        <div className='border border-[#D434FE] mt-12 p-11 leading-7 text-sm laptop:w-[89%]'>
          <p>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
          <h1 className='color-pink font-bold text-lg mt-5'>Licensing Policy</h1>
          <p>Here are terms of our Standard License:</p>
          <ul className='mt-6'>
            <li className='flex gap-4'>
              <div className='w-[30px] mt-2'>
                <img src={CheckMark} className='w-full' alt="" />
              </div>
              <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
            </li>
            <li className='flex gap-4 mt-5'>
              <div className='w-[30px] mt-2'>
                <img src={CheckMark} className='w-full' alt="" />
              </div>
              <p>You are licensed to use the item available at any free source sites, for your project developement</p>
            </li>
          </ul>
          <div className='mt-5 flex items-center justify-center'>
            <button className='custom_btn'>Read More</button>
          </div>
        </div>
      </div>

      <div className='w-full laptop:w-[50%] mt-10 laptop:mt-0 relative'>
        <div className='w-[80%] laptop:w-[60%] h-[300px] mx-auto laptop:mx-0 mt-20'>
          <img src={Lock} className='w-[70%] absolute mt-[-10%] laptop:mt-[-65%] laptop:left-[20%]' alt="" />
          <img src={Standing} className='w-[70%] absolute mt-[10%] laptop:mt-[-20%] laptop:left-[20%]' alt="" />
        </div>
      </div>

    </div>
  )
}

export default Privacy
