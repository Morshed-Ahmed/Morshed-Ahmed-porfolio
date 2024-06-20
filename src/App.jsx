import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import ProjectData from "./Context/ProjectData";
import "./index.css";

const App = () => {
  return (
    <div>
      <ProjectData>
        <RouterProvider router={router} />
      </ProjectData>
    </div>
  );
};

export default App;
