import React, { useContext } from "react";
import projects from "../../Context/Context";
import ProjectList from "../ProjectList/ProjectList";
import { Button, Divider, Drawer, List } from "@mui/material";
import "@fontsource/roboto/400.css";
import Container from "@mui/material/Container";

function Sidebar() {
  const { updatePreview } = useContext(projects);

  const openForm = function () {
    updatePreview("form");
  };

  return (
    <Container p={3}>
      <Button onClick={openForm} variant="contained">
        + Add New Project
      </Button>
      <Divider variant="middle" />
      <List>
        <ProjectList />
      </List>
    </Container>
  );
}

export default Sidebar;
