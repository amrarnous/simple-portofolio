import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeContact from "../Home/HomeContact";

function Project() {
  const [Project, setProject] = useState(null);
  const [error, setError] = useState(null);
  const param = useParams(useParams);
  const getProjectDetails = async () => {
    await fetch("/projects.json")
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          return setProjectDetails(result);
        },
        (error) => {
          setError(error);
        }
      );
  };
  const setProjectDetails = (data) => {
    const project = data.filter((TheProject) => {
      return parseInt(TheProject.projectID) === parseInt(param.projectId);
    });
    setProject(...project);
  };
  useEffect(() => {
    getProjectDetails();
  }, []);
  return (
    <div className="max-w-3xl mx-auto p-3">
      {Project ? (
        <>
          <div className="text-center w-full">
            <img
              className="mx-auto w-full h-auto object-cover max-h-96"
              src={Project?.projectPhoto}
              alt=""
            />
          </div>
          <h1 className="font-bold text-2xl mt-3 mb-3">
            {Project?.projectName}
          </h1>
          <p className="text-justify text-md leading-8">
            {Project?.projectDetails}
          </p>
        </>
      ) : (
        <div className="text-center text-2xl text-red-600">Loading</div>
      )}
      <HomeContact />
    </div>
  );
}

export default Project;
