import React, {useState, useRef} from 'react'

// Import images
import Thinker from '../assets/images/thinking.png';
import Faqs from '../components/Faq';
import questionMarkBig from '../assets/images/question_mark_center.png';
import questionMark from '../assets/images/question_mark.png';

const FAQ = ({ StarPurple, StarBlur, Star, faqs }) => {
    
    const [activeIndex, setActiveIndex] = useState(null);


    // ==================   Function to toggle FAQS accordion    =================== //
    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
        console.log(index)
    };




    return (
        <div className='flex items-center flex-wrap gap-[20px] laptop:gap-0 pb-5 mt-40 relative' ref={faqs}>
        {/* ================ ABSOLUTE IMAGES CONTAINER ================ */}
        <div>
            <img src={StarPurple} className='absolute left-[] top-[-5%]' alt="" />
            <img src={StarPurple} className='absolute left-[60%] top-[17%]' alt="" />
            <img src={StarPurple} className='absolute left-[73%] top-[-10%]' alt="" />
            <img src={StarBlur} className='absolute left-[52%] top-[]' alt="" />
            <img src={Star} className='absolute right-[10%] bottom-[-10%]' alt="" />
        </div>
        <div className='w-full laptop:w-[50%]'>
            <h1 className='text-sm font-semibold text-[21px] text-center laptop:text-left leading-8 pb-3 laptop:pb-0 laptop:text_secondary'>Frequently Ask <br /> <span className='color-pink'>Question</span></h1>
            <div>
                We got answers to the questions that you might
                <br />
                <p>want to ask about <b>getlinked Hackathon 1.0</b></p>
            </div>
            
            <div className='laptop:w-[90%] mt-12 flex flex-col gap-7 faqs_wrapper'>
                
                {/* ================= Mapping through the FAQs array to display FAQS Container ================ */}
                {/* ================= Mapping through the FAQs array to display FAQS Container ================ */}
                
                {Faqs.map((faq, index) => (
                    <div className={`w-full border-b border-[#D434FE] pb-2 cursor-pointer overflow-hidden ${activeIndex === index ? 'h-[120px] laptop:h-[130px]' : 'h-[30px] '} transition-h ease duration-300`} onClick={() => toggleAccordion(index)} key={faqs.id}>
                        <p className=' flex items-center justify-between text-[10px] mobile:text-[11px] laptop:text-sm'>{faq.question}<span className='color-pink text-lg'>{activeIndex === index ? "-" : "+"}</span></p>
                        <div className='mt-4 text-[#c9c9c9] text-[10px] mobile:text-[11px] laptop:text-sm'>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        <div className='w-full laptop:w-[50%] mt-20 laptop:mt-0 relative'>
            <img src={Thinker} className='w-full' alt=""  />
            <div className='w-full laptop:w-[60%] absolute top-[-23%] flex items-center justify-between px-10 laptop:px-0'>
                <img src={questionMark} className='mt-10' alt="" />
                <img src={questionMarkBig} alt="" />
                <img src={questionMark} className='mt-12' alt="" />
            </div>
        </div>
    </div>
  )
}

export default FAQ;

