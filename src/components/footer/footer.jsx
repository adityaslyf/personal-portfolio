import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.footer
      className="w-auto bg-gray-800 text-white p-10 flex justify-around items-center"
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <a href="https://github.com/username" className="hover:text-gray-300">GitHub</a>
      <a href="https://linkedin.com/in/username" className="hover:text-gray-300">LinkedIn</a>
      <a href="https://twitter.com/username" className="hover:text-gray-300">Twitter</a>
      <a href="mailto:email@example.com" className="hover:text-gray-300">Email</a>
      <a href="https://instagram.com/username" className="hover:text-gray-300">Instagram</a>
    </motion.footer>
  );
};

export default Footer;