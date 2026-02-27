// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 min-h-screen relative overflow-hidden'>
      {/* text */}
      <div className='w-full min-h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center pt-24 xl:pt-28 xl:text-left h-full container mx-auto relative z-10'>
          
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 block max-w-[640px]'
          >
            Transforming Ideas <br />
            Into <span className='text-accent'>Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-12 block'
          >
            A full-stack developer passionate about building reliable, high-performance
            web products using modern technologies. Focused on continuous learning,
            clean architecture, and meaningful user experiences.
          </motion.p>

          {/* mobile btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>

          {/* desktop btn */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:block'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* right visuals */}
      <div className='w-[1000px] h-full absolute right-0 top-0 pointer-events-none'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge'></div>

        <ParticlesContainer />

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='absolute bottom-0 right-[15%] z-30 scale-85'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
