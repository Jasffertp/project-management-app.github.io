import React, { useContext, useState } from "react";
// import Button from "../Button/Button";
import projects from "../../Context/Context";
import ProjectList from "../ProjectList/ProjectList";
import { Button } from "@mui/material";
import "@fontsource/roboto/400.css";
import Container from "@mui/material/Container";

function Sidebar() {
  const { preview, updatePreview } = useContext(projects);

  const openForm = function () {
    updatePreview("form");
  };

  return (
    <Container>
      <Button onClick={openForm} variant="contained">
        + Add New Project
      </Button>
      <ProjectList />
    </Container>
  );
}

export default Sidebar;
