import React, {useState} from 'react'
import Navbar from '../components/Navbar';

import Designer from '../assets/images/designer.png';
import Man from '../assets/images/walking_male.png';
import Woman from '../assets/images/walking_female.png';
import Checkmark from '../assets/images/checkmark_big.png';
import Success from '../assets/images/success.png';
import Emoji from '../assets/images/emoji.png';


const Register = () => {

  const [validated, setValidated] = useState(false);
  const [formInfos, setFormInfos] = useState({
    email: '',
    phone_number: '',
    team_name: '',
    group_size: '',
    project_topic: '',
    category: '',
    privacy_policy_accepted: ''
  });

  const [errors, setErrors] = useState({});

  // ========= ======== FORM VALIDATION ========= //
  // ========= ======== FORM VALIDATION ========= //

  function isValidEmail(email) {

    //========================= Regular Expression for Email validation ====================//

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

  }
  
   const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (formInfos.team_name.trim() === '') {
      newErrors.team_name = 'Team name is required';
      valid = false;
    }

    if (formInfos.phone_number.trim() === '') {
      newErrors.phone_number = 'Phone number is required';
      valid = false;
    }
    

    if (formInfos.project_topic.trim() === '') {
      newErrors.project_topic = 'Project topic is required';
      valid = false;
    }

    if (formInfos.category === '') {
      newErrors.category = 'Please choose your group category';
      valid = false;
    }

    if (formInfos.group_size === '') {
      newErrors.group_size = 'Please choose your group size';
      valid = false;
    }

    if (!(formInfos.privacy_policy_accepted)) {
      newErrors.privacy_policy_accepted = 'Privacy policy acceptance is required';
      valid = false;
    }
    
    if (!isValidEmail(formInfos.email.trim())) {
      newErrors.email = 'Email is not valid';
      valid = false;
     }
     
     if (formInfos.email.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    }
     
    setErrors(newErrors);

    return valid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // ======================== CHECKING IF FORM IS VALID ======================== //
    
    if (validateForm()) {
      const baseUrl = 'https://backend.getlinked.ai';
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify(formInfos);
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      try {
        fetch(`${baseUrl}/hackathon/registration`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        setFormInfos({
          email: '',
          phone_number: '',
          team_name: '',
          group_size: '',
          project_topic: '',
          category: '',
          privacy_policy_accepted: ''
        })
        setValidated(true);
      }
      catch (err) {
        console.log('err');
      }
    }
    else {
      console.log(errors);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="pt-28 w-full px-5 laptop:px-[100px] flex flex-wrap items-center justify-center laptop:justify-between pb-4 laptop:pb-10">


        {/******* ================================  Successful Registration Modal Box  =========================== *******/}
        {/******* ================================  Successful Registration Modal Box  =========================== *******/}
        {/******* ================================  Successful Registration Modal Box  =========================== *******/}

        <div className={`fixed z-[111] bg-[#150e28ed] left-0 right-0 top-0 bottom-0 w-full h-screen ${validated ? 'visible' : 'invisible'} flex items-center justify-center transition-[visibility] ease duration-300`}>
          <div className={`w-[90%] laptop:w-[50%] max-w-[550px] min-h-[300px] border border-[#D434FE] flex items-center flex-col  relative px-5 py-6 laptop:py-20 laptop:px-20 ml-[-200%] ${validated ? 'ml-[0%]' : 'ml-[-200%]'} transition-ml ease duration-300`}>
            <div className='flex items-center w-full h-[100px] my-6'>
              <div className='w-full laptop:w-[40%]'>
                <img src={Checkmark} className='w-full' alt="" />
              </div>
              <div className=''>
                <img src={Success} className='w-full' alt="" />
              </div>
            </div>
            <div>
              <h1 className='text-center text-[13px] mt-4 tablet:text-[18px]'>Congratulations <p>you have succesfully Registered!</p></h1>
              <p className='text-[#bdbcbc] text-[11px] tablet:text-[14px] text-center mt-3'>Yes it was easy and you did it!</p>
              <div className='text-[#bdbcbc] text-[11px] tablet:text-[14px] text-center flex items-center justify-center gap-2'>check your mail box for the next step <div><img src={Emoji} alt="" /></div></div>
              <button className='custom_btn mt-5 w-full' onClick={() => setValidated(false)}>Back</button>
            </div>
          </div>
        </div>

        <div className='w-[75%] laptop:w-[45%]'>
          <img src={Designer} className='w-full' alt="" />
        </div>

        <div className='w-full laptop:w-[48%] laptop:bg-[#1c152e] shadow-xl py-[30px] laptop:px-[55px] rounded-md'>
          <h1 className='color-pink '>Register</h1>

          <div className='flex w-full gap-3 items-baseline '>
            <p className='text-[12px] text-[#bdbcbc] mobile:text-[14px]'>Be part of this movement </p>
            <div className='flex flex-col items-center'>
              <div className='flex items-center'>
                <img src={Man} alt="" />
                <img src={Woman} alt="" />
              </div>
              <span className='mt-[-14px] color-pink'>.......................</span>
            </div>
          </div>

          <h1 className='text-xl mt-3'>CREATE YOUR ACCOUNT</h1>

          {/* ======================= Registration form container ================== */}
          {/* ======================= Registration form container ================== */}
          {/* ======================= Registration form container ================== */}

          <form onSubmit={handleFormSubmit} action="" className='w-full flex flex-wrap justify-center tablet:justify-between gap-4 mt-7'>

            <div className='w-full tablet:w-[48%]'>
              <label htmlFor="team_name" className='text-[11px] mobile:text-sm'>Team's Name</label>

              <input name="team_name" type="text" className='w-full text-[11px] mt-1 bg-[#201930] outline-none px-4 py-2 rounded-[4px] border border-[#bbbbbb] placeholder:text-[#878686]' placeholder='Enter the name of your group' value={formInfos.team_name} onChange={(e) => {
                setFormInfos({...formInfos, team_name:e.target.value})
              }} />
              {errors.team_name && <small className='text-red-600'>{errors.team_name}</small>}

            </div>

            <div className='w-full tablet:w-[48%]'>
              <label htmlFor="phone_number" className='text-[11px] mobile:text-sm'>Phone</label>

              <input name="phone_number" type="tel" className='w-full text-[11px] mt-1 bg-[#201930] outline-none px-4 py-2 rounded-[4px] border border-[#bbbbbb] placeholder:text-[#878686]' placeholder='Enter your phone number' value={formInfos.phone_number} onChange={(e)=> {
                setFormInfos({...formInfos, phone_number:e.target.value})
              }} />
              {errors.phone_number && <small className='text-red-600'>{errors.phone_number}</small>}

            </div>

            <div className='w-full tablet:w-[48%]'>
              <label htmlFor="email" className='text-[11px] mobile:text-sm'>Email</label>

              <input name="email" type="email" className='w-full text-[11px] mt-1 bg-[#201930] outline-none px-4 py-2 rounded-[4px] border border-[#bbbbbb] placeholder:text-[#878686]' placeholder='Enter your email address' value={formInfos.email} onChange={(e) => {
                setFormInfos({...formInfos, email:e.target.value})
              }} />
              {errors.email && <small className='text-red-600'>{errors.email}</small>}

            </div>

            <div className='w-full tablet:w-[48%]'>
              <label htmlFor="project_topic" className='text-[11px] mobile:text-sm'>Project Topic</label>

              <input name="project_topic" type="text" className='w-full text-[11px] mt-1 bg-[#201930] outline-none px-4 py-2 rounded-[4px] border border-[#bbbbbb] placeholder:text-[#878686]' placeholder='What is your group project topic' value={formInfos.project_topic} onChange={(e) => {
                setFormInfos({...formInfos, project_topic:e.target.value})
              }} />
              {errors.project_topic && <small className='text-red-600'>{errors.project_topic}</small>}

            </div>

            <div className='w-full mobile:w-[46%] tablet:w-[48%] mr-auto'>
              <label htmlFor="category" className='text-[11px] mobile:text-sm'>Category</label>
              <select name="category" className='w-full text-[11px] mt-1 bg-[#201930] outline-none px-2 py-2 rounded-[4px] border border-[#bbbbbb]' value={formInfos.category} onChange={(e) => {
                setFormInfos({...formInfos, category: e.target.value})
              }} >
                <option value="" disabled>Select your category</option>
                <option value={1}>MOBILE</option>
                <option value={2}>WEB</option>
                <option value={3}>UI/UX</option>
              </select>
              {errors.category && <small className='text-red-600'>{errors.category}</small>}

            </div>

            <div className='w-full mobile:w-[46%] tablet:w-[48%] ml-auto'>
              <label htmlFor="group_size" className='text-[11px] mobile:text-sm'>Group Size</label>

              <select name="group_size" className='w-full text-[11px] mt-1 bg-[#201930] outline-none px-2 py-2 rounded-[4px] border border-[#bbbbbb]' value={formInfos.group_size} onChange={(e) => {
                setFormInfos({...formInfos, group_size:e.target.value});
              }} >
                <option value="" disabled>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="10">10</option>
              </select>
              {errors.group_size && <small className='text-red-600'>{errors.group_size}</small>}

            </div>

            <div className='mt-3'>
              <p className='color-pink italic text-[10px] mobile:text-[13px]'>Please review your registration details before submitting</p>
              <div className='flex items-start laptop:items-center gap-2 mt-2'>

                <input type="checkbox" name="privacy_policy_accepted" className='mt-1 laptop:mt-0' value={formInfos.privacy_policy_accepted} onChange={(e) => {
                  setFormInfos({ ...formInfos, privacy_policy_accepted: e.target.checked })
                }} />

                <label htmlFor='privacy_policy_accepted' className='text-[11px] tablet:text-[#bdbcbc] laptop:text-[13px]'>I agreed with the event terms and conditions  and privacy policy</label>
              </div>
              {errors.privacy_policy_accepted && <small className='text-red-600'>{errors.privacy_policy_accepted}</small>}
            </div>

            <div className='w-full flex justify-center mt-3'>
              <button className='custom_btn w-full'>Submit</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Register
