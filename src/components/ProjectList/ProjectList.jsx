import React, { useContext } from "react";
import projects from "../../Context/Context";
import Button from "../Button/Button";

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
        <div key={el.id} onClick={() => showProject(el.id)}>
          {el.name}
        </div>
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
