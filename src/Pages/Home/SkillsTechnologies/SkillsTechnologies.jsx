import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./SkillsTechnologies.css";

const skillsOne = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "TAILWIND CSS",
  "BOOTSTRAP",
  "MATERIAL UI",
  "STYLE COMPONENTS",
  "TANSTACK QUERY",
];
const skillsTwo = [
  "C/C++",
  "PYTHON",
  "DJANGO",
  "NODE JS",
  "EXPRESS JS",
  "SQL",
  "REST API",
  "MONGO DB",
  "SQLITE",
  "POSTGRESQL",
  "FIREBASE",
];
const skillsThree = [
  "GIT",
  "GITHUB",
  "VERCEL",
  "NETLIFY",
  "RENDER",
  "FIGMA",
  "DATA STRUCTURE AND ALGORITHM",
  "JWT",
  "NPM",
  "VS CODE",
];

const SkillsTechnologies = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false });
  return (
    <div id="about" className="bg-[#110D1E] text-white md:py-7 xs:py-16">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="w-4/5 mx-auto  mb-3 "
      >
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <button className="border border-[#252F45] rounded px-4 py-2 font-medium">
            Skills Technologies
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{ borderLeft: "3px solid #48494E", height: "50px" }}
          ></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ borderTop: "3px solid #48494E", width: "70%" }}></div>
        </div>
        <div style={{ width: "70%", margin: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ borderLeft: "3px solid #48494E", height: "50px" }}
            ></div>
            <div
              style={{
                borderLeft: "3px solid #48494E",
                marginLeft: "1px",
                height: "50px",
              }}
            ></div>
            <div
              style={{ borderLeft: "3px solid #48494E", height: "50px" }}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-2">
          <div
            style={{
              display: "flex",
              gap: "5px",
              flexWrap: "wrap",
              justifyContent: "start",
            }}
          >
            {skillsOne.map((skill) => (
              <div key={skill}>
                <div
                  style={{ padding: "2px" }}
                  className="border border-[#252F45]  rounded"
                >
                  <button className="rounded bt px-2 py-1 bg-[#252F45]  text-xs text-[#dddd] hover:text-[#f6f2f2] font-medium ">
                    {skill}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {skillsTwo.map((skill) => (
              <div key={skill}>
                <div
                  style={{ padding: "2px" }}
                  className="border border-[#252F45]  rounded"
                >
                  <button className="rounded bt px-2 py-1 bg-[#252F45]  text-xs text-[#dddd] hover:text-[#f6f2f2] c">
                    {skill}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "right",
            }}
          >
            {skillsThree.map((skill) => (
              <div key={skill}>
                <div
                  style={{ padding: "2px" }}
                  className="border border-[#252F45]  rounded"
                >
                  <button className="rounded bt px-2 py-1 bg-[#252F45]  text-xs text-[#dddd] hover:text-[#f6f2f2] font-medium">
                    {skill}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsTechnologies;
