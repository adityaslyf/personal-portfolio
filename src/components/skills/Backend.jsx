import React from "react";
import { FaReact, FaHtml5, FaCss3, FaJs, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiRecoil, SiExpress } from "react-icons/si";
import { DiNodejs, DiMongodb, DiPostgresql } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
  return (
    <div className="px-4 md:px-0">
      <span className="text-4xl text-teal-500 font-serif">Skills</span>
      <div className="flex flex-col md:flex-row">
        <FrontendSkills />
        <BackendSkills />
      </div>
    </div>
  );
};

const FrontendSkills = () => {
  return (
    <div className="mb-4 md:mb-0 md:mr-4">
      <div className="w-full h-[5px] bg-gradient-to-r from-purple-700 via-orange-500 to-orange-500 mb-8"></div>
      <div className="Frontend w-full md:w-[40rem] h-auto bg-slate-700 rounded-2xl p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

const BackendSkills = () => {
  return (
    <div>
      <div className="w-full h-[5px] bg-gradient-to-r from-purple-700 via-orange-500 to-orange-500 mb-8"></div>
      <div className="Frontend w-full md:w-[40rem] h-auto bg-slate-700 rounded-2xl p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <SkillItem icon={<DiNodejs size={24} />} name="Node Js" />
          <SkillItem icon={<SiExpress size={24} />} name="Express Js" />
          <SkillItem icon={<DiPostgresql size={24} />} name="Postgresql" />
          <SkillItem icon={<DiMongodb size={24} />} name="MongoDB" />
          <SkillItem icon={<IoLogoFirebase size={24} />} name="Firebase" />
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ icon, name }) => {
  return (
    <div className="">
      <div className="border border-slate-400 br-2 rounded-md w-full md:w-48 ml-2 flex items-center justify-center p-2">
        {icon}
        <button className="text-2xl ml-2 text-slate-400">{name}</button>
      </div>
    </div>
  );
};

export default Skills;