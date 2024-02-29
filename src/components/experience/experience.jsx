import React from "react";
import { motion } from "framer-motion";

const Experiences = () => {
  const experiences = [
    {
      title: "Core Member at FOSSCU-K",
      description: "Worked on developing and maintaining the FOSSCU-K(open source organisation) website and other projects. Also, I was responsible for organizing and managing events and workshops.",
      duration: "Jan 2022 - Present",
    },
    {
      title: "Member at GDSC-KIET",
      description: " I am a Web-Devloper at GDSC-KIET. Also, I was responsible for organizing and managing events and workshops.",
      duration: "Dec 2023 - Present",
    },
    // Add more experiences as needed
  ];

  return (
    <div className="flex flex-col items-center px-4 md:px-0">
      <span className="text-2xl font-bold mb-4 w-full text-center">Experiences</span>
      <div className="w-full h-[5px] bg-gradient-to-r from-purple-700 via-orange-500 to-orange-500 mb-8"></div>

      <div className="relative flex flex-wrap justify-center">
        <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-1 bg-gray-300 z-0"></div>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`card flex flex-col items-center justify-between m-4 p-8 rounded-lg shadow-lg bg-blue-500 transform transition duration-500 hover:scale-105 w-full md:w-1/2 lg:w-1/3 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} z-10`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 className="text-2xl text-white" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>{experience.title}</motion.h1>
            <motion.p className="text-sm text-white mt-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>{experience.description}</motion.p>
            <motion.p className="text-sm text-white mt-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>{experience.duration}</motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;