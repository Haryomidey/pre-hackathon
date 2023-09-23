import React from 'react'
import LibertyImage from '../assets/images/liberty_assured.png';
import LibertyPay from '../assets/images/liberty_pay.png';
import WinWise from '../assets/images/winwise.png';
import  Whispersms from '../assets/images/whispersms.png';
import Paybox from '../assets/images/paybox.png';
import VuzualPlus from '../assets/images/vuzual_plus.png';
import Sponsors from '../assets/images/sponsors.png';

const Partners = ({PurpleLens, StarPurple, Star}) => {
  return (
    <div className='min-h-[50vh] relative mt-28'>
        {/* Absolute images */}
        <div>
            <div className='absolute w-[50%] top-[15%] z-[-1] left-[-20%]'>
                <img src={PurpleLens} className='w-full h-full opacity-[.5]' alt="" />
            </div>
            <div className='absolute w-[50%] bottom-[-20%] z-[-1] right-[-30%]'>
                <img src={PurpleLens} className='w-full h-full opacity-[.5]' alt="" />
            </div>
            <img src={StarPurple} className='absolute left-[8%] top-[28%]' alt="" />
            <img src={StarPurple} className='absolute w-[1.2%] left-[56%] top-[36%]' alt="" />
            <img src={Star} className='absolute w-[1.5%] left-[56%] bottom-[12%]' alt="" />
        </div>
        
        <h1 className='text-sm font-semibold text-[21px] text-center leading-8 pb-3 laptop:pb-0 laptop:text_secondary'>Partners and Sponsors</h1>
        <p className='text_primary laptop:w-[40%] text-center mx-auto'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        <div className=' border border-[#D434FE] mt-12 relative w-full'>
            {/* <div className='w-[15%] pr-10 py-2 partners'>
                <img src={LibertyImage} className='w-full object-cover' alt="" />
            </div>
            <div className='w-[15%]'>
                <img src={LibertyPay} className='w-full object-cover' alt="" />
            </div>
            <div className='w-[30%] laptop:w-[15%]'>
                <img src={WinWise} className='w-full object-cover' alt="" />
            </div>
            <div className='w-[30%] laptop:w-[15%]'>
                <img src={Whispersms} className='w-full object-cover' alt="" />
            </div>
            <div className='w-[30%] laptop:w-[15%]'>
                <img src={Paybox} className='w-full object-cover' alt="" />
            </div>
            <div className='w-[30%] laptop:w-[15%]'>
                <img src={VuzualPlus} className='w-full object-cover' alt="" />
            </div> */}
            
            <img src ={Sponsors} className='w-full' />
            
            {/* ==================== Horizontal Line ==================== */}
            
            {/* <div className='absolute top-[50%] w-[80%] bg-pink h-[3px]'></div> */}
            
            {/* ==================== Vertical Lines ==================== */}
            
            {/* <div className='absolute h-[70%] left-[37%] w-[3px] bg-pink'></div>
            <div className='absolute h-[70%] right-[37%] w-[3px] bg-pink'></div> */}
            
            {/* ==================== Breaking points ==================== */}
            
            {/* <div className='absolute top-[50%] translate-y-[-14px] flex items-center justify-center gap-[245px]'>
                <div className='w-[50px] h-[30px] rounded-[80%] bg-dark z-10'></div>
                <div className='w-[50px] h-[30px] rounded-[80%] bg-dark z-10'></div>
            </div> */}
        </div>
    </div>
  )
}

export default Partners
