import React from "react";
import ProfileImage from "../../assets/profilepic.jpg";

const About = () => {
  return (
    <div className=" bg-[#2b2a27] mt-4 flex flex-col md:flex-row justify-evenly  w-full h-[2200px]] p-4 font-kode-mono">
      <img
        className="rounded-md w-auto md:w-96 md:h-96"
        src={ProfileImage}
        alt=""
      />
      <div className="flex flex-col mt-4 md:mt-0">
        <span className="text-white text-2xl">About Me</span>
        <span className="w-full md:w-96 text-white ">
          👋 Hey there! I'm Aditya Varshney, a full-stack web developer
          specializing in the MERN stack. With a knack for crafting engaging web
          experiences, I thrive on challenges in backend scalability, frontend
          intuitiveness, and performance optimization. Committed to staying
          ahead in tech, I'm always learning new frameworks and techniques.
          Let's connect and create something extraordinary together!
        </span>
      </div>
    </div>
  );
};

export default About;
