import React, { useContext } from "react";
import projects from "../../Context/Context";
import ProjectForm from "../ProjectForm/ProjectForm";
import ProjectView from "../ProjectView/ProjectView";
import { Box, Container, Typography } from "@mui/material";

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
  return (
    <Box width={700}>
      <Typography variant="h3" fontWeight={700} marginBottom={2}>
        Welcome to the Project Management App
      </Typography>
      <Typography variant="subtitle1" marginBottom={3}>
        {" "}
        Created by: Jasffer T Padigdig
      </Typography>
      <Typography variant="body" marginBottom={3}>
        This is a project management app, this app allows the user to create a
        project along with a short description of the project and the target
        finish date of the project. This project is created using REACT and
        Material UI. This allows the user to create, read, update, and delete
        existing values using REACT. To begin with using the app, click the
        <span style={{ fontWeight: "Bold" }}> Add new project </span>
        button on the left or you can click a sample project,{" "}
        <span style={{ fontWeight: "Bold" }}>Finish React Course</span> to see
        how a project would look like.
      </Typography>
    </Box>
  );
}

export default Main;
