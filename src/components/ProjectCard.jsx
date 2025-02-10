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
      className={`fade-enter bg-greyThm/50 rounded-3xl px-4 overflow-hidden aspect-[${aspectRatio}] hover:scale-105 transition-transform duration-300`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={url} alt="Project" className="w-full h-full object-cover" />
      </a>
    </div>
  );
}

export default ProjectCard;
