import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import CountUp from 'react-countup'; // ✅ FIXED IMPORT

// react-icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiRedux,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiSanity,
  SiGooglecloud,
  SiAmazonaws,
  SiPostman,
  SiVisualstudiocode,
} from 'react-icons/si';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Circles = dynamic(() => import('../../components/Circles'), {
  ssr: false,
});

/* ===============================
   DATA
   =============================== */
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Languages',
        icons: [
          { icon: FaJs, name: 'JavaScript' },
          { icon: SiTypescript, name: 'TypeScript' },
          { icon: SiPython, name: 'Python' },
          { png: 'cpp.png', name: 'C++', size: 36 },
          { png: 'go.png', name: 'Go', size: 40 },
          { png: 'java.png', name: 'Java', size: 40 },
        ],
      },
      {
        title: 'Web & Frameworks',
        icons: [
          { icon: SiNextdotjs, name: 'Next.js' },
          { icon: FaReact, name: 'React' },
          { icon: SiRedux, name: 'Redux' },
          { icon: SiNodedotjs, name: 'Node.js' },
          { icon: FaHtml5, name: 'HTML5' },
          { icon: FaCss3, name: 'CSS3' },
          { icon: SiTailwindcss, name: 'Tailwind CSS' },
          { icon: SiBootstrap, name: 'Bootstrap' },
          { icon: FaWordpress, name: 'WordPress' },
          { png: 'gsap.svg', name: 'GSAP', size: 32 },
          { png: 'framer.png', name: 'Framer Motion', size: 30 },
        ],
      },
      {
        title: 'Databases',
        icons: [
          { icon: SiMongodb, name: 'MongoDB' },
          { icon: SiFirebase, name: 'Firebase' },
          { icon: SiPostgresql, name: 'PostgreSQL' },
          { icon: SiSanity, name: 'Sanity' },
          { png: 'neon.png', name: 'Neon', size: 24 },
        ],
      },
      {
        title: 'Cloud Technologies',
        icons: [
          { icon: SiGooglecloud, name: 'Google Cloud' },
          { icon: SiAmazonaws, name: 'AWS' },
          { png: 'databricks.png', name: 'Databricks', size: 28 },
        ],
      },
      {
        title: 'Tools',
        icons: [
          { icon: FaGitAlt, name: 'Git' },
          { icon: FaGithub, name: 'GitHub' },
          { icon: FaDocker, name: 'Docker' },
          { icon: SiVisualstudiocode, name: 'VS Code' },
          { icon: SiPostman, name: 'Postman' },
        ],
      },
    ],
  },

  {
    title: 'education',
    info: [
      {
        title: 'B.Tech in Computer Science',
        stage: '2022 – 2026',
        desc: 'JECRC University, Jaipur',
      },
      {
        title: 'Senior Secondary (Class XII)',
        stage: '2022',
        desc: 'SJ Public School (CBSE) – PCM',
      },
      {
        title: 'Secondary (Class X)',
        stage: '2020',
        desc: 'SJ Public School (CBSE)',
      },
    ],
  },

  {
    title: 'credentials',
    info: [
      { title: 'Google Cloud Engineering Certificate', stage: 'Dec 2024', desc: 'Google Launchpad' },
      { title: 'Google Cloud Big Data & ML Fundamentals', stage: 'Nov 2023', desc: 'Google Coursera' },
      { title: 'Python 101 for Data Science', stage: 'Jan 2025', desc: 'IBM' },
      { title: 'Machine Learning with Python', stage: 'Jan 2025', desc: 'IBM' },
      { title: 'Software Engineer Certification', stage: 'Apr 2025', desc: 'HackerRank' },
      { title: 'Foundations of Cybersecurity', stage: 'Mar 2024', desc: 'Google Coursera' },
    ],
  },
];

export default function About() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative min-h-screen bg-primary/30 py-32 pb-24">
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-[-80px] left-[-140px]"
      >
        <Image src="/Avatar-about.png" width={350} height={990} alt="avatar" />
      </motion.div>

      <div className="container mx-auto flex flex-col xl:flex-row gap-x-12">
        {/* LEFT */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="flex-1 text-center xl:text-left mb-12"
        >
          <div className="max-w-xl mx-auto xl:mx-0">
            <motion.h3
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3">
              Crafting <span className="text-accent">Scalable</span> systems and captivating digital experincies.
            </motion.h3>

            <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
             className="hidden md:block max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              I’m a Computer Science undergraduate and full-stack developer focused on building scalable, high-performance web applications using modern technologies like React, Next.js, Node.js, and cloud platforms. I enjoy turning complex ideas into clean, reliable, and user-centric digital products.
            </motion.p>
          </div>
          
        <div className="flex flex-1 hidden md:flex xl:gap-x-6">
          {/* Projects Counter */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absoluteafter:top-0 after:right-0 ">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={10} duration={5} />+
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Projects</div>
          </div>
          {/* Certificates */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absoluteafter:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={30} duration={3} />+
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Certificates</div>
          </div>
          {/* skills */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absoluteafter:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={20} duration={4} />+
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Skills</div>
          </div>
          {/* Frameworks */}
          <div className="relative flex-1">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={12} duration={3} />+
            </div>
            <div className="text-xs uppercase tracking-[1px] max-w-[120px]">
              Frameworks & Libraries
            </div>
        </div>
        </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          className="flex-1"
        >
          <div className="flex justify-center xl:justify-start gap-x-6 mb-6">
            {aboutData.map((item, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`capitalize relative
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                  after:bg-white after:transition-all
                  ${index === i ? 'after:w-8 text-accent' : 'after:w-0'}
                `}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div
            className="
              max-h-[calc(100svh-300px)]
              md:max-h-[460px]
              overflow-y-auto
              pr-3
              pb-[120px]
              scrollbar-thin
              scrollbar-thumb-white/20
              scrollbar-track-transparent
            "
          >
            <div className="flex flex-col gap-y-8">
              {aboutData[index].info.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center md:items-start md:flex-row md:gap-x-6"
                >
                  <div className="w-full md:w-[220px] text-center md:text-left text-white/60">
                    {item.title}
                  </div>

                  {item.icons ? (
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      {item.icons.map((ic, idx) => (
                        <div key={idx} className="relative group">
                          {ic.icon && <ic.icon size={26} />}
                          {ic.png && (
                            <Image
                              src={`/icons/${ic.png}`}
                              width={ic.size}
                              height={ic.size}
                              alt={ic.name}
                            />
                          )}
                          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2
                            text-xs bg-black/80 px-2 py-1 rounded opacity-0
                            group-hover:opacity-100 transition whitespace-nowrap">
                            {ic.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col text-center md:text-left">
                      <div className="text-sm text-white/60">{item.stage}</div>
                      <div className="text-sm text-white/40">{item.desc}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
