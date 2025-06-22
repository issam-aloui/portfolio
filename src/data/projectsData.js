// Sample project data - replace with real projects
export const projectsData = {
  web: [
    {
      id: 1,
      title: "GymFit | Gym Management System",
      description:
        "A comprehensive gym management system platform featuring member management, workout tracking, and location services with real-time updates.",
      image: "/src/assets/gymFit.png",
      link: "https://github.com/issam-aloui/Gym_Management_System",
      liveLink: null, // Demo not available
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
  ],
  mobile: [],
  all: [],
};

// Combine all projects for 'all' category
projectsData.all = [...projectsData.web, ...projectsData.mobile];
