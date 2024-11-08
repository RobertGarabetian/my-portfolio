import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiCplusplus,
  SiUnity,
  SiCsharp,
  SiGo,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Technologies = () => {
  const techs = [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiPython, name: "Python" },
    { icon: SiPostgresql, name: "Postgresql" },
    { icon: SiCplusplus, name: "C++" },
    { icon: SiCsharp, name: "C#" },
    { icon: SiUnity, name: "Unity" },
    { icon: SiGo, name: "Go" },
    { icon: FaJava, name: "Java" },
  ];

  return (
    <div className="w-full h-full border border-white rounded-lg p-4 shadow-lg relative flex flex-col justify-center items-center">
      <div className="absolute top-0 right-0 p-5">
        <h3 className="text-white text-4xl font-medium">Technologies</h3>
      </div>{" "}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <tech.icon className="text-white text-4xl mb-2" />
            <span className="text-white text-sm">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
