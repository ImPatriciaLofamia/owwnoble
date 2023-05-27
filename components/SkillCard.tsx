import React from "react";

interface SkillCardProps {
    children: JSX.Element
}

const SkillCard = ({children}: SkillCardProps) => {
  return (
    <div className="w-2/12 border-2 shadow text-center py-8  px-5 hover:bg-black hover:text-white rounded-xl">
      {children}
    </div>
  );
};

export default SkillCard;
