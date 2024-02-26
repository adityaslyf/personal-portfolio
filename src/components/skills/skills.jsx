import React from "react";

const skills = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl text-white font-bold mb-10">Professional SkillSet</h1>
      <div className=" cards flex justify-evenly  ">
      <div className="mb-5 bg-stone-800 shadow-lg rounded-lg p-5">
        <span className="text-2xl font-semibold text-white">Frontend Skill</span>
        <Frontend />
      </div>
      <div className="bg-stone-800 shadow-lg rounded-lg p-5">
        <span className="text-2xl font-semibold text-white">Backend Skill</span>
        <Backend />
      </div>
      <div className="bg-stone-800 shadow-lg rounded-lg p-5">
        <span className="text-2xl font-semibold text-white">Other Skill</span>
        <Other />
      </div>
      </div>
    
    </div>
  );
};

function Frontend() {
  return (
    <div className="flex flex-wrap mt-5 w-96">
      {['React Js', 'Recoil', 'Next Js', 'Redux', 'Html', 'Css', 'Bootstrap', 'Tailwind', 'Material UI'].map((skill, index) => (
        <div key={index} className="bg-green-800 border-2 rounded-2  w-24 h-14 m-2 flex items-center justify-center">
          <span className="text-white">{skill}</span>
        </div>
      ))}
    </div>
  );
}

function Backend() {
  return (
    <div className="flex flex-wrap mt-5 w-96">
      {['Node Js', 'Express Js', 'Graphql', 'Rest API', 'MongoDB', 'PostgreSQL', 'Sequelize', 'Prisma'].map((skill, index) => (
        <div key={index} className="bg-green-800 rounded-2 border w-24 h-14 m-2 flex items-center justify-center">
          <span className="text-white">{skill}</span>
        </div>
      ))}
    </div>
  );
}

function Other() {
    return (
      <div className="flex flex-wrap mt-5 w-96">
        {['Git', 'Github', 'Postman', 'Linux', 'VS Code', 'Netlify', 'Figma', 'Canva'].map((skill, index) => (
          <div key={index} className="bg-green-800 rounded-2 border w-24 h-14 m-2 flex items-center justify-center">
            <span className="text-white">{skill}</span>
          </div>
        ))}
      </div>
    );
  }

export default skills;