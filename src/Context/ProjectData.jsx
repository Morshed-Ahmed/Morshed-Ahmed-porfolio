import React, { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext();

const ProjectData = ({ children }) => {
  // const [data, setData] = useState([]);
  const [dat, setDat] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setDat(data);
        // data.map((dt) => setDat(dt));
      });
  }, []);
  const data = {
    projects: dat,
  };
  return (
    <ProjectContext.Provider value={data}>{children}</ProjectContext.Provider>
  );
};

export default ProjectData;
