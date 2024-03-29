import React from "react";
import ProfileImage from "../../assets/profilepic.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col sm:h-[94.2vh] md:flex-row-reverse items-center justify-evenly space-y-4 p-4 bg-[#101820] shadow-md">
        <img
          className="rounded-lg h-46 w-46 md:h-96 md:w-96 animate-fade-up"
          src={ProfileImage}
          alt=""
        />
        <div className="info__section flex flex-col space-y-4">
          <h1 className="text-lg md:text-2xl font-bold text-gray-200  animate-fade-left">
            Hey
          </h1>
          <h1 className="text-md md:text-xl font-semibold text-gray-700 animate-fade-in">
            I'm Aditya Varshney
          </h1>
          <span className="text-sm md:text-lg text-blue-600 animate-fade-right ">
            Full Stack Web Developer
          </span>
          <span className="w-auto md:w-96 text-gray-600 animate-fade-right font-kode-mono ">
            🎓 Currently in my second year of BTech studies, I'm not just a
            student but also a passionate web developer. I'm deeply driven by
            the desire to test and enhance my skills through hands-on projects.
            From dynamic web applications to sleek user interfaces, each project
            serves as both a learning experience and a testament to my
            dedication to mastering the craft of web development. As I navigate
            through my academic journey, I'm constantly seeking opportunities to
            apply my knowledge in real-world scenarios, pushing the boundaries
            of what I can create and achieve.
          </span>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 animate-flip-up">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              Learn More
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;