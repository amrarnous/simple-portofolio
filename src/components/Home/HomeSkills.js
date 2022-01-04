import React from "react";
import Skill from "./Skill";
import {
  SiJavascript,
  SiSass,
  SiReact,
  SiHtml5,
  SiCss3,
  SiVuedotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiNextdotjs,
  SiNuxtdotjs,
  SiBootstrap,
  SiVuetify,
  SiAdobexd,
  SiFigma,
  SiGulp,
  SiGreensock,
} from "react-icons/si";

function HomeSkills() {
  const skills = [
    {
      skillName: "HTML5",
      icon: SiHtml5,
    },
    {
      skillName: "CSS3",
      icon: SiCss3,
    },
    {
      skillName: "Sass",
      icon: SiSass,
    },
    {
      skillName: "Javascript",
      icon: SiJavascript,
    },
    {
      skillName: "VueJS",
      icon: SiVuedotjs,
    },
    {
      skillName: "ReactJS",
      icon: SiReact,
    },
    {
      skillName: "TailwindCSS",
      icon: SiTailwindcss,
    },
    {
      skillName: "Styled Component",
      icon: SiStyledcomponents,
    },
    {
      skillName: "NextJS",
      icon: SiNextdotjs,
    },
    {
      skillName: "NuxtJS",
      icon: SiNuxtdotjs,
    },
    {
      skillName: "Bootstrap",
      icon: SiBootstrap,
    },

    {
      skillName: "Vutify",
      icon: SiVuetify,
    },
    {
      skillName: "GSAP",
      icon: SiGreensock,
    },
    {
      skillName: "Gulp",
      icon: SiGulp,
    },
    {
      skillName: "Adobe XD",
      icon: SiAdobexd,
    },
    {
      skillName: "Figma",
      icon: SiFigma,
    },
  ];

  return (
    <>
      <h1 className="text-3xl my-10 mt-40 font-bold text-gray-600">Skills</h1>

      <div className="flex align-center justify-between flex-wrap">
        {skills.map((skill, index) => {
          const TheIcon = skill.icon;
          return (
            <Skill
              key={index}
              SkillName={skill.skillName}
              Icon={<TheIcon /> ?? ""}
            />
          );
        })}
      </div>
    </>
  );
}

export default HomeSkills;
