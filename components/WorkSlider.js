import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

const workSlides = [
  {
    thumbnail: '/pascal-thumb.png',
    logo: '/pascal-logo.png'
  },
  {
    thumbnail: '/novafound-thumb.png',
    logo: '/novafound-logo.png'
  }
];

const WorkSlider = ({ handleSlideChange }) => {
  return (
    <div className="relative group w-full mb-12 xl:mb-0">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: '.work-next',
          prevEl: '.work-prev',
        }}
        modules={[Navigation, Pagination]}
        className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]"
      >
        {workSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Slide */}
            <div className="relative w-full h-full rounded-xl overflow-hidden group flex justify-center items-center bg-black/20 border-2 sm:border-[3px] border-white/5 hover:border-accent transition-all duration-300 p-1 sm:p-2">
              <div className="relative w-full h-full rounded-lg overflow-hidden transition-all duration-300">
                <img
                  src={slide.thumbnail}
                  alt="thumbnail"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>

                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center p-1 sm:p-2 shadow-2xl">
                  <div className="relative w-full h-full">
                    <img src={slide.logo} alt="Project Logo" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation */}
      <div className="flex gap-2 absolute -bottom-12 right-0 z-50">
        <button className="work-prev w-10 h-10 bg-accent hover:opacity-80 flex justify-center items-center text-primary text-xl transition-all cursor-pointer rounded-sm">
          <BsChevronLeft />
        </button>
        <button className="work-next w-10 h-10 bg-accent hover:opacity-80 flex justify-center items-center text-primary text-xl transition-all cursor-pointer rounded-sm">
          <BsChevronRight />
        </button>
      </div>
    </div >
  );
};

export default WorkSlider;
