// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  RiMailLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-4 text-xl">
      
      {/* GitHub */}
      <Link
        href="https://github.com/laksh1270"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/lakshasharma/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>

      {/* YouTube */}
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>

      {/* Instagram */}
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>

      {/* Email */}
      <Link
        href="mailto:lakshasharma17@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailLine />
      </Link>

    </div>
  );
};

export default Socials;
