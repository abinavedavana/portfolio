




import ProjectCard from "../components/ProjectCard";

function Project() {
  const projects = [
    {
      title: "Itinerary Design (ACO Algorithm)",
      description:
        "A travel itinerary planner built using Ant Colony Optimization to generate optimal travel routes. Developed with Flutter, Dart, Django, MySQL, and integrated sentiment analysis using TextBlob.",
      tech: ["Flutter", "Django", "MySQL", "JavaScript"],
      link: "https://github.com/ambilisoman/Itenerary-design",
    },
    {
      title: "Blood Donor Searching System",
      description:
        "A real-time blood donor finder application built using Flutter and Firebase. Helps users locate nearby donors based on blood group and location.",
      tech: ["Flutter", "Firebase"],
      link: "https://github.com/Midhun-Nk/BloodDonation",
    },
    {
      title: "Moody Dance Studio",
      description:
        "React Frontend Project Built a responsive frontend web application using React.js, translating a professional Figma design into a clean, user-friendly interface. Implemented reusable components and mobile-first layouts to deliver an engaging UI, demonstrating strong proficiency in React fundamentals and modern frontend development practices.",
      tech: ["HTML", "Tailwind Css","JS","React.js"],
      link: "https://github.com/abinavedavana/frontend-task",
    },
    {
      title: "ToDoList",
      description:
        "A simple To-Do List application built using JavaScript to add and delete daily tasks.",
      tech: ["HTML", "Tailwind Css","JS"],
      link: "https://github.com/abinavedavana/ToDoList",
    },
    {
      title: "Calculator",
      description:
        "A simple calculator built using JavaScript to perform basic arithmetic operations.",
      tech: ["HTML", "Tailwind Css","JS"],
      link: "https://github.com/abinavedavana/ToDoList",
    },
    {
      title: "Plant Website",
      description:
        "A clean and responsive plant showcase website built using HTML and Tailwind CSS.",
      tech: ["HTML", "Tailwind Css"],
      link: "https://github.com/abinavedavana/task-planty",
    },
    {
      title: "Food / Recipe Website",
      description:
        "A responsive food and recipe website created using HTML and Tailwind CSS.",
      tech: ["HTML", "Tailwind Css"],
      link: "https://github.com/abinavedavana/task-cheese",
    },
  ];

  return (
    <div id="projects" className="min-h-screen bg-gray-900 py-16 px-6 md:px-12 flex flex-col items-center">
      
      <h2 className="text-5xl font-extrabold text-blue-400 mb-4 text-center tracking-tight">
        My Projects
      </h2>
      <p className="text-gray-300 mb-12 max-w-2xl text-center text-lg">
        Here are some of the best projects I’ve built using modern technologies.
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex justify-center transition-transform duration-300 hover:-translate-y-2"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
