import React from "react";
function HomeExperience({ CompanyName, Role, DatetFrom, DateTo }) {
  return (
    <div className="max-w-[250px] w-full">
      <h1 className="text-xl font-bold text-red-500 mb-1">{CompanyName}</h1>
      <h2 className=" text-gray-500 tracking-wider text-sm font-medium">
        {Role}
      </h2>
      <div className="flex items-center mt-2 font-bold text-gray-400">
        <span>{DatetFrom}</span>
        <span className="text-lg mx-2">-</span>
        <span>{DateTo}</span>
      </div>
    </div>
  );
}

export default HomeExperience;
