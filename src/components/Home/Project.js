import React from "react";
import { Link } from "react-router-dom";

function Project({ id, projectName, projectDescription, projectPhoto }) {
  return (
    <div
      className="max-w-sm transition-all hover:scale-[1.1] p-2 rounded-md mx-auto w-full md:w-6/12 lg:w-1/3   mb-3"
      to="/"
    >
      <img src={projectPhoto} className="h-80 object-cover rounded-md" alt="" />
      <h1 className="text-2xl mt-4 font-medium text-gray-800">{projectName}</h1>
      <p className="text-md text-gray-600 text-justify mt-2 min-h-[80px]">
        {projectDescription}
      </p>
      <div className="flex items-center">
        <Link
          to={`project/${id}`}
          className="uppercase font-bold mt-6 underline text-red-500 block mr-5 hover:text-red-400"
        >
          Project Details
        </Link>
        <a
          href="#"
          className="uppercase font-bold mt-6 underline text-red-500 block hover:text-red-400"
        >
          Live Preview
        </a>
      </div>
    </div>
  );
}

export default Project;
