import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { GrResume } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrAchievement } from "react-icons/gr";
import { FaHome } from "react-icons/fa";

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.div
      className="bg-[#101820]   mx-auto  h-screen"
      style={{ height: showMenu ? 'auto' : '50px' }}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sm:hidden"> 
        <button
          className="block text-gray-500 hover:text-white focus:text-white focus:outline-none "
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className={`${showMenu ? "block" : "hidden"} sm:flex justify-center items-center`}>
        <div className="button grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 p-6">
          {/* Use Link component to navigate to routes */}
          <motion.button
            className="flex flex-col items-center justify-center w-auto font-serif font-bold rounded-sm bg-opacity-20 text-white shadow-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            <Link to="/">
            <FaHome size={24} />
              <div>Home</div> 
            </Link>
          </motion.button>

          <motion.button
            className="flex flex-col items-center justify-center w-auto font-serif font-bold rounded-sm bg-opacity-20 text-white shadow-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            <Link to="/about">
              <FcAbout size={24} />
              <div>About</div>
            </Link>
          </motion.button>
          <motion.button
            className="flex flex-col items-center justify-center w-auto font-serif font-bold rounded-sm bg-opacity-20 text-white shadow-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            <Link to="/resume">
              <GrResume size={24} />
              <div>Resume</div>
            </Link>
          </motion.button>
          <motion.button
            className="flex flex-col items-center justify-center w-auto font-serif font-bold rounded-sm bg-opacity-20 text-white shadow-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            <Link to="/projects">
              <FaProjectDiagram size={24} />
              <div>Project</div>
            </Link>
          </motion.button>
          <motion.button
            className="flex flex-col items-center justify-center w-auto font-serif font-bold rounded-sm bg-opacity-20 text-white shadow-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            
            <Link to="/contact">
              <IoMdContact size={24} />
              <div>Contact</div>
            </Link>
          </motion.button>
         
         
         
          <motion.button
            className="flex flex-col items-center justify-center w-auto font-serif font-bold rounded-sm bg-opacity-20 text-white shadow-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            <Link to="/achievement">
              <GrAchievement size={24} />
              <div>Achievement</div>
            </Link>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;