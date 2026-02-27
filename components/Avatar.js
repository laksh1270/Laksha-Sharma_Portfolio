import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none relative z-30 pointer-events-auto group'>
      
      {/* Chatbox */}
      <div className='absolute -top-16 left-1/2 -translate-x-1/2 
        opacity-0 group-hover:opacity-100 
        transition-all duration-300
        bg-black/80 text-white text-sm px-4 py-2 rounded-xl
        whitespace-nowrap shadow-lg'>
        Welcome! Explore Laksha&apos;s Portfolio
        {/* arrow */}
        <div className='absolute left-1/2 -bottom-2 -translate-x-1/2 
          w-3 h-3 bg-black/80 rotate-45'></div>
      </div>

      {/* Avatar Image */}
      <Image
        src='/Avatar.png'
        width={373}
        height={990}
        alt=''
        priority
        className='translate-z-0'
      />
    </div>
  );
};

export default Avatar;
