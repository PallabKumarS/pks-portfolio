"use client";

import SkillSet from "@/components/home/SkillSet";
import AboutMe from "../components/home/AboutMe";
import Services from "../components/home/Services";
import Projects from "@/components/home/Projects";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-20">
        <AboutMe></AboutMe>
      </div>
      <div className="mt-20">
        <h1 className="text-4xl text-gray-300 font-semibold underline text-center mb-10">
          Services You Can Expect
        </h1>
        <Services></Services>
      </div>
      <div className="pt-20">
        <h1 className="text-4xl text-gray-300 font-semibold underline text-center mb-10">
          My Skill Set
        </h1>
        <SkillSet></SkillSet>
      </div>
      <div>
        <h1 className="text-4xl text-gray-300 font-semibold underline text-center mb-10">
          My Projects
        </h1>
        <Projects></Projects>
      </div>
    </div>
  );
};

export default HomePage;
