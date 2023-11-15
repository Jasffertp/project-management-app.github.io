import React, { useState } from "react";
import projects from "./Context/Context.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  const [projectValue, updateProjects] = useState([]);
  const [preview, updatePreview] = useState("");

  console.log(projectValue);

  return (
    <projects.Provider
      value={{ projectValue, updateProjects, preview, updatePreview }}
    >
      <h1 className="my-8 text-center text-5xl font-bold">Hello, Mom</h1>
      <Sidebar />
      <Main />
    </projects.Provider>
  );
}

export default App;
