import React, { useState } from "react";
import { motion } from "framer-motion";


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
      className="bg-[#2b2a27] bg-opacity-60 mx-auto p-4 backdrop-filter backdrop-blur-lg rounded-lg"
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
      <div className={`${showMenu ? "block" : "hidden"} sm:block`}>
        <div className="button grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-6">
          <motion.button
            className="w-auto font-serif font-bold border-2 p-2 rounded-sm  bg-opacity-20 backdrop-filter backdrop-blur-lg bg-[#2b2a27] text-white shadow-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            Contact
          </motion.button>
          <motion.button
            className="w-auto font-serif font-bold border-2 p-2 rounded-sm bg-[#2b2a27] bg-opacity-20 backdrop-filter backdrop-blur-lg text-white shadow-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            Resume
          </motion.button>
          <motion.button
            className="w-auto font-serif font-bold border-2 p-2 rounded-sm bg-[#2b2a27] bg-opacity-20 backdrop-filter backdrop-blur-lg  text-white shadow-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            Projects
          </motion.button>

          
          <motion.button
            className="w-auto font-serif font-bold border-2 p-2 rounded-sm bg-[#2b2a27] bg-opacity-20 backdrop-filter backdrop-blur-lg text-white shadow-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            About
          </motion.button>
     
          <motion.button
            className="w-auto font-serif font-bold border-2 p-2 rounded-sm bg-[#2b2a27] bg-opacity-20 backdrop-filter backdrop-blur-lg  text-white shadow-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            Certificate
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
