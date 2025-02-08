import React from "react";
import { useState, useEffect } from "react";

function ProjectCard({ url, link }) {
  
  return (
    <div className="bg-greyThm/50 rounded-3xl px-4 aspect-[${aspectRatio}]">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={url}
          alt="Project 01"
          className="w-full h-full object-cover"
        />
      </a>
    </div>
  );
}

export default ProjectCard;
