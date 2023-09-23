import React from 'react'

const Timeline = ({ StarPurple, Star, StarBlur, timeline }) => {

  return ( 
    <div className='min-h-[100vh] mt-20 laptop:mt-40 pb-20 relative' ref={timeline}>
      <h1 className='text-center text_secondary'>Timeline</h1>
      <p className='text_primary mx-auto text-center laptop:w-[34%] mt-2 pb-20 mobile:pb-10 laptop:pb-0'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
      {/* ABSOLUTE IMAGES */}
      <div>
        <img src={StarPurple} className='absolute top-[12%] left-[25%]' alt="" />
        <img src={Star} className='absolute top-[47%] right-[20%]' alt="" />
        <img src={StarBlur} className='absolute bottom-[7%] left-[10%]' alt="" />
      </div>
      <div className='laptop:mt-20 w-[90%] mx-auto flex flex-col gap-7'>
        
        {/*  =============================== 1 ===================================== */}
        {/*  =============================== 1 =================================== */}
        
        <div className='laptop:h-[130px] flex flex-wrap laptop:items-end laptop:justify-between relative'>
            <div className='w-full laptop:w-[45%] text-left laptop:text-right pl-8 laptop:pl-0'>
                <h1 className='font-bold color-pink'>Hackathon Announcement</h1>
                <p className='mt-2 text_primary'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
            </div>
            
            <div className='absolute top-0 left-[-10px] laptop:static h-full flex flex-col items-center gap-2 pt-1'>
                <div className='min-w-[2px] h-full laptop:min-h-[80%] bg-pink'>
                    
                </div>
                <div className='min-w-[30px] min-h-[30px] rounded-full custom_gradient_two flex items-center justify-center text-sm'>
                    1
                </div>
            </div>
            <div className='w-full laptop:w-[45%] color-pink pl-8 laptop:pl-0'>
                <p>November 18, 2023</p>
            </div>
        </div>
        
        {/*  ================================= 2 ================================== */}
        {/*  ================================= 2 ================================== */}
        
        <div className='laptop:h-[130px] flex flex-wrap-reverse items-end justify-between relative'>
            <div className='w-full laptop:w-[45%] color-pink'>
                <p className='laptop:text-right pl-8 laptop:pl-0'>November 18, 2023</p>
            </div>
            <div className='absolute top-0 left-[-10px] laptop:static h-full flex flex-col items-center gap-2 pt-1'>
                <div className='min-w-[2px] min-h-[80%] bg-pink'>
                    
                </div>
                <div className='min-w-[30px] min-h-[30px] rounded-full custom_gradient_two flex items-center justify-center text-sm'>
                    2
                </div>
            </div>
            <div className='laptop:w-[45%] text-left laptop:text-left pl-8 laptop:pl-0'>
                <h1 className='font-bold color-pink'>Teams Registration begins</h1>
                <p className='mt-2 text_primary'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
            </div>
        </div>
        
        {/*  ================================= 3 ================================== */}
        {/*  ================================= 3 ================================== */}
        
        <div className='laptop:h-[130px] flex flex-wrap items-end justify-between relative'>
            <div className='w-full laptop:w-[45%] text-left laptop:text-right pl-8 laptop:pl-0'>
                <h1 className='font-bold color-pink'>Teams Registration ends</h1>
                <p className='mt-2 text_primary'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
            </div>
            <div className='absolute top-0 left-[-10px] laptop:static h-full flex flex-col items-center gap-2 pt-1'>
                <div className='min-w-[2px] min-h-[80%] bg-pink'>
                    
                </div>
                <div className='min-w-[30px] min-h-[30px] rounded-full custom_gradient_two flex items-center justify-center text-sm'>
                    3
                </div>
            </div>
            <div className='w-full laptop:w-[45%] color-pink pl-8 laptop:pl-0'>
                <p>November 18, 2023</p>
            </div>
        </div>
        
        {/*  ================================== 4 ================================= */}
        {/*  ================================== 4 ================================= */}
        
        <div className='laptop:h-[130px] flex flex-wrap-reverse items-end justify-between relative'>
            <div className='w-full laptop:w-[45%] color-pink pl-8 laptop:pl-0'>
                <p className='laptop:text-right'>November 18, 2023</p>
            </div>
            <div className='absolute top-0 left-[-10px] laptop:static h-full flex flex-col items-center gap-2 pt-1'>
                <div className='min-w-[2px] min-h-[80%] bg-pink'>
                    
                </div>
                <div className='min-w-[30px] min-h-[30px] rounded-full custom_gradient_two flex items-center justify-center text-sm'>
                    4
                </div>
            </div>
            <div className='w-full laptop:w-[45%] laptop:text-left  pl-8 laptop:pl-0'>
                <h1 className='font-bold color-pink'>Announcement of the accepted teams and ideas</h1>
                <p className='mt-2 text_primary'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
            </div>
        </div>
        
        {/*  ==================================== 5 =============================== */}
        {/*  ==================================== 5 =============================== */}
        
        <div className='laptop:h-[130px] flex flex-wrap items-end justify-between relative'>
            <div className='w-full laptop:w-[45%] laptop:text-right pl-8 laptop:pl-0'>
                <h1 className='font-bold color-pink'>Getlinked Hackathon 1.0 Offically Begins</h1>
                <p className='mt-2 text_primary'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
            </div>
            <div className='absolute top-0 left-[-10px] laptop:static h-full flex flex-col items-center gap-2 pt-1'>
                <div className='min-w-[2px] min-h-[80%] bg-pink'>
                    
                </div>
                <div className='min-w-[30px] min-h-[30px] rounded-full custom_gradient_two flex items-center justify-center text-sm'>
                    5
                </div>
            </div>
            <div className='w-full laptop:w-[45%] color-pink pl-8 laptop:pl-0'>
                <p>November 18, 2023</p>
            </div>
        </div>
        
        {/*  =================================== 6 ================================= */}
        {/*  =================================== 6 ================================= */}
        
        <div className='laptop:h-[130px] flex flex-wrap-reverse items-end justify-between relative'>
            <div className='w-full laptop:w-[45%] color-pink pl-8 laptop:pl-0'>
                <p className='laptop:text-right'>November 18, 2023</p>
            </div>
            <div className='absolute top-0 left-[-10px] laptop:static h-full flex flex-col items-center gap-2 pt-1'>
                <div className='min-w-[2px] min-h-[80%] bg-pink'>
                    
                </div>
                <div className='min-w-[30px] min-h-[30px] rounded-full custom_gradient_two flex items-center justify-center text-sm'>
                    6
                </div>
            </div>
            <div className='w-full laptop:w-[45%] text-left pl-8 laptop:pl-0'>
                <h1 className='font-bold color-pink'>Demo Day</h1>
                <p className='mt-2 text_primary'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
            </div>
        </div>
        
        {/*  ==================================================================== */}
        {/*  ==================================================================== */}
        
      </div>
    </div>
  )
}

export default Timeline;
