import { ArcherContainer, ArcherElement } from "react-archer";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "NEXT JS",
      "ZUSTAND",
      "TAILWIND CSS",
      "FRAMER MOTION",
      "DOM",
      "UNIT TEST",
      "PERFORMANCE OPTIMIZE",
      "SSR",
    ],
  },
  {
    category: "Backend",
    items: [
      "NODE",
      "BUN",
      "EXPRESS",
      "REST API",
      "ZOD VALIDATION",
      "JWT/OAUTH",
      "SQL",
      "POSTGRES",
      "PRISMA ORM",
      "DB MODELING",
      "STRIPE PAYMENTS",
    ],
  },
  {
    category: "Others",
    items: [
      "JAVASCRIPT",
      "TYPESCRIPT",
      "PYTHON",
      "GO",
      "REACT NATIVE",
      "GIT",
      "GITHUB",
      "LINUX",
      "WORDPRESS",
      "VPS",
      "VERCEL",
      "UX/UI DESIGN",
      "PRODUCT DESIGN",
      "FIGMA",
      "ADOBE XD",
      "WIREFRAME",
    ],
  },
];

const SkillSection = ({ category, items, id }) => (
  <ArcherElement
    id={id}
    relations={[
      {
        targetId: "my-skills",
        targetAnchor: "top",
        sourceAnchor: "bottom",
        style: { strokeColor: "white", strokeWidth: 2 },
      },
    ]}
  >
    <div className="skill-section mb-8 relative">
      <h2 className="text-2xl text-white mb-4">{category}</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-blue-600 rounded text-white text-center"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  </ArcherElement>
);

const SkillsTechnologies = () => {
  return (
    <ArcherContainer strokeColor="white">
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl relative">
          <ArcherElement id="my-skills">
            <h1 className="text-4xl font-bold text-white text-center mb-8">
              MY SKILLS
            </h1>
          </ArcherElement>
          {skills.map((skill, index) => (
            <SkillSection
              key={index}
              category={skill.category}
              items={skill.items}
              id={`skill-${index}`}
            />
          ))}
        </div>
      </div>
    </ArcherContainer>
  );
};

export default SkillsTechnologies;
