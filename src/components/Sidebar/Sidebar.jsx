import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import ProjectForm from "../ProjectForm/ProjectForm";
import projects from "../../Context/Context";
import ProjectList from "../ProjectList/ProjectList";

function Sidebar() {
  const { projectValue, updateProjects, preview, updatePreview } =
    useContext(projects);

  const openForm = function () {
    updatePreview("form");
  };

  return (
    <div>
      <Button onClick={openForm}>+ Add New Project</Button>
      <ProjectList Projects={projectValue} />
    </div>
  );
}

export default Sidebar;