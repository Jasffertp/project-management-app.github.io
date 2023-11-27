import React, { useState } from "react";
import projects from "./Context/Context.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Main from "./components/Main/Main.jsx";
import Grid from "@mui/material/Grid";

function App() {
  const [projectValue, updateProjects] = useState([
    {
      id: 0,
      name: "Test Project 1",
      description: "A Short description",
      date: "11/22/2023",
      tasks: [],
      isActive: false,
    },
  ]);
  const [preview, updatePreview] = useState("");

  console.log(projectValue);

  return (
    <projects.Provider
      value={{ projectValue, updateProjects, preview, updatePreview }}
    >
      <h1 className="my-8 text-center text-5xl font-bold">Hello, Mom</h1>
      <Grid container spacing={3}>
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item>
          <Main />
        </Grid>
      </Grid>
    </projects.Provider>
  );
}

export default App;
