import React from "react";

function Skill({ SkillName, Icon }) {
  return (
    <div className="w-1/3 md:w-2/3 lg:w-1/4 mb-6">
      <div className="w-11/12  shadow-md mx-auto flex items-center justify-center flex-col p-3 hover:shadow-lg transition-shadow">
        <div className="text-4xl  text-red-600">{Icon}</div>
        <h1 className="text-xs mt-3 font-bold uppercase tracking-wider md:text-sm text-center">
          {SkillName}
        </h1>
      </div>
    </div>
  );
}

export default Skill;
