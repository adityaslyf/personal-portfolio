import React from "react";
import ProfileImage from "../../assets/profilepic.jpg";
import './hero.css' // Import the CSS file

const Hero = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-800 rounded-lg shadow-md h-[100vh] ">
      <img className="rounded-full h-54 w-54 sm:h-46 sm:w-46 animate-fade-up" src={ProfileImage} alt="" />
      <h1 className="text-xl sm:text-2xl font-bold text-gray-200  animate-fade-left">Hey</h1>
      <h1 className="text-lg sm:text-xl font-semibold text-gray-700 animate-fade-in">
        I'm Aditya Varshney
      </h1>
      <span className="text-md sm:text-lg text-blue-600 animate-fade-right ">Full Stack Web Developer</span>
      <span className="w-full sm:w-96 text-gray-600 animate-fade-right ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        pariatur est praesentium vitae temporibus magni! Dolor nemo quae tempora
        doloremque facilis amet alias eveniet fugit culpa, laborum quo error?
        Quidem!
      </span>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-flip-up">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Learn More
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero;