import React, { useContext } from "react";
import projects from "../../Context/Context";
import { Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";

function ProjectList() {
  const { projectValue, updateProjects, updatePreview } = useContext(projects);

  const showProject = (id) => {
    updateProjects((prevItems) => {
      return prevItems.map((project) => {
        if (project.id === id) {
          return { ...project, isActive: true };
        } else {
          return { ...project, isActive: false };
        }
      });
    });

    updatePreview("item");
  };

  if (projectValue.length !== 0) {
    return projectValue.map((el) => {
      return (
        <>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary={el.name}
                secondary={el.date}
                onClick={() => showProject(el.id)}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </>
      );
    });
  }

  return (
    <>
      <p>There are no projects</p>
    </>
  );
}

export default ProjectList;
