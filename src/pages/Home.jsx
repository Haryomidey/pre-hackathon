import React, { useRef } from 'react';

// import { Context } from '../context/ContextWrapper';

// Import Components
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PurpleLens from '../assets/images/purple_lens.png';
import CurvedArrow from '../assets/images/arrow.png';
import Star from '../assets/images/star.png';
import StarPurple from '../assets/images/star_purple.png';
import StarBlur from '../assets/images/star_blur.png';
import RuleAndGuidline from '../components/RuleAndGuidline';
import Introduction from '../components/Introduction';
import JudgingCriteria from '../components/JudgingCriteria';
import FAQ from '../components/FAQ.jsx';
import Timeline from '../components/Timeline';
import TrophySection from '../components/TrophySection';
import Partners from '../components/Partners';
import Privacy from '../components/Privacy';
import Footer from '../components/Footer';


const Home = () => {

    const timeline = useRef();
    const overview = useRef();
    const faqs = useRef();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // const { timeline, overview, faqs } = useContext(Context);

  return (
    <div className='w-full'>
      <Navbar timeline={timeline} overview={overview} faqs={faqs} scrollToSection={scrollToSection}  />
      <div className='px-2 mobile:px-5 tablet:px-[50px] laptop:px-[100px] pt-20'>
        <HeroSection PurpleLens={PurpleLens} Star={Star} StarBlur={StarBlur} />
        <Introduction StarPurple={StarPurple} CurvedArrow={CurvedArrow} overview={overview} />
        <RuleAndGuidline PurpleLens={PurpleLens} Star={Star} StarBlur={StarBlur} />
        <JudgingCriteria Star={Star} StarPurple={StarPurple} StarBlur={StarBlur} PurpleLens={PurpleLens} />
        <FAQ PurpleLens={PurpleLens} StarPurple={StarPurple} StarBlur={StarBlur} Star={Star} faqs={faqs} />
        <Timeline StarPurple={StarPurple} Star={Star} StarBlur={StarBlur} timeline={timeline} />
        <TrophySection StarPurple={StarPurple} Star={Star} />
        <Partners PurpleLens={PurpleLens} StarPurple={StarPurple} Star={Star} />
        <Privacy PurpleLens={PurpleLens} StarPurple={StarPurple} Star={Star} StarBlur={StarBlur} />
      </div>
      <Footer StarPurple={StarPurple} Star={Star} StarBlur={StarBlur} />
    </div>
  )
}

export default Home
