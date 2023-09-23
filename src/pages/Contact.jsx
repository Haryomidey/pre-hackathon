import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import Instagram from '../assets/images/instagram.png';
import X from '../assets/images/x.png';
import Facebook from '../assets/images/facebook.png';
import LinkedIn from '../assets/images/linkedin.png';

 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [formInfos, setFormInfos] = useState({
        email: '',
        phone_number: '',
        first_name: '',
        message: '',
      });

    const [errors, setErrors] = useState({});

    // ========= ======== FORM VALIDATION ========= //
  // ========= ======== FORM VALIDATION ========= //
    function isValidEmail(email) {

        //=============== Regular Expression for Email validation ==============//

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);

    }

    const validateForm = () => {
        let valid = true;
        let newErrors = {};

        if (!isValidEmail(formInfos.email.trim())) {
            newErrors.email = 'Email is not valid';
            valid = false;
        }
        
        if (formInfos.email.trim() === '') {
            newErrors.email = 'Email is required';
            valid = false;
        }
        
        if (formInfos.first_name.trim() === '') {
            newErrors.first_name = 'First name is required';
            valid = false;
        }

        if (formInfos.phone_number.trim() === '') {
            newErrors.phone_number = 'Phone number is required';
            valid = false;
        }

        if (formInfos.message.trim() === '') {
            newErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(newErrors);

        return valid;

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const baseUrl = 'https://backend.getlinked.ai';
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(formInfos);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            try {
                fetch(`${baseUrl}/hackathon/contact-form`, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            toast.success('Message sent succesfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            console.log(errors);
        }
    }

  return (
    <div>
        <Navbar />
        
        <ToastContainer />
        
        <div className="w-full px-5 laptop:px-[130px] pt-24 tablet:py-16 pb-10">
            <div className="w-full hero-height flex items-center flex-wrap justify-center laptop:justify-between">
                <div className='w-full laptop:w-[45%] hidden laptop:block pl-[50px]'>
                    <h1 className='text_secondary color-pink'>Get in touch</h1>
                    <div>
                        <p className='w-[28%] pb-4'>Contact Information</p>
                        <p className='w-[28%] pb-4'>27, Alare Street Yaba 100012 Lagos State</p>
                        <p className='pb-4'>Call us: 07067981819</p>
                        <p className='pb-4'>We are open from Monday - Friday <br />08:00am - 05:00pm</p>
                        <div className='mt-3'>
                            <p className='color-pink pb-3'>Share on</p>
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
                        </div>
                    </div>
                </div>
                <div className='w-full laptop:w-[45%] laptop:bg-[#1c152e] laptop:shadow-xl px-5 tablet:px-20 laptop:mt-16 laptop:py-10 rounded-md'>
                    <h1 className='color-pink'>Questions or need assistance? us know  about it!</h1>
                    
                    {/* ======================= Form Container ======================= */}
                    {/* ======================= Form Container ======================= */}
                    {/* ======================= Form Container ======================= */}
                    {/* ======================= Form Container ======================= */}
                    
                    <form method='POST' className='w-full flex flex-col mt-7' onSubmit={handleFormSubmit}>
                        <input type="text" name='first_name' className='w-full bg-[#201930] outline-none px-4 py-2 rounded-[4px] border border-[#bbbbbb] placeholder:text-[#cecece]' placeholder='First Name' value={formInfos.first_name} onChange={(e) => setFormInfos({...formInfos, first_name: e.target.value})}/>
                        
                        {errors.first_name && <small className='text-red-600 mt-1'>{errors.first_name}</small>}
                        
                        <input type="email" name='email' className='w-full bg-[#201930] outline-none px-4 py-2 rounded-[4px] border border-[#bbbbbb] placeholder:text-[#cecece] mt-4' placeholder='Mail' value={formInfos.email} onChange={(e) => setFormInfos({...formInfos, email: e.target.value})}/>
                        
                        {errors.email && <small className='text-red-600 mt-2'>{errors.email}</small>}

                        <input type="text" name='phone_number' className='w-full bg-[#201930] outline-none px-4 py-2 rounded-[4px] border border-[#bbbbbb] placeholder:text-[#cecece] mt-4' placeholder='Phone number' value={formInfos.phone_number} onChange={(e) => setFormInfos({...formInfos, phone_number: e.target.value})} />
                        
                        {errors.phone_number && <small className='text-red-600 mt-2'>{errors.phone_number}</small>}
                        
                        <textarea name='message' className='w-full h-[150px] laptop:h-[100px] bg-[#201930] outline-none px-4 pt-1 pb-2 rounded-[4px] border border-[#bbbbbb] resize-none placeholder:text-[#cecece] mt-4' placeholder='Message' value={formInfos.message} onChange={(e) => setFormInfos({...formInfos, message: e.target.value})}>
                        </textarea>
                        
                        {errors.message && <small className='text-red-600 mt-2'>{errors.message}</small>}
                        
                        <div className='w-full flex justify-center mt-4'>
                            <button className='custom_btn'>Submit</button>
                        </div>
                    </form>
                    <div className='flex flex-col items-center gap-2 mt-4'>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
