import React from "react";

interface SkillBarProps {
  label: string;
  value: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ label, value }) => {
  return (
    <div className="w-full max-w-md text-sm font-semibold text-gray-200">
      <div className="flex justify-between mb-1">
        <span className="text-zinc-300">{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <div
          className="bg-[#1057bb] h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
