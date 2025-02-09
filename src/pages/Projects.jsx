import React from "react";
import Button from "../components/button";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
function Projects() {
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (e) => {
    setActiveButton(e.target.id);
  };

  return (
    <section className="relative">
      {/* Background with reduced opacity */}

      <div
        className='absolute inset-0 bg-[url("../src/assets/doodleitems.svg")] bg-center bg-repeat opacity-50'
        aria-hidden="true"></div>

      {/* Content container */}
      <div className="container relative flex flex-col justify-center items-center w-full h-screen">
        <div className="flex flex-col  justify-left items-left  w-full gap-8">
          <h1 className="text-6xl font-bold font-poppins">My recent works</h1>
          <div className="flex  justify-left items-left gap-4  ">
            <Button
              Text="All"
              onClick={handleButtonClick}
              bgColor={activeButton == "All" ? 1 : 0}
              id="All"
            />
            <Button
              Text="Web"
              onClick={handleButtonClick}
              bgColor={activeButton == "Web" ? 1 : 0}
              id="Web"
            />

            <Button
              Text="Mobile"
              onClick={handleButtonClick}
              bgColor={activeButton == "Mobile" ? 1 : 0}
              id="Mobile"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 p-12">
          <ProjectCard
            url="src\assets\Group 2346.svg"
            link="https://www.google.com"
          />
          <ProjectCard
            url="src\assets\Group 2346.svg"
            link="https://www.google.com"
          />
          <ProjectCard
            url="src\assets\Group62.svg"
            link="https://www.google.com"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
