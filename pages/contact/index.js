import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Circles from '../../components/Circles';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', title: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-auto overflow-x-hidden scrollbar-none'>
      <Circles />
      <div className='container mx-auto h-full flex flex-col justify-start pt-20 md:pt-32 xl:pt-24 pb-40 xl:pb-32'>
        {/* Header Section */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col mb-8 xl:mb-16 text-center w-full z-10 mt-10 md:mt-0'
        >
          <h2 className='h2 mb-4'>
            Let&apos;s Connect <span className='text-accent'>.</span>
          </h2>
          <p className='max-w-[500px] mx-auto text-white/80 text-sm md:text-base'>
            Have an idea, opportunity, or just want to say hello? Let&apos;s build something great.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full max-w-[700px] mx-auto z-10 px-4 md:px-0 mb-28 xl:mb-0'
        >
          {/* Glassmorphism Card Matching Experience Section */}
          <div className='bg-primary/40 border border-white/5 rounded-2xl p-3 sm:p-6 md:p-10 transition-colors duration-300 hover:bg-white/5 w-full relative group mb-28 xl:mb-0'>
            {/* Glow effect matching background cards style */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"></div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-3 md:gap-6 w-full mx-auto'>
              {/* Input Group */}
              <div className='flex flex-col md:flex-row gap-3 md:gap-6 w-full'>
                <input
                  type='text'
                  name='name'
                  placeholder='Full Name'
                  aria-label='Full Name'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  className='bg-transparent border border-white/10 rounded-lg focus:border-accent focus:bg-white/5 text-sm md:text-base text-white py-2 md:py-3 px-3 md:px-4 w-full outline-none transition-all duration-300 placeholder:text-white/40 disabled:opacity-50'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  aria-label='Email Address'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className='bg-transparent border border-white/10 rounded-lg focus:border-accent focus:bg-white/5 text-sm md:text-base text-white py-2 md:py-3 px-3 md:px-4 w-full outline-none transition-all duration-300 placeholder:text-white/40 disabled:opacity-50'
                />
              </div>

              <input
                type='text'
                name='title'
                placeholder='Subject'
                aria-label='Subject'
                required
                value={formData.title}
                onChange={handleChange}
                disabled={isLoading}
                className='bg-transparent border border-white/10 rounded-lg focus:border-accent focus:bg-white/5 text-sm md:text-base text-white py-2 md:py-3 px-3 md:px-4 w-full outline-none transition-all duration-300 placeholder:text-white/40 disabled:opacity-50'
              />

              <textarea
                name='message'
                placeholder='Message'
                aria-label='Message'
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                className='bg-transparent border border-white/10 rounded-lg focus:border-accent focus:bg-white/5 text-sm md:text-base text-white py-2 md:py-3 px-3 md:px-4 w-full outline-none transition-all duration-300 placeholder:text-white/40 min-h-[80px] md:min-h-[160px] resize-none disabled:opacity-50'
              ></textarea>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm md:text-base text-center font-medium bg-green-500/10 py-3 rounded-lg border border-green-500/20"
                >
                  Message sent successfully! ✨ We will be in touch soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm md:text-base text-center font-medium bg-red-500/10 py-3 rounded-lg border border-red-500/20"
                >
                  Oops! Something went wrong. Please try again later.
                </motion.p>
              )}

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isLoading}
                className='btn rounded-full border border-white/50 max-w-[220px] px-6 py-2.5 md:px-8 md:py-3.5 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent hover:text-accent group mx-auto w-full disabled:opacity-50 disabled:cursor-not-allowed mt-1 relative text-sm md:text-base'
              >
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-medium tracking-wide'>
                  {isLoading ? 'Sending...' : 'Send Message ✨'}
                </span>
                <span className='absolute translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 text-accent font-medium tracking-wide'>
                  Let&apos;s Talk
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
