// Sample project data - replace with real projects
import gymFitImage from "../assets/gymFit.png";
import youtubeCloneImage from "../assets/YouTube.jpg";

export const projectsData = {
  web: [
    {
      id: 1,
      title: "GymFit | Gym Management System",
      description:
        "A comprehensive gym management system platform featuring member management, workout tracking, and location services with real-time updates.",
      image: gymFitImage,
      link: "https://github.com/issam-aloui/Gym_Management_System",
      liveLink: "https://gym-management-system-1-2kke.onrender.com/",
      technologies: [
        "MongoDB",
        "Node.js",
        "Express.js",
        "Vanilla JS",
        "HTML",
        "CSS",
        "OpenStreet API",
        "OpenCage API",
        "Cloudinary API",
      ],
      category: "web",
    },
    {
      id: 2,
      title: "YouTube Clone | Video Streaming Platform",
      description:
        "A responsive YouTube clone featuring video browsing, search functionality, responsive design, and modern UI components with smooth animations and user interactions.",
      image: youtubeCloneImage,
      link: "https://github.com/issam-aloui/youtube-clone",
      liveLink: "https://issam-aloui.github.io/youtube-clone/",
      technologies: [
        "React",

        "Tailwind CSS",
        "Chakra UI",
        "JavaScript",
        "React Router",
      ],
      category: "web",
    },
  ],
  mobile: [],
  all: [],
};

// Combine all projects for 'all' category
projectsData.all = [...projectsData.web, ...projectsData.mobile];
