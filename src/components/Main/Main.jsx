import React, { useContext } from "react";
import projects from "../../Context/Context";
import ProjectForm from "../ProjectForm/ProjectForm";
import ProjectView from "../ProjectView/ProjectView";
import { Container } from "@mui/material";

function Main() {
  let { preview } = useContext(projects);

  if (preview === "form") {
    return (
      <Container maxWidth="sm">
        <ProjectForm />
      </Container>
    );
  }

  if (preview === "item") {
    return (
      <Container maxWidth="sm">
        <ProjectView />
      </Container>
    );
  }
  return <>you are in the main content</>;
}

export default Main;
