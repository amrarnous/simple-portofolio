import React from "react";
import HomeHeader from "./HomeHeader";
import HomeLatestProjects from "./HomeLatestProjects";
import HomeExperience from "./HomeExperience";
import HomeSkills from "./HomeSkills";
import HomeContact from "./HomeContact";
function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeLatestProjects />
      <HomeExperience />
      <HomeSkills />
      <HomeContact />
    </div>
  );
}

export default Home;
