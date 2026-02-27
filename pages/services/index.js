// components
import ServiceSlider from '@/components/ServiceSlider';
import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className="relative min-h-screen bg-primary/30 flex items-center py-36">
      {/* background elements */}
      <Bulb />
      <Circles />

      {/* content */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-xl"
          >
            <h2 className="h2 mb-6">
              My services<span className="text-accent">.</span>
            </h2>

            <p className="text-white/80 leading-relaxed">
              I design and build smart, scalable digital solutions with a strong
              focus on performance, usability, and innovation.
              <br /><br />
              From clean interfaces to intelligent systems, I turn ideas into
              reliable, future-ready products.
            </p>
          </motion.div>

          {/* RIGHT SLIDER */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            <ServiceSlider />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Services;
