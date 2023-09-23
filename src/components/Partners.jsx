import React from 'react'

// Importing image
import Sponsors from '../assets/images/our_sponsors.png';

const Partners = ({PurpleLens, StarPurple, Star}) => {
  return (
    <div className='min-h-[50vh] relative mt-28'>
        {/* ============================ Absolute images ========================= */}
        {/* ============================ Absolute images ========================= */}
        {/* ============================ Absolute images ========================= */}
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
        
        <h1 className='text-sm font-semibold text-[21px] text-center leading-8 pb-3 laptop:pb-0 laptop:text_secondary'>
            Partners and Sponsors
        </h1>
        <p className='text_primary laptop:w-[40%] text-center mx-auto'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        <div className=' border border-[#D434FE] mt-12 relative w-full'>
            <img src ={Sponsors} className='w-full' />
        </div>
    </div>
  )
}

export default Partners
