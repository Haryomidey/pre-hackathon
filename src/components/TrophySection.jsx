import React from 'react'
import TrophyImage from '../assets/images/trophy.png';
import Rewards from '../assets/images/rewards.png';

const TrophySection = ({StarPurple, Star}) => {
  return (
    <div className='min-h-[70vh] pt-5 laptop:pt-20'>
      <h1 className='text-[20px] font-semibold text-center laptop:text-left leading-8 laptop:pb-0 laptop:text_secondary laptop:hidden'>Rewards <br /><p className='color-pink'>Prices and</p></h1>
      <p className='text_primary text-[12px] mobile:text-md laptop:hidden mb-[-60px] text-center'>Highlight of the prizes or rewards for winners and for participants.</p>
      <div className='w-full flex flex-wrap items-center justify-between gap-20 laptop:gap-0 relative'>
        {/* Absolute images */}
        <div>
          <img src={StarPurple} className='absolute right-[10%] top-[6%]' alt="" />
          <img src={Star} className='absolute left-[58%] top-[20%]' alt="" />
          <img src={Star} className='absolute left-[20%] bottom-[10%]' alt="" />
        </div>
        <div className='w-full laptop:w-[40%] laptop:ml-[-80px]'>
          <img src={TrophyImage} className='w-full' alt="" />
        </div>
        <div className='w-full laptop:w-[45%]'>
          <img src={Rewards} className='w-dull' alt="" />
        </div>
      </div>
    </div>
  )
}

export default TrophySection
