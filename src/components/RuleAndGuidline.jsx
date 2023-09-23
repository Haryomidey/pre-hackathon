import React from 'react'
import Woman from '../assets/images/sitting_down.png';

const RuleAndGuidline = ({ PurpleLens, Star, StarBlur }) => {
 
  return (
    <div className='flex items-center flex-wrap-reverse gap-16 laptop:gap-0 mt-20 laptop:mt-0 w-full min-h-[60vh] relative'>

      {/* ============= ABSOLUTE IMAGE ============== */}
      <div className='absolute w-[50%] top-0 flex items-baseline left-[3%] z-[-1]'>
        <img src={PurpleLens} className='w-full h-full mt-20 opacity-[.7]' alt="" />
      </div>
      <div className='absolute w-[50%] bottom-[-25%] flex items-baseline right-[-30%] z-[-1]'>
        <img src={PurpleLens} className='w-full h-full mt-20 opacity-[.7]' alt="" />
      </div>

      <img className='absolute left-[25%] top-[25%]' src={StarBlur} alt="" />
      <img className='absolute bottom-[20%] right-[50%]' src={Star} alt="" />


      {/*  */}
      <div className='absolute top-[14%] right-[8%] z-[-1] w-[110px] h-[110px] rounded-full hidden laptop:block custom_gradient'>
                
      </div>

      <div className='w-full laptop:w-[50%] text-center laptop:text-left'>
        <h1 className='text-[20px] font-semibold text-center laptop:text-left leading-8 pb-3 laptop:pb-0 laptop:text_secondary'>Rules and <br /> <p className='color-pink'>Guidlines</p></h1>
        <p className='text_primary'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is as
          clear as day: to shape the future. Whether you're a coding genius, a 
          design maverick, or a concept wizard, you'll have the chance to transform 
          your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world,
          that's what we're all about!
        </p>
      </div>
      <div className='w-full laptop:w-[50%]'>
        <img src={Woman} alt="" />
      </div>
    </div>
  )
}

export default RuleAndGuidline

