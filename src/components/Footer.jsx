import React from 'react';
import { Link } from 'react-router-dom';

import Instagram from '../assets/images/instagram.png';
import X from '../assets/images/x.png';
import Facebook from '../assets/images/facebook.png';
import LinkedIn from '../assets/images/linkedin.png';
import Location from '../assets/images/location.png';
import Call from '../assets/images/call.png';

const Footer = ({StarPurple, Star, StarBlur}) => {
    return(
        <div className="min-h-[60vh] bg-[#100b20] relative">
            {/* ===================== ABSOLUTE IMAGES ================== */}
            <img src={Star} className='w-[13px] absolute left-[2%] top-[20%]' alt="" />
            <img src={StarPurple} className='w-[13px] absolute left-[45%] bottom-[20%]' alt="" />
            <img src={StarBlur} className='w-[13px] absolute right-[30%] top-[20%]' alt="" />
            <img src={Star} className='w-[14px] absolute right-[5%] bottom-[30%]' alt="" />

            <div className='w-full p-5 laptop:p-20 flex flex-wrap gap-y-10 justify-between'>
                <div className='w-full laptop:w-[42%] mt-10 laptop:mt-[-20px]'>
                    <h1 className='font-bold text-xl mb-2'>get<span className='text-[#D434FE]'>linked</span></h1>
                    <p className='text_primary'>
                        Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
                    </p>
                    <div className='h-[20px] flex items-center gap-6 mt-10 laptop:mt-20 text-sm'>
                        <span>Term of Use</span>
                        <span className='w-[2px] h-full bg-[#D434FE]'></span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
                <div className='w-full laptop:w-[20%] h-full'>
                    <h1 className='color-pink pb-3'>Useful Links</h1>
                    <ul className='flex flex-col gap-2 w-auto'>
                        <li className='hover:color-pink transition-colors duration-300 ease'><Link to=''>Overview</Link></li>
                        <li className='hover:color-pink transition-colors duration-300 ease'><Link to=''>Timeline</Link></li>
                        <li className='hover:color-pink transition-colors duration-300 ease'><Link to=''>FAQs</Link></li>
                        <li className='hover:color-pink transition-colors duration-300 ease'><Link to=''>Register</Link></li>
                        <li className='flex items-center gap-4'>
                            <p className='color-pink mt-2'>Follow us</p>
                            <ul className='flex items-center gap-3'>
                                <li>
                                    <Link><img src={Instagram} alt="" /></Link>
                                </li>
                                <li>
                                    <Link><img src={X} alt="" /></Link>
                                </li>
                                <li>
                                    <Link><img src={Facebook} alt="" /></Link>
                                </li>
                                <li>
                                    <Link><img src={LinkedIn} alt="" /></Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='w-full laptop:w-[20%] h-full'>
                    <h1 className='color-pink pb-3'>Contact Us</h1>
                    <ul className='flex flex-col gap-4 w-[62%]'>
                        <li className='flex gap-4'>
                            <div className='w-[15px] mt-1'>
                                <img src={Call} className='w-full' alt="" />
                            </div>
                            <p className='text-sm'>+234 670765344</p>
                        </li>
                        <li className='flex gap-4'>
                            <div className='w-[25px] mt-1'>
                                <img src={Location} className='w-full' alt="" />
                            </div>
                            <p className='text-sm'>27,Alara Street Yaba 100012 Lagos State</p>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='py-8 text-center text-sm'>All rights reserved. &copy; getlinked Ltd.</p>
        </div>
    )
}

export default Footer;