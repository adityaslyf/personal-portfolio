import React from "react";
import ProfileImage from "../../assets/profilepic.jpg";
import AboutImage from '../../assets/idea_01-removebg-preview.png'
import Skills from '../skills/skills'

const About = () => {
  return (
    <>
    <div className=" bg-[#101820]  flex flex-col md:flex-row justify-evenly  w-full h-auto p-4 font-kode-mono scroll-smooth">
      <img
        className="rounded-md w-auto md:w-[600px] md:h-[400px] animate-fade-up"
        src={AboutImage}
        alt=""
      />
      <div className="flex flex-col mt-4 md:mt-0">
        <span className="text-white text-2xl m-2 ml-3">About Me</span>
        <span className="w-full md:w-96 text-white p-2 ">
          👋 Hey there! I'm Aditya Varshney, a full-stack web developer
          specializing in the MERN stack. With a knack for crafting engaging web
          experiences, I thrive on challenges in backend scalability, frontend
          intuitiveness, and performance optimization. Committed to staying
          ahead in tech, I'm always learning new frameworks and techniques.
          Let's connect and create something extraordinary together!
        </span>
      </div>
      
    </div>
    <Skills />
     </>
  );
};

export default About;
