import React, { useState } from "react";
import projects from "./Context/Context.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Main from "./components/Main/Main.jsx";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

function App() {
  const [projectValue, updateProjects] = useState([
    {
      id: 0,
      name: "Finish React Course",
      description:
        "To finish the REACT course in udemy and have the necessary skills needed for a react developer",
      date: "11/22/2023",
      tasks: [
        "Finish this project",
        "Move to the next section of the course",
        "Finish the course",
        "Take a course on back-end development using Java Spring",
      ],
      isActive: false,
    },
  ]);
  const [preview, updatePreview] = useState("");

  console.log(projectValue);

  return (
    <projects.Provider
      value={{ projectValue, updateProjects, preview, updatePreview }}
    >
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello, Mom</h1> */}
      <Box marginBottom={3}></Box>
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
