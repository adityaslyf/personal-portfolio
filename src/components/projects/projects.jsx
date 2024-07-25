import React from "react";
import { motion } from "framer-motion";
import AmazonImage from "../../assets/amazonImage.jpg";
import MindVoyageImage from "../../assets/Screenshot from 2024-02-25 16-49-20.png";

const Projects = () => {
  const projects = [
    {
      title: "Solcanvas",
      description: `Solana projects are hard to find and often lack updated information. Our platform solves this! Discover hidden gems, get personalized recommendations, and earn rewards for contributing project details. Users can add, edit, and commit projects. Admins can approve or reject projects, manage users, and facilitate login via different wallets.`,
      image: "https://images.pexels.com/photos/5926373/pexels-photo-5926373.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "bg-green-500",
      techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      githubLink: "https://github.com/adityaslyf/Solcanvas",
      demoLink: "https://solcanvas.xyz/",
    },
    {
      title: "eShopX",
      description: `Developed a responsive frontend with ReactJS, TypeScript, TailwindCSS, and Redux Toolkit for state management. Built secure APIs using ExpressJS, Mongoose, and MongoDB, all written in TypeScript. Implemented file uploads with Multer and password hashing with bcrypt. Created features like cart management, checkout, CRUD operations, and search. Admin functionalities: add/edit products, create discount coupons, dashboard with charts, manage orders, view stocks and users. User functionalities: payments, basket management, sort products by category/price.`,
      image: "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "bg-yellow-500",
      techStack: ["ReactJS", "TypeScript", "TailwindCSS", "Redux Toolkit", "NodeJS", "ExpressJS", "MongoDB", "Multer", "Firebase"],
      githubLink: "https://github.com/adityaslyf/eShopX",
      demoLink: "https://e-shop-x-bti6.vercel.app/",
    },
    {
      title: "Sprinthacks",
      description: `Developed a modern and responsive hackathon website using React, Tailwind CSS, and JavaScript to deliver a seamless user experience. Integrated React Router to implement efficient navigation and page transitions, enhancing website usability.`,
      image: "https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "bg-purple-500",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/adityaslyf/Sprinthacks",
      demoLink: "https://sprinthacks-website-five.vercel.app/",
    },
    {
      title: "Fragmented",
      description: `Building a platform that enables fractional ownership of high-value NFTs, democratizing access to digital assets. Developed the frontend using Next.js, TypeScript, and Tailwind CSS to ensure a seamless and modern user experience. Backend integration in progress using Node.js, Express, and PostgreSQL for secure and efficient data management. Leveraging smart contracts for secure fractional ownership transactions.`,
      image: "https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "bg-teal-500",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
      githubLink: "https://github.com/adityaslyf/fragmented",
      demoLink: "https://fragmented-lime.vercel.app/",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 md:px-0 bg-[#101820]">
      <div className="w-full h-[5px] bg-gradient-to-r from-purple-700 via-orange-500 to-orange-500 mb-8 mt-12"></div>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`card flex flex-col md:flex-row items-center justify-between m-4 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-3/4`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            className="mb-3 md:mb-0 w-full md:w-[600px] h-64 md:h-96 object-cover rounded-md shadow-lg"
            src={project.image}
            alt="project"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <div className="mt-4 md:mt-0 md:ml-8">
            <motion.h1
              className="text-2xl text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-sm text-white mt-4 w-full md:w-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {project.description}
            </motion.p>
            <h2 className="text-lg text-white mt-4">Tech Stack:</h2>
            <div className="overflow-x-auto max-w-full">
              <ul className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <li key={index} className="text-white">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="bg-white px-8 py-2 mt-8 rounded-3xl text-gray-800 font-semibold uppercase tracking-wide transform transition duration-500 hover:bg-gray-200 mr-4"
              >
                View Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="bg-white px-8 py-2 mt-8 rounded-3xl text-gray-800 font-semibold uppercase tracking-wide transform transition duration-500 hover:bg-gray-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
