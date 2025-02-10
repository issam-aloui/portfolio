import React from "react";
import Button from "../components/button";
import { useState } from "react";
import Slider from "../components/Slider";

function Projects() {
  const [activeButton, setActiveButton] = useState("All");

  // Project categories with their URLs and links
  const projectCategories = {
    web: {
      key: "web",
      urls: ["src/assets/Group 2346.svg", "src/assets/Group 2372.png"],
      links: ["https://www.google.com", "https://www.google.com"],
    },
    mobile: {
      key: "mobile",
      urls: ["src/assets/Group62.png"],
      links: ["https://www.google.com"],
    },
    all: {
      key: "all",
      urls: [
        "src/assets/Group 2346.svg",
        "src/assets/Group 2372.png",
        "src/assets/Group62.png",
      ],
      links: [
        "https://www.google.com",
        "https://www.google.com",
        "https://www.google.com",
      ],
    },
  };

  const handleButtonClick = (e) => {
    setActiveButton(e.target.id);
  };

  // Get the appropriate list based on active button
  const getCurrentList = () => {
    const category = activeButton.toLowerCase();
    return projectCategories[category] || projectCategories.all;
  };

  const currentList = getCurrentList();

  return (
    <section className="relative">
      {/* Background with reduced opacity */}
      <div
        className='absolute inset-0 bg-[url("../src/assets/doodleitems.svg")] bg-center bg-repeat opacity-50'
        aria-hidden="true"></div>

      {/* Content container */}
      <div className="container relative flex flex-col justify-center items-center w-full h-screen">
        <div className="flex flex-col justify-left items-left w-full gap-8">
          <h1 className="text-6xl font-bold font-poppins text-nowrap">
            My recent works
          </h1>
          <div className="flex justify-left items-left gap-4">
            <Button
              Text="All"
              onClick={handleButtonClick}
              bgColor={activeButton === "All" ? 1 : 0}
              id="All"
            />
            <Button
              Text="Web"
              onClick={handleButtonClick}
              bgColor={activeButton === "Web" ? 1 : 0}
              id="Web"
            />
            <Button
              Text="Mobile"
              onClick={handleButtonClick}
              bgColor={activeButton === "Mobile" ? 1 : 0}
              id="Mobile"
            />
          </div>
        </div>
        <Slider listURL={currentList.urls} listLink={currentList.links} />
      </div>
    </section>
  );
}

export default Projects;
