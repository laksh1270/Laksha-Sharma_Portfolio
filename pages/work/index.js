import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';
import WorkSlider from '@/components/WorkSlider';
import { RxArrowTopRight } from 'react-icons/rx';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';

const workProjects = [
  {
    num: "01",
    category: 'Backend Interpreted',
    title: 'Pascal',
    description: 'Pascal is a custom-built programming language interpreted by a Python backend. It features variables, logical operations, loops, lists, and powerful functions.',
    techStack: 'Python, Custom Parser',
    liveUrl: 'https://github.com/laksh1270/Pascal',
    githubUrl: 'https://github.com/laksh1270/Pascal',
  },
  {
    num: "02",
    category: 'Full-Stack Platform',
    title: 'NovaFound',
    description: 'A Next.js platform allowing users to pitch startups, vote on ideas, and get noticed in virtual competitions with a rich UI and smooth animations.',
    techStack: 'Next.js, Tailwind, Framer',
    liveUrl: 'https://nova-found.vercel.app',
    githubUrl: 'https://github.com/laksh1270/NovaFound',
  }
];

const Work = () => {
  const [project, setProject] = useState(workProjects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(workProjects[currentIndex]);
  };

  return (
    <div className="h-full bg-primary/30 py-36 pt-40 xl:pt-48 flex items-center overflow-y-auto xl:overflow-hidden">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 mt-4 sm:mt-12 xl:mt-0 px-4 sm:px-0 items-center xl:items-start">

          {/* text */}
          <div className="text-center flex xl:w-[45vw] flex-col lg:text-left mb-6 xl:mb-0">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col mb-12 xl:mb-16 hidden xl:block"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4 xl:mb-6 leading-tight xl:mt-0">
                My work <span className="text-accent">.</span>
              </h2>
              <p className="max-w-[400px] mx-auto lg:mx-0 text-xs sm:text-sm hidden sm:block text-white/80">
                A selection of my recent projects. Swipe to see more details about each.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col gap-y-2 sm:gap-y-3 xl:justify-center z-10"
            >
              {/* outline num */}
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-none font-extrabold text-transparent transition-all duration-500" style={{ WebkitTextStroke: '2px white' }}>
                {project.num}
              </div>

              {/* project category */}
              <h3 className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h3>

              {/* project description */}
              <p className="text-white/60 text-[11px] sm:text-xs md:text-sm max-w-[500px] mx-auto lg:mx-0">
                {project.description}
              </p>

              {/* stack */}
              <div className="text-accent font-semibold text-[11px] sm:text-xs md:text-sm">
                {project.techStack}
              </div>

              {/* border */}
              <div className="border-b border-white/20 w-full mb-1 sm:mb-2 hidden sm:block"></div>

              {/* buttons */}
              <div className="flex items-center gap-3 justify-center lg:justify-start mt-1">
                {/* live project button */}
                <Link href={project.liveUrl} target="_blank" className="relative group w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center hover:bg-white/20 transition-all duration-300">
                  <div className="absolute -top-10 opacity-0 lg:group-hover:opacity-100 transition-all duration-300 bg-white text-primary px-2 py-1 font-semibold text-[10px] sm:text-xs rounded-md whitespace-nowrap pointer-events-none">
                    Live project
                  </div>
                  <RxArrowTopRight className="text-lg sm:text-xl text-white group-hover:text-accent transition-all duration-300" />
                </Link>

                {/* github project button */}
                <Link href={project.githubUrl} target="_blank" className="relative group w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center hover:bg-white/20 transition-all duration-300">
                  <div className="absolute -top-10 opacity-0 lg:group-hover:opacity-100 transition-all duration-300 bg-white text-primary px-2 py-1 font-semibold text-[10px] sm:text-xs rounded-md whitespace-nowrap pointer-events-none">
                    Github Repository
                  </div>
                  <BsGithub className="text-lg sm:text-xl text-white group-hover:text-accent transition-all duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[55%] mt-4 xl:mt-0"
          >
            {/* Header alternative spot for mobile: moving title above slider to save space and organize better for mobile */}
            <div className="block xl:hidden mb-2 sm:mb-4 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 leading-tight">
                My work <span className="text-accent">.</span>
              </h2>
              <p className="max-w-[400px] mx-auto lg:mx-0 text-xs sm:text-sm hidden sm:block">
                A selection of my recent projects. Swipe to see more details about each.
              </p>
            </div>

            <WorkSlider handleSlideChange={handleSlideChange} />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
