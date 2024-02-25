import React from "react";
import { FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiRecoil } from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <span className="text-4xl text-teal-500 font-serif">Skills</span>
      <div className="w-full md:w-1/2 lg:w-full h-[5px] bg-gradient-to-r from-purple-700 via-orange-500 to-orange-500 mb-8"></div>
      <div className="Frontend w-[40rem] h-96 bg-slate-700 ml-8 rounded-2xl p-4">
        <div className="grid grid-cols-3 gap-4">
          <SkillItem icon={<FaReact size={24} />} name="ReactJS" />
          <SkillItem icon={<SiRecoil size={24} />} name="Recoil" />
          <SkillItem icon={<FaJs size={24} />} name="JavaScript" />
          <SkillItem icon={<FaHtml5 size={24} />} name="HTML5" />
          <SkillItem icon={<FaCss3 size={24} />} name="CSS3" />
        
          <SkillItem icon={<FaBootstrap size={24} />} name="Bootstrap" />
          <SkillItem icon={<SiTailwindcss size={24} />} name="Tailwind CSS" />
        </div>
      </div>
    </div>  
  );
};

const SkillItem = ({ icon, name }) => {
  return (
    <div className="">
        <div className="border border-slate-400 br-2 rounded-md w-48 ml-2 flex items-center justify-center p-2">
      {icon}
      <button className="text-2xl ml-2 text-slate-400">{name}</button>
    </div>
    </div>
    
  );
};

export default Skills;