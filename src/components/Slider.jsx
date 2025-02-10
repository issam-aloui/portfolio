import React from "react";
import ProjectCard from "./ProjectCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import useVisibleUrls from "../hooks/useVisibleUrls";
import useVisibleLinks from "../hooks/useVisibleLinks";

function Slider({
  listURL = [
    "src/assets/Group 2346.svg",
    "src/assets/Group 2372.png",
    "src/assets/Group62.png",
  ],
  listLink = [
    "https://www.google.com",
    "https://www.google.com",
    "https://www.google.com",
  ],
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Use hooks at the top level
  const visibleURLs = useVisibleUrls(listURL, currentIndex, windowWidth);
  const visibleLinks = useVisibleLinks(listLink, currentIndex, windowWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex(currentIndex ? currentIndex - 1 : listURL.length - 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="relative ">
      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10
                   bg-greyThm/80 hover:bg-greyThm p-4 rounded-full
                   text-whiteThm hover:text-cyanThm
                   transition-all duration-300 hover:scale-110
                   shadow-[2px_2px_4px_rgba(0,0,0,0.3)]
                   hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4)]"
        aria-label="Previous slide"
        onClick={handlePrev}>
        <FaChevronLeft className="text-2xl" />
      </button>

      {/* Slider Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 p-4 md:p-8 lg:p-12">
        {visibleURLs.map((url, index) => (
          <ProjectCard key={url + index} url={url} link={visibleLinks[index]} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10
                   bg-greyThm/80 hover:bg-greyThm p-4 rounded-full
                   text-whiteThm hover:text-cyanThm
                   transition-all duration-300 hover:scale-110
                   shadow-[2px_2px_4px_rgba(0,0,0,0.3)]
                   hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4)]"
        aria-label="Next slide"
        onClick={handleNext}>
        <FaChevronRight className="text-2xl" />
      </button>
    </div>
  );
}

export default Slider;
