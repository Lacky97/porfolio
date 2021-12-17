import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import {useTheme} from 'next-themes';

const Sidebar = () => {

  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light'? 'dark' : 'light');
  }
  
  return (
    <div>
      <Image
        className="w-32 h-32 mx-auto rounded-full"
        src="https://images.unsplash.com/photo-1633113216120-53ca0a7be5bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="user avatar"
        width='175px'
        height='175px'
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span>Luca </span>Bonasera
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Web Developer</p>
      <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200' href='' download='name'>
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* scosial media icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="" aria-label="GitHub">
          <AiFillGithub className="socialMediaIcons" />
        </a>
        <a href="" aria-label="Linkedin">
          <AiFillLinkedin className="socialMediaIcons" />
        </a>
        <a href="" aria-label='Instagram'>
          <AiFillInstagram className="socialMediaIcons" />
        </a>
      </div>
      {/* address */}
      <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span> Albenga, Italy</span>
        </div>
        <p className='informationAddress' >lucabonsaera2@gmail.com</p>
        <p className='informationAddress' >3463225879</p>
      </div>
      {/* Email button */}
      <button className='informationEmail focus:outline-none' onClick={() => window.open('mailto:lucabonasera2@gmail.com')}>Email Me</button>
      <button className='informationEmail' onClick={() => changeTheme()}>Toggle Theme</button>
    </div>
  );
};

export default Sidebar;
