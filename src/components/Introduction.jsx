import React from 'react'
import BigIdea from '../assets/images/the_big_idea.png';

const Introduction = ({ StarPurple, CurvedArrow, overview }) => {

  return (
    <div className='flex items-center flex-wrap min-h-[60vh] mt-16 relative gap-20' ref={overview}>
      <div className='w-full laptop:w-[45%] laptop:pl-20 overflow-x-hidden'>

        {/* ========== ========== */}
        <img src={StarPurple} className='absolute top-[40%] left-0' alt="" />


        <div className='w-[80%] flex mx-auto'>
          <img src={BigIdea} className='w-full' alt="" />
        </div>
      </div>

      <img src={CurvedArrow} className='absolute bottom-0 left-[40%]' alt="" />

      <div className='w-full laptop:w-[45%] relative text-center laptop:text-left'>
        <h1 className='text-[20px] font-semibold leading-8 pb-3 laptop:pb-0 laptop:text_secondary'>Introduction to getlinked <br /> <p className='color-pink'>tech Hackathon 1.0</p></h1>
        <p className='text_primary'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is as
          clear as day: to shape the future. Whether you're a coding genius, a 
          design maverick, or a concept wizard, you'll have the chance to transform 
          your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world,
          that's what we're all about!
        </p>
      </div>
      <img src={StarPurple} className='absolute right-[3%] top-[25%]' alt="" />
    </div>
  )
}

export default Introduction
