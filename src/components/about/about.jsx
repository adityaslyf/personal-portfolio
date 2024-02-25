import React from "react";
import ProfileImage from "../../assets/profilepic.jpg";

const About = () => {
  return (
    <div className="mt-4 flex flex-col md:flex-row justify-evenly bg-gray-800 w-full h-[2200px]] p-4">
      <img
        className="rounded-md w-auto md:w-96 md:h-96"
        src={ProfileImage}
        alt=""
      />
      <div className="flex flex-col mt-4 md:mt-0">
        <span className="text-white text-2xl">About Me</span>
        <span className="w-full md:w-96 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          explicabo similique tenetur, eum atque nemo vero nobis, modi quisquam
          dolore facere cumque soluta, reiciendis deleniti? Unde animi tenetur
          vero non. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Aliquam, inventore in quo iste, corrupti accusamus deleniti ab
          distinctio cumque illo atque. At eaque voluptate minus distinctio
          quasi, odio voluptatum ducimus.
        </span>
      </div>
    </div>
  );
};

export default About;
