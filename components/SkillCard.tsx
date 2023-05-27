import React from "react";

interface SkillCardProps {
    children: JSX.Element
}

const SkillCard = ({children}: SkillCardProps) => {
  return (
    <div className="z-20 w-auto sm:w-auto md:w-auto border-2 shadow-2xl flex justify-center py-8 px-5 hover:bg-black hover:text-white rounded-xl">
    {children}
  </div>
  
  );
};

export default SkillCard;
