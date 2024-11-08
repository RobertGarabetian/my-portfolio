import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "RoadSpice",
      description:
        "Developed an AI travel planner at UC Berkeley's CalHacks 11.0, using Google Gemini 1.5 and Google Maps API for personalized route and stop recommendations.",
      link: "https://roadspice-iota.vercel.app",
    },
    {
      name: "TruckDocs",
      description:
        "Created DOT compliance software to streamline truck drivers' paperwork and compliance, using Next.js, Clerk, and Tailwind CSS for a simplified interface.",
      link: "https://truck-docs-app.vercel.app",
    },
    {
      name: "Project 3",
      description: "A brief description of Project3",
      link: "#",
    },
  ];

  return (
    <div className="w-full h-full rounded-lg shadow-lg border border-white p-4 relative flex flex-row justify-center items-center">
      <div className="absolute bottom-0 left-0 p-5">
        <h3 className="text-white text-4xl font-medium">Projects</h3>
      </div>{" "}
      <div className="grid grid-cols-3 gap-4 h-full w-full">
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all duration-200"
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.1 }}
          >
            <h4 className="text-white text-xl font-semibold mb-2">
              {project.name}
            </h4>
            <p className="text-white text-sm mb-2">{project.description}</p>
          </motion.a>
        ))}
      </div>{" "}
    </div>
  );
};

export default Projects;
