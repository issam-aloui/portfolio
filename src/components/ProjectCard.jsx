import React from "react";
import { useState, useEffect } from "react";

function ProjectCard({ url, link }) {
  const [aspectRatio, setAspectRatio] = useState(1); // Default aspect ratio

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setAspectRatio(img.width / img.height);
    };
    img.src = url;
  }, [url]);
  // Re-run effect if url changes

  return (
    <div
      className={`fade-enter bg-greyThm/30 backdrop-blur-sm rounded-3xl px-4 overflow-hidden aspect-[${aspectRatio}] hover:scale-105 transition-all duration-300 border border-cyanThm/10 hover:border-cyanThm/30 animate-on-scroll scale-in`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={url} alt="Project" className="w-full h-full object-cover" />
      </a>
    </div>
  );
}

export default ProjectCard;
