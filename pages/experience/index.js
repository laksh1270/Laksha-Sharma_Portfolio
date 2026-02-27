import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Circles from '../../components/Circles';
import { Timeline } from '../../components/Timeline';

const experienceData = [
    {
        title: 'Jan 2026 - Present',
        content: (
            <div>
                <h4 className='text-xl md:text-2xl font-bold text-white mb-2'>
                    Project Trainee (Intern)
                </h4>
                <div className='text-accent font-semibold mb-2 text-sm md:text-base'>
                    Realbell Vedic Council of Educational Research & Training
                </div>
                <div className='text-white/50 text-xs md:text-sm mb-4 bg-primary/30 inline-block px-3 py-1 rounded-full border border-white/5'>
                    Remote
                </div>
                <p className='text-white/80 text-sm md:text-base mb-6 leading-relaxed'>
                    Working in the Project Development Team on AI-driven EdTech platforms focused on intelligent learning systems and scalable web applications. Contributing to the integration of modern AI/ML concepts into educational products to enhance personalization and system intelligence.
                </p>
                <div className='mb-6 flex flex-wrap gap-2'>
                    {['AI/ML', 'Cloud Infrastructure', 'Backend Architecture', 'DevOps'].map((tech, index) => (
                        <span key={index} className='px-3 py-1 bg-white/10 border border-white/5 text-white/80 text-[10px] sm:text-xs rounded-full'>
                            {tech}
                        </span>
                    ))}
                </div>
                <ul className='list-none space-y-3 text-white/80 text-sm md:text-base'>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Contributing to AI-powered learning modules and intelligent workflow systems</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Assisting in ML-integrated feature development for smart educational platforms</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Implementing data-driven enhancements to improve user engagement</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Supporting scalable backend architecture for AI-enabled systems</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Deploying and managing cloud-ready infrastructure using modern DevOps practices</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Maintaining clean code standards, structured documentation, and version control workflows</span>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Jun - Jul 2023',
        content: (
            <div>
                <h4 className='text-xl md:text-2xl font-bold text-white mb-2'>
                    Strategy Consulting Virtual Intern
                </h4>
                <div className='text-accent font-semibold mb-2 text-sm md:text-base'>
                    Accenture (via Forage)
                </div>
                <div className='text-white/50 text-xs md:text-sm mb-4 bg-primary/30 inline-block px-3 py-1 rounded-full border border-white/5'>
                    Remote
                </div>
                <p className='text-white/80 text-sm md:text-base mb-6 leading-relaxed'>
                    Completed a real-world consulting simulation focused on business transformation, structured problem-solving, and impact-driven decision making.
                </p>
                <div className='mb-6 flex flex-wrap gap-2'>
                    {['Strategic Analysis', 'Journey Mapping', 'Problem Solving'].map((tech, index) => (
                        <span key={index} className='px-3 py-1 bg-white/10 border border-white/5 text-white/80 text-[10px] sm:text-xs rounded-full'>
                            {tech}
                        </span>
                    ))}
                </div>
                <ul className='list-none space-y-3 text-white/80 text-sm md:text-base'>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Conducted project prioritization and strategic impact analysis</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Designed user journey mapping frameworks</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Evaluated business outcomes and provided structured recommendations</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Strengthened analytical thinking and client-oriented communication</span>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: '2023 - 2025',
        content: (
            <div>
                <h4 className='text-xl md:text-2xl font-bold text-white mb-2'>
                    Open Source Contributor – Hacktoberfest
                </h4>
                <div className='text-accent font-semibold mb-2 text-sm md:text-base'>
                    GitHub
                </div>
                <div className='text-white/50 text-xs md:text-sm mb-4 bg-primary/30 inline-block px-3 py-1 rounded-full border border-white/5'>
                    Global
                </div>
                <p className='text-white/80 text-sm md:text-base mb-6 leading-relaxed'>
                    Actively contributed to open-source repositories and collaborated with global developers through GitHub.
                </p>
                <div className='mb-6 flex flex-wrap gap-2'>
                    {['Open Source', 'Git/GitHub', 'Collaboration', 'Documentation'].map((tech, index) => (
                        <span key={index} className='px-3 py-1 bg-white/10 border border-white/5 text-white/80 text-[10px] sm:text-xs rounded-full'>
                            {tech}
                        </span>
                    ))}
                </div>
                <ul className='list-none space-y-3 text-white/80 text-sm md:text-base'>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Successfully completed 3+ validated pull requests</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Resolved bugs and implemented feature improvements</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Improved documentation and code readability</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Earned official Hacktoberfest swags for active participation</span>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: '2023 - Present',
        content: (
            <div>
                <h4 className='text-xl md:text-2xl font-bold text-white mb-2'>
                    Google Cloud Practitioner
                </h4>
                <div className='text-accent font-semibold mb-2 text-sm md:text-base'>
                    Google Cloud
                </div>
                <p className='text-white/80 text-sm md:text-base mb-6 leading-relaxed'>
                    Building and deploying scalable cloud-based applications while expanding expertise in cloud infrastructure and data systems.
                </p>
                <div className='mb-6 flex flex-wrap gap-2'>
                    {['GCP', 'Docker', 'Firebase', 'MongoDB', 'CI/CD'].map((tech, index) => (
                        <span key={index} className='px-3 py-1 bg-white/10 border border-white/5 text-white/80 text-[10px] sm:text-xs rounded-full'>
                            {tech}
                        </span>
                    ))}
                </div>
                <ul className='list-none space-y-3 text-white/80 text-sm md:text-base'>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Earned Google Cloud Engineering Certificate</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Worked with Compute Engine, Cloud Storage, IAM, and deployment pipelines</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Deployed containerized applications using Docker</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Integrated Firebase, MongoDB, and cloud-based backend services</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-accent mt-1.5'>▹</span>
                        <span className='flex-1'>Applied cloud architecture principles in production-ready projects</span>
                    </li>
                </ul>
            </div>
        ),
    }
];

const Experience = () => {
    return (
        <div className='h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-auto overflow-x-hidden scrollbar-none'>
            <Circles />
            <div className='container mx-auto h-full flex flex-col justify-start pt-12 xl:pt-24 pb-32'>
                {/* Header Section */}
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='flex flex-col mb-8 xl:mb-16 text-center w-full z-10'
                >
                    <h2 className='h2 mb-4'>
                        Experience <span className='text-accent'>.</span>
                    </h2>
                    <p className='max-w-[500px] mx-auto text-white/80 text-sm md:text-base'>
                        My professional journey in development, AI, cloud, and open source.
                    </p>
                </motion.div>

                {/* Timeline Section */}
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='w-full'
                >
                    <Timeline data={experienceData} />
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
