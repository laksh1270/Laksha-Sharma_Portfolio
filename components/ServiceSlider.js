// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// swiper core & required modules
import { FreeMode, Pagination } from "swiper";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles (IMPORTANT)
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Full-Stack Development",
    description: "Scalable web apps using React, Next.js, Node.js, and modern databases.",
  },
  {
    icon: <RxPencil2 />,
    title: "Software Development",
    description: "Maintainable software with clean architecture and best practices.",
  },
  {
    icon: <RxDesktop />,
    title: "Cloud Development",
    description: "Cloud deployment and scaling using AWS, GCP, Docker, and CI/CD.",
  },
  {
    icon: <RxReader />,
    title: "AI & Data Engineering",
    description: "AI-driven features and data pipelines for real-world applications.",
  },
  {
    icon: <RxRocket />,
    title: "UI/UX & Product Design",
    description: "Clean, responsive interfaces with smooth animations and user focus.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[300px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white/5 h-full rounded-lg px-6 py-8 flex flex-col justify-between hover:bg-white/10 transition">

            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              {item.icon}
            </div>

            {/* title & description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/70">
                {item.description}
              </p>
            </div>

            {/* arrow */}
            <div className="text-3xl text-accent self-end">
              <RxArrowTopRight />
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
