

const skills = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-[#101820]">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-serif text-yellow-600 mb-4 font-['Kode Mono', monospace] font-bold mb-10">Professional SkillSet</h1>
      <div className="w-full h-[5px] bg-gradient-to-r from-purple-700 via-orange-500 to-orange-500 mb-8"></div>
      <div className="flex flex-col sm:flex-row justify-evenly flex-wrap ">
        <SkillCard title="Frontend Skill" skills={['React Js', 'Recoil', 'Next Js', 'Redux', 'Html', 'Css', 'Bootstrap', 'Tailwind', 'Material UI']} />
        <SkillCard title="Backend Skill" skills={['Node Js', 'Express Js',  'MongoDB', 'PostgreSQL','Prisma']} />
        <SkillCard title="Other Skill" skills={['Git', 'Github', 'Postman', 'Linux', 'VS Code', 'Netlify', 'Figma', 'Canva']} />
      </div>
    </div>
  );
};

const SkillCard = ({ title, skills }) => (
  <div className="mb-5 sm:mb-0 bg-[#101820] shadow-lg rounded-lg p-5">
    <span className="text-xl sm:text-2xl font-semibold text-white">{title}</span>
    <div className="flex flex-wrap mt-5 w-full sm:w-96">
      {skills.map((skill, index) => (
        <div key={index} className="bg-[#FEE715] border-2 rounded-2 w-24 h-14 m-2 flex items-center justify-center">
          <span className="text-black font-semibold">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

export default skills;