import React from 'react'
import Facing from '../assets/images/facing_each_other.png';

const JudgingCriteria = ({PurpleLens, Star, StarPurple, StarBlur}) => {
  return (
    <div className='flex items-center flex-wrap gap-10 laptop:gap-7 mt-20 laptop:mt-0 min-h-[70vh] py-5 relative'>
      <div className='w-full laptop:w-[45%] relative'>
        {/* ABSOLUTES IMAGES */}
        <div className=''>
          <img src={StarPurple} className='absolute top-[-30%] left-[23%]' alt="" />
          <img src={StarBlur} className='absolute top-[50%] right-[40%]' alt="" />
          <img src={Star} className='absolute bottom-[-28%] right-[5%]' alt="" />
        </div>
        <img src={Facing} className='w-full' alt="" />

        <div className='absolute w-[100%] bottom-[-30%] z-[-1] left-[-5%]'>
          <img src={PurpleLens} className='w-full h-full opacity-[.5]' alt="" />
        </div>
        <div className='absolute z-[-1] top-[-9%] left-[14%] w-[110px] h-[110px] rounded-full hidden laptop:block custom_gradient'>
              
        </div>
      </div>
      <div className='relative w-full laptop:w-[45%] text-center laptop:text-left'>
        <div className='absolute w-[100%] bottom-[-40%] z-[-1] right-[-40%]'>
          <img src={PurpleLens} className='w-full h-full opacity-[.5]' alt="" />
        </div>
        <h1 className='text-[20px] text-center laptop:text-left leading-8 pb-3 laptop:pb-0 laptop:text_secondary'>Judging Criteria <br /><p className='color-pink'>Key attributes</p></h1>
        <div className='flex flex-col gap-8 pt-4 text-[13px] laptop:text-[md]'>
            <p><span className='color-red'>Innovation and Creativity:</span>  Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
            <p><span className='color-red'>Functionality:</span>  Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>
            <p><span className='color-red'>Impact and Relevance:</span>  Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>
            <p><span className='color-red'>Technical Complexity:</span>  Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</p>
            <p><span className='color-red'>Adherence to Hackathon Rules:</span>  Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
        </div>
        <button className='custom_btn mt-8'>Read More</button>
      </div>
    </div>
  )
}

export default JudgingCriteria
