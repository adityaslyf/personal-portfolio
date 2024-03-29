import React from "react";
import { motion } from "framer-motion";
import AmazonImage from "../../assets/amazonImage.jpg";
import MindVoyageImage from "../../assets/Screenshot from 2024-02-25 16-49-20.png";

const Projects = () => {
  const projects = [
    {
      title: "Amazon Clone",
      description: `Amazon website clone is a testament to e-commerce innovation, featuring essential functionalities for seamless online shopping. Robust user authentication and intuitive navigation facilitate a user-friendly experience. Customers can browse products, add items to their basket, and proceed to checkout effortlessly. Secure payment modes ensure safe transactions, while the ability to remove items from the basket enhances flexibility. Login and sign-in options provide personalized access, allowing users to track orders and manage preferences. Explore the future of online shopping with our Amazon clone, where convenience meets reliability.
        `,
      image: AmazonImage,
      color: "bg-blue-500",
      techStack: [
        "ReactJS",
        "Firebase",
        "JavaScript",
        "Redux",
        "Recoil",
        "MERN",
      ],
      githubLink: "https://github.com/user/project1",
      demoLink: "https://demo.com/project1",
    },
    {
      title: "Mind Voyage",
      description: `Our website exemplifies technical excellence, harmonizing features to promote sustainable tourism. Robust user authentication and an intuitive dashboard streamline navigation. AR/VR technology provides immersive 3D destination views, while precise price prediction tools aid budget planning. The roadmap feature optimizes itineraries, complemented by real-time location services. Community engagement tools encourage collaboration. Specialized eco-friendly packages and comprehensive booking functionalities enrich user experience. Discover the epitome of responsible travel, where technical mastery meets environmental stewardship
      `,
      image: MindVoyageImage,
      color: "bg-red-500",
      techStack: [
        "ReactJS",
        "Firebase",
        "JavaScript",
        "Redux",
        "Recoil",
        "MERN",
      ],
      githubLink: "https://github.com/user/project2",
      demoLink: "https://demo.com/project2",
    },
    // Add more projects as needed
  ];

  return (
    <div className="flex flex-col items-center px-4 md:px-0 bg-[#101820]">
      <span className="text-2xl font-bold mb-4 w-full text-center">
        Projects
      </span>
      <div className="w-full h-[5px] bg-gradient-to-r from-purple-700 via-orange-500 to-orange-500 mb-8"></div>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`card flex flex-col md:flex-row items-center justify-evenly m-4 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full`}
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
              className="text-sm text-white mt-4 w-full md:w-96 "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {project.description}
            </motion.p>
            <h2 className="text-lg text-white mt-4">Tech Stack:</h2>
            <ul className=" flex gap-3 flex-wrap">
              {project.techStack.map((tech, index) => (
                <li key={index} className="text-white">
                  {tech}
                </li>
              ))}
            </ul>
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