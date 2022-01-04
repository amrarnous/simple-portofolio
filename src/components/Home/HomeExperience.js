import React from "react";
import Experience from "./Experience";
function HomeExperience() {
  const experiences = [
    {
      companyName: "DirectGroup",
      role: "Front-end Developer",
      dateFrom: "09/2017",
      dateTo: "11/2018",
    },
    {
      companyName: "SheenValue",
      role: "UI Designer",
      dateFrom: "12/2019",
      dateTo: "01/2021",
    },
    {
      companyName: "Enter2Shop",
      role: "Front-end Developer",
      dateFrom: "01/2021",
      dateTo: "Present",
    },
    {
      companyName: "Freelance",
      role: "Front-end Developer & UI Designer",
      dateFrom: "01/2019",
      dateTo: "Present",
    },
  ];
  return (
    <div className="mt-32">
      <h1 className="text-3xl my-10 font-bold text-gray-600">Experience</h1>
      <div className="flex items-center justify-between flex-wrap">
        {experiences.map((experience, index) => (
          <Experience
            key={index}
            CompanyName={experience.companyName}
            Role={experience.role}
            DatetFrom={experience.dateFrom}
            DateTo={experience.dateTo}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeExperience;
