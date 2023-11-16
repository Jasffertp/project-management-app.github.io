import React, { useContext } from "react";
import projects from "../../Context/Context";
import ProjectForm from "../ProjectForm/ProjectForm";
import ProjectView from "../ProjectView/ProjectView";

function Main() {
  let { preview } = useContext(projects);

  if (preview === "form") {
    return <ProjectForm />;
  }

  if (preview === "item") {
    return <ProjectView />;
  }
  return <>you are in the main content</>;
}

export default Main;
