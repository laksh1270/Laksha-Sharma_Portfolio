//next image
import Image from "next/image"

//next link
import Link from "next/link";

//icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link
        href="https://drive.google.com/file/d/1h8-N0xdV_gu0I5MbSgYMaB-mB6NJ_KCy/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <Image
          src="/rounded-text.png?v=1"
          width={141}
          height={148}
          alt="Resume"
          className="animate-spin-slow w-full h-full max-w-[165px] max-h-[181px]"
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
