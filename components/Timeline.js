import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]); // we might need resize observer to handle window resize later, but for now this is fine.

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 20%', 'end 80%'],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className='w-full font-sans max-w-7xl mx-auto' ref={containerRef}>
            <div ref={ref} className='relative pb-20'>
                {data.map((item, index) => (
                    <div key={index} className='flex justify-start pt-10 md:pt-24 lg:pt-32 md:gap-8'>
                        {/* Left side for Desktop - Sticky */}
                        <div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
                            {/* Dot */}
                            <div className='h-8 absolute left-4 md:left-4 w-8 rounded-full bg-[#1a1a2e] flex items-center justify-center'>
                                <div className={`h-3 w-3 rounded-full border p-1 ${item.title.includes('Present') ? 'bg-accent/80 border-accent' : 'bg-accent/20 border-accent/50'}`} />
                            </div>
                            <h3 className={`hidden md:block text-2xl md:text-3xl lg:text-4xl font-extrabold pl-16 transition-all duration-300 ${item.title.includes('Present') ? 'text-white' : 'text-white/50 hover:text-accent'}`}>
                                {item.title}
                            </h3>
                        </div>

                        {/* Right side content */}
                        <div className='relative pl-16 pr-4 md:pl-0 w-full mb-8 last:mb-0'>
                            <h3 className={`md:hidden block text-2xl mb-4 text-left font-extrabold ${item.title.includes('Present') ? 'text-white' : 'text-accent'}`}>
                                {item.title}
                            </h3>
                            <div className='bg-primary/40 border border-white/5 rounded-2xl p-6 sm:p-8 transition-colors duration-300 hover:bg-white/5 w-full'>
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Animated Line */}
                <div
                    style={{
                        height: height + 'px',
                    }}
                    className='absolute md:left-[31px] left-[31px] top-0 overflow-hidden w-[2px] bg-white/5'
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                            willChange: 'height, opacity'
                        }}
                        className='absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-accent/0 via-accent/80 to-accent/0 rounded-full'
                    />
                </div>
            </div>
        </div>
    );
};
