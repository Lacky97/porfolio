import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { BsFillMoonFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import luca from "/public/images/5.jpg";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="pt-5 pb-5">
      <Image
        className="mx-auto rounded-full"
        src={luca}
        alt="user avatar"
        width="150px"
        height="150px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium fredoka-one">
        <span>Luca </span>Bonasera
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* scosial media icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
        <motion.a
          href="https://github.com/Lacky97"
          aria-label="GitHub"
          className="text-black dark:text-white"
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
        >
          <AiFillGithub className="socialMediaIcons" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/luca-bonasera-729488175/"
          aria-label="Linkedin"
          className="text-blue-600"
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
        >
          <FaLinkedinIn className="w-6 h-6 mt-1 align-middle cursor-pointer" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/lacky97/"
          aria-label="Instagram"
          whileHover={{
            scale: 1.5,
            transition: { duration: 0.2 },
          }}
        >
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#feda75" offset="0%" />
              <stop stopColor="#fa7e1e" offset="25%" />
              <stop stopColor="#d62976" offset="50%" />
              <stop stopColor="#962fbf" offset="75%" />
              <stop stopColor="#4f5bd5" offset="100%" />
            </linearGradient>
          </svg>
          <motion.div initial={{ scale: 0.8 }}>
            <AiFillInstagram
              className="socialMediaIcons"
              style={{ fill: "url(#blue-gradient)" }}
            />
          </motion.div>
        </motion.a>
      </div>
      {/* address */}
      <div className="py-4 my-5 bg-gray-200 rounded-lg dark:bg-dark-200">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span> Albenga, Italy</span>
        </div>
        <p className="informationAddress">lucabonsaera2@gmail.com</p>
        <p className="informationAddress">3463225879</p>
      </div>
      {/* Email button */}
      <div className="min-h-full">
        <button
          className="informationEmail focus:outline-none"
          onClick={() => window.open("mailto:lucabonasera2@gmail.com")}
        >
          Email Me
        </button>
      </div>
      <BsFillMoonFill
        className="absolute right-5 top-5 "
        size="25px"
        onClick={() => changeTheme()}
      />
    </div>
  );
};

export default Sidebar;
