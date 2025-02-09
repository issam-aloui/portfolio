import React from "react";
import { useState, useEffect } from "react";

function ProjectCard({ url, link }) {
  const [aspectRatio, setAspectRatio] = useState(16 / 9); // Default aspect ratio

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setAspectRatio(img.width / img.height);
      console.log(aspectRatio);
    };
    img.src = url;
  }, [url]); // Re-run effect if url changes

  return (
    <div
      className="bg-greyThm/50 rounded-3xl px-4 overflow-hidden"
      style={{ aspectRatio: aspectRatio }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={url}
          alt="Project"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </a>
    </div>
  );
}

export default ProjectCard;
