import React from "react";
import Project from "./Project";
function HomeLatestProjects() {
  const projects = [
    {
      id: 1,
      projectPhoto:
        "https://mir-s3-cdn-cf.behance.net/projects/404/1b8cb4131627703.Y3JvcCwxNjE2LDEyNjQsMCww.png",
      projectName: "AtlanticXChange",
      projectDescription:
        "AtlanticXChange is a company that provides an easy and efficient way to transfer and exchange money anywhere in the world through its offices in the united states and providers around the globe",
    },
    {
      id: 2,
      projectPhoto:
        "https://mir-s3-cdn-cf.behance.net/projects/404/ec8c89106188121.Y3JvcCwxODM3LDE0MzcsNDAsMA.png",
      projectName: "World of diets",
      projectDescription:
        "world of diets resturant is one of the famous healty food resturants in Kuwait",
    },
    {
      id: 3,
      projectPhoto: "https://www.payzaty.com/img/mac-in-img.png",
      projectName: "Payzaty",
      projectDescription:
        "Payzaty is a startup that help merchants and business owners receive and send thier payments in effecient way",
    },
  ];
  return (
    <div className="flex justify-between mt-40 flex-wrap">
      {projects.map((project, index) => (
        <Project
          key={index}
          id={project.id}
          projectName={project.projectName}
          projectPhoto={project.projectPhoto}
          projectDescription={project.projectDescription}
        />
      ))}
    </div>
  );
}

export default HomeLatestProjects;
